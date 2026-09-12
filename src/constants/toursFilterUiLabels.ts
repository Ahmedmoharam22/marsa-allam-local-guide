import type { Language } from "@/types/tour"; 

export interface ToursFilterUiLabel {
  noResults: string;
  all: string;
}

export const toursFilterUiLabels: Record<Language, ToursFilterUiLabel> = {
  en: { 
    noResults: "No tours found.", 
    all: "All Tours" 
  },
  de: { 
    noResults: "Keine Ausflüge gefunden.", 
    all: "Alle Ausflüge" 
  },
  it: { 
    noResults: "Nessun tour trovato.", 
    all: "Tutti i Tour" 
  },
  ru: { 
    noResults: "Экскурсии не найдены.", 
    all: "Все экскурсии" 
  },
  pl: { 
    noResults: "Nie znaleziono wycieczek.", 
    all: "Wszystkie Wycieczki" 
  },
  cz: { 
    noResults: "Žádné výlety nenalezeny.", 
    all: "Všechny výlety" 
  },
  fr: { 
    noResults: "Aucune excursion trouvée.", 
    all: "Toutes les excursions" 
  },
  nl: { 
    noResults: "Geen tours gevonden.", 
    all: "Alle Tours" 
  },
  hu: { 
    noResults: "Nem található túra.", 
    all: "Minden túra" 
  },
};