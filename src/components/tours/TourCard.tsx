// import Image from 'next/image';
// import Link from 'next/link';
// import { Tour, Language } from '@/types/tour';
// import { ClockIcon, LocationIcon } from '@/components/ui/Icons';

// interface TourCardProps {
//   tour: Tour;
//   lang: Language;
// }

// export const TourCard = ({ tour, lang }: TourCardProps) => {
//   return (
//     <div className="group flex flex-row items-stretch overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 md:flex-col">
      
//       {/* Cover Image & Badge (صورة مصغرة ع الشمال في الموبايل وعرض كامل في الديسك توب) */}
//       <div className="relative w-36 sm:w-44 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800 md:h-56 md:w-full">
//         <Image
//           src={tour.images.featured}
//           alt={tour.title[lang] || tour.title.en}
//           fill
//           sizes="(max-width: 768px) 150px, (max-width: 1200px) 50vw, 33vw"
//           className="object-cover transition-transform duration-500 group-hover:scale-105"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4 md:p-5">
//         <div>
//           {/* Title */}
//           <h3 className="line-clamp-1 text-base font-bold text-slate-900 dark:text-white md:text-xl">
//             {tour.title[lang]}
//           </h3>
          
//           {/* Subtitle / Simple Desc */}
//           <p className="mt-0.5 line-clamp-1 text-xs text-slate-600 dark:text-slate-400 md:mt-1 md:text-sm">
//             {tour.subtitle[lang] || tour.overview[lang]}
//           </p>

//           {/* Meta Info: Duration */}
//           <div className="mt-2 flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-slate-400">
//             <span className="flex items-center gap-1">
//               <ClockIcon className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
//               <span>{tour.duration[lang]}</span>
//             </span>
//             <span className="flex items-center gap-1 truncate">
//               <LocationIcon className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
//               <span className="truncate">{tour.departure[lang]}</span>
//             </span>
//           </div>
//         </div>

//         {/* Footer: Price & Action Button */}
//         <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800 md:mt-auto md:pt-5">
//           <div>
//             <span className="text-[10px] text-slate-500 dark:text-slate-400 md:text-xs">From </span>
//             <span className="text-lg font-black text-cyan-600 dark:text-cyan-400 md:text-2xl">
//               {tour.price.currency}{tour.price.amount}
//             </span>
//           </div>

//           <Link
//             href={`/${lang}/tours/${tour.slug}`}
//             className="rounded-xl bg-cyan-600 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-cyan-700 active:scale-95 md:px-4 md:py-2.5"
//           >
//             View Details
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };


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
      
      {/* Cover Image - أبعاد ثابتة ومظهر مستطيل متناسق للموبايل والديسك توب */}
      <div className="relative w-[130px] shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800 sm:w-44 md:h-52 md:w-full">
        <Image
          src={tour.images.featured}
          alt={tour.title[lang] || tour.title.en}
          fill
          sizes="(max-width: 768px) 130px, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-3.5 sm:p-4 md:p-5">
        <div>
          {/* Title */}
          <h3 className="line-clamp-1 text-sm font-bold text-slate-900 dark:text-white sm:text-base md:text-lg">
            {tour.title[lang]}
          </h3>
          
          {/* Subtitle */}
          <p className="mt-0.5 line-clamp-1 text-xs text-slate-500 dark:text-slate-400 md:mt-1 md:text-sm">
            {tour.subtitle[lang] || tour.overview[lang]}
          </p>

          {/* Meta Info: Duration & Location (تحت بعض في الموبايل وجنب بعض في الديسك توب) */}
          <div className="mt-2.5 flex flex-col gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:gap-3">
            <span className="flex items-center gap-1.5 shrink-0">
              <ClockIcon className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
              <span>{tour.duration[lang]}</span>
            </span>
            
            <span className="flex items-center gap-1.5 min-w-0">
              <LocationIcon className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
              <span className="truncate text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                {tour.departure[lang]}
              </span>
            </span>
          </div>
        </div>

        {/* Footer: Price & Action Button */}
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 dark:border-slate-800/80 md:mt-auto md:pt-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 dark:text-slate-500 md:text-xs">From</span>
            <span className="text-base font-black text-cyan-600 dark:text-cyan-400 sm:text-lg md:text-xl leading-none">
              {tour.price.currency}{tour.price.amount}
            </span>
          </div>

          <Link
            href={`/${lang}/tours/${tour.slug}`}
            className="rounded-xl bg-cyan-600 px-3 py-1.5 text-xs font-bold text-white transition-all hover:bg-cyan-700 active:scale-95 md:px-4 md:py-2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};