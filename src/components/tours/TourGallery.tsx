'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

interface TourGalleryProps {
  images: {
    featured: string;
    gallery: string[];
  };
  title: string;
}

export default function TourGallery({ images, title }: TourGalleryProps) {
  const allImages = [images.featured, ...(images.gallery || [])];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const mainScrollRef = useRef<HTMLDivElement>(null);

  // تحديث الـ index الحالي عند سحب الصور باليد
  const handleScroll = () => {
    if (!mainScrollRef.current) return;
    const { scrollLeft, clientWidth } = mainScrollRef.current;
    const newIndex = Math.round(Math.abs(scrollLeft) / clientWidth);
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < allImages.length) {
      setActiveIndex(newIndex);
    }
  };

  // عند الضغط على المصغرات السفلية يتم الانتقال للصورة بسلاسة
  const scrollToImage = (index: number) => {
    setActiveIndex(index);
    if (mainScrollRef.current) {
      const width = mainScrollRef.current.clientWidth;
      mainScrollRef.current.scrollTo({
        left: index * width,
        behavior: 'smooth',
      });
    }
  };

  const handleNextLightbox = () => {
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevLightbox = () => {
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <section className="mb-6 sm:mb-8">
      {/* 1. Main Display Area with Full Width Cover */}
      <div className="relative group w-full h-[320px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-2xl bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md">
        
        {/* Swipeable Container */}
        <div 
          ref={mainScrollRef}
          onScroll={handleScroll}
          className="relative z-10 w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth"
        >
          {allImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative w-full h-full shrink-0 snap-center flex items-center justify-center"
            >
              <Image
                src={img}
                alt={`${title} - photo ${idx + 1}`}
                fill
                quality={88}
                priority={idx === 0}
                sizes="(max-width: 1024px) 100vw, 1200px"
                className="object-cover transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Expand / Lightbox Button */}
        <button
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-3 right-3 z-20 p-2 rounded-xl bg-black/40 text-white backdrop-blur-md hover:bg-black/70 transition-all active:scale-95 flex items-center gap-1.5 text-xs font-semibold px-3"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">View Full</span>
        </button>

        {/* Counter Badge */}
        <div className="absolute bottom-3 right-3 z-20 px-3 py-1 rounded-full bg-black/50 text-white backdrop-blur-md text-xs font-medium">
          {activeIndex + 1} / {allImages.length}
        </div>
      </div>

      {/* 2. Thumbnails Bar */}
      {allImages.length > 1 && (
        <div className="mt-3 flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none snap-x">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => scrollToImage(idx)}
              className={`relative h-16 sm:h-20 w-24 sm:w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all snap-start bg-slate-900 ${
                activeIndex === idx
                  ? 'border-cyan-500 ring-2 ring-cyan-500/30 scale-95 opacity-100'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                sizes="112px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* 3. Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
            <Image
              src={allImages[activeIndex]}
              alt={`${title} Full`}
              fill
              quality={88}
              className="object-contain"
              priority
            />
          </div>

          {allImages.length > 1 && (
            <>
              <button
                onClick={handlePrevLightbox}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="h-6 w-6 rtl:rotate-180" />
              </button>
              <button
                onClick={handleNextLightbox}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                <ChevronRight className="h-6 w-6 rtl:rotate-180" />
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
}