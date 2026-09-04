import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { tours } from '@/data/tours';
import type { Language } from '@/types/tour';
import { ClockIcon, LocationIcon, CheckIcon, CrossIcon, ArrowLeftIcon } from '@/components/ui/Icons';

interface TourPageProps {
  params: Promise<{
    lang: Language;
    slug: string;
  }>;
}

const backToToursLabels: Record<Language, string> = {
  en: 'Back to Tours',
  de: 'Zurück zu den Touren',
  it: 'Torna ai Tour',
  ru: 'Назад к экскурсиям',
  pl: 'Powrót do wycieczek',
  cz: 'Zpět na výlety',
};

// SEO Metadata
export async function generateMetadata({ params }: TourPageProps) {
  const { lang, slug } = await params;
  const tour = tours.find((t) => t.slug === slug);
  if (!tour) return {};

  return {
    title: `${tour.title[lang]} | Marsa Alam Guide`,
    description: tour.overview[lang],
  };
}

export default async function TourDetailPage({ params }: TourPageProps) {
  const { lang, slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  const t = tour!;

  return (
   <article className="min-h-screen bg-slate-50 pt-20 pb-16 dark:bg-slate-950 text-slate-800 dark:text-slate-100">
  <div className="mx-auto max-w-6xl px-4 sm:px-6">

    {/* Back to Tours Button */}
    <div className="mb-4 sm:mb-6">
      <Link
        href={`/${lang}/#tours`}
        className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-cyan-500 hover:bg-slate-50 hover:text-cyan-600 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
      >
        <ArrowLeftIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
        <span>{backToToursLabels[lang] || backToToursLabels.en}</span>
      </Link>
    </div>

    {/* 1. Gallery Section (الصور أولاً) */}
    <section className="mb-6 sm:mb-8 grid grid-cols-1 gap-2.5 sm:gap-4 md:grid-cols-3">
      {/* الصورة الرئيسية الكبيرة */}
      <div className="relative h-60 sm:h-96 md:col-span-2 overflow-hidden rounded-2xl shadow-md bg-slate-100 dark:bg-slate-900">
        <Image
          src={t.images.featured}
          alt={t.title[lang]}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* الـ 3 صور الفرعية */}
      <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-1 sm:gap-4">
        {t.images.gallery.slice(0, 3).map((img, idx) => (
          <div key={idx} className="relative h-20 sm:h-[112px] overflow-hidden rounded-xl shadow-sm bg-slate-100 dark:bg-slate-900">
            <Image 
              src={img} 
              alt={`Gallery image ${idx + 1}`} 
              fill 
              sizes="(max-width: 768px) 33vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-105" 
            />
          </div>
        ))}
      </div>
    </section>

    {/* 2. Header Section (تحت الصور وفوق الـ Overview) */}
    <header className="mb-8 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800/80 dark:bg-slate-900">
      <div className="mb-2.5 inline-block rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300">
        {t.category[lang]}
      </div>
      <h1 className="text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white leading-tight">
        {t.title[lang]}
      </h1>
      <p className="mt-1.5 text-base text-slate-600 sm:text-lg dark:text-slate-300">
        {t.subtitle[lang]}
      </p>

      {/* Badges Info */}
      <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 border border-slate-200/60 dark:bg-slate-800/60 dark:border-slate-800 dark:text-slate-300">
          <ClockIcon className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
          <span>{t.duration[lang]}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 border border-slate-200/60 dark:bg-slate-800/60 dark:border-slate-800 dark:text-slate-300">
          <LocationIcon className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
          <span>{t.departure[lang]}</span>
        </span>
      </div>
    </header>

    {/* 3. Content Layout (Overview & Sidebar) */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

      {/* Main Info */}
      <div className="lg:col-span-2 space-y-8">

        {/* Overview */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-3 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Overview</h2>
          <p className="leading-relaxed text-sm sm:text-base text-slate-600 dark:text-slate-300">{t.overview[lang]}</p>
        </section>

        {/* Highlights */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-4 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Highlights</h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.highlights[lang]?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-950/60">
                  <CheckIcon className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                </span>
                <span className="leading-snug text-slate-700 dark:text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Itinerary */}
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="mb-6 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Itinerary</h2>
          <div className="relative border-s-2 border-cyan-500/30 ms-3 space-y-6">
            {t.itinerary.map((item) => (
              <div key={item.step} className="ms-6 relative">
                <span className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-600 text-xs font-bold text-white ring-4 ring-white dark:ring-slate-900">
                  {item.step}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.title[lang]}
                </h3>
                {item.description && (
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    {item.description[lang]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Included / Not Included */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 sm:p-6 dark:border-emerald-950/40 dark:bg-emerald-950/10">
            <h3 className="mb-4 text-sm sm:text-base font-bold text-emerald-900 dark:text-emerald-400">What&apos;s Included</h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              {t.included[lang]?.map((inc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-emerald-800 dark:text-emerald-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/60">
                    <CheckIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  </span>
                  <span className="leading-snug">{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          {t.notIncluded && (
            <div className="rounded-2xl border border-rose-100 bg-rose-50/50 p-5 sm:p-6 dark:border-rose-950/40 dark:bg-rose-950/10">
              <h3 className="mb-4 text-sm sm:text-base font-bold text-rose-900 dark:text-rose-400">What&apos;s Not Included</h3>
              <ul className="space-y-3 text-xs sm:text-sm">
                {t.notIncluded[lang]?.map((notInc, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-rose-800 dark:text-rose-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 dark:bg-rose-950/60">
                      <CrossIcon className="h-3.5 w-3.5 text-rose-600 dark:text-rose-400" />
                    </span>
                    <span className="leading-snug">{notInc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

      </div>

      {/* Sidebar Booking Card */}
      <aside className="lg:col-span-1">
        <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Price per adult</span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-3xl sm:text-4xl font-black text-cyan-600 dark:text-cyan-400">
                {t.price.currency}{t.price.amount}
              </span>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">/ {t.price.unit[lang]}</span>
            </div>
          </div>

          {/* Children Policy */}
          <div className="mb-6 space-y-2 rounded-xl bg-slate-50 p-3.5 text-xs text-slate-600 dark:bg-slate-800/50 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Children Policy:</span>
            <p>• {t.childrenPolicy.under5[lang]}</p>
            <p>• {t.childrenPolicy.from5to10[lang]}</p>
            <p>• {t.childrenPolicy.over10[lang]}</p>
          </div>

          {/* Book Action Button */}
          <button className="w-full rounded-xl bg-emerald-600 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-emerald-700 active:scale-95">
            Book Now (Pay Later)
          </button>

          <p className="mt-3 text-center text-xs text-slate-500 dark:text-slate-400">
            {t.paymentNote[lang]}
          </p>

          {t.disclaimer && (
            <p className="mt-4 border-t border-slate-100 pt-3 text-[11px] leading-relaxed text-slate-400 dark:border-slate-800">
              ⚠️ {t.disclaimer[lang]}
            </p>
          )}
        </div>
      </aside>

    </div>
  </div>
</article>
  );
}