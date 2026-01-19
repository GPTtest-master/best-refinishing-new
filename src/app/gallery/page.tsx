'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

// Before/After transformation pairs
const transformations = [
  {
    id: 'bathtub-1',
    category: 'bathtub',
    label: 'Bathtub Refinishing',
    before: '/images/optimized/bathtub-3-before.webp',
    after: '/images/optimized/bathtub-3-after.webp',
  },
  {
    id: 'bathtub-2',
    category: 'bathtub',
    label: 'Cast Iron Tub Restoration',
    before: '/images/bathtub-4-before.webp',
    after: '/images/bathtub-4-after.webp',
  },
  {
    id: 'tub-tiles',
    category: 'tiles',
    label: 'Tub & Tile Combo',
    before: '/images/tiles-tub-before-1.webp',
    after: '/images/tub-tiles-after-1.webp',
  },
  {
    id: 'sink-1',
    category: 'sink',
    label: 'Sink Refinishing',
    before: '/images/sink-before-1.webp',
    after: '/images/sink-after-1.webp',
  },
  {
    id: 'local-1',
    category: 'bathtub',
    label: 'Bathtub Transformation',
    before: '/images/optimized/local-before-1.webp',
    after: '/images/optimized/local-after-1.webp',
  },
  {
    id: 'tub-classic',
    category: 'bathtub',
    label: 'Classic Tub Restoration',
    before: '/images/tub-before-1.webp',
    after: '/images/tub-after-1.webp',
  },
];

// Gallery photos - add your photos here
const galleryPhotos = [
  { id: 1, src: '/images/optimized/bathtub-3-after.webp', alt: 'Refinished bathtub - gleaming white finish', category: 'bathtub' },
  { id: 2, src: '/images/bathtub-4-after.webp', alt: 'Cast iron tub after refinishing', category: 'bathtub' },
  { id: 3, src: '/images/sink-after-1.webp', alt: 'Restored sink with new finish', category: 'sink' },
  { id: 4, src: '/images/tub-tiles-after-1.webp', alt: 'Tub and tiles refinished', category: 'tiles' },
  { id: 5, src: '/images/tub-after-1.webp', alt: 'White bathtub refinishing result', category: 'bathtub' },
  { id: 6, src: '/images/optimized/local-after-1.webp', alt: 'Seattle bathroom refinishing', category: 'bathtub' },
  { id: 7, src: '/images/local-5-after.webp', alt: 'Professional bathtub restoration', category: 'bathtub' },
  { id: 8, src: '/images/tub-after-rotate1jpg.webp', alt: 'Bathtub with new coating', category: 'bathtub' },
  // Add more photos here - just copy the pattern above
  // { id: 9, src: '/images/your-photo.webp', alt: 'Description', category: 'bathtub' | 'sink' | 'tiles' | 'countertop' },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'bathtub', label: 'Bathtubs' },
  { id: 'sink', label: 'Sinks' },
  { id: 'tiles', label: 'Tiles' },
  { id: 'countertop', label: 'Countertops' },
];

export default function GalleryPage() {
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleSliderMove(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => setIsDragging(false);

  const filteredPhotos = activeCategory === 'all'
    ? galleryPhotos
    : galleryPhotos.filter(photo => photo.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/optimized/hero-bg.webp')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Project Gallery
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of stunning transformations. See the quality and craftsmanship
            that makes Best Refinishing the top choice in Seattle.
          </p>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Transformations
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Before & After Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Drag the slider to reveal the dramatic difference our refinishing makes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Transformation Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
              {transformations.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTransformation(index);
                    setSliderPosition(50);
                  }}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition whitespace-nowrap ${
                    activeTransformation === index
                      ? 'bg-[#0b66b3] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Slider Container */}
            <div
              ref={sliderRef}
              className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl select-none ${
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
              <div className="absolute inset-0">
                <Image
                  src={transformations[activeTransformation].before}
                  alt="Before refinishing"
                  fill
                  className="object-cover pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* After Image */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={transformations[activeTransformation].after}
                  alt="After refinishing"
                  fill
                  className="object-cover pointer-events-none"
                  draggable={false}
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center border-3 border-[#0b66b3] transition-transform ${isDragging ? 'scale-110' : ''}`}>
                  <svg className="w-7 h-7 text-[#0b66b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute bottom-4 left-4 px-5 py-2.5 rounded-full bg-red-500/90 text-white text-sm font-bold pointer-events-none shadow-lg">
                BEFORE
              </div>
              <div className="absolute bottom-4 right-4 px-5 py-2.5 rounded-full bg-green-500/90 text-white text-sm font-bold pointer-events-none shadow-lg">
                AFTER
              </div>
            </div>

            {/* Drag hint */}
            <p className="text-gray-500 text-sm mt-6 text-center flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Drag the slider to compare before & after
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '100%', label: 'Satisfaction Rate' },
                { value: '5-Year', label: 'Warranty' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-black text-[#0b66b3]">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#0b66b3] font-semibold text-sm uppercase tracking-wider mb-3">
              Photo Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Our Completed Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of refinishing projects across the Seattle area
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition ${
                  activeCategory === cat.id
                    ? 'bg-[#0b66b3] text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0b66b3] hover:text-[#0b66b3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setLightboxImage(photo.src)}
                className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {photo.alt}
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No photos in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0b66b3] to-[#084c8a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join our 500+ satisfied customers in the Seattle area. Get a free quote today
            and see what we can do for your space.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg hover:from-amber-600 hover:to-amber-700 transition shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 transform"
            >
              Get Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur border-2 border-white/30 text-white font-bold text-lg hover:bg-white/20 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              { icon: '⭐', text: `${BUSINESS.rating} Rating` },
              { icon: '✓', text: `${BUSINESS.reviewCount}+ Reviews` },
              { icon: '🛡️', text: '5-Year Warranty' },
              { icon: '⚡', text: 'Same Day Quotes' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/80">
                <span>{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Gallery image"
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
