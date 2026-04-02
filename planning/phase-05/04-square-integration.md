# Square Integration

**Phase 5 - Step 4**  
**Estimated Time:** 6-8 hours  
**Last Updated:** March 12, 2026

---

## 🎯 Objectives

By the end of this guide, you will have:

- ✅ Square API client configured
- ✅ Catalog API integration (products, categories, variants)
- ✅ Product listing pages displaying Square data
- ✅ Product detail pages with variants
- ✅ Inventory status handling
- ✅ Error handling and retries

---

## 📋 Step 1: Set Up Square Client

### Install Square SDK

```bash
npm install square
```

### Create Square Client Utility

```typescript
// src/lib/square/client.ts
import { Client, Environment } from 'square';

const squareClient = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN!,
  environment: process.env.SQUARE_ENV === 'production' 
    ? Environment.Production 
    : Environment.Sandbox,
});

export const catalogApi = squareClient.catalogApi;
export const ordersApi = squareClient.ordersApi;
export const paymentsApi = squareClient.paymentsApi;

export default squareClient;
```

---

## 📋 Step 2: Fetch Catalog Data

### Create Catalog Service

```typescript
// src/lib/square/catalog.ts
import { catalogApi } from './client';
import { CatalogObject } from 'square';

export async function fetchCatalog() {
  try {
    const response = await catalogApi.listCatalog(undefined, 'ITEM');
    return response.result.objects || [];
  } catch (error) {
    console.error('Error fetching catalog:', error);
    throw new Error('Failed to fetch catalog');
  }
}

export async function fetchCatalogItem(itemId: string) {
  try {
    const response = await catalogApi.retrieveCatalogObject(itemId, true);
    return response.result.object;
  } catch (error) {
    console.error('Error fetching catalog item:', error);
    throw new Error('Failed to fetch item');
  }
}

export async function searchCatalog(query: string) {
  try {
    const response = await catalogApi.searchCatalogItems({
      textFilter: query,
    });
    return response.result.items || [];
  } catch (error) {
    console.error('Error searching catalog:', error);
    throw new Error('Failed to search catalog');
  }
}
```

---

## 📋 Step 3: Normalize Square Data

### Create Data Transformation Utilities

```typescript
// src/lib/square/normalize.ts
import { CatalogObject } from 'square';
import { Product, ProductVariant } from '@/types/product';

export function normalizeProduct(catalogItem: CatalogObject): Product | null {
  if (!catalogItem.itemData) return null;

  const itemData = catalogItem.itemData;
  const variations = itemData.variations || [];

  return {
    id: catalogItem.id,
    name: itemData.name || 'Unnamed Product',
    description: itemData.description || '',
    price: getLowestPrice(variations),
    images: getProductImages(catalogItem),
    category: getCategoryName(itemData.categoryId),
    variants: normalizeVariants(variations),
    inStock: hasAvailableStock(variations),
    slug: createSlug(itemData.name || ''),
  };
}

export function normalizeVariants(
  variations: CatalogObject[]
): ProductVariant[] {
  return variations.map((variation) => {
    const varData = variation.itemVariationData;
    return {
      id: variation.id,
      name: varData?.name || 'Default',
      price: Number(varData?.priceMoney?.amount || 0) / 100,
      inStock: !varData?.itemOptionValues?.some(
        (opt) => opt.itemOptionValueData?.name === 'Out of Stock'
      ),
    };
  });
}

function getLowestPrice(variations: CatalogObject[]): number {
  const prices = variations
    .map((v) => Number(v.itemVariationData?.priceMoney?.amount || 0))
    .filter((p) => p > 0);
  
  return prices.length > 0 ? Math.min(...prices) / 100 : 0;
}

function getProductImages(catalogItem: CatalogObject): string[] {
  const imageIds = catalogItem.itemData?.imageIds || [];
  // Note: You'll need to fetch actual image URLs from Square
  // This is a placeholder - implement based on your image strategy
  return imageIds.map((id) => `/api/images/${id}`);
}

function getCategoryName(categoryId?: string): string {
  // Implement category lookup
  // You may want to cache categories separately
  return categoryId || 'Uncategorized';
}

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function hasAvailableStock(variations: CatalogObject[]): boolean {
  return variations.some((v) => {
    const varData = v.itemVariationData;
    return !varData?.itemOptionValues?.some(
      (opt) => opt.itemOptionValueData?.name === 'Out of Stock'
    );
  });
}
```

