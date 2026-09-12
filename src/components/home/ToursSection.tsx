"use client";

import { useState, useMemo } from "react";
import { TourCard } from "../tours/TourCard";
import { Locale } from "@/lib/i18n-config";
import { tours } from "@/data/tours";
import { Tour } from "@/types/tour";
import { toursFilterUiLabels } from "@/constants/toursFilterUiLabels";
import { tourCategoryLabels } from "@/constants/tourCategoryLabels";

interface ToursSectionProps {
  lang: Locale;
  dict: any;
}

function ToursSection({ lang, dict }: ToursSectionProps) {
  const title = dict?.tours?.title || dict?.toursTitle || "Explore Our Marsa Alam Tours";
  const subtitle = dict?.tours?.subtitle || dict?.toursSubtitle || "Discover the best marine adventures and desert safaris, and enjoy the magic of nature with us.";

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { noResults, all } = toursFilterUiLabels[lang] || toursFilterUiLabels.en;

  const categories = useMemo(() => {
    const cats = new Set<string>();
    tours.forEach((tour: Tour) => {
      if (tour.type) cats.add(tour.type);
    });
    return Array.from(cats);
  }, []);

  const filteredTours = useMemo(() => {
    return tours.filter((tour: Tour) => {
      if (selectedCategory === "all") return true;
      return tour.type === selectedCategory;
    });
  }, [selectedCategory]);

  return (
    <section id="tours" className="mx-auto max-w-7xl px-4 pt-6 pb-16 sm:px-6 sm:pt-10 sm:pb-24">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-2xl mx-auto">{subtitle}</p>
      </div>

      {/* Category Tabs */}
      <div className="mb-8 overflow-x-auto pb-3 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-2 min-w-max">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
            }`}
          >
            {all}
          </button>

          {categories.map((cat) => {
            const label = tourCategoryLabels[cat]?.[lang] || tourCategoryLabels[cat]?.en || cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tours Grid */}
      {filteredTours.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="h-full flex flex-col transition-transform duration-300 hover:-translate-y-1">
              <TourCard tour={tour} lang={lang} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center rounded-2xl border border-dashed border-border bg-card/50">
          <p className="text-muted-foreground text-sm">{noResults}</p>
        </div>
      )}
    </section>
  );
}

export default ToursSection;