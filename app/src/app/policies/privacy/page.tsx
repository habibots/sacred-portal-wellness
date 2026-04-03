export const metadata = {
  title: 'Privacy Policy - Sacred Portal Wellness',
  description: 'Privacy policy for Sacred Portal Wellness',
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1 className="text-h1 font-display mb-8">Privacy Policy</h1>
        
        <p className="text-body-sm text-charcoal-600 dark:text-charcoal-400">Last Updated: March 12, 2026</p>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Information We Collect</h2>
          <p className="text-body">
            We collect information you provide directly to us, including name, email address, 
            shipping address, and payment information when you make a purchase or contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">How We Use Your Information</h2>
          <p className="text-body mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 text-body">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and our services</li>
            <li>Send you promotional communications (with your consent)</li>
            <li>Improve our products and services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Information Sharing</h2>
          <p className="text-body">
            We do not sell or rent your personal information to third parties. We may share 
            your information with service providers who assist us in operating our business, 
            such as payment processors and shipping companies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Security</h2>
          <p className="text-body">
            We take reasonable measures to protect your personal information from unauthorized 
            access, use, or disclosure. All payment information is processed securely through 
            our payment processor, Square.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Contact Us</h2>
          <p className="text-body">
            If you have questions about this Privacy Policy, please contact us at 
            info@sacredportalwellness.com
          </p>
        </section>
      </div>
    </div>
  );
}
