import { Language } from "@/types/tour";
import { ctaData } from "@/data/cta";
import { MapPinIcon, MessageCircle, Mail } from "lucide-react";

// Instagram brand icon
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

interface CTASectionProps {
  lang: Language;
}

export default function CTASection({ lang }: CTASectionProps) {
  const t = ctaData[lang] || ctaData.en;

  return (
    <section className="py-16 bg-surface dark:bg-ocean-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-ocean-900 border border-aqua-100 dark:border-ocean-800 p-8 sm:p-12 shadow-sm transition-all">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* الجزء الأيسر: العنوان والزر */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-aqua-100 dark:bg-ocean-800 text-aqua-600 dark:text-aqua-400">
                {t.badge}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ocean-950 dark:text-white tracking-tight leading-tight">
                {t.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.subtitle}
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/201080268114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.buttonText}</span>
                </a>
              </div>
            </div>

            {/* الجزء الأيمن: كروت التواصل المبسطة */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Location */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-aqua-100/40 dark:bg-ocean-950/50 border border-aqua-100 dark:border-ocean-800">
                <div className="w-10 h-10 rounded-xl bg-aqua-100 dark:bg-ocean-800 flex items-center justify-center text-aqua-600 dark:text-aqua-400 shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">Location</span>
                  <span className="text-xs sm:text-sm font-bold text-ocean-950 dark:text-white truncate block">{t.info.location}</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-aqua-100/40 dark:bg-ocean-950/50 border border-aqua-100 dark:border-ocean-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-ocean-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">WhatsApp</span>
                  <span className="text-xs sm:text-sm font-bold text-ocean-950 dark:text-white truncate block" dir="ltr">{t.info.whatsapp}</span>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-aqua-100/40 dark:bg-ocean-950/50 border border-aqua-100 dark:border-ocean-800">
                <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-ocean-800 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">Instagram</span>
                  <span className="text-xs sm:text-sm font-bold text-ocean-950 dark:text-white truncate block">{t.info.instagram}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-aqua-100/40 dark:bg-ocean-950/50 border border-aqua-100 dark:border-ocean-800">
                <div className="w-10 h-10 rounded-xl bg-aqua-100 dark:bg-ocean-800 flex items-center justify-center text-aqua-600 dark:text-aqua-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 font-medium">Email</span>
                  <span className="text-xs sm:text-sm font-bold text-ocean-950 dark:text-white truncate block">{t.info.email}</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}