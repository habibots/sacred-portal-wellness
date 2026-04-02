# Shipping & Local Delivery Logic

**Phase 5 - Step 6**  
**Estimated Time:** 3-4 hours  
**Last Updated:** March 12, 2026

---

## 🎯 Objectives

By the end of this guide, you will have:

- ✅ San Diego ZIP code validation for local delivery
- ✅ Shipping cost calculation logic
- ✅ Free local delivery threshold ($100+)
- ✅ Delivery method selection UI
- ✅ Clear user messaging for eligibility

---

## 📋 Shipping Requirements

### Business Rules

1. **Local Delivery (San Diego County)**
   - Available for specific San Diego ZIP codes
   - Cost: $10.00
   - FREE for orders $100+
   - Delivery within 3-5 business days

2. **Standard Shipping (US)**
   - Available for all US addresses
   - Cost: $5.99 flat rate
   - Delivery within 5-7 business days

3. **Unsupported**
   - International shipping not available
   - Alaska and Hawaii not supported (optional)

---

## 📋 Step 1: Define San Diego ZIP Codes

### Create ZIP Code Constants

```typescript
// src/lib/shipping/constants.ts

/**
 * San Diego County ZIP codes eligible for local delivery
 * Source: USPS San Diego County ZIP code database
 */
export const SAN_DIEGO_ZIP_CODES = [
  // Central San Diego
  '92101', '92102', '92103', '92104', '92105', '92106', '92107', '92108',
  '92109', '92110', '92111', '92112', '92113', '92114', '92115', '92116',
  '92117', '92119', '92120', '92121', '92122', '92123', '92124', '92126',
  '92127', '92128', '92129', '92130', '92131', '92132', '92134', '92135',
  '92136', '92137', '92138', '92139', '92140', '92142', '92145', '92147',
  '92149', '92150', '92152', '92153', '92154', '92155', '92158', '92159',
  '92160', '92161', '92163', '92165', '92166', '92167', '92168', '92169',
  '92170', '92171', '92172', '92173', '92174', '92175', '92176', '92177',
  '92178', '92179', '92182', '92186', '92187', '92191', '92192', '92193',
  '92195', '92196', '92197', '92198', '92199',
  
  // North County
  '92003', '92007', '92008', '92009', '92010', '92011', '92013', '92014',
  '92018', '92019', '92020', '92021', '92024', '92025', '92026', '92027',
  '92028', '92029', '92030', '92033', '92036', '92037', '92038', '92039',
  '92040', '92046', '92049', '92051', '92052', '92054', '92055', '92056',
  '92057', '92058', '92059', '92060', '92061', '92064', '92065', '92066',
  '92067', '92068', '92069', '92070', '92071', '92072', '92074', '92075',
  '92078', '92079', '92081', '92082', '92083', '92084', '92085', '92086',
  '92088', '92090', '92091', '92092', '92093', '92096',
  
  // East County
  '91901', '91902', '91903', '91905', '91906', '91908', '91909', '91910',
  '91911', '91912', '91913', '91914', '91915', '91916', '91917', '91921',
  '91931', '91932', '91933', '91934', '91935', '91941', '91942', '91943',
  '91944', '91945', '91946', '91947', '91948', '91950', '91951', '91962',
  '91963', '91976', '91977', '91978', '91979', '91980',
];

export const SHIPPING_RATES = {
  LOCAL_DELIVERY: 10.00,
  STANDARD_SHIPPING: 5.99,
  FREE_DELIVERY_THRESHOLD: 100.00,
} as const;

export type DeliveryMethod = 'local' | 'standard' | 'unsupported';
```

---

## 📋 Step 2: ZIP Code Validation

### Create Validation Utilities

```typescript
// src/lib/shipping/validation.ts
import { SAN_DIEGO_ZIP_CODES } from './constants';

export function isValidZipCode(zipCode: string): boolean {
  // Match 5-digit or 9-digit ZIP codes
  return /^\d{5}(-\d{4})?$/.test(zipCode);
}

export function normalizeZipCode(zipCode: string): string {
  // Extract first 5 digits
  return zipCode.replace(/[^\d]/g, '').slice(0, 5);
}

export function isSanDiegoZipCode(zipCode: string): boolean {
  const normalized = normalizeZipCode(zipCode);
  return SAN_DIEGO_ZIP_CODES.includes(normalized);
}

export function isUSZipCode(zipCode: string): boolean {
  const normalized = normalizeZipCode(zipCode);
  const zipNum = parseInt(normalized, 10);
  
  // Basic US ZIP code range validation
  // Excludes Alaska (995xx-999xx) and Hawaii (967xx-968xx) if needed
  return zipNum >= 501 && zipNum <= 99950;
}
```

---

## 📋 Step 3: Shipping Rate Calculation

### Create Rate Calculation Logic

