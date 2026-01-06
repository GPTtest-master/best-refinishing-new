import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Common Bathtub & Tile Problems We Fix | Seattle Refinishing Experts',
  description: 'Stained bathtub? Cracked tile? Peeling finish? See the most common bathroom problems we fix daily in Seattle. Professional solutions that save you thousands vs replacement.',
  keywords: 'bathtub stains, cracked bathtub, peeling tub finish, yellow bathtub, rust stains bathtub, chipped tub, scratched bathtub, discolored grout, mold bathroom tile, bathtub repair seattle',
  openGraph: {
    title: 'Common Bathtub & Tile Problems We Fix | Best Refinishing Seattle',
    description: 'Expert solutions for stained, cracked, chipped, and discolored bathtubs, tiles, and countertops. See before/after photos and learn how we fix each problem.',
    type: 'website',
  },
};

const problems = [
  {
    id: 'stains',
    title: 'Stubborn Stains & Discoloration',
    description: 'Yellow, brown, or rust stains that won\'t come off no matter how much you scrub. Hard water deposits, mineral buildup, and years of use leave permanent marks.',
    symptoms: [
      'Yellow or brown discoloration',
      'Rust-colored stains around drain',
      'Hard water spots and rings',
      'Bleach or chemical damage marks',
      'Uneven color across surface',
    ],
    solution: 'Our professional refinishing completely covers all stains with a fresh, bright coating. No amount of staining can show through our multi-layer finish.',
    serviceLink: '/services/bathtub-refinishing',
    serviceName: 'Bathtub Refinishing',
    icon: '🟡',
  },
  {
    id: 'chips-cracks',
    title: 'Chips, Cracks & Scratches',
    description: 'Dropped items, wear and tear, or age cause chips and cracks that expose the underlying material to water damage and look unsightly.',
    symptoms: [
      'Visible chips in porcelain or fiberglass',
      'Hairline cracks spreading across surface',
      'Deep scratches from abrasive cleaners',
      'Exposed metal or base material',
      'Rough, uneven texture',
    ],
    solution: 'We repair all chips and cracks with professional-grade filler, then apply seamless coating. The repair is invisible — your tub looks factory-new.',
    serviceLink: '/services/repair',
    serviceName: 'Chip & Crack Repair',
    icon: '💔',
  },
  {
    id: 'peeling',
    title: 'Peeling or Flaking Finish',
    description: 'Previous DIY refinishing jobs or old factory coatings start peeling, creating an ugly, rough surface that traps dirt and bacteria.',
    symptoms: [
      'Paint or coating peeling off',
      'Flaking pieces in tub or sink',
      'Bubbling or blistering surface',
      'Rough, sandpaper-like texture',
      'Previous refinish job failing',
    ],
    solution: 'We strip the old failing finish completely, prepare the surface properly, and apply our commercial-grade coating with proper adhesion.',
    serviceLink: '/services/bathtub-refinishing',
    serviceName: 'Bathtub Refinishing',
    icon: '📜',
  },
  {
    id: 'rust',
    title: 'Rust & Corrosion',
    description: 'Cast iron and steel tubs develop rust when the protective finish wears through. Rust spreads quickly and weakens the tub structure.',
    symptoms: [
      'Orange/red rust spots',
      'Rust bleeding from chips',
      'Corroded areas around fixtures',
      'Rust stains from metal bath caddy',
      'Pitting in metal surface',
    ],
    solution: 'We treat rust with specialized primers that neutralize corrosion and prevent spreading, then seal with protective coating.',
    serviceLink: '/services/bathtub-refinishing',
    serviceName: 'Bathtub Refinishing',
    icon: '🔶',
  },
  {
    id: 'mold-mildew',
    title: 'Mold & Mildew Buildup',
    description: 'Black mold in grout lines, pink mildew on shower walls, and stubborn fungus that keeps coming back despite cleaning.',
    symptoms: [
      'Black spots in grout lines',
      'Pink/orange mildew on surfaces',
      'Musty smell in bathroom',
      'Mold behind caulk lines',
      'Recurring mold after cleaning',
    ],
    solution: 'Our refinishing includes anti-microbial treatment and creates a non-porous surface that resists mold growth. Fresh grout coating seals problem areas.',
    serviceLink: '/services/tile-refinishing',
    serviceName: 'Tile & Grout Refinishing',
    icon: '🦠',
  },
  {
    id: 'outdated-color',
    title: 'Outdated Colors',
    description: 'Pink, green, blue, or harvest gold fixtures from the 70s, 80s, or 90s that make your bathroom feel dated and hurt home value.',
    symptoms: [
      'Pink, mint green, or blue tub',
      'Harvest gold or avocado fixtures',
      'Mismatched bathroom colors',
      'Dated tile patterns',
      'Want modern white or gray',
    ],
    solution: 'We refinish any color to modern white, almond, gray, or your custom color choice. Transform your bathroom\'s look in one day.',
    serviceLink: '/services/bathtub-refinishing',
    serviceName: 'Bathtub Refinishing',
    icon: '🎨',
  },
  {
    id: 'worn-dull',
    title: 'Worn & Dull Surface',
    description: 'Years of use leave surfaces looking tired, faded, and impossible to get truly clean. The original shine is gone.',
    symptoms: [
      'Matte, dull appearance',
      'Lost original shine/gloss',
      'Surface feels rough',
      'Cleaning doesn\'t restore shine',
      'Looks dirty even when clean',
    ],
    solution: 'Our high-gloss professional finish restores that "just installed" shine. The smooth surface is easier to clean and stays bright for years.',
    serviceLink: '/services/bathtub-refinishing',
    serviceName: 'Bathtub Refinishing',
    icon: '✨',
  },
  {
    id: 'grout-problems',
    title: 'Damaged or Dirty Grout',
    description: 'Cracked, crumbling, or permanently stained grout lines make even clean tiles look dirty and allow water damage.',
    symptoms: [
      'Crumbling grout falling out',
      'Permanently stained grout lines',
      'Cracked grout letting water through',
      'Mismatched grout repairs',
      'Mold growing in grout',
    ],
    solution: 'We clean, repair, and seal grout lines, or apply grout-color coating for a uniform, fresh appearance that resists future staining.',
    serviceLink: '/services/tile-refinishing',
    serviceName: 'Tile & Grout Refinishing',
    icon: '🧱',
  },
  {
    id: 'fiberglass-damage',
    title: 'Fiberglass Shower Damage',
    description: 'Fiberglass showers and tub surrounds crack, fade, and develop stress fractures over time, especially in older units.',
    symptoms: [
      'Spider web cracks in fiberglass',
      'Faded, chalky surface',
      'Flexing or soft spots',
      'Cracks around fixtures',
      'Dull, yellowed appearance',
    ],
    solution: 'We repair structural cracks and reinforce weak areas, then apply durable coating that restores rigidity and appearance.',
    serviceLink: '/services/shower-refinishing',
    serviceName: 'Shower Refinishing',
    icon: '🚿',
  },
  {
    id: 'countertop-damage',
    title: 'Countertop Wear & Damage',
    description: 'Kitchen and bathroom countertops showing burns, stains, chips, or outdated patterns that bring down your space.',
    symptoms: [
      'Burn marks or heat damage',
      'Permanent stains',
      'Chips along edges',
      'Outdated laminate pattern',
      'Worn cultured marble',
    ],
    solution: 'Countertop refinishing restores or completely transforms your surfaces with modern colors, granite looks, or solid finishes.',
    serviceLink: '/services/countertop-refinishing',
    serviceName: 'Countertop Refinishing',
    icon: '🪨',
  },
];

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: problems.map((problem) => ({
    '@type': 'Question',
    name: `How do you fix ${problem.title.toLowerCase()}?`,
    acceptedAnswer: {
      '@type': 'Answer',
      text: problem.solution,
    },
  })),
};

