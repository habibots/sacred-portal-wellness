# Performance Optimization

**Phase 5 - Step 7**  
**Estimated Time:** 3-4 hours  
**Last Updated:** March 12, 2026

---

## 🎯 Performance Goals

Target Lighthouse scores (all categories):
- **Performance:** 90+
- **Accessibility:** 90+
- **Best Practices:** 90+
- **SEO:** 90+

Core Web Vitals targets:
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

---

## 📋 Step 1: Image Optimization

### Use Next.js Image Component

```tsx
// Always use next/image instead of <img>
import Image from 'next/image';

// ✅ Good
<Image
  src="/images/product.jpg"
  alt="Product name"
  width={600}
  height={600}
  priority // For above-the-fold images
/>

// ❌ Bad
<img src="/images/product.jpg" alt="Product name" />
```

### Configure Image Domains

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'square-catalog-sandbox.s3.amazonaws.com',
      'square-catalog-production.s3.amazonaws.com',
    ],
    formats: ['image/webp', 'image/avif'],
  },
};

module.exports = nextConfig;
```

### Implement Responsive Images

```tsx
// src/components/product/product-image.tsx
import Image from 'next/image';

interface ProductImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export function ProductImage({ src, alt, priority = false }: ProductImageProps) {
  return (
    <div className="relative aspect-square">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority={priority}
        quality={85}
      />
    </div>
  );
}
```

### Add Image Placeholders

```tsx
// Use blur placeholders for better UX
<Image
  src={product.image}
  alt={product.name}
  fill
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Generate with plaiceholder
/>
```

---

## 📋 Step 2: Font Optimization

### Preload Critical Fonts

```tsx
// src/app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Prevent FOIT (Flash of Invisible Text)
  preload: true,
  variable: '--font-inter',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Self-Host Custom Fonts

```css
/* src/styles/fonts.css */
@font-face {
  font-family: 'Cinzel Decorative';
  src: url('/fonts/CinzelDecorative-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

## 📋 Step 3: Code Splitting & Lazy Loading

### Dynamic Imports for Heavy Components

```tsx
// Lazy load cart drawer (not needed on initial page load)
import dynamic from 'next/dynamic';

const CartDrawer = dynamic(() => import('@/components/cart/cart-drawer').then(mod => ({ default: mod.CartDrawer })), {
  ssr: false,
  loading: () => <div>Loading cart...</div>,
});
```

### Lazy Load Below-the-Fold Content

```tsx
'use client';

import { lazy, Suspense } from 'react';

const ProductReviews = lazy(() => import('./product-reviews'));

export function ProductDetail({ product }) {
  return (
    <div>
      {/* Above the fold content */}
      <ProductInfo product={product} />
      
      {/* Below the fold - lazy loaded */}
      <Suspense fallback={<div>Loading reviews...</div>}>
        <ProductReviews productId={product.id} />
      </Suspense>
    </div>
  );
}
```

---

## 📋 Step 4: Caching Strategy

### Configure Route Segment Config

```tsx
// src/app/shop/page.tsx
export const revalidate = 3600; // Revalidate every hour
export const dynamic = 'force-static'; // Force static generation

export default async function ShopPage() {
  // Page content
}
```

### Use Unstable Cache for API Calls

```typescript
// src/lib/square/catalog.ts
import { unstable_cache } from 'next/cache';

export const getCachedCatalog = unstable_cache(
  async () => {
    return await fetchCatalog();
  },
  ['square-catalog'],
  {
    revalidate: 3600,
    tags: ['catalog'],
  }
);
```

### Implement On-Demand Revalidation

```typescript
// src/app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  revalidateTag('catalog');
  
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
```

---

## 📋 Step 5: Bundle Optimization

### Analyze Bundle Size

```bash
# Install bundle analyzer
npm install -D @next/bundle-analyzer

# Update next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Run analysis
ANALYZE=true npm run build
```

### Remove Unused Dependencies

```bash
# Check for unused dependencies
npx depcheck

# Remove unused packages
npm uninstall [package-name]
```

### Tree-Shake Imports

```typescript
// ✅ Good - Import only what you need
import { Button } from '@/components/ui/button';

