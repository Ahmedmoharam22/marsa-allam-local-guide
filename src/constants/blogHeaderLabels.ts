import type { Language } from "@/types/tour"; 

export interface BlogHeaderLabel {
  title: string;
  subtitle: string;
  readMore: string;
}

export const blogHeaderLabels: Record<Language, BlogHeaderLabel> = {
  en: { 
    title: "Our Travel & Diving Blog", 
    subtitle: "Tips, guides, and stories from the heart of the Red Sea.", 
    readMore: "Read More" 
  },
  de: { 
    title: "Unser Reise- & Tauchblog", 
    subtitle: "Tipps, Guides und Geschichten aus dem Herzen des Roten Meeres.", 
    readMore: "Weiterlesen" 
  },
  it: { 
    title: "Il nostro Blog di Viaggi e Immersioni", 
    subtitle: "Consigli, guide e storie dal cuore del Mar Rosso.", 
    readMore: "Leggi di più" 
  },
  ru: { 
    title: "Наш блог о путешествиях и дайвинге", 
    subtitle: "Советы, гиды и истории из сердца Красного моря.", 
    readMore: "Читать далее" 
  },
  pl: { 
    title: "Nasz blog podróżniczy i nurkowy", 
    subtitle: "Wskazówki, przewodniki i historie z serca Morza Czerwonego.", 
    readMore: "Czytaj więcej" 
  },
  cz: { 
    title: "Náš blog o cestování a potápění", 
    subtitle: "Tipy, průvodce a příběhy ze srdce Rudého moře.", 
    readMore: "Číst dále" 
  },
  fr: { 
    title: "Notre Blog de Voyage et Plongée", 
    subtitle: "Conseils, guides et histoires au cœur de la Mer Rouge.", 
    readMore: "En savoir plus" 
  },
  nl: { 
    title: "Onze Reis- & Duikblog", 
    subtitle: "Tips, gidsen en verhalen uit het hart van de Rode Zee.", 
    readMore: "Lees meer" 
  },
  hu: { 
    title: "Utazási és Búvár Blogunk", 
    subtitle: "Tippek, útmutatók és történetek a Vörös-tenger szívéből.", 
    readMore: "Olvass tovább" 
  },
};