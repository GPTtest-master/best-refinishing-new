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
    <section className="relative overflow-hidden min-h-[550px] md:min-h-[700px]" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Desktop image */}
        <Image
          src="/images/hero-bathroom.webp"
          alt="Modern luxury bathroom refinishing in Seattle"
          fill
          className="object-cover hidden md:block"
          priority
          fetchPriority="high"
          sizes="(min-width: 768px) 100vw, 0px"
          quality={70}
        />
        {/* Mobile image */}
        <Image
          src="/images/hero-bathroom-mob.webp"
          alt="Modern luxury bathroom refinishing in Seattle"
          fill
          className="object-cover md:hidden"
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 0px"
          quality={70}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-slate-900/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-12 md:pt-28 pb-6 md:pb-16 flex flex-col justify-center min-h-[550px] md:min-h-[700px]">
        <div className="max-w-2xl">
          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 md:mb-4">
            Transform Your Bathroom
            <span className="block text-amber-400">In Just One Day</span>
          </h1>

          <p className="text-base md:text-xl text-white/90 mb-4 md:mb-5">
            Professional bathtub, tile & countertop refinishing.<br />
            Get a brand new look without the renovation hassle.
          </p>

          {/* Trust badges - compact on mobile, cards on desktop */}
          {/* Mobile: simple inline text */}
          <div className="flex md:hidden flex-wrap items-center gap-x-3 gap-y-1 text-white/90 text-sm mb-4">
            {trustBadges.map((badge, i) => (
              <span key={badge.text} className="inline-flex items-center gap-1">
                <span>{badge.icon}</span>
                <span className="font-medium">{badge.text}</span>
                {i < trustBadges.length - 1 && <span className="text-white/40 ml-2">•</span>}
              </span>
            ))}
          </div>
          {/* Desktop: interactive cards */}
          <div className="hidden md:flex flex-nowrap gap-3 mb-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.text}
                className="group inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 transition-all duration-300 cursor-default"
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

          {/* Value prop */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-white font-semibold text-sm md:text-base">
              Don&apos;t Replace It — Refinish It! Save 80%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
