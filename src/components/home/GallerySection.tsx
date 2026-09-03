
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
    <section id="liveaboards" className="py-20 bg-white dark:bg-slate-900 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />

        <div className="mt-10 px-4 sm:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((img, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                  <div className="group relative h-80 rounded-2xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-800">
                    <Image 
                      src={img.src}
                      alt={img.alt[lang] || img.alt.en}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-medium text-sm tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {img.alt[lang] || img.alt.en}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-5 bg-white/85 dark:bg-slate-800/85 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg text-slate-800 dark:text-slate-100" />
            <CarouselNext className="hidden sm:flex -right-5 bg-white/85 dark:bg-slate-800/85 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg text-slate-800 dark:text-slate-100" />
          </Carousel>

          {/* Mobile Dots Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6 sm:hidden">
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