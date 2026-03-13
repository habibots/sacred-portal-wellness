import Link from 'next/link';

export function Header() {
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
          </nav>
        </div>
      </div>
    </header>
  );
}
