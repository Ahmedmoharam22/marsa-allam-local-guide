import Link from 'next/link';
import type { Locale } from '@/lib/i18n-config';

interface FooterProps {
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

export default function Footer({ lang, dict }: FooterProps) {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {dict.seo.site_name}
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <Link href={`/${lang}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {dict.nav.home}
            </Link>
            <Link href={`/${lang}/tours`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {dict.nav.tours}
            </Link>
            <Link href={`/${lang}/liveaboards`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {dict.nav.liveaboards}
            </Link>
            <Link href={`/${lang}/courses`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {dict.nav.courses}
            </Link>
            <Link href={`/${lang}/about`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {dict.nav.about}
            </Link>
          </nav>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {dict.seo.site_name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}