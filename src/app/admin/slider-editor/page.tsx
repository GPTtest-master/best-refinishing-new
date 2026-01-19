'use client';

import { useState, useRef } from 'react';

const allImages = [
  // Optimized folder
  { id: 'baztub-after (opt)', src: '/images/optimized/baztub-after.webp' },
  { id: 'baztub-before (opt)', src: '/images/optimized/baztub-before.webp' },
  { id: 'bathtub-3-before (opt)', src: '/images/optimized/bathtub-3-before.webp' },
  { id: 'bathtub-3-after (opt)', src: '/images/optimized/bathtub-3-after.webp' },
  { id: 'bathtub-4-before (opt)', src: '/images/optimized/bathtub-4-before.webp' },
  { id: 'bathtub-4-after (opt)', src: '/images/optimized/bathtub-4-after.webp' },
  { id: 'local-before-1 (opt)', src: '/images/optimized/local-before-1.webp' },
  { id: 'local-after-1 (opt)', src: '/images/optimized/local-after-1.webp' },
  { id: 'sink-before-1 (opt)', src: '/images/optimized/sink-before-1.webp' },
  { id: 'sink-after-1 (opt)', src: '/images/optimized/sink-after-1.webp' },
  { id: 'tub-before-1 (opt)', src: '/images/optimized/tub-before-1.webp' },
  { id: 'tub-after-1 (opt)', src: '/images/optimized/tub-after-1.webp' },
  // Root images folder
  { id: 'bathtub-4-after', src: '/images/bathtub-4-after.webp' },
  { id: 'bathtub-4-before', src: '/images/bathtub-4-before.webp' },
  { id: 'sink-after-1', src: '/images/sink-after-1.webp' },
  { id: 'sink-before-1', src: '/images/sink-before-1.webp' },
  { id: 'tiles-tub-before-1', src: '/images/tiles-tub-before-1.webp' },
  { id: 'tub-tiles-after-1', src: '/images/tub-tiles-after-1.webp' },
  { id: 'tub-before-1', src: '/images/tub-before-1.webp' },
  { id: 'tub-after-1', src: '/images/tub-after-1.webp' },
];

