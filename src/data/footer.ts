import { Language } from "@/types/tour";

export const footerData: Record<Language, {
  description: string;
  quickLinksTitle: string;
  quickLinks: { name: string; href: string }[];
  tripsTitle: string;
  trips: { name: string; href: string }[];
  blogTitle: string;
  blogs: { name: string; href: string }[];
  privacy: string;
  terms: string;
  allRights: string;
}> = {
  en: {
    description: "Your trusted local guide in Marsa Alam, offering professional tours, snorkeling adventures, and unforgettable Red Sea experiences.",
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/#about" },
      { name: "Blog", href: "/blogs" },
      { name: "Contact Us", href: "/#contact" },
    ],
    tripsTitle: "Popular Tours",
    trips: [
      { name: "Abu Dabbab (Turtle Bay)", href: "/tours/abu-dabbab-turtle-bay-snorkeling" },
      { name: "Sunset Horse Riding & Bedouin Night", href: "/tours/sunset-horse-riding-bedouin-night" },
      { name: "Sataya Dolphin Reef", href: "/tours/sataya-reef-dolphin-snorkeling" },
      { name: "Sharm El Luli & Qulaan", href: "/tours/qulaan-mangroves-sharm-el-luli" },
    ],
    blogTitle: "Marsa Alam Blog",
    blogs: [
      { name: "Best Time of Year for Scuba Diving", href: "/blogs/best-time-of-year-for-scuba-diving-in-marsa-alam" },
      { name: "Top 10 Tips for First-Time Divers", href: "/blogs/top-10-tips-for-first-time-divers-in-marsa-alam" },
      { name: "How to Choose the Best Diving Center", href: "/blogs/how-to-choose-the-best-diving-center-in-marsa-alam" },
    ],
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    allRights: "All rights reserved.",
  },
  de: {
    description: "Ihr vertrauenswürdiger lokaler Guide in Marsa Alam bietet professionelle Ausflüge, Schnorchelabenteuer und unvergessliche Erlebnisse am Roten Meer.",
    quickLinksTitle: "Schnelllinks",
    quickLinks: [
      { name: "Startseite", href: "/" },
      { name: "Über uns", href: "/#about" },
      { name: "Blog", href: "/blogs" },
      { name: "Kontakt", href: "/#contact" },
    ],
    tripsTitle: "Beliebte Ausflüge",
    trips: [
      { name: "Abu Dabbab (Schildkrötenbucht)", href: "/tours/abu-dabbab-turtle-bay-snorkeling" },
      { name: "Sonnenuntergangs-Ausritt & Beduinennacht", href: "/tours/sunset-horse-riding-bedouin-night" },
      { name: "Sataya Delfinriff", href: "/tours/sataya-reef-dolphin-snorkeling" },
      { name: "Sharm El Luli & Qulaan", href: "/tours/qulaan-mangroves-sharm-el-luli" },
    ],
    blogTitle: "Marsa Alam Blog",
    blogs: [
      { name: "Beste Reisezeit zum Tauchen", href: "/blogs/best-time-of-year-for-scuba-diving-in-marsa-alam" },
      { name: "Top 10 Tipps für Anfänger", href: "/blogs/top-10-tips-for-first-time-divers-in-marsa-alam" },
      { name: "Wie man das beste Tauchcenter wählt", href: "/blogs/how-to-choose-the-best-diving-center-in-marsa-alam" },
    ],
    privacy: "Datenschutz",
    terms: "Nutzungsbedingungen",
    allRights: "Alle Rechte vorbehalten.",
  },
  it: {
    description: "La tua guida locale di fiducia a Marsa Alam, che offre tour professionali, avventure di snorkeling ed esperienze indimenticabili sul Mar Rosso.",
    quickLinksTitle: "Link Rapidi",
    quickLinks: [
      { name: "Home", href: "/" },
      { name: "Chi Siamo", href: "/#about" },
      { name: "Blog", href: "/blogs" },
      { name: "Contatti", href: "/#contact" },
    ],
    tripsTitle: "Tour Popolari",
    trips: [
      { name: "Abu Dabbab (Baia delle Tartarughe)", href: "/tours/abu-dabbab-turtle-bay-snorkeling" },
      { name: "Cavalcatata al Tramonto e Notte Beduina", href: "/tours/sunset-horse-riding-bedouin-night" },
      { name: "Sataya Barriera dei Delfini", href: "/tours/sataya-reef-dolphin-snorkeling" },
      { name: "Sharm El Luli & Qulaan", href: "/tours/qulaan-mangroves-sharm-el-luli" },
    ],
    blogTitle: "Blog Marsa Alam",
    blogs: [
      { name: "Miglior periodo per immersioni", href: "/blogs/best-time-of-year-for-scuba-diving-in-marsa-alam" },
      { name: "10 consigli per principianti", href: "/blogs/top-10-tips-for-first-time-divers-in-marsa-alam" },
      { name: "Come scegliere il miglior centro sub", href: "/blogs/how-to-choose-the-best-diving-center-in-marsa-alam" },
    ],
    privacy: "Politica sulla Privacy",
    terms: "Termini di Servizio",
    allRights: "Tutti i diritti riservati.",
  },
  ru: {
    description: "Ваш надежный местный гид в Марса-Аламе: профессиональные экскурсии, снорклинг и незабываемые впечатления на Красном море.",
    quickLinksTitle: "Быстрые ссылки",
    quickLinks: [
      { name: "Главная", href: "/" },
      { name: "О нас", href: "/#about" },
      { name: "Блог", href: "/blogs" },
      { name: "Контакты", href: "/#contact" },
    ],
    tripsTitle: "Популярные туры",
    trips: [
      { name: "Абу-Дабаб (Черепаший залив)", href: "/tours/abu-dabbab-turtle-bay-snorkeling" },
      { name: "Конная прогулка на закате и Бедуинская ночь", href: "/tours/sunset-horse-riding-bedouin-night" },
      { name: "Риф дельфинов Сатая", href: "/tours/sataya-reef-dolphin-snorkeling" },
      { name: "Шарм-эль-Lули и Кулаан", href: "/tours/qulaan-mangroves-sharm-el-luli" },
    ],
    blogTitle: "Блог Марса-Алама",
    blogs: [
      { name: "Лучшее время для дайвинга", href: "/blogs/best-time-of-year-for-scuba-diving-in-marsa-alam" },
      { name: "10 советов новичкам", href: "/blogs/top-10-tips-for-first-time-divers-in-marsa-alam" },
      { name: "Как выбрать дайв-центр", href: "/blogs/how-to-choose-the-best-diving-center-in-marsa-alam" },
    ],
    privacy: "Политика конфиденциальности",
    terms: "Условия обслуживания",
    allRights: "Все права защищены.",
  },
  pl: {
    description: "Twój zaufany lokalny przewodnik w Marsa Alam, oferujący profesjonalne wycieczki, przygody ze snorkelingiem i niezapomniane wrażenia.",
    quickLinksTitle: "Szybkie linki",
    quickLinks: [
      { name: "Strona Główna", href: "/" },
      { name: "O nas", href: "/#about" },
      { name: "Blog", href: "/blogs" },
      { name: "Kontakt", href: "/#contact" },
    ],
    tripsTitle: "Popularne wycieczki",
    trips: [
      { name: "Abu Dabbab (Zatoka Żółwi)", href: "/tours/abu-dabbab-turtle-bay-snorkeling" },
      { name: "Jazda konna o zachodzie słońca i Noc Beduńska", href: "/tours/sunset-horse-riding-bedouin-night" },
      { name: "Rafa Delfinów Sataya", href: "/tours/sataya-reef-dolphin-snorkeling" },
      { name: "Sharm El Luli & Qulaan", href: "/tours/qulaan-mangroves-sharm-el-luli" },
    ],
    blogTitle: "Blog Marsa Alam",
    blogs: [
      { name: "Najlepszy czas na nurkowanie", href: "/blogs/best-time-of-year-for-scuba-diving-in-marsa-alam" },
      { name: "10 wskazówek dla początkujących", href: "/blogs/top-10-tips-for-first-time-divers-in-marsa-alam" },
      { name: "Jak wybrać najlepsze centrum nurkowe", href: "/blogs/how-to-choose-the-best-diving-center-in-marsa-alam" },
    ],
    privacy: "Polityka prywatności",
    terms: "Regulamin",
    allRights: "Wszelkie prawa zastrzeżone.",
  },
  cz: {
    description: "Váš důvěryhodný místní průvodce v Marsa Alam, který nabízí profesionální výlety, šnorchlování a nezapomenutelné zážitky.",
    quickLinksTitle: "Rychlé odkazy",
    quickLinks: [
      { name: "Domů", href: "/" },
      { name: "O nás", href: "/#about" },
      { name: "Blog", href: "/blogs" },
      { name: "Kontakt", href: "/#contact" },
    ],
    tripsTitle: "Oblíbené výlety",
    trips: [
      { name: "Abu Dabbab (Želví zátoka)", href: "/tours/abu-dabbab-turtle-bay-snorkeling" },
      { name: "Jízda na koni při západu slunce a Beduínská noc", href: "/tours/sunset-horse-riding-bedouin-night" },
      { name: "Delfíní útes Sataya", href: "/tours/sataya-reef-dolphin-snorkeling" },
      { name: "Sharm El Luli & Qulaan", href: "/tours/qulaan-mangroves-sharm-el-luli" },
    ],
    blogTitle: "Blog Marsa Alam",
    blogs: [
      { name: "Nejlepší čas na potápění", href: "/blogs/best-time-of-year-for-scuba-diving-in-marsa-alam" },
      { name: "10 tipů pro začátečníky", href: "/blogs/top-10-tips-for-first-time-divers-in-marsa-alam" },
      { name: "Jak vybrat nejlepší centrum", href: "/blogs/how-to-choose-the-best-diving-center-in-marsa-alam" },
    ],
    privacy: "Zásady ochrany osobních údajů",
    terms: "Podmínky služby",
    allRights: "Všechna práva vyhrazena.",
  },
};