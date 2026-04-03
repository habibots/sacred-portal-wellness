import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: 'Coaching - Sacred Portal Wellness',
  description: 'The Sacred Portal Path - Holistic nurse coaching for women',
};

export default function CoachingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h1 font-display mb-8 text-center">The Sacred Portal Path</h1>

        {/* What is Nurse Coaching */}
        <section className="mb-12">
          <h2 className="text-h3 font-display mb-6 text-center">What is Nurse Coaching?</h2>
          <div className="bg-gradient-to-b from-forest-50 to-cream-500 dark:from-forest-900/30 dark:to-charcoal-900 rounded-lg p-8 space-y-4">
            <p className="text-body-lg text-charcoal-700 dark:text-cream-700">
              Holistic nurse coaching is a modern and personalized care model focused on the whole
              person (mind, body, spirit, emotion) to achieve results desired by the client.
            </p>
            <p className="text-body-lg text-charcoal-700 dark:text-cream-700">
              The nurse coach facilitates structure, resources, accountability, action plans and goals
              to ensure these results are accomplished for the client.
            </p>
            <p className="text-body-lg text-charcoal-800 font-medium">
              Sacred Portal Wellness has created a package called The Sacred Portal Path for women who
              deeply desire to get out of survival mode and thrive in their life.
            </p>
          </div>
        </section>

        {/* Who is it for */}
        <section className="mb-12">
          <h2 className="text-h3 font-display mb-6">Who is it for?</h2>
          <div className="space-y-4 text-body text-charcoal-700 dark:text-cream-700">
            <p>
              It is for women who are struggling with PMS symptoms, endometriosis, PCOS, low sex drive,
              who may want to get off birth control, who want to lose stubborn weight, and who deal with
              life dysregulation due to their gut and period imbalances.
            </p>
            <p>
              It is designed for women who are busy or overwhelmed and who may already be doing their
              own self-work but aren&apos;t seeing the consistent results they desire and need knowledgeable support.
            </p>
            <p>
              The foundation of the program is built with the approach of natural and holistic medicine.
              It is for those who want a sustainable and effective program with reliable support and
              resources to take with them through the rest of their lives.
            </p>
            <p className="font-medium text-forest-800 dark:text-forest-400">
              This is for you if you are fed up with feeling like you are a half-version of your happiest
              or healthiest self and need a pillar of support to become fully YOU.
            </p>
          </div>
        </section>

        {/* Program Includes */}
        <section className="mb-12">
          <h2 className="text-h3 font-display mb-6">Program Includes</h2>
          <ul className="list-disc pl-6 space-y-3 text-body text-charcoal-700 dark:text-cream-700">
            <li>One-on-one coaching session with a registered nurse who is trained in herbalism and as a holistic health coach</li>
            <li>Personalized yoni steaming protocols based on your individual needs</li>
            <li>Guidance on herbal selection and steaming practices</li>
            <li>Holistic lifestyle recommendations for feminine wellness</li>
            <li>Ongoing support and accountability</li>
            <li>Access to exclusive resources and educational materials</li>
          </ul>
        </section>

        {/* Investment */}
        <section className="mb-12">
          <h2 className="text-h3 font-display mb-6">Investment</h2>
          <p className="text-body text-charcoal-700 dark:text-cream-700 mb-6">
            Pricing and program details are customized based on your individual needs and goals.
          </p>
          <div className="text-center">
            <Link href="/coaching/offer">
              <Button size="lg" variant="outline" className="text-lg">
                Change your life here 🪞🌱🪄
              </Button>
            </Link>
          </div>
        </section>

        {/* Transformation Photos */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/transformation-1.jpeg"
                alt="Transformation journey"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/transformation-2.jpeg"
                alt="Transformation journey"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-h3 font-display mb-6">Success Stories</h2>
          <blockquote className="bg-cream-50 border border-charcoal-100 dark:bg-charcoal-800 dark:border-charcoal-700 rounded-lg p-6 sm:p-8 mb-6">
            <p className="text-body italic text-charcoal-800 dark:text-cream-500 leading-relaxed">
              &ldquo;Amber was very positive and she drew me in with her curiosity. I appreciated her
              thoughtful perspectives and effective communication skills which made it easy to trust her.
              Her attention to detail really stood out and she often provided resources. She genuinely
              cared about my progress, which showed in how she consistently supported me by asking me deep
              questions that encouraged me to confront difficult emotions instead of avoiding them. I loved
              that she always reminded me of reframing something difficult so that I could move forward with
              a more positive mindset. I can&apos;t say enough about what a pleasurable and positive experience
              I had with her! I would highly recommend Amber as your nurse coach on your journey.&rdquo;
            </p>
            <cite className="block mt-4 text-body-sm font-semibold text-charcoal-600 dark:text-charcoal-400 not-italic">
              &mdash; Lene R, age 43
            </cite>
          </blockquote>
          <blockquote className="bg-cream-50 border border-charcoal-100 dark:bg-charcoal-800 dark:border-charcoal-700 rounded-lg p-6 sm:p-8">
            <p className="text-body italic text-charcoal-800 dark:text-cream-500 leading-relaxed">
              &ldquo;Before we started working together, I had recently been diagnosed with Stage 4
              Endometriosis via ovarian cystectomy. Right before we started working together, I was 2 months
              post op; I felt defeated being prescribed birth control as a bandaid and as a mask for future
              Endo symptoms. Amber&apos;s suggestions have helped me stay on top of my health-conscious
              integrations like herbal tinctures, tea blends and steaming for seamless transition from luteal
              to menstrual. Amber&apos;s ability to cultivate a space that is judgement free and safe to be
              seen is the first thing that helped me shift my relationship to my emotions. I would tell
              anyone on the fence about working with Amber that her knowledge and pragmatic solutions really
              do create a sturdy structure. It&apos;s a beautiful balance between training wheels and not
              needing them either!&rdquo;
            </p>
            <cite className="block mt-4 text-body-sm font-semibold text-charcoal-600 dark:text-charcoal-400 not-italic">
              &mdash; Mariam A, age 30
            </cite>
          </blockquote>
        </section>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="https://calendly.com/aahmm9966/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg">Book a free 30 minute call with me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
