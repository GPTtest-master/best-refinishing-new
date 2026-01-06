'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, SERVICES } from '@/lib/constants';

export default function QuoteSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSlider = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-slate-50" id="quote">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
            See The Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto md:whitespace-nowrap">
            See real before & after results, then get your personalized quote in minutes
          </p>
        </div>

        {/* Main Content - Before/After + Form */}
        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Before/After Slider */}
          <div className="relative">
            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
              onMouseMove={handleSlider}
              onTouchMove={handleSlider}
            >
              {/* Before Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/bathtub-3-before.webp"
                  alt="Before refinishing"
                  fill
                  className="object-cover"
                />
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src="/images/bathtub-3-after.webp"
                  alt="After refinishing"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#0b66b3]">
                  <svg className="w-6 h-6 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-red-500/90 text-white text-sm font-bold">
                BEFORE
              </div>
              <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-green-500/90 text-white text-sm font-bold">
                AFTER
              </div>
            </div>

            {/* Drag hint */}
            <p className="text-gray-500 text-sm mt-4 text-center flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Drag to compare before & after
            </p>

            {/* Stats under slider */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: '$4,200', label: 'Average Savings' },
                { value: '4-6 hrs', label: 'Completion Time' },
                { value: '10-15 yrs', label: 'Finish Lifespan' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-xl font-black text-[#0b66b3]">{stat.value}</div>
                  <div className="text-gray-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Quote Form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-[#0b66b3] to-[#084c8a] p-6 text-white">
              <h3 className="text-2xl font-bold">Get Your Free Quote</h3>
              <p className="text-white/80 mt-1">Instant pricing + manager will contact you</p>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">Our manager will contact you shortly with your personalized quote.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="(206) 555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition bg-white"
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition disabled:opacity-50 shadow-lg shadow-amber-500/25"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      'Get Instant Quote →'
                    )}
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    Or call us now:{' '}
                    <a href={BUSINESS.phoneLink} className="text-[#0b66b3] font-semibold hover:underline">
                      {BUSINESS.phone}
                    </a>
                  </p>
                </form>
              )}
            </div>

            {/* Process link + trust badges */}
            <div className="px-6 pb-6">
              <div className="p-4 bg-slate-50 rounded-xl mb-4">
                <Link href="/process" className="flex items-center justify-between group">
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-[#0b66b3] transition">How does it work?</p>
                    <p className="text-sm text-gray-500">See our 6-step refinishing process</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0b66b3] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
                {[
                  { icon: '🔒', text: 'No Spam' },
                  { icon: '✅', text: '5-Year Warranty' },
                  { icon: '⚡', text: 'Instant Price' },
                ].map((badge) => (
                  <span key={badge.text} className="flex items-center gap-1 text-sm text-gray-500">
                    <span>{badge.icon}</span>
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
