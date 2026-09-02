import CTASection from '@/components/home/CTASection';
import FAQSection from '@/components/home/FAQSection';
import { FeaturesBar } from '@/components/home/FeaturesBar';
import GallerySection from '@/components/home/GallerySection';
import GetInTouchSection from '@/components/home/GetInTouchSection';
import { Hero } from '@/components/home/HeroSection';
import Testimonials from '@/components/home/Testimonials';
import ToursSection from '@/components/home/ToursSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n-config';

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
      <FeaturesBar lang={lang} dict={dict} />
      <ToursSection lang={lang} dict={dict} />
      <WhyChooseUs lang={lang} />
      <GallerySection lang={lang} />
      <Testimonials lang={lang} />
      <FAQSection lang={lang} />
      <CTASection lang={lang}/>
      <GetInTouchSection lang={lang}/>
    </main>
  );
}