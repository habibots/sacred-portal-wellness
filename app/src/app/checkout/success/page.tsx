import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Order Confirmation - Sacred Portal Wellness',
  description: 'Your order has been confirmed',
};

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-success-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-success-900"
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
        <p className="text-body-lg text-charcoal-700 mb-8">
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
