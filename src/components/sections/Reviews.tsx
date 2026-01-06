'use client';

import { useState, useEffect } from 'react';
import { REVIEWS, BUSINESS } from '@/lib/constants';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextReview = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0b1220] via-[#0f1a2e] to-[#1a2744] text-white relative overflow-hidden" id="reviews">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0b66b3]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-6">
            {/* Google Logo */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-white font-semibold">Google Reviews</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Trusted by <span className="text-amber-400">{BUSINESS.reviewCount}+</span> Happy Customers
          </h2>

          {/* Rating display */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-7 h-7 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-3xl font-black text-white">{BUSINESS.rating}</div>
            <div className="text-gray-400 text-lg">out of 5</div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-16 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition border border-white/10"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-16 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition border border-white/10"
              aria-label="Next review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Review Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-center mb-10 leading-relaxed font-light">
                &ldquo;{REVIEWS[activeIndex].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0b66b3] to-[#084c8a] flex items-center justify-center text-xl font-bold">
                  {REVIEWS[activeIndex].name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">{REVIEWS[activeIndex].name}</div>
                  <div className="text-gray-400 text-sm">{REVIEWS[activeIndex].location}</div>
                  <div className="text-amber-400 text-sm font-medium">{REVIEWS[activeIndex].service}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-amber-500 w-8' : 'bg-white/20 w-2 hover:bg-white/40'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: '🏆', title: 'Licensed', subtitle: '& Insured', color: 'from-green-500/20 to-green-600/20' },
            { icon: '✅', title: '5-Year', subtitle: 'Warranty', color: 'from-blue-500/20 to-blue-600/20' },
            { icon: '⚡', title: '1-Day', subtitle: 'Service', color: 'from-amber-500/20 to-amber-600/20' },
            { icon: '💰', title: 'Save $5000+', subtitle: 'vs. Replacement', color: 'from-purple-500/20 to-purple-600/20' },
          ].map((badge) => (
            <div
              key={badge.title}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br ${badge.color} border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform`}
            >
              <div className="text-4xl mb-3">{badge.icon}</div>
              <div className="font-bold text-lg">{badge.title}</div>
              <div className="text-sm text-gray-400">{badge.subtitle}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#quote"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xl hover:from-amber-600 hover:to-amber-700 transition shadow-2xl shadow-amber-500/30 hover:scale-105 transform"
          >
            Get Your Free Quote Today
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
