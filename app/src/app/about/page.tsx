export const metadata = {
  title: 'About - Sacred Portal Wellness',
  description: 'Meet Amber Rodriguez, RN, BSN, HNB-BC - Your guide to holistic feminine wellness',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h1 font-display mb-8 text-center">Meet the Creator</h1>
        
        <div className="prose prose-lg mx-auto">
          <div className="bg-cream-600 dark:bg-charcoal-800 rounded-lg p-8 mb-8">
            <h2 className="text-h3 font-display mb-4">Amber Rodriguez</h2>
            <p className="text-h6 text-charcoal-700 dark:text-charcoal-300 mb-4">
              RN, BSN, HNB-BC
            </p>
            <p className="text-body-lg">
              Registered Nurse | Holistic Health Coach | Women&apos;s Wellness Advocate
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-h3 font-display mb-4">My Journey</h2>
            <p className="text-body mb-4">
              As a registered nurse with a passion for holistic health, I discovered the profound 
              benefits of yoni steaming during my own wellness journey. This ancient practice, 
              combined with modern nursing knowledge, has transformed how I approach women&apos;s health.
            </p>
            <p className="text-body mb-4">
              Sacred Portal Wellness was born from a desire to share these healing practices with 
              women seeking natural, empowering approaches to their health and wellbeing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-display mb-4">Professional Background</h2>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>Registered Nurse (RN)</li>
              <li>Bachelor of Science in Nursing (BSN)</li>
              <li>Holistic Nurse Board Certified (HNB-BC)</li>
              <li>Specialized training in women&apos;s wellness and reproductive health</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-display mb-4">My Approach</h2>
            <p className="text-body mb-4">
              I believe in honoring the wisdom of traditional healing practices while maintaining 
              the highest standards of safety and evidence-based care. Every product and service 
              offered through Sacred Portal is carefully selected to support your body&apos;s natural 
              healing capacity.
            </p>
            <p className="text-body">
              Whether you&apos;re new to yoni steaming or an experienced practitioner, I&apos;m here to 
              guide you with professional expertise and compassionate support.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
