'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-error-100 dark:bg-error-900/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-error-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>

        <h1 className="text-h2 font-display mb-4">Something Went Wrong</h1>
        <p className="text-body-lg text-charcoal-600 dark:text-charcoal-300 mb-8">
          We encountered an unexpected error. Please try again.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={reset}>
            Try Again
          </Button>
          <Link href="/">
            <Button size="lg" variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
