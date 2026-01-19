'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { BUSINESS, SERVICES } from '@/lib/constants';

// Service image type
interface ServiceImage {
  id: string;
  label: string;
  before: string;
  after: string;
  beforePosition?: string;
  afterPosition?: string;
  beforeScale?: number;
  afterScale?: number;
  beforeRotate?: number;
  afterRotate?: number;
}

// Before/After image pairs for each service type
const serviceImages: ServiceImage[] = [
  {
    id: 'bathtub',
    label: 'Bathtub',
    before: '/images/optimized/baztub-after.webp',
    after: '/images/optimized/baztub-before.webp',
    beforePosition: 'center 51%',
    beforeScale: 1.06,
    afterScale: 0.94,
  },
  {
    id: 'tub-tiles',
    label: 'Tub & Tiles',
    before: '/images/tub-tiles-after-1.webp',
    after: '/images/tiles-tub-before-1.webp',
    beforePosition: 'center 56%',
    beforeScale: 1.14,
    afterPosition: 'center 53%',
    afterScale: 0.96,
  },
  {
    id: 'sink',
    label: 'Sink',
    before: '/images/sink-after-1.webp',
    after: '/images/sink-before-1.webp',
    beforePosition: 'center 30%',
    afterPosition: 'center 40%',
  },
  {
    id: 'tub2',
    label: 'Cast Iron',
    before: '/images/optimized/Bank-Design-2-1.webp',
    after: '/images/optimized/after3.webp',
  },
  {
    id: 'local',
    label: 'Local',
    before: '/images/optimized/local-5-after.webp',
    after: '/images/optimized/local-5.webp',
  },
];

function QuoteSectionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [gclid, setGclid] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    services: [] as string[],
    smsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Capture gclid from URL params (Google Ads click ID)
  useEffect(() => {
    const gclidParam = searchParams.get('gclid');
    if (gclidParam) {
      setGclid(gclidParam);
      // Also store in localStorage for persistence
      localStorage.setItem('gclid', gclidParam);
    } else {
      // Try to get from localStorage if not in URL
      const storedGclid = localStorage.getItem('gclid');
      if (storedGclid) {
        setGclid(storedGclid);
      }
    }
  }, [searchParams]);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current || !isDragging) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleSliderMove(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleSliderMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleSliderMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: formData.services.join(', '),
          gclid: gclid || undefined,
        }),
      });

      // Track form submission in Google Analytics
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'generate_lead', {
          currency: 'USD',
          value: 50,
          service: formData.services.join(', '),
        });
      }

      router.push('/thank-you');
    } catch (error) {
      console.error('Form submission error:', error);
      router.push('/thank-you');
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-slate-50 overflow-hidden" id="quote">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
            See The Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            See real before & after results, then get your personalized quote in minutes
          </p>
        </div>

        {/* Main Content - Before/After + Form */}
        <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
          {/* Before/After Slider */}
          <div className="relative overflow-hidden">
            {/* Service Type Tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-hide">
              {serviceImages.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveService(index);
                    setSliderPosition(50);
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition whitespace-nowrap ${
                    activeService === index
                      ? 'bg-[#0b66b3] text-white shadow-lg'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0b66b3] hover:text-[#0b66b3]'
                  }`}
                >
                  {service.label}
                </button>
              ))}
            </div>

            {/* Slider Container */}
            <div
              ref={sliderRef}
              className={`relative aspect-[4/3] md:aspect-[4/3.95] rounded-2xl overflow-hidden shadow-2xl select-none touch-none ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Before Image */}
              <div
                className="absolute inset-0"
                style={{
                  transform: [
                    serviceImages[activeService].beforeScale ? `scale(${serviceImages[activeService].beforeScale})` : '',
                    serviceImages[activeService].beforeRotate ? `rotate(${serviceImages[activeService].beforeRotate}deg)` : '',
                  ].filter(Boolean).join(' ') || undefined
                }}
              >
                <Image
                  src={serviceImages[activeService].before}
                  alt="Before refinishing"
                  fill
                  className="object-cover pointer-events-none"
                  style={{ objectPosition: serviceImages[activeService].beforePosition || 'center' }}
                  draggable={false}
                />
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    transform: [
                      serviceImages[activeService].afterScale ? `scale(${serviceImages[activeService].afterScale})` : '',
                      serviceImages[activeService].afterRotate ? `rotate(${serviceImages[activeService].afterRotate}deg)` : '',
                    ].filter(Boolean).join(' ') || undefined
                  }}
                >
                  <Image
                    src={serviceImages[activeService].after}
                    alt="After refinishing"
                    fill
                    className="object-cover pointer-events-none"
                    style={{ objectPosition: serviceImages[activeService].afterPosition || 'center' }}
                    draggable={false}
                  />
                </div>
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#0b66b3] transition-transform ${isDragging ? 'scale-110' : ''}`}>
                  <svg className="w-6 h-6 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-red-500/90 text-white text-sm font-bold pointer-events-none">
                BEFORE
              </div>
              <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-green-500/90 text-white text-sm font-bold pointer-events-none">
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
            <div className="grid grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
              {[
                { value: '$4,200', label: 'Savings' },
                { value: '4-6 hrs', label: 'Time' },
                { value: '10-15 yrs', label: 'Lifespan' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-2 md:p-4 bg-white rounded-lg md:rounded-xl border border-gray-100">
                  <div className="text-base md:text-xl font-black text-[#0b66b3]">{stat.value}</div>
                  <div className="text-gray-500 text-[10px] md:text-xs">{stat.label}</div>
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

                  <div className="grid grid-cols-2 gap-3">
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
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Zip Code</label>
                      <input
                        type="text"
                        required
                        placeholder="98101"
                        maxLength={5}
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value.replace(/\D/g, '').slice(0, 5) })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#0b66b3] focus:ring-0 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
                    <p className="text-xs text-gray-500 mb-2">Select one or more</p>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'bathtub', label: 'Bathtub', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M4 16V8a4 4 0 014-4h1m11 12V8a4 4 0 00-4-4h-1m-4 0v4m0-4a2 2 0 10-4 0" /></svg> },
                        { id: 'shower', label: 'Shower', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12h12M6 12V6a2 2 0 012-2h1m9 8v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6m0 0a3 3 0 013-3h6a3 3 0 013 3" /><circle cx="12" cy="8" r="1" fill="currentColor" /><path strokeLinecap="round" strokeWidth={1.5} d="M10 14v3M12 14v4M14 14v3" /></svg> },
                        { id: 'tile', label: 'Tub+Tile', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5h6v6H4zM14 5h6v6h-6zM4 15h6v6H4zM14 15h6v6h-6z" /></svg> },
                        { id: 'sink', label: 'Sink', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="8" rx="8" ry="3" strokeWidth={1.5} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8v4c0 1.66 3.58 3 8 3s8-1.34 8-3V8M12 15v4M9 19h6" /></svg> },
                        { id: 'countertop', label: 'Counter', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 10h16v2H4zM6 12v6M18 12v6M4 10V8a2 2 0 012-2h12a2 2 0 012 2v2" /></svg> },
                        { id: 'other', label: 'Other', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                      ].map((service) => {
                        const isSelected = formData.services.includes(service.id);
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => {
                              if (isSelected) {
                                setFormData({ ...formData, services: formData.services.filter(s => s !== service.id) });
                              } else {
                                setFormData({ ...formData, services: [...formData.services, service.id] });
                              }
                            }}
                            className={`flex flex-col items-center justify-center gap-1 p-3 rounded-xl border-2 transition relative ${
                              isSelected
                                ? 'border-[#0b66b3] bg-[#0b66b3]/5 text-[#0b66b3]'
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                          >
                            {isSelected && (
                              <div className="absolute top-1 right-1 w-4 h-4 bg-[#0b66b3] rounded-full flex items-center justify-center">
                                <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            )}
                            {service.icon}
                            <span className="text-xs font-medium">{service.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {formData.services.length === 0 && (
                      <input type="text" required value="" onChange={() => {}} className="sr-only" tabIndex={-1} />
                    )}
                  </div>

                  {/* SMS Consent */}
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                    <input
                      type="checkbox"
                      id="smsConsent-quote"
                      required
                      checked={formData.smsConsent}
                      onChange={(e) => setFormData({ ...formData, smsConsent: e.target.checked })}
                      className="mt-0.5 w-5 h-5 rounded border-2 border-gray-300 text-[#0b66b3] focus:ring-[#0b66b3] cursor-pointer flex-shrink-0"
                    />
                    <label htmlFor="smsConsent-quote" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
                      I agree to receive SMS/text messages about my quote. Msg & data rates may apply. Reply STOP to opt-out.{' '}
                      <a href="/privacy" className="text-[#0b66b3] underline">Privacy</a> & <a href="/terms" className="text-[#0b66b3] underline">Terms</a>.
                    </label>
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

// Wrap with Suspense for useSearchParams
export default function QuoteSection() {
  return (
    <Suspense fallback={<div className="py-20 bg-slate-50" />}>
      <QuoteSectionContent />
    </Suspense>
  );
}
