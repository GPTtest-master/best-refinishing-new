'use client';

import Link from 'next/link';
import { BUSINESS, LOCATIONS } from '@/lib/constants';
import NexfieldInlineWidget from '@/components/ui/NexfieldInlineWidget';

const trackPhoneClick = () => {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
      'send_to': 'AW-17663809026/FtVGCJjCjtIbEIKs4eZB',
      'value': 30.0,
      'currency': 'USD',
    });
  }
};

const estimateSteps = [
  {
    title: 'Scope check',
    text: 'We confirm the project type, city, timeline, and whether permits or trade work may be involved.',
  },
  {
    title: 'Project fit',
    text: 'For kitchens and bathrooms, we review layout, materials, access, and any photos you can share.',
  },
  {
    title: 'Clear next step',
    text: 'You get a realistic path forward: phone consult, in-home estimate, or itemized scope review.',
  },
];

const projectLinks = [
  { href: '/services/bathroom-remodeling', label: 'Bathroom Remodeling' },
  { href: '/services/kitchen-remodeling', label: 'Kitchen Remodeling' },
  { href: '/services/shower-installation', label: 'Shower Installation' },
  { href: '/services/tile-installation', label: 'Tile Installation' },
];

export default function ContactPageClient() {
  return (
    <>
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b66b3]/10 text-[#0b66b3] font-semibold text-sm mb-6">CONTACT US</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              Get Your Free
              <span className="block text-[#0b66b3]">Remodeling Estimate</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your kitchen or bathroom? Schedule a time below or give us a call.
              We respond to all inquiries within {BUSINESS.responseTime}.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Itemized estimates', 'Licensed & insured', `${BUSINESS.warranty} warranty`, 'Seattle-area remodels'].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-[#0b66b3]/15 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#0b66b3]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-[#0b66b3] to-[#084c8a] p-6 text-white">
                  <h2 className="text-2xl font-bold">Schedule Your Free Estimate</h2>
                  <p className="text-white/80">Choose a time and your request goes straight into our CRM</p>
                </div>
                <div className="p-6 md:p-8">
                  <NexfieldInlineWidget />
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="mb-8 rounded-2xl border border-[#0b66b3]/15 bg-[#0b66b3]/5 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">What Happens After You Reach Out</h2>
                <div className="space-y-4">
                  {estimateSteps.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#0b66b3] text-sm font-black text-white">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Ways to Reach Us</h2>
              <div className="space-y-6">
                <a href={BUSINESS.phoneLink} onClick={trackPhoneClick} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition group">
                  <div className="w-14 h-14 rounded-xl bg-[#0b66b3] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Call Only</div>
                    <div className="text-xl font-bold text-gray-900 group-hover:text-[#0b66b3] transition">{BUSINESS.phone}</div>
                    <div className="text-sm text-green-600">Usually responds in {BUSINESS.responseTime}</div>
                  </div>
                </a>
                <a href={`mailto:${BUSINESS.email}`} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition group">
                  <div className="w-14 h-14 rounded-xl bg-[#0b66b3] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email Us</div>
                    <div className="text-xl font-bold text-gray-900 group-hover:text-[#0b66b3] transition">{BUSINESS.email}</div>
                    <div className="text-sm text-gray-500">We reply to all emails within 24 hours</div>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50">
                  <div className="w-14 h-14 rounded-xl bg-[#0b66b3] text-white flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Business Hours</div>
                    <div className="text-xl font-bold text-gray-900">{BUSINESS.hours}</div>
                    <div className="text-sm text-gray-500">Including weekends</div>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {LOCATIONS.slice(0, 8).map((location) => (
                    <Link key={location.id} href={location.href} className="px-4 py-2 rounded-full bg-slate-100 text-gray-700 text-sm font-medium hover:bg-[#0b66b3]/10 hover:text-[#0b66b3] transition">{location.name}</Link>
                  ))}
                  <Link href="/locations" className="px-4 py-2 rounded-full bg-[#0b66b3]/10 text-[#0b66b3] text-sm font-medium hover:bg-[#0b66b3] hover:text-white transition">+ More Areas</Link>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Most Requested Estimates</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {projectLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-800 hover:border-[#0b66b3] hover:text-[#0b66b3] transition">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-slate-50">
                  <div className="text-2xl font-black text-[#0b66b3]">{BUSINESS.projectsCompleted}</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50">
                  <div className="text-2xl font-black text-[#0b66b3]">{BUSINESS.rating}</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-slate-50">
                  <div className="text-2xl font-black text-[#0b66b3]">{BUSINESS.warranty}</div>
                  <div className="text-xs text-gray-500">Warranty</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
