'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ALL_LOCATIONS, SERVICES, REMODELING_SERVICES, BUSINESS } from '@/lib/constants';
import { LocationContent, LocationReview, CITY_SPECIFIC_CONTENT } from '@/lib/locationContent';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

type Location = typeof ALL_LOCATIONS[number];

interface Props {
  location: Location;
  content: LocationContent;
  reviews: LocationReview[];
}

const remodelingProcess = [
  { number: 1, title: 'Free Consultation', description: 'We visit your home, discuss your vision, and provide a detailed estimate — no obligation.', color: '#0b66b3' },
  { number: 2, title: 'Design & Planning', description: 'Finalize layout, select materials — countertops, tile, fixtures, cabinetry — and set a clear timeline.', color: '#0b66b3' },
  { number: 3, title: 'Demolition & Prep', description: 'Our crew carefully removes old surfaces, protects your home, and hauls away all debris.', color: '#0b66b3' },
  { number: 4, title: 'Plumbing & Electrical', description: 'Licensed rough-in work — moving pipes, updating wiring, reinforcing framing. All to code.', color: '#0b66b3' },
  { number: 5, title: 'Installation', description: 'Cabinets, countertops, tile, fixtures, lighting — precise craftsmanship on every detail.', color: '#0b66b3' },
  { number: 6, title: 'Final Walkthrough', description: 'We inspect every surface, test every fixture, and back it all with our 5-year warranty.', color: '#22c55e' },
];

