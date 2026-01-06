'use client';

import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

const trustBadges = [
  { icon: '💰', text: 'Save $5,000+' },
  { icon: '🛡️', text: 'Licensed & Insured' },
  { icon: '✅', text: '5-Year Warranty' },
  { icon: '⚡', text: 'Done in 1 Day' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px]" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Desktop image */}
        <Image
          src="/images/hero-bathroom.png"
          alt="Modern luxury bathroom"
          fill
          className="object-cover hidden md:block"
          priority
        />
        {/* Mobile image */}
        <Image
          src="/images/hero-bathroom-mob.png"
          alt="Modern luxury bathroom"
          fill
          className="object-cover md:hidden"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 md:pt-28 pb-8 md:pb-16 flex flex-col justify-center min-h-[600px] md:min-h-[700px]">
        <div className="max-w-2xl">
          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 md:mb-4">
            Transform Your Bathroom
            <span className="block text-amber-400">In Just One Day</span>
          </h1>

          <p className="text-base md:text-xl text-white/90 mb-4 md:mb-5">
            Professional bathtub, tile & countertop refinishing.
            Get a brand new look without the renovation hassle.
          </p>

          {/* Trust badges - interactive cards */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3 mb-5 md:mb-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="group inline-flex items-center gap-1.5 px-3 py-2 md:px-3.5 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-300">{badge.icon}</span>
                <span className="text-white text-sm font-semibold whitespace-nowrap">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href="#quote"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition shadow-lg shadow-amber-500/30"
            >
              Get Instant Quote
            </a>

            <a
              href="#reviews"
              className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition"
            >
              Read Reviews
            </a>
          </div>

          {/* Service areas */}
          <div className="inline-flex items-center gap-2 text-white/70 text-sm">
            <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Seattle, Bellevue, Redmond, Kirkland & nearby</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">{BUSINESS.hours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
