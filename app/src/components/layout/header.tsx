'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/cart/context';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const navLinks = [
  { href: '/shop', label: 'Sacred Portal Apothecary' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const { summary } = useCart();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  // Focus trap + Escape key handler for mobile menu
  useEffect(() => {
    if (!isOpen) return;

    const menuEl = menuRef.current;
    const triggerEl = menuButtonRef.current;
    if (!menuEl || !triggerEl) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerEl.focus();
        return;
      }

      if (e.key === 'Tab') {
        const focusableEls = [
          triggerEl,
          ...Array.from(menuEl.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')),
        ];
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-charcoal-100 dark:bg-charcoal-900 dark:border-charcoal-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-forest-900 flex-shrink-0">
              <Image
                src="/images/logo-main.jpeg"
                alt="Sacred Portal Wellness logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="text-h4 font-display text-forest-800 dark:text-forest-400 truncate">Sacred Portal</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-body transition-colors hover:text-forest-800 dark:hover:text-forest-400 ${
                    active
                      ? 'text-forest-800 dark:text-forest-400 font-semibold underline underline-offset-4 decoration-2'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
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
                <span aria-hidden="true" className="absolute -top-2 -right-2 bg-forest-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {summary.itemCount > 9 ? '9+' : summary.itemCount}
                </span>
              )}
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile: cart + hamburger */}
          <div className="flex items-center gap-4 md:hidden flex-shrink-0">
            <ThemeToggle />
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
                <span aria-hidden="true" className="absolute -top-2 -right-2 bg-forest-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {summary.itemCount > 9 ? '9+' : summary.itemCount}
                </span>
              )}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="relative z-50 p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <svg aria-hidden="true" focusable="false" className="pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg aria-hidden="true" focusable="false" className="pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <nav
          id="mobile-menu"
          ref={menuRef}
          aria-label="Mobile"
          className="md:hidden border-t border-charcoal-100 bg-white dark:bg-charcoal-900 dark:border-charcoal-700"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`text-body-lg py-2 min-h-[44px] flex items-center hover:text-forest-800 transition-colors ${
                    active ? 'text-forest-800 dark:text-forest-400 font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