export default function CommonProblemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b66b3]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-300 font-semibold text-sm mb-6 border border-red-500/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Common Problems We Fix
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Does Your Bathroom
                <span className="block text-amber-400">Have These Problems?</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                Stains, chips, cracks, peeling, rust, mold — we&apos;ve seen it all and fixed it all.
                See exactly how we solve each problem <strong>without expensive replacement</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#problems"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
                >
                  Find Your Problem
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <a
                  href="/#quote"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition"
                >
                  Get Instant Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-slate-900 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '500+', label: 'Problems Fixed' },
                { value: '1 Day', label: 'Most Repairs' },
                { value: '80%', label: 'Cost Savings' },
                { value: '5 Year', label: 'Warranty' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-black text-amber-400">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problems List */}
        <section id="problems" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                10 Most Common Bathroom Problems
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Click on any problem to see how we fix it — and how much you&apos;ll save vs. replacement
              </p>
            </div>

            <div className="space-y-8">
              {problems.map((problem, index) => (
                <div
                  key={problem.id}
                  id={problem.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Problem Side */}
                    <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 border-b md:border-b-0 md:border-r border-gray-100">
                      <div className="flex items-start gap-4 mb-6">
                        <span className="text-4xl">{problem.icon}</span>
                        <div>
                          <span className="text-red-600 text-sm font-semibold">Problem #{index + 1}</span>
                          <h3 className="text-2xl font-bold text-gray-900">{problem.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6">{problem.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Common Symptoms:</h4>
                        <ul className="space-y-2">
                          {problem.symptoms.map((symptom) => (
                            <li key={symptom} className="flex items-start gap-2 text-gray-600">
                              <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Solution Side */}
                    <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-green-600 text-sm font-semibold">Our Solution</span>
                          <h4 className="text-xl font-bold text-gray-900">Professional Fix</h4>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6">{problem.solution}</p>

                      <div className="bg-white rounded-xl p-4 mb-6 border border-green-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-500">Recommended Service</p>
                            <p className="font-bold text-gray-900">{problem.serviceName}</p>
                          </div>
                          <Link
                            href={problem.serviceLink}
                            className="text-[#0b66b3] font-semibold hover:underline"
                          >
                            Learn More →
                          </Link>
                        </div>
                      </div>

                      <a
                        href="/#quote"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition w-full justify-center"
                      >
                        Get Quote for This Problem
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Refinish vs Replace */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Fix Instead of Replace?
              </h2>
              <p className="text-gray-600 text-lg">
                Smart homeowners choose refinishing for these reasons
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Replace Column */}
              <div className="bg-white rounded-2xl p-8 border-2 border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-700">Full Replacement</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Cost: $3,000 - $8,000+',
                    'Timeline: 3-5 days minimum',
                    'Demolition mess and dust',
                    'Plumbing modifications needed',
                    'Tile and wall damage',
                    'Multiple contractors required',
                    'Hidden costs common',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Refinish Column */}
              <div className="bg-white rounded-2xl p-8 border-2 border-green-400 relative">
                <div className="absolute -top-3 right-4 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                  BETTER CHOICE
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-700">Professional Refinishing</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Cost: $350 - $600',
                    'Timeline: 4-6 hours, ready in 24hrs',
                    'Zero demolition or mess',
                    'No plumbing changes needed',
                    'Existing tile stays intact',
                    'One professional technician',
                    'Fixed quote, no surprises',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0b66b3] to-[#084c8a]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have One of These Problems?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Send us a photo for a free assessment. We&apos;ll tell you exactly how we can fix it
              and give you an honest quote within {BUSINESS.responseTime}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
              >
                Get Free Assessment
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
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Bathtub Refinishing', href: '/services/bathtub-refinishing', desc: 'Restore any tub to like-new' },
                { title: 'Tile & Grout', href: '/services/tile-refinishing', desc: 'Fix stained tiles and grout' },
                { title: 'Chip Repair', href: '/services/repair', desc: 'Quick fixes for damage' },
              ].map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#0b66b3]/20 transition group"
                >
                  <h3 className="font-bold text-gray-900 group-hover:text-[#0b66b3] mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{service.desc}</p>
                  <span className="text-[#0b66b3] font-semibold text-sm">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
