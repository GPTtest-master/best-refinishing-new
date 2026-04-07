'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SERVICES, REMODELING_SERVICES, ALL_SERVICES, BUSINESS, PROCESS_STEPS, REMODELING_PROCESS_STEPS, FAQ_ITEMS, REMODELING_FAQ_ITEMS, REVIEWS, REMODELING_REVIEWS, REMODELING_SERVICE_CONTENT, BLOG_POSTS, LOCATIONS } from '@/lib/constants';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

// Service type definition
type Service = (typeof ALL_SERVICES)[number];

// Before/after pairs for remodeling services
const remodelingBeforeAfter: Record<string, { before: string; after: string; label: string }[]> = {
  'bathroom-remodeling': [
    { before: '/images/remodeling/before-after/bathroom1-before.jpg', after: '/images/remodeling/before-after/bathroom1-after.jpg', label: 'Master Bathroom Remodel' },
    { before: '/images/remodeling/before-after/bathroom2-before.jpg', after: '/images/remodeling/before-after/bathroom2-after.jpg', label: 'Guest Bathroom Renovation' },
    { before: '/images/remodeling/before-after/bathroom3-before.jpg', after: '/images/remodeling/before-after/bathroom3-after.jpg', label: 'Full Bathroom Transformation' },
  ],
  'kitchen-remodeling': [
    { before: '/images/remodeling/before-after/kitchen1-before.jpg', after: '/images/remodeling/before-after/kitchen1-after.jpg', label: 'Modern Kitchen Remodel' },
    { before: '/images/remodeling/before-after/kitchen2-before.jpg', after: '/images/remodeling/before-after/kitchen2-after.jpg', label: 'Kitchen Renovation' },
    { before: '/images/remodeling/before-after/kitchen3-before.jpg', after: '/images/remodeling/before-after/kitchen3-after.jpg', label: 'Complete Kitchen Upgrade' },
  ],
  'shower-installation': [
    { before: '/images/remodeling/before-after/bathroom1-before.jpg', after: '/images/remodeling/before-after/bathroom1-after.jpg', label: 'Walk-In Shower Installation' },
    { before: '/images/remodeling/before-after/bathroom3-before.jpg', after: '/images/remodeling/before-after/bathroom3-after.jpg', label: 'Custom Shower Build' },
  ],
  'bathtub-installation': [
    { before: '/images/remodeling/before-after/bathroom2-before.jpg', after: '/images/remodeling/before-after/bathroom2-after.jpg', label: 'Bathtub Installation' },
    { before: '/images/remodeling/before-after/bathroom1-before.jpg', after: '/images/remodeling/before-after/bathroom1-after.jpg', label: 'Tub Replacement' },
  ],
  'tile-installation': [
    { before: '/images/remodeling/before-after/bathroom3-before.jpg', after: '/images/remodeling/before-after/bathroom3-after.jpg', label: 'Bathroom Tile Installation' },
    { before: '/images/remodeling/before-after/kitchen1-before.jpg', after: '/images/remodeling/before-after/kitchen1-after.jpg', label: 'Kitchen Backsplash & Floor Tile' },
  ],
  'countertop-installation': [
    { before: '/images/remodeling/before-after/kitchen2-before.jpg', after: '/images/remodeling/before-after/kitchen2-after.jpg', label: 'Quartz Countertop Installation' },
    { before: '/images/remodeling/before-after/kitchen3-before.jpg', after: '/images/remodeling/before-after/kitchen3-after.jpg', label: 'Kitchen Counter Upgrade' },
  ],
};

