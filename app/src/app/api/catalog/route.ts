import { NextResponse } from 'next/server';
import squareClient, { SQUARE_LOCATION_ID } from '@/lib/square/client';
import type { CatalogObject } from 'square';

export async function GET() {
  try {
    const response = await squareClient.catalog.searchItems({
      enabledLocationIds: [SQUARE_LOCATION_ID],
      productTypes: ['REGULAR'],
    });

    const items = (response.items || []) as CatalogObject.Item[];

    const products = items
      .filter((item) => !item.itemData?.isArchived)
      .map((item) => {
        const data = item.itemData;
        const variations = (data?.variations || []) as CatalogObject.ItemVariation[];
        const firstVariation = variations[0];
        const priceMoney = firstVariation?.itemVariationData?.priceMoney;

        // ecomImageUris are directly accessible URLs hosted by Square
        const images: string[] = data?.ecomImageUris || [];

        return {
          id: item.id,
          name: data?.name || '',
          description: data?.descriptionPlaintext || data?.description || '',
          price: priceMoney
            ? Number(priceMoney.amount) / 100
            : 0,
          images,
          category: data?.categoryId || '',
          inStock: true,
          slug: (data?.name || '')
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, ''),
          variants: variations.map((v) => ({
            id: v.id,
            name: v.itemVariationData?.name || '',
            price: v.itemVariationData?.priceMoney
              ? Number(v.itemVariationData.priceMoney.amount) / 100
              : 0,
            inStock: true,
          })),
        };
      });

    return NextResponse.json(
      { products },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch (error) {
    console.error('Square catalog error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
