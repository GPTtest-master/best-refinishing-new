import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { LOCATIONS, ADDITIONAL_LOCATIONS, ALL_LOCATIONS, SERVICES, BUSINESS, REVIEWS } from '@/lib/constants';

// Generate static params for all locations (50 total)
export async function generateStaticParams() {
  return ALL_LOCATIONS.map((location) => ({
    city: location.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const location = ALL_LOCATIONS.find((l) => l.id === city);

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `Bathtub Refinishing ${location.name} WA | ${BUSINESS.name} - Local Experts`,
    description: `Professional bathtub, tile, and countertop refinishing in ${location.name}, WA. ${BUSINESS.experience} years experience, ${BUSINESS.warranty} warranty. Same-day service. Call ${BUSINESS.phone}`,
    keywords: `bathtub refinishing ${location.name.toLowerCase()}, reglazing ${location.name.toLowerCase()}, tub resurfacing ${location.name.toLowerCase()} wa, bathroom refinishing ${location.name.toLowerCase()}`,
    openGraph: {
      title: `Bathtub Refinishing ${location.name} WA | ${BUSINESS.name}`,
      description: `Professional refinishing services in ${location.name}. Save 80% vs replacement.`,
      type: 'website',
      locale: 'en_US',
      siteName: BUSINESS.name,
    },
    alternates: {
      canonical: `${BUSINESS.website}/locations/${city}`,
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const location = ALL_LOCATIONS.find((l) => l.id === city);

  if (!location) {
    notFound();
  }

  // Get reviews for this location if available, otherwise show general reviews
  const locationReviews = REVIEWS.filter(r =>
    r.location.toLowerCase().includes(location.name.toLowerCase())
  );
  const displayReviews = locationReviews.length > 0 ? locationReviews : REVIEWS.slice(0, 3);

  // Get nearby locations - prioritize primary locations first
  const nearbyLocations = [...LOCATIONS, ...ADDITIONAL_LOCATIONS]
    .filter((l) => l.id !== city)
    .sort((a, b) => (b.primary ? 1 : 0) - (a.primary ? 1 : 0))
    .slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Serving {location.name}, WA
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              Professional Refinishing
              <span className="block text-[#0b66b3]">in {location.name}</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {BUSINESS.name} provides expert bathtub, tile, and countertop refinishing services
              throughout {location.name} and surrounding areas. Save up to 80% compared to replacement
              with our professional reglazing services.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={BUSINESS.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {BUSINESS.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0b66b3] text-white font-bold text-lg hover:bg-[#084c8a] transition"
              >
                Get Free Estimate
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-semibold">{BUSINESS.rating} Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#0b66b3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">{BUSINESS.warranty} Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our Services in {location.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete refinishing solutions for your home. All services backed by our {BUSINESS.warranty} warranty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 transition group"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={`${service.title} in ${location.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.popular && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-white text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#0b66b3] font-bold text-lg">{service.price}</span>
                      <span className="text-green-600 text-sm ml-2">{service.savings}</span>
                    </div>
                    <span className="text-[#0b66b3] font-medium group-hover:translate-x-1 transition-transform">
                      Learn More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What {location.name} Customers Say
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-bold text-lg">{BUSINESS.rating}</span>
              <span className="text-gray-500">({BUSINESS.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {displayReviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                  <div className="text-xs text-gray-400">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Transform Your {location.name} Bathroom?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free quote today. We serve all of {location.name} and respond within {BUSINESS.responseTime}!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition"
            >
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

      {/* Nearby Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            We Also Serve Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyLocations.map((nearbyLocation) => (
              <Link
                key={nearbyLocation.id}
                href={nearbyLocation.href}
                className="px-6 py-3 rounded-full bg-slate-100 text-gray-700 font-medium hover:bg-[#0b66b3] hover:text-white transition"
              >
                {nearbyLocation.name}, WA
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: BUSINESS.name,
            description: `Professional refinishing services in ${location.name}, WA`,
            telephone: BUSINESS.phone,
            url: BUSINESS.website,
            areaServed: {
              '@type': 'City',
              name: location.name,
              containedInPlace: {
                '@type': 'State',
                name: 'Washington',
              },
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: BUSINESS.rating,
              reviewCount: BUSINESS.reviewCount,
            },
            openingHours: 'Mo-Su 07:00-19:00',
            priceRange: '$$',
          }),
        }}
      />
    </>
  );
}
