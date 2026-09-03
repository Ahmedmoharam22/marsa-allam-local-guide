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
    <section className="relative py-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white/95 px-6 py-5 shadow-2xl backdrop-blur-md md:grid-cols-4 md:divide-x md:divide-gray-200/60 rtl:md:divide-x-reverse">
          
          {/* Feature 1 */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">{f.experience_title}</h4>
              <p className="text-[11px] text-gray-500">{f.experience_desc}</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-3 md:pl-4 rtl:md:pr-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">{f.groups_title}</h4>
              <p className="text-[11px] text-gray-500">{f.groups_desc}</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-3 md:pl-4 rtl:md:pr-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">{f.safety_title}</h4>
              <p className="text-[11px] text-gray-500">{f.safety_desc}</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-3 md:pl-4 rtl:md:pr-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Star className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-gray-900">{f.care_title}</h4>
              <p className="text-[11px] text-gray-500">{f.care_desc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}