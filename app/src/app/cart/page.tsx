'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart/context';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils/format';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { items, summary, updateQuantity, removeItem } = useCart();
  const [statusMessage, setStatusMessage] = useState('');

  const handleUpdateQuantity = (productId: string, variantId: string | undefined, quantity: number, itemName: string) => {
    if (quantity <= 0) {
      removeItem(productId, variantId);
      setStatusMessage(`Removed ${itemName} from cart`);
    } else {
      updateQuantity(productId, variantId, quantity);
      setStatusMessage(`Updated ${itemName} quantity to ${quantity}`);
    }
  };

  const handleRemoveItem = (productId: string, variantId: string | undefined, itemName: string) => {
    removeItem(productId, variantId);
    setStatusMessage(`Removed ${itemName} from cart`);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-h2 font-display mb-4">Your Cart is Empty</h1>
          <p className="text-body-lg text-charcoal-600 dark:text-charcoal-300 mb-8">
            Add some items to your cart to get started
          </p>
          <Link href="/shop">
            <Button size="lg">Browse Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-h1 font-display mb-8">Shopping Cart</h1>
      <div aria-live="polite" className="sr-only">{statusMessage}</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.variantId}`}
              className="bg-white rounded-lg p-6 shadow-md flex gap-4 dark:bg-charcoal-800"
            >
              <div className="w-24 h-24 bg-cream-600 dark:bg-charcoal-700 rounded-md flex-shrink-0 overflow-hidden relative">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                    unoptimized
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-charcoal-400 text-sm">Image</span>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <h3 className="text-h6 font-display mb-2">{item.name}</h3>
                <p className="text-body text-charcoal-700 mb-4">
                  {formatPrice(item.price)}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.productId, item.variantId, item.quantity - 1, item.name)
                      }
                      className="w-11 h-11 rounded-md border border-charcoal-300 hover:bg-charcoal-50 dark:border-charcoal-600 dark:hover:bg-charcoal-700 flex items-center justify-center"
                      aria-label={`Decrease quantity for ${item.name}`}
                    >
                      &minus;
                    </button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleUpdateQuantity(item.productId, item.variantId, item.quantity + 1, item.name)
                      }
                      className="w-11 h-11 rounded-md border border-charcoal-300 hover:bg-charcoal-50 dark:border-charcoal-600 dark:hover:bg-charcoal-700 flex items-center justify-center"
                      aria-label={`Increase quantity for ${item.name}`}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemoveItem(item.productId, item.variantId, item.name)}
                    className="text-error-500 hover:text-error-700 text-body-sm"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-h6 font-semibold text-forest-800 dark:text-forest-400">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg p-6 shadow-md lg:sticky lg:top-24 dark:bg-charcoal-800">
            <h2 className="text-h5 font-display mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-body">
                <span className="text-charcoal-600 dark:text-charcoal-300">Subtotal</span>
                <span className="font-medium">{formatPrice(summary.subtotal)}</span>
              </div>
              <div className="flex justify-between text-body">
                <span className="text-charcoal-600 dark:text-charcoal-300">Shipping</span>
                <span className="text-body-sm text-charcoal-500">
                  Calculated at checkout
                </span>
              </div>
              <div className="border-t border-charcoal-200 dark:border-charcoal-600 pt-3 flex justify-between text-h5 font-display">
                <span>Total</span>
                <span className="text-forest-800 dark:text-forest-400">{formatPrice(summary.total)}</span>
              </div>
            </div>

            <Link href="/checkout">
              <Button size="lg" className="w-full">
                Proceed to Checkout
              </Button>
            </Link>

            <Link href="/shop">
              <Button size="lg" variant="outline" className="w-full mt-3">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
