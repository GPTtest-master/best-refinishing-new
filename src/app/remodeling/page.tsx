import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Savings | Save on Your Renovation Project',
  description: 'Planning a bathroom remodel? Learn how refinishing can save thousands while achieving custom designer results. Seattle renovation tips and cost-saving strategies.',
  keywords: 'bathroom remodel savings seattle, renovation cost tips, bathroom makeover budget, remodeling alternatives',
};

const savingsExamples = [
  {
    item: 'Bathtub',
    replace: '$3,000 - $8,000',
    refinish: '$350 - $600',
    savings: 'Save $2,500+',
  },
  {
    item: 'Tile Surround',
    replace: '$2,000 - $5,000',
    refinish: '$400 - $800',
    savings: 'Save $1,500+',
  },
  {
    item: 'Vanity Top',
    replace: '$500 - $2,000',
    refinish: '$200 - $400',
    savings: 'Save $300+',
  },
  {
    item: 'Shower Pan',
    replace: '$1,500 - $4,000',
    refinish: '$350 - $600',
    savings: 'Save $1,000+',
  },
];

const tips = [
  {
    number: '01',
    title: 'Don\'t Replace What Can Be Restored',
    description: 'Before demolishing, assess what can be refinished. Most bathtubs, tiles, and countertops can be beautifully restored for a fraction of replacement cost.',
    savings: 'Average savings: $4,000+',
  },
  {
    number: '02',
    title: 'Keep Plumbing in Place',
    description: 'Moving plumbing is one of the most expensive parts of a remodel. Refinishing lets you keep existing fixtures while transforming the look.',
    savings: 'Average savings: $2,000+',
  },
  {
    number: '03',
    title: 'Custom Colors Without Custom Prices',
    description: 'Our designer can match any color scheme. Get that marble look, custom tint, or modern finish without replacing anything.',
    savings: 'Average savings: $1,500+',
  },
  {
    number: '04',
    title: 'Combine Services for Maximum Value',
    description: 'Refinish tub, tiles, and countertop together for package pricing. Complete bathroom transformation in one day.',
    savings: 'Package discount: 15-20%',
  },
];

export default function RemodelingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b66b3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Smart Renovation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Save Thousands on
              <span className="block text-amber-400">Your Bathroom Remodel</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Planning a renovation? Learn insider tips on how to get designer results
              without the designer price tag. Our experts help you save where it matters.
            </p>
            <a
              href="#savings-calculator"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              See Your Potential Savings
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-red-50 border-y border-red-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Hidden Costs of Bathroom Remodeling
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            The average Seattle bathroom remodel costs <strong className="text-red-600">$15,000 - $35,000</strong>.
            Most homeowners don&apos;t realize that <strong>up to 40% of that budget</strong> goes to replacing
            items that could have been refinished.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💸', text: 'Demolition & disposal fees' },
              { icon: '🔧', text: 'Plumbing modifications' },
              { icon: '🚧', text: 'Weeks of construction' },
            ].map((item) => (
              <div key={item.text} className="bg-white rounded-xl p-4 shadow-sm">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section id="savings-calculator" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compare: Replace vs. Refinish
            </h2>
            <p className="text-gray-600 text-lg">
              See how much you can save on common bathroom items
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Item</th>
                  <th className="text-center py-4 px-4 font-bold text-red-600">Replace Cost</th>
                  <th className="text-center py-4 px-4 font-bold text-green-600">Refinish Cost</th>
                  <th className="text-center py-4 px-4 font-bold text-[#0b66b3]">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {savingsExamples.map((row) => (
                  <tr key={row.item} className="border-b border-gray-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">{row.item}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.replace}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.refinish}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">
                        {row.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-green-50 border border-green-200 text-center">
            <p className="text-2xl font-bold text-green-700">
              Total Potential Savings: $5,000 - $10,000+
            </p>
            <p className="text-green-600 mt-2">On a typical bathroom remodel</p>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pro Tips to Maximize Your Budget
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our renovation experts share their top strategies for getting the most value
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((tip) => (
              <div
                key={tip.number}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <span className="text-5xl font-black text-[#0b66b3]/10 block mb-4">
                  {tip.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.description}</p>
                <span className="inline-block px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm">
                  {tip.savings}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-4">
                Design Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Custom Designs for Any Concept
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Our design specialist works with you to match any aesthetic — modern, classic,
                rustic, or contemporary. We can create custom marble effects, stone textures,
                and any color to complement your renovation vision.
              </p>
              <ul className="space-y-4">
                {[
                  'Match existing decor perfectly',
                  'Custom marble & stone effects',
                  'Unlimited color options',
                  'Design consultation included',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b66b3] to-[#084c8a]">
              <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                <div>
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-xl font-semibold">Custom Design Examples</p>
                  <p className="text-white/60 mt-2">Photo gallery coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planning a Remodel?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get a free consultation to see how much you can save. We&apos;ll assess your bathroom
            and provide honest recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              Get Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