export default function LocationPageClient({ location, content, reviews }: Props) {
  const nearbyLocations = ALL_LOCATIONS
    .filter((l) => l.id !== location.id)
    .sort((a, b) => (b.primary ? 1 : 0) - (a.primary ? 1 : 0))
    .slice(0, 8);

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/remodeling/kitchen-showcase-2.jpg"
            alt={`Kitchen and bathroom remodeling in ${location.name}`}
            fill
            className="object-cover"
            priority
            quality={70}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              variant="dark"
              items={[
                { label: 'Locations', href: '/locations' },
                { label: location.name },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-sm mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              SERVING {location.name.toUpperCase()}, WA
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Kitchen & Bathroom
              <span className="block text-amber-400">Remodeling in {location.name}</span>
            </h1>

            <p className="text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">
              {content.heroText} Expert kitchen and bathroom remodeling with {BUSINESS.experience} years of experience. Licensed, insured, and backed by our {BUSINESS.warranty} warranty.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://nexfield.pro/crm/book?u=137"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition shadow-lg shadow-amber-500/30"
              >
                Free Estimate in {location.name}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={BUSINESS.phoneLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phone}
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🛡️', text: 'Licensed & Insured' },
                { icon: '✅', text: '5-Year Warranty' },
                { icon: '⭐', text: `${BUSINESS.rating} Rating` },
                { icon: '🏠', text: `${BUSINESS.projectsCompleted} Projects` },
              ].map((badge) => (
                <div key={badge.text} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <span>{badge.icon}</span>
                  <span className="text-white text-sm font-semibold">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remodeling Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Our Remodeling Services
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Kitchen & Bathroom Remodeling in {location.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full-service remodeling from design to final walkthrough. Transform your {location.name} home completely.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REMODELING_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 transition group"
              >
                <div className="relative h-56">
                  <Image
                    src={service.image}
                    alt={`${service.title} in ${location.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#0b66b3] text-white text-sm font-bold rounded-full">
                    Full Remodel
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#0b66b3] text-sm font-bold rounded-full">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0b66b3] transition">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <span className="text-[#0b66b3] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Learn More
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

      {/* Why Choose Us for Remodeling */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/remodeling/bathroom-showcase-4.jpg"
            alt="Beautiful bathroom remodel"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-slate-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Why {location.name} Chooses Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              {location.name}&apos;s Trusted Remodeling Team
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              {content.whyChooseText}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Full-Service Remodeling', desc: `Design, demolition, plumbing, tile, fixtures — all in-house for your ${location.name} project.`, icon: '🏗️' },
              { title: `${BUSINESS.warranty} Warranty`, desc: `Every ${location.name} remodeling project is backed by our comprehensive warranty.`, icon: '🛡️' },
              { title: `${BUSINESS.experience} Years Experience`, desc: `${BUSINESS.projectsCompleted} remodeling projects completed across the Seattle metro area.`, icon: '⭐' },
              { title: 'Licensed & Insured', desc: `WA State licensed general contractor. Full liability coverage for all ${location.name} projects.`, icon: '✅' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              {location.name} Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What {location.name} Homeowners Say
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

          {reviews.length > 3 && (
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
          )}

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

      {/* Local Insights */}
      {CITY_SPECIFIC_CONTENT[location.id] && (() => {
        const cityData = CITY_SPECIFIC_CONTENT[location.id];
        return (
          <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                  Local Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  Remodeling in {location.name}: Local Insights
                </h2>
              </div>

              <div className="max-w-3xl mx-auto mb-12">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {cityData.localInsight}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Home Types */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#0b66b3]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Home Types</h3>
                  <p className="text-gray-900 font-medium">{cityData.homeTypes}</p>
                </div>

                {/* Average Home Age */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Average Home Age</h3>
                  <p className="text-gray-900 font-medium">{cityData.avgHomeAge}</p>
                </div>

                {/* Climate Considerations */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Climate Considerations</h3>
                  <p className="text-gray-700 text-sm">{cityData.climateNote}</p>
                </div>

                {/* Popular Services */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">Popular Services</h3>
                  <ul className="space-y-1">
                    {cityData.popularServices.map((service) => (
                      <li key={service} className="text-gray-900 font-medium text-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#0b66b3] rounded-full flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })()}

      {/* Remodeling Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              How We Remodel in {location.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From first consultation to final walkthrough — our proven 6-step remodeling process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remodelingProcess.map((step) => (
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

          <div className="text-center mt-10">
            <Link href="/process" className="inline-flex items-center gap-2 text-[#0b66b3] font-semibold hover:underline">
              Learn more about our remodeling process
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Also Available: Refinishing */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-gray-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Also Available
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Refinishing Services in {location.name}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Need a refresh without a full remodel? We also offer professional refinishing services.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="bg-slate-50 rounded-xl p-4 text-center hover:bg-[#0b66b3] hover:text-white transition group border border-gray-100"
              >
                <span className="font-semibold text-sm text-gray-700 group-hover:text-white transition">
                  {service.shortTitle}
                </span>
                <div className="text-xs text-gray-500 group-hover:text-white/70 mt-1 transition">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/remodeling/bathroom-showcase-2.jpg"
            alt="Stunning remodeling project"
            fill
            className="object-cover"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b66b3]/90 to-[#084c8a]/90" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Remodel Your {location.name} Home?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your free estimate today. We serve all of {location.name} and respond {BUSINESS.responseTime.toLowerCase()}!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://nexfield.pro/crm/book?u=137"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30"
            >
              Free {location.name} Estimate
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

      {/* JSON-LD Schema - Remodeling focused */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': ['HomeImprovement', 'GeneralContractor'],
            '@id': `${BUSINESS.website}/locations/${location.id}`,
            name: `${BUSINESS.name} - ${location.name}`,
            description: `Professional kitchen and bathroom remodeling in ${location.name}, WA. Full-service remodeling from design to installation. ${BUSINESS.warranty} warranty. Call ${BUSINESS.phone}.`,
            telephone: BUSINESS.phone,
            url: `${BUSINESS.website}/locations/${location.id}`,
            image: `${BUSINESS.website}/images/remodeling/kitchen-showcase-2.jpg`,
            address: {
              '@type': 'PostalAddress',
              streetAddress: BUSINESS.address,
              addressLocality: 'Seattle',
              addressRegion: 'WA',
              postalCode: '98104',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '47.6047',
              longitude: '-122.3303',
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
              author: { '@type': 'Person', name: review.name },
              reviewRating: { '@type': 'Rating', ratingValue: review.rating },
              reviewBody: review.text,
            })),
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '07:00',
              closes: '19:00',
            },
            priceRange: '$$$',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Remodeling Services',
              itemListElement: REMODELING_SERVICES.map((service) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: `${service.title} in ${location.name}`,
                  description: service.description,
                },
                priceSpecification: {
                  '@type': 'PriceSpecification',
                  price: service.price.replace('From $', '').replace(',', ''),
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
