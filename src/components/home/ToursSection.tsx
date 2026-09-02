import { tours } from "@/data/tours";
import { TourCard } from "../tours/TourCard";
import { Locale } from "@/lib/i18n-config";

interface ToursSectionProps {
    lang: Locale;
    dict: any;
}
function ToursSection({ lang, dict }: ToursSectionProps) {
  return (
    <section id="tours" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-slate-900 dark:text-white">
          Our Tours
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} lang={lang} />
          ))}
        </div>
      </section>
  )
}

export default ToursSection