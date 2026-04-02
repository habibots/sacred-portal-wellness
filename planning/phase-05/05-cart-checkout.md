# Cart & Checkout Implementation

**Phase 5 - Step 5**  
**Estimated Time:** 8-10 hours  
**Last Updated:** March 12, 2026

---

## 🎯 Objectives

By the end of this guide, you will have:

- ✅ Shopping cart state management with Context API
- ✅ Cart persistence with localStorage
- ✅ Cart calculations (subtotal, shipping, tax, total)
- ✅ Square Web Payments SDK integration
- ✅ Checkout API route with validation
- ✅ Order creation and payment processing
- ✅ Order confirmation page

---

## 📋 Step 1: Create Cart Context

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
  itemCount: number;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
}
```

### Cart Context Provider

```typescript
// src/lib/cart/context.tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, CartSummary } from '@/types/cart';
import { calculateCartSummary } from './calculations';
import { saveCart, loadCart } from './storage';

interface CartContextType {
  items: CartItem[];
  summary: CartSummary;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
  clearCart: () => void;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCart();
    if (savedCart) {
      setItems(savedCart);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      saveCart(items);
    }
  }, [items, isLoaded]);

  const addItem = (newItem: CartItem) => {
    setItems((currentItems) => {
      const existingIndex = currentItems.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.variantId === newItem.variantId
      );

      if (existingIndex > -1) {
        // Update quantity if item exists
        const updated = [...currentItems];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }

      // Add new item
      return [...currentItems, newItem];
    });
    setIsOpen(true);
  };

  const removeItem = (productId: string, variantId?: string) => {
    setItems((currentItems) =>
      currentItems.filter(
        (item) =>
          !(item.productId === productId && item.variantId === variantId)
      )
    );
  };

  const updateQuantity = (
    productId: string,
    variantId: string | undefined,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeItem(productId, variantId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    setIsOpen(false);
  };

  const summary = calculateCartSummary(items);

  return (
    <CartContext.Provider
      value={{
        items,
        summary,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
```

---

## 📋 Step 2: Cart Calculations

### Cart Calculation Utilities

```typescript
// src/lib/cart/calculations.ts
import { CartItem, CartSummary } from '@/types/cart';

export function calculateCartSummary(items: CartItem[]): CartSummary {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Shipping will be calculated based on address in checkout
  // For now, use placeholder
  const shipping = 0;

  // Tax calculation (placeholder - implement based on requirements)
  const tax = 0;

  const total = subtotal + shipping + tax;

  return {
    subtotal,
    shipping,
    tax,
    total,
    itemCount,
  };
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
```

### LocalStorage Utilities

```typescript
// src/lib/cart/storage.ts
import { CartItem } from '@/types/cart';

const CART_STORAGE_KEY = 'sacred-portal-cart';

export function saveCart(items: CartItem[]): void {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Failed to save cart:', error);
  }
}

export function loadCart(): CartItem[] | null {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load cart:', error);
    return null;
  }
}

export function clearStoredCart(): void {
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear cart:', error);
  }
}
```

---

## 📋 Step 3: Cart UI Components

### Cart Drawer

```typescript
// src/components/cart/cart-drawer.tsx
'use client';

import { useCart } from '@/lib/cart/context';
import { CartItem } from './cart-item';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/cart/calculations';
import Link from 'next/link';

export function CartDrawer() {
  const { items, summary, isOpen, closeCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/60 z-40"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-charcoal-200">
          <h2 className="text-h4 font-display">Shopping Cart</h2>
          <button
            onClick={closeCart}
            className="text-charcoal-600 hover:text-charcoal-900"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-body-lg text-charcoal-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.variantId}`}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-charcoal-200 p-6">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-body">
                <span className="text-charcoal-600">Subtotal</span>
                <span className="font-medium">{formatPrice(summary.subtotal)}</span>
              </div>
              <div className="flex justify-between text-body-sm text-charcoal-500">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <Link href="/checkout" onClick={closeCart}>
              <Button size="lg" className="w-full">
                Checkout · {formatPrice(summary.subtotal)}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
```

### Cart Item Component

```typescript
// src/components/cart/cart-item.tsx
'use client';

import Image from 'next/image';
import { useCart } from '@/lib/cart/context';
import { CartItem as CartItemType } from '@/types/cart';
import { formatPrice } from '@/lib/cart/calculations';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4">
      {/* Image */}
      <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <Image
          src={item.image || '/images/placeholder.png'}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h3 className="text-body font-medium truncate">{item.name}</h3>
        <p className="text-body-sm text-charcoal-600">
          {formatPrice(item.price)}
        </p>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() =>
              updateQuantity(item.productId, item.variantId, item.quantity - 1)
            }
            className="w-8 h-8 rounded-md border border-charcoal-300 hover:bg-charcoal-50"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-body-sm">{item.quantity}</span>
          <button
            onClick={() =>
              updateQuantity(item.productId, item.variantId, item.quantity + 1)
            }
            className="w-8 h-8 rounded-md border border-charcoal-300 hover:bg-charcoal-50"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove & Price */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={() => removeItem(item.productId, item.variantId)}
          className="text-charcoal-500 hover:text-error-500"
          aria-label="Remove item"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className="text-body font-medium">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
    </div>
  );
}
```

---

## 📋 Step 4: Checkout Page

### Checkout Validation Schema

```typescript
// src/lib/validation/checkout.ts
import { z } from 'zod';

export const checkoutSchema = z.object({
  shipping: z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Valid email is required'),
    phone: z.string().min(10, 'Valid phone number is required'),
    address1: z.string().min(1, 'Address is required'),
    address2: z.string().optional(),
    city: z.string().min(1, 'City is required'),
    state: z.string().length(2, 'State must be 2 letters'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Valid ZIP code is required'),
  }),
  items: z.array(
    z.object({
      productId: z.string(),
      variantId: z.string().optional(),
      quantity: z.number().min(1),
      price: z.number().min(0),
    })
  ),
  paymentToken: z.string().min(1, 'Payment token is required'),
  idempotencyKey: z.string().uuid(),
});

export type CheckoutData = z.infer<typeof checkoutSchema>;
```

### Checkout Page

```typescript
// src/app/checkout/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cart/context';
import { ShippingForm } from '@/components/checkout/shipping-form';
import { PaymentForm } from '@/components/checkout/payment-form';
import { OrderSummary } from '@/components/checkout/order-summary';
import { ShippingAddress } from '@/types/cart';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, summary, clearCart } = useCart();
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-h2 font-display mb-4">Your cart is empty</h1>
        <p className="text-body-lg text-charcoal-600">
          Add some items to your cart before checking out.
        </p>
      </div>
    );
  }

  const handleShippingSubmit = (address: ShippingAddress) => {
    setShippingAddress(address);
  };

  const handlePaymentSubmit = async (paymentToken: string) => {
    if (!shippingAddress) return;

    setIsProcessing(true);
    setError(null);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shipping: shippingAddress,
          items: items.map((item) => ({
            productId: item.productId,
            variantId: item.variantId,
            quantity: item.quantity,
            price: item.price,
          })),
          paymentToken,
          idempotencyKey: crypto.randomUUID(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Checkout failed');
      }

      // Clear cart and redirect to success page
      clearCart();
      router.push(`/checkout/success?orderId=${data.orderId}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-h1 font-display mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Forms */}
        <div className="lg:col-span-2 space-y-8">
          <ShippingForm
            onSubmit={handleShippingSubmit}
            initialData={shippingAddress}
          />

          {shippingAddress && (
            <PaymentForm
              onSubmit={handlePaymentSubmit}
              isProcessing={isProcessing}
              error={error}
            />
          )}
        </div>

        {/* Order Summary */}
        <div>
          <OrderSummary
            items={items}
            summary={summary}
            shippingAddress={shippingAddress}
          />
        </div>
      </div>
    </div>
  );
}
```

---

## 📋 Step 5: Square Web Payments SDK

### Payment Form Component

```typescript
// src/components/checkout/payment-form.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface PaymentFormProps {
  onSubmit: (token: string) => Promise<void>;
  isProcessing: boolean;
  error: string | null;
}

