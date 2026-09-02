import { tours } from "@/data/tours";
import { TourCard } from "../tours/TourCard";
import { Locale } from "@/lib/i18n-config";
import SectionTitle from "../common/SectionTitle";

interface ToursSectionProps {
  lang: Locale;
  dict: any;
}

function ToursSection({ lang, dict }: ToursSectionProps) {
  const title = dict?.tours?.title || dict?.toursTitle || "Explore Our Marsa Alam Tours";
  const subtitle = dict?.tours?.subtitle || dict?.toursSubtitle || "Discover the best marine adventures and desert safaris, and enjoy the magic of nature with us.";

  return (
    <section id="tours" className="mx-auto max-w-7xl px-4 py-16">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        align="center"
        className="text-white"
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} lang={lang} />
        ))}
      </div>
    </section>
  );
}

export default ToursSection;