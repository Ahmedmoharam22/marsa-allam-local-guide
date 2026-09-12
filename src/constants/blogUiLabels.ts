import type { Language } from "@/types/tour"; 

export interface BlogUiText {
  back: string;
  relatedTitle: string;
  readMore: string;
}

export const blogUiLabels: Record<Language, BlogUiText> = {
  en: { 
    back: "Back to Blogs", 
    relatedTitle: "More Stories & Guides", 
    readMore: "Read Article" 
  },
  de: { 
    back: "Zurück zu Blogs", 
    relatedTitle: "Weitere Geschichten & Guides", 
    readMore: "Artikel lesen" 
  },
  it: { 
    back: "Torna ai Blog", 
    relatedTitle: "Altre Storie e Guide", 
    readMore: "Leggi articolo" 
  },
  ru: { 
    back: "Назад к блогам", 
    relatedTitle: "Другие истории и гиды", 
    readMore: "Читать статью" 
  },
  pl: { 
    back: "Powrót do blogów", 
    relatedTitle: "Więcej historii i przewodników", 
    readMore: "Czytaj artykuł" 
  },
  cz: { 
    back: "Zpět na blogy", 
    relatedTitle: "Další příběhy a průvodci", 
    readMore: "Přečíst článek" 
  },
  fr: { 
    back: "Retour aux blogs", 
    relatedTitle: "Plus d'histoires et de guides", 
    readMore: "Lire l'article" 
  },
  nl: { 
    back: "Terug naar blogs", 
    relatedTitle: "Meer verhalen & gidsen", 
    readMore: "Lees artikel" 
  },
  hu: { 
    back: "Vissza a blogokhoz", 
    relatedTitle: "További történetek és útmutatók", 
    readMore: "Cikk elolvasása" 
  },
};