export function PaymentForm({ onSubmit, isProcessing, error }: PaymentFormProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRef = useRef<any>(null);
  const paymentsRef = useRef<any>(null);

  useEffect(() => {
    async function initializeSquare() {
      if (!window.Square) {
        console.error('Square.js failed to load');
        return;
      }

      try {
        const payments = window.Square.payments(
          process.env.NEXT_PUBLIC_SQUARE_APP_ID!,
          process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID!
        );

        const card = await payments.card();
        await card.attach('#card-container');

        paymentsRef.current = payments;
        cardRef.current = card;
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to initialize Square:', error);
      }
    }

    initializeSquare();

    return () => {
      if (cardRef.current) {
        cardRef.current.destroy();
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!cardRef.current) return;

    try {
      const result = await cardRef.current.tokenize();

      if (result.status === 'OK') {
        await onSubmit(result.token);
      } else {
        console.error('Tokenization failed:', result.errors);
      }
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-h4 font-display">Payment Information</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div id="card-container" className="mb-6" />

          {error && (
            <div className="mb-4 p-4 bg-error-100 text-error-900 rounded-md">
              {error}
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={!isLoaded || isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Place Order'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

### Add Square Script to Layout

```tsx
// src/app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://sandbox.web.squarecdn.com/v1/square.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

---

## 📋 Step 6: Checkout API Route

### Create Checkout Endpoint

```typescript
// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { checkoutSchema } from '@/lib/validation/checkout';
import { ordersApi, paymentsApi } from '@/lib/square/client';
import { randomUUID } from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate request
    const validated = checkoutSchema.parse(body);

    // Calculate total server-side (never trust client)
    const subtotal = validated.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create Square order
    const orderResponse = await ordersApi.createOrder({
      order: {
        locationId: process.env.SQUARE_LOCATION_ID!,
        lineItems: validated.items.map((item) => ({
          catalogObjectId: item.productId,
          quantity: item.quantity.toString(),
        })),
        fulfillments: [
          {
            type: 'SHIPMENT',
            state: 'PROPOSED',
            shipmentDetails: {
              recipient: {
                displayName: `${validated.shipping.firstName} ${validated.shipping.lastName}`,
                emailAddress: validated.shipping.email,
                phoneNumber: validated.shipping.phone,
                address: {
                  addressLine1: validated.shipping.address1,
                  addressLine2: validated.shipping.address2,
                  locality: validated.shipping.city,
                  administrativeDistrictLevel1: validated.shipping.state,
                  postalCode: validated.shipping.zipCode,
                  country: 'US',
                },
              },
            },
          },
        ],
      },
      idempotencyKey: randomUUID(),
    });

    const order = orderResponse.result.order;

    if (!order) {
      throw new Error('Failed to create order');
    }

    // Create payment
    const paymentResponse = await paymentsApi.createPayment({
      sourceId: validated.paymentToken,
      idempotencyKey: validated.idempotencyKey,
      amountMoney: {
        amount: BigInt(Math.round(subtotal * 100)),
        currency: 'USD',
      },
      orderId: order.id,
    });

    return NextResponse.json({
      orderId: order.id,
      paymentId: paymentResponse.result.payment?.id,
    });
  } catch (error) {
    console.error('Checkout error:', error);

    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Checkout failed' },
      { status: 500 }
    );
  }
}
```

---

## ✅ Implementation Checklist

- [ ] Cart context created
- [ ] Cart calculations implemented
- [ ] LocalStorage persistence added
- [ ] Cart drawer component created
- [ ] Cart item component created
- [ ] Checkout validation schema created
- [ ] Checkout page created
- [ ] Shipping form component created
- [ ] Payment form with Square SDK created
- [ ] Order summary component created
- [ ] Checkout API route created
- [ ] Success page created
- [ ] Test complete checkout flow

---

## 🎯 Next Steps

1. ✅ Test cart operations
2. ✅ Test checkout with Square sandbox
3. ✅ Commit changes to Git
4. ✅ Update PHASE-05-STATUS.md
5. ✅ Move to **[06-shipping-delivery.md](./06-shipping-delivery.md)**

---

**Cart & Checkout Complete!** Ready to implement shipping logic. 💳

**Last Updated:** March 12, 2026
