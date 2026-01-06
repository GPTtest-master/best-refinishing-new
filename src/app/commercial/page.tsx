import { Metadata } from 'next';
import Link from 'next/link';
import { BUSINESS, SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Commercial Refinishing & Property Managers | ${BUSINESS.name}`,
  description: `Volume discounts for property managers and commercial clients. Apartment turnovers, hotel renovations, and multi-unit projects. Fast turnaround, minimal disruption. Call ${BUSINESS.phone}`,
  keywords: 'commercial bathtub refinishing seattle, property manager refinishing, apartment turnover refinishing, hotel bathroom reglazing, multi-unit refinishing',
  openGraph: {
    title: `Commercial Refinishing & Property Managers | ${BUSINESS.name}`,
    description: 'Volume discounts for property managers and commercial clients.',
    type: 'website',
    locale: 'en_US',
    siteName: BUSINESS.name,
  },
  alternates: {
    canonical: `${BUSINESS.website}/commercial`,
  },
};

const benefits = [
  {
    title: 'Volume Discounts',
    description: 'Special pricing for multi-unit projects. The more units you have, the more you save.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Fast Turnaround',
    description: 'Minimize vacancy time with our same-day service. Most units ready in 24-48 hours.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Scheduling',
    description: 'We work around your tenants and schedule. Weekend and after-hours available.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Account Manager',
    description: 'One point of contact for all your projects. Streamlined communication and billing.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Consistent Quality',
    description: 'Same high-quality finish across all units. Professional results every time.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Full Documentation',
    description: 'Before/after photos, warranties, and invoices for every unit. Easy record keeping.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

const clientTypes = [
  {
    title: 'Apartment Complexes',
    description: 'Turn units faster between tenants. Save thousands on each bathroom renovation.',
    count: '50+ units managed',
  },
  {
    title: 'Hotels & Hospitality',
    description: 'Keep rooms in service longer with minimal disruption to guests.',
    count: 'Overnight service',
  },
  {
    title: 'Property Managers',
    description: 'One reliable partner for all your properties. Consistent pricing and quality.',
    count: 'Multi-property rates',
  },
  {
    title: 'Real Estate Investors',
    description: 'Increase property value and rental rates without expensive replacements.',
    count: 'ROI focused',
  },
];

export default function CommercialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b66b3]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-400 font-semibold text-sm mb-6">
              COMMERCIAL & PROPERTY MANAGERS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Volume Discounts for
              <span className="block text-amber-400">Multi-Unit Projects</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Specialized refinishing services for property managers, landlords, and commercial clients.
              Fast turnaround, consistent quality, and competitive pricing for all your units.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BUSINESS.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call for Volume Pricing
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg hover:bg-gray-100 transition"
              >
                Request Commercial Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-[#0b66b3]">{BUSINESS.projectsCompleted}</div>
              <div className="text-gray-500 mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#0b66b3]">{BUSINESS.experience}</div>
              <div className="text-gray-500 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#0b66b3]">24hr</div>
              <div className="text-gray-500 mt-1">Turnaround Time</div>
            </div>
            <div>
              <div className="text-4xl font-black text-[#0b66b3]">{BUSINESS.warranty}</div>
              <div className="text-gray-500 mt-1">Warranty</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Why Property Managers Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the unique needs of commercial clients and property managers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#0b66b3]/20 transition"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0b66b3]/10 text-[#0b66b3] flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From single landlords to large property management companies, we scale to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {clientTypes.map((client) => (
              <div
                key={client.title}
                className="bg-white rounded-2xl p-8 shadow-lg flex gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0b66b3] text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#0b66b3]/10 text-[#0b66b3] text-xs font-semibold mb-2">
                    {client.count}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{client.title}</h3>
                  <p className="text-gray-600">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Commercial Services Available
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All residential services available at commercial volume pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="flex items-center gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-[#0b66b3]/10 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0b66b3]/10 text-[#0b66b3] flex items-center justify-center group-hover:bg-[#0b66b3] group-hover:text-white transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-[#0b66b3]">Get Quote →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get custom pricing for your property portfolio. We offer flexible terms
            and dedicated support for all commercial clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0b66b3] font-bold text-lg hover:bg-gray-100 transition"
            >
              Request Volume Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
