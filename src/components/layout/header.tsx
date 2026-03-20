'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart/context';

const navLinks = [
  { href: '/shop', label: 'Shop' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const { summary } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-charcoal-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-h4 font-display text-forest-800">
            Sacred Portal
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body hover:text-forest-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
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

          {/* Mobile: cart + hamburger */}
          <div className="flex items-center gap-4 md:hidden">
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
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden border-t border-charcoal-100 bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-body-lg py-2 hover:text-forest-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
