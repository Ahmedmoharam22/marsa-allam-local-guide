import Image from 'next/image';
import { Tour, Language } from '@/types/tour';
import { ClockIcon, LocationIcon } from '@/components/ui/Icons';
import Link from 'next/link';

interface TourCardProps {
  tour: Tour;
  lang: Language;
}

export const TourCard = ({ tour, lang }: TourCardProps) => {
  const title = tour.title[lang] || tour.title.en || '';
  const subtitle = tour.subtitle?.[lang] || tour.overview?.[lang] || tour.subtitle?.en || tour.overview?.en || '';

  return (
    <div className="group flex flex-row items-stretch w-full min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 md:flex-col">
      
      {/* Cover Image Container */}
      <div className="relative w-[165px] xs:w-[185px] sm:w-52 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800 md:w-full md:aspect-[16/10]">
        <Image
          src={tour.images.featured}
          alt={title}
          fill
          sizes="(max-width: 768px) 300px, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-2.5 sm:p-4 md:p-5 min-w-0 overflow-hidden">
        <div className="min-w-0">
          
          {/* Title */}
          <h3 className="line-clamp-2 text-sm font-bold text-slate-900 dark:text-white sm:text-base md:text-lg leading-snug break-words">
            {title}
          </h3>
          
          {/* Subtitle / Description */}
          {subtitle && (
            <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400 md:text-sm leading-relaxed break-words">
              {subtitle}
            </p>
          )}

          {/* Meta Info: Duration & Location */}
          <div className="mt-2 flex flex-col gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 min-w-0 md:mt-2.5 md:flex-row md:items-center md:gap-3">
            
            {/* Duration */}
            <span className="flex items-center gap-1.5 shrink-0">
              <ClockIcon className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
              <span className="truncate">{tour.duration[lang] || tour.duration.en}</span>
            </span>
            
            {/* Location */}
            <span className="flex items-center gap-1.5 min-w-0">
              <LocationIcon className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
              <span className="truncate text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                {tour.departure[lang] || tour.departure.en}
              </span>
            </span>
          </div>
        </div>

        {/* Footer: Price & Action Button */}
        <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2 dark:border-slate-800/80 min-w-0 md:mt-auto md:pt-4">
          <div className="flex flex-col shrink-0">
            <span className="text-sm font-black text-cyan-600 dark:text-cyan-400 sm:text-lg md:text-xl leading-none">
              {tour.price.currency}{tour.price.amount}
            </span>
          </div>

          <Link
            href={`/${lang}/tours/${tour.slug}`}
            className="shrink-0 rounded-xl bg-cyan-600 px-2.5 py-1.5 text-xs font-bold text-white transition-all hover:bg-cyan-700 active:scale-95 md:px-4 md:py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};