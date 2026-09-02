import { MetadataRoute } from 'next';
import { i18n } from '@/lib/i18n-config';
import { tours } from '@/data/tours';

export default async function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marsa-alam-local-guide-six.vercel.app';
  const staticPages = ['', '/tours', '/liveaboards', '/courses', '/about', '/contact'];

  // توليد الروابط الثابتة لكل لغة
  const staticUrls = i18n.locales.flatMap((lang) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: page === '' ? 1.0 : 0.8,
    }))
  );

  // توليد روابط الرحلات (Tours) لكل لغة بناءً على الـ Slugs
  const tourUrls = i18n.locales.flatMap((lang) =>
    tours.map((tour) => ({
      url: `${baseUrl}/${lang}/tours/${tour.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }))
  );

  return [...staticUrls, ...tourUrls];
}