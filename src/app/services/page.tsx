import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, BUSINESS, ALL_LOCATIONS } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateServicesIndexSchema } from '@/lib/schema';
import { SchemaScript } from '@/components/SchemaScript';

export const metadata: Metadata = {
  title: `Refinishing Services - Bathtub, Shower, Tile & More | ${BUSINESS.name}`,
  description: `Professional bathtub, shower, tile, sink, and countertop refinishing in Seattle & 50+ cities. Save 80% vs replacement. ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone}.`,
  keywords: 'bathtub refinishing, shower refinishing, tile refinishing, sink refinishing, countertop refinishing, reglazing services seattle',
};

export default function ServicesPage() {
  const schema = generateServicesIndexSchema();

  return (
    <>
      <SchemaScript schema={schema} />
      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/images/optimized/bathtub-3-after.webp')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              variant="dark"
              items={[{ label: 'Services' }]}
            />
          </div>
          <div className="text-center">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Professional Refinishing Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Transform your bathroom and kitchen surfaces without the cost and hassle of replacement
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition"
            >
              Get Free Quote
            </Link>
          </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Complete Refinishing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From bathtubs to countertops, we restore every surface to like-new condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {service.popular && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-white text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-white/95 backdrop-blur shadow-lg">
                    <span className="text-[#0b66b3] font-bold">{service.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#0b66b3] transition">
                      {service.title}
                    </h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      {service.savings}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-gray-600 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-[#0b66b3] font-semibold group-hover:gap-3 transition-all">
                    View {service.shortTitle} Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Why Refinishing?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Smart Alternative to Replacement
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save thousands and get stunning results without demolition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#0b66b3] to-[#084c8a] rounded-2xl p-6 text-white">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Save 80%</h3>
              <p className="text-white/80 text-sm">
                Refinishing costs a fraction of full replacement
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Done in 1 Day</h3>
              <p className="text-gray-600 text-sm">
                No weeks of renovation - just one day
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">6-Layer Coating</h3>
              <p className="text-gray-600 text-sm">
                3 primer + 3 topcoat for maximum durability
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{BUSINESS.warranty} Warranty</h3>
              <p className="text-gray-600 text-sm">
                Full coverage on all refinishing work
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Available in 50+ Cities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All services available throughout the greater Seattle area
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {ALL_LOCATIONS.slice(0, 12).map((location) => (
              <Link
                key={location.id}
                href={location.href}
                className="px-4 py-2 rounded-full bg-slate-100 text-gray-700 font-medium hover:bg-[#0b66b3] hover:text-white transition"
              >
                {location.name}
              </Link>
            ))}
            <Link
              href="/locations"
              className="px-4 py-2 rounded-full bg-[#0b66b3] text-white font-medium hover:bg-[#084c8a] transition"
            >
              View All 50+ Cities →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free quote today. We respond {BUSINESS.responseTime.toLowerCase()}!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0b66b3] font-bold text-lg hover:bg-gray-100 transition"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: BUSINESS.projectsCompleted, label: 'Projects Completed' },
              { value: BUSINESS.experience, label: 'Years Experience' },
              { value: BUSINESS.rating, label: 'Customer Rating' },
              { value: '50+', label: 'Cities Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-[#0b66b3] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
