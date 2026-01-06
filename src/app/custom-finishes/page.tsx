import { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Custom Finishes & Designer Coatings | Marble, Stone & More',
  description: 'Custom refinishing finishes including marble effects, stone textures, and designer colors. Transform your bathroom with unique, artistic coatings in Seattle.',
  keywords: 'custom bathtub finish, marble effect refinishing, designer bathroom coating, artistic refinishing seattle',
};

const finishTypes = [
  {
    name: 'Marble Effect',
    description: 'Elegant veined patterns that mimic natural marble. Available in Carrara, Calacatta, and other popular marble styles.',
    features: ['Multiple marble styles', 'Custom vein patterns', 'Any base color', 'High-gloss finish'],
    image: '/images/finish-marble.jpg',
  },
  {
    name: 'Stone & Granite',
    description: 'Natural stone textures including granite, onyx, and travertine looks. Add depth and character to any surface.',
    features: ['Realistic texture', 'Durable finish', 'Unique patterns', 'Multiple colors'],
    image: '/images/finish-stone.jpg',
  },
  {
    name: 'Solid Colors',
    description: 'Unlimited color options from classic whites to bold statement colors. Perfect color matching for any design scheme.',
    features: ['Unlimited colors', 'Perfect matching', 'Matte or gloss', 'Consistent coverage'],
    image: '/images/finish-solid.jpg',
  },
  {
    name: 'Metallic & Pearl',
    description: 'Shimmering metallic and pearl finishes for a luxurious, spa-like feel. Subtle sparkle that catches the light.',
    features: ['Gold, silver, copper tones', 'Pearl iridescence', 'Light-catching effect', 'Unique appearance'],
    image: '/images/finish-metallic.jpg',
  },
];

const process = [
  {
    step: 1,
    title: 'Design Consultation',
    description: 'Meet with our design specialist to discuss your vision. We bring samples and create custom mockups.',
  },
  {
    step: 2,
    title: 'Color & Pattern Selection',
    description: 'Choose your exact colors, patterns, and finish style. We can match existing elements or create something new.',
  },
  {
    step: 3,
    title: 'Surface Preparation',
    description: 'Thorough cleaning, repair, and priming for perfect adhesion of your custom finish.',
  },
  {
    step: 4,
    title: 'Artistic Application',
    description: 'Our skilled technicians apply your custom finish using professional techniques for authentic results.',
  },
];

export default function CustomFinishesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b66b3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Design Studio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Custom Designer
              <span className="block text-amber-400">Finishes</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Go beyond basic white. Our design studio creates stunning marble effects,
              stone textures, and custom colors that transform ordinary surfaces into works of art.
            </p>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              Book Design Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Custom */}
      <section className="py-12 bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Custom Finishes?
          </h2>
          <p className="text-gray-600 text-lg">
            A custom finish costs a <strong>fraction of real marble or stone installation</strong>,
            yet delivers the same stunning visual impact. Get the designer bathroom you want without
            the designer price tag.
          </p>
        </div>
      </section>

      {/* Finish Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Finish Options
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From elegant marble to bold statement colors, we create finishes that match your vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {finishTypes.map((finish) => (
              <div
                key={finish.name}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
              >
                {/* Image placeholder */}
                <div className="relative h-56 bg-gradient-to-br from-[#0b66b3]/10 to-[#0b66b3]/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-4xl block mb-2">🎨</span>
                      <p className="text-gray-500 text-sm">{finish.name} Sample</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{finish.name}</h3>
                  <p className="text-gray-600 mb-4">{finish.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {finish.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unlimited Color Options</h2>
            <p className="text-gray-600">
              We can match any color. Bring us a sample, photo, or color code and we&apos;ll create an exact match.
            </p>
          </div>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
            {[
              '#FFFFFF', '#F5F5F4', '#E7E5E4', '#D6D3D1', '#A8A29E', '#78716C',
              '#FAFAF9', '#F5F5F5', '#E5E5E5', '#D4D4D4', '#A3A3A3', '#737373',
              '#FEF2F2', '#FEE2E2', '#FECACA', '#FCA5A5', '#F87171', '#EF4444',
              '#FFF7ED', '#FFEDD5', '#FED7AA', '#FDBA74', '#FB923C', '#F97316',
              '#FFFBEB', '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B',
              '#F0FDF4', '#DCFCE7', '#BBF7D0', '#86EFAC', '#4ADE80', '#22C55E',
              '#EFF6FF', '#DBEAFE', '#BFDBFE', '#93C5FD', '#60A5FA', '#3B82F6',
              '#F5F3FF', '#EDE9FE', '#DDD6FE', '#C4B5FD', '#A78BFA', '#8B5CF6',
            ].map((color, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Sample colors shown. Actual options unlimited.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Process</h2>
          </div>
          <div className="space-y-8">
            {process.map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-[#0b66b3] text-white flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  {item.step}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Finishes Available For</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Bathtubs', icon: '🛁' },
              { name: 'Shower Walls', icon: '🚿' },
              { name: 'Countertops', icon: '🪥' },
              { name: 'Tile Surrounds', icon: '🏠' },
              { name: 'Vanity Tops', icon: '✨' },
              { name: 'Sinks', icon: '💧' },
              { name: 'Shower Pans', icon: '⬜' },
              { name: 'Cabinet Tops', icon: '🗄️' },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <span className="text-3xl block mb-2">{item.icon}</span>
                <h4 className="font-bold text-gray-900">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="consultation" className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Something Unique?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Book a free design consultation. We&apos;ll bring samples and help you visualize
            the perfect custom finish for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              Book Design Consultation
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
