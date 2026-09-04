"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Language } from "@/types/tour";
import { footerData } from "@/data/footer";
import { MessageCircle } from "lucide-react";

// Brand icons — not available in lucide-react; using inline SVGs
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
import Logo from "../common/Logo";

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const t = footerData[lang] || footerData.en;
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  // Localized Href Helper: Correctly handles anchor links (/#about, #about) and page links (/blogs)
  const getLocalizedHref = (href: string) => {
    if (!href) return `/${lang}`;
    if (href.startsWith(`/${lang}`)) return href;
    if (href === '/' || href === '/#') return `/${lang}`;
    if (href.startsWith('/#')) return `/${lang}${href.slice(1)}`;
    if (href.startsWith('#')) return `/${lang}${href}`;
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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href="https://wa.me/201080268114" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة (2 عمود) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-cyan-500 pl-3">
              {t.quickLinksTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={getLocalizedHref(link.href)} className="text-slate-400 hover:text-cyan-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الثالث: الرحلات (3 أعمدة) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-cyan-500 pl-3">
              {t.tripsTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.trips.map((trip, idx) => (
                <li key={idx}>
                  <Link href={getLocalizedHref(trip.href)} className="text-slate-400 hover:text-cyan-400 transition-colors line-clamp-1">
                    {trip.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود الرابع: المدونة (3 أعمدة) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide border-l-2 border-cyan-500 pl-3">
              {t.blogTitle}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {t.blogs.map((blog, idx) => (
                <li key={idx}>
                  <Link href={getLocalizedHref(blog.href)} className="text-slate-400 hover:text-cyan-400 transition-colors line-clamp-1">
                    {blog.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* حقوق النشر السفلية والسياسات */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Marsa Alam Local Guide. {t.allRights}</p>
          <div className="flex items-center gap-6">
            <Link href={getLocalizedHref('/privacy')} className="hover:text-slate-400 transition-colors">{t.privacy}</Link>
            <Link href={getLocalizedHref('/terms')} className="hover:text-slate-400 transition-colors">{t.terms}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}