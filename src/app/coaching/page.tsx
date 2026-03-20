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

          <section className="mb-8">
            <h2 className="text-h3 font-display mb-6">Success Stories</h2>
            <blockquote className="bg-cream-50 border border-charcoal-100 rounded-lg p-6 sm:p-8 relative">
              <svg className="absolute top-4 left-4 sm:top-6 sm:left-6 w-8 h-8 text-forest-200" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
              </svg>
              <div className="pl-8 sm:pl-10 space-y-4">
                <p className="text-body italic text-charcoal-800 leading-relaxed">
                  &ldquo;Working with Amber as my nurse coach was a wonderful and unexpected experience.
                  I initially questioned whether nurse coaching was something I truly needed, but I am so
                  glad I decided to move forward and work with her. Amber is incredibly knowledgeable, and
                  her background as a practicing nurse added so much value to our work together. Her expertise
                  was especially helpful as I navigated some personal needs and challenges, and she consistently
                  offered thoughtful guidance and practical advice.&rdquo;
                </p>
                <p className="text-body italic text-charcoal-800 leading-relaxed">
                  &ldquo;She created a safe, comfortable space that made it easy to openly share my life
                  experiences and struggles. Amber made the coaching process feel relaxed yet purposeful,
                  allowing me the time and clarity to reflect on what I wanted to work through while guiding
                  each session in an organized and professional way. She provided meaningful suggestions,
                  shared excellent resources that aligned with my goals, and kept me accountable without ever
                  being pushy. Some of her guidance helped me get back on schedule and create a healthy routine
                  for me that is achievable. She also recommended some herbs and tinctures that have really
                  supported my overall health that I am loving and so grateful to have in my routine.&rdquo;
                </p>
                <p className="text-body italic text-charcoal-800 leading-relaxed">
                  &ldquo;You never truly know how impactful an experience can be until you give it a chance,
                  and working with Amber was an incredibly positive way to close out 2025.&rdquo;
                </p>
              </div>
              <cite className="block mt-6 pl-8 sm:pl-10 text-body-sm font-semibold text-charcoal-600 not-italic">
                &mdash; R.S., Age 30
              </cite>
            </blockquote>
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
