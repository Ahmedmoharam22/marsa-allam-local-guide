import { tours } from '@/data/tours';
import { TourCard } from '@/components/tours/TourCard';
import { Language } from '@/types/tour';
import { getDictionary } from '@/lib/dictionary';
import SectionTitle from '@/components/common/SectionTitle';
import { divingCoursesLabels } from '@/constants/divingCoursesLabels';
interface CoursesPageProps {
  params: Promise<{ lang: Language }>;
}



export default async function CoursesPage({ params }: CoursesPageProps) {
  const { lang } = await params;
  await getDictionary(lang); 

  const courseTours = tours.filter((tour) => tour.type === 'course');
  const headerContent = divingCoursesLabels[lang] || divingCoursesLabels.en;
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