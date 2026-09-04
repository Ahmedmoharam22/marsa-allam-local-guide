
"use client";

import React, { useState, useEffect } from "react";
import { Language } from "@/types/tour";
import { galleryImages, galleryContent } from "@/data/gallery";
import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

interface GallerySectionProps {
  lang: Language;
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const t = galleryContent[lang] || galleryContent.en;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
 <section id="liveaboards" className="py-16 sm:py-20 bg-white dark:bg-slate-900 transition-colors overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title={t.title}
      subtitle={t.subtitle}
      align="center"
    />

    <div className="mt-8 sm:mt-10 px-0 sm:px-12">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        {/* Mobile Navigation Header (أسهم التنقل أعلى اليسار/اليمين للموبايل) */}
        <div className="flex sm:hidden justify-between items-center mb-4 px-1">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {current + 1} / {count}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => api?.scrollPrev()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-90 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label="Previous slide"
            >
              <svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-90 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              aria-label="Next slide"
            >
              <svg className="h-4 w-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <CarouselContent className="-ml-3 sm:-ml-4">
          {galleryImages.map((img, index) => (
            <CarouselItem key={index} className="pl-3 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
              <div className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-800">
                <Image 
                  src={img.src}
                  alt={img.alt[lang] || img.alt.en}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6">
                  <span className="text-white font-medium text-sm tracking-wide sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {img.alt[lang] || img.alt.en}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Desktop Navigation Arrows */}
        <CarouselPrevious className="hidden sm:flex -left-5 bg-white/85 dark:bg-slate-800/85 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg text-slate-800 dark:text-slate-100" />
        <CarouselNext className="hidden sm:flex -right-5 bg-white/85 dark:bg-slate-800/85 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg text-slate-800 dark:text-slate-100" />
      </Carousel>

      {/* Mobile Dots Indicators */}
      <div className="flex justify-center items-center gap-1.5 mt-5 sm:hidden">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-6 bg-cyan-600 dark:bg-cyan-400"
                : "w-2 bg-slate-200 dark:bg-slate-800"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </div>
</section>
  );
}