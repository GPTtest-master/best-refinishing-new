'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

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

interface BeforeAfterSliderProps {
  className?: string;
  showTabs?: boolean;
  defaultService?: number;
}

export default function BeforeAfterSlider({
  className = '',
  showTabs = true,
  defaultService = 0
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeService, setActiveService] = useState(defaultService);
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

  const currentImage = serviceImages[activeService];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Service Type Tabs */}
      {showTabs && (
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
      )}

      {/* Slider Container */}
      <div
        ref={sliderRef}
        className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl select-none touch-none ${
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
              currentImage.beforeScale ? `scale(${currentImage.beforeScale})` : '',
              currentImage.beforeRotate ? `rotate(${currentImage.beforeRotate}deg)` : '',
            ].filter(Boolean).join(' ') || undefined
          }}
        >
          <Image
            src={currentImage.before}
            alt="Before refinishing"
            fill
            className="object-cover pointer-events-none"
            style={{ objectPosition: currentImage.beforePosition || 'center' }}
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
                currentImage.afterScale ? `scale(${currentImage.afterScale})` : '',
                currentImage.afterRotate ? `rotate(${currentImage.afterRotate}deg)` : '',
              ].filter(Boolean).join(' ') || undefined
            }}
          >
            <Image
              src={currentImage.after}
              alt="After refinishing"
              fill
              className="object-cover pointer-events-none"
              style={{ objectPosition: currentImage.afterPosition || 'center' }}
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
    </div>
  );
}
