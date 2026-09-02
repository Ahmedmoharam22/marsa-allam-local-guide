import { Language } from "@/types/tour";

export const getInTouchData: Record<Language, {
  badge: string;
  title: string;
  subtitle: string;
  contactInfoTitle: string;
  whatsappLabel: string;
  phoneLabel: string;
  emailLabel: string;
  locationsTitle: string;
  headOfficeLabel: string;
  headOfficeAddress: string;
  hoursLabel: string;
  hoursValue: string;
  mapBadge: string;
}> = {
  en: {
    badge: "Contact Us",
    title: "Get In Touch",
    subtitle: "Have questions or ready to book your next adventure? We're here to help!",
    contactInfoTitle: "Contact Info",
    whatsappLabel: "Whatsapp",
    phoneLabel: "Phone Number",
    emailLabel: "Email Address",
    locationsTitle: "Our Locations",
    headOfficeLabel: "Head Office",
    headOfficeAddress: "68 street, Downtown, Marsa Alam, Red Sea",
    hoursLabel: "Operating Hours",
    hoursValue: "Daily: 8:00 AM - 6:00 PM",
    mapBadge: "📍 Marsa Alam, Red Sea, Egypt"
  },
  de: {
    badge: "Kontakt",
    title: "In Kontakt treten",
    subtitle: "Haben Sie Fragen oder sind Sie bereit für Ihr nächstes Abenteuer? Wir helfen Ihnen gerne!",
    contactInfoTitle: "Kontaktinformationen",
    whatsappLabel: "WhatsApp",
    phoneLabel: "Telefonnummer",
    emailLabel: "E-Mail-Adresse",
    locationsTitle: "Unsere Standorte",
    headOfficeLabel: "Hauptsitz",
    headOfficeAddress: "68 street, Downtown, Marsa Alam, Rotes Meer",
    hoursLabel: "Öffnungszeiten",
    hoursValue: "Täglich: 8:00 - 18:00 Uhr",
    mapBadge: "📍 Marsa Alam, Rotes Meer, Ägypten"
  },
  it: {
    badge: "Contattaci",
    title: "Mettiti in Contatto",
    subtitle: "Hai domande o sei pronto per prenotare la tua prossima avventura? Siamo qui per aiutarti!",
    contactInfoTitle: "Informazioni di Contatto",
    whatsappLabel: "Whatsapp",
    phoneLabel: "Numero di Telefono",
    emailLabel: "Indirizzo Email",
    locationsTitle: "Le Nostre Sedi",
    headOfficeLabel: "Sede Centrale",
    headOfficeAddress: "68 street, Downtown, Marsa Alam, Mar Rosso",
    hoursLabel: "Orari di Apertura",
    hoursValue: "Tutti i giorni: 8:00 - 18:00",
    mapBadge: "📍 Marsa Alam, Mar Rosso, Egitto"
  },
  ru: {
    badge: "Свяжитесь с нами",
    title: "Свяжитесь с нами",
    subtitle: "Есть вопросы или готовы забронировать приключение? Мы здесь, чтобы помочь!",
    contactInfoTitle: "Контактная информация",
    whatsappLabel: "Whatsapp",
    phoneLabel: "Номер телефона",
    emailLabel: "Эл. почта",
    locationsTitle: "Наши офисы",
    headOfficeLabel: "Главный офис",
    headOfficeAddress: "68 street, Downtown, Marsa Alam, Red Sea",
    hoursLabel: "Часы работы",
    hoursValue: "Ежедневно: 8:00 - 18:00",
    mapBadge: "📍 Марса-Алам, Красное море, Египет"
  },
  pl: {
    badge: "Skontaktuj się",
    title: "Bądź w Kontakcie",
    subtitle: "Masz pytania lub chcesz zarezerwować przygodę? Jesteśmy tutaj, aby pomóc!",
    contactInfoTitle: "Informacje kontaktowe",
    whatsappLabel: "Whatsapp",
    phoneLabel: "Numer telefonu",
    emailLabel: "Adres e-mail",
    locationsTitle: "Nasze lokalizacje",
    headOfficeLabel: "Siedziba główna",
    headOfficeAddress: "68 street, Downtown, Marsa Alam, Morze Czerwone",
    hoursLabel: "Godziny pracy",
    hoursValue: "Codziennie: 8:00 - 18:00",
    mapBadge: "📍 Marsa Alam, Morze Czerwone, Egipt"
  },
  cz: {
    badge: "Kontaktujte nás",
    title: "Spojte se s námi",
    subtitle: "Máte otázky nebo jste připraveni rezervovat si dobrodružství? Jsme tu pro vás!",
    contactInfoTitle: "Kontaktní informace",
    whatsappLabel: "Whatsapp",
    phoneLabel: "Telefonní číslo",
    emailLabel: "E-mailová adresa",
    locationsTitle: "Naše pobočky",
    headOfficeLabel: "Hlavní sídlo",
    headOfficeAddress: "68 street, Downtown, Marsa Alam, Rudé moře",
    hoursLabel: "Otevírací doba",
    hoursValue: "Denně: 8:00 - 18:00",
    mapBadge: "📍 Marsa Alam, Rudé moře, Egypt"
  }
};