import Image from 'next/image';
import Link from 'next/link';
import { Tour, Language } from '@/types/tour';
import { ClockIcon, LocationIcon } from '@/components/ui/Icons';

interface TourCardProps {
  tour: Tour;
  lang: Language;
}

export const TourCard = ({ tour, lang }: TourCardProps) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      {/* Cover Image & Badge */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Image
          src={tour.images.featured}
          alt={tour.title[lang] || tour.title.en}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
          {tour.category[lang]}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Meta Info */}
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
            <span>{tour.duration[lang]}</span>
          </span>
          <span className="flex items-center gap-1.5 truncate max-w-[140px]">
            <LocationIcon className="h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-400" />
            <span className="truncate">{tour.departure[lang]}</span>
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="line-clamp-1 text-xl font-bold text-slate-900 dark:text-white">
          {tour.title[lang]}
        </h3>
        <p className="mt-1 line-clamp-1 text-sm text-slate-600 dark:text-slate-400">
          {tour.subtitle[lang]}
        </p>

        <p className="mt-3 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
          {tour.overview[lang]}
        </p>

        {/* Footer: Price & Action */}
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400">From </span>
            <span className="text-2xl font-black text-cyan-600 dark:text-cyan-400">
              {tour.price.currency}{tour.price.amount}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400"> /{tour.price.unit[lang]}</span>
          </div>

          <Link
            href={`/${lang}/tours/${tour.slug}`}
            className="rounded-xl bg-cyan-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-cyan-700 active:scale-95"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};