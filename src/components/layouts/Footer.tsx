import Link from "next/link";
import { Language } from "@/types/tour";
import { footerData } from "@/data/footer";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import Logo from "../common/Logo";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = footerData[lang] || footerData.en;

  // دالة مساعدة لتأكيد إضافة لغة الـ prefix للرابط لو مش موجودة
  const getLocalizedHref = (href: string) => {
    if (!href) return `/${lang}`;
    if (href.startsWith(`/${lang}`)) return href;
    return `/${lang}${href.startsWith('/') ? href : `/${href}`}`;
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* شبكة الأعمدة الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* العمود الأول: الشعار ونبذة مختصرة والسوشيال (4 أعمدة) */}
          <div className="lg:col-span-4 space-y-5">
           <Logo lang={lang} textColor="text-white" isScrolled={false} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.description}
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                <FaYoutube className="w-4 h-4" />
              </a>
              <a href="https://wa.me/201001188941" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all">
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: الكورسات (3 أعمدة) - Coming Soon لو لسه مش صفحات فعلية */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-cyan-500 pl-3">
              {t.coursesTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.courses.map((course, idx) => (
                <li key={idx}>
                  {course.href ? (
                    <Link href={getLocalizedHref(course.href)} className="text-slate-400 hover:text-cyan-400 transition-colors">
                      {course.name}
                    </Link>
                  ) : (
                    <span className="text-slate-600 cursor-not-allowed">
                      {course.name} <span className="text-[10px] text-slate-600">(Soon)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: الرحلات (2.5 عمود) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-cyan-500 pl-3">
              {t.tripsTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.trips.map((trip, idx) => (
                <li key={idx}>
                  <Link href={getLocalizedHref(trip.href)} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {trip.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الرابع: المدونة (2.5 عمود) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-cyan-500 pl-3">
              {t.blogTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.blogs.map((blog, idx) => (
                <li key={idx}>
                  {blog.href ? (
                    <Link href={getLocalizedHref(blog.href)} className="text-slate-400 hover:text-cyan-400 transition-colors">
                      {blog.name}
                    </Link>
                  ) : (
                    <span className="text-slate-600 cursor-not-allowed">
                      {blog.name} <span className="text-[10px] text-slate-600">(Soon)</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* حقوق النشر السفلية والسياسات */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Marsa Alam Local Guide. {t.allRights}</p>
          <div className="flex items-center gap-6">
            <Link href={`/${lang}/privacy`} className="hover:text-slate-400 transition-colors">{t.privacy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-slate-400 transition-colors">{t.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}