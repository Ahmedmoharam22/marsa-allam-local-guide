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
    <div className="group flex flex-row items-stretch overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 md:flex-col">
      
      {/* Cover Image & Badge (صورة مصغرة ع الشمال في الموبايل وعرض كامل في الديسك توب) */}
      <div className="relative w-36 sm:w-44 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800 md:h-56 md:w-full">
        <Image
          src={tour.images.featured}
          alt={tour.title[lang] || tour.title.en}
          fill
          sizes="(max-width: 768px) 150px, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-2 top-2 rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md md:left-3 md:top-3 md:px-3 md:py-1 md:text-xs">
          {tour.category[lang]}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4 md:p-5">
        <div>
          {/* Title */}
          <h3 className="line-clamp-1 text-base font-bold text-slate-900 dark:text-white md:text-xl">
            {tour.title[lang]}
          </h3>
          
          {/* Subtitle / Simple Desc */}
          <p className="mt-0.5 line-clamp-1 text-xs text-slate-600 dark:text-slate-400 md:mt-1 md:text-sm">
            {tour.subtitle[lang] || tour.overview[lang]}
          </p>

          {/* Meta Info: Duration */}
          <div className="mt-2 flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <ClockIcon className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
              <span>{tour.duration[lang]}</span>
            </span>
            <span className="flex items-center gap-1 truncate">
              <LocationIcon className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
              <span className="truncate">{tour.departure[lang]}</span>
            </span>
          </div>
        </div>

        {/* Footer: Price & Action Button */}
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800 md:mt-auto md:pt-5">
          <div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 md:text-xs">From </span>
            <span className="text-lg font-black text-cyan-600 dark:text-cyan-400 md:text-2xl">
              {tour.price.currency}{tour.price.amount}
            </span>
          </div>

          <Link
            href={`/${lang}/tours/${tour.slug}`}
            className="rounded-xl bg-cyan-600 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-cyan-700 active:scale-95 md:px-4 md:py-2.5"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};