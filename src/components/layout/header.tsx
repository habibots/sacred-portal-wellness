'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart/context';

export function Header() {
  const { summary } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-charcoal-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-h4 font-display text-forest-800">
            Sacred Portal
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/shop" className="text-body hover:text-forest-800 transition-colors">
              Shop
            </Link>
            <Link href="/coaching" className="text-body hover:text-forest-800 transition-colors">
              Coaching
            </Link>
            <Link href="/about" className="text-body hover:text-forest-800 transition-colors">
              About
            </Link>
            <Link href="/faq" className="text-body hover:text-forest-800 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-body hover:text-forest-800 transition-colors">
              Contact
            </Link>
            <Link
              href="/cart"
              className="relative text-body hover:text-forest-800 transition-colors"
              aria-label={`Shopping cart with ${summary.itemCount} items`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              {summary.itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-forest-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {summary.itemCount > 9 ? '9+' : summary.itemCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
