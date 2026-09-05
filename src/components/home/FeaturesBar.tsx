"use client";

import { Language } from "@/types/tour";
import { whyChooseUsData } from "@/data/whyChooseUs";
import { CreditCard, ShieldCheck, MessageCircle, Users } from "lucide-react";

interface FeaturesBarProps {
  lang: Language;
}

export function FeaturesBar({ lang }: FeaturesBarProps) {
  const t = whyChooseUsData[lang] || whyChooseUsData.en;

  const featureIcons = [
    <CreditCard key="card" className="h-4 w-4 sm:h-5 sm:w-5" />,
    <ShieldCheck key="shield" className="h-4 w-4 sm:h-5 sm:w-5" />,
    <MessageCircle key="comments" className="h-4 w-4 sm:h-5 sm:w-5" />,
    <Users key="users" className="h-4 w-4 sm:h-5 sm:w-5" />,
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-4 lg:mt-2 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Container الرئيسي للشريط العائم */}
        <div className="rounded-2xl bg-white/95 dark:bg-ocean-900/95 p-4 sm:p-6 shadow-2xl backdrop-blur-md border border-ocean-800/15 dark:border-ocean-800">
          
          {/* Top Banner Badge */}
          {t.topBanner && (
            <div className="flex items-center justify-center mb-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-aqua-100/80 dark:bg-ocean-950 border border-aqua-400/40 dark:border-ocean-800 text-ocean-950 dark:text-aqua-400 text-xs font-semibold shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-aqua-600 dark:text-aqua-400" />
                <span>{t.topBanner}</span>
              </div>
            </div>
          )}

          {/* Simple Title Only */}
          <div className="text-center mb-4">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-ocean-950 dark:text-white leading-tight">
              {t.title}
            </h3>
          </div>

          {/* Grid Layout: 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:divide-x md:divide-ocean-800/10 dark:md:divide-ocean-800/60 rtl:md:divide-x-reverse">
            {t.features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 ${
                  index !== 0 ? "md:pl-4 rtl:md:pr-4" : ""
                }`}
              >
                {/* Icon Container */}
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-aqua-100/70 dark:bg-ocean-800/80 text-aqua-600 dark:text-aqua-400 border border-aqua-400/20 dark:border-ocean-700">
                  {featureIcons[index % featureIcons.length]}
                </div>

                {/* Text Content */}
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs sm:text-sm font-bold text-ocean-950 dark:text-white leading-tight mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-300 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBar;