import { Language } from "@/types/tour";
import { ctaData } from "@/data/cta";
import { MapPinIcon, PhoneIcon, MessageCircle, Mail } from "lucide-react";

// Instagram brand icon — not in lucide-react
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
    <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 px-6 py-12 sm:px-12 sm:py-16 shadow-2xl border border-cyan-900/40">
          
          {/* خلفية جمالية مضيئة */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* الجزء الأيسر: العنوان والزر */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {t.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {t.title}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                {t.subtitle}
              </p>
              <div>
                <a
                  href="https://wa.me/201080268114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg shadow-emerald-900/30 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>{t.buttonText}</span>
                </a>
              </div>
            </div>

            {/* الجزء الأيمن: تفاصيل التواصل مرتبة بشياكة */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 border-t lg:border-t-0 lg:border-l border-cyan-900/60 pt-8 lg:pt-0 lg:pl-8">
              
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-medium">Location</span>
                  <span className="text-sm font-semibold text-white">{t.info.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-medium">WhatsApp</span>
                  <span className="text-sm font-semibold text-white" dir="ltr">{t.info.whatsapp}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-pink-400 shrink-0">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-medium">Instagram</span>
                  <span className="text-sm font-semibold text-white">{t.info.instagram}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-medium">Email</span>
                  <span className="text-sm font-semibold text-white">{t.info.email}</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}