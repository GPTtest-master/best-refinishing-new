import { BUSINESS } from '@/lib/constants';

const reasons = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Licensed & Insured',
    description: 'Full liability coverage. Your home is protected.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '15+ Years Experience',
    description: '500+ projects across Seattle metro area.',
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Same-Day Service',
    description: 'Most jobs done in 4-6 hours. Ready in 24hrs.',
  },
];

const team = [
  {
    name: 'Alex Johnson',
    role: 'Founder & Lead Tech',
    image: '/images/team-1.jpg',
  },
  {
    name: 'Maria Chen',
    role: 'Project Manager',
    image: '/images/team-2.jpg',
  },
  {
    name: 'David Kim',
    role: 'Senior Technician',
    image: '/images/team-3.jpg',
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
              <span className="text-[#0b66b3]"> Refinishing Team</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">We started Best Refinishing with one goal:</strong> give
                Seattle homeowners a better option than expensive bathroom replacements. After 15+ years
                and 500+ projects, we&apos;ve become the area&apos;s go-to refinishing experts.
              </p>
              <p>
                What sets us apart? We treat every project like it&apos;s our own home. Our team takes
                the time to understand what you need, explains every step clearly, and doesn&apos;t
                leave until you&apos;re 100% satisfied.
              </p>
              <p>
                We use only commercial-grade coatings and professional equipment — the same materials
                used on hotel renovations and luxury properties. That&apos;s why we confidently back
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

        {/* Team Section - HIDDEN until photos ready
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Meet the Team Behind Your Project
              </h3>
              <p className="text-white/70 mb-6">
                Every member of our team is trained, certified, and passionate about delivering
                perfect results. We&apos;re not contractors who do refinishing on the side —
                it&apos;s all we do, and we&apos;re the best at it.
              </p>
              <ul className="space-y-3">
                {[
                  'Factory-trained technicians',
                  'Background-checked & insured',
                  'Average 8+ years experience',
                  'Customer satisfaction focused',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#0b66b3] to-[#084c8a] mb-3">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="font-bold text-white text-sm">{member.name}</h4>
                  <p className="text-white/50 text-xs">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        */}

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/25"
          >
            Get Your Free Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
