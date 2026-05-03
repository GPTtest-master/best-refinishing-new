import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LOCATIONS, ADDITIONAL_LOCATIONS, BUSINESS, REMODELING_SERVICES } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { generateLocationsIndexSchema } from '@/lib/schema';
import { SchemaScript } from '@/components/SchemaScript';

export const metadata: Metadata = {
  title: {
    absolute: 'Kitchen & Bathroom Remodeling Service Areas | Seattle WA',
  },
  description: `Professional kitchen and bathroom remodeling in Seattle, Bellevue, Redmond, Kirkland, Tacoma and 50+ cities across the Puget Sound. ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone}.`,
  keywords: 'kitchen remodeling near me, bathroom remodeling seattle, kitchen renovation bellevue, remodeling service areas seattle',
  alternates: {
    canonical: `${BUSINESS.website}/locations`,
  },
  openGraph: {
    title: `Kitchen & Bathroom Remodeling - 50+ Cities | ${BUSINESS.name}`,
    description: `Professional kitchen and bathroom remodeling in Seattle, Bellevue, Redmond, Kirkland, Tacoma and 50+ cities.`,
    type: 'website',
    locale: 'en_US',
    siteName: BUSINESS.name,
  },
};

export default function LocationsPage() {
  const schema = generateLocationsIndexSchema();

  return (
    <>
      <SchemaScript schema={schema} />
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/remodeling/herolocations.jpg" alt="Kitchen and bathroom remodeling service areas" fill className="object-cover" priority quality={70} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              variant="dark"
              items={[{ label: 'Locations' }]}
            />
          </div>
          <div className="text-center">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            We Serve 50+ Cities
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professional kitchen and bathroom remodeling throughout the greater Seattle area and Puget Sound region
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

      {/* Primary Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Primary Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Major Cities We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full kitchen and bathroom remodeling services in these areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={location.href}
                className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#0b66b3] hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0b66b3]/10 flex items-center justify-center group-hover:bg-[#0b66b3] transition">
                    <svg className="w-6 h-6 text-[#0b66b3] group-hover:text-white transition" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {location.primary && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      Primary
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b66b3] transition">
                  {location.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Kitchen & Bathroom Remodeling
                </p>
                <span className="inline-flex items-center gap-1 text-[#0b66b3] font-semibold text-sm group-hover:gap-2 transition-all">
                  View Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Locations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Extended Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Additional Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We also provide remodeling services to these neighborhoods and cities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {ADDITIONAL_LOCATIONS.map((location) => (
              <Link
                key={location.id}
                href={location.href}
                className="bg-white rounded-xl p-4 text-center hover:bg-[#0b66b3] hover:text-white transition group border border-gray-100"
              >
                <span className="font-semibold text-gray-700 group-hover:text-white transition">
                  {location.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Services Available in All Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kitchen and bathroom remodeling services available across the Puget Sound area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REMODELING_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="flex items-center gap-4 bg-slate-50 rounded-xl p-5 hover:bg-[#0b66b3]/5 hover:border-[#0b66b3] border-2 border-transparent transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0b66b3]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-gray-900 group-hover:text-[#0b66b3] transition">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500">{service.price}</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0b66b3] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Location Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Our Office
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Visit Us in Downtown Seattle
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Located in the iconic Columbia Tower — serving the entire Puget Sound region
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Map */}
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src={BUSINESS.mapEmbedUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kitchen and Bathroom Remodeling Pros - Columbia Tower, Seattle"
              />
            </div>

            {/* Address Card */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b66b3]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600 text-sm">701 5th Ave, 42nd Floor<br />Suite 4272, Columbia Tower<br />Seattle, WA 98104</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b66b3]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <a href={BUSINESS.phoneLink} className="text-[#0b66b3] font-semibold hover:underline">{BUSINESS.phone}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0b66b3]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Hours</div>
                    <div className="text-gray-600 text-sm">{BUSINESS.hours}</div>
                  </div>
                </div>
              </div>
              <a
                href="/contact"
                className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition"
              >
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Don&apos;t See Your City?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We may still be able to serve your area! Contact us to check availability and get a free quote.
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
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Cities Served' },
              { value: BUSINESS.projectsCompleted, label: 'Projects Completed' },
              { value: BUSINESS.rating, label: 'Customer Rating' },
              { value: BUSINESS.warranty, label: 'Warranty' },
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
