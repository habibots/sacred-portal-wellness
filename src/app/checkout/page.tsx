'use client';

import { useCart } from '@/lib/cart/context';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils/format';
import Link from 'next/link';

export default function CheckoutPage() {
  const { items, summary } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-h2 font-display mb-4">Your Cart is Empty</h1>
          <p className="text-body-lg text-charcoal-600 mb-8">
            Add some items to your cart before checking out
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
      <h1 className="text-h1 font-display mb-8">Checkout</h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-cream-600 rounded-lg p-8 text-center">
          <h2 className="text-h3 font-display mb-4">Checkout Coming Soon</h2>
          <p className="text-body-lg text-charcoal-700 mb-6">
            Square payment integration will be completed in the next development phase.
          </p>
          <p className="text-body text-charcoal-600 mb-8">
            Your cart contains {summary.itemCount} {summary.itemCount === 1 ? 'item' : 'items'} 
            totaling {formatPrice(summary.subtotal)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cart">
              <Button size="lg" variant="outline">
                Back to Cart
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg p-6 shadow-md">
          <h3 className="text-h5 font-display mb-4">Order Summary</h3>
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={`${item.productId}-${item.variantId}`}
                className="flex justify-between text-body"
              >
                <span className="text-charcoal-600">
                  {item.name} × {item.quantity}
                </span>
                <span className="font-medium">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            ))}
            <div className="border-t border-charcoal-200 pt-3 flex justify-between text-h5 font-display">
              <span>Total</span>
              <span className="text-forest-800">{formatPrice(summary.total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
