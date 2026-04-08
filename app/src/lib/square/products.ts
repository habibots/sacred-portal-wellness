import squareClient from './client';
import type { CatalogObject } from 'square';

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  inStock: boolean;
  slug: string;
  variants: ProductVariant[];
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Defense-in-depth: only render product images served from known-good
// Square hostnames. If Square's catalog were ever populated with a malicious
// image URL, the browser would still load it and could leak referrer/visit
// data to an attacker-controlled server. Restricting to this allowlist
// blocks that vector.
const ALLOWED_IMAGE_HOSTS = new Set([
  'items-images-production.s3.us-west-2.amazonaws.com',
  'items-images-sandbox.s3.us-west-2.amazonaws.com',
  'sacredportalwellness.square.site',
]);

function isAllowedImageUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && ALLOWED_IMAGE_HOSTS.has(parsed.hostname);
  } catch {
    return false;
  }
}

/**
 * Fetches the live product catalog from Square. Used by the shop list, the
 * individual product detail pages, and the sitemap. Errors propagate to the
 * caller — do not swallow them, or empty pages may end up cached.
 */
export async function getProducts(): Promise<Product[]> {
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
      const images: string[] = (data?.ecomImageUris || []).filter(isAllowedImageUrl);

      return {
        id: item.id,
        name: data?.name || '',
        description: data?.descriptionPlaintext || data?.description || '',
        price: priceMoney ? Number(priceMoney.amount) / 100 : 0,
        images,
        category: data?.categoryId || '',
        inStock: true,
        slug: slugify(data?.name || ''),
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
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) ?? null;
}
