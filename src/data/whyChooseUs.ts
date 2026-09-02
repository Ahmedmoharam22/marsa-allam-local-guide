import { Language } from "@/types/tour";

export interface WhyChooseUsItem {
  title: string;
  description: string;
}

export const whyChooseUsData: Record<Language, { badge: string; title: string; subtitle: string; features: WhyChooseUsItem[] }> = {
  en: {
    badge: "Why Choose Us",
    title: "Your Trusted Partner in Marsa Alam",
    subtitle: "We turn your holiday into unforgettable memories with professional service and local expertise.",
    features: [
      { title: "Certified Local Experts", description: "Licensed professional guides and top-tier safety standards for every single trip." },
      { title: "Best Price Guarantee", description: "No hidden fees, no online payment required. Pay safely after your trip." },
      { title: "Unforgettable Experiences", description: "Carefully curated itineraries to the most stunning spots in the Red Sea." },
      { title: "24/7 Customer Support", description: "We are always here to assist you before, during, and after your excursion." }
    ]
  },
  de: {
    badge: "Warum wir?",
    title: "Ihr vertrauenswürdiger Partner in Marsa Alam",
    subtitle: "Wir machen Ihren Urlaub mit professionellem Service und lokaler Expertise zu unvergesslichen Erinnerungen.",
    features: [
      { title: "Zertifizierte Experten", description: "Lizensierte Guides und höchste Sicherheitsstandards für jeden Ausflug." },
      { title: "Bestpreis-Garantie", description: "Keine versteckten Gebühren, keine Vorauszahlung nötig. Zahlen Sie nach der Reise." },
      { title: "Unvergessliche Erlebnisse", description: "Sorgfältig zusammengestellte Routen zu den schönsten Plätzen des Roten Meeres." },
      { title: "24/7 Kundensupport", description: "Wir sind vor, während und nach Ihrem Ausflug immer für Sie da." }
    ]
  },
  it: {
    badge: "Perché sceglierci",
    title: "Il tuo partner di fiducia a Marsa Alam",
    subtitle: "Trasformiamo la tua vacanza in ricordi indimenticabili con servizi professionali ed esperienza locale.",
    features: [
      { title: "Esperti Locali Certificati", description: "Guide professionistiche autorizzate e standard di sicurezza elevati." },
      { title: "Miglior Prezzo Garantito", description: "Nessun costo nascosto o pagamento anticipato. Paga dopo il viaggio." },
      { title: "Esperienze Indimenticabili", description: "Itinerari curati nei minimi dettagli verso i luoghi più splendidi." },
      { title: "Assistenza 24/7", description: "Siamo sempre a tua disposizione prima, durante e dopo l'escursione." }
    ]
  },
  ru: {
    badge: "Почему выбирают нас",
    title: "Ваш надежный партнер в Марса-Аламе",
    subtitle: "Мы превращаем ваш отдых в незабываемые воспоминания благодаря профессионализму и местному опыту.",
    features: [
      { title: "Сертифицированные гиды", description: "Лицензированные профессиональные гиды и высокие стандарты безопасности." },
      { title: "Гарантия лучшей цены", description: "Никаких скрытых платежей и предоплаты. Оплата после экскурсии." },
      { title: "Незабываемые впечатления", description: "Тщательно продуманные маршруты по самым красивым местам Красного моря." },
      { title: "Поддержка 24/7", description: "Мы всегда на связи до, во время и после вашей поездки." }
    ]
  },
  pl: {
    badge: "Dlaczego my",
    title: "Twój zaufany partner w Marsa Alam",
    subtitle: "Zamieniamy Twoje wakacje w niezapomniane wspomnienia dzięki profesjonalnej obsłudze i lokalnej wiedzy.",
    features: [
      { title: "Certyfikowani Przewodnicy", description: "Licencjonowani przewodnicy i najwyższe standardy bezpieczeństwa." },
      { title: "Gwarancja Najlepszej Ceny", description: "Brak ukrytych opłat i przedpłat. Płacisz bezpiecznie po wycieczce." },
      { title: "Niezapomniane Wrażenia", description: "Starannie zaplanowane trasy do najpiękniejszych miejsc Morza Czerwonego." },
      { title: "Wsparcie 24/7", description: "Jesteśmy do Twojej dyspozycji przed, w trakcie i po wycieczce." }
    ]
  },
  cz: {
    badge: "Proč si vybrat nás",
    title: "Váš spolehlivý partner v Marsa Alam",
    subtitle: "Proměníme vaši dovolenou v nezapomenutelné zážitky díky profesionálním službám a místním znalostem.",
    features: [
      { title: "Certifikovaní průvodci", description: "Licencovaní profesionální průvodci a špičkové bezpečnostní standardy." },
      { title: "Záruka nejlepší ceny", description: "Žádné skryté poplatky ani platba předem. Platíte až po výletu." },
      { title: "Nezapomenutelné zážitky", description: "Pečlivě připravené trasy na nejkrásnější místa Rudého moře." },
      { title: "Zákaznická podpora 24/7", description: "Jsme tu pro vás před, během i po vašem výletu." }
    ]
  }
};