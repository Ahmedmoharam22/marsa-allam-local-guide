'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { Locale } from '@/lib/i18n-config';
import LanguageSwitcher from '../LanguageSwitcher';
import Logo from '../common/Logo';
import { MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  lang: Locale;
  dict: {
    nav: {
      home: string;
      tours: string;
      liveaboards: string;
      courses: string;
      about: string;
      contact: string;
      blogs?: string;
      whatsappCta?: string;
    };
    seo: {
      site_name: string;
    };
  };
}

const whatsappInquiryMessages: Record<Locale, string> = {
  en: 'Hello! I would like to inquire about tours and bookings in Marsa Alam.',
  de: 'Hallo! Ich möchte mich über Touren und Buchungen in Marsa Alam informieren.',
  it: 'Ciao! Vorrei informazioni sui tour e sulle prenotazioni a Marsa Alam.',
  ru: 'Здравствуйте! Я хотел бы узнать о турах и бронировании в Марса-Аламе.',
  pl: 'Cześć! Chciałbym zapytać o wycieczki i rezerwacje w Marsa Alam.',
  cz: 'Dobrý den! Rád bych se zeptal na výlety a rezervace v Marsa Alam.',
};

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;
  const showSolidNav = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // دالة للتعامل مع الضغط على اللينكات (لو في الهوم بعمل سكرول، لو بره الهوم بيحولني للهوم مع الـ Hash)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, isPageRoute: boolean = false) => {
    setMobileMenuOpen(false);

    if (isPageRoute) {
      // لو صفحة منفصلة مثل tours أو blogs
      return;
    }

    e.preventDefault();
    if (isHome) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/${lang}#${targetId}`);
    }
  };

  const whatsappText = dict?.nav?.whatsappCta || 'Book on WhatsApp';
  const inquiryText = whatsappInquiryMessages[lang] || whatsappInquiryMessages.en;
  const whatsappUrl = `https://wa.me/201001188941?text=${encodeURIComponent(inquiryText)}`;

  const navLinks = [
    { key: 'home', label: dict.nav.home, href: `/${lang}`, target: 'hero', isPage: false },
    { key: 'tours', label: dict.nav.tours, href: `/${lang}/tours`, target: 'tours', isPage: true }, // بتودي صفحة الرحلات
    { key: 'liveaboards', label: dict.nav.liveaboards, href: `/${lang}#liveaboards`, target: 'liveaboards', isPage: false },
    { key: 'courses', label: dict.nav.courses, href: `/${lang}/tours`, target: 'tours', isPage:   true },
    { key: 'about', label: dict.nav.about, href: `/${lang}#about`, target: 'about', isPage: false },
    { key: 'blogs', label: dict.nav.blogs || 'Blogs', href: `/${lang}/blogs`, target: 'blogs', isPage: true }, // صفحة البلوجز الجديدة
    { key: 'contact', label: dict.nav.contact, href: `/${lang}#contact`, target: 'contact', isPage: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        showSolidNav
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800 py-3 text-slate-900 dark:text-white'
          : 'bg-transparent py-5 border-b border-transparent text-white'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Logo
          lang={lang}
          siteName={dict.seo.site_name}
          textColor={showSolidNav ? 'text-slate-900 dark:text-white' : 'text-white'}
          isScrolled={showSolidNav}
        />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.target, link.isPage)}
              className={`transition-colors duration-300 ${
                showSolidNav ? 'text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400' : 'text-white/90 hover:text-teal-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher & WhatsApp CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher currentLang={lang} isScrolled={showSolidNav} />
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white shadow-md transition-all duration-300 ${
              showSolidNav
                ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20'
                : 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/30'
            }`}
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            <span>{whatsappText}</span>
          </a>
        </div>

        {/* Mobile Action Hub (Switcher + Burger Button) */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher currentLang={lang} isScrolled={showSolidNav} />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`p-2 rounded-xl transition-colors ${
              showSolidNav ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800' : 'text-white bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu (Glassmorphism) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-xl px-6 py-6 md:hidden transition-all animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.target, link.isPage)}
                className="text-slate-800 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 py-1 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* WhatsApp CTA inside Mobile Menu */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-xl py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                <span>{whatsappText}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}