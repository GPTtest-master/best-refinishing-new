import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

const problemIcons: Record<string, React.ReactNode> = {
  bath: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13h18v4a3 3 0 01-3 3H6a3 3 0 01-3-3v-4zm2-1V6a3 3 0 013-3h1a2 2 0 012 2v8" /></svg>,
  kitchen: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
  tile: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M4 12h16M4 19h16M12 5v14" /></svg>,
  shower: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 0a4 4 0 014 4H8a4 4 0 014-4zm-6 6v10m12-10v10M8 21h8" /></svg>,
  counter: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 10h16v2H4v-2zm2 2v6h12v-6M7 10V7a1 1 0 011-1h8a1 1 0 011 1v3" /></svg>,
  mold: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  storage: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  accessible: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a2 2 0 11-4 0 2 2 0 014 0zm-2 4l3 8m-3-8l-3 8m3-8v-1m-5 9h10" /></svg>,
  value: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
};

export const metadata: Metadata = {
  title: 'Common Kitchen & Bathroom Problems We Fix | Seattle Remodeling Experts',
  description: 'Outdated bathroom? Ugly kitchen? Cracked tile? See the most common bathroom and kitchen problems we solve with professional remodeling in Seattle.',
  keywords: 'bathroom problems seattle, kitchen problems fix, outdated bathroom remodel, kitchen remodeling solutions, bathroom renovation seattle, shower replacement seattle',
  alternates: {
    canonical: `${BUSINESS.website}/common-problems`,
  },
  openGraph: {
    title: 'Common Kitchen & Bathroom Problems We Fix | Kitchen and Bathroom Remodeling Pros Seattle',
    description: 'Expert remodeling solutions for outdated kitchens, damaged bathrooms, cracked tile, leaking showers, storage problems, and water damage.',
    type: 'website',
  },
};

