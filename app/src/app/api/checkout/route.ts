import { NextRequest, NextResponse } from 'next/server';
import squareClient from '@/lib/square/client';
import { randomUUID } from 'crypto';

interface CheckoutItem {
  productId: string;
  variantId?: string;
  name: string;
  price: number;
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { items, shippingCost } = body as {
      items: CheckoutItem[];
      shippingCost: number;
    };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'No items in cart' },
        { status: 400 }
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    // Build line items for Square checkout
    const lineItems = items.map((item) => ({
      name: item.name,
      quantity: String(item.quantity),
      basePriceMoney: {
        amount: BigInt(Math.round(item.price * 100)),
        currency: 'USD' as const,
      },
    }));

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
        locationId: process.env.SQUARE_LOCATION_ID || '',
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
