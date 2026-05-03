'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

// Track phone clicks for Google Ads conversion
const trackPhoneClick = () => {
  if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'conversion', {
      'send_to': 'AW-17663809026/FtVGCJjCjtIbEIKs4eZB',
      'value': 30.0,
      'currency': 'USD',
    });
  }
};

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop - Floating conversion actions */}
      <div
        className={`hidden md:block fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <div className="rounded-2xl border border-gray-200 bg-white/95 p-2 shadow-2xl backdrop-blur">
          <div className="px-2 pb-2 text-xs font-semibold text-gray-500">Fast remodeling estimate</div>
          <div className="flex gap-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition"
            >
              Schedule
            </Link>
            <a
              href={BUSINESS.phoneLink}
              onClick={trackPhoneClick}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0b66b3] px-4 py-3 text-sm font-bold text-white hover:bg-[#084c8a] transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </a>
          </div>
        </div>
      </div>

      {/* Mobile - Bottom CTA bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div
          className="border-t border-gray-200 bg-white/95 backdrop-blur-md px-3 pt-2 shadow-2xl"
          style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}
        >
          <div className="pb-1 text-center text-[11px] font-semibold text-gray-500">
            Free itemized estimate - fast response
          </div>
          <div className="flex gap-2">
            {/* Call button */}
            <a
              href={BUSINESS.phoneLink}
              onClick={trackPhoneClick}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#0b66b3] text-white font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </a>

            {/* Quote button */}
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center py-2.5 rounded-full bg-amber-500 text-white font-semibold text-sm"
            >
              Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
