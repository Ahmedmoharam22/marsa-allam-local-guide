import type { Language } from "@/types/tour";

export interface DivingCoursesTitle {
  title: string;
  subtitle: string;
}

export const divingCoursesLabels: Record<Language, DivingCoursesTitle> = {
  en: { 
    title: "Diving Courses", 
    subtitle: "PADI & SSI certified diving courses for all experience levels" 
  },
  de: { 
    title: "Taucherkurse", 
    subtitle: "PADI & SSI zertifizierte Taucherkurse für alle Erfahrungsstufen" 
  },
  it: { 
    title: "Corsi di Immersione", 
    subtitle: "Corsi di immersione certificati PADI e SSI per tutti i livelli" 
  },
  ru: { 
    title: "Курсы Дайвинга", 
    subtitle: "Сертифицированные курсы PADI и SSI для всех уровней" 
  },
  pl: { 
    title: "Kursy Nurkowania", 
    subtitle: "Certyfikowane kursy nurkowania PADI i SSI na wszystkich poziomach" 
  },
  cz: { 
    title: "Kurzy Potápění", 
    subtitle: "Certifikované kurzy potápění PADI a SSI pro všechny úrovně" 
  },
  fr: { 
    title: "Cours de Plongée", 
    subtitle: "Cours de plongée certifiés PADI & SSI pour tous les niveaux" 
  },
  nl: { 
    title: "Duikcursussen", 
    subtitle: "PADI & SSI gecertificeerde duikcursussen voor alle niveaus" 
  },
  hu: { 
    title: "Búvártanfolyamok", 
    subtitle: "PADI és SSI minősített búvártanfolyamok minden tapasztalati szinten" 
  },
};