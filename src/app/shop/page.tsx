import { Metadata } from 'next';
import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Professional Care Products | Refinished Surface Cleaners',
  description: 'Professional cleaning products designed for refinished bathtubs, tiles, and countertops. Safe formulas that protect your investment and extend surface life.',
  keywords: 'refinished bathtub cleaner, safe tub cleaner, reglazing aftercare, refinished surface care',
};

const products = [
  {
    id: 'daily-cleaner',
    name: 'Daily Surface Cleaner',
    description: 'Gentle daily cleaner specially formulated for refinished surfaces. pH-balanced, non-abrasive formula that cleans without damaging your finish.',
    price: '$14.99',
    size: '32 oz spray bottle',
    features: ['Safe for all refinished surfaces', 'pH-balanced formula', 'No harsh chemicals', 'Fresh scent'],
    badge: 'Best Seller',
    image: '/images/product-cleaner.jpg',
  },
  {
    id: 'deep-clean-kit',
    name: 'Deep Clean Kit',
    description: 'Monthly deep cleaning kit with concentrated cleaner and microfiber cloths. Removes buildup without scratching.',
    price: '$29.99',
    size: 'Kit includes cleaner + 3 cloths',
    features: ['Concentrated formula', '3 premium microfiber cloths', 'Removes soap scum', '3-month supply'],
    badge: 'Popular',
    image: '/images/product-kit.jpg',
  },
  {
    id: 'protective-coating',
    name: 'Surface Protector Spray',
    description: 'Apply monthly to add an extra protective layer. Helps resist stains, water spots, and makes cleaning easier.',
    price: '$19.99',
    size: '16 oz bottle',
    features: ['UV protection', 'Water-resistant barrier', 'Extends finish life', 'Easy application'],
    badge: null,
    image: '/images/product-protector.jpg',
  },
  {
    id: 'complete-care-bundle',
    name: 'Complete Care Bundle',
    description: 'Everything you need to maintain your refinished surfaces. Includes daily cleaner, deep clean kit, and protector spray.',
    price: '$54.99',
    size: 'Full care system',
    features: ['All 3 products included', 'Save 15%', 'Free shipping', '6-month supply'],
    badge: 'Best Value',
    image: '/images/product-bundle.jpg',
  },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b66b3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Care Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Protect Your
              <span className="block text-amber-400">Investment</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Professional-grade cleaning products designed specifically for refinished surfaces.
              The same products our technicians recommend.
            </p>
          </div>
        </div>
      </section>

      {/* Why Our Products */}
      <section className="py-12 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: '🛡️', title: 'Safe Formulas', desc: 'Won\'t damage finish' },
              { icon: '✓', title: 'Pro Recommended', desc: 'Used by our team' },
              { icon: '🌿', title: 'Eco-Friendly', desc: 'Non-toxic ingredients' },
              { icon: '⭐', title: 'Guaranteed', desc: 'Satisfaction promise' },
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

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Keep your refinished surfaces looking beautiful for years to come.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image placeholder */}
                  <div className="relative w-full md:w-48 h-48 bg-gradient-to-br from-[#0b66b3]/10 to-[#0b66b3]/5 flex-shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#0b66b3]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    {product.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                    <ul className="space-y-1 mb-4">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-2xl font-black text-[#0b66b3]">{product.price}</span>
                        <span className="text-gray-400 text-sm ml-2">{product.size}</span>
                      </div>
                      <button className="px-6 py-2 rounded-lg bg-[#0b66b3] text-white font-semibold hover:bg-[#084c8a] transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 p-8 rounded-2xl bg-amber-50 border border-amber-200 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Online Store Coming Soon!</h3>
            <p className="text-gray-600 mb-4">
              Our products are currently available for purchase during service appointments.
              Online ordering launching soon!
            </p>
            <a
              href="/#quote"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0b66b3] text-white font-bold hover:bg-[#084c8a] transition"
            >
              Schedule Service & Get Products
            </a>
          </div>
        </div>
      </section>

      {/* Care Tips */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Care Tips for Refinished Surfaces</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-green-600 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Do Use
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mild dish soap</li>
                <li>• Non-abrasive bathroom cleaners</li>
                <li>• Soft sponges or microfiber cloths</li>
                <li>• Our recommended products</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-red-600 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                Avoid
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bleach or bleach-based cleaners</li>
                <li>• Abrasive powders (Comet, Ajax)</li>
                <li>• Steel wool or abrasive pads</li>
                <li>• Suction-cup bath mats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Refinishing Service?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Our products are included with care instructions after every refinishing job.
          </p>
          <a
            href="/#quote"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
          >
            Get Instant Quote
          </a>
        </div>
      </section>
    </div>
  );
}
