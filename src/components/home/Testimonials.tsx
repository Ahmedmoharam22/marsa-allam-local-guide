import { Language } from "@/types/tour";
import { testimonialsData } from "@/data/testimonials";
import { StarIcon } from "lucide-react";

interface TestimonialsProps {
  lang: Language;
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const t = testimonialsData[lang] || testimonialsData.en;

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.map((review, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-700/50 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 italic mb-6 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</h4>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{review.country}</span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400">
                  {review.tour}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}