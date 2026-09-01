import { tours } from '@/data/tours';
import { TourCard } from '@/components/tours/TourCard';
import { Language } from '@/types/tour';

export default function ToursPage({ params: { lang } }: { params: { lang: Language } }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} lang={lang} />
        ))}
      </div>
    </section>
  );
}