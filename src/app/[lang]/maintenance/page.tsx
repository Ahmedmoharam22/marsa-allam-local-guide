"use client";

import { Wrench } from "lucide-react";
import { Language } from "@/types/tour";
import Logo from "@/components/common/Logo";

interface MaintenancePageProps {
  lang?: Language;
}

const maintenanceTexts: Record<string, { badge: string; title: string; description: string; backBtn: string }> = {
  en: {
    badge: "Scheduled Maintenance",
    title: "We'll be back shortly",
    description: "We're improving your experience on the site. Thanks for your patience — check back in a little while.",
    backBtn: "Try Again",
  },
};

export default function MaintenancePage({ lang = "en" }: MaintenancePageProps) {
  const t = maintenanceTexts[lang] || maintenanceTexts.en;

  return (
    <main className="min-h-screen bg-ocean-950 text-white flex items-center justify-center px-4 py-12 sm:px-6 relative overflow-hidden">
      {/* توهج خلفية هادي بدل الكارت الزجاجي التقليدي */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(6,182,212,0.15),transparent_60%)]" />

      <div className="relative w-full max-w-sm sm:max-w-md text-center">
        {/* لوجو الموقع — عشان الزائر يتطمن إنه في المكان الصح */}
        <div className="mb-8 sm:mb-10 flex justify-center">
          <Logo lang={lang} />
        </div>

        {/* أيقونة هادية بدل القفز واللف */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8">
          <div className="absolute inset-0 rounded-full bg-aqua-500/15 animate-pulse" />
          <div className="relative w-full h-full rounded-full bg-aqua-500/10 border border-aqua-400/25 flex items-center justify-center text-aqua-400">
            <Wrench className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
        </div>

        <span className="inline-block text-[11px] sm:text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-aqua-500/10 text-aqua-400 border border-aqua-400/20 mb-4">
          {t.badge}
        </span>

        <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3">
          {t.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xs sm:max-w-sm mx-auto mb-8">
          {t.description}
        </p>

        <button
          onClick={() => window.location.reload()}
          type="button"
          className="w-full sm:w-auto sm:min-w-[200px] inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl bg-aqua-600 hover:bg-aqua-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-aqua-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-950"
        >
          {t.backBtn}
        </button>

        <p className="text-xs text-slate-500 mt-10">
          © {new Date().getFullYear()} Marsa Alam Local Guide
        </p>
      </div>
    </main>
  );
}