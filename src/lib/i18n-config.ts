export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'de', 'pl', 'it', 'cz', 'ru', 'fr', 'nl', 'hu'],
} as const;

export type Locale = (typeof i18n.locales)[number];

export const languages: Record<Locale, { name: string; flag: string }> = {
  en: { name: 'English', flag: '🇬🇧' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  pl: { name: 'Polski', flag: '🇵🇱' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  cz: { name: 'Čeština', flag: '🇨🇿' },
  ru: { name: 'Русский', flag: '🇷🇺' },
  fr: { name: 'Français', flag: '🇫🇷' },
  nl: { name: 'Nederlands', flag: '🇳🇱' },
  hu: { name: 'Magyar', flag: '🇭🇺' },
};