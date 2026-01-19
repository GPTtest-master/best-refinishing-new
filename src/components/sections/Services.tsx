'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-16 md:py-20 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Professional Refinishing Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your surfaces without the cost and hassle of replacement
          </p>
        </div>

        {/* Mobile: Tabs + Content */}
        <div className="md:hidden">
          {/* Scrollable Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide -mx-4 px-4">
            {SERVICES.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-[#0b66b3] text-white'
                    : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                {service.shortTitle}
              </button>
            ))}
          </div>

          {/* Active Service Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <div className="relative h-56 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ transform: SERVICES[activeTab].imageScale ? `scale(${SERVICES[activeTab].imageScale})` : undefined }}
              >
                <Image
                  src={SERVICES[activeTab].image}
                  alt={SERVICES[activeTab].title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: SERVICES[activeTab].imagePosition || 'center' }}
                />
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {SERVICES[activeTab].title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {SERVICES[activeTab].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {SERVICES[activeTab].features.slice(0, 3).map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                  >
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href="#quote"
                  className="flex-1 py-3 rounded-xl bg-[#0b66b3] text-white font-bold text-center hover:bg-[#084c8a] transition"
                >
                  Get Quote
                </a>
                <Link
                  href={SERVICES[activeTab].href}
                  className="px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-bold hover:border-[#0b66b3] transition"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {SERVICES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-2 h-2 rounded-full transition ${
                  activeTab === index ? 'bg-[#0b66b3] w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                  style={{ transform: service.imageScale ? `scale(${service.imageScale})` : undefined }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: service.imagePosition || 'center' }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="text-xs text-[#0b66b3] font-semibold mb-1">{service.subtitle}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0b66b3] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-1 text-xs text-gray-500"
                    >
                      <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button - Learn More */}
                <Link
                  href={service.href}
                  className="block w-full py-3 rounded-xl bg-[#0b66b3] text-white font-semibold text-center hover:bg-[#084c8a] transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 md:mt-16 text-center">
          <p className="text-gray-600 mb-4">Not sure which service you need?</p>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0b66b3] text-white font-bold text-lg hover:bg-[#084c8a] transition"
          >
            Get Free Assessment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
