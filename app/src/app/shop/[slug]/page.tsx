import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getProductBySlug } from '@/lib/square/products';
import { formatPrice } from '@/lib/utils/format';
import { AddToCartButton } from './add-to-cart-button';
import { ProductImageGallery } from '@/components/product/product-image-gallery';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sacredportalwellness.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found - Sacred Portal Wellness',
    };
  }

  const description =
    product.description.slice(0, 160) ||
    `${product.name} from Sacred Portal Wellness — small batch herbal medicine.`;

  return {
    title: `${product.name} - Sacred Portal Apothecary`,
    description,
    openGraph: {
      title: product.name,
      description,
      url: `${SITE_URL}/shop/${product.slug}`,
      type: 'website',
      images: product.images[0]
        ? [{ url: product.images[0], alt: product.name }]
        : undefined,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const variant = product.variants[0];
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    sku: variant?.id ?? product.id,
    brand: {
      '@type': 'Brand',
      name: 'Sacred Portal Wellness',
    },
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/shop/${product.slug}`,
      priceCurrency: 'USD',
      price: product.price.toFixed(2),
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-body-sm text-charcoal-600 dark:text-charcoal-400">
        <Link href="/shop" className="hover:text-forest-800 dark:hover:text-forest-400">
          ← Back to Sacred Portal Apothecary
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image gallery */}
        <ProductImageGallery images={product.images} name={product.name} />

        {/* Product details */}
        <div>
          <h1 className="text-h1 font-display mb-4">{product.name}</h1>
          <p className="text-h3 font-semibold text-forest-800 dark:text-forest-400 mb-6">
            {formatPrice(product.price)}
          </p>

          {product.description && (
            <div className="prose prose-lg dark:prose-invert mb-8 text-body text-charcoal-700 dark:text-cream-700">
              {product.description.split('\n').map((line, i) =>
                line.trim() ? (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ) : (
                  <br key={i} />
                )
              )}
            </div>
          )}

          <AddToCartButton
            productId={product.id}
            variantId={variant?.id}
            name={product.name}
            price={variant?.price ?? product.price}
            image={product.images[0]}
            inStock={product.inStock}
          />
        </div>
      </div>
    </div>
  );
}
