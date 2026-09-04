import { Language } from "@/types/tour";
import { getInTouchData } from "@/data/getInTouch";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";

interface GetInTouchProps {
  lang: Language;
}

export default function GetInTouchSection({ lang }: GetInTouchProps) {
  const t = getInTouchData[lang] || getInTouchData.en;

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />

        {/* المحتوى الرئيسي */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* الجانب الأيسر: معلومات التواصل والـ Locations (7 أعمدة) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* بطاقة التواصل */}
            <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700/60 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                {t.contactInfoTitle}
              </h3>
              
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="https://wa.me/201080268114" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600"><FaWhatsapp className="w-4 h-4" /></span>
                    <div>
                      <span className="block text-xs text-slate-400">{t.whatsappLabel}</span>
                      <span className="font-semibold" dir="ltr">+20 10 80268114</span>
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href="tel:+201080268114" className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600"><FaPhoneAlt className="w-4 h-4" /></span>
                    <div>
                      <span className="block text-xs text-slate-400">{t.phoneLabel}</span>
                      <span className="font-semibold" dir="ltr">+20 10 80268114</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="mailto:info@marsaalamlocalguide.com" className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                    <span className="p-2 rounded-lg bg-blue-500/10 text-blue-600"><FaEnvelope className="w-4 h-4" /></span>
                    <div>
                      <span className="block text-xs text-slate-400">{t.emailLabel}</span>
                      <span className="font-semibold truncate max-w-[180px] sm:max-w-[200px] block">info@marsaalamlocalguide.com</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* بطاقة الفروع */}
            <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700/60 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                {t.locationsTitle}
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 mt-0.5"><FaMapMarkerAlt className="w-4 h-4" /></span>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">{t.headOfficeLabel}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{t.headOfficeAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                  <span className="p-2 rounded-lg bg-teal-500/10 text-teal-600 mt-0.5"><FaClock className="w-4 h-4" /></span>
                  <div>
                    <span className="block text-xs font-bold text-slate-900 dark:text-white">{t.hoursLabel}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{t.hoursValue}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* الجانب الأيمن: Google Maps */}
         <div className="lg:col-span-5 h-[350px] lg:h-auto min-h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700/60 relative group">
            <iframe
              title="Marsa Alam Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.888514937213!2d34.8981!3d25.1345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x143111222333444%3A0x555666777888999!2sMarsa%20Alam%2C%20Red%20Sea%20Governorate!5e0!3m2!1sen!2seg!4v1650000000000!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full transition-all duration-300 dark:invert-[85%]"
            />
            
            <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-800 dark:text-slate-200 pointer-events-none">
              {t.mapBadge}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}