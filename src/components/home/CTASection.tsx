import { Language } from "@/types/tour";
import { ctaData } from "@/data/cta";
import { MapPinIcon, PhoneIcon } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
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
                  <FaWhatsapp className="w-6 h-6" />
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
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-medium">WhatsApp</span>
                  <span className="text-sm font-semibold text-white" dir="ltr">{t.info.whatsapp}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-pink-400 shrink-0">
                  <FaInstagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-medium">Instagram</span>
                  <span className="text-sm font-semibold text-white">{t.info.instagram}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                  <FaEnvelope className="w-6 h-6" />
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