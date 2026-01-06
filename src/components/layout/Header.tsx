'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS, NAV_ITEMS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - hidden on mobile */}
      <div className="hidden md:block bg-[#0b1220] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center items-center">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2">
              <span className="text-amber-400">💰</span>
              Save $5,000+
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">🛡️</span>
              Licensed & Insured
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-400">✅</span>
              5-Year Warranty
            </span>
            <span className="flex items-center gap-2">
              <span className="text-amber-400">⚡</span>
              Done in 1 Day
            </span>
            <span className="flex items-center gap-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-white">{BUSINESS.rating}</span>
              <span className="text-gray-400">({BUSINESS.reviewCount} reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-xl'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo - MAXIMUM SIZE */}
            <Link href="/" className="flex items-center flex-shrink-0 h-full py-1">
              <Image
                src="/images/logo-new.svg"
                alt="Best Refinishing"
                width={320}
                height={92}
                className="h-[72px] md:h-[88px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 font-medium hover:text-[#0b66b3] transition relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0b66b3] transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Phone - desktop only */}
              <a
                href={BUSINESS.phoneLink}
                className="hidden xl:flex items-center gap-2 px-4 py-2 text-gray-700 font-bold hover:text-[#0b66b3] transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#0b66b3]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-500">Call Now</div>
                  <div className="text-[#0b66b3]">{BUSINESS.phone}</div>
                </div>
              </a>

              {/* Get Quote button - AMBER for contrast */}
              <a
                href="#quote"
                className="hidden sm:inline-flex px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold hover:from-amber-600 hover:to-amber-700 transition shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transform"
              >
                Get Instant Quote
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
                aria-label="Toggle menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden overflow-y-auto transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[70vh] pb-6' : 'max-h-0'}`}>
            <div className="pt-4 border-t border-gray-100">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-lg text-gray-700 font-medium hover:text-[#0b66b3] transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
