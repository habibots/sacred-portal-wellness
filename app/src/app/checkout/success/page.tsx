import Link from 'next/link';
import { Button } from '@/components/ui/button';
import squareClient from '@/lib/square/client';
import { ClearCartOnMount } from './clear-cart-on-mount';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Order Confirmed - Sacred Portal Wellness',
  description: 'Thank you for your order',
};

interface SearchParams {
  orderId?: string;
  // Square may also send transactionId / checkoutId; we only need orderId.
}

/**
 * Server-side payment verification.
 *
 * Square's hosted checkout redirects back here with `?orderId=...` after
 * payment. We look that order up via the Square Orders API and only show the
 * success state if Square confirms the order is COMPLETED. Without this
 * check, anyone could visit /checkout/success directly and trigger a "your
 * order was placed" UI (and a cart clear) without paying.
 */
async function verifyOrder(orderId: string | undefined): Promise<'verified' | 'pending' | 'invalid'> {
  if (!orderId) return 'invalid';

  try {
    const response = await squareClient.orders.get({ orderId });
    const order = response.order;
    if (!order) return 'invalid';

    // Square marks fully-paid orders as COMPLETED. An order with tenders but
    // a non-COMPLETED state may still be settling — treat as pending.
    if (order.state === 'COMPLETED') return 'verified';
    if ((order.tenders?.length ?? 0) > 0) return 'pending';
    return 'invalid';
  } catch (error) {
    console.error('Order verification failed:', error);
    return 'invalid';
  }
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const status = await verifyOrder(params.orderId);

  if (status === 'invalid') {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-h1 font-display mb-4">We couldn&apos;t confirm your order</h1>
          <p className="text-body-lg text-charcoal-700 dark:text-cream-700 mb-8">
            We weren&apos;t able to verify a completed payment. If you believe this
            is a mistake, please contact us with the date and time of your purchase
            and we&apos;ll look into it right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="outline">
                Back to Shop
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-h1 font-display mb-4">Your order is processing</h1>
          <p className="text-body-lg text-charcoal-700 dark:text-cream-700 mb-8">
            Square is still confirming your payment. You&apos;ll receive an email
            confirmation shortly. Please refresh this page in a moment.
          </p>
          <Link href="/">
            <Button size="lg" variant="outline">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // status === 'verified'
  return (
    <div className="container mx-auto px-4 py-12">
      <ClearCartOnMount />
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
