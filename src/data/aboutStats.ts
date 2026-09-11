import { Language } from "@/types/tour";

export interface StatItem {
  label: string;
  value: string;
}

export interface CtaText {
  title: string;
  subtitle: string;
  button: string;
}

export const statsData: Record<Language, StatItem[]> = {
  en: [
    { label: "Available Tours", value: "15+" },
    { label: "PADI Courses", value: "4" },
    { label: "Max Group Size", value: "6-8" },
    { label: "Local Support", value: "24/7" },
  ],
  de: [
    { label: "Verfügbare Touren", value: "15+" },
    { label: "PADI Kurse", value: "4" },
    { label: "Max. Gruppengröße", value: "6-8" },
    { label: "Lokaler Support", value: "24/7" },
  ],
  it: [
    { label: "Tour Disponibili", value: "15+" },
    { label: "Corsi PADI", value: "4" },
    { label: "Gruppi Ridotti", value: "6-8" },
    { label: "Supporto Locale", value: "24/7" },
  ],
  ru: [
    { label: "Доступных Туров", value: "15+" },
    { label: "Курсов PADI", value: "4" },
    { label: "Макс. Группа", value: "6-8" },
    { label: "Поддержка", value: "24/7" },
  ],
  pl: [
    { label: "Dostępne Wycieczki", value: "15+" },
    { label: "Kursy PADI", value: "4" },
    { label: "Maks. Grupa", value: "6-8" },
    { label: "Wsparcie Lokalne", value: "24/7" },
  ],
  cz: [
    { label: "Dostupné Výlety", value: "15+" },
    { label: "PADI Kurzy", value: "4" },
    { label: "Max. Skupina", value: "6-8" },
    { label: "Lokální Podpora", value: "24/7" },
  ],
};

export const ctaTexts: Record<Language, CtaText> = {
  en: { 
    title: "Ready for your next adventure?", 
    subtitle: "Explore our handpicked diving and snorkeling tours in Marsa Alam.", 
    button: "Explore Tours" 
  },
  de: { 
    title: "Bereit für Ihr nächstes Abenteuer?", 
    subtitle: "Entdecken Sie unsere ausgewählten Tauch- und Schnorcheltouren in Marsa Alam.", 
    button: "Touren Entdecken" 
  },
  it: { 
    title: "Pronto per la tua prossima avventura?", 
    subtitle: "Esplora i nostri tour di immersioni e snorkeling a Marsa Alam.", 
    button: "Esplora i Tour" 
  },
  ru: { 
    title: "Готовы к новому приключению?", 
    subtitle: "Исследуйте наши лучшие туры для дайвинга и сноркелинга в Марса-Аламе.", 
    button: "Обзор Туров" 
  },
  pl: { 
    title: "Gotowy na kolejną przygodę?", 
    subtitle: "Odkryj nasze wybrane wycieczki nurkowe i snorkelingowe w Marsa Alam.", 
    button: "Odkryj Wycieczki" 
  },
  cz: { 
    title: "Jste připraveni na další dobrodružství?", 
    subtitle: "Prozkoumejte naše potápěčské a šnorchlovací výlety v Marsa Alam.", 
    button: "Prozkoumat Výlety" 
  },
};