```typescript
// src/lib/shipping/rates.ts
import { isSanDiegoZipCode } from './validation';
import { SHIPPING_RATES, DeliveryMethod } from './constants';

export interface ShippingCalculation {
  method: DeliveryMethod;
  cost: number;
  isFree: boolean;
  message: string;
}

export function calculateShipping(
  zipCode: string,
  subtotal: number
): ShippingCalculation {
  // Check if San Diego local delivery
  if (isSanDiegoZipCode(zipCode)) {
    const isFree = subtotal >= SHIPPING_RATES.FREE_DELIVERY_THRESHOLD;
    
    return {
      method: 'local',
      cost: isFree ? 0 : SHIPPING_RATES.LOCAL_DELIVERY,
      isFree,
      message: isFree
        ? 'Free local delivery (order over $100)'
        : `Local delivery: $${SHIPPING_RATES.LOCAL_DELIVERY.toFixed(2)}`,
    };
  }

  // Standard US shipping
  return {
    method: 'standard',
    cost: SHIPPING_RATES.STANDARD_SHIPPING,
    isFree: false,
    message: `Standard shipping: $${SHIPPING_RATES.STANDARD_SHIPPING.toFixed(2)}`,
  };
}

export function getDeliveryEstimate(method: DeliveryMethod): string {
  switch (method) {
    case 'local':
      return '3-5 business days';
    case 'standard':
      return '5-7 business days';
    default:
      return 'Not available';
  }
}

export function formatShippingMessage(
  method: DeliveryMethod,
  cost: number,
  isFree: boolean
): string {
  if (isFree) {
    return 'Free Local Delivery';
  }

  const methodName = method === 'local' ? 'Local Delivery' : 'Standard Shipping';
  return `${methodName} - $${cost.toFixed(2)}`;
}
```

---

## 📋 Step 4: Update Cart Calculations

### Integrate Shipping into Cart Summary

```typescript
// src/lib/cart/calculations.ts (updated)
import { CartItem, CartSummary } from '@/types/cart';
import { calculateShipping } from '@/lib/shipping/rates';

export function calculateCartSummary(
  items: CartItem[],
  zipCode?: string
): CartSummary {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate shipping if ZIP code provided
  let shipping = 0;
  let shippingMethod: string | undefined;

  if (zipCode) {
    const shippingCalc = calculateShipping(zipCode, subtotal);
    shipping = shippingCalc.cost;
    shippingMethod = shippingCalc.method;
  }

  // Tax calculation (placeholder - implement based on requirements)
  const tax = 0;

  const total = subtotal + shipping + tax;

  return {
    subtotal,
    shipping,
    tax,
    total,
    itemCount,
    shippingMethod,
  };
}
```

---

## 📋 Step 5: Shipping Form Component

### Create Shipping Form with ZIP Validation

```typescript
// src/components/checkout/shipping-form.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ShippingAddress } from '@/types/cart';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { isSanDiegoZipCode, isValidZipCode } from '@/lib/shipping/validation';
import { calculateShipping } from '@/lib/shipping/rates';
import { useCart } from '@/lib/cart/context';

interface ShippingFormProps {
  onSubmit: (data: ShippingAddress) => void;
  initialData?: ShippingAddress | null;
}

export function ShippingForm({ onSubmit, initialData }: ShippingFormProps) {
  const { summary } = useCart();
  const [shippingPreview, setShippingPreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ShippingAddress>({
    defaultValues: initialData || undefined,
  });

  const zipCode = watch('zipCode');

  // Update shipping preview when ZIP changes
  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const zip = e.target.value;
    
    if (isValidZipCode(zip)) {
      const shipping = calculateShipping(zip, summary.subtotal);
      setShippingPreview(shipping.message);
    } else {
      setShippingPreview(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-h4 font-display">Shipping Information</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-body-sm font-medium mb-2">
                First Name
              </label>
              <Input
                id="firstName"
                {...register('firstName', { required: 'First name is required' })}
                error={!!errors.firstName}
              />
              {errors.firstName && (
                <p className="text-body-sm text-error-500 mt-1">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-body-sm font-medium mb-2">
                Last Name
              </label>
              <Input
                id="lastName"
                {...register('lastName', { required: 'Last name is required' })}
                error={!!errors.lastName}
              />
              {errors.lastName && (
                <p className="text-body-sm text-error-500 mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="email" className="block text-body-sm font-medium mb-2">
              Email
            </label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              error={!!errors.email}
            />
            {errors.email && (
              <p className="text-body-sm text-error-500 mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-body-sm font-medium mb-2">
              Phone
            </label>
            <Input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'Phone is required',
                pattern: {
                  value: /^[\d\s\-\(\)]+$/,
                  message: 'Invalid phone number',
                },
              })}
              error={!!errors.phone}
            />
            {errors.phone && (
              <p className="text-body-sm text-error-500 mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address1" className="block text-body-sm font-medium mb-2">
              Address
            </label>
            <Input
              id="address1"
              {...register('address1', { required: 'Address is required' })}
              error={!!errors.address1}
            />
            {errors.address1 && (
              <p className="text-body-sm text-error-500 mt-1">
                {errors.address1.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="address2" className="block text-body-sm font-medium mb-2">
              Apartment, suite, etc. (optional)
            </label>
            <Input id="address2" {...register('address2')} />
          </div>

          {/* City, State, ZIP */}
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-3">
              <label htmlFor="city" className="block text-body-sm font-medium mb-2">
                City
              </label>
              <Input
                id="city"
                {...register('city', { required: 'City is required' })}
                error={!!errors.city}
              />
              {errors.city && (
                <p className="text-body-sm text-error-500 mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className="col-span-1">
              <label htmlFor="state" className="block text-body-sm font-medium mb-2">
                State
              </label>
              <Input
                id="state"
                maxLength={2}
                {...register('state', {
                  required: 'State is required',
                  pattern: {
                    value: /^[A-Z]{2}$/,
                    message: 'Use 2-letter code',
                  },
                })}
                error={!!errors.state}
              />
              {errors.state && (
                <p className="text-body-sm text-error-500 mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <label htmlFor="zipCode" className="block text-body-sm font-medium mb-2">
                ZIP Code
              </label>
              <Input
                id="zipCode"
                {...register('zipCode', {
                  required: 'ZIP code is required',
                  pattern: {
                    value: /^\d{5}(-\d{4})?$/,
                    message: 'Invalid ZIP code',
                  },
                })}
                onChange={handleZipChange}
                error={!!errors.zipCode}
              />
              {errors.zipCode && (
                <p className="text-body-sm text-error-500 mt-1">
                  {errors.zipCode.message}
                </p>
              )}
            </div>
          </div>

          {/* Shipping Preview */}
          {shippingPreview && (
            <div className="p-4 bg-forest-50 rounded-md">
              <p className="text-body-sm font-medium text-forest-900">
                {shippingPreview}
              </p>
              {isSanDiegoZipCode(zipCode) && summary.subtotal < 100 && (
                <p className="text-body-sm text-charcoal-600 mt-1">
                  Add ${(100 - summary.subtotal).toFixed(2)} more for free local delivery
                </p>
              )}
            </div>
          )}

          <Button type="submit" size="lg" className="w-full">
            Continue to Payment
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

---

## 📋 Step 6: Update Order Summary

### Show Shipping Costs in Summary

```typescript
// src/components/checkout/order-summary.tsx
import { CartItem, CartSummary, ShippingAddress } from '@/types/cart';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { formatPrice } from '@/lib/cart/calculations';
import { calculateShipping, getDeliveryEstimate } from '@/lib/shipping/rates';

