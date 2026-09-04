import type { Metadata, Viewport } from 'next';
import { Noto_Sans, Playfair_Display } from 'next/font/google';
import '@/app/globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n-config';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';
import JsonLd from '@/components/seo/JsonLd';

// Font Setup with CSS Variables & swap display for 0 CLS
const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});



// Dynamic Metadata Generation for Core SEO & 6 Locales Support
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = await getDictionary(currentLang);
  const baseUrl = 'https://marsa-alam-local-guide-six.vercel.app';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dict.seo?.title || 'Marsa Alam Local Guide | Tours, Liveaboards & Diving',
      template: `%s | ${dict.seo?.site_name || 'Marsa Alam Local Guide'}`,
    },
    description:
      dict.seo?.description ||
      'Explore top-rated Marsa Alam excursions, Red Sea liveaboards, desert safaris, and local travel guides with customized itineraries.',
    keywords: [
      'Marsa Alam Local Guide',
      'Marsa Alam Tours',
      'Red Sea Liveaboard',
      'Sataya Dolphin Reef',
      'Marsa Alam Excursions',
      'Desert Safari Marsa Alam',
    ],
    authors: [{ name: 'Marsa Alam Local Guide Team' }],
    alternates: {
      canonical: `/${currentLang}`,
      languages: {
        en: '/en',
        de: '/de',
        ru: '/ru',
        pl: '/pl',
        cs: '/cz',
        it: '/it',
      },
    },
    openGraph: {
      type: 'website',
      locale: currentLang === 'de' ? 'de_DE' : currentLang === 'ru' ? 'ru_RU' : currentLang === 'pl' ? 'pl_PL' : currentLang === 'it' ? 'it_IT' : 'en_US',
      url: `${baseUrl}/${currentLang}`,
      title: dict.seo?.title || 'Marsa Alam Local Guide | Premium Tours & Sea Adventures',
      description:
        dict.seo?.description ||
        'Discover the best sea trips, desert safaris, and local travel guides in Marsa Alam.',
      siteName: dict.seo?.site_name || 'Marsa Alam Local Guide',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Marsa Alam Local Guide - Tours & Red Sea Adventures',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/icon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico' },
      ],
      apple: '/apple-icon.png',
    },
  };
}

export const viewport: Viewport = {
  themeColor: '#032B45',
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const currentLang = lang as Locale;
  const dict = await getDictionary(currentLang);

  return (
    <html
      lang={currentLang}
      className={cn(
        notoSans.variable,
        playfairDisplay.variable,
        'scroll-smooth'
      )}
    >
      <head>
    <JsonLd />
  </head>
      <body className="font-body bg-background text-foreground flex min-h-screen flex-col antialiased selection:bg-secondary selection:text-white">
        <Navbar lang={currentLang} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer lang={currentLang} />
        <ScrollToTop lang={currentLang} />
        <FloatingWhatsApp lang={currentLang} tooltipText={dict.whatsappTooltip} />
      </body>
    </html>
  );  
}