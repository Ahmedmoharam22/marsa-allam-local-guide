import { tours } from '@/data/tours';
import { TourCard } from '@/components/tours/TourCard';
import { Language } from '@/types/tour';
import { getDictionary } from '@/lib/dictionary';
import SectionTitle from '@/components/common/SectionTitle';

interface ToursPageProps {
  params: Promise<{ lang: Language }>;
}

export default async function ToursPage({ params }: ToursPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen  pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
     <SectionTitle
  title={dict.tours.title}
  subtitle={dict.tours.subtitle}
  align="center"
/>
        {/* Tours Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} lang={lang} />
          ))}
        </div>
        
      </div>
    </main>
  );
}