---

## 📋 Step 4: Create Product Listing Page

### Shop Page (Server Component)

```typescript
// src/app/shop/page.tsx
import { fetchCatalog } from '@/lib/square/catalog';
import { normalizeProduct } from '@/lib/square/normalize';
import { ProductGrid } from '@/components/product/product-grid';

export const metadata = {
  title: 'Shop - Sacred Portal Wellness',
  description: 'Browse our collection of yoni steaming products and wellness items',
};

export default async function ShopPage() {
  const catalogItems = await fetchCatalog();
  const products = catalogItems
    .map(normalizeProduct)
    .filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-h1 font-display mb-8">Shop</h1>
      <ProductGrid products={products} />
    </div>
  );
}
```

### Product Grid Component

```typescript
// src/components/product/product-grid.tsx
import { Product } from '@/types/product';
import { ProductCard } from './product-card';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-body-lg text-charcoal-600">
          No products available at this time.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### Product Card Component

```typescript
// src/components/product/product-card.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="relative aspect-square">
            <Image
              src={product.images[0] || '/images/placeholder.png'}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg"
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-charcoal-900/50 flex items-center justify-center">
                <span className="bg-white px-4 py-2 rounded-md font-medium">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-h6 font-display mb-2">{product.name}</h3>
          <p className="text-body-sm text-charcoal-600 line-clamp-2 mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-h5 font-semibold text-forest-800">
              {formatPrice(product.price)}
            </span>
            {product.variants && product.variants.length > 1 && (
              <span className="text-body-sm text-charcoal-500">
                {product.variants.length} options
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
```

---

## 📋 Step 5: Create Product Detail Page

### Product Detail Page (Dynamic Route)

```typescript
// src/app/product/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { fetchCatalog } from '@/lib/square/catalog';
import { normalizeProduct } from '@/lib/square/normalize';
import { ProductDetail } from '@/components/product/product-detail';

interface ProductPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProductPageProps) {
  const catalogItems = await fetchCatalog();
  const product = catalogItems
    .map(normalizeProduct)
    .find((p) => p?.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} - Sacred Portal Wellness`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const catalogItems = await fetchCatalog();
  const product = catalogItems
    .map(normalizeProduct)
    .find((p) => p?.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <ProductDetail product={product} />
    </div>
  );
}
```

### Product Detail Component

```typescript
// src/components/product/product-detail.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { VariantSelector } from './variant-selector';
import { useCart } from '@/lib/cart/context';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.[0]?.id
  );
  const { addItem } = useCart();

  const currentVariant = product.variants?.find(
    (v) => v.id === selectedVariant
  );

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      variantId: selectedVariant,
      name: product.name,
      price: currentVariant?.price || product.price,
      quantity: 1,
      image: product.images[0],
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Images */}
      <div>
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={product.images[0] || '/images/placeholder.png'}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-h1 font-display mb-4">{product.name}</h1>
        <p className="text-h3 font-semibold text-forest-800 mb-6">
          {formatPrice(currentVariant?.price || product.price)}
        </p>

        <div className="prose prose-lg mb-8">
          <p>{product.description}</p>
        </div>

        {/* Variant Selector */}
        {product.variants && product.variants.length > 1 && (
          <div className="mb-6">
            <VariantSelector
              variants={product.variants}
              selected={selectedVariant}
              onChange={setSelectedVariant}
            />
          </div>
        )}

        {/* Add to Cart */}
        <Button
          size="lg"
          onClick={handleAddToCart}
          disabled={!product.inStock || !currentVariant?.inStock}
          className="w-full"
        >
          {!product.inStock || !currentVariant?.inStock
            ? 'Out of Stock'
            : 'Add to Cart'}
        </Button>

        {/* Product Details */}
        <div className="mt-8 border-t border-charcoal-200 pt-8">
          <h3 className="text-h5 font-display mb-4">Product Details</h3>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="text-charcoal-600">Category</dt>
              <dd className="font-medium">{product.category}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-charcoal-600">Availability</dt>
              <dd className="font-medium">
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
```

### Variant Selector Component

```typescript
// src/components/product/variant-selector.tsx
import { ProductVariant } from '@/types/product';
import { cn } from '@/lib/utils/cn';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selected?: string;
  onChange: (variantId: string) => void;
}

export function VariantSelector({
  variants,
  selected,
  onChange,
}: VariantSelectorProps) {
  return (
    <div>
      <label className="block text-body font-medium mb-3">
        Select Option
      </label>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => onChange(variant.id)}
            disabled={!variant.inStock}
            className={cn(
              'px-4 py-2 rounded-md border-2 transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-800',
              selected === variant.id
                ? 'border-forest-800 bg-forest-50 text-forest-900'
                : 'border-charcoal-200 hover:border-charcoal-400',
              !variant.inStock && 'opacity-50 cursor-not-allowed'
            )}
          >
            {variant.name}
            {!variant.inStock && ' (Out of Stock)'}
          </button>
        ))}
      </div>
    </div>
  );
}
```

---

## 📋 Step 6: Handle Images

### Create Image API Route

```typescript
// src/app/api/images/[imageId]/route.ts
import { catalogApi } from '@/lib/square/client';

export async function GET(
  request: Request,
  { params }: { params: { imageId: string } }
) {
  try {
    const response = await catalogApi.retrieveCatalogObject(params.imageId);
    const imageData = response.result.object?.imageData;

    if (!imageData?.url) {
      return new Response('Image not found', { status: 404 });
    }

    // Redirect to Square's image URL
    return Response.redirect(imageData.url);
  } catch (error) {
    console.error('Error fetching image:', error);
    return new Response('Error fetching image', { status: 500 });
  }
}
```

---

## 📋 Step 7: Add Caching Strategy

### Implement Revalidation

```typescript
// src/app/shop/page.tsx
export const revalidate = 3600; // Revalidate every hour

export default async function ShopPage() {
  // ... existing code
}
```

### Create Cached Catalog Fetch

```typescript
// src/lib/square/catalog.ts
import { unstable_cache } from 'next/cache';

export const getCachedCatalog = unstable_cache(
  async () => {
    return await fetchCatalog();
  },
  ['square-catalog'],
  {
    revalidate: 3600, // 1 hour
    tags: ['catalog'],
  }
);
```

---

## 📋 Step 8: Error Handling

### Create Error Boundary

```typescript
// src/app/shop/error.tsx
'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function ShopError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Shop page error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h2 className="text-h2 font-display mb-4">Something went wrong!</h2>
      <p className="text-body-lg text-charcoal-600 mb-8">
        We couldn't load the products. Please try again.
      </p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
```

---

## ✅ Implementation Checklist

- [ ] Square SDK installed
- [ ] Square client configured
- [ ] Catalog fetch functions created
- [ ] Data normalization utilities implemented
- [ ] Shop page created
- [ ] Product grid component created
- [ ] Product card component created
- [ ] Product detail page created
- [ ] Variant selector implemented
- [ ] Image handling configured
- [ ] Caching strategy implemented
- [ ] Error boundaries added
- [ ] Test with Square sandbox data

---

## 🎯 Next Steps

Once Square integration is complete:

1. ✅ Test product listing and detail pages
2. ✅ Verify images load correctly
3. ✅ Commit changes to Git
4. ✅ Update PHASE-05-STATUS.md
5. ✅ Move to **[05-cart-checkout.md](./05-cart-checkout.md)**

---

**Square Integration Complete!** Ready to build cart and checkout. 🛒

**Last Updated:** March 12, 2026
