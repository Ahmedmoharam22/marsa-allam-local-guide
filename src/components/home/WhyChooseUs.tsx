import { Language } from "@/types/tour";
import { whyChooseUsData } from "@/data/whyChooseUs";
import SectionTitle from "../common/SectionTitle";
import { CreditCard, ShieldCheck, MessageCircle, Users } from "lucide-react";

interface WhyChooseUsProps {
  lang: Language;
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = whyChooseUsData[lang] || whyChooseUsData.en;

  const featureIcons = [
    <CreditCard key="card" className="w-6 h-6 text-aqua-600 dark:text-aqua-400" />,
    <ShieldCheck key="shield" className="w-6 h-6 text-aqua-600 dark:text-aqua-400" />,
    <MessageCircle key="comments" className="w-6 h-6 text-aqua-600 dark:text-aqua-400" />,
    <Users key="users" className="w-6 h-6 text-aqua-600 dark:text-aqua-400" />,
  ];

  return (
    <section id="about" className="py-16 bg-surface dark:bg-ocean-950 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner Badge */}
        <div className="flex items-center justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aqua-100/80 dark:bg-ocean-900/90 border border-aqua-400/40 dark:border-ocean-800 text-ocean-900 dark:text-aqua-400 text-xs sm:text-sm font-semibold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-aqua-600 dark:text-aqua-400" />
            <span>{t.topBanner}</span>
          </div>
        </div>

        {/* Section Title */}
        <SectionTitle
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />

        {/* Responsive Grid: 1 col mobile -> 2 cols tablet -> 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {t.features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-ocean-900/80 p-6 rounded-2xl border border-ocean-800/15 dark:border-ocean-800 shadow-sm hover:shadow-xl hover:border-ocean-700 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-aqua-100/70 dark:bg-ocean-800/60 border border-aqua-400/20 dark:border-ocean-700/50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-aqua-100 dark:group-hover:bg-ocean-800 transition-all duration-300">
                {featureIcons[index]}
              </div>

              <h3 className="text-lg font-bold text-ocean-950 dark:text-white mb-2 leading-snug">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