// ❌ Bad - Imports entire library
import * as Components from '@/components/ui';
```

---

## 📋 Step 6: Runtime Performance

### Memoize Expensive Calculations

```tsx
'use client';

import { useMemo } from 'react';

export function ProductGrid({ products }) {
  const sortedProducts = useMemo(() => {
    return products.sort((a, b) => a.price - b.price);
  }, [products]);

  return (
    <div>
      {sortedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### Use React.memo for Pure Components

```tsx
import { memo } from 'react';

export const ProductCard = memo(function ProductCard({ product }) {
  return (
    <div>
      {/* Component content */}
    </div>
  );
});
```

### Debounce Search Input

```tsx
'use client';

import { useState, useCallback } from 'react';
import { debounce } from 'lodash';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      // Perform search
      console.log('Searching for:', value);
    }, 300),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return <input value={query} onChange={handleChange} />;
}
```

---

## 📋 Step 7: Reduce Layout Shift (CLS)

### Reserve Space for Images

```tsx
// Always specify width and height
<Image
  src="/product.jpg"
  alt="Product"
  width={600}
  height={600}
/>

// Or use aspect-ratio
<div className="relative aspect-square">
  <Image src="/product.jpg" alt="Product" fill />
</div>
```

### Add Skeleton Loaders

```tsx
// src/components/ui/skeleton.tsx
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-charcoal-200',
        className
      )}
    />
  );
}

// Usage
<Skeleton className="h-64 w-full" />
```

### Prevent Font Layout Shift

```css
/* Use font-display: swap and size-adjust */
@font-face {
  font-family: 'Cinzel Decorative';
  src: url('/fonts/CinzelDecorative-Regular.woff2') format('woff2');
  font-display: swap;
  size-adjust: 100%;
}
```

---

## 📋 Step 8: Prefetching & Preloading

### Prefetch Links

```tsx
// Next.js automatically prefetches links in viewport
import Link from 'next/link';

<Link href="/product/yoni-steam-blend" prefetch={true}>
  View Product
</Link>
```

### Preload Critical Resources

```tsx
// src/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="preload"
          href="/fonts/CinzelDecorative-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 📋 Step 9: Monitoring & Metrics

### Add Web Vitals Reporting

```tsx
// src/app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
```

### Custom Web Vitals Handler

```typescript
// src/app/web-vitals.ts
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric);
    
    // Send to analytics
    if (window.gtag) {
      window.gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  return null;
}
```

---

## 📋 Step 10: Production Build Optimization

### Update next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable SWC minification
  swcMinify: true,
  
  // Compress responses
  compress: true,
  
  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  
  // Production optimizations
  reactStrictMode: true,
  poweredByHeader: false,
  
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
```

---

## ✅ Performance Checklist

### Images
- [ ] All images use next/image
- [ ] Image domains configured
- [ ] Responsive images with sizes prop
- [ ] Priority flag on above-fold images
- [ ] WebP/AVIF formats enabled

### Fonts
- [ ] Fonts use font-display: swap
- [ ] Critical fonts preloaded
- [ ] Self-hosted fonts optimized

### Code
- [ ] Heavy components lazy loaded
- [ ] Bundle size analyzed
- [ ] Unused dependencies removed
- [ ] Tree-shaking implemented

### Caching
- [ ] Static pages cached
- [ ] API responses cached
- [ ] Revalidation strategy implemented

### Runtime
- [ ] Expensive calculations memoized
- [ ] Pure components use React.memo
- [ ] Search inputs debounced

### Layout Shift
- [ ] Image dimensions specified
- [ ] Skeleton loaders added
- [ ] Font metrics adjusted

### Monitoring
- [ ] Web Vitals tracking enabled
- [ ] Performance metrics logged
- [ ] Lighthouse scores > 90

---

## 🎯 Next Steps

1. ✅ Run Lighthouse audit
2. ✅ Fix any performance issues
3. ✅ Test on slow 3G network
4. ✅ Commit optimizations to Git
5. ✅ Update PHASE-05-STATUS.md
6. ✅ Move to **[08-deployment.md](./08-deployment.md)**

---

**Performance Optimized!** Ready to deploy to Vercel. ⚡

**Last Updated:** March 12, 2026