const problems = [
  {
    id: 'outdated-bathroom',
    title: 'Outdated Bathroom Design',
    description: 'Pink, green, or harvest gold fixtures from the 70s-90s. Cramped layout, old tile, and worn vanity that make your bathroom feel dated and hurt home value.',
    symptoms: [
      'Dated colors and fixtures',
      'Inefficient layout wastes space',
      'Old vanity falling apart',
      'Mismatched tile and hardware',
      'Embarrassing to show guests',
    ],
    solution: 'Our full bathroom remodel transforms everything — new tile, vanity, fixtures, shower, and flooring. Modern design, efficient layout, all done by one team.',
    serviceLink: '/services/bathroom-remodeling',
    serviceName: 'Bathroom Remodeling',
    icon: 'bath',
  },
  {
    id: 'outdated-kitchen',
    title: 'Outdated Kitchen',
    description: 'Old cabinets, worn countertops, and a layout that doesn\'t work. Your kitchen is the heart of your home — it deserves an upgrade.',
    symptoms: [
      'Cabinets falling apart or peeling',
      'Laminate countertops worn and stained',
      'Not enough counter or storage space',
      'Old appliances wasting energy',
      'Poor lighting and ventilation',
    ],
    solution: 'Complete kitchen renovation — new cabinets, quartz or granite countertops, modern backsplash, updated lighting, and a layout that works for your family.',
    serviceLink: '/services/kitchen-remodeling',
    serviceName: 'Kitchen Remodeling',
    icon: 'kitchen',
  },
  {
    id: 'damaged-tile',
    title: 'Cracked, Broken, or Ugly Tile',
    description: 'Cracked tiles, crumbling grout, and water getting behind walls. Damaged tile isn\'t just ugly — it causes hidden water damage and mold.',
    symptoms: [
      'Cracked or broken tiles',
      'Crumbling grout letting water through',
      'Mold growing in grout lines',
      'Loose tiles popping off',
      'Outdated tile pattern or color',
    ],
    solution: 'Professional tile removal and installation with modern porcelain, ceramic, or natural stone. Proper waterproofing, fresh grout, and a look that lasts 20+ years.',
    serviceLink: '/services/tile-installation',
    serviceName: 'Tile Installation',
    icon: 'tile',
  },
  {
    id: 'shower-problems',
    title: 'Leaking or Damaged Shower',
    description: 'Water leaks, mold, cracked fiberglass, and an uncomfortable shower experience. Old showers waste water and create hidden damage.',
    symptoms: [
      'Water leaking through walls or floor',
      'Mold and mildew that won\'t go away',
      'Cracked fiberglass or acrylic pan',
      'Poor water pressure or old fixtures',
      'No glass door — just a curtain',
    ],
    solution: 'Full shower remodel — new custom tile, glass enclosure, modern fixtures, proper waterproofing membrane, and a rain or handheld showerhead upgrade.',
    serviceLink: '/services/shower-installation',
    serviceName: 'Shower Installation',
    icon: 'shower',
  },
  {
    id: 'worn-countertops',
    title: 'Damaged or Ugly Countertops',
    description: 'Burns, stains, chips, and outdated laminate that makes your kitchen or bathroom look cheap. Countertops take the most abuse in your home.',
    symptoms: [
      'Burn marks and heat damage',
      'Permanent stains won\'t come out',
      'Chips and cracks along edges',
      'Peeling or bubbling laminate',
      'Outdated pattern or color',
    ],
    solution: 'Upgrade to beautiful quartz, granite, or marble countertops. Professional measurement, fabrication, and installation with seamless results.',
    serviceLink: '/services/countertop-installation',
    serviceName: 'Countertop Installation',
    icon: 'counter',
  },
  {
    id: 'old-bathtub',
    title: 'Old, Damaged, or Ugly Bathtub',
    description: 'Stained, chipped, rusted, or impossibly outdated tub that\'s the eyesore of your bathroom. Sometimes replacing is the right move.',
    symptoms: [
      'Deep rust and corrosion',
      'Severe chips exposing metal',
      'Cast iron tub too heavy for floor',
      'Want to convert tub to walk-in shower',
      'Tub doesn\'t fit your lifestyle',
    ],
    solution: 'Professional bathtub replacement — removal of old tub, plumbing updates, new tub or tub-to-shower conversion, tile surround, and modern fixtures.',
    serviceLink: '/services/bathtub-installation',
    serviceName: 'Bathtub Installation',
    icon: 'bath',
  },
  {
    id: 'mold-water-damage',
    title: 'Mold & Hidden Water Damage',
    description: 'Musty smells, black spots, and soft walls or floors. Water damage behind tiles and under floors causes structural rot and health hazards.',
    symptoms: [
      'Black mold on walls or ceiling',
      'Musty smell in bathroom',
      'Soft or spongy flooring',
      'Paint bubbling on walls',
      'Stains on ceiling below bathroom',
    ],
    solution: 'Full demolition, mold remediation, structural repair, new waterproofing, and complete rebuild. We fix the root cause, not just the surface.',
    serviceLink: '/services/bathroom-remodeling',
    serviceName: 'Bathroom Remodeling',
    icon: 'mold',
  },
  {
    id: 'no-storage',
    title: 'Not Enough Storage Space',
    description: 'Cluttered countertops, overflowing cabinets, and no place to put anything. Poor storage makes even a clean bathroom feel messy.',
    symptoms: [
      'Bottles and products everywhere',
      'Not enough cabinet space',
      'No medicine cabinet or shelving',
      'Vanity too small for the space',
      'Closets overflowing with towels',
    ],
    solution: 'Smart remodel with custom vanity, built-in niches, recessed medicine cabinet, floating shelves, and optimized layout that maximizes every inch.',
    serviceLink: '/services/bathroom-remodeling',
    serviceName: 'Bathroom Remodeling',
    icon: 'storage',
  },
  {
    id: 'accessibility',
    title: 'Accessibility & Safety Issues',
    description: 'High tub walls, slippery floors, and no grab bars make bathrooms dangerous for seniors and anyone with mobility challenges.',
    symptoms: [
      'Hard to step over tub wall',
      'Slippery tile floor',
      'No grab bars or handrails',
      'Shower too narrow to move in',
      'Toilet too low to sit/stand easily',
    ],
    solution: 'ADA-compliant remodel — curbless shower, grab bars, non-slip tile, comfort-height toilet, wider doorways, and handheld showerhead. Safe and stylish.',
    serviceLink: '/services/shower-installation',
    serviceName: 'Shower Installation',
    icon: 'accessible',
  },
  {
    id: 'low-home-value',
    title: 'Bathroom Hurting Home Value',
    description: 'Planning to sell? An outdated bathroom is the #1 deal-breaker for buyers. Kitchen and bath remodels have the highest ROI of any home improvement.',
    symptoms: [
      'Realtor says bathroom needs updating',
      'Buyers making low offers',
      'Competing homes have modern baths',
      'Kitchen looks like it\'s from the 90s',
      'Want to increase home value fast',
    ],
    solution: 'Strategic kitchen or bathroom remodel focused on maximum ROI. We know what Seattle buyers want — modern finishes, clean lines, and quality materials.',
    serviceLink: '/services/kitchen-remodeling',
    serviceName: 'Kitchen Remodeling',
    icon: 'value',
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
        <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/remodeling/bathroom-showcase-3.jpg" alt="Common bathroom problems" fill className="object-cover" priority quality={70} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
        </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="mb-6">
              <Breadcrumbs variant="dark" items={[{ label: 'Common Problems' }]} />
            </div>
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
                Outdated design, cracked tile, mold, water damage — we&apos;ve seen it all and fixed it all.
                See exactly how we solve each problem with <strong>professional remodeling</strong>.
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
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition"
                >
                  Free Estimate
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
                { value: '500+', label: 'Projects Completed' },
                { value: 'Permit', label: 'Aware Planning' },
                { value: 'Design', label: 'To Installation' },
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
                10 Most Common Kitchen & Bathroom Problems
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Click on any problem to see the likely cause, the right remodeling scope, and which service page has the next details.
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
                        <span className="text-red-600">{problemIcons[problem.icon]}</span>
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
                            View Service →
                          </Link>
                        </div>
                      </div>

                      <a
                        href="/contact"
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

        {/* Why Remodel */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Remodel Instead of Patch?
              </h2>
              <p className="text-gray-600 text-lg">
                Smart homeowners invest in a proper remodel for lasting results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* DIY / Patch Column */}
              <div className="bg-white rounded-2xl p-8 border-2 border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-red-700">DIY Fixes & Patches</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Temporary — problems come back',
                    'Doesn\'t fix root cause',
                    'Looks patchy and inconsistent',
                    'Hidden water damage continues',
                    'Lowers home value',
                    'Time wasted on repeated repairs',
                    'No warranty or guarantees',
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

              {/* Professional Remodel Column */}
              <div className="bg-white rounded-2xl p-8 border-2 border-green-400 relative">
                <div className="absolute -top-3 right-4 px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                  SMART INVESTMENT
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-700">Professional Remodel</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Permanent solution — done right once',
                    'Fixes structural & cosmetic issues',
                    'Modern design increases home value',
                    'Proper waterproofing prevents damage',
                    '60-70% ROI at resale',
                    'One team handles everything',
                    '5-year warranty on all work',
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
                href="/contact"
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
                { title: 'Bathroom Remodeling', href: '/services/bathroom-remodeling', desc: 'Complete bathroom transformation' },
                { title: 'Kitchen Remodeling', href: '/services/kitchen-remodeling', desc: 'Dream kitchen renovation' },
                { title: 'Tile Installation', href: '/services/tile-installation', desc: 'Professional tile & flooring' },
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
