'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, BUSINESS, PROCESS_STEPS, FAQ_ITEMS } from '@/lib/constants';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Service type definition
type Service = typeof SERVICES[number];

// Reviews data
const reviews = [
  {
    name: 'Sarah M.',
    location: 'Seattle, WA',
    rating: 5,
    text: 'Absolutely incredible transformation! My 30-year-old bathtub looks brand new. The team was professional, on time, and the quality is outstanding. Saved us thousands compared to replacement.',
    service: 'Bathtub Refinishing',
  },
  {
    name: 'David K.',
    location: 'Bellevue, WA',
    rating: 5,
    text: 'Best decision we made for our bathroom remodel. The refinishing looks perfect and has held up beautifully for over a year now. Highly recommend!',
    service: 'Tub & Tile Refinishing',
  },
  {
    name: 'Jennifer L.',
    location: 'Redmond, WA',
    rating: 5,
    text: 'From quote to completion, everything was seamless. They explained the 6-layer coating process and it really shows in the durability. Worth every penny!',
    service: 'Shower Refinishing',
  },
];

// Service to slider index mapping
// Slider tabs: 0=Bathtub, 1=Tub&Tiles, 2=Sink, 3=Cast Iron, 4=Local
const serviceToSliderIndex: Record<string, number> = {
  bathtub: 0,
  shower: 1,
  tile: 1,
  sink: 2,
  countertop: 4,
  repair: 4,
};

