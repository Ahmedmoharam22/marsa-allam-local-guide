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
  const [isPastHero, setIsPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  useEffect(() => {
    if (!isHome) {
      setIsPastHero(true);
      return;
    }

    const checkHeroVisibility = () => {
      const heroElement = document.getElementById('hero');
      if (!heroElement) {
        setIsPastHero(window.scrollY > 400);
        return;
      }
      const rect = heroElement.getBoundingClientRect();
      setIsPastHero(rect.bottom <= 80);
    };

    const heroElement = document.getElementById('hero');
    let observer: IntersectionObserver | null = null;

    if (heroElement && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry) {
            if (entry.isIntersecting) {
              setIsPastHero(false);
            } else {
              setIsPastHero(entry.boundingClientRect.bottom <= 80);
            }
          }
        },
        { threshold: 0 }
      );
      observer.observe(heroElement);
    }

    checkHeroVisibility();

    window.addEventListener('scroll', checkHeroVisibility, { passive: true });
    window.addEventListener('resize', checkHeroVisibility, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', checkHeroVisibility);
      window.removeEventListener('resize', checkHeroVisibility);
    };
  }, [isHome, pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, isPageRoute: boolean = false) => {
    setMobileMenuOpen(false);

    if (isPageRoute) return;

    e.preventDefault();
    if (isHome) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      router.push(`/${lang}#${targetId}`);
    }
  };

  const whatsappText = dict?.nav?.whatsappCta || 'Book on WhatsApp';
  const inquiryText = whatsappInquiryMessages[lang] || whatsappInquiryMessages.en;
  const whatsappUrl = `https://wa.me/201080268114?text=${encodeURIComponent(inquiryText)}`;

  const navLinks = [
    { key: 'home', label: dict.nav.home, href: `/${lang}`, target: 'hero', isPage: false },
    { key: 'tours', label: dict.nav.tours, href: `/${lang}/tours`, target: 'tours', isPage: true },
    { key: 'liveaboards', label: dict.nav.liveaboards, href: `/${lang}#liveaboards`, target: 'liveaboards', isPage: false },
    { key: 'courses', label: dict.nav.courses, href: `/${lang}/tours`, target: 'tours', isPage: true },
    { key: 'about', label: dict.nav.about, href: `/${lang}#about`, target: 'about', isPage: false },
    { key: 'blogs', label: dict.nav.blogs || 'Blogs', href: `/${lang}/blogs`, target: 'blogs', isPage: true },
  ];

  const isTransparent = isHome && !isPastHero;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent py-5'
          : 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-200/60 dark:border-slate-800/60'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo Component */}
        <div className={isTransparent ? "drop-shadow-md" : ""}>
          <Logo lang={lang} isScrolled={!isTransparent} />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.target, link.isPage)}
              className={`transition-colors duration-200 ${
                isTransparent
                  ? "text-white hover:text-teal-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                  : "text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher & WhatsApp CTA (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className={isTransparent ? "drop-shadow-md" : ""}>
            <LanguageSwitcher currentLang={lang} isScrolled={!isTransparent} />
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg transition hover:bg-emerald-400 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            <span>{whatsappText}</span>
          </a>
        </div>

        {/* Mobile Action Hub */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher currentLang={lang} isScrolled={!isTransparent} />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl transition-colors ${
              isTransparent
                ? 'text-white bg-black/20 backdrop-blur-sm'
                : 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800'
            }`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
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