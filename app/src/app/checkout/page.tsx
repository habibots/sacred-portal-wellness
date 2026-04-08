'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart/context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { formatPrice } from '@/lib/utils/format';
import { calculateShipping, getDeliveryEstimate } from '@/lib/shipping/rates';
import { isValidZipCode } from '@/lib/shipping/validation';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, summary } = useCart();
  const [zipCode, setZipCode] = useState('');
  const [shipping, setShipping] = useState<{
    cost: number;
    method: string;
    message: string;
    isFree: boolean;
  } | null>(null);
  const [zipError, setZipError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState('');

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-h2 font-display mb-4">Your Cart is Empty</h1>
          <p className="text-body-lg text-charcoal-600 dark:text-charcoal-300 mb-8">
            Add some items to your cart before checking out
          </p>
          <Link href="/shop">
            <Button size="lg">Browse Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleZipChange = (value: string) => {
    setZipCode(value);
    setZipError('');
    if (value.length >= 5 && isValidZipCode(value)) {
      const result = calculateShipping(value, summary.subtotal);
      setShipping(result);
    } else {
      setShipping(null);
    }
  };

  const handleCheckout = async () => {
    if (!zipCode || !isValidZipCode(zipCode)) {
      setZipError('Please enter a valid ZIP code for shipping');
      return;
    }

    setIsLoading(true);
    setCheckoutError('');

    try {
      const shippingCalc = calculateShipping(zipCode, summary.subtotal);

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000);

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((item) => ({
            productId: item.productId,
            variantId: item.variantId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          shippingCost: shippingCalc.cost,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Checkout failed');
      }

      // Defense-in-depth: only follow https URLs from Square. Prevents
      // javascript: or http: redirects if the upstream response is ever spoofed.
      if (typeof data.checkoutUrl !== 'string' || !data.checkoutUrl.startsWith('https://')) {
        throw new Error('Invalid checkout URL received from server');
      }

      // Redirect to Square hosted checkout — cart is cleared on the success page
      window.location.href = data.checkoutUrl;
    } catch (error) {
      const message =
        error instanceof DOMException && error.name === 'AbortError'
          ? 'Request timed out. Please try again.'
          : error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.';
      setCheckoutError(message);
      setIsLoading(false);
    }
  };

  const total = summary.subtotal + (shipping?.cost || 0);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-h1 font-display mb-8">Checkout</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Shipping & Checkout */}
        <div className="lg:col-span-3 space-y-6">
          {/* Shipping Calculator */}
          <div className="bg-white rounded-lg p-6 shadow-md dark:bg-charcoal-800">
            <h2 className="text-h5 font-display mb-4">Shipping</h2>
            <p className="text-body-sm text-charcoal-600 dark:text-charcoal-300 mb-4">
              Enter your ZIP code to calculate shipping. San Diego orders over $100 ship free.
            </p>
            <label htmlFor="zip-code" className="block text-body-sm font-medium text-charcoal-700 dark:text-cream-700 mb-1">
              ZIP Code
            </label>
            <div className="flex gap-3">
              <Input
                id="zip-code"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                required
                aria-required="true"
                placeholder="e.g. 92101"
                value={zipCode}
                onChange={(e) => handleZipChange(e.target.value)}
                maxLength={10}
                className="w-full sm:max-w-[200px]"
                error={!!zipError}
                aria-describedby={zipError ? 'zip-error' : undefined}
              />
            </div>
            {zipError && (
              <p id="zip-error" role="alert" className="text-error-500 text-body-sm mt-2">{zipError}</p>
            )}
            {shipping && (
              <div className="mt-4 p-3 bg-cream-600 dark:bg-charcoal-700 rounded-md">
                <p className="text-body font-medium">{shipping.message}</p>
                <p className="text-body-sm text-charcoal-600 dark:text-charcoal-300 mt-1">
                  Estimated delivery: {getDeliveryEstimate(shipping.method as 'local' | 'standard')}
                </p>
              </div>
            )}
          </div>

          {/* Checkout Button */}
          <div className="bg-white rounded-lg p-6 shadow-md dark:bg-charcoal-800">
            <h2 className="text-h5 font-display mb-4">Payment</h2>
            <p className="text-body text-charcoal-600 dark:text-charcoal-300 mb-6">
              You&apos;ll be securely redirected to Square to complete your payment.
              All major credit cards and digital wallets accepted.
            </p>

            {checkoutError && (
              <div role="alert" className="bg-error-100 text-error-700 p-3 rounded-md mb-4 text-body-sm">
                {checkoutError}
              </div>
            )}

            <Button
              size="lg"
              className="w-full"
              onClick={handleCheckout}
              disabled={isLoading || !shipping}
            >
              {isLoading ? 'Redirecting to payment...' : `Pay ${formatPrice(total)}`}
            </Button>

            <p className="text-body-sm text-charcoal-400 dark:text-charcoal-500 text-center mt-3">
              Secure checkout powered by Square
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 shadow-md dark:bg-charcoal-800 lg:sticky lg:top-24">
            <h2 className="text-h5 font-display mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.variantId}`}
                  className="flex justify-between text-body"
                >
                  <span className="text-charcoal-600 dark:text-charcoal-300">
                    {item.name} &times; {item.quantity}
                  </span>
                  <span className="font-medium">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-charcoal-200 dark:border-charcoal-600 pt-3 space-y-2">
              <div className="flex justify-between text-body">
                <span className="text-charcoal-600 dark:text-charcoal-300">Subtotal</span>
                <span>{formatPrice(summary.subtotal)}</span>
              </div>
              <div className="flex justify-between text-body">
                <span className="text-charcoal-600 dark:text-charcoal-300">Shipping</span>
                <span>
                  {shipping
                    ? shipping.isFree
                      ? 'Free'
                      : formatPrice(shipping.cost)
                    : 'Enter ZIP code'}
                </span>
              </div>
              <div className="border-t border-charcoal-200 dark:border-charcoal-600 pt-2 flex justify-between text-h5 font-display">
                <span>Total</span>
                <span className="text-forest-800 dark:text-forest-400">{formatPrice(total)}</span>
              </div>
            </div>

            <Link href="/cart" className="block mt-4">
              <Button size="sm" variant="outline" className="w-full">
                Edit Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
