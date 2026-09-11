import { tours } from '@/data/tours';
import { TourCard } from '@/components/tours/TourCard';
import { Language } from '@/types/tour';
import { getDictionary } from '@/lib/dictionary';
import SectionTitle from '@/components/common/SectionTitle';

interface CoursesPageProps {
  params: Promise<{ lang: Language }>;
}

const pageTitles: Record<Language, { title: string; subtitle: string }> = {
  en: { title: 'Diving Courses', subtitle: 'PADI & SSI certified diving courses for all experience levels' },
  de: { title: 'Taucherkurse', subtitle: 'PADI & SSI zertifizierte Taucherkurse für alle Erfahrungsstufen' },
  it: { title: 'Corsi di Immersione', subtitle: 'Corsi di immersione certificati PADI e SSI per tutti i livelli' },
  ru: { title: 'Курсы Дайвинга', subtitle: 'Сертифицированные курсы PADI и SSI для всех уровней' },
  pl: { title: 'Kursy Nurkowania', subtitle: 'Certyfikowane kursy nurkowania PADI i SSI na wszystkich poziomach' },
  cz: { title: 'Kurzy Potápění', subtitle: 'Certifikované kurzy potápění PADI a SSI pro všechny úrovně' }
};

export default async function CoursesPage({ params }: CoursesPageProps) {
  const { lang } = await params;
  await getDictionary(lang); // لضمان تحميل الترجمات لو محتاجها أي component فرعي

  // فلترة الكورسات فقط
  const courseTours = tours.filter((tour) => tour.type === 'course');
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

        {/* Courses Grid */}
        {courseTours.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courseTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400">
            No courses available at the moment.
          </div>
        )}

      </div>
    </main>
  );
}