import type { Language } from "@/types/tour";

export interface ScubaDivingTitle {
  title: string;
  subtitle: string;
}

export const scubaDivingLabels: Record<Language, ScubaDivingTitle> = {
  en: { 
    title: "Scuba Diving Trips", 
    subtitle: "Discover world-class coral reefs and marine life in Marsa Alam" 
  },
  de: { 
    title: "Tauchausflüge", 
    subtitle: "Entdecken Sie weltklasse Korallenriffe und Meereslebewesen in Marsa Alam" 
  },
  it: { 
    title: "Immersioni Subacquee", 
    subtitle: "Scopri barriere coralline di livello mondiale e vita marina a Marsa Alam" 
  },
  ru: { 
    title: "Дайвинг Поездки", 
    subtitle: "Откройте для себя коралловые рифы и морскую жизнь Марса-Алама" 
  },
  pl: { 
    title: "Wycieczki Nurkowe", 
    subtitle: "Odkryj światowej klasy rafy koralowe i życie morskie w Marsa Alam" 
  },
  cz: { 
    title: "Potápěčské Výlety", 
    subtitle: "Objevte světoznámé koralové útesy a mořský život v Marsa Alam" 
  },
  fr: { 
    title: "Excursions de Plongée Sous-Marine", 
    subtitle: "Découvrez des récifs coralliens et une vie marine de classe mondiale à Marsa Alam" 
  },
  nl: { 
    title: "Duikuitstapjes", 
    subtitle: "Ontdek koraalriffen van wereldklasse en het onderwaterleven in Marsa Alam" 
  },
  hu: { 
    title: "Búvárutak", 
    subtitle: "Fedezze fel Marsa Alam világszínvonalú korallzátonyait és tengeri élővilágát" 
  },
};