interface OrderSummaryProps {
  items: CartItem[];
  summary: CartSummary;
  shippingAddress: ShippingAddress | null;
}

export function OrderSummary({ items, summary, shippingAddress }: OrderSummaryProps) {
  const shipping = shippingAddress
    ? calculateShipping(shippingAddress.zipCode, summary.subtotal)
    : null;

  const total = summary.subtotal + (shipping?.cost || 0);

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <h2 className="text-h5 font-display">Order Summary</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Items */}
        <div className="space-y-2">
          {items.map((item) => (
            <div key={`${item.productId}-${item.variantId}`} className="flex justify-between text-body-sm">
              <span className="text-charcoal-600">
                {item.name} × {item.quantity}
              </span>
              <span className="font-medium">
                {formatPrice(item.price * item.quantity)}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-charcoal-200 pt-4 space-y-2">
          {/* Subtotal */}
          <div className="flex justify-between text-body">
            <span className="text-charcoal-600">Subtotal</span>
            <span className="font-medium">{formatPrice(summary.subtotal)}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between text-body">
            <span className="text-charcoal-600">Shipping</span>
            {shipping ? (
              <span className="font-medium">
                {shipping.isFree ? 'FREE' : formatPrice(shipping.cost)}
              </span>
            ) : (
              <span className="text-body-sm text-charcoal-500">
                Calculated at checkout
              </span>
            )}
          </div>

          {shipping && (
            <p className="text-body-sm text-charcoal-500">
              {getDeliveryEstimate(shipping.method)}
            </p>
          )}

          {/* Total */}
          <div className="flex justify-between text-h5 font-display pt-2 border-t border-charcoal-200">
            <span>Total</span>
            <span className="text-forest-800">{formatPrice(total)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
```

---

## ✅ Implementation Checklist

- [ ] San Diego ZIP codes defined
- [ ] ZIP code validation utilities created
- [ ] Shipping rate calculation implemented
- [ ] Free delivery threshold logic added
- [ ] Shipping form with ZIP validation created
- [ ] Order summary updated with shipping costs
- [ ] Delivery estimates displayed
- [ ] User messaging for eligibility added
- [ ] Test with San Diego ZIP codes
- [ ] Test with non-San Diego ZIP codes
- [ ] Test free delivery threshold

---

## 🎯 Next Steps

1. ✅ Test shipping calculations
2. ✅ Verify ZIP code validation
3. ✅ Commit changes to Git
4. ✅ Update PHASE-05-STATUS.md
5. ✅ Move to **[07-performance-optimization.md](./07-performance-optimization.md)**

---

**Shipping Logic Complete!** Ready to optimize performance. 🚚

**Last Updated:** March 12, 2026
