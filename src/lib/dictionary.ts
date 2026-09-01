import 'server-only';
import type { Locale } from './i18n-config';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  pl: () => import('@/dictionaries/pl.json').then((module) => module.default),
  it: () => import('@/dictionaries/it.json').then((module) => module.default),
  cz: () => import('@/dictionaries/cz.json').then((module) => module.default),
  ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};