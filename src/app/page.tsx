import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-forest-50 to-cream-500 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-display font-display text-forest-900 mb-6">
              Sacred Portal Wellness
            </h1>
            <p className="text-h5 text-charcoal-700 mb-8">
              Holistic wellness and yoni steaming for women's health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg">Shop Products</Button>
              </Link>
              <Link href="/coaching">
                <Button size="lg" variant="outline">
                  Learn About Coaching
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-display text-center mb-8">
              Welcome to Your Wellness Journey
            </h2>
            <div className="prose prose-lg mx-auto text-charcoal-700">
              <p className="text-body-lg text-center">
                Sacred Portal Wellness offers holistic yoni steaming products and personalized coaching 
                to support your feminine wellness journey. Our products are carefully curated to honor 
                your body's natural wisdom and healing capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-cream-600 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-h4 font-display mb-4">Quality Products</h3>
              <p className="text-body text-charcoal-700">
                Carefully selected herbs and steaming supplies for your wellness practice
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-h4 font-display mb-4">Expert Guidance</h3>
              <p className="text-body text-charcoal-700">
                Professional coaching from a registered nurse with holistic certification
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-h4 font-display mb-4">Sacred Space</h3>
              <p className="text-body text-charcoal-700">
                A nurturing community supporting your feminine health journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-h2 font-display mb-6">
              Ready to Begin?
            </h2>
            <p className="text-body-lg text-charcoal-700 mb-8">
              Explore our products or learn more about personalized coaching programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg">Browse Shop</Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
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
