export const metadata = {
  title: 'How This Work Has Made a Difference - Sacred Portal Wellness',
  description: 'Read testimonials from women who have transformed their lives through Sacred Portal Wellness',
};

const testimonials = [
  {
    quote: `Amber's approach felt grounded and intentional. I gained clarity around my goals, my values, and the habits that were holding me back. I became more aware of my internal dialogue and learned how to shift it. That shift in self-trust changed everything. If you're considering working with Amber, trust that instinct. She creates a space where you feel seen, supported, and challenged in the best way. If you're ready to grow, she'll meet you there and walk with you through the process. Amber's presence and guidance made a real difference. This wasn't just coaching—it was a catalyst for deeper self-awareness and lasting change.`,
    name: 'Danica C',
    age: 50,
  },
  {
    quote: `Amber was very positive and she drew me in with her curiosity. I appreciated her thoughtful perspectives and effective communication skills which made it easy to trust her. Her attention to detail really stood out and she often provided resources. I greatly appreciated when she shared her insights! She genuinely cared about my progress, which showed in how she consistently supported me by asking me deep questions that encouraged me to confront difficult emotions instead of avoiding them. I loved that she always reminded me of reframing something difficult so that I could move forward with a more positive mindset. I can't say enough about what a pleasurable and positive experience I had with her! I would highly recommend Amber as your nurse coach on your journey.`,
    name: 'Lene R',
    age: 43,
  },
  {
    quote: `Before we started working together, I had recently been diagnosed with Stage 4 Endometriosis via ovarian cystectomy. Right before we starting working together, I was 2 months post op; I felt defeated being prescribed birth control as a bandaid and as a mask for future Endo symptoms. Amber's suggestions have helped me stay on top of my health-conscious integrations like herbal tinctures, tea blends and steaming for seamless transition from luteal to menstrual. Amber's ability to cultivate a space that is judgement free and safe to be seen is the first thing that helped me shift my relationship to my emotions--I was able to truly see how my emotions were a reflection of my hormones figuring themselves out. I would tell anyone on the fence about working with Amber that her knowledge and pragmatic solutions really do create a sturdy structure. I would tell them that she has very good listening skills and keen perceptivity. The nuances she is able to pick up on and the capacity to take all things into consideration was incredible! Her engagement doesn't feel overwhelming in the slightest either. It's a beautiful balance between training wheels and not needing them either!`,
    name: 'Mariam A',
    age: 30,
  },
  {
    quote: `Working with Amber as my nurse coach was a wonderful and unexpected experience. I initially questioned whether nurse coaching was something I truly needed, but I am so glad I decided to move forward. Amber is incredibly knowledgeable, and her background as a practicing nurse added so much value to our work together. She created a safe, comfortable space that made it easy to openly share my life experiences and struggles. She provided meaningful suggestions, shared excellent resources, and kept me accountable without ever being pushy. Some of her guidance helped me get back on schedule and create a healthy routine that is achievable. Working with Amber was an incredibly positive way to close out 2025.`,
    name: 'R.S.',
    age: 30,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h1 font-display mb-4 text-center">
          How This Work Has Made a Difference
        </h1>
        <p className="text-body-lg text-charcoal-600 text-center mb-12">
          Real stories from women who have transformed their lives
        </p>

        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-white border border-charcoal-100 rounded-lg p-6 sm:p-8 shadow-sm"
            >
              <svg className="w-8 h-8 text-forest-200 mb-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
              </svg>
              <p className="text-body-lg italic text-charcoal-800 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <cite className="block mt-6 text-body font-semibold text-charcoal-600 not-italic">
                &mdash; {t.name}, age {t.age}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  );
}
