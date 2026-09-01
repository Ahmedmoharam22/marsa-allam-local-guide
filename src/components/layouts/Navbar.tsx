'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n-config';
import LanguageSwitcher from '../LanguageSwitcher';
import Logo from '../common/Logo';
import { MessageCircle } from 'lucide-react';

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
    };
    seo: {
      site_name: string;
    };
  };
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if current page is the homepage
  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`;

  // Show solid/frosted navbar background on inner pages or when scrolled > 20px
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

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link
            href={`/${lang}`}
            className={`transition-colors duration-300 ${
              showSolidNav ? 'text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400' : 'text-white/90 hover:text-teal-300'
            }`}
          >
            {dict.nav.home}
          </Link>
          <Link
            href={`/${lang}/tours`}
            className={`transition-colors duration-300 ${
              showSolidNav ? 'text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400' : 'text-white/90 hover:text-teal-300'
            }`}
          >
            {dict.nav.tours}
          </Link>
          <Link
            href={`/${lang}/liveaboards`}
            className={`transition-colors duration-300 ${
              showSolidNav ? 'text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400' : 'text-white/90 hover:text-teal-300'
            }`}
          >
            {dict.nav.liveaboards}
          </Link>
          <Link
            href={`/${lang}/courses`}
            className={`transition-colors duration-300 ${
              showSolidNav ? 'text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400' : 'text-white/90 hover:text-teal-300'
            }`}
          >
            {dict.nav.courses}
          </Link>
          <Link
            href={`/${lang}/about`}
            className={`transition-colors duration-300 ${
              showSolidNav ? 'text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400' : 'text-white/90 hover:text-teal-300'
            }`}
          >
            {dict.nav.about}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className={`transition-colors duration-300 ${
              showSolidNav ? 'text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400' : 'text-white/90 hover:text-teal-300'
            }`}
          >
            {dict.nav.contact}
          </Link>
        </nav>

        {/* Language Switcher & WhatsApp CTA */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLang={lang} isScrolled={showSolidNav} />
          
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold text-white shadow-md transition-all duration-300 ${
              showSolidNav
                ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20'
                : 'bg-emerald-500 hover:bg-emerald-400 shadow-emerald-500/30'
            }`}
          >
            <MessageCircle className="h-4 w-4 fill-current" />
            <span>Book on WhatsApp</span>
          </a>
        </div>

      </div>
    </header>
  );
}