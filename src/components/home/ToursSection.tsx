"use client";

import { useState, useMemo } from "react";
import { tours } from "@/data/tours";
import { TourCard } from "../tours/TourCard";
import { Locale } from "@/lib/i18n-config";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";

interface ToursSectionProps {
  lang: Locale;
  dict: any;
}

function ToursSection({ lang, dict }: ToursSectionProps) {
  const title = dict?.tours?.title || dict?.toursTitle || "Explore Our Marsa Alam Tours";
  const subtitle = dict?.tours?.subtitle || dict?.toursSubtitle || "Discover the best marine adventures and desert safaris, and enjoy the magic of nature with us.";

  const [searchQuery, setSearchQuery] = useState("");
  const [priceSort, setPriceSort] = useState<"default" | "low" | "high">("default");
  const [alphaSort, setAlphaSort] = useState<"default" | "asc">("default");

  const uiTexts: Record<Locale, { searchPlaceholder: string; noResults: string; viewAll: string; lowToHigh: string; highToLow: string; alphabetical: string }> = {
    en: { searchPlaceholder: "Search tours...", noResults: "No tours found matching your search.", viewAll: "View All Tours", lowToHigh: "Low Price", highToLow: "High Price", alphabetical: "A-Z" },
    de: { searchPlaceholder: "Ausflüge suchen...", noResults: "Keine passenden Ausflüge gefunden.", viewAll: "Alle Ausflüge anzeigen", lowToHigh: "Günstig", highToLow: "Teuer", alphabetical: "A-Z" },
    it: { searchPlaceholder: "Cerca tour...", noResults: "Nessun tour trovato.", viewAll: "Visualizza Tutti i Tour", lowToHigh: "Prezzo Basso", highToLow: "Prezzo Alto", alphabetical: "A-Z" },
    ru: { searchPlaceholder: "Поиск экскурсий...", noResults: "Экскурсии не найдены.", viewAll: "Все экскурсии", lowToHigh: "Дешевле", highToLow: "Дороже", alphabetical: "А-Я" },
    pl: { searchPlaceholder: "Szukaj wycieczek...", noResults: "Nie znaleziono wycieczek.", viewAll: "Zobacz Wszystkie Wycieczki", lowToHigh: "Niska cena", highToLow: "Wysoka cena", alphabetical: "A-Z" },
    cz: { searchPlaceholder: "Hledat výlety...", noResults: "Žádné výlety nenalezeny.", viewAll: "Zobrazit všechny výlety", lowToHigh: "Nízká cena", highToLow: "Vysoká cena", alphabetical: "A-Z" },
  };

  const t = uiTexts[lang] || uiTexts.en;

  const filteredTours = useMemo(() => {
    let result = tours.filter((tour) => {
      const tourTitle = (tour.title[lang] || tour.title.en).toLowerCase();
      const tourCategory = (tour.category[lang] || tour.category.en).toLowerCase();
      const query = searchQuery.toLowerCase();

      return tourTitle.includes(query) || tourCategory.includes(query);
    });

    // Sort by Price (Low / High)
    if (priceSort === "low") {
      result.sort((a, b) => a.price.amount - b.price.amount);
    } else if (priceSort === "high") {
      result.sort((a, b) => b.price.amount - a.price.amount);
    }

    // Sort by A-Z
    if (alphaSort === "asc") {
      result.sort((a, b) => {
        const titleA = a.title[lang] || a.title.en;
        const titleB = b.title[lang] || b.title.en;
        return titleA.localeCompare(titleB);
      });
    }

    return result;
  }, [searchQuery, priceSort, alphaSort, lang]);

  const displayedTours = filteredTours.slice(0, 6);

  return (
    <section id="tours" className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        align="center"
        className="text-foreground"
      />

      {/* Control Bar: Search on extreme Left, Sort buttons on extreme Right */}
      <div className="mx-auto mb-10 mt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Sort & Filter Buttons (Right side) */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Price Low / High Buttons */}
          <button
            onClick={() => {
              setPriceSort(priceSort === "low" ? "default" : "low");
              setAlphaSort("default");
            }}
            className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition-all ${
              priceSort === "low"
                ? "border-secondary bg-secondary/10 text-secondary"
                : "border-border bg-card text-muted-foreground hover:border-secondary/50 hover:text-foreground"
            }`}
          >
            {t.lowToHigh} ↓
          </button>

          <button
            onClick={() => {
              setPriceSort(priceSort === "high" ? "default" : "high");
              setAlphaSort("default");
            }}
            className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition-all ${
              priceSort === "high"
                ? "border-secondary bg-secondary/10 text-secondary"
                : "border-border bg-card text-muted-foreground hover:border-secondary/50 hover:text-foreground"
            }`}
          >
            {t.highToLow} ↑
          </button>

          {/* A-Z Button */}
          <button
            onClick={() => {
              setAlphaSort(alphaSort === "asc" ? "default" : "asc");
              setPriceSort("default");
            }}
            className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition-all ${
              alphaSort === "asc"
                ? "border-secondary bg-secondary/10 text-secondary"
                : "border-border bg-card text-muted-foreground hover:border-secondary/50 hover:text-foreground"
            }`}
          >
            {t.alphabetical}
          </button>
        </div>

        {/* Small Search Bar (Left side) */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full rounded-xl border border-border bg-card px-9 py-2 text-xs text-foreground placeholder-muted-foreground shadow-sm transition-all focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* Tours Grid */}
      {displayedTours.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayedTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} lang={lang} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="text-muted-foreground">{t.noResults}</p>
        </div>
      )}

      {/* View All Button */}
      <div className="mt-12 flex justify-center">
        <Link
          href={`/${lang}/tours`}
          className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/25 "
        >
          <span>{t.viewAll}</span>
          <ArrowRight className="h-5 w-5 transition-transform duration-300 rtl:rotate-180" />
        </Link>
      </div>
    </section>
  );
}

export default ToursSection;