import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Licensed & Insured',
    description: 'WA State licensed general contractor. Full liability coverage.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '15+ Years Experience',
    description: '500+ remodeling projects across Seattle metro area.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '5-Year Warranty',
    description: 'We stand behind every project we complete.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Full-Service Remodeling',
    description: 'Design, demolition, plumbing, tile, fixtures — all in-house.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Grid - Story + Reasons */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left - Our Story */}
          <div>
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Seattle&apos;s Most Trusted
              <span className="text-[#0b66b3]"> Remodeling Team</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">We started Kitchen and Bathroom Remodeling Pros with one goal:</strong> give
                Seattle homeowners high-quality kitchen and bathroom remodeling without the contractor runaround. After 15+ years
                and 500+ projects, we&apos;ve become the area&apos;s go-to remodeling experts.
              </p>
              <p>
                What sets us apart? We treat every project like it&apos;s our own home. Our team handles
                everything from design and demolition to plumbing, tile work, and final walkthrough — and doesn&apos;t
                leave until you&apos;re 100% satisfied.
              </p>
              <p>
                We use only premium materials — solid quartz countertops, porcelain tile, commercial-grade fixtures —
                the same products you&apos;d find in luxury builds. That&apos;s why we confidently back
                every job with our <strong className="text-gray-900">5-year warranty</strong>.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: BUSINESS.projectsCompleted, label: 'Projects' },
                { value: BUSINESS.rating, label: 'Rating' },
                { value: '5 Yr', label: 'Warranty' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-slate-50 rounded-xl">
                  <div className="text-2xl md:text-3xl font-black text-[#0b66b3]">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Reasons Grid */}
          <div className="grid grid-cols-2 gap-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-5 rounded-2xl bg-slate-50 hover:bg-[#0b66b3] group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0b66b3]/10 group-hover:bg-white/20 flex items-center justify-center text-[#0b66b3] group-hover:text-white mb-4 transition-all">
                  {reason.icon}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white mb-1 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-500 group-hover:text-white/80 text-sm transition-colors">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Get a scope-first estimate before the project starts
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/25"
          >
            Schedule Free Estimate
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
