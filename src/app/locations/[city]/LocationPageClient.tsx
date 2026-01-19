'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ALL_LOCATIONS, SERVICES, BUSINESS, PROCESS_STEPS } from '@/lib/constants';
import { LocationContent, LocationReview } from '@/lib/locationContent';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

type Location = typeof ALL_LOCATIONS[number];

interface Props {
  location: Location;
  content: LocationContent;
  reviews: LocationReview[];
}

export default function LocationPageClient({ location, content, reviews }: Props) {
  const nearbyLocations = ALL_LOCATIONS
    .filter((l) => l.id !== location.id)
    .sort((a, b) => (b.primary ? 1 : 0) - (a.primary ? 1 : 0))
    .slice(0, 8);

  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-4">
        <Breadcrumbs
          items={[
            { label: 'Locations', href: '/locations' },
            { label: location.name },
          ]}
        />
      </div>

      {/* Hero Section with Before/After */}
      <section className="relative pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                Bathtub & Tile Refinishing
                <span className="block text-[#0b66b3]">in {location.name}</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {content.heroText}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BUSINESS.phoneLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {BUSINESS.phone}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0b66b3] text-white font-bold text-lg hover:bg-[#084c8a] transition"
                >
                  Free {location.name} Estimate
                </Link>
              </div>

              {/* Unique Features */}
              <div className="grid grid-cols-2 gap-3">
                {content.uniqueFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Before/After Slider */}
            <div className="relative">
              <BeforeAfterSlider showTabs={true} defaultService={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Refinishing Services in {location.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {content.aboutText}
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#0b66b3] font-bold text-lg">{service.price}</span>
                    </div>
                    <span className="text-[#0b66b3] font-medium group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section - Location Specific */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              {location.name} Reviews
            </span>
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
              <span className="text-xl font-bold text-gray-900">{BUSINESS.rating}</span>
              <span className="text-gray-500">({BUSINESS.reviewCount}+ reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 3).map((review, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{location.name}, WA</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-[#0b66b3]/10 text-[#0b66b3] px-3 py-1 rounded-full font-medium">
                      {review.service}
                    </span>
                    <div className="text-xs text-gray-400 mt-1">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional reviews row */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {reviews.slice(3, 5).map((review, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{location.name}, WA</div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-[#0b66b3]/10 text-[#0b66b3] px-3 py-1 rounded-full font-medium">
                      {review.service}
                    </span>
                    <div className="text-xs text-gray-400 mt-1">{review.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://maps.app.goo.gl/qFKf8ErPL3oUjF686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0b66b3] font-semibold hover:underline"
            >
              See all {location.name} area reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              How We Work in {location.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From your first call to the final result, here&apos;s what to expect when you work with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Location Specific */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Why {location.name} Chooses Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              The Best Refinishing Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {content.whyChooseText}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#0b66b3] to-[#084c8a] rounded-2xl p-6 text-white">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">6-Layer Coating</h3>
              <p className="text-white/80 text-sm">
                3 coats primer + 3 coats topcoat for {location.name}&apos;s best durability
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{BUSINESS.warranty} Warranty</h3>
              <p className="text-gray-600 text-sm">
                Full coverage for all {location.name} refinishing projects
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local {location.name} Team</h3>
              <p className="text-gray-600 text-sm">
                Technicians who know {location.name} and respond quickly
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Save 80%</h3>
              <p className="text-gray-600 text-sm">
                {location.name} homeowners save thousands vs replacement
              </p>
            </div>
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
            Get your free quote today. We serve all of {location.name} and respond {BUSINESS.responseTime.toLowerCase()}!
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
              Get Free {location.name} Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            We Also Serve Areas Near {location.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyLocations.map((nearbyLocation) => (
              <Link
                key={nearbyLocation.id}
                href={nearbyLocation.href}
                className="px-5 py-2.5 rounded-full bg-slate-100 text-gray-700 font-medium hover:bg-[#0b66b3] hover:text-white transition"
              >
                {nearbyLocation.name}, WA
              </Link>
            ))}
            <Link
              href="/locations"
              className="px-5 py-2.5 rounded-full bg-[#0b66b3] text-white font-medium hover:bg-[#084c8a] transition"
            >
              View All 50+ Cities →
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema - Enhanced for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': `${BUSINESS.website}/locations/${location.id}`,
            name: `${BUSINESS.name} - ${location.name}`,
            description: content.metaDescription,
            telephone: BUSINESS.phone,
            url: `${BUSINESS.website}/locations/${location.id}`,
            image: `${BUSINESS.website}/images/optimized/bathtub-3-after.webp`,
            address: {
              '@type': 'PostalAddress',
              addressLocality: location.name,
              addressRegion: 'WA',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '47.6062',
              longitude: '-122.3321',
            },
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
              bestRating: '5',
              worstRating: '1',
            },
            review: reviews.slice(0, 3).map((review) => ({
              '@type': 'Review',
              author: {
                '@type': 'Person',
                name: review.name,
              },
              reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating,
              },
              reviewBody: review.text,
            })),
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '07:00',
              closes: '19:00',
            },
            priceRange: '$$',
            paymentAccepted: 'Cash, Credit Card, Check',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Refinishing Services',
              itemListElement: SERVICES.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: `${service.title} in ${location.name}`,
                  description: service.description,
                },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: service.price.replace('From $', ''),
                  priceCurrency: 'USD',
                },
              })),
            },
          }),
        }}
      />
    </>
  );
}
