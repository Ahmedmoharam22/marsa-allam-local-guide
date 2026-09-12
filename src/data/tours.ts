export * from "./tours/index";
export { default } from "./tours/index";

// import { Tour } from '@/types/tour';

// export const tours: Tour[] = [
//   {
//     id: "dolphin-house-samadai",
//     slug: "dolphin-house-samadai-reef",
//     type: 'snorkeling',
//     title: {
//       en: "Dolphin House (Samadai Reef)",
//       de: "Delfinhaus (Samadai-Riff)",
//       it: "Dolphin House (Samadai Reef)",
//       ru: "Дом дельфинов (Риф Самадай)",
//       pl: "Dolphin House (Rafa Samadai)",
//       cz: "Dolphin House (Útes Samadai)"
//     },
//     subtitle: {
//       en: "Dolphin & Snorkeling Experience",
//       de: "Delfin- & Schnorchelerlebnis",
//       it: "Esperienza di Snorkeling e Delfini",
//       ru: "Плавание с дельфинами и снорклинг",
//       pl: "Przygoda z delfinami i snorkeling",
//       cz: "Zážitek s delfíny a šnorchlování"
//     },
//     category: {
//       en: "Water Adventures",
//       de: "Wasserabenteuer",
//       it: "Avventure in Acqua",
//       ru: "Морские приключения",
//       pl: "Przygody Wodne",
//       cz: "Vodní dobrodružství"
//     },
//     price: {
//       amount: 75,
//       currency: "€",
//       unit: {
//         en: "per person",
//         de: "pro Person",
//         it: "per persona",
//         ru: "за человека",
//         pl: "za osobę",
//         cz: "za osobu"
//       }
//     },
//     duration: {
//       en: "Full Day",
//       de: "Ganztägig",
//       it: "Intera giornata",
//       ru: "Полный день",
//       pl: "Cały dzień",
//       cz: "Celý den"
//     },
//     departure: {
//       en: "Marsa Alam Marina",
//       de: "Marina Marsa Alam",
//       it: "Marina di Marsa Alam",
//       ru: "Марина Марса-Алам",
//       pl: "Marina Marsa Alam",
//       cz: "Marina Marsa Alam"
//     },
//     overview: {
//       en: "Spend a full day exploring the famous Dolphin House (Samadai Reef), with crystal-clear water, colorful coral reefs, and the chance to experience dolphins in their natural environment. Enjoy 2 snorkeling sessions during the trip.",
//       de: "Verbringen Sie einen ganzen Tag damit, das berühmte Delfinhaus (Samadai-Riff) zu erkunden, mit kristallklarem Wasser, bunten Korallenriffen und der Chance, Delfine in ihrer natürlichen Umgebung zu erleben.",
//       it: "Trascorri un'intera giornata esplorando la famosa Dolphin House (Samadai Reef), con acque cristalline, barriere coralline colorate e la possibilità di avvistare i delfini nel loro ambiente naturale.",
//       ru: "Проведите полный день, исследуя знаменитый Дом Дельфинов (риф Самадай) с кристально чистой водой, красочными коралловыми рифами и возможностью увидеть дельфинов в их естественной среде.",
//       pl: "Spędź cały dzień na odkrywaniu słynnego Dolphin House (Rafa Samadai) z krystalicznie czystą wodą, kolorowymi rafami koralowymi i szansą na spotkanie delfinów w ich naturalnym środowisku.",
//       cz: "Strávíte celý den objevováním slavného Dolphin House (útes Samadai) s průzračnou vodou, barevnými koralovými útesy a možností vidět delfíny v jejich přirozeném prostředí."
//     },
//     highlights: {
//       en: [
//         "Dolphin watching & snorkeling",
//         "1st snorkeling session in the dolphin area",
//         "2nd snorkeling session at the coral reefs",
//         "Chance to see and swim with wild dolphins",
//         "Beautiful coral reefs & marine life",
//         "Boat trip from Marsa Alam Marina",
//         "Lunch onboard",
//         "Hot & cold drinks"
//       ],
//       de: [
//         "Delfinbeobachtung & Schnorcheln",
//         "1. Schnorchelgang im Delfingebiet",
//         "2. Schnorchelgang am Korallenriff",
//         "Chance, wilde Delfine zu sehen und mit ihnen zu schwimmen",
//         "Wunderschöne Korallenriffe & Unterwasserwelt",
//         "Bootsfahrt ab Marina Marsa Alam",
//         "Mittagessen an Bord",
//         "Warme & kalte Getränke"
//       ],
//       it: [
//         "Avvistamento delfini e snorkeling",
//         "Prima sessione di snorkeling nell'area dei delfini",
//         "Seconda sessione di snorkeling sulla barriera corallina",
//         "Possibilità di vedere e nuotare con delfini selvatici",
//         "Meravigliose barriere coralline e vita marina",
//         "Gita in barca dalla Marina di Marsa Alam",
//         "Pranzo a bordo",
//         "Bevande calde e fredde"
//       ],
//       ru: [
//         "Наблюдение за дельфинами и снорклинг",
//         "1-е погружение с маской в зоне дельфинов",
//         "2-е погружение на коралловом рифе",
//         "Шанс увидеть диких дельфинов и поплавать с ними",
//         "Красивые коралловые рифы и морская жизнь",
//         "Прогулка на яхте из Марины Марса-Алам",
//         "Обед на борту",
//         "Горячие и холодные напитки"
//       ],
//       pl: [
//         "Obserwacja delfinów i snorkeling",
//         "Pierwsze nurkowanie z rurką w rejonie delfinów",
//         "Drugie nurkowanie z rurką przy rafie koralowej",
//         "Szansa na zobaczenie i pływanie z dzikimi delfinami",
//         "Piękne rafy koralowe i życie morskie",
//         "Rejs statkiem z Mariny Marsa Alam",
//         "Obiad na pokładzie",
//         "Gorące i zimne napoje"
//       ],
//       cz: [
//         "Pozorování delfínů a šnorchlování",
//         "1. šnorchlování v oblasti delfínů",
//         "2. šnorchlování u koralových útesů",
//         "Šance vidět a plavat s divokými delfíny",
//         "Krásné koralové útesy a mořský život",
//         "Výlet lodí z Mariny Marsa Alam",
//         "Oběd na palubě",
//         "Teplé a studené nápoje"
//       ]
//     },
//     included: {
//       en: [
//         "Hotel pickup & drop-off",
//         "Boat trip",
//         "Full snorkeling equipment",
//         "Professional guide",
//         "2 snorkeling sessions",
//         "Lunch onboard",
//         "Hot & cold drinks and water"
//       ],
//       de: [
//         "Abholung & Rückbringung zum Hotel",
//         "Bootsfahrt",
//         "Komplette Schnorchelausrüstung",
//         "Professioneller Guide",
//         "2 Schnorchelgänge",
//         "Mittagessen an Bord",
//         "Warme & kalte Getränke sowie Wasser"
//       ],
//       it: [
//         "Transfer da e per l'hotel",
//         "Gita in barca",
//         "Attrezzatura completa da snorkeling",
//         "Guida professionale",
//         "2 sessioni di snorkeling",
//         "Pranzo a bordo",
//         "Bevande calde, fredde e acqua"
//       ],
//       ru: [
//         "Трансфер из отеля и обратно",
//         "Прогулка на яхте",
//         "Полное снаряжение для снорклинга",
//         "Профессиональный гид",
//         "2 сеанса снорклинга",
//         "Обед на борту",
//         "Горячие, холодные напитки и вода"
//       ],
//       pl: [
//         "Odbiór i powrót do hotelu",
//         "Rejs statkiem",
//         "Pełny sprzęt do snorkelingu",
//         "Profesjonalny przewodnik",
//         "2 sesje snorkelingu",
//         "Obiad na pokładzie",
//         "Zimne i gorące napoje oraz woda"
//       ],
//       cz: [
//         "Vyzvednutí a návrat do hotelu",
//         "Výlet lodí",
//         "Kompletní vybavení na šnorchlování",
//         "Profesionální průvodce",
//         "2 šnorchlovací relace",
//         "Oběd na palubě",
//         "Teplé a studené nápoje, voda"
//       ]
//     },
//     whatToBring: {
//       en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
//       de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
//       it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
//       ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
//       pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
//       cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
//     },
//     childrenPolicy: {
//       under5: {
//         en: "Under 5 years: Free",
//         de: "Unter 5 Jahren: Kostenlos",
//         it: "Sotto i 5 anni: Gratuito",
//         ru: "До 5 лет: Бесплатно",
//         pl: "Poniżej 5 lat: Bezpłatnie",
//         cz: "Pod 5 let: Zdarma"
//       },
//       from5to10: {
//         en: "5–10 years: 50% of adult price",
//         de: "5–10 Jahre: 50% des Erwachsenenpreises",
//         it: "5–10 anni: 50% del prezzo adulti",
//         ru: "5–10 лет: 50% от стоимости взрослого",
//         pl: "5–10 lat: 50% ceny dorosłego",
//         cz: "5–10 let: 50 % z ceny dospělého"
//       },
//       over10: {
//         en: "Over 10 years: Full adult price",
//         de: "Über 10 Jahre: Voller Erwachsenenpreis",
//         it: "Oltre i 10 anni: Prezzo intero adulto",
//         ru: "Старше 10 лет: Полная стоимость",
//         pl: "Powyżej 10 lat: Pełna cena",
//         cz: "Nad 10 let: Plná cena"
//       }
//     },
//   itinerary: [
//   {
//     step: "01",
//     title: {
//       en: "Hotel Pickup",
//       de: "Hotelabholung",
//       it: "Pickup dall'Hotel",
//       ru: "Трансфер из отеля",
//       pl: "Odbiór z hotelu",
//       cz: "Vyzvednutí v hotelu"
//     },
//     description: {
//       en: "07:30 — Pickup from your hotel in a jeep and land cruiser.",
//       de: "07:30 — Abholung vom Hotel im Jeep und Land Cruiser.",
//       it: "07:30 — Pickup dal tuo hotel in jeep e land cruiser.",
//       ru: "07:30 — Трансфер из вашего отеля на джипе и Land Cruiser.",
//       pl: "07:30 — Odbiór z hotelu dżipem i Land Cruiserem.",
//       cz: "07:30 — Vyzvednutí z vašeho hotelu v jeepu a Land Cruiseru."
//     }
//   },
//   {
//     step: "02",
//     title: {
//       en: "Marsa Alam Marina",
//       de: "Marina Marsa Alam",
//       it: "Marina di Marsa Alam",
//       ru: "Марина Марса-Алам",
//       pl: "Marina Marsa Alam",
//       cz: "Marina Marsa Alam"
//     },
//     description: {
//       en: "Departure from the marina.",
//       de: "Abfahrt von der Marina.",
//       it: "Partenza dalla marina.",
//       ru: "Отправление из марины.",
//       pl: "Wypłynięcie z mariny.",
//       cz: "Odjezd z mariny."
//     }
//   },
//   {
//     step: "03",
//     title: {
//       en: "Boat Trip",
//       de: "Bootsfahrt",
//       it: "Gita in Barca",
//       ru: "Морская прогулка",
//       pl: "Rejs Statkiem",
//       cz: "Plavba lodí"
//     },
//     description: {
//       en: "Cruise toward Dolphin House (Samadai Reef).",
//       de: "Fahrt zum Delfinhaus (Samadai-Riff).",
//       it: "Navigazione verso Dolphin House (Samadai Reef).",
//       ru: "Круиз к Дому Дельфинов (риф Самадай).",
//       pl: "Rejs w stronę Dolphin House (Rafa Samadai).",
//       cz: "Plavba k Dolphin House (útes Samadai)."
//     }
//   },
//   {
//     step: "04",
//     title: {
//       en: "1st Snorkeling Session — Dolphin Area",
//       de: "1. Schnorcheln — Delfingebiet",
//       it: "1ª Sessione Snorkeling — Area Delfini",
//       ru: "1-й снорклинг — Зона дельфинов",
//       pl: "1. Snorkeling — Strefa Delfinów",
//       cz: "1. Šnorchlování — Oblast delfínů"
//     },
//     description: {
//       en: "Search for wild dolphins and enjoy an unforgettable snorkeling experience.",
//       de: "Suche nach wilden Delfinen und unvergessliches Schnorchelerlebnis.",
//       it: "Cerca i delfini selvatici e goditi un'esperienza indimenticabile.",
//       ru: "Поиск диких дельфинов и незабываемый снорклинг.",
//       pl: "Poszukiwanie dzikich delfinów i niezapomniane nurkowanie z rurką.",
//       cz: "Hledání divokých delfínů a nezapomenutelný zážitek ze šnorchlování."
//     }
//   },
//   {
//     step: "05",
//     title: {
//       en: "2nd Snorkeling Session — Coral Reef",
//       de: "2. Schnorcheln — Korallenriff",
//       it: "2ª Sessione Snorkeling — Barriera Corallina",
//       ru: "2-й снорклинг — Коралловый риф",
//       pl: "2. Snorkeling — Rafa Koralowa",
//       cz: "2. Šnorchlování — Koralový útes"
//     },
//     description: {
//       en: "Explore colorful coral reefs and discover rich marine life.",
//       de: "Erkunden Sie bunte Korallenriffe und die reichhaltige Unterwasserwelt.",
//       it: "Esplora barriere coralline colorate e scopri la ricca vita marina.",
//       ru: "Исследуйте красочные рифы и богатый подводный мир.",
//       pl: "Odkrywaj kolorowe rafy koralowe i bogate życie morskie.",
//       cz: "Prozkoumejte barevné koralové útesy a bohatý mořský život."
//     }
//   },
//   {
//     step: "06",
//     title: {
//       en: "Lunch",
//       de: "Mittagessen",
//       it: "Pranzo",
//       ru: "Обед",
//       pl: "Obiad",
//       cz: "Oběd"
//     },
//     description: {
//       en: "Enjoy lunch onboard.",
//       de: "Genießen Sie das Mittagessen an Bord.",
//       it: "Goditi il pranzo a bordo.",
//       ru: "Насладитесь обедом на борту.",
//       pl: "Zjedz obiad na pokładzie.",
//       cz: "Vychutnejte si oběd na palubě."
//     }
//   },
//   {
//     step: "07",
//     title: {
//       en: "Return to Marina",
//       de: "Rückkehr zur Marina",
//       it: "Ritorno alla Marina",
//       ru: "Возвращение в марину",
//       pl: "Powrót do Mariny",
//       cz: "Návrat do mariny"
//     },
//     description: {
//       en: "Directly after lunch.",
//       de: "Direkt nach dem Mittagessen.",
//       it: "Subito dopo pranzo.",
//       ru: "Сразу после обеда.",
//       pl: "Bezpośrednio po obiedzie.",
//       cz: "Ihneď po obědě."
//     }
//   }
// ],
//     paymentNote: {
//       en: "Pay after the trip — no online payment required.",
//       de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//       it: "Paga dopo il tour — nessuna pagamento online richiesto.",
//       ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
//       pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//       cz: "Platba až po výletu — není vyžadována platba předem online."
//     },
//     disclaimer: {
//       en: "Dolphin sightings are not guaranteed. Dolphins are wild animals in their natural environment, and we always respect their natural habitat.",
//       de: "Delfinsichtungen können nicht garantiert werden. Delfine sind wilde Tiere in ihrer natürlichen Umgebung.",
//       it: "L'avvistamento dei delfini non è garantito. I delfini sono animali selvatici nel loro ambiente naturale.",
//       ru: "Гарантия встречи с дельфинами не предоставляется. Дельфины — дикие животные в их естественной среде обитания.",
//       pl: "Obserwacja delfinów nie jest gwarantowana. Delfiny to dzikie zwierzęta w swoim naturalnym środowisku.",
//       cz: "Pozorování delfínů není zaručeno. Delfíni jsou divoká zvířata ve svém přirozeném prostředí."
//     },
//     images: {
//       featured: "/images/tours/tour-2.webp",
//       gallery: [
//         "/images/tours/tour-3.webp",
//         "/images/tours/tour-4.webp",
//         "/images/tours/tour-2.webp"
//       ]
//     }
//   },
//   {
//   id: "sataya-reef-dolphins",
//   slug: "sataya-reef-dolphin-snorkeling",
//   type: 'snorkeling',
//   title: {
//     en: "Sataya Reef",
//     de: "Sataya-Riff",
//     it: "Sataya Reef",
//     ru: "Риф Сатая",
//     pl: "Rafa Sataya",
//     cz: "Útes Sataya"
//   },
//   subtitle: {
//     en: "Dolphin & Snorkeling Experience",
//     de: "Delfin- & Schnorchelerlebnis",
//     it: "Esperienza di Snorkeling e Delfini",
//     ru: "Плавание с дельфинами и снорклинг",
//     pl: "Przygoda z delfinami i snorkeling",
//     cz: "Zážitek s delfíny a šnorchlování"
//   },
//   category: {
//     en: "Water Adventures",
//     de: "Wasserabenteuer",
//     it: "Avventure in Acqua",
//     ru: "Морские приключения",
//     pl: "Przygody Wodne",
//     cz: "Vodní dobrodružství"
//   },
//   price: {
//     amount: 80,
//     currency: "€",
//     unit: {
//       en: "per person",
//       de: "pro Person",
//       it: "per persona",
//       ru: "за человека",
//       pl: "za osobę",
//       cz: "za osobu"
//     }
//   },
//   duration: {
//     en: "Full Day",
//     de: "Ganztägig",
//     it: "Intera giornata",
//     ru: "Полный день",
//     pl: "Cały dzień",
//     cz: "Celý den"
//   },
//   departure: {
//     en: "Hamata Marina",
//     de: "Marina Hamata",
//     it: "Marina di Hamata",
//     ru: "Марина Хамата",
//     pl: "Marina Hamata",
//     cz: "Marina Hamata"
//   },
//   overview: {
//     en: "Experience the magic of Sataya Reef, one of the Red Sea’s most famous dolphin areas. Spend the day snorkeling and exploring the natural habitat of wild dolphins with 2 snorkeling sessions (approx. 50 mins each).",
//     de: "Erleben Sie die Magie des Sataya-Riffs, eines der berühmtesten Delfingebiete des Roten Meeres. Verbringen Sie den Tag beim Schnorcheln im natürlichen Lebensraum wilder Delfine mit 2 Schnorchelgängen (je ca. 50 Min.).",
//     it: "Vivi la magia di Sataya Reef, una delle aree di delfini più famose del Mar Rosso. Trascorri la giornata facendo snorkeling e esplorando l'habitat naturale dei delfini selvatici con 2 sessioni di snorkeling (circa 50 min ciascuna).",
//     ru: "Ощутите магию рифа Сатая — одного из самых знаменитых мест с дельфинами в Красном море. Проведите день, плавая в естественной среде обитания диких дельфинов (2 сеанса снорклинга по 50 минут).",
//     pl: "Poczuj magię Rafy Sataya, jednego z najsłynniejszych miejsc występowania delfinów w Morzu Czerwonym. Spędź dzień na snorkelingu w naturalnym środowisku dzikich delfinów (2 sesje po ok. 50 minut).",
//     cz: "Zažijte kouzlo útesu Sataya, jednej z nejslavnějších oblastí s delfíny v Rudém moři. Strávíte den šnorchlováním v přirozeném prostředí divokých delfínů (2 šnorchlovací relace po cca 50 minutách)."
//   },
//   highlights: {
//     en: [
//       "Dolphin watching & snorkeling",
//       "2 snorkeling sessions — approx. 50 minutes each",
//       "Snorkeling at Sataya Reef",
//       "Chance to see wild dolphins",
//       "Beautiful coral reefs & marine life",
//       "Boat trip from Hamata Marina",
//       "Lunch onboard",
//       "Hot & cold drinks"
//     ],
//     de: [
//       "Delfinbeobachtung & Schnorcheln",
//       "2 Schnorchelgänge — je ca. 50 Minuten",
//       "Schnorcheln am Sataya-Riff",
//       "Chance, wilde Delfine zu sehen",
//       "Wunderschöne Korallenriffe & Unterwasserwelt",
//       "Bootsfahrt ab Marina Hamata",
//       "Mittagessen an Bord",
//       "Warme & kalte Getränke"
//     ],
//     it: [
//       "Avvistamento delfini e snorkeling",
//       "2 sessioni di snorkeling — circa 50 minuti ciascuna",
//       "Snorkeling a Sataya Reef",
//       "Possibilità di vedere delfini selvatici",
//       "Meravigliose barriere coralline e vita marina",
//       "Gita in barca dalla Marina di Hamata",
//       "Pranzo a bordo",
//       "Bevande calde e fredde"
//     ],
//     ru: [
//       "Наблюдение за дельфинами и снорклинг",
//       "2 сеанса снорклинга — примерно по 50 минут",
//       "Снорклинг на рифе Сатая",
//       "Шанс увидеть диких дельфинов",
//       "Красивые коралловые рифы и морская жизнь",
//       "Прогулка на яхте из Марины Хамата",
//       "Обед на борту",
//       "Горячие и холодные напитки"
//     ],
//     pl: [
//       "Obserwacja delfinów i snorkeling",
//       "2 sesje snorkelingu — około 50 minut każda",
//       "Snorkeling na Rafie Sataya",
//       "Szansa na zobaczenie dzikich delfinów",
//       "Piękne rafy koralowe i życie morskie",
//       "Rejs statkiem z Mariny Hamata",
//       "Obiad na pokładzie",
//       "Gorące i zimne napoje"
//     ],
//     cz: [
//       "Pozorování delfínů a šnorchlování",
//       "2 šnorchlovací relace — cca 50 minut každá",
//       "Šnorchlování na útesu Sataya",
//       "Šance vidět divoké delfíny",
//       "Krásné koralové útesy a mořský život",
//       "Výlet lodí z Mariny Hamata",
//       "Oběd na palubě",
//       "Teplé a studené nápoje"
//     ]
//   },
//   included: {
//     en: [
//       "Hotel pickup & drop-off",
//       "Boat trip",
//       "Snorkeling equipment",
//       "Professional guide",
//       "2 snorkeling sessions (50 mins each)",
//       "Lunch onboard",
//       "Hot & cold drinks and water"
//     ],
//     de: [
//       "Abholung & Rückbringung zum Hotel",
//       "Bootsfahrt",
//       "Schnorchelausrüstung",
//       "Professioneller Guide",
//       "2 Schnorchelgänge (je 50 Min.)",
//       "Mittagessen an Bord",
//       "Warme & kalte Getränke sowie Wasser"
//     ],
//     it: [
//       "Transfer da e per l'hotel",
//       "Gita in barca",
//       "Attrezzatura da snorkeling",
//       "Guida professionale",
//       "2 sessioni di snorkeling (50 min ciascuna)",
//       "Pranzo a bordo",
//       "Bevande calde, fredde e acqua"
//     ],
//     ru: [
//       "Трансфер из отеля и обратно",
//       "Прогулка на яхте",
//       "Снаряжение для снорклинга",
//       "Профессиональный гид",
//       "2 сеанса снорклинга (по 50 мин)",
//       "Обед на борту",
//       "Горячие, холодные напитки и вода"
//     ],
//     pl: [
//       "Odbiór i powrót do hotelu",
//       "Rejs statkiem",
//       "Sprzęt do snorkelingu",
//       "Profesjonalny przewodnik",
//       "2 sesje snorkelingu (po 50 min)",
//       "Obiad na pokładzie",
//       "Zimne i gorące napoje oraz woda"
//     ],
//     cz: [
//       "Vyzvednutí a návrat do hotelu",
//       "Výlet lodí",
//       "Vybavení na šnorchlování",
//       "Profesionální průvodce",
//       "2 šnorchlovací relace (cca 50 min)",
//       "Oběd na palubě",
//       "Teplé a studené nápoje, voda"
//     ]
//   },
//   whatToBring: {
//     en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
//     de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
//     it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
//     ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
//     pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
//     cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Under 5 years: Free",
//       de: "Unter 5 Jahren: Kostenlos",
//       it: "Sotto i 5 anni: Gratuito",
//       ru: "До 5 лет: Бесплатно",
//       pl: "Poniżej 5 lat: Bezpłatnie",
//       cz: "Pod 5 let: Zdarma"
//     },
//     from5to10: {
//       en: "5–10 years: 50% of adult price",
//       de: "5–10 Jahre: 50% des Erwachsenenpreises",
//       it: "5–10 anni: 50% del prezzo adulti",
//       ru: "5–10 лет: 50% от стоимости взрослого",
//       pl: "5–10 lat: 50% ceny dorosłego",
//       cz: "5–10 let: 50 % z ceny dospělého"
//     },
//     over10: {
//       en: "Over 10 years: Full adult price",
//       de: "Über 10 Jahre: Voller Erwachsenenpreis",
//       it: "Oltre i 10 anni: Prezzo intero adulto",
//       ru: "Старше 10 лет: Полная стоимость",
//       pl: "Powyżej 10 lat: Pełna cena",
//       cz: "Nad 10 let: Plná cena"
//     }
//   },
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Hamata Marina",
//         de: "Marina Hamata",
//         it: "Marina di Hamata",
//         ru: "Марина Хамата",
//         pl: "Marina Hamata",
//         cz: "Marina Hamata"
//       },
//       description: {
//         en: "Departure from Hamata Marina.",
//         de: "Abfahrt von der Marina Hamata.",
//         it: "Partenza dalla Marina di Hamata.",
//         ru: "Отправление из марины Хамата.",
//         pl: "Wypłynięcie z Mariny Hamata.",
//         cz: "Odjezd z mariny Hamata."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Boat Trip to Sataya Reef",
//         de: "Bootsfahrt zum Sataya-Riff",
//         it: "Gita in Barca a Sataya Reef",
//         ru: "Морская прогулка к рифу Сатая",
//         pl: "Rejs na Rafę Sataya",
//         cz: "Plavba lodí na útes Sataya"
//       },
//       description: {
//         en: "Scenic cruise toward Sataya Reef.",
//         de: "Malerische Fahrt in Richtung Sataya-Riff.",
//         it: "Navigazione panoramica verso Sataya Reef.",
//         ru: "Живописный круиз к рифу Сатая.",
//         pl: "Malowniczy rejs w stronę Rafy Sataya.",
//         cz: "Vyhlídková plavba k útesu Sataya."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "1st Snorkeling Session — 50 Mins",
//         de: "1. Schnorcheln — 50 Min.",
//         it: "1ª Sessione Snorkeling — 50 min",
//         ru: "1-й снорклинг — 50 минут",
//         pl: "1. Snorkeling — 50 minut",
//         cz: "1. Šnorchlování — 50 min"
//       },
//       description: {
//         en: "Explore the reef and search for dolphins.",
//         de: "Erkunden Sie das Riff und suchen Sie nach Delfinen.",
//         it: "Esplora la barriera e cerca i delfini.",
//         ru: "Исследуйте риф и ищите дельфинов.",
//         pl: "Odkrywaj rafę i szukaj delfinów.",
//         cz: "Prozkoumejte útes a hledejte delfíny."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Lunch Onboard",
//         de: "Mittagessen an Bord",
//         it: "Pranzo a Bordo",
//         ru: "Обед на борту",
//         pl: "Obiad na Pokładzie",
//         cz: "Oběd na palubě"
//       },
//       description: {
//         en: "Freshly prepared lunch on the boat.",
//         de: "Frisch zubereitetes Mittagessen auf dem Boot.",
//         it: "Pranzo fresco preparato a bordo.",
//         ru: "Свежеприготовленный обед на яхте.",
//         pl: "Świeżo przygotowany obiad na statku.",
//         cz: "Čerstvě připravený oběd na lodi."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "2nd Snorkeling Session — 50 Mins",
//         de: "2. Schnorcheln — 50 Min.",
//         it: "2ª Sessione Snorkeling — 50 min",
//         ru: "2-й снорклинг — 50 минут",
//         pl: "2. Snorkeling — 50 minut",
//         cz: "2. Šnorchlování — 50 min"
//       },
//       description: {
//         en: "Continue exploring Sataya’s waters and dolphin area.",
//         de: "Erkunden Sie weiter die Gewässer und das Delfingebiet.",
//         it: "Continua a esplorare le acque di Sataya e l'area dei delfini.",
//         ru: "Продолжайте исследовать воды Сатаи и зону дельфинов.",
//         pl: "Kontynuuj odkrywanie wód Sataya i strefy delfinów.",
//         cz: "Pokračujte v objevování vod Satayi a oblasti delfínů."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "Return to Hamata Marina",
//         de: "Rückkehr zur Marina Hamata",
//         it: "Ritorno alla Marina di Hamata",
//         ru: "Возвращение в марину Хамата",
//         pl: "Powrót do Mariny Hamata",
//         cz: "Návrat do mariny Hamata"
//       },
//       description: {
//         en: "Cruise back after an unforgettable day.",
//         de: "Rückfahrt nach einem unvergesslichen Tag.",
//         it: "Rientro dopo una giornata indimenticabile.",
//         ru: "Возвращение назад после незабываемого дня.",
//         pl: "Powrót po niezapomnianym dniu.",
//         cz: "Návrat zpět po nezapomenutelném dni."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment required.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//     it: "Paga dopo il tour — nessuna pagamento online richiesto.",
//     ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
//     pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//     cz: "Platba až po výletu — není vyžadována platba předem online."
//   },
//   disclaimer: {
//     en: "Dolphin sightings are not guaranteed. Dolphins are wild animals in their natural environment, and we always respect their natural habitat.",
//     de: "Delfinsichtungen können nicht garantiert werden. Delfine sind wilde Tiere in ihrer natürlichen Umgebung.",
//     it: "L'avvistamento dei delfini non è garantito. I delfini sono animali selvatici nel loro ambiente naturale.",
//     ru: "Гарантия встречи с дельфинами не предоставляется. Дельфины — дикие животные в их естественной среде обитания.",
//     pl: "Obserwacja delfinów nie jest gwarantowana. Delfiny to dzikie zwierzęta w swoim naturalnym środowisku.",
//     cz: "Pozorování delfínů není zaručeno. Delfíni jsou divoká zvířata ve svém přirozeném prostředí."
//   },
//   images: {
//     featured: "/images/tours/staya-reef-new.jpg",
//     gallery: [
//       "/images/tours/staya-1.webp",
//       "/images/tours/staya-2.webp",
//       "/images/tours/staya-3.webp"
//     ]
//   }
// },
// {
//   id: "abu-dabbab-turtle-bay",
//   slug: "abu-dabbab-turtle-bay-snorkeling",
//   type: 'snorkeling',
//   title: {
//     en: "Abu Dabbab (Turtle Bay)",
//     de: "Abu Dabbab (Schildkrötenbucht)",
//     it: "Abu Dabbab (Baia delle Tartarughe)",
//     ru: "Абу-Дабаб (Черепаший залив)",
//     pl: "Abu Dabbab (Zatoka Żółwi)",
//     cz: "Abu Dabbab (Želví zátoka)"
//   },
//   subtitle: {
//     en: "Turtle Snorkeling Experience",
//     de: "Schildkröten-Schnorchelerlebnis",
//     it: "Esperienza di Snorkeling con le Tartarughe",
//     ru: "Снорклинг с морскими черепахами",
//     pl: "Przygoda ze snorkelingiem i żółwiami",
//     cz: "Šnorchlování s želvami"
//   },
//   category: {
//     en: "Beach & Snorkeling",
//     de: "Strand & Schnorcheln",
//     it: "Spiaggia e Snorkeling",
//     ru: "Пляж и снорклинг",
//     pl: "Plaża i Snorkeling",
//     cz: "Pláž a šnorchlování"
//   },
//   price: {
//     amount: 60,
//     currency: "€",
//     unit: {
//       en: "per person",
//       de: "pro Person",
//       it: "per persona",
//       ru: "за человека",
//       pl: "za osobę",
//       cz: "za osobu"
//     }
//   },
//   duration: {
//     en: "6 Hours",
//     de: "6 Stunden",
//     it: "6 Ore",
//     ru: "6 часов",
//     pl: "6 godzin",
//     cz: "6 hodin"
//   },
//   departure: {
//     en: "Marsa Alam",
//     de: "Marsa Alam",
//     it: "Marsa Alam",
//     ru: "Марса-Алам",
//     pl: "Marsa Alam",
//     cz: "Marsa Alam"
//   },
//   overview: {
//     en: "Spend 6 hours at Abu Dabbab (Turtle Bay), one of the best-known spots around Marsa Alam for seeing sea turtles in their natural environment. Enjoy 2 snorkeling sessions and relax on the beach.",
//     de: "Verbringen Sie 6 Stunden in Abu Dabbab (Schildkrötenbucht), einem der bekanntesten Orte bei Marsa Alam, um Meeresschildkröten in ihrer natürlichen Umgebung zu sehen. Genießen Sie 2 Schnorchelgänge und entspannen Sie am Strand.",
//     it: "Trascorri 6 ore ad Abu Dabbab (Baia delle Tartarughe), uno dei luoghi più famosi di Marsa Alam per vedere le tartarughe marine nel loro ambiente naturale. Goditi 2 sessioni di snorkeling e relax in spiaggia.",
//     ru: "Проведите 6 часов в Абу-Дабаб (Черепашьей бухте) — одном из лучших мест в Марса-Аламе для наблюдения за морскими черепахами. Наслаждайтесь 2 сеансами снорклинга и отдыхом на пляже.",
//     pl: "Spędź 6 godzin w Abu Dabbab (Zatoka Żółwi), jednym z najsłynniejszych miejsc w Marsa Alam do obserwacji żółwi morskich. Ciesz się 2 sesjami snorkelingu i relaksem na plaży.",
//     cz: "Strávíte 6 hodin v Abu Dabbab (Želví zátoka), jedné z nejznámějších lokalit v Marsa Alam pro pozorování mořských želv. Užijte si 2 šnorchlovací relace a relaxaci na pláži."
//   },
//   highlights: {
//     en: [
//       "Sea turtle snorkeling",
//       "2 snorkeling sessions — approx. 50 minutes each",
//       "Beautiful coral reefs & marine life",
//       "Relaxing beach time",
//       "Snacks and water included"
//     ],
//     de: [
//       "Schnorcheln mit Meeresschildkröten",
//       "2 Schnorchelgänge — je ca. 50 Minuten",
//       "Wunderschöne Korallenriffe & Unterwasserwelt",
//       "Entspannende Zeit am Strand",
//       "Snacks und Wasser inklusive"
//     ],
//     it: [
//       "Snorkeling con le tartarughe marine",
//       "2 sessioni di snorkeling — circa 50 minuti ciascuna",
//       "Meravigliose barriere coralline e vita marina",
//       "Relax in spiaggia",
//       "Snack e acqua inclusi"
//     ],
//     ru: [
//       "Снорклинг с морскими черепахами",
//       "2 сеанса снорклинга — примерно по 50 минут",
//       "Красивые коралловые рифы и морская жизнь",
//       "Отдых на пляже",
//       "Закуски и вода включены"
//     ],
//     pl: [
//       "Snorkeling z żółwiami morskimi",
//       "2 sesje snorkelingu — około 50 minut każda",
//       "Piękne rafy koralowe i życie morskie",
//       "Relaks na plaży",
//       "Przekąski i woda w cenie"
//     ],
//     cz: [
//       "Šnorchlování s mořskými želvami",
//       "2 šnorchlovací relace — cca 50 minut každá",
//       "Krásné koralové útesy a mořský život",
//       "Relaxace na pláži",
//       "Občerstvení a voda v ceně"
//     ]
//   },
//   included: {
//     en: [
//       "Hotel pickup & drop-off",
//       "Abu Dabbab (Turtle Bay) entrance ticket",
//       "Snorkeling equipment",
//       "Professional guide",
//       "2 snorkeling sessions (50 mins each)",
//       "Snacks",
//       "Water"
//     ],
//     de: [
//       "Abholung & Rückbringung zum Hotel",
//       "Eintrittskarte für Abu Dabbab (Schildkrötenbucht)",
//       "Schnorchelausrüstung",
//       "Professioneller Guide",
//       "2 Schnorchelgänge (je 50 Min.)",
//       "Snacks",
//       "Wasser"
//     ],
//     it: [
//       "Transfer da e per l'hotel",
//       "Biglietto d'ingresso ad Abu Dabbab",
//       "Attrezzatura da snorkeling",
//       "Guida professionale",
//       "2 sessioni di snorkeling (50 min ciascuna)",
//       "Snack",
//       "Acqua"
//     ],
//     ru: [
//       "Трансфер из отеля и обратно",
//       "Входной билет в Абу-Дабаб",
//       "Снаряжение для снорклинга",
//       "Профессиональный гид",
//       "2 сеанса снорклинга (по 50 мин)",
//       "Закуски",
//       "Вода"
//     ],
//     pl: [
//       "Odbiór i powrót do hotelu",
//       "Bilet wstępu do Abu Dabbab",
//       "Sprzęt do snorkelingu",
//       "Profesjonalny przewodnik",
//       "2 sesje snorkelingu (po 50 min)",
//       "Przekąski",
//       "Woda"
//     ],
//     cz: [
//       "Vyzvednutí a návrat do hotelu",
//       "Vstupenka do Abu Dabbab",
//       "Vybavení na šnorchlování",
//       "Profesionální průvodce",
//       "2 šnorchlovací relace (cca 50 min)",
//       "Občerstvení",
//       "Voda"
//     ]
//   },
//   whatToBring: {
//     en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
//     de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
//     it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
//     ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
//     pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
//     cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Under 5 years: Free",
//       de: "Unter 5 Jahren: Kostenlos",
//       it: "Sotto i 5 anni: Gratuito",
//       ru: "До 5 лет: Бесплатно",
//       pl: "Poniżej 5 lat: Bezpłatnie",
//       cz: "Pod 5 let: Zdarma"
//     },
//     from5to10: {
//       en: "5–10 years: 50% of adult price",
//       de: "5–10 Jahre: 50% des Erwachsenenpreises",
//       it: "5–10 anni: 50% del prezzo adulti",
//       ru: "5–10 лет: 50% от стоимости взрослого",
//       pl: "5–10 lat: 50% ceny dorosłego",
//       cz: "5–10 let: 50 % z ceny dospělého"
//     },
//     over10: {
//       en: "Over 10 years: Full adult price",
//       de: "Über 10 Jahre: Voller Erwachsenenpreis",
//       it: "Oltre i 10 anni: Prezzo intero adulto",
//       ru: "Старше 10 лет: Полная стоимость",
//       pl: "Powyżej 10 lat: Pełna cena",
//       cz: "Nad 10 let: Plná cena"
//     }
//   },
//  itinerary: [
//   {
//     step: "01",
//     title: {
//       en: "Hotel Pickup",
//       de: "Hotelabholung",
//       it: "Transfer dall'Hotel",
//       ru: "Трансфер из отеля",
//       pl: "Odbiór z Hotelu",
//       cz: "Vyzvednutí v hotelu"
//     },
//     description: {
//       en: "08:00 AM — Pickup from your hotel and transfer to Abu Dabbab (Turtle Bay).",
//       de: "08:00 Uhr — Abholung vom Hotel und Transfer nach Abu Dabbab (Schildkrötenbucht).",
//       it: "08:00 — Pickup dal tuo hotel e trasferimento ad Abu Dabbab.",
//       ru: "08:00 — Трансфер из вашего отеля в Абу-Дабаб.",
//       pl: "08:00 — Odbiór z hotelu i transfer do Abu Dabbab.",
//       cz: "08:00 — Vyzvednutí z vašeho hotelu a transfer do Abu Dabbab."
//     }
//   },
//   {
//     step: "02",
//     title: {
//       en: "Arrival at Abu Dabbab",
//       de: "Ankunft in Abu Dabbab",
//       it: "Arrivo ad Abu Dabbab",
//       ru: "Прибытие в Абу-Дабаб",
//       pl: "Przyjazd do Abu Dabbab",
//       cz: "Příjezd do Abu Dabbab"
//     },
//     description: {
//       en: "Arrive and get ready for your snorkeling adventure.",
//       de: "Ankommen und vorbereiten auf das Schnorcheln.",
//       it: "Arrivo e preparazione per lo snorkeling.",
//       ru: "Прибытие и подготовка к снорклингу.",
//       pl: "Przyjazd i przygotowanie do snorkelingu.",
//       cz: "Příjezd a příprava na šnorchlování."
//     }
//   },
//   {
//     step: "03",
//     title: {
//       en: "1st Snorkeling Session — 50 Mins",
//       de: "1. Schnorcheln — 50 Min.",
//       it: "1ª Sessione Snorkeling — 50 min",
//       ru: "1-й снорклинг — 50 минут",
//       pl: "1. Snorkeling — 50 minut",
//       cz: "1. Šnorchlování — 50 min"
//     },
//     description: {
//       en: "Explore the reef and search for sea turtles.",
//       de: "Erkunden Sie das Riff und suchen Sie nach Schildkröten.",
//       it: "Esplora la barriera e cerca le tartarughe.",
//       ru: "Исследуйте риф и ищите морских черепах.",
//       pl: "Odkrywaj rafę i szukaj żółwi morskich.",
//       cz: "Prozkoumejte útes a hledejte mořské želvy."
//     }
//   },
//   {
//     step: "04",
//     title: {
//       en: "Beach Time & Snacks",
//       de: "Strandzeit & Snacks",
//       it: "Tempo in Spiaggia e Snack",
//       ru: "Отдых на пляже и закуски",
//       pl: "Relaks na Plaży i Przekąski",
//       cz: "Čas na pláži a občerstvení"
//     },
//     description: {
//       en: "Relax on the beach and enjoy some snacks.",
//       de: "Entspannen Sie am Strand und genießen Sie Snacks.",
//       it: "Rilassati in spiaggia e goditi qualche snack.",
//       ru: "Отдохните на пляже и перекусите.",
//       pl: "Zrelaksuj się na plaży i zjedz przekąskę.",
//       cz: "Odpočiňte si na pláži a dejte si občerstvení."
//     }
//   },
//   {
//     step: "05",
//     title: {
//       en: "2nd Snorkeling Session — 50 Mins",
//       de: "2. Schnorcheln — 50 Min.",
//       it: "2ª Sessione Snorkeling — 50 min",
//       ru: "2-й снорклинг — 50 минут",
//       pl: "2. Snorkeling — 50 minut",
//       cz: "2. Šnorchlování — 50 min"
//     },
//     description: {
//       en: "Continue exploring Abu Dabbab's reef.",
//       de: "Erkunden Sie weiter das Riff von Abu Dabbab.",
//       it: "Continua a esplorare la barriera di Abu Dabbab.",
//       ru: "Продолжайте исследовать риф Абу-Дабаб.",
//       pl: "Kontynuuj odkrywanie rafy Abu Dabbab.",
//       cz: "Pokračujte v objevování útesu Abu Dabbab."
//     }
//   },
//   {
//     step: "06",
//     title: {
//       en: "Return Transfer",
//       de: "Rücktransfer",
//       it: "Rientro in Hotel",
//       ru: "Обратный трансфер",
//       pl: "Powrót do Hotelu",
//       cz: "Návrat do hotelu"
//     },
//     description: {
//       en: "Transfer back to your hotel.",
//       de: "Rückfahrt zu Ihrem Hotel.",
//       it: "Trasferimento di ritorno in hotel.",
//       ru: "Трансфер обратно в отель.",
//       pl: "Powrót do hotelu.",
//       cz: "Cesta zpět do hotelu."
//     }
//   }
// ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment required.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//     it: "Paga dopo il tour — nessuna pagamento online richiesto.",
//     ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
//     pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//     cz: "Platba až po výletu — není vyžadována platba předem online."
//   },
//   disclaimer: {
//     en: "Sea turtles are a regular part of Abu Dabbab, but sightings can never be guaranteed. We always respect wild marine life.",
//     de: "Meeresschildkröten sind ein regelmäßiger Teil von Abu Dabbab, aber Sichtungen können nie garantiert werden.",
//     it: "Le tartarughe marine sono frequenti ad Abu Dabbab, ma gli avvistamenti non possono essere garantiti.",
//     ru: "Черепахи часто встречаются в Абу-Дабаб, но их наблюдение не может быть гарантировано на 100%.",
//     pl: "Żółwie morskie są stałą częścią Abu Dabbab, ale ich zobaczenie nie jest gwarantowane.",
//     cz: "Mořské želvy se v Abu Dabbab vyskytují regularly, ale jejich pozorování nelze garantovat."
//   },
//   images: {
//     featured: "/images/tours/dabbab-card.webp",
//     gallery: [
//       "/images/tours/dabbab-4.webp",
//       "/images/tours/dabbab-3.webp",
//       "/images/tours/dabbab-2.webp",
//       "/images/tours/dabbab-1.webp"
//     ]
//   }
// },
// {
//   id: "marsa-mubarak-dugong-turtle",
//   slug: "marsa-mubarak-dugong-turtle-snorkeling",
//   type: 'snorkeling',
//   title: {
//     en: "Marsa Mubarak",
//     de: "Marsa Mubarak",
//     it: "Marsa Mubarak",
//     ru: "Марса-Мубарак",
//     pl: "Marsa Mubarak",
//     cz: "Marsa Mubarak"
//   },
//   subtitle: {
//     en: "Dugong & Turtle Snorkeling Experience",
//     de: "Seekuh- & Schildkröten-Schnorchelerlebnis",
//     it: "Esperienza Snorkeling con Dugongo e Tartarughe",
//     ru: "Снорклинг с дюгонем и черепахами",
//     pl: "Przygoda ze snorkelingiem, diugoniem i żółwiami",
//     cz: "Šnorchlování s kapustňákem a želvami"
//   },
//   category: {
//     en: "Marine & Wildlife",
//     de: "Meereswelt & Wildtiere",
//     it: "Vita Marina e Natura",
//     ru: "Морская природа",
//     pl: "Przyroda Morska",
//     cz: "Mořská příroda"
//   },
//   price: {
//     amount: 55,
//     currency: "€",
//     unit: {
//       en: "per person",
//       de: "pro Person",
//       it: "per persona",
//       ru: "за человека",
//       pl: "za osobę",
//       cz: "za osobu"
//     }
//   },
//   duration: {
//     en: "8 Hours",
//     de: "8 Stunden",
//     it: "8 Ore",
//     ru: "8 часов",
//     pl: "8 godzin",
//     cz: "8 hodin"
//   },
//   departure: {
//     en: "Port Ghalib Marina",
//     de: "Marina Port Ghalib",
//     it: "Marina di Port Ghalib",
//     ru: "Марина Порт-Галиб",
//     pl: "Marina Port Ghalib",
//     cz: "Marina Port Ghalib"
//   },
//   schedule: {
//     departureTime: "08:30 AM",
//     returnTime: "15:30 PM"
//   },
//   overview: {
//     en: "Search for dugongs and swim with sea turtles! Spend a full day exploring Marsa Mubarak, enjoying 2 snorkeling sessions, colorful coral reefs, and a fresh buffet lunch onboard.",
//     de: "Suchen Sie nach Seekühen und schwimmen Sie mit Meeresschildkröten! Verbringen Sie einen ganzen Tag in Marsa Mubarak mit 2 Schnorchelgängen, bunten Riffen und einem frischen Buffet an Bord.",
//     it: "Cerca i dugonghi e nuota con le tartarughe marine! Trascorri una giornata intera esplorando Marsa Mubarak, godendoti 2 sessioni di snorkeling, barriere coralline e un delizioso pranzo a buffet a bordo.",
//     ru: "Ищите дюгоней и плавайте с морскими черепахами! Проведите полный день в Марса-Мубарак: 2 сеанса снорклинга, красочные рифы и свежий обед «шведский стол» на борту.",
//     pl: "Szukaj diugoni i pływaj z żółwiami morskimi! Spędź cały dzień na odkrywaniu Marsa Mubarak, ciesząc się 2 sesjami snorkelingu, kolorowymi rafami i świeżym bufetem na pokładzie.",
//     cz: "Hledejte kapustňáky a plavejte s mořskými želvami! Strávíte celý den objevováním Marsa Mubarak se 2 šnorchlovacími relacemi, barevnými útesy a čerstvým obědem formou bufetu na palubě."
//   },
//   highlights: {
//     en: [
//       "Search for dugongs (sea cows)",
//       "Chance to spot green sea turtles",
//       "2 guided snorkeling sessions",
//       "Colorful coral reefs and marine life",
//       "Fresh buffet lunch onboard",
//       "Hot & cold drinks",
//       "Full-day Red Sea experience"
//     ],
//     de: [
//       "Suche nach Seekühen (Dugongs)",
//       "Chance, grüne Meeresschildkröten zu sehen",
//       "2 geführte Schnorchelgänge",
//       "Bunte Korallenriffe & Unterwasserwelt",
//       "Frisches Buffet-Mittagessen an Bord",
//       "Warme & kalte Getränke",
//       "Ganztägiges Rotes Meer Erlebnis"
//     ],
//     it: [
//       "Ricerca dei dugonghi (mucche di mare)",
//       "Possibilità di avvistare tartarughe verdi",
//       "2 sessioni di snorkeling guidate",
//       "Barriere coralline colorate e vita marina",
//       "Pranzo a buffet fresco a bordo",
//       "Bevande calde e fredde",
//       "Esperienza completa di una giornata nel Mar Rosso"
//     ],
//     ru: [
//       "Поиск дюгоней (морских коров)",
//       "Шанс увидеть зеленых морских черепах",
//       "2 сеанса снорклинга с гидом",
//       "Красочные коралловые рифы и морская жизнь",
//       "Свежий обед «шведский стол» на борту",
//       "Горячие и холодные напитки",
//       "Морская прогулка на весь день"
//     ],
//     pl: [
//       "Poszukiwanie diugoni (krów morskich)",
//       "Szansa na spotkanie zielonych żółwi morskich",
//       "2 sesje snorkelingu z przewodnikiem",
//       "Kolorowe rafy koralowe i życie morskie",
//       "Świeży obiad w formie bufetu na pokładzie",
//       "Zimne i gorące napoje",
//       "Całodniowa przygoda na Morzu Czerwonym"
//     ],
//     cz: [
//       "Hledání kapustňáků (mořských krav)",
//       "Šance vidět zelené mořské želvy",
//       "2 vedené šnorchlovací relace",
//       "Barevné koralové útesy a mořský život",
//       "Čerstvý oběd formou bufetu na palubě",
//       "Teplé a studené nápoje",
//       "Celodenní zážitek v Rudém moři"
//     ]
//   },
//   included: {
//     en: [
//       "Hotel pickup & drop-off",
//       "Boat trip",
//       "Professional multilingual snorkeling guide",
//       "Full snorkeling equipment",
//       "2 snorkeling sessions",
//       "Fresh buffet lunch onboard",
//       "Water, tea, coffee & soft drinks"
//     ],
//     de: [
//       "Abholung & Rückbringung zum Hotel",
//       "Bootsfahrt",
//       "Professioneller mehrsprachiger Schnorchel-Guide",
//       "Komplette Schnorchelausrüstung",
//       "2 Schnorchelgänge",
//       "Frisches Buffet-Mittagessen an Bord",
//       "Wasser, Tee, Kaffee & Softdrinks"
//     ],
//     it: [
//       "Transfer da e per l'hotel",
//       "Gita in barca",
//       "Guida snorkeling professionale multilingue",
//       "Attrezzatura completa da snorkeling",
//       "2 sessioni di snorkeling",
//       "Pranzo a buffet fresco a bordo",
//       "Acqua, tè, caffè e bevande analcoliche"
//     ],
//     ru: [
//       "Трансфер из отеля и обратно",
//       "Прогулка на яхте",
//       "Профессиональный многоязычный гид",
//       "Полное снаряжение для снорклинга",
//       "2 сеанса снорклинга",
//       "Свежий обед «шведский стол» на борту",
//       "Вода, чай, кофе и безалкогольные напитки"
//     ],
//     pl: [
//       "Odbiór i powrót do hotelu",
//       "Rejs statkiem",
//       "Profesjonalny wielojęzyczny przewodnik",
//       "Pełny sprzęt do snorkelingu",
//       "2 sesje snorkelingu",
//       "Świeży obiad w formie bufetu na pokładzie",
//       "Woda, herbata, kawa i napoje bezalkoholowe"
//     ],
//     cz: [
//       "Vyzvednutí a návrat do hotelu",
//       "Výlet lodí",
//       "Profesionální vícejazyčný průvodce",
//       "Kompletní vybavení na šnorchlování",
//       "2 šnorchlovací relace",
//       "Čerstvý oběd formou bufetu na palubě",
//       "Voda, čaj, káva a nealkoholické nápoje"
//     ]
//   },
//   notIncluded: {
//     en: [
//       "National Park / governmental fees ($5 per person)",
//       "Personal expenses",
//       "Tips for the boat crew",
//       "Underwater photos & videos"
//     ],
//     de: [
//       "Nationalpark- / Regierungsgebühren (5 $ pro Person)",
//       "Persönliche Ausgaben",
//       "Trinkgelder für die Bootsbesatzung",
//       "Unterwasserfotos & Videos"
//     ],
//     it: [
//       "Tasse del Parco Nazionale / Governative ($5 a persona)",
//       "Spese personali",
//       "Mance per l'equipaggio",
//       "Foto e video subacquei"
//     ],
//     ru: [
//       "Сбор национального парка / гос. пошлина ($5 с человека)",
//       "Личные расходы",
//       "Чаевые экипажу",
//       "Подводные фото и видео"
//     ],
//     pl: [
//       "Opłaty Parku Narodowego / rządowe (5 $ za osobę)",
//       "Wydatki osobiste",
//       "Napiwki dla załogi",
//       "Zdjęcia i filmy podwodne"
//     ],
//     cz: [
//       "Poplatky za Národní park / vládní poplatky (5 $ za osobu)",
//       "Osobní výdaje",
//       "Sprepropitné pro posádku",
//       "Podvodní fotografie a videa"
//     ]
//   },
//   whatToBring: {
//     en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
//     de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
//     it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
//     ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
//     pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
//     cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Under 5 years: Free",
//       de: "Unter 5 Jahren: Kostenlos",
//       it: "Sotto i 5 anni: Gratuito",
//       ru: "До 5 лет: Бесплатно",
//       pl: "Poniżej 5 lat: Bezpłatnie",
//       cz: "Pod 5 let: Zdarma"
//     },
//     from5to10: {
//       en: "5–10 years: 50% of adult price",
//       de: "5–10 Jahre: 50% des Erwachsenenpreises",
//       it: "5–10 anni: 50% del prezzo adulti",
//       ru: "5–10 лет: 50% от стоимости взрослого",
//       pl: "5–10 lat: 50% ceny dorosłego",
//       cz: "5–10 let: 50 % z ceny dospělého"
//     },
//     over10: {
//       en: "Over 10 years: Full adult price",
//       de: "Über 10 Jahre: Voller Erwachsenenpreis",
//       it: "Oltre i 10 anni: Prezzo intero adulto",
//       ru: "Старше 10 лет: Полная стоимость",
//       pl: "Powyżej 10 lat: Pełna cena",
//       cz: "Nad 10 let: Plná cena"
//     }
//   },
//  itinerary: [
//   {
//     step: "01",
//     title: {
//       en: "Hotel Pickup",
//       de: "Hotelabholung",
//       it: "Pickup dall'Hotel",
//       ru: "Трансфер из отеля",
//       pl: "Odbiór z hotelu",
//       cz: "Vyzvednutí v hotelu"
//     },
//     description: {
//       en: "07:30 — Pickup from your hotel in a jeep and land cruiser.",
//       de: "07:30 — Abholung vom Hotel im Jeep und Land Cruiser.",
//       it: "07:30 — Pickup dal tuo hotel in jeep e land cruiser.",
//       ru: "07:30 — Трансфер из вашего отеля на джипе и Land Cruiser.",
//       pl: "07:30 — Odbiór z hotelu dżipem i Land Cruiserem.",
//       cz: "07:30 — Vyzvednutí z vašeho hotelu v jeepu a Land Cruiseru."
//     }
//   },
//   {
//     step: "02",
//     title: {
//       en: "Port Ghalib Marina",
//       de: "Marina Port Ghalib",
//       it: "Marina di Port Ghalib",
//       ru: "Марина Порт-Галиб",
//       pl: "Marina Port Ghalib",
//       cz: "Marina Port Ghalib"
//     },
//     description: {
//       en: "Departure from Port Ghalib marina.",
//       de: "Abfahrt von der Marina Port Ghalib.",
//       it: "Partenza dalla marina di Port Ghalib.",
//       ru: "Отправление из марины Порт-Галиб.",
//       pl: "Wypłynięcie z mariny Port Ghalib.",
//       cz: "Odjezd z mariny Port Ghalib."
//     }
//   },
//   {
//     step: "03",
//     title: {
//       en: "Boat Trip",
//       de: "Bootsfahrt",
//       it: "Gita in Barca",
//       ru: "Морская прогулка",
//       pl: "Rejs Statkiem",
//       cz: "Plavba lodí"
//     },
//     description: {
//       en: "Cruise toward Marsa Mubarak bay.",
//       de: "Fahrt zur Bucht von Marsa Mubarak.",
//       it: "Navigazione verso la baia di Marsa Mubarak.",
//       ru: "Круиз в сторону бухты Марса Мубарак.",
//       pl: "Rejs w stronę zatoki Marsa Mubarak.",
//       cz: "Plavba k zátoce Marsa Mubarak."
//     }
//   },
//   {
//     step: "04",
//     title: {
//       en: "1st Snorkeling Session — Sea Turtles & Dugong",
//       de: "1. Schnorcheln — Schildkröten & Seekühe",
//       it: "1ª Sessione Snorkeling — Tartarughe e Dugongo",
//       ru: "1-й снорклинг — Морские черепахи и Дюгонь",
//       pl: "1. Snorkeling — Żółwie Morskie i Diugoń",
//       cz: "1. Šnorchlování — Mořské želvy a Kapustňák"
//     },
//     description: {
//       en: "Snorkel with giant sea turtles and search for the famous Dugong (Sea Cow).",
//       de: "Schnorcheln Sie mit riesigen Meeresschildkröten und suchen Sie nach der Seekuh.",
//       it: "Fai snorkeling con le tartarughe giganti e cerca il famoso dugongo.",
//       ru: "Снорклинг с гигантскими черепахами и поиск знаменитого дюгоня.",
//       pl: "Nurkowanie z gigantycznymi żółwiami i poszukiwanie diugonia.",
//       cz: "Šnorchlování s obřími mořskými želvami a hledání kapustňáka."
//     }
//   },
//   {
//     step: "05",
//     title: {
//       en: "2nd Snorkeling Session — Coral Garden",
//       de: "2. Schnorcheln — Korallengarten",
//       it: "2ª Sessione Snorkeling — Giardino di Corallo",
//       ru: "2-й снорклинг — Коралловый сад",
//       pl: "2. Snorkeling — Ogród Koralowy",
//       cz: "2. Šnorchlování — Korálová zahrada"
//     },
//     description: {
//       en: "Explore colorful coral reefs and marine life.",
//       de: "Erkunden Sie bunte Korallenriffe und die Unterwasserwelt.",
//       it: "Esplora barriere coralline colorate e la vita marina.",
//       ru: "Исследуйте красочные коралловые рифы и подводный мир.",
//       pl: "Odkrywaj kolorowe rafy koralowe i życie morskie.",
//       cz: "Prozkoumejte barevné koralové útesy a mořský život."
//     }
//   },
//   {
//     step: "06",
//     title: {
//       en: "Lunch",
//       de: "Mittagessen",
//       it: "Pranzo",
//       ru: "Обед",
//       pl: "Obiad",
//       cz: "Oběd"
//     },
//     description: {
//       en: "Enjoy lunch onboard.",
//       de: "Genießen Sie das Mittagessen an Bord.",
//       it: "Goditi il pranzo a bordo.",
//       ru: "Насладитесь обедом на борту.",
//       pl: "Zjedz obiad na pokładzie.",
//       cz: "Vychutnejte si oběd na palubě."
//     }
//   },
//   {
//     step: "07",
//     title: {
//       en: "Return to Marina",
//       de: "Rückkehr zur Marina",
//       it: "Ritorno alla Marina",
//       ru: "Возвращение в марину",
//       pl: "Powrót do Mariny",
//       cz: "Návrat do mariny"
//     },
//     description: {
//       en: "Directly after lunch.",
//       de: "Direkt nach dem Mittagessen.",
//       it: "Subito dopo pranzo.",
//       ru: "Сразу после обеда.",
//       pl: "Bezpośrednio po obiedzie.",
//       cz: "Ihneď po obědě."
//     }
//   }
// ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment required.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//     it: "Paga dopo il tour — nessuna pagamento online richiesto.",
//     ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
//     pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//     cz: "Platba až po výletu — není vyžadována platba předem online."
//   },
//   disclaimer: {
//     en: "Dugongs and sea turtles are wild animals, so sightings cannot be guaranteed. We always do our best while respecting their natural environment.",
//     de: "Dugongs und Meeresschildkröten sind wilde Tiere, daher können Sichtungen nicht garantiert werden.",
//     it: "Dugonghi e tartarughe marine sono animali selvatici, pertanto gli avvistamenti non possono essere garantiti.",
//     ru: "Дюгони и черепахи — дикие животные, поэтому их наблюдение не гарантируется на 100%.",
//     pl: "Diugonie i żółwie morskie to dzikie zwierzęta, więc ich zobaczenie nie jest gwarantowane.",
//     cz: "Kapustňáci a mořské želvy jsou divoká zvířata, proto jejich pozorování nelze garantovat."
//   },
//   images: {
//     featured: "/images/tours/marsa-card.webp",
//     gallery: [
//       "/images/tours/marsa-1.webp",
//       "/images/tours/marsa-2.webp",
//       "/images/tours/marsa-3.webp"
//     ]
//   }
// },
// {
//   id: "abu-dabbab-speedboat",
//   slug: "abu-dabbab-speedboat-snorkeling",
//   type: 'snorkeling',
//   title: {
//     en: "Abu Dabbab Speedboat",
//     de: "Abu Dabbab Speedboot",
//     it: "Abu Dabbab in Speedboat",
//     ru: "Абу-Дабаб на скоростном катере",
//     pl: "Abu Dabbab Motorówką",
//     cz: "Abu Dabbab Rychločlunem"
//   },
//   subtitle: {
//    en: "Best chance to see dugongs up close",
//     de: "Beste Chance, Seekühe aus nächster Nähe zu sehen",
//     it: "La migliore possibilità di avvistare dugonghi da vicino",
//     ru: "Лучший шанс увидеть дюгоней вблизи",
//     pl: "Najlepsza szansa na zobaczenie diugoni z bliska",
//     cz: "Nejlepší šance spatřit dugongy zblízka"
//   },
//   category: {
//     en: "Speedboat & Snorkeling",
//     de: "Speedboot & Schnorcheln",
//     it: "Speedboat e Snorkeling",
//     ru: "Скоростной катер и снорклинг",
//     pl: "Motorówka i Snorkeling",
//     cz: "Rychločlun a šnorchlování"
//   },
//   price: {
//     amount: 70,
//     currency: "€",
//     unit: {
//       en: "per person",
//       de: "pro Person",
//       it: "per persona",
//       ru: "за человека",
//       pl: "za osobę",
//       cz: "za osobu"
//     }
//   },
//   duration: {
//     en: "3 Hours",
//     de: "3 Stunden",
//     it: "3 Ore",
//     ru: "3 часа",
//     pl: "3 godziny",
//     cz: "3 hodiny"
//   },
//   departure: {
//     en: "Hermes Marina",
//     de: "Hermes Marina",
//     it: "Hermes Marina",
//     ru: "Марина Гермес",
//     pl: "Hermes Marina ",
//     cz: "Hermes Marina"
//   },
//   schedule: {
//     departureTime: "Flexible (8:00 AM – 2:00 PM)",
//     returnTime: "3 hours after start"
//   },
//   overview: {
//     en: "Enjoy a 3-hour speedboat snorkeling adventure to Abu Dabbab, visiting multiple spots to search for dugongs, sea turtles, colorful coral reefs, and marine life with flexible departure times.",
//     de: "Genießen Sie ein 3-stündiges Schnorchel-Abenteuer mit dem Speedboot nach Abu Dabbab. Besuchen Sie mehrere Spots auf der Suche nach Seekühen, Schildkröten und bunten Korallenriffen.",
//     it: "Goditi un'avventura di 3 ore in speedboat ad Abu Dabbab, visitando più punti di snorkeling per cercare dugonghi, tartarughe marine e meravigliose barriere coralline.",
//     ru: "Наслаждайтесь 3-часовым приключением на скоростном катере в Абу-Дабаб: посещение нескольких локаций для поиска дюгоней, морских черепах и красивых коралловых рифов.",
//     pl: "Ciesz się 3-godzinną przygodą na motorówce do Abu Dabbab, odwiedzając kilka miejsc do snorkelingu w poszukiwaniu diugoni, żółwi morskich i rafy koralowej.",
//     cz: "Užijte si 3hodinové dobrodružství na rychločlunu do Abu Dabbab s návštěvou několika míst pro šnorchlování a hledání kapustňáků, želv a korálových útesů."
//   },
//   highlights: {
//     en: [
//       "Search for dugongs (sea cows) and their calves",
//       "Chance to spot sea turtles",
//       "Explore beautiful coral reefs & marine life",
//       "2 snorkeling sessions — 50 minutes each",
//       "Exciting speedboat journey to Abu Dabbab",
//       "Visit more than one snorkeling spot",
//       "Flexible start times between 8:00 AM and 2:00 PM"
//     ],
//     de: [
//       "Suche nach Seekühen (Dugongs) und ihren Jungen",
//       "Chance, Meeresschildkröten zu sehen",
//       "Wunderschöne Korallenriffe & Unterwasserwelt",
//       "2 Schnorchelgänge — je ca. 50 Minuten",
//       "Aufregende Speedboot-Fahrt nach Abu Dabbab",
//       "Besuch von mehr als einem Schnorchelspot",
//       "Flexible Startzeiten zwischen 08:00 und 14:00 Uhr"
//     ],
//     it: [
//       "Ricerca dei dugonghi e dei loro piccoli",
//       "Possibilità di avvistare tartarughe marine",
//       "Esplorazione di splendide barriere coralline",
//       "2 sessioni di snorkeling — 50 minuti ciascuna",
//       "Emozionante viaggio in speedboat verso Abu Dabbab",
//       "Visita di più di un punto di snorkeling",
//       "Orario di partenza flessibile tra le 8:00 e le 14:00"
//     ],
//     ru: [
//       "Поиск дюгоней (морских коров) и их детенышей",
//       "Шанс увидеть морских черепах",
//       "Красивые коралловые рифы и морская жизнь",
//       "2 сеанса снорклинга — по 50 минут каждый",
//       "Увлекательное путешествие на скоростном катере",
//       "Посещение нескольких локаций для снорклинга",
//       "Гибкое время старта с 08:00 до 14:00"
//     ],
//     pl: [
//       "Poszukiwanie diugoni i ich młodych",
//       "Szansa na spotkanie żółwi morskich",
//       "Odkrywanie pięknych raf koralowych",
//       "2 sesje snorkelingu — po 50 minut każda",
//       "Ekscytujący rejs motorówką do Abu Dabbab",
//       "Wizyta w więcej niż jednym miejscu do snorkelingu",
//       "Elastyczny czas rozpoczęcia między 8:00 a 14:00"
//     ],
//     cz: [
//       "Hledání kapustňáků a jejich mláďat",
//       "Šance vidět mořské želvy",
//       "Objevování krásných korálových útesů",
//       "2 šnorchlovací relace — 50 minut každá",
//       "Rychlá a vzrušující jízda rychločlunem",
//       "Návštěva více než jednoho místa na šnorchlování",
//       "Flexibilní čas odjezdu mezi 8:00 a 14:00"
//     ]
//   },
//   included: {
//     en: [
//       "Hotel transfer",
//       "Speedboat trip",
//       "Marina entrance fees",
//       "Full snorkeling equipment",
//       "2 snorkeling sessions (~50 mins each)",
//       "Cold drinks",
//       "Snacks"
//     ],
//     de: [
//       "Hotel-Transfer",
//       "Speedboot-Fahrt",
//       "Marina-Eintrittsgebühren",
//       "Komplette Schnorchelausrüstung",
//       "2 Schnorchelgänge (je ca. 50 Min.)",
//       "Kühle Getränke",
//       "Snacks"
//     ],
//     it: [
//       "Trasferimento dall'hotel",
//       "Gita in speedboat",
//       "Tasse d'ingresso alla marina",
//       "Attrezzatura completa da snorkeling",
//       "2 sessioni di snorkeling (~50 min ciascuna)",
//       "Bevande fresche",
//       "Snack"
//     ],
//     ru: [
//       "Трансфер из отеля и обратно",
//       "Поездка на скоростном катере",
//       "Сборы за вход в марину",
//       "Полное снаряжение для снорклинга",
//       "2 сеанса снорклинга (по 50 мин)",
//       "Холодные напитки",
//       "Закуски"
//     ],
//     pl: [
//       "Transfer z i do hotelu",
//       "Rejs motorówką",
//       "Opłaty wstępu do mariny",
//       "Pełny sprzęt do snorkelingu",
//       "2 sesje snorkelingu (po ok. 50 min)",
//       "Zimne napoje",
//       "Przekąski"
//     ],
//     cz: [
//       "Transfer z hotelu a zpět",
//       "Jízda rychločlunem",
//       "Vstupní poplatky do mariny",
//       "Kompletní vybavení na šnorchlování",
//       "2 šnorchlovací relace (~50 min každá)",
//       "Chlazené nápoje",
//       "Občerstvení"
//     ]
//   },
//   notIncluded: {
//     en: [
//       "Personal expenses",
//       "Underwater photos & videos"
//     ],
//     de: [
//       "Persönliche Ausgaben",
//       "Unterwasserfotos & Videos"
//     ],
//     it: [
//       "Spese personali",
//       "Foto e video subacquei"
//     ],
//     ru: [
//       "Личные расходы",
//       "Подводные фото и видео"
//     ],
//     pl: [
//       "Wydatki osobiste",
//       "Zdjęcia i filmy podwodne"
//     ],
//     cz: [
//       "Osobní výdaje",
//       "Podvodní fotografie a videa"
//     ]
//   },
//   whatToBring: {
//     en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
//     de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
//     it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
//     ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
//     pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
//     cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Under 5 years: Free",
//       de: "Unter 5 Jahren: Kostenlos",
//       it: "Sotto i 5 anni: Gratuito",
//       ru: "До 5 лет: Бесплатно",
//       pl: "Poniżej 5 lat: Bezpłatnie",
//       cz: "Pod 5 let: Zdarma"
//     },
//     from5to10: {
//       en: "5–10 years: 50% of adult price",
//       de: "5–10 Jahre: 50% des Erwachsenenpreises",
//       it: "5–10 anni: 50% del prezzo adulti",
//       ru: "5–10 лет: 50% от стоимости взрослого",
//       pl: "5–10 lat: 50% ceny dorosłego",
//       cz: "5–10 let: 50 % z ceny dospělého"
//     },
//     over10: {
//       en: "Over 10 years: Full adult price",
//       de: "Über 10 Jahre: Voller Erwachsenenpreis",
//       it: "Oltre i 10 anni: Prezzo intero adulto",
//       ru: "Старше 10 лет: Полная стоимость",
//       pl: "Powyżej 10 lat: Pełna cena",
//       cz: "Nad 10 let: Plná cena"
//     }
//   },
//  itinerary: [
//   {
//     step: "01",
//     title: {
//       en: "Hotel Pickup",
//       de: "Hotelabholung",
//       it: "Transfer dall'Hotel",
//       ru: "Трансфер из отеля",
//       pl: "Odbiór z Hotelu",
//       cz: "Vyzvednutí v hotelu"
//     },
//     description: {
//       en: "07:45 — Pickup from your hotel and transfer to Hermes Marina.",
//       de: "07:45 — Abholung vom Hotel und Transfer zur Hermes Marina.",
//       it: "07:45 — Pickup dal tuo hotel e trasferimento alla Hermes Marina.",
//       ru: "07:45 — Трансфер из вашего отеля в марину Гермес.",
//       pl: "07:45 — Odbiór z hotelu i transfer do Hermes Marina.",
//       cz: "07:45 — Vyzvednutí z vašeho hotelu a transfer do Hermes Marina."
//     }
//   },
//   {
//     step: "02",
//     title: {
//       en: "Speedboat Departure",
//       de: "Speedboot-Abfahrt",
//       it: "Partenza in Speedboat",
//       ru: "Отправление на катере",
//       pl: "Wypłynięcie Motorówką",
//       cz: "Odjezd rychločlunem"
//     },
//     description: {
//       en: "Board the speedboat at Hermes Marina and head to Abu Dabbab.",
//       de: "Einsteigen in der Hermes Marina und Fahrt nach Abu Dabbab.",
//       it: "Imbarco alla Hermes Marina e partenza per Abu Dabbab.",
//       ru: "Посадка на катер в марине Гермес и курс на Абу-Дабаб.",
//       pl: "Wejście na pokład w Hermes Marina i rejs do Abu Dabbab.",
//       cz: "Nástup v Hermes Marina a plavba do Abu Dabbab."
//     }
//   },
//   {
//     step: "03",
//     title: {
//       en: "1st Snorkeling Session — 50 Mins",
//       de: "1. Schnorcheln — 50 Min.",
//       it: "1ª Sessione Snorkeling — 50 min",
//       ru: "1-й снорклинг — 50 минут",
//       pl: "1. Snorkeling — 50 minut",
//       cz: "1. Šnorchlování — 50 min"
//     },
//     description: {
//       en: "First snorkeling stop searching for dugongs and turtles.",
//       de: "Erster Schnorchelstopp auf der Suche nach Seekühen und Schildkröten.",
//       it: "Prima tappa di snorkeling alla ricerca di dugonghi e tartarughe.",
//       ru: "Первая остановка для поиска дюгоней и черепах.",
//       pl: "Pierwszy przystanek na snorkeling i poszukiwanie diugoni.",
//       cz: "První šnorchlování a hledání kapustňáků a želv."
//     }
//   },
//   {
//     step: "04",
//     title: {
//       en: "2nd Snorkeling Session — 50 Mins",
//       de: "2. Schnorcheln — 50 Min.",
//       it: "2ª Sessione Snorkeling — 50 min",
//       ru: "2-й снорклинг — 50 минут",
//       pl: "2. Snorkeling — 50 minut",
//       cz: "2. Šnorchlování — 50 min"
//     },
//     description: {
//       en: "Explore a second spot with vibrant coral reefs and marine life.",
//       de: "Erkunden Sie einen zweiten Spot mit lebendigen Riffen.",
//       it: "Esplora un secondo punto con barriere coralline mozzafiato.",
//       ru: "Вторая локация с яркими коралловыми рифами.",
//       pl: "Odkrywaj drugie miejsce z tętniącą życiem rafą koralową.",
//       cz: "Prozkoumejte druhé místo s živými korálovými útesy."
//     }
//   },
//   {
//     step: "05",
//     title: {
//       en: "Return & Hotel Drop-off",
//       de: "Rückfahrt & Hotelabgabe",
//       it: "Rientro e Trasferimento",
//       ru: "Возвращение в отель",
//       pl: "Powrót do Hotelu",
//       cz: "Návrat do hotelu"
//     },
//     description: {
//       en: "Return by speedboat to the marina and transfer back to your hotel.",
//       de: "Rückfahrt mit dem Speedboot zur Marina und Transfer zum Hotel.",
//       it: "Rientro in speedboat alla marina e trasferimento in hotel.",
//       ru: "Возвращение на катере в марину и трансфер в отель.",
//       pl: "Powrót motorówką do mariny i transfer do hotelu.",
//       cz: "Návrat rychločlunem do mariny a transfer do hotelu."
//     }
//   }
// ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment required.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//     it: "Paga dopo il tour — nessuna pagamento online richiesto.",
//     ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
//     pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//     cz: "Platba až po výletu — není vyžadována platba předem online."
//   },
//   disclaimer: {
//     en: "Dugongs and sea turtles are wild animals in their natural environment, so sightings cannot be 100% guaranteed.",
//     de: "Dugongs und Meeresschildkröten sind wilde Tiere, daher können Sichtungen nicht zu 100% garantiert werden.",
//     it: "Dugonghi e tartarughe marine sono animali selvatici, gli avvistamenti non possono essere garantiti al 100%.",
//     ru: "Дюгони и черепахи — дикие животные, поэтому их наблюдение не может быть гарантировано на 100%.",
//     pl: "Diugonie i żółwie morskie to dzikie zwierzęta, więc ich zobaczenie nie jest gwarantowane w 100%.",
//     cz: "Kapustňáci a mořské želvy jsou divoká zvířata, proto jejich pozorování nelze 100% garantovat."
//   },
//   images: {
//     featured: "/images/tours/speed-card.webp",
//     gallery: [
//       "/images/tours/speed-1.webp",
//       "/images/tours/speed-2.webp",
//       "/images/tours/speed-3.webp"
//     ]
//   }
// },
// {
//   id: "hamata-islands",
//   slug: "hamata-islands",
//   type: 'snorkeling',
//   title: {
//     en: "Hamata Islands",
//     de: "Hamata Inseln",
//     it: "Isole Hamata",
//     ru: "Острова Хамата",
//     pl: "Wyspy Hamata",
//     cz: "Ostrovy Hamata"
//   },
//   subtitle: {
//     en: "Snorkeling & Island Experience",
//     de: "Schnorchel- & Inselerlebnis",
//     it: "Esperienza di snorkeling e isole",
//     ru: "Сноркелинг и поездка на острова",
//     pl: "Snorkeling i wyprawa na wyspy",
//     cz: "Šnorchlování a výlet na ostrovy"
//   },
//   category: {
//     en: "Island Trip",
//     de: "Inselausflug",
//     it: "Escursione alle isole",
//     ru: "Поездка на острова",
//     pl: "Wycieczka na wyspy",
//     cz: "Výlet na ostrovy"
//   },
//   price: {
//     amount: 70,
//     currency: "€",
//     unit: {
//       en: "per person",
//       de: "pro Person",
//       it: "a persona",
//       ru: "за человека",
//       pl: "za osobę",
//       cz: "za osobu"
//     }
//   },
//   duration: {
//     en: "8 hours",
//     de: "8 Stunden",
//     it: "8 ore",
//     ru: "8 часов",
//     pl: "8 godzin",
//     cz: "8 hodin"
//   },
//   departure: {
//     en: "Hamata Marina",
//     de: "Hamata Yachthafen",
//     it: "Marina di Hamata",
//     ru: "Марина Хамата",
//     pl: "Przystań Hamata",
//     cz: "Přístav Hamata"
//   },
//   schedule: {
//     departureTime: "08:30 AM",
//     returnTime: "04:00 PM"
//   },
//   overview: {
//     en: "Discover the beauty of the Hamata Islands, south of Marsa Alam, on a full-day Red Sea adventure. Cruise through crystal-clear waters, explore beautiful islands, and enjoy snorkeling among colorful coral reefs.",
//     de: "Entdecken Sie die Schönheit der Hamata-Inseln südlich von Marsa Alam bei einem ganztägigen Abenteuer im Roten Meer. Fahren Sie durch kristallklares Wasser und schnorcheln Sie an bunten Korallenriffen.",
//     it: "Scopri la bellezza delle isole Hamata, a sud di Marsa Alam, in un'avventura di un'intera giornata nel Mar Rosso. Naviga in acque cristalline e fai snorkeling tra barriere coralline colorate.",
//     ru: "Откройте для себя красоту островов Хамата к югу от Марса-Алама во время однодневного приключения в Красном море. Наслаждайтесь сноркелингом среди коралловых рифов.",
//     pl: "Odkryj piękno wysp Hamata na południe od Marsa Alam podczas całodniowej przygody na Morzu Czerwonym. Ciesz się snurkowaniem wśród raf koralowych.",
//     cz: "Objevte krásu ostrovů Hamata jižně od Marsa Alam během celodenního dobrodružství v Rudém moři. Užijte si šnorchlování u barevným korálových útesů."
//   },
//   highlights: {
//     en: [
//       "Explore the beautiful Hamata Islands",
//       "Visit multiple islands",
//       "Snorkeling in crystal-clear Red Sea water",
//       "Colorful coral reefs & marine life",
//       "Swimming & island exploration",
//       "Fresh buffet lunch onboard",
//       "Water, tea, coffee & soft drinks"
//     ],
//     de: [
//       "Erkunden Sie die schönen Hamata-Inseln",
//       "Besuchen Sie mehrere Inseln",
//       "Schnorcheln im kristallklaren Wasser des Roten Meeres",
//       "Bunte Korallenriffe & Meereslebewesen",
//       "Schwimmen & Erkundung der Inseln",
//       "Frisches Mittagsbuffet an Bord",
//       "Wasser, Tee, Kaffee & Erfrischungsgetränke"
//     ],
//     it: [
//       "Esplora le bellissime isole Hamata",
//       "Visita più isole",
//       "Snorkeling nelle acque cristalline del Mar Rosso",
//       "Barriere coralline colorate e vita marina",
//       "Nuoto ed esplorazione delle isole",
//       "Pranzo a buffet fresco a bordo",
//       "Acqua, tè, caffè e bevande analcoliche"
//     ],
//     ru: [
//       "Исследуйте прекрасные острова Хамата",
//       "Посетите несколько островов",
//       "Сноркелинг в кристально чистой воде Красного моря",
//       "Красочные коралловые рифы и морская жизнь",
//       "Плавание и исследование островов",
//       "Свежий обед «шведский стол» на борту",
//       "Вода, чай, кофе и безалкогольные напитки"
//     ],
//     pl: [
//       "Odkryj piękne wyspy Hamata",
//       "Odwiedź wiele wysp",
//       "Snurkowanie w krystalicznie czystej wodzie",
//       "Kolorowe rafy koralowe i życie morskie",
//       "Pływanie i zwiedzanie wysp",
//       "Świeży lunch w formie bufetu na pokładzie",
//       "Woda, herbata, kawa i napoje bezalkoholowe"
//     ],
//     cz: [
//       "Prozkoumejte krásné ostrovy Hamata",
//       "Navštivte několik ostrovů",
//       "Šnorchlování v křišťálově čisté vodě Rudého moře",
//       "Barevné korálové útesy a mořský život",
//       "Plavání a průzkum ostrovů",
//       "Čerstvý bufetový oběd na palubě",
//       "Voda, čaj, káva a nealkoholické nápoje"
//     ]
//   },
//   included: {
//     en: [
//       "Hotel pickup & drop-off",
//       "Transportation to and from Hamata Marina",
//       "Boat trip",
//       "Professional multilingual snorkeling guide",
//       "Full snorkeling equipment",
//       "Fresh buffet lunch onboard",
//       "Water, tea, coffee & soft drinks"
//     ],
//     de: [
//       "Abholung und Rücktransfer zum Hotel",
//       "Transfer zum und vom Yachthafen Hamata",
//       "Bootsfahrt",
//       "Professioneller, mehrsprachiger Schnorchelführer",
//       "Vollständige Schnorchelausrüstung",
//       "Frisches Mittagsbuffet an Bord",
//       "Wasser, Tee, Kaffee & Erfrischungsgetränke"
//     ],
//     it: [
//       "Prelievo e rientro in hotel",
//       "Trasporto da e per la Marina di Hamata",
//       "Gita in barca",
//       "Guida di snorkeling multilingue professionale",
//       "Attrezzatura completa per lo snorkeling",
//       "Pranzo a buffet fresco a bordo",
//       "Acqua, tè, caffè e bevande analcoliche"
//     ],
//     ru: [
//       "Трансфер из отеля и обратно",
//       "Трансфер до марины Хамата и обратно",
//       "Поездка на лодке",
//       "Профессиональный многоязычный гид по сноркелингу",
//       "Полный комплект оборудования для сноркелинга",
//       "Свежий обед «шведский стол» на борту",
//       "Вода, чай, кофе и безалкогольные напитки"
//     ],
//     pl: [
//       "Odbiór i dowóz do hotelu",
//       "Transport do i z przystani Hamata",
//       "Wycieczka łodzią",
//       "Profesjonalny wielojęzyczny przewodnik",
//       "Kompletny sprzęt do snurkowania",
//       "Świeży lunch w formie bufetu na pokładzie",
//       "Woda, herbata, kawa i napoje bezalkoholowe"
//     ],
//     cz: [
//       "Vyzvednutí a odvoz v hotelu",
//       "Doprava do přístavu Hamata a zpět",
//       "Výlet lodí",
//       "Profesionální vícejazyčný průvodce",
//       "Kompletní vybavení na šnorchlování",
//       "Čerstvý bufetový oběd na palubě",
//       "Voda, čaj, káva a nealkoholické nápoje"
//     ]
//   },
//   notIncluded: {
//     en: ["Personal expenses", "Any additional services not mentioned above"],
//     de: ["Persönliche Ausgaben", "Zusätzliche Leistungen, die nicht oben genannt wurden"],
//     it: ["Spese personali", "Eventuali servizi aggiuntivi non menzionati sopra"],
//     ru: ["Личные расходы", "Любые дополнительные услуги, не указанные выше"],
//     pl: ["Wydatki osobizte", "Wszelkie dodatkowe usługi niewymienione powyżej"],
//     cz: ["Osobní výdaje", "Jakékoliv další služby neuvedené výše"]
//   },
//   whatToBring: {
//     en: ["Swimwear", "Towel", "Sunscreen", "Sunglasses", "Hat", "Comfortable clothes", "Camera / phone"],
//     de: ["Badebekleidung", "Handtuch", "Sonnencreme", "Sonnenbrille", "Hut", "Bequeme Kleidung", "Kamera / Handy"],
//     it: ["Costume da bagno", "Asciugamano", "Crema solare", "Occhiali da sole", "Cappello", "Abiti comodi", "Fotocamera / telefono"],
//     ru: ["Купальник", "Полотенце", "Солнцезащитный крем", "Солнцезащитные очки", "Головной убор", "Удобная одежда", "Камера / телефон"],
//     pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Okulary przeciwsłoneczne", "Czapka", "Wygodne ubrania", "Aparat / telefon"],
//     cz: ["Plavky", "Ručník", "Opalovací krém", "Sluneční brýle", "Klobouk", "Pohodlné oblečení", "Fotoaparát / telefon"]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Free",
//       de: "Kostenlos",
//       it: "Gratuito",
//       ru: "Бесплатно",
//       pl: "Bezpłatnie",
//       cz: "Zdarma"
//     },
//     from5to10: {
//       en: "50% of adult price",
//       de: "50% des Erwachsenenpreises",
//       it: "50% del prezzo per adulti",
//       ru: "50% от стоимости для взрослых",
//       pl: "50% ceny dla dorosłych",
//       cz: "50 % z ceny pro dospělé"
//     },
//     over10: {
//       en: "Full adult price",
//       de: "Voller Erwachsenenpreis",
//       it: "Prezzo intero per adulti",
//       ru: "Полная стоимость для взрослых",
//       pl: "Pełna cena dla dorosłych",
//       cz: "Plná cena pro dospělé"
//     }
//   },
//   itinerary: [
//   {
//     step: "01",
//     title: {
//       en: "Hotel Pickup",
//       de: "Hotelabholung",
//       it: "Prelievo in hotel",
//       ru: "Трансфер из отеля",
//       pl: "Odbiór z hotelu",
//       cz: "Vyzvednutí v hotelu"
//     },
//     description: {
//       en: "07:00 AM — Pickup from your hotel and transfer to Hamata Marina.",
//       de: "07:00 Uhr — Abholung von Ihrem Hotel und Transfer zum Yachthafen Hamata.",
//       it: "07:00 — Prelievo dal vostro hotel e trasferimento alla Marina di Hamata.",
//       ru: "07:00 — Трансфер из вашего отеля в марину Хамата.",
//       pl: "07:00 — Odbiór z hotelu i transfer do przystani Hamata.",
//       cz: "07:00 — Vyzvednutí z hotelu a transfer do přístavu Hamata."
//     }
//   },
//   {
//     step: "02",
//     title: {
//       en: "Hamata Marina",
//       de: "Hamata Yachthafen",
//       it: "Marina di Hamata",
//       ru: "Марина Хамата",
//       pl: "Przystań Hamata",
//       cz: "Přístav Hamata"
//     },
//     description: {
//       en: "Arrive at the marina and board the boat.",
//       de: "Ankunft im Yachthafen und Einschiffung.",
//       it: "Arrivo al porto turistico e imbarco.",
//       ru: "Прибытие в марину и посадка на лодку.",
//       pl: "Przybycie do przystani i wejście na pokład łodzi.",
//       cz: "Příjezd do přístavu a nástup na lod."
//     }
//   },
//   {
//     step: "03",
//     title: {
//       en: "Boat Trip",
//       de: "Bootsfahrt",
//       it: "Gita in barca",
//       ru: "Поездка на лодке",
//       pl: "Wycieczka łodzią",
//       cz: "Výlet lodí"
//     },
//     description: {
//       en: "Cruise through the beautiful southern Red Sea toward the Hamata Islands.",
//       de: "Fahrt durch das wunderschöne südliche Rote Meer zu den Hamata-Inseln.",
//       it: "Navigazione attraverso lo splendido Mar Rosso meridionale verso le isole Hamata.",
//       ru: "Круиз по прекрасному южному Красному морю к островам Хамата.",
//       pl: "Rejs przez piękne południowe Morze Czerwone w kierunku wysp Hamata.",
//       cz: "Plavba jižním Rudým mořem směrem k ostrovům Hamata."
//     }
//   },
//   {
//     step: "04",
//     title: {
//       en: "1st Snorkeling Stop",
//       de: "1. Schnorchelstopp",
//       it: "1ª sosta per lo snorkeling",
//       ru: "1-я остановка для сноркелинга",
//       pl: "1. Przystanek na snurkowanie",
//       cz: "1. Zastávka na šnorchlování"
//     },
//     description: {
//       en: "Explore the colorful coral reefs and discover the rich marine life.",
//       de: "Erkunden Sie die bunten Korallenriffe und entdecken Sie die reiche Unterwasserwelt.",
//       it: "Esplora le barriere coralline colorate e scopri la ricca vita marina.",
//       ru: "Исследуйте красочные коралловые рифы и богатую морскую жизнь.",
//       pl: "Odkryj kolorowe rafy koralowe i bogate życie morskie.",
//       cz: "Prozkoumejte barevné korálové útesy a bohatý mořský život."
//     }
//   },
//   {
//     step: "05",
//     title: {
//       en: "Island Visit",
//       de: "Inselbesuch",
//       it: "Visita all'isola",
//       ru: "Посещение острова",
//       pl: "Wizyta na wyspie",
//       cz: "Návštěva ostrova"
//     },
//     description: {
//       en: "Explore one of the beautiful Hamata Islands and enjoy the natural surroundings.",
//       de: "Erkunden Sie eine der schönen Hamata-Inseln und genießen Sie die Natur.",
//       it: "Esplora una delle bellissime isole Hamata e goditi l'ambiente naturale.",
//       ru: "Исследуйте один из красивых островов Хамата и насладитесь природой.",
//       pl: "Odkryj jedną z pięknych wysp Hamata i podziwiaj otaczającą przyrodę.",
//       cz: "Prozkoumejte jeden z krásných ostrovů Hamata a užijte si přírodu."
//     }
//   },
//   {
//     step: "06",
//     title: {
//       en: "2nd Snorkeling Stop",
//       de: "2. Schnorchelstopp",
//       it: "2ª sosta per lo snorkeling",
//       ru: "2-я остановка для сноркелинга",
//       pl: "2. Przystanek na snurkowanie",
//       cz: "2. Zastávka na šnorchlování"
//     },
//     description: {
//       en: "Enjoy another snorkeling experience in the crystal-clear waters.",
//       de: "Genießen Sie ein weiteres Schnorchelerlebnis im kristallklaren Wasser.",
//       it: "Goditi un'altra esperienza di snorkeling nelle acque cristalline.",
//       ru: "Насладитесь еще одним сноркелингом в кристально чистой воде.",
//       pl: "Ciesz się kolejnym snurkowaniem w krystalicznie czystej wodzie.",
//       cz: "Užijte si další šnorchlování v křišťálově čisté vodě."
//     }
//   },
//   {
//     step: "07",
//     title: {
//       en: "Lunch",
//       de: "Mittagessen",
//       it: "Pranzo",
//       ru: "Обед",
//       pl: "Lunch",
//       cz: "Oběd"
//     },
//     description: {
//       en: "Enjoy a fresh buffet lunch onboard.",
//       de: "Genießen Sie ein frisches Mittagsbuffet an Bord.",
//       it: "Goditi un fresco pranzo a buffet a bordo.",
//       ru: "Насладитесь свежим обедом «шведский стол» на борту.",
//       pl: "Zjedz świeży lunch w formie bufetu na pokładzie.",
//       cz: "Vychutnejte si čerstvý oběd formou bufetu na palubě."
//     }
//   },
//   {
//     step: "08",
//     title: {
//       en: "Return to Marina",
//       de: "Rückkehr zum Yachthafen",
//       it: "Ritorno al porto",
//       ru: "Возвращение в марину",
//       pl: "Powrót do przystani",
//       cz: "Návrat do přístavu"
//     },
//     description: {
//       en: "Relax onboard during the journey back to the marina.",
//       de: "Entspannen Sie sich an Bord während der Rückfahrt zum Yachthafen.",
//       it: "Rilassati a bordo durante il viaggio di ritorno.",
//       ru: "Отдыхайте на борту во время обратного пути в марину.",
//       pl: "Zrelaksuj się na pokładzie podczas rejsu powrotnego.",
//       cz: "Odpočiňte si na palubě během zpáteční cesty."
//     }
//   },
//   {
//     step: "09",
//     title: {
//       en: "Hotel Transfer",
//       de: "Hoteltransfer",
//       it: "Trasferimento in hotel",
//       ru: "Трансфер в отель",
//       pl: "Transfer do hotelu",
//       cz: "Transfer do hotelu"
//     },
//     description: {
//       en: "Transfer back to your hotel around 4:00 PM.",
//       de: "Rücktransfer zu Ihrem Hotel gegen 16:00 Uhr.",
//       it: "Rientro in hotel intorno alle 16:00.",
//       ru: "Трансфер обратно в отель около 16:00.",
//       pl: "Powrót do hotelu około godziny 16:00.",
//       cz: "Návrat do hotelu kolem 16:00."
//     }
//   }
// ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment required.",
//     de: "Bezahlen Sie nach der Reise — keine Online-Zahlung erforderlich.",
//     it: "Paga dopo il viaggio — nessun pagamento online richiesto.",
//     ru: "Оплата после поездки — онлайн-оплата не требуется.",
//     pl: "Zapłać po wycieczce — płatność online nie jest wymagana.",
//     cz: "Platba až po výletu — není vyžadována žádná platba online."
//   },
//   disclaimer: {
//     en: "The Hamata Islands are part of a protected natural environment. We always respect the islands, coral reefs, marine life and natural surroundings.",
//     de: "Die Hamata-Inseln sind Teil einer geschützten Umwelt. Wir respektieren stets die Inseln, Korallenriffe und die Meereswelt.",
//     it: "Le isole Hamata fanno parte di un ambiente naturale protetto. Rispettiamo sempre le isole, le barriere coralline e la vita marina.",
//     ru: "Острова Хамата являются частью охраняемой природной среды. Мы всегда уважаем острова, коралловые рифы и морскую жизнь.",
//     pl: "Wyspy Hamata są częścią chronionego środowiska naturalnego. Zawsze szanujemy wyspy, rafy koralowe i życie morskie.",
//     cz: "Ostrovy Hamata jsou součástí chráněného přírodního prostředí. Vždy respektujeme ostrovy, korálové útesy a mořský život."
//   },
//   images: {
//     featured: "/images/tours/hamata-card.webp",
//     gallery: [
//       "/images/tours/hamata-2.webp",
//       "/images/tours/hamata-3.webp",
//       "/images/tours/hamata-1.webp",
//     ]
//   }
// },
// {
//     id: "wadi-el-gemal-islands",
//     slug: "wadi-el-gemal-islands",
//     type: 'snorkeling',
//     title: {
//       en: "Wadi El Gemal Islands",
//       de: "Wadi El Gemal Inseln",
//       it: "Isole Wadi El Gemal",
//       ru: "Острова Вади-эль-Хемаль",
//       pl: "Wyspy Wadi El Gemal",
//       cz: "Ostrovy Wadi El Gemal"
//     },
//     subtitle: {
//       en: "Egyptian Maldives",
//       de: "Ägyptische Malediven",
//       it: "Maldive Egiziane",
//       ru: "Египетские Мальдивы",
//       pl: "Egipskie Malediwy",
//       cz: "Egyptské Maledivy"
//     },
//     category: {
//       en: "Water Adventure",
//       de: "Wasserabenteuer",
//       it: "Avventura Acquatica",
//       ru: "Водное приключение",
//       pl: "Przygoda Wodna",
//       cz: "Vodní dobrodružství"
//     },
//     price: {
//       amount: 75,
//       currency: "€",
//       unit: {
//         en: "per person",
//         de: "pro Person",
//         it: "a persona",
//         ru: "с человека",
//         pl: "za osobę",
//         cz: "za osobu"
//       }
//     },
//     duration: {
//       en: "4 hours",
//       de: "4 Stunden",
//       it: "4 ore",
//       ru: "4 часа",
//       pl: "4 godziny",
//       cz: "4 hodiny"
//     },
//     departure: {
//       en: "Wadi El Gemal Marina",
//       de: "Wadi El Gemal Yachthafen",
//       it: "Marina di Wadi El Gemal",
//       ru: "Марина Вади-эль-Хемаль",
//       pl: "Przystań Wadi El Gemal",
//       cz: "Přístav Wadi El Gemal"
//     },
//     overview: {
//       en: "Enjoy a beautiful speedboat adventure through the islands and crystal-clear waters of Wadi El Gemal, south of Marsa Alam. Visit more than one island, enjoy around 45 minutes of island and beach time, and experience 2 snorkeling sessions — approximately 45 minutes each.",
//       de: "Genießen Sie ein wunderschönes Schnellboot-Abenteuer durch die Inseln und das kristallklare Wasser von Wadi El Gemal südlich von Marsa Alam. Besuchen Sie mehr als eine Insel, genießen Sie ca. 45 Minuten Insel- und Strandzeit und erleben Sie 2 Schnorchelgänge von jeweils ca. 45 Minuten.",
//       it: "Goditi una splendida avventura in motoscafo tra le isole e le acque cristalline di Wadi El Gemal, a sud di Marsa Alam. Visita più di un'isola, goditi circa 45 minuti di tempo sull'isola e in spiaggia e sperimenta 2 sessioni di snorkeling di circa 45 minuti ciascuna.",
//       ru: "Насладитесь прекрасным приключением на скоростном катере по островам и кристально чистым водам Вади-эль-Хемаль к югу от Марса-Алама. Посетите более одного острова, насладитесь примерно 45 минутами отдыха на острове и пляже, а также совершите 2 сеанса сноркелинга продолжительностью около 45 минут каждый.",
//       pl: "Ciesz się wspaniałą przygodą motorówką po wyspach i krystalicznie czystych wodach Wadi El Gemal na południe od Marsa Alam. Odwiedź więcej niż jedną wyspę, ciesz się około 45 minutami czasu na wyspie i plaży oraz weź udział w 2 sesjach snorkellingu trwających po około 45 minut.",
//       cz: "Užijte si nádherné dobrodružství na rychlém člunu mezi ostrovy a křišťálově čistou vodou Wadi El Gemal jižně od Marsa Alam. Navštivte více než jeden ostrov, užijte si přibližně 45 minut času na ostrově a pláži a zažijte 2 šnorchlovací relace trvající přibližně 45 minut."
//     },
//     highlights: {
//       en: [
//         "Explore more than one Wadi El Gemal island",
//         "Speedboat adventure",
//         "1 dolphin-area snorkeling session — approximately 45 minutes",
//         "1 coral reef snorkeling session — approximately 45 minutes",
//         "Chance to see dolphins",
//         "45 minutes of island and beach time",
//         "Colorful coral reefs & marine life",
//         "Crystal-clear Red Sea water",
//         "Beautiful natural scenery",
//         "Local guide"
//       ],
//       de: [
//         "Erkunden Sie mehr als eine Wadi El Gemal Insel",
//         "Schnellboot-Abenteuer",
//         "1 Schnorchelgang im Delfinbereich — ca. 45 Minuten",
//         "1 Schnorchelgang am Korallenriff — ca. 45 Minuten",
//         "Chance, Delfine zu sehen",
//         "45 Minuten Insel- und Strandzeit",
//         "Farbenfrohe Korallenriffe & Meereslebewesen",
//         "Kristallklares Rotmeerwasser",
//         "Wunderschöne Naturlandschaft",
//         "Lokaler Guide"
//       ],
//       it: [
//         "Esplora più di un'isola di Wadi El Gemal",
//         "Avventura in motoscafo",
//         "1 sessione di snorkeling nell'area dei delfini — circa 45 minuti",
//         "1 sessione di snorkeling nella barriera corallina — circa 45 minuti",
//         "Possibilità di vedere i delfini",
//         "45 minuti di tempo sull'isola e in spiaggia",
//         "Barriere coralline colorate e vita marina",
//         "Acqua cristallina del Mar Rosso",
//         "Splendido scenario naturale",
//         "Guida locale"
//       ],
//       ru: [
//         "Исследуйте несколько островов Вади-эль-Хемаль",
//         "Приключение на скоростном катере",
//         "1 сеанс сноркелинга в районе дельфинов — около 45 минут",
//         "1 сеанс сноркелинга у кораллового рифа — около 45 минут",
//         "Шанс увидеть дельфинов",
//         "45 минут отдыха на острове и пляже",
//         "Красочные коралловые рифы и морская фауна",
//         "Кристально чистая вода Красного моря",
//         "Красивые природные пейзажи",
//         "Местный гид"
//       ],
//       pl: [
//         "Odkryj więcej niż jedną wyspę Wadi El Gemal",
//         "Przygoda motorówką",
//         "1 sesja snorkellingu w obszarze delfinów — ok. 45 minut",
//         "1 sesja snorkellingu przy rafie koralowej — ok. 45 minut",
//         "Szansa na zobaczenie delfinów",
//         "45 minut czasu na wyspie i plaży",
//         "Kolorowe rafy koralowe i życie morskie",
//         "Krystalicznie czysta woda Morza Czerwonego",
//         "Piękna przyroda",
//         "Lokalny przewodnik"
//       ],
//       cz: [
//         "Prozkoumejte více než jeden ostrov Wadi El Gemal",
//         "Dobrodružství na rychlém člunu",
//         "1 šnorchlování v oblasti delfínů — cca 45 minut",
//         "1 šnorchlování u korálového útesu — cca 45 minut",
//         "Šance vidět delfíny",
//         "45 minut času na ostrově a pláži",
//         "Pestrobarevné korálové útesy a mořský život",
//         "Křišťálově čistá voda Rudého moře",
//         "Krásná přírodní scenérie",
//         "Místní průvodce"
//       ]
//     },
//     included: {
//       en: [
//         "Hotel pickup & drop-off from Marsa Alam",
//         "Transportation to and from Wadi El Gemal Marina",
//         "Speedboat trip",
//         "1 dolphin-area snorkeling session",
//         "1 coral reef snorkeling session",
//         "Island visit & beach time",
//         "Snorkeling equipment",
//         "Soft drinks",
//         "Mineral water",
//         "Local guide"
//       ],
//       de: [
//         "Hotelabholung & -rückgabe ab Marsa Alam",
//         "Transport zum und vom Yachthafen Wadi El Gemal",
//         "Schnellbootfahrt",
//         "1 Schnorchelgang im Delfinbereich",
//         "1 Schnorchelgang am Korallenriff",
//         "Inselbesuch & Strandzeit",
//         "Schnorchelausrüstung",
//         "Alkoholfreie Getränke",
//         "Mineralwasser",
//         "Lokaler Guide"
//       ],
//       it: [
//         "Prelievo e rientro in hotel da Marsa Alam",
//         "Trasporto da e per il Marina di Wadi El Gemal",
//         "Viaggio in motoscafo",
//         "1 sessione di snorkeling nell'area dei delfini",
//         "1 sessione di snorkeling nella barriera corallina",
//         "Visita dell'isola e tempo in spiaggia",
//         "Attrezzatura da snorkeling",
//         "Bevande analcoliche",
//         "Acqua minerale",
//         "Guida locale"
//       ],
//       ru: [
//         "Трансфер из отеля и обратно из Марса-Алама",
//         "Транспорт в марину Вади-эль-Хемаль и обратно",
//         "Поездка на скоростном катере",
//         "1 сеанс сноркелинга в районе дельфинов",
//         "1 сеанс сноркелинга у кораллового рифа",
//         "Посещение острова и время на пляже",
//         "Оборудование для сноркелинга",
//         "Безалкогольные напитки",
//         "Минеральная вода",
//         "Местный гид"
//       ],
//       pl: [
//         "Odbiór i dowóz do hotelu z Marsa Alam",
//         "Transport do i z przystani Wadi El Gemal",
//         "Rejs motorówką",
//         "1 sesja snorkellingu w obszarze delfinów",
//         "1 sesja snorkellingu przy rafie koralowej",
//         "Wizyta na wyspie i czas na plaży",
//         "Sprzęt do snorkellingu",
//         "Napoje bezalkoholowe",
//         "Woda mineralna",
//         "Lokalny przewodnik"
//       ],
//       cz: [
//         "Vyzvednutí a odvoz v hotelu z Marsa Alam",
//         "Doprava do a z přístavu Wadi El Gemal",
//         "Výlet rychlým člunem",
//         "1 šnorchlování v oblasti delfínů",
//         "1 šnorchlování u korálového útesu",
//         "Návštěva ostrova a čas na pláži",
//         "Šnorchlovací vybavení",
//         "Nealkoholické nápoje",
//         "Minerální voda",
//         "Místní průvodce"
//       ]
//     },
//     notIncluded: {
//       en: [
//         "Personal expenses",
//         "Optional activities or services not mentioned above",
//         "Underwater photos & videos"
//       ],
//       de: [
//         "Persönliche Ausgaben",
//         "Optionale Aktivitäten oder Services, die oben nicht erwähnt wurden",
//         "Unterwasserfotos & -videos"
//       ],
//       it: [
//         "Spese personali",
//         "Attività o servizi facoltativi non menzionati sopra",
//         "Foto e video subacquei"
//       ],
//       ru: [
//         "Личные расходы",
//         "Дополнительные мероприятия или услуги, не упомянутые выше",
//         "Подводные фото и видео"
//       ],
//       pl: [
//         "Wydatki osobiste",
//         "Opcjonalne aktywności lub usługi niewymienione powyżej",
//         "Zdjęcia i filmy pod wodą"
//       ],
//       cz: [
//         "Osobní výdaje",
//         "Volitelné aktivity nebo služby, které nejsou uvedeny výše",
//         "Podvodní fotky a videa"
//       ]
//     },
//     whatToBring: {
//       en: ["Swimwear", "Towel", "Sunscreen", "Sunglasses", "Hat", "Waterproof camera (optional)"],
//       de: ["Badebekleidung", "Handtuch", "Sonnencreme", "Sonnenbrille", "Hut", "Wasserdichte Kamera (optional)"],
//       it: ["Costume da bagno", "Asciugamano", "Crema solare", "Occhiali da sole", "Cappello", "Fotocamera subacquea (opzionale)"],
//       ru: ["Купальник", "Полотенце", "Солнцезащитный крем", "Солнцезащитные очки", "Головной убор", "Водонепроницаемая камера (по желанию)"],
//       pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Okulary przeciwsłoneczne", "Czapka", "Wodoodporny aparat (opcjonalnie)"],
//       cz: ["Plavky", "Ručník", "Opalovací krém", "Sluneční brýle", "Klobouk", "Vodotěsný fotoaparát (volitelně)"]
//     },
//     childrenPolicy: {
//       under5: {
//         en: "Under 5 years: Free",
//         de: "Unter 5 Jahren: Kostenlos",
//         it: "Sotto i 5 anni: Gratuito",
//         ru: "До 5 лет: Бесплатно",
//         pl: "Poniżej 5 lat: Bezpłatnie",
//         cz: "Do 5 let: Zdarma"
//       },
//       from5to10: {
//         en: "5–10 years: 50% of adult price",
//         de: "5–10 Jahre: 50% des Erwachsenenpreises",
//         it: "5–10 anni: 50% del prezzo adulto",
//         ru: "5–10 лет: 50% от стоимости для взрослых",
//         pl: "5–10 lat: 50% ceny dla dorosłych",
//         cz: "5–10 let: 50 % dospělé ceny"
//       },
//       over10: {
//         en: "Over 10 years: Full adult price",
//         de: "Über 10 Jahre: Voller Erwachsenenpreis",
//         it: "Oltre i 10 anni: Prezzo intero adulto",
//         ru: "Старше 10 лет: Полная стоимость для взрослых",
//         pl: "Powyżej 10 lat: Pełna cena dla dorosłych",
//         cz: "Nad 10 let: Plná dospělá cena"
//       }
//     },
//    itinerary: [
//   {
//     step: "01",
//     title: {
//       en: "Hotel Pickup",
//       de: "Hotelabholung",
//       it: "Prelievo in hotel",
//       ru: "Трансфер из отеля",
//       pl: "Odbiór z hotelu",
//       cz: "Vyzvednutí v hotelu"
//     },
//     description: {
//       en: "07:30 AM — Pickup from your hotel and transfer to Wadi El Gemal Marina.",
//       de: "07:30 Uhr — Abholung von Ihrem Hotel und Transfer zum Yachthafen Wadi El Gemal.",
//       it: "07:30 — Prelievo dal vostro hotel e trasferimento alla Marina di Wadi El Gemal.",
//       ru: "07:30 — Трансфер из вашего отеля в марину Вади-эль-Хемаль.",
//       pl: "07:30 — Odbiór z hotelu i transfer do przystani Wadi El Gemal.",
//       cz: "07:30 — Vyzvednutí z hotelu a transfer do přístavu Wadi El Gemal."
//     }
//   },
//   {
//     step: "02",
//     title: {
//       en: "Wadi El Gemal Marina",
//       de: "Wadi El Gemal Yachthafen",
//       it: "Marina di Wadi El Gemal",
//       ru: "Марина Вади-эль-Хемаль",
//       pl: "Przystań Wadi El Gemal",
//       cz: "Přístav Wadi El Gemal"
//     },
//     description: {
//       en: "Departure from the marina.",
//       de: "Abfahrt vom Yachthafen.",
//       it: "Partenza dal porto turistico.",
//       ru: "Отправление из марины.",
//       pl: "Wypłynięcie z przystani.",
//       cz: "Odjezd z přístavu."
//     }
//   },
//   {
//     step: "03",
//     title: {
//       en: "Speedboat Adventure",
//       de: "Schnellboot-Abenteuer",
//       it: "Avventura in Motoscafo",
//       ru: "Приключение на скоростном катере",
//       pl: "Przygoda motorówką",
//       cz: "Dobrodružství na rychlém člunu"
//     },
//     description: {
//       en: "Cruise through the beautiful waters of Wadi El Gemal.",
//       de: "Fahrt durch das wunderschöne Wasser von Wadi El Gemal.",
//       it: "Navigazione attraverso le splendide acque di Wadi El Gemal.",
//       ru: "Круиз по прекрасным водам Вади-эль-Хемаль.",
//       pl: "Rejs przez piękne wody Wadi El Gemal.",
//       cz: "Plavba nádhernými vodami Wadi El Gemal."
//     }
//   },
//   {
//     step: "04",
//     title: {
//       en: "1st Snorkeling Session — Dolphin Area",
//       de: "1. Schnorchelgang — Delfinbereich",
//       it: "1ª Sessione di Snorkeling — Area Delfini",
//       ru: "1-й сеанс сноркелинга — район дельфинов",
//       pl: "1. sesja snorkellingu — Obszar Delfinów",
//       cz: "1. šnorchlování — Oblast delfínů"
//     },
//     description: {
//       en: "Snorkel in the dolphin area and search for dolphins in their natural environment.",
//       de: "Schnorcheln im Delfinbereich und Suche nach Delfinen in ihrer natürlichen Umgebung.",
//       it: "Snorkeling nell'area dei delfini e ricerca dei delfini nel loro ambiente naturale.",
//       ru: "Сноркелинг в районе дельфинов и поиски дельфинов в их естественной среде.",
//       pl: "Snorkelling w obszarze delfinów i poszukiwanie delfinów w ich naturalnym środowisku.",
//       cz: "Šnorchlování v oblasti delfínů a hledání delfínů v jejich přirozeném prostředí."
//     }
//   },
//   {
//     step: "05",
//     title: {
//       en: "Island Exploration & Dolphin Search",
//       de: "Inselerkundung & Delfinsuche",
//       it: "Esplorazione dell'isola e ricerca dei delfini",
//       ru: "Исследование островов и поиск дельфинов",
//       pl: "Eksploracja wysp i poszukiwanie delfinów",
//       cz: "Průzkum ostrovů a hledání delfínů"
//     },
//     description: {
//       en: "Visit more than one island and continue searching for dolphins during the trip.",
//       de: "Besuchen Sie mehr als eine Insel und suchen Sie während der Fahrt weiter nach Delfinen.",
//       it: "Visita più di un'isola e continua a cercare i delfini durante il viaggio.",
//       ru: "Посетите более одного острова и продолжайте искать дельфинов во время поездки.",
//       pl: "Odwiedź więcej niż jedną wyspę i kontynuuj poszukiwania delfinów podczas wycieczki.",
//       cz: "Navštivte více než jeden ostrov a během výletu pokračujte v hledání delfínů."
//     }
//   },
//   {
//     step: "06",
//     title: {
//       en: "Island & Beach Time",
//       de: "Insel- & Strandzeit",
//       it: "Tempo sull'isola e in spiaggia",
//       ru: "Время на острове и пляже",
//       pl: "Czas na wyspie i plaży",
//       cz: "Čas na ostrově a pláži"
//     },
//     description: {
//       en: "Relax, swim and enjoy the beautiful natural surroundings.",
//       de: "Entspannen Sie sich, schwimmen Sie und genießen Sie die wunderschöne natürliche Umgebung.",
//       it: "Rilassati, nuota e goditi la splendida cornice naturale.",
//       ru: "Расслабьтесь, поплавайте и насладитесь прекрасной природой.",
//       pl: "Zrelaksuj się, pływaj i ciesz się pięknym otoczeniem przyrody.",
//       cz: "Relaxujte, plavte a užívejte si krásné přírodní prostředí."
//     }
//   },
//   {
//     step: "07",
//     title: {
//       en: "2nd Snorkeling Session — Coral Reef",
//       de: "2. Schnorchelgang — Korallenriff",
//       it: "2ª Sessione di Snorkeling — Barriera Corallina",
//       ru: "2-й сеанс сноркелинга — коралловый риф",
//       pl: "2. sesja snorkellingu — Rafa Koralowa",
//       cz: "2. šnorchlování — Korálový útes"
//     },
//     description: {
//       en: "Explore colorful coral reefs and discover the rich marine life of the Red Sea.",
//       de: "Erkunden Sie farbenfrohe Korallenriffe und entdecken Sie die reiche Unterwasserwelt des Roten Meeres.",
//       it: "Esplora le barriere coralline colorate e scopri la ricca vita marina del Mar Rosso.",
//       ru: "Исследуйте красочные коралловые рифы и откройте для себя богатую морскую фауну Красного моря.",
//       pl: "Odkryj kolorowe rafy koralowe i bogate życie morskie Morza Czerwonego.",
//       cz: "Prozkoumejte pestrobarevné korálové útesy a objevte bohatý mořský život Rudého moře."
//     }
//   },
//   {
//     step: "08",
//     title: {
//       en: "Return to Wadi El Gemal Marina",
//       de: "Rückkehr zum Wadi El Gemal Yachthafen",
//       it: "Ritorno al Marina di Wadi El Gemal",
//       ru: "Возвращение в марину Вади-эль-Хемаль",
//       pl: "Powrót do przystani Wadi El Gemal",
//       cz: "Návrat do přístavu Wadi El Gemal"
//     },
//     description: {
//       en: "Around 11:30 AM – 12:00 PM.",
//       de: "Gegen 11:30 Uhr – 12:00 Uhr.",
//       it: "Intorno alle 11:30 – 12:00.",
//       ru: "Около 11:30 – 12:00.",
//       pl: "Około 11:30 – 12:00.",
//       cz: "Kolem 11:30 – 12:00."
//     }
//   }
// ],
//     paymentNote: {
//       en: "Pay after the trip — no online payment required.",
//       de: "Zahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//       it: "Paga dopo il viaggio — nessun pagamento online richiesto.",
//       ru: "Оплата после поездки — онлайн-оплата не требуется.",
//       pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//       cz: "Platba až po výletě — není vyžadována žádná platba předem."
//     },
//     disclaimer: {
//       en: "Dolphins are wild animals, so sightings cannot be guaranteed. We search for them as much as possible during the trip while respecting their natural environment. Wadi El Gemal is a protected natural area, and we always respect the islands, marine life and local environment.",
//       de: "Delfine sind Wildtiere, daher kann eine Sichtung nicht garantiert werden. Wir suchen während des Ausflugs so gut wie möglich nach ihnen und respektieren dabei ihren natürlichen Lebensraum. Wadi El Gemal ist ein geschütztes Naturgebiet, und wir respektieren stets die Inseln, das Meeresleben und die lokale Umwelt.",
//       it: "I delfini sono animali selvatici, quindi gli avvistamenti non possono essere garantiti. Li cerchiamo il più possibile durante il viaggio rispettando il loro ambiente naturale. Wadi El Gemal è un'area naturale protetta e rispettiamo sempre le isole, la vita marina e l'ambiente locale.",
//       ru: "Дельфины — дикие животные, поэтому их появление не может быть гарантировано. Мы ищем их как можно тщанее во время поездки, уважая их естественную среду обитания. Вади-эль-Хемаль — охраняемая природная зона, и мы всегда уважаем острова, морскую жизнь и местную экологию.",
//       pl: "Delfiny to dzikie zwierzęta, więc ich widok nie może być zagwarantowany. Szukamy ich tak bardzo, jak to możliwe podczas wycieczki, szanując ich naturalne środowisko. Wadi El Gemal to chroniony obszar przyrodniczy, a my zawsze szanujemy wyspy, życie morskie i lokalne środowisko.",
//       cz: "Delfíni jsou divoká zvířata, takže jejich spatření nelze zaručit. Během výletu je hledáme co nejvíce a zároveň respektujeme jejich přirozené prostředí. Wadi El Gemal je chráněná přírodní oblast a vždy respektujeme ostrovy, mořský život a místní prostředí."
//     },
//     images: {
//       featured: "/images/tours/wadi-el-gemal-card.webp",
//       gallery: [
//         "/images/tours/wadi-el-gemal-1.webp",
//         "/images/tours/wadi-el-gemal-2.webp",
//         "/images/tours/wadi-el-gemal-3.webp",
//         "/images/tours/wadi-el-gemal-4.webp",
//       ]
//     }
//   },
//   {
//     id: "qulaan-mangroves-sharm-el-luli",
//     slug: "qulaan-mangroves-sharm-el-luli",
//     type: 'snorkeling',
//     title: {
//       en: "Qulaan Mangroves & Sharm El Luli",
//       de: "Qulaan Mangroven & Sharm El Luli",
//       it: "Mangrovie di Qulaan & Sharm El Luli",
//       ru: "Мангры Кулаан и Шарм-эль-Лули",
//       pl: "Mangrowie Qulaan i Sharm El Luli",
//       cz: "Mangrovy Qulaan a Sharm El Luli"
//     },
//     subtitle: {
//       en: "Beach & Mangrove Experience",
//       de: "Strand- & Mangroven-Erlebnis",
//       it: "Esperienza Spiaggia e Mangrovie",
//       ru: "Пляж и мангровые заросли",
//       pl: "Przygoda na plaży i wśród mangrowców",
//       cz: "Zážitek na pláži a v mangrovech"
//     },
//     category: {
//       en: "Water Adventures",
//       de: "Wasserabenteuer",
//       it: "Avventure in Acqua",
//       ru: "Морские приключения",
//       pl: "Przygody Wodne",
//       cz: "Vodní dobrodružství"
//     },
//     price: {
//       amount: 80,
//       currency: "€",
//       unit: {
//         en: "per person",
//         de: "pro Person",
//         it: "per persona",
//         ru: "за человека",
//         pl: "za osobę",
//         cz: "za osobu"
//       }
//     },
//     duration: {
//       en: "To be confirmed",
//       de: "Wird noch bestätigt",
//       it: "Da confermare",
//       ru: "Уточняется",
//       pl: "Do potwierdzenia",
//       cz: "Bude potvrzeno"
//     },
//     departure: {
//       en: "Time to be confirmed",
//       de: "Uhrzeit wird noch bestätigt",
//       it: "Orario da confermare",
//       ru: "Время уточняется",
//       pl: "Godzina do potwierdzenia",
//       cz: "Čas bude potvrzen"
//     },
//     overview: {
//       en: "Enjoy a coastal adventure combining the crystal-clear Red Sea and white sandy beach of Sharm El Luli with the peaceful mangrove islands, calm waters and untouched natural scenery of Qulaan.",
//       de: "Genießen Sie ein Küstenabenteuer, das das kristallklare Rote Meer und den weißen Sandstrand von Sharm El Luli mit den friedlichen Mangroveninseln, ruhigen Gewässern und der unberührten Naturlandschaft von Qulaan verbindet.",
//       it: "Goditi un'avventura costiera che combina il Mar Rosso cristallino e la spiaggia di sabbia bianca di Sharm El Luli con le tranquille isole di mangrovie, le acque calme e lo scenario naturale incontaminato di Qulaan.",
//       ru: "Насладитесь прибрежным приключением, сочетающим кристально чистое Красное море и белый песчаный пляж Шарм-эль-Лули с умиротворенными мангровыми островами, спокойными водами и нетронутыми природными пейзажами Кулаана.",
//       pl: "Ciesz się przybrzeżną przygodą łączącą krystalicznie czyste Morze Czerwone i białą piaszczystą plażę Sharm El Luli z spokojnymi wyspami mangrowymi, spokojnymi wodami i nienaruszoną przyrodą Qulaan.",
//       cz: "Užijte si pobřežní dobrodružství spojující křišťálově čisté Rudé moře a bílou písečnou pláž Sharm El Luli s klidnými mangrovovými ostrovy, klidnou vodou a nedotčenou přírodní scenérií Qulaan."
//     },
//     highlights: {
//       en: [
//         "Visit Sharm El Luli Beach",
//         "Around 3 hours of beach time",
//         "Swim in crystal-clear Red Sea water",
//         "Relax on the white sandy beach",
//         "Explore Qulaan Mangrove Islands",
//         "Discover unique mangrove trees",
//         "Snorkeling opportunity",
//         "Snacks",
//         "Beautiful natural scenery",
//         "Great photo opportunities",
//         "Suitable for families, couples and beginners"
//       ],
//       de: [
//         "Besuch des Strandes von Sharm El Luli",
//         "Etwa 3 Stunden Strandzeit",
//         "Schwimmen im kristallklaren Wasser des Roten Meeres",
//         "Entspannen am weißen Sandstrand",
//         "Erkundung der Qulaan-Mangroveninseln",
//         "Entdeckung einzigartiger Mangrovenbäume",
//         "Schnorchelgelegenheit",
//         "Snacks",
//         "Wunderschöne Naturlandschaft",
//         "Tolles Fotomotiv",
//         "Geeignet für Familien, Paare und Anfänger"
//       ],
//       it: [
//         "Visita alla spiaggia di Sharm El Luli",
//         "Circa 3 ore di tempo in spiaggia",
//         "Nuoto nelle acque cristalline del Mar Rosso",
//         "Relax sulla spiaggia di sabbia bianca",
//         "Esplorazione delle isole di mangrovie di Qulaan",
//         "Scoperta di alberi di mangrovie unici",
//         "Opportunità di snorkeling",
//         "Snack",
//         "Splendido scenario naturale",
//         "Ottime opportunità fotografiche",
//         "Adatto a famiglie, coppie e principianti"
//       ],
//       ru: [
//         "Посещение пляжа Шарм-эль-Лули",
//         "Около 3 часов пляжного отдыха",
//         "Плавание в кристально чистой воде Красного моря",
//         "Отдых на белом песчаном пляже",
//         "Исследование мангровых островов Кулаан",
//         "Знакомство с уникальными мангровыми деревьями",
//         "Возможность заняться сноркелингом",
//         "Закуски",
//         "Красивые природные пейзажи",
//         "Отличные возможности для фото",
//         "Подходит для семей, пар и новичков"
//       ],
//       pl: [
//         "Wizyta na plaży Sharm El Luli",
//         "Około 3 godziny czasu na plaży",
//         "Pływanie w krystalicznie czystej wodzie Morza Czerwonego",
//         "Relaks na białej piaszczystej plaży",
//         "Odkrywanie wysp mangrowych Qulaan",
//         "Odkrywanie unikalnych drzew mangrowych",
//         "Możliwość snorkelingu",
//         "Przekąski",
//         "Piękna przyroda",
//         "Świetne miejsca do robienia zdjęć",
//         "Odpowiednie dla rodzin, par i początkujących"
//       ],
//       cz: [
//         "Návštěva pláže Sharm El Luli",
//         "Asi 3 hodiny času na pláži",
//         "Plavání v křišťálově čisté vodě Rudého moře",
//         "Relaxace na bílé písečné pláži",
//         "Prozkoumání mangrovových ostrovů Qulaan",
//         "Objevování unikátních mangrovových stromů",
//         "Možnost šnorchlování",
//         "Svačiny",
//         "Krásná přírodní scenérie",
//         "Skvělé příležitosti k focení",
//         "Vhodné pro rodiny, páry a začátečníky"
//       ]
//     },
//     included: {
//       en: [
//         "Hotel pickup & drop-off",
//         "Sharm El Luli Beach visit",
//         "Around 3 hours of swimming & relaxing at the beach",
//         "Qulaan Mangrove Islands visit",
//         "Mangrove trees experience",
//         "Snorkeling equipment",
//         "Entrance tickets to both Sharm El Luli & Qulaan Mangroves",
//         "Snacks",
//         "Mineral water",
//         "Soft drinks",
//         "Local guide"
//       ],
//       de: [
//         "Abholung und Rückbringung zum Hotel",
//         "Besuch des Strandes von Sharm El Luli",
//         "Etwa 3 Stunden Schwimmen und Entspannen am Strand",
//         "Besuch der Qulaan-Mangroveninseln",
//         "Mangroven-Erlebnis",
//         "Schnorchelausrüstung",
//         "Eintrittskarten für Sharm El Luli und die Qulaan-Mangroven",
//         "Snacks",
//         "Mineralwasser",
//         "Alkoholfreie Getränke",
//         "Lokaler Guide"
//       ],
//       it: [
//         "Prelievo e rientro in hotel",
//         "Visita alla spiaggia di Sharm El Luli",
//         "Circa 3 ore di nuoto e relax in spiaggia",
//         "Visita alle isole di mangrovie di Qulaan",
//         "Esperienza tra le mangrovie",
//         "Attrezzatura da snorkeling",
//         "Biglietti d'ingresso per Sharm El Luli e le mangrovie di Qulaan",
//         "Snack",
//         "Acqua minerale",
//         "Bevande analcoliche",
//         "Guida locale"
//       ],
//       ru: [
//         "Трансфер из отеля и обратно",
//         "Посещение пляжа Шарм-эль-Лули",
//         "Около 3 часов плавания и отдыха на пляже",
//         "Посещение мангровых островов Кулаан",
//         "Экскурсия по мангровым зарослям",
//         "Оборудование для сноркелинга",
//         "Входные билеты в Шарм-эль-Лули и на мангры Кулаан",
//         "Закуски",
//         "Минеральная вода",
//         "Безалкогольные напитки",
//         "Местный гид"
//       ],
//       pl: [
//         "Odbiór i powrót do hotelu",
//         "Wizyta na plaży Sharm El Luli",
//         "Około 3 godziny pływania i relaksu na plaży",
//         "Wizyta na wyspach mangrowych Qulaan",
//         "Doświadczenie z drzewami mangrowymi",
//         "Sprzęt do snorkelingu",
//         "Bilety wstępu do Sharm El Luli i na mangrowce Qulaan",
//         "Przekąski",
//         "Woda mineralna",
//         "Napoje bezalkoholowe",
//         "Lokalny przewodnik"
//       ],
//       cz: [
//         "Vyzvednutí a návrat do hotelu",
//         "Návštěva pláže Sharm El Luli",
//         "Asi 3 hodiny plavání a relaxace na pláži",
//         "Návštěva mangrovových ostrovů Qulaan",
//         "Zážitek s mangrovovými stromy",
//         "Vybavení na šnorchlování",
//         "Vstupenky do Sharm El Luli a mangrovů Qulaan",
//         "Svačiny",
//         "Minerální voda",
//         "Nealkoholické nápoje",
//         "Místní průvodce"
//       ]
//     },
//     notIncluded: {
//       en: [
//         "Personal expenses",
//         "Additional services or activities not mentioned above"
//       ],
//       de: [
//         "Persönliche Ausgaben",
//         "Zusätzliche Services oder Aktivitäten, die oben nicht erwähnt wurden"
//       ],
//       it: [
//         "Spese personali",
//         "Servizi o attività aggiuntivi non menzionati sopra"
//       ],
//       ru: [
//         "Личные расходы",
//         "Дополнительные услуги или мероприятия, не упомянутые выше"
//       ],
//       pl: [
//         "Wydatki osobiste",
//         "Dodatkowe usługi lub aktywności niewymienione powyżej"
//       ],
//       cz: [
//         "Osobní výdaje",
//         "Další služby nebo aktivity neuvedené výše"
//       ]
//     },
//     whatToBring: {
//       en: ["Swimwear", "Towel", "Sunscreen", "Sunglasses", "Hat", "Comfortable clothes", "Camera or phone for photos"],
//       de: ["Badebekleidung", "Handtuch", "Sonnencreme", "Sonnenbrille", "Hut", "Bequeme Kleidung", "Kamera oder Handy für Fotos"],
//       it: ["Costume da bagno", "Asciugamano", "Crema solare", "Occhiali da sole", "Cappello", "Vestiti comodi", "Fotocamera o telefono per foto"],
//       ru: ["Купальник", "Полотенце", "Солнцезащитный крем", "Солнцезащитные очки", "Головной убор", "Удобная одежда", "Камера или телефон для фото"],
//       pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Okulary przeciwsłoneczne", "Czapka", "Wygodne ubrania", "Aparat lub telefon do zdjęć"],
//       cz: ["Plavky", "Ručník", "Opalovací krém", "Sluneční brýle", "Klobouk", "Pohodlné oblečení", "Fotoaparát nebo telefon na fotky"]
//     },
//     childrenPolicy: {
//       under5: {
//         en: "Under 5 years: Free",
//         de: "Unter 5 Jahren: Kostenlos",
//         it: "Sotto i 5 anni: Gratuito",
//         ru: "До 5 лет: Бесплатно",
//         pl: "Poniżej 5 lat: Bezpłatnie",
//         cz: "Do 5 let: Zdarma"
//       },
//       from5to10: {
//         en: "5–10 years: 50% of adult price",
//         de: "5–10 Jahre: 50% des Erwachsenenpreises",
//         it: "5–10 anni: 50% del prezzo adulto",
//         ru: "5–10 лет: 50% от стоимости для взрослых",
//         pl: "5–10 lat: 50% ceny dla dorosłych",
//         cz: "5–10 let: 50 % dospělé ceny"
//       },
//       over10: {
//         en: "Over 10 years: Full adult price",
//         de: "Über 10 Jahre: Voller Erwachsenenpreis",
//         it: "Oltre i 10 anni: Prezzo intero adulto",
//         ru: "Старше 10 лет: Полная стоимость для взрослых",
//         pl: "Powyżej 10 lat: Pełna cena dla dorosłych",
//         cz: "Nad 10 let: Plná dospělá cena"
//       }
//     },
//    itinerary: [
//   {
//     step: "01",
//     title: {
//       en: "Hotel Pickup",
//       de: "Hotelabholung",
//       it: "Prelievo in hotel",
//       ru: "Трансфер из отеля",
//       pl: "Odbiór z hotelu",
//       cz: "Vyzvednutí v hotelu"
//     },
//     description: {
//       en: "07:30 AM — Pickup from your hotel.",
//       de: "07:30 Uhr — Abholung von Ihrem Hotel.",
//       it: "07:30 — Prelievo dal tuo hotel.",
//       ru: "07:30 — Трансфер из вашего отеля.",
//       pl: "07:30 — Odbiór z Twojego hotelu.",
//       cz: "07:30 — Vyzvednutí z vašeho hotelu."
//     }
//   },
//   {
//     step: "02",
//     title: {
//       en: "Drive to Sharm El Luli",
//       de: "Fahrt nach Sharm El Luli",
//       it: "Viaggio verso Sharm El Luli",
//       ru: "Поездка в Шарм-эль-Лули",
//       pl: "Przejazd do Sharm El Luli",
//       cz: "Cesta do Sharm El Luli"
//     },
//     description: {
//       en: "Travel south to the beautiful Sharm El Luli Beach.",
//       de: "Fahrt nach Süden zum wunderschönen Strand von Sharm El Luli.",
//       it: "Viaggio verso sud alla splendida spiaggia di Sharm El Luli.",
//       ru: "Поездка на юг к живописному пляжу Шарм-эль-Лули.",
//       pl: "Podróż na południe na piękną plażę Sharm El Luli.",
//       cz: "Cesta na jih na krásnou pláž Sharm El Luli."
//     }
//   },
//   {
//     step: "03",
//     title: {
//       en: "Beach Time — Around 3 Hours",
//       de: "Strandzeit — Ca. 3 Stunden",
//       it: "Tempo in Spiaggia — Circa 3 ore",
//       ru: "Пляжный отдых — около 3 часов",
//       pl: "Czas na plaży — Około 3 godzin",
//       cz: "Čas na pláži — Asi 3 hodiny"
//     },
//     description: {
//       en: "Enjoy swimming, relaxing and the crystal-clear Red Sea.",
//       de: "Genießen Sie das Schwimmen, Entspannen und das kristallklare Rote Meer.",
//       it: "Goditi il nuoto, il relax e il Mar Rosso cristallino.",
//       ru: "Наслаждайтесь плаванием, отдыхом и кристально чистым Красным морем.",
//       pl: "Ciesz się pływaniem, relaksem i krystalicznie czystym Morzem Czerwonym.",
//       cz: "Užijte si plavání, relaxaci a křišťálově čisté Rudé moře."
//     }
//   },
//   {
//     step: "04",
//     title: {
//       en: "Continue to Qulaan Mangroves",
//       de: "Weiterfahrt zu den Qulaan-Mangroven",
//       it: "Proseguimento verso le mangrovie di Qulaan",
//       ru: "Переезд к мангровым зарослям Кулаан",
//       pl: "Przejazd do mangrowców Qulaan",
//       cz: "Pokračování k mangrovům Qulaan"
//     },
//     description: {
//       en: "Continue to the peaceful Qulaan Mangrove area.",
//       de: "Weiterfahrt in das friedliche Qulaan-Mangrovengebiet.",
//       it: "Proseguimento verso la tranquilla zona delle mangrovie di Qulaan.",
//       ru: "Переезд в спокойный район мангровых зарослей Кулаан.",
//       pl: "Przejazd do spokojnego obszaru mangrowców Qulaan.",
//       cz: "Pokračování do klidné oblasti mangrovů Qulaan."
//     }
//   },
//   {
//     step: "05",
//     title: {
//       en: "Explore Qulaan Mangroves",
//       de: "Erkundung der Qulaan-Mangroven",
//       it: "Esplorazione delle mangrovie di Qulaan",
//       ru: "Исследование мангровых зарослей Кулаан",
//       pl: "Eksploracja mangrowców Qulaan",
//       cz: "Prozkoumání mangrovů Qulaan"
//     },
//     description: {
//       en: "Discover the mangrove islands and natural surroundings.",
//       de: "Entdecken Sie die Mangroveninseln und die natürliche Umgebung.",
//       it: "Scopri le isole di mangrovie e i dintorni naturali.",
//       ru: "Откройте для себя мангровые острова и окружающую природу.",
//       pl: "Odkryj wyspy mangrowe i otaczającą przyrodę.",
//       cz: "Objevte mangrovové ostrovy a přírodní okolí."
//     }
//   },
//   {
//     step: "06",
//     title: {
//       en: "Snorkeling & Free Time",
//       de: "Schnorcheln & Freizeit",
//       it: "Snorkeling e Tempo Libero",
//       ru: "Сноркелинг и свободное время",
//       pl: "Snorkeling i czas wolny",
//       cz: "Šnorchlování a volný čas"
//     },
//     description: {
//       en: "Enjoy snorkeling and relaxing in the beautiful natural environment, with snacks.",
//       de: "Genießen Sie Schnorcheln und Entspannung in der wunderschönen natürlichen Umgebung, inklusive Snacks.",
//       it: "Goditi lo snorkeling e il relax nella splendida cornice naturale, con snack.",
//       ru: "Наслаждайтесь сноркелингом и отдыхом в прекрасной природной среде, с закусками.",
//       pl: "Ciesz się snorkelingiem i relaksem w pięknej przyrodzie wraz z przekąskami.",
//       cz: "Užijte si šnorchlování a relaxaci v krásném přírodním prostředí se svačinou."
//     }
//   },
//   {
//     step: "07",
//     title: {
//       en: "Return to Your Hotel",
//       de: "Rückkehr zu Ihrem Hotel",
//       it: "Ritorno in hotel",
//       ru: "Возвращение в отель",
//       pl: "Powrót do hotelu",
//       cz: "Návrat do vašeho hotelu"
//     },
//     description: {
//       en: "Return transfer to your hotel.",
//       de: "Rücktransfer zu Ihrem Hotel.",
//       it: "Trasferimento di ritorno al tuo hotel.",
//       ru: "Обратный трансфер в ваш отель.",
//       pl: "Transfer powrotny do hotelu.",
//       cz: "Zpáteční transfer do vašeho hotelu."
//     }
//   }
// ],
//     paymentNote: {
//       en: "Pay after the trip — no online payment required.",
//       de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//       it: "Paga dopo il viaggio — nessun pagamento online richiesto.",
//       ru: "Оплата после поездки — онлайн-оплата не требуется.",
//       pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//       cz: "Platba až po výletě — není vyžadována platba předem online."
//     },
//     disclaimer: {
//       en: "Sharm El Luli and Qulaan are protected natural areas. We always respect the beaches, mangroves, marine life and natural environment during the experience.",
//       de: "Sharm El Luli und Qulaan sind geschützte Naturgebiete. Wir respektieren während des Erlebnisses stets die Strände, Mangroven, Meereslebewesen und die natürliche Umwelt.",
//       it: "Sharm El Luli e Qulaan sono aree naturali protette. Rispettiamo sempre le spiagge, le mangrovie, la vita marina e l'ambiente naturale durante l'esperienza.",
//       ru: "Шарм-эль-Лули и Кулаан являются охраняемыми природными территориями. Во время поездки мы всегда с уважением относимся к пляжам, манграм, морской фауне и окружающей среде.",
//       pl: "Sharm El Luli i Qulaan to chronione obszary przyrodnicze. Zawsze szanujemy plaże, mangrowce, życie morskie i środowisko naturalne podczas wycieczki.",
//       cz: "Sharm El Luli a Qulaan jsou chráněné přírodní oblasti. Během zážitku vždy respektujeme pláže, mangrovy, mořský život a přírodní prostředí."
//     },
//     images: {
//       featured: "/images/tours/quleen-card.webp",
//       gallery: [
//         "/images/tours/quleen-1.webp",
//         "/images/tours/quleen-2.webp",
//         "/images/tours/quleen-3.webp"
//       ]
//     }
//   },
//   {
//   id: "super-safari",
//   slug: "super-safari-desert-bedouin-experience",
//   type: 'snorkeling',
//   title: {
//     en: "Super Safari",
//     de: "Super-Safari",
//     it: "Super Safari",
//     ru: "Супер Сафари",
//     pl: "Super Safari",
//     cz: "Super Safari"
//   },
//   subtitle: {
//     en: "Desert & Bedouin Experience",
//     de: "Wüsten- & Beduinen-Erlebnis",
//     it: "Esperienza nel Deserto e Beduina",
//     ru: "Пустыня и традиции бедуинов",
//     pl: "Przygoda na pustyni i wieś Beduinów",
//     cz: "Pouštní a beduínský zážitek"
//   },
//   category: {
//     en: "Desert Adventures",
//     de: "Wüstenabenteuer",
//     it: "Avventure nel Deserto",
//     ru: "Пустынные приключения",
//     pl: "Przygody na Pustyni",
//     cz: "Pouštní dobrodružství"
//   },
//   price: {
//     amount: 55,
//     currency: "€",
//     unit: {
//       en: "per person",
//       de: "pro Person",
//       it: "per persona",
//       ru: "за человека",
//       pl: "za osobę",
//       cz: "za osobu"
//     }
//   },
//   duration: {
//     en: "6.5 Hours",
//     de: "6.5 Stunden",
//     it: "6.5 Ore",
//     ru: "6.5 Часов",
//     pl: "6.5 Godziny",
//     cz: "6.5 Hodin"
//   },
//   departure: {
//     en: "Hotel Pickup (2:30 PM)",
//     de: "Hotelabholung (14:30 Uhr)",
//     it: "Transfer dall'hotel (14:30)",
//     ru: "Трансфер из отеля (14:30)",
//     pl: "Odbiór z hotelu (14:30)",
//     cz: "Vyzvednutí v hotelu (14:30)"
//   },
//   overview: {
//     en: "Experience the desert, Bedouin culture and an unforgettable sunset. Your Super Safari begins with a 4WD Toyota Land Cruiser pickup from your hotel. Travel deep into the desert, enjoy a quad bike adventure, visit a traditional Bedouin village, ride a camel, watch the sunset in the heart of the desert, and finish the evening with a BBQ dinner, traditional music and a Bedouin show.",
//     de: "Erleben Sie die Wüste, die Beduinenkultur und einen unvergesslichen Sonnenuntergang. Ihre Super-Safari beginnt mit der Abholung im Geländewagen direkt vom Hotel. Fahren Sie tief in die Wüste, genießen Sie ein Quad-Abenteuer, besuchen Sie ein Beduinendorf, reiten Sie auf einem Kamel und genießen Sie ein BBQ-Abendessen mit Beduinenshow.",
//     it: "Vivi il deserto, la cultura beduina e un tramonto indimenticabile. Il tuo Super Safari inizia con il transfer in 4WD Toyota Land Cruiser dal tuo hotel. Avventurati nel deserto, divertiti in quad, visita un villaggio beduino, cavalca un cammello e concludi la serata con una cena BBQ e uno spettacolo tradizionale.",
//     ru: "Ощутите магию пустыни, культуру бедуинов и незабываемый закат. Ваше Супер Сафари начинается с трансфера на джипе Toyota Land Cruiser из отеля. Покатайтесь на квадроциклах, посетите бедуинскую деревню, покатайтесь на верблюдах и завершите вечер ужином барбекю с традиционным шоу.",
//     pl: "Poznaj pustynię, kulturę Beduinów i niezapomniany zachód słońca. Twoje Super Safari rozpoczyna się odbiorem z hotelu samochodem 4x4. Jedź w głąb pustyni, jeździj na kładach, odwiedź wioskę Beduinów, przejedź się na wielbłądzie i zakończ wieczór kolacją BBQ oraz pokazem.",
//     cz: "Zažijte poušť, beduínskou kulturu a nezapomenutelný západ slunce. Vaše Super Safari začíná vyzvednutím v hotelu terénním vozem 4x4. Projeďte se na čtyřkolkách, navštivte beduínskou vesnici, projeďte se na velbloudu a zakončete večer BBQ večeří a show."
//   },
//   highlights: {
//     en: [
//       "4WD Toyota Land Cruiser desert adventure",
//       "Quad bike experience (around 22 km)",
//       "Stop to learn about the famous Akassia Tree",
//       "Visit a traditional Bedouin village & water well",
//       "Traditional camel ride & bread making demonstration",
//       "Beautiful sunset in the heart of the desert",
//       "Traditional Bedouin tea & BBQ open buffet dinner",
//       "Bedouin party, Egyptian music & Star show under the night sky"
//     ],
//     de: [
//       "Wüstenabenteuer im 4WD Toyota Land Cruiser",
//       "Quad-Bike-Erlebnis (ca. 22 km Fahrt)",
//       "Stopp beim berühmten Akassia-Baum",
//       "Besuch eines traditionellen Beduinendorfs und des Brunnen",
//       "Traditionelles Kamelreiten & Beduinenbrot-Zubereitung",
//       "Wunderschöner Sonnenuntergang im Herzen der Wüste",
//       "Beduinentee & Open-Buffet-BBQ-Abendessen",
//       "Beduinen-Show, ägyptische Musik & Sternenbeobachtung"
//     ],
//     it: [
//       "Avventura nel deserto in 4WD Toyota Land Cruiser",
//       "Esperienza in quad (circa 22 km)",
//       "Sosta per scoprire il famoso albero Akassia",
//       "Visita a un villaggio beduino e al pozzo d'acqua",
//       "Giro in cammello e dimostrazione del pane beduino",
//       "Splendido tramonto nel cuore del deserto",
//       "Tè beduino e cena BBQ a buffet",
//       "Festa beduina, musica egiziana e spettacolo delle stelle"
//     ],
//     ru: [
//       "Приключение в пустыне на джипе Toyota Land Cruiser 4WD",
//       "Поездка на квадроциклах (около 22 км)",
//       "Остановка у знаменитого дерева Акассия",
//       "Посещение бедуинской деревни и колодца",
//       "Катание на верблюдах и выпечка бедуинского хлеба",
//       "Красивый закат в самом сердце пустыни",
//       "Традиционный бедуинский чай и BBQ обед (шведский стол)",
//       "Шоу бедуинов, египетская музыка и наблюдение за звездами"
//     ],
//     pl: [
//       "Przygoda na pustyni samochodem 4x4 Toyota Land Cruiser",
//       "Jazda na kładach (ok. 22 km)",
//       "Przystanek przy słynnym drzewie Akassia",
//       "Wizyta w tradycyjnej wiosce Beduinów i przy studni",
//       "Przejażdżka na wielbłądzie i wypiek chleba",
//       "Piękny zachód słońca w sercu pustyni",
//       "Beduińska herbata i kolacja BBQ w formie bufet",
//       "Pokaz beduiński, egipska muzyka i obserwacja gwiazd"
//     ],
//     cz: [
//       "Pouštní dobrodružství v 4WD Toyota Land Cruiser",
//       "Jízda na čtyřkolkách (cca 22 km)",
//       "Zastávka u slavného stromu Akassia",
//       "Návštěva tradiční beduínské vesnice a studny",
//       "Jízda na velbloudu a ukázka pečení chleba",
//       "Krásný západ slunce v srdci pouště",
//       "Beduínský čaj a BBQ večeře formou bufetu",
//       "Beduínská show, egyptská hudba a pozorování hvězd"
//     ]
//   },
//   included: {
//     en: [
//       "Hotel pickup & drop-off by 4WD Toyota Land Cruiser",
//       "Quad bike experience",
//       "Bedouin village tour & camel ride",
//       "Akassia Tree stop",
//       "Traditional Bedouin tea & fresh bread",
//       "Sunset viewing experience",
//       "BBQ open buffet dinner",
//       "Soft drinks & mineral water",
//       "Bedouin party, music & star show"
//     ],
//     de: [
//       "Abholung & Rückbringung zum Hotel im 4WD Toyota Land Cruiser",
//       "Quad-Bike-Erlebnis",
//       "Führung durch das Beduinendorf & Kamelreiten",
//       "Stopp am Akassia-Baum",
//       "Traditioneller Beduinentee & frisches Brot",
//       "Sonnenuntergangs-Erlebnis",
//       "BBQ-Abendessen (Open Buffet)",
//       "Softdrinks & Mineralwasser",
//       "Beduinenshow, Musik & Sternen-Show"
//     ],
//     it: [
//       "Transfer da e per l'hotel in 4WD Toyota Land Cruiser",
//       "Esperienza in quad",
//       "Tour del villaggio beduino e giro in cammello",
//       "Sosta all'albero Akassia",
//       "Tè beduino e pane fresco tradizionale",
//       "Esperienza del tramonto",
//       "Cena BBQ a buffet",
//       "Bevande analcoliche e acqua minerale",
//       "Spettacolo beduino, musica e osservazione delle stelle"
//     ],
//     ru: [
//       "Трансфер из отеля и обратно на джипе Toyota Land Cruiser 4WD",
//       "Поездка на квадроциклах",
//       "Экскурсия по деревне бедуинов и катание на верблюдах",
//       "Остановка у дерева Акассия",
//       "Бедуинский чай и свежий традиционный хлеб",
//       "Встреча заката в пустыне",
//       "Ужин BBQ (шведский стол)",
//       "Безалкогольные напитки и минеральная вода",
//       "Шоу-программа, музыка и звездное шоу"
//     ],
//     pl: [
//       "Odbiór i powrót do hotelu 4x4 Toyota Land Cruiser",
//       "Jazda na kładach",
//       "Zwiedzanie wioski Beduinów i przejażdżka na wielbłądzie",
//       "Przystanek przy drzewie Akassia",
//       "Tradycyjna herbata i świeży chleb beduiński",
//       "Oglądanie zachodu słońca",
//       "Kolacja BBQ w formie bufetu",
//       "Napoje bezalkoholowe i вода mineralna",
//       "Pokaz beduiński, muzyka i obserwacja gwiazd"
//     ],
//     cz: [
//       "Vyzvednutí a návrat do hotelu vozem 4x4 Toyota Land Cruiser",
//       "Jízda na čtyřkolkách",
//       "Prohlídka beduínské vesnice a jízda na velbloudu",
//       "Zastávka u stromu Akassia",
//       "Tradiční beduínský čaj a čerstvý chléb",
//       "Zážitek při západu slunce",
//       "BBQ večeře formou bufetu",
//       "Nealkoholické nápoje a minerální voda",
//       "Beduínská show, hudba a pozorování hvězd"
//     ]
//   },
//   whatToBring: {
//     en: ["Comfortable clothes & shoes", "Sunglasses", "Sun protection", "Camera or phone", "Light jacket for the evening"],
//     de: ["Bequeme Kleidung & Schuhe", "Sonnenbrille", "Sonnenschutz", "Kamera oder Smartphone", "Leichte Jacke für den Abend"],
//     it: ["Abbigliamento e scarpe comode", "Occhiali da sole", "Protezione solare", "Fotocamera o telefono", "Giacca leggera per la sera"],
//     ru: ["Удобная одежда и обувь", "Солнцезащитные очки", "Солнцезащитный крем", "Камера или телефон", "Легкая куртка на вечер"],
//     pl: ["Wygodne ubranie i buty", "Okulary przeciwsłoneczne", "Ochrona przeciwsłoneczna", "Aparat lub telefon", "Lekka kurtka na wieczór"],
//     cz: ["Pohodlné oblečení a obuv", "Sluneční brýle", "Ochrana proti slunci", "Fotoaparát nebo telefon", "Lehká bunda na večer"]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Under 5 years: Free",
//       de: "Unter 5 Jahren: Kostenlos",
//       it: "Sotto i 5 anni: Gratuito",
//       ru: "До 5 лет: Бесплатно",
//       pl: "Poniżej 5 lat: Bezpłatnie",
//       cz: "Pod 5 let: Zdarma"
//     },
//     from5to10: {
//       en: "5–10 years: 20 € / USD per child",
//       de: "5–10 Jahre: 20 € / USD pro Kind",
//       it: "5–10 anni: 20 € / USD per bambino",
//       ru: "5–10 лет: 20 € / USD за ребенка",
//       pl: "5–10 lat: 20 € / USD za dziecko",
//       cz: "5–10 let: 20 € / USD za dítě"
//     },
//     over10: {
//       en: "Over 10 years: Full adult price (55 €)",
//       de: "Über 10 Jahre: Voller Erwachsenenpreis (55 €)",
//       it: "Oltre i 10 anni: Prezzo intero adulto (55 €)",
//       ru: "Старше 10 лет: Полная стоимость (55 €)",
//       pl: "Powyżej 10 lat: Pełna cena (55 €)",
//       cz: "Nad 10 let: Plná cena (55 €)"
//     }
//   },
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Hotel Pickup",
//         de: "Hotelabholung",
//         it: "Transfer dall'hotel",
//         ru: "Трансфер из отеля",
//         pl: "Odbiór z hotelu",
//         cz: "Vyzvednutí v hotelu"
//       },
//       description: {
//         en: "14:30 — Pickup from your hotel in a 4WD Toyota Land Cruiser.",
//         de: "14:30 Uhr — Abholung von Ihrem Hotel im 4WD Toyota Land Cruiser.",
//         it: "14:30 — Pickup dal tuo hotel in 4WD Toyota Land Cruiser.",
//         ru: "14:30 — Трансфер из отеля на джипе Toyota Land Cruiser.",
//         pl: "14:30 — Odbiór z hotelu samochodem 4x4 Toyota Land Cruiser.",
//         cz: "14:30 — Vyzvednutí v hotelu vozem 4WD Toyota Land Cruiser."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Desert Safari & Quad Bike",
//         de: "Wüstensafari & Quad-Fahrt",
//         it: "Safari nel deserto & Quad",
//         ru: "Сафари в пустыне и квадроциклы",
//         pl: "Safari na pustyni i kłady",
//         cz: "Pouštní safari a čtyřkolky"
//       },
//       description: {
//         en: "Drive around 22 km into the desert and start your quad bike adventure.",
//         de: "Fahrt ca. 22 km in die Wüste und Start des Quad-Abenteuers.",
//         it: "Guida di circa 22 km nel deserto e inizio dell'avventura in quad.",
//         ru: "Поездка около 22 км вглубь пустыни и старт на квадроциклах.",
//         pl: "Przejazd ok. 22 km na pustynię i rozpoczęcie jazdy na kładach.",
//         cz: "Jízda cca 22 km do pouště a začátek dobrodružství na čtyřkolkách."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Akassia Tree Stop",
//         de: "Stopp am Akassia-Baum",
//         it: "Sosta all'albero Akassia",
//         ru: "Остановка у дерева Акассия",
//         pl: "Przystanek przy drzewie Akassia",
//         cz: "Zastávka u stromu Akassia"
//       },
//       description: {
//         en: "Stop to take photos and learn about the iconic desert Akassia Tree.",
//         de: "Fotostopp und Informationen über den berühmten Akassia-Baum.",
//         it: "Sosta fotografica e informazioni sul famoso albero del deserto.",
//         ru: "Остановка для фото и история знаменитого пустынного дерева.",
//         pl: "Przystanek na zdjęcia i poznanie historii słynnego drzewa.",
//         cz: "Zastávka na fotky a informace o slavném pouštním stromu."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Bedouin Village Tour",
//         de: "Beduinendorf-Tour",
//         it: "Tour del villaggio beduino",
//         ru: "Экскурсия по деревне бедуинов",
//         pl: "Zwiedzanie wioski Beduinów",
//         cz: "Prohlídka beduínské vesnice"
//       },
//       description: {
//         en: "Enjoy welcome Bedouin tea, ride a camel, visit the water well, and see bread making.",
//         de: "Genießen Sie Beduinentee, Kamelreiten, Brunnenbesuch und Brotzubereitung.",
//         it: "Gusta il tè di benvenuto, cavalca un cammello e osserva la preparazione del pane.",
//         ru: "Традиционный чай, катание на верблюдах, визит к колодцу и выпечка хлеба.",
//         pl: "Picie herbaty, przejażdżka na wielbłądzie, zwiedzanie studni i pieczenie chleba.",
//         cz: "Beduínský čaj, jízda na velbloudu, návštěva studny a pečení chleba."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "Desert Sunset",
//         de: "Sonnenuntergang in der Wüste",
//         it: "Tramonto nel deserto",
//         ru: "Закат в пустыне",
//         pl: "Zachód słońca na pustyni",
//         cz: "Západ slunce v poušti"
//       },
//       description: {
//         en: "Watch the breathtaking sunset from the heart of the Red Sea desert.",
//         de: "Beobachten Sie den atemberaubenden Sonnenuntergang mitten in der Wüste.",
//         it: "Ammira un incantevole tramonto dal cuore del deserto del Mar Rosso.",
//         ru: "Насладитесь потрясающим закатом в самом сердце пустыни.",
//         pl: "Oglądaj zachwycający zachód słońca z samego serca pustyni.",
//         cz: "Sledujte úchvatný západ slunce z přímého srdce pouště."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "BBQ Dinner & Bedouin Show",
//         de: "BBQ-Abendessen & Beduinen-Show",
//         it: "Cena BBQ & Spettacolo Beduino",
//         ru: "Ужин BBQ и бедуинское шоу",
//         pl: "Kolacja BBQ i pokaz beduiński",
//         cz: "BBQ večeře a beduínská show"
//       },
//       description: {
//         en: "Enjoy an open buffet BBQ dinner, Egyptian music, oriental show, and stargazing.",
//         de: "Genießen Sie das BBQ-Buffet, ägyptische Musik, Beduinenshow und Sternenbeobachtung.",
//         it: "Cena BBQ a buffet, musica egiziana, spettacolo orientale e osservazione delle stelle.",
//         ru: "Ужин «шведский стол», египетская музыка, шоу-программа и наблюдение за звездами.",
//         pl: "Kolacja BBQ, egipska muzyka, pokazy beduińskie i oglądanie gwiazd.",
//         cz: "BBQ večeře formou bufetu, egyptská hudba, orientalní show a pozorování hvězd."
//       }
//     },
//     {
//       step: "07",
//       title: {
//         en: "Return to Hotel",
//         de: "Rückkehr zum Hotel",
//         it: "Ritorno in Hotel",
//         ru: "Возвращение в отель",
//         pl: "Powrót do hotelu",
//         cz: "Návrat do hotelu"
//       },
//       description: {
//         en: "Around 21:00 — Transfer back to your hotel in Marsa Alam.",
//         de: "Ca. 21:00 Uhr — Rücktransfer zu Ihrem Hotel in Marsa Alam.",
//         it: "Circa 21:00 — Rientro presso il tuo hotel a Marsa Alam.",
//         ru: "Около 21:00 — Трансфер обратно в ваш отель в Марса-Аламе.",
//         pl: "Około 21:00 — Powrót do hotelu w Marsa Alam.",
//         cz: "Kolem 21:00 — Návrat do vašeho hotelu v Marsa Alam."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment required.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//     it: "Paga dopo il tour — nessuna pagamento online richiesto.",
//     ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
//     pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//     cz: "Platba až po výletu — není vyžadována platba předem online."
//   },
//   disclaimer: {
//     en: "Personal expenses and photos/videos taken by local photographers are optional and not included in the price.",
//     de: "Persönliche Ausgaben sowie Fotos/Videos von lokalen Fotografen sind optional und nicht im Preis enthalten.",
//     it: "Le spese personali e le foto/video scattate da fotografi locali sono opzionali e non incluse nel prezzo.",
//     ru: "Личные расходы и фото/видео от местных фотографов оплачиваются отдельно по желанию.",
//     pl: "Wydatki osobiste oraz zdjęcia i filmy od lokalnych fotografów są opcjonalne i nie są wliczone w cenę.",
//     cz: "Osobní výdaje a fotografie/videa od místních fotografů jsou volitelné a nejsou zahrnuty v ceně."
//   },
//   images: {
//     featured: "/images/tours/safari-card.webp",
//     gallery: [
//       "/images/tours/safari-1.webp",
//       "/images/tours/safari-2.webp",
//       "/images/tours/safari-3.webp",
//       "/images/tours/safari-4.webp",
//     ]
//   }
// },
// {
//   id: "sunset-horse-riding-bedouin-night",
//   slug: "sunset-horse-riding-bedouin-night",
//   type: 'snorkeling',
//   title: {
//     en: "Sunset Horse Riding & Bedouin Night",
//     de: "Sonnenuntergangs-Ausritt & Beduinennacht",
//     it: "Cavalcatata al Tramonto e Notte Beduina",
//     ru: "Конная прогулка на закате и Бедуинская ночь",
//     pl: "Jazda konna o zachodzie słońca i Noc Beduńska",
//     cz: "Jízda na koni při západu slunce a Beduínská noc"
//   },
//   subtitle: {
//     en: "Horse Riding • Campfire • Bedouin Dinner",
//     de: "Ausritt • Lagerfeuer • Beduinen-Abendessen",
//     it: "Cavalcatata • Falò • Cena Beduina",
//     ru: "Прогулка на лошадях • Костер • Бедуинский ужин",
//     pl: "Jazda konna • Ognisko • Kolacja Beduńska",
//     cz: "Jízda na koni • Táborák • Beduínská večeře"
//   },
//   category: {
//     en: "Desert & Cultural",
//     de: "Wüste & Kultur",
//     it: "Deserto e Cultura",
//     ru: "Пустыня и Культура",
//     pl: "Pustynia i Kultura",
//     cz: "Poušť a Kultura"
//   },
//   price: {
//     amount: 65,
//     currency: "€",
//     unit: {
//       en: "per person",
//       de: "pro Person",
//       it: "per persona",
//       ru: "за человека",
//       pl: "za osobę",
//       cz: "za osobu"
//     }
//   },
//   duration: {
//     en: "8 Hours",
//     de: "8 Stunden",
//     it: "8 Ore",
//     ru: "8 часов",
//     pl: "8 godzin",
//     cz: "8 hodin"
//   },
//   departure: {
//     en: "South Marsa Alam",
//     de: "Süd-Marsa Alam",
//     it: "Sud di Marsa Alam",
//     ru: "Юг Марса-Алама",
//     pl: "Południowe Marsa Alam",
//     cz: "Jižní Marsa Alam"
//   },
//   overview: {
//     en: "Experience an authentic Bedouin evening by the Red Sea. Enjoy a relaxing evening combining a one-hour horse ride with a traditional beach campfire. Enjoy traditional Bedouin coffee and a fresh fish dinner, relax with drinks, and finish beneath the stars away from busy tourist areas.",
//     de: "Erleben Sie einen authentischen Beduinenabend am Roten Meer. Genießen Sie einen entspannten Abend, der einen einstündigen Ausritt mit einem traditionellen Lagerfeuer am Strand verbindet. Genießen Sie traditionellen Beduinenkaffee, ein frisches Fischgericht und entspannen Sie unter dem Sternenhimmel.",
//     it: "Vivi un'autentica serata beduina sul Mar Rosso. Goditi una serata rilassante che unisce un'ora di passeggiata a cavallo con un tradizionale falò in spiaggia. Gusta il caffè beduino e una cena a base di pesce fresco sotto le stelle.",
//     ru: "Испытайте настоящий бедуинский вечер на берегу Красного моря. Наслаждайтесь расслабляющим вечером, сочетающим часовую прогулку на лошадях и традиционный костер на пляже. Попробуйте бедуинский кофе, ужин из свежей рыбы и отдохните под звездами.",
//     pl: "Przeżyj autentyczny beduiński wieczór nad Morzem Czerwonym. Ciesz się relaksującym wieczorem łączącym godzinną jazdę konną z tradycyjnym ogniskiem na plaży. Spróbuj tradycyjnej beduińskiej kawy, świeżej ryby i zrelaksuj się pod gwiazdami.",
//     cz: "Zažijte autentický beduínský večer u Rudého moře. Užijte si pohodový večer spojující hodinovou jízdu na koni s tradičním táborákem na pláži. Vychutnejte si beduínskou kávu, večeři z čerstvých ryb a relaxujte pod hvězdami."
//   },
//   highlights: {
//     en: [
//       "1-hour horse riding experience",
//       "Professional horse riding guide",
//       "Traditional beach campfire",
//       "Traditional Bedouin coffee",
//       "Fresh fish dinner",
//       "All drinks included",
//       "Relaxing evening by the Red Sea",
//       "Stargazing away from busy tourist areas",
//       "Hotel pickup and drop-off",
//       "Entrance ticket included"
//     ],
//     de: [
//       "1-stündiger Ausritt",
//       "Professioneller Reitführer",
//       "Traditionelles Lagerfeuer am Strand",
//       "Traditioneller Beduinenkaffee",
//       "Frisches Fisch-Abendessen",
//       "Alle Getränke inklusive",
//       "Entspannender Abend am Roten Meer",
//       "Sternenbeobachtung fernab des Trubels",
//       "Hotelabholung und Rückbringung",
//       "Eintrittskarte inklusive"
//     ],
//     it: [
//       "1 ora di passeggiata a cavallo",
//       "Guida equestre professionale",
//       "Tradizionale falò in spiaggia",
//       "Caffè beduino tradizionale",
//       "Cena a base di pesce fresco",
//       "Tutte le bevande incluse",
//       "Serata rilassante sul Mar Rosso",
//       "Osservazione delle stelle lontano dal caos",
//       "Transfer da e per l'hotel",
//       "Biglietto d'ingresso incluso"
//     ],
//     ru: [
//       "1 час прогулки на лошадях",
//       "Профессиональный гид по верховой езде",
//       "Традиционный костер на пляже",
//       "Традиционный бедуинский кофе",
//       "Ужин из свежей рыбы",
//       "Все напитки включены",
//       "Расслабляющий вечер у Красного моря",
//       "Наблюдение за звездами вдали от суеты",
//       "Трансфер из отеля и обратно",
//       "Входной билет включен"
//     ],
//     pl: [
//       "1 godzina jazdy konnej",
//       "Profesjonalny przewodnik jeździecki",
//       "Tradycyjne ognisko na plaży",
//       "Tradycyjna kawa beduińska",
//       "Kolacja ze świeżej ryby",
//       "Wszystkie napoje w cenie",
//       "Relaksujący wieczór nad Morzem Czerwonym",
//       "Obserwacja gwiazd z dala od tłumów",
//       "Odbiór i powrót do hotelu",
//       "Bilet wstępu w cenie"
//     ],
//     cz: [
//       "1 hodina jízdy na koni",
//       "Profesionální průvodce pro jízdu na koni",
//       "Tradiční táborák na pláži",
//       "Tradiční beduínská káva",
//       "Večeře z čerstvých ryb",
//       "Všechny nápoje v ceně",
//       "Pohodový večer u Rudého moře",
//       "Pozorování hvězd mimo rušné oblasti",
//       "Vyzvednutí a návrat do hotelu",
//       "Vstupenka v ceně"
//     ]
//   },
//   included: {
//     en: [
//       "Hotel pickup and drop-off",
//       "1-hour horse riding",
//       "Professional horse riding guide",
//       "Beach campfire experience",
//       "Traditional Bedouin coffee",
//       "Fresh fish dinner",
//       "All drinks",
//       "Entrance ticket",
//       "Stargazing experience"
//     ],
//     de: [
//       "Hotelabholung und Rückbringung",
//       "1-stündiger Ausritt",
//       "Professioneller Reitführer",
//       "Strand-Lagerfeuer-Erlebnis",
//       "Traditioneller Beduinenkaffee",
//       "Frisches Fisch-Abendessen",
//       "Alle Getränke",
//       "Eintrittskarte",
//       "Sternenbeobachtung"
//     ],
//     it: [
//       "Transfer da e per l'hotel",
//       "1 ora di passeggiata a cavallo",
//       "Guida equestre professionale",
//       "Esperienza del falò in spiaggia",
//       "Caffè beduino tradizionale",
//       "Cena a base di pesce fresco",
//       "Tutte le bevande",
//       "Biglietto d'ingresso",
//       "Osservazione delle stelle"
//     ],
//     ru: [
//       "Трансфер из отеля и обратно",
//       "1 час прогулки на лошадях",
//       "Профессиональный гид по верховой езде",
//       "Костер на пляже",
//       "Традиционный бедуинский кофе",
//       "Ужин из свежей рыбы",
//       "Все напитки",
//       "Входной билет",
//       "Наблюдение за звездами"
//     ],
//     pl: [
//       "Odbiór i powrót do hotelu",
//       "1 godzina jazdy konnej",
//       "Profesjonalny przewodnik jeździecki",
//       "Ognisko na plaży",
//       "Tradycyjna kawa beduińska",
//       "Kolacja ze świeżej ryby",
//       "Wszystkie napoje",
//       "Bilet wstępu",
//       "Obserwacja gwiazd"
//     ],
//     cz: [
//       "Vyzvednutí a návrat do hotelu",
//       "1 hodina jízdy na koni",
//       "Profesionální průvodce pro jízdu na koni",
//       "Táborák na pláži",
//       "Tradiční beduínská káva",
//       "Večeře z čerstvých ryb",
//       "Všechny nápoje",
//       "Vstupenka",
//       "Pozorování hvězd"
//     ]
//   },
//   notIncluded: {
//     en: [
//       "Personal expenses",
//       "Optional activities or services not mentioned above"
//     ],
//     de: [
//       "Persönliche Ausgaben",
//       "Optionale Aktivitäten oder oben nicht genannte Dienstleistungen"
//     ],
//     it: [
//       "Spese personali",
//       "Attività opzionali o servizi non menzionati sopra"
//     ],
//     ru: [
//       "Личные расходы",
//       "Дополнительные услуги или активности, не указанные выше"
//     ],
//     pl: [
//       "Wydatki osobiste",
//       "Opcjonalne atrakcje lub usługi niewymienione powyżej"
//     ],
//     cz: [
//       "Osobní výdaje",
//       "Volitelné активности nebo služby výše neuvedené"
//     ]
//   },
//   whatToBring: {
//     en: ["Comfortable clothes", "Comfortable shoes", "Sunglasses", "Sun protection", "Camera or phone", "Light jacket for the evening"],
//     de: ["Bequeme Kleidung", "Bequeme Schuhe", "Sonnenbrille", "Sonnenschutz", "Kamera oder Handy", "Leichte Jacke für den Abend"],
//     it: ["Abiti comodi", "Scarpe comode", "Occhiali da sole", "Protezione solare", "Fotocamera o telefono", "Giacca leggera per la sera"],
//     ru: ["Удобная одежда", "Удобная обувь", "Солнцезащитные очки", "Защита от солнца", "Камера или телефон", "Легкая куртка на вечер"],
//     pl: ["Wygodne ubranie", "Wygodne buty", "Okulary przeciwsłoneczne", "Ochrona przeciwsłoneczna", "Aparat lub telefon", "Lekka kurtka na wieczór"],
//     cz: ["Pohodlné oblečení", "Pohodlná obuv", "Sluneční brýle", "Ochrana proti slunci", "Fotoaparát nebo telefon", "Lehká bunda na večer"]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Under 5 years: Free",
//       de: "Unter 5 Jahren: Kostenlos",
//       it: "Sotto i 5 anni: Gratuito",
//       ru: "До 5 лет: Бесплатно",
//       pl: "Poniżej 5 lat: Bezpłatnie",
//       cz: "Pod 5 let: Zdarma"
//     },
//     from5to10: {
//       en: "5–10 years: 50% of adult price",
//       de: "5–10 Jahre: 50% des Erwachsenenpreises",
//       it: "5–10 anni: 50% del prezzo adulti",
//       ru: "5–10 лет: 50% от стоимости взрослого",
//       pl: "5–10 lat: 50% ceny dorosłego",
//       cz: "5–10 let: 50 % z ceny dospělého"
//     },
//     over10: {
//       en: "Over 10 years: Full adult price",
//       de: "Über 10 Jahre: Voller Erwachsenenpreis",
//       it: "Oltre i 10 anni: Prezzo intero adulto",
//       ru: "Старше 10 лет: Полная стоимость",
//       pl: "Powyżej 10 lat: Pełna cena",
//       cz: "Nad 10 let: Plná cena"
//     }
//   },
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "16:00 — Hotel Pickup",
//         de: "16:00 — Hotelabholung",
//         it: "16:00 — Transfer dall'Hotel",
//         ru: "16:00 — Трансфер из отеля",
//         pl: "16:00 — Odbiór z Hotelu",
//         cz: "16:00 — Vyzvednutí v hotelu"
//       },
//       description: {
//         en: "Pickup from your hotel.",
//         de: "Abholung von Ihrem Hotel.",
//         it: "Ritiro presso il tuo hotel.",
//         ru: "Трансфер из вашего отеля.",
//         pl: "Odbiór z Twojego hotelu.",
//         cz: "Vyzvednutí z vašeho hotelu."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Arrival at Beach Camp",
//         de: "Ankunft im Strandcamp",
//         it: "Arrivo al Campo in Spiaggia",
//         ru: "Прибытие в пляжный лагерь",
//         pl: "Przyjazd do Obozu na Plaży",
//         cz: "Příjezd do plážového kempu"
//       },
//       description: {
//         en: "Arrive at the traditional beach camp by the Red Sea.",
//         de: "Ankunft im traditionellen Strandcamp am Roten Meer.",
//         it: "Arrivo al tradizionale campo sulla spiaggia del Mar Rosso.",
//         ru: "Прибытие в традиционный пляжный лагерь на берегу моря.",
//         pl: "Przyjazd do tradycyjnego obozu na plaży nad Morzem Czerwonym.",
//         cz: "Příjezd do tradičního plážového kempu u Rudého moře."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "1-Hour Horse Riding",
//         de: "1-stündiger Ausritt",
//         it: "1 Ora di Passeggiata a Cavallo",
//         ru: "1 час прогулки на лошадях",
//         pl: "1 Godzina Jazdy Konnej",
//         cz: "1 hodina jízdy na koni"
//       },
//       description: {
//         en: "Enjoy a 1-hour ride with a professional guide.",
//         de: "Genießen Sie einen 1-stündigen Ausritt mit Reitführer.",
//         it: "Goditi un'ora di passeggiata con guida professionale.",
//         ru: "Часовая прогулка с профессиональным инструктором.",
//         pl: "Ciesz się godzinną jazdą z przewodnikiem.",
//         cz: "Užijte si 1 hodinu jízdy s průvodcem."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Return to Beach Camp",
//         de: "Rückkehr ins Camp",
//         it: "Rientro al Campo",
//         ru: "Возвращение в лагерь",
//         pl: "Powrót do Obozu",
//         cz: "Návrat do kempu"
//       },
//       description: {
//         en: "Return to the camp after the horse ride.",
//         de: "Rückkehr ins Camp nach dem Ausritt.",
//         it: "Ritorno al campo dopo la passeggiata.",
//         ru: "Возвращение в лагерь после прогулки.",
//         pl: "Powrót do obozu po jazdzy konnej.",
//         cz: "Návrat do kempu po jízdě na koni."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "Beach Campfire & Coffee",
//         de: "Lagerfeuer & Beduinenkaffee",
//         it: "Falò e Caffè Beduino",
//         ru: "Костер и бедуинский кофе",
//         pl: "Ognisko i Kawa Beduińska",
//         cz: "Táborák a Beduínská káva"
//       },
//       description: {
//         en: "Relax around the campfire and enjoy Bedouin coffee.",
//         de: "Entpannen Sie am Lagerfeuer bei Beduinenkaffee.",
//         it: "Rilassati intorno al falò e gusta il caffè beduino.",
//         ru: "Отдохните у костра и попробуйте бедуинский кофе.",
//         pl: "Zrelaksuj się przy ognisku i spróbuj kawy.",
//         cz: "Odpočiňte si u táboráku a vychutnejte si kávu."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "Fresh Fish Dinner",
//         de: "Frisches Fisch-Abendessen",
//         it: "Cena di Pesce Fresco",
//         ru: "Ужин из свежей рыбы",
//         pl: "Kolacja ze Świeżej Ryby",
//         cz: "Večeře z čerstvých ryb"
//       },
//       description: {
//         en: "Enjoy a fresh fish dinner at the camp.",
//         de: "Genießen Sie ein frisches Fisch-Abendessen im Camp.",
//         it: "Gusta una cena a base di pesce fresco al campo.",
//         ru: "Наслаждайтесь ужином из свежей рыбы в лагере.",
//         pl: "Zjedz kolację ze świeżej ryby w obozie.",
//         cz: "Vychutnejte si večeři z čerstvých ryb v kempu."
//       }
//     },
//     {
//       step: "07",
//       title: {
//         en: "Relax & Stargazing",
//         de: "Entspannung & Sternenbeobachtung",
//         it: "Relax e Osservazione Stelle",
//         ru: "Отдых и наблюдение за звездами",
//         pl: "Relaks i Obserwacja Gwiazd",
//         cz: "Relaxace a pozorování hvězd"
//       },
//       description: {
//         en: "Relax by the sea with drinks under the stars.",
//         de: "Entspannen Sie am Meer unter dem Sternenhimmel.",
//         it: "Rilassati al mare sotto le stelle con le bevande.",
//         ru: "Отдохните у моря под звездным небом.",
//         pl: "Zrelaksuj się nad morzem pod gwiazdami.",
//         cz: "Odpočiňte si u moře pod hvězdami."
//       }
//     },
//     {
//       step: "08",
//       title: {
//         en: "Return Transfer",
//         de: "Rücktransfer",
//         it: "Rientro in Hotel",
//         ru: "Обратный трансфер",
//         pl: "Powrót do Hotelu",
//         cz: "Návrat do hotelu"
//       },
//       description: {
//         en: "Around Midnight — Transfer back to your hotel.",
//         de: "Gegen Mitternacht — Rückfahrt zu Ihrem Hotel.",
//         it: "Verso mezzanotte — Trasferimento di ritorno.",
//         ru: "Около полуночи — Трансфер обратно в отель.",
//         pl: "Około północy — Powrót do hotelu.",
//         cz: "Kolem půlnoci — Návrat do hotelu."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment required.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//     it: "Paga dopo il tour — nessuna pagamento online richiesto.",
//     ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
//     pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//     cz: "Platba až po výletu — není vyžadována platba předem online."
//   },
//   disclaimer: {
//     en: "This relaxed Red Sea evening combines horse riding, Bedouin hospitality, a traditional beach campfire and dinner under the stars with a professional guide.",
//     de: "Dieser entspannte Abend kombiniert Reiten, Beduinen-Gastfreundschaft, Lagerfeuer und Abendessen unter den Sternen mit einem professionellen Reitführer.",
//     it: "Questa serata sul Mar Rosso unisce cavalcatata, ospitalità beduina, falò in spiaggia e cena sotto le stelle con una guida professionale.",
//     ru: "Этот вечер сочетает в себе верховую езду, бедуинское гостеприимство, костер на пляже и ужин под звездами с гидом.",
//     pl: "Ten wieczór łączy jazdę konną, beduińską gościnność, ognisko na plaży i kolację pod gwiazdami z przewodnikiem.",
//     cz: "Tento pohodový večer kombinuje jízdu na koni, beduínskou pohostinnost, táborák na pláži a večeři pod hvězdami s průvodcem."
//   },
//   images: {
//     featured: "/images/tours/horse-riding-card.webp",
//     gallery: [
//       "/images/tours/horse-riding-1.webp",
//       "/images/tours/horse-riding-2.webp",
//       "/images/tours/horse-riding-3.webp"
//     ]
//   }
// },
// // scuba
// {
//   id: "try-scuba-dive",
//   slug: "try-scuba-dive",
//   type: "scuba-diving",
//   title: {
//     en: "TRY SCUBA DIVE",
//     de: "TRY SCUBA DIVE",
//     it: "TRY SCUBA DIVE",
//     ru: "TRY SCUBA DIVE",
//     pl: "TRY SCUBA DIVE",
//     cz: "TRY SCUBA DIVE"
//   },
//   subtitle: {
//     en: "Your First Dive — No Experience Needed",
//     de: "Ihr erster Tauchgang — Keine Erfahrung erforderlich",
//     it: "La tua prima immersione — Nessuna esperienza richiesta",
//     ru: "Ваше первое погружение — Опыт не требуется",
//     pl: "Twój pierwszy nurkowanie — Doświadczenie nie jest wymagane",
//     cz: "Váš první ponor — Bez předchozích zkušeností"
//   },
//   category: {
//     en: "Scuba Diving",
//     de: "Tauchen",
//     it: "Immersioni Subacquee",
//     ru: "Дайвинг",
//     pl: "Nurkowanie",
//     cz: "Potápění"
//   },
//   price: {
//     amount: 0, 
//     currency: "€",
//     unit: {
//       en: "per person",
//       de: "pro Person",
//       it: "per persona",
//       ru: "за человека",
//       pl: "za osobę",
//       cz: "za osobu"
//     }
//   },
//   duration: {
//     en: "Half Day",
//     de: "Halbtags",
//     it: "Mezza giornata",
//     ru: "Полдня",
//     pl: "Pół dnia",
//     cz: "Půl dne"
//   },
//   departure: {
//     en: "Marsa Alam Hotels",
//     de: "Marsa Alam Hotels",
//     it: "Hotel di Marsa Alam",
//     ru: "Отели Марса-Алам",
//     pl: "Hotele w Marsa Alam",
//     cz: "Hotely v Marsa Alam"
//   },
//   overview: {
//     en: "Your First Dive — No Experience Needed. Details coming soon.",
//     de: "Ihr erster Tauchgang — Keine Erfahrung erforderlich. Details folgen bald.",
//     it: "La tua prima immersione — Nessuna esperienza richiesta. Dettagli in arrivo.",
//     ru: "Ваше первое погружение — Опыт не требуется. Подробности скоро.",
//     pl: "Twój pierwszy nurkowanie — Doświadczenie nie jest wymagane. Szczegóły wkrótce.",
//     cz: "Váš první ponor — Bez předchozích zkušeností. Podrobnosti již brzy."
//   },
//   highlights: { en: [], de: [], it: [], ru: [], pl: [], cz: [] },
//   included: { en: [], de: [], it: [], ru: [], pl: [], cz: [] },
//   whatToBring: { en: [], de: [], it: [], ru: [], pl: [], cz: [] },
//   childrenPolicy: {
//     under5: { en: "", de: "", it: "", ru: "", pl: "", cz: "" },
//     from5to10: { en: "", de: "", it: "", ru: "", pl: "", cz: "" },
//     over10: { en: "", de: "", it: "", ru: "", pl: "", cz: "" }
//   },
//   itinerary: [],
//   paymentNote: { en: "", de: "", it: "", ru: "", pl: "", cz: "" },
//   disclaimer: { en: "", de: "", it: "", ru: "", pl: "", cz: "" },
//   images: {
//     featured: "/images/tours/special-card-1.webp",
//     gallery: []
//   }
// },
// {
//   id: "dolphin-house-samadai-scuba",
//   slug: "dolphin-house-samadai-reef-scuba-diving",
//   type: "scuba-diving",
//   title: {
//     en: "Dolphin House (Samadai Reef) — Scuba Diving",
//     de: "Delfinhaus (Samadai-Riff) — Tauchen",
//     it: "Dolphin House (Samadai Reef) — Immersioni",
//     ru: "Дом дельфинов (Риф Самадай) — Дайвинг",
//     pl: "Dolphin House (Rafa Samadai) — Nurkowanie",
//     cz: "Dolphin House (Útes Samadai) — Potápění"
//   },
//   subtitle: {
//     en: "Scuba Diving Experience (Max 4 Divers)",
//     de: "Taucherlebnis (Max. 4 Taucher)",
//     it: "Esperienza di Immersione (Max 4 Sub)",
//     ru: "Погружение с аквалангом (Макс. 4 дайвера)",
//     pl: "Przygoda z nurkowaniem (Maks. 4 nurków)",
//     cz: "Zážitek z potápění (Max. 4 potápěči)"
//   },
//   category: {
//     en: "Scuba Diving",
//     de: "Tauchen",
//     it: "Immersioni Subacquee",
//     ru: "Дайвинг",
//     pl: "Nurkowanie",
//     cz: "Potápění"
//   },
//   price: {
//     amount: 110,
//     currency: "€",
//     unit: {
//       en: "per person (Park Fee Included)",
//       de: "pro Person (Parkgebühr inklusive)",
//       it: "per persona (Tassa Parco Inclusa)",
//       ru: "за человека (Сбор парка включен)",
//       pl: "za osobę (Opłata za park w cenie)",
//       cz: "za osobu (Poplatek za park v ceně)"
//     }
//   },
//   duration: {
//     en: "Full Day (8–9 Hours)",
//     de: "Ganztägig (8–9 Std.)",
//     it: "Intera giornata (8–9 Ore)",
//     ru: "Полный день (8–9 часов)",
//     pl: "Cały dzień (8–9 godzin)",
//     cz: "Celý den (8–9 hodin)"
//   },
//   departure: {
//     en: "Marsa Alam Marina",
//     de: "Marina Marsa Alam",
//     it: "Marina di Marsa Alam",
//     ru: "Марина Марса-Алам",
//     pl: "Marina Marsa Alam",
//     cz: "Marina Marsa Alam"
//   },
//   overview: {
//     en: "Discover the underwater world of Dolphin House (Samadai Reef) with 2 scuba dives. Explore beautiful coral formations, swim-throughs, and a long underwater cave. Guided in small groups (maximum 4 divers) by PADI/SSI Instructors.",
//     de: "Entdecken Sie die Unterwasserwelt von Dolphin House (Samadai Reef) bei 2 Tauchgängen. Erkunden Sie wunderschöne Korallenformationen, Durchbrüche und eine lange Unterwasserhöhle in kleinen Gruppen (max. 4 Taucher).",
//     it: "Scopri il mondo sottomarino di Dolphin House (Samadai Reef) con 2 immersioni. Esplora meravigliose formazioni coralline, passaggi e una lunga grotta sottomarina in piccoli gruppi (massimo 4 sub).",
//     ru: "Откройте для себя подводный мир Дома Дельфинов (риф Самадай) во время 2 погружений. Исследуйте коралловые рифы, пещеры и проходы в небольших группах (максимум 4 дайвера).",
//     pl: "Odkryj podwodny świat Dolphin House (Rafa Samadai) podczas 2 nurkowań. Odkrywaj piękne formacje koralowe, przesmyki i długą podwodną jaskinię w małych grupach (maks. 4 nurków).",
//     cz: "Objevte podvodní svět Dolphin House (útes Samadai) během 2 ponorů. Prozkoumejte krásné koralové útvary, průplavy a dlouhou podvodní jeskyni v malých skupinách (max. 4 potápěči)."
//   },
//   highlights: {
//     en: [
//       "2 Scuba Dives around outer reef & cave",
//       "Small group (Maximum 4 divers per guide)",
//       "PADI or SSI Certified Instructor",
//       "Marine Park Fee Included",
//       "Full scuba equipment & wetsuit included",
//       "Dolphin watching from boat during surface interval",
//       "Fresh buffet lunch & drinks onboard"
//     ],
//     de: [
//       "2 Tauchgänge am Außenriff & in Höhlen",
//       "Kleine Gruppe (Maximal 4 Taucher pro Guide)",
//       "PADI- oder SSI-zertifizierter Tauchlehrer",
//       "Nationalparkgebühr inbegriffen",
//       "Komplette Tauchausrüstung & Neoprenanzug inklusive",
//       "Delfinbeobachtung vom Boot in der Oberflächenpause",
//       "Frisches Mittagsbuffet & Getränke an Bord"
//     ],
//     it: [
//       "2 immersioni sulla barriera esterna e grotte",
//       "Piccolo gruppo (Massimo 4 sub per guida)",
//       "Istruttore certificato PADI o SSI",
//       "Tassa del Parco Marino inclusa",
//       "Attrezzatura da sub completa e muta incluse",
//       "Avvistamento delfini dalla barca nell'intervallo di superficie",
//       "Pranzo a buffet e bevande a bordo"
//     ],
//     ru: [
//       "2 погружения на внешнем рифе и пещерах",
//       "Маленькая группа (Максимум 4 дайвера на гида)",
//       "Инструктор PADI или SSI",
//       "Сбор морского заповедника включен",
//       "Полное снаряжение для дайвинга и гидрокостюм",
//       "Наблюдение за дельфинами с борта во время перерыва",
//       "Свежий обед (шведский стол) и напитки"
//     ],
//     pl: [
//       "2 nurkowania przy zewnętrznej rafie i jaskiniach",
//       "Mała grupa (Maksymalnie 4 nurków na przewodnika)",
//       "Certyfikowany instruktor PADI lub SSI",
//       "Opłata za park morski w cenie",
//       "Pełny sprzęt do nurkowania i pianka w cenie",
//       "Obserwacja delfinów z łodzi podczas przerwy",
//       "Świeży obiad w formie bufetu i napoje na pokładzie"
//     ],
//     cz: [
//       "2 ponory na vnějším útesu a v jeskyních",
//       "Malá skupina (Maximálně 4 potápěči na průvodce)",
//       "Certifikovaný instruktor PADI nebo SSI",
//       "Poplatek za mořský park v ceně",
//       "Kompletní potápěčské vybavení a neopren v ceně",
//       "Pozorování delfínů z lodi během povrchového intervalu",
//       "Čerstvý oběd formou bufetu a nápoje na palubě"
//     ]
//   },
//   included: {
//     en: [
//       "Hotel pickup & drop-off",
//       "Boat trip & Marine Park / Protected Area Fee",
//       "2 scuba dives with PADI/SSI Instructor",
//       "Full scuba diving equipment (Wetsuit, tanks, weights)",
//       "Maximum 4 divers per group",
//       "Fresh buffet lunch onboard",
//       "Hot & cold drinks and mineral water"
//     ],
//     de: [
//       "Hotelabholung & Rückbringung",
//       "Bootsfahrt & Nationalparkgebühren",
//       "2 Tauchgänge mit PADI/SSI Tauchlehrer",
//       "Komplette Tauchausrüstung (Neoprenanzug, Flaschen, Blei)",
//       "Maximal 4 Taucher pro Gruppe",
//       "Frisches Mittagsbuffet an Bord",
//       "Warme & kalte Getränke sowie Mineralwasser"
//     ],
//     it: [
//       "Transfer da e per l'hotel",
//       "Gita in barca e Tassa del Parco Marino",
//       "2 immersioni con istruttore PADI/SSI",
//       "Attrezzatura subacquea completa (Muta, bombole, zavorra)",
//       "Massimo 4 subacquei per gruppo",
//       "Pranzo a buffet a bordo",
//       "Bevande calde, fredde e acqua minerale"
//     ],
//     ru: [
//       "Трансфер из отеля и обратно",
//       "Морская прогулка и сбор за посещение заповедника",
//       "2 погружения с инструктором PADI/SSI",
//       "Полное снаряжение (Гидрокостюм, баллоны, грузы)",
//       "Максимум 4 дайвера в группе",
//       "Свежий обед (шведский стол) на борту",
//       "Горячие, холодные напитки и минеральная вода"
//     ],
//     pl: [
//       "Odbiór i powrót do hotelu",
//       "Rejs statkiem i opłata za park morski",
//       "2 nurkowania z instruktorem PADI/SSI",
//       "Pełny sprzęt nurkowy (Pianka, butle, balast)",
//       "Maksymalnie 4 nurków w grupie",
//       "Świeży obiad w formie bufetu na pokładzie",
//       "Zimne i gorące napoje oraz woda mineralna"
//     ],
//     cz: [
//       "Vyzvednutí a návrat do hotelu",
//       "Výlet lodí a poplatek za mořský park",
//       "2 ponory s instruktorem PADI/SSI",
//       "Kompletní potápěčské vybavení (Neopren, lahve, zátěž)",
//       "Maximálně 4 potápěči ve skupině",
//       "Čerstvý oběd formou bufetu na palubě",
//       "Teplé a studené nápoje, minerální voda"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Diving certification (digital or physical)",
//       "Logbook",
//       "Towel",
//       "Eco-friendly sunscreen",
//       "Hat & Sunglasses"
//     ],
//     de: [
//       "Taucherlebnis-Zertifikat (digital oder physisch)",
//       "Logbuch",
//       "Handtuch",
//       "Umweltfreundliche Sonnencreme",
//       "Hut & Sonnenbrille"
//     ],
//     it: [
//       "Brevetto subacqueo (digitale o fisico)",
//       "Libretto immersioni (Logbook)",
//       "Asciugamano",
//       "Crema solare ecologica",
//       "Cappello e occhiali da sole"
//     ],
//     ru: [
//       "Сертификат дайвера (цифровой или бумажный)",
//       "Логбук (книга погружений)",
//       "Полотенце",
//       "Экологичный солнцезащитный крем",
//       "Головной убор и очки"
//     ],
//     pl: [
//       "Certyfikat nurkowy (cyfrowy lub fizyczny)",
//       "Logbook (książka nurkowa)",
//       "Ręcznik",
//       "Ekologiczny krem z filtrem",
//       "Czapka i okulary przeciwsłoneczne"
//     ],
//     cz: [
//       "Potápěčská certifikace (digitální nebo fyzická)",
//       "Lógbook (potápěčský deník)",
//       "Ručník",
//       "Ekologický opalovací krém",
//       "Klobouk a sluneční brýle"
//     ]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Not recommended for children under 10 years without certification",
//       de: "Nicht empfohlen für Kinder unter 10 Jahren ohne Zertifikat",
//       it: "Non consigliato ai bambini sotto i 10 anni senza brevetto",
//       ru: "Не рекомендуется детям до 10 лет без сертификата",
//       pl: "Nie zalecane dla dzieci poniżej 10 lat bez certyfikatu",
//       cz: "Nedoporučuje se pro děti do 10 let bez certifikace"
//     },
//     from5to10: {
//       en: "Certified Junior Divers: Full dive rate applies",
//       de: "Zertifizierte Junior-Taucher: Voller Tauchtarif gilt",
//       it: "Junior Diver Certificati: Si applica la tariffa sub completa",
//       ru: "Сертифицированные Junior дайверы: Полный тариф",
//       pl: "Certyfikowani Junior Nurkowie: Pełna stawka za nurkowanie",
//       cz: "Certifikovaní Junior potápěči: Plná cena ponoru"
//     },
//     over10: {
//       en: "Full adult rate applies",
//       de: "Voller Erwachsenentarif gilt",
//       it: "Si applica la tariffa intera",
//       ru: "Полный взрослый тариф",
//       pl: "Obowiązuje pełna stawka",
//       cz: "Plná cena"
//     }
//   },
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Hotel Pickup — 07:30 AM",
//         de: "Hotelabholung — 07:30 Uhr",
//         it: "Transfer dall'Hotel — 07:30",
//         ru: "Трансфер из отеля — 07:30",
//         pl: "Odbiór z hotelu — 07:30",
//         cz: "Vyzvednutí v hotelu — 07:30"
//       },
//       description: {
//         en: "Pickup from your hotel and transfer to Marsa Alam Marina.",
//         de: "Abholung vom Hotel und Transfer zur Marina Marsa Alam.",
//         it: "Pick-up dall'hotel e trasferimento alla Marina di Marsa Alam.",
//         ru: "Трансфер из отеля в Марину Марса-Алам.",
//         pl: "Odbiór z hotelu i transfer do Mariny Marsa Alam.",
//         cz: "Vyzvednutí v hotelu a transfer do Mariny Marsa Alam."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Preparation at Marina",
//         de: "Vorbereitung in der Marina",
//         it: "Preparazione alla Marina",
//         ru: "Подготовка в марине",
//         pl: "Przygotowanie w Marinie",
//         cz: "Příprava v marině"
//       },
//       description: {
//         en: "Prepare equipment and get ready for departure.",
//         de: "Ausrüstung vorbereiten und auf die Abfahrt vorbereiten.",
//         it: "Preparazione dell'attrezzatura e imbarco.",
//         ru: "Подготовка снаряжения и посадка на судно.",
//         pl: "Przygotowanie sprzętu i gotowość do wypłynięcia.",
//         cz: "Příprava оборудования а příprava k odjezdu."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Boat Cruise & Briefing",
//         de: "Bootsfahrt & Einweisung",
//         it: "Navigazione e Briefing",
//         ru: "Круиз и брифинг",
//         pl: "Rejs i odprawa",
//         cz: "Plavba lodí a briefing"
//       },
//       description: {
//         en: "Cruise toward Samadai Reef with dive safety briefing.",
//         de: "Fahrt zum Samadai-Riff mit Sicherheitsunterweisung.",
//         it: "Navigazione verso il Samadai Reef con briefing di sicurezza.",
//         ru: "Круиз к рифу Самадай и инструктаж по безопасности.",
//         pl: "Rejs w stronę Rafy Samadai z odprawą bezpieczeństwa.",
//         cz: "Plavba k útesu Samadai s bezpečnostním briefingem."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Dive 1 — Samadai Reef Outer Wall",
//         de: "Tauching 1 — Samadai Außenriff",
//         it: "Immersione 1 — Parete Esterna Samadai",
//         ru: "Погружение 1 — Внешняя стена Самадай",
//         pl: "Nurkowanie 1 — Zewnętrzna ściana Samadai",
//         cz: "Ponor 1 — Vnější stěna Samadai"
//       },
//       description: {
//         en: "Explore outer reef wall, coral pinnacles and rich marine life.",
//         de: "Erkunden Sie die Außenriffwand, Korallentürme und Meeresleben.",
//         it: "Esplora la parete esterna, i pinnacoli e la vita marina.",
//         ru: "Исследование внешней стены рифа и коралловых башен.",
//         pl: "Odkrywanie zewnętrznej ściany rafy i iglic koralowych.",
//         cz: "Prozkoumejte vnější stěnu útesu a koralové věže."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "Surface Interval & Dolphin Watching",
//         de: "Oberflächenpause & Delfinbeobachtung",
//         it: "Intervallo di Superficie & Delfini",
//         ru: "Интервал на поверхности и дельфины",
//         pl: "Przerwa powierzchniowa i delfiny",
//         cz: "Povrchový interval a pozorování delfínů"
//       },
//       description: {
//         en: "Relax onboard. Observe wild dolphins from boat if present.",
//         de: "Entspannen an Bord. Delfinbeobachtung vom Boot aus.",
//         it: "Relax a bordo e avvistamento delfini dalla barca.",
//         ru: "Отдых на борту. Наблюдение за дельфинами с катера.",
//         pl: "Relaks na pokładzie i obserwacja delfinów z łodzi.",
//         cz: "Odpočinek na palubě. Pozorování delfínów z lodi."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "Dive 2 — Cave & Swim-Throughs",
//         de: "Tauchgang 2 — Höhle & Durchbrüche",
//         it: "Immersione 2 — Grotta e Passaggi",
//         ru: "Погружение 2 — Пещера и каньоны",
//         pl: "Nurkowanie 2 — Jaskinia i przesmyki",
//         cz: "Ponor 2 — Jeskyně a průplavy"
//       },
//       description: {
//         en: "Discover Samadai's iconic underwater cave and reef formations.",
//         de: "Entdecken Sie die berühmte Unterwasserhöhle von Samadai.",
//         it: "Esplora la famosa grotta sottomarina di Samadai.",
//         ru: "Погружение в знаменитую подводную пещеру Самадай.",
//         pl: "Odkryj słynną podwodną jaskinię Samadai.",
//         cz: "Objevení slavné podvodní jeskyně Samadai."
//       }
//     },
//     {
//       step: "07",
//       title: {
//         en: "Lunch Onboard",
//         de: "Mittagessen an Bord",
//         it: "Pranzo a Bordo",
//         ru: "Обед на борту",
//         pl: "Obiad na pokładzie",
//         cz: "Oběd na palubě"
//       },
//       description: {
//         en: "Enjoy freshly prepared buffet lunch onboard.",
//         de: "Genießen Sie das frisch zubereitete Buffet an Bord.",
//         it: "Goditi il pranzo a buffet appena preparato.",
//         ru: "Свежий обед (шведский стол) на борту.",
//         pl: "Obiad w formie bufetu na pokładzie.",
//         cz: "Oběd formou bufetu na palubě."
//       }
//     },
//     {
//       step: "08",
//       title: {
//         en: "Return & Hotel Drop-off — 03:30 PM",
//         de: "Rückkehr & Hotelabgabe — 15:30 Uhr",
//         it: "Ritorno e Transfer Hotel — 15:30",
//         ru: "Возвращение в отель — 15:30",
//         pl: "Powrót do hotelu — 15:30",
//         cz: "Návrat do hotelu — 15:30"
//       },
//       description: {
//         en: "Return to marina and transfer back to your hotel.",
//         de: "Rückfahrt zur Marina und Transfer zurück zum Hotel.",
//         it: "Rientro alla marina e trasferimento in hotel.",
//         ru: "Возвращение в марину и трансфер в отель.",
//         pl: "Powrót do mariny i transfer do hotelu.",
//         cz: "Návrat do mariny a transfer do hotelu."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment required.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
//     it: "Paga dopo il tour — nessuna pagamento online richiesto.",
//     ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
//     pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
//     cz: "Platba až po výletu — není vyžadována platba předem online."
//   },
//   disclaimer: {
//     en: "Diving inside designated dolphin resting area is strictly prohibited. Dives occur in outer reef zones. Dolphin sightings are wild & not guaranteed.",
//     de: "Das Tauchen in der Delfin-Ruhezone ist gesetzlich verboten. Tauchgänge finden am Außenriff statt. Delfinsichtungen sind nicht garantiert.",
//     it: "L'immersione nella zona di riposo dei delfini è proibita. Le immersioni avvengono all'esterno. L'avvistamento non è garantito.",
//     ru: "Дайвинг в заповедной зоне отдыха дельфинов запрещен законом. Погружения проходят на внешнем рифе.",
//     pl: "Nurkowanie w strefie odpoczynku delfinów jest zabronione. Nurkowania odbywają się na zewnętrznej rafie.",
//     cz: "Potápění v zóně odpočinku delfínů je přísně zakázáno. Ponory probíhají na vnějším útesu."
//   },
//   images: {
//     featured: "/images/tours/samadai-scuba-card.webp",
//     gallery: [
//       "/images/tours/samadai-scuba-1.webp",
//       "/images/tours/samadai-scuba-2.webp",
//       "/images/tours/samadai-scuba-3.webp"
//     ]
//   }
// },
// {
//   id: "elphinstone-reef-scuba",
//   slug: "elphinstone-reef-advanced-scuba-diving",
//   type: "scuba-diving",
//   title: {
//     en: "Elphinstone Reef — Advanced Shark & Drift Diving Experience",
//     de: "Elphinstone-Riff — Fortgeschrittenes Hai- & Strömungstauchen",
//     it: "Elphinstone Reef — Esperienza di Immersioni con Squali e in Corrente per Avanzati",
//     ru: "Риф Эльфинстоун — Дайвинг с акулами и дрифт для продвинутых",
//     pl: "Rafa Elphinstone — Zaawansowane Nurkowanie z Rekinami i w Prądzie",
//     cz: "Útes Elphinstone — Pokročilé Potápění se Žraloky a Proudové Ponory"
//   },
//   subtitle: {
//     en: "Fast Speedboat Transit (Max 4 Divers)",
//     de: "Schnellboot-Transfer (Max. 4 Taucher)",
//     it: "Trasferimento in gommone veloce (Max 4 Sub)",
//     ru: "Скоростной катер (Макс. 4 дайвера)",
//     pl: "Szybka motorówka (Maks. 4 nurków)",
//     cz: "Rychlý člun (Max. 4 potápěči)"
//   },
//   category: {
//     en: "Scuba Diving",
//     de: "Tauchen",
//     it: "Immersioni Subacquee",
//     ru: "Дайвинг",
//     pl: "Nurkowanie",
//     cz: "Potápění"
//   },
//   price: {
//     amount: 120,
//     currency: "€",
//     unit: {
//       en: "per person (Marine Park Fee Included)",
//       de: "pro Person (Meeresparkgebühr inklusive)",
//       it: "per persona (Tassa Parco Marino Inclusa)",
//       ru: "за человека (Сбор морского заповедника включен)",
//       pl: "za osobę (Opłata за park morski w cenie)",
//       cz: "za osobu (Poplatek za mořský park v ceně)"
//     }
//   },
//   duration: {
//     en: "Half Day (~5–6 Hours)",
//     de: "Halbtags (~5–6 Std.)",
//     it: "Mezza giornata (~5–6 Ore)",
//     ru: "Полдня (~5–6 часов)",
//     pl: "Pół dnia (~5–6 godzin)",
//     cz: "Půl dne (~5–6 hodin)"
//   },
//   departure: {
//     en: "Hermes Marina (via Speedboat)",
//     de: "Hermes Marina (mit dem Schnellboot)",
//     it: "Hermas Marina (in gommone)",
//     ru: "Hermes Marina (на скоростном катере)",
//     pl: "Hermes Marina (szybką motorówką)",
//     cz: "Hermes Marina (rychlým člunem)"
//   },
//   overview: {
//     en: "Elphinstone Reef is one of the Red Sea’s most legendary advanced dive sites, world-renowned for its dramatic vertical walls, shifting currents, and thrilling encounters with large pelagic marine life. This is a true Advanced scuba diving experience, combining deep reef-wall exploration, adrenaline-filled drift diving, and the possibility of encountering Oceanic Whitetip Sharks (Longimanus), hammerheads, grey reef sharks, giant tuna, and eagle rays.",
//     de: "Das Elphinstone-Riff ist einer der legendärsten Tauchplätze des Roten Meeres für Fortgeschrittene, weltberühmt für steile Wände, wechselnde Strömungen und aufregende Begegnungen mit Großfischen. Ein echtes Erlebnis für Fortgeschrittene mit Steilwandtauchen, Strömungstauchen und Chancen auf Weißspitzen-Hochseehaie (Longimanus), Hammerhaie und Graue Riffhaie.",
//     it: "Elphinstone Reef è uno dei siti di immersione per avanzati più leggendari del Mar Rosso, famoso in tutto il mondo per le sue pareti verticali, correnti variabili ed entusiasmanti incontri con la fauna pelagica. Un'autentica esperienza per sub avanzati che unisce pareti profonde, immersioni in corrente e la possibilità di avvistare squali Longimano, martello e grigi del reef.",
//     ru: "Риф Эльфинстоун — одно из самых легендарных мест для дайвинга продвинутого уровня в Красном море. Всемирно известен отвесными стенами, сильными течениями и наблюдениями за крупными океаническими обитателями: океаническими длиннокрылыми акулами (Лонгиманус), молотоголовыми акулами, серыми рифовыми акулами и скатами.",
//     pl: "Rafa Elphinstone to jedno z najbardziej kultowych miejsc do nurkowania dla zaawansowanych w Morzu Czerwonym, słynące z pionowych ścian, zmiennych prądów i spotkań z dużymi rybami oceanicznymi. Prawdziwe doświadczenie dla zaawansowanych połączone z nurkowaniem w prądzie i szansą na spotkanie rekinów oceanicznych (Longimanus), młotów i rekinów rafowych.",
//     cz: "Útes Elphinstone patří k nejlegendárnějším lokalitám pro pokročilé potápěče v Rudém moři. Je světoznámý kolmými stěnami, proměnlivými proudy a setkáními s velkými pelagickými živočichy. Nabízí ponory podél hlubokých stěn, proudové potápění a możliwość pozorování žraloků dlouhoploutvých (Longimanus), kladivounů a útesových žraloků."
//   },
//   highlights: {
//     en: [
//       "2 Guided Advanced scuba dives",
//       "Fast Speedboat transit — approx. 20–25 minutes journey",
//       "Marine Park & Environmental Fees included",
//       "Full scuba diving equipment rental & high-quality wetsuit",
//       "Tanks, weights & weight belt included",
//       "PADI or SSI Instructor (Max 4 divers per group)",
//       "Hotel pickup & drop-off included",
//       "Fresh mineral water, cold drinks & light snacks"
//     ],
//     de: [
//       "2 Geführte Tauchgänge für Fortgeschrittene",
//       "Schnelles Schnellboot — nur ca. 20–25 Minuten Fahrtzeit",
//       "Meerespark- & Umweltgebühren inklusive",
//       "Komplette Tauchausrüstung & hochwertiger Neoprenanzug zur Miete",
//       "Flaschen, Blei & Bleigurt inklusive",
//       "PADI- oder SSI-Tauchlehrer (Max. 4 Taucher pro Gruppe)",
//       "Hotelabholung & Rückbringung inklusive",
//       "Frisches Mineralwasser, kalte Getränke & leichte Snacks"
//     ],
//     it: [
//       "2 immersioni guidate per avanzati",
//       "Trasferimento veloce in gommone — circa 20–25 minuti di navigazione",
//       "Tasse del Parco Marino e Ambientali incluse",
//       "Noleggio attrezzatura subacquea completa e muta di alta qualità",
//       "Bombole, zavorra e cintura incluse",
//       "Istruttore PADI o SSI (Massimo 4 sub per gruppo)",
//       "Transfer da e per l'hotel incluso",
//       "Acqua minerale fresca, bevande fredde e snack leggeri"
//     ],
//     ru: [
//       "2 погружения для продвинутых с гидом",
//       "Скоростной катер — всего 20–25 минут в пути",
//       "Сбор морского заповедника и экологический сбор включены",
//       "Аренда полного комплекта снаряжения и качественного гидрокостюма",
//       "Баллоны, грузы и грузовой пояс включены",
//       "Инструктор PADI или SSI (Макс. 4 дайвера в группе)",
//       "Трансфер из отеля и обратно включен",
//       "Свежая минеральная вода, холодные напитки и легкие закуски"
//     ],
//     pl: [
//       "2 nurkowania z przewodnikiem dla zaawansowanych",
//       "Szybka motorówka — zaledwie ok. 20–25 minut rejsu",
//       "Opłaty za park morski i środowiskowe w cenie",
//       "Wypożyczenie pełnego sprzętu i wysokiej jakości pianka",
//       "Butle, balast i pas balastowy w cenie",
//       "Instruktor PADI lub SSI (Maksymalnie 4 nurków w grupie)",
//       "Odbiór i powrót do hotelu w cenie",
//       "Świeża woda mineralna, zimne napoje i lekkie przekąski"
//     ],
//     cz: [
//       "2 ponory s průvodcem pro pokročilé",
//       "Rychlý člun — pouze cca 20–25 minut plavby",
//       "Poplatky za mořský park a environmentální poplatky v ceně",
//       "Kompletní zapůjčení potápěčské výstroje a kvalitní neopren",
//       "Lahve, zátěž a zátěžový opasek v ceně",
//       "Instruktor PADI nebo SSI (Max. 4 potápěči ve skupině)",
//       "Vyzvednutí a návrat do hotelu v ceně",
//       "Čerstvá minerální voda, studené nápoje a občerstvení"
//     ]
//   },
//   included: {
//     en: [
//       "2 guided Advanced scuba dives",
//       "Fast Speedboat transit",
//       "Marine Park & Environmental Fees",
//       "Full scuba diving equipment rental",
//       "High-quality wetsuit",
//       "Tanks, weights & weight belt",
//       "PADI or SSI Instructor (Max 4 divers per group)",
//       "Hotel pickup & drop-off",
//       "Fresh mineral water & cold drinks",
//       "Light snacks",
//       "Safety stop"
//     ],
//     de: [
//       "2 geführte Tauchgänge für Fortgeschrittene",
//       "Schnellboot-Transfer",
//       "Meerespark- & Umweltgebühren",
//       "Komplette Tauchausrüstung zur Miete",
//       "Hochwertiger Neoprenanzug",
//       "Flaschen, Blei & Bleigurt",
//       "PADI- oder SSI-Tauchlehrer (Max. 4 Taucher pro Gruppe)",
//       "Hotelabholung & Rückbringung",
//       "Frisches Mineralwasser & kalte Getränke",
//       "Leichte Snacks",
//       "Sicherheitsstopp"
//     ],
//     it: [
//       "2 immersioni guidate per avanzati",
//       "Trasferimento veloce in gommone",
//       "Tasse del Parco Marino e Ambientali",
//       "Noleggio attrezzatura subacquea completa",
//       "Muta di alta qualità",
//       "Bombole, zavorra e cintura",
//       "Istruttore PADI o SSI (Max 4 sub per gruppo)",
//       "Transfer da e per l'hotel",
//       "Acqua minerale e bevande fresche",
//       "Snack leggeri",
//       "Sosta di sicurezza"
//     ],
//     ru: [
//       "2 погружения для продвинутых с гидом",
//       "Трансфер на скоростном катере",
//       "Сбор морского заповедника и экологический сбор",
//       "Аренда полного комплекта снаряжения",
//       "Высококачественный гидрокостюм",
//       "Баллоны, грузы и грузовой пояс",
//       "Инструктор PADI или SSI (Макс. 4 дайвера в группе)",
//       "Трансфер из отеля и обратно",
//       "Свежая минеральная вода и напитки",
//       "Легкие закуски",
//       "Остановка безопасности"
//     ],
//     pl: [
//       "2 nurkowania z przewodnikiem dla zaawansowanych",
//       "Rejs szybką motorówką",
//       "Opłaty parkowe i środowiskowe",
//       "Wypożyczenie pełnego sprzętu do nurkowania",
//       "Wysokiej jakości pianka",
//       "Butle, balast i pas balastowy",
//       "Instruktor PADI lub SSI (Maks. 4 nurków w grupie)",
//       "Odbiór i powrót do hotelu",
//       "Świeża woda mineralna i zimne napoje",
//       "Lekkie przekąski",
//       "Przystanek bezpieczeństwa"
//     ],
//     cz: [
//       "2 ponory s průvodcem pro pokročilé",
//       "Přeprava rychlým člunem",
//       "Poplatky za mořský park a environmentální poplatky",
//       "Kompletní zapůjčení potápěčské výstroje",
//       "Kvalitní neopren",
//       "Lahve, zátěž a zátěžový opasek",
//       "Instruktor PADI nebo SSI (Max. 4 potápěči ve skupině)",
//       "Vyzvednutí a návrat do hotelu",
//       "Čerstvá minerální voda a studené nápoje",
//       "Lehké občerstvení",
//       "Bezpečnostní zastávka"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Advanced Open Water certification — a digital copy on your phone is accepted",
//       "Logbook (digital or physical) to verify recent deep/drift dives",
//       "Towel",
//       "Sunscreen (Reef-safe preferred)",
//       "Hat & Sunglasses",
//       "Personal medication if needed"
//     ],
//     de: [
//       "Advanced Open Water Zertifikat — digitale Kopie auf dem Handy wird akzeptiert",
//       "Logbuch (digital oder Papier) zum Nachweis aktueller Tief-/Strömungstauchgänge",
//       "Handtuch",
//       "Sonnencreme (Riff-freundlich bevorzugt)",
//       "Hut & Sonnenbrille",
//       "Persönliche Medikamente bei Bedarf"
//     ],
//     it: [
//       "Brevetto Advanced Open Water — accettata copia digitale sullo smartphone",
//       "Logbook (digitale o cartaceo) per verificare immersioni profonde/in corrente recenti",
//       "Asciugamano",
//       "Crema solare (preferibilmente ecologica per la barriera corallina)",
//       "Cappello e occhiali da sole",
//       "Farmaci personali se necessari"
//     ],
//     ru: [
//       "Сертификат Advanced Open Water — принимается цифровая копия на телефоне",
//       "Логбук (цифровой или бумажный) для проверки недавних глубоких/дрифтовых погружений",
//       "Полотенце",
//       "Солнцезащитный крем (предпочтительно безопасный для рифов)",
//       "Головной убор и очки",
//       "Личные медикаменты при необходимости"
//     ],
//     pl: [
//       "Certyfikat Advanced Open Water — akceptowana kopia cyfrowa w telefonie",
//       "Logbook (cyfrowy lub fizyczny) potwierdzający niedawne nurkowania głębokie/w prądzie",
//       "Ręcznik",
//       "Krem z filtrem (preferowany bezpieczny dla rafy)",
//       "Czapka i okulary przeciwsłoneczne",
//       "Leki osobiste w razie potrzeby"
//     ],
//     cz: [
//       "Certifikace Advanced Open Water — akceptována digitální kopie v telefonu",
//       "Logbook (digitální nebo fyzický) s potvrzením nedávných hlubokých/proudových ponorů",
//       "Ručník",
//       "Opalovací krém (upřednostňován šetrný k útesům)",
//       "Klobouk a sluneční brýle",
//       "Osobní léky v případě potřeby"
//     ]
//   },
//   childrenPolicy: undefined,
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Hotel Pickup — Around 6:00 AM",
//         de: "Hotelabholung — Gegen 6:00 Uhr",
//         it: "Transfer dall'Hotel — Circa 6:00",
//         ru: "Трансфер из отеля — Около 6:00",
//         pl: "Odbiór z hotelu — Ok. 6:00",
//         cz: "Vyzvednutí v hotelu — Kolem 6:00"
//       },
//       description: {
//         en: "Pickup from your hotel and transfer to Hermes Marina.",
//         de: "Abholung vom Hotel und Transfer zur Hermes Marina.",
//         it: "Pick-up dall'hotel e trasferimento verso Hermes Marina.",
//         ru: "Трансфер из отеля в Hermes Marina.",
//         pl: "Odbiór z hotelu i transfer do Hermes Marina.",
//         cz: "Vyzvednutí v hotelu a přesun do Hermes Marina."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Hermes Marina — 6:30 AM",
//         de: "Hermes Marina — 6:30 Uhr",
//         it: "Hermes Marina — 6:30",
//         ru: "Hermes Marina — 6:30",
//         pl: "Hermes Marina — 6:30",
//         cz: "Hermes Marina — 6:30"
//       },
//       description: {
//         en: "Arrive at the marina, meet your PADI/SSI instructor and dive team, and prepare your gear.",
//         de: "Ankunft in der Marina, Treffen mit Ihrem PADI/SSI-Tauchlehrer und dem Team sowie Vorbereitung der Ausrüstung.",
//         it: "Arrivo alla marina, incontro con l'istruttore PADI/SSI e il team di immersione, e preparazione dell'attrezzatura.",
//         ru: "Прибытие в марину, знакомство с инструктором PADI/SSI и командой, подготовка снаряжения.",
//         pl: "Przybycie do przystani, spotkanie z instruktorem PADI/SSI i zespołem oraz przygotowanie sprzętu.",
//         cz: "Příjezd do maríny, setkání s instruktorem PADI/SSI a potápěčským týmem, příprava výstroje."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Speedboat Departure",
//         de: "Abfahrt mit dem Schnellboot",
//         it: "Partenza in Gommone",
//         ru: "Отправление на скоростном катере",
//         pl: "Wypłynięcie motorówką",
//         cz: "Odjezd rychlým člunem"
//       },
//       description: {
//         en: "Board our fast speedboat and depart toward Elphinstone Reef (~20–25 minutes transit).",
//         de: "Gehen Sie an Bord unseres schnellen Boots und fahren Sie zum Elphinstone-Riff (~20–25 Minuten Fahrtzeit).",
//         it: "Salita a bordo del gommone veloce e partenza verso Elphinstone Reef (~20–25 minuti di navigazione).",
//         ru: "Посадка на скоростной катер и отправление к рифу Эльфинстоун (~20–25 минут в пути).",
//         pl: "Wejście na pokład szybkiej motorówki i rejs w kierunku Elphinstone Reef (~20–25 minut rejsu).",
//         cz: "Nástup na rychlý člun a odjezd k útesu Elphinstone (~20–25 minut plavby)."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Equipment Setup & Dive Briefing",
//         de: "Ausrüstungsaufbau & Briefing",
//         it: "Preparazione Attrezzatura e Briefing",
//         ru: "Сборка снаряжения и брифинг",
//         pl: "Przygotowanie sprzętu i odprawa",
//         cz: "Příprava výstroje a briefing"
//       },
//       description: {
//         en: "Set up your diving equipment onboard and receive a comprehensive safety briefing covering currents, drift procedures, and shark interaction guidelines.",
//         de: "Ausrüstung an Bord aufbauen und ausführliches Sicherheitsbriefing zu Strömungen, Drift-Abläufen und Hai-Verhaltensregeln erhalten.",
//         it: "Preparazione dell'attrezzatura a bordo e dettagliato briefing di sicurezza su correnti, procedure di immersione e linee guida sugli squali.",
//         ru: "Сборка оборудования на борту и подробный инструктаж по безопасности, течениям, процедурам дрифта и правилам поведения при встрече с акулами.",
//         pl: "Przygotowanie sprzętu na pokładzie i szczegółowa odprawa dotycząca prądów, procedur nurkowania w prądzie i zasad zachowania przy rekinach.",
//         cz: "Příprava výstroje na palubě a podrobný bezpečnostní briefing zaměřený na proudy, postupy při driftu a pravidla chování při potkání žraloků."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "Dive 1 — Elphinstone Reef",
//         de: "Tauchgang 1 — Elphinstone-Riff",
//         it: "Immersione 1 — Elphinstone Reef",
//         ru: "Погружение 1 — Риф Эльфинстоун",
//         pl: "Nurkowanie 1 — Rafa Elphinstone",
//         cz: "Ponor 1 — Útes Elphinstone"
//       },
//       description: {
//         en: "Your first guided Advanced dive on a selected section of the reef wall, optimized for current conditions.",
//         de: "Ihr erster geführter Tauchgang für Fortgeschrittene an einem ausgewählten Abschnitt der Riffwand.",
//         it: "La tua prima immersione guidata per avanzati lungo una sezione selezionata della parete della barriera.",
//         ru: "Первое погружение с гидом для продвинутых вдоль стены рифа, выбранной с учетом течения.",
//         pl: "Pierwsze nurkowanie z przewodnikiem dla zaawansowanych na wybranym odcinku ściany rafy.",
//         cz: "Váš první ponor s průvodcem pro pokročilé na vybraném úseku útesové stěny."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "Surface Interval & Refreshments",
//         de: "Oberflächenpause & Snacks",
//         it: "Intervallo di Superficie e Snack",
//         ru: "Перерыв и напитки",
//         pl: "Przerwa powierzchniowa i przekąski",
//         cz: "Povrchový interval a občerstvení"
//       },
//       description: {
//         en: "Relax on the speedboat, enjoy fresh water, cold drinks, and snacks, while reviewing your first dive profile with your instructor.",
//         de: "Entpannen Sie an Bord, genießen Sie Getränke und Snacks und besprechen Sie das Tauchprofil mit Ihrem Tauchlehrer.",
//         it: "Rilassati sul gommone, goditi bevande fresche e snack mentre analizzi il profilo della prima immersione con l'istruttore.",
//         ru: "Отдых на катере, напитки и закуски, обсуждение профиля первого погружения с инструктором.",
//         pl: "Odpoczynek na motorówce, zimne napoje i przekąski oraz omówienie profilu pierwszego nurkowania z instruktorem.",
//         cz: "Odpočinek na člun, studené nápoje a občerstvení a rozbor profilu первого ponoru s instruktorem."
//       }
//     },
//     {
//       step: "07",
//       title: {
//         en: "Dive 2 — Reef Wall & Blue Water",
//         de: "Tauchgang 2 — Steilwand & Blauwasser",
//         it: "Immersione 2 — Parete e Blu Profondo",
//         ru: "Погружение 2 — Стена рифа и синяя вода",
//         pl: "Nurkowanie 2 — Ściana rafy i głęboka вода",
//         cz: "Ponor 2 — Útesová stěna a modrá voda"
//       },
//       description: {
//         en: "Your second guided Advanced dive exploring another section of Elphinstone’s dramatic drop-offs or opposite plateau.",
//         de: "Zweiter geführter Tauchgang an den beeindruckenden Steilwänden oder dem gegenüberliegenden Plateau.",
//         it: "Seconda immersione guidata esplorando un'altra sezione delle spettacolari pareti di Elphinstone o il plateau opposto.",
//         ru: "Второе погружение с гидом у отвесных стен Эльфинстоуна или противоположного плато.",
//         pl: "Drugie nurkowanie z przewodnikiem eksplorujące inny odcinek spektakularnych ścian Elphinstone lub przeciwległy płaskowyż.",
//         cz: "Druhý ponor s průvodcem prozkoumávající další část útesových stěn Elphinstone nebo protější plato."
//       }
//     },
//     {
//       step: "08",
//       title: {
//         en: "Return to Hermes Marina — Around 11:00 AM",
//         de: "Rückkehr zur Hermes Marina — Gegen 11:00 Uhr",
//         it: "Rientro a Hermes Marina — Circa 11:00",
//         ru: "Возвращение в Hermes Marina — Около 11:00",
//         pl: "Powrót do Hermes Marina — Ok. 11:00",
//         cz: "Návrat do Hermes Marina — Kolem 11:00"
//       },
//       description: {
//         en: "Return by speedboat to the marina after completing your advanced dives.",
//         de: "Rückfahrt mit dem Schnellboot zur Marina nach Abschluss der Tauchgänge.",
//         it: "Rientro in gommone alla marina dopo aver completato le immersioni.",
//         ru: "Быстрое возвращение на катере в марину после завершения погружений.",
//         pl: "Powrót motorówką do przystani po zakończeniu nurkowań.",
//         cz: "Návrat rychlým člunem do maríny po dokončení ponorů."
//       }
//     },
//     {
//       step: "09",
//       title: {
//         en: "Hotel Drop-off — Around 11:30 AM",
//         de: "Rückbringung zum Hotel — Gegen 11:30 Uhr",
//         it: "Transfer di Rientro in Hotel — Circa 11:30",
//         ru: "Трансфер в отель — Около 11:30",
//         pl: "Powrót do hotelu — Ok. 11:30",
//         cz: "Návrat do hotelu — Kolem 11:30"
//       },
//       description: {
//         en: "Transfer safely back to your hotel with the rest of your afternoon free.",
//         de: "Bequemer Rücktransfer zum Hotel, der restliche Nachmittag steht Ihnen zur freien Verfügung.",
//         it: "Comodo trasferimento di rientro in hotel con il resto del pomeriggio a disposizione.",
//         ru: "Комфортный трансфер обратно в отель, остаток дня свободен.",
//         pl: "Wygodny transfer powrotny do hotelu, reszta popołudnia wolna.",
//         cz: "Pohodlný návrat do hotelu, zbytek odpoledne volný."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment or deposit required. Custom discount applied if you bring your own diving equipment.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung oder Anzahlung erforderlich. Individueller Rabatt bei eigener Ausrüstung.",
//     it: "Paga dopo il tour — nessun pagamento online o deposito richiesto. Sconto personalizzato applicato se porti la tua attrezzatura.",
//     ru: "Оплата после поездки — без предоплаты и онлайн-платежей. Индивидуальная скидка при наличии собственного снаряжения.",
//     pl: "Płatność po wycieczce — bez opłat online i zaliczek. Indywidualna zniżka w przypadku posiadania własnego sprzętu.",
//     cz: "Platba až po výletu — bez platby předem nebo zálohy. Při použití vlastního vybavení bude uplatněna individuální sleva."
//   },
//   disclaimer: {
//     en: "Elphinstone is an Advanced-only dive experience and is absolutely not suitable for beginners. Currents can be moderate to strong, and dives take place over deep blue drop-offs. The instructor holds full authority to change the route or plan depending on shifting weather, current and visibility. Note: The famous Elphinstone Arch is located at technical depths far beyond recreational limits and is strictly not part of our standard recreational dives. For safety, never chase, touch, or block the path of sharks or any marine animal.",
//     de: "Elphinstone ist ein Taucherlebnis nur für Fortgeschrittene und absolut nicht für Anfänger geeignet. Strömungen können mäßig bis stark sein, und die Tauchgänge finden an tiefen Steilwänden statt. Der Tauchlehrer hat die volle Befugnis, die Route oder den Plan je nach Wetter, Strömung und Sicht zu ändern. Hinweis: Der berühmte Elphinstone-Bogen liegt in technischen Tiefen weit außerhalb der Grenzen des Sporttauchens und ist strikt kein Teil unserer Standard-Tauchgänge. Aus Sicherheitsgründen dürfen Haie oder andere Meeresbewohner niemals gejagt, berührt oder blockiert werden.",
//     it: "Elphinstone è un'esperienza d'immersione riservata agli avanzati e non è assolutamente adatta ai principianti. Le correnti possono essere da moderate a forti e le immersioni si svolgono su pareti profonde. L'istruttore ha la piena autorità di modificare il percorso o il piano in base alle condizioni meteorologiche, alle correnti e alla visibilità. Nota: Il famoso Arco di Elphinstone si trova a profondità tecniche ben oltre i limiti ricreativi e NON fa parte delle nostre immersioni standard. Per sicurezza, non inseguire, toccare o bloccare mai il passaggio a squali o altri animali marini.",
//     ru: "Эльфинстоун — это погружение только для продвинутых дайверов и абсолютно не подходит для новичков. Течения могут быть от умеренных до сильных, а погружения проходят вдоль глубоких стен. Инструктор имеет право изменить маршрут или план в зависимости от погоды, течения и видимости. Примечание: Знаменитая арка Эльфинстоун находится на технической глубине далеко за пределами любительского дайвинга и строго НЕ входит в программу. В целях безопасности категорически запрещено преследовать, трогать или преграждать путь акулам и другим морским обитателям.",
//     pl: "Elphinstone to nurkowanie wyłącznie dla zaawansowanych i absolutnie nie nadaje się dla początkujących. Prądy mogą być umiarkowane do silnych, a nurkowania odbywają się na głębokich ścianach. Instruktor ma pełne prawo do zmiany trasy lub planu w zależności od pogody, prądów i widoczności. Uwaga: Słynny Łuk Elphinstone znajduje się na głębokościach technicznych daleko poza limitami rekreacyjnymi i bezwzględnie NIE JEST częścią naszych nurkowań rekreacyjnych. Dla bezpieczeństwa nigdy nie gonić, nie dotykać ani nie blokować drogi rekinom ani innym zwierzętom morskim.",
//     cz: "Elphinstone je ponor určený výhradně pro pokročilé a je absolutně nevhodný pro začátečníky. Proudy mohou být mírné až silné a ponory probíhají na hlubokých stěnách. Instruktor má plné právo změnit trasu nebo plán v závislosti na počasí, proudech a viditelnosti. Poznámka: Slavný Elphinstone Arch se nachází v technických hloubkách daleko za rekreačními limity a přísně NEPATŘÍ do našich standardních ponorů. Z bezpečnostních důvodů nikdy nepronásledujte, nedotýkejte se ani neblokujte cestu žralokům nebo jiným mořským živočichům."
//   },
//   images: {
//     featured: "/images/tours/elphinstone-card.webp",
//     gallery: [
//       "/images/tours/elphinstone-1.webp",
//       "/images/tours/elphinstone-2.webp",
//       "/images/tours/elphinstone-3.webp"
//     ]
//   }
// },
// {
//   id: "abu-dabbab-beach-scuba",
//   slug: "abu-dabbab-beach-turtle-dugong-scuba-diving",
//   type: "scuba-diving",
//   title: {
//     en: "Abu Dabbab Beach — Turtle & Dugong Shore Diving Experience",
//     de: "Abu Dabbab Strand — Schildkröten & Seekuh Ufer-Tauchen",
//     it: "Spiaggia di Abu Dabbab — Immersioni da Riva con Tartarughe e Dugongo",
//     ru: "Пляж Абу-Дабаб — Погружения с берега: Черепахи и Дюгони",
//     pl: "Plaża Abu Dabbab — Nurkowanie z Brzegu z Żółwiami i Diugoniem",
//     cz: "Pláž Abu Dabbab — Potápění ze Břehu za Želvami a Dugongy"
//   },
//   subtitle: {
//     en: "Relaxed Shore Entry (Max 4 Divers)",
//     de: "Entspannter Ufereinstieg (Max. 4 Taucher)",
//     it: "Facile ingresso da riva (Max 4 Sub)",
//     ru: "Удобный вход с берега (Макс. 4 дайвера)",
//     pl: "Wygodne wejście z brzegu (Maks. 4 nurków)",
//     cz: "Pohodlný vstup z pláže (Max. 4 potápěči)"
//   },
//   category: {
//     en: "Scuba Diving",
//     de: "Tauchen",
//     it: "Immersioni Subacquee",
//     ru: "Дайвинг",
//     pl: "Nurkowanie",
//     cz: "Potápění"
//   },
//   price: {
//     amount: 95,
//     currency: "€",
//     unit: {
//       en: "per person (Abu Dabbab Entry Ticket Included)",
//       de: "pro Person (Abu Dabbab Eintrittskarte inklusive)",
//       it: "per persona (Biglietto d'Ingresso ad Abu Dabbab Incluso)",
//       ru: "за человека (Входной билет на пляж Абу-Дабаб включен)",
//       pl: "za osobę (Bilet wstępu na plażę Abu Dabbab w cenie)",
//       cz: "za osobu (Vstupenka na pláž Abu Dabbab v ceně)"
//     }
//   },
//   duration: {
//     en: "Half Day (~5 Hours)",
//     de: "Halbtags (~5 Std.)",
//     it: "Mezza giornata (~5 Ore)",
//     ru: "Полдня (~5 часов)",
//     pl: "Pół dnia (~5 godzin)",
//     cz: "Půl dne (~5 hodin)"
//   },
//   departure: {
//     en: "Abu Dabbab Beach (Shore Entry)",
//     de: "Abu Dabbab Strand (Ufereinstieg)",
//     it: "Spiaggia di Abu Dabbab (Ingresso da Riva)",
//     ru: "Пляж Абу-Дабаб (Вход с берега)",
//     pl: "Plaża Abu Dabbab (Wejście z brzegu)",
//     cz: "Pláž Abu Dabbab (Vstup z pláže)"
//   },
//   overview: {
//     en: "Abu Dabbab Bay is a beautifully sheltered, world-famous beach-entry dive site north of Marsa Alam, celebrated for its resident green sea turtles, vast seagrass meadows, and the unique possibility of encountering the rare dugong (sea cow). Unlike a boat dive, both dives start directly and easily from the sandy beach into calm, crystal-clear, and relatively shallow waters.",
//     de: "Die Bucht von Abu Dabbab ist ein wunderschöner, weltberühmter Tauchplatz mit Ufereinstieg nördlich von Marsa Alam, bekannt für riesige grüne Meeresschildkröten, Seegraswiesen und die seltene Möglichkeit, dem Dujong (Seekuh) zu begegnen. Beide Tauchgänge beginnen bequem direkt vom Sandstrand aus.",
//     it: "La baia di Abu Dabbab è un sito d'immersione da riva famoso in tutto il mondo situato a nord di Marsa Alam, celebre per le sue tartarughe verdi residenti, le vaste praterie di posidonia e la possibilità di incontrare il raro dugongo. Entrambe le immersioni iniziano comodamente dalla spiaggia di sabbia.",
//     ru: "Залив Абу-Дабаб — всемирно известное место для дайвинга с входом с берега к северу от Марса-Алама. Он славится большими зелеными черепахами, лугами морской травы и редкой возможностью увидеть дюгоня (морскую корову). Погружения начинаются прямо с песчаного пляжа в спокойной и чистой воде.",
//     pl: "Zatoka Abu Dabbab to słynne na całym świecie miejsce do nurkowania z brzegu na północ od Marsa Alam, znane z zamieszkujących je wielkich żółwi zielonych, łąk trawy morskiej i unikalnej szansy na spotkanie rzadkiego diugonia. Oba nurkowania rozpoczynają się bezpośrednio z piaszczystej plaży.",
//     cz: "Zátoka Abu Dabbab je světoznámá lokalita pro potápění ze břehu severně od Marsa Alam, proslulá mořskými zelenými želvami, rozsáhlými mořskými loukami a možností potkat vzácného dugonga (mořskou krávu). Oba ponory začínají přímo z písečné pláže v klidné a průzračné водě."
//   },
//   highlights: {
//     en: [
//       "2 guided shore dives from the sandy beach",
//       "Official Abu Dabbab Beach Entry Ticket included",
//       "Full high-quality scuba diving equipment rental & comfortable wetsuit",
//       "Tanks, weights & weight belt included",
//       "PADI or SSI Instructor (Max 4 divers per group)",
//       "Hotel pickup & drop-off included",
//       "Fresh mineral water & cold drinks on site",
//       "Calm, shallow waters perfect for marine life observation"
//     ],
//     de: [
//       "2 geführte Ufer-Tauchgänge vom Sandstrand",
//       "Offizielle Abu Dabbab Eintrittskarte inklusive",
//       "Komplette hochwertige Tauchausrüstung & Neoprenanzug zur Miete",
//       "Flaschen, Blei & Bleigurt inklusive",
//       "PADI- oder SSI-Tauchlehrer (Max. 4 Taucher pro Gruppe)",
//       "Hotelabholung & Rückbringung inklusive",
//       "Frisches Mineralwasser & kalte Getränke vor Ort",
//       "Ruhiges, flaches Wasser — ideal zur Meeresbeobachtung"
//     ],
//     it: [
//       "2 immersioni guidate da riva dalla spiaggia di sabbia",
//       "Biglietto d'ingresso ufficiale ad Abu Dabbab Incluso",
//       "Noleggio attrezzatura completa di alta qualità e muta comoda",
//       "Bombole, zavorra e cintura incluse",
//       "Istruttore PADI o SSI (Massimo 4 sub per gruppo)",
//       "Transfer da e per l'hotel incluso",
//       "Acqua minerale e bevande fresche sul posto",
//       "Acque calme e poco profonde ideali per fotografare e osservare"
//     ],
//     ru: [
//       "2 погружения с гидом прямо с песчаного пляжа",
//       "Официальный входной билет на пляж Абу-Дабаб включен",
//       "Аренда полного качественного комплекта снаряжения и гидрокостюма",
//       "Баллоны, грузы и грузовой пояс включены",
//       "Инструктор PADI или SSI (Макс. 4 дайвера в группе)",
//       "Трансфер из отеля и обратно включен",
//       "Свежая минеральная вода и напитки",
//       "Спокойная мелкая вода — идеально для наблюдения за живой природой"
//     ],
//     pl: [
//       "2 nurkowania z przewodnikiem bezpośrednio z piaszczystej plaży",
//       "Oficjalny bilet wstępu na plażę Abu Dabbab w cenie",
//       "Wypożyczenie pełnego sprzętu i wygodna pianka",
//       "Butle, balast i pas balastowy w cenie",
//       "Instruktor PADI lub SSI (Maksymalnie 4 nurków w grupie)",
//       "Odbiór i powrót do hotelu w cenie",
//       "Świeża woda mineralna i zimne napoje na miejscu",
//       "Spokojna, płytka woda idealna do obserwacji życia morskiego"
//     ],
//     cz: [
//       "2 ponory s průvodcem přímo z písečné pláže",
//       "Oficiální vstupenka na pláž Abu Dabbab v ceně",
//       "Kompletní zapůjčení kvalitní potápěčské výstroje a neopren",
//       "Lahve, zátěž a zátěžový opasek v ceně",
//       "Instruktor PADI nebo SSI (Max. 4 potápěči ve skupině)",
//       "Vyzvednutí a návrat do hotelu v ceně",
//       "Čerstvá minerální voda a studené nápoje na místě",
//       "Klidná a mělká voda ideální pro pozorování mořského života"
//     ]
//   },
//   included: {
//     en: [
//       "2 guided shore dives",
//       "Full high-quality scuba diving equipment rental",
//       "Comfortable wetsuit",
//       "Tanks, weights & weight belt",
//       "Official Abu Dabbab Beach Entry Ticket",
//       "Hotel pickup & drop-off",
//       "Fresh mineral water & cold drinks",
//       "PADI or SSI Instructor (Max 4 divers per group)",
//       "Safety stop"
//     ],
//     de: [
//       "2 geführte Ufer-Tauchgänge",
//       "Komplette hochwertige Tauchausrüstung zur Miete",
//       "Bequemer Neoprenanzug",
//       "Flaschen, Blei & Bleigurt",
//       "Offizielle Abu Dabbab Eintrittskarte",
//       "Hotelabholung & Rückbringung",
//       "Frisches Mineralwasser & kalte Getränke",
//       "PADI- oder SSI-Tauchlehrer (Max. 4 Taucher pro Gruppe)",
//       "Sicherheitsstopp"
//     ],
//     it: [
//       "2 immersioni guidate da riva",
//       "Noleggio attrezzatura subacquea completa di alta qualità",
//       "Muta comoda",
//       "Bombole, zavorra e cintura",
//       "Biglietto d'ingresso ufficiale alla spiaggia di Abu Dabbab",
//       "Transfer da e per l'hotel",
//       "Acqua minerale e bevande fresche",
//       "Istruttore PADI o SSI (Max 4 sub per gruppo)",
//       "Sosta di sicurezza"
//     ],
//     ru: [
//       "2 погружения с гидом с берега",
//       "Аренда полного комплекта высококачественного снаряжения",
//       "Удобный гидрокостюм",
//       "Баллоны, грузы и грузовой пояс",
//       "Официальный входной билет на пляж Абу-Дабаб",
//       "Трансфер из отеля и обратно",
//       "Минеральная вода и напитки",
//       "Инструктор PADI или SSI (Макс. 4 дайвера в группе)",
//       "Остановка безопасности"
//     ],
//     pl: [
//       "2 nurkowania z przewodnikiem z brzegu",
//       "Wypożyczenie pełnego wysokiej jakości sprzętu do nurkowania",
//       "Wygodna pianka",
//       "Butle, balast i pas balastowy",
//       "Oficjalny bilet wstępu na plażę Abu Dabbab",
//       "Odbiór i powrót do hotelu",
//       "Świeża woda mineralna i zimne napoje",
//       "Instruktor PADI lub SSI (Maks. 4 nurków w grupie)",
//       "Przystanek bezpieczeństwa"
//     ],
//     cz: [
//       "2 ponory s průvodcem ze břehu",
//       "Kompletní zapůjčení kvalitní potápěčské výstroje",
//       "Pohodlný neopren",
//       "Lahve, zátěž a zátěžový opasek",
//       "Oficiální vstupenka na pláž Abu Dabbab",
//       "Vyzvednutí a návrat do hotelu",
//       "Čerstvá minerální voda a studené nápoje",
//       "Instruktor PADI nebo SSI (Max. 4 potápěči ve skupině)",
//       "Bezpečnostní zastávka"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Open Water certification — a digital copy on your phone is fully accepted",
//       "Logbook (digital or physical)",
//       "Towel",
//       "Sunscreen (Reef-safe preferred)",
//       "Hat & Sunglasses",
//       "Personal pocket money for beach extras or souvenirs",
//       "Personal medication if needed"
//     ],
//     de: [
//       "Open Water Zertifikat — digitale Kopie auf dem Handy wird voll akzeptiert",
//       "Logbuch (digital oder Papier)",
//       "Handtuch",
//       "Sonnencreme (Riff-freundlich bevorzugt)",
//       "Hut & Sonnenbrille",
//       "Taschengeld für Extras am Strand oder Souvenirs",
//       "Persönliche Medikamente bei Bedarf"
//     ],
//     it: [
//       "Brevetto Open Water — accettata copia digitale sullo smartphone",
//       "Logbook (digitale o cartaceo)",
//       "Asciugamano",
//       "Crema solare (preferibilmente ecologica)",
//       "Cappello e occhiali da sole",
//       "Denaro contante per extra sulla spiaggia o souvenir",
//       "Farmaci personali se necessari"
//     ],
//     ru: [
//       "Сертификат Open Water — принимается цифровая копия на телефоне",
//       "Логбук (цифровой или бумажный)",
//       "Полотенце",
//       "Солнцезащитный крем (предпочтительно безопасный для рифов)",
//       "Головной убор и очки",
//       "Карманные деньги на личные расходы или сувениры",
//       "Личные медикаменты при необходимости"
//     ],
//     pl: [
//       "Certyfikat Open Water — akceptowana kopia cyfrowa w telefonie",
//       "Logbook (cyfrowy lub fizyczny)",
//       "Ręcznik",
//       "Krem z filtrem (preferowany bezpieczny dla rafy)",
//       "Czapka i okulary przeciwsłoneczne",
//       "Kieszonkowe na dodatkowe wydatki lub pamiątki",
//       "Leki osobiste w razie potrzeby"
//     ],
//     cz: [
//       "Certifikace Open Water — akceptována digitální kopie v telefonu",
//       "Logbook (digitální nebo fyzický)",
//       "Ručník",
//       "Opalovací krém (upřednostňován šetrný k útesům)",
//       "Klobouk a sluneční brýle",
//       "Kapesné na osobní výdaje nebo suvenýry",
//       "Osobní léky v případě potřeby"
//     ]
//   },
//   childrenPolicy: undefined,
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Hotel Pickup — 7:30 AM",
//         de: "Hotelabholung — 7:30 Uhr",
//         it: "Transfer dall'Hotel — 7:30",
//         ru: "Трансфер из отеля — 7:30",
//         pl: "Odbiór z hotelu — 7:30",
//         cz: "Vyzvednutí v hotelu — 7:30"
//       },
//       description: {
//         en: "Pickup directly from your hotel and transfer via comfortable A/C vehicle to Abu Dabbab Beach.",
//         de: "Direkte Abholung vom Hotel und Transfer im klimatisierte Fahrzeug zum Abu Dabbab Strand.",
//         it: "Pick-up dall'hotel e trasferimento in veicolo climatizzato verso la spiaggia di Abu Dabbab.",
//         ru: "Трансфер из отеля на комфортабельном авто с кондиционером на пляж Абу-Дабаб.",
//         pl: "Odbiór bezpośrednio z hotelu i transfer klimatyzowanym pojazdem na plażę Abu Dabbab.",
//         cz: "Vyzvednutí přímo v hotelu a transfer klimatizovaným vozem na pláž Abu Dabbab."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Beach Arrival & Briefing — 8:15 AM",
//         de: "Ankunft am Strand & Briefing — 8:15 Uhr",
//         it: "Arrivo in Spiaggia e Briefing — 8:15",
//         ru: "Прибытие на пляж и брифинг — 8:15",
//         pl: "Przybycie na plażę i odprawa — 8:15",
//         cz: "Příjezd na pláž a briefing — 8:15"
//       },
//       description: {
//         en: "Arrive at Abu Dabbab Bay, prepare your scuba equipment, and receive a comprehensive dive briefing and shore-entry safety plan.",
//         de: "Ankunft in der Bucht, Ausrüstung vorbereiten und ausführliches Briefing zum Ufereinstieg und Sicherheitsplan erhalten.",
//         it: "Arrivo ad Abu Dabbab, preparazione dell'attrezzatura e dettagliato briefing sulla sicurezza e sull'ingresso da riva.",
//         ru: "Прибытие в залив, подготовка снаряжения и подробный инструктаж по входу с берега и безопасности.",
//         pl: "Przybycie do zatoki, przygotowanie sprzętu i szczegółowa odprawa dotycząca wejścia z brzegu i bezpieczeństwa.",
//         cz: "Příjezd do zátoky, příprava výstroje a podrobný briefing o vstupu ze břehu a bezpečnostním plánu."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Dive 1 — Seagrass & Turtle Area — 9:00 AM",
//         de: "Tauchgang 1 — Seegras & Schildkröten — 9:00 Uhr",
//         it: "Immersione 1 — Area Tartarughe e Posidonia — 9:00",
//         ru: "Погружение 1 — Морская трава и черепахи — 9:00",
//         pl: "Nurkowanie 1 — Strefa żółwi i trawy morskiej — 9:00",
//         cz: "Ponor 1 — Mořská tráva a želvy — 9:00"
//       },
//       description: {
//         en: "Walk straight into the calm water from the beach and explore the main turtle feeding zones, shallow seagrass, and the inner reef edge.",
//         de: "Direkter Einstieg vom Strand in das ruhige Wasser. Erkundung der Schildkröten-Futterplätze und Riffkanten.",
//         it: "Ingresso direttamente dalla spiaggia nelle acque calme per esplorare la zona delle tartarughe e la barriera interna.",
//         ru: "Прямой вход с пляжа в спокойную воду. Исследование зон кормления черепах и внутреннего края рифа.",
//         pl: "Wejście wprost z plaży do spokojnej wody. Eksploracja żerowisk żółwi i wewnętrznej krawędzi rafy.",
//         cz: "Vstup přímo z pláže do klidné vody. Pozorování krmících se želv a vnitřního okraje útesu."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Surface Interval — 10:15 AM",
//         de: "Oberflächenpause — 10:15 Uhr",
//         it: "Intervallo di Superficie — 10:15",
//         ru: "Перерыв на берегу — 10:15",
//         pl: "Przerwa powierzchniowa — 10:15",
//         cz: "Povrchový interval — 10:15"
//       },
//       description: {
//         en: "Relax under the beach shade, review your dive log, and enjoy fresh water and cold drinks.",
//         de: "Entspannen Sie im Schatten am Strand, tragen Sie den Tauchgang ins Logbuch ein und genießen Sie kühle Getränke.",
//         it: "Rilassati all'ombra in spiaggia, compila il logbook e goditi acqua e bevande fresche.",
//         ru: "Отдых в тени на пляже, заполнение логбука, прохладительные напитки и вода.",
//         pl: "Odpoczynek w cieniu na plaży, uzupełnienie logbooka oraz zimne napoje i woda.",
//         cz: "Odpočinek ve stínu na pláži, zápis do logbooku a občerstvení chladnými nápoji."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "Dive 2 — Reef Arms & Deep Seagrass — 11:00 AM",
//         de: "Tauchgang 2 — Riffarme & Seegras — 11:00 Uhr",
//         it: "Immersione 2 — Bracci del Reef e Posidonia — 11:00",
//         ru: "Погружение 2 — Рифовые гряды и травянистые плато — 11:00",
//         pl: "Nurkowanie 2 — Ramiona rafy i głębsza trawa — 11:00",
//         cz: "Ponor 2 — Útesová ramena a mořské louky — 11:00"
//       },
//       description: {
//         en: "Gear up for your second guided shore dive, exploring the opposite reef arm or scanning the deeper seagrass sections for unique marine life.",
//         de: "Zweiter geführter Tauchgang zur Erkundung der anderen Riffseite oder tieferer Seegraszonen auf der Suche nach Dujongs und Rochen.",
//         it: "Seconda immersione guidata esplorando l'altro braccio della barriera o le zone più profonde alla ricerca di fauna unica.",
//         ru: "Второе погружение с гидом у противоположного рифового рукава или на более глубоких участках травы.",
//         pl: "Drugie nurkowanie z przewodnikiem eksplorujące drugie ramię rafy lub głębsze partie trawy morskiej.",
//         cz: "Druhý ponor s průvodcem prozkoumávající druhé rameno útesu nebo hlubší části mořské louky."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "Pack Up & Dry Off — 12:00 PM",
//         de: "Ausrüstung verpacken & Trocknen — 12:00 Uhr",
//         it: "Sistemazione Attrezzatura — 12:00",
//         ru: "Сбор снаряжения — 12:00",
//         pl: "Pakowanie sprzętu — 12:00",
//         cz: "Balení výstroje — 12:00"
//       },
//       description: {
//         en: "Exit the water, pack up the diving equipment, dry off, and prepare for your return transfer.",
//         de: "Aus dem Wasser kommen, Ausrüstung verpacken, abtrocknen und Vorbereitung auf den Rücktransfer.",
//         it: "Uscita dall'acqua, sistemazione dell'attrezzatura subacquea e preparazione per il rientro.",
//         ru: "Выход из воды, опреснение и сбор снаряжения, подготовка к обратному трансферу.",
//         pl: "Wyjście z wody, spakowanie sprzętu, wysuszenie się i przygotowanie do transferu powrotnego.",
//         cz: "Konec ponoru, sbalení potápěčské výstroje a příprava na zpáteční cestu."
//       }
//     },
//     {
//       step: "07",
//       title: {
//         en: "Hotel Drop-off — Around 12:30 PM",
//         de: "Rückbringung zum Hotel — Gegen 12:30 Uhr",
//         it: "Transfer di Rientro in Hotel — Circa 12:30",
//         ru: "Трансфер в отель — Около 12:30",
//         pl: "Powrót do hotelu — Ok. 12:30",
//         cz: "Návrat do hotelu — Kolem 12:30"
//       },
//       description: {
//         en: "Transfer safely back to your hotel with the entire afternoon free to enjoy.",
//         de: "Bequemer Rücktransfer zum Hotel, der gesamte Nachmittag steht Ihnen zur freien Verfügung.",
//         it: "Rientro in hotel con l'intero pomeriggio libero a disposizione.",
//         ru: "Комфортный трансфер обратно в отель, весь оставшийся день свободен.",
//         pl: "Wygodny transfer powrotny do hotelu, całe popołudnie wolne.",
//         cz: "Pohodlný návrat do hotelu, celé odpoledne volné."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment or deposit required. Custom discount applied if you bring your own diving equipment.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung oder Anzahlung erforderlich. Individueller Rabatt bei eigener Ausrüstung.",
//     it: "Paga dopo il tour — nessun pagamento online o deposito richiesto. Sconto personalizzato applicato se porti la tua attrezzatura.",
//     ru: "Оплата после поездки — без предоплаты и онлайн-платежей. Индивидуальная скидка при наличии собственного снаряжения.",
//     pl: "Płatność po wycieczce — bez opłat online i zaliczek. Indywidualna zniżka w przypadku posiadania własnego sprzętu.",
//     cz: "Platba až po výletu — bez platby předem nebo zálohy. Při použití vlastního vybavení bude uplatněna individuální sleva."
//   },
//   disclaimer: {
//     en: "Abu Dabbab is a strictly protected natural marine reserve, and all animals are completely wild. Turtle and dugong sightings are never guaranteed. For the strict protection of the marine environment, you must maintain a respectful distance and never chase, touch, ride, feed, or surround turtles, dugongs, or any coral structures. The instructor holds full authority to adjust the shore entry point or dive route according to daily weather, surface waves, or underwater visibility to ensure maximum safety.",
//     de: "Abu Dabbab ist ein streng geschütztes Meeresreservat und alle Tiere leben völlig wild. Sichtungen von Schildkröten und Seekühen können nicht garantiert werden. Zum Schutz der Umwelt ist ein respektvoller Abstand einzuhalten; Tiere dürfen nicht berührt, gefüttert oder verfolgt werden. Der Tauchlehrer hat die volle Befugnis, den Einstiegspunkt oder die Route je nach Wetter, Wellengang und Sicht anzupassen.",
//     it: "Abu Dabbab è una riserva naturale marina protetta e tutti gli animali sono completamente selvatici. Gli avvistamenti di tartarughe e dugonghi non possono essere garantiti. Per la massima protezione dell'ambiente, è obbligatorio mantenere la distanza di sicurezza e non toccare, inseguire o nutrire mai gli animali. L'istruttore si riserva il diritto di modificare il punto d'ingresso o il percorso in base alle condizioni del mare e della visibilità.",
//     ru: "Залив Абу-Дабаб является строго охраняемым заповедником, и все обитатели живут в дикой природе. Наблюдение черепах и дюгоней не гарантируется на 100%. В целях защиты экосистемы строго запрещено прикасаться, преследовать, кормить или пугать животных. Инструктор оставляет за собой право менять точку входа и маршрут в зависимости от погоды, волнения и видимости.",
//     pl: "Zatoka Abu Dabbab jest ściśle chronionym rezerwatem morskim, a wszystkie zwierzęta są dzikie. Obserwacja żółwi i diugoni nie jest gwarantowana. W celu ochrony środowiska należy zachować bezpieczną odległość i nigdy nie dotykać, nie karmić ani nie płoszyć zwierząt. Instruktor ma prawo zmienić punkt wejścia lub trasę nurkowania w zależności от warunków pogodowych i widoczności.",
//     cz: "Zátoka Abu Dabbab je přísně chráněnou mořskou rezervací a všechna zvířata žijí volně. Pozorování želv a dugongů nelze garantovat. Z důvodu ochrany přírody je nutné udržovat odstup a zvířata nikdy nedotýkat, nekrmit ani nepronásledovat. Instruktor má plné právo upravit místo vstupu nebo trasu podle aktuálního počasí, vln a viditelnosti."
//   },
//   images: {
//     featured: "/images/tours/dabbab-bay-scuba-card.webp",
//     gallery: [
//       "/images/tours/dabbab-bay-scuba-1.webp",
//       "/images/tours/dabbab-bay-scuba-2.webp",
//       "/images/tours/dabbab-bay-scuba-3.webp"
//     ]
//   }
// },
// {
//   id: "abu-dabbab-speedboat-scuba",
//   slug: "abu-dabbab-speedboat-dugong-search-reef-diving",
//   type: "scuba-diving",
//   title: {
//     en: "Abu Dabbab Speedboat — Dugong Search & Reef Diving Experience",
//     de: "Abu Dabbab Speedboot — Seekuh-Suche & Riff-Tauchen",
//     it: "Speedboat ad Abu Dabbab — Ricerca del Dugongo e Immersioni",
//     ru: "Скоростной катер в Абу-Дабаб — Поиск Дюгоня и Рифовый Дайвинг",
//     pl: "Motorówka Abu Dabbab — Poszukiwanie Diugonia i Nurkowanie na Rafie",
//     cz: "Rychlý Člun Abu Dabbab — Hledání Dugonga a Potápění na Útesu"
//   },
//   subtitle: {
//     en: "Speedboat Safari & Guided Dives (Max 4 Divers)",
//     de: "Speedboot-Safari & Geführte Tauchgänge (Max. 4 Taucher)",
//     it: "Safari in Speedboat e Immersioni Guidate (Max 4 Sub)",
//     ru: "Сафари на катере и погружения с гидом (Макс. 4 дайвера)",
//     pl: "Safari motorówką i nurkowanie z przewodnikiem (Maks. 4 nurków)",
//     cz: "Safari na rychlém člunu a ponory s průvodcem (Max. 4 potápěči)"
//   },
//   category: {
//     en: "Scuba Diving",
//     de: "Tauchen",
//     it: "Immersioni Subacquee",
//     ru: "Дайвинг",
//     pl: "Nurkowanie",
//     cz: "Potápění"
//   },
//   price: {
//     amount: 100,
//     currency: "€",
//     unit: {
//       en: "per person (Marine Park Fee Included)",
//       de: "pro Person (Meeresparkgebühr inklusive)",
//       it: "per persona (Tassa del Parco Marino Inclusa)",
//       ru: "за человека (Сбор морского заповедника включен)",
//       pl: "za osobę (Opłata за Park Morski w cenie)",
//       cz: "za osobu (Poplatek za mořský park v ceně)"
//     }
//   },
//   duration: {
//     en: "Half Day (~5 Hours)",
//     de: "Halbtags (~5 Std.)",
//     it: "Mezza giornata (~5 Ore)",
//     ru: "Полдня (~5 часов)",
//     pl: "Pół dnia (~5 godzin)",
//     cz: "Půl dne (~5 hodin)"
//   },
//   departure: {
//     en: "Abu Dabbab Speedboat Launch Point",
//     de: "Abu Dabbab Speedboot-Ablegestelle",
//     it: "Punto di Partenza Speedboat ad Abu Dabbab",
//     ru: "Причал скоростных катеров Абу-Дабаб",
//     pl: "Punkt startowy motorówek w Abu Dabbab",
//     cz: "Místo odjezdu rychlých člunů Abu Dabbab"
//   },
//   overview: {
//     en: "Abu Dabbab is one of the most famous marine-life sanctuaries around Marsa Alam, celebrated for giant green sea turtles, vast seagrass meadows, and the unique opportunity to encounter the rare Red Sea dugong. This premium experience combines the fast-paced freedom of a speedboat trip with expert-guided scuba diving, allowing active scouting of the bay to choose the dive location on the spot.",
//     de: "Abu Dabbab ist eines der berühmtesten Schutzgebiete bei Marsa Alam, bekannt für Riesenschildkröten, Seegraswiesen und die seltene Gelegenheit, dem Roten Meer Dujong zu begegnen. Diese Premium-Erfahrung kombiniert die Flexibilität eines Speedboots mit professionell geführtem Tauchen.",
//     it: "Abu Dabbab è una delle riserve marine più famose di Marsa Alam, celebre per le tartarughe verdi, le praterie di posidonia e la rara opportunità di incontrare il dugongo. Questa esperienza premium unisce la velocità del gommone a immersioni guidate da esperti nei punti migliori della giornata.",
//     ru: "Абу-Дабаб — один из самых известных морских заповедников Марса-Алама, знаменитый большими зелеными черепахами, морской травой и возможностью встретить редкого дюгоня. Этот премиум-тур сочетает мобильность скоростного катера и профессиональный дайвинг с гидом.",
//     pl: "Abu Dabbab to jeden z najsłynniejszych rezerwatów morskich w okolicy Marsa Alam, znany z olbrzymich żółwi, łąk trawy morskiej i unikalnej szansy na spotkanie diugonia. Ta wycieczka łączy swobodę szybkiej łodzi motorowej z profesjonalnym nurkowaniem z przewodnikiem.",
//     cz: "Abu Dabbab je jedna z nejslavnějších mořských rezervací v okolí Marsa Alam, proslulá obřími želvami, mořskými loukami a vzácnou možností potkat dugonga. Tento prémiový zážitek kombinuje rychlost motorového člunu s potápěním s profesionálním průvodcem."
//   },
//   highlights: {
//     en: [
//       "2 guided dives from a fast speedboat",
//       "Marine Park & Environmental Fees included",
//       "Active speedboat scouting for resident dugongs",
//       "Full high-quality scuba diving equipment rental & wetsuit",
//       "Tanks, weights & weight belt included",
//       "PADI or SSI Instructor (Max 4 divers per group)",
//       "Hotel pickup & drop-off included",
//       "Fresh mineral water, cold drinks & light snacks on board"
//     ],
//     de: [
//       "2 geführte Tauchgänge vom schnellen Speedboot",
//       "Meerespark- & Umweltgebühren inklusive",
//       "Aktive Suche nach Seekühen mit dem Speedboot",
//       "Komplette hochwertige Tauchausrüstung & Neoprenanzug",
//       "Flaschen, Blei & Bleigurt inklusive",
//       "PADI- oder SSI-Tauchlehrer (Max. 4 Taucher pro Gruppe)",
//       "Hotelabholung & Rückbringung inklusive",
//       "Frisches Wasser, kühle Getränke & leichte Snacks an Bord"
//     ],
//     it: [
//       "2 immersioni guidate da un veloce gommone/speedboat",
//       "Tassa del Parco Marino ed ecologica inclusa",
//       "Ricerca attiva del dugongo in gommone nella baia",
//       "Noleggio attrezzatura subacquea di alta qualità e muta",
//       "Bombole, zavorra e cintura incluse",
//       "Istruttore PADI o SSI (Massimo 4 sub per gruppo)",
//       "Transfer da e per l'hotel incluso",
//       "Acqua minerale, bevande fresche e snack leggeri a bordo"
//     ],
//     ru: [
//       "2 погружения с гидом со скоростного катера",
//       "Сбор морского заповедника и экологический сбор включены",
//       "Активный поиск дюгоня на катере по всей акватории",
//       "Аренда полного качественного комплекта снаряжения и гидрокостюма",
//       "Баллоны, грузы и грузовой пояс включены",
//       "Инструктор PADI или SSI (Макс. 4 дайвера в группе)",
//       "Трансфер из отеля и обратно включен",
//       "Свежая вода, напитки и легкие закуски на борту"
//     ],
//     pl: [
//       "2 nurkowania z przewodnikiem z szybkiej łodzi motorowej",
//       "Opłata za Park Morski i opłaty środowiskowe w cenie",
//       "Aktywne poszukiwanie diugonia motorówką po zatoce",
//       "Wypożyczenie pełnego wysokiej jakości sprzętu i pianka",
//       "Butle, balast i pas balastowy w cenie",
//       "Instruktor PADI lub SSI (Maksymalnie 4 nurków w grupie)",
//       "Odbiór i powrót do hotelu w cenie",
//       "Świeża woda, zimne napoje i lekkie przekąski na pokładzie"
//     ],
//     cz: [
//       "2 ponory s průvodcem z rychlého motorového člunu",
//       "Poplatek za mořský park a 환경 poplatky v ceně",
//       "Aktivní vyhledávání dugongů z motorového člunu",
//       "Kompletní zapůjčení kvalitní potápěčské výstroje a neopren",
//       "Lahve, zátěž a zátěžový opasek v ceně",
//       "Instruktor PADI nebo SSI (Max. 4 potápěči ve skupině)",
//       "Vyzvednutí a návrat do hotelu v ceně",
//       "Čerstvá voda, studené nápoje a lehké občerstvení na palubě"
//     ]
//   },
//   included: {
//     en: [
//       "2 guided speedboat dives",
//       "Fast Speedboat transit",
//       "Marine Park & Environmental Fees",
//       "Full high-quality scuba diving equipment rental",
//       "Comfortable wetsuit",
//       "Tanks, weights & weight belt",
//       "Hotel pickup & drop-off",
//       "Fresh mineral water & cold drinks",
//       "Light snacks",
//       "PADI or SSI Instructor (Max 4 divers per group)",
//       "Safety stop"
//     ],
//     de: [
//       "2 geführte Speedboot-Tauchgänge",
//       "Fahrt mit dem schnellen Speedboot",
//       "Meerespark- & Umweltgebühren",
//       "Komplette hochwertige Tauchausrüstung zur Miete",
//       "Bequemer Neoprenanzug",
//       "Flaschen, Blei & Bleigurt",
//       "Hotelabholung & Rückbringung",
//       "Frisches Mineralwasser & kalte Getränke",
//       "Leichte Snacks",
//       "PADI- oder SSI-Tauchlehrer (Max. 4 Taucher pro Gruppe)",
//       "Sicherheitsstopp"
//     ],
//     it: [
//       "2 immersioni guidate da gommone/speedboat",
//       "Trasferimento veloce in speedboat",
//       "Tasse del Parco Marino ed ecologiche",
//       "Noleggio attrezzatura subacquea completa di alta qualità",
//       "Muta comoda",
//       "Bombole, zavorra e cintura",
//       "Transfer da e per l'hotel",
//       "Acqua minerale e bevande fresche",
//       "Snack leggeri",
//       "Istruttore PADI o SSI (Max 4 sub per gruppo)",
//       "Sosta di sicurezza"
//     ],
//     ru: [
//       "2 погружения с гидом со скоростного катера",
//       "Скоростной трансфер на катере",
//       "Сбор морского заповедника и экологические сборы",
//       "Аренда полного комплекта высококачественного снаряжения",
//       "Удобный гидрокостюм",
//       "Баллоны, грузы и грузовой пояс",
//       "Трансфер из отеля и обратно",
//       "Минеральная вода и напитки",
//       "Легкие закуски",
//       "Инструктор PADI или SSI (Макс. 4 дайвера в группе)",
//       "Остановка безопасности"
//     ],
//     pl: [
//       "2 nurkowania z przewodnikiem z motorówki",
//       "Szybki rejs motorówką",
//       "Opłaty za Park Morski i środowiskowe",
//       "Wypożyczenie pełnego wysokiej jakości sprzętu do nurkowania",
//       "Wygodna pianka",
//       "Butle, balast i pas balastowy",
//       "Odbiór i powrót do hotelu",
//       "Świeża woda mineralna i zimne napoje",
//       "Lekkie przekąski",
//       "Instruktor PADI lub SSI (Maks. 4 nurków w grupie)",
//       "Przystanek bezpieczeństwa"
//     ],
//     cz: [
//       "2 ponory s průvodcem z motorového člunu",
//       "Rychlá přeprava motorovým člunem",
//       "Poplatky za mořský park a ekologické poplatky",
//       "Kompletní zapůjčení kvalitní potápěčské výstroje",
//       "Pohodlný neopren",
//       "Lahve, zátěž a zátěžový opasek",
//       "Vyzvednutí a návrat do hotelu",
//       "Čerstvá minerální voda a studené nápoje",
//       "Lehké občerstvení",
//       "Instruktor PADI nebo SSI (Max. 4 potápěči ve skupině)",
//       "Bezpečnostní zastávka"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Diving certification — a digital copy on your phone is fully accepted",
//       "Logbook (digital or physical)",
//       "Towel",
//       "Sunscreen (Reef-safe preferred)",
//       "Hat & Sunglasses",
//       "Personal medication if needed"
//     ],
//     de: [
//       "Tauchzertifikat — digitale Kopie auf dem Handy wird voll akzeptiert",
//       "Logbuch (digital oder Papier)",
//       "Handtuch",
//       "Sonnencreme (Riff-freundlich bevorzugt)",
//       "Hut & Sonnenbrille",
//       "Persönliche Medikamente bei Bedarf"
//     ],
//     it: [
//       "Brevetto subacqueo — accettata copia digitale sullo smartphone",
//       "Logbook (digitale o cartaceo)",
//       "Asciugamano",
//       "Crema solare (preferibilmente ecologica)",
//       "Cappello e occhiali da sole",
//       "Farmaci personali se necessari"
//     ],
//     ru: [
//       "Сертификат дайвера — принимается цифровая копия на телефоне",
//       "Логбук (цифровой или бумажный)",
//       "Полотенце",
//       "Солнцезащитный крем (предпочтительно безопасный для рифов)",
//       "Головной убор и очки",
//       "Личные медикаменты при необходимости"
//     ],
//     pl: [
//       "Certyfikat nurkowy — akceptowana kopia cyfrowa w telefonie",
//       "Logbook (cyfrowy lub fizyczny)",
//       "Ręcznik",
//       "Krem z filtrem (preferowany bezpieczny dla rafy)",
//       "Czapka i okulary przeciwsłoneczne",
//       "Leki osobiste w razie potrzeby"
//     ],
//     cz: [
//       "Potápěčská certifikace — akceptována digitální kopie v telefonu",
//       "Logbook (digitální nebo fyzický)",
//       "Ručník",
//       "Opalovací krém (upřednostňován šetrný k útesům)",
//       "Klobouk a sluneční brýle",
//       "Osobní léky v případě potřeby"
//     ]
//   },
//   childrenPolicy: undefined,
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Hotel Pickup — Around 7:30 AM",
//         de: "Hotelabholung — Gegen 7:30 Uhr",
//         it: "Transfer dall'Hotel — Circa 7:30",
//         ru: "Трансфер из отеля — Около 7:30",
//         pl: "Odbiór z hotelu — Ok. 7:30",
//         cz: "Vyzvednutí v hotelu — Kolem 7:30"
//       },
//       description: {
//         en: "Pickup directly from your hotel and transfer via comfortable A/C vehicle to the speedboat launch point.",
//         de: "Direkte Abholung vom Hotel und Transfer im klimatisierten Fahrzeug zur Speedboot-Ablegestelle.",
//         it: "Pick-up dall'hotel e trasferimento in veicolo climatizzato verso il punto di partenza del gommone.",
//         ru: "Трансфер из отеля на комфортабельном авто с кондиционером к месту старта скоростного катера.",
//         pl: "Odbiór z hotelu i transfer klimatyzowanym pojazdem do punktu startu motorówki.",
//         cz: "Vyzvednutí v hotelu a transfer klimatizovaným vozem k místu odjezdu motorového člunu."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Arrival & Equipment Setup",
//         de: "Ankunft & Ausrüstungsvorbereitung",
//         it: "Arrivo e Preparazione Attrezzatura",
//         ru: "Прибытие и сборка снаряжения",
//         pl: "Przybycie i przygotowanie sprzętu",
//         cz: "Příjezd a příprava výstroje"
//       },
//       description: {
//         en: "Arrive at the launch point, prepare your diving gear, and get ready to board.",
//         de: "Ankunft am Ableger, Tauchbekleidung und Ausrüstung anlegen und bereitmachen zum Boarding.",
//         it: "Arrivo al punto di partenza, preparazione dell'attrezzatura e imbarco sul gommone.",
//         ru: "Прибытие на причал, проверка и подготовка снаряжения перед посадкой на катер.",
//         pl: "Przybycie na miejsce, przygotowanie sprzętu i gotowość do wejścia na pokład.",
//         cz: "Příjezd na место, příprava potápěčského vybavení a příprava k nasednutí."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Dive Briefing",
//         de: "Tauch-Briefing",
//         it: "Briefing dell'Immersione",
//         ru: "Инструктаж и брифинг",
//         pl: "Odprawa przed nurkowaniem",
//         cz: "Briefing před ponorem"
//       },
//       description: {
//         en: "Comprehensive safety briefing covering the dive plan, buddy communication, hand signals, and eco-guidelines for interaction with marine life.",
//         de: "Ausführliches Sicherheitsbriefing über Tauchplan, Partnersignale und Umweltrichtlinien zum Schutz von Schildkröten und Dujongs.",
//         it: "Briefing dettagliato su piano d'immersione, segnali manuali e linee guida ecologiche per interagire responsabilmente con la fauna.",
//         ru: "Подробный инструктаж по безопасности, плану погружения, подводным сигналам и правилам защиты морских обитателей.",
//         pl: "Szczegółowa odprawa dotycząca planu nurkowania, sygnałów oraz zasad ochrony środowiska morskiego.",
//         cz: "Podrobný bezpečnostní briefing zahrnující plán ponoru, podvodní signály a ekologická pravidla."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Speedboat Departure & Dugong Search",
//         de: "Speedboot-Abfahrt & Seekuh-Suche",
//         it: "Partenza in Speedboat e Ricerca del Dugongo",
//         ru: "Выход в море и поиск дюгоня",
//         pl: "Wypłynięcie motorówką i poszukiwanie diugonia",
//         cz: "Odjezd motorového člunu a hledání dugonga"
//       },
//       description: {
//         en: "Depart by speedboat and begin actively searching the waters of Abu Dabbab bay for the resident dugong.",
//         de: "Abfahrt mit dem Speedboot und aktive Suche in der Bucht von Abu Dabbab nach der ansässigen Seekuh.",
//         it: "Partenza in gommone e inizio della ricerca attiva del dugongo nelle acque della baia.",
//         ru: "Отплытие на катере и активный поиск дюгоня в акватории залива Абу-Дабаб.",
//         pl: "Wypłynięcie motorówką i rozpoczęcie aktywnych poszukiwań diugonia w wodach zatoki.",
//         cz: "Odjezd motorovým člunem a zahájení vyhledávání dugonga v vodách zátoky."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "Dive 1 — Selected Abu Dabbab Area",
//         de: "Tauchgang 1 — Ausgewählter Bereich",
//         it: "Immersione 1 — Area Selezionata ad Abu Dabbab",
//         ru: "Погружение 1 — Выбранная локация",
//         pl: "Nurkowanie 1 — Wybrana strefa Abu Dabbab",
//         cz: "Ponor 1 — Vybraná lokalita Abu Dabbab"
//       },
//       description: {
//         en: "Begin your first guided dive at the selected location, based on the day’s conditions and the group’s experience.",
//         de: "Erster geführter Tauchgang am optimalen Platz, ausgewählt nach Wetterbedingungen und Erfahrung der Gruppe.",
//         it: "Inizio della prima immersione guidata nel punto ideale scelto in base alle condizioni del giorno e all'esperienza del gruppo.",
//         ru: "Первое погружение с гидом в выбранной точке, исходя из текущих условий и уровня группы.",
//         pl: "Pierwsze nurkowanie z przewodnikiem w wybranym miejscu, dostosowanym do warunków i doświadczenia grupy.",
//         cz: "První ponor s průvodcem na vybraném místě podle aktuálních podmínek a zkušeností skupiny."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "Surface Interval & Light Snacks",
//         de: "Oberflächenpause & Snacks",
//         it: "Intervallo di Superficie e Snack",
//         ru: "Перерыв и легкие закуски",
//         pl: "Przerwa powierzchniowa i przekąski",
//         cz: "Povrchový interval a občerstvení"
//       },
//       description: {
//         en: "Return to the speedboat for a comfortable surface interval. Relax, enjoy fresh water, cold drinks, and light snacks.",
//         de: "Rückkehr zum Speedboot für eine entspannte Pause mit frischem Wasser, kühlen Getränken und kleinen Snacks.",
//         it: "Rientro a bordo per un comodo intervallo di superficie con acqua, bevande fresche e snack leggeri.",
//         ru: "Возвращение на катер для отдыха, заполнения логбука, прохладительных напитков и легкого перекуса.",
//         pl: "Powrót na łódź na odpoczynek, zimne napoje, świeżą wodę i lekkie przekąski.",
//         cz: "Návrat na člun pro pohodlný поверхностный interval, odpočinek, nápoje a lehké občerstvení."
//       }
//     },
//     {
//       step: "07",
//       title: {
//         en: "Dive 2 — Selected Reef or Seagrass Area",
//         de: "Tauchgang 2 — Riff oder Seegraswiese",
//         it: "Immersione 2 — Barriera o Area di Posidonia",
//         ru: "Погружение 2 — Риф или травянистое плато",
//         pl: "Nurkowanie 2 — Rafa lub trawa morska",
//         cz: "Ponor 2 — Útes nebo mořská louka"
//       },
//       description: {
//         en: "Gear up for your second guided dive and explore another suitable section of Abu Dabbab’s reef or seagrass areas.",
//         de: "Zweiter geführter Tauchgang zur Erkundung eines weiteren wunderschönen Riffabschnitts oder tieferer Seegraszonen.",
//         it: "Seconda immersione guidata alla scoperta di un'altra sezione della barriera corallina o della prateria.",
//         ru: "Второе погружение с гидом на другом интересном участке рифа или травянистого плато.",
//         pl: "Drugie nurkowanie z przewodnikiem na innym atrakcyjnym fragmencie rafy koralowej lub trawy morskiej.",
//         cz: "Druhý ponor s průvodcem zaměřený na další část útesu nebo mořské louky."
//       }
//     },
//     {
//       step: "08",
//       title: {
//         en: "Return by Speedboat",
//         de: "Rückfahrt mit dem Speedboot",
//         it: "Rientro in Speedboat",
//         ru: "Возвращение на катере",
//         pl: "Powrót motorówką",
//         cz: "Návrat motorovým člunem"
//       },
//       description: {
//         en: "Return to the launch point after completing both dives.",
//         de: "Rückfahrt zur Ablegestelle nach Abschluss beider Tauchgänge.",
//         it: "Rientro al punto di partenza dopo aver completato entrambe le immersioni.",
//         ru: "Возвращение на причал после завершения обоих погружений.",
//         pl: "Powrót do punktu startowego po zakończeniu obu nurkowań.",
//         cz: "Návrat do místa odjezdu po dokončení obou ponorů."
//       }
//     },
//     {
//       step: "09",
//       title: {
//         en: "Hotel Drop-off — Around 12:30 PM",
//         de: "Rückbringung zum Hotel — Gegen 12:30 Uhr",
//         it: "Transfer di Rientro in Hotel — Circa 12:30",
//         ru: "Трансфер в отель — Около 12:30",
//         pl: "Powrót do hotelu — Ok. 12:30",
//         cz: "Návrat do hotelu — Kolem 12:30"
//       },
//       description: {
//         en: "Transfer safely back to your resort with the rest of your afternoon free.",
//         de: "Bequemer Rücktransfer zum Hotel, der gesamte Nachmittag steht Ihnen zur freien Verfügung.",
//         it: "Rientro in hotel con l'intero pomeriggio libero a disposizione.",
//         ru: "Комфортный трансфер обратно в отель, остаток дня свободен.",
//         pl: "Bezpieczny powrót do hotelu, całe popołudnie wolne.",
//         cz: "Pohodlný návrat do hotelu, zbytek odpoledne volný."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment or deposit required. Custom discount applied if you bring your own diving equipment.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung oder Anzahlung erforderlich. Individueller Rabatt bei eigener Ausrüstung.",
//     it: "Paga dopo il tour — nessun pagamento online o deposito richiesto. Sconto personalizzato applicato se porti la tua attrezzatura.",
//     ru: "Оплата после поездки — без предоплаты и онлайн-платежей. Индивидуальная скидка при наличии собственного снаряжения.",
//     pl: "Płatność po wycieczce — bez opłat online i zaliczek. Indywidualna zniżka w przypadku posiadania własnego sprzętu.",
//     cz: "Platba až po výletu — bez platby předem nebo zálohy. Při použití vlastního vybavení bude uplatněna individuální sleva."
//   },
//   disclaimer: {
//     en: "This experience focuses on searching for wild marine animals in their natural habitat; sightings can never be guaranteed. If a dugong is located, we strictly maintain a respectful and eco-friendly distance. Swimming aggressively, chasing, touching, or surrounding the animal is strictly prohibited. The instructor holds full safety command to change the dive location or dive plan based on weather, visibility, surface conditions, or underwater currents.",
//     de: "Diese Tour konzentriert sich auf die Suche nach wilden Meerestieren in ihrem natürlichen Lebensraum; Sichtungen können nicht garantiert werden. Wenn eine Seekuh gesichtet wird, halten wir einen respektvollen Abstand ein. Das Verfolgen oder Berühren der Tiere ist strengstens untersagt. Der Tauchlehrer hat die volle Befugnis, den Tauchplatz je nach Wetter und Strömung anzupassen.",
//     it: "Questa esperienza è incentrata sulla ricerca di animali selvatici nel loro habitat naturale; gli avvistamenti non possono essere garantiti. Se viene individuato un dugongo, manteniamo rigorosamente una distanza di sicurezza. È severamente vietato inseguire o toccare l'animale. L'istruttore si riserva il diritto di modificare il piano d'immersione in base alle condizioni meteo e di corrente.",
//     ru: "Этот тур направлен на поиск диких морских обитателей в их естественной среде; наблюдения не гарантируются на 100%. При обнаружении дюгоня строго соблюдается безопасная дистанция. Категорически запрещено преследовать или трогать животное. Инструктор имеет право изменить локацию погружения в зависимости от погоды и течений.",
//     pl: "Ta wycieczka skupia się na poszukiwaniu dzikich zwierząt morskich w ich naturalnym środowisku; obserwacje nie są gwarantowane. W przypadku spotkania diugonia bezwzględnie zachowujemy bezpieczny dystans. Gonić ani dotykać zwierząt nie wolno. Instruktor ma prawo zmienić plan nurkowania w zależności od pogody i prądów.",
//     cz: "Tento zážitek se zaměřuje na hledání divokých mořských živočichů v jejich přirozeném prostředí; pozorování nelze garantovat. Pokud je dugong nalezen, přísně dodržujeme bezpečnou vzdálenost. Pronásledování nebo dotýkání se zvířat je přísně zakázáno. Instruktor má plné právo změnit plán ponoru podle aktuálních podmínek."
//   },
//   images: {
//     featured: "/images/tours/speedboat-scuba-card.webp",
//     gallery: [
//       "/images/tours/speedboat-scuba-1.webp",
//       "/images/tours/speedboat-scuba-2.webp",
//       "/images/tours/speedboat-scuba-3.webp"
//     ]
//   }
// },
// {
//   id: "marsa-mubarak-boat-scuba",
//   slug: "marsa-mubarak-dugong-turtle-scuba-diving",
//   type: "scuba-diving",
//   title: {
//     en: "Marsa Mubarak — Dugong & Turtle Diving Experience",
//     de: "Marsa Mubarak — Seekuh & Schildkröten Tauchabenteuer",
//     it: "Marsa Mubarak — Immersioni con Dugongo e Tartarughe",
//     ru: "Марса-Мубарак — Погружения с Дайвингом: Дюгони и Черепахи",
//     pl: "Marsa Mubarak — Nurkowanie z Diugoniem i Żółwiami",
//     cz: "Marsa Mubarak — Potápění za Dugongy a Želvami"
//   },
//   subtitle: {
//     en: "Boat Safari & Guided Dives (Max 4 Divers)",
//     de: "Boots-Safari & Geführte Tauchgänge (Max. 4 Taucher)",
//     it: "Safari in Barca e Immersioni Guidate (Max 4 Sub)",
//     ru: "Сафари на корабле и погружения с гидом (Макс. 4 дайвера)",
//     pl: "Safari łodzią i nurkowanie z przewodnikiem (Maks. 4 nurków)",
//     cz: "Safari na lodi a ponory s průvodcem (Max. 4 potápěči)"
//   },
//   category: {
//     en: "Scuba Diving",
//     de: "Tauchen",
//     it: "Immersioni Subacquee",
//     ru: "Дайвинг",
//     pl: "Nurkowanie",
//     cz: "Potápění"
//   },
//   price: {
//     amount: 90,
//     currency: "€",
//     unit: {
//       en: "per person (Marine Park Fee Included)",
//       de: "pro Person (Meeresparkgebühr inklusive)",
//       it: "per persona (Tassa del Parco Marino Inclusa)",
//       ru: "за человека (Сбор морского заповедника включен)",
//       pl: "za osobę (Opłata za Park Morski w cenie)",
//       cz: "za osobu (Poplatek za mořský park v ceně)"
//     }
//   },
//   duration: {
//     en: "Full Trip (~6–7 Hours)",
//     de: "Tagesausflug (~6–7 Std.)",
//     it: "Escursione completa (~6–7 Ore)",
//     ru: "Полный день (~6–7 часов)",
//     pl: "Całodniowa wycieczka (~6–7 godzin)",
//     cz: "Celodenní výlet (~6–7 hodin)"
//   },
//   departure: {
//     en: "Port Ghalib",
//     de: "Port Ghalib",
//     it: "Port Ghalib",
//     ru: "Порт-Галиб",
//     pl: "Port Ghalib",
//     cz: "Port Ghalib"
//   },
//   overview: {
//     en: "Marsa Mubarak is a stunning natural bay near Port Ghalib, world-famous for its shallow, crystal-clear seagrass meadows and rich marine life habitat. It stands as one of the best-known locations around Marsa Alam for encounters with green sea turtles and the rare resident dugong, complemented by coral gardens and reef pinnacles.",
//     de: "Marsa Mubarak ist eine wunderschöne natürliche Bucht in der Nähe von Port Ghalib, weltberühmt für ihre flachen, kristallklaren Seegraswiesen. Sie gilt als einer der besten Orte bei Marsa Alam für Begegnungen mit grünen Meeresschildkröten und dem seltenen Dujong, ergänzt durch prächtige Korallengärten.",
//     it: "Marsa Mubarak è una splendida baia naturale vicino a Port Ghalib, famosa in tutto il mondo per le sue praterie di posidonia poco profonde e la ricca vita marina. È uno dei luoghi più celebri di Marsa Alam per avvistare tartarughe verdi e il raro dugongo, oltre a giardini di corallo e pinnacoli.",
//     ru: "Марса-Мубарак — живописная бухта недалеко от Порт-Галиба, всемирно известная своими мелководными лугами морской травы и богатым подводным миром. Это одно из лучших мест Марса-Алама для встреч с зелеными морскими черепахами и редким дюгонем, а также красивыми кораллами.",
//     pl: "Marsa Mubarak to malownicza zatoka w pobliżu Port Ghalib, słynąca na całym świecie z płytkich łąk trawy morskiej i bogatego życia morskiego. To jedno z najlepszych miejsc w okolicy Marsa Alam na spotkanie z żółwiami zielonymi i rzadkim diugoniem oraz ogrodami koralowymi.",
//     cz: "Marsa Mubarak je nádherná přírodní zátoka nedaleko Port Ghalib, světoznámá svými mělkými mořskými loukami a bohatým mořským životem. Je jedním z nejznámějších míst v okolí Marsa Alam pro setkání se zelenými mořskými želvami a vzácným dugongem."
//   },
//   highlights: {
//     en: [
//       "2 guided boat dives in Marsa Mubarak Bay",
//       "Official Marine Park & Environmental Fees included",
//       "Explore seagrass feeding grounds for turtles & dugongs",
//       "Full high-quality scuba diving equipment rental & wetsuit",
//       "Tanks, weights & weight belt included",
//       "PADI or SSI Instructor (Max 4 divers per group)",
//       "Hotel pickup & drop-off included",
//       "Fresh mineral water, cold drinks, light snacks & fruits on board"
//     ],
//     de: [
//       "2 geführte Boots-Tauchgänge in der Bucht von Marsa Mubarak",
//       "Offizielle Meerespark- & Umweltgebühren inklusive",
//       "Erkundung von Seegraswiesen mit Schildkröten & Seekühen",
//       "Komplette hochwertige Tauchausrüstung & Neoprenanzug",
//       "Flaschen, Blei & Bleigurt inklusive",
//       "PADI- oder SSI-Tauchlehrer (Max. 4 Taucher pro Gruppe)",
//       "Hotelabholung & Rückbringung inklusive",
//       "Frisches Wasser, kühle Getränke, leichte Snacks & Früchte an Bord"
//     ],
//     it: [
//       "2 immersioni guidate da barca nella baia di Marsa Mubarak",
//       "Tasse ufficiali del Parco Marino ed ecologiche incluse",
//       "Esplorazione delle praterie di posidonia per tartarughe e dugonghi",
//       "Noleggio attrezzatura subacquea completa di alta qualità e muta",
//       "Bombole, zavorra e cintura incluse",
//       "Istruttore PADI o SSI (Massimo 4 sub per gruppo)",
//       "Transfer da e per l'hotel incluso",
//       "Acqua minerale, bevande fresche, snack leggeri e frutta a bordo"
//     ],
//     ru: [
//       "2 погружения с гидом с корабля в бухте Марса-Мубарак",
//       "Официальный сбор морского заповедника включен",
//       "Исследование лугов морской травы — места обитания черепах и дюгоней",
//       "Аренда полного качественного комплекта снаряжения и гидрокостюма",
//       "Баллоны, грузы и грузовой пояс включены",
//       "Инструктор PADI или SSI (Макс. 4 дайвера в группе)",
//       "Трансфер из отеля и обратно включен",
//       "Свежая вода, напитки, легкие закуски и фрукты на борту"
//     ],
//     pl: [
//       "2 nurkowania z przewodnikiem z łodzi w zatoce Marsa Mubarak",
//       "Oficjalne opłaty za Park Morski i środowiskowe w cenie",
//       "Eksploracja łąk trawy morskiej — żerowisk żółwi i diugoni",
//       "Wypożyczenie pełnego wysokiej jakości sprzętu i pianka",
//       "Butle, balast i pas balastowy w cenie",
//       "Instruktor PADI lub SSI (Maksymalnie 4 nurków w grupie)",
//       "Odbiór i powrót do hotelu w cenie",
//       "Świeża woda, zimne napoje, lekkie przekąski i owoce na pokładzie"
//     ],
//     cz: [
//       "2 ponory s průvodcem z lodi v zátoce Marsa Mubarak",
//       "Oficiální poplatky za mořský park v ceně",
//       "Pozorování želv a dugongů na mořských loukách",
//       "Kompletní zapůjčení kvalitní potápěčské výstroje a neopren",
//       "Lahve, zátěž a zátěžový opasek v ceně",
//       "Instruktor PADI nebo SSI (Max. 4 potápěči ve skupině)",
//       "Vyzvednutí a návrat do hotelu v ceně",
//       "Čerstvá voda, studené nápoje, občerstvení a ovoce na palubě"
//     ]
//   },
//   included: {
//     en: [
//       "2 guided boat dives",
//       "Full high-quality scuba diving equipment rental",
//       "High-quality wetsuit",
//       "Tanks, weights & weight belt",
//       "Official Marine Park & Environmental Fees",
//       "Hotel pickup & drop-off",
//       "Fresh mineral water & cold drinks",
//       "Light snacks & fruits on board",
//       "PADI or SSI Instructor (Max 4 divers per group)",
//       "Safety stop"
//     ],
//     de: [
//       "2 geführte Boots-Tauchgänge",
//       "Komplette hochwertige Tauchausrüstung zur Miete",
//       "Hochwertiger Neoprenanzug",
//       "Flaschen, Blei & Bleigurt",
//       "Offizielle Meerespark- & Umweltgebühren",
//       "Hotelabholung & Rückbringung",
//       "Frisches Mineralwasser & kalte Getränke",
//       "Leichte Snacks & Früchte an Bord",
//       "PADI- oder SSI-Tauchlehrer (Max. 4 Taucher pro Gruppe)",
//       "Sicherheitsstopp"
//     ],
//     it: [
//       "2 immersioni guidate da barca",
//       "Noleggio attrezzatura subacquea completa di alta qualità",
//       "Muta di alta qualità",
//       "Bombole, zavorra e cintura",
//       "Tasse ufficiali del Parco Marino ed ecologiche",
//       "Transfer da e per l'hotel",
//       "Acqua minerale e bevande fresche",
//       "Snack leggeri e frutta a bordo",
//       "Istruttore PADI o SSI (Max 4 sub per gruppo)",
//       "Sosta di sicurezza"
//     ],
//     ru: [
//       "2 погружения с гидом с корабля",
//       "Аренда полного комплекта высококачественного снаряжения",
//       "Качественный гидрокостюм",
//       "Баллоны, грузы и грузовой пояс",
//       "Официальные сборы морского заповедника",
//       "Трансфер из отеля и обратно",
//       "Минеральная вода и прохладительные напитки",
//       "Легкие закуски и фрукты на борту",
//       "Инструктор PADI или SSI (Макс. 4 дайвера в группе)",
//       "Остановка безопасности"
//     ],
//     pl: [
//       "2 nurkowania z przewodnikiem z łodzi",
//       "Wypożyczenie pełnego wysokiej jakości sprzętu do nurkowania",
//       "Wysokiej jakości pianka",
//       "Butle, balast i pas balastowy",
//       "Oficjalne opłaty za Park Morski i środowiskowe",
//       "Odbiór i powrót do hotelu",
//       "Świeża woda mineralna i zimne napoje",
//       "Lekkie przekąski i owoce na pokładzie",
//       "Instruktor PADI lub SSI (Maks. 4 nurków w grupie)",
//       "Przystanek bezpieczeństwa"
//     ],
//     cz: [
//       "2 ponory s průvodcem z lodi",
//       "Kompletní zapůjčení kvalitní potápěčské výstroje",
//       "Kvalitní neopren",
//       "Lahve, zátěž a zátěžový opasek",
//       "Oficiální poplatky za mořský park",
//       "Vyzvednutí a návrat do hotelu",
//       "Čerstvá minerální voda a studené nápoje",
//       "Lehké občerstvení a ovoce na palubě",
//       "Instruktor PADI nebo SSI (Max. 4 potápěči ve skupině)",
//       "Bezpečnostní zastávka"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Diving certification — a digital copy on your phone is fully accepted",
//       "Logbook (digital or physical)",
//       "Towel",
//       "Sunscreen (Reef-safe preferred)",
//       "Hat & Sunglasses",
//       "Personal medication if needed"
//     ],
//     de: [
//       "Tauchzertifikat — digitale Kopie auf dem Handy wird voll akzeptiert",
//       "Logbuch (digital oder Papier)",
//       "Handtuch",
//       "Sonnencreme (Riff-freundlich bevorzugt)",
//       "Hut & Sonnenbrille",
//       "Persönliche Medikamente bei Bedarf"
//     ],
//     it: [
//       "Brevetto subacqueo — accettata copia digitale sullo smartphone",
//       "Logbook (digitale o cartaceo)",
//       "Asciugamano",
//       "Crema solare (preferibilmente ecologica)",
//       "Cappello e occhiali da sole",
//       "Farmaci personali se necessari"
//     ],
//     ru: [
//       "Сертификат дайвера — принимается цифровая копия на телефоне",
//       "Логбук (цифровой или бумажный)",
//       "Полотенце",
//       "Солнцезащитный крем (предпочтительно безопасный для рифов)",
//       "Головной убор и очки",
//       "Личные медикаменты при необходимости"
//     ],
//     pl: [
//       "Certyfikat nurkowy — akceptowana kopia cyfrowa w telefonie",
//       "Logbook (cyfrowy lub fizyczny)",
//       "Ręcznik",
//       "Krem z filtrem (preferowany bezpieczny dla rafy)",
//       "Czapka i okulary przeciwsłoneczne",
//       "Leki osobiste w razie potrzeby"
//     ],
//     cz: [
//       "Potápěčská certifikace — akceptována digitální kopie v telefonu",
//       "Logbook (digitální nebo fyzický)",
//       "Ručník",
//       "Opalovací krém (upřednostňován šetrný k útesům)",
//       "Klobouk a sluneční brýle",
//       "Osobní léky v případě potřeby"
//     ]
//   },
//   childrenPolicy: undefined,
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Hotel Pickup — 7:30 AM",
//         de: "Hotelabholung — 7:30 Uhr",
//         it: "Transfer dall'Hotel — 7:30",
//         ru: "Трансфер из отеля — 7:30",
//         pl: "Odbiór z hotelu — 7:30",
//         cz: "Vyzvednutí v hotelu — 7:30"
//       },
//       description: {
//         en: "Pickup directly from your hotel at 7:30 AM and transfer via comfortable A/C vehicle to the boat departure pier at Port Ghalib.",
//         de: "Pünktliche Abholung vom Hotel um 7:30 Uhr und Fahrt im klimatisierten Fahrzeug zum Hafen Port Ghalib.",
//         it: "Pick-up dall'hotel alle 7:30 e trasferimento in veicolo climatizzato al porto di Port Ghalib.",
//         ru: "Трансфер из отеля в 7:30 на комфортабельном авто с кондиционером к причалу в Порт-Галибе.",
//         pl: "Odbiór z hotelu o 7:30 i transfer klimatyzowanym pojazdem do przystani w Port Ghalib.",
//         cz: "Vyzvednutí v hotelu v 7:30 a transfer klimatizovaným vozem do přístavu Port Ghalib."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Boat Departure",
//         de: "Schiffsabfahrt",
//         it: "Partenza della Barca",
//         ru: "Выход корабля в море",
//         pl: "Wypłynięcie łodzi",
//         cz: "Odjezd lodi"
//       },
//       description: {
//         en: "Board the fully equipped dive boat, complete registration, and head towards Marsa Mubarak Bay.",
//         de: "Einschiffen auf das Tauchschiff, Formalitäten erledigen und Fahrt in die Bucht von Marsa Mubarak.",
//         it: "Imbarco sulla barca da immersione, registrazione e navigazione verso la baia di Marsa Mubarak.",
//         ru: "Посадка на оборудованный катер, регистрация и отправление в сторону бухты Марса-Мубарак.",
//         pl: "Wejście na pokład łodzi nurkowej, dopełnienie formalności i rejs w kierunku zatoki Marsa Mubarak.",
//         cz: "Nástup na potápěčskou loď, dokoncení registrace a plavba směrem k zátoce Marsa Mubarak."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Safety Dive Briefing",
//         de: "Sicherheits- & Tauchbriefing",
//         it: "Briefing di Sicurezza e Immersione",
//         ru: "Инструктаж по безопасности",
//         pl: "Odprawa bezpieczeństwa",
//         cz: "Bezpečnostní briefing"
//       },
//       description: {
//         en: "Your instructor explains the dive plan, expected depth, buddy system, hand signals, safety points, and eco-guidelines.",
//         de: "Der Tauchlehrer erklärt den Tauchplan, Tiefengrenzen, Partnersystem, Handzeichen und Umweltregeln.",
//         it: "L'istruttore illustra il piano d'immersione, profondità, sistema di coppia, segnali e norme ecologiche.",
//         ru: "Инструктор рассказывает о плане погружения, глубинах, работе в парах, подводных сигналах и правилах экологии.",
//         pl: "Instruktor omawia plan nurkowania, głębokość, system partnerski, sygnały oraz zasady ochrony środowiska.",
//         cz: "Instruktor vysvětlí plán ponoru, maximální hloubky, systém dvojic, podvodní signály a ekologická pravidla."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Dive 1 — Seagrass Areas",
//         de: "Tauchgang 1 — Seegraswiesen",
//         it: "Immersione 1 — Area di Posidonia",
//         ru: "Погружение 1 — Морская трава",
//         pl: "Nurkowanie 1 — Strefa trawy morskiej",
//         cz: "Ponor 1 — Mořské louky"
//       },
//       description: {
//         en: "Gear up for your first guided dive, exploring the seagrass areas for turtles, rays, and the possibility of encountering the dugong.",
//         de: "Erster geführter Tauchgang über den Seegraswiesen auf der Suche nach Schildkröten, Rochen und dem Dujong.",
//         it: "Prima immersione guidata alla scoperta della posidonia, alla ricerca di tartarughe, razze e del dugongo.",
//         ru: "Первое погружение с гидом над травянистым плато в поисках черепах, скатов и возможной встречи с дюгонем.",
//         pl: "Pierwsze nurkowanie z przewodnikiem nad trawą morską w poszukiwaniu żółwi, płaszczek i diugonia.",
//         cz: "První ponor s průvodcem zaměřený na mořské louky, pozorování želv, rejnoků a možná i dugonga."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "Surface Interval Break",
//         de: "Oberflächenpause an Bord",
//         it: "Intervallo di Superficie",
//         ru: "Отдых на борту",
//         pl: "Przerwa powierzchniowa",
//         cz: "Povrchový interval"
//       },
//       description: {
//         en: "Relax on board between the two dives. Enjoy fresh mineral water, cold drinks, and light snacks or fruits.",
//         de: "Entspannen Sie an Bord zwischen den Tauchgängen bei kühlen Getränken, frischem Wasser und leichten Snacks.",
//         it: "Rilassati a bordo tra le due immersioni con acqua minerale, bevande fresche, snack e frutta.",
//         ru: "Отдых на палубе между погружениями. Заполнение логбуков, напитки, фрукты и легкие закуски.",
//         pl: "Relaks na pokładzie między nurkowaniami z woda, napojami, lekkimi przekąskami i owocami.",
//         cz: "Odpočinek na palubě mezi ponory. K dispozici je voda, chladné nápoje, občerstvení a ovoce."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "Dive 2 — Coral & Reef Areas",
//         de: "Tauchgang 2 — Korallengärten & Riff",
//         it: "Immersione 2 — Giardini di Corallo",
//         ru: "Погружение 2 — Коралловые сады",
//         pl: "Nurkowanie 2 — Ogrody koralowe",
//         cz: "Ponor 2 — Koralové zahrady"
//       },
//       description: {
//         en: "Continue exploring another suitable section of Marsa Mubarak, such as coral gardens or reef pinnacles.",
//         de: "Zweiter geführter Tauchgang zur Erkundung der bunten Korallengärten und Riffformationen der Bucht.",
//         it: "Seconda immersione guidata alla scoperta dei giardini di corallo e dei pinnacoli della baia.",
//         ru: "Второе погружение с гидом у коралловых садов или рифовых пиков бухты Марса-Мубарак.",
//         pl: "Drugie nurkowanie z przewodnikiem eksplorujące ogrody koralowe i formacje rafowe zatoki.",
//         cz: "Druhý ponor s průvodcem prozkoumávající korálové zahrady a útesové formace v zátoce."
//       }
//     },
//     {
//       step: "07",
//       title: {
//         en: "Return Voyage",
//         de: "Rückfahrt zum Hafen",
//         it: "Rientro in Porto",
//         ru: "Обратный путь",
//         pl: "Rejs powrotny",
//         cz: "Zpáteční plavba"
//       },
//       description: {
//         en: "Pack up your diving equipment and cruise comfortably back to the departure pier in Port Ghalib.",
//         de: "Ausrüstung verpacken und entspannte Rückfahrt zum Hafen Port Ghalib genießen.",
//         it: "Sistemazione dell'attrezzatura e piacevole navigazione di rientro al porto di Port Ghalib.",
//         ru: "Сбор и опреснение снаряжения, отдыхающий рейс обратно в порт Порт-Галиб.",
//         pl: "Spakowanie sprzętu i relaksujący rejs powrotny do przystani w Port Ghalib.",
//         cz: "Sbalení potápěčské výstroje a pohodlná plavba zpět do přístavu Port Ghalib."
//       }
//     },
//     {
//       step: "08",
//       title: {
//         en: "Hotel Drop-off",
//         de: "Rückbringung zum Hotel",
//         it: "Transfer di Rientro in Hotel",
//         ru: "Трансфер в отель",
//         pl: "Powrót do hotelu",
//         cz: "Návrat do hotelu"
//       },
//       description: {
//         en: "Transfer safely back to your resort after completing the two boat dives.",
//         de: "Sicherer Rücktransfer zu Ihrem Resort nach zwei wunderschönen Tauchgängen.",
//         it: "Transfer di rientro in hotel in totale sicurezza al termine della giornata.",
//         ru: "Безопасный трансфер обратно в отель после завершения программы.",
//         pl: "Bezpieczny transfer powrotny do hotelu po zakończonych nurkowaniach.",
//         cz: "Pohodlný návrat do hotelu po dokončení obou ponorů."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment or deposit required. Custom discount applied if you bring your own diving equipment.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung oder Anzahlung erforderlich. Individueller Rabatt bei eigener Ausrüstung.",
//     it: "Paga dopo il tour — nessun pagamento online o deposito richiesto. Sconto personalizzato applicato se porti la tua attrezzatura.",
//     ru: "Оплата после поездки — без предоплаты и онлайн-платежей. Индивидуальная скидка при наличии собственного снаряжения.",
//     pl: "Płatność po wycieczce — bez opłat online i zaliczek. Indywidualna zniżka w przypadku posiadania własnego sprzętu.",
//     cz: "Platba až po výletu — bez platby předem nebo zálohy. Při použití vlastního vybavení bude uplatněna individuální sleva."
//   },
//   disclaimer: {
//     en: "Marsa Mubarak is a natural marine environment, and all animals are completely wild. Turtle and dugong sightings are never guaranteed. For the protection of the marine environment, maintain a respectful, non-intrusive distance from all marine animals. Never chase, touch, feed, or surround turtles, dugongs, or other marine life. The instructor holds full safety authority to alter the dive routes or locations according to weather, visibility, currents, and sea conditions.",
//     de: "Marsa Mubarak ist ein natürlicher Lebensraum und alle Tiere sind wildlebend. Sichtungen von Schildkröten und Seekühen können nicht garantiert werden. Zum Schutz der Meeresumwelt ist stets ein respektvoller Abstand einzuhalten; Tiere dürfen weder berührt noch verfolgt werden. Der Tauchlehrer hat die volle Befugnis, die Route je nach Wetter und Strömung anzupassen.",
//     it: "Marsa Mubarak è un ambiente marino naturale e gli animali sono selvatici. Gli avvistamenti di tartarughe e dugonghi non possono essere garantiti. Per la salvaguardia dell'ambiente, è obbligatorio mantenere la distanza di sicurezza e non toccare o inseguire mai gli animali. L'istruttore si riserva il diritto di modificare il piano d'immersione in base al meteo.",
//     ru: "Марса-Мубарак — естественная среда обитания, и все животные живут в дикой природе. Наблюдение черепах и дюгоней не гарантируется. Категорически запрещено преследовать, трогать или кормить морских обитателей. Инструктор оставляет за собой право менять маршрут погружений в зависимости от погоды и течений.",
//     pl: "Marsa Mubarak to naturalne środowisko morskie, a wszystkie zwierzęta są dzikie. Obserwacja żółwi i diugoni nie jest gwarantowana. W celu ochrony środowiska należy zachować bezpieczną odległość i nie dotykać ani nie niepokoić zwierząt. Instruktor ma prawo zmienić trasę nurkowania w zależności od warunków.",
//     cz: "Marsa Mubarak je přirozené mořské prostředí a zvířata žijí volně. Pozorování želv a dugongů nelze garantovat. Z důvodu ochrany přírody je nutné dodržovat odstup a zvířata nepronásledovat ani nedotýkat. Instruktor má plné právo upravit trasu podle aktuálního počasí."
//   },
//   images: {
//     featured: "/images/tours/boat-scuba-card.webp",
//     gallery: [
//       "/images/tours/boat-scuba-1.webp",
//       "/images/tours/boat-scuba-2.webp",
//       "/images/tours/boat-scuba-3.webp"
//     ]
//   }
// },
// {
//   id: "abu-dabbab-night-scuba",
//   slug: "abu-dabbab-night-dive",
//   type: "scuba-diving",
//   title: {
//     en: "Abu Dabbab Night Dive",
//     de: "Abu Dabbab Nachttauchgang",
//     it: "Immersione Notturna ad Abu Dabbab",
//     ru: "Ночное погружение в Абу-Дабаб",
//     pl: "Nocne nurkowanie w Abu Dabbab",
//     cz: "Noční potápění v Abu Dabbab"
//   },
//   subtitle: {
//     en: "Guided Shore Night Dive (Max Depth 20m, Max 4 Divers)",
//     de: "Geführter Nachttauchgang vom Land (Max. Tiefe 20m, Max. 4 Taucher)",
//     it: "Immersione Notturna da Riva con Guida (Prof. Max 20m, Max 4 Sub)",
//     ru: "Ночное погружение с берега с гидом (Макс. глубина 20м, Макс. 4 дайвера)",
//     pl: "Nocne nurkowanie z brzegu z przewodnikiem (Maks. głębokość 20m, Maks. 4 nurków)",
//     cz: "Noční ponor z břehu s průvodcem (Max. hloubka 20m, Max. 4 potápěči)"
//   },
//   category: {
//     en: "Scuba Diving",
//     de: "Tauchen",
//     it: "Immersioni Subacquee",
//     ru: "Дайвинг",
//     pl: "Nurkowanie",
//     cz: "Potápění"
//   },
//   price: {
//     amount: 95,
//     currency: "€",
//     unit: {
//       en: "per person (Abu Dabbab Entry Fee Included)",
//       de: "pro Person (Abu Dabbab Eintritt inklusive)",
//       it: "per persona (Biglietto d'ingresso ad Abu Dabbab Incluso)",
//       ru: "за человека (Входной билет в Абу-Дабаб включен)",
//       pl: "za osobę (Bilet wstępu do Abu Dabbab w cenie)",
//       cz: "za osobu (Vstupní poplatek do Abu Dabbab v ceně)"
//     }
//   },
//   duration: {
//     en: "Evening Experience (~4 Hours)",
//     de: "Abenderlebnis (~4 Std.)",
//     it: "Esperienza Serale (~4 Ore)",
//     ru: "Вечерняя программа (~4 часа)",
//     pl: "Wieczorna atrakcja (~4 godziny)",
//     cz: "Večerní zážitek (~4 hodiny)"
//   },
//   departure: {
//     en: "Abu Dabbab Beach (Shore Entry)",
//     de: "Strand von Abu Dabbab (Einstieg vom Land)",
//     it: "Spiaggia di Abu Dabbab (Ingresso da Riva)",
//     ru: "Пляж Абу-Дабаб (Вход с берега)",
//     pl: "Plaża Abu Dabbab (Wejście z brzegu)",
//     cz: "Pláž Abu Dabbab (Vstup z břehu)"
//   },
//   overview: {
//     en: "Experience Abu Dabbab after sunset, when the underwater world transforms and nocturnal marine life becomes active. Guided by your instructor and dive torch, explore the reef and sandy areas at a relaxed pace to discover octopuses, squid, lionfish, and sleeping reef creatures.",
//     de: "Erleben Sie Abu Dabbab nach Sonnenuntergang, wenn die Unterwasserwelt erwacht und nachtaktive Meeresbewohner aktiv werden. Mit Tauchlampe und Guide erkunden Sie Riff und Sandflächen, um Oktopusse, Kalmare, Rotfeuerfische und mehr zu entdecken.",
//     it: "Vivi Abu Dabbab dopo il tramonto, quando il mondo sottomarino si trasforma e la vita notturna si attiva. Guidato dal tuo istruttore e dalla torcia subacquea, esplora la barriera corallina e le aree sabbiose per avvistare polpi, calamari e pesci leone.",
//     ru: "Погрузитесь в Абу-Дабаб после заката, когда подводный мир преображается и активизируются ночные обитатели. С подводным фонарем и гидом исследуйте риф и песчаное дно, наблюдая осьминогов, кальмаров, крылаток и других существ.",
//     pl: "Odkryj Abu Dabbab po zachodzie słońca, gdy podwodny świat się zmienia, a nocne stworzenia stają się aktywne. Z latarką i przewodnikiem badaj rafę i piaszczyste dno, szukając ośmiornic, kałamarnic i skrzydlic.",
//     cz: "Zažijte Abu Dabbab po západu slunce, kdy se podvodní svět promění a noční živočichové ožívají. S potápěčskou svítilnou a průvodcem prozkoumejte útes a písčité oblasti a objevujte chobotnice, kalmary či perutýny."
//   },
//   highlights: {
//     en: [
//       "1 guided night dive at famous Abu Dabbab",
//       "Professional dive torch rental included",
//       "Official Abu Dabbab Beach entry ticket included",
//       "Full high-quality scuba equipment & wetsuit rental",
//       "Small group setting (Maximum 4 divers per instructor)",
//       "Explore nocturnal marine life: octopuses, squid, lionfish & rays",
//       "Hotel pickup & drop-off included",
//       "Fresh mineral water & refreshments"
//     ],
//     de: [
//       "1 geführter Nachttauchgang im berühmten Abu Dabbab",
//       "Professionelle Tauchlampe inklusive",
//       "Offizieller Eintritt zum Strand von Abu Dabbab inklusive",
//       "Komplette hochwertige Tauchausrüstung & Neoprenanzug",
//       "Kleingruppe (Maximal 4 Taucher pro Tauchlehrer)",
//       "Nachtaktives Meeresleben entdecken: Oktopusse, Kalmare, Rotfeuerfische",
//       "Hotelabholung & Rückbringung inklusive",
//       "Frisches Wasser & Erfrischungen"
//     ],
//     it: [
//       "1 immersione notturna guidata nella famosa Abu Dabbab",
//       "Noleggio torcia subacquea professionale incluso",
//       "Biglietto d'ingresso ufficiale alla spiaggia di Abu Dabbab incluso",
//       "Noleggio attrezzatura subacquea completa e muta",
//       "Piccolo gruppo (Massimo 4 sub per istruttore)",
//       "Scopri la fauna notturna: polpi, calamari, pesci leone e razze",
//       "Transfer da e per l'hotel incluso",
//       "Acqua minerale e rinfreschi"
//     ],
//     ru: [
//       "1 ночное погружение с гидом в знаменитом Абу-Дабабе",
//       "Аренда профессионального подводного фонаря включена",
//       "Официальный входной билет на пляж Абу-Дабаб включен",
//       "Аренда полного качественного комплекта снаряжения и гидрокостюма",
//       "Маленькая группа (Максимум 4 дайвера на инструктора)",
//       "Ночная подводная жизнь: осьминоги, кальмары, крылатки и скаты",
//       "Трансфер из отеля и обратно включен",
//       "Свежая вода и напитки"
//     ],
//     pl: [
//       "1 nocne nurkowanie z przewodnikiem w słynnym Abu Dabbab",
//       "Wypożyczenie profesjonalnej latarki w cenie",
//       "Oficjalny bilet wstępu na plażę Abu Dabbab w cenie",
//       "Pełne wypożyczenie wysokiej jakości sprzętu i pianki",
//       "Mała grupa (Maksymalnie 4 nurków na instruktora)",
//       "Nocne życie morskie: ośmiornice, kałamarnice, skrzydlice i płaszczki",
//       "Odbiór i powrót do hotelu w cenie",
//       "Świeża woda i napoje"
//     ],
//     cz: [
//       "1 noční ponor s průvodcem ve slavném Abu Dabbab",
//       "Zapůjčení profesionální potápěčské svítilny v cenie",
//       "Oficiální vstupenka na pláž Abu Dabbab v cenie",
//       "Kompletní zapůjčení kvalitní potápěčské výstroje a neoprenu",
//       "Malá skupina (Maximálně 4 potápěči na instruktora)",
//       "Pozorování nočního života: chobotnice, kalmaři, perutýni a rejnoci",
//       "Vyzvednutí a návrat do hotelu v cenie",
//       "Čerstvá voda a občerstvení"
//     ]
//   },
//   included: {
//     en: [
//       "1 guided night dive",
//       "Professional dive torch",
//       "Full high-quality scuba equipment rental",
//       "High-quality wetsuit",
//       "Tank, weights & weight belt",
//       "Official Abu Dabbab Beach Entry Ticket",
//       "Hotel pickup & drop-off",
//       "Fresh mineral water & refreshments",
//       "PADI or SSI Instructor (Max 4 divers)",
//       "Safety stop"
//     ],
//     de: [
//       "1 geführter Nachttauchgang",
//       "Professionelle Tauchlampe",
//       "Komplette hochwertige Tauchausrüstung",
//       "Hochwertiger Neoprenanzug",
//       "Flasche, Blei & Bleigurt",
//       "Offizielles Eintrittsticket zum Strand von Abu Dabbab",
//       "Hotelabholung & Rückbringung",
//       "Frisches Mineralwasser & Erfrischungen",
//       "PADI- oder SSI-Tauchlehrer (Max. 4 Taucher)",
//       "Sicherheitsstopp"
//     ],
//     it: [
//       "1 immersione notturna guidata",
//       "Torcia subacquea professionale",
//       "Noleggio attrezzatura subacquea completa di alta qualità",
//       "Muta di alta qualità",
//       "Bombola, zavorra e cintura",
//       "Biglietto d'ingresso ufficiale alla spiaggia di Abu Dabbab",
//       "Transfer da e per l'hotel",
//       "Acqua minerale e rinfreschi",
//       "Istruttore PADI o SSI (Max 4 sub)",
//       "Sosta di sicurezza"
//     ],
//     ru: [
//       "1 ночное погружение с гидом",
//       "Профессиональный подводный фонарь",
//       "Аренда полного качественного комплекта снаряжения",
//       "Качественный гидрокостюм",
//       "Баллон, грузы и грузовой пояс",
//       "Официальный входной билет на пляж Абу-Дабаб",
//       "Трансфер из отеля и обратно",
//       "Минеральная вода и напитки",
//       "Инструктор PADI или SSI (Макс. 4 дайвера)",
//       "Остановка безопасности"
//     ],
//     pl: [
//       "1 nocne nurkowanie z przewodnikiem",
//       "Profesjonalna latarka nurkowa",
//       "Wypożyczenie pełnego wysokiej jakości sprzętu",
//       "Wysokiej jakości pianka",
//       "Butla, balast i pas balastowy",
//       "Oficjalny bilet wstępu na plażę Abu Dabbab",
//       "Odbiór i powrót do hotelu",
//       "Świeża woda mineralna i napoje",
//       "Instruktor PADI lub SSI (Maks. 4 nurków)",
//       "Przystanek bezpieczeństwa"
//     ],
//     cz: [
//       "1 noční ponor s průvodcem",
//       "Profesionální potápěčská svítilna",
//       "Kompletní zapůjčení kvalitní potápěčské výstroje",
//       "Kvalitní neopren",
//       "Láhve, zátěž a zátěžový opasek",
//       "Oficiální vstupenka na pláž Abu Dabbab",
//       "Vyzvednutí a návrat do hotelu",
//       "Čerstvá minerální voda a občerstvení",
//       "Instruktor PADI nebo SSI (Max. 4 potápěči)",
//       "Bezpečnostní zastávka"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Diving certification — a digital copy on your phone is fully accepted",
//       "Logbook (digital or physical)",
//       "Towel",
//       "Warm hoodie or jacket (highly recommended after the night dive)",
//       "Dry clothes",
//       "Personal medication if needed"
//     ],
//     de: [
//       "Tauchzertifikat — digitale Kopie auf dem Handy wird voll akzeptiert",
//       "Logbuch (digital oder Papier)",
//       "Handtuch",
//       "Warmer Pullover oder Jacke (nach dem Nachttauchgang sehr empfohlen)",
//       "Trockene Kleidung",
//       "Persönliche Medikamente bei Bedarf"
//     ],
//     it: [
//       "Brevetto subacqueo — accettata copia digitale sullo smartphone",
//       "Logbook (digitale o cartaceo)",
//       "Asciugamano",
//       "Felpa o giacca calda (molto consigliata dopo l'immersione notturna)",
//       "Abiti asciutti di ricambio",
//       "Farmaci personali se necessari"
//     ],
//     ru: [
//       "Сертификат дайвера — принимается цифровая копия на телефоне",
//       "Логбук (цифровой или бумажный)",
//       "Полотенце",
//       "Теплая толстовка или куртка (настоятельно рекомендуется после ночного погружения)",
//       "Сухая одежда",
//       "Личные медикаменты при необходимости"
//     ],
//     pl: [
//       "Certyfikat nurkowy — akceptowana kopia cyfrowa w telefonie",
//       "Logbook (cyfrowy lub fizyczny)",
//       "Ręcznik",
//       "Ciepła bluza lub kurtka (gorąco polecana po nocnym nurkowaniu)",
//       "Suche ubrania na zmianę",
//       "Leki osobiste w razie potrzeby"
//     ],
//     cz: [
//       "Potápěčská certifikace — akceptována digitální kopie v telefonu",
//       "Logbook (digitální nebo fyzický)",
//       "Ručník",
//       "Teplá mikina nebo bunda (důrazně doporučeno po nočním ponoru)",
//       "Suché oblečení",
//       "Osobní léky v případě potřeby"
//     ]
//   },
//   childrenPolicy: undefined,
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Evening Pickup — 5:00 PM",
//         de: "Abendabholung — 17:00 Uhr",
//         it: "Transfer Serale — 17:00",
//         ru: "Вечерний трансфер — 17:00",
//         pl: "Odbiór wieczorny — 17:00",
//         cz: "Večerní vyzvednutí — 17:00"
//       },
//       description: {
//         en: "Hotel pickup and transfer via comfortable A/C vehicle to Abu Dabbab Beach.",
//         de: "Hotelabholung und Fahrt im klimatisierten Fahrzeug zum Strand von Abu Dabbab.",
//         it: "Pick-up dall'hotel e trasferimento in veicolo climatizzato alla spiaggia di Abu Dabbab.",
//         ru: "Трансфер из отеля на комфортабельном авто с кондиционером к пляжу Абу-Дабаб.",
//         pl: "Odbiór z hotelu i transfer klimatyzowanym pojazdem na plażę Abu Dabbab.",
//         cz: "Vyzvednutí v hotelu a transfer klimatizovaným vozem na pláž Abu Dabbab."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Arrival & Gear Setup — 5:45 PM",
//         de: "Ankunft & Ausrüstungs-Check — 17:45 Uhr",
//         it: "Arrivo e Preparazione — 17:45",
//         ru: "Прибытие и сбор снаряжения — 17:45",
//         pl: "Przyjazd i przygotowanie sprzętu — 17:45",
//         cz: "Příjezd a příprava výstroje — 17:45"
//       },
//       description: {
//         en: "Arrive at Abu Dabbab Beach, prepare your diving equipment, and test your dive torch.",
//         de: "Ankunft am Strand, Zusammenbauen der Tauchausrüstung und Funktionsprüfung der Tauchlampe.",
//         it: "Arrivo in spiaggia, preparazione dell'attrezzatura e controllo della torcia subacquea.",
//         ru: "Прибытие на пляж Абу-Дабаб, подготовка снаряжения и проверка подводного фонаря.",
//         pl: "Przyjazd na plażę Abu Dabbab, przygotowanie sprzętu nurkowego i sprawdzenie latarki.",
//         cz: "Příjezd na pláž Abu Dabbab, příprava potápěčské výstroje a kontrola svítilny."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Night Dive Briefing — 6:00 PM",
//         de: "Nachttauch-Briefing — 18:00 Uhr",
//         it: "Briefing Immersione Notturna — 18:00",
//         ru: "Инструктаж перед ночным погружением — 18:00",
//         pl: "Odprawa przed nurkowaniem — 18:00",
//         cz: "Briefing před nočním ponorem — 18:00"
//       },
//       description: {
//         en: "Your instructor explains the planned route, maximum depth (up to 20m), buddy procedures, light signals, and eco-guidelines.",
//         de: "Der Tauchlehrer erklärt Route, maximale Tiefe (bis 20m), Partnerverfahren, Lichtsignale und Umweltregeln.",
//         it: "L'istruttore spiega il percorso, la profondità massima (fino a 20m), le procedure di coppia, i segnali luminosi e le norme ecologiche.",
//         ru: "Инструктор объясняет маршрут, максимальную глубину (до 20м), работу в парах, световые сигналы и правила безопасности.",
//         pl: "Instruktor omawia planowaną trasę, maksymalną głębokość (do 20m), procedury partnerskie, sygnały świetlne i zasady ochrony środowiska.",
//         cz: "Instruktor vysvětlí plánovanou trasu, maximální hloubku (do 20m), postup dvojic, světelné signály a ekologická pravidla."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "The Night Dive — 6:15 PM",
//         de: "Der Nachttauchgang — 18:15 Uhr",
//         it: "L'Immersione Notturna — 18:15",
//         ru: "Ночное погружение — 18:15",
//         pl: "Nocne nurkowanie — 18:15",
//         cz: "Noční ponor — 18:15"
//       },
//       description: {
//         en: "Enter directly from the beach after sunset and explore the inner reef edge and sandy areas with your dive light (~45–50 min).",
//         de: "Direkter Einstieg vom Strand nach Sonnenuntergang. Erkundung des Innenriffs und der Sandflächen mit der Lampenführung (~45–50 Min.).",
//         it: "Entrata diretta dalla spiaggia dopo il tramonto ed esplorazione del reef interno e delle aree sabbiose (~45–50 min).",
//         ru: "Заход в воду прямо с пляжа после заката и исследование внутреннего рифа и песчаных зон (~45–50 мин).",
//         pl: "Wejście bezpośrednio z plaży po zachodzie słońca i eksploracja wewnętrznej rafy oraz piaszczystych stref (~45–50 min).",
//         cz: "Vstup přímo z pláže po západu slunce a prozkoumávání vnitřního útesu a písčitých oblastí (~45–50 min)."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "Exit & Pack Up — 7:15 PM",
//         de: "Ausstieg & Ausrüstung verpacken — 19:15 Uhr",
//         it: "Uscita e Sistemazione — 19:15",
//         ru: "Выход из воды и сбор — 19:15",
//         pl: "Wyjście z wody i pakowanie — 19:15",
//         cz: "Konec ponoru a balení — 19:15"
//       },
//       description: {
//         en: "Exit the water, rinse and pack your equipment, change into warm clothes, and prepare for departure.",
//         de: "Ausstieg aus dem Wasser, Ausrüstung spülen und verpacken, warme Kleidung anziehen und Vorbereitung auf die Rückfahrt.",
//         it: "Uscita dall'acqua, risciacquo e sistemazione dell'attrezzatura, cambio in abiti caldi e preparazione per la partenza.",
//         ru: "Выход из воды, опреснение и сбор снаряжения, переодевание в теплую одежду и подготовка к отезду.",
//         pl: "Wyjście z wody, płukanie i pakowanie sprzętu, przebranie się w ciepłe ubrania i przygotowanie do odjazdu.",
//         cz: "Konec ponoru, opláchnutí a sbalení výstroje, převlečení do teplého oblečení a příprava na odjezd."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "Hotel Drop-off — 8:00 PM",
//         de: "Rückbringung zum Hotel — 20:00 Uhr",
//         it: "Transfer di Rientro in Hotel — 20:00",
//         ru: "Трансфер в отель — 20:00",
//         pl: "Powrót do hotelu — 20:00",
//         cz: "Návrat do hotelu — 20:00"
//       },
//       description: {
//         en: "Transfer comfortably back to your hotel after your thrilling night diving experience.",
//         de: "Bequeme Rückfahrt zu Ihrem Hotel nach einem faszinierenden Nachttaucherlebnis.",
//         it: "Rientro confortevole in hotel al termine dell'affascinante avventura notturna.",
//         ru: "Комфортабельный трансфер обратно в отель после незабываемого ночного дайвинга.",
//         pl: "Wygodny transfer powrotny do hotelu po ekscytującym nocnym nurkowaniu.",
//         cz: "Pohodlný návrat do hotelu po vzrušujícím nočním potápěčském zážitku."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Pay after the trip — no online payment or deposit required. Custom discount applied if you bring your own diving equipment.",
//     de: "Bezahlung nach dem Ausflug — keine Online-Zahlung oder Anzahlung erforderlich. Individueller Rabatt bei eigener Ausrüstung.",
//     it: "Paga dopo il tour — nessun pagamento online o deposito richiesto. Sconto personalizzato applicato se porti la tua attrezzatura.",
//     ru: "Оплата после поездки — без предоплаты и онлайн-платежей. Индивидуальная скидка при наличии собственного снаряжения.",
//     pl: "Płatność po wycieczce — bez opłat online i zaliczek. Indywidualna zniżka w przypadku posiadania własnego sprzętu.",
//     cz: "Platba až po výletu — bez platby předem nebo zálohy. Při použití vlastního vybavení bude uplatněna individuální sleva."
//   },
//   disclaimer: {
//     en: "Night diving requires good buoyancy control, equipment coordination, and comfort in low-light conditions. The maximum depth is 20m, but exact routes and depths are adapted to certification, visibility, and conditions. Wildlife sightings are wild and never guaranteed. Never touch, chase, or shine torches directly at animals' eyes. The instructor holds full authority to alter or cancel the dive for safety.",
//     de: "Nachttauchen erfordert gute Tarierung und Komfort bei geringem Licht. Die maximale Tiefe beträgt 20m. Tiersichtungen sind natürlich und nicht garantierbar. Anstrahlen der Tieraugen und Berühren von Meeresbewohnern ist strengstens untersagt. Der Tauchlehrer hat die volle Befugnis, den Tauchgang aus Sicherheitsgründen anzupassen.",
//     it: "L'immersione notturna richiede un buon controllo dell'assetto e tranquillità al buio. Profondità massima 20m. Gli avvistamenti non sono mai garantiti. È vietato puntare la torcia negli occhi degli animali o toccarli. L'istruttore si riserva il diritto di modificare o annullare l'immersione per motivi di sicurezza.",
//     ru: "Ночной дайвинг требует хорошего контроля плавучести и уверенности в условиях низкой освещенности. Максимальная глубина 20м. Встречи с животными не гарантируются. Запрещено светить фонарем прямо в глаза животным и трогать обитателей. Инструктор оставляет за собой право изменить или отменить погружение ради безопасности.",
//     pl: "Nurkowanie nocne wymaga dobrej pływalności i komfortu w ciemności. Maksymalna głębokość to 20m. Obserwacja zwierząt nie jest gwarantowana. Zabrania się świecenia latarką bezpośrednio w oczy zwierząt oraz ich dotykania. Instruktor ma pełne prawo zmienić plan dla bezpieczeństwa.",
//     cz: "Noční potápění vyžaduje dobrou kontrolu vzpóru a pohodlí ve tmě. Maximální hloubka je 20m. Pozorování živočichů nelze garantovat. Je přísně zakázáno svítit svítilnou přímo do očí zvířat a dotýkat se jich. Instruktor má plné právo upravit plán z bezpečnostních důvodů."
//   },
//   images: {
//     featured: "/images/tours/night-dive-card.webp",
//     gallery: [
//       "/images/tours/night-dive-1.webp",
//       "/images/tours/night-dive-2.webp",
//       "/images/tours/night-dive-3.webp"
//     ]
//   }
// },
// // courses
// {
//   id: "padi-open-water-diver",
//   slug: "padi-open-water-diver-course",
//   type: "course",
//   title: {
//     en: "PADI Open Water Diver Course",
//     de: "PADI Open Water Diver Kurs",
//     it: "Corso PADI Open Water Diver",
//     ru: "Курс PADI Open Water Diver",
//     pl: "Kurs PADI Open Water Diver",
//     cz: "Kurz PADI Open Water Diver"
//   },
//   subtitle: {
//     en: "Premium Small-Group Certification Course (Max 2 Students per Instructor)",
//     de: "Premium-Zertifizierungskurs in kleinen Gruppen (Max. 2 Schüler pro Tauchlehrer)",
//     it: "Corso di Certificazione Premium in Piccoli Gruppi (Max 2 Studenti per Istruttore)",
//     ru: "Премиум-курс сертификации в малых группах (Макс. 2 студента на инструктора)",
//     pl: "Certyfikowany kurs premium w małych grupach (Maks. 2 studentów na instruktora)",
//     cz: "Certifikační kurz premium v malých skupinách (Max. 2 studenti na instruktora)"
//   },
//   category: {
//     en: "Diving Courses",
//     de: "Tauchkurse",
//     it: "Corsi Subacquei",
//     ru: "Курсы Дайвинга",
//     pl: "Kursy Nurkowe",
//     cz: "Potápěčské Kurzy"
//   },
//   price: {
//     amount: 420,
//     currency: "€",
//     unit: {
//       en: "per person (PADI eLearning & Full Gear Included)",
//       de: "pro Person (PADI eLearning & Ausrüstung inklusive)",
//       it: "per persona (PADI eLearning e Attrezzatura Inclusi)",
//       ru: "за человека (PADI eLearning и снаряжение включены)",
//       pl: "za osobę (PADI eLearning i sprzęt w cenie)",
//       cz: "za osobu (PADI eLearning a výstroj v ceně)"
//     }
//   },
//   duration: {
//     en: "3–4 Days (8:00 AM – 1:00 PM)",
//     de: "3–4 Tage (8:00 bis 13:00 Uhr)",
//     it: "3–4 Giorni (8:00 – 13:00)",
//     ru: "3–4 Дня (с 8:00 до 13:00)",
//     pl: "3–4 Dni (8:00 – 13:00)",
//     cz: "3–4 Dny (8:00 – 13:00)"
//   },
//   departure: {
//     en: "Abu Dabbab Bay / Marsa Alam Hotels",
//     de: "Abu Dabbab Bucht / Marsa Alam Hotels",
//     it: "Baia di Abu Dabbab / Hotel di Marsa Alam",
//     ru: "Бухта Абу-Дабаб / Отели Марса-Алам",
//     pl: "Zatoka Abu Dabbab / Hotele w Marsa Alam",
//     cz: "Zátoka Abu Dabbab / Hotely v Marsa Alam"
//   },
//   overview: {
//     en: "Ready to stop watching the Red Sea from the surface and learn how to explore it yourself? The PADI Open Water Diver course combines online theory, confined-water practice and four open-water dives in Abu Dabbab with maximum 2 students per instructor.",
//     de: "Bereit, das Rote Meer nicht mehr nur von der Oberfläche aus zu betrachten? Der PADI Open Water Diver Kurs kombiniert Online-Theorie, Übungen im flachen Wasser und 4 Freiwassertauchgänge in Abu Dabbab mit max. 2 Schülern pro Tauchlehrer.",
//     it: "Pronto a esplorare il Mar Rosso da vicino? Il corso PADI Open Water Diver unisce teoria online, pratica in acque delimitate e 4 immersioni in mare aperto a Abu Dabbab con massimo 2 studenti per istruttore.",
//     ru: "Готовы перестать смотреть на Красное море с поверхности? Курс PADI Open Water Diver сочетает онлайн-теорию, практику на мелководье и 4 учебных погружения в Абу-Даббаб (макс. 2 студента на инструктора).",
//     pl: "Gotowy, by poznać podwodny świat Morza Czerwonego? Kurs PADI Open Water Diver łączy teorię online, praktykę na płytkiej wodzie oraz 4 nurkowania w Abu Dabbab (maks. 2 studentów na instruktora).",
//     cz: "Jste připraveni prozkoumat podmořský svět Rudého moře? Kurz PADI Open Water Diver kombinuje online teorii, praxi v mělkém prostředí a 4 ponory v Abu Dabbab (max. 2 studenti na instruktora)."
//   },
//   highlights: {
//     en: [
//       "Maximum 2 students per instructor for ultimate personal attention",
//       "Official PADI digital eLearning included to study at your own pace",
//       "Confined water skills practice directly from Abu Dabbab Beach",
//       "4 full open-water training dives exploring Red Sea coral reefs",
//       "Certification allows diving down to 18 metres worldwide",
//       "Full high-quality scuba equipment rental included",
//       "Official Abu Dabbab Beach entry fees included",
//       "Daily round-trip hotel pickup & drop-off included"
//     ],
//     de: [
//       "Maximal 2 Schüler pro Tauchlehrer für maximale persönliche Betreuung",
//       "Offizielles PADI digitales eLearning inklusive für flexibles Lernen",
//       "Übungen im flachen Flachwasser direkt am Strand von Abu Dabbab",
//       "4 Freiwassertauchgänge zur Erkundung der Korallenriffe",
//       "Zertifizierung berechtigt zum Tauchen bis zu 18 Metern weltweit",
//       "Komplette hochwertige Tauchausrüstung inklusive",
//       "Eintrittsticket für den Strand von Abu Dabbab inklusive",
//       "Täglicher Hin- und Rücktransfer vom Hotel inklusive"
//     ],
//     it: [
//       "Massimo 2 studenti per istruttore per un'attenzione personalizzata",
//       "PADI digital eLearning ufficiale incluso per studiare con i tuoi tempi",
//       "Esercitazioni in acque delimitate dalla spiaggia di Abu Dabbab",
//       "4 immersioni di addestramento in mare aperto per esplorare il reef",
//       "Certificazione valida per immersioni fino a 18 metri in tutto il mondo",
//       "Noleggio attrezzatura subacquea completa di alta qualità inclusa",
//       "Biglietto d'ingresso alla spiaggia di Abu Dabbab incluso",
//       "Trasferimento giornaliero da e per l'hotel incluso"
//     ],
//     ru: [
//       "Максимум 2 студента на инструктора для максимального внимания",
//       "Официальный цифровой PADI eLearning включен в стоимость",
//       "Практика навыков на мелководье прямо с пляжа Абу-Даббаб",
//       "4 полноценных учебных погружения в открытой воде на рифе",
//       "Сертификат позволяет погружаться до 18 метров по всему миру",
//       "Полная аренда высококачественного снаряжения включена",
//       "Входной билет на пляж Абу-Даббаб включен",
//       "Ежедневный трансфер из отеля и обратно включен"
//     ],
//     pl: [
//       "Maksymalnie 2 studentów na instruktora dla maksymalnej uwagi",
//       "Oficjalny PADI eLearning w cenie, by uczyć się w własnym tempie",
//       "Ćwiczenia w płytkiej wodzie bezpośrednio z plaży Abu Dabbab",
//       "4 nurkowania szkoleniowe na otwartej wodzie na rafie",
//       "Certyfikat uprawniający do nurkowania do 18 metrów na całym świecie",
//       "Wypożyczenie pełnego, wysokiej jakości sprzętu w cenie",
//       "Bilet wstępu na plażę Abu Dabbab w cenie",
//       "Codzienny transfer z i do hotelu w cenie"
//     ],
//     cz: [
//       "Maximálně 2 studenti na instruktora pro osobní přístup",
//       "Oficiální PADI digital eLearning v ceně pro studium vlastním tempem",
//       "Trénink dovedností v mělkém prostředí z pláže Abu Dabbab",
//       "4 výcvikové ponory na otevřené vodě při prozkoumávání útesu",
//       "Certifikace umožňuje potápění až do 18 metrů po celém světě",
//       "Zapůjčení kompletního kvalitního vybavení v ceně",
//       "Vstupenka na pláž Abu Dabbab v ceně",
//       "Denní zpáteční transfer z hotelu v ceně"
//     ]
//   },
//   included: {
//     en: [
//       "Official PADI eLearning access code & digital materials",
//       "PADI Certification processing fees",
//       "Maximum 2 students per instructor ratio",
//       "Confined-water beach training sessions",
//       "4 Full open-water training dives",
//       "Full high-quality scuba equipment rental (wetsuit, BCD, regulator, mask, fins, tanks & weights)",
//       "All Abu Dabbab Beach entry fees",
//       "Daily round-trip hotel pickup & drop-off (A/C vehicle)",
//       "Professional certified PADI Diving Instructor"
//     ],
//     de: [
//       "Zugangscode zu offiziellem PADI eLearning & Unterlagen",
//       "PADI Zertifizierungsgebühren",
//       "Maximal 2 Schüler pro Tauchlehrer",
//       "Übungseinheiten im Flachwasser am Strand",
//       "4 vollständige Freiwassertauchgänge",
//       "Komplette Tauchausrüstung (Neoprenanzug, Tarrierweste, Atemregler, Maske, Flossen, Flaschen & Blei)",
//       "Alle Eintrittsgebühren für die Bucht von Abu Dabbab",
//       "Täglicher Hotelabholung & Rückbringung (Klimatisiert)",
//       "Zertifizierter professioneller PADI Tauchlehrer"
//     ],
//     it: [
//       "Codice d'accesso PADI eLearning ufficiale e materiale digitale",
//       "Tasse di certificazione PADI",
//       "Rapporto massimo 2 studenti per istruttore",
//       "Sessioni di addestramento in acque delimitate da spiaggia",
//       "4 immersioni complete di addestramento in mare aperto",
//       "Noleggio attrezzatura subacquea completa (muta, BCD, erogatore, maschera, pinne, bombole e zavorra)",
//       "Tutti i biglietti d'ingresso alla spiaggia di Abu Dabbab",
//       "Transfer giornaliero da e per l'hotel (Veicolo climatizzato)",
//       "Istruttore subacqueo PADI professionista certificato"
//     ],
//     ru: [
//       "Доступ к официальному PADI eLearning и цифровые материалы",
//       "Сборы за оформление сертификата PADI",
//       "Максимальное соотношение: 2 студента на 1 инструктора",
//       "Тренировочные занятия на мелководье с пляжа",
//       "4 полноценных учебных погружения в открытой воде",
//       "Полная аренда снаряжения (гидрокостюм, компенсатор, регулятор, маска, ласты, баллоны, грузы)",
//       "Все входные билеты на пляж Абу-Даббаб",
//       "Ежедневный трансфер из отеля и обратно (кондиционируемый авто)",
//       "Сертифицированный профессиональный инструктор PADI"
//     ],
//     pl: [
//       "Oficjalny kod dostępu do PADI eLearning i materiały cyfrowe",
//       "Opłaty za wydanie certyfikatu PADI",
//       "Maksymalnie 2 studentów na 1 instruktora",
//       "Szkolenia w płytkiej wodzie z plaży",
//       "4 pełne nurkowania szkoleniowe na otwartej wodzie",
//       "Pełne wypożyczenie sprzętu (pianka, JKR, automat, maska, płetwy, butle i balast)",
//       "Wszystkie opłaty za wstęp do zatoki Abu Dabbab",
//       "Codzienny odbiór i powrót do hotelu (Klimatyzowany pojazd)",
//       "Certyfikowany profesjonalny instruktor PADI"
//     ],
//     cz: [
//       "Prístupový kód k oficiálnímu PADI eLearning a materiály",
//       "Poplatky za zpracování certifikace PADI",
//       "Maximální poměr 2 studenti na 1 instruktora",
//       "Tréninky v mělkém prostředí z pláže",
//       "4 plné výcvikové ponory na otevřené vodě",
//       "Zapůjčení kompletní výstroje (neopren, žaket, automatika, maska, ploutve, lahve a zátěž)",
//       "Všechny vstupní poplatky na pláž Abu Dabbab",
//       "Denní vyzvednutí a návrat do hotelu (Klimatizovaný vůz)",
//       "Certifikovaný profesionální instruktor PADI"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Passport or official ID card",
//       "Swimwear & towel",
//       "Sunscreen (reef-safe preferred)",
//       "Hat & sunglasses",
//       "Personal medication if needed"
//     ],
//     de: [
//       "Reisepass oder offizieller Personalausweis",
//       "Badebekleidung & Handtuch",
//       "Sonnenschutz (rifftfreundlich bevorzugt)",
//       "Hut & Sonnenbrille",
//       "Persönliche Medikamente bei Bedarf"
//     ],
//     it: [
//       "Passaporto o carta d'identità ufficiale",
//       "Costume da bagno e asciugamano",
//       "Protezione solare (preferibilmente reef-safe)",
//       "Cappello e occhiali da sole",
//       "Farmaci personali se necessari"
//     ],
//     ru: [
//       "Паспорт или удостоверение личности",
//       "Купальник/плавки и полотенце",
//       "Солнцезащитный крем (желательно безопасный для рифов)",
//       "Головной убор и солнцезащитные очки",
//       "Личные медикаменты при необходимости"
//     ],
//     pl: [
//       "Paszport lub oficjalny dowód osobisty",
//       "Stroje kąpielowe i ręcznik",
//       "Krem z filtrem (najlepiej bezpieczny dla rafy)",
//       "Czapka i okulary przeciwsłoneczne",
//       "Leki osobiste w razie potrzeby"
//     ],
//     cz: [
//       "Cestovní pas nebo oficiální průkaz totožnosti",
//       "Plavky a ručník",
//       "Opalovací krém (šetrný k útesům)",
//       "Klobouk a sluneční brýle",
//       "Osobní léky v případě potřeby"
//     ]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Not allowed — Minimum age for PADI Open Water course is 10 years",
//       de: "Nicht erlaubt — Mindestalter für den PADI Open Water Kurs beträgt 10 Jahre",
//       it: "Non consentito — L'età minima per il corso PADI Open Water è 10 anni",
//       ru: "Не допускается — Минимальный возраст для курса PADI Open Water — 10 лет",
//       pl: "Niedozwolone — Minimalny wiek na kurs PADI Open Water to 10 lat",
//       cz: "Není povoleno — Minimální věk pro kurs PADI Open Water je 10 let"
//     },
//     from5to10: {
//       en: "Not allowed — Children must be at least 10 years old to start certification",
//       de: "Nicht erlaubt — Kinder müssen mindestens 10 Jahre alt sein",
//       it: "Non consentito — I bambini devono avere almeno 10 anni",
//       ru: "Не допускается — Детям должно исполниться 10 лет для начала обучения",
//       pl: "Niedozwolone — Dzieci muszą mieć ukończone co najmniej 10 lat",
//       cz: "Není povoleno — Dětem musí být minimálně 10 let"
//     },
//     over10: {
//       en: "Junior Open Water Diver (10–14 yrs): Full adult rate applies (Max depth 12m for 10-11 yrs / 18m for 12-14 yrs)",
//       de: "Junior Open Water Diver (10–14 J.): Voller Tarif (Max. Tiefe 12m für 10-11 J. / 18m für 12-14 J.)",
//       it: "Junior Open Water Diver (10–14 anni): Tariffa intera (Profondità max 12m per 10-11 anni / 18m per 12-14 anni)",
//       ru: "Junior Open Water Diver (10–14 лет): Полный тариф (Макс. глубина 12м для 10-11 лет / 18м для 12-14 лет)",
//       pl: "Junior Open Water Diver (10–14 lat): Pełna stawka (Maks. głębokość 12m dla 10-11 lat / 18m dla 12-14 lat)",
//       cz: "Junior Open Water Diver (10–14 let): Plná cena (Max. hloubka 12m pro 10-11 let / 18m pro 12-14 let)"
//     }
//   },
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Day 1: Theory & Confined Water — 08:00 AM",
//         de: "Tag 1: Theorie & Flachwasser — 08:00 Uhr",
//         it: "Giorno 1: Teoria e Acque Delimitate — 08:00",
//         ru: "День 1: Теория и практика на мелководье — 08:00",
//         pl: "Dzień 1: Teoria i płytka woda — 08:00",
//         cz: "Den 1: Teorie a mělká voda — 08:00"
//       },
//       description: {
//         en: "Pickup from hotel to Abu Dabbab Bay. Complete digital theory review, gear setup, breathing practice, mask clearing and buoyancy control in shallow water.",
//         de: "Abholung vom Hotel zur Abu Dabbab Bucht. Wiederholung der Theorie, Aufbau der Ausrüstung, Atemübungen und Tarierung im Flachwasser.",
//         it: "Pick-up dall'hotel per Abu Dabbab. Ripasso teoria, montaggio attrezzatura, respirazione e controllo dell'assetto in acqua bassa.",
//         ru: "Трансфер в Абу-Даббаб. Разбор теории, сборка снаряжения, упражнения на дыхание, очистка маски и плавучесть на мелководье.",
//         pl: "Odbiór z hotelu do Abu Dabbab. Przegląd teorii, montaż sprzętu, ćwiczenia oddechowe i kontrola pływalności w płytkiej wodzie.",
//         cz: "Vyzvednutí z hotelu do Abu Dabbab. Opakování teorie, příprava výstroje, dýchací cvičení a vyvážení v mělkém prostředí."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Day 2: Open Water Dives 1 & 2 — 08:00 AM",
//         de: "Tag 2: Freiwassertauchgänge 1 & 2 — 08:00 Uhr",
//         it: "Giorno 2: Immersioni 1 e 2 — 08:00",
//         ru: "День 2: Погружения 1 и 2 в открытой воде — 08:00",
//         pl: "Dzień 2: Nurkowania 1 i 2 na otwartej wodzie — 08:00",
//         cz: "Den 2: Ponory 1 a 2 na otevřené vodě — 08:00"
//       },
//       description: {
//         en: "First real ocean dives in Abu Dabbab Bay. Practice emergency procedures, navigation, and marine life exploration down to 12 metres.",
//         de: "Erste echte Tauchgänge in der Bucht von Abu Dabbab. Übung von Sicherheitsverfahren, Navigation und Erkundung der Unterwasserwelt bis 12m.",
//         it: "Prime vere immersioni nella baia di Abu Dabbab. Pratica di procedure d'emergenza, navigazione ed esplorazione del reef fino a 12 metri.",
//         ru: "Первые настоящие погружения в бухте Абу-Даббаб. Отработка аварийных навыков, навигация и исследование рифа до 12 метров.",
//         pl: "Pierwsze nurkowania w zatoce Abu Dabbab. Ćwiczenie procedur bezpieczeństwa, nawigacji i obserwacja rafy do 12 metrów.",
//         cz: "První opravdové ponory v zátoce Abu Dabbab. Nácvik bezpečnostních postupy, navigace a prozkoumávání útesu do 12 metrů."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Day 3: Open Water Dives 3 & 4 — 08:00 AM",
//         de: "Tag 3: Freiwassertauchgänge 3 & 4 — 08:00 Uhr",
//         it: "Giorno 3: Immersioni 3 e 4 — 08:00",
//         ru: "День 3: Погружения 3 и 4 в открытой воде — 08:00",
//         pl: "Dzień 3: Nurkowania 3 i 4 na otwartej wodzie — 08:00",
//         cz: "Den 3: Ponory 3 a 4 na otevřené vodě — 08:00"
//       },
//       description: {
//         en: "Final qualification dives down to maximum 18 metres. Demonstrate full skill mastery, buoyancy control and underwater communication.",
//         de: "Abschlusstauchgänge bis maximal 18 Meter. Beherrschung aller Fähigkeiten, Tarierung und Unterwasserkommunikation demonstrieren.",
//         it: "Immersioni finali di qualifica fino a 18 metri. Dimostrazione di piena padronanza delle abilità, assetto e comunicazione.",
//         ru: "Финальные погружения до 18 метров. Демонстрация всех навыков, идеального контроля плавучести и связи под водой.",
//         pl: "Finałowe nurkowania do 18 metrów. Demonstrowanie opanowania umiejętności, pływalności i komunikacji pod wodą.",
//         cz: "Závěrečné kvalifikační ponory do 18 metrů. Prokázání plného zvládnutí dovedností, vyvážení a podmořské komunikace."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Day 4: Optional Day / Certification — Flexible",
//         de: "Tag 4: Optionaler Tag / Zertifizierung — Flexibel",
//         it: "Giorno 4: Giorno Opzionale / Certificazione — Flessibile",
//         ru: "День 4: Дополнительный день / Сертификация — По графику",
//         pl: "Dzień 4: Dzień opcjonalny / Certyfikacja — Elastycznie",
//         cz: "Den 4: Volitelný den / Certifikace — Flexibilní"
//       },
//       description: {
//         en: "Buffer day for additional skill practice if needed, logging dives, and processing your official lifetime PADI Open Water Diver e-Card.",
//         de: "Puffertag für zusätzliche Übungen bei Bedarf, Logbuchführen und Ausstellung Ihrer offiziellen PADI e-Card.",
//         it: "Giorno di margine per eventuale pratica extra, compilazione logbook e rilascio del brevetto digitale ufficiale PADI.",
//         ru: "Резервный день для дополнительной практики при необходимости, заполнения логбука и получения официального e-Card PADI.",
//         pl: "Dzień zapasowy na dodatkowe ćwiczenia w razie potrzeby, wpisy do logbooka i wydanie oficjalnej e-Karty PADI.",
//         cz: "Rezervní den pro případný dodatečný nácvik, zápis do logbooku a vystavení oficiální e-Karty PADI."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Flexible Payment Plan: €200 paid after successfully completing Day 1. Remaining €220 paid upon final course completion. No online deposit required.",
//     de: "Flexibler Zahlungsplan: 200 € nach erfolgreichem Abschluss von Tag 1. Die restlichen 220 € nach Kursabschluss. Keine Online-Anzahlung.",
//     it: "Pagamento flessibile: €200 pagati dopo il completamento del 1° giorno. I restanti €220 al completamento del corso. Nessun deposito online.",
//     ru: "Гибкая оплата: 200 € оплачиваются после 1-го дня. Оставшиеся 220 € — после завершения курса. Без предоплаты.",
//     pl: "Elastyczna płatność: 200 € po ukończeniu 1. dnia. Pozostałe 220 € po ukończeniu całego kursu. Bez zaliczek online.",
//     cz: "Flexibilní platba: 200 € po úspěšném dokončení 1. dne. Zbývajících 220 € po dokončení kurzu. Bez zálohy."
//   },
//   disclaimer: {
//     en: "Students must be comfortable in the water and meet medical fitness standards. PADI Open Water Diver is a complete certification course and dives cannot be sold as separate daily trips. Instructor holds full authority to modify schedule based on student progress or weather.",
//     de: "Schüler müssen schwimmsicher sein und medizinische Voraussetzungen erfüllen. Der Kurs ist ein komplettes Zertifizierungsprogramm. Der Tauchlehrer kann den Zeitplan je nach Lernfortschritt oder Wetter anpassen.",
//     it: "Gli studenti devono saper nuotare e soddisfare i requisiti medici. Il corso è un programma completo. L'istruttore si riserva il diritto di modificare il programma in base ai progressi o al meteo.",
//     ru: "Студенты должны уметь плавать и соответствовать медицинским требованиям. Курс является целостной программой. Инструктор вправе менять график исходя из успехов ученика или погоды.",
//     pl: "Uczestnicy muszą umieć pływać i spełniać wymogi medyczne. Kurs jest pełnym programem certyfikacyjnym. Instruktor ma prawo dostosować harmonogram do postępów lub pogody.",
//     cz: "Studenti musí umět plavat a splňovat zdravotní způsobilost. Kurz je ucelený program. Instruktor má právo upravit harmonogram podle pokroků studenta nebo počasí."
//   },
//   images: {
//     featured: "/images/tours/padi-open-water.webp",
//     gallery: [
//       "/images/tours/padi-open-water-1.webp",
//       "/images/tours/padi-open-water-2.webp",
//       "/images/tours/padi-open-water-3.webp"
//     ]
//   }
// },
// {
//   id: "padi-advanced-open-water-diver",
//   slug: "padi-advanced-open-water-diver-course",
//   type: "course",
//   title: {
//     en: "PADI Advanced Open Water Diver Course",
//     de: "PADI Advanced Open Water Diver Kurs",
//     it: "Corso PADI Advanced Open Water Diver",
//     ru: "Курс PADI Advanced Open Water Diver",
//     pl: "Kurs PADI Advanced Open Water Diver",
//     cz: "Kurz PADI Advanced Open Water Diver"
//   },
//   subtitle: {
//     en: "Premium Small-Group Advanced Course (6 Dives & Dolphin House Boat Trip)",
//     de: "Premium-Fortgeschrittenenkurs in kleinen Gruppen (6 Tauchgänge & Dolphin House Bootsausflug)",
//     it: "Corso Avanzato Premium in Piccoli Gruppi (6 Immersioni e Gita in Barca a Dolphin House)",
//     ru: "Премиум-курс для продвинутых в малых группах (6 погружений и выезд в Dolphin House)",
//     pl: "Zaawansowany kurs premium w małych grupach (6 nurkowań i rejs do Dolphin House)",
//     cz: "Pokročilý kurz premium v malých skupinách (6 ponorů a výlet lodí do Dolphin House)"
//   },
//   category: {
//     en: "Diving Courses",
//     de: "Tauchkurse",
//     it: "Corsi Subacquei",
//     ru: "Курсы Дайвинга",
//     pl: "Kursy Nurkowe",
//     cz: "Potápěčské Kurzy"
//   },
//   price: {
//     amount: 400,
//     currency: "€",
//     unit: {
//       en: "per person (6 Dives, Boat Trip & Full Gear Included)",
//       de: "pro Person (6 Tauchgänge, Bootsfahrt & Ausrüstung inklusive)",
//       it: "per persona (6 Immersioni, Gita in Barca e Attrezzatura Inclusi)",
//       ru: "за человека (6 погружений, прогулка на корабле и снаряжение включены)",
//       pl: "za osobę (6 nurkowań, rejs i sprzęt w cenie)",
//       cz: "za osobu (6 ponorů, výlet lodí a výstroj v ceně)"
//     }
//   },
//   duration: {
//     en: "2 Days (Shore & Boat Experience)",
//     de: "2 Tage (Strand- & Bootserlebnis)",
//     it: "2 Giorni (Esperienza da Riva e Barca)",
//     ru: "2 Дня (с берега и с корабля)",
//     pl: "2 Dni (Z brzegu i z łodzi)",
//     cz: "2 Dny (Z pláže i z lodi)"
//   },
//   departure: {
//     en: "Abu Dabbab Bay & Dolphin House (Samadai Reef)",
//     de: "Abu Dabbab Bucht & Dolphin House (Samadai Riff)",
//     it: "Baia di Abu Dabbab e Dolphin House (Samadai Reef)",
//     ru: "Бухта Абу-Дабаб и Dolphin House (Риф Самадай)",
//     pl: "Zatoka Abu Dabbab i Dolphin House (Rafa Samadai)",
//     cz: "Zátoka Abu Dabbab a Dolphin House (Útes Samadai)"
//   },
//   overview: {
//     en: "Take your diving to the next level with the PADI Advanced Open Water Diver course. Complete 5 Adventure Dives (Peak Buoyancy, Navigation, Deep, Boat & Drift, Underwater Exploration) plus 1 extra guided dive—combining shore diving at Abu Dabbab Bay and boat diving at Dolphin House (Samadai) with maximum 2 students per instructor.",
//     de: "Bringen Sie Ihr Tauchen auf das nächste Level mit dem PADI Advanced Open Water Diver Kurs. Absolvieren Sie 5 Adventure-Tauchgänge plus 1 zusätzlichen geführten Tauchgang – eine Kombination aus Strandtauchen in Abu Dabbab und Bootstauchen im Dolphin House (Samadai) mit max. 2 Schülern pro Tauchlehrer.",
//     it: "Porta la tua subacquea al livello successivo con il corso PADI Advanced Open Water Diver. Completa 5 Adventure Dives più 1 immersione guidata extra, unendo immersioni da riva a Abu Dabbab e in barca a Dolphin House (Samadai) con massimo 2 studenti per istruttore.",
//     ru: "Поднимите свой дайвинг на новый уровень с курсом PADI Advanced Open Water Diver. Пройдите 5 специализированных погружений и 1 дополнительное с гидом, совмещая погружения с берега в Абу-Даббаб и с корабля в Dolphin House (Самадай) при макс. 2 студентах на инструктора.",
//     pl: "Wejdź na wyższy poziom nurkowania z kursem PADI Advanced Open Water Diver. Ukończ 5 nurkowań przygodowych oraz 1 dodatkowe nurkowanie z przewodnikiem, łącząc nurkowanie z brzegu w Abu Dabbab i z łodzi w Dolphin House (Samadai) z maks. 2 studentami na instruktora.",
//     cz: "Posuňte své potápění na vyšší úroveň s kurzem PADI Advanced Open Water Diver. Dokončete 5 dobrodružných ponorů a 1 dodatečný ponor s průvodcem, kombinující potápění z pláže v Abu Dabbab a z lodi v Dolphin House (Samadai) s max. 2 studenty na instruktora."
//   },
//   highlights: {
//     en: [
//       "Maximum 2 students per instructor for personalized instruction",
//       "Includes 6 guided dives in total (5 Adventure Dives + 1 Extra Dive)",
//       "Deep Dive experience down to maximum 30 metres",
//       "Full-day boat trip to Dolphin House (Samadai Reef) with buffet lunch",
//       "Shore diving skills practice at Abu Dabbab Bay",
//       "Official PADI Advanced eLearning digital materials included",
//       "Full high-quality equipment rental & navigation compass included",
//       "Marine Park fees & hotel pickup/drop-off fully covered"
//     ],
//     de: [
//       "Maximal 2 Schüler pro Tauchlehrer für persönliche Betreuung",
//       "Inklusive 6 geführte Tauchgänge insgesamt (5 Adventure-Tauchgänge + 1 Extra)",
//       "Tieftaucherfahrung bis maximal 30 Meter",
//       "Ganztägiger Bootsausflug zum Dolphin House (Samadai Riff) inkl. Mittagessen",
//       "Fähigkeitstraining vom Strand in der Abu Dabbab Bucht",
//       "Offizielles digitales PADI Advanced eLearning-Material inklusive",
//       "Komplette hochwertige Ausrüstung & Navigationskompass inklusive",
//       "Meerespark-Gebühren & Hotel-Transfer vollständig abgedeckt"
//     ],
//     it: [
//       "Massimo 2 studenti per istruttore per un insegnamento personalizzato",
//       "Include 6 immersioni guidate in totale (5 Adventure Dives + 1 Extra)",
//       "Esperienza di immersione profonda fino a un massimo di 30 metri",
//       "Gita in barca di un giorno intero a Dolphin House (Samadai) con pranzo a buffet",
//       "Pratica delle abilità da riva nella baia di Abu Dabbab",
//       "Materiali digitali ufficiali PADI Advanced eLearning inclusi",
//       "Noleggio attrezzatura completa di alta qualità e bussola inclusi",
//       "Tasse del Parco Marino e transfer da/per l'hotel inclusi"
//     ],
//     ru: [
//       "Максимум 2 студента на инструктора для персонального обучения",
//       "Включает 6 погружений с гидом (5 учебных + 1 дополнительное)",
//       "Опыт глубоководного погружения на глубину до 30 метров",
//       "Полнодневная прогулка на корабле в Dolphin House (Самадай) с обедом",
//       "Практика навыков с берега в бухте Абу-Даббаб",
//       "Официальные цифровые учебные материалы PADI Advanced eLearning",
//       "Полная аренда высококачественного снаряжения и компаса включена",
//       "Сборы морского заповедника и трансфер из/в отель включены"
//     ],
//     pl: [
//       "Maksymalnie 2 studentów na instruktora dla spersonalizowanej nauki",
//       "Łącznie 6 nurkowań z przewodnikiem (5 nurkowań przygodowych + 1 extra)",
//       "Głębokie nurkowanie do maksymalnie 30 metrów",
//       "Całodniowy rejs do Dolphin House (Rafa Samadai) z obiadami w formie bufetu",
//       "Praktyka umiejętności z brzegu w Zatoce Abu Dabbab",
//       "Oficjalny PADI Advanced eLearning w cenie",
//       "Pełne wypożyczenie wysokiej jakości sprzętu i kompasu w cenie",
//       "Opłaty за Park Morski oraz transfer z/do hotelu w cenie"
//     ],
//     cz: [
//       "Maximálně 2 studenti na instruktora pro osobní přístup",
//       "Zahrnuje celkem 6 ponorů s průvodcem (5 dobrodružných + 1 extra)",
//       "Zkušenost s hloubkovým ponorem až do 30 metrů",
//       "Celodenní výlet lodí do Dolphin House (Útes Samadai) s obědem",
//       "Trénink dovedností z pláže v zátoce Abu Dabbab",
//       "Oficiální digitální materiály PADI Advanced eLearning v ceně",
//       "Zapůjčení kompletního kvalitního vybavení a kompasu v ceně",
//       "Poplatky za mořský park a transfery z/do hotelu v ceně"
//     ]
//   },
//   included: {
//     en: [
//       "Official PADI Advanced eLearning access & certification fees",
//       "Maximum 2:1 student-to-instructor ratio",
//       "5 Required PADI Adventure Dives + 1 additional guided dive (6 total)",
//       "Day 1: Shore diving at Abu Dabbab Bay",
//       "Day 2: Full-day boat cruise to Dolphin House (Samadai Reef)",
//       "Buffet lunch, soft drinks & mineral water on Day 2 boat trip",
//       "Samadai Marine Park protection fees",
//       "Full rental equipment (wetsuit, BCD, regulator, mask, fins, tanks, weights)",
//       "Underwater navigation compass & dive equipment",
//       "Round-trip hotel transfers in A/C vehicle",
//       "Professional certified PADI Instructor"
//     ],
//     de: [
//       "Offizieller PADI Advanced eLearning-Zugang & Zertifizierungsgebühren",
//       "Betreuungsverhältnis von max. 2 Schülern pro Tauchlehrer",
//       "5 PADI Adventure-Tauchgänge + 1 zusätzlicher geführter Tauchgang (6 gesamt)",
//       "Tag 1: Strandtauchen in der Bucht von Abu Dabbab",
//       "Tag 2: Ganztägige Bootsfahrt zum Dolphin House (Samadai Riff)",
//       "Mittagsbuffet, Erfrischungsgetränke & Mineralwasser am Tag 2 auf dem Boot",
//       "Samadai Meerespark-Schutzgebühren",
//       "Komplette Ausrüstung (Neoprenanzug, Tarrierweste, Atemregler, Maske, Flossen, Flaschen, Blei)",
//       "Unterwasser-Navigationskompass & Zubehör",
//       "Hin- und Rücktransfer vom Hotel im klimatisierten Fahrzeug",
//       "Zertifizierter professioneller PADI Tauchlehrer"
//     ],
//     it: [
//       "Accesso PADI Advanced eLearning ufficiale e tasse di certificazione",
//       "Rapporto massimo 2 studenti per istruttore",
//       "5 PADI Adventure Dives obbligatorie + 1 immersione guidata extra (6 in totale)",
//       "Giorno 1: Immersioni da riva nella baia di Abu Dabbab",
//       "Giorno 2: Crociera giornaliera in barca a Dolphin House (Samadai Reef)",
//       "Pranzo a buffet, bevande analcoliche e acqua minerale in barca il 2° giorno",
//       "Tasse del Parco Marino di Samadai",
//       "Attrezzatura completa a noleggio (muta, BCD, erogatore, maschera, pinne, bombole, zavorra)",
//       "Bussola per navigazione subacquea",
//       "Trasferimento A/R dall'hotel in veicolo climatizzato",
//       "Istruttore subacqueo PADI professionista certificato"
//     ],
//     ru: [
//       "Доступ к PADI Advanced eLearning и сборы за оформление сертификата",
//       "Максимальное соотношение: 2 студента на 1 инструктора",
//       "5 обязательных погружений Adventure Dives + 1 дополнительное (всего 6)",
//       "День 1: Погружения с берега в бухте Абу-Даббаб",
//       "День 2: Полнодневная прогулка на яхте в Dolphin House (Риф Самадай)",
//       "Обед 'шведский стол', безалкогольные напитки и вода на яхте во 2-й день",
//       "Сборы за посещение заповедника Самадай",
//       "Полная аренда снаряжения (гидрокостюм, BCD, регулятор, маска, ласты, баллоны, грузы)",
//       "Подводный компас для навигации",
//       "Трансфер из отеля и обратно на авто с кондиционером",
//       "Сертифицированный профессиональный инструктор PADI"
//     ],
//     pl: [
//       "Oficjalny dostęp do PADI Advanced eLearning i opłaty certyfikacyjne",
//       "Maksymalnie 2 studentów na 1 instruktora",
//       "5 wymaganych nurkowań PADI Adventure + 1 dodatkowe z przewodnikiem (łącznie 6)",
//       "Dzień 1: Nurkowanie z brzegu w Zatoce Abu Dabbab",
//       "Dzień 2: Całodniowy rejs statkiem do Dolphin House (Rafa Samadai)",
//       "Obiad w formie bufetu, napoje i woda mineralna na łodzi w 2. dniu",
//       "Opłaty za wstęp do Parku Morskiego Samadai",
//       "Pełne wypożyczenie sprzętu (pianka, JKR, automat, maska, płetwy, butle, balast)",
//       "Kompas do nawigacji podwodnej",
//       "Odbiór i powrót do hotelu klimatyzowanym pojazdem",
//       "Certyfikowany profesjonalny instruktor PADI"
//     ],
//     cz: [
//       "Oficiální přístup k PADI Advanced eLearning a certifikační poplatky",
//       "Maximální poměr 2 studenti na 1 instruktora",
//       "5 povinných ponorů PADI Adventure + 1 dodatečný ponor s průvodcem (celkem 6)",
//       "Den 1: Potápění z pláže v zátoce Abu Dabbab",
//       "Den 2: Celodenní plavba lodí do Dolphin House (Útes Samadai)",
//       "Oběd formou bufetu, nealkoholické nápoje a voda na lodi 2. den",
//       "Poplatky za vstup do mořského parku Samadai",
//       "Zapůjčení kompletní výstroje (neopren, žaket, automatika, maska, ploutve, lahve, zátěž)",
//       "Kompas pro podmořskou navigaci",
//       "Zpáteční transfery z hotelu klimatizovaným vozem",
//       "Certifikovaný profesionální instruktor PADI"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "PADI Open Water Diver certification card (Digital copy accepted)",
//       "Diving Logbook (digital or physical)",
//       "Confirmation of PADI Advanced eLearning completion",
//       "Passport or official ID",
//       "Swimwear & towel",
//       "Dry clothes",
//       "Reef-safe sunscreen",
//       "Hat & sunglasses",
//       "Personal medication if needed"
//     ],
//     de: [
//       "PADI Open Water Diver Brevet (Digitale Kopie akzeptiert)",
//       "Tauchlogbuch (digital oder physisch)",
//       "Bestätigung über den Abschluss des PADI Advanced eLearning",
//       "Reisepass oder offizieller Personalausweis",
//       "Badebekleidung & Handtuch",
//       "Trockene Kleidung",
//       "Riff-freundliche Sonnencreme",
//       "Hut & Sonnenbrille",
//       "Persönliche Medikamente bei Bedarf"
//     ],
//     it: [
//       "Brevetto PADI Open Water Diver (Accettata copia digitale)",
//       "Logbook subacqueo (digitale o fisico)",
//       "Conferma del completamento del PADI Advanced eLearning",
//       "Passaporto o documento d'identità",
//       "Costume da bagno e asciugamano",
//       "Abiti asciutti",
//       "Protezione solare reef-safe",
//       "Cappello e occhiali da sole",
//       "Farmaci personali se necessari"
//     ],
//     ru: [
//       "Сертификат PADI Open Water Diver (Принимается цифровая копия)",
//       "Дайверский логбук (цифровой или бумажный)",
//       "Подтверждение прохождения PADI Advanced eLearning",
//       "Паспорт или удостоверение личности",
//       "Купальник/плавки и полотенце",
//       "Сухая одежда",
//       "Солнцезащитный крем (безопасный для рифов)",
//       "Головной убор и очки",
//       "Личные медикаменты"
//     ],
//     pl: [
//       "Certyfikat PADI Open Water Diver (Akceptowana kopia cyfrowa)",
//       "Logbook nurkowy (cyfrowy lub fizyczny)",
//       "Potwierdzenie ukończenia PADI Advanced eLearning",
//       "Paszport lub dowód osobisty",
//       "Stroje kąpielowe i ręcznik",
//       "Suche ubrania na zmianę",
//       "Krem z filtrem bezpieczny dla rafy",
//       "Czapka i okulary przeciwsłoneczne",
//       "Leki osobiste w razie potrzeby"
//     ],
//     cz: [
//       "Certifikace PADI Open Water Diver (Akceptována digitální kopie)",
//       "Potápěčský logbook (digitální nebo fyzický)",
//       "Potvrzení o dokončení PADI Advanced eLearning",
//       "Cestovní pas nebo průkaz totožnosti",
//       "Plavky a ručník",
//       "Suché oblečení",
//       "Opalovací krém šetrný k útesům",
//       "Klobouk a sluneční brýle",
//       "Osobní léky v případě potřeby"
//     ]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Not allowed — Minimum age for PADI Advanced course is 12 years",
//       de: "Nicht erlaubt — Mindestalter für den PADI Advanced Kurs beträgt 12 Jahre",
//       it: "Non consentito — L'età minima per il corso PADI Advanced è 12 anni",
//       ru: "Не допускается — Минимальный возраст для курса PADI Advanced — 12 лет",
//       pl: "Niedozwolone — Minimalny wiek na kurs PADI Advanced to 12 lat",
//       cz: "Není povoleno — Minimální věk pro kurz PADI Advanced je 12 let"
//     },
//     from5to10: {
//       en: "Not allowed — Must be at least 12 years old and hold Open Water Diver certification",
//       de: "Nicht erlaubt — Mindestalter 12 Jahre und Open Water Zertifizierung erforderlich",
//       it: "Non consentito — Richiesti almeno 12 anni e brevetto Open Water Diver",
//       ru: "Не допускается — Требуется возраст от 12 лет и наличие сертификата Open Water",
//       pl: "Niedozwolone — Wymagane ukończone 12 lat i certyfikat Open Water Diver",
//       cz: "Není povoleno — Vyžadován věk minimálně 12 let a certifikace Open Water Diver"
//     },
//     over10: {
//       en: "Junior Advanced Open Water Diver (12–14 yrs): Full adult rate applies (Max depth limit 21m for 12-14 yrs / 30m for 15+ yrs)",
//       de: "Junior Advanced Open Water Diver (12–14 J.): Voller Tarif (Max. Tiefe 21m für 12-14 J. / 30m ab 15 J.)",
//       it: "Junior Advanced Open Water Diver (12–14 anni): Tariffa intera (Profondità max 21m per 12-14 anni / 30m dai 15 anni)",
//       ru: "Junior Advanced Open Water Diver (12–14 лет): Полный тариф (Макс. глубина 21м для 12-14 лет / 30м для 15+ лет)",
//       pl: "Junior Advanced Open Water Diver (12–14 lat): Pełna stawka (Maks. głębokość 21m dla 12-14 lat / 30m dla 15+ lat)",
//       cz: "Junior Advanced Open Water Diver (12–14 let): Plná cena (Max. hloubková hranice 21m pro 12-14 let / 30m pro 15+ let)"
//     }
//   },
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Day 1: Abu Dabbab Shore Training — 08:00 AM",
//         de: "Tag 1: Abu Dabbab Strandtraining — 08:00 Uhr",
//         it: "Giorno 1: Addestramento da Riva a Abu Dabbab — 08:00",
//         ru: "День 1: Тренировки с берега в Абу-Даббаб — 08:00",
//         pl: "Dzień 1: Szkolenie z brzegu w Abu Dabbab — 08:00",
//         cz: "Den 1: Trénink z pláže v Abu Dabbab — 08:00"
//       },
//       description: {
//         en: "Hotel pickup & transfer to Abu Dabbab. Briefing followed by Peak Performance Buoyancy Adventure Dive and Underwater Navigation Adventure Dive.",
//         de: "Hotelabholung & Transfer nach Abu Dabbab. Briefing, gefolgt vom Tarierung in Perfektion- & Unterwasser-Navigations-Tauchgang.",
//         it: "Pick-up dall'hotel e transfer a Abu Dabbab. Briefing seguito da Adventure Dives di Assetto e Navigazione Subacquea.",
//         ru: "Трансфер из отеля в Абу-Даббаб. Брифинг, погружение на отработку идеальной плавучести и погружение по подводной навигации.",
//         pl: "Odbiór z hotelu i transfer do Abu Dabbab. Odprawa, a następnie nurkowania przygodowe: Doskonała Pływalność i Nawigacja Podwodna.",
//         cz: "Vyzvednutí v hotelu a transfer do Abu Dabbab. Briefing a následně ponory: Dokonalé vyvážení a Podmořská navigace."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Day 2: Dolphin House Boat Expedition — 07:00 AM",
//         de: "Tag 2: Bootsausflug zum Dolphin House — 07:00 Uhr",
//         it: "Giorno 2: Spedizione in Barca a Dolphin House — 07:00",
//         ru: "День 2: Морская экспедиция в Dolphin House — 07:00",
//         pl: "Dzień 2: Wycieczka statkiem do Dolphin House — 07:00",
//         cz: "Den 2: Výprava lodí do Dolphin House — 07:00"
//       },
//       description: {
//         en: "Transfer to marina and sail to Samadai Reef (Dolphin House). Complete Deep Adventure Dive (up to 30m), Boat & Drift Dive, Underwater Exploration Dive, plus 1 additional guided dive.",
//         de: "Transfer zur Marina und Fahrt zum Samadai Riff. Absolvierung von Tieftauchen (bis 30m), Boots- & Strömungstauchen, Unterwasser-Erkundung sowie 1 zusätzlichen geführten Tauchgang.",
//         it: "Trasferimento al marina e navigazione verso Samadai Reef. Immersioni: Profonda (fino a 30m), Barca e Corrente, Esplorazione Subacquea + 1 immersione guidata extra.",
//         ru: "Трансфер в марину и выход в море к рифу Самадай. Глубоководное погружение (до 30м), погружение с дрейфом, исследование рифа и 1 дополнительное погружение.",
//         pl: "Transfer do przystani i rejs na Rafę Samadai. Nurkowanie głębokie (do 30m), z łodzi/w prądzie, eksploracyjne oraz 1 dodatkowe nurkowanie z przewodnikiem.",
//         cz: "Transfer do maríny a plavba na útes Samadai. Hloubkový ponor (až 30m), ponor z lodi v proudu, průzkumný ponor a 1 dodatečný ponor s průvodcem."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Onboard Buffet Lunch & Relaxation — 01:00 PM",
//         de: "Mittagsbuffet an Bord & Entspannung — 13:00 Uhr",
//         it: "Pranzo a Buffet a Bordo e Relax — 13:00",
//         ru: "Обед 'шведский стол' на корабле и отдых — 13:00",
//         pl: "Obiad w formie bufetu na łodzi i relaks — 13:00",
//         cz: "Oběd formou bufetu na lodi a relaxace — 13:00"
//       },
//       description: {
//         en: "Enjoy freshly prepared lunch and refreshments on the boat deck, log your dives with your instructor, and relax during the return cruise.",
//         de: "Genießen Sie ein frisch zubereitetes Mittagessen und Erfrischungen an Bord, tragen Sie die Tauchgänge ins Logbuch ein und entspannen Sie auf der Rückfahrt.",
//         it: "Gusta un pranzo fresco e rinfreschi sul ponte della barca, compila il logbook con l'istruttore e rilassati durante il rientro.",
//         ru: "Свежеприготовленный обед и напитки на палубе, заполнение логбука с инструктором и отдых во время обратного пути.",
//         pl: "Ciesz się świeżo przygotowanym obiadem i napojami na pokładzie, uzupełnij logbook z instruktorem i zrelaksuj się w drodze powrotnej.",
//         cz: "Užijte si čerstvě připravený oběd a občerstvení na palubě, zapište ponory do logbooku s instruktorem a relaxujte během plavby zpět."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Return & Certification — 02:30 PM",
//         de: "Rückkehr & Zertifizierung — 14:30 Uhr",
//         it: "Rientro e Certificazione — 14:30",
//         ru: "Возвращение и сертификация — 14:30",
//         pl: "Powrót i certyfikacja — 14:30",
//         cz: "Návrat a certifikace — 14:30"
//       },
//       description: {
//         en: "Return to the marina, review final skills performance, process your official lifetime PADI Advanced Open Water Diver certification and transfer back to hotel.",
//         de: "Ankunft in der Marina, Auswertung der Leistungen, Ausstellung der offiziellen PADI Advanced e-Card und Rücktransfer zum Hotel.",
//         it: "Rientro al marina, debriefing finale, elaborazione del brevetto ufficiale PADI Advanced e transfer di ritorno in hotel.",
//         ru: "Возвращение в марину, финальный дебрифинг, оформление официального сертификата PADI Advanced e-Card и трансфер в отель.",
//         pl: "Powrót do przystani, podsumowanie wyników, wydanie oficjalnego certyfikatu PADI Advanced i transfer powrotny do hotelu.",
//         cz: "Návrat do maríny, závěrečné vyhodnocení, vystavení oficiální e-Karty PADI Advanced a transfer zpět do hotelu."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Flexible Payment Terms: €200 paid after completing Day 1. Remaining €200 paid upon full course completion on Day 2. No online payment or deposit required. Custom discount applied if you bring your own equipment.",
//     de: "Flexibles Zahlungsmodell: 200 € nach Tag 1. Die restlichen 200 € nach Abschluss des Kurses an Tag 2. Keine Online-Anzahlung erforderlich. Rabatt bei eigener Ausrüstung.",
//     it: "Pagamento Flessibile: €200 pagati dopo il 1° giorno. I restanti €200 al completamento del corso il 2° giorno. Nessun acconto online richiesto. Sconto se porti la tua attrezzatura.",
//     ru: "Гибкая оплата: 200 € оплачиваются после 1-го дня. Оставшиеся 200 € — после полного завершения курса во 2-й день. Без предоплаты. Скидка при наличии своего снаряжения.",
//     pl: "Elastyczna płatność: 200 € po ukończeniu 1. dnia. Pozostałe 200 € po ukończeniu kursu w 2. dniu. Bez zaliczek online. Zniżka przy własnym sprzęcie.",
//     cz: "Flexibilní platba: 200 € po dokončení 1. dne. Zbývajících 200 € po dokončení kurzu 2. den. Bez zálohy. Při vlastním vybavení bude uplatněna sleva."
//   },
//   disclaimer: {
//     en: "Prerequisite: Must hold a PADI Open Water Diver certification (or equivalent). Complete certification program consisting of 6 dives total. Schedule and dive sites may be modified by instructor depending on weather, visibility, currents and safety conditions.",
//     de: "Voraussetzung: PADI Open Water Diver Zertifikat (oder Äquivalent). Vollständiges Zertifizierungsprogramm mit 6 Tauchgängen. Der Tauchlehrer kann den Ablauf je nach Wetter, Sicht und Strömung anpassen.",
//     it: "Prerequisito: Requisito di brevetto PADI Open Water Diver (o equivalente). Programma di certificazione completo di 6 immersioni. L'istruttore può modificare l'itinerario in base alle condizioni meteo e di sicurezza.",
//     ru: "Предварительные требования: Наличие сертификата PADI Open Water Diver (или аналога). Полный курс из 6 погружений. Маршрут и график могут быть изменены инструктором в зависимости от погоды и условий в море.",
//     pl: "Wymagania wstępne: Certyfikat PADI Open Water Diver (lub odpowiednik). Pełny program certyfikacyjny obejmujący 6 nurkowań. Instruktor zastrzega sobie prawo do zmiany harmonogramu ze względów bezpieczeństwa lub pogodowych.",
//     cz: "Předpoklad: Certifikace PADI Open Water Diver (nebo ekvivalent). Ucelený certifikační program obsahující celkem 6 ponorů. Instruktor může upravit harmonogram podle počasí, viditelnosti a mořských proudů."
//   },
//   images: {
//     featured: "/images/tours/padi-advanced-open-water.webp",
//     gallery: [
//       "/images/tours/padi-advanced-open-water-1.webp",
//       "/images/tours/padi-advanced-open-water-2.webp",
//       "/images/tours/padi-advanced-open-water-3.png"
//     ]
//   }
// },
// // city tours
// {
//   id: "private-luxor-day-trip",
//   slug: "private-luxor-day-trip-from-marsa-alam",
//   type: "city-tours", 
//   title: {
//     en: "Private Luxor Day Trip from Marsa Alam",
//     de: "Privater Tagesausflug nach Luxor von Marsa Alam",
//     it: "Escursione Privata a Luxor da Marsa Alam",
//     ru: "Частная экскурсия в Луксор из Марса-Алам",
//     pl: "Prywatna wycieczka do Luksoru z Marsa Alam",
//     cz: "Soukromý celodenní výlet do Luxoru z Marsa Alam"
//   },
//   subtitle: {
//     en: "Full-Day Private Guided Tour to Ancient Thebes (East & West Banks)",
//     de: "Ganztägige private Führung durch das antike Theben (Ost- & Westufer)",
//     it: "Tour Privato con Guida per l'Intera Giornata all'Antica Tebe (Riva Est e Ovest)",
//     ru: "Частный однодневный тур с гидом по древним Фивам (Восточный и Западный берег)",
//     pl: "Prywatna całodniowa wycieczka z przewodnikiem do starożytnych Teb (Wschodni i Zachodni Brzeg)",
//     cz: "Soukromá celodenní prohlídka starověkých Théb s průvodcem (Východní a Západní břeh)"
//   },
//   category: {
//     en: "City Tours",
//     de: "Städtereisen & Kultur",
//     it: "Tour delle Città",
//     ru: "Экскурсии по Городам",
//     pl: "Wycieczki Miejskie",
//     cz: "Městské Tours"
//   },
//   price: {
//     amount: 170,
//     currency: "€",
//     unit: {
//       en: "per person (Private Vehicle & Egyptologist Included - Min. 2 Persons)",
//       de: "pro Person (Privatfahrzeug & Ägyptologe inklusive - Mind. 2 Personen)",
//       it: "per persona (Veicolo Privato ed Egittologo Inclusi - Min. 2 Persone)",
//       ru: "за человека (Частный авто и гид-египтолог включены - Мин. 2 человека)",
//       pl: "za osobę (Prywatny pojazd i egiptolog w cenie - Min. 2 osoby)",
//       cz: "za osobu (Soukromé auto a egyptolog v ceně - Min. 2 osoby)"
//     }
//   },
//   duration: {
//     en: "Full Day (Approx. 3:00 AM – 9:00 PM)",
//     de: "Ganztägig (ca. 03:00 bis 21:00 Uhr)",
//     it: "Intera Giornata (Circa 3:00 – 21:00)",
//     ru: "Целый день (Прибл. с 3:00 до 21:00)",
//     pl: "Cały dzień (Około 3:00 – 21:00)",
//     cz: "Celý den (Cca 3:00 – 21:00)"
//   },
//   departure: {
//     en: "Marsa Alam Hotels (Private Pick-up)",
//     de: "Hotels in Marsa Alam (Private Abholung)",
//     it: "Hotel di Marsa Alam (Pick-up Privato)",
//     ru: "Отели Марса-Алам (Частный трансфер)",
//     pl: "Hotele w Marsa Alam (Prywatny odbiór)",
//     cz: "Hotely v Marsa Alam (Soukromý odvoz)"
//   },
//   overview: {
//     en: "Travel from Marsa Alam to Luxor and discover the ultimate highlights of ancient Egypt with a dedicated private Egyptologist guide and private AC vehicle, exploring both the East and West Banks of the Nile including Karnak, Valley of the Kings, and Hatshepsut Temple.",
//     de: "Reisen Sie von Marsa Alam nach Luxor und entdecken Sie die Höhepunkte des antiken Ägyptens mit einem privaten Reiseleiter und Privatfahrzeug. Erkunden Sie das Ost- und Westufer des Nils, einschließlich Karnak, dem Tal der Könige und dem Hatschepsut-Tempel.",
//     it: "Viaggia da Marsa Alam a Luxor e scopri le meraviglie dell'antico Egitto con una guida egittologa privata e un veicolo climatizzato riservato. Esplora le sponde Est e Ovest del Nilo, inclusi Karnak, la Valle dei Re e il Tempio di Hatshepsut.",
//     ru: "Отправьтесь из Марса-Алам в Луксор и откройте для себя главные сокровища Древнего Египта с персональным гидом-египтологом и частным авто. Вы посетите Восточный и Западный берега Нила, Карнакский храм, Долину Царей и храм Хатшепсут.",
//     pl: "Podróżuj z Marsa Alam do Luksoru i odkryj najważniejsze zabytki starożytnego Egiptu z prywatnym przewodnikiem-egiptologiem i prywatnym pojazdem, zwiedzając Wschodni i Zachodni Brzeg Nilu (Karnak, Dolina Królów, Świątynia Hatszepsut).",
//     cz: "Cestujte z Marsa Alam do Luxoru a objevte nejvýznamnější památky starověkého Egypta s privátním průvodcem-egyptologem a soukromým vozem. Prozkoumejte Východní i Západní břeh Nilu včetně Karnaku, Údolí králů a chrámu Hatšepsut."
//   },
//   highlights: {
//     en: [
//       "100% Private tour experience with tailored pace and personal Egyptologist guide",
//       "Explore the vast Karnak Temple complex and its famous Hypostyle Hall",
//       "Discover the West Bank's Valley of the Kings with entry to 3 royal tombs",
//       "Visit the impressive multi-terraced Mortuary Temple of Queen Hatshepsut",
//       "Photo stop at the iconic Colossi of Memnon statues",
//       "Enjoy a delicious lunch at a local restaurant in Luxor included",
//       "Comfortable round-trip transportation in a private AC Limousine or Van",
//       "Free bottled water provided inside the vehicle throughout the day"
//     ],
//     de: [
//       "100% privates Tourerlebnis im eigenen Tempo mit persönlichem Ägyptologen",
//       "Erkunden Sie den gewaltigen Karnak-Tempelkomplex und die Hypostyl-Halle",
//       "Entdecken Sie das Tal der Könige am Westufer inklusive Eintritt zu 3 Gräbern",
//       "Besuchen Sie den beeindruckenden Terrassentempel der Königin Hatschepsut",
//       "Fotostopp an den imposanten Memnonkolossen",
//       "Genießen Sie ein leckeres Mittagessen in einem lokalen Restaurant in Luxor",
//       "Bequemer Hin- und Rücktransfer in einer privaten klimatisierten Limousine/Van",
//       "Kostenloses Flaschenwasser im Fahrzeug während des gesamten Tages"
//     ],
//     it: [
//       "Esperienza tour 100% privata con ritmi personalizzati e guida egittologa",
//       "Esplora l'immenso complesso del Tempio di Karnak e la sala ipostila",
//       "Scopri la Valle dei Re sulla sponda ovest con ingresso a 3 tombe reali",
//       "Visita l'imponente Tempio Funerario della Regina Hatshepsut",
//       "Tappa fotografica ai maestosi Colossi di Memnone",
//       "Gusta un delizioso pranzo incluso in un ristorante locale a Luxor",
//       "Trasporto comodo A/R in limousine o van privato con aria condizionata",
//       "Acqua in bottiglia gratuita a bordo del veicolo per tutta la giornata"
//     ],
//     ru: [
//       "100% частный тур в удобном для вас темпе с личным гидом-египтологом",
//       "Исследование величественного Карнакского храма и его Гипостильного зала",
//       "Посещение Долины Царей на Западном берегу с входом в 3 королевские гробницы",
//       "Визит в уникальный террасный заупокойный храм царицы Хатшепсут",
//       "Остановка для фото у знаменитых Колоссов Мемнона",
//       "Вкусный обед в местном ресторане в Луксоре включен в стоимость",
//       "Комфортабельный трансфер на частном авто/минивэне с кондиционером",
//       "Бесплатная питьевая вода в машине в течение всего дня"
//     ],
//     pl: [
//       "W 100% prywatna wycieczka we własnym tempie z osobistym egiptologiem",
//       "Zwiedzanie ogromnego kompleksu świątynnego w Karnaku i Wielkiej Sali Kolumnowej",
//       "Odkrywanie Doliny Królów na Zachodnim Brzegu z wejściem do 3 grobowców",
//       "Wizyta w imponującej tarasowej Świątyni Hatszepsut",
//       "Przystanek na zdjęcia przy słynnych Kolosach Memnona",
//       "Pyszny obiad w lokalnej restauracji w Luksorze w cenie",
//       "Wygodny prywatny transport klimatyzowaną limuzyną lub vanem",
//       "Bezpłatna woda butelkowana w pojeździe przez cały dzień"
//     ],
//     cz: [
//       "100% soukromý zážitek s vlastním tempem a osobním egyptologem",
//       "Prohlídka rozsáhlého chrámu v Karnaku a jeho Velkého sloupového sálu",
//       "Objevování Údolí králů na Západním břehu se vstupem do 3 královských hrobek",
//       "Návštěva úchvatného terasovitého chrámu královny Hatšepsut",
//       "Fotostop u ikonických Memnonových kolosů",
//       "Lahoďný oběd v místní restauraci v Luxoru v ceně",
//       "Pohodlný zpáteční transport soukromou klimatizovanou limuzínou nebo vanem",
//       "Balená voda v autě zdarma po celý den"
//     ]
//   },
//   included: {
//     en: [
//       "Private modern AC vehicle (Limousine or Van)",
//       "Professional private Egyptologist tour guide",
//       "Karnak Temple entrance tickets",
//       "Valley of the Kings entrance tickets (includes 3 royal tombs)",
//       "Hatshepsut Temple entrance tickets",
//       "Lunch at a local restaurant in Luxor",
//       "Complimentary bottled water inside the vehicle all day",
//       "Hotel pickup and drop-off from Marsa Alam"
//     ],
//     de: [
//       "Privates modernes klimatisiertes Fahrzeug (Limousine oder Van)",
//       "Professioneller privater ägyptologischer Reiseleiter",
//       "Eintrittskarten für den Karnak-Tempel",
//       "Eintrittskarten für das Tal der Könige (inkl. 3 Gräber)",
//       "Eintrittskarten für den Hatschepsut-Tempel",
//       "Mittagessen in einem lokalen Restaurant in Luxor",
//       "Kostenloses Flaschenwasser im Fahrzeug den ganzen Tag",
//       "Hotelabholung und Rückbringung von Marsa Alam"
//     ],
//     it: [
//       "Veicolo privato moderno climatizzato (Limousine o Van)",
//       "Guida turistica egittologa privata e professionale",
//       "Biglietti d'ingresso al Tempio di Karnak",
//       "Biglietti d'ingresso alla Valle dei Re (include 3 tombe reali)",
//       "Biglietti d'ingresso al Tempio di Hatshepsut",
//       "Pranzo in un ristorante locale a Luxor",
//       "Acqua in bottiglia gratuita all'interno del veicolo tutto il giorno",
//       "Pick-up e drop-off dall'hotel a Marsa Alam"
//     ],
//     ru: [
//       "Частный современный автомобиль с кондиционером (седаны/минивэн)",
//       "Профессиональный частный гид-египтолог",
//       "Входные билеты в Карнакский храм",
//       "Входные билеты в Долину Царей (включая 3 гробницы)",
//       "Входные билеты в Храм Хатшепсут",
//       "Обед в местном ресторане в Луксоре",
//       "Бесплатная бутилированная вода в машине на весь день",
//       "Трансфер из отеля и обратно из Марса-Алам"
//     ],
//     pl: [
//       "Prywatny nowoczesny pojazd z klimatyzacją (Limuzyna lub Van)",
//       "Profesjonalny prywatny przewodnik egiptolog",
//       "Bilety wstępu do Świątyni w Karnaku",
//       "Bilety wstępu do Doliny Królów (obejmuje 3 grobowce)",
//       "Bilety wstępu do Świątyni Hatszepsut",
//       "Obiad w lokalnej restauracji w Luksorze",
//       "Bezpłatna woda butelkowana w samochodzie przez cały dzień",
//       "Odbiór i powrót do hotelu w Marsa Alam"
//     ],
//     cz: [
//       "Soukromé moderní klimatizované auto (Limuzína nebo Van)",
//       "Profesionální soukromý průvodce egyptolog",
//       "Vstupenky do chrámu v Karnaku",
//       "Vstupenky do Údolí králů (zahrnuje 3 královské hrobky)",
//       "Vstupenky do chrámu Hatšepsut",
//       "Oběd v místní restauraci v Luxoru",
//       "Balená voda v autě po celý den zdarma",
//       "Vyzvednutí a návrat do hotelu v Marsa Alam"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Passport or official ID",
//       "Breakfast box from hotel (requested 1 day prior)",
//       "Comfortable walking shoes",
//       "Light clothing & hat",
//       "Sunglasses & sunscreen",
//       "Camera & phone charger",
//       "Local currency (EGP) for personal spending & tipping"
//     ],
//     de: [
//       "Reisepass oder offizieller Personalausweis",
//       "Frühstücksbox vom Hotel (1 Tag vorher bestellen)",
//       "Bequeme Wanderschuhe",
//       "Leichte Kleidung & Hut",
//       "Sonnenbrille & Sonnencreme",
//       "Kamera & Handy-Ladegerät",
//       "Einheimische Währung (EGP) für persönliche Ausgaben & Trinkgelder"
//     ],
//     it: [
//       "Passaporto o documento d'identità",
//       "Colazione al sacco dall'hotel (richiesta il giorno prima)",
//       "Scarpe comode da passeggio",
//       "Abiti leggeri e cappello",
//       "Occhiali da sole e protezione solare",
//       "Fotocamera e caricabatterie",
//       "Moneta locale (EGP) per spese personali e mance"
//     ],
//     ru: [
//       "Паспорт или удостоверение личности",
//       "Завтрак-бокс из отеля (заказывается за 1 день)",
//       "Удобная обувь для ходьбы",
//       "Легкая одежда и головной убор",
//       "Солнцезащитные очки и крем",
//       "Камера и зарядное устройство",
//       "Местная валюта (EGP) для личных расходов и чаевых"
//     ],
//     pl: [
//       "Paszport lub dowód osobisty",
//       "Suchy prowiant z hotelu (zamówiony dzień wcześniej)",
//       "Wygodne buty do chodzenia",
//       "Lekkie ubranie i czapka",
//       "Okulary przeciwsłoneczne i krem z filtrem",
//       "Aparat fotograficzny i ładowarka",
//       "Lokalna waluta (EGP) na wydatki osobiste i napiwki"
//     ],
//     cz: [
//       "Cestovní pas nebo průkaz totožnosti",
//       "Snídaňový balíček z hotelu (nutno objednat den předem)",
//       "Pohodlná obuv na chodění",
//       "Lehké oblečení a klobouk",
//       "Sluneční brýle a opalovací krém",
//       "Fotoaparát a nabíječka",
//       "Místní měna (EGP) na osobní výdaje a spropitné"
//     ]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Free of charge (Under 6 years old)",
//       de: "Kostenlos (Unter 6 Jahren)",
//       it: "Gratuito (Sotto i 6 anni)",
//       ru: "Бесплатно (До 6 лет)",
//       pl: "Bezpłatnie (Poniżej 6 lat)",
//       cz: "Zdarma (Mladší 6 let)"
//     },
//     from5to10: {
//       en: "Child discount applies (50% discount for children aged 6 to 11)",
//       de: "Kinderermäßigung gilt (50% Rabatt für Kinder von 6 bis 11 Jahren)",
//       it: "Si applica lo sconto bambini (50% di sconto per bambini da 6 a 11 anni)",
//       ru: "Действует детская скидка (50% скидка для детей от 6 до 11 лет)",
//       pl: "Obowiązuje zniżka dla dzieci (50% zniżki dla dzieci w wieku 6-11 lat)",
//       cz: "Platí dětská sleva (50% sleva pro děti od 6 do 11 let)"
//     },
//     over10: {
//       en: "Full adult rate applies (12 years and older)",
//       de: "Voller Preis für Erwachsene (ab 12 Jahren)",
//       it: "Tariffa intera adulti (da 12 anni in poi)",
//       ru: "Полная стоимость взрослого (с 12 лет)",
//       pl: "Pełna stawka dla dorosłych (od 12 lat)",
//       cz: "Plná cena pro dospělé (od 12 let)"
//     }
//   },
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Private Departure from Marsa Alam — 03:00 AM",
//         de: "Private Abreise von Marsa Alam — 03:00 Uhr",
//         it: "Partenza Privata da Marsa Alam — 03:00",
//         ru: "Частный выезд из Марса-Алам — 03:00",
//         pl: "Prywatny wyjazd z Marsa Alam — 03:00",
//         cz: "Soukromý odjezd z Marsa Alam — 03:00"
//       },
//       description: {
//         en: "Early morning pickup directly from your hotel in a private AC vehicle. Enjoy a comfortable drive across the Eastern Desert to Luxor.",
//         de: "Frühe Abholung direkt von Ihrem Hotel im privaten klimatisierten Fahrzeug. Genießen Sie eine komfortable Fahrt durch die Östliche Wüste nach Luxor.",
//         it: "Pick-up di mattina presto direttamente dal tuo hotel in un veicolo privato climatizzato. Goditi un viaggio comodo attraverso il deserto orientale verso Luxor.",
//         ru: "Ранний выезд прямо из вашего отеля на частном автомобиле с кондиционером. Комфортная поездка через Восточную пустыню в Луксор.",
//         pl: "Wczesny odbiór bezpośrednio z hotelu prywatnym klimatyzowanym pojazdem. Wygodna podróż przez Pustynię Wschodnią do Luksoru.",
//         cz: "Ranní vyzvednutí přímo z vašeho hotelu soukromým klimatizovaným vozem. Pohodlná jízda přes Východní poušť do Luxoru."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Karnak Temple (East Bank) — 09:00 AM",
//         de: "Karnak-Tempel (Ostufer) — 09:00 Uhr",
//         it: "Tempio di Karnak (Riva Est) — 09:00",
//         ru: "Карнакский храм (Восточный берег) — 09:00",
//         pl: "Świątynia w Karnaku (Wschodni Brzeg) — 09:00",
//         cz: "Chrám v Karnaku (Východní břeh) — 09:00"
//       },
//       description: {
//         en: "Arrive in Luxor and start at Karnak Temple, one of the world's largest religious complexes. Walk through the Hypostyle Hall with your private guide.",
//         de: "Ankunft in Luxor und Beginn am Karnak-Tempel, einer der größten religiösen Anlagen der Welt. Durchqueren Sie die Hypostyl-Halle mit Ihrem Reiseleiter.",
//         it: "Arrivo a Luxor e visita al Tempio di Karnak, uno dei complessi religiosi più grandi al mondo. Passeggia nella Sala Ipostila con la tua guida.",
//         ru: "Прибытие в Луксор. Экскурсия по Карнакскому храму — крупнейшему религиозному комплексу древнего мира. Прогулка по Гипостильному залу.",
//         pl: "Przyjazd do Luksoru i zwiedzanie Świątyni w Karnaku, jednego z największych kompleksów religijnych. Przejście przez Salę Kolumnową z przewodnikiem.",
//         cz: "Příjezd do Luxoru a prohlídka chrámu v Karnaku, jednoho z největších náboženských komplexů. Procházka Velkým sloupovým sálem s průvodcem."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Lunch at a Local Restaurant — 12:30 PM",
//         de: "Mittagessen in einem lokalen Restaurant — 12:30 Uhr",
//         it: "Pranzo in un Ristorante Locale — 12:30",
//         ru: "Обед в местном ресторане — 12:30",
//         pl: "Obiad w lokalnej restauracji — 12:30",
//         cz: "Oběd v místní restauraci — 12:30"
//       },
//       description: {
//         en: "Relax and savor a delicious lunch prepared with local Egyptian ingredients at a selected restaurant in Luxor.",
//         de: "Entspannen Sie sich und genießen Sie ein köstliches Mittagessen mit lokalen ägyptischen Zutaten in einem ausgewählten Restaurant.",
//         it: "Rilassati e gusta un delizioso pranzo preparato con ingredienti locali egiziani in un ristorante selezionato a Luxor.",
//         ru: "Отдых и вкусный обед из блюд местной египетской кухни в проверенном ресторане Луксора.",
//         pl: "Relaks i pyszny obiad przygotowany z lokalnych egipskich składników w wybranej restauracji w Luksorze.",
//         cz: "Odpočinek a lahodný oběd připravený z místních surovin ve vybrané restauraci v Luxoru."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Valley of the Kings (West Bank) — 02:00 PM",
//         de: "Tal der Könige (Westufer) — 14:00 Uhr",
//         it: "Valle dei Re (Riva Ovest) — 14:00",
//         ru: "Долина Царей (Западный берег) — 14:00",
//         pl: "Dolina Królów (Zachodni Brzeg) — 14:00",
//         cz: "Údolí králů (Západní břeh) — 14:00"
//       },
//       description: {
//         en: "Cross to the West Bank to explore the ancient City of the Dead. Enter 3 remarkable royal tombs carved deep into the mountains.",
//         de: "Überquerung des Westufers zur Erkundung der Stadt der Toten. Besichtigung von 3 beeindruckenden königlichen Gräbern in den Felsen.",
//         it: "Attraversa la sponda ovest per esplorare la Città dei Morti. Entra in 3 straordinarie tombe reali scavate nella montagna.",
//         ru: "Переезд на Западный берег в 'Город Мертвых'. Посещение 3 королевских гробниц с невероятно сохранившимися фресками.",
//         pl: "Przejazd na Zachodni Brzeg do Miasta Umarłych. Wejście do 3 niezwykłych grobowców królewskich wykutych w skałach.",
//         cz: "Přejezd na Západní břeh do Města mrtvých. Prohlídka 3 pozoruhodných královských hrobek tesaných do skály."
//       }
//     },
//     {
//       step: "05",
//       title: {
//         en: "Temple of Hatshepsut & Colossi of Memnon — 04:00 PM",
//         de: "Hatschepsut-Tempel & Memnonkolosse — 16:00 Uhr",
//         it: "Tempio di Hatshepsut e Colossi di Memnone — 16:00",
//         ru: "Храм Хатшепсут и Колоссы Мемнона — 16:00",
//         pl: "Świątynia Hatszepsut i Kolosy Memnona — 16:00",
//         cz: "Chrám Hatšepsut a Memnonovy kolosy — 16:00"
//       },
//       description: {
//         en: "Visit the stunning terraced Mortuary Temple of Queen Hatshepsut at Deir el-Bahari, followed by a photo stop at the gigantic Colossi of Memnon statues.",
//         de: "Besuch des beeindruckenden Terrassentempels der Königin Hatschepsut in Deir el-Bahari, gefolgt von einem Fotostopp an den riesigen Memnonkolossen.",
//         it: "Visita al meraviglioso Tempio Funerario della Regina Hatshepsut a Deir el-Bahari, seguito da una tappa foto ai giganteschi Colossi di Memnone.",
//         ru: "Визит в уникальный храм царицы Хатшепсут в Дейр-эль-Бахри. Затем остановка у гигантских статуй Колоссов Мемнона для фото.",
//         pl: "Wizyta w zachwycającej Świątyni Hatszepsut w Deir el-Bahari, a następnie przystanek na zdjęcia przy gigantycznych Kolosach Memnona.",
//         cz: "Návštěva úchvatného chrámu královny Hatšepsut v Deir el-Bahari, po které následuje fotostop u gigantických Memnonových kolosů."
//       }
//     },
//     {
//       step: "06",
//       title: {
//         en: "Return Journey to Marsa Alam — 05:30 PM",
//         de: "Rückfahrt nach Marsa Alam — 17:30 Uhr",
//         it: "Viaggio di Ritorno a Marsa Alam — 17:30",
//         ru: "Обратный трансфер в Марса-Алам — 17:30",
//         pl: "Podróż powrotna do Marsa Alam — 17:30",
//         cz: "Cesta zpět do Marsa Alam — 17:30"
//       },
//       description: {
//         en: "Begin your comfortable private journey back to Marsa Alam, arriving at your hotel between 08:30 PM and 09:30 PM.",
//         de: "Beginn der privaten Rückfahrt nach Marsa Alam mit Ankunft in Ihrem Hotel zwischen 20:30 Uhr und 21:30 Uhr.",
//         it: "Inizio del comodo viaggio privato di rientro a Marsa Alam, con arrivo in hotel tra le 20:30 e le 21:30.",
//         ru: "Обратная поездка на частном автомобиле в Марса-Алам. Возвращение в отель ориентировочно с 20:30 до 21:30.",
//         pl: "Rozpoczęcie prywatnej podróży powrotnej do Marsa Alam, przyjazd do hotelu między 20:30 a 21:30.",
//         cz: "Zahájení soukromé cesty zpět do Marsa Alam, příjezd do hotelu mezi 20:30 a 21:30."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Private Trip Pricing: €170 per person based on a minimum of 2 guests. Family & group discounts available. Shared trip option available upon request via WhatsApp. Payment on day of the tour.",
//     de: "Preise für Privattouren: 170 € pro Person bei mindestens 2 Personen. Familien- und Gruppenrabatte verfügbar. Gruppenreisen auf Anfrage per WhatsApp. Zahlung am Tag der Tour.",
//     it: "Prezzo Tour Privato: €170 a persona per un minimo di 2 partecipanti. Sconti per famiglie e gruppi disponibili. Opzione tour di gruppo disponibile su richiesta via WhatsApp. Pagamento il giorno del tour.",
//     ru: "Цена частного тура: 170 € с человека (минимум 2 гостя). Доступны скидки для семей и групп. Стоимость группового тура — по запросу в WhatsApp. Оплата в день экскурсии.",
//     pl: "Cena wycieczki prywatnej: 170 € za osobę przy minimum 2 osobach. Dostępne zniżki rodzinne i grupowe. Opcja wycieczki grupowej dostępna na zapytanie przez WhatsApp. Płatność w dniu wycieczki.",
//     cz: "Cena soukromého výletu: 170 € za osobu při minimálně 2 osobách. Slevy pro rodiny a skupiny k dispozici. Možnost sdíleného výletu na vyžádání přes WhatsApp. Platba v den výletu."
//   },
//   disclaimer: {
//     en: "Special optional tomb entry tickets (such as King Tutankhamun or Ramses VI) and photography permits inside the tombs are not included and can be purchased on-site. Departure time is 3:00 AM; return time depends on site duration and traffic.",
//     de: "Sondergräber (wie Tutanchamun oder Ramses VI.) und Fotogenehmigungen in den Gräbern sind nicht enthalten und können vor Ort gekauft werden. Abreise um 03:00 Uhr; Rückkehr hängt von der Dauer an den Stätten und dem Verkehr ab.",
//     it: "I biglietti per tombe speciali (come Tutankhamon o Ramses VI) e i permessi fotografici all'interno delle tombe non sono inclusi e si acquistano sul posto. Partenza alle 3:00; l'orario di rientro dipende dai tempi di visita e dal traffico.",
//     ru: "Билеты в специальные гробницы (например, Тутанхамона или Рамсеса VI) и разрешение на фотосъемку не входят в стоимость и приобретаются на месте. Выезд в 3:00, время возвращения зависит от времени на объектах.",
//     pl: "Dodatkowe bilety do specjalnych grobowców (np. Tutenchamona lub Ramzesa VI) oraz pozwolenia na fotografowanie płatne na miejscu. Wyjazd o 3:00; czas powrotu zależy od czasu spędzonego w zabytkach i ruchu drogowego.",
//     cz: "Vstupenky do speciálních hrobek (např. Tutanchamon nebo Ramesse VI.) a povolení k fotografování nejsou v ceně a lze je zakoupit na místě. Odjezd ve 3:00; čas návratu závisí na stráveném čase na památkách."
//   },
//   images: {
//     featured: "/images/tours/luxor-private-day-trip.jpg",
//     gallery: [
//       "/images/tours/luxor-private-day-trip-1.jpg",
//       "/images/tours/luxor-private-day-trip-2.jpg",
//       "/images/tours/luxor-private-day-trip-3.jpg"
//     ]
//   }
// },
// {
//   id: "historical-el-quseir-tour",
//   slug: "historical-el-quseir-private-guided-tour",
//   type: "city-tours",
//   title: {
//     en: "Historical El Quseir Tour",
//     de: "Historische El Quseir Tour",
//     it: "Tour Storico di El Quseir",
//     ru: "Исторический тур по Эль-Кусейр",
//     pl: "Historyczna wycieczka po El Quseir",
//     cz: "Historická prohlídka El Quseir"
//   },
//   subtitle: {
//     en: "Private Guided Walking Tour to Fortress, Old Town & Italian Heritage",
//     de: "Privater geführter Rundgang zur Festung, Altstadt & italienischem Erbe",
//     it: "Tour a Piedi Privato con Guida alla Fortezza, Centro Storico ed Eredità Italiana",
//     ru: "Частная пешеходная экскурсия к крепости, старому городу и итальянскому наследию",
//     pl: "Prywatna piesza wycieczka z przewodnikiem do twierdzy, starego miasta i dziedzictwa włoskiego",
//     cz: "Soukromá pěší prohlídka pevnosti, starého města a italského dědictví s průvodcem"
//   },
//   category: {
//     en: "City Tours",
//     de: "Städtereisen & Kultur",
//     it: "Tour delle Città",
//     ru: "Экскурсии по Городам",
//     pl: "Wycieczki Miejskie",
//     cz: "Městské Tours"
//   },
//   price: {
//     amount: 50,
//     currency: "€",
//     unit: {
//       en: "per tour / group (Private Guide & Site Tickets Included)",
//       de: "pro Tour / Gruppe (Privater Reiseleiter & Eintrittskarten inklusive)",
//       it: "per tour / gruppo (Guida Privata e Biglietti Inclusi)",
//       ru: "за тур / группу (Частный гид и входные билеты включены)",
//       pl: "za wycieczkę / grupę (Prywatny przewodnik i bilety w cenie)",
//       cz: "za prohlídku / skupinu (Soukromý průvodce a vstupenky v ceně)"
//     }
//   },
//   duration: {
//     en: "Half Day (Flexible Duration - Starts at 3:00 PM)",
//     de: "Halbtags (Flexible Dauer - Start um 15:00 Uhr)",
//     it: "Mezza Giornata (Durata flessibile - Inizio alle 15:00)",
//     ru: "Полдня (Гибкая продолжительность - Старт в 15:00)",
//     pl: "Pół dnia (Elastyczny czas - Start o 15:00)",
//     cz: "Půl dne (Flexibilní délka - Začátek v 15:00)"
//   },
//   departure: {
//     en: "Hotels near El Quseir & Marsa Alam (3:00 PM Departure)",
//     de: "Hotels nahe El Quseir & Marsa Alam (Abfahrt 15:00 Uhr)",
//     it: "Hotel vicino a El Quseir e Marsa Alam (Partenza ore 15:00)",
//     ru: "Отели возле Эль-Кусейр и Марса-Алам (Выезд в 15:00)",
//     pl: "Hotele w pobliżu El Quseir i Marsa Alam (Wyjazd o 15:00)",
//     cz: "Hotely v blízkosti El Quseir a Marsa Alam (Odjezd v 15:00)"
//   },
//   overview: {
//     en: "Step beyond the resorts and discover the rich history of El Quseir. Explore the city's historic Ottoman fortress, ancient old town, historic Al-Farran mosque, and unique industrial heritage from the Italian phosphate era with a dedicated local expert guide.",
//     de: "Wagen Sie einen Blick über die Resorts hinaus und entdecken Sie die reiche Geschichte von El Quseir. Erkunden Sie die historische osmanische Festung, die Altstadt, die Al-Farran-Moschee und das Erbe der italienischen Phosphat-Ära mit einem lokalen Reiseleiter.",
//     it: "Oltrepassa i resort e scopri la ricca storia di El Quseir. Esplora la fortezza ottomana, il centro storico, la moschea Al-Farran e l'eredità industriale dell'era mineraria italiana con una guida locale esperta.",
//     ru: "Выйдите за пределы курортов и откройте богатую историю Эль-Кусейр. Исследуйте османскую крепость, старый город, древнюю мечеть Аль-Фарран и наследие итальянской фосфатной эры с личным местным гидом.",
//     pl: "Wyjdź poza resorty i odkryj bogatą historię El Quseir. Zwiedzaj osmańską twierdzę, stare miasto, zabytkowy meczet Al-Farran oraz włoskie dziedzictwo przemysłowe z prywatnym przewodnikiem.",
//     cz: "Vydejte se mimo rezorty a objevte bohatou historii El Quseiru. Prozkoumejte osmanskou pevnost, staré město, mešitu Al-Farran a italské průmyslové dědictví s místním průvodcem."
//   },
//   highlights: {
//     en: [
//       "Fixed group rate (€50 total for your entire family or group)",
//       "Visit the 16th-century Ottoman El Quseir Fortress & watchtower views",
//       "Guided walking tour inside the narrow alleys of El Quseir's Old Town",
//       "Discover the historic Al-Farran Mosque and iconic El Quseir Hotel",
//       "Explore the Italian Colony, old phosphate factory & historic Italian Church",
//       "Expert local guide dedicated to your group throughout the tour",
//       "Timed departure at 3:00 PM ensuring access to all historic sites before closure"
//     ],
//     de: [
//       "Fester Gruppenpreis (50 € insgesamt für Ihre gesamte Familie/Gruppe)",
//       "Besuch der osmanischen Festung El Quseir aus dem 16. Jh. & Aussichtsturm",
//       "Geführter Rundgang durch die engen Gassen der Altstadt von El Quseir",
//       "Entdecken Sie die Al-Farran-Moschee und das historische Hotel El Quseir",
//       "Erkunden Sie die italienische Kolonie, alte Phosphatfabrik & historische Kirche",
//       "Lokaler Experten-Reiseleiter exklusiv für Ihre Gruppe während der Tour",
//       "Pünktliche Abfahrt um 15:00 Uhr zur Sicherstellung aller Besichtigungszeiten"
//     ],
//     it: [
//       "Tariffa di gruppo fissa (€50 totale per tutta la famiglia o gruppo)",
//       "Visita alla fortezza ottomana del XVI secolo e vista dalla torre di guardia",
//       "Tour a piedi tra i vicoli del centro storico di El Quseir",
//       "Scopri la storica Moschea Al-Farran e l'iconico Hotel El Quseir",
//       "Esplora la Colonia Italiana, la vecchia fabbrica di fosfati e la chiesa storica",
//       "Guida esperta locale dedicata esclusivamente al tuo gruppo",
//       "Partenza alle 15:00 per garantire l'accesso a tutti i siti prima della chiusura"
//     ],
//     ru: [
//       "Фиксированная цена за группу (50 € за всю вашу семью или компанию)",
//       "Посещение османской крепости XVI века и смотровой башни",
//       "Пешеходный тур по колоритным улочкам старого города Эль-Кусейр",
//       "Знакомство с исторической мечетью Аль-Фарран и отелем El Quseir",
//       "Осмотр итальянской колонии, старой фосфатной фабрики и исторической церкви",
//       "Персональный местный гид для вашей группы на протяжении всего тура",
//       "Выезд ровно в 15:00, чтобы успеть посетить крепость до закрытия"
//     ],
//     pl: [
//       "Stała cena za grupę (50 € łącznie dla całej rodziny lub grupy)",
//       "Zwiedzanie XVI-wiecznej twierdzy osmańskiej i punktu widokowego",
//       "Pieszy spacer po klimatycznych uliczkach Starego Miasta w El Quseir",
//       "Odkryj zabytkowy meczet Al-Farran i kultowy hotel El Quseir",
//       "Zobacz osadę włoską, starą fabrykę fosfatów i historyczny kościół",
//       "Lokalny przewodnik do wyłącznej dyspozycji Twojej grupy",
//       "Wyjazd o 15:00 gwarantujący wstęp do obiektów przed zamknięciem"
//     ],
//     cz: [
//       "Pevná cena za skupinu (50 € celkem pro celou vaši rodinu nebo skupinu)",
//       "Návštěva osmanské pevnosti ze 16. století s vyhlídkou z věže",
//       "Pěší prohlídka úzkými uličkami starého města El Quseir",
//       "Objevení historické mešity Al-Farran a ikonického hotelu El Quseir",
//       "Prohlídka italské kolonie, staré továrny na fosfáty a historického kostela",
//       "Místní odborný průvodce po celou dobu prohlídky",
//       "Odjezd v 15:00 pro zajištění vstupu do památek před zavírací dobą"
//     ]
//   },
//   included: {
//     en: [
//       "Local professional guide throughout the walking tour",
//       "All entrance tickets for mentioned historical sites",
//       "El Quseir Fortress entrance ticket",
//       "Guided Old Town walking tour"
//     ],
//     de: [
//       "Lokaler professioneller Reiseleiter während des gesamten Rundgangs",
//       "Alle Eintrittskarten für die genannten historischen Stätten",
//       "Eintrittskarte für die Festung El Quseir",
//       "Geführter Altstadt-Rundgang"
//     ],
//     it: [
//       "Guida professionale locale per l'intero tour a piedi",
//       "Tutti i biglietti d'ingresso per i siti storici menzionati",
//       "Biglietto d'ingresso alla Fortezza di El Quseir",
//       "Tour a piedi guidato nel centro storico"
//     ],
//     ru: [
//       "Местный профессиональный гид на протяжении всей пешеходной экскурсии",
//       "Все входные билеты на указанные исторические объекты",
//       "Входной билет в крепость Эль-Кусейр",
//       "Пешеходная экскурсия по Старому городу"
//     ],
//     pl: [
//       "Lokalny profesjonalny przewodnik podczas całej wycieczki pieszej",
//       "Wszystkie bilety wstępu do wymienionych obiektów historycznych",
//       "Bilet wstępu do twierdzy El Quseir",
//       "Piesze zwiedzanie Starego Miasta z przewodnikiem"
//     ],
//     cz: [
//       "Místní profesionální průvodce po celou dobu pěší prohlídky",
//       "Všechny vstupenky na uvedené historické památky",
//       "Vstupenka do pevnosti El Quseir",
//       "Pěší prohlídka starého města s průvodcem"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Comfortable walking shoes",
//       "Modest clothing for visiting historic & religious sites",
//       "Camera or smartphone",
//       "Hat & sunglasses",
//       "Local currency (EGP) for personal spending, souvenirs & tips"
//     ],
//     de: [
//       "Bequeme Wanderschuhe",
//       "Angemessene Kleidung für den Besuch historischer & religiöser Stätten",
//       "Kamera oder Smartphone",
//       "Hut & Sonnenbrille",
//       "Einheimische Währung (EGP) für persönliche Ausgaben & Trinkgelder"
//     ],
//     it: [
//       "Scarpe comode da passeggio",
//       "Abbigliamento modesto per la visita a siti storici e religiosi",
//       "Fotocamera o smartphone",
//       "Cappello e occhiali da sole",
//       "Moneta locale (EGP) per spese personali, souvenir e mance"
//     ],
//     ru: [
//       "Удобная обувь для ходьбы",
//       "Скромная одежда для посещения исторических и религиозных мест",
//       "Камера или смартфон",
//       "Головной убор и очки",
//       "Местная валюта (EGP) для личных расходов, сувениров и чаевых"
//     ],
//     pl: [
//       "Wygodne buty do chodzenia",
//       "Skromne ubranie odpowiednie do miejsc historycznych i religijnych",
//       "Aparat fotograficzny lub telefon",
//       "Czapka i okulary przeciwsłoneczne",
//       "Lokalna waluta (EGP) na wydatki osobiste, pamiątki i napiwki"
//     ],
//     cz: [
//       "Pohodlná obuv na chodění",
//       "Vhodné oblečení pro návštěvu historických a náboženských míst",
//       "Fotoaparát nebo smartphone",
//       "Klobouk a sluneční brýle",
//       "Místní měna (EGP) na osobní výdaje, suvenýry a spropitné"
//     ]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Free of charge (Tour price is per group, children included)",
//       de: "Kostenlos (Tourpreis gilt pro Gruppe, Kinder inklusive)",
//       it: "Gratuito (Il prezzo del tour è per gruppo, bambini inclusi)",
//       ru: "Бесплатно (Цена тура за группу, дети включены)",
//       pl: "Bezpłatnie (Cena wycieczki dotyczy grupy, dzieci w cenie)",
//       cz: "Zdarma (Cena prohlídky je za skupinu, děti v cenie)"
//     },
//     from5to10: {
//       en: "Included in group tour price",
//       de: "Im Gruppenpreis enthalten",
//       it: "Incluso nel prezzo del gruppo",
//       ru: "Включено в стоимость тура за группу",
//       pl: "W cenie wycieczki grupowej",
//       cz: "Zahrnuto v ceně prohlídky za skupinu"
//     },
//     over10: {
//       en: "Included in group tour price",
//       de: "Im Gruppenpreis enthalten",
//       it: "Incluso nel prezzo del gruppo",
//       ru: "Включено в стоимость тура за группу",
//       pl: "W cenie wycieczki grupowej",
//       cz: "Zahrnuto v ceně prohlídky za skupinu"
//     }
//   },
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Hotel Departure — 03:00 PM",
//         de: "Hotelabholung — 15:00 Uhr",
//         it: "Partenza dall'Hotel — 15:00",
//         ru: "Выезд из отеля — 15:00",
//         pl: "Wyjazd z hotelu — 15:00",
//         cz: "Odjezd z hotelu — 15:00"
//       },
//       description: {
//         en: "Pick up from your hotel. Timed strictly for 3:00 PM to ensure visiting the Ottoman fortress before closing time.",
//         de: "Abholung vom Hotel. Pünktlich um 15:00 Uhr, um die osmanische Festung vor der Schließung zu besuchen.",
//         it: "Pick-up dall'hotel. Partenza tassativa alle 15:00 per visitare la fortezza ottomana prima della chiusura.",
//         ru: "Трансфер из отеля. Выезд строго в 15:00, чтобы успеть посетить османскую крепость до закрытия.",
//         pl: "Odbiór z hotelu. Punktualnie o 15:00, aby zdążyć zwiedzić twierdzę osmańską przed zamknięciem.",
//         cz: "Vyzvednutí v hotelu. Přesně v 15:00 pro zajištění návštěvy osmanské pevnosti před zavírací dobou."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "El Quseir Ottoman Fortress — 03:30 PM",
//         de: "Festung von El Quseir — 15:30 Uhr",
//         it: "Fortezza di El Quseir — 15:30",
//         ru: "Османская крепость Эль-Кусейр — 15:30",
//         pl: "Twierdza El Quseir — 15:30",
//         cz: "Osmanská pevnost El Quseir — 15:30"
//       },
//       description: {
//         en: "Explore the 16th-century Ottoman fortress. Learn about El Quseir's history as a Red Sea trade & pilgrimage port and enjoy views from the watchtower.",
//         de: "Erkunden Sie die osmanische Festung aus dem 16. Jahrhundert und erfahren Sie mehr über die Geschichte des Hafens. Genießen Sie die Aussicht vom Turm.",
//         it: "Esplora la fortezza del XVI secolo. Scopri la storia del porto di El Quseir e goditi la vista dalla torre di guardia.",
//         ru: "Экскурсия по крепости XVI века. Узнайте об истории порта и насладитесь панорамным видом со смотровой башни.",
//         pl: "Zwiedzanie XVI-wiecznej twierdzy osmańskiej. Poznaj historię portu i podziwiaj widok z wieży strażniczej.",
//         cz: "Prohlídka pevnosti ze 16. století. Objevte historii přístavu a užijte si výhled strážní věže."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Old Town & Al-Farran Mosque — 05:00 PM",
//         de: "Altstadt & Al-Farran-Moschee — 17:00 Uhr",
//         it: "Centro Storico e Moschea Al-Farran — 17:00",
//         ru: "Старый город и мечеть Аль-Фарран — 17:00",
//         pl: "Stare Miasto i meczet Al-Farran — 17:00",
//         cz: "Staré město a mešita Al-Farran — 17:00"
//       },
//       description: {
//         en: "Stroll through the narrow streets of the Old Town. Visit the historic Al-Farran Mosque and admire traditional architecture and the historic El Quseir Hotel.",
//         de: "Spaziergang durch die Altstadt. Besuchen Sie die historische Al-Farran-Moschee und bewundern Sie die traditionelle Architektur.",
//         it: "Passeggiata tra i vicoli del centro storico. Visita la Moschea Al-Farran e ammira l'architettura locale e lo storico Hotel El Quseir.",
//         ru: "Прогулка по колоритным улочкам Старого города. Посещение мечети Аль-Фарран и осмотр традиционной архитектуры.",
//         pl: "Spacer wąskimi uliczkami Starego Miasta. Wizyta w meczecie Al-Farran i podziwianie tradycyjnej architektury.",
//         cz: "Procházka uličkami starého města. Návštěva mešity Al-Farran a obdivování traditionalní architektury."
//       }
//     },
//     {
//       step: "04",
//       title: {
//         en: "Italian Colony & Phosphate Heritage — 06:00 PM",
//         de: "Italienische Kolonie & Phosphat-Erbe — 18:00 Uhr",
//         it: "Colonia Italiana ed Eredità dei Fosfati — 18:00",
//         ru: "Итальянская колония и фосфатное наследие — 18:00",
//         pl: "Osada Włoska i dziedzictwo przemysłowe — 18:00",
//         cz: "Italská kolonie a průmyslové dědictví — 18:00"
//       },
//       description: {
//         en: "Discover the remains of the old Italian phosphate mining company era, the historical church built for Italian engineers, and local heritage.",
//         de: "Entdecken Sie die Überreste der alten italienischen Phosphatmine, die historische italienische Kirche und das lokale Erbe.",
//         it: "Scopri i resti della vecchia era mineraria italiana, la chiesa storica costruita per gli ingegneri italiani e la cultura locale.",
//         ru: "Осмотр построек времен итальянских фосфатных разработок, старинной итальянской церкви и индустриальных памятников.",
//         pl: "Odkryj pozostałości z czasów włoskiego wydobycia fosfatów, zabytkowy kościół włoski oraz lokalne dziedzictwo.",
//         cz: "Objevení pozůstatků z éry italské těžby fosfátů, historického kostela pro italské inženýry a místního dědictví."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "Private Tour Pricing: €50 total per group/family (Not per person). Hotel transfer price is calculated separately based on distance. Payment collected on the day of the tour.",
//     de: "Preis für die private Tour: 50 € insgesamt pro Gruppe/Familie (Nicht pro Person). Der Transferpreis wird je nach Entfernung berechnet. Zahlung am Tag der Tour.",
//     it: "Prezzo Tour Privato: €50 totale per gruppo/famiglia (Non a persona). Il prezzo del transfer viene calcolato a parte in base alla distanza. Pagamento il giorno del tour.",
//     ru: "Цена частного тура: 50 € за всю группу/семью (Не с человека). Трансфер оплачивается отдельно в зависимости от расстояния. Оплата в день экскурсии.",
//     pl: "Cena wycieczki prywatnej: 50 € łącznie za grupę/rodzinę (Nie za osobę). Cena transferu jest obliczana osobiście w zależności od odległości. Płatność w dniu wycieczki.",
//     cz: "Cena soukromé prohlídky: 50 € celkem za skupinu/rodinu (Ne za osobu). Cena transferu se počítá zvlášť podle vzdálenosti. Platba v den prohlídky."
//   },
//   disclaimer: {
//     en: "Strict 3:00 PM departure required due to fortress closing hours (5:00 PM). Hotel transfer costs vary depending on location. Food and drinks are not included.",
//     de: "Pünktliche Abfahrt um 15:00 Uhr erforderlich wegen der Schließung der Festung (17:00 Uhr). Transferkosten variieren je nach Lage des Hotels. Speisen und Getränke nicht enthalten.",
//     it: "Partenza tassativa alle 15:00 causa orario di chiusura della fortezza (17:00). I costi di trasferimento variano in base alla posizione. Cibo e bevande non inclusi.",
//     ru: "Выезд строго в 15:00 из-за времени работы крепости (до 17:00). Стоимость трансфера зависит от расположения отеля. Еда и напитки не входят в стоимость.",
//     pl: "Wymagany punktualny wyjazd o 15:00 ze względu na godziny otwarcia twierdzy (do 17:00). Koszt transferu zależy od lokalizacji hotelu. Posiłki i napoje nie są w cenie.",
//     cz: "Odjezd přesně v 15:00 z důvodu zavírací doby pevnosti (17:00). Náklady na transfer se liší podle polohy hotelu. Jídlo a pití nejsou v ceně."
//   },
//   images: {
//     featured: "/images/tours/el-quseir-tour.jpg",
//     gallery: [
//       "/images/tours/el-quseir-tour-1.jpg",
//       "/images/tours/el-quseir-tour-2.jpg",
//       "/images/tours/el-quseir-tour-3.jpg"
//     ]
//   }
// },
// {
//   id: "marsa-alam-city-tour-and-shopping",
//   slug: "marsa-alam-city-tour-and-shopping",
//   type: "city-tours",
//   title: {
//     en: "Marsa Alam City Tour & Shopping",
//     de: "Stadtrundfahrt & Shopping in Marsa Alam",
//     it: "Tour della Città di Marsa Alam e Shopping",
//     ru: "Обзорная экскурсия по Марса-Алам и шопинг",
//     pl: "Zwiedzanie Marsa Alam i zakupy",
//     cz: "Prohlídka města Marsa Alam a nákupy"
//   },
//   subtitle: {
//     en: "Local City Walking Tour, Cultural Sites & Authentic Egyptian Markets",
//     de: "Lokaler Stadtrundgang, Kulturstätten & authentische ägyptische Märkte",
//     it: "Tour a Piedi della Città, Siti Culturali e Mercati Egiziani Autentici",
//     ru: "Пешеходная прогулка по городу, культурные места и настоящие египетские рынки",
//     pl: "Lokalny spacer po mieście, miejsca kulturowe i autentyczne egipskie targi",
//     cz: "Místní pěší prohlídka města, kulturní místa a autentické egyptské trhy"
//   },
//   category: {
//     en: "City Tours",
//     de: "Städtereisen & Kultur",
//     it: "Tour delle Città",
//     ru: "Экскурсии по Городам",
//     pl: "Wycieczki Miejskie",
//     cz: "Městské Tours"
//   },
//   price: {
//     amount: 10,
//     currency: "$",
//     unit: {
//       en: "per tour / group (Local Guide Included)",
//       de: "pro Tour / Gruppe (Lokaler Reiseleiter inklusive)",
//       it: "per tour / gruppo (Guida Locale Inclusa)",
//       ru: "за тур / группу (Местный гид включен)",
//       pl: "za wycieczkę / grupę (Lokalny przewodnik w cenie)",
//       cz: "za prohlídku / skupinu (Místní průvodce v ceně)"
//     }
//   },
//   duration: {
//     en: "Flexible Duration (Available from 12:00 PM until late)",
//     de: "Flexible Dauer (Verfügbar ab 12:00 Uhr bis spät abends)",
//     it: "Durata Flessibile (Disponibile dalle 12:00 fino a tarda notte)",
//     ru: "Гибкая продолжительность (Доступно с 12:00 до позднего вечера)",
//     pl: "Elastyczny czas (Dostępne od 12:00 do późnego wieczora)",
//     cz: "Flexibilní délka (K dispozici od 12:00 do pozdního večera)"
//   },
//   departure: {
//     en: "Marsa Alam Hotels (Pickup time flexible from 12:00 PM)",
//     de: "Hotels in Marsa Alam (Abholzeit flexibel ab 12:00 Uhr)",
//     it: "Hotel di Marsa Alam (Orario di pick-up flessibile dalle 12:00)",
//     ru: "Отели Марса-Алам (Время трансфера гибкое с 12:00)",
//     pl: "Hotele w Marsa Alam (Czas odbioru elastyczny od 12:00)",
//     cz: "Hotely v Marsa Alam (Čas vyzvednutí flexibilní od 12:00)"
//   },
//   overview: {
//     en: "Discover Marsa Alam like a local. Explore the town, visit local landmarks, walk through vibrant Egyptian markets, and enjoy free time for shopping and experiencing everyday authentic life away from tourist resorts.",
//     de: "Entdecken Sie Marsa Alam wie ein Einheimischer. Erkunden Sie die Stadt, besuchen Sie lokale Wahrzeichen, schlendern Sie über lebendige Märkte und genießen Sie freie Zeit zum Shoppen abseits der Touristeneinrichtungen.",
//     it: "Scopri Marsa Alam come un abitante del posto. Esplora la città, visita i luoghi di interesse locale, passeggia tra i vivaci mercati ed è goditi del tempo libero per lo shopping lontano dai resort.",
//     ru: "Откройте для себя Марса-Алам глазами местного жителя. Исследуйте город, посетите местные достопримечательности, прогуляйтесь по колоритным рынкам и насладитесь шопингом вдали от курортов.",
//     pl: "Odkryj Marsa Alam jak lokalny住h. Zwiedzaj miasto, odwiedzaj lokalne miejsca, spaceruj po tętniących życiem targach i ciesz się czasem wolnym na zakupy z dala od kurortów.",
//     cz: "Objevte Marsa Alam jako místní. Prozkoumejte město, navštivte místní památky, projděte se po živých trzích a užijte si volný čas na nákupy mimo turistické rezorty."
//   },
//   highlights: {
//     en: [
//       "Unbeatable price of $10 total for your entire group/family",
//       "Guided walking tour around Marsa Alam local town",
//       "Visit the iconic local mosque and learn about everyday Egyptian culture",
//       "Explore traditional markets with Egyptian spices, souvenirs & handcrafts",
//       "Flexible departure times available anytime from 12:00 PM onwards",
//       "Accompanied by a dedicated local guide throughout the experience"
//     ],
//     de: [
//       "Unschlagbarer Preis von 10 $ insgesamt für Ihre gesamte Gruppe/Familie",
//       "Geführter Rundgang durch das Zentrum von Marsa Alam",
//       "Besuch der örtlichen Moschee und Einblicke in den ägyptischen Alltag",
//       "Erkundung traditioneller Märkte mit Gewürzen, Souvenirs & Handwerkskunst",
//       "Flexible Abfahrtszeiten jederzeit ab 12:00 Uhr verfügbar",
//       "Begleitung durch einen eigenen lokalen Reiseleiter während der gesamten Tour"
//     ],
//     it: [
//       "Prezzo imbattibile di $10 totale per l'intero gruppo/famiglia",
//       "Tour guidato a piedi nel centro abitato di Marsa Alam",
//       "Visita alla moschea locale e scoperta della vita quotidiana egiziana",
//       "Esplora i mercati tradizionali con spezie, souvenir e artigianato",
//       "Orari di partenza flessibili a partire dalle 12:00 in poi",
//       "Accompagnamento da parte di una guida locale dedicata"
//     ],
//     ru: [
//       "Выгодная цена $10 за всю вашу группу или семью",
//       "Пешеходная прогулка с гидом по городу Марса-Алам",
//       "Посещение местной мечети и знакомство с традициями и бытом",
//       "Прогулка по восточному рынку: специи, сувениры и изделия ручной работы",
//       "Гибкое время выезда в любое время начиная с 12:00",
//       "Персональный местный гид на протяжении всей экскурсии"
//     ],
//     pl: [
//       "Niesamowita cena 10 $ łącznie za całą Twoją grupę/rodzinę",
//       "Piesza wycieczka z przewodnikiem po miasteczku Marsa Alam",
//       "Wizyta w lokalnym meczecie i poznanie codziennego życia Egipcjan",
//       "Odkrywanie tradycyjnych targów z przyprawami, pamiątkami i rękodziełem",
//       "Elastyczne godziny wyjazdu dostępne od 12:00",
//       "Opieka lokalnego przewodnika podczas całej wycieczki"
//     ],
//     cz: [
//       "Bezkonkurenční cena 10 $ celkem za celou vaši skupinu/rodinu",
//       "Pěší prohlídka s průvodcem po městečku Marsa Alam",
//       "Návštěva místní mešity a poznání běžného života v Egyptě",
//       "Prohlídka tradičních trhů s kořením, suvenýry a řemeslnými výrobky",
//       "Flexibilní časy odjezdu kdykoliv od 12:00 dále",
//       "Doprovod místního průvodce po celou dobu zážitku"
//     ]
//   },
//   included: {
//     en: [
//       "Local guide throughout the tour",
//       "Guided town walking tour",
//       "Visits to the local mosque and traditional markets"
//     ],
//     de: [
//       "Lokaler Reiseleiter während der gesamten Tour",
//       "Geführter Stadtrundgang",
//       "Besuch der örtlichen Moschee und traditionellen Märkte"
//     ],
//     it: [
//       "Guida locale per tutta la durata del tour",
//       "Tour a piedi guidato della città",
//       "Visita alla moschea locale e ai mercati tradizionali"
//     ],
//     ru: [
//       "Местный гид на протяжении всего тура",
//       "Пешеходная обзорная прогулка по городу",
//       "Посещение местной мечети и традиционных рынков"
//     ],
//     pl: [
//       "Lokalny przewodnik podczas całej wycieczki",
//       "Spacer po mieście z przewodnikiem",
//       "Wizyta w lokalnym meczecie i na tradycyjnych targach"
//     ],
//     cz: [
//       "Místní průvodce po celou dobu prohlídky",
//       "Pěší prohlídka města s průvodcem",
//       "Návštěva místní mešity a tradičních trhů"
//     ]
//   },
//   whatToBring: {
//     en: [
//       "Comfortable walking shoes",
//       "Modest clothing for visiting the local mosque",
//       "Camera or smartphone",
//       "Local currency (EGP) for shopping & personal purchases"
//     ],
//     de: [
//       "Bequeme Wanderschuhe",
//       "Angemessene Kleidung für den Besuch der Moschee",
//       "Kamera oder Smartphone",
//       "Einheimische Währung (EGP) für Shopping & Einkäufe"
//     ],
//     it: [
//       "Scarpe comode da passeggio",
//       "Abbigliamento modesto per la visita alla moschea",
//       "Fotocamera o smartphone",
//       "Moneta locale (EGP) per acquisti e shopping"
//     ],
//     ru: [
//       "Удобная обувь для ходьбы",
//       "Скромная одежда для посещения мечети",
//       "Камера или смартфон",
//       "Местная валюта (EGP) для покупок и шопинга"
//     ],
//     pl: [
//       "Wygodne buty do chodzenia",
//       "Skromne ubranie odpowiednie do wizyty w meczecie",
//       "Aparat fotograficzny lub telefon",
//       "Lokalna waluta (EGP) na zakupy"
//     ],
//     cz: [
//       "Pohodlná obuv na chodění",
//       "Vhodné oblečení pro návštěvu mešity",
//       "Fotoaparát nebo smartphone",
//       "Místní měna (EGP) na nákupy"
//     ]
//   },
//   childrenPolicy: {
//     under5: {
//       en: "Free of charge (Tour price is per group, children included)",
//       de: "Kostenlos (Tourpreis gilt pro Gruppe, Kinder inklusive)",
//       it: "Gratuito (Il prezzo del tour è per gruppo, bambini inclusi)",
//       ru: "Бесплатно (Цена тура за группу, дети включены)",
//       pl: "Bezpłatnie (Cena wycieczki dotyczy grupy, dzieci w cenie)",
//       cz: "Zdarma (Cena prohlídky je za skupinu, děti v cenie)"
//     },
//     from5to10: {
//       en: "Included in group tour price",
//       de: "Im Gruppenpreis enthalten",
//       it: "Incluso nel prezzo del gruppo",
//       ru: "Включено в стоимость тура за группу",
//       pl: "W cenie wycieczki grupowej",
//       cz: "Zahrnuto v ceně prohlídky za skupinu"
//     },
//     over10: {
//       en: "Included in group tour price",
//       de: "Im Gruppenpreis enthalten",
//       it: "Incluso nel prezzo del gruppo",
//       ru: "Включено в стоимость тура за группу",
//       pl: "W cenie wycieczki grupowej",
//       cz: "Zahrnuto v ceně prohlídky za skupinu"
//     }
//   },
//   itinerary: [
//     {
//       step: "01",
//       title: {
//         en: "Hotel Departure — Flexible Timing (From 12:00 PM)",
//         de: "Hotelabholung — Flexible Zeit (Ab 12:00 Uhr)",
//         it: "Partenza dall'Hotel — Orario Flessibile (Dalle 12:00)",
//         ru: "Выезд из отеля — Гибкое время (С 12:00)",
//         pl: "Wyjazd z hotelu — Elastyczny czas (Od 12:00)",
//         cz: "Odjezd z hotelu — Flexibilní čas (Od 12:00)"
//       },
//       description: {
//         en: "Pickup from your hotel according to your preferred time slot between 12:00 PM and evening.",
//         de: "Abholung von Ihrem Hotel zu Ihrer Wunschzeit zwischen 12:00 Uhr und abends.",
//         it: "Pick-up dal tuo hotel nell'orario preferito tra le 12:00 e la sera.",
//         ru: "Трансфер из отеля в удобное для вас время с 12:00 до вечера.",
//         pl: "Odbiór z hotelu w wybranej przez Ciebie godzinie między 12:00 a wieczorem.",
//         cz: "Vyzvednutí v hotelu v čase podle вашей preference mezi 12:00 a večerem."
//       }
//     },
//     {
//       step: "02",
//       title: {
//         en: "Marsa Alam Town & Local Mosque Visit",
//         de: "Stadt Marsa Alam & Besichtigung der Moschee",
//         it: "Città di Marsa Alam e Visita alla Moschea Locale",
//         ru: "Город Марса-Алам и посещение местной мечети",
//         pl: "Miasteczko Marsa Alam i wizyta w meczecie",
//         cz: "Městečko Marsa Alam a návštěva místní mešity"
//       },
//       description: {
//         en: "Walk through the heart of Marsa Alam town, visit a local mosque landmark, and discover local community culture.",
//         de: "Spazieren Sie durch das Zentrum von Marsa Alam, besuchen Sie die örtliche Moschee und lernen Sie die Kultur der Einwohner kennen.",
//         it: "Passeggia nel cuore di Marsa Alam, visita la moschea locale e scopri la cultura della comunità.",
//         ru: "Прогулка по центру Марса-Алам, посещение местной мечети и знакомство с культурой местных жителей.",
//         pl: "Spacer po centrum Marsa Alam, wizyta w lokalnym meczecie i poznanie kultury mieszkańców.",
//         cz: "Procházka centrem Marsa Alam, návštěva místní mešity a poznání místní kultury."
//       }
//     },
//     {
//       step: "03",
//       title: {
//         en: "Local Market & Shopping Experience",
//         de: "Einkaufserlebnis auf dem lokalen Markt",
//         it: "Esperienza al Mercato Locale e Shopping",
//         ru: "Местный рынок и шопинг",
//         pl: "Lokalny targ i zakupy",
//         cz: "Místní trh a nákupy"
//       },
//       description: {
//         en: "Enjoy free time for shopping in traditional shops selling Egyptian spices, perfumes, oils, souvenirs, and handmade products.",
//         de: "Genießen Sie freie Zeit zum Einkaufen in traditionellen Geschäften mit Gewürzen, Parfüms, Ölen, Souvenirs und Handwerkskunst.",
//         it: "Goditi del tempo libero per lo shopping in negozi tradizionali di spezie, profumi, oli, souvenir e artigianato locale.",
//         ru: "Свободное время для шопинга في традиционных лавках: специи, парфюмерия, масла, сувениры и ручные изделия.",
//         pl: "Czas wolny na zakupy w tradycyjnych sklepach z przyprawami, perfumami, olejkami, pamiątkami i rękodziełem.",
//         cz: "Užijte si volný čas na nákupy v tradičních obchůdcích s kořením, parfémy, oleji, suvenýry a ručními výrobky."
//       }
//     }
//   ],
//   paymentNote: {
//     en: "City Tour Pricing: $10 total per group/family (Not per person). Transportation price is calculated separately based on pickup location and group size. Payment collected on the day of the tour.",
//     de: "Preis für die Stadtrundfahrt: 10 $ insgesamt pro Gruppe/Familie (Nicht pro Person). Der Transferpreis wird je nach Standort und Gruppengröße berechnet. Zahlung am Tag der Tour.",
//     it: "Prezzo Tour Città: $10 totale per gruppo/famiglia (Non a persona). Il prezzo del trasporto viene calcolato a parte in base alla posizione e al numero di persone. Pagamento il giorno del tour.",
//     ru: "Цена тура: $10 за всю группу/семью (Не с человека). Трансфер оплачивается отдельно в зависимости от отеля и количества человек. Оплата в день экскурсии.",
//     pl: "Cena wycieczki po mieście: 10 $ łącznie za grupę/rodzinę (Nie za osobę). Cena transportu jest obliczana osobiście w zależności od lokalizacji i liczby osób. Płatność w dniu wycieczki.",
//     cz: "Cena prohlídky města: 10 $ celkem za skupinu/rodinu (Ne za osobu). Cena dopravy se počítá zvlášť podle polohy hotelu a počtu osob. Platba v den prohlídky."
//   },
//   disclaimer: {
//     en: "Transportation costs vary depending on your hotel distance and number of guests. Food, drinks, personal shopping, and purchases are not included in the $10 tour fee.",
//     de: "Die Transportkosten variieren je nach Hotelentfernung und Personenanzahl. Verpflegung, Getränke und persönliche Einkäufe sind nicht in der Tourgebühr von 10 $ enthalten.",
//     it: "I costi di trasporto variano in base alla distanza dell'hotel e al numero di ospiti. Cibo, bevande e acquisti personali non sono inclusi nella quota tour di $10.",
//     ru: "Стоимость трансфера зависит от удаленности отеля и количества гостей. Еда, напитки и личные покупки не входят в стоимость тура $10.",
//     pl: "Koszty transportu zależą od odległości hotelu i liczby gości. Jedzenie, napoje i prywatne zakupy nie są wliczone w opłatę 10 $ za wycieczkę.",
//     cz: "Náklady na dopravu se liší podle vzdálenosti hotelu a počtu hostů. Jídlo, pití a osobní nákupy nejsou zahrnuty v ceně prohlídky 10 $."
//   },
//   images: {
//     featured: "/images/tours/marsa-alam-city-tour.jpg",
//     gallery: [
//       "/images/tours/marsa-alam-city-tour-1.jpg",
//       "/images/tours/marsa-alam-city-tour-2.jpg",
//       "/images/tours/marsa-alam-city-tour-3.jpg"
//     ]
//   }
// }
// ];