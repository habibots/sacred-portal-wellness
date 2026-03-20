import { ProductGrid } from './product-grid';

export const metadata = {
  title: 'Shop - Sacred Portal Wellness',
  description: 'Browse our collection of yoni steaming products and wellness items',
};

interface ProductFromAPI {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inStock: boolean;
  slug: string;
  variants: { id: string; name: string; price: number; inStock: boolean }[];
}

async function getProducts(): Promise<ProductFromAPI[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/catalog`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.products || [];
  } catch {
    return [];
  }
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-h1 font-display mb-4">Shop</h1>
      <p className="text-body-lg text-charcoal-600 mb-8">
        Carefully curated herbs and wellness products for your sacred practice
      </p>

      {products.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-body-lg text-charcoal-500 mb-2">
            Products are loading soon.
          </p>
          <p className="text-body text-charcoal-400">
            Please check back shortly or contact us for product inquiries.
          </p>
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}