// Showcase images for remodeling services
const remodelingShowcase: Record<string, string[]> = {
  'bathroom-remodeling': ['/images/remodeling/bathroom-showcase-1.jpg', '/images/remodeling/bathroom-showcase-2.jpg', '/images/remodeling/bathroom-showcase-3.jpg', '/images/remodeling/bathroom-showcase-4.jpg'],
  'kitchen-remodeling': ['/images/remodeling/kitchen-showcase-1.jpg', '/images/remodeling/kitchen-showcase-2.jpg', '/images/remodeling/kitchen-showcase-3.jpg', '/images/remodeling/kitchen-showcase-4.jpg'],
  'shower-installation': ['/images/remodeling/bathroom-showcase-1.jpg', '/images/remodeling/bathroom-showcase-3.jpg'],
  'bathtub-installation': ['/images/remodeling/bathroom-showcase-2.jpg', '/images/remodeling/bathroom-showcase-4.jpg'],
  'tile-installation': ['/images/remodeling/bathroom-showcase-3.jpg', '/images/remodeling/kitchen-detail-1.jpg', '/images/remodeling/kitchen-detail-2.jpg'],
  'countertop-installation': ['/images/remodeling/kitchen-detail-1.jpg', '/images/remodeling/kitchen-detail-2.jpg', '/images/remodeling/kitchen-showcase-1.jpg'],
};

// Related blog posts per service
const serviceRelatedBlogs: Record<string, string[]> = {
  'bathroom-remodeling': ['bathroom-remodeling-cost-seattle-2026', 'kitchen-vs-bathroom-remodel-roi'],
  'kitchen-remodeling': ['kitchen-remodeling-seattle-guide', 'kitchen-vs-bathroom-remodel-roi'],
  'tile-installation': ['shower-tile-installation-seattle', 'bathroom-remodeling-cost-seattle-2026'],
  'countertop-installation': ['kitchen-remodeling-seattle-guide', 'kitchen-vs-bathroom-remodel-roi'],
  'shower-installation': ['shower-tile-installation-seattle', 'bathroom-remodeling-cost-seattle-2026'],
  'bathtub-installation': ['bathroom-remodeling-cost-seattle-2026', 'shower-tile-installation-seattle'],
};

