import Image from 'next/image';
import { ProductGrid } from './product-grid';
import { getProducts } from '@/lib/square/products';

export const metadata = {
  title: 'Sacred Portal Apothecary - Sacred Portal Wellness',
  description: 'Browse our collection of yoni steaming products and wellness items',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ShopPage() {
  // Intentionally NOT wrapped in try/catch — if Square fails we want the
  // error to surface (and show the Next.js error boundary) rather than
  // silently rendering an empty shop, which can get cached and look like
  // "Products are loading soon" forever.
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
            No products are currently available.
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