export default function ServicePageClient({ service }: { service: Service }) {
  const otherServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);
  const serviceFaqs = FAQ_ITEMS.slice(0, 4);
  const defaultSliderIndex = serviceToSliderIndex[service.id] || 0;

  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-4">
        <Breadcrumbs
          items={[
            { label: 'Services', href: '/services' },
            { label: service.title },
          ]}
        />
      </div>

      {/* Hero Section with Before/After Slider */}
      <section className="relative pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b66b3]/10 text-[#0b66b3] font-semibold text-sm mb-6">
                {service.subtitle}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                {service.title}
                <Link
                  href="/locations"
                  className="block text-[#0b66b3] hover:underline decoration-2 underline-offset-4 transition"
                >
                  Seattle & 50+ Cities
                </Link>
              </h1>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                {service.longDescription}
              </p>
              <Link
                href="/locations"
                className="text-gray-500 mb-8 flex items-center gap-2 hover:text-[#0b66b3] transition group"
              >
                <svg className="w-5 h-5 text-[#0b66b3]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Serving Seattle, Bellevue, Redmond, Kirkland, Tacoma & 50+ cities</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Price & CTA */}
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                  <div className="text-sm text-gray-500 mb-1">Starting at</div>
                  <div className="text-3xl font-black text-[#0b66b3]">{service.price}</div>
                  <div className="text-sm text-green-600 font-medium">{service.savings}</div>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30"
                  >
                    Get Instant Quote
                  </a>
                  <a
                    href={BUSINESS.phoneLink}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold border-2 border-gray-200 hover:border-[#0b66b3] transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Before/After Slider */}
            <div className="relative">
              <BeforeAfterSlider showTabs={true} defaultService={defaultSliderIndex} />

              {/* Trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 hidden lg:flex">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{BUSINESS.warranty} Warranty</div>
                    <div className="text-sm text-gray-500">Guaranteed Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - FIRST after Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Professional {service.shortTitle} Refinishing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From inspection to completion in just one day. Here&apos;s how we transform your {service.shortTitle.toLowerCase()}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
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

      {/* Reviews Section - SECOND */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Customer Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              What Our Customers Say
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
              <span className="text-gray-500">({BUSINESS.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex mb-4">
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
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                  <span className="text-xs bg-[#0b66b3]/10 text-[#0b66b3] px-3 py-1 rounded-full font-medium">
                    {review.service}
                  </span>
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
              See all reviews on Google
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - THIRD */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              The Best Refinishing Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade materials and techniques that deliver lasting results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 6-Layer Coating */}
            <div className="bg-gradient-to-br from-[#0b66b3] to-[#084c8a] rounded-2xl p-6 text-white">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">6-Layer Coating</h3>
              <p className="text-white/80 text-sm">
                3 coats of industrial primer + 3 coats of premium topcoat for unmatched durability
              </p>
            </div>

            {/* 5-Year Warranty */}
            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{BUSINESS.warranty} Warranty</h3>
              <p className="text-gray-600 text-sm">
                Full coverage against peeling, flaking, and adhesion issues. We stand behind our work.
              </p>
            </div>

            {/* 15+ Years Experience */}
            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{BUSINESS.experience} Years Experience</h3>
              <p className="text-gray-600 text-sm">
                Certified technicians with thousands of completed projects across the Puget Sound.
              </p>
            </div>

            {/* Done in 1 Day */}
            <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Done in 1 Day</h3>
              <p className="text-gray-600 text-sm">
                Most projects completed in 4-6 hours. Ready to use in 24 hours. No weeks of waiting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Common Questions About {service.shortTitle} Refinishing
            </h2>
          </div>

          <div className="space-y-4">
            {serviceFaqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#0b66b3] text-white text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-9">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="inline-flex items-center gap-2 text-[#0b66b3] font-semibold hover:underline">
              View all FAQs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-20 bg-gradient-to-br from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Get Your Free {service.shortTitle} Refinishing Quote
          </h2>
          <p className="text-xl text-white/90 mb-4">
            Serving Seattle, Bellevue, Redmond, Kirkland, Tacoma and 50+ cities across the Puget Sound
          </p>
          <p className="text-lg text-white/70 mb-8">
            Call us now or fill out the form for a free estimate. We respond {BUSINESS.responseTime.toLowerCase()}!
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
              Request Quote Online
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {service.title} Service Areas
            </h2>
            <p className="text-gray-600">
              Professional {service.shortTitle.toLowerCase()} refinishing available throughout the greater Seattle area
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            {['Seattle', 'Bellevue', 'Redmond', 'Kirkland', 'Bothell', 'Renton', 'Kent', 'Tacoma', 'Lynnwood', 'Sammamish', 'Issaquah', 'Shoreline', 'Burien', 'Tukwila', 'Mercer Island', 'Woodinville', 'Edmonds', 'Everett', 'Auburn', 'Federal Way'].map((city) => (
              <Link
                key={city}
                href={`/locations/${city.toLowerCase().replace(' ', '-')}`}
                className="px-3 py-1 bg-slate-100 rounded-full text-gray-600 hover:bg-[#0b66b3] hover:text-white transition"
              >
                {city}
              </Link>
            ))}
            <Link
              href="/locations"
              className="px-3 py-1 bg-[#0b66b3] rounded-full text-white font-medium hover:bg-[#084c8a] transition"
            >
              +30 more cities →
            </Link>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              Other Services We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Complete bathroom and kitchen refinishing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherServices.map((otherService) => (
              <Link
                key={otherService.id}
                href={otherService.href}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group"
              >
                <div className="relative h-48">
                  <Image
                    src={otherService.image}
                    alt={otherService.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{otherService.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{otherService.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0b66b3] font-bold">{otherService.price}</span>
                    <span className="text-[#0b66b3] font-medium group-hover:translate-x-1 transition-transform">
                      View Details →
                    </span>
                  </div>
                </div>
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
            '@type': 'Service',
            name: service.title,
            description: service.longDescription,
            provider: {
              '@type': 'LocalBusiness',
              name: BUSINESS.name,
              telephone: BUSINESS.phone,
              url: BUSINESS.website,
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: BUSINESS.rating,
                reviewCount: BUSINESS.reviewCount,
              },
            },
            areaServed: [
              { '@type': 'City', name: 'Seattle' },
              { '@type': 'City', name: 'Bellevue' },
              { '@type': 'City', name: 'Redmond' },
              { '@type': 'City', name: 'Kirkland' },
              { '@type': 'City', name: 'Tacoma' },
            ],
            priceRange: service.price,
          }),
        }}
      />
    </>
  );
}
