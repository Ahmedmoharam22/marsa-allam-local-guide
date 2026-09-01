import type { Locale } from '@/lib/i18n-config';

export type { Locale };
export type Language = Locale;

export type LocalizedString = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export interface TourItineraryStep {
  step: string; // "01", "02", etc.
  title: LocalizedString;
  description?: LocalizedString;
}

export interface Tour {
  id: string; // "dolphin-house-samadai"
  slug: string; // "dolphin-house-samadai-reef"
  title: LocalizedString;
  subtitle: LocalizedString;
  category: LocalizedString;
  price: {
    amount: number;
    currency: string;
    unit: LocalizedString; // e.g. "per person"
  };
  duration: LocalizedString;
  departure: LocalizedString;
  schedule?: {
    departureTime?: string;
    returnTime?: string;
  };
  overview: LocalizedString;
  highlights: LocalizedList;
  included: LocalizedList;
  notIncluded?: LocalizedList;
  whatToBring: LocalizedList;
  childrenPolicy: {
    under5: LocalizedString;
    from5to10: LocalizedString;
    over10: LocalizedString;
  };
  itinerary: TourItineraryStep[];
  paymentNote: LocalizedString;
  disclaimer: LocalizedString;
  images: {
    featured: string;
    gallery: string[];
  };
}