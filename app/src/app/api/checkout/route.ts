import { NextRequest, NextResponse } from 'next/server';
import squareClient, { SQUARE_LOCATION_ID } from '@/lib/square/client';
import type { CatalogObject } from 'square';
import { randomUUID } from 'crypto';
import { CheckoutRequestSchema, sanitizeString } from '@/lib/validation/schemas';
import { isAllowedOrigin } from '@/lib/security/origin';

export async function POST(request: NextRequest) {
  // CSRF defense: only accept requests from our own origin.
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  try {
    const body = await request.json();

    // Validate input with Zod
    const parsed = CheckoutRequestSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid checkout data', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { items, shippingCost } = parsed.data;

    // Sanitize item names
    const sanitizedItems = items.map((item) => ({
      ...item,
      name: sanitizeString(item.name),
    }));

    // Server-side price verification: fetch actual prices from Square catalog
    const objectIds = sanitizedItems.map((item) => item.variantId || item.productId);
    const catalogResponse = await squareClient.catalog.batchGet({ objectIds });
    const catalogObjects = catalogResponse.objects || [];

    // Build a price lookup: objectId -> price in cents
    const priceLookup = new Map<string, bigint>();
    for (const obj of catalogObjects) {
      if (obj.type === 'ITEM_VARIATION') {
        const variation = obj as CatalogObject.ItemVariation;
        if (variation.itemVariationData?.priceMoney?.amount != null) {
          priceLookup.set(obj.id, variation.itemVariationData.priceMoney.amount);
        }
      } else if (obj.type === 'ITEM') {
        const item = obj as CatalogObject.Item;
        const firstVariation = item.itemData?.variations?.[0] as CatalogObject.ItemVariation | undefined;
        if (firstVariation?.itemVariationData?.priceMoney?.amount != null) {
          priceLookup.set(obj.id, firstVariation.itemVariationData.priceMoney.amount);
        }
      }
    }

    // Verify each item's price matches the catalog
    for (const item of sanitizedItems) {
      const lookupId = item.variantId || item.productId;
      const catalogPriceCents = priceLookup.get(lookupId);

      if (catalogPriceCents == null) {
        return NextResponse.json(
          { error: `Product not found: ${item.name}. Please refresh and try again.` },
          { status: 400 }
        );
      }

      const clientPriceCents = BigInt(Math.round(item.price * 100));
      if (clientPriceCents !== catalogPriceCents) {
        return NextResponse.json(
          { error: `Price has changed for ${item.name}. Please refresh and try again.` },
          { status: 400 }
        );
      }
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
      console.error('NEXT_PUBLIC_SITE_URL is not set; refusing to create checkout');
      return NextResponse.json(
        { error: 'Server is misconfigured. Please contact support.' },
        { status: 500 }
      );
    }

    // Build line items using server-verified prices
    const lineItems = sanitizedItems.map((item) => {
      const lookupId = item.variantId || item.productId;
      const verifiedPriceCents = priceLookup.get(lookupId)!;
      return {
        name: item.name,
        quantity: String(item.quantity),
        basePriceMoney: {
          amount: verifiedPriceCents,
          currency: 'USD' as const,
        },
      };
    });

    // Add shipping as a line item if applicable
    if (shippingCost > 0) {
      lineItems.push({
        name: 'Shipping',
        quantity: '1',
        basePriceMoney: {
          amount: BigInt(Math.round(shippingCost * 100)),
          currency: 'USD' as const,
        },
      });
    }

    // Create a Square payment link (hosted checkout)
    const result = await squareClient.checkout.paymentLinks.create({
      idempotencyKey: randomUUID(),
      order: {
        locationId: SQUARE_LOCATION_ID,
        lineItems,
      },
      checkoutOptions: {
        redirectUrl: `${siteUrl}/checkout/success`,
        askForShippingAddress: true,
      },
    });

    const checkoutUrl = result.paymentLink?.url;

    if (!checkoutUrl) {
      throw new Error('No checkout URL returned from Square');
    }

    return NextResponse.json({ checkoutUrl });
  } catch (error) {
    console.error('Square checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
