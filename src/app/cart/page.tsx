'use client';

import { useCart } from '@/lib/cart/context';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils/format';
import Link from 'next/link';

export default function CartPage() {
  const { items, summary, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-h2 font-display mb-4">Your Cart is Empty</h1>
          <p className="text-body-lg text-charcoal-600 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.productId}-${item.variantId}`}
              className="bg-white rounded-lg p-6 shadow-md flex gap-4"
            >
              <div className="w-24 h-24 bg-cream-600 rounded-md flex-shrink-0 flex items-center justify-center">
                <span className="text-charcoal-400 text-sm">Image</span>
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
                        updateQuantity(item.productId, item.variantId, item.quantity - 1)
                      }
                      className="w-8 h-8 rounded-md border border-charcoal-300 hover:bg-charcoal-50"
                    >
                      −
                    </button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.productId, item.variantId, item.quantity + 1)
                      }
                      className="w-8 h-8 rounded-md border border-charcoal-300 hover:bg-charcoal-50"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.productId, item.variantId)}
                    className="text-error-500 hover:text-error-700 text-body-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-h6 font-semibold text-forest-800">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg p-6 shadow-md sticky top-24">
            <h2 className="text-h5 font-display mb-4">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-body">
                <span className="text-charcoal-600">Subtotal</span>
                <span className="font-medium">{formatPrice(summary.subtotal)}</span>
              </div>
              <div className="flex justify-between text-body">
                <span className="text-charcoal-600">Shipping</span>
                <span className="text-body-sm text-charcoal-500">
                  Calculated at checkout
                </span>
              </div>
              <div className="border-t border-charcoal-200 pt-3 flex justify-between text-h5 font-display">
                <span>Total</span>
                <span className="text-forest-800">{formatPrice(summary.total)}</span>
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
