export const metadata = {
  title: 'Medical Disclaimer - Sacred Portal Wellness',
  description: 'Medical disclaimer for Sacred Portal Wellness',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
        <h1 className="text-h1 font-display mb-8">Medical Disclaimer</h1>
        
        <p className="text-body-sm text-charcoal-600 dark:text-charcoal-400">Last Updated: March 12, 2026</p>

        <div className="bg-warning-100 dark:bg-warning-100/10 border-l-4 border-warning-500 p-6 mb-8">
          <p className="text-body font-semibold mb-2">Important Notice</p>
          <p className="text-body">
            The information provided on this website is for educational purposes only and is 
            not intended as medical advice.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Not Medical Advice</h2>
          <p className="text-body mb-4">
            The content on this website, including product descriptions, blog posts, and coaching 
            information, is not intended to diagnose, treat, cure, or prevent any disease or 
            medical condition. Always consult with a qualified healthcare provider before 
            beginning any new health practice or using any herbal products.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Individual Results May Vary</h2>
          <p className="text-body">
            The experiences and testimonials shared on this website are individual experiences 
            and may not be typical. Your results may vary based on your unique circumstances, 
            health status, and adherence to recommended practices.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Contraindications</h2>
          <p className="text-body mb-4">
            Yoni steaming is not recommended for everyone. Do not use yoni steaming if you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-body">
            <li>Are pregnant or trying to conceive</li>
            <li>Are menstruating</li>
            <li>Have an active infection</li>
            <li>Have open wounds or sores</li>
            <li>Have an IUD (consult your healthcare provider)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Professional Credentials</h2>
          <p className="text-body">
            While the founder is a Registered Nurse (RN, BSN) and Holistic Health Coach (HC-NC), 
            the services and products offered through Sacred Portal Wellness are not a substitute 
            for professional medical care. Always consult with your physician or other qualified 
            healthcare provider regarding any medical questions or conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-h3 font-display mb-4">Assumption of Risk</h2>
          <p className="text-body">
            By using our products and services, you acknowledge that you have read this disclaimer 
            and assume all risks associated with the use of yoni steaming and herbal products.
          </p>
        </section>
      </div>
    </div>
  );
}
