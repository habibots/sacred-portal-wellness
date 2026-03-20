import { ContactForm } from './contact-form';

export const metadata = {
  title: 'Contact - Sacred Portal Wellness',
  description: 'Get in touch with Sacred Portal Wellness',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-h1 font-display mb-8 text-center">Contact Us</h1>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-8">
          <h2 className="text-h4 font-display mb-6">Send a Message</h2>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-h6 font-display mb-2">Email</h3>
            <a
              href="mailto:info@sacredportalwellness.com"
              className="text-body-sm text-forest-800 hover:text-forest-700 break-all"
            >
              info@sacredportalwellness.com
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-h6 font-display mb-2">Instagram</h3>
            <a
              href="https://instagram.com/saacredportal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-forest-800 hover:text-forest-700"
            >
              @saacredportal
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <h3 className="text-h6 font-display mb-2">Location</h3>
            <p className="text-body-sm text-charcoal-700">
              San Diego, California
            </p>
          </div>
        </div>

        <div className="bg-cream-600 rounded-lg p-6 sm:p-8">
          <h2 className="text-h5 font-display mb-4">Business Hours</h2>
          <p className="text-body text-charcoal-700 mb-4">
            I typically respond to inquiries within 24-48 hours.
          </p>
          <p className="text-body-sm text-charcoal-600">
            For urgent matters, please indicate &quot;URGENT&quot; in your subject line.
          </p>
        </div>
      </div>
    </div>
  );
}
