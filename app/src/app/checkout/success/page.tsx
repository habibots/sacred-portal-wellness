'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/cart/context';
import Link from 'next/link';

export default function SuccessPage() {
  const { clearCart } = useCart();

  // Clear cart on mount — user has returned from Square successfully
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-success-100 dark:bg-success-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-success-900 dark:text-success-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-h1 font-display mb-4">Order Confirmed!</h1>
        <p className="text-body-lg text-charcoal-700 dark:text-cream-700 mb-8">
          Thank you for your purchase. You will receive an email confirmation shortly.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop">
            <Button size="lg">Continue Shopping</Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
