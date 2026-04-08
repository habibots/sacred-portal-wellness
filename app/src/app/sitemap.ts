import type { MetadataRoute } from 'next';
import { getProducts } from '@/lib/square/products';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sacredportalwellness.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/shop', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/coaching', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/coaching/offer', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/testimonials', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/policies/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/policies/returns', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/policies/disclaimer', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Pull current products from Square so each one gets its own sitemap entry.
  // If Square is unreachable we still return the static routes rather than
  // failing the entire sitemap.
  let productEntries: MetadataRoute.Sitemap = [];
  try {
    const products = await getProducts();
    productEntries = products.map((product) => ({
      url: `${baseUrl}/shop/${product.slug}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error('Sitemap: failed to fetch products from Square:', error);
  }

  return [...staticEntries, ...productEntries];
}
