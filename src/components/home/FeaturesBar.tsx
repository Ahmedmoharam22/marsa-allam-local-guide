import type { Locale } from '@/lib/i18n-config';
import { Compass, Users, ShieldCheck, Star } from 'lucide-react';

interface FeaturesBarProps {
  lang: Locale;
  dict: {
    hero: {
      features: {
        experience_title: string;
        experience_desc: string;
        groups_title: string;
        groups_desc: string;
        safety_title: string;
        safety_desc: string;
        care_title: string;
        care_desc: string;
      };
    };
  };
}

export function FeaturesBar({ dict }: FeaturesBarProps) {
  const f = dict.hero.features;

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 lg:-mt-16 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 px-4 py-4 sm:px-6 sm:py-5 shadow-2xl backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 md:grid-cols-4 md:divide-x md:divide-gray-200/60 dark:md:divide-slate-800/60 rtl:md:divide-x-reverse">
          
          {/* Feature 1 */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
              <Compass className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-slate-100">{f.experience_title}</h4>
              <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-slate-400">{f.experience_desc}</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3 md:pl-4 rtl:md:pr-4">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
              <Users className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-slate-100">{f.groups_title}</h4>
              <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-slate-400">{f.groups_desc}</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3 md:pl-4 rtl:md:pr-4">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
              <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-slate-100">{f.safety_title}</h4>
              <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-slate-400">{f.safety_desc}</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-3 md:pl-4 rtl:md:pr-4">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
              <Star className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900 dark:text-slate-100">{f.care_title}</h4>
              <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-slate-400">{f.care_desc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}