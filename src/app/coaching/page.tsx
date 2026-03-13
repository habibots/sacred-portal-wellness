import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: 'Coaching - Sacred Portal Wellness',
  description: 'The Sacred Portal Path - Personalized holistic wellness coaching',
};

export default function CoachingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h1 font-display mb-8 text-center">The Sacred Portal Path</h1>
        
        <div className="bg-gradient-to-b from-forest-50 to-cream-500 rounded-lg p-8 mb-12 text-center">
          <p className="text-h4 font-display mb-4">
            Personalized Holistic Wellness Coaching
          </p>
          <p className="text-body-lg text-charcoal-700">
            A transformative journey to reclaim your feminine wellness
          </p>
        </div>

        <div className="prose prose-lg mx-auto">
          <section className="mb-8">
            <h2 className="text-h3 font-display mb-4">What is The Sacred Portal Path?</h2>
            <p className="text-body mb-4">
              The Sacred Portal Path is a comprehensive coaching program that combines professional 
              nursing expertise with holistic health practices. This personalized journey supports 
              you in discovering and implementing wellness practices that honor your unique needs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-display mb-4">Program Includes</h2>
            <ul className="list-disc pl-6 space-y-3 text-body">
              <li>One-on-one coaching sessions with a registered nurse and holistic health coach</li>
              <li>Personalized yoni steaming protocols based on your individual needs</li>
              <li>Guidance on herbal selection and steaming practices</li>
              <li>Holistic lifestyle recommendations for feminine wellness</li>
              <li>Ongoing support and accountability</li>
              <li>Access to exclusive resources and educational materials</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-display mb-4">Who This Is For</h2>
            <p className="text-body mb-4">
              The Sacred Portal Path is designed for women who:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-body">
              <li>Want to explore natural approaches to feminine wellness</li>
              <li>Are seeking support for menstrual health and hormonal balance</li>
              <li>Desire personalized guidance from a healthcare professional</li>
              <li>Are ready to invest in their long-term wellbeing</li>
              <li>Value both traditional wisdom and modern medical knowledge</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-h3 font-display mb-4">Investment</h2>
            <p className="text-body mb-4">
              Pricing and program details are customized based on your individual needs and goals.
            </p>
          </section>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg">Schedule a Consultation</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