// Service to slider index mapping (refinishing only)
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
  const isRemodeling = REMODELING_SERVICES.some(s => s.id === service.id);
  const processSteps = isRemodeling ? REMODELING_PROCESS_STEPS : PROCESS_STEPS;
  const faqItems = isRemodeling ? REMODELING_FAQ_ITEMS : FAQ_ITEMS;
  const reviews = isRemodeling ? REMODELING_REVIEWS : REVIEWS;
  const otherServices = [...ALL_SERVICES].filter((s) => s.id !== service.id).slice(0, 3);
  const richContent = isRemodeling ? REMODELING_SERVICE_CONTENT[service.id] : null;
  const serviceFaqs = richContent?.uniqueFaqs || faqItems.slice(0, 4);
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

      {/* Cross-link banner: refinishing → remodeling */}
      {!isRemodeling && (
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <Link
            href="/services/bathroom-remodeling"
            className="block p-4 bg-gradient-to-r from-[#0b66b3]/5 to-amber-500/5 border border-[#0b66b3]/20 rounded-xl hover:border-[#0b66b3]/40 transition group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0b66b3]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Looking for a full remodel?</p>
                  <p className="text-sm text-gray-600">See our kitchen & bathroom remodeling services — from $7,900</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0b66b3] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      )}

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
                    href="https://nexfield.pro/crm/book?u=137"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-amber-500 text-white font-bold text-lg hover:bg-amber-600 transition shadow-lg shadow-amber-500/30"
                  >
                    Free Estimate
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

            {/* Right - Visual Content */}
            <div className="relative">
              {isRemodeling ? (
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ) : (
                <BeforeAfterSlider showTabs={true} defaultService={defaultSliderIndex} />
              )}

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
              Professional {service.shortTitle} {isRemodeling ? 'Remodeling' : 'Refinishing'} Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From inspection to completion in just one day. Here&apos;s how we transform your {service.shortTitle.toLowerCase()}.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
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

      {/* What's Included - Remodeling Only */}
      {richContent && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                Full Scope of Work
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                What&apos;s Included in Your {service.shortTitle} Remodel
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Every project includes comprehensive service from start to finish — no hidden costs, no surprises
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {richContent.whatsIncluded.map((group, gi) => (
                <div key={gi} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#0b66b3] text-white flex items-center justify-center font-bold">
                      {gi + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{group.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-2 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Material Guide - Remodeling Only */}
      {richContent && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                Material Selection
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                {service.shortTitle} Material & Pricing Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Compare materials side by side — we help you choose the right balance of beauty, durability, and budget
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {richContent.materialGuide.map((mat, mi) => (
                <div key={mi} className="bg-slate-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{mat.name}</h3>
                    <span className="px-3 py-1 bg-[#0b66b3]/10 text-[#0b66b3] text-sm font-bold rounded-full">{mat.priceRange}</span>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-green-700">Pros:</span>
                      <span className="text-gray-600 ml-1">{mat.pros}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-red-600">Cons:</span>
                      <span className="text-gray-600 ml-1">{mat.cons}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <span className="font-semibold text-[#0b66b3]">Best for:</span>
                      <span className="text-gray-700 ml-1">{mat.best}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Timeline - Remodeling Only */}
      {richContent && (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-3">
                Project Timeline
              </span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                What to Expect: {service.shortTitle} Remodel Timeline
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A clear week-by-week breakdown so you know exactly what&apos;s happening at every stage
              </p>
            </div>

            <div className="space-y-6">
              {richContent.timeline.map((phase, pi) => (
                <div key={pi} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24 py-2 px-3 bg-amber-500 rounded-lg text-center">
                    <span className="font-bold text-sm text-gray-900">{phase.week}</span>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                    <p className="text-gray-200 leading-relaxed">{phase.tasks}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cost Factors - Remodeling Only */}
      {richContent && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                Transparent Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                What Affects Your {service.shortTitle} Remodel Cost
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                No hidden fees — here&apos;s exactly what drives pricing so you can make informed decisions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {richContent.costFactors.map((cf, ci) => (
                <div key={ci} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{cf.factor}</h3>
                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                      cf.impact === 'Very High' ? 'bg-red-100 text-red-700' :
                      cf.impact === 'High' ? 'bg-amber-100 text-amber-700' :
                      cf.impact === 'Medium-High' ? 'bg-yellow-100 text-yellow-700' :
                      cf.impact === 'Medium' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {cf.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{cf.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expert Tip & Common Mistakes - Remodeling Only */}
      {richContent && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Expert Tip */}
              <div>
                <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-wider mb-3">
                  Pro Insight
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  Expert Tip from Our {service.shortTitle} Specialists
                </h2>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-2xl p-6 border border-amber-200">
                  <div className="flex gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{richContent.expertTip}</p>
                  </div>
                </div>
              </div>

              {/* Common Mistakes */}
              <div>
                <span className="inline-block text-red-500 font-semibold text-sm uppercase tracking-wider mb-3">
                  Avoid These Pitfalls
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  Common {service.shortTitle} Remodeling Mistakes
                </h2>
                <div className="space-y-4">
                  {richContent.commonMistakes.map((cm, cmi) => (
                    <div key={cmi} className="bg-slate-50 rounded-xl p-5 border border-gray-100">
                      <div className="flex items-start gap-3 mb-2">
                        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <h3 className="font-bold text-gray-900 text-sm">{cm.mistake}</h3>
                      </div>
                      <div className="flex items-start gap-3 pl-8">
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-gray-600 text-sm">{cm.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Before & After Gallery - Remodeling Only */}
      {isRemodeling && remodelingBeforeAfter[service.id] && (
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                Real Results
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Before & After Transformations
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See the difference professional remodeling makes in real Seattle homes
              </p>
            </div>

            <div className="space-y-12">
              {remodelingBeforeAfter[service.id].map((pair, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{pair.label}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                      <Image src={pair.before} alt={`${pair.label} - Before`} fill className="object-cover" />
                      <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-red-500/90 text-white text-sm font-bold">
                        BEFORE
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                      <Image src={pair.after} alt={`${pair.label} - After`} fill className="object-cover" />
                      <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-green-500/90 text-white text-sm font-bold">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Showcase Gallery - Remodeling Only */}
      {isRemodeling && remodelingShowcase[service.id] && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                Recent {service.shortTitle} Projects
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {remodelingShowcase[service.id].map((src, index) => (
                <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                  <Image src={src} alt={`${service.title} project ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              {isRemodeling ? 'The Remodeling Pros Difference' : 'The Refinishing Pros Difference'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isRemodeling
                ? 'Licensed contractors delivering premium remodeling with quality materials'
                : 'Professional-grade materials and techniques that deliver lasting results'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {isRemodeling ? (
              <>
                {/* Full-Service Remodeling */}
                <div className="bg-gradient-to-br from-[#0b66b3] to-[#084c8a] rounded-2xl p-6 text-white">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Full-Service Remodeling</h3>
                  <p className="text-white/80 text-sm">
                    From design to final walkthrough — we handle demolition, plumbing, electrical, tile, and fixtures
                  </p>
                </div>

                {/* Licensed & Insured */}
                <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
                  <p className="text-gray-600 text-sm">
                    WA State licensed general contractor. Fully insured with {BUSINESS.warranty} warranty on all work.
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
                    Hundreds of completed remodels across the Puget Sound. We know Seattle homes inside and out.
                  </p>
                </div>

                {/* Transparent Pricing */}
                <div className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    Detailed estimates upfront. No hidden fees or surprise charges. We respect your budget.
                  </p>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
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
              {service.shortTitle} {isRemodeling ? 'Remodeling' : 'Refinishing'} — Frequently Asked Questions
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
            Get Your Free {service.shortTitle} {isRemodeling ? 'Remodeling' : 'Refinishing'} Quote
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
              href="https://nexfield.pro/crm/book?u=137"
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
              Professional {service.shortTitle.toLowerCase()} {isRemodeling ? 'remodeling' : 'refinishing'} available throughout the greater Seattle area
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

      {/* Related Blog Articles */}
      {isRemodeling && serviceRelatedBlogs[service.id] && (
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                Learn More
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                Related {service.shortTitle} Remodeling Guides
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {serviceRelatedBlogs[service.id].map((slug) => {
                const post = [...BLOG_POSTS].find(p => p.slug === slug);
                if (!post) return null;
                return (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="flex gap-4 bg-slate-50 rounded-xl p-5 hover:shadow-md transition group"
                  >
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-[#0b66b3] font-semibold uppercase">{post.category}</span>
                      <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2 group-hover:text-[#0b66b3] transition">{post.title}</h3>
                      <p className="text-xs text-gray-500">{post.readTime} read</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}


      {/* Service Areas - Internal Links to Combo Pages */}
      <section className="py-12 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Serving 50+ Cities
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              {service.title} — Available Across Greater Seattle
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {LOCATIONS.map(city => (
              <Link
                key={city.id}
                href={`/locations/${city.id}${service.href.replace('/services', '')}`}
                className="px-4 py-3 bg-white rounded-lg border border-gray-200 hover:border-[#0b66b3] hover:shadow-md transition text-center group"
              >
                <span className="text-sm font-medium text-gray-900 group-hover:text-[#0b66b3] transition">
                  {service.shortTitle} in {city.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/locations" className="text-[#0b66b3] font-semibold hover:underline">
              View All 50+ Service Areas →
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
              {isRemodeling ? 'Complete remodeling and renovation solutions' : 'Complete bathroom and kitchen refinishing solutions'}
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
            '@graph': [
              {
                '@type': 'Service',
                name: service.title,
                description: service.longDescription,
                provider: {
                  '@type': 'LocalBusiness',
                  name: BUSINESS.name,
                  telephone: BUSINESS.phone,
                  url: BUSINESS.website,
                },
                areaServed: [
                  { '@type': 'City', name: 'Seattle' },
                  { '@type': 'City', name: 'Bellevue' },
                  { '@type': 'City', name: 'Redmond' },
                  { '@type': 'City', name: 'Kirkland' },
                  { '@type': 'City', name: 'Tacoma' },
                ],
                priceRange: service.price,
              },
              {
                '@type': 'FAQPage',
                mainEntity: serviceFaqs.map((faq: { question: string; answer: string }) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
