import { Language } from "@/types/tour";

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  topBanner: string;
  title: string;
  subtitle: string;
  features: WhyChooseUsItem[];
}

export const whyChooseUsData: Record<Language, WhyChooseUsData> = {
  en: {
    topBanner: "Pay after your trip — no upfront payment.",
    title: "Why Choose Us",
    subtitle: "We turn your holiday into unforgettable memories with professional service and local expertise.",
    features: [
      { title: "Pay After Your Trip", description: "No upfront payment" },
      { title: "Safety First", description: "Professional service" },
      { title: "Direct Local Support", description: "Talk directly with a local" },
      { title: "Small & Personal", description: "Relaxed experiences with smaller groups" }
    ]
  },
  de: {
    topBanner: "Bezahlen Sie nach der Reise — keine Vorauszahlung.",
    title: "Warum uns wählen",
    subtitle: "Wir machen Ihren Urlaub mit professionellem Service und lokaler Expertise unvergesslich.",
    features: [
      { title: "Zahlung nach dem Ausflug", description: "Keine Vorauszahlung" },
      { title: "Sicherheit zuerst", description: "Professioneller Service" },
      { title: "Direkter lokaler Support", description: "Sprechen Sie direkt mit einem Einheimischen" },
      { title: "Klein & Persönlich", description: "Entpannte Erlebnisse in kleinen Gruppen" }
    ]
  },
  it: {
    topBanner: "Paga dopo il viaggio — nessun pagamento anticipato.",
    title: "Perché sceglierci",
    subtitle: "Trasformiamo la tua vacanza in ricordi indimenticabili con servizi professionali.",
    features: [
      { title: "Paga dopo il tuo viaggio", description: "Nessun anticipo richiesto" },
      { title: "Sicurezza al primo posto", description: "Servizio professionale" },
      { title: "Supporto locale diretto", description: "Parla direttamente con un locale" },
      { title: "Piccolo e personale", description: "Esperienze rilassanti con gruppi ridotti" }
    ]
  },
  ru: {
    topBanner: "Оплата после поездки — без предоплаты.",
    title: "Почему выбирают нас",
    subtitle: "Превращаем ваш отдых в незабываемые воспоминания.",
    features: [
      { title: "Оплата после поездки", description: "Без предоплаты" },
      { title: "Безопасность прежде всего", description: "Профессиональный сервис" },
      { title: "Прямая местная поддержка", description: "Общение напрямую с гидом" },
      { title: "Небольшие группы", description: "Уютный отдых в малых группах" }
    ]
  },
  pl: {
    topBanner: "Płatność po wycieczce — bez zaliczek.",
    title: "Dlaczego my",
    subtitle: "Zamieniamy Twoje wakacje w niezapomniane wspomnienia.",
    features: [
      { title: "Płatność po wycieczce", description: "Brak opłat wstępnych" },
      { title: "Bezpieczeństwo na 1. miejscu", description: "Profesjonalna obsługa" },
      { title: "Bezpośrednie wsparcie", description: "Rozmawiaj bezpośrednio z lokalnym przewodnikiem" },
      { title: "Kameralnie i osobiście", description: "Relaksujące wycieczki w małych grupach" }
    ]
  },
  cz: {
    topBanner: "Platba až po výletu — žádná záloha.",
    title: "Proč si vybrat nás",
    subtitle: "Proměníme vaši dovolenou v nezapomenutelné zážitky.",
    features: [
      { title: "Platba až po výletu", description: "Bez platby předem" },
      { title: "Bezpečnost na prvním místě", description: "Profesionální služby" },
      { title: "Přímá místní podpora", description: "Mluvte přímo s místním průvodcem" },
      { title: "Malé skupiny & osobní přístup", description: "Pohodové zážitky v menších skupinách" }
    ]
  }
};