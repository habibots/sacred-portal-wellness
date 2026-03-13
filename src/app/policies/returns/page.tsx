export const metadata = {
  title: 'Return Policy - Sacred Portal Wellness',
  description: 'Return and refund policy for Sacred Portal Wellness',
};

export default function ReturnsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-h1 font-display mb-8">Return & Refund Policy</h1>
        
        <p className="text-body-sm text-charcoal-600">Last Updated: March 12, 2026</p>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Returns</h2>
          <p className="text-body mb-4">
            Due to the nature of our herbal products, we cannot accept returns on opened items. 
            Unopened items may be returned within 30 days of purchase for a full refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Damaged or Defective Items</h2>
          <p className="text-body">
            If you receive a damaged or defective item, please contact us within 7 days of 
            delivery. We will provide a replacement or full refund at no additional cost to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Refund Process</h2>
          <p className="text-body mb-4">
            Approved refunds will be processed within 5-7 business days and credited to your 
            original payment method.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Shipping Costs</h2>
          <p className="text-body">
            Original shipping costs are non-refundable. Return shipping costs are the 
            responsibility of the customer unless the item was damaged or defective.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Contact Us</h2>
          <p className="text-body">
            For questions about returns or to initiate a return, please contact us at 
            info@sacredportalwellness.com
          </p>
        </section>
      </div>
    </div>
  );
}
