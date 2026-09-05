import dynamic from 'next/dynamic';
import { FeaturesBar } from '@/components/home/FeaturesBar';
import { Hero } from '@/components/home/HeroSection';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n-config';

// Below-the-fold sections: code-split to reduce initial JS bundle
const ToursSection    = dynamic(() => import('@/components/home/ToursSection'));
const AboutGuide    = dynamic(() => import('@/components/home/AboutGuide'));
const GallerySection  = dynamic(() => import('@/components/home/GallerySection'));
const Testimonials    = dynamic(() => import('@/components/home/Testimonials'));
const FAQSection      = dynamic(() => import('@/components/home/FAQSection'));
const CTASection      = dynamic(() => import('@/components/home/CTASection'));
const GetInTouchSection = dynamic(() => import('@/components/home/GetInTouchSection'));

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-screen">
      <Hero lang={lang} dict={dict} />
      <FeaturesBar lang={lang} />
      <ToursSection lang={lang} dict={dict} />
      <AboutGuide lang={lang} />
      <GallerySection lang={lang} />
      <Testimonials lang={lang} />
      <FAQSection lang={lang} />
      <CTASection lang={lang}/>
      <GetInTouchSection lang={lang}/>
    </main>
  );
}