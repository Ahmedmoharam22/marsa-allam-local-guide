import Link from "next/link";
import { Compass } from "lucide-react";
import { Language } from "@/types/tour";
import { statsData, ctaTexts } from "@/data/aboutStats";
import AboutGuide from "@/components/home/AboutGuide";

interface AboutPageProps {
  params: Promise<{ lang: Language }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  
  const currentStats = statsData[lang] || statsData.en;
  const cta = ctaTexts[lang] || ctaTexts.en;

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* 1. Main Local Guide & Trust Section */}
      <AboutGuide lang={lang} />

      {/* 2. Key Highlights / Stats Bar */}
      <section className="py-12 bg-ocean-900 text-white border-y border-ocean-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {currentStats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <p className="text-3xl md:text-4xl font-extrabold text-aqua-400 font-mono">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-slate-300 mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Call To Action (CTA) */}
      <section className="py-20 bg-surface dark:bg-ocean-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-ocean-900 via-ocean-950 to-ocean-900 ring-1 ring-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 opacity-10 text-white pointer-events-none">
              <Compass className="w-80 h-80" />
            </div>

            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {cta.title}
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-base md:text-lg">
              {cta.subtitle}
            </p>
            
            <Link
              href={`/${lang}/tours`}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-ocean-950 bg-aqua-400 hover:bg-aqua-300 transition-colors shadow-lg shadow-aqua-500/20"
            >
              {cta.button}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}