'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { languages, type Locale } from '@/lib/i18n-config';

interface LanguageSwitcherProps {
  currentLang: Locale;
  isScrolled?: boolean;
}

export default function LanguageSwitcher({ currentLang, isScrolled = false }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: Locale) => {
    setIsOpen(false);
    if (newLocale === currentLang || !pathname) return;

    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');

    router.push(newPath);
  };

  return (
    <div className="relative inline-block text-left rtl:text-right" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
        className={`flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium backdrop-blur-sm min-h-[44px] transition-all duration-300 ${
          isScrolled
            ? 'border-gray-200 bg-gray-50/80 text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200'
            : 'border-white/20 bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        <span>{languages[currentLang]?.flag}</span>
        <span className="uppercase">{currentLang}</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-40 rounded-xl border border-gray-100 bg-white p-1 shadow-lg ring-1 ring-black/5 dark:border-gray-800 dark:bg-gray-900 z-50">
          {(Object.keys(languages) as Locale[]).map((loc) => (
            <button
              key={loc}
              onClick={() => handleLanguageChange(loc)}
              className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left rtl:text-right text-sm transition-colors ${
                currentLang === loc
                  ? 'bg-blue-50 font-semibold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400'
                  : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
              }`}
            >
              <span>{languages[loc].flag}</span>
              <span>{languages[loc].name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}