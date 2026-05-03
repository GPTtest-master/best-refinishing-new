'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { REMODELING_FAQ_ITEMS, BUSINESS, REMODELING_SERVICES, LOCATIONS } from '@/lib/constants';
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
  const officialResources = [
    { label: 'WA L&I Contractor Lookup', href: 'https://www.lni.wa.gov/licensing-permits/contractors/hiring-a-contractor/verify-contractor-tradesperson-business#businesses' },
    { label: 'Seattle SDCI Permits', href: 'https://www.seattle.gov/sdci/permits' },
    { label: 'Bellevue Development Services', href: 'https://bellevuewa.gov/city-government/departments/development' },
    { label: 'King County Permits', href: 'https://kingcounty.gov/en/dept/local-services/certificates-permits-licenses/permits' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/remodeling/bathroom-showcase-4.jpg" alt="FAQ about remodeling services" fill className="object-cover" priority quality={70} />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
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
              Kitchen &amp; Bathroom Remodeling FAQ
              <span className="block text-amber-400">&mdash; Seattle</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Practical answers about kitchen and bathroom remodeling scope, permits, timelines, materials, and warranty.
              Can&apos;t find what you&apos;re looking for? Call us at {BUSINESS.phone}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {REMODELING_FAQ_ITEMS.map((item, index) => (
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
                Do bathroom remodels in Seattle need permits?
              </h3>
              <p className="text-gray-600">
                Cosmetic work usually does not. Moving plumbing, adding circuits, changing structure, or major shower rebuilds often require permits.
                We review scope during the estimate and identify what needs to be permitted before work starts.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What should I decide before requesting an estimate?
              </h3>
              <p className="text-gray-600">
                Have a rough budget range, must-have features, photos of the current space, and any layout pain points ready.
                We can help with material options, but knowing what bothers you most makes the estimate much more accurate.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Can you help choose materials?
              </h3>
              <p className="text-gray-600">
                Yes. We help compare porcelain tile, quartz, granite, vanities, fixtures, shower glass, cabinet options, and finishes based on budget,
                maintenance, lead time, and the style of your home.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What causes remodel costs to change?
              </h3>
              <p className="text-gray-600">
                Layout changes, plumbing relocation, electrical upgrades, waterproofing condition, cabinet choice, countertop material, tile size,
                and permit requirements are the biggest cost drivers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Can I remodel in phases?
              </h3>
              <p className="text-gray-600">
                Yes, when the scope supports it. Kitchens, bathrooms, countertops, tile, and showers can sometimes be phased, but plumbing,
                waterproofing, and permit work should be planned as one coherent project to avoid rework.
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Remodeling Services</h3>
              <div className="grid gap-3">
                {REMODELING_SERVICES.map((service) => (
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

      {/* Official Resources */}
      <section className="py-14 bg-slate-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
            <div>
              <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
                Official Resources
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
                Verify Permits, Licensing, and Local Requirements
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Remodel scope can change when plumbing, electrical, structural work, or HOA rules are involved. These official sources are useful before you compare estimates.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {officialResources.map((resource) => (
                <a
                  key={resource.href}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-gray-200 bg-white p-4 font-semibold text-gray-800 hover:border-[#0b66b3] hover:text-[#0b66b3] transition"
                >
                  {resource.label}
                  <span className="block mt-2 text-xs font-medium text-gray-500">Official external resource</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Remodeling Link */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Have questions about our remodeling services?
          </p>
          <Link href="/services/bathroom-remodeling" className="text-[#0b66b3] font-semibold hover:underline">
            Learn about Bathroom Remodeling →
          </Link>
          <span className="mx-3 text-gray-300">|</span>
          <Link href="/services/kitchen-remodeling" className="text-[#0b66b3] font-semibold hover:underline">
            Learn about Kitchen Remodeling →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0b66b3] to-[#084c8a]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our team is here to help. Call us or use the contact form and we&apos;ll get back
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
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              ...REMODELING_FAQ_ITEMS.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
              {
                '@type': 'Question',
                name: 'Do bathroom remodels in Seattle need permits?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Cosmetic work usually does not. Moving plumbing, adding circuits, changing structure, or major shower rebuilds often require permits. We review scope during the estimate and identify what needs to be permitted before work starts.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I decide before requesting an estimate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Have a rough budget range, must-have features, photos of the current space, and any layout pain points ready. We can help with material options, but knowing what bothers you most makes the estimate much more accurate.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you help choose materials?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We help compare porcelain tile, quartz, granite, vanities, fixtures, shower glass, cabinet options, and finishes based on budget, maintenance, lead time, and the style of your home.',
                },
              },
              {
                '@type': 'Question',
                name: 'What causes remodel costs to change?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Layout changes, plumbing relocation, electrical upgrades, waterproofing condition, cabinet choice, countertop material, tile size, and permit requirements are the biggest cost drivers.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I remodel in phases?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, when the scope supports it. Kitchens, bathrooms, countertops, tile, and showers can sometimes be phased, but plumbing, waterproofing, and permit work should be planned as one coherent project to avoid rework.',
                },
              },
              {
                '@type': 'Question',
                name: 'What areas do you serve?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We serve Seattle and all surrounding areas including Bellevue, Redmond, Kirkland, Bothell, Renton, Kent, Tacoma, and more. Contact us to confirm service in your area.',
                },
              },
            ],
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.best-refinishing.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'FAQ',
                item: 'https://www.best-refinishing.com/faq',
              },
            ],
          }),
        }}
      />
    </>
  );
}
