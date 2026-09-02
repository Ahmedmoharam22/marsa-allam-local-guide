import { Language } from "@/types/tour";

export interface GalleryImage {
  src: string;
  alt: Record<Language, string>;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/brand/gallery-1.webp",
    alt: {
      en: "Dolphin House Marsa Alam",
      de: "Dolphin House Marsa Alam",
      it: "Dolphin House Marsa Alam",
      ru: "Дольфин Хаус Марса-Алам",
      pl: "Dolphin House Marsa Alam",
      cz: "Dolphin House Marsa Alam"
    }
  },
  {
    src: "/images/brand/gallery-2.webp",
    alt: {
      en: "Hamata Islands Red Sea",
      de: "Hamata Inseln Rotes Meer",
      it: "Isole Hamata Mar Rosso",
      ru: "Острова Хамата Красное море",
      pl: "Wyspy Hamata Morze Czerwone",
      cz: "Ostrovy Hamata Rudé moře"
    }
  },
  {
    src: "/images/brand/gallery-3.webp",
    alt: {
      en: "Abu Dabbab Turtle Bay",
      de: "Abu Dabbab Schildkrötenbucht",
      it: "Baia delle Tartarughe Abu Dabbab",
      ru: "Бухта черепах Абу-Даббаб",
      pl: "Zatoka Żółwi Abu Dabbab",
      cz: "Želví zátoka Abu Dabbab"
    }
  },
  {
    src: "/images/brand/gallery-4.webp",
    alt: {
      en: "Marsa Mubarak Dugong & Turtles",
      de: "Marsa Mubarak Dugong & Schildkröten",
      it: "Marsa Mubarak Dugongo e Tartarughe",
      ru: "Марса Мубарак Дюгонь и черепахи",
      pl: "Marsa Mubarak Diugoń i żółwie",
      cz: "Marsa Mubarak Dugong a želvy"
    }
  }
];

export const galleryContent: Record<Language, { badge: string; title: string; subtitle: string }> = {
  en: { badge: "Red Sea Moments", title: "Visual Gallery", subtitle: "A glimpse of the breathtaking underwater world and stunning beaches waiting for you." },
  de: { badge: "Momente am Roten Meer", title: "Bildergalerie", subtitle: "Ein Einblick in die atemberaubende Unterwasserwelt und die traumhaften Strände." },
  it: { badge: "Momenti nel Mar Rosso", title: "Galleria Fotografica", subtitle: "Uno sguardo al mozzafiato mondo sottomarino e alle spiagge meravigliose." },
  ru: { badge: "Моменты Красного моря", title: "Фотогалерея", subtitle: "Взгляд на захватывающий подводный мир и потрясающие пляжи." },
  pl: { badge: "Chwile nad Morzem Czerwonym", title: "Galeria Zdjęć", subtitle: "Przedsmak zapierającego dech w piersiach podwodnego świata i plaż." },
  cz: { badge: "Momenty v Rudém moři", title: "Fotogalerie", subtitle: "Pohled na dechberoucí podmořský svět a úžasné pláže." }
};