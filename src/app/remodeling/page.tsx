import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, REMODELING_SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kitchen & Bathroom Remodeling Seattle | Save Smart, Remodel Right',
  description: 'Full-service kitchen and bathroom remodeling in Seattle. Learn how to plan scope, budget, permits, materials, and installation with a licensed remodeling team.',
  keywords: 'kitchen remodeling seattle, bathroom remodeling seattle, renovation cost tips, remodeling services, bathroom remodel budget, kitchen remodel planning',
  alternates: {
    canonical: `${BUSINESS.website}/remodeling`,
  },
};

const budgetLevers = [
  {
    item: 'Layout',
    risk: 'Moving every wall or fixture before the plan is proven',
    smarterPlan: 'Keep what works, change what improves storage, access, and traffic flow',
    value: 'Controls labor and permit cost',
  },
  {
    item: 'Plumbing',
    risk: 'Relocating drains, vents, or supply lines without a clear benefit',
    smarterPlan: 'Move plumbing only when it fixes function, safety, or long-term resale',
    value: 'Avoids surprise rough-in costs',
  },
  {
    item: 'Materials',
    risk: 'Choosing premium finishes everywhere instead of where they matter',
    smarterPlan: 'Spend on countertops, tile, waterproofing, hardware, and daily-use surfaces',
    value: 'Better look without waste',
  },
  {
    item: 'Timeline',
    risk: 'Starting demolition before selections and lead times are confirmed',
    smarterPlan: 'Finalize fixtures, tile, glass, cabinets, and counters before the crew opens walls',
    value: 'Fewer delays mid-project',
  },
];

const tips = [
  {
    number: '01',
    title: 'Start With Function, Not Finishes',
    description: 'A remodel should fix the problems you feel every day: poor storage, bad lighting, tight shower access, weak ventilation, or a kitchen layout that slows you down.',
    savings: 'Highest daily impact',
  },
  {
    number: '02',
    title: 'Keep Plumbing in Place',
    description: 'Moving plumbing can be worth it, but it should earn its place in the budget. We price layout options clearly before you commit to rough-in work.',
    savings: 'Avoids hidden scope creep',
  },
  {
    number: '03',
    title: 'Choose Durable Materials First',
    description: 'Seattle-area bathrooms need real waterproofing, ventilation, and slip-aware tile. Kitchens need counters, cabinets, and hardware that handle daily use.',
    savings: 'Fewer repairs later',
  },
  {
    number: '04',
    title: 'Bundle Related Work',
    description: 'If tile, plumbing, lighting, vanity, and glass all touch the same room, planning them together usually produces a cleaner result than piecemeal work.',
    savings: 'Cleaner sequencing',
  },
];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '4.98', label: 'Google Rating' },
  { value: '15+', label: 'Years Experience' },
  { value: '$7,900', label: 'Starting Price' },
];

export default function RemodelingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/remodeling/kitchen-showcase-2.jpg" alt="Kitchen and bathroom remodeling Seattle" fill className="object-cover" priority quality={70} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Smart Renovation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Remodel Smarter,
              <span className="block text-amber-400">Not Just Bigger</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Plan a kitchen or bathroom remodel around layout, materials, permits, and installation details that actually improve how the space works.
            </p>
            <a
              href="#savings-calculator"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              See Budget Strategy
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Seattle Remodeling by the Numbers */}
      <section className="py-10 bg-slate-900 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-white text-lg font-semibold mb-6">Seattle Remodeling by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-black text-amber-400">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-red-50 border-y border-red-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            The Hidden Costs of Poor Remodeling Scope
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            The average Seattle bathroom remodel costs <strong className="text-red-600">$15,000 - $35,000</strong>, and kitchens can run much higher.
            The expensive part is not always the finish selection. It is unclear scope, unplanned plumbing/electrical work, late material choices, and weak sequencing.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'COST', text: 'Unplanned change orders' },
              { icon: 'MEP', text: 'Plumbing and electrical surprises' },
              { icon: 'TIME', text: 'Delayed materials and inspections' },
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
              Where Remodeling Budgets Move
            </h2>
            <p className="text-gray-600 text-lg">
              The right plan decides where to spend, where to simplify, and what should never be skipped.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Decision</th>
                  <th className="text-left py-4 px-4 font-bold text-red-600">Budget Risk</th>
                  <th className="text-left py-4 px-4 font-bold text-green-600">Smarter Plan</th>
                  <th className="text-center py-4 px-4 font-bold text-[#0b66b3]">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {budgetLevers.map((row) => (
                  <tr key={row.item} className="border-b border-gray-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">{row.item}</td>
                    <td className="py-4 px-4 text-gray-600">{row.risk}</td>
                    <td className="py-4 px-4 text-gray-600">{row.smarterPlan}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm">
                        {row.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-green-50 border border-green-200 text-center">
            <p className="text-2xl font-bold text-green-700">
              Best Savings: A Clear Scope Before Demolition
            </p>
            <p className="text-green-600 mt-2">The cheapest remodel is not always the best value. The best value is the scope that solves the real problem once.</p>
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

      {/* Our Remodeling Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-4">
              Full-Service Remodeling
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Remodeling Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From single-room refreshes to complete renovations, we handle every aspect of your remodel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REMODELING_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 inline-block px-3 py-1 rounded-full bg-amber-500 text-white font-bold text-sm">
                    {service.price}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0b66b3] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <span className="text-[#0b66b3] font-semibold text-sm">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Design */}
      <section className="py-20 bg-slate-50">
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
                Our design specialist helps turn a rough idea into a buildable plan - layout,
                storage, lighting, tile, counters, fixtures, and finish selections that work together.
              </p>
              <ul className="space-y-4">
                {[
                  'Layout and storage planning',
                  'Tile, countertop, and fixture selection',
                  'Permit-aware scope review',
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
            <div className="grid grid-cols-3 gap-3">
              {[
                { src: '/images/remodeling/bathroom-showcase-1.jpg', alt: 'Bathroom remodel showcase 1' },
                { src: '/images/remodeling/bathroom-showcase-2.jpg', alt: 'Bathroom remodel showcase 2' },
                { src: '/images/remodeling/bathroom-showcase-3.jpg', alt: 'Bathroom remodel showcase 3' },
                { src: '/images/remodeling/bathroom-showcase-4.jpg', alt: 'Bathroom remodel showcase 4' },
                { src: '/images/remodeling/kitchen-showcase-1.jpg', alt: 'Kitchen remodel showcase 1' },
                { src: '/images/remodeling/kitchen-showcase-2.jpg', alt: 'Kitchen remodel showcase 2' },
                { src: '/images/remodeling/kitchen-showcase-3.jpg', alt: 'Kitchen remodel showcase 3' },
                { src: '/images/remodeling/kitchen-showcase-4.jpg', alt: 'Kitchen remodel showcase 4' },
                { src: '/images/remodeling/kitchen-detail-1.jpg', alt: 'Kitchen detail - countertops and finishes' },
                { src: '/images/remodeling/kitchen-detail-2.jpg', alt: 'Kitchen detail - fixtures and hardware' },
              ].map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links: Blog & Projects */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore More</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/blog"
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#0b66b3]/20 transition group"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#0b66b3] mb-2">Remodeling Tips Blog</h3>
              <p className="text-gray-600 text-sm mb-3">Read expert advice on remodeling costs, timelines, materials, permits, and project planning.</p>
              <span className="text-[#0b66b3] font-semibold text-sm">Read articles -&gt;</span>
            </Link>
            <Link
              href="/projects"
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#0b66b3]/20 transition group"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#0b66b3] mb-2">Our Projects</h3>
              <p className="text-gray-600 text-sm mb-3">Browse before-and-after photos from 500+ completed kitchen and bathroom projects in Seattle.</p>
              <span className="text-[#0b66b3] font-semibold text-sm">View projects →</span>
            </Link>
            <Link
              href="/common-problems"
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#0b66b3]/20 transition group"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#0b66b3] mb-2">Common Problems We Fix</h3>
              <p className="text-gray-600 text-sm mb-3">Leaks, poor layouts, cracked tile, weak storage, and outdated surfaces - see how we solve common kitchen and bathroom problems.</p>
              <span className="text-[#0b66b3] font-semibold text-sm">See solutions -&gt;</span>
            </Link>
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
            Get a free consultation to review your layout, goals, permit needs, and realistic budget before you start construction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
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
