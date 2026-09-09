"use client";

import { useState, useMemo } from "react";
import { tours } from "@/data/tours";
import { TourCard } from "../tours/TourCard";
import { Locale } from "@/lib/i18n-config";
import { ArrowUpDown, ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";

interface ToursSectionProps {
  lang: Locale;
  dict: any;
}

function ToursSection({ lang, dict }: ToursSectionProps) {
  const title = dict?.tours?.title || dict?.toursTitle || "Explore Our Marsa Alam Tours";
  const subtitle = dict?.tours?.subtitle || dict?.toursSubtitle || "Discover the best marine adventures and desert safaris, and enjoy the magic of nature with us.";

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceSort, setPriceSort] = useState<"default" | "low" | "high">("default");
  const [alphaSort, setAlphaSort] = useState<"default" | "asc">("default");

  const uiTexts: Record<
    Locale,
    {
      noResults: string;
      all: string;
      lowToHigh: string;
      highToLow: string;
      alphabetical: string;
    }
  > = {
    en: { noResults: "No tours found.", all: "All Tours", lowToHigh: "Low Price", highToLow: "High Price", alphabetical: "A-Z" },
    de: { noResults: "Keine Ausflüge gefunden.", all: "Alle Ausflüge", lowToHigh: "Günstig", highToLow: "Teuer", alphabetical: "A-Z" },
    it: { noResults: "Nessun tour trovato.", all: "Tutti i Tour", lowToHigh: "Prezzo Basso", highToLow: "Prezzo Alto", alphabetical: "A-Z" },
    ru: { noResults: "Экскурсии не найдены.", all: "Все экскурсии", lowToHigh: "Дешевле", highToLow: "Дороже", alphabetical: "А-Я" },
    pl: { noResults: "Nie znaleziono wycieczek.", all: "Wszystkie Wycieczki", lowToHigh: "Niska cena", highToLow: "Wysoka cena", alphabetical: "A-Z" },
    cz: { noResults: "Žádné výlety nenalezeny.", all: "Všechny výlety", lowToHigh: "Nízká cena", highToLow: "Vysoká cena", alphabetical: "A-Z" },
  };

  const categoryLabels: Record<string, Record<Locale, string>> = {
    "scuba-diving": { en: "Scuba Diving", de: "Tauchen", it: "Immersioni", ru: "Дайвинг", pl: "Nurkowanie", cz: "Potápění" },
    "snorkeling": { en: "Snorkeling Trips", de: "Schnorcheln", it: "Snorkeling", ru: "Сноркелинг", pl: "Snorkeling", cz: "Šnorchlování" },
    "sea-trips": { en: "Snorkeling Trips", de: "Schnorcheln", it: "Snorkeling", ru: "Сноркелинг", pl: "Snorkeling", cz: "Šnorchlování" },
    "safari": { en: "Desert Safari", de: "Wüstensafari", it: "Safari nel Deserto", ru: "Сафари", pl: "Safari", cz: "Safari" },
  };

  const t = uiTexts[lang] || uiTexts.en;

  const categories = useMemo(() => {
    const cats = new Set<string>();
    tours.forEach((tour) => {
      if (tour.type) cats.add(tour.type);
    });
    return Array.from(cats);
  }, []);

  const filteredTours = useMemo(() => {
    let result = tours.filter((tour) => {
      if (selectedCategory === "all") return true;
      return tour.type === selectedCategory;
    });

    if (priceSort === "low") {
      result.sort((a, b) => a.price.amount - b.price.amount);
    } else if (priceSort === "high") {
      result.sort((a, b) => b.price.amount - a.price.amount);
    }

    if (alphaSort === "asc") {
      result.sort((a, b) => {
        const titleA = a.title[lang] || a.title.en;
        const titleB = b.title[lang] || b.title.en;
        return titleA.localeCompare(titleB);
      });
    }

    return result;
  }, [selectedCategory, priceSort, alphaSort, lang]);

  return (
    <section id="tours" className="mx-auto max-w-7xl px-4 pt-6 pb-16 sm:px-6 sm:pt-10 sm:pb-24">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base max-w-2xl mx-auto">{subtitle}</p>
      </div>

      {/* Unified Control Bar: Categories + Sorting in One Single Scrollable Line */}
      <div className="mb-8 overflow-x-auto pb-3 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex items-center gap-2 min-w-max">
          
          {/* Category Tabs */}
          <button
            onClick={() => setSelectedCategory("all")}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              selectedCategory === "all"
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-card text-muted-foreground hover:bg-accent hover:text-foreground border border-border"
            }`}
          >
            {t.all}
          </button>

          {categories.map((cat) => {
            const label = categoryLabels[cat]?.[lang] || categoryLabels[cat]?.en || cat;

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

          {/* Divider between Categories & Sorting */}
          <div className="h-5 w-[1px] bg-border mx-1 shrink-0" />

          {/* Price & Alpha Sort Buttons */}
          <button
            onClick={() => {
              setPriceSort(priceSort === "low" ? "default" : "low");
              setAlphaSort("default");
            }}
            className={`shrink-0 flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
              priceSort === "low"
                ? "border-primary bg-primary/10 text-primary shadow-sm"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            <ArrowDownNarrowWide className="h-3.5 w-3.5" />
            {t.lowToHigh}
          </button>

          <button
            onClick={() => {
              setPriceSort(priceSort === "high" ? "default" : "high");
              setAlphaSort("default");
            }}
            className={`shrink-0 flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
              priceSort === "high"
                ? "border-primary bg-primary/10 text-primary shadow-sm"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            <ArrowUpNarrowWide className="h-3.5 w-3.5" />
            {t.highToLow}
          </button>

          <button
            onClick={() => {
              setAlphaSort(alphaSort === "asc" ? "default" : "asc");
              setPriceSort("default");
            }}
            className={`shrink-0 flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-all ${
              alphaSort === "asc"
                ? "border-primary bg-primary/10 text-primary shadow-sm"
                : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            <ArrowUpDown className="h-3.5 w-3.5" />
            {t.alphabetical}
          </button>

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
          <p className="text-muted-foreground text-sm">{t.noResults}</p>
        </div>
      )}
    </section>
  );
}

export default ToursSection;