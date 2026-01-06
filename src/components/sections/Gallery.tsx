'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BUSINESS } from '@/lib/constants';

const galleryItems = [
  {
    before: '/images/bathtub-3-before.webp',
    after: '/images/bathtub-3-after.webp',
    title: 'Bathtub Restoration',
    location: 'Seattle, WA',
    service: 'Bathtub Refinishing',
    savings: '$4,200',
  },
  {
    before: '/images/bathtub-4-before.webp',
    after: '/images/bathtub-4-after.webp',
    title: 'Tile & Tub Refinishing',
    location: 'Bellevue, WA',
    service: 'Complete Bathroom',
    savings: '$5,800',
  },
  {
    before: '/images/bathtub-2.webp',
    after: '/images/bathtub-2-after.webp',
    title: 'Complete Bathroom Update',
    location: 'Kirkland, WA',
    service: 'Full Restoration',
    savings: '$6,500',
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden" id="gallery">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#0b66b3]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-amber-600/10 text-amber-700 font-semibold text-sm mb-4 border border-amber-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            OUR WORK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            See the <span className="text-[#0b66b3]">Transformation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects, real results. Drag the slider to see the dramatic before and after.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main Before/After Slider */}
          <div className="lg:col-span-3">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100 group">
              {/* After Image (Background) */}
              <Image
                src={galleryItems[activeIndex].after}
                alt="After refinishing"
                fill
                className="object-cover"
                priority
              />

              {/* Before Image (Overlay with clip) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={galleryItems[activeIndex].before}
                  alt="Before refinishing"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 px-4 py-2 rounded-xl bg-red-500/90 backdrop-blur-sm text-white text-sm font-bold shadow-lg">
                BEFORE
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-green-500/90 backdrop-blur-sm text-white text-sm font-bold shadow-lg">
                AFTER
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center border-4 border-[#0b66b3] group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4M8 15l4 4 4-4" />
                  </svg>
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{galleryItems[activeIndex].title}</h3>
                    <p className="text-gray-300 text-sm flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {galleryItems[activeIndex].location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-lg">Saved {galleryItems[activeIndex].savings}</div>
                    <div className="text-gray-400 text-sm">{galleryItems[activeIndex].service}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Instructions */}
            <p className="text-center text-gray-500 mt-4 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Drag to compare before & after
            </p>
          </div>

          {/* Thumbnails and CTA */}
          <div className="lg:col-span-2 space-y-6">
            {/* Thumbnails */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4 px-2">Recent Projects</h4>
              <div className="space-y-3">
                {galleryItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setSliderPosition(50);
                    }}
                    className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all ${
                      activeIndex === index
                        ? 'bg-[#0b66b3]/10 border-2 border-[#0b66b3]'
                        : 'hover:bg-gray-50 border-2 border-transparent'
                    }`}
                  >
                    <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.after}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left flex-grow">
                      <div className="font-semibold text-gray-900 text-sm">{item.title}</div>
                      <div className="text-gray-500 text-xs">{item.location}</div>
                      <div className="text-green-600 text-xs font-semibold">Saved {item.savings}</div>
                    </div>
                    {activeIndex === index && (
                      <div className="w-6 h-6 rounded-full bg-[#0b66b3] flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-[#0b66b3] to-[#084c8a] rounded-2xl p-6 text-white">
              <h4 className="font-bold text-xl mb-2">Want Results Like These?</h4>
              <p className="text-white/80 text-sm mb-6">
                Get a free quote and see how much you can save with professional refinishing.
              </p>
              <a
                href={BUSINESS.phoneLink}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white text-[#0b66b3] font-bold hover:bg-gray-100 transition mb-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {BUSINESS.phone}
              </a>
              <a
                href="#quote"
                className="flex items-center justify-center w-full py-3.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 transition"
              >
                Get Instant Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
