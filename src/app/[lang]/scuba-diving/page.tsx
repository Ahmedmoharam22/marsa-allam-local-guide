import { tours } from '@/data/tours';
import { TourCard } from '@/components/tours/TourCard';
import { Language } from '@/types/tour';
import { getDictionary } from '@/lib/dictionary';
import SectionTitle from '@/components/common/SectionTitle';

interface ScubaDivingPageProps {
  params: Promise<{ lang: Language }>;
}

const pageTitles: Record<Language, { title: string; subtitle: string }> = {
  en: { title: 'Scuba Diving Trips', subtitle: 'Discover world-class coral reefs and marine life in Marsa Alam' },
  de: { title: 'Tauchausflüge', subtitle: 'Entdecken Sie weltklasse Korallenriffe und Meereslebewesen in Marsa Alam' },
  it: { title: 'Immersioni Subacquee', subtitle: 'Scopri barriere coralline di livello mondiale e vita marina a Marsa Alam' },
  ru: { title: 'Дайвинг Поездки', subtitle: 'Откройте для себя коралловые рифы и морскую жизнь Марса-Алама' },
  pl: { title: 'Wycieczki Nurkowe', subtitle: 'Odkryj światowej klasy rafy koralowe i życie morskie w Marsa Alam' },
  cz: { title: 'Potápěčské Výlety', subtitle: 'Objevte světoznámé koralové útesy a mořský život v Marsa Alam' }
};

export default async function ScubaDivingPage({ params }: ScubaDivingPageProps) {
  const { lang } = await params;
  await getDictionary(lang);

  // فلترة رحلات الـ Scuba Diving
  const scubaTours = tours.filter((tour) => tour.type === 'scuba-diving');
  const headerContent = pageTitles[lang] || pageTitles.en;

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