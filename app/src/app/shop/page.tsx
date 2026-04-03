import Image from 'next/image';
import { ProductGrid } from './product-grid';
import squareClient from '@/lib/square/client';
import type { CatalogObject } from 'square';

export const metadata = {
  title: 'Sacred Portal Apothecary - Sacred Portal Wellness',
  description: 'Browse our collection of yoni steaming products and wellness items',
};

export const dynamic = 'force-dynamic';

async function getProducts() {
  try {
    const response = await squareClient.catalog.searchItems({
      enabledLocationIds: [process.env.SQUARE_LOCATION_ID || ''],
      productTypes: ['REGULAR'],
    });

    const items = (response.items || []) as CatalogObject.Item[];

    return items
      .filter((item) => !item.itemData?.isArchived)
      .map((item) => {
        const data = item.itemData;
        const variations = (data?.variations || []) as CatalogObject.ItemVariation[];
        const firstVariation = variations[0];
        const priceMoney = firstVariation?.itemVariationData?.priceMoney;
        const images: string[] = data?.ecomImageUris || [];

        return {
          id: item.id,
          name: data?.name || '',
          description: data?.descriptionPlaintext || data?.description || '',
          price: priceMoney ? Number(priceMoney.amount) / 100 : 0,
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
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/images/logo-apothecary.png"
          alt="Sacred Portal Apothecary"
          width={200}
          height={200}
          className="mb-6"
        />
        <h1 className="text-h1 font-display mb-4">Sacred Portal Apothecary</h1>
        <p className="text-body-lg text-charcoal-600 dark:text-charcoal-300">
          Carefully curated herbs and wellness products for your sacred practice
        </p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-body-lg text-charcoal-500 dark:text-charcoal-400 mb-2">
            Products are loading soon.
          </p>
          <p className="text-body text-charcoal-400 dark:text-charcoal-500">
            Please check back shortly or contact us for product inquiries.
          </p>
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}
