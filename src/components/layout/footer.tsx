import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-500 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-h6 font-display mb-4">Sacred Portal</h3>
            <p className="text-body-sm text-charcoal-300">
              Holistic wellness and yoni steaming products
            </p>
          </div>
          <div>
            <h4 className="text-h6 mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/shop" className="text-body-sm hover:text-moss-400 transition-colors">
                Shop
              </Link>
              <Link href="/coaching" className="text-body-sm hover:text-moss-400 transition-colors">
                Coaching
              </Link>
              <Link href="/about" className="text-body-sm hover:text-moss-400 transition-colors">
                About
              </Link>
              <Link href="/faq" className="text-body-sm hover:text-moss-400 transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-h6 mb-4">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/policies/privacy" className="text-body-sm hover:text-moss-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/policies/returns" className="text-body-sm hover:text-moss-400 transition-colors">
                Return Policy
              </Link>
              <Link href="/policies/disclaimer" className="text-body-sm hover:text-moss-400 transition-colors">
                Medical Disclaimer
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-charcoal-700 text-center text-body-sm text-charcoal-400">
          © {new Date().getFullYear()} Sacred Portal Wellness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
