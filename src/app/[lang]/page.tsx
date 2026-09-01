import { FeaturesBar } from '@/components/home/FeaturesBar';
import { Hero } from '@/components/home/HeroSection';
import { TourCard } from '@/components/tours/TourCard';
import { tours } from '@/data/tours';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n-config';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Hero lang={lang} dict={dict} />
      <FeaturesBar lang={lang} dict={dict} />

      {/* Featured Tours Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-extrabold text-slate-900 dark:text-white">
          Our Tours
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} lang={lang} />
          ))}
        </div>
      </section>
    </main>
  );
}