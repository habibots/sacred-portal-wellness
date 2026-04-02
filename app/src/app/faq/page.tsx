export const metadata = {
  title: 'FAQ - Sacred Portal Wellness',
  description: 'Frequently asked questions about yoni steaming and our products',
};

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is yoni steaming?',
      answer: 'Yoni steaming, also known as vaginal steaming or v-steaming, is an ancient practice where a woman sits over a pot of steaming water infused with herbs. The warm herbal steam is believed to support feminine wellness, cleanse the reproductive system, and promote relaxation.',
    },
    {
      question: 'Is yoni steaming safe?',
      answer: 'When done correctly with appropriate herbs and temperature, yoni steaming is generally considered safe for most women. However, it is not recommended during menstruation, pregnancy, or if you have an active infection. Always consult with a healthcare provider before beginning any new wellness practice.',
    },
    {
      question: 'How often should I steam?',
      answer: 'Frequency varies based on individual needs and goals. Many practitioners recommend steaming 1-3 times per month, typically after menstruation. Your personalized protocol will be determined during coaching sessions based on your unique situation.',
    },
    {
      question: 'What herbs do you use?',
      answer: 'Our herbal blends are carefully curated combinations of traditional herbs known for their beneficial properties. Commonly used herbs include mugwort, rosemary, lavender, calendula, rose petals, motherwort, basil, red raspberry leaf, yarrow, damiana, and chamomile. There are three unique, carefully created blends. The Green Goddess is to support the menstruating woman, Through the Mama Portal is for postpartum healing, and Yoni Clarity is for treating vaginal discomfort associated with infections such as itching, yeast or fungal infections.',
    },
    {
      question: 'How long does a steaming session last?',
      answer: 'A typical yoni steaming session lasts 20-30 minutes. It is important not to steam for too long, as this can cause irritation. Always follow the instructions provided with your herbs.',
    },
    {
      question: 'Can I steam while menstruating?',
      answer: 'No, yoni steaming is not recommended during menstruation. The best time to steam is typically after your period has ended or a few days before your expected period to induce a full bleed.',
    },
    {
      question: 'Do I need special equipment?',
      answer: 'Due to the squatting positioning of your body over hot water, if proper equipment is not used, there is a risk for skin burns. While you can use a simple pot and stool, we offer specially designed yoni steam seats that make the practice more comfortable and effective. These seats are portable and easy to use.',
    },
    {
      question: 'What are details for the Yoni Seat?',
      answer: 'The yoni seat is made to ensure durability, beauty and safety for use. It is meant to last one person a lifetime. It is professionally hand crafted from cherry hardwood and skin-safe finisher. It is weight tested up to 300lbs with proper use and attachment of legs.',
    },
    {
      question: 'What should I expect during and after steaming?',
      answer: 'During steaming, you should feel gentle warmth and relaxation. After steaming, many women report feeling calm, refreshed, and more connected to their bodies. Some may notice changes in their menstrual cycle or discharge, which is normal as the body responds to the practice.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-h1 font-display mb-8 text-center">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-h5 font-display mb-3 text-forest-800">
                {faq.question}
              </h2>
              <p className="text-body text-charcoal-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cream-600 rounded-lg p-8 text-center">
          <h2 className="text-h4 font-display mb-4">Still Have Questions?</h2>
          <p className="text-body mb-6">
            I&apos;m here to help! Feel free to reach out with any questions about yoni steaming 
            or our products.
          </p>
        </div>
      </div>
    </div>
  );
}
