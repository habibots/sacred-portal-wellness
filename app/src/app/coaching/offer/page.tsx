import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: 'The Sacred Portal Path - Offer Outline',
  description: 'An intimate 1:1 embodiment coaching method for women ready to thrive',
};

export default function OfferOutlinePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-forest-900 py-20 overflow-hidden">
        <Image
          src="/images/forest-background.jpeg"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="relative container mx-auto px-4 text-center">
          <Image
            src="/images/logo-main.jpeg"
            alt="Sacred Portal Wellness"
            width={100}
            height={100}
            className="mx-auto mb-8 rounded-full"
          />
          <h1 className="text-h1 font-display text-cream-50 mb-6">The Sacred Portal Path</h1>
          <p className="text-body-lg text-cream-700 max-w-3xl mx-auto">
            An intimate 1:1 embodiment coaching method for women whose life overwhelm has wrecked their
            hormones, cycles, digestion, and energy &mdash; and are tired of being in maintenance mode
            instead of thriving.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Why is this important */}
          <section className="mb-16">
            <h2 className="text-h2 font-display mb-6 text-center">Why is this important?</h2>
            <div className="space-y-4 text-body text-charcoal-700 dark:text-cream-700">
              <p>
                Over the last 10 years, I dealt with these same issues through trial and error.
              </p>
              <p>
                I was 60 pounds overweight in my early 20s &amp; felt I had unlived potential but didn&apos;t
                know of the tools to properly take care of myself in mind, body and spirit. On sight, you
                could see how lost I was to myself.
              </p>
              <p>
                I wish I had someone who understood my needs, &amp; could both knowledgeably &amp; intuitively
                guide me to help me overhaul my life in a way that didn&apos;t feel overwhelming but was fully effective.
              </p>
              <p className="font-medium text-forest-800 dark:text-forest-400">
                Time &amp; energy isn&apos;t something we get back in this life &mdash; let me be the woman to
                walk alongside you in your journey of self-empowerment, self-love &amp; self-actualization to
                be the fullest kickass version of yourself that you know you are.
              </p>
            </div>
          </section>

          {/* Transformation Photos */}
          <section className="mb-16">
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

          {/* Program Overview */}
          <section className="mb-16 bg-forest-50 dark:bg-forest-900/20 rounded-lg p-8">
            <p className="text-body-lg text-charcoal-700 dark:text-cream-700 mb-6">
              The Sacred Portal Path is a 12 week container to get clear on the fastest way to stop fighting
              your body &mdash; get expert 1:1 coaching support by a female wellness coach and registered nurse
              that has worked in healthcare for 10 years. You will receive tools &amp; awareness you need in your
              life to have regulated hormones, stable moods &amp; energy, better digestion, and a deeper understanding
              of the rhythm of your body so you can live in peace within your body.
            </p>

            <h3 className="text-h4 font-display mb-4">This offer is for you if you:</h3>
            <ul className="space-y-3 text-body text-charcoal-700 dark:text-cream-700">
              <li>🪞 Have a cycle that feels chaotic, heavy, painful, or emotionally destabilizing</li>
              <li>🪞 Experience PMS symptoms that dysregulates your life, or you have specific cycle-related concerns</li>
              <li>🪞 You feel bloated, inefficient, or exhausted no matter how &ldquo;healthy&rdquo; you are</li>
              <li>🪞 You know stress is the root &mdash; but don&apos;t know how to unwind it in your body</li>
              <li>🪞 You want personalized, private support (no group sharing and no surface-level advice) that doesn&apos;t add to the overwhelm of your life but instead reinvents how efficient you can be in it</li>
            </ul>
          </section>

          {/* By the end */}
          <section className="mb-16">
            <h3 className="text-h3 font-display mb-6">By the end of this work you will:</h3>
            <ul className="space-y-3 text-body text-charcoal-700 dark:text-cream-700">
              <li>🌱 Understand your cycle deeper</li>
              <li>🌱 Experience less PMS dysregulation and discomfort around your cycles</li>
              <li>🌱 Have improved digestion across the board</li>
              <li>🌱 Become self-sovereign in your body</li>
              <li>🌱 Reduce weight related to your stress</li>
              <li>🌱 Grow a felt sense of safety inside yourself with a regimen and a practice surrounding your female health &amp; gut</li>
            </ul>
          </section>

          {/* Phase One */}
          <section className="mb-12 border-l-4 border-forest-600 pl-6">
            <h3 className="text-h3 font-display mb-2">Phase One: Awaken</h3>
            <p className="text-body-sm text-charcoal-500 mb-4">Week 1&ndash;2</p>
            <p className="text-body text-charcoal-700 dark:text-cream-700 mb-4 font-medium">
              Purpose: To stop the guessing, interrupt what&apos;s actively dysregulating your body, and create
              immediate relief through clarity, structure, and safety.
            </p>
            <ul className="space-y-2 text-body text-charcoal-700 dark:text-cream-700 mb-6">
              <li>🪄 Full body &amp; lifestyle audit (hormonal, emotional, digestive, energetic)</li>
              <li>🪄 Decide what to pause, purge or keep to get clear &amp; efficient on what works for you</li>
              <li>🪄 Create a personalized care plan</li>
              <li>🪄 Get appointments for other modalities or supportive care in your schedule</li>
              <li>🪄 Explore your herbal supplements options &amp; order them</li>
              <li>🪄 Tracking with before pictures, voice memos &amp; journaling prompts</li>
            </ul>
            <div className="bg-forest-50 dark:bg-forest-900/20 rounded-lg p-4 mb-4">
              <p className="text-body font-medium text-forest-800 dark:text-forest-400 mb-2">Bonuses:</p>
              <ul className="space-y-1 text-body text-charcoal-700 dark:text-cream-700">
                <li>🪄 10% off Sacred Portal Wellness custom made yoni seats</li>
                <li>🪄 Complimentary yoni steam herbal blend or herbal wound healing salve crafted by Sacred Portal Wellness</li>
              </ul>
            </div>
            <div className="mt-4">
              <p className="text-body font-medium mb-2">By the end of Awaken, you&apos;ll feel:</p>
              <ul className="space-y-1 text-body text-charcoal-700 dark:text-cream-700">
                <li>⚡️ Relief &mdash; because you finally understand what&apos;s going on</li>
                <li>⚡️ Grounded &mdash; you have a plan that fits your real life</li>
                <li>⚡️ Seen &mdash; your body makes sense instead of feeling &ldquo;broken&rdquo;</li>
                <li>⚡️ Safe &mdash; your nervous system knows support is here</li>
              </ul>
            </div>
          </section>

          {/* Phase Two */}
          <section className="mb-12 border-l-4 border-forest-600 pl-6">
            <h3 className="text-h3 font-display mb-2">Phase Two: The Journey</h3>
            <p className="text-body-sm text-charcoal-500 mb-4">Week 3&ndash;8</p>
            <p className="text-body text-charcoal-700 dark:text-cream-700 mb-4 font-medium">
              Purpose: To gently re-train your body into regulation through consistent, loving, doable
              practices &mdash; while building deep trust with your cycle and gut.
            </p>
            <ul className="space-y-2 text-body text-charcoal-700 dark:text-cream-700 mb-6">
              <li>🪄 Implement your personalized digestive &amp; hormonal practices</li>
              <li>🪄 Phase in rituals and modalities (yoni steams, acupuncture, etc) your body responds to best</li>
              <li>🪄 Dial in herbal, nutritional &amp; supplement support (with real-time adjustments)</li>
              <li>🪄 Build awareness of your true baseline, habits and internal mindset</li>
              <li>🪄 Daily &amp; weekly tracking through voice memos, journaling, pictures</li>
              <li>🪄 Ongoing accountability so nothing feels overwhelming or isolating</li>
            </ul>
            <div className="mt-4">
              <p className="text-body font-medium mb-2">What you&apos;ll get in The Journey:</p>
              <ul className="space-y-1 text-body text-charcoal-700 dark:text-cream-700">
                <li>⚡️ More energy with less effort</li>
                <li>⚡️ Reduced PMS, bloating, and emotional volatility</li>
                <li>⚡️ A calmer relationship with food, rest, and your body</li>
                <li>⚡️ Confidence in reading your cycle and responding to it</li>
                <li>⚡️ A sense of &ldquo;I know what to do now&rdquo;</li>
              </ul>
            </div>
          </section>

          {/* Phase Three */}
          <section className="mb-16 border-l-4 border-forest-600 pl-6">
            <h3 className="text-h3 font-display mb-2">Phase Three: Integrate</h3>
            <p className="text-body-sm text-charcoal-500 mb-4">Week 9&ndash;12</p>
            <p className="text-body text-charcoal-700 dark:text-cream-700 mb-4 font-medium">
              Purpose: To anchor your new way of living so it&apos;s sustainable, embodied, and part of who
              you are &mdash; not just something you tried for 12 weeks.
            </p>
            <ul className="space-y-2 text-body text-charcoal-700 dark:text-cream-700 mb-6">
              <li>🪄 Guided reflections for identity-level integration</li>
              <li>🪄 Review &amp; refine your long-term care rhythm</li>
              <li>🪄 Processing of the last 12 weeks</li>
              <li>🪄 After photos &amp; embodied, celebratory comparison</li>
              <li>🪄 Celebrate wins</li>
              <li>🪄 Ritualized closing to honor your transformation &amp; future self</li>
            </ul>
            <div className="mt-4">
              <p className="text-body font-medium mb-2">What you leave with:</p>
              <ul className="space-y-1 text-body text-charcoal-700 dark:text-cream-700">
                <li>⚡️ A body that feels like home</li>
                <li>⚡️ Tools you can return to again and again</li>
                <li>⚡️ Trust in your intuition and physical signals</li>
                <li>⚡️ A regulated relationship with your cycle &amp; gut</li>
                <li>⚡️ Pride, confidence, and deep self-respect</li>
              </ul>
            </div>
          </section>

          {/* Support */}
          <section className="mb-16 bg-cream-600 dark:bg-charcoal-800 rounded-lg p-8">
            <h3 className="text-h3 font-display mb-6 text-center">The support you get:</h3>
            <ul className="space-y-3 text-body text-charcoal-700 dark:text-cream-700">
              <li>✨ 12 week program</li>
              <li>✨ 1.5 hour introductory session and closing session (sessions 1 &amp; 12)</li>
              <li>✨ Weekly 60 minute 1:1 sessions for close support, making adjustments and celebrating your wins</li>
              <li>✨ Customized care plan specific to your needs</li>
              <li>✨ WhatsApp text support on questions that come up outside of sessions</li>
            </ul>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h3 className="text-h2 font-display mb-6 text-center">Pricing</h3>
            <p className="text-body text-charcoal-700 dark:text-cream-700 mb-8 text-center max-w-2xl mx-auto">
              A limited number of founding &amp; early access spots are offered at a reduced rate while this
              method is being refined. This pricing is intentional to make it more accessible for you if you
              feel deeply aligned with this work.
            </p>
            <p className="text-body text-charcoal-600 mb-8 text-center">
              Once spots are filled in the first 2 tiers, the Sacred Portal Path package will return to the
              standard rate of $3,000 for 12 weeks. Monthly payment plans are available.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-forest-50 dark:bg-forest-900/20 rounded-lg p-6 text-center border-2 border-forest-200">
                <p className="text-body-sm text-forest-700 font-medium mb-2">Founding Clients</p>
                <p className="text-body-sm text-charcoal-500 dark:text-charcoal-400 mb-4">(3 spots available)</p>
                <p className="text-h2 font-display text-forest-800">$1,800</p>
                <p className="text-body-sm text-charcoal-600 dark:text-charcoal-300 mt-1">for 12 weeks</p>
              </div>
              <div className="bg-forest-50 dark:bg-forest-900/20 rounded-lg p-6 text-center border-2 border-forest-400">
                <p className="text-body-sm text-forest-700 font-medium mb-2">Early Access</p>
                <p className="text-body-sm text-charcoal-500 dark:text-charcoal-400 mb-4">(6 spots available)</p>
                <p className="text-h2 font-display text-forest-800">$2,500</p>
                <p className="text-body-sm text-charcoal-600 dark:text-charcoal-300 mt-1">for 12 weeks</p>
              </div>
              <div className="bg-forest-50 dark:bg-forest-900/20 rounded-lg p-6 text-center border-2 border-forest-600">
                <p className="text-body-sm text-forest-700 font-medium mb-2">Standard Rate</p>
                <p className="text-body-sm text-charcoal-500 dark:text-charcoal-400 mb-4">&nbsp;</p>
                <p className="text-h2 font-display text-forest-800">$3,000</p>
                <p className="text-body-sm text-charcoal-600 dark:text-charcoal-300 mt-1">for 12 weeks</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link href="https://calendly.com/aahmm9966/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg">Book a free 30 minute call with me</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
