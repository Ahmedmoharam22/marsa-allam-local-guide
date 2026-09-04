import { Tour } from '@/types/tour';

export const tours: Tour[] = [
  {
    id: "dolphin-house-samadai",
    slug: "dolphin-house-samadai-reef",
    title: {
      en: "Dolphin House (Samadai Reef)",
      de: "Delfinhaus (Samadai-Riff)",
      it: "Dolphin House (Samadai Reef)",
      ru: "Дом дельфинов (Риф Самадай)",
      pl: "Dolphin House (Rafa Samadai)",
      cz: "Dolphin House (Útes Samadai)"
    },
    subtitle: {
      en: "Dolphin & Snorkeling Experience",
      de: "Delfin- & Schnorchelerlebnis",
      it: "Esperienza di Snorkeling e Delfini",
      ru: "Плавание с дельфинами и снорклинг",
      pl: "Przygoda z delfinami i snorkeling",
      cz: "Zážitek s delfíny a šnorchlování"
    },
    category: {
      en: "Water Adventures",
      de: "Wasserabenteuer",
      it: "Avventure in Acqua",
      ru: "Морские приключения",
      pl: "Przygody Wodne",
      cz: "Vodní dobrodružství"
    },
    price: {
      amount: 75,
      currency: "€",
      unit: {
        en: "per person",
        de: "pro Person",
        it: "per persona",
        ru: "за человека",
        pl: "za osobę",
        cz: "za osobu"
      }
    },
    duration: {
      en: "Full Day",
      de: "Ganztägig",
      it: "Intera giornata",
      ru: "Полный день",
      pl: "Cały dzień",
      cz: "Celý den"
    },
    departure: {
      en: "Marsa Alam Marina",
      de: "Marina Marsa Alam",
      it: "Marina di Marsa Alam",
      ru: "Марина Марса-Алам",
      pl: "Marina Marsa Alam",
      cz: "Marina Marsa Alam"
    },
    overview: {
      en: "Spend a full day exploring the famous Dolphin House (Samadai Reef), with crystal-clear water, colorful coral reefs, and the chance to experience dolphins in their natural environment. Enjoy 2 snorkeling sessions during the trip.",
      de: "Verbringen Sie einen ganzen Tag damit, das berühmte Delfinhaus (Samadai-Riff) zu erkunden, mit kristallklarem Wasser, bunten Korallenriffen und der Chance, Delfine in ihrer natürlichen Umgebung zu erleben.",
      it: "Trascorri un'intera giornata esplorando la famosa Dolphin House (Samadai Reef), con acque cristalline, barriere coralline colorate e la possibilità di avvistare i delfini nel loro ambiente naturale.",
      ru: "Проведите полный день, исследуя знаменитый Дом Дельфинов (риф Самадай) с кристально чистой водой, красочными коралловыми рифами и возможностью увидеть дельфинов в их естественной среде.",
      pl: "Spędź cały dzień na odkrywaniu słynnego Dolphin House (Rafa Samadai) z krystalicznie czystą wodą, kolorowymi rafami koralowymi i szansą na spotkanie delfinów w ich naturalnym środowisku.",
      cz: "Strávíte celý den objevováním slavného Dolphin House (útes Samadai) s průzračnou vodou, barevnými koralovými útesy a možností vidět delfíny v jejich přirozeném prostředí."
    },
    highlights: {
      en: [
        "Dolphin watching & snorkeling",
        "1st snorkeling session in the dolphin area",
        "2nd snorkeling session at the coral reefs",
        "Chance to see and swim with wild dolphins",
        "Beautiful coral reefs & marine life",
        "Boat trip from Marsa Alam Marina",
        "Lunch onboard",
        "Hot & cold drinks"
      ],
      de: [
        "Delfinbeobachtung & Schnorcheln",
        "1. Schnorchelgang im Delfingebiet",
        "2. Schnorchelgang am Korallenriff",
        "Chance, wilde Delfine zu sehen und mit ihnen zu schwimmen",
        "Wunderschöne Korallenriffe & Unterwasserwelt",
        "Bootsfahrt ab Marina Marsa Alam",
        "Mittagessen an Bord",
        "Warme & kalte Getränke"
      ],
      it: [
        "Avvistamento delfini e snorkeling",
        "Prima sessione di snorkeling nell'area dei delfini",
        "Seconda sessione di snorkeling sulla barriera corallina",
        "Possibilità di vedere e nuotare con delfini selvatici",
        "Meravigliose barriere coralline e vita marina",
        "Gita in barca dalla Marina di Marsa Alam",
        "Pranzo a bordo",
        "Bevande calde e fredde"
      ],
      ru: [
        "Наблюдение за дельфинами и снорклинг",
        "1-е погружение с маской в зоне дельфинов",
        "2-е погружение на коралловом рифе",
        "Шанс увидеть диких дельфинов и поплавать с ними",
        "Красивые коралловые рифы и морская жизнь",
        "Прогулка на яхте из Марины Марса-Алам",
        "Обед на борту",
        "Горячие и холодные напитки"
      ],
      pl: [
        "Obserwacja delfinów i snorkeling",
        "Pierwsze nurkowanie z rurką w rejonie delfinów",
        "Drugie nurkowanie z rurką przy rafie koralowej",
        "Szansa na zobaczenie i pływanie z dzikimi delfinami",
        "Piękne rafy koralowe i życie morskie",
        "Rejs statkiem z Mariny Marsa Alam",
        "Obiad na pokładzie",
        "Gorące i zimne napoje"
      ],
      cz: [
        "Pozorování delfínů a šnorchlování",
        "1. šnorchlování v oblasti delfínů",
        "2. šnorchlování u koralových útesů",
        "Šance vidět a plavat s divokými delfíny",
        "Krásné koralové útesy a mořský život",
        "Výlet lodí z Mariny Marsa Alam",
        "Oběd na palubě",
        "Teplé a studené nápoje"
      ]
    },
    included: {
      en: [
        "Hotel pickup & drop-off",
        "Boat trip",
        "Full snorkeling equipment",
        "Professional guide",
        "2 snorkeling sessions",
        "Lunch onboard",
        "Hot & cold drinks and water"
      ],
      de: [
        "Abholung & Rückbringung zum Hotel",
        "Bootsfahrt",
        "Komplette Schnorchelausrüstung",
        "Professioneller Guide",
        "2 Schnorchelgänge",
        "Mittagessen an Bord",
        "Warme & kalte Getränke sowie Wasser"
      ],
      it: [
        "Transfer da e per l'hotel",
        "Gita in barca",
        "Attrezzatura completa da snorkeling",
        "Guida professionale",
        "2 sessioni di snorkeling",
        "Pranzo a bordo",
        "Bevande calde, fredde e acqua"
      ],
      ru: [
        "Трансфер из отеля и обратно",
        "Прогулка на яхте",
        "Полное снаряжение для снорклинга",
        "Профессиональный гид",
        "2 сеанса снорклинга",
        "Обед на борту",
        "Горячие, холодные напитки и вода"
      ],
      pl: [
        "Odbiór i powrót do hotelu",
        "Rejs statkiem",
        "Pełny sprzęt do snorkelingu",
        "Profesjonalny przewodnik",
        "2 sesje snorkelingu",
        "Obiad na pokładzie",
        "Zimne i gorące napoje oraz woda"
      ],
      cz: [
        "Vyzvednutí a návrat do hotelu",
        "Výlet lodí",
        "Kompletní vybavení na šnorchlování",
        "Profesionální průvodce",
        "2 šnorchlovací relace",
        "Oběd na palubě",
        "Teplé a studené nápoje, voda"
      ]
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
      de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
      it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
      ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
      pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
      cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
    },
    childrenPolicy: {
      under5: {
        en: "Under 5 years: Free",
        de: "Unter 5 Jahren: Kostenlos",
        it: "Sotto i 5 anni: Gratuito",
        ru: "До 5 лет: Бесплатно",
        pl: "Poniżej 5 lat: Bezpłatnie",
        cz: "Pod 5 let: Zdarma"
      },
      from5to10: {
        en: "5–10 years: 50% of adult price",
        de: "5–10 Jahre: 50% des Erwachsenenpreises",
        it: "5–10 anni: 50% del prezzo adulti",
        ru: "5–10 лет: 50% от стоимости взрослого",
        pl: "5–10 lat: 50% ceny dorosłego",
        cz: "5–10 let: 50 % z ceny dospělého"
      },
      over10: {
        en: "Over 10 years: Full adult price",
        de: "Über 10 Jahre: Voller Erwachsenenpreis",
        it: "Oltre i 10 anni: Prezzo intero adulto",
        ru: "Старше 10 лет: Полная стоимость",
        pl: "Powyżej 10 lat: Pełna cena",
        cz: "Nad 10 let: Plná cena"
      }
    },
    itinerary: [
      {
        step: "01",
        title: {
          en: "Marsa Alam Marina",
          de: "Marina Marsa Alam",
          it: "Marina di Marsa Alam",
          ru: "Марина Марса-Алам",
          pl: "Marina Marsa Alam",
          cz: "Marina Marsa Alam"
        },
        description: {
          en: "Departure from the marina.",
          de: "Abfahrt von der Marina.",
          it: "Partenza dalla marina.",
          ru: "Отправление из марины.",
          pl: "Wypłynięcie z mariny.",
          cz: "Odjezd z mariny."
        }
      },
      {
        step: "02",
        title: {
          en: "Boat Trip",
          de: "Bootsfahrt",
          it: "Gita in Barca",
          ru: "Морская прогулка",
          pl: "Rejs Statkiem",
          cz: "Plavba lodí"
        },
        description: {
          en: "Cruise toward Dolphin House (Samadai Reef).",
          de: "Fahrt zum Delfinhaus (Samadai-Riff).",
          it: "Navigazione verso Dolphin House (Samadai Reef).",
          ru: "Круиз к Дому Дельфинов (риф Самадай).",
          pl: "Rejs w stronę Dolphin House (Rafa Samadai).",
          cz: "Plavba k Dolphin House (útes Samadai)."
        }
      },
      {
        step: "03",
        title: {
          en: "1st Snorkeling Session — Dolphin Area",
          de: "1. Schnorcheln — Delfingebiet",
          it: "1ª Sessione Snorkeling — Area Delfini",
          ru: "1-й снорклинг — Зона дельфинов",
          pl: "1. Snorkeling — Strefa Delfinów",
          cz: "1. Šnorchlování — Oblast delfínů"
        },
        description: {
          en: "Search for wild dolphins and enjoy an unforgettable snorkeling experience.",
          de: "Suche nach wilden Delfinen und unvergessliches Schnorchelerlebnis.",
          it: "Cerca i delfini selvatici e goditi un'esperienza indimenticabile.",
          ru: "Поиск диких дельфинов и незабываемый снорклинг.",
          pl: "Poszukiwanie dzikich delfinów i niezapomniane nurkowanie z rurką.",
          cz: "Hledání divokých delfínů a nezapomenutelný zážitek ze šnorchlování."
        }
      },
      {
        step: "04",
        title: {
          en: "2nd Snorkeling Session — Coral Reef",
          de: "2. Schnorcheln — Korallenriff",
          it: "2ª Sessione Snorkeling — Barriera Corallina",
          ru: "2-й снорклинг — Коралловый риф",
          pl: "2. Snorkeling — Rafa Koralowa",
          cz: "2. Šnorchlování — Koralový útes"
        },
        description: {
          en: "Explore colorful coral reefs and discover rich marine life.",
          de: "Erkunden Sie bunte Korallenriffe und die reichhaltige Unterwasserwelt.",
          it: "Esplora barriere coralline colorate e scopri la ricca vita marina.",
          ru: "Исследуйте красочные рифы и богатый подводный мир.",
          pl: "Odkrywaj kolorowe rafy koralowe i bogate życie morskie.",
          cz: "Prozkoumejte barevné koralové útesy a bohatý mořský život."
        }
      },
      {
        step: "05",
        title: {
          en: "Lunch",
          de: "Mittagessen",
          it: "Pranzo",
          ru: "Обед",
          pl: "Obiad",
          cz: "Oběd"
        },
        description: {
          en: "Enjoy lunch onboard.",
          de: "Genießen Sie das Mittagessen an Bord.",
          it: "Goditi il pranzo a bordo.",
          ru: "Насладитесь обедом на борту.",
          pl: "Zjedz obiad na pokładzie.",
          cz: "Vychutnejte si oběd na palubě."
        }
      },
      {
        step: "06",
        title: {
          en: "Return to Marina",
          de: "Rückkehr zur Marina",
          it: "Ritorno alla Marina",
          ru: "Возвращение в марину",
          pl: "Powrót do Mariny",
          cz: "Návrat do mariny"
        },
        description: {
          en: "Directly after lunch.",
          de: "Direkt nach dem Mittagessen.",
          it: "Subito dopo pranzo.",
          ru: "Сразу после обеда.",
          pl: "Bezpośrednio po obiedzie.",
          cz: "Ihneď po obědě."
        }
      }
    ],
    paymentNote: {
      en: "Pay after the trip — no online payment required.",
      de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
      it: "Paga dopo il tour — nessuna pagamento online richiesto.",
      ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
      pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
      cz: "Platba až po výletu — není vyžadována platba předem online."
    },
    disclaimer: {
      en: "Dolphin sightings are not guaranteed. Dolphins are wild animals in their natural environment, and we always respect their natural habitat.",
      de: "Delfinsichtungen können nicht garantiert werden. Delfine sind wilde Tiere in ihrer natürlichen Umgebung.",
      it: "L'avvistamento dei delfini non è garantito. I delfini sono animali selvatici nel loro ambiente naturale.",
      ru: "Гарантия встречи с дельфинами не предоставляется. Дельфины — дикие животные в их естественной среде обитания.",
      pl: "Obserwacja delfinów nie jest gwarantowana. Delfiny to dzikie zwierzęta w swoim naturalnym środowisku.",
      cz: "Pozorování delfínů není zaručeno. Delfíni jsou divoká zvířata ve svém přirozeném prostředí."
    },
    images: {
      featured: "/images/tours/tour-2.webp",
      gallery: [
        "/images/tours/tour-3.webp",
        "/images/tours/tour-4.webp",
        "/images/tours/tour-2.webp"
      ]
    }
  },
  {
  id: "sataya-reef-dolphins",
  slug: "sataya-reef-dolphin-snorkeling",
  title: {
    en: "Sataya Reef",
    de: "Sataya-Riff",
    it: "Sataya Reef",
    ru: "Риф Сатая",
    pl: "Rafa Sataya",
    cz: "Útes Sataya"
  },
  subtitle: {
    en: "Dolphin & Snorkeling Experience",
    de: "Delfin- & Schnorchelerlebnis",
    it: "Esperienza di Snorkeling e Delfini",
    ru: "Плавание с дельфинами и снорклинг",
    pl: "Przygoda z delfinami i snorkeling",
    cz: "Zážitek s delfíny a šnorchlování"
  },
  category: {
    en: "Water Adventures",
    de: "Wasserabenteuer",
    it: "Avventure in Acqua",
    ru: "Морские приключения",
    pl: "Przygody Wodne",
    cz: "Vodní dobrodružství"
  },
  price: {
    amount: 80,
    currency: "€",
    unit: {
      en: "per person",
      de: "pro Person",
      it: "per persona",
      ru: "за человека",
      pl: "za osobę",
      cz: "za osobu"
    }
  },
  duration: {
    en: "Full Day",
    de: "Ganztägig",
    it: "Intera giornata",
    ru: "Полный день",
    pl: "Cały dzień",
    cz: "Celý den"
  },
  departure: {
    en: "Hamata Marina",
    de: "Marina Hamata",
    it: "Marina di Hamata",
    ru: "Марина Хамата",
    pl: "Marina Hamata",
    cz: "Marina Hamata"
  },
  overview: {
    en: "Experience the magic of Sataya Reef, one of the Red Sea’s most famous dolphin areas. Spend the day snorkeling and exploring the natural habitat of wild dolphins with 2 snorkeling sessions (approx. 50 mins each).",
    de: "Erleben Sie die Magie des Sataya-Riffs, eines der berühmtesten Delfingebiete des Roten Meeres. Verbringen Sie den Tag beim Schnorcheln im natürlichen Lebensraum wilder Delfine mit 2 Schnorchelgängen (je ca. 50 Min.).",
    it: "Vivi la magia di Sataya Reef, una delle aree di delfini più famose del Mar Rosso. Trascorri la giornata facendo snorkeling e esplorando l'habitat naturale dei delfini selvatici con 2 sessioni di snorkeling (circa 50 min ciascuna).",
    ru: "Ощутите магию рифа Сатая — одного из самых знаменитых мест с дельфинами в Красном море. Проведите день, плавая в естественной среде обитания диких дельфинов (2 сеанса снорклинга по 50 минут).",
    pl: "Poczuj magię Rafy Sataya, jednego z najsłynniejszych miejsc występowania delfinów w Morzu Czerwonym. Spędź dzień na snorkelingu w naturalnym środowisku dzikich delfinów (2 sesje po ok. 50 minut).",
    cz: "Zažijte kouzlo útesu Sataya, jednej z nejslavnějších oblastí s delfíny v Rudém moři. Strávíte den šnorchlováním v přirozeném prostředí divokých delfínů (2 šnorchlovací relace po cca 50 minutách)."
  },
  highlights: {
    en: [
      "Dolphin watching & snorkeling",
      "2 snorkeling sessions — approx. 50 minutes each",
      "Snorkeling at Sataya Reef",
      "Chance to see wild dolphins",
      "Beautiful coral reefs & marine life",
      "Boat trip from Hamata Marina",
      "Lunch onboard",
      "Hot & cold drinks"
    ],
    de: [
      "Delfinbeobachtung & Schnorcheln",
      "2 Schnorchelgänge — je ca. 50 Minuten",
      "Schnorcheln am Sataya-Riff",
      "Chance, wilde Delfine zu sehen",
      "Wunderschöne Korallenriffe & Unterwasserwelt",
      "Bootsfahrt ab Marina Hamata",
      "Mittagessen an Bord",
      "Warme & kalte Getränke"
    ],
    it: [
      "Avvistamento delfini e snorkeling",
      "2 sessioni di snorkeling — circa 50 minuti ciascuna",
      "Snorkeling a Sataya Reef",
      "Possibilità di vedere delfini selvatici",
      "Meravigliose barriere coralline e vita marina",
      "Gita in barca dalla Marina di Hamata",
      "Pranzo a bordo",
      "Bevande calde e fredde"
    ],
    ru: [
      "Наблюдение за дельфинами и снорклинг",
      "2 сеанса снорклинга — примерно по 50 минут",
      "Снорклинг на рифе Сатая",
      "Шанс увидеть диких дельфинов",
      "Красивые коралловые рифы и морская жизнь",
      "Прогулка на яхте из Марины Хамата",
      "Обед на борту",
      "Горячие и холодные напитки"
    ],
    pl: [
      "Obserwacja delfinów i snorkeling",
      "2 sesje snorkelingu — około 50 minut każda",
      "Snorkeling na Rafie Sataya",
      "Szansa na zobaczenie dzikich delfinów",
      "Piękne rafy koralowe i życie morskie",
      "Rejs statkiem z Mariny Hamata",
      "Obiad na pokładzie",
      "Gorące i zimne napoje"
    ],
    cz: [
      "Pozorování delfínů a šnorchlování",
      "2 šnorchlovací relace — cca 50 minut každá",
      "Šnorchlování na útesu Sataya",
      "Šance vidět divoké delfíny",
      "Krásné koralové útesy a mořský život",
      "Výlet lodí z Mariny Hamata",
      "Oběd na palubě",
      "Teplé a studené nápoje"
    ]
  },
  included: {
    en: [
      "Hotel pickup & drop-off",
      "Boat trip",
      "Snorkeling equipment",
      "Professional guide",
      "2 snorkeling sessions (50 mins each)",
      "Lunch onboard",
      "Hot & cold drinks and water"
    ],
    de: [
      "Abholung & Rückbringung zum Hotel",
      "Bootsfahrt",
      "Schnorchelausrüstung",
      "Professioneller Guide",
      "2 Schnorchelgänge (je 50 Min.)",
      "Mittagessen an Bord",
      "Warme & kalte Getränke sowie Wasser"
    ],
    it: [
      "Transfer da e per l'hotel",
      "Gita in barca",
      "Attrezzatura da snorkeling",
      "Guida professionale",
      "2 sessioni di snorkeling (50 min ciascuna)",
      "Pranzo a bordo",
      "Bevande calde, fredde e acqua"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "Прогулка на яхте",
      "Снаряжение для снорклинга",
      "Профессиональный гид",
      "2 сеанса снорклинга (по 50 мин)",
      "Обед на борту",
      "Горячие, холодные напитки и вода"
    ],
    pl: [
      "Odbiór i powrót do hotelu",
      "Rejs statkiem",
      "Sprzęt do snorkelingu",
      "Profesjonalny przewodnik",
      "2 sesje snorkelingu (po 50 min)",
      "Obiad na pokładzie",
      "Zimne i gorące napoje oraz woda"
    ],
    cz: [
      "Vyzvednutí a návrat do hotelu",
      "Výlet lodí",
      "Vybavení na šnorchlování",
      "Profesionální průvodce",
      "2 šnorchlovací relace (cca 50 min)",
      "Oběd na palubě",
      "Teplé a studené nápoje, voda"
    ]
  },
  whatToBring: {
    en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
    de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
    it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
    ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
    pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
    cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
  },
  childrenPolicy: {
    under5: {
      en: "Under 5 years: Free",
      de: "Unter 5 Jahren: Kostenlos",
      it: "Sotto i 5 anni: Gratuito",
      ru: "До 5 лет: Бесплатно",
      pl: "Poniżej 5 lat: Bezpłatnie",
      cz: "Pod 5 let: Zdarma"
    },
    from5to10: {
      en: "5–10 years: 50% of adult price",
      de: "5–10 Jahre: 50% des Erwachsenenpreises",
      it: "5–10 anni: 50% del prezzo adulti",
      ru: "5–10 лет: 50% от стоимости взрослого",
      pl: "5–10 lat: 50% ceny dorosłego",
      cz: "5–10 let: 50 % z ceny dospělého"
    },
    over10: {
      en: "Over 10 years: Full adult price",
      de: "Über 10 Jahre: Voller Erwachsenenpreis",
      it: "Oltre i 10 anni: Prezzo intero adulto",
      ru: "Старше 10 лет: Полная стоимость",
      pl: "Powyżej 10 lat: Pełna cena",
      cz: "Nad 10 let: Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hamata Marina",
        de: "Marina Hamata",
        it: "Marina di Hamata",
        ru: "Марина Хамата",
        pl: "Marina Hamata",
        cz: "Marina Hamata"
      },
      description: {
        en: "Departure from Hamata Marina.",
        de: "Abfahrt von der Marina Hamata.",
        it: "Partenza dalla Marina di Hamata.",
        ru: "Отправление из марины Хамата.",
        pl: "Wypłynięcie z Mariny Hamata.",
        cz: "Odjezd z mariny Hamata."
      }
    },
    {
      step: "02",
      title: {
        en: "Boat Trip to Sataya Reef",
        de: "Bootsfahrt zum Sataya-Riff",
        it: "Gita in Barca a Sataya Reef",
        ru: "Морская прогулка к рифу Сатая",
        pl: "Rejs na Rafę Sataya",
        cz: "Plavba lodí na útes Sataya"
      },
      description: {
        en: "Scenic cruise toward Sataya Reef.",
        de: "Malerische Fahrt in Richtung Sataya-Riff.",
        it: "Navigazione panoramica verso Sataya Reef.",
        ru: "Живописный круиз к рифу Сатая.",
        pl: "Malowniczy rejs w stronę Rafy Sataya.",
        cz: "Vyhlídková plavba k útesu Sataya."
      }
    },
    {
      step: "03",
      title: {
        en: "1st Snorkeling Session — 50 Mins",
        de: "1. Schnorcheln — 50 Min.",
        it: "1ª Sessione Snorkeling — 50 min",
        ru: "1-й снорклинг — 50 минут",
        pl: "1. Snorkeling — 50 minut",
        cz: "1. Šnorchlování — 50 min"
      },
      description: {
        en: "Explore the reef and search for dolphins.",
        de: "Erkunden Sie das Riff und suchen Sie nach Delfinen.",
        it: "Esplora la barriera e cerca i delfini.",
        ru: "Исследуйте риф и ищите дельфинов.",
        pl: "Odkrywaj rafę i szukaj delfinów.",
        cz: "Prozkoumejte útes a hledejte delfíny."
      }
    },
    {
      step: "04",
      title: {
        en: "Lunch Onboard",
        de: "Mittagessen an Bord",
        it: "Pranzo a Bordo",
        ru: "Обед на борту",
        pl: "Obiad na Pokładzie",
        cz: "Oběd na palubě"
      },
      description: {
        en: "Freshly prepared lunch on the boat.",
        de: "Frisch zubereitetes Mittagessen auf dem Boot.",
        it: "Pranzo fresco preparato a bordo.",
        ru: "Свежеприготовленный обед на яхте.",
        pl: "Świeżo przygotowany obiad na statku.",
        cz: "Čerstvě připravený oběd na lodi."
      }
    },
    {
      step: "05",
      title: {
        en: "2nd Snorkeling Session — 50 Mins",
        de: "2. Schnorcheln — 50 Min.",
        it: "2ª Sessione Snorkeling — 50 min",
        ru: "2-й снорклинг — 50 минут",
        pl: "2. Snorkeling — 50 minut",
        cz: "2. Šnorchlování — 50 min"
      },
      description: {
        en: "Continue exploring Sataya’s waters and dolphin area.",
        de: "Erkunden Sie weiter die Gewässer und das Delfingebiet.",
        it: "Continua a esplorare le acque di Sataya e l'area dei delfini.",
        ru: "Продолжайте исследовать воды Сатаи и зону дельфинов.",
        pl: "Kontynuuj odkrywanie wód Sataya i strefy delfinów.",
        cz: "Pokračujte v objevování vod Satayi a oblasti delfínů."
      }
    },
    {
      step: "06",
      title: {
        en: "Return to Hamata Marina",
        de: "Rückkehr zur Marina Hamata",
        it: "Ritorno alla Marina di Hamata",
        ru: "Возвращение в марину Хамата",
        pl: "Powrót do Mariny Hamata",
        cz: "Návrat do mariny Hamata"
      },
      description: {
        en: "Cruise back after an unforgettable day.",
        de: "Rückfahrt nach einem unvergesslichen Tag.",
        it: "Rientro dopo una giornata indimenticabile.",
        ru: "Возвращение назад после незабываемого дня.",
        pl: "Powrót po niezapomnianym dniu.",
        cz: "Návrat zpět po nezapomenutelném dni."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment required.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
    it: "Paga dopo il tour — nessuna pagamento online richiesto.",
    ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
    pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
    cz: "Platba až po výletu — není vyžadována platba předem online."
  },
  disclaimer: {
    en: "Dolphin sightings are not guaranteed. Dolphins are wild animals in their natural environment, and we always respect their natural habitat.",
    de: "Delfinsichtungen können nicht garantiert werden. Delfine sind wilde Tiere in ihrer natürlichen Umgebung.",
    it: "L'avvistamento dei delfini non è garantito. I delfini sono animali selvatici nel loro ambiente naturale.",
    ru: "Гарантия встречи с дельфинами не предоставляется. Дельфины — дикие животные в их естественной среде обитания.",
    pl: "Obserwacja delfinów nie jest gwarantowana. Delfiny to dzikie zwierzęta w swoim naturalnym środowisku.",
    cz: "Pozorování delfínů není zaručeno. Delfíni jsou divoká zvířata ve svém přirozeném prostředí."
  },
  images: {
    featured: "/images/tours/staya-card.webp",
    gallery: [
      "/images/tours/staya-1.webp",
      "/images/tours/staya-2.webp",
      "/images/tours/staya-3.webp"
    ]
  }
},
{
  id: "abu-dabbab-turtle-bay",
  slug: "abu-dabbab-turtle-bay-snorkeling",
  title: {
    en: "Abu Dabbab (Turtle Bay)",
    de: "Abu Dabbab (Schildkrötenbucht)",
    it: "Abu Dabbab (Baia delle Tartarughe)",
    ru: "Абу-Дабаб (Черепаший залив)",
    pl: "Abu Dabbab (Zatoka Żółwi)",
    cz: "Abu Dabbab (Želví zátoka)"
  },
  subtitle: {
    en: "Turtle Snorkeling Experience",
    de: "Schildkröten-Schnorchelerlebnis",
    it: "Esperienza di Snorkeling con le Tartarughe",
    ru: "Снорклинг с морскими черепахами",
    pl: "Przygoda ze snorkelingiem i żółwiami",
    cz: "Šnorchlování s želvami"
  },
  category: {
    en: "Beach & Snorkeling",
    de: "Strand & Schnorcheln",
    it: "Spiaggia e Snorkeling",
    ru: "Пляж и снорклинг",
    pl: "Plaża i Snorkeling",
    cz: "Pláž a šnorchlování"
  },
  price: {
    amount: 60,
    currency: "€",
    unit: {
      en: "per person",
      de: "pro Person",
      it: "per persona",
      ru: "за человека",
      pl: "za osobę",
      cz: "za osobu"
    }
  },
  duration: {
    en: "6 Hours",
    de: "6 Stunden",
    it: "6 Ore",
    ru: "6 часов",
    pl: "6 godzin",
    cz: "6 hodin"
  },
  departure: {
    en: "Marsa Alam",
    de: "Marsa Alam",
    it: "Marsa Alam",
    ru: "Марса-Алам",
    pl: "Marsa Alam",
    cz: "Marsa Alam"
  },
  overview: {
    en: "Spend 6 hours at Abu Dabbab (Turtle Bay), one of the best-known spots around Marsa Alam for seeing sea turtles in their natural environment. Enjoy 2 snorkeling sessions and relax on the beach.",
    de: "Verbringen Sie 6 Stunden in Abu Dabbab (Schildkrötenbucht), einem der bekanntesten Orte bei Marsa Alam, um Meeresschildkröten in ihrer natürlichen Umgebung zu sehen. Genießen Sie 2 Schnorchelgänge und entspannen Sie am Strand.",
    it: "Trascorri 6 ore ad Abu Dabbab (Baia delle Tartarughe), uno dei luoghi più famosi di Marsa Alam per vedere le tartarughe marine nel loro ambiente naturale. Goditi 2 sessioni di snorkeling e relax in spiaggia.",
    ru: "Проведите 6 часов в Абу-Дабаб (Черепашьей бухте) — одном из лучших мест в Марса-Аламе для наблюдения за морскими черепахами. Наслаждайтесь 2 сеансами снорклинга и отдыхом на пляже.",
    pl: "Spędź 6 godzin w Abu Dabbab (Zatoka Żółwi), jednym z najsłynniejszych miejsc w Marsa Alam do obserwacji żółwi morskich. Ciesz się 2 sesjami snorkelingu i relaksem na plaży.",
    cz: "Strávíte 6 hodin v Abu Dabbab (Želví zátoka), jedné z nejznámějších lokalit v Marsa Alam pro pozorování mořských želv. Užijte si 2 šnorchlovací relace a relaxaci na pláži."
  },
  highlights: {
    en: [
      "Sea turtle snorkeling",
      "2 snorkeling sessions — approx. 50 minutes each",
      "Beautiful coral reefs & marine life",
      "Relaxing beach time",
      "Snacks and water included"
    ],
    de: [
      "Schnorcheln mit Meeresschildkröten",
      "2 Schnorchelgänge — je ca. 50 Minuten",
      "Wunderschöne Korallenriffe & Unterwasserwelt",
      "Entspannende Zeit am Strand",
      "Snacks und Wasser inklusive"
    ],
    it: [
      "Snorkeling con le tartarughe marine",
      "2 sessioni di snorkeling — circa 50 minuti ciascuna",
      "Meravigliose barriere coralline e vita marina",
      "Relax in spiaggia",
      "Snack e acqua inclusi"
    ],
    ru: [
      "Снорклинг с морскими черепахами",
      "2 сеанса снорклинга — примерно по 50 минут",
      "Красивые коралловые рифы и морская жизнь",
      "Отдых на пляже",
      "Закуски и вода включены"
    ],
    pl: [
      "Snorkeling z żółwiami morskimi",
      "2 sesje snorkelingu — około 50 minut każda",
      "Piękne rafy koralowe i życie morskie",
      "Relaks na plaży",
      "Przekąski i woda w cenie"
    ],
    cz: [
      "Šnorchlování s mořskými želvami",
      "2 šnorchlovací relace — cca 50 minut každá",
      "Krásné koralové útesy a mořský život",
      "Relaxace na pláži",
      "Občerstvení a voda v ceně"
    ]
  },
  included: {
    en: [
      "Hotel pickup & drop-off",
      "Abu Dabbab (Turtle Bay) entrance ticket",
      "Snorkeling equipment",
      "Professional guide",
      "2 snorkeling sessions (50 mins each)",
      "Snacks",
      "Water"
    ],
    de: [
      "Abholung & Rückbringung zum Hotel",
      "Eintrittskarte für Abu Dabbab (Schildkrötenbucht)",
      "Schnorchelausrüstung",
      "Professioneller Guide",
      "2 Schnorchelgänge (je 50 Min.)",
      "Snacks",
      "Wasser"
    ],
    it: [
      "Transfer da e per l'hotel",
      "Biglietto d'ingresso ad Abu Dabbab",
      "Attrezzatura da snorkeling",
      "Guida professionale",
      "2 sessioni di snorkeling (50 min ciascuna)",
      "Snack",
      "Acqua"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "Входной билет в Абу-Дабаб",
      "Снаряжение для снорклинга",
      "Профессиональный гид",
      "2 сеанса снорклинга (по 50 мин)",
      "Закуски",
      "Вода"
    ],
    pl: [
      "Odbiór i powrót do hotelu",
      "Bilet wstępu do Abu Dabbab",
      "Sprzęt do snorkelingu",
      "Profesjonalny przewodnik",
      "2 sesje snorkelingu (po 50 min)",
      "Przekąski",
      "Woda"
    ],
    cz: [
      "Vyzvednutí a návrat do hotelu",
      "Vstupenka do Abu Dabbab",
      "Vybavení na šnorchlování",
      "Profesionální průvodce",
      "2 šnorchlovací relace (cca 50 min)",
      "Občerstvení",
      "Voda"
    ]
  },
  whatToBring: {
    en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
    de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
    it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
    ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
    pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
    cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
  },
  childrenPolicy: {
    under5: {
      en: "Under 5 years: Free",
      de: "Unter 5 Jahren: Kostenlos",
      it: "Sotto i 5 anni: Gratuito",
      ru: "До 5 лет: Бесплатно",
      pl: "Poniżej 5 lat: Bezpłatnie",
      cz: "Pod 5 let: Zdarma"
    },
    from5to10: {
      en: "5–10 years: 50% of adult price",
      de: "5–10 Jahre: 50% des Erwachsenenpreises",
      it: "5–10 anni: 50% del prezzo adulti",
      ru: "5–10 лет: 50% от стоимости взрослого",
      pl: "5–10 lat: 50% ceny dorosłego",
      cz: "5–10 let: 50 % z ceny dospělého"
    },
    over10: {
      en: "Over 10 years: Full adult price",
      de: "Über 10 Jahre: Voller Erwachsenenpreis",
      it: "Oltre i 10 anni: Prezzo intero adulto",
      ru: "Старше 10 лет: Полная стоимость",
      pl: "Powyżej 10 lat: Pełna cena",
      cz: "Nad 10 let: Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Pickup",
        de: "Hotelabholung",
        it: "Transfer dall'Hotel",
        ru: "Трансфер из отеля",
        pl: "Odbiór z Hotelu",
        cz: "Vyzvednutí v hotelu"
      },
      description: {
        en: "Transfer to Abu Dabbab (Turtle Bay).",
        de: "Transfer nach Abu Dabbab (Schildkrötenbucht).",
        it: "Trasferimento ad Abu Dabbab.",
        ru: "Трансфер в Абу-Дабаб.",
        pl: "Transfer do Abu Dabbab.",
        cz: "Transfer do Abu Dabbab."
      }
    },
    {
      step: "02",
      title: {
        en: "Arrival at Abu Dabbab",
        de: "Ankunft in Abu Dabbab",
        it: "Arrivo ad Abu Dabbab",
        ru: "Прибытие в Абу-Дабаб",
        pl: "Przyjazd do Abu Dabbab",
        cz: "Příjezd do Abu Dabbab"
      },
      description: {
        en: "Arrive and get ready for your snorkeling adventure.",
        de: "Ankommen und vorbereiten auf das Schnorcheln.",
        it: "Arrivo e preparazione per lo snorkeling.",
        ru: "Прибытие и подготовка к снорклингу.",
        pl: "Przyjazd i przygotowanie do snorkelingu.",
        cz: "Příjezd a příprava na šnorchlování."
      }
    },
    {
      step: "03",
      title: {
        en: "1st Snorkeling Session — 50 Mins",
        de: "1. Schnorcheln — 50 Min.",
        it: "1ª Sessione Snorkeling — 50 min",
        ru: "1-й снорклинг — 50 минут",
        pl: "1. Snorkeling — 50 minut",
        cz: "1. Šnorchlování — 50 min"
      },
      description: {
        en: "Explore the reef and search for sea turtles.",
        de: "Erkunden Sie das Riff und suchen Sie nach Schildkröten.",
        it: "Esplora la barriera e cerca le tartarughe.",
        ru: "Исследуйте риф и ищите морских черепах.",
        pl: "Odkrywaj rafę i szukaj żółwi morskich.",
        cz: "Prozkoumejte útes a hledejte mořské želvy."
      }
    },
    {
      step: "04",
      title: {
        en: "Beach Time & Snacks",
        de: "Strandzeit & Snacks",
        it: "Tempo in Spiaggia e Snack",
        ru: "Отдых на пляже и закуски",
        pl: "Relaks na Plaży i Przekąski",
        cz: "Čas na pláži a občerstvení"
      },
      description: {
        en: "Relax on the beach and enjoy some snacks.",
        de: "Entspannen Sie am Strand und genießen Sie Snacks.",
        it: "Rilassati in spiaggia e goditi qualche snack.",
        ru: "Отдохните на пляже и перекусите.",
        pl: "Zrelaksuj się na plaży i zjedz przekąskę.",
        cz: "Odpočiňte si na pláži a dejte si občerstvení."
      }
    },
    {
      step: "05",
      title: {
        en: "2nd Snorkeling Session — 50 Mins",
        de: "2. Schnorcheln — 50 Min.",
        it: "2ª Sessione Snorkeling — 50 min",
        ru: "2-й снорклинг — 50 минут",
        pl: "2. Snorkeling — 50 minut",
        cz: "2. Šnorchlování — 50 min"
      },
      description: {
        en: "Continue exploring Abu Dabbab's reef.",
        de: "Erkunden Sie weiter das Riff von Abu Dabbab.",
        it: "Continua a esplorare la barriera di Abu Dabbab.",
        ru: "Продолжайте исследовать риф Абу-Дабаб.",
        pl: "Kontynuuj odkrywanie rafy Abu Dabbab.",
        cz: "Pokračujte v objevování útesu Abu Dabbab."
      }
    },
    {
      step: "06",
      title: {
        en: "Return Transfer",
        de: "Rücktransfer",
        it: "Rientro in Hotel",
        ru: "Обратный трансфер",
        pl: "Powrót do Hotelu",
        cz: "Návrat do hotelu"
      },
      description: {
        en: "Transfer back to your hotel.",
        de: "Rückfahrt zu Ihrem Hotel.",
        it: "Trasferimento di ritorno in hotel.",
        ru: "Трансфер обратно в отель.",
        pl: "Powrót do hotelu.",
        cz: "Cesta zpět do hotelu."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment required.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
    it: "Paga dopo il tour — nessuna pagamento online richiesto.",
    ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
    pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
    cz: "Platba až po výletu — není vyžadována platba předem online."
  },
  disclaimer: {
    en: "Sea turtles are a regular part of Abu Dabbab, but sightings can never be guaranteed. We always respect wild marine life.",
    de: "Meeresschildkröten sind ein regelmäßiger Teil von Abu Dabbab, aber Sichtungen können nie garantiert werden.",
    it: "Le tartarughe marine sono frequenti ad Abu Dabbab, ma gli avvistamenti non possono essere garantiti.",
    ru: "Черепахи часто встречаются в Абу-Дабаб, но их наблюдение не может быть гарантировано на 100%.",
    pl: "Żółwie morskie są stałą częścią Abu Dabbab, ale ich zobaczenie nie jest gwarantowane.",
    cz: "Mořské želvy se v Abu Dabbab vyskytují regularly, ale jejich pozorování nelze garantovat."
  },
  images: {
    featured: "/images/tours/dabbab-card.webp",
    gallery: [
      "/images/tours/dabbab-4.webp",
      "/images/tours/dabbab-3.webp",
      "/images/tours/dabbab-2.webp"
    ]
  }
},
{
  id: "marsa-mubarak-dugong-turtle",
  slug: "marsa-mubarak-dugong-turtle-snorkeling",
  title: {
    en: "Marsa Mubarak",
    de: "Marsa Mubarak",
    it: "Marsa Mubarak",
    ru: "Марса-Мубарак",
    pl: "Marsa Mubarak",
    cz: "Marsa Mubarak"
  },
  subtitle: {
    en: "Dugong & Turtle Snorkeling Experience",
    de: "Seekuh- & Schildkröten-Schnorchelerlebnis",
    it: "Esperienza Snorkeling con Dugongo e Tartarughe",
    ru: "Снорклинг с дюгонем и черепахами",
    pl: "Przygoda ze snorkelingiem, diugoniem i żółwiami",
    cz: "Šnorchlování s kapustňákem a želvami"
  },
  category: {
    en: "Marine & Wildlife",
    de: "Meereswelt & Wildtiere",
    it: "Vita Marina e Natura",
    ru: "Морская природа",
    pl: "Przyroda Morska",
    cz: "Mořská příroda"
  },
  price: {
    amount: 55,
    currency: "€",
    unit: {
      en: "per person",
      de: "pro Person",
      it: "per persona",
      ru: "за человека",
      pl: "za osobę",
      cz: "za osobu"
    }
  },
  duration: {
    en: "8 Hours",
    de: "8 Stunden",
    it: "8 Ore",
    ru: "8 часов",
    pl: "8 godzin",
    cz: "8 hodin"
  },
  departure: {
    en: "Port Ghalib Marina",
    de: "Marina Port Ghalib",
    it: "Marina di Port Ghalib",
    ru: "Марина Порт-Галиб",
    pl: "Marina Port Ghalib",
    cz: "Marina Port Ghalib"
  },
  schedule: {
    departureTime: "08:30 AM",
    returnTime: "15:30 PM"
  },
  overview: {
    en: "Search for dugongs and swim with sea turtles! Spend a full day exploring Marsa Mubarak, enjoying 2 snorkeling sessions, colorful coral reefs, and a fresh buffet lunch onboard.",
    de: "Suchen Sie nach Seekühen und schwimmen Sie mit Meeresschildkröten! Verbringen Sie einen ganzen Tag in Marsa Mubarak mit 2 Schnorchelgängen, bunten Riffen und einem frischen Buffet an Bord.",
    it: "Cerca i dugonghi e nuota con le tartarughe marine! Trascorri una giornata intera esplorando Marsa Mubarak, godendoti 2 sessioni di snorkeling, barriere coralline e un delizioso pranzo a buffet a bordo.",
    ru: "Ищите дюгоней и плавайте с морскими черепахами! Проведите полный день в Марса-Мубарак: 2 сеанса снорклинга, красочные рифы и свежий обед «шведский стол» на борту.",
    pl: "Szukaj diugoni i pływaj z żółwiami morskimi! Spędź cały dzień na odkrywaniu Marsa Mubarak, ciesząc się 2 sesjami snorkelingu, kolorowymi rafami i świeżym bufetem na pokładzie.",
    cz: "Hledejte kapustňáky a plavejte s mořskými želvami! Strávíte celý den objevováním Marsa Mubarak se 2 šnorchlovacími relacemi, barevnými útesy a čerstvým obědem formou bufetu na palubě."
  },
  highlights: {
    en: [
      "Search for dugongs (sea cows)",
      "Chance to spot green sea turtles",
      "2 guided snorkeling sessions",
      "Colorful coral reefs and marine life",
      "Fresh buffet lunch onboard",
      "Hot & cold drinks",
      "Full-day Red Sea experience"
    ],
    de: [
      "Suche nach Seekühen (Dugongs)",
      "Chance, grüne Meeresschildkröten zu sehen",
      "2 geführte Schnorchelgänge",
      "Bunte Korallenriffe & Unterwasserwelt",
      "Frisches Buffet-Mittagessen an Bord",
      "Warme & kalte Getränke",
      "Ganztägiges Rotes Meer Erlebnis"
    ],
    it: [
      "Ricerca dei dugonghi (mucche di mare)",
      "Possibilità di avvistare tartarughe verdi",
      "2 sessioni di snorkeling guidate",
      "Barriere coralline colorate e vita marina",
      "Pranzo a buffet fresco a bordo",
      "Bevande calde e fredde",
      "Esperienza completa di una giornata nel Mar Rosso"
    ],
    ru: [
      "Поиск дюгоней (морских коров)",
      "Шанс увидеть зеленых морских черепах",
      "2 сеанса снорклинга с гидом",
      "Красочные коралловые рифы и морская жизнь",
      "Свежий обед «шведский стол» на борту",
      "Горячие и холодные напитки",
      "Морская прогулка на весь день"
    ],
    pl: [
      "Poszukiwanie diugoni (krów morskich)",
      "Szansa na spotkanie zielonych żółwi morskich",
      "2 sesje snorkelingu z przewodnikiem",
      "Kolorowe rafy koralowe i życie morskie",
      "Świeży obiad w formie bufetu na pokładzie",
      "Zimne i gorące napoje",
      "Całodniowa przygoda na Morzu Czerwonym"
    ],
    cz: [
      "Hledání kapustňáků (mořských krav)",
      "Šance vidět zelené mořské želvy",
      "2 vedené šnorchlovací relace",
      "Barevné koralové útesy a mořský život",
      "Čerstvý oběd formou bufetu na palubě",
      "Teplé a studené nápoje",
      "Celodenní zážitek v Rudém moři"
    ]
  },
  included: {
    en: [
      "Hotel pickup & drop-off",
      "Boat trip",
      "Professional multilingual snorkeling guide",
      "Full snorkeling equipment",
      "2 snorkeling sessions",
      "Fresh buffet lunch onboard",
      "Water, tea, coffee & soft drinks"
    ],
    de: [
      "Abholung & Rückbringung zum Hotel",
      "Bootsfahrt",
      "Professioneller mehrsprachiger Schnorchel-Guide",
      "Komplette Schnorchelausrüstung",
      "2 Schnorchelgänge",
      "Frisches Buffet-Mittagessen an Bord",
      "Wasser, Tee, Kaffee & Softdrinks"
    ],
    it: [
      "Transfer da e per l'hotel",
      "Gita in barca",
      "Guida snorkeling professionale multilingue",
      "Attrezzatura completa da snorkeling",
      "2 sessioni di snorkeling",
      "Pranzo a buffet fresco a bordo",
      "Acqua, tè, caffè e bevande analcoliche"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "Прогулка на яхте",
      "Профессиональный многоязычный гид",
      "Полное снаряжение для снорклинга",
      "2 сеанса снорклинга",
      "Свежий обед «шведский стол» на борту",
      "Вода, чай, кофе и безалкогольные напитки"
    ],
    pl: [
      "Odbiór i powrót do hotelu",
      "Rejs statkiem",
      "Profesjonalny wielojęzyczny przewodnik",
      "Pełny sprzęt do snorkelingu",
      "2 sesje snorkelingu",
      "Świeży obiad w formie bufetu na pokładzie",
      "Woda, herbata, kawa i napoje bezalkoholowe"
    ],
    cz: [
      "Vyzvednutí a návrat do hotelu",
      "Výlet lodí",
      "Profesionální vícejazyčný průvodce",
      "Kompletní vybavení na šnorchlování",
      "2 šnorchlovací relace",
      "Čerstvý oběd formou bufetu na palubě",
      "Voda, čaj, káva a nealkoholické nápoje"
    ]
  },
  notIncluded: {
    en: [
      "National Park / governmental fees ($5 per person)",
      "Personal expenses",
      "Tips for the boat crew",
      "Underwater photos & videos"
    ],
    de: [
      "Nationalpark- / Regierungsgebühren (5 $ pro Person)",
      "Persönliche Ausgaben",
      "Trinkgelder für die Bootsbesatzung",
      "Unterwasserfotos & Videos"
    ],
    it: [
      "Tasse del Parco Nazionale / Governative ($5 a persona)",
      "Spese personali",
      "Mance per l'equipaggio",
      "Foto e video subacquei"
    ],
    ru: [
      "Сбор национального парка / гос. пошлина ($5 с человека)",
      "Личные расходы",
      "Чаевые экипажу",
      "Подводные фото и видео"
    ],
    pl: [
      "Opłaty Parku Narodowego / rządowe (5 $ za osobę)",
      "Wydatki osobiste",
      "Napiwki dla załogi",
      "Zdjęcia i filmy podwodne"
    ],
    cz: [
      "Poplatky za Národní park / vládní poplatky (5 $ za osobu)",
      "Osobní výdaje",
      "Sprepropitné pro posádku",
      "Podvodní fotografie a videa"
    ]
  },
  whatToBring: {
    en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
    de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
    it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
    ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
    pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
    cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
  },
  childrenPolicy: {
    under5: {
      en: "Under 5 years: Free",
      de: "Unter 5 Jahren: Kostenlos",
      it: "Sotto i 5 anni: Gratuito",
      ru: "До 5 лет: Бесплатно",
      pl: "Poniżej 5 lat: Bezpłatnie",
      cz: "Pod 5 let: Zdarma"
    },
    from5to10: {
      en: "5–10 years: 50% of adult price",
      de: "5–10 Jahre: 50% des Erwachsenenpreises",
      it: "5–10 anni: 50% del prezzo adulti",
      ru: "5–10 лет: 50% от стоимости взрослого",
      pl: "5–10 lat: 50% ceny dorosłego",
      cz: "5–10 let: 50 % z ceny dospělého"
    },
    over10: {
      en: "Over 10 years: Full adult price",
      de: "Über 10 Jahre: Voller Erwachsenenpreis",
      it: "Oltre i 10 anni: Prezzo intero adulto",
      ru: "Старше 10 лет: Полная стоимость",
      pl: "Powyżej 10 lat: Pełna cena",
      cz: "Nad 10 let: Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "08:30 — Departure Port Ghalib",
        de: "08:30 — Abfahrt Port Ghalib",
        it: "08:30 — Partenza Port Ghalib",
        ru: "08:30 — Отправление из Порт-Галиб",
        pl: "08:30 — Wypłynięcie Port Ghalib",
        cz: "08:30 — Odjezd z Port Ghalib"
      },
      description: {
        en: "Departure from Port Ghalib Marina.",
        de: "Abfahrt von der Marina Port Ghalib.",
        it: "Partenza dalla Marina di Port Ghalib.",
        ru: "Отправление из марины Порт-Галиб.",
        pl: "Wypłynięcie z Mariny Port Ghalib.",
        cz: "Odjezd z mariny Port Ghalib."
      }
    },
    {
      step: "02",
      title: {
        en: "Boat Trip to Marsa Mubarak",
        de: "Bootsfahrt nach Marsa Mubarak",
        it: "Gita in Barca a Marsa Mubarak",
        ru: "Круиз в Марса-Мубарак",
        pl: "Rejs do Marsa Mubarak",
        cz: "Plavba lodí do Marsa Mubarak"
      },
      description: {
        en: "Cruise toward Marsa Mubarak bay.",
        de: "Fahrt in die Bucht von Marsa Mubarak.",
        it: "Navigazione verso la baia di Marsa Mubarak.",
        ru: "Круиз в сторону бухты Марса-Мубарак.",
        pl: "Rejs w stronę zatoki Marsa Mubarak.",
        cz: "Plavba k zátoce Marsa Mubarak."
      }
    },
    {
      step: "03",
      title: {
        en: "1st Snorkeling Session",
        de: "1. Schnorchelgang",
        it: "1ª Sessione Snorkeling",
        ru: "1-й снорклинг",
        pl: "1. Snorkeling",
        cz: "1. Šnorchlování"
      },
      description: {
        en: "Guided session searching for dugongs and sea turtles.",
        de: "Geführter Schnorchelgang auf der Suche nach Seekühen und Schildkröten.",
        it: "Sessione guidata alla ricerca di dugonghi e tartarughe.",
        ru: "Погружение с гидом в поисках дюгоней и черепах.",
        pl: "Sesja z przewodnikiem — poszukiwanie diugoni i żółwi.",
        cz: "Šnorchlování s průvodcem — hledání kapustňáků a želv."
      }
    },
    {
      step: "04",
      title: {
        en: "Fresh Buffet Lunch Onboard",
        de: "Frisches Buffet an Bord",
        it: "Pranzo a Buffet a Bordo",
        ru: "Обед «шведский стол»",
        pl: "Obiad w Formie Bufetu",
        cz: "Oběd formou bufetu"
      },
      description: {
        en: "Enjoy lunch onboard and relax under the sun.",
        de: "Genießen Sie das Mittagessen an Bord und entspannen Sie.",
        it: "Goditi il pranzo a bordo e rilassati al sole.",
        ru: "Обед на борту и отдых под солнцем.",
        pl: "Zjedz obiad na pokładzie i zrelaksuj się.",
        cz: "Vychutnejte si oběd na palubě a relaxujte."
      }
    },
    {
      step: "05",
      title: {
        en: "2nd Snorkeling Session",
        de: "2. Schnorchelgang",
        it: "2ª Sessione Snorkeling",
        ru: "2-й снорклинг",
        pl: "2. Snorkeling",
        cz: "2. Šnorchlování"
      },
      description: {
        en: "Continue exploring coral reefs and marine life.",
        de: "Erkunden Sie weiter Korallenriffe und Meereslebewesen.",
        it: "Continua a esplorare le barriere coralline e la vita marina.",
        ru: "Продолжение исследования коралловых рифов.",
        pl: "Kontynuuj odkrywanie raf koralowych i życia morskiego.",
        cz: "Pokračujte v objevování koralových útesů a mořského života."
      }
    },
    {
      step: "06",
      title: {
        en: "~ 15:30 — Return to Marina",
        de: "~ 15:30 — Rückkehr zur Marina",
        it: "~ 15:30 — Ritorno alla Marina",
        ru: "~ 15:30 — Возвращение в марину",
        pl: "~ 15:30 — Powrót do Mariny",
        cz: "~ 15:30 — Návrat do mariny"
      },
      description: {
        en: "Return to Port Ghalib Marina.",
        de: "Rückkehr zur Marina Port Ghalib.",
        it: "Rientro alla Marina di Port Ghalib.",
        ru: "Возвращение в марину Порт-Галиб.",
        pl: "Powrót do Mariny Port Ghalib.",
        cz: "Návrat do mariny Port Ghalib."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment required.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
    it: "Paga dopo il tour — nessuna pagamento online richiesto.",
    ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
    pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
    cz: "Platba až po výletu — není vyžadována platba předem online."
  },
  disclaimer: {
    en: "Dugongs and sea turtles are wild animals, so sightings cannot be guaranteed. We always do our best while respecting their natural environment.",
    de: "Dugongs und Meeresschildkröten sind wilde Tiere, daher können Sichtungen nicht garantiert werden.",
    it: "Dugonghi e tartarughe marine sono animali selvatici, pertanto gli avvistamenti non possono essere garantiti.",
    ru: "Дюгони и черепахи — дикие животные, поэтому их наблюдение не гарантируется на 100%.",
    pl: "Diugonie i żółwie morskie to dzikie zwierzęta, więc ich zobaczenie nie jest gwarantowane.",
    cz: "Kapustňáci a mořské želvy jsou divoká zvířata, proto jejich pozorování nelze garantovat."
  },
  images: {
    featured: "/images/tours/marsa-card.webp",
    gallery: [
      "/images/tours/marsa-1.webp",
      "/images/tours/marsa-2.webp",
      "/images/tours/marsa-3.webp"
    ]
  }
},
{
  id: "abu-dabbab-speedboat",
  slug: "abu-dabbab-speedboat-snorkeling",
  title: {
    en: "Abu Dabbab Speedboat",
    de: "Abu Dabbab Speedboot",
    it: "Abu Dabbab in Speedboat",
    ru: "Абу-Дабаб на скоростном катере",
    pl: "Abu Dabbab Motorówką",
    cz: "Abu Dabbab Rychločlunem"
  },
  subtitle: {
    en: "Speedboat Snorkeling Experience",
    de: "Speedboot-Schnorchelerlebnis",
    it: "Esperienza di Snorkeling in Speedboat",
    ru: "Снорклинг-экскурсия на скоростном катере",
    pl: "Przygoda ze snorkelingiem motorówką",
    cz: "Šnorchlovací zážitek na rychločlunu"
  },
  category: {
    en: "Speedboat & Snorkeling",
    de: "Speedboot & Schnorcheln",
    it: "Speedboat e Snorkeling",
    ru: "Скоростной катер и снорклинг",
    pl: "Motorówka i Snorkeling",
    cz: "Rychločlun a šnorchlování"
  },
  price: {
    amount: 70,
    currency: "€",
    unit: {
      en: "per person",
      de: "pro Person",
      it: "per persona",
      ru: "за человека",
      pl: "za osobę",
      cz: "za osobu"
    }
  },
  duration: {
    en: "3 Hours",
    de: "3 Stunden",
    it: "3 Ore",
    ru: "3 часа",
    pl: "3 godziny",
    cz: "3 hodiny"
  },
  departure: {
    en: "Hermes Marina",
    de: "Hermes Marina",
    it: "Hermes Marina",
    ru: "Марина Гермес",
    pl: "Hermes Marina ",
    cz: "Hermes Marina"
  },
  schedule: {
    departureTime: "Flexible (8:00 AM – 2:00 PM)",
    returnTime: "3 hours after start"
  },
  overview: {
    en: "Enjoy a 3-hour speedboat snorkeling adventure to Abu Dabbab, visiting multiple spots to search for dugongs, sea turtles, colorful coral reefs, and marine life with flexible departure times.",
    de: "Genießen Sie ein 3-stündiges Schnorchel-Abenteuer mit dem Speedboot nach Abu Dabbab. Besuchen Sie mehrere Spots auf der Suche nach Seekühen, Schildkröten und bunten Korallenriffen.",
    it: "Goditi un'avventura di 3 ore in speedboat ad Abu Dabbab, visitando più punti di snorkeling per cercare dugonghi, tartarughe marine e meravigliose barriere coralline.",
    ru: "Наслаждайтесь 3-часовым приключением на скоростном катере в Абу-Дабаб: посещение нескольких локаций для поиска дюгоней, морских черепах и красивых коралловых рифов.",
    pl: "Ciesz się 3-godzinną przygodą na motorówce do Abu Dabbab, odwiedzając kilka miejsc do snorkelingu w poszukiwaniu diugoni, żółwi morskich i rafy koralowej.",
    cz: "Užijte si 3hodinové dobrodružství na rychločlunu do Abu Dabbab s návštěvou několika míst pro šnorchlování a hledání kapustňáků, želv a korálových útesů."
  },
  highlights: {
    en: [
      "Search for dugongs (sea cows) and their calves",
      "Chance to spot sea turtles",
      "Explore beautiful coral reefs & marine life",
      "2 snorkeling sessions — 50 minutes each",
      "Exciting speedboat journey to Abu Dabbab",
      "Visit more than one snorkeling spot",
      "Flexible start times between 8:00 AM and 2:00 PM"
    ],
    de: [
      "Suche nach Seekühen (Dugongs) und ihren Jungen",
      "Chance, Meeresschildkröten zu sehen",
      "Wunderschöne Korallenriffe & Unterwasserwelt",
      "2 Schnorchelgänge — je ca. 50 Minuten",
      "Aufregende Speedboot-Fahrt nach Abu Dabbab",
      "Besuch von mehr als einem Schnorchelspot",
      "Flexible Startzeiten zwischen 08:00 und 14:00 Uhr"
    ],
    it: [
      "Ricerca dei dugonghi e dei loro piccoli",
      "Possibilità di avvistare tartarughe marine",
      "Esplorazione di splendide barriere coralline",
      "2 sessioni di snorkeling — 50 minuti ciascuna",
      "Emozionante viaggio in speedboat verso Abu Dabbab",
      "Visita di più di un punto di snorkeling",
      "Orario di partenza flessibile tra le 8:00 e le 14:00"
    ],
    ru: [
      "Поиск дюгоней (морских коров) и их детенышей",
      "Шанс увидеть морских черепах",
      "Красивые коралловые рифы и морская жизнь",
      "2 сеанса снорклинга — по 50 минут каждый",
      "Увлекательное путешествие на скоростном катере",
      "Посещение нескольких локаций для снорклинга",
      "Гибкое время старта с 08:00 до 14:00"
    ],
    pl: [
      "Poszukiwanie diugoni i ich młodych",
      "Szansa na spotkanie żółwi morskich",
      "Odkrywanie pięknych raf koralowych",
      "2 sesje snorkelingu — po 50 minut każda",
      "Ekscytujący rejs motorówką do Abu Dabbab",
      "Wizyta w więcej niż jednym miejscu do snorkelingu",
      "Elastyczny czas rozpoczęcia między 8:00 a 14:00"
    ],
    cz: [
      "Hledání kapustňáků a jejich mláďat",
      "Šance vidět mořské želvy",
      "Objevování krásných korálových útesů",
      "2 šnorchlovací relace — 50 minut každá",
      "Rychlá a vzrušující jízda rychločlunem",
      "Návštěva více než jednoho místa na šnorchlování",
      "Flexibilní čas odjezdu mezi 8:00 a 14:00"
    ]
  },
  included: {
    en: [
      "Hotel transfer",
      "Speedboat trip",
      "Marina entrance fees",
      "Full snorkeling equipment",
      "2 snorkeling sessions (~50 mins each)",
      "Cold drinks",
      "Snacks"
    ],
    de: [
      "Hotel-Transfer",
      "Speedboot-Fahrt",
      "Marina-Eintrittsgebühren",
      "Komplette Schnorchelausrüstung",
      "2 Schnorchelgänge (je ca. 50 Min.)",
      "Kühle Getränke",
      "Snacks"
    ],
    it: [
      "Trasferimento dall'hotel",
      "Gita in speedboat",
      "Tasse d'ingresso alla marina",
      "Attrezzatura completa da snorkeling",
      "2 sessioni di snorkeling (~50 min ciascuna)",
      "Bevande fresche",
      "Snack"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "Поездка на скоростном катере",
      "Сборы за вход в марину",
      "Полное снаряжение для снорклинга",
      "2 сеанса снорклинга (по 50 мин)",
      "Холодные напитки",
      "Закуски"
    ],
    pl: [
      "Transfer z i do hotelu",
      "Rejs motorówką",
      "Opłaty wstępu do mariny",
      "Pełny sprzęt do snorkelingu",
      "2 sesje snorkelingu (po ok. 50 min)",
      "Zimne napoje",
      "Przekąski"
    ],
    cz: [
      "Transfer z hotelu a zpět",
      "Jízda rychločlunem",
      "Vstupní poplatky do mariny",
      "Kompletní vybavení na šnorchlování",
      "2 šnorchlovací relace (~50 min každá)",
      "Chlazené nápoje",
      "Občerstvení"
    ]
  },
  notIncluded: {
    en: [
      "Personal expenses",
      "Underwater photos & videos"
    ],
    de: [
      "Persönliche Ausgaben",
      "Unterwasserfotos & Videos"
    ],
    it: [
      "Spese personali",
      "Foto e video subacquei"
    ],
    ru: [
      "Личные расходы",
      "Подводные фото и видео"
    ],
    pl: [
      "Wydatki osobiste",
      "Zdjęcia i filmy podwodne"
    ],
    cz: [
      "Osobní výdaje",
      "Podvodní fotografie a videa"
    ]
  },
  whatToBring: {
    en: ["Swimwear", "Towel", "Sunscreen", "Hat", "Sunglasses"],
    de: ["Badebekleidung", "Handtuch", "Sonnenschutz", "Hut", "Sonnenbrille"],
    it: ["Costume da bagno", "Asciugamano", "Crema solare", "Cappello", "Occhiali da sole"],
    ru: ["Купальник / Плавки", "Полотенце", "Солнцезащитный крем", "Головной убор", "Солнцезащитные очки"],
    pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Czapka/Kapelusz", "Okulary przeciwsłoneczne"],
    cz: ["Plavky", "Ručník", "Opalovací krém", "Klobouk/Kšiltovka", "Sluneční brýle"]
  },
  childrenPolicy: {
    under5: {
      en: "Under 5 years: Free",
      de: "Unter 5 Jahren: Kostenlos",
      it: "Sotto i 5 anni: Gratuito",
      ru: "До 5 лет: Бесплатно",
      pl: "Poniżej 5 lat: Bezpłatnie",
      cz: "Pod 5 let: Zdarma"
    },
    from5to10: {
      en: "5–10 years: 50% of adult price",
      de: "5–10 Jahre: 50% des Erwachsenenpreises",
      it: "5–10 anni: 50% del prezzo adulti",
      ru: "5–10 лет: 50% от стоимости взрослого",
      pl: "5–10 lat: 50% ceny dorosłego",
      cz: "5–10 let: 50 % z ceny dospělého"
    },
    over10: {
      en: "Over 10 years: Full adult price",
      de: "Über 10 Jahre: Voller Erwachsenenpreis",
      it: "Oltre i 10 anni: Prezzo intero adulto",
      ru: "Старше 10 лет: Полная стоимость",
      pl: "Powyżej 10 lat: Pełna cena",
      cz: "Nad 10 let: Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Pickup",
        de: "Hotelabholung",
        it: "Transfer dall'Hotel",
        ru: "Трансфер из отеля",
        pl: "Odbiór z Hotelu",
        cz: "Vyzvednutí v hotelu"
      },
      description: {
        en: "Pickup at your preferred start time and transfer to Hermes Marina.",
        de: "Abholung zu Ihrer Wunschzeit und Transfer zur Hermes Marina.",
        it: "Ritiro all'orario preferito e trasferimento alla Hermes Marina.",
        ru: "Трансфер в выбранное время в марину Гермес.",
        pl: "Odbiór o wybranej godzinie i transfer do Hermes Marina.",
        cz: "Vyzvednutí ve zvolený čas a transfer do Hermes Marina."
      }
    },
    {
      step: "02",
      title: {
        en: "Speedboat Departure",
        de: "Speedboot-Abfahrt",
        it: "Partenza in Speedboat",
        ru: "Отправление на катере",
        pl: "Wypłynięcie Motorówką",
        cz: "Odjezd rychločlunem"
      },
      description: {
        en: "Board the speedboat at Hermes Marina and head to Abu Dabbab.",
        de: "Einsteigen in der Hermes Marina und Fahrt nach Abu Dabbab.",
        it: "Imbarco alla Hermes Marina e partenza per Abu Dabbab.",
        ru: "Посадка на катер в марине Гермес и курс на Абу-Дабаб.",
        pl: "Wejście na pokład w Hermes Marina i rejs do Abu Dabbab.",
        cz: "Nástup v Hermes Marina a plavba do Abu Dabbab."
      }
    },
    {
      step: "03",
      title: {
        en: "1st Snorkeling Session — 50 Mins",
        de: "1. Schnorcheln — 50 Min.",
        it: "1ª Sessione Snorkeling — 50 min",
        ru: "1-й снорклинг — 50 минут",
        pl: "1. Snorkeling — 50 minut",
        cz: "1. Šnorchlování — 50 min"
      },
      description: {
        en: "First snorkeling stop searching for dugongs and turtles.",
        de: "Erster Schnorchelstopp auf der Suche nach Seekühen und Schildkröten.",
        it: "Prima tappa di snorkeling alla ricerca di dugonghi e tartarughe.",
        ru: "Первая остановка для поиска дюгоней и черепах.",
        pl: "Pierwszy przystanek na snorkeling i poszukiwanie diugoni.",
        cz: "První šnorchlování a hledání kapustňáků a želv."
      }
    },
    {
      step: "04",
      title: {
        en: "2nd Snorkeling Session — 50 Mins",
        de: "2. Schnorcheln — 50 Min.",
        it: "2ª Sessione Snorkeling — 50 min",
        ru: "2-й снорклинг — 50 минут",
        pl: "2. Snorkeling — 50 minut",
        cz: "2. Šnorchlování — 50 min"
      },
      description: {
        en: "Explore a second spot with vibrant coral reefs and marine life.",
        de: "Erkunden Sie einen zweiten Spot mit lebendigen Riffen.",
        it: "Esplora un secondo punto con barriere coralline mozzafiato.",
        ru: "Вторая локация с яркими коралловыми рифами.",
        pl: "Odkrywaj drugie miejsce z tętniącą życiem rafą koralową.",
        cz: "Prozkoumejte druhé místo s živými korálovými útesy."
      }
    },
    {
      step: "05",
      title: {
        en: "Return & Hotel Drop-off",
        de: "Rückfahrt & Hotelabgabe",
        it: "Rientro e Trasferimento",
        ru: "Возвращение в отель",
        pl: "Powrót do Hotelu",
        cz: "Návrat do hotelu"
      },
      description: {
        en: "Return by speedboat to the marina and transfer back to your hotel.",
        de: "Rückfahrt mit dem Speedboot zur Marina und Transfer zum Hotel.",
        it: "Rientro in speedboat alla marina e trasferimento in hotel.",
        ru: "Возвращение на катере в марину и трансфер в отель.",
        pl: "Powrót motorówką do mariny i transfer do hotelu.",
        cz: "Návrat rychločlunem do mariny a transfer do hotelu."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment required.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
    it: "Paga dopo il tour — nessuna pagamento online richiesto.",
    ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
    pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
    cz: "Platba až po výletu — není vyžadována platba předem online."
  },
  disclaimer: {
    en: "Dugongs and sea turtles are wild animals in their natural environment, so sightings cannot be 100% guaranteed.",
    de: "Dugongs und Meeresschildkröten sind wilde Tiere, daher können Sichtungen nicht zu 100% garantiert werden.",
    it: "Dugonghi e tartarughe marine sono animali selvatici, gli avvistamenti non possono essere garantiti al 100%.",
    ru: "Дюгони и черепахи — дикие животные, поэтому их наблюдение не может быть гарантировано на 100%.",
    pl: "Diugonie i żółwie morskie to dzikie zwierzęta, więc ich zobaczenie nie jest gwarantowane w 100%.",
    cz: "Kapustňáci a mořské želvy jsou divoká zvířata, proto jejich pozorování nelze 100% garantovat."
  },
  images: {
    featured: "/images/tours/speed-card.webp",
    gallery: [
      "/images/tours/speed-1.webp",
      "/images/tours/speed-2.webp",
      "/images/tours/speed-3.webp"
    ]
  }
},
{
  id: "hamata-islands",
  slug: "hamata-islands",
  title: {
    en: "Hamata Islands",
    de: "Hamata Inseln",
    it: "Isole Hamata",
    ru: "Острова Хамата",
    pl: "Wyspy Hamata",
    cz: "Ostrovy Hamata"
  },
  subtitle: {
    en: "Snorkeling & Island Experience",
    de: "Schnorchel- & Inselerlebnis",
    it: "Esperienza di snorkeling e isole",
    ru: "Сноркелинг и поездка на острова",
    pl: "Snorkeling i wyprawa na wyspy",
    cz: "Šnorchlování a výlet na ostrovy"
  },
  category: {
    en: "Island Trip",
    de: "Inselausflug",
    it: "Escursione alle isole",
    ru: "Поездка на острова",
    pl: "Wycieczka na wyspy",
    cz: "Výlet na ostrovy"
  },
  price: {
    amount: 70,
    currency: "€",
    unit: {
      en: "per person",
      de: "pro Person",
      it: "a persona",
      ru: "за человека",
      pl: "za osobę",
      cz: "za osobu"
    }
  },
  duration: {
    en: "8 hours",
    de: "8 Stunden",
    it: "8 ore",
    ru: "8 часов",
    pl: "8 godzin",
    cz: "8 hodin"
  },
  departure: {
    en: "Hamata Marina",
    de: "Hamata Yachthafen",
    it: "Marina di Hamata",
    ru: "Марина Хамата",
    pl: "Przystań Hamata",
    cz: "Přístav Hamata"
  },
  schedule: {
    departureTime: "08:30 AM",
    returnTime: "04:00 PM"
  },
  overview: {
    en: "Discover the beauty of the Hamata Islands, south of Marsa Alam, on a full-day Red Sea adventure. Cruise through crystal-clear waters, explore beautiful islands, and enjoy snorkeling among colorful coral reefs.",
    de: "Entdecken Sie die Schönheit der Hamata-Inseln südlich von Marsa Alam bei einem ganztägigen Abenteuer im Roten Meer. Fahren Sie durch kristallklares Wasser und schnorcheln Sie an bunten Korallenriffen.",
    it: "Scopri la bellezza delle isole Hamata, a sud di Marsa Alam, in un'avventura di un'intera giornata nel Mar Rosso. Naviga in acque cristalline e fai snorkeling tra barriere coralline colorate.",
    ru: "Откройте для себя красоту островов Хамата к югу от Марса-Алама во время однодневного приключения в Красном море. Наслаждайтесь сноркелингом среди коралловых рифов.",
    pl: "Odkryj piękno wysp Hamata na południe od Marsa Alam podczas całodniowej przygody na Morzu Czerwonym. Ciesz się snurkowaniem wśród raf koralowych.",
    cz: "Objevte krásu ostrovů Hamata jižně od Marsa Alam během celodenního dobrodružství v Rudém moři. Užijte si šnorchlování u barevným korálových útesů."
  },
  highlights: {
    en: [
      "Explore the beautiful Hamata Islands",
      "Visit multiple islands",
      "Snorkeling in crystal-clear Red Sea water",
      "Colorful coral reefs & marine life",
      "Swimming & island exploration",
      "Fresh buffet lunch onboard",
      "Water, tea, coffee & soft drinks"
    ],
    de: [
      "Erkunden Sie die schönen Hamata-Inseln",
      "Besuchen Sie mehrere Inseln",
      "Schnorcheln im kristallklaren Wasser des Roten Meeres",
      "Bunte Korallenriffe & Meereslebewesen",
      "Schwimmen & Erkundung der Inseln",
      "Frisches Mittagsbuffet an Bord",
      "Wasser, Tee, Kaffee & Erfrischungsgetränke"
    ],
    it: [
      "Esplora le bellissime isole Hamata",
      "Visita più isole",
      "Snorkeling nelle acque cristalline del Mar Rosso",
      "Barriere coralline colorate e vita marina",
      "Nuoto ed esplorazione delle isole",
      "Pranzo a buffet fresco a bordo",
      "Acqua, tè, caffè e bevande analcoliche"
    ],
    ru: [
      "Исследуйте прекрасные острова Хамата",
      "Посетите несколько островов",
      "Сноркелинг в кристально чистой воде Красного моря",
      "Красочные коралловые рифы и морская жизнь",
      "Плавание и исследование островов",
      "Свежий обед «шведский стол» на борту",
      "Вода, чай, кофе и безалкогольные напитки"
    ],
    pl: [
      "Odkryj piękne wyspy Hamata",
      "Odwiedź wiele wysp",
      "Snurkowanie w krystalicznie czystej wodzie",
      "Kolorowe rafy koralowe i życie morskie",
      "Pływanie i zwiedzanie wysp",
      "Świeży lunch w formie bufetu na pokładzie",
      "Woda, herbata, kawa i napoje bezalkoholowe"
    ],
    cz: [
      "Prozkoumejte krásné ostrovy Hamata",
      "Navštivte několik ostrovů",
      "Šnorchlování v křišťálově čisté vodě Rudého moře",
      "Barevné korálové útesy a mořský život",
      "Plavání a průzkum ostrovů",
      "Čerstvý bufetový oběd na palubě",
      "Voda, čaj, káva a nealkoholické nápoje"
    ]
  },
  included: {
    en: [
      "Hotel pickup & drop-off",
      "Transportation to and from Hamata Marina",
      "Boat trip",
      "Professional multilingual snorkeling guide",
      "Full snorkeling equipment",
      "Fresh buffet lunch onboard",
      "Water, tea, coffee & soft drinks"
    ],
    de: [
      "Abholung und Rücktransfer zum Hotel",
      "Transfer zum und vom Yachthafen Hamata",
      "Bootsfahrt",
      "Professioneller, mehrsprachiger Schnorchelführer",
      "Vollständige Schnorchelausrüstung",
      "Frisches Mittagsbuffet an Bord",
      "Wasser, Tee, Kaffee & Erfrischungsgetränke"
    ],
    it: [
      "Prelievo e rientro in hotel",
      "Trasporto da e per la Marina di Hamata",
      "Gita in barca",
      "Guida di snorkeling multilingue professionale",
      "Attrezzatura completa per lo snorkeling",
      "Pranzo a buffet fresco a bordo",
      "Acqua, tè, caffè e bevande analcoliche"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "Трансфер до марины Хамата и обратно",
      "Поездка на лодке",
      "Профессиональный многоязычный гид по сноркелингу",
      "Полный комплект оборудования для сноркелинга",
      "Свежий обед «шведский стол» на борту",
      "Вода, чай, кофе и безалкогольные напитки"
    ],
    pl: [
      "Odbiór i dowóz do hotelu",
      "Transport do i z przystani Hamata",
      "Wycieczka łodzią",
      "Profesjonalny wielojęzyczny przewodnik",
      "Kompletny sprzęt do snurkowania",
      "Świeży lunch w formie bufetu na pokładzie",
      "Woda, herbata, kawa i napoje bezalkoholowe"
    ],
    cz: [
      "Vyzvednutí a odvoz v hotelu",
      "Doprava do přístavu Hamata a zpět",
      "Výlet lodí",
      "Profesionální vícejazyčný průvodce",
      "Kompletní vybavení na šnorchlování",
      "Čerstvý bufetový oběd na palubě",
      "Voda, čaj, káva a nealkoholické nápoje"
    ]
  },
  notIncluded: {
    en: ["Personal expenses", "Any additional services not mentioned above"],
    de: ["Persönliche Ausgaben", "Zusätzliche Leistungen, die nicht oben genannt wurden"],
    it: ["Spese personali", "Eventuali servizi aggiuntivi non menzionati sopra"],
    ru: ["Личные расходы", "Любые дополнительные услуги, не указанные выше"],
    pl: ["Wydatki osobizte", "Wszelkie dodatkowe usługi niewymienione powyżej"],
    cz: ["Osobní výdaje", "Jakékoliv další služby neuvedené výše"]
  },
  whatToBring: {
    en: ["Swimwear", "Towel", "Sunscreen", "Sunglasses", "Hat", "Comfortable clothes", "Camera / phone"],
    de: ["Badebekleidung", "Handtuch", "Sonnencreme", "Sonnenbrille", "Hut", "Bequeme Kleidung", "Kamera / Handy"],
    it: ["Costume da bagno", "Asciugamano", "Crema solare", "Occhiali da sole", "Cappello", "Abiti comodi", "Fotocamera / telefono"],
    ru: ["Купальник", "Полотенце", "Солнцезащитный крем", "Солнцезащитные очки", "Головной убор", "Удобная одежда", "Камера / телефон"],
    pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Okulary przeciwsłoneczne", "Czapka", "Wygodne ubrania", "Aparat / telefon"],
    cz: ["Plavky", "Ručník", "Opalovací krém", "Sluneční brýle", "Klobouk", "Pohodlné oblečení", "Fotoaparát / telefon"]
  },
  childrenPolicy: {
    under5: {
      en: "Free",
      de: "Kostenlos",
      it: "Gratuito",
      ru: "Бесплатно",
      pl: "Bezpłatnie",
      cz: "Zdarma"
    },
    from5to10: {
      en: "50% of adult price",
      de: "50% des Erwachsenenpreises",
      it: "50% del prezzo per adulti",
      ru: "50% от стоимости для взрослых",
      pl: "50% ceny dla dorosłych",
      cz: "50 % z ceny pro dospělé"
    },
    over10: {
      en: "Full adult price",
      de: "Voller Erwachsenenpreis",
      it: "Prezzo intero per adulti",
      ru: "Полная стоимость для взрослых",
      pl: "Pełna cena dla dorosłych",
      cz: "Plná cena pro dospělé"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Pickup",
        de: "Hotelabholung",
        it: "Prelievo in hotel",
        ru: "Трансфер из отеля",
        pl: "Odbiór z hotelu",
        cz: "Vyzvednutí v hotelu"
      },
      description: {
        en: "Morning pickup from your hotel and transfer to Hamata Marina.",
        de: "Morgendliche Abholung von Ihrem Hotel und Transfer zum Yachthafen Hamata.",
        it: "Prelievo mattutino dal vostro hotel e trasferimento alla Marina di Hamata.",
        ru: "Утренний трансфер из вашего отеля в марину Хамата.",
        pl: "Poranny odbiór z hotelu i transfer do przystani Hamata.",
        cz: "Ranní vyzvednutí z hotelu a transfer do přístavu Hamata."
      }
    },
    {
      step: "02",
      title: {
        en: "Hamata Marina",
        de: "Hamata Yachthafen",
        it: "Marina di Hamata",
        ru: "Марина Хамата",
        pl: "Przystań Hamata",
        cz: "Přístav Hamata"
      },
      description: {
        en: "Arrive at the marina and board the boat.",
        de: "Ankunft im Yachthafen und Einschiffung.",
        it: "Arrivo al porto turistico e imbarco.",
        ru: "Прибытие в марину и посадка на лодку.",
        pl: "Przybycie do przystani i wejście na pokład łodzi.",
        cz: "Příjezd do přístavu a nástup na lod."
      }
    },
    {
      step: "03",
      title: {
        en: "Boat Trip",
        de: "Bootsfahrt",
        it: "Gita in barca",
        ru: "Поездка на лодке",
        pl: "Wycieczka łodzią",
        cz: "Výlet lodí"
      },
      description: {
        en: "Cruise through the beautiful southern Red Sea toward the Hamata Islands.",
        de: "Fahrt durch das wunderschöne südliche Rote Meer zu den Hamata-Inseln.",
        it: "Navigazione attraverso lo splendido Mar Rosso meridionale verso le isole Hamata.",
        ru: "Круиз по прекрасному южному Красному морю к островам Хамата.",
        pl: "Rejs przez piękne południowe Morze Czerwone w kierunku wysp Hamata.",
        cz: "Plavba jižním Rudým mořem směrem k ostrovům Hamata."
      }
    },
    {
      step: "04",
      title: {
        en: "1st Snorkeling Stop",
        de: "1. Schnorchelstopp",
        it: "1ª sosta per lo snorkeling",
        ru: "1-я остановка для сноркелинга",
        pl: "1. Przystanek na snurkowanie",
        cz: "1. Zastávka na šnorchlování"
      },
      description: {
        en: "Explore the colorful coral reefs and discover the rich marine life.",
        de: "Erkunden Sie die bunten Korallenriffe und entdecken Sie die reiche Unterwasserwelt.",
        it: "Esplora le barriere coralline colorate e scopri la ricca vita marina.",
        ru: "Исследуйте красочные коралловые рифы и богатую морскую жизнь.",
        pl: "Odkryj kolorowe rafy koralowe i bogate życie morskie.",
        cz: "Prozkoumejte barevné korálové útesy a bohatý mořský život."
      }
    },
    {
      step: "05",
      title: {
        en: "Island Visit",
        de: "Inselbesuch",
        it: "Visita all'isola",
        ru: "Посещение острова",
        pl: "Wizyta na wyspie",
        cz: "Návštěva ostrova"
      },
      description: {
        en: "Explore one of the beautiful Hamata Islands and enjoy the natural surroundings.",
        de: "Erkunden Sie eine der schönen Hamata-Inseln und genießen Sie die Natur.",
        it: "Esplora una delle bellissime isole Hamata e goditi l'ambiente naturale.",
        ru: "Исследуйте один из красивых островов Хамата и насладитесь природой.",
        pl: "Odkryj jedną z pięknych wysp Hamata i podziwiaj otaczającą przyrodę.",
        cz: "Prozkoumejte jeden z krásných ostrovů Hamata a užijte si přírodu."
      }
    },
    {
      step: "06",
      title: {
        en: "2nd Snorkeling Stop",
        de: "2. Schnorchelstopp",
        it: "2ª sosta per lo snorkeling",
        ru: "2-я остановка для сноркелинга",
        pl: "2. Przystanek na snurkowanie",
        cz: "2. Zastávka na šnorchlování"
      },
      description: {
        en: "Enjoy another snorkeling experience in the crystal-clear waters.",
        de: "Genießen Sie ein weiteres Schnorchelerlebnis im kristallklaren Wasser.",
        it: "Goditi un'altra esperienza di snorkeling nelle acque cristalline.",
        ru: "Насладитесь еще одним сноркелингом в кристально чистой воде.",
        pl: "Ciesz się kolejnym snurkowaniem w krystalicznie czystej wodzie.",
        cz: "Užijte si další šnorchlování v křišťálově čisté vodě."
      }
    },
    {
      step: "07",
      title: {
        en: "Lunch",
        de: "Mittagessen",
        it: "Pranzo",
        ru: "Обед",
        pl: "Lunch",
        cz: "Oběd"
      },
      description: {
        en: "Enjoy a fresh buffet lunch onboard.",
        de: "Genießen Sie ein frisches Mittagsbuffet an Bord.",
        it: "Goditi un fresco pranzo a buffet a bordo.",
        ru: "Насладитесь свежим обедом «шведский стол» на борту.",
        pl: "Zjedz świeży lunch w formie bufetu na pokładzie.",
        cz: "Vychutnejte si čerstvý oběd formou bufetu na palubě."
      }
    },
    {
      step: "08",
      title: {
        en: "Return to Marina",
        de: "Rückkehr zum Yachthafen",
        it: "Ritorno al porto",
        ru: "Возвращение в марину",
        pl: "Powrót do przystani",
        cz: "Návrat do přístavu"
      },
      description: {
        en: "Relax onboard during the journey back to the marina.",
        de: "Entspannen Sie sich an Bord während der Rückfahrt zum Yachthafen.",
        it: "Rilassati a bordo durante il viaggio di ritorno.",
        ru: "Отдыхайте на борту во время обратного пути в марину.",
        pl: "Zrelaksuj się na pokładzie podczas rejsu powrotnego.",
        cz: "Odpočiňte si na palubě během zpáteční cesty."
      }
    },
    {
      step: "09",
      title: {
        en: "Hotel Transfer",
        de: "Hoteltransfer",
        it: "Trasferimento in hotel",
        ru: "Трансфер в отель",
        pl: "Transfer do hotelu",
        cz: "Transfer do hotelu"
      },
      description: {
        en: "Transfer back to your hotel around 4:00 PM.",
        de: "Rücktransfer zu Ihrem Hotel gegen 16:00 Uhr.",
        it: "Rientro in hotel intorno alle 16:00.",
        ru: "Трансфер обратно в отель около 16:00.",
        pl: "Powrót do hotelu około godziny 16:00.",
        cz: "Návrat do hotelu kolem 16:00."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment required.",
    de: "Bezahlen Sie nach der Reise — keine Online-Zahlung erforderlich.",
    it: "Paga dopo il viaggio — nessun pagamento online richiesto.",
    ru: "Оплата после поездки — онлайн-оплата не требуется.",
    pl: "Zapłać po wycieczce — płatność online nie jest wymagana.",
    cz: "Platba až po výletu — není vyžadována žádná platba online."
  },
  disclaimer: {
    en: "The Hamata Islands are part of a protected natural environment. We always respect the islands, coral reefs, marine life and natural surroundings.",
    de: "Die Hamata-Inseln sind Teil einer geschützten Umwelt. Wir respektieren stets die Inseln, Korallenriffe und die Meereswelt.",
    it: "Le isole Hamata fanno parte di un ambiente naturale protetto. Rispettiamo sempre le isole, le barriere coralline e la vita marina.",
    ru: "Острова Хамата являются частью охраняемой природной среды. Мы всегда уважаем острова, коралловые рифы и морскую жизнь.",
    pl: "Wyspy Hamata są częścią chronionego środowiska naturalnego. Zawsze szanujemy wyspy, rafy koralowe i życie morskie.",
    cz: "Ostrovy Hamata jsou součástí chráněného přírodního prostředí. Vždy respektujeme ostrovy, korálové útesy a mořský život."
  },
  images: {
    featured: "/images/tours/hamata-card.webp",
    gallery: [
      "/images/tours/hamata-1.webp",
      "/images/tours/hamata-2.webp",
      "/images/tours/hamata-3.webp"
    ]
  }
},
{
    id: "wadi-el-gemal-islands",
    slug: "wadi-el-gemal-islands",
    title: {
      en: "Wadi El Gemal Islands",
      de: "Wadi El Gemal Inseln",
      it: "Isole Wadi El Gemal",
      ru: "Острова Вади-эль-Хемаль",
      pl: "Wyspy Wadi El Gemal",
      cz: "Ostrovy Wadi El Gemal"
    },
    subtitle: {
      en: "Egyptian Maldives",
      de: "Ägyptische Malediven",
      it: "Maldive Egiziane",
      ru: "Египетские Мальдивы",
      pl: "Egipskie Malediwy",
      cz: "Egyptské Maledivy"
    },
    category: {
      en: "Water Adventure",
      de: "Wasserabenteuer",
      it: "Avventura Acquatica",
      ru: "Водное приключение",
      pl: "Przygoda Wodna",
      cz: "Vodní dobrodružství"
    },
    price: {
      amount: 75,
      currency: "€",
      unit: {
        en: "per person",
        de: "pro Person",
        it: "a persona",
        ru: "с человека",
        pl: "za osobę",
        cz: "za osobu"
      }
    },
    duration: {
      en: "4 hours",
      de: "4 Stunden",
      it: "4 ore",
      ru: "4 часа",
      pl: "4 godziny",
      cz: "4 hodiny"
    },
    departure: {
      en: "Wadi El Gemal Marina",
      de: "Wadi El Gemal Yachthafen",
      it: "Marina di Wadi El Gemal",
      ru: "Марина Вади-эль-Хемаль",
      pl: "Przystań Wadi El Gemal",
      cz: "Přístav Wadi El Gemal"
    },
    overview: {
      en: "Enjoy a beautiful speedboat adventure through the islands and crystal-clear waters of Wadi El Gemal, south of Marsa Alam. Visit more than one island, enjoy around 45 minutes of island and beach time, and experience 2 snorkeling sessions — approximately 45 minutes each.",
      de: "Genießen Sie ein wunderschönes Schnellboot-Abenteuer durch die Inseln und das kristallklare Wasser von Wadi El Gemal südlich von Marsa Alam. Besuchen Sie mehr als eine Insel, genießen Sie ca. 45 Minuten Insel- und Strandzeit und erleben Sie 2 Schnorchelgänge von jeweils ca. 45 Minuten.",
      it: "Goditi una splendida avventura in motoscafo tra le isole e le acque cristalline di Wadi El Gemal, a sud di Marsa Alam. Visita più di un'isola, goditi circa 45 minuti di tempo sull'isola e in spiaggia e sperimenta 2 sessioni di snorkeling di circa 45 minuti ciascuna.",
      ru: "Насладитесь прекрасным приключением на скоростном катере по островам и кристально чистым водам Вади-эль-Хемаль к югу от Марса-Алама. Посетите более одного острова, насладитесь примерно 45 минутами отдыха на острове и пляже, а также совершите 2 сеанса сноркелинга продолжительностью около 45 минут каждый.",
      pl: "Ciesz się wspaniałą przygodą motorówką po wyspach i krystalicznie czystych wodach Wadi El Gemal na południe od Marsa Alam. Odwiedź więcej niż jedną wyspę, ciesz się około 45 minutami czasu na wyspie i plaży oraz weź udział w 2 sesjach snorkellingu trwających po około 45 minut.",
      cz: "Užijte si nádherné dobrodružství na rychlém člunu mezi ostrovy a křišťálově čistou vodou Wadi El Gemal jižně od Marsa Alam. Navštivte více než jeden ostrov, užijte si přibližně 45 minut času na ostrově a pláži a zažijte 2 šnorchlovací relace trvající přibližně 45 minut."
    },
    highlights: {
      en: [
        "Explore more than one Wadi El Gemal island",
        "Speedboat adventure",
        "1 dolphin-area snorkeling session — approximately 45 minutes",
        "1 coral reef snorkeling session — approximately 45 minutes",
        "Chance to see dolphins",
        "45 minutes of island and beach time",
        "Colorful coral reefs & marine life",
        "Crystal-clear Red Sea water",
        "Beautiful natural scenery",
        "Local guide"
      ],
      de: [
        "Erkunden Sie mehr als eine Wadi El Gemal Insel",
        "Schnellboot-Abenteuer",
        "1 Schnorchelgang im Delfinbereich — ca. 45 Minuten",
        "1 Schnorchelgang am Korallenriff — ca. 45 Minuten",
        "Chance, Delfine zu sehen",
        "45 Minuten Insel- und Strandzeit",
        "Farbenfrohe Korallenriffe & Meereslebewesen",
        "Kristallklares Rotmeerwasser",
        "Wunderschöne Naturlandschaft",
        "Lokaler Guide"
      ],
      it: [
        "Esplora più di un'isola di Wadi El Gemal",
        "Avventura in motoscafo",
        "1 sessione di snorkeling nell'area dei delfini — circa 45 minuti",
        "1 sessione di snorkeling nella barriera corallina — circa 45 minuti",
        "Possibilità di vedere i delfini",
        "45 minuti di tempo sull'isola e in spiaggia",
        "Barriere coralline colorate e vita marina",
        "Acqua cristallina del Mar Rosso",
        "Splendido scenario naturale",
        "Guida locale"
      ],
      ru: [
        "Исследуйте несколько островов Вади-эль-Хемаль",
        "Приключение на скоростном катере",
        "1 сеанс сноркелинга в районе дельфинов — около 45 минут",
        "1 сеанс сноркелинга у кораллового рифа — около 45 минут",
        "Шанс увидеть дельфинов",
        "45 минут отдыха на острове и пляже",
        "Красочные коралловые рифы и морская фауна",
        "Кристально чистая вода Красного моря",
        "Красивые природные пейзажи",
        "Местный гид"
      ],
      pl: [
        "Odkryj więcej niż jedną wyspę Wadi El Gemal",
        "Przygoda motorówką",
        "1 sesja snorkellingu w obszarze delfinów — ok. 45 minut",
        "1 sesja snorkellingu przy rafie koralowej — ok. 45 minut",
        "Szansa na zobaczenie delfinów",
        "45 minut czasu na wyspie i plaży",
        "Kolorowe rafy koralowe i życie morskie",
        "Krystalicznie czysta woda Morza Czerwonego",
        "Piękna przyroda",
        "Lokalny przewodnik"
      ],
      cz: [
        "Prozkoumejte více než jeden ostrov Wadi El Gemal",
        "Dobrodružství na rychlém člunu",
        "1 šnorchlování v oblasti delfínů — cca 45 minut",
        "1 šnorchlování u korálového útesu — cca 45 minut",
        "Šance vidět delfíny",
        "45 minut času na ostrově a pláži",
        "Pestrobarevné korálové útesy a mořský život",
        "Křišťálově čistá voda Rudého moře",
        "Krásná přírodní scenérie",
        "Místní průvodce"
      ]
    },
    included: {
      en: [
        "Hotel pickup & drop-off from Marsa Alam",
        "Transportation to and from Wadi El Gemal Marina",
        "Speedboat trip",
        "1 dolphin-area snorkeling session",
        "1 coral reef snorkeling session",
        "Island visit & beach time",
        "Snorkeling equipment",
        "Soft drinks",
        "Mineral water",
        "Local guide"
      ],
      de: [
        "Hotelabholung & -rückgabe ab Marsa Alam",
        "Transport zum und vom Yachthafen Wadi El Gemal",
        "Schnellbootfahrt",
        "1 Schnorchelgang im Delfinbereich",
        "1 Schnorchelgang am Korallenriff",
        "Inselbesuch & Strandzeit",
        "Schnorchelausrüstung",
        "Alkoholfreie Getränke",
        "Mineralwasser",
        "Lokaler Guide"
      ],
      it: [
        "Prelievo e rientro in hotel da Marsa Alam",
        "Trasporto da e per il Marina di Wadi El Gemal",
        "Viaggio in motoscafo",
        "1 sessione di snorkeling nell'area dei delfini",
        "1 sessione di snorkeling nella barriera corallina",
        "Visita dell'isola e tempo in spiaggia",
        "Attrezzatura da snorkeling",
        "Bevande analcoliche",
        "Acqua minerale",
        "Guida locale"
      ],
      ru: [
        "Трансфер из отеля и обратно из Марса-Алама",
        "Транспорт в марину Вади-эль-Хемаль и обратно",
        "Поездка на скоростном катере",
        "1 сеанс сноркелинга в районе дельфинов",
        "1 сеанс сноркелинга у кораллового рифа",
        "Посещение острова и время на пляже",
        "Оборудование для сноркелинга",
        "Безалкогольные напитки",
        "Минеральная вода",
        "Местный гид"
      ],
      pl: [
        "Odbiór i dowóz do hotelu z Marsa Alam",
        "Transport do i z przystani Wadi El Gemal",
        "Rejs motorówką",
        "1 sesja snorkellingu w obszarze delfinów",
        "1 sesja snorkellingu przy rafie koralowej",
        "Wizyta na wyspie i czas na plaży",
        "Sprzęt do snorkellingu",
        "Napoje bezalkoholowe",
        "Woda mineralna",
        "Lokalny przewodnik"
      ],
      cz: [
        "Vyzvednutí a odvoz v hotelu z Marsa Alam",
        "Doprava do a z přístavu Wadi El Gemal",
        "Výlet rychlým člunem",
        "1 šnorchlování v oblasti delfínů",
        "1 šnorchlování u korálového útesu",
        "Návštěva ostrova a čas na pláži",
        "Šnorchlovací vybavení",
        "Nealkoholické nápoje",
        "Minerální voda",
        "Místní průvodce"
      ]
    },
    notIncluded: {
      en: [
        "Personal expenses",
        "Optional activities or services not mentioned above",
        "Underwater photos & videos"
      ],
      de: [
        "Persönliche Ausgaben",
        "Optionale Aktivitäten oder Services, die oben nicht erwähnt wurden",
        "Unterwasserfotos & -videos"
      ],
      it: [
        "Spese personali",
        "Attività o servizi facoltativi non menzionati sopra",
        "Foto e video subacquei"
      ],
      ru: [
        "Личные расходы",
        "Дополнительные мероприятия или услуги, не упомянутые выше",
        "Подводные фото и видео"
      ],
      pl: [
        "Wydatki osobiste",
        "Opcjonalne aktywności lub usługi niewymienione powyżej",
        "Zdjęcia i filmy pod wodą"
      ],
      cz: [
        "Osobní výdaje",
        "Volitelné aktivity nebo služby, které nejsou uvedeny výše",
        "Podvodní fotky a videa"
      ]
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Sunscreen", "Sunglasses", "Hat", "Waterproof camera (optional)"],
      de: ["Badebekleidung", "Handtuch", "Sonnencreme", "Sonnenbrille", "Hut", "Wasserdichte Kamera (optional)"],
      it: ["Costume da bagno", "Asciugamano", "Crema solare", "Occhiali da sole", "Cappello", "Fotocamera subacquea (opzionale)"],
      ru: ["Купальник", "Полотенце", "Солнцезащитный крем", "Солнцезащитные очки", "Головной убор", "Водонепроницаемая камера (по желанию)"],
      pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Okulary przeciwsłoneczne", "Czapka", "Wodoodporny aparat (opcjonalnie)"],
      cz: ["Plavky", "Ručník", "Opalovací krém", "Sluneční brýle", "Klobouk", "Vodotěsný fotoaparát (volitelně)"]
    },
    childrenPolicy: {
      under5: {
        en: "Under 5 years: Free",
        de: "Unter 5 Jahren: Kostenlos",
        it: "Sotto i 5 anni: Gratuito",
        ru: "До 5 лет: Бесплатно",
        pl: "Poniżej 5 lat: Bezpłatnie",
        cz: "Do 5 let: Zdarma"
      },
      from5to10: {
        en: "5–10 years: 50% of adult price",
        de: "5–10 Jahre: 50% des Erwachsenenpreises",
        it: "5–10 anni: 50% del prezzo adulto",
        ru: "5–10 лет: 50% от стоимости для взрослых",
        pl: "5–10 lat: 50% ceny dla dorosłych",
        cz: "5–10 let: 50 % dospělé ceny"
      },
      over10: {
        en: "Over 10 years: Full adult price",
        de: "Über 10 Jahre: Voller Erwachsenenpreis",
        it: "Oltre i 10 anni: Prezzo intero adulto",
        ru: "Старше 10 лет: Полная стоимость для взрослых",
        pl: "Powyżej 10 lat: Pełna cena dla dorosłych",
        cz: "Nad 10 let: Plná dospělá cena"
      }
    },
    itinerary: [
      {
        step: "01",
        title: {
          en: "Wadi El Gemal Marina",
          de: "Wadi El Gemal Yachthafen",
          it: "Marina di Wadi El Gemal",
          ru: "Марина Вади-эль-Хемаль",
          pl: "Przystań Wadi El Gemal",
          cz: "Přístav Wadi El Gemal"
        },
        description: {
          en: "Departure from the marina.",
          de: "Abfahrt vom Yachthafen.",
          it: "Partenza dal porto turistico.",
          ru: "Отправление из марины.",
          pl: "Wypłynięcie z przystani.",
          cz: "Odjezd z přístavu."
        }
      },
      {
        step: "02",
        title: {
          en: "Speedboat Adventure",
          de: "Schnellboot-Abenteuer",
          it: "Avventura in Motoscafo",
          ru: "Приключение на скоростном катере",
          pl: "Przygoda motorówką",
          cz: "Dobrodružství na rychlém člunu"
        },
        description: {
          en: "Cruise through the beautiful waters of Wadi El Gemal.",
          de: "Fahrt durch das wunderschöne Wasser von Wadi El Gemal.",
          it: "Navigazione attraverso le splendide acque di Wadi El Gemal.",
          ru: "Круиз по прекрасным водам Вади-эль-Хемаль.",
          pl: "Rejs przez piękne wody Wadi El Gemal.",
          cz: "Plavba nádhernými vodami Wadi El Gemal."
        }
      },
      {
        step: "03",
        title: {
          en: "1st Snorkeling Session — Dolphin Area",
          de: "1. Schnorchelgang — Delfinbereich",
          it: "1ª Sessione di Snorkeling — Area Delfini",
          ru: "1-й сеанс сноркелинга — район дельфинов",
          pl: "1. sesja snorkellingu — Obszar Delfinów",
          cz: "1. šnorchlování — Oblast delfínů"
        },
        description: {
          en: "Snorkel in the dolphin area and search for dolphins in their natural environment.",
          de: "Schnorcheln im Delfinbereich und Suche nach Delfinen in ihrer natürlichen Umgebung.",
          it: "Snorkeling nell'area dei delfini e ricerca dei delfini nel loro ambiente naturale.",
          ru: "Сноркелинг в районе дельфинов и поиски дельфинов в их естественной среде.",
          pl: "Snorkelling w obszarze delfinów i poszukiwanie delfinów w ich naturalnym środowisku.",
          cz: "Šnorchlování v oblasti delfínů a hledání delfínů v jejich přirozeném prostředí."
        }
      },
      {
        step: "04",
        title: {
          en: "Island Exploration & Dolphin Search",
          de: "Inselerkundung & Delfinsuche",
          it: "Esplorazione dell'isola e ricerca dei delfini",
          ru: "Исследование островов и поиск дельфинов",
          pl: "Eksploracja wysp i poszukiwanie delfinów",
          cz: "Průzkum ostrovů a hledání delfínů"
        },
        description: {
          en: "Visit more than one island and continue searching for dolphins during the trip.",
          de: "Besuchen Sie mehr als eine Insel und suchen Sie während der Fahrt weiter nach Delfinen.",
          it: "Visita più di un'isola e continua a cercare i delfini durante il viaggio.",
          ru: "Посетите более одного острова и продолжайте искать дельфинов во время поездки.",
          pl: "Odwiedź więcej niż jedną wyspę i kontynuuj poszukiwania delfinów podczas wycieczki.",
          cz: "Navštivte více než jeden ostrov a během výletu pokračujte v hledání delfínů."
        }
      },
      {
        step: "05",
        title: {
          en: "Island & Beach Time",
          de: "Insel- & Strandzeit",
          it: "Tempo sull'isola e in spiaggia",
          ru: "Время на острове и пляже",
          pl: "Czas na wyspie i plaży",
          cz: "Čas na ostrově a pláži"
        },
        description: {
          en: "Relax, swim and enjoy the beautiful natural surroundings.",
          de: "Entspannen Sie sich, schwimmen Sie und genießen Sie die wunderschöne natürliche Umgebung.",
          it: "Rilassati, nuota e goditi la splendida cornice naturale.",
          ru: "Расслабьтесь, поплавайте и насладитесь прекрасной природой.",
          pl: "Zrelaksuj się, pływaj i ciesz się pięknym otoczeniem przyrody.",
          cz: "Relaxujte, plavte a užívejte si krásné přírodní prostředí."
        }
      },
      {
        step: "06",
        title: {
          en: "2nd Snorkeling Session — Coral Reef",
          de: "2. Schnorchelgang — Korallenriff",
          it: "2ª Sessione di Snorkeling — Barriera Corallina",
          ru: "2-й сеанс сноркелинга — коралловый риф",
          pl: "2. sesja snorkellingu — Rafa Koralowa",
          cz: "2. šnorchlování — Korálový útes"
        },
        description: {
          en: "Explore colorful coral reefs and discover the rich marine life of the Red Sea.",
          de: "Erkunden Sie farbenfrohe Korallenriffe und entdecken Sie die reiche Unterwasserwelt des Roten Meeres.",
          it: "Esplora le barriere coralline colorate e scopri la ricca vita marina del Mar Rosso.",
          ru: "Исследуйте красочные коралловые рифы и откройте для себя богатую морскую фауну Красного моря.",
          pl: "Odkryj kolorowe rafy koralowe i bogate życie morskie Morza Czerwonego.",
          cz: "Prozkoumejte pestrobarevné korálové útesy a objevte bohatý mořský život Rudého moře."
        }
      },
      {
        step: "07",
        title: {
          en: "Return to Wadi El Gemal Marina",
          de: "Rückkehr zum Wadi El Gemal Yachthafen",
          it: "Ritorno al Marina di Wadi El Gemal",
          ru: "Возвращение в марину Вади-эль-Хемаль",
          pl: "Powrót do przystani Wadi El Gemal",
          cz: "Návrat do přístavu Wadi El Gemal"
        },
        description: {
          en: "Around 11:30 AM – 12:00 PM.",
          de: "Gegen 11:30 Uhr – 12:00 Uhr.",
          it: "Intorno alle 11:30 – 12:00.",
          ru: "Около 11:30 – 12:00.",
          pl: "Około 11:30 – 12:00.",
          cz: "Kolem 11:30 – 12:00."
        }
      }
    ],
    paymentNote: {
      en: "Pay after the trip — no online payment required.",
      de: "Zahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
      it: "Paga dopo il viaggio — nessun pagamento online richiesto.",
      ru: "Оплата после поездки — онлайн-оплата не требуется.",
      pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
      cz: "Platba až po výletě — není vyžadována žádná platba předem."
    },
    disclaimer: {
      en: "Dolphins are wild animals, so sightings cannot be guaranteed. We search for them as much as possible during the trip while respecting their natural environment. Wadi El Gemal is a protected natural area, and we always respect the islands, marine life and local environment.",
      de: "Delfine sind Wildtiere, daher kann eine Sichtung nicht garantiert werden. Wir suchen während des Ausflugs so gut wie möglich nach ihnen und respektieren dabei ihren natürlichen Lebensraum. Wadi El Gemal ist ein geschütztes Naturgebiet, und wir respektieren stets die Inseln, das Meeresleben und die lokale Umwelt.",
      it: "I delfini sono animali selvatici, quindi gli avvistamenti non possono essere garantiti. Li cerchiamo il più possibile durante il viaggio rispettando il loro ambiente naturale. Wadi El Gemal è un'area naturale protetta e rispettiamo sempre le isole, la vita marina e l'ambiente locale.",
      ru: "Дельфины — дикие животные, поэтому их появление не может быть гарантировано. Мы ищем их как можно тщанее во время поездки, уважая их естественную среду обитания. Вади-эль-Хемаль — охраняемая природная зона, и мы всегда уважаем острова, морскую жизнь и местную экологию.",
      pl: "Delfiny to dzikie zwierzęta, więc ich widok nie może być zagwarantowany. Szukamy ich tak bardzo, jak to możliwe podczas wycieczki, szanując ich naturalne środowisko. Wadi El Gemal to chroniony obszar przyrodniczy, a my zawsze szanujemy wyspy, życie morskie i lokalne środowisko.",
      cz: "Delfíni jsou divoká zvířata, takže jejich spatření nelze zaručit. Během výletu je hledáme co nejvíce a zároveň respektujeme jejich přirozené prostředí. Wadi El Gemal je chráněná přírodní oblast a vždy respektujeme ostrovy, mořský život a místní prostředí."
    },
    images: {
      featured: "/images/tours/wadi-el-gemal-card.webp",
      gallery: [
        "/images/tours/wadi-el-gemal-1.webp",
        "/images/tours/wadi-el-gemal-2.webp",
        "/images/tours/wadi-el-gemal-3.webp"
      ]
    }
  },
  {
    id: "qulaan-mangroves-sharm-el-luli",
    slug: "qulaan-mangroves-sharm-el-luli",
    title: {
      en: "Qulaan Mangroves & Sharm El Luli",
      de: "Qulaan Mangroven & Sharm El Luli",
      it: "Mangrovie di Qulaan & Sharm El Luli",
      ru: "Мангры Кулаан и Шарм-эль-Лули",
      pl: "Mangrowie Qulaan i Sharm El Luli",
      cz: "Mangrovy Qulaan a Sharm El Luli"
    },
    subtitle: {
      en: "Beach & Mangrove Experience",
      de: "Strand- & Mangroven-Erlebnis",
      it: "Esperienza Spiaggia e Mangrovie",
      ru: "Пляж и мангровые заросли",
      pl: "Przygoda na plaży i wśród mangrowców",
      cz: "Zážitek na pláži a v mangrovech"
    },
    category: {
      en: "Water Adventures",
      de: "Wasserabenteuer",
      it: "Avventure in Acqua",
      ru: "Морские приключения",
      pl: "Przygody Wodne",
      cz: "Vodní dobrodružství"
    },
    price: {
      amount: 80,
      currency: "€",
      unit: {
        en: "per person",
        de: "pro Person",
        it: "per persona",
        ru: "за человека",
        pl: "za osobę",
        cz: "za osobu"
      }
    },
    duration: {
      en: "To be confirmed",
      de: "Wird noch bestätigt",
      it: "Da confermare",
      ru: "Уточняется",
      pl: "Do potwierdzenia",
      cz: "Bude potvrzeno"
    },
    departure: {
      en: "Time to be confirmed",
      de: "Uhrzeit wird noch bestätigt",
      it: "Orario da confermare",
      ru: "Время уточняется",
      pl: "Godzina do potwierdzenia",
      cz: "Čas bude potvrzen"
    },
    overview: {
      en: "Enjoy a coastal adventure combining the crystal-clear Red Sea and white sandy beach of Sharm El Luli with the peaceful mangrove islands, calm waters and untouched natural scenery of Qulaan.",
      de: "Genießen Sie ein Küstenabenteuer, das das kristallklare Rote Meer und den weißen Sandstrand von Sharm El Luli mit den friedlichen Mangroveninseln, ruhigen Gewässern und der unberührten Naturlandschaft von Qulaan verbindet.",
      it: "Goditi un'avventura costiera che combina il Mar Rosso cristallino e la spiaggia di sabbia bianca di Sharm El Luli con le tranquille isole di mangrovie, le acque calme e lo scenario naturale incontaminato di Qulaan.",
      ru: "Насладитесь прибрежным приключением, сочетающим кристально чистое Красное море и белый песчаный пляж Шарм-эль-Лули с умиротворенными мангровыми островами, спокойными водами и нетронутыми природными пейзажами Кулаана.",
      pl: "Ciesz się przybrzeżną przygodą łączącą krystalicznie czyste Morze Czerwone i białą piaszczystą plażę Sharm El Luli z spokojnymi wyspami mangrowymi, spokojnymi wodami i nienaruszoną przyrodą Qulaan.",
      cz: "Užijte si pobřežní dobrodružství spojující křišťálově čisté Rudé moře a bílou písečnou pláž Sharm El Luli s klidnými mangrovovými ostrovy, klidnou vodou a nedotčenou přírodní scenérií Qulaan."
    },
    highlights: {
      en: [
        "Visit Sharm El Luli Beach",
        "Around 3 hours of beach time",
        "Swim in crystal-clear Red Sea water",
        "Relax on the white sandy beach",
        "Explore Qulaan Mangrove Islands",
        "Discover unique mangrove trees",
        "Snorkeling opportunity",
        "Snacks",
        "Beautiful natural scenery",
        "Great photo opportunities",
        "Suitable for families, couples and beginners"
      ],
      de: [
        "Besuch des Strandes von Sharm El Luli",
        "Etwa 3 Stunden Strandzeit",
        "Schwimmen im kristallklaren Wasser des Roten Meeres",
        "Entspannen am weißen Sandstrand",
        "Erkundung der Qulaan-Mangroveninseln",
        "Entdeckung einzigartiger Mangrovenbäume",
        "Schnorchelgelegenheit",
        "Snacks",
        "Wunderschöne Naturlandschaft",
        "Tolles Fotomotiv",
        "Geeignet für Familien, Paare und Anfänger"
      ],
      it: [
        "Visita alla spiaggia di Sharm El Luli",
        "Circa 3 ore di tempo in spiaggia",
        "Nuoto nelle acque cristalline del Mar Rosso",
        "Relax sulla spiaggia di sabbia bianca",
        "Esplorazione delle isole di mangrovie di Qulaan",
        "Scoperta di alberi di mangrovie unici",
        "Opportunità di snorkeling",
        "Snack",
        "Splendido scenario naturale",
        "Ottime opportunità fotografiche",
        "Adatto a famiglie, coppie e principianti"
      ],
      ru: [
        "Посещение пляжа Шарм-эль-Лули",
        "Около 3 часов пляжного отдыха",
        "Плавание в кристально чистой воде Красного моря",
        "Отдых на белом песчаном пляже",
        "Исследование мангровых островов Кулаан",
        "Знакомство с уникальными мангровыми деревьями",
        "Возможность заняться сноркелингом",
        "Закуски",
        "Красивые природные пейзажи",
        "Отличные возможности для фото",
        "Подходит для семей, пар и новичков"
      ],
      pl: [
        "Wizyta na plaży Sharm El Luli",
        "Około 3 godziny czasu na plaży",
        "Pływanie w krystalicznie czystej wodzie Morza Czerwonego",
        "Relaks na białej piaszczystej plaży",
        "Odkrywanie wysp mangrowych Qulaan",
        "Odkrywanie unikalnych drzew mangrowych",
        "Możliwość snorkelingu",
        "Przekąski",
        "Piękna przyroda",
        "Świetne miejsca do robienia zdjęć",
        "Odpowiednie dla rodzin, par i początkujących"
      ],
      cz: [
        "Návštěva pláže Sharm El Luli",
        "Asi 3 hodiny času na pláži",
        "Plavání v křišťálově čisté vodě Rudého moře",
        "Relaxace na bílé písečné pláži",
        "Prozkoumání mangrovových ostrovů Qulaan",
        "Objevování unikátních mangrovových stromů",
        "Možnost šnorchlování",
        "Svačiny",
        "Krásná přírodní scenérie",
        "Skvělé příležitosti k focení",
        "Vhodné pro rodiny, páry a začátečníky"
      ]
    },
    included: {
      en: [
        "Hotel pickup & drop-off",
        "Sharm El Luli Beach visit",
        "Around 3 hours of swimming & relaxing at the beach",
        "Qulaan Mangrove Islands visit",
        "Mangrove trees experience",
        "Snorkeling equipment",
        "Entrance tickets to both Sharm El Luli & Qulaan Mangroves",
        "Snacks",
        "Mineral water",
        "Soft drinks",
        "Local guide"
      ],
      de: [
        "Abholung und Rückbringung zum Hotel",
        "Besuch des Strandes von Sharm El Luli",
        "Etwa 3 Stunden Schwimmen und Entspannen am Strand",
        "Besuch der Qulaan-Mangroveninseln",
        "Mangroven-Erlebnis",
        "Schnorchelausrüstung",
        "Eintrittskarten für Sharm El Luli und die Qulaan-Mangroven",
        "Snacks",
        "Mineralwasser",
        "Alkoholfreie Getränke",
        "Lokaler Guide"
      ],
      it: [
        "Prelievo e rientro in hotel",
        "Visita alla spiaggia di Sharm El Luli",
        "Circa 3 ore di nuoto e relax in spiaggia",
        "Visita alle isole di mangrovie di Qulaan",
        "Esperienza tra le mangrovie",
        "Attrezzatura da snorkeling",
        "Biglietti d'ingresso per Sharm El Luli e le mangrovie di Qulaan",
        "Snack",
        "Acqua minerale",
        "Bevande analcoliche",
        "Guida locale"
      ],
      ru: [
        "Трансфер из отеля и обратно",
        "Посещение пляжа Шарм-эль-Лули",
        "Около 3 часов плавания и отдыха на пляже",
        "Посещение мангровых островов Кулаан",
        "Экскурсия по мангровым зарослям",
        "Оборудование для сноркелинга",
        "Входные билеты в Шарм-эль-Лули и на мангры Кулаан",
        "Закуски",
        "Минеральная вода",
        "Безалкогольные напитки",
        "Местный гид"
      ],
      pl: [
        "Odbiór i powrót do hotelu",
        "Wizyta na plaży Sharm El Luli",
        "Około 3 godziny pływania i relaksu na plaży",
        "Wizyta na wyspach mangrowych Qulaan",
        "Doświadczenie z drzewami mangrowymi",
        "Sprzęt do snorkelingu",
        "Bilety wstępu do Sharm El Luli i na mangrowce Qulaan",
        "Przekąski",
        "Woda mineralna",
        "Napoje bezalkoholowe",
        "Lokalny przewodnik"
      ],
      cz: [
        "Vyzvednutí a návrat do hotelu",
        "Návštěva pláže Sharm El Luli",
        "Asi 3 hodiny plavání a relaxace na pláži",
        "Návštěva mangrovových ostrovů Qulaan",
        "Zážitek s mangrovovými stromy",
        "Vybavení na šnorchlování",
        "Vstupenky do Sharm El Luli a mangrovů Qulaan",
        "Svačiny",
        "Minerální voda",
        "Nealkoholické nápoje",
        "Místní průvodce"
      ]
    },
    notIncluded: {
      en: [
        "Personal expenses",
        "Additional services or activities not mentioned above"
      ],
      de: [
        "Persönliche Ausgaben",
        "Zusätzliche Services oder Aktivitäten, die oben nicht erwähnt wurden"
      ],
      it: [
        "Spese personali",
        "Servizi o attività aggiuntivi non menzionati sopra"
      ],
      ru: [
        "Личные расходы",
        "Дополнительные услуги или мероприятия, не упомянутые выше"
      ],
      pl: [
        "Wydatki osobiste",
        "Dodatkowe usługi lub aktywności niewymienione powyżej"
      ],
      cz: [
        "Osobní výdaje",
        "Další služby nebo aktivity neuvedené výše"
      ]
    },
    whatToBring: {
      en: ["Swimwear", "Towel", "Sunscreen", "Sunglasses", "Hat", "Comfortable clothes", "Camera or phone for photos"],
      de: ["Badebekleidung", "Handtuch", "Sonnencreme", "Sonnenbrille", "Hut", "Bequeme Kleidung", "Kamera oder Handy für Fotos"],
      it: ["Costume da bagno", "Asciugamano", "Crema solare", "Occhiali da sole", "Cappello", "Vestiti comodi", "Fotocamera o telefono per foto"],
      ru: ["Купальник", "Полотенце", "Солнцезащитный крем", "Солнцезащитные очки", "Головной убор", "Удобная одежда", "Камера или телефон для фото"],
      pl: ["Strój kąpielowy", "Ręcznik", "Krem z filtrem", "Okulary przeciwsłoneczne", "Czapka", "Wygodne ubrania", "Aparat lub telefon do zdjęć"],
      cz: ["Plavky", "Ručník", "Opalovací krém", "Sluneční brýle", "Klobouk", "Pohodlné oblečení", "Fotoaparát nebo telefon na fotky"]
    },
    childrenPolicy: {
      under5: {
        en: "Under 5 years: Free",
        de: "Unter 5 Jahren: Kostenlos",
        it: "Sotto i 5 anni: Gratuito",
        ru: "До 5 лет: Бесплатно",
        pl: "Poniżej 5 lat: Bezpłatnie",
        cz: "Do 5 let: Zdarma"
      },
      from5to10: {
        en: "5–10 years: 50% of adult price",
        de: "5–10 Jahre: 50% des Erwachsenenpreises",
        it: "5–10 anni: 50% del prezzo adulto",
        ru: "5–10 лет: 50% от стоимости для взрослых",
        pl: "5–10 lat: 50% ceny dla dorosłych",
        cz: "5–10 let: 50 % dospělé ceny"
      },
      over10: {
        en: "Over 10 years: Full adult price",
        de: "Über 10 Jahre: Voller Erwachsenenpreis",
        it: "Oltre i 10 anni: Prezzo intero adulto",
        ru: "Старше 10 лет: Полная стоимость для взрослых",
        pl: "Powyżej 10 lat: Pełna cena dla dorosłych",
        cz: "Nad 10 let: Plná dospělá cena"
      }
    },
    itinerary: [
      {
        step: "01",
        title: {
          en: "Hotel Pickup",
          de: "Hotelabholung",
          it: "Prelievo in hotel",
          ru: "Трансфер из отеля",
          pl: "Odbiór z hotelu",
          cz: "Vyzvednutí v hotelu"
        },
        description: {
          en: "Pickup from your hotel.",
          de: "Abholung von Ihrem Hotel.",
          it: "Prelievo dal tuo hotel.",
          ru: "Трансфер из вашего отеля.",
          pl: "Odbiór z Twojego hotelu.",
          cz: "Vyzvednutí z vašeho hotelu."
        }
      },
      {
        step: "02",
        title: {
          en: "Drive to Sharm El Luli",
          de: "Fahrt nach Sharm El Luli",
          it: "Viaggio verso Sharm El Luli",
          ru: "Поездка в Шарм-эль-Лули",
          pl: "Przejazd do Sharm El Luli",
          cz: "Cesta do Sharm El Luli"
        },
        description: {
          en: "Travel south to the beautiful Sharm El Luli Beach.",
          de: "Fahrt nach Süden zum wunderschönen Strand von Sharm El Luli.",
          it: "Viaggio verso sud alla splendida spiaggia di Sharm El Luli.",
          ru: "Поездка на юг к живописному пляжу Шарм-эль-Лули.",
          pl: "Podróż na południe na piękną plażę Sharm El Luli.",
          cz: "Cesta na jih na krásnou pláž Sharm El Luli."
        }
      },
      {
        step: "03",
        title: {
          en: "Beach Time — Around 3 Hours",
          de: "Strandzeit — Ca. 3 Stunden",
          it: "Tempo in Spiaggia — Circa 3 ore",
          ru: "Пляжный отдых — около 3 часов",
          pl: "Czas na plaży — Około 3 godzin",
          cz: "Čas na pláži — Asi 3 hodiny"
        },
        description: {
          en: "Enjoy swimming, relaxing and the crystal-clear Red Sea.",
          de: "Genießen Sie das Schwimmen, Entspannen und das kristallklare Rote Meer.",
          it: "Goditi il nuoto, il relax e il Mar Rosso cristallino.",
          ru: "Наслаждайтесь плаванием, отдыхом и кристально чистым Красным морем.",
          pl: "Ciesz się pływaniem, relaksem i krystalicznie czystym Morzem Czerwonym.",
          cz: "Užijte si plavání, relaxaci a křišťálově čisté Rudé moře."
        }
      },
      {
        step: "04",
        title: {
          en: "Continue to Qulaan Mangroves",
          de: "Weiterfahrt zu den Qulaan-Mangroven",
          it: "Proseguimento verso le mangrovie di Qulaan",
          ru: "Переезд к мангровым зарослям Кулаан",
          pl: "Przejazd do mangrowców Qulaan",
          cz: "Pokračování k mangrovům Qulaan"
        },
        description: {
          en: "Continue to the peaceful Qulaan Mangrove area.",
          de: "Weiterfahrt in das friedliche Qulaan-Mangrovengebiet.",
          it: "Proseguimento verso la tranquilla zona delle mangrovie di Qulaan.",
          ru: "Переезд в спокойный район мангровых зарослей Кулаан.",
          pl: "Przejazd do spokojnego obszaru mangrowców Qulaan.",
          cz: "Pokračování do klidné oblasti mangrovů Qulaan."
        }
      },
      {
        step: "05",
        title: {
          en: "Explore Qulaan Mangroves",
          de: "Erkundung der Qulaan-Mangroven",
          it: "Esplorazione delle mangrovie di Qulaan",
          ru: "Исследование мангровых зарослей Кулаан",
          pl: "Eksploracja mangrowców Qulaan",
          cz: "Prozkoumání mangrovů Qulaan"
        },
        description: {
          en: "Discover the mangrove islands and natural surroundings.",
          de: "Entdecken Sie die Mangroveninseln und die natürliche Umgebung.",
          it: "Scopri le isole di mangrovie e i dintorni naturali.",
          ru: "Откройте для себя мангровые острова и окружающую природу.",
          pl: "Odkryj wyspy mangrowe i otaczającą przyrodę.",
          cz: "Objevte mangrovové ostrovy a přírodní okolí."
        }
      },
      {
        step: "06",
        title: {
          en: "Snorkeling & Free Time",
          de: "Schnorcheln & Freizeit",
          it: "Snorkeling e Tempo Libero",
          ru: "Сноркелинг и свободное время",
          pl: "Snorkeling i czas wolny",
          cz: "Šnorchlování a volný čas"
        },
        description: {
          en: "Enjoy snorkeling and relaxing in the beautiful natural environment, with snacks.",
          de: "Genießen Sie Schnorcheln und Entspannung in der wunderschönen natürlichen Umgebung, inklusive Snacks.",
          it: "Goditi lo snorkeling e il relax nella splendida cornice naturale, con snack.",
          ru: "Наслаждайтесь сноркелингом и отдыхом в прекрасной природной среде, с закусками.",
          pl: "Ciesz się snorkelingiem i relaksem w pięknej przyrodzie wraz z przekąskami.",
          cz: "Užijte si šnorchlování a relaxaci v krásném přírodním prostředí se svačinou."
        }
      },
      {
        step: "07",
        title: {
          en: "Return to Your Hotel",
          de: "Rückkehr zu Ihrem Hotel",
          it: "Ritorno in hotel",
          ru: "Возвращение в отель",
          pl: "Powrót do hotelu",
          cz: "Návrat do vašeho hotelu"
        },
        description: {
          en: "Return transfer to your hotel.",
          de: "Rücktransfer zu Ihrem Hotel.",
          it: "Trasferimento di ritorno al tuo hotel.",
          ru: "Обратный трансфер в ваш отель.",
          pl: "Transfer powrotny do hotelu.",
          cz: "Zpáteční transfer do vašeho hotelu."
        }
      }
    ],
    paymentNote: {
      en: "Pay after the trip — no online payment required.",
      de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
      it: "Paga dopo il viaggio — nessun pagamento online richiesto.",
      ru: "Оплата после поездки — онлайн-оплата не требуется.",
      pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
      cz: "Platba až po výletě — není vyžadována platba předem online."
    },
    disclaimer: {
      en: "Sharm El Luli and Qulaan are protected natural areas. We always respect the beaches, mangroves, marine life and natural environment during the experience.",
      de: "Sharm El Luli und Qulaan sind geschützte Naturgebiete. Wir respektieren während des Erlebnisses stets die Strände, Mangroven, Meereslebewesen und die natürliche Umwelt.",
      it: "Sharm El Luli e Qulaan sono aree naturali protette. Rispettiamo sempre le spiagge, le mangrovie, la vita marina e l'ambiente naturale durante l'esperienza.",
      ru: "Шарм-эль-Лули и Кулаан являются охраняемыми природными территориями. Во время поездки мы всегда с уважением относимся к пляжам, манграм, морской фауне и окружающей среде.",
      pl: "Sharm El Luli i Qulaan to chronione obszary przyrodnicze. Zawsze szanujemy plaże, mangrowce, życie morskie i środowisko naturalne podczas wycieczki.",
      cz: "Sharm El Luli a Qulaan jsou chráněné přírodní oblasti. Během zážitku vždy respektujeme pláže, mangrovy, mořský život a přírodní prostředí."
    },
    images: {
      featured: "/images/tours/quleen-card.webp",
      gallery: [
        "/images/tours/quleen-1.webp",
        "/images/tours/quleen-2.webp",
        "/images/tours/quleen-3.webp"
      ]
    }
  },
  {
  id: "super-safari",
  slug: "super-safari-desert-bedouin-experience",
  title: {
    en: "Super Safari",
    de: "Super-Safari",
    it: "Super Safari",
    ru: "Супер Сафари",
    pl: "Super Safari",
    cz: "Super Safari"
  },
  subtitle: {
    en: "Desert & Bedouin Experience",
    de: "Wüsten- & Beduinen-Erlebnis",
    it: "Esperienza nel Deserto e Beduina",
    ru: "Пустыня и традиции бедуинов",
    pl: "Przygoda na pustyni i wieś Beduinów",
    cz: "Pouštní a beduínský zážitek"
  },
  category: {
    en: "Desert Adventures",
    de: "Wüstenabenteuer",
    it: "Avventure nel Deserto",
    ru: "Пустынные приключения",
    pl: "Przygody na Pustyni",
    cz: "Pouštní dobrodružství"
  },
  price: {
    amount: 55,
    currency: "€",
    unit: {
      en: "per person",
      de: "pro Person",
      it: "per persona",
      ru: "за человека",
      pl: "za osobę",
      cz: "za osobu"
    }
  },
  duration: {
    en: "6.5 Hours",
    de: "6.5 Stunden",
    it: "6.5 Ore",
    ru: "6.5 Часов",
    pl: "6.5 Godziny",
    cz: "6.5 Hodin"
  },
  departure: {
    en: "Hotel Pickup (2:30 PM)",
    de: "Hotelabholung (14:30 Uhr)",
    it: "Transfer dall'hotel (14:30)",
    ru: "Трансфер из отеля (14:30)",
    pl: "Odbiór z hotelu (14:30)",
    cz: "Vyzvednutí v hotelu (14:30)"
  },
  overview: {
    en: "Experience the desert, Bedouin culture and an unforgettable sunset. Your Super Safari begins with a 4WD Toyota Land Cruiser pickup from your hotel. Travel deep into the desert, enjoy a quad bike adventure, visit a traditional Bedouin village, ride a camel, watch the sunset in the heart of the desert, and finish the evening with a BBQ dinner, traditional music and a Bedouin show.",
    de: "Erleben Sie die Wüste, die Beduinenkultur und einen unvergesslichen Sonnenuntergang. Ihre Super-Safari beginnt mit der Abholung im Geländewagen direkt vom Hotel. Fahren Sie tief in die Wüste, genießen Sie ein Quad-Abenteuer, besuchen Sie ein Beduinendorf, reiten Sie auf einem Kamel und genießen Sie ein BBQ-Abendessen mit Beduinenshow.",
    it: "Vivi il deserto, la cultura beduina e un tramonto indimenticabile. Il tuo Super Safari inizia con il transfer in 4WD Toyota Land Cruiser dal tuo hotel. Avventurati nel deserto, divertiti in quad, visita un villaggio beduino, cavalca un cammello e concludi la serata con una cena BBQ e uno spettacolo tradizionale.",
    ru: "Ощутите магию пустыни, культуру бедуинов и незабываемый закат. Ваше Супер Сафари начинается с трансфера на джипе Toyota Land Cruiser из отеля. Покатайтесь на квадроциклах, посетите бедуинскую деревню, покатайтесь на верблюдах и завершите вечер ужином барбекю с традиционным шоу.",
    pl: "Poznaj pustynię, kulturę Beduinów i niezapomniany zachód słońca. Twoje Super Safari rozpoczyna się odbiorem z hotelu samochodem 4x4. Jedź w głąb pustyni, jeździj na kładach, odwiedź wioskę Beduinów, przejedź się na wielbłądzie i zakończ wieczór kolacją BBQ oraz pokazem.",
    cz: "Zažijte poušť, beduínskou kulturu a nezapomenutelný západ slunce. Vaše Super Safari začíná vyzvednutím v hotelu terénním vozem 4x4. Projeďte se na čtyřkolkách, navštivte beduínskou vesnici, projeďte se na velbloudu a zakončete večer BBQ večeří a show."
  },
  highlights: {
    en: [
      "4WD Toyota Land Cruiser desert adventure",
      "Quad bike experience (around 22 km)",
      "Stop to learn about the famous Akassia Tree",
      "Visit a traditional Bedouin village & water well",
      "Traditional camel ride & bread making demonstration",
      "Beautiful sunset in the heart of the desert",
      "Traditional Bedouin tea & BBQ open buffet dinner",
      "Bedouin party, Egyptian music & Star show under the night sky"
    ],
    de: [
      "Wüstenabenteuer im 4WD Toyota Land Cruiser",
      "Quad-Bike-Erlebnis (ca. 22 km Fahrt)",
      "Stopp beim berühmten Akassia-Baum",
      "Besuch eines traditionellen Beduinendorfs und des Brunnen",
      "Traditionelles Kamelreiten & Beduinenbrot-Zubereitung",
      "Wunderschöner Sonnenuntergang im Herzen der Wüste",
      "Beduinentee & Open-Buffet-BBQ-Abendessen",
      "Beduinen-Show, ägyptische Musik & Sternenbeobachtung"
    ],
    it: [
      "Avventura nel deserto in 4WD Toyota Land Cruiser",
      "Esperienza in quad (circa 22 km)",
      "Sosta per scoprire il famoso albero Akassia",
      "Visita a un villaggio beduino e al pozzo d'acqua",
      "Giro in cammello e dimostrazione del pane beduino",
      "Splendido tramonto nel cuore del deserto",
      "Tè beduino e cena BBQ a buffet",
      "Festa beduina, musica egiziana e spettacolo delle stelle"
    ],
    ru: [
      "Приключение в пустыне на джипе Toyota Land Cruiser 4WD",
      "Поездка на квадроциклах (около 22 км)",
      "Остановка у знаменитого дерева Акассия",
      "Посещение бедуинской деревни и колодца",
      "Катание на верблюдах и выпечка бедуинского хлеба",
      "Красивый закат в самом сердце пустыни",
      "Традиционный бедуинский чай и BBQ обед (шведский стол)",
      "Шоу бедуинов, египетская музыка и наблюдение за звездами"
    ],
    pl: [
      "Przygoda na pustyni samochodem 4x4 Toyota Land Cruiser",
      "Jazda na kładach (ok. 22 km)",
      "Przystanek przy słynnym drzewie Akassia",
      "Wizyta w tradycyjnej wiosce Beduinów i przy studni",
      "Przejażdżka na wielbłądzie i wypiek chleba",
      "Piękny zachód słońca w sercu pustyni",
      "Beduińska herbata i kolacja BBQ w formie bufet",
      "Pokaz beduiński, egipska muzyka i obserwacja gwiazd"
    ],
    cz: [
      "Pouštní dobrodružství v 4WD Toyota Land Cruiser",
      "Jízda na čtyřkolkách (cca 22 km)",
      "Zastávka u slavného stromu Akassia",
      "Návštěva tradiční beduínské vesnice a studny",
      "Jízda na velbloudu a ukázka pečení chleba",
      "Krásný západ slunce v srdci pouště",
      "Beduínský čaj a BBQ večeře formou bufetu",
      "Beduínská show, egyptská hudba a pozorování hvězd"
    ]
  },
  included: {
    en: [
      "Hotel pickup & drop-off by 4WD Toyota Land Cruiser",
      "Quad bike experience",
      "Bedouin village tour & camel ride",
      "Akassia Tree stop",
      "Traditional Bedouin tea & fresh bread",
      "Sunset viewing experience",
      "BBQ open buffet dinner",
      "Soft drinks & mineral water",
      "Bedouin party, music & star show"
    ],
    de: [
      "Abholung & Rückbringung zum Hotel im 4WD Toyota Land Cruiser",
      "Quad-Bike-Erlebnis",
      "Führung durch das Beduinendorf & Kamelreiten",
      "Stopp am Akassia-Baum",
      "Traditioneller Beduinentee & frisches Brot",
      "Sonnenuntergangs-Erlebnis",
      "BBQ-Abendessen (Open Buffet)",
      "Softdrinks & Mineralwasser",
      "Beduinenshow, Musik & Sternen-Show"
    ],
    it: [
      "Transfer da e per l'hotel in 4WD Toyota Land Cruiser",
      "Esperienza in quad",
      "Tour del villaggio beduino e giro in cammello",
      "Sosta all'albero Akassia",
      "Tè beduino e pane fresco tradizionale",
      "Esperienza del tramonto",
      "Cena BBQ a buffet",
      "Bevande analcoliche e acqua minerale",
      "Spettacolo beduino, musica e osservazione delle stelle"
    ],
    ru: [
      "Трансфер из отеля и обратно на джипе Toyota Land Cruiser 4WD",
      "Поездка на квадроциклах",
      "Экскурсия по деревне бедуинов и катание на верблюдах",
      "Остановка у дерева Акассия",
      "Бедуинский чай и свежий традиционный хлеб",
      "Встреча заката в пустыне",
      "Ужин BBQ (шведский стол)",
      "Безалкогольные напитки и минеральная вода",
      "Шоу-программа, музыка и звездное шоу"
    ],
    pl: [
      "Odbiór i powrót do hotelu 4x4 Toyota Land Cruiser",
      "Jazda na kładach",
      "Zwiedzanie wioski Beduinów i przejażdżka na wielbłądzie",
      "Przystanek przy drzewie Akassia",
      "Tradycyjna herbata i świeży chleb beduiński",
      "Oglądanie zachodu słońca",
      "Kolacja BBQ w formie bufetu",
      "Napoje bezalkoholowe i вода mineralna",
      "Pokaz beduiński, muzyka i obserwacja gwiazd"
    ],
    cz: [
      "Vyzvednutí a návrat do hotelu vozem 4x4 Toyota Land Cruiser",
      "Jízda na čtyřkolkách",
      "Prohlídka beduínské vesnice a jízda na velbloudu",
      "Zastávka u stromu Akassia",
      "Tradiční beduínský čaj a čerstvý chléb",
      "Zážitek při západu slunce",
      "BBQ večeře formou bufetu",
      "Nealkoholické nápoje a minerální voda",
      "Beduínská show, hudba a pozorování hvězd"
    ]
  },
  whatToBring: {
    en: ["Comfortable clothes & shoes", "Sunglasses", "Sun protection", "Camera or phone", "Light jacket for the evening"],
    de: ["Bequeme Kleidung & Schuhe", "Sonnenbrille", "Sonnenschutz", "Kamera oder Smartphone", "Leichte Jacke für den Abend"],
    it: ["Abbigliamento e scarpe comode", "Occhiali da sole", "Protezione solare", "Fotocamera o telefono", "Giacca leggera per la sera"],
    ru: ["Удобная одежда и обувь", "Солнцезащитные очки", "Солнцезащитный крем", "Камера или телефон", "Легкая куртка на вечер"],
    pl: ["Wygodne ubranie i buty", "Okulary przeciwsłoneczne", "Ochrona przeciwsłoneczna", "Aparat lub telefon", "Lekka kurtka na wieczór"],
    cz: ["Pohodlné oblečení a obuv", "Sluneční brýle", "Ochrana proti slunci", "Fotoaparát nebo telefon", "Lehká bunda na večer"]
  },
  childrenPolicy: {
    under5: {
      en: "Under 5 years: Free",
      de: "Unter 5 Jahren: Kostenlos",
      it: "Sotto i 5 anni: Gratuito",
      ru: "До 5 лет: Бесплатно",
      pl: "Poniżej 5 lat: Bezpłatnie",
      cz: "Pod 5 let: Zdarma"
    },
    from5to10: {
      en: "5–10 years: 20 € / USD per child",
      de: "5–10 Jahre: 20 € / USD pro Kind",
      it: "5–10 anni: 20 € / USD per bambino",
      ru: "5–10 лет: 20 € / USD за ребенка",
      pl: "5–10 lat: 20 € / USD za dziecko",
      cz: "5–10 let: 20 € / USD za dítě"
    },
    over10: {
      en: "Over 10 years: Full adult price (55 €)",
      de: "Über 10 Jahre: Voller Erwachsenenpreis (55 €)",
      it: "Oltre i 10 anni: Prezzo intero adulto (55 €)",
      ru: "Старше 10 лет: Полная стоимость (55 €)",
      pl: "Powyżej 10 lat: Pełna cena (55 €)",
      cz: "Nad 10 let: Plná cena (55 €)"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Pickup",
        de: "Hotelabholung",
        it: "Transfer dall'hotel",
        ru: "Трансфер из отеля",
        pl: "Odbiór z hotelu",
        cz: "Vyzvednutí v hotelu"
      },
      description: {
        en: "14:30 — Pickup from your hotel in a 4WD Toyota Land Cruiser.",
        de: "14:30 Uhr — Abholung von Ihrem Hotel im 4WD Toyota Land Cruiser.",
        it: "14:30 — Pickup dal tuo hotel in 4WD Toyota Land Cruiser.",
        ru: "14:30 — Трансфер из отеля на джипе Toyota Land Cruiser.",
        pl: "14:30 — Odbiór z hotelu samochodem 4x4 Toyota Land Cruiser.",
        cz: "14:30 — Vyzvednutí v hotelu vozem 4WD Toyota Land Cruiser."
      }
    },
    {
      step: "02",
      title: {
        en: "Desert Safari & Quad Bike",
        de: "Wüstensafari & Quad-Fahrt",
        it: "Safari nel deserto & Quad",
        ru: "Сафари в пустыне и квадроциклы",
        pl: "Safari na pustyni i kłady",
        cz: "Pouštní safari a čtyřkolky"
      },
      description: {
        en: "Drive around 22 km into the desert and start your quad bike adventure.",
        de: "Fahrt ca. 22 km in die Wüste und Start des Quad-Abenteuers.",
        it: "Guida di circa 22 km nel deserto e inizio dell'avventura in quad.",
        ru: "Поездка около 22 км вглубь пустыни и старт на квадроциклах.",
        pl: "Przejazd ok. 22 km na pustynię i rozpoczęcie jazdy na kładach.",
        cz: "Jízda cca 22 km do pouště a začátek dobrodružství na čtyřkolkách."
      }
    },
    {
      step: "03",
      title: {
        en: "Akassia Tree Stop",
        de: "Stopp am Akassia-Baum",
        it: "Sosta all'albero Akassia",
        ru: "Остановка у дерева Акассия",
        pl: "Przystanek przy drzewie Akassia",
        cz: "Zastávka u stromu Akassia"
      },
      description: {
        en: "Stop to take photos and learn about the iconic desert Akassia Tree.",
        de: "Fotostopp und Informationen über den berühmten Akassia-Baum.",
        it: "Sosta fotografica e informazioni sul famoso albero del deserto.",
        ru: "Остановка для фото и история знаменитого пустынного дерева.",
        pl: "Przystanek na zdjęcia i poznanie historii słynnego drzewa.",
        cz: "Zastávka na fotky a informace o slavném pouštním stromu."
      }
    },
    {
      step: "04",
      title: {
        en: "Bedouin Village Tour",
        de: "Beduinendorf-Tour",
        it: "Tour del villaggio beduino",
        ru: "Экскурсия по деревне бедуинов",
        pl: "Zwiedzanie wioski Beduinów",
        cz: "Prohlídka beduínské vesnice"
      },
      description: {
        en: "Enjoy welcome Bedouin tea, ride a camel, visit the water well, and see bread making.",
        de: "Genießen Sie Beduinentee, Kamelreiten, Brunnenbesuch und Brotzubereitung.",
        it: "Gusta il tè di benvenuto, cavalca un cammello e osserva la preparazione del pane.",
        ru: "Традиционный чай, катание на верблюдах, визит к колодцу и выпечка хлеба.",
        pl: "Picie herbaty, przejażdżka na wielbłądzie, zwiedzanie studni i pieczenie chleba.",
        cz: "Beduínský čaj, jízda na velbloudu, návštěva studny a pečení chleba."
      }
    },
    {
      step: "05",
      title: {
        en: "Desert Sunset",
        de: "Sonnenuntergang in der Wüste",
        it: "Tramonto nel deserto",
        ru: "Закат в пустыне",
        pl: "Zachód słońca na pustyni",
        cz: "Západ slunce v poušti"
      },
      description: {
        en: "Watch the breathtaking sunset from the heart of the Red Sea desert.",
        de: "Beobachten Sie den atemberaubenden Sonnenuntergang mitten in der Wüste.",
        it: "Ammira un incantevole tramonto dal cuore del deserto del Mar Rosso.",
        ru: "Насладитесь потрясающим закатом в самом сердце пустыни.",
        pl: "Oglądaj zachwycający zachód słońca z samego serca pustyni.",
        cz: "Sledujte úchvatný západ slunce z přímého srdce pouště."
      }
    },
    {
      step: "06",
      title: {
        en: "BBQ Dinner & Bedouin Show",
        de: "BBQ-Abendessen & Beduinen-Show",
        it: "Cena BBQ & Spettacolo Beduino",
        ru: "Ужин BBQ и бедуинское шоу",
        pl: "Kolacja BBQ i pokaz beduiński",
        cz: "BBQ večeře a beduínská show"
      },
      description: {
        en: "Enjoy an open buffet BBQ dinner, Egyptian music, oriental show, and stargazing.",
        de: "Genießen Sie das BBQ-Buffet, ägyptische Musik, Beduinenshow und Sternenbeobachtung.",
        it: "Cena BBQ a buffet, musica egiziana, spettacolo orientale e osservazione delle stelle.",
        ru: "Ужин «шведский стол», египетская музыка, шоу-программа и наблюдение за звездами.",
        pl: "Kolacja BBQ, egipska muzyka, pokazy beduińskie i oglądanie gwiazd.",
        cz: "BBQ večeře formou bufetu, egyptská hudba, orientalní show a pozorování hvězd."
      }
    },
    {
      step: "07",
      title: {
        en: "Return to Hotel",
        de: "Rückkehr zum Hotel",
        it: "Ritorno in Hotel",
        ru: "Возвращение в отель",
        pl: "Powrót do hotelu",
        cz: "Návrat do hotelu"
      },
      description: {
        en: "Around 21:00 — Transfer back to your hotel in Marsa Alam.",
        de: "Ca. 21:00 Uhr — Rücktransfer zu Ihrem Hotel in Marsa Alam.",
        it: "Circa 21:00 — Rientro presso il tuo hotel a Marsa Alam.",
        ru: "Около 21:00 — Трансфер обратно в ваш отель в Марса-Аламе.",
        pl: "Około 21:00 — Powrót do hotelu w Marsa Alam.",
        cz: "Kolem 21:00 — Návrat do vašeho hotelu v Marsa Alam."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment required.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
    it: "Paga dopo il tour — nessuna pagamento online richiesto.",
    ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
    pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
    cz: "Platba až po výletu — není vyžadována platba předem online."
  },
  disclaimer: {
    en: "Personal expenses and photos/videos taken by local photographers are optional and not included in the price.",
    de: "Persönliche Ausgaben sowie Fotos/Videos von lokalen Fotografen sind optional und nicht im Preis enthalten.",
    it: "Le spese personali e le foto/video scattate da fotografi locali sono opzionali e non incluse nel prezzo.",
    ru: "Личные расходы и фото/видео от местных фотографов оплачиваются отдельно по желанию.",
    pl: "Wydatki osobiste oraz zdjęcia i filmy od lokalnych fotografów są opcjonalne i nie są wliczone w cenę.",
    cz: "Osobní výdaje a fotografie/videa od místních fotografů jsou volitelné a nejsou zahrnuty v ceně."
  },
  images: {
    featured: "/images/tours/safari-card.webp",
    gallery: [
      "/images/tours/safari-1.webp",
      "/images/tours/safari-2.webp",
      "/images/tours/safari-3.webp"
    ]
  }
},
{
  id: "sunset-horse-riding-bedouin-night",
  slug: "sunset-horse-riding-bedouin-night",
  title: {
    en: "Sunset Horse Riding & Bedouin Night",
    de: "Sonnenuntergangs-Ausritt & Beduinennacht",
    it: "Cavalcatata al Tramonto e Notte Beduina",
    ru: "Конная прогулка на закате и Бедуинская ночь",
    pl: "Jazda konna o zachodzie słońca i Noc Beduńska",
    cz: "Jízda na koni při západu slunce a Beduínská noc"
  },
  subtitle: {
    en: "Horse Riding • Campfire • Bedouin Dinner",
    de: "Ausritt • Lagerfeuer • Beduinen-Abendessen",
    it: "Cavalcatata • Falò • Cena Beduina",
    ru: "Прогулка на лошадях • Костер • Бедуинский ужин",
    pl: "Jazda konna • Ognisko • Kolacja Beduńska",
    cz: "Jízda na koni • Táborák • Beduínská večeře"
  },
  category: {
    en: "Desert & Cultural",
    de: "Wüste & Kultur",
    it: "Deserto e Cultura",
    ru: "Пустыня и Культура",
    pl: "Pustynia i Kultura",
    cz: "Poušť a Kultura"
  },
  price: {
    amount: 65,
    currency: "€",
    unit: {
      en: "per person",
      de: "pro Person",
      it: "per persona",
      ru: "за человека",
      pl: "za osobę",
      cz: "za osobu"
    }
  },
  duration: {
    en: "8 Hours",
    de: "8 Stunden",
    it: "8 Ore",
    ru: "8 часов",
    pl: "8 godzin",
    cz: "8 hodin"
  },
  departure: {
    en: "South Marsa Alam",
    de: "Süd-Marsa Alam",
    it: "Sud di Marsa Alam",
    ru: "Юг Марса-Алама",
    pl: "Południowe Marsa Alam",
    cz: "Jižní Marsa Alam"
  },
  overview: {
    en: "Experience an authentic Bedouin evening by the Red Sea. Enjoy a relaxing evening combining a one-hour horse ride with a traditional beach campfire. Enjoy traditional Bedouin coffee and a fresh fish dinner, relax with drinks, and finish beneath the stars away from busy tourist areas.",
    de: "Erleben Sie einen authentischen Beduinenabend am Roten Meer. Genießen Sie einen entspannten Abend, der einen einstündigen Ausritt mit einem traditionellen Lagerfeuer am Strand verbindet. Genießen Sie traditionellen Beduinenkaffee, ein frisches Fischgericht und entspannen Sie unter dem Sternenhimmel.",
    it: "Vivi un'autentica serata beduina sul Mar Rosso. Goditi una serata rilassante che unisce un'ora di passeggiata a cavallo con un tradizionale falò in spiaggia. Gusta il caffè beduino e una cena a base di pesce fresco sotto le stelle.",
    ru: "Испытайте настоящий бедуинский вечер на берегу Красного моря. Наслаждайтесь расслабляющим вечером, сочетающим часовую прогулку на лошадях и традиционный костер на пляже. Попробуйте бедуинский кофе, ужин из свежей рыбы и отдохните под звездами.",
    pl: "Przeżyj autentyczny beduiński wieczór nad Morzem Czerwonym. Ciesz się relaksującym wieczorem łączącym godzinną jazdę konną z tradycyjnym ogniskiem na plaży. Spróbuj tradycyjnej beduińskiej kawy, świeżej ryby i zrelaksuj się pod gwiazdami.",
    cz: "Zažijte autentický beduínský večer u Rudého moře. Užijte si pohodový večer spojující hodinovou jízdu na koni s tradičním táborákem na pláži. Vychutnejte si beduínskou kávu, večeři z čerstvých ryb a relaxujte pod hvězdami."
  },
  highlights: {
    en: [
      "1-hour horse riding experience",
      "Professional horse riding guide",
      "Traditional beach campfire",
      "Traditional Bedouin coffee",
      "Fresh fish dinner",
      "All drinks included",
      "Relaxing evening by the Red Sea",
      "Stargazing away from busy tourist areas",
      "Hotel pickup and drop-off",
      "Entrance ticket included"
    ],
    de: [
      "1-stündiger Ausritt",
      "Professioneller Reitführer",
      "Traditionelles Lagerfeuer am Strand",
      "Traditioneller Beduinenkaffee",
      "Frisches Fisch-Abendessen",
      "Alle Getränke inklusive",
      "Entspannender Abend am Roten Meer",
      "Sternenbeobachtung fernab des Trubels",
      "Hotelabholung und Rückbringung",
      "Eintrittskarte inklusive"
    ],
    it: [
      "1 ora di passeggiata a cavallo",
      "Guida equestre professionale",
      "Tradizionale falò in spiaggia",
      "Caffè beduino tradizionale",
      "Cena a base di pesce fresco",
      "Tutte le bevande incluse",
      "Serata rilassante sul Mar Rosso",
      "Osservazione delle stelle lontano dal caos",
      "Transfer da e per l'hotel",
      "Biglietto d'ingresso incluso"
    ],
    ru: [
      "1 час прогулки на лошадях",
      "Профессиональный гид по верховой езде",
      "Традиционный костер на пляже",
      "Традиционный бедуинский кофе",
      "Ужин из свежей рыбы",
      "Все напитки включены",
      "Расслабляющий вечер у Красного моря",
      "Наблюдение за звездами вдали от суеты",
      "Трансфер из отеля и обратно",
      "Входной билет включен"
    ],
    pl: [
      "1 godzina jazdy konnej",
      "Profesjonalny przewodnik jeździecki",
      "Tradycyjne ognisko na plaży",
      "Tradycyjna kawa beduińska",
      "Kolacja ze świeżej ryby",
      "Wszystkie napoje w cenie",
      "Relaksujący wieczór nad Morzem Czerwonym",
      "Obserwacja gwiazd z dala od tłumów",
      "Odbiór i powrót do hotelu",
      "Bilet wstępu w cenie"
    ],
    cz: [
      "1 hodina jízdy na koni",
      "Profesionální průvodce pro jízdu na koni",
      "Tradiční táborák na pláži",
      "Tradiční beduínská káva",
      "Večeře z čerstvých ryb",
      "Všechny nápoje v ceně",
      "Pohodový večer u Rudého moře",
      "Pozorování hvězd mimo rušné oblasti",
      "Vyzvednutí a návrat do hotelu",
      "Vstupenka v ceně"
    ]
  },
  included: {
    en: [
      "Hotel pickup and drop-off",
      "1-hour horse riding",
      "Professional horse riding guide",
      "Beach campfire experience",
      "Traditional Bedouin coffee",
      "Fresh fish dinner",
      "All drinks",
      "Entrance ticket",
      "Stargazing experience"
    ],
    de: [
      "Hotelabholung und Rückbringung",
      "1-stündiger Ausritt",
      "Professioneller Reitführer",
      "Strand-Lagerfeuer-Erlebnis",
      "Traditioneller Beduinenkaffee",
      "Frisches Fisch-Abendessen",
      "Alle Getränke",
      "Eintrittskarte",
      "Sternenbeobachtung"
    ],
    it: [
      "Transfer da e per l'hotel",
      "1 ora di passeggiata a cavallo",
      "Guida equestre professionale",
      "Esperienza del falò in spiaggia",
      "Caffè beduino tradizionale",
      "Cena a base di pesce fresco",
      "Tutte le bevande",
      "Biglietto d'ingresso",
      "Osservazione delle stelle"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "1 час прогулки на лошадях",
      "Профессиональный гид по верховой езде",
      "Костер на пляже",
      "Традиционный бедуинский кофе",
      "Ужин из свежей рыбы",
      "Все напитки",
      "Входной билет",
      "Наблюдение за звездами"
    ],
    pl: [
      "Odbiór i powrót do hotelu",
      "1 godzina jazdy konnej",
      "Profesjonalny przewodnik jeździecki",
      "Ognisko na plaży",
      "Tradycyjna kawa beduińska",
      "Kolacja ze świeżej ryby",
      "Wszystkie napoje",
      "Bilet wstępu",
      "Obserwacja gwiazd"
    ],
    cz: [
      "Vyzvednutí a návrat do hotelu",
      "1 hodina jízdy na koni",
      "Profesionální průvodce pro jízdu na koni",
      "Táborák na pláži",
      "Tradiční beduínská káva",
      "Večeře z čerstvých ryb",
      "Všechny nápoje",
      "Vstupenka",
      "Pozorování hvězd"
    ]
  },
  notIncluded: {
    en: [
      "Personal expenses",
      "Optional activities or services not mentioned above"
    ],
    de: [
      "Persönliche Ausgaben",
      "Optionale Aktivitäten oder oben nicht genannte Dienstleistungen"
    ],
    it: [
      "Spese personali",
      "Attività opzionali o servizi non menzionati sopra"
    ],
    ru: [
      "Личные расходы",
      "Дополнительные услуги или активности, не указанные выше"
    ],
    pl: [
      "Wydatki osobiste",
      "Opcjonalne atrakcje lub usługi niewymienione powyżej"
    ],
    cz: [
      "Osobní výdaje",
      "Volitelné активности nebo služby výše neuvedené"
    ]
  },
  whatToBring: {
    en: ["Comfortable clothes", "Comfortable shoes", "Sunglasses", "Sun protection", "Camera or phone", "Light jacket for the evening"],
    de: ["Bequeme Kleidung", "Bequeme Schuhe", "Sonnenbrille", "Sonnenschutz", "Kamera oder Handy", "Leichte Jacke für den Abend"],
    it: ["Abiti comodi", "Scarpe comode", "Occhiali da sole", "Protezione solare", "Fotocamera o telefono", "Giacca leggera per la sera"],
    ru: ["Удобная одежда", "Удобная обувь", "Солнцезащитные очки", "Защита от солнца", "Камера или телефон", "Легкая куртка на вечер"],
    pl: ["Wygodne ubranie", "Wygodne buty", "Okulary przeciwsłoneczne", "Ochrona przeciwsłoneczna", "Aparat lub telefon", "Lekka kurtka na wieczór"],
    cz: ["Pohodlné oblečení", "Pohodlná obuv", "Sluneční brýle", "Ochrana proti slunci", "Fotoaparát nebo telefon", "Lehká bunda na večer"]
  },
  childrenPolicy: {
    under5: {
      en: "Under 5 years: Free",
      de: "Unter 5 Jahren: Kostenlos",
      it: "Sotto i 5 anni: Gratuito",
      ru: "До 5 лет: Бесплатно",
      pl: "Poniżej 5 lat: Bezpłatnie",
      cz: "Pod 5 let: Zdarma"
    },
    from5to10: {
      en: "5–10 years: 50% of adult price",
      de: "5–10 Jahre: 50% des Erwachsenenpreises",
      it: "5–10 anni: 50% del prezzo adulti",
      ru: "5–10 лет: 50% от стоимости взрослого",
      pl: "5–10 lat: 50% ceny dorosłego",
      cz: "5–10 let: 50 % z ceny dospělého"
    },
    over10: {
      en: "Over 10 years: Full adult price",
      de: "Über 10 Jahre: Voller Erwachsenenpreis",
      it: "Oltre i 10 anni: Prezzo intero adulto",
      ru: "Старше 10 лет: Полная стоимость",
      pl: "Powyżej 10 lat: Pełna cena",
      cz: "Nad 10 let: Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "16:00 — Hotel Pickup",
        de: "16:00 — Hotelabholung",
        it: "16:00 — Transfer dall'Hotel",
        ru: "16:00 — Трансфер из отеля",
        pl: "16:00 — Odbiór z Hotelu",
        cz: "16:00 — Vyzvednutí v hotelu"
      },
      description: {
        en: "Pickup from your hotel.",
        de: "Abholung von Ihrem Hotel.",
        it: "Ritiro presso il tuo hotel.",
        ru: "Трансфер из вашего отеля.",
        pl: "Odbiór z Twojego hotelu.",
        cz: "Vyzvednutí z vašeho hotelu."
      }
    },
    {
      step: "02",
      title: {
        en: "Arrival at Beach Camp",
        de: "Ankunft im Strandcamp",
        it: "Arrivo al Campo in Spiaggia",
        ru: "Прибытие в пляжный лагерь",
        pl: "Przyjazd do Obozu na Plaży",
        cz: "Příjezd do plážového kempu"
      },
      description: {
        en: "Arrive at the traditional beach camp by the Red Sea.",
        de: "Ankunft im traditionellen Strandcamp am Roten Meer.",
        it: "Arrivo al tradizionale campo sulla spiaggia del Mar Rosso.",
        ru: "Прибытие в традиционный пляжный лагерь на берегу моря.",
        pl: "Przyjazd do tradycyjnego obozu na plaży nad Morzem Czerwonym.",
        cz: "Příjezd do tradičního plážového kempu u Rudého moře."
      }
    },
    {
      step: "03",
      title: {
        en: "1-Hour Horse Riding",
        de: "1-stündiger Ausritt",
        it: "1 Ora di Passeggiata a Cavallo",
        ru: "1 час прогулки на лошадях",
        pl: "1 Godzina Jazdy Konnej",
        cz: "1 hodina jízdy na koni"
      },
      description: {
        en: "Enjoy a 1-hour ride with a professional guide.",
        de: "Genießen Sie einen 1-stündigen Ausritt mit Reitführer.",
        it: "Goditi un'ora di passeggiata con guida professionale.",
        ru: "Часовая прогулка с профессиональным инструктором.",
        pl: "Ciesz się godzinną jazdą z przewodnikiem.",
        cz: "Užijte si 1 hodinu jízdy s průvodcem."
      }
    },
    {
      step: "04",
      title: {
        en: "Return to Beach Camp",
        de: "Rückkehr ins Camp",
        it: "Rientro al Campo",
        ru: "Возвращение в лагерь",
        pl: "Powrót do Obozu",
        cz: "Návrat do kempu"
      },
      description: {
        en: "Return to the camp after the horse ride.",
        de: "Rückkehr ins Camp nach dem Ausritt.",
        it: "Ritorno al campo dopo la passeggiata.",
        ru: "Возвращение в лагерь после прогулки.",
        pl: "Powrót do obozu po jazdzy konnej.",
        cz: "Návrat do kempu po jízdě na koni."
      }
    },
    {
      step: "05",
      title: {
        en: "Beach Campfire & Coffee",
        de: "Lagerfeuer & Beduinenkaffee",
        it: "Falò e Caffè Beduino",
        ru: "Костер и бедуинский кофе",
        pl: "Ognisko i Kawa Beduińska",
        cz: "Táborák a Beduínská káva"
      },
      description: {
        en: "Relax around the campfire and enjoy Bedouin coffee.",
        de: "Entpannen Sie am Lagerfeuer bei Beduinenkaffee.",
        it: "Rilassati intorno al falò e gusta il caffè beduino.",
        ru: "Отдохните у костра и попробуйте бедуинский кофе.",
        pl: "Zrelaksuj się przy ognisku i spróbuj kawy.",
        cz: "Odpočiňte si u táboráku a vychutnejte si kávu."
      }
    },
    {
      step: "06",
      title: {
        en: "Fresh Fish Dinner",
        de: "Frisches Fisch-Abendessen",
        it: "Cena di Pesce Fresco",
        ru: "Ужин из свежей рыбы",
        pl: "Kolacja ze Świeżej Ryby",
        cz: "Večeře z čerstvých ryb"
      },
      description: {
        en: "Enjoy a fresh fish dinner at the camp.",
        de: "Genießen Sie ein frisches Fisch-Abendessen im Camp.",
        it: "Gusta una cena a base di pesce fresco al campo.",
        ru: "Наслаждайтесь ужином из свежей рыбы в лагере.",
        pl: "Zjedz kolację ze świeżej ryby w obozie.",
        cz: "Vychutnejte si večeři z čerstvých ryb v kempu."
      }
    },
    {
      step: "07",
      title: {
        en: "Relax & Stargazing",
        de: "Entspannung & Sternenbeobachtung",
        it: "Relax e Osservazione Stelle",
        ru: "Отдых и наблюдение за звездами",
        pl: "Relaks i Obserwacja Gwiazd",
        cz: "Relaxace a pozorování hvězd"
      },
      description: {
        en: "Relax by the sea with drinks under the stars.",
        de: "Entspannen Sie am Meer unter dem Sternenhimmel.",
        it: "Rilassati al mare sotto le stelle con le bevande.",
        ru: "Отдохните у моря под звездным небом.",
        pl: "Zrelaksuj się nad morzem pod gwiazdami.",
        cz: "Odpočiňte si u moře pod hvězdami."
      }
    },
    {
      step: "08",
      title: {
        en: "Return Transfer",
        de: "Rücktransfer",
        it: "Rientro in Hotel",
        ru: "Обратный трансфер",
        pl: "Powrót do Hotelu",
        cz: "Návrat do hotelu"
      },
      description: {
        en: "Around Midnight — Transfer back to your hotel.",
        de: "Gegen Mitternacht — Rückfahrt zu Ihrem Hotel.",
        it: "Verso mezzanotte — Trasferimento di ritorno.",
        ru: "Около полуночи — Трансфер обратно в отель.",
        pl: "Około północy — Powrót do hotelu.",
        cz: "Kolem půlnoci — Návrat do hotelu."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment required.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
    it: "Paga dopo il tour — nessuna pagamento online richiesto.",
    ru: "Оплата после экскурсии — онлайн-предоплата не требуется.",
    pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
    cz: "Platba až po výletu — není vyžadována platba předem online."
  },
  disclaimer: {
    en: "This relaxed Red Sea evening combines horse riding, Bedouin hospitality, a traditional beach campfire and dinner under the stars with a professional guide.",
    de: "Dieser entspannte Abend kombiniert Reiten, Beduinen-Gastfreundschaft, Lagerfeuer und Abendessen unter den Sternen mit einem professionellen Reitführer.",
    it: "Questa serata sul Mar Rosso unisce cavalcatata, ospitalità beduina, falò in spiaggia e cena sotto le stelle con una guida professionale.",
    ru: "Этот вечер сочетает в себе верховую езду, бедуинское гостеприимство, костер на пляже и ужин под звездами с гидом.",
    pl: "Ten wieczór łączy jazdę konną, beduińską gościnność, ognisko na plaży i kolację pod gwiazdami z przewodnikiem.",
    cz: "Tento pohodový večer kombinuje jízdu na koni, beduínskou pohostinnost, táborák na pláži a večeři pod hvězdami s průvodcem."
  },
  images: {
    featured: "/images/tours/horse-riding-card.webp",
    gallery: [
      "/images/tours/horse-riding-1.webp",
      "/images/tours/horse-riding-2.webp",
      "/images/tours/horse-riding-3.webp"
    ]
  }
}
];