import ImageNext from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n-config';
import { ArrowRight, MessageCircle, Compass, Users, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  lang: Locale;
  dict: {
    hero: {
      welcome: string;
      title_main: string;
      title_sub: string;
      tagline: string;
      description: string;
      cta_whatsapp: string;
      cta_explore: string;
      features: {
        experience_title: string;
        experience_desc: string;
        groups_title: string;
        groups_desc: string;
        safety_title: string;
        safety_desc: string;
        care_title: string;
        care_desc: string;
      };
    };
  };
}

export function Hero({ lang, dict }: HeroProps) {
  const t = dict.hero;

  return (
    <section className="relative flex min-h-[70vh] sm:min-h-[75vh] lg:h-[80vh] max-h-[850px] w-full flex-col justify-between overflow-hidden bg-slate-950 pt-24 pb-14 sm:pt-28 sm:pb-16">
      
      {/* Background Image - Viewport Scaled */}
      <div className="absolute inset-0 z-0">
        <ImageNext
          src="/images/hero/hero.webp"
          alt="Dolphins Marsa Alam Local Guide"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle Dark Overlay to boost readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent rtl:bg-gradient-to-l" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="max-w-xl text-left rtl:text-right">
          
          {/* Tag / Welcome */}
          <span className="font-sans text-xs sm:text-sm font-semibold text-teal-300">
            {t.welcome}
          </span>

          {/* Headline - Serif Font */}
          <h1 className="mt-2 font-serif text-3xl font-normal leading-[1.15] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t.title_main} <br />
            {t.title_sub}
          </h1>

          {/* Subtitle Accent */}
          <p className="mt-3 font-sans text-base font-bold tracking-tight text-white sm:text-xl lg:text-2xl">
            {t.tagline}
          </p>

          {/* Description */}
          <p className="mt-2 max-w-lg font-sans text-xs font-normal leading-relaxed text-slate-200 sm:text-sm lg:text-base">
            {t.description}
          </p>

          {/* CTAs */}
          <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/201080268114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-400 active:scale-95 text-center"
            >
              <MessageCircle className="h-4 w-4 fill-current shrink-0" />
              <span>{t.cta_whatsapp}</span>
            </a>

            <Link
              href={`/${lang}/tours`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-slate-900/40 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 active:scale-95 text-center"
            >
              <span>{t.cta_explore}</span>
              <ArrowRight className="h-4 w-4 rtl:rotate-180 shrink-0" />
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}