"use client";

import { useState } from "react";
import Image from "next/image";
import { Language } from "@/types/tour";
import { aboutGuideData } from "@/data/aboutGuide";
import SectionTitle from "../common/SectionTitle";
import { ChevronLeft, ChevronRight, ShieldCheck, Award, Users, HeartHandshake, MapPin } from "lucide-react";

interface AboutGuideProps {
  lang: Language;
  images?: string[];
}

const defaultImages = [
  "/images/guide/guide-1.webp",
  "/images/guide/guide-2.webp",
  "/images/guide/guide-3.webp",
];

const trustIcons = [Award, ShieldCheck, Users, HeartHandshake, MapPin];

export default function AboutGuide({ lang, images = defaultImages }: AboutGuideProps) {
  const t = aboutGuideData[lang] || aboutGuideData.en;
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="guide" className="py-24 bg-surface dark:bg-ocean-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-12">
          <SectionTitle
            title={t.badge || "Meet Your Local Guide"}
            subtitle={t.subtitle}
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Image column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 mb-8 lg:mb-0">
            <div className="relative rounded-3xl rounded-tr-none overflow-hidden ring-1 ring-ocean-900/10 dark:ring-ocean-800 aspect-[4/5] group">
              <Image
                src={images[currentImage]}
                alt={t.title}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-transparent to-transparent" />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/15 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-white/15 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Counter */}
            {images.length > 1 && (
              <div className="mt-3 flex items-center gap-3 text-sm font-mono text-ocean-950/70 dark:text-aqua-100/70">
                <span>{String(currentImage + 1).padStart(2, "0")} — {String(images.length).padStart(2, "0")}</span>
                <div className="flex gap-1.5">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-1 rounded-full transition-all ${
                        currentImage === idx ? "w-6 bg-aqua-500" : "w-3 bg-ocean-900/20 dark:bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content column */}
          <div className="lg:col-span-7">
            {/* Pull-quote */}
            {t.tagline && (
              <blockquote className="border-l-2 border-aqua-500 pl-5 mb-8">
                <p className="text-xl font-medium italic text-ocean-950 dark:text-aqua-100 leading-snug">
                  {t.tagline}
                </p>
              </blockquote>
            )}

            <div className="space-y-4 max-w-[65ch] text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>{t.bio1}</p>
              <p>{t.bio2}</p>
              <p>{t.bio3}</p>
            </div>

            {/* Trust points */}
            {t.trustPoints && (
              <div className="mt-12 pt-8 border-t border-ocean-900/10 dark:border-ocean-800">
                <h3 className="text-lg font-bold text-ocean-950 dark:text-white mb-6">
                  {t.trustSectionTitle}
                </h3>

                <ul className="divide-y divide-ocean-900/10 dark:divide-ocean-800">
                  {t.trustPoints.map((point, index) => {
                    const Icon = trustIcons[index % trustIcons.length];
                    return (
                      <li key={point.id} className="py-4 flex items-start gap-4">
                        <Icon className="w-5 h-5 text-aqua-600 dark:text-aqua-400 shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-base font-semibold text-ocean-950 dark:text-white">
                            {point.title}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-0.5">
                            {point.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}