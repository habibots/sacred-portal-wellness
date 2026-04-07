import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Sacred Portal Wellness",
  description:
    "Hand-crafted yoni steam herbs, salves, and yoni steam seats. Holistic nurse coaching for women's hormonal, cycle, digestive, and emotional wellness.",
  url: "https://sacredportalwellness.com",
  image: "https://sacredportalwellness.com/images/logo-wellness.png",
  founder: {
    "@type": "Person",
    name: "Amber Rodriguez",
    jobTitle: "Registered Nurse, Holistic Health Coach",
    description: "RN, BSN, HNB-BC",
  },
  areaServed: {
    "@type": "City",
    name: "San Diego",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: ["https://instagram.com/saacredportal"],
  priceRange: "$$",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "The Sacred Portal Path",
        description:
          "12-week 1:1 holistic nurse coaching program for women's hormonal, cycle, and digestive wellness.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Yoni Steam Herbs",
        description: "Small batch herbal blends for yoni steaming",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Sacred Portal Yoni Seat",
        description: "Hand-crafted cherry hardwood yoni steam seat",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {/* Hero Section - Dark green with forest background */}
      <section className="relative bg-forest-900 py-24 overflow-hidden">
        <Image
          src="/images/forest-background.jpeg"
          alt=""
          fill
          className="object-cover opacity-40"
          style={{ imageRendering: 'auto', filter: 'blur(1px) brightness(0.9)' }}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-transparent to-forest-900/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Image
              src="/images/logo-wellness.png"
              alt="Sacred Portal Wellness"
              width={220}
              height={220}
              className="mx-auto mb-8 rounded-full"
              priority
            />
            <h1 className="text-display font-display text-cream-50 mb-6">
              Sacred Portal Wellness
            </h1>
            <p className="text-h5 text-cream-700 mb-8">
              Small batch herbal medicine &amp; female wellness coaching
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg">Sacred Portal Apothecary</Button>
              </Link>
              <Link href="/coaching">
                <Button size="lg" variant="outline" className="border-cream-500 text-cream-50 hover:bg-cream-50 hover:text-forest-900">
                  Learn About Coaching
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Yoni Seat Feature */}
      <section className="py-16 bg-cream-500 dark:bg-charcoal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto w-full">
              <Image
                src="/images/yoni-seat.jpeg"
                alt="Sacred Portal hand-crafted yoni steam seat with heart-shaped opening"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-h2 font-display mb-6">The Sacred Portal Yoni Seat</h2>
              <p className="text-body-lg text-charcoal-700 dark:text-cream-700 mb-4">
                Hand crafted from cherry hardwood with a skin-safe finisher, our yoni seat is made to
                ensure durability, beauty and safety for use. It is meant to last one person a lifetime.
              </p>
              <Link href="/faq">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Introduction */}
      <section className="py-16 bg-forest-900 text-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-display text-center mb-8">
              Welcome to Your Wellness Journey
            </h2>
            <p className="text-body-lg text-center text-cream-700">
              Sacred Portal Wellness offers holistic yoni steaming products and personalized nurse coaching
              to support your feminine wellness journey. Our products are carefully curated to honor
              your body&apos;s natural wisdom and healing capacity.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-cream-600 py-16 dark:bg-charcoal-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-h4 font-display mb-4">Quality Products</h3>
              <p className="text-body text-charcoal-700 dark:text-cream-700">
                Carefully selected herbs and steaming supplies for your wellness practice
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-h4 font-display mb-4">Expert Guidance</h3>
              <p className="text-body text-charcoal-700 dark:text-cream-700">
                Professional coaching from a registered nurse with holistic certification
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-h4 font-display mb-4">Sacred Space</h3>
              <p className="text-body text-charcoal-700 dark:text-cream-700">
                A nurturing community supporting your feminine health journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-forest-50 dark:bg-forest-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-h2 font-display text-center mb-10">
              How This Work Has Made a Difference
            </h2>
            <blockquote className="bg-white border border-charcoal-100 rounded-lg p-6 sm:p-8 dark:bg-charcoal-800 dark:border-charcoal-700 mb-8">
              <p className="text-body-lg italic text-charcoal-800 leading-relaxed">
                &ldquo;Amber&apos;s approach felt grounded and intentional. I gained clarity around my goals,
                my values, and the habits that were holding me back. I became more aware of my internal
                dialogue and learned how to shift it. That shift in self-trust changed everything. If you&apos;re
                considering working with Amber, trust that instinct. She creates a space where you feel seen,
                supported, and challenged in the best way.&rdquo;
              </p>
              <cite className="block mt-4 text-body-sm font-semibold text-charcoal-600 not-italic">
                &mdash; Danica C, age 50
              </cite>
            </blockquote>
            <blockquote className="bg-white border border-charcoal-100 rounded-lg p-6 sm:p-8 dark:bg-charcoal-800 dark:border-charcoal-700">
              <p className="text-body-lg italic text-charcoal-800 leading-relaxed">
                &ldquo;Before we started working together, I had recently been diagnosed with Stage 4
                Endometriosis. Amber&apos;s ability to cultivate a space that is judgement free and safe to
                be seen is the first thing that helped me shift my relationship to my emotions. Her engagement
                doesn&apos;t feel overwhelming in the slightest either. It&apos;s a beautiful balance between
                training wheels and not needing them either!&rdquo;
              </p>
              <cite className="block mt-4 text-body-sm font-semibold text-charcoal-600 not-italic">
                &mdash; Mariam A, age 30
              </cite>
            </blockquote>
            <div className="text-center mt-8">
              <Link href="/testimonials">
                <Button variant="outline">Read All Testimonials</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-forest-900 overflow-hidden">
        <Image
          src="/images/forest-background.jpeg"
          alt=""
          fill
          className="object-cover opacity-30"
          style={{ imageRendering: 'auto', filter: 'blur(1px) brightness(0.9)' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-transparent to-forest-900/60" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2 font-display text-cream-50 mb-6">
              Ready to Begin?
            </h2>
            <p className="text-body-lg text-cream-700 mb-8">
              Explore our products or learn more about personalized coaching programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg">Browse Apothecary</Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-cream-500 text-cream-50 hover:bg-cream-50 hover:text-forest-900">
                  Meet the Creator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
