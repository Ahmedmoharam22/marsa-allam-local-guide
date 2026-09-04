'use client';

import { useState, useEffect } from 'react';
import { Language } from '@/types/tour';
import { FaArrowUp } from 'react-icons/fa';

interface ScrollToTopProps {
  lang: Language;
  tooltipText?: string;
}

const defaultTranslations: Record<Language, string> = {
  en: "Scroll to top",
  de: "Nach oben scrollen",
  ru: "Наверх",
  pl: "Przewiń do góry",
  cz: "Přejít nahoru",
  it: "Torna su",
};

export default function ScrollToTop({ lang, tooltipText }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const toggleVisibility = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > 800);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const label = tooltipText || defaultTranslations[lang] || defaultTranslations.en;

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label={label}
      className="fixed cursor-pointer bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-slate-900 text-white border border-slate-800 rounded-full shadow-2xl hover:bg-teal-600 hover:border-teal-500 hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-teal-500/40 animate-in fade-in zoom-in duration-300"
    >
      <FaArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
      
      {/* Tooltip */}
      <span className="absolute right-14 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-slate-800">
        {label}
      </span>
    </button>
  );
}