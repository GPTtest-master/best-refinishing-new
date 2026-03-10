import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

const trustBadges = [
  { icon: '🏠', text: 'Full-Service Remodeling' },
  { icon: '🛡️', text: 'Licensed & Insured' },
  { icon: '✅', text: '5-Year Warranty' },
  { icon: '⭐', text: '4.98 Rating' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[650px] md:min-h-[800px]" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Desktop image */}
        <Image
          src="/images/remodeling/hero.png"
          alt="Modern kitchen and bathroom remodeling in Seattle"
          fill
          className="object-cover hidden md:block"
          priority
          fetchPriority="high"
          sizes="(min-width: 768px) 100vw, 0px"
          quality={70}
        />
        {/* Mobile image */}
        <Image
          src="/images/remodeling/hero.png"
          alt="Modern kitchen and bathroom remodeling in Seattle"
          fill
          className="object-cover md:hidden"
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, 0px"
          quality={70}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 md:pt-32 pb-10 md:pb-20 flex flex-col justify-center min-h-[650px] md:min-h-[800px]">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Seattle&apos;s #1 Rated Remodeling Company</span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 md:mb-6">
            Kitchen & Bathroom
            <span className="block text-amber-400">Remodeling in Seattle</span>
          </h1>

          <p className="text-base md:text-xl text-white/90 mb-3 md:mb-4 leading-relaxed max-w-xl">
            Transform your home with expert craftsmanship. We handle everything — design, demolition, plumbing, tile, countertops, and fixtures.
          </p>

          <p className="text-sm md:text-lg text-white/70 mb-6 md:mb-8 leading-relaxed max-w-xl">
            Serving Seattle, Bellevue, Redmond, Kirkland, Tacoma and 50+ cities across the Puget Sound. {BUSINESS.experience} years experience. {BUSINESS.projectsCompleted} projects completed. {BUSINESS.warranty} warranty on every job.
          </p>

          {/* Trust badges - compact on mobile, cards on desktop */}
          {/* Mobile: simple inline text */}
          <div className="flex md:hidden flex-wrap items-center gap-x-3 gap-y-1 text-white/90 text-sm mb-5">
            {trustBadges.map((badge, i) => (
              <span key={badge.text} className="inline-flex items-center gap-1">
                <span>{badge.icon}</span>
                <span className="font-medium">{badge.text}</span>
                {i < trustBadges.length - 1 && <span className="text-white/40 ml-2">•</span>}
              </span>
            ))}
          </div>
          {/* Desktop: interactive cards */}
          <div className="hidden md:flex flex-nowrap gap-3 mb-8">
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
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href={BUSINESS.bookingUrl}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition shadow-lg shadow-amber-500/30"
            >
              Free Estimate
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>

          {/* Value prop */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="text-white font-semibold text-sm md:text-base">
              From Design to Installation — Your Complete Remodeling Team
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
