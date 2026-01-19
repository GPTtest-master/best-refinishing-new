'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FAQ_ITEMS, BUSINESS, SERVICES, LOCATIONS } from '@/lib/constants';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#0b66b3] transition"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{question}</span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#0b66b3]/10 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPageClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0b66b3]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              variant="dark"
              items={[{ label: 'FAQ' }]}
            />
          </div>
          <div className="max-w-3xl">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Got Questions?
              <span className="block text-amber-400">We Have Answers</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Everything you need to know about our professional refinishing services.
              Can&apos;t find what you&apos;re looking for? Call us at {BUSINESS.phone}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {FAQ_ITEMS.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Questions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">
              More Common Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What surfaces can you refinish?
              </h3>
              <p className="text-gray-600">
                We refinish bathtubs, showers, tiles, sinks, and countertops. We work with porcelain,
                cast iron, fiberglass, acrylic, ceramic, and cultured marble surfaces.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you offer color matching?
              </h3>
              <p className="text-gray-600">
                Yes! We can match virtually any color. We offer a wide range of standard colors
                and can create custom matches to coordinate with your bathroom design.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Is refinishing a DIY project?
              </h3>
              <p className="text-gray-600">
                We strongly recommend professional refinishing. DIY kits don&apos;t provide the
                durability, finish quality, or safety measures that professional equipment offers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                How do I maintain my refinished surface?
              </h3>
              <p className="text-gray-600">
                Use non-abrasive cleaners like dish soap or bathroom cleaners without grit.
                Avoid bleach-based products and abrasive scrubbers. Regular gentle cleaning
                keeps your surface looking new.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Do you work with property managers?
              </h3>
              <p className="text-gray-600">
                Yes! We offer special pricing for property managers and landlords with
                multiple units. We can handle high-volume projects efficiently.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What areas do you serve?
              </h3>
              <p className="text-gray-600">
                We serve Seattle and all surrounding areas including Bellevue, Redmond,
                Kirkland, Bothell, Renton, Kent, Tacoma, and more. Contact us to confirm
                service in your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services & Locations for SEO */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Refinishing Services</h3>
              <div className="grid gap-3">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-[#0b66b3]/10 transition group"
                  >
                    <div>
                      <span className="font-semibold text-gray-900 group-hover:text-[#0b66b3]">{service.title}</span>
                      <span className="block text-sm text-gray-500">{service.price}</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {LOCATIONS.slice(0, 12).map((location) => (
                  <Link
                    key={location.id}
                    href={location.href}
                    className="px-4 py-2 bg-slate-50 rounded-full text-gray-700 hover:bg-[#0b66b3] hover:text-white transition text-sm font-medium"
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-[#0b66b3] font-semibold hover:underline"
              >
                View all 50+ service areas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help. Call us or send a message and we&apos;ll get back
            to you within {BUSINESS.responseTime}.
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
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
