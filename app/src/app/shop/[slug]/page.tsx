import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getProductBySlug } from '@/lib/square/products';
import { formatPrice } from '@/lib/utils/format';
import { AddToCartButton } from './add-to-cart-button';

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
        <div className="space-y-4">
          {product.images.length > 0 ? (
            <>
              <div className="relative aspect-square bg-cream-600 dark:bg-charcoal-700 rounded-lg overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={`${product.name} — main product image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                  priority
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.slice(1, 5).map((img, i) => (
                    <div
                      key={img}
                      className="relative aspect-square bg-cream-600 dark:bg-charcoal-700 rounded-md overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${product.name} — additional view ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 25vw, 12vw"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="relative aspect-square bg-cream-600 dark:bg-charcoal-700 rounded-lg flex items-center justify-center">
              <span className="text-charcoal-400">No image available</span>
            </div>
          )}
        </div>

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
