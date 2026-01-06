import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Custom Shower Door Installation | Frameless & Semi-Frameless',
  description: 'Professional shower door installation in Seattle. Frameless, semi-frameless, and sliding options. Custom glass, modern designs, free measurements.',
  keywords: 'shower door installation seattle, frameless shower doors, custom shower enclosure, glass shower doors seattle',
};

const doorTypes = [
  {
    name: 'Frameless Shower Doors',
    description: 'Sleek, modern look with thick tempered glass. No metal frames for a clean, open aesthetic. Perfect for contemporary bathrooms.',
    features: ['3/8" to 1/2" tempered glass', 'Minimalist hardware', 'Easy to clean', 'Luxury appearance'],
    popular: true,
  },
  {
    name: 'Semi-Frameless Doors',
    description: 'Best of both worlds. Minimal frame with tempered glass panels. More affordable than fully frameless with similar aesthetics.',
    features: ['Cost-effective option', 'Durable construction', 'Various finishes available', 'Wide opening'],
    popular: false,
  },
  {
    name: 'Sliding Doors',
    description: 'Ideal for tub-shower combos and tight spaces. No swing-out space needed. Smooth-gliding bypass design.',
    features: ['Space-saving design', 'Smooth roller mechanism', 'Great for bathtubs', 'Multiple glass options'],
    popular: false,
  },
  {
    name: 'Pivot & Hinged Doors',
    description: 'Classic swing-open design. Available in frameless or framed styles. Wide range of sizes and configurations.',
    features: ['Traditional aesthetic', 'Wide entrance', 'Various hinge finishes', 'Custom sizing'],
    popular: false,
  },
];

const glassOptions = [
  { name: 'Clear Glass', desc: 'Crystal clear visibility, timeless look' },
  { name: 'Frosted Glass', desc: 'Privacy with diffused light' },
  { name: 'Rain Glass', desc: 'Textured pattern, spa-like feel' },
  { name: 'Low-Iron Glass', desc: 'Ultra-clear, no green tint' },
];

const finishes = [
  'Chrome', 'Brushed Nickel', 'Matte Black', 'Oil-Rubbed Bronze', 'Gold/Brass', 'Polished Nickel'
];

export default function ShowerDoorsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b66b3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Shower Doors
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Custom Shower Door
              <span className="block text-amber-400">Installation</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Transform your shower with beautiful, custom-fitted glass doors.
              Frameless, semi-frameless, and sliding options to match any style.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#quote"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
              >
                Get Free Measurement
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why New Shower Doors */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: '✨', title: 'Modern Look', desc: 'Update your bathroom instantly' },
              { icon: '🏠', title: 'Home Value', desc: 'Increase resale appeal' },
              { icon: '💧', title: 'Better Function', desc: 'No more leaky curtains' },
              { icon: '🧹', title: 'Easy Clean', desc: 'Glass is easier to maintain' },
            ].map((item) => (
              <div key={item.title}>
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Door Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shower Door Options
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We offer a complete range of shower door styles to fit any bathroom
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {doorTypes.map((door) => (
              <div
                key={door.name}
                className={`bg-white rounded-2xl p-8 border-2 transition-all ${
                  door.popular
                    ? 'border-[#0b66b3] shadow-xl'
                    : 'border-gray-100 hover:border-[#0b66b3]/50 hover:shadow-lg'
                }`}
              >
                {door.popular && (
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold mb-4">
                    MOST POPULAR
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{door.name}</h3>
                <p className="text-gray-600 mb-6">{door.description}</p>
                <ul className="space-y-2">
                  {door.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Glass & Finishes */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Glass Options */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Glass Options</h2>
              <div className="space-y-4">
                {glassOptions.map((glass) => (
                  <div key={glass.name} className="flex items-center gap-4 p-4 bg-white rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">{glass.name}</h4>
                      <p className="text-gray-500 text-sm">{glass.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware Finishes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Hardware Finishes</h2>
              <div className="grid grid-cols-2 gap-4">
                {finishes.map((finish) => (
                  <div
                    key={finish}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
                    <span className="font-medium text-gray-700">{finish}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Free Consultation', desc: 'We measure and discuss options' },
              { step: '2', title: 'Custom Quote', desc: 'Detailed pricing, no surprises' },
              { step: '3', title: 'Fabrication', desc: 'Custom cut to your specs' },
              { step: '4', title: 'Installation', desc: 'Professional, clean install' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#0b66b3] text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Free in-home measurement and consultation. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              Request Free Measurement
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
