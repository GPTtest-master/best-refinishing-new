'use client';

import { useState, useEffect } from 'react';
import { BUSINESS } from '@/lib/constants';

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
      {/* Desktop - Floating phone button */}
      <div
        className={`hidden md:block fixed bottom-8 right-8 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <a
          href={BUSINESS.phoneLink}
          className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#0b66b3] text-white font-bold shadow-xl hover:bg-[#084c8a] transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {BUSINESS.phone}
        </a>
      </div>

      {/* Mobile - Bottom CTA bar */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div
          className="bg-white/80 backdrop-blur-md px-3 pt-2"
          style={{ paddingBottom: 'max(8px, env(safe-area-inset-bottom))' }}
        >
          <div className="flex gap-2">
            {/* Call button */}
            <a
              href={BUSINESS.phoneLink}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-[#0b66b3]/90 text-white font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </a>

            {/* Quote button */}
            <a
              href="#quote"
              className="flex-1 flex items-center justify-center py-2.5 rounded-full bg-amber-500/90 text-white font-semibold text-sm"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