export default function SliderEditor() {
  const [beforeImg, setBeforeImg] = useState(allImages[0].src);
  const [afterImg, setAfterImg] = useState(allImages[1].src);
  const [sliderPosition, setSliderPosition] = useState(50);

  // Transform values (in pixels, will convert to %)
  const [beforeX, setBeforeX] = useState(0);
  const [beforeY, setBeforeY] = useState(0);
  const [beforeScale, setBeforeScale] = useState(1);
  const [beforeRotate, setBeforeRotate] = useState(0);

  const [afterX, setAfterX] = useState(0);
  const [afterY, setAfterY] = useState(0);
  const [afterScale, setAfterScale] = useState(1);
  const [afterRotate, setAfterRotate] = useState(0);

  const [editMode, setEditMode] = useState<'before' | 'after'>('before');
  const [containerType, setContainerType] = useState<'quote' | 'gallery'>('quote');
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0 });
  const startOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
    if (editMode === 'before') {
      startOffset.current = { x: beforeX, y: beforeY };
    } else {
      startOffset.current = { x: afterX, y: afterY };
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;

    if (editMode === 'before') {
      setBeforeX(startOffset.current.x + deltaX);
      setBeforeY(startOffset.current.y + deltaY);
    } else {
      setAfterX(startOffset.current.x + deltaX);
      setAfterY(startOffset.current.y + deltaY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    if (editMode === 'before') {
      setBeforeScale((prev) => Math.max(0.5, Math.min(3, prev + delta)));
    } else {
      setAfterScale((prev) => Math.max(0.5, Math.min(3, prev + delta)));
    }
  };

  const generateCode = () => {
    const bPosY = 50 - (beforeY / 3); // approximate conversion
    const aPosY = 50 - (afterY / 3);

    return `{
  id: 'custom',
  label: 'Custom',
  before: '${beforeImg}',
  after: '${afterImg}',${beforeY !== 0 ? `
  beforePosition: 'center ${Math.round(bPosY)}%',` : ''}${beforeScale !== 1 ? `
  beforeScale: ${beforeScale.toFixed(2)},` : ''}${beforeRotate !== 0 ? `
  beforeRotate: ${beforeRotate},` : ''}${afterY !== 0 ? `
  afterPosition: 'center ${Math.round(aPosY)}%',` : ''}${afterScale !== 1 ? `
  afterScale: ${afterScale.toFixed(2)},` : ''}${afterRotate !== 0 ? `
  afterRotate: ${afterRotate},` : ''}
},`;
  };

  const reset = () => {
    setBeforeX(0);
    setBeforeY(0);
    setBeforeScale(1);
    setBeforeRotate(0);
    setAfterX(0);
    setAfterY(0);
    setAfterScale(1);
    setAfterRotate(0);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Before/After Slider Editor</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Preview */}
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setEditMode('before')}
              className={`px-4 py-2 rounded font-semibold ${
                editMode === 'before' ? 'bg-red-500' : 'bg-gray-700'
              }`}
            >
              Edit BEFORE
            </button>
            <button
              onClick={() => setEditMode('after')}
              className={`px-4 py-2 rounded font-semibold ${
                editMode === 'after' ? 'bg-green-500' : 'bg-gray-700'
              }`}
            >
              Edit AFTER
            </button>
            <button
              onClick={reset}
              className="px-4 py-2 rounded font-semibold bg-gray-700 hover:bg-gray-600"
            >
              Reset All
            </button>
            <span className="mx-2 border-l border-gray-600" />
            <button
              onClick={() => setContainerType('quote')}
              className={`px-4 py-2 rounded font-semibold ${
                containerType === 'quote' ? 'bg-blue-500' : 'bg-gray-700'
              }`}
            >
              Quote Section
            </button>
            <button
              onClick={() => setContainerType('gallery')}
              className={`px-4 py-2 rounded font-semibold ${
                containerType === 'gallery' ? 'bg-purple-500' : 'bg-gray-700'
              }`}
            >
              Gallery
            </button>
          </div>

          <p className="text-sm text-gray-400 mb-2">
            {editMode === 'before' ? '🔴' : '🟢'} Editing <strong>{editMode.toUpperCase()}</strong> image.
            Drag to move, scroll to zoom.
          </p>

          <div
            ref={containerRef}
            className={`relative rounded-2xl overflow-hidden bg-gray-800 cursor-move select-none ${
              containerType === 'quote'
                ? 'aspect-[4/3.95] max-w-[550px]'
                : 'aspect-[4/3] max-w-[650px]'
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
          >
            {/* Before Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ opacity: editMode === 'before' ? 1 : 0.5 }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100%',
                  height: '100%',
                  transform: `translate(-50%, -50%) translate(${beforeX}px, ${beforeY}px) scale(${beforeScale}) rotate(${beforeRotate}deg)`,
                }}
              >
                <img
                  src={`${beforeImg}?t=${Date.now()}`}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* After Image */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                opacity: editMode === 'after' ? 1 : 0.5,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '100%',
                  height: '100%',
                  transform: `translate(-50%, -50%) translate(${afterX}px, ${afterY}px) scale(${afterScale}) rotate(${afterRotate}deg)`,
                }}
              >
                <img
                  src={`${afterImg}?t=${Date.now()}`}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
                <span className="text-gray-900 font-bold">↔</span>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-red-500 text-white text-sm font-bold z-20">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-green-500 text-white text-sm font-bold z-20">
              AFTER
            </div>
          </div>

          {/* Slider Position */}
          <div className="mt-4">
            <label className="block text-sm mb-2">Compare Slider: {sliderPosition}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Image Selection */}
          <div className="p-4 bg-gray-800 rounded-xl">
            <h3 className="font-semibold mb-3">Select Images</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-red-400 mb-1">Before Image</label>
                <select
                  value={beforeImg}
                  onChange={(e) => setBeforeImg(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-sm"
                >
                  {allImages.map((img) => (
                    <option key={img.id} value={img.src}>{img.id}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-green-400 mb-1">After Image</label>
                <select
                  value={afterImg}
                  onChange={(e) => setAfterImg(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-sm"
                >
                  {allImages.map((img) => (
                    <option key={img.id} value={img.src}>{img.id}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Current Values */}
          <div className="p-4 bg-gray-800 rounded-xl">
            <h3 className="font-semibold mb-3">Current Values</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-red-400 font-semibold mb-1">Before</p>
                <p>X: {beforeX}px</p>
                <p>Y: {beforeY}px</p>
                <p>Scale: {(beforeScale * 100).toFixed(0)}%</p>
                <p>Rotate: {beforeRotate}°</p>
              </div>
              <div>
                <p className="text-green-400 font-semibold mb-1">After</p>
                <p>X: {afterX}px</p>
                <p>Y: {afterY}px</p>
                <p>Scale: {(afterScale * 100).toFixed(0)}%</p>
                <p>Rotate: {afterRotate}°</p>
              </div>
            </div>
          </div>

          {/* Manual Scale Controls */}
          <div className="p-4 bg-gray-800 rounded-xl">
            <h3 className="font-semibold mb-3">Scale Controls</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-red-400 mb-1">Before Scale: {(beforeScale * 100).toFixed(0)}%</label>
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={beforeScale * 100}
                  onChange={(e) => setBeforeScale(Number(e.target.value) / 100)}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm text-green-400 mb-1">After Scale: {(afterScale * 100).toFixed(0)}%</label>
                <input
                  type="range"
                  min="50"
                  max="200"
                  value={afterScale * 100}
                  onChange={(e) => setAfterScale(Number(e.target.value) / 100)}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Rotation Controls */}
          <div className="p-4 bg-gray-800 rounded-xl">
            <h3 className="font-semibold mb-3">Rotation Controls</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-red-400 mb-1">Before Rotate: {beforeRotate}°</label>
                <input
                  type="range"
                  min="-15"
                  max="15"
                  step="0.5"
                  value={beforeRotate}
                  onChange={(e) => setBeforeRotate(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm text-green-400 mb-1">After Rotate: {afterRotate}°</label>
                <input
                  type="range"
                  min="-15"
                  max="15"
                  step="0.5"
                  value={afterRotate}
                  onChange={(e) => setAfterRotate(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Generated Code */}
          <div className="p-4 bg-gray-800 rounded-xl">
            <h3 className="font-semibold mb-2">Generated Code</h3>
            <pre className="text-xs bg-gray-900 p-3 rounded overflow-x-auto whitespace-pre-wrap">
              {generateCode()}
            </pre>
            <button
              onClick={() => navigator.clipboard.writeText(generateCode())}
              className="mt-2 w-full px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition text-sm font-semibold"
            >
              📋 Copy Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
