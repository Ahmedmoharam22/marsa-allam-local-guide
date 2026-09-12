import { tours } from '@/data/tours';
import { TourCard } from '@/components/tours/TourCard';
import { Language } from '@/types/tour';
import { getDictionary } from '@/lib/dictionary';
import SectionTitle from '@/components/common/SectionTitle';
import { scubaDivingLabels } from '@/constants/scubaDivingLabels';

interface ScubaDivingPageProps {
  params: Promise<{ lang: Language }>;
}



export default async function ScubaDivingPage({ params }: ScubaDivingPageProps) {
  const { lang } = await params;
  await getDictionary(lang);

  const scubaTours = tours.filter((tour) => tour.type === 'scuba-diving');
  const headerContent = scubaDivingLabels[lang] || scubaDivingLabels.en;

  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <SectionTitle
          title={headerContent.title}
          subtitle={headerContent.subtitle}
          align="center"
        />

        {/* Scuba Diving Grid */}
        {scubaTours.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {scubaTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400">
            No scuba diving trips available at the moment.
          </div>
        )}

      </div>
    </main>
  );
}