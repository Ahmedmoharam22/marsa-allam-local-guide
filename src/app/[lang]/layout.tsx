import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans, Playfair_Display } from 'next/font/google';
import '@/app/globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n-config';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';

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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// Default Metadata Baseline for Core SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://deepsouthdiverseg.com'),
  title: {
    default: 'Marsa Alam Local Guide | Scuba Diving & Sea Trips',
    template: '%s | Marsa Alam Local Guide',
  },
  description:
    'Discover top-rated diving spots, Sataya dolphin reefs, Liveaboard safari cruises, and local excursion guides in Marsa Alam, Red Sea.',
  keywords: [
    'Marsa Alam Diving',
    'Red Sea Liveaboard',
    'Sataya Dolphin Reef',
    'Scuba Diving Egypt',
    'Marsa Alam Excursions',
  ],
  authors: [{ name: 'Deep South Divers' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepsouthdiverseg.com',
    title: 'Marsa Alam Local Guide | Premium Sea & Diving Trips',
    description:
      'Book wild dolphin snorkeling, PADI diving courses, and VIP sea safaris in Marsa Alam.',
    siteName: 'Marsa Alam Local Guide',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marsa Alam Scuba Diving & Red Sea Safaris',
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
        inter.variable,
        notoSans.variable,
        playfairDisplay.variable,
        'scroll-smooth'
      )}
    >
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