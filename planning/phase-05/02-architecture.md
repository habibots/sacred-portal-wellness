# Project Architecture

**Phase 5 - Step 2**  
**Estimated Time:** 3-4 hours  
**Last Updated:** March 12, 2026

---

## 🎯 Objectives

By the end of this guide, you will have:

- ✅ Complete App Router folder structure
- ✅ Server and Client component separation
- ✅ API routes organized
- ✅ Type definitions established
- ✅ Utility libraries structured

---

## 📁 Complete Folder Structure

```
src/
├── app/
│   ├── (marketing)/              # Marketing pages route group
│   │   ├── layout.tsx            # Marketing layout
│   │   ├── page.tsx              # Homepage
│   │   ├── about/
│   │   │   └── page.tsx          # About page
│   │   ├── coaching/
│   │   │   └── page.tsx          # Coaching program page
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page
│   │   └── faq/
│   │       └── page.tsx          # FAQ page
│   │
│   ├── shop/
│   │   ├── page.tsx              # Shop/category listing
│   │   └── [category]/
│   │       └── page.tsx          # Category page
│   │
│   ├── product/
│   │   └── [slug]/
│   │       └── page.tsx          # Product detail page
│   │
│   ├── cart/
│   │   └── page.tsx              # Cart page
│   │
│   ├── checkout/
│   │   ├── page.tsx              # Checkout page
│   │   └── success/
│   │       └── page.tsx          # Order confirmation
│   │
│   ├── policies/
│   │   ├── privacy/
│   │   │   └── page.tsx          # Privacy policy
│   │   ├── returns/
│   │   │   └── page.tsx          # Return policy
│   │   └── disclaimer/
│   │       └── page.tsx          # Medical disclaimer
│   │
│   ├── api/
│   │   ├── catalog/
│   │   │   └── route.ts          # Catalog API endpoint
│   │   ├── checkout/
│   │   │   └── route.ts          # Checkout API endpoint
│   │   └── webhook/
│   │       └── square/
│   │           └── route.ts      # Square webhook handler
│   │
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── not-found.tsx             # 404 page
│   └── error.tsx                 # Error boundary
│
├── components/
│   ├── ui/                       # Base UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   └── ...
│   │
│   ├── layout/                   # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── navigation.tsx
│   │   └── skip-link.tsx
│   │
│   ├── product/                  # Product components
│   │   ├── product-card.tsx
│   │   ├── product-grid.tsx
│   │   ├── variant-selector.tsx
│   │   └── add-to-cart-button.tsx
│   │
│   ├── cart/                     # Cart components
│   │   ├── cart-drawer.tsx
│   │   ├── cart-item.tsx
│   │   └── cart-summary.tsx
│   │
│   └── checkout/                 # Checkout components
│       ├── shipping-form.tsx
│       ├── payment-form.tsx
│       └── order-summary.tsx
│
├── lib/
│   ├── square/                   # Square API integration
│   │   ├── client.ts             # Square API client
│   │   ├── catalog.ts            # Catalog operations
│   │   ├── orders.ts             # Order operations
│   │   ├── payments.ts           # Payment operations
│   │   └── webhooks.ts           # Webhook verification
│   │
│   ├── cart/                     # Cart logic
│   │   ├── context.tsx           # Cart context provider
│   │   ├── calculations.ts       # Cart calculations
│   │   └── storage.ts            # LocalStorage persistence
│   │
│   ├── shipping/                 # Shipping logic
│   │   ├── rates.ts              # Shipping rate calculation
│   │   ├── validation.ts         # ZIP code validation
│   │   └── constants.ts          # Shipping constants
│   │
│   ├── utils/                    # Utility functions
│   │   ├── cn.ts                 # Class name utility
│   │   ├── format.ts             # Formatting utilities
│   │   └── seo.ts                # SEO utilities
│   │
│   └── validation/               # Zod schemas
│       ├── checkout.ts           # Checkout validation
│       ├── product.ts            # Product validation
│       └── shipping.ts           # Shipping validation
│
├── types/
│   ├── square.ts                 # Square API types
│   ├── product.ts                # Product types
│   ├── cart.ts                   # Cart types
│   └── index.ts                  # Exported types
│
└── styles/
    └── design-tokens.css         # CSS variables from design tokens

public/
├── images/
│   ├── logo.svg
│   ├── placeholder.png
│   └── ...
└── fonts/                        # Custom fonts if needed
```

---

## 🏗️ Architecture Principles

### 1. Server Components by Default

Use Server Components for:
- Static content pages
- Product listings
- SEO-critical pages
- Data fetching

```tsx
// src/app/shop/page.tsx (Server Component)
export default async function ShopPage() {
  const products = await getProducts(); // Server-side data fetch
  
  return (
    <div>
      <h1>Shop</h1>
      <ProductGrid products={products} />
    </div>
  );
}
```

### 2. Client Components for Interactivity

Use Client Components for:
- Shopping cart
- Forms with state
- Interactive UI (accordions, modals)
- Browser APIs (localStorage)

```tsx
// src/components/cart/cart-drawer.tsx (Client Component)
'use client';

import { useCart } from '@/lib/cart/context';

export function CartDrawer() {
  const { items, removeItem } = useCart();
  // Interactive cart logic
}
```

### 3. API Routes for Server Operations

Use API Routes for:
- Square API calls
- Payment processing
- Webhook handling
- Server-side validation

```tsx
// src/app/api/checkout/route.ts
export async function POST(request: Request) {
  // Server-side checkout logic
  // Never expose Square access token
}
```

---

## 🔐 Security Architecture

### Environment Variable Access

```typescript
// ✅ SAFE: Server Component or API Route
const accessToken = process.env.SQUARE_ACCESS_TOKEN;

// ❌ UNSAFE: Client Component
'use client';
const accessToken = process.env.SQUARE_ACCESS_TOKEN; // Exposed!

// ✅ SAFE: Public variable in Client Component
'use client';
const appId = process.env.NEXT_PUBLIC_SQUARE_APP_ID;
```

### Server-Side Validation Pattern

```typescript
// src/app/api/checkout/route.ts
import { checkoutSchema } from '@/lib/validation/checkout';

export async function POST(request: Request) {
  const body = await request.json();
  
  // Validate with Zod
  const validated = checkoutSchema.parse(body);
  
  // Recalculate totals server-side (never trust client)
  const serverTotal = calculateTotal(validated.items);
  
  if (serverTotal !== validated.total) {
    return Response.json({ error: 'Invalid total' }, { status: 400 });
  }
  
  // Process payment
}
```

---

## 📊 Data Flow Architecture

### Product Catalog Flow

```
Square Catalog API
      ↓
Server Component (fetch)
      ↓
Normalize data
      ↓
Render ProductGrid
      ↓
Client Component (AddToCart)
      ↓
Cart Context
```

### Checkout Flow

```
Client: Cart Context
      ↓
Client: Checkout Form
      ↓
Client: Square Web Payments SDK (tokenize)
      ↓
API Route: /api/checkout
      ↓
Server: Validate & recalculate
      ↓
Server: Square Orders API (create order)
      ↓
Server: Square Payments API (create payment)
      ↓
Response to Client
      ↓
Redirect to success page
```

---

## 🎨 Layout Architecture

### Root Layout

```tsx
// src/app/layout.tsx
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartProvider } from '@/lib/cart/context';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
```

### Marketing Layout (Route Group)

```tsx
// src/app/(marketing)/layout.tsx
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="marketing-layout">
      {children}
    </div>
  );
}
```

---

## 🔄 State Management

### Cart Context (Global State)

```tsx
// src/lib/cart/context.tsx
'use client';

import { createContext, useContext, useState } from 'react';

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Cart operations...
  
  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
```

### Local State (Component-Level)

Use `useState` for component-specific state:
- Form inputs
- UI toggles (modals, dropdowns)
- Loading states

---

## 🗂️ Type Definitions

### Product Types

```typescript
// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  variants?: ProductVariant[];
  inStock: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}
```

### Cart Types

```typescript
// src/types/cart.ts
export interface CartItem {
  productId: string;
  variantId?: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}
```

### Square Types

```typescript
// src/types/square.ts
import { CatalogObject, Order, Payment } from 'square';

export type SquareCatalogItem = CatalogObject;
export type SquareOrder = Order;
export type SquarePayment = Payment;

// Add custom types as needed
```

---

## 🛣️ Routing Strategy

### Static Routes (Pre-rendered)

```typescript
// src/app/about/page.tsx
export default function AboutPage() {
  // Static content, pre-rendered at build time
}
```

### Dynamic Routes (On-demand)

```typescript
// src/app/product/[slug]/page.tsx
export default async function ProductPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const product = await getProductBySlug(params.slug);
  return <ProductDetail product={product} />;
}
```

### Route Groups (Shared Layouts)

```
app/
├── (marketing)/        # Route group (not in URL)
│   ├── layout.tsx      # Shared layout
│   ├── page.tsx        # /
│   └── about/
│       └── page.tsx    # /about
```

---

## 🔌 API Route Patterns

### GET Endpoint

```typescript
// src/app/api/catalog/route.ts
export async function GET(request: Request) {
  try {
    const products = await fetchSquareCatalog();
    return Response.json({ products });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch catalog' }, { status: 500 });
  }
}
```

### POST Endpoint with Validation

```typescript
// src/app/api/checkout/route.ts
import { checkoutSchema } from '@/lib/validation/checkout';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = checkoutSchema.parse(body);
    
    // Process checkout
    const order = await createSquareOrder(validated);
    
    return Response.json({ orderId: order.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: error.errors }, { status: 400 });
    }
    return Response.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
```

---

## 📝 File Naming Conventions

### Components

- PascalCase for component files: `ProductCard.tsx`
- kebab-case for folders: `product-card/`
- Index exports for cleaner imports

### Utilities

- camelCase for utility files: `formatPrice.ts`
- Descriptive names: `calculateShipping.ts`

### Types

- PascalCase for interfaces: `Product`, `CartItem`
- Suffix with type: `ProductType`, `CartState`

### API Routes

- kebab-case: `checkout/route.ts`
- RESTful naming: `products/[id]/route.ts`

---

## ✅ Implementation Checklist

- [ ] Create all folder structure
- [ ] Set up root layout with providers
- [ ] Create marketing route group
- [ ] Set up API routes structure
- [ ] Create type definition files
- [ ] Implement cart context
- [ ] Create base UI components folder
- [ ] Set up error boundaries
- [ ] Create 404 page
- [ ] Test routing works correctly

---

## 🎯 Next Steps

Once architecture is complete:

1. ✅ Commit changes to Git
2. ✅ Update PHASE-05-STATUS.md
3. ✅ Move to **[03-design-system-implementation.md](./03-design-system-implementation.md)**

---

**Architecture Complete!** Ready to implement the design system. 🏗️

**Last Updated:** March 12, 2026
