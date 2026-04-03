import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-display font-display text-forest-800 dark:text-forest-400 mb-4">404</p>
        <h1 className="text-h2 font-display mb-4">Page Not Found</h1>
        <p className="text-body-lg text-charcoal-600 dark:text-charcoal-300 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">Back to Home</Button>
          </Link>
          <Link href="/shop">
            <Button size="lg" variant="outline">Browse Shop</Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="ghost">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
