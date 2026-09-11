import { Tour } from '@/types/tour';

export const tours: Tour[] = [
  {
    id: "dolphin-house-samadai",
    slug: "dolphin-house-samadai-reef",
    type: 'snorkeling',
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
  type: 'snorkeling',
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
  type: 'snorkeling',
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
      "/images/tours/dabbab-2.webp",
      "/images/tours/dabbab-1.webp"
    ]
  }
},
{
  id: "marsa-mubarak-dugong-turtle",
  slug: "marsa-mubarak-dugong-turtle-snorkeling",
  type: 'snorkeling',
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
  type: 'snorkeling',
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
  type: 'snorkeling',
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
      "/images/tours/hamata-2.webp",
      "/images/tours/hamata-3.webp",
      "/images/tours/hamata-1.webp",
    ]
  }
},
{
    id: "wadi-el-gemal-islands",
    slug: "wadi-el-gemal-islands",
    type: 'snorkeling',
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
        "/images/tours/wadi-el-gemal-3.webp",
        "/images/tours/wadi-el-gemal-4.webp",
      ]
    }
  },
  {
    id: "qulaan-mangroves-sharm-el-luli",
    slug: "qulaan-mangroves-sharm-el-luli",
    type: 'snorkeling',
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
  type: 'snorkeling',
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
      "/images/tours/safari-3.webp",
      "/images/tours/safari-4.webp",
    ]
  }
},
{
  id: "sunset-horse-riding-bedouin-night",
  slug: "sunset-horse-riding-bedouin-night",
  type: 'snorkeling',
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
},
{
  id: "try-scuba-dive",
  slug: "try-scuba-dive",
  type: "scuba-diving",
  title: {
    en: "TRY SCUBA DIVE",
    de: "TRY SCUBA DIVE",
    it: "TRY SCUBA DIVE",
    ru: "TRY SCUBA DIVE",
    pl: "TRY SCUBA DIVE",
    cz: "TRY SCUBA DIVE"
  },
  subtitle: {
    en: "Your First Dive — No Experience Needed",
    de: "Ihr erster Tauchgang — Keine Erfahrung erforderlich",
    it: "La tua prima immersione — Nessuna esperienza richiesta",
    ru: "Ваше первое погружение — Опыт не требуется",
    pl: "Twój pierwszy nurkowanie — Doświadczenie nie jest wymagane",
    cz: "Váš první ponor — Bez předchozích zkušeností"
  },
  category: {
    en: "Scuba Diving",
    de: "Tauchen",
    it: "Immersioni Subacquee",
    ru: "Дайвинг",
    pl: "Nurkowanie",
    cz: "Potápění"
  },
  price: {
    amount: 0, 
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
    en: "Half Day",
    de: "Halbtags",
    it: "Mezza giornata",
    ru: "Полдня",
    pl: "Pół dnia",
    cz: "Půl dne"
  },
  departure: {
    en: "Marsa Alam Hotels",
    de: "Marsa Alam Hotels",
    it: "Hotel di Marsa Alam",
    ru: "Отели Марса-Алам",
    pl: "Hotele w Marsa Alam",
    cz: "Hotely v Marsa Alam"
  },
  overview: {
    en: "Your First Dive — No Experience Needed. Details coming soon.",
    de: "Ihr erster Tauchgang — Keine Erfahrung erforderlich. Details folgen bald.",
    it: "La tua prima immersione — Nessuna esperienza richiesta. Dettagli in arrivo.",
    ru: "Ваше первое погружение — Опыт не требуется. Подробности скоро.",
    pl: "Twój pierwszy nurkowanie — Doświadczenie nie jest wymagane. Szczegóły wkrótce.",
    cz: "Váš první ponor — Bez předchozích zkušeností. Podrobnosti již brzy."
  },
  highlights: { en: [], de: [], it: [], ru: [], pl: [], cz: [] },
  included: { en: [], de: [], it: [], ru: [], pl: [], cz: [] },
  whatToBring: { en: [], de: [], it: [], ru: [], pl: [], cz: [] },
  childrenPolicy: {
    under5: { en: "", de: "", it: "", ru: "", pl: "", cz: "" },
    from5to10: { en: "", de: "", it: "", ru: "", pl: "", cz: "" },
    over10: { en: "", de: "", it: "", ru: "", pl: "", cz: "" }
  },
  itinerary: [],
  paymentNote: { en: "", de: "", it: "", ru: "", pl: "", cz: "" },
  disclaimer: { en: "", de: "", it: "", ru: "", pl: "", cz: "" },
  images: {
    featured: "/images/tours/special-card-1.webp",
    gallery: []
  }
},
{
  id: "dolphin-house-samadai-scuba",
  slug: "dolphin-house-samadai-reef-scuba-diving",
  type: "scuba-diving",
  title: {
    en: "Dolphin House (Samadai Reef) — Scuba Diving",
    de: "Delfinhaus (Samadai-Riff) — Tauchen",
    it: "Dolphin House (Samadai Reef) — Immersioni",
    ru: "Дом дельфинов (Риф Самадай) — Дайвинг",
    pl: "Dolphin House (Rafa Samadai) — Nurkowanie",
    cz: "Dolphin House (Útes Samadai) — Potápění"
  },
  subtitle: {
    en: "Scuba Diving Experience (Max 4 Divers)",
    de: "Taucherlebnis (Max. 4 Taucher)",
    it: "Esperienza di Immersione (Max 4 Sub)",
    ru: "Погружение с аквалангом (Макс. 4 дайвера)",
    pl: "Przygoda z nurkowaniem (Maks. 4 nurków)",
    cz: "Zážitek z potápění (Max. 4 potápěči)"
  },
  category: {
    en: "Scuba Diving",
    de: "Tauchen",
    it: "Immersioni Subacquee",
    ru: "Дайвинг",
    pl: "Nurkowanie",
    cz: "Potápění"
  },
  price: {
    amount: 110,
    currency: "€",
    unit: {
      en: "per person (Park Fee Included)",
      de: "pro Person (Parkgebühr inklusive)",
      it: "per persona (Tassa Parco Inclusa)",
      ru: "за человека (Сбор парка включен)",
      pl: "za osobę (Opłata za park w cenie)",
      cz: "za osobu (Poplatek za park v ceně)"
    }
  },
  duration: {
    en: "Full Day (8–9 Hours)",
    de: "Ganztägig (8–9 Std.)",
    it: "Intera giornata (8–9 Ore)",
    ru: "Полный день (8–9 часов)",
    pl: "Cały dzień (8–9 godzin)",
    cz: "Celý den (8–9 hodin)"
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
    en: "Discover the underwater world of Dolphin House (Samadai Reef) with 2 scuba dives. Explore beautiful coral formations, swim-throughs, and a long underwater cave. Guided in small groups (maximum 4 divers) by PADI/SSI Instructors.",
    de: "Entdecken Sie die Unterwasserwelt von Dolphin House (Samadai Reef) bei 2 Tauchgängen. Erkunden Sie wunderschöne Korallenformationen, Durchbrüche und eine lange Unterwasserhöhle in kleinen Gruppen (max. 4 Taucher).",
    it: "Scopri il mondo sottomarino di Dolphin House (Samadai Reef) con 2 immersioni. Esplora meravigliose formazioni coralline, passaggi e una lunga grotta sottomarina in piccoli gruppi (massimo 4 sub).",
    ru: "Откройте для себя подводный мир Дома Дельфинов (риф Самадай) во время 2 погружений. Исследуйте коралловые рифы, пещеры и проходы в небольших группах (максимум 4 дайвера).",
    pl: "Odkryj podwodny świat Dolphin House (Rafa Samadai) podczas 2 nurkowań. Odkrywaj piękne formacje koralowe, przesmyki i długą podwodną jaskinię w małych grupach (maks. 4 nurków).",
    cz: "Objevte podvodní svět Dolphin House (útes Samadai) během 2 ponorů. Prozkoumejte krásné koralové útvary, průplavy a dlouhou podvodní jeskyni v malých skupinách (max. 4 potápěči)."
  },
  highlights: {
    en: [
      "2 Scuba Dives around outer reef & cave",
      "Small group (Maximum 4 divers per guide)",
      "PADI or SSI Certified Instructor",
      "Marine Park Fee Included",
      "Full scuba equipment & wetsuit included",
      "Dolphin watching from boat during surface interval",
      "Fresh buffet lunch & drinks onboard"
    ],
    de: [
      "2 Tauchgänge am Außenriff & in Höhlen",
      "Kleine Gruppe (Maximal 4 Taucher pro Guide)",
      "PADI- oder SSI-zertifizierter Tauchlehrer",
      "Nationalparkgebühr inbegriffen",
      "Komplette Tauchausrüstung & Neoprenanzug inklusive",
      "Delfinbeobachtung vom Boot in der Oberflächenpause",
      "Frisches Mittagsbuffet & Getränke an Bord"
    ],
    it: [
      "2 immersioni sulla barriera esterna e grotte",
      "Piccolo gruppo (Massimo 4 sub per guida)",
      "Istruttore certificato PADI o SSI",
      "Tassa del Parco Marino inclusa",
      "Attrezzatura da sub completa e muta incluse",
      "Avvistamento delfini dalla barca nell'intervallo di superficie",
      "Pranzo a buffet e bevande a bordo"
    ],
    ru: [
      "2 погружения на внешнем рифе и пещерах",
      "Маленькая группа (Максимум 4 дайвера на гида)",
      "Инструктор PADI или SSI",
      "Сбор морского заповедника включен",
      "Полное снаряжение для дайвинга и гидрокостюм",
      "Наблюдение за дельфинами с борта во время перерыва",
      "Свежий обед (шведский стол) и напитки"
    ],
    pl: [
      "2 nurkowania przy zewnętrznej rafie i jaskiniach",
      "Mała grupa (Maksymalnie 4 nurków na przewodnika)",
      "Certyfikowany instruktor PADI lub SSI",
      "Opłata za park morski w cenie",
      "Pełny sprzęt do nurkowania i pianka w cenie",
      "Obserwacja delfinów z łodzi podczas przerwy",
      "Świeży obiad w formie bufetu i napoje na pokładzie"
    ],
    cz: [
      "2 ponory na vnějším útesu a v jeskyních",
      "Malá skupina (Maximálně 4 potápěči na průvodce)",
      "Certifikovaný instruktor PADI nebo SSI",
      "Poplatek za mořský park v ceně",
      "Kompletní potápěčské vybavení a neopren v ceně",
      "Pozorování delfínů z lodi během povrchového intervalu",
      "Čerstvý oběd formou bufetu a nápoje na palubě"
    ]
  },
  included: {
    en: [
      "Hotel pickup & drop-off",
      "Boat trip & Marine Park / Protected Area Fee",
      "2 scuba dives with PADI/SSI Instructor",
      "Full scuba diving equipment (Wetsuit, tanks, weights)",
      "Maximum 4 divers per group",
      "Fresh buffet lunch onboard",
      "Hot & cold drinks and mineral water"
    ],
    de: [
      "Hotelabholung & Rückbringung",
      "Bootsfahrt & Nationalparkgebühren",
      "2 Tauchgänge mit PADI/SSI Tauchlehrer",
      "Komplette Tauchausrüstung (Neoprenanzug, Flaschen, Blei)",
      "Maximal 4 Taucher pro Gruppe",
      "Frisches Mittagsbuffet an Bord",
      "Warme & kalte Getränke sowie Mineralwasser"
    ],
    it: [
      "Transfer da e per l'hotel",
      "Gita in barca e Tassa del Parco Marino",
      "2 immersioni con istruttore PADI/SSI",
      "Attrezzatura subacquea completa (Muta, bombole, zavorra)",
      "Massimo 4 subacquei per gruppo",
      "Pranzo a buffet a bordo",
      "Bevande calde, fredde e acqua minerale"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "Морская прогулка и сбор за посещение заповедника",
      "2 погружения с инструктором PADI/SSI",
      "Полное снаряжение (Гидрокостюм, баллоны, грузы)",
      "Максимум 4 дайвера в группе",
      "Свежий обед (шведский стол) на борту",
      "Горячие, холодные напитки и минеральная вода"
    ],
    pl: [
      "Odbiór i powrót do hotelu",
      "Rejs statkiem i opłata za park morski",
      "2 nurkowania z instruktorem PADI/SSI",
      "Pełny sprzęt nurkowy (Pianka, butle, balast)",
      "Maksymalnie 4 nurków w grupie",
      "Świeży obiad w formie bufetu na pokładzie",
      "Zimne i gorące napoje oraz woda mineralna"
    ],
    cz: [
      "Vyzvednutí a návrat do hotelu",
      "Výlet lodí a poplatek za mořský park",
      "2 ponory s instruktorem PADI/SSI",
      "Kompletní potápěčské vybavení (Neopren, lahve, zátěž)",
      "Maximálně 4 potápěči ve skupině",
      "Čerstvý oběd formou bufetu na palubě",
      "Teplé a studené nápoje, minerální voda"
    ]
  },
  whatToBring: {
    en: [
      "Diving certification (digital or physical)",
      "Logbook",
      "Towel",
      "Eco-friendly sunscreen",
      "Hat & Sunglasses"
    ],
    de: [
      "Taucherlebnis-Zertifikat (digital oder physisch)",
      "Logbuch",
      "Handtuch",
      "Umweltfreundliche Sonnencreme",
      "Hut & Sonnenbrille"
    ],
    it: [
      "Brevetto subacqueo (digitale o fisico)",
      "Libretto immersioni (Logbook)",
      "Asciugamano",
      "Crema solare ecologica",
      "Cappello e occhiali da sole"
    ],
    ru: [
      "Сертификат дайвера (цифровой или бумажный)",
      "Логбук (книга погружений)",
      "Полотенце",
      "Экологичный солнцезащитный крем",
      "Головной убор и очки"
    ],
    pl: [
      "Certyfikat nurkowy (cyfrowy lub fizyczny)",
      "Logbook (książka nurkowa)",
      "Ręcznik",
      "Ekologiczny krem z filtrem",
      "Czapka i okulary przeciwsłoneczne"
    ],
    cz: [
      "Potápěčská certifikace (digitální nebo fyzická)",
      "Lógbook (potápěčský deník)",
      "Ručník",
      "Ekologický opalovací krém",
      "Klobouk a sluneční brýle"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Not recommended for children under 10 years without certification",
      de: "Nicht empfohlen für Kinder unter 10 Jahren ohne Zertifikat",
      it: "Non consigliato ai bambini sotto i 10 anni senza brevetto",
      ru: "Не рекомендуется детям до 10 лет без сертификата",
      pl: "Nie zalecane dla dzieci poniżej 10 lat bez certyfikatu",
      cz: "Nedoporučuje se pro děti do 10 let bez certifikace"
    },
    from5to10: {
      en: "Certified Junior Divers: Full dive rate applies",
      de: "Zertifizierte Junior-Taucher: Voller Tauchtarif gilt",
      it: "Junior Diver Certificati: Si applica la tariffa sub completa",
      ru: "Сертифицированные Junior дайверы: Полный тариф",
      pl: "Certyfikowani Junior Nurkowie: Pełna stawka za nurkowanie",
      cz: "Certifikovaní Junior potápěči: Plná cena ponoru"
    },
    over10: {
      en: "Full adult rate applies",
      de: "Voller Erwachsenentarif gilt",
      it: "Si applica la tariffa intera",
      ru: "Полный взрослый тариф",
      pl: "Obowiązuje pełna stawka",
      cz: "Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Pickup — 07:30 AM",
        de: "Hotelabholung — 07:30 Uhr",
        it: "Transfer dall'Hotel — 07:30",
        ru: "Трансфер из отеля — 07:30",
        pl: "Odbiór z hotelu — 07:30",
        cz: "Vyzvednutí v hotelu — 07:30"
      },
      description: {
        en: "Pickup from your hotel and transfer to Marsa Alam Marina.",
        de: "Abholung vom Hotel und Transfer zur Marina Marsa Alam.",
        it: "Pick-up dall'hotel e trasferimento alla Marina di Marsa Alam.",
        ru: "Трансфер из отеля в Марину Марса-Алам.",
        pl: "Odbiór z hotelu i transfer do Mariny Marsa Alam.",
        cz: "Vyzvednutí v hotelu a transfer do Mariny Marsa Alam."
      }
    },
    {
      step: "02",
      title: {
        en: "Preparation at Marina",
        de: "Vorbereitung in der Marina",
        it: "Preparazione alla Marina",
        ru: "Подготовка в марине",
        pl: "Przygotowanie w Marinie",
        cz: "Příprava v marině"
      },
      description: {
        en: "Prepare equipment and get ready for departure.",
        de: "Ausrüstung vorbereiten und auf die Abfahrt vorbereiten.",
        it: "Preparazione dell'attrezzatura e imbarco.",
        ru: "Подготовка снаряжения и посадка на судно.",
        pl: "Przygotowanie sprzętu i gotowość do wypłynięcia.",
        cz: "Příprava оборудования а příprava k odjezdu."
      }
    },
    {
      step: "03",
      title: {
        en: "Boat Cruise & Briefing",
        de: "Bootsfahrt & Einweisung",
        it: "Navigazione e Briefing",
        ru: "Круиз и брифинг",
        pl: "Rejs i odprawa",
        cz: "Plavba lodí a briefing"
      },
      description: {
        en: "Cruise toward Samadai Reef with dive safety briefing.",
        de: "Fahrt zum Samadai-Riff mit Sicherheitsunterweisung.",
        it: "Navigazione verso il Samadai Reef con briefing di sicurezza.",
        ru: "Круиз к рифу Самадай и инструктаж по безопасности.",
        pl: "Rejs w stronę Rafy Samadai z odprawą bezpieczeństwa.",
        cz: "Plavba k útesu Samadai s bezpečnostním briefingem."
      }
    },
    {
      step: "04",
      title: {
        en: "Dive 1 — Samadai Reef Outer Wall",
        de: "Tauching 1 — Samadai Außenriff",
        it: "Immersione 1 — Parete Esterna Samadai",
        ru: "Погружение 1 — Внешняя стена Самадай",
        pl: "Nurkowanie 1 — Zewnętrzna ściana Samadai",
        cz: "Ponor 1 — Vnější stěna Samadai"
      },
      description: {
        en: "Explore outer reef wall, coral pinnacles and rich marine life.",
        de: "Erkunden Sie die Außenriffwand, Korallentürme und Meeresleben.",
        it: "Esplora la parete esterna, i pinnacoli e la vita marina.",
        ru: "Исследование внешней стены рифа и коралловых башен.",
        pl: "Odkrywanie zewnętrznej ściany rafy i iglic koralowych.",
        cz: "Prozkoumejte vnější stěnu útesu a koralové věže."
      }
    },
    {
      step: "05",
      title: {
        en: "Surface Interval & Dolphin Watching",
        de: "Oberflächenpause & Delfinbeobachtung",
        it: "Intervallo di Superficie & Delfini",
        ru: "Интервал на поверхности и дельфины",
        pl: "Przerwa powierzchniowa i delfiny",
        cz: "Povrchový interval a pozorování delfínů"
      },
      description: {
        en: "Relax onboard. Observe wild dolphins from boat if present.",
        de: "Entspannen an Bord. Delfinbeobachtung vom Boot aus.",
        it: "Relax a bordo e avvistamento delfini dalla barca.",
        ru: "Отдых на борту. Наблюдение за дельфинами с катера.",
        pl: "Relaks na pokładzie i obserwacja delfinów z łodzi.",
        cz: "Odpočinek na palubě. Pozorování delfínów z lodi."
      }
    },
    {
      step: "06",
      title: {
        en: "Dive 2 — Cave & Swim-Throughs",
        de: "Tauchgang 2 — Höhle & Durchbrüche",
        it: "Immersione 2 — Grotta e Passaggi",
        ru: "Погружение 2 — Пещера и каньоны",
        pl: "Nurkowanie 2 — Jaskinia i przesmyki",
        cz: "Ponor 2 — Jeskyně a průplavy"
      },
      description: {
        en: "Discover Samadai's iconic underwater cave and reef formations.",
        de: "Entdecken Sie die berühmte Unterwasserhöhle von Samadai.",
        it: "Esplora la famosa grotta sottomarina di Samadai.",
        ru: "Погружение в знаменитую подводную пещеру Самадай.",
        pl: "Odkryj słynną podwodną jaskinię Samadai.",
        cz: "Objevení slavné podvodní jeskyně Samadai."
      }
    },
    {
      step: "07",
      title: {
        en: "Lunch Onboard",
        de: "Mittagessen an Bord",
        it: "Pranzo a Bordo",
        ru: "Обед на борту",
        pl: "Obiad na pokładzie",
        cz: "Oběd na palubě"
      },
      description: {
        en: "Enjoy freshly prepared buffet lunch onboard.",
        de: "Genießen Sie das frisch zubereitete Buffet an Bord.",
        it: "Goditi il pranzo a buffet appena preparato.",
        ru: "Свежий обед (шведский стол) на борту.",
        pl: "Obiad w formie bufetu na pokładzie.",
        cz: "Oběd formou bufetu na palubě."
      }
    },
    {
      step: "08",
      title: {
        en: "Return & Hotel Drop-off — 03:30 PM",
        de: "Rückkehr & Hotelabgabe — 15:30 Uhr",
        it: "Ritorno e Transfer Hotel — 15:30",
        ru: "Возвращение в отель — 15:30",
        pl: "Powrót do hotelu — 15:30",
        cz: "Návrat do hotelu — 15:30"
      },
      description: {
        en: "Return to marina and transfer back to your hotel.",
        de: "Rückfahrt zur Marina und Transfer zurück zum Hotel.",
        it: "Rientro alla marina e trasferimento in hotel.",
        ru: "Возвращение в марину и трансфер в отель.",
        pl: "Powrót do mariny i transfer do hotelu.",
        cz: "Návrat do mariny a transfer do hotelu."
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
    en: "Diving inside designated dolphin resting area is strictly prohibited. Dives occur in outer reef zones. Dolphin sightings are wild & not guaranteed.",
    de: "Das Tauchen in der Delfin-Ruhezone ist gesetzlich verboten. Tauchgänge finden am Außenriff statt. Delfinsichtungen sind nicht garantiert.",
    it: "L'immersione nella zona di riposo dei delfini è proibita. Le immersioni avvengono all'esterno. L'avvistamento non è garantito.",
    ru: "Дайвинг в заповедной зоне отдыха дельфинов запрещен законом. Погружения проходят на внешнем рифе.",
    pl: "Nurkowanie w strefie odpoczynku delfinów jest zabronione. Nurkowania odbywają się na zewnętrznej rafie.",
    cz: "Potápění v zóně odpočinku delfínů je přísně zakázáno. Ponory probíhají na vnějším útesu."
  },
  images: {
    featured: "/images/tours/samadai-scuba-card.webp",
    gallery: [
      "/images/tours/samadai-scuba-1.webp",
      "/images/tours/samadai-scuba-2.webp",
      "/images/tours/samadai-scuba-3.webp"
    ]
  }
},
{
  id: "elphinstone-reef-scuba",
  slug: "elphinstone-reef-advanced-scuba-diving",
  type: "scuba-diving",
  title: {
    en: "Elphinstone Reef — Advanced Scuba Diving",
    de: "Elphinstone-Riff — Fortgeschrittenes Tauchen",
    it: "Elphinstone Reef — Immersioni per Avanzati",
    ru: "Риф Эльфинстоун — Дайвинг для продвинутых",
    pl: "Rafa Elphinstone — Zaawansowane Nurkowanie",
    cz: "Útes Elphinstone — Pokročilé Potápění"
  },
  subtitle: {
    en: "Fast Speedboat Transit (Max 4 Divers)",
    de: "Schnellboot-Transfer (Max. 4 Taucher)",
    it: "Trasferimento in gommone veloce (Max 4 Sub)",
    ru: "Скоростной катер (Макс. 4 дайвера)",
    pl: "Szybki pontoon/motorówka (Maks. 4 nurków)",
    cz: "Rychlý člun (Max. 4 potápěči)"
  },
  category: {
    en: "Scuba Diving",
    de: "Tauchen",
    it: "Immersioni Subacquee",
    ru: "Дайвинг",
    pl: "Nurkowanie",
    cz: "Potápění"
  },
  price: {
    amount: 120,
    currency: "€",
    unit: {
      en: "per person (Park & Env. Fees Included)",
      de: "pro Person (Park- & Umweltgebühren inklusive)",
      it: "per persona (Tasse Parco e Ambientali Incluse)",
      ru: "за человека (Сборы парка включены)",
      pl: "za osobę (Opłaty parkowe i środowiskowe w cenie)",
      cz: "za osobu (Poplatky v ceně)"
    }
  },
  duration: {
    en: "Half Day (~5–6 Hours)",
    de: "Halbtags (~5–6 Std.)",
    it: "Mezza giornata (~5–6 Ore)",
    ru: "Полдня (~5–6 часов)",
    pl: "Pół dnia (~5–6 godzin)",
    cz: "Půl dne (~5–6 hodin)"
  },
  departure: {
    en: "Marsa Alam / Abu Dabbab Bay",
    de: "Marsa Alam / Abu Dabbab Bucht",
    it: "Marsa Alam / Baia di Abu Dabbab",
    ru: "Марса-Алам / Бухта Абу-Даббаб",
    pl: "Marsa Alam / Zatoka Abu Dabbab",
    cz: "Marsa Alam / Záliv Abu Dabbab"
  },
  overview: {
    en: "Experience high-voltage offshore diving at the world-famous Elphinstone Reef via fast speedboat. Known for its sheer vertical walls, deep drop-offs, vibrant soft corals, and regular encounters with Oceanic Whitetip sharks and hammerheads. Strictly for Advanced Open Water certified divers.",
    de: "Erleben Sie spektakuläres Tauchen am weltberühmten Elphinstone-Riff mit dem Schnellboot. Bekannt für steile Wände, tief abfallende Riffe und Begegnungen mit Weißspitzen-Hochseehaien und Hammerhaien. Nur für zertifizierte Fortgeschrittene (Advanced Open Water).",
    it: "Vivi l'adrenalina delle immersioni al famoso Elphinstone Reef in gommone veloce. Famoso per le sue pareti verticali, coralli morbidi e incontri con squali al largo (Longimano e Martello). Esclusivamente per sub con brevetto Advanced Open Water.",
    ru: "Испытайте драйв погружений на всемирно известном рифе Эльфинстоун на скоростном катере. Отвесные стены, глубокие обрывы и встречи с океаническими длиннокрылыми и молотоголовыми акулами. Только для сертификата Advanced Open Water.",
    pl: "Doświadcz ekscytujących nurkowań na słynnej rafie Elphinstone z pokładu szybkiej motorówki. Słynie z pionowych ścian, miękkich koralowców i spotkań z rekinami oceanicznych i młotami. Wyłącznie dla nurków Advanced Open Water.",
    cz: "Zažijte akční potápění na světoznámém útesu Elphinstone s rychlým člunem. Známý pro kolmé stěny, nádherné měkké korály a setkání s oceánskými žraloky. Pouze pro držitele certifikace Advanced Open Water."
  },
  highlights: {
    en: [
      "2 Guided Advanced scuba dives over deep drop-offs",
      "Fast Speedboat transit — direct & minimal sea travel time",
      "Small group setting (Maximum 4 divers per guide)",
      "PADI or SSI Certified Dive Instructor",
      "High probability of pelagic & shark sightings",
      "Marine Park & Environmental Fees included",
      "Full rental diving equipment included (Discount available for own gear)",
      "Cold drinks & light snacks included"
    ],
    de: [
      "2 Geführte Tauchgänge für Fortgeschrittene an Steilwänden",
      "Schneller Transfer mit dem Schnellboot — kurze Fahrtzeit",
      "Kleine Gruppe (Maximal 4 Taucher pro Guide)",
      "PADI- oder SSI-zertifizierter Tauchlehrer",
      "Hohe Chance auf Großfisch- & Hai-Sichtungen",
      "Park- & Umweltgebühren komplett inklusive",
      "Volle Mietausrüstung inklusive (Rabatt bei eigener Ausrüstung)",
      "Kalte Getränke & leichte Snacks an Bord"
    ],
    it: [
      "2 immersioni guidate per avanzati su pareti profonde",
      "Trasferimento veloce in gommone — tempo di navigazione ridotto",
      "Piccolo gruppo (Massimo 4 sub per guida)",
      "Istruttore certificato PADI o SSI",
      "Alta probabilità di avvistamento di squali e pelagici",
      "Tasse del Parco e Ambientali incluse",
      "Attrezzatura completa inclusa (Sconto per chi ha la propria)",
      "Bevande fresche e snack leggeri inclusi"
    ],
    ru: [
      "2 погружения для продвинутых вдоль глубоких стен",
      "Скоростной катер — быстрый трансфер к рифу",
      "Маленькая группа (Максимум 4 дайвера на гида)",
      "Инструктор PADI или SSI",
      "Высокий шанс увидеть океанических акул",
      "Сборы заповедника и экологический сбор включены",
      "Полная аренда снаряжения (Скидка при наличии своего)",
      "Напитки и легкие закуски"
    ],
    pl: [
      "2 nurkowania z przewodnikiem dla zaawansowanych na głębokich ścianach",
      "Szybki pontoon/motorówka — krótki czas płynięcia",
      "Mała grupa (Maksymalnie 4 nurków na przewodnika)",
      "Certyfikowany instruktor PADI lub SSI",
      "Duża szansa na spotkanie rekinów i ryb oceanicznych",
      "Opłaty parkowe i środowiskowe w cenie",
      "Pełny sprzęt w cenie (Zniżka przy własnym sprzęcie)",
      "Zimne napoje i lekkie przekąski"
    ],
    cz: [
      "2 ponory s průvodcem pro pokročilé na hlubokých stěnách",
      "Rychlý člun — přímá a rychlá cesta na útes",
      "Malá skupina (Maximálně 4 potápěči na průvodce)",
      "Certifikovaný instruktor PADI nebo SSI",
      "Vysoká šance na pozorování žraloků",
      "Poplatky parkové a environmentální v cenie",
      "Kompletní zapůjčení vybavení (Sleva při vlastním vybavení)",
      "Chlazené nápoje a lehké občerstvení v cení"
    ]
  },
  included: {
    en: [
      "Hotel pickup & drop-off",
      "Speedboat transit to Elphinstone Reef",
      "2 Guided scuba dives",
      "Marine Park & Environmental Fees",
      "Full rental diving equipment (wetsuit, BCD, regulator, tanks, weights)",
      "PADI or SSI Dive Instructor (Max 4 divers)",
      "Fresh mineral water, cold drinks & light snacks",
      "Safety stop support"
    ],
    de: [
      "Hotelabholung & Rückbringung",
      "Schnellboot-Fahrt zum Elphinstone-Riff",
      "2 Geführte Tauchgänge",
      "Park- & Umweltgebühren",
      "Komplette Mietausrüstung (Neopren, BCD, Atemregler, Flaschen, Blei)",
      "PADI/SSI Tauchlehrer (Max. 4 Taucher)",
      "Mineralwasser, kalte Getränke & leichte Snacks",
      "Sicherheitsstopp-Unterstützung"
    ],
    it: [
      "Transfer da e per l'hotel",
      "Gommone veloce per Elphinstone Reef",
      "2 Immersioni guidate",
      "Tasse del Parco Marino e Ambientali",
      "Attrezzatura completa a noleggio (Muta, GAV, erogatore, bombole, zavorra)",
      "Istruttore PADI/SSI (Max 4 sub)",
      "Acqua minerale, bevande fresche e snack leggeri",
      "Supporto durante la sosta di sicurezza"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "Трансфер на скоростном катере к Эльфинстоуну",
      "2 погружения с гидом",
      "Сборы заповедника и экологический сбор",
      "Полный комплект снаряжения (Гидрокостюм, BCD, регулятор, баллоны, грузы)",
      "Инструктор PADI или SSI (Макс. 4 человека)",
      "Минеральная вода, напитки и легкие закуски",
      "Остановки безопасности"
    ],
    pl: [
      "Odbiór i powrót do hotelu",
      "Rejs szybką motorówką na Elphinstone Reef",
      "2 Nurkowania z przewodnikiem",
      "Opłaty parkowe i środowiskowe",
      "Pełny sprzęt do wypożyczenia (Pianka, BCD, automat, akumulatory, balast)",
      "Instruktor PADI/SSI (Maks. 4 nurków)",
      "Woda mineralna, zimne napoje i lekkie przekąski",
      "Wsparcie podczas przystanku bezpieczeństwa"
    ],
    cz: [
      "Vyzvednutí a návrat do hotelu",
      "Přeprava rychlým člunem na útes Elphinstone",
      "2 Ponory s průvodcem",
      "Parkové a environmentální poplatky",
      "Kompletní zapůjčení výstroje (Neopren, žaket, automatika, lahve, zátěž)",
      "Instruktor PADI/SSI (Max. 4 potápěči)",
      "Minerální voda, studené nápoje a občerstvení",
      "Podpora při bezpečnostní zastávce"
    ]
  },
  whatToBring: {
    en: [
      "Advanced Open Water certification (Digital or Physical)",
      "Logbook verifying recent deep/drift dive experience",
      "Towel",
      "Reef-safe sunscreen",
      "Hat & Sunglasses",
      "Personal medication if needed"
    ],
    de: [
      "Advanced Open Water Zertifikat (Digital oder Papier)",
      "Logbuch mit Nachweis aktueller Tief-/Strömungstauchgänge",
      "Handtuch",
      "Riff-freundliche Sonnencreme",
      "Hut & Sonnenbrille",
      "Persönliche Medikamente bei Bedarf"
    ],
    it: [
      "Brevetto Advanced Open Water (Digitale o Fisico)",
      "Logbook con registrazione di immersioni profonde/in corrente recenti",
      "Asciugamano",
      "Crema solare ecologica per barriera corallina",
      "Cappello e occhiali da sole",
      "Farmaci personali se necessari"
    ],
    ru: [
      "Сертификат Advanced Open Water (Цифровой или бумажный)",
      "Логбук с записью недавних глубоких/дрифтовых погружений",
      "Полотенце",
      "Безопасный для рифов солнцезащитный крем",
      "Головной убор и очки",
      "Личные медикаменты"
    ],
    pl: [
      "Certyfikat Advanced Open Water (Cyfrowy lub fizyczny)",
      "Logbook potwierdzający niedawne nurkowania głębokie/w prądzie",
      "Ręcznik",
      "Krem z filtrem bezpieczny dla rafy",
      "Czapka i okulary przeciwsłoneczne",
      "Leki osobiste w razie potrzeby"
    ],
    cz: [
      "Certifikace Advanced Open Water (Digitální nebo fyzická)",
      "Logbook s potvrzením nedávných hlubokých/proudových ponorů",
      "Ručník",
      "Opalovací krém šetrný k útesům",
      "Klobouk a sluneční brýle"
    ]
  },
  childrenPolicy: undefined,
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Pickup & Transfer",
        de: "Hotelabholung & Transfer",
        it: "Transfer dall'Hotel",
        ru: "Трансфер из отеля",
        pl: "Odbiór z hotelu i transfer",
        cz: "Vyzvednutí v hotelu a transfer"
      },
      description: {
        en: "Morning pickup from your hotel to the departure launch site.",
        de: "Morgenabholung vom Hotel zum Schnellboot-Ableger.",
        it: "Pick-up mattutino dall'hotel verso il punto di imbarco.",
        ru: "Утренний трансфер из отеля к месту отправления катера.",
        pl: "Poranny odbiór z hotelu do punktu startowego.",
        cz: "Ranní vyzvednutí v hotelu a přesun na místo odjezdu."
      }
    },
    {
      step: "02",
      title: {
        en: "Gear Check & Briefing",
        de: "Ausrüstungs-Check & Briefing",
        it: "Controllo Attrezzatura e Briefing",
        ru: "Проверка снаряжения и брифинг",
        pl: "Sprawdzenie sprzętu i odprawa",
        cz: "Kontrola výstroje a briefing"
      },
      description: {
        en: "Briefing on currents, dive profiles, emergency procedures, and gear check.",
        de: "Einweisung zu Strömungen, Tauchprofil, Sicherheit und Ausrüstungs-Check.",
        it: "Briefing su correnti, profilo d'immersione, sicurezza e controllo attrezzatura.",
        ru: "Инструктаж по течениям, профилю погружения и проверка оборудования.",
        pl: "Odprawa na temat prądów, profilu nurkowania i sprawdzanie sprzętu.",
        cz: "Briefing o proudech, profilu ponoru a kontrola výstroje."
      }
    },
    {
      step: "03",
      title: {
        en: "Fast Speedboat Transit",
        de: "Schnellboot-Überfahrt",
        it: "Navigazione in Gommone",
        ru: "Переход на скоростном катере",
        pl: "Rejs szybką motorówką",
        cz: "Rychlá plavba člunem"
      },
      description: {
        en: "High-speed ride directly to Elphinstone Reef.",
        de: "Schnelle Fahrt direkt zum Elphinstone-Riff.",
        it: "Navigazione ad alta velocità verso Elphinstone Reef.",
        ru: "Быстрый переход непосредственно к рифу Эльфинстоун.",
        pl: "Szybki rejs bezpośrednio do rafy Elphinstone.",
        cz: "Rychlá jízda přímo k útesu Elphinstone."
      }
    },
    {
      step: "04",
      title: {
        en: "Dive 1 — North Plateau / Steep Wall",
        de: "Tauchgang 1 — Nordplateau / Steilwand",
        it: "Immersione 1 — Plateau Nord / Parete",
        ru: "Погружение 1 — Северное плато / Стена",
        pl: "Nurkowanie 1 — Północny płaskowyż / Ściana",
        cz: "Ponor 1 — Severní plato / Stěna"
      },
      description: {
        en: "Deep drift dive along the sheer vertical drop-offs looking for pelagics.",
        de: "Tiefes Strömungstauchen entlang der Steilwand auf der Suche nach Großfischen.",
        it: "Immersione profonda in corrente lungo le pareti verticali alla ricerca di pelagici.",
        ru: "Глубокое дрифтовое погружение вдоль отвесных стен в поисках крупных обитателей.",
        pl: "Głębokie nurkowanie w prądzie wzdłuż pionowych ścian w poszukiwaniu ryb pelagicznych.",
        cz: "Hluboký proudový ponor podél kolmých stěn s možností pozorování pelagických ryb."
      }
    },
    {
      step: "05",
      title: {
        en: "Surface Interval & Refreshments",
        de: "Oberflächenpause & Snacks",
        it: "Intervallo di Superficie e Snack",
        ru: "Перерыв и напитки",
        pl: "Przerwa powierzchniowa i przekąski",
        cz: "Povrchový interval a občerstvení"
      },
      description: {
        en: "Rest on board, enjoy cold drinks and light snacks while tracking shark activity.",
        de: "Pause an Bord bei kalten Getränken und leichten Snacks.",
        it: "Riposo a bordo con bevande fresche e snack leggeri.",
        ru: "Отдых на борту, напитки и легкие закуски.",
        pl: "Odpoczynek na pokładzie, zimne napoje i lekkie przekąski.",
        cz: "Odpočinek na palubě, studené nápoje a občerstvení."
      }
    },
    {
      step: "06",
      title: {
        en: "Dive 2 — South Plateau & Wall",
        de: "Tauchgang 2 — Südplateau & Steilwand",
        it: "Immersione 2 — Plateau Sud e Parete",
        ru: "Погружение 2 — Южное плато и стена",
        pl: "Nurkowanie 2 — Południowy płaskowyż i ściana",
        cz: "Ponor 2 — Jižní plato a stěna"
      },
      description: {
        en: "Second dive along the rich southern formations and gorgonian fan corals.",
        de: "Zweiter Tauchgang an den südlichen Formationen und Fächerkorallen.",
        it: "Seconda immersione tra le formazioni meridionali e i coralli a ventaglio.",
        ru: "Второе погружение у южного плато с гигантскими веерными кораллами.",
        pl: "Drugie nurkowanie wśród południowych formacji i wielkich gorgonii.",
        cz: "Druhý ponor podél jižních koralových útvarů a gorgonií."
      }
    },
    {
      step: "07",
      title: {
        en: "Speedboat Return & Hotel Drop-off",
        de: "Rückfahrt & Hotelabgabe",
        it: "Rientro in Gommone e Transfer Hotel",
        ru: "Возвращение и трансфер в отель",
        pl: "Powrót motorówką i transfer do hotelu",
        cz: "Návrat člunem a transfer do hotelu"
      },
      description: {
        en: "Express ride back to shore and comfortable transfer to your hotel.",
        de: "Schnelle Rückfahrt an Land und bequemer Transfer zurück zum Hotel.",
        it: "Rientro rapido a terra e comodo trasferimento al tuo hotel.",
        ru: "Быстрый переход к берегу и комфортный трансфер в отель.",
        pl: "Szybki powrót na brzeg i wygodny transfer do hotelu.",
        cz: "Rychlý návrat na břeh a pohodlný transfer do hotelu."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment required. Custom discount applied if you bring your own diving equipment.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich. Rabatt bei eigener Ausrüstung.",
    it: "Paga dopo il tour — nessun pagamento online. Sconto applicato se porti la tua attrezzatura.",
    ru: "Оплата после поездки — без предоплаты. Скидка при наличии собственного снаряжения.",
    pl: "Płatność po wycieczce — bez opłat online. Zniżka w przypadku posiadania własnego sprzętu.",
    cz: "Platba až po výletu. Při použití vlastního vybavení bude uplatněna sleva."
  },
  disclaimer: {
    en: "Strictly Advanced Open Water certified divers only. Deep drop-offs and moderate to strong currents. The famous Elphinstone Arch lies at technical depths beyond recreational limits and is NOT included. Do not chase or touch sharks or marine life.",
    de: "Nur für zertifizierte Advanced Open Water Taucher. Starke Strömungen möglich. Der Elphinstone-Bogen liegt in technischer Tiefe außerhalb des Sporttauchens und wird NICHT angetaucht. Marine Tiere nicht berühren oder belästigen.",
    it: "Esclusivamente per sub Advanced Open Water. Pareti profonde e correnti forti. L'Arco di Elphinstone si trova a profondità tecniche ed è ESCLUSO. Non toccare né inseguire la fauna marina.",
    ru: "Только для сертификата Advanced Open Water. Сильные течения. Знаменитая арка Эльфинстоун находится на технической глубине и НЕ входит в программу. Запрещено трогать и преследовать морских обитателей.",
    pl: "Wyłącznie dla nurków Advanced Open Water. Głębokie ściany i silne prądy. Słynny Łuk Elphinstone znajduje się na głębokościach technicznych i NIE JEST częścią nurkowania. Nie wolno dotykać ani gonić zwierząt.",
    cz: "Určeno výhradně pro pokročilé potápěče (Advanced Open Water). Hluboké stěny a silné proudy. Slavný Elphinstone Arch leží v technických hloubkách a NEJEDNÁ SE o součást ponoru. Zákaz dotýkání se mořských živočichů."
  },
  images: {
    featured: "/images/tours/elphinstone-card.webp",
    gallery: [
      "/images/tours/elphinstone-1.webp",
      "/images/tours/elphinstone-2.webp",
      "/images/tours/elphinstone-3.webp"
    ]
  }
},
{
  id: "abu-dabbab-bay-scuba",
  slug: "abu-dabbab-bay-scuba-diving",
  type: "scuba-diving",
  title: {
    en: "Abu Dabbab Bay — Scuba Diving",
    de: "Abu Dabbab Bucht — Tauchen",
    it: "Baia di Abu Dabbab — Immersioni",
    ru: "Бухта Абу-Даббаб — Дайвинг",
    pl: "Zatoka Abu Dabbab — Nurkowanie",
    cz: "Záliv Abu Dabbab — Potápění"
  },
  subtitle: {
    en: "Shore Dives with Turtles & Sea Cows (Max 4 Divers)",
    de: "Ufertauchgänge mit Schildkröten & Seekühen (Max. 4 Taucher)",
    it: "Immersioni da Riva con Tartarughe e Dugonghi (Max 4 Sub)",
    ru: "Погружения с берега с черепахами и дюгонями (Макс. 4 дайвера)",
    pl: "Nurkowanie z brzegu z żółwiami i diugoniami (Maks. 4 nurków)",
    cz: "Ponory z pobřeží s želvami a dugongy (Max. 4 potápěči)"
  },
  category: {
    en: "Scuba Diving",
    de: "Tauchen",
    it: "Immersioni Subacquee",
    ru: "Дайвинг",
    pl: "Nurkowanie",
    cz: "Potápění"
  },
  price: {
    amount: 95,
    currency: "€",
    unit: {
      en: "per person (Bay Entrance Included)",
      de: "pro Person (Bucht-Eintritt inklusive)",
      it: "per persona (Ingresso Baia Incluso)",
      ru: "за человека (Вход в бухту включен)",
      pl: "za osobę (Wstęp do zatoki w cenie)",
      cz: "za osobu (Vstup do zálivu v ceně)"
    }
  },
  duration: {
    en: "Full Day (Flexible Shore Dives)",
    de: "Ganztägig (Flexible Ufertauchgänge)",
    it: "Intera giornata (Immersioni da riva flessibili)",
    ru: "Полный день (Гибкие погружения с берега)",
    pl: "Cały dzień (Elastyczne nurkowania z brzegu)",
    cz: "Celý den (Flexibilní ponory z pobřeží)"
  },
  departure: {
    en: "Marsa Alam Hotels / Abu Dabbab Beach",
    de: "Marsa Alam Hotels / Abu Dabbab Strand",
    it: "Hotel di Marsa Alam / Spiaggia di Abu Dabbab",
    ru: "Отели Марса-Алам / Пляж Абу-Даббаб",
    pl: "Hotele w Marsa Alam / Plaża Abu Dabbab",
    cz: "Hotely v Marsa Alam / Pláž Abu Dabbab"
  },
  overview: {
    en: "Dive into the famed sandy slopes and seagrass meadows of Abu Dabbab Bay. Renowned for resident giant green sea turtles, guitar sharks, and the rare dugong (sea cow). Easy shore entries make this an exceptional dive spot for all certified divers.",
    de: "Tauchen Sie ein in die berühmten Seegraswiesen der Bucht von Abu Dabbab. Bekannt für riesige Grüne Meeresschildkröten, Geigenrochen und die seltene Seekuh (Dugong). Einfacher Einstieg vom Strand.",
    it: "Immergiti nei famosi prati di posidonia della Baia di Abu Dabbab. Famosa per le gigantesche tartarughe verdi, gli squali chitarra e il raro dugongo. Facile ingresso da spiaggia ideale per tutti i sub brevettati.",
    ru: "Погрузитесь в знаменитые морские луга бухты Абу-Даббаб. Место славится гигантскими зелеными черепахами, акулами-гитарами и редким дюгонем. Удобный заход с берега.",
    pl: "Nurkuj na słynnych łąkach trawy morskiej w Zatoce Abu Dabbab. Słynie z gigantycznych żółwi zielonych, rekinów gitarowych i rzadkiego diugonia. Łatwe wejście z brzegu dla wszystkich certyfikowanych nurków.",
    cz: "Ponořte se do slavných mořských luk v zálivu Abu Dabbab. Proslulé obřími zelenými želvami, kytarovci a vzácným dugongem (mořskou krávou). Snadný vstup z pláže."
  },
  highlights: {
    en: [
      "2 Shore Guided Scuba Dives over seagrass meadows & house reef",
      "High chances to spot giant Green Sea Turtles & Dugongs",
      "Easy, calm shore entry — perfect for relaxed diving",
      "Small groups (Maximum 4 divers per instructor)",
      "PADI or SSI Certified Instructor",
      "Full scuba equipment & high-quality wetsuit included",
      "Abu Dabbab Protected Marine Park Entrance Fee included"
    ],
    de: [
      "2 Geführte Ufertauchgänge an den Seegraswiesen & Hausriff",
      "Hohe Chance auf riesige Grüne Meeresschildkröten & Seekühe",
      "Ruhiger und einfacher Einstieg vom Strand",
      "Kleine Gruppe (Maximal 4 Taucher pro Guide)",
      "PADI- oder SSI-zertifizierter Tauchlehrer",
      "Komplette Tauchausrüstung & Neoprenanzug inklusive",
      "Eintrittsgebühr für das Abu Dabbab Schutzgebiet inklusive"
    ],
    it: [
      "2 immersioni guidate da riva tra praterie di posidonia e house reef",
      "Alta possibilità di avvistare tartarughe verdi giganti e dugonghi",
      "Ingresso da spiaggia comodo e calmo",
      "Piccolo gruppo (Massimo 4 sub per guida)",
      "Istruttore certificato PADI o SSI",
      "Attrezzatura completa da sub e muta incluse",
      "Ingresso all'area protetta di Abu Dabbab incluso"
    ],
    ru: [
      "2 погружения с берега вдоль морской травы и домашнего рифа",
      "Высокие шансы встретить гигантских зеленых черепах и дюгоня",
      "Легкий и спокойный заход с пляжа",
      "Маленькая группа (Максимум 4 дайвера на гида)",
      "Инструктор PADI или SSI",
      "Полное снаряжение для дайвинга и гидрокостюм",
      "Входной билет в заповедную зону Абу-Даббаб включен"
    ],
    pl: [
      "2 nurkowania z przewodnikiem z brzegu na łąkach trawy morskiej i rafie domowej",
      "Duża szansa na spotkanie gigantycznych żółwi i diugoni",
      "Łatwe, spokojne wejście z brzegu",
      "Mała grupa (Maksymalnie 4 nurków na przewodnika)",
      "Certyfikowany instruktor PADI lub SSI",
      "Pełny sprzęt do nurkowania i pianka w cenie",
      "Opłata za wstęp do rezerwatu Abu Dabbab w cenie"
    ],
    cz: [
      "2 ponory s průvodcem z bờehu na mořských lukách a domovském útesu",
      "Vysoká šance na pozorování obřích zelených želv a dugongů",
      "Snadný a klidný vstup z pláže",
      "Malá skupina (Maximálně 4 potápěči na průvodce)",
      "Certifikovaný instruktor PADI nebo SSI",
      "Kompletní potápěčské vybavení a neopren v ceně",
      "Vstupní poplatek do chráněné oblasti Abu Dabbab v ceně"
    ]
  },
  included: {
    en: [
      "Hotel pickup & drop-off",
      "Abu Dabbab Natural Reserve Beach Entrance Fee",
      "2 Guided shore dives with PADI/SSI Instructor",
      "Full scuba diving equipment (wetsuit, tanks, weights)",
      "Maximum 4 divers per group",
      "Beach umbrella and sunbed access",
      "Fresh mineral water and soft drinks"
    ],
    de: [
      "Hotelabholung & Rückbringung",
      "Strandeintrittsgebühr für das Naturschutzgebiet Abu Dabbab",
      "2 Geführte Ufertauchgänge mit PADI/SSI Tauchlehrer",
      "Komplette Tauchausrüstung (Neoprenanzug, Flaschen, Blei)",
      "Maximal 4 Taucher pro Gruppe",
      "Zugang zu Sonnenschirmen und Liegestühlen am Strand",
      "Mineralwasser und Erfrischungsgetränke"
    ],
    it: [
      "Transfer da e per l'hotel",
      "Tassa d'ingresso alla spiaggia della riserva di Abu Dabbab",
      "2 immersioni guidate da riva con istruttore PADI/SSI",
      "Attrezzatura subacquea completa (Muta, bombole, zavorra)",
      "Massimo 4 subacquei per gruppo",
      "Accesso a ombrelloni e lettini in spiaggia",
      "Acqua minerale e bevande analcoliche"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "Входной билет на пляж заповедника Абу-Даббаб",
      "2 погружения с берега с инструктором PADI/SSI",
      "Полное снаряжение (Гидрокостюм, баллоны, грузы)",
      "Максимум 4 дайвера в группе",
      "Пользование шезлонгами и зонтиками на пляже",
      "Минеральная вода и безалкогольные напитки"
    ],
    pl: [
      "Odbiór i powrót do hotelu",
      "Opłata za wstęp na plażę rezerwatu Abu Dabbab",
      "2 nurkowania z brzegu z instruktorem PADI/SSI",
      "Pełny sprzęt nurkowy (Pianka, butle, balast)",
      "Maksymalnie 4 nurków w grupie",
      "Dostęp do leżaków i parasoli na plaży",
      "Woda mineralna i napoje chłodzące"
    ],
    cz: [
      "Vyzvednutí a návrat do hotelu",
      "Vstupní poplatek na plaž přírodní rezervace Abu Dabbab",
      "2 ponory z bờehu s instruktorem PADI/SSI",
      "Kompletní potápěčské vybavení (Neopren, lahve, zátěž)",
      "Maximálně 4 potápěči ve skupině",
      "Dostupnost lehátek a slunečníků na pláži",
      "Minerální voda a nealkoholické nápoje"
    ]
  },
  whatToBring: {
    en: [
      "Open Water certification (Digital copy on phone accepted)",
      "Logbook (digital or physical)",
      "Towel",
      "Reef-safe sunscreen",
      "Hat & Sunglasses",
      "Personal pocket money for souvenirs or beach extras",
      "Personal medication if needed"
    ],
    de: [
      "Open Water Zertifikat (Digitale Kopie auf dem Handy akzeptiert)",
      "Logbuch (digital oder physisch)",
      "Handtuch",
      "Riff-freundliche Sonnencreme",
      "Hut & Sonnenbrille",
      "Taschengeld für Extras oder Souvenirs",
      "Persönliche Medikamente bei Bedarf"
    ],
    it: [
      "Brevetto Open Water (Accettata copia digitale su telefono)",
      "Logbook (digitale o fisico)",
      "Asciugamano",
      "Crema solare ecologica",
      "Cappello e occhiali da sole",
      "Denaro contante per extra o souvenir",
      "Farmaci personali se necessari"
    ],
    ru: [
      "Сертификат Open Water (Принимается цифровая копия)",
      "Логбук (цифровой или бумажный)",
      "Полотенце",
      "Безопасный для рифов солнцезащитный крем",
      "Головной убор и очки",
      "Карманные деньги на личные расходы",
      "Личные медикаменты"
    ],
    pl: [
      "Certyfikat Open Water (Akceptowana kopia cyfrowa w telefonie)",
      "Logbook (cyfrowy lub fizyczny)",
      "Ręcznik",
      "Krem z filtrem bezpieczny dla rafy",
      "Czapka i okulary przeciwsłoneczne",
      "Kieszonkowe na dodatkowe wydatki lub pamiątki",
      "Leki osobiste w razie potrzeby"
    ],
    cz: [
      "Certifikace Open Water (Akceptována digitální kopie v telefonu)",
      "Logbook (digitální nebo fyzický)",
      "Ručník",
      "Opalovací krém šetrný k útesům",
      "Klobouk a sluneční brýle",
      "Kapesné na osobní útratu a suvenýry",
      "Osobní léky v případě potřeby"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Non-diving companions under 5: Free entry to beach area",
      de: "Nicht-tauchende Begleiter unter 5 Jahren: Freier Eintritt",
      it: "Accompagnatori non sub sotto i 5 anni: Ingresso gratuito",
      ru: "Сопровождающие не-дайверы до 5 лет: Бесплатно",
      pl: "Osoby towarzyszące poniżej 5 lat: Wstęp bezpłatny",
      cz: "Doprovod bez potápění do 5 let: Vstup zdarma"
    },
    from5to10: {
      en: "Certified Junior Divers (10+ yrs): Full dive rate applies",
      de: "Zertifizierte Junior-Taucher (ab 10 J.): Voller Tauchtarif",
      it: "Junior Diver Certificati (da 10 anni): Tariffa sub completa",
      ru: "Сертифицированные Junior дайверы (с 10 лет): Полный тариф",
      pl: "Certyfikowani Junior Nurkowie (od 10 lat): Pełna stawka",
      cz: "Certifikovaní Junior potápěči (od 10 let): Plná cena"
    },
    over10: {
      en: "Full adult dive rate applies",
      de: "Voller Erwachsenentarif gilt",
      it: "Si applica la tariffa intera sub",
      ru: "Полный взрослый тариф",
      pl: "Obowiązuje pełna stawka",
      cz: "Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Pickup — 08:00 AM",
        de: "Hotelabholung — 08:00 Uhr",
        it: "Transfer dall'Hotel — 08:00",
        ru: "Трансфер из отеля — 08:00",
        pl: "Odbiór z hotelu — 08:00",
        cz: "Vyzvednutí v hotelu — 08:00"
      },
      description: {
        en: "Pickup from your hotel and short drive to Abu Dabbab Bay.",
        de: "Abholung vom Hotel und kurze Fahrt zur Bucht von Abu Dabbab.",
        it: "Pick-up dall'hotel e breve trasferimento alla Baia di Abu Dabbab.",
        ru: "Трансфер из отеля и короткая поездка в бухту Абу-Даббаб.",
        pl: "Odbiór z hotelu i krótki przejazd do Zatoki Abu Dabbab.",
        cz: "Vyzvednutí v hotelu a krátký přesun do zálivu Abu Dabbab."
      }
    },
    {
      step: "02",
      title: {
        en: "Briefing & Gear Setup",
        de: "Briefing & Ausrüstungsaufbau",
        it: "Briefing e Preparazione Attrezzatura",
        ru: "Брифинг и сборка снаряжения",
        pl: "Odprawa i przygotowanie sprzętu",
        cz: "Briefing a příprava výstroje"
      },
      description: {
        en: "Welcome briefing at the dive center and custom fitting of scuba gear.",
        de: "Willkommens-Briefing Basis und Anprobe der Tauchausrüstung.",
        it: "Briefing di benvenuto al centro giudiziale e controllo attrezzatura.",
        ru: "Приветственный брифинг в дайв-центре и подбор снаряжения.",
        pl: "Odprawa w centrum nurkowym i dopasowanie sprzętu.",
        cz: "Uvítací briefing v potápěčském centru a příprava výstroje."
      }
    },
    {
      step: "03",
      title: {
        en: "Dive 1 — North Reef / Seagrass Meadow",
        de: "Tauchgang 1 — Nordriff / Seegraswiese",
        it: "Immersione 1 — Barriera Nord / Posidonia",
        ru: "Погружение 1 — Северный риф / Морские луга",
        pl: "Nurkowanie 1 — Północna rafa / Trawa morska",
        cz: "Ponor 1 — Severní útes / Mořské louky"
      },
      description: {
        en: "Easy beach entry. Search for feeding giant sea turtles and guitar rays.",
        de: "Einfacher Strandeinstieg. Suche nach fressenden Meeresschildkröten.",
        it: "Ingresso facile da spiaggia. Ricerca di tartarughe e razze chitarra.",
        ru: "Удобный заход с пляжа. Поиск гигантских черепах и акул-гитар.",
        pl: "Łatwe wejście z plaży. Poszukiwanie żółwi i płaszczek.",
        cz: "Snadný vstup z pláže. Hledání krmících se obřích želv."
      }
    },
    {
      step: "04",
      title: {
        en: "Surface Interval & Beach Relaxation",
        de: "Oberflächenpause & Strandentspannung",
        it: "Intervallo di Superficie in Spiaggia",
        ru: "Перерыв и отдых на пляже",
        pl: "Przerwa powierzchniowa i relaks na plaży",
        cz: "Povrchový interval a odpočinek na pláži"
      },
      description: {
        en: "Relax under sunbeds, enjoy drinks and absorb the tropical bay atmosphere.",
        de: "Entspannen auf Liegestühlen, Getränke genießen und Sonne tanken.",
        it: "Relax sui lettini, bevande fresche e atmosfera tropicale.",
        ru: "Отдых на шезлонгах, прохладительные напитки на пляже.",
        pl: "Odpoczynek na leżakach i napoje w tropikalnej otoczce.",
        cz: "Odpočinek na lehátkách, nápoje a nasávání tropické atmosféry."
      }
    },
    {
      step: "05",
      title: {
        en: "Dive 2 — South Reef & Deep Seagrass Zone",
        de: "Tauchgang 2 — Südriff & Tiefe Seegraszone",
        it: "Immersione 2 — Barriera Sud e Zona Profonda",
        ru: "Погружение 2 — Южный риф и глубокие луга",
        pl: "Nurkowanie 2 — Południowa rafa i głębokie trawy",
        cz: "Ponor 2 — Jižní útes a hluboké mořské louky"
      },
      description: {
        en: "Second dive along the colorful southern wall and central bay in search of the resident Dugong.",
        de: "Zweiter Tauchgang entlang der bunten Südwand auf der Suche nach dem Dugong.",
        it: "Seconda immersione lungo la parete sud alla ricerca del Dugongo.",
        ru: "Второе погружение у южной стены бухты в поисках дюгоня.",
        pl: "Drugie nurkowanie wzdłuż kolorowej ściany w poszukiwaniu Diugonia.",
        cz: "Druhý ponor podél jižní stěny a pátrání po dugongovi."
      }
    },
    {
      step: "06",
      title: {
        en: "Logbook Session & Hotel Return — 02:30 PM",
        de: "Logbuch-Stempel & Rückfahrt — 14:30 Uhr",
        it: "Logbook e Transfer Hotel — 14:30",
        ru: "Заполнение логбука и трансфер — 14:30",
        pl: "Wpisy do Logbooka i powrót — 14:30",
        cz: "Zápis do deníku a návrat — 14:30"
      },
      description: {
        en: "Stamp logbooks with your instructor and comfortable return transfer to hotel.",
        de: "Logbücher abstempeln und bequemer Rücktransfer zum Hotel.",
        it: "Firma dei logbook con l'istruttore e rientro in hotel.",
        ru: "Заполнение и подпись логбуков с гидом и трансфер в отель.",
        pl: "Wpisy i pieczątki w książkach nurkowych oraz powrót do hotelu.",
        cz: "Razítkování potápěčských deníků s instruktorem a návrat do hotelu."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment required.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich.",
    it: "Paga dopo il tour — nessun pagamento online richiesto.",
    ru: "Оплата после поездки — без предоплаты.",
    pl: "Płatność po wycieczce — płatność online nie jest wymagana.",
    cz: "Platba až po výletu — není vyžadována platba předem online."
  },
  disclaimer: {
    en: "Abu Dabbab is a protected marine reserve with wild animals. Turtle and dugong sightings are never guaranteed. Strictly prohibit touching, chasing, or feeding any marine life. Instructor retains full authority to adjust dive entries based on sea conditions.",
    de: "Abu Dabbab ist ein geschütztes Reservat. Schildkröten- und Seekuh-Sichtungen sind nicht garantiert. Berühren oder Jagen von Tieren ist strengstens verboten.",
    it: "Abu Dabbab è una riserva naturale protetta. Gli avvistamenti di tartarughe e dugonghi non sono garantiti. È vietato toccare o inseguire la fauna.",
    ru: "Абу-Даббаб — охраняемый природный заповедник. Встречи с черепахами и дюгонем не гарантируются. Запрещено трогать и преследовать животных.",
    pl: "Abu Dabbab to chroniony rezerwat morski. Spotkania z żółwiami i diugoniami nie są gwarantowane. Zakaz dotykania i nękania zwierząt.",
    cz: "Abu Dabbab je chráněná mořská rezervace. Pozorování želv a dugongů není garantováno. Přísný zákaz dotýkání se a pronásledování živočichů."
  },
  images: {
    featured: "/images/tours/dabbab-bay-scuba-card.webp",
    gallery: [
      "/images/tours/dabbab-bay-scuba-1.webp",
      "/images/tours/dabbab-bay-scuba-2.webp",
      "/images/tours/dabbab-bay-scuba-3.webp"
    ]
  }
},
{
  id: "dugong-turtle-speedboat-scuba",
  slug: "dugong-turtle-speedboat-scuba-diving",
  type: "scuba-diving",
  title: {
    en: "Abu Dabbab Reefs — Speedboat Dugong & Turtle Scuba Quest",
    de: "Abu Dabbab Riffe — Schnellboot Dugong & Schildkröten Tauchen",
    it: "Barriere di Abu Dabbab — Immersioni in Gommone per Dugonghi e Tartarughe",
    ru: "Рифы Абу-Даббаб — Погружения на скоростном катере к дюгоням и черепахам",
    pl: "Rafe Abu Dabbab — Nurkowanie Motorówką z Diugoniami i Żółwiami",
    cz: "Útesy Abu Dabbab — Potápění z rychlého člunu za dugongy a želvami"
  },
  subtitle: {
    en: "Fast Speedboat Transit to Outer Bay Reefs (Max 4 Divers)",
    de: "Schnellboot-Transfer zu den äußeren Riffen (Max. 4 Taucher)",
    it: "Trasferimento in gommone veloce verso i reef esterni (Max 4 Sub)",
    ru: "Скоростной катер к внешним рифам (Макс. 4 дайвера)",
    pl: "Szybki pontoon/motorówka na zewnętrzne rafy (Maks. 4 nurków)",
    cz: "Rychlý člun na vnější útesy (Max. 4 potápěči)"
  },
  category: {
    en: "Scuba Diving",
    de: "Tauchen",
    it: "Immersioni Subacquee",
    ru: "Дайвинг",
    pl: "Nurkowanie",
    cz: "Potápění"
  },
  price: {
    amount: 100,
    currency: "€",
    unit: {
      en: "per person (Park & Fees Included)",
      de: "pro Person (Park- Gebühren inklusive)",
      it: "per persona (Tasse e Parco Inclusi)",
      ru: "за человека (Сборы включены)",
      pl: "za osobę (Opłaty w cenie)",
      cz: "za osobu (Poplatky v ceně)"
    }
  },
  duration: {
    en: "Half Day (~4–5 Hours)",
    de: "Halbtags (~4–5 Std.)",
    it: "Mezza giornata (~4–5 Ore)",
    ru: "Полдня (~4–5 часов)",
    pl: "Pół dnia (~4–5 godzin)",
    cz: "Půl dne (~4–5 hodin)"
  },
  departure: {
    en: "Marsa Alam Hotels / Abu Dabbab Launch",
    de: "Marsa Alam Hotels / Abu Dabbab Ableger",
    it: "Hotel di Marsa Alam / Imbarco Abu Dabbab",
    ru: "Отели Марса-Алам / Пирс Абу-Даббаб",
    pl: "Hotele w Marsa Alam / Start Abu Dabbab",
    cz: "Hotely v Marsa Alam / Přístaviště Abu Dabbab"
  },
  overview: {
    en: "Hop aboard a fast speedboat to explore the pristine outer reefs of Abu Dabbab Bay in search of resident Dugongs, giant Green Sea Turtles, and rays. Reach untouched diving zones quickly with minimal sea travel time in a small group setting.",
    de: "Gehen Sie an Bord eines Schnellboots, um die unberührten äußeren Riffe von Abu Dabbab auf der Suche nach Dugongs, riesigen Grünen Meeresschildkröten und Rochen zu erkunden. Schneller Transfer in kleiner Gruppe.",
    it: "Sali a bordo di un gommone veloce per esplorare i reef esterni incontaminati di Abu Dabbab alla ricerca di Dugonghi, tartarughe verdi giganti e razze. Raggiungi rapidamente siti esclusivi in piccoli gruppi.",
    ru: "Отправляйтесь на скоростном катере к внешним рифам Абу-Даббаб на поиски дюгоней, гигантских зеленых черепах и скатов. Быстрый трансфер и малая группа.",
    pl: "Wskocz na pokład szybkiej motorówki i odkrywaj zewnętrzne rafy Abu Dabbab w poszukiwaniu Diugoni, gigantycznych żółwi i płaszczek. Szybki rejs w kameralnej grupie.",
    cz: "Nasedněte na rychlý člun a prozkoumejte vnější útesy zálivu Abu Dabbab při pátrání po dugonzích, obřích želvách a rejnocích. Rychlá doprava v malé skupině."
  },
  highlights: {
    en: [
      "2 Guided Speedboat Scuba Dives on outer bay reefs",
      "Fast Speedboat transit — zero wasted time, max water time",
      "Focused search for wild Dugongs & giant Green Sea Turtles",
      "Small intimate group (Maximum 4 divers per guide)",
      "PADI or SSI Certified Dive Instructor",
      "Full high-quality rental equipment included (Discount for own gear)",
      "Marine Park & Environmental Fees included",
      "Fresh mineral water, cold drinks & light snacks"
    ],
    de: [
      "2 Geführte Schnellboot-Tauchgänge an den äußeren Riffen",
      "Schnellboot-Transfer — minimale Fahrzeit, maximale Tauchzeit",
      "Fokussierte Suche nach wilden Dugongs & riesigen Schildkröten",
      "Kleine, intime Gruppe (Maximal 4 Taucher pro Guide)",
      "PADI- oder SSI-zertifizierter Tauchlehrer",
      "Komplette Mietausrüstung inklusive (Rabatt bei eigener Ausrüstung)",
      "Park- & Umweltgebühren inklusive",
      "Erfrischungsgetränke, Mineralwasser & leichte Snacks"
    ],
    it: [
      "2 immersioni guidate da gommone sui reef esterni",
      "Trasferimento veloce in gommone — meno navigazione, più immersione",
      "Ricerca mirata di Dugonghi e tartarughe verdi giganti",
      "Gruppo ridotto (Massimo 4 sub per guida)",
      "Istruttore certificato PADI o SSI",
      "Attrezzatura completa a noleggio inclusa (Sconto con propria)",
      "Tasse del Parco e Ambientali incluse",
      "Acqua fresca, bevande e snack leggeri"
    ],
    ru: [
      "2 погружения с гидом со скоростного катера на внешних рифах",
      "Скоростной катер — минимум времени в пути, максимум под водой",
      "Поиск дюгоней и гигантских зеленых черепах",
      "Маленькая группа (Максимум 4 дайвера на гида)",
      "Инструктор PADI или SSI",
      "Полный комплект аренды снаряжения (Скидка со своим)",
      "Парковые и экологические сборы включены",
      "Минеральная вода, прохладительные напитки и закуски"
    ],
    pl: [
      "2 nurkowania z przewodnikiem z motorówki na zewnętrznych rafach",
      "Szybki pontoon/motorówka — oszczędność czasu, więcej nurkowania",
      "Poszukiwanie dzikich Diugoni i gigantycznych żółwi",
      "Kameralna grupa (Maksymalnie 4 nurków na przewodnika)",
      "Certyfikowany instruktor PADI lub SSI",
      "Pełny sprzęt w cenie (Zniżka przy własnym sprzęcie)",
      "Opłaty parkowe i środowiskowe w cenie",
      "Woda mineralna, zimne napoje i lekkie przekąski"
    ],
    cz: [
      "2 ponory s průvodcem z rychlého člunu na vnějších útesech",
      "Rychlá plavba člunem — méně cestování, více potápění",
      "Cílené pátrání po wild dugonzích a obřích želvách",
      "Malá skupina (Maximálně 4 potápěči na průvodce)",
      "Certifikovaný instruktor PADI nebo SSI",
      "Kompletní výstroj v ceně (Sleva při vlastní výstroji)",
      "Parkové a environmentální poplatky v ceně",
      "Minerální voda, studené nápoje a občerstvení"
    ]
  },
  included: {
    en: [
      "Hotel pickup & drop-off",
      "Fast Speedboat transit to dive sites",
      "2 Guided speedboat dives",
      "Marine Park & Environmental Fees",
      "Full rental scuba diving equipment (wetsuit, BCD, regulator, tanks, weights)",
      "PADI or SSI Instructor (Max 4 divers)",
      "Fresh mineral water, cold drinks & light snacks",
      "Safety stop support"
    ],
    de: [
      "Hotelabholung & Rückbringung",
      "Schnellboot-Transfer zu den Tauchplätzen",
      "2 Geführte Schnellboot-Tauchgänge",
      "Park- & Umweltgebühren",
      "Komplette Mietausrüstung (Neopren, BCD, Atemregler, Flaschen, Blei)",
      "PADI/SSI Tauchlehrer (Max. 4 Taucher)",
      "Mineralwasser, kalte Getränke & leichte Snacks",
      "Sicherheitsstopp-Unterstützung"
    ],
    it: [
      "Transfer da e per l'hotel",
      "Gommone veloce verso i punti di immersione",
      "2 Immersioni guidate da gommone",
      "Tasse del Parco Marino e Ambientali",
      "Attrezzatura completa a noleggio (Muta, GAV, erogatore, bombole, zavorra)",
      "Istruttore PADI/SSI (Max 4 sub)",
      "Acqua minerale, bevande fresche e snack leggeri",
      "Supporto durante la sosta di sicurezza"
    ],
    ru: [
      "Трансфер из отеля и обратно",
      "Трансфер на скоростном катере к сайтам",
      "2 погружения со скоростного катера с гидом",
      "Сборы заповедника и экологический сбор",
      "Полный комплект снаряжения (Гидрокостюм, BCD, регулятор, баллоны, грузы)",
      "Инструктор PADI или SSI (Макс. 4 человека)",
      "Минеральная вода, напитки и легкие закуски",
      "Остановки безопасности"
    ],
    pl: [
      "Odbiór i powrót do hotelu",
      "Transport szybką motorówką do miejsc nurkowych",
      "2 Nurkowania z przewodnikiem z motorówki",
      "Opłaty parkowe i środowiskowe",
      "Pełny sprzęt do wypożyczenia (Pianka, BCD, automat, akumulatory, balast)",
      "Instruktor PADI/SSI (Maks. 4 nurków)",
      "Woda mineralna, zimne napoje i lekkie przekąski",
      "Wsparcie podczas przystanku bezpieczeństwa"
    ],
    cz: [
      "Vyzvednutí a návrat do hotelu",
      "Rychlá doprava člunem na lokality ponorů",
      "2 Ponory s průvodcem z člunu",
      "Parkové a environmentální poplatky",
      "Kompletní zapůjčení výstroje (Neopren, žaket, automatika, lahve, zátěž)",
      "Instruktor PADI/SSI (Max. 4 potápěči)",
      "Minerální voda, studené nápoje a občerstvení",
      "Podpora při bezpečnostní zastávce"
    ]
  },
  whatToBring: {
    en: [
      "Diving certification (Digital copy on phone accepted)",
      "Logbook (digital or physical)",
      "Towel",
      "Reef-safe sunscreen",
      "Hat & Sunglasses",
      "Personal medication if needed"
    ],
    de: [
      "Tauchschein (Digitale Kopie auf dem Handy akzeptiert)",
      "Logbuch (digital oder physisch)",
      "Handtuch",
      "Riff-freundliche Sonnencreme",
      "Hut & Sonnenbrille",
      "Persönliche Medikamente bei Bedarf"
    ],
    it: [
      "Brevetto sub (Accettata copia digitale su telefono)",
      "Logbook (digitale o fisico)",
      "Asciugamano",
      "Crema solare ecologica",
      "Cappello e occhiali da sole",
      "Farmaci personali se necessari"
    ],
    ru: [
      "Сертификат дайвера (Принимается цифровая копия)",
      "Логбук (цифровой или бумажный)",
      "Полотенце",
      "Безопасный для рифов солнцезащитный крем",
      "Головной убор и очки",
      "Личные медикаменты"
    ],
    pl: [
      "Certyfikat nurkowy (Akceptowana kopia cyfrowa w telefonie)",
      "Logbook (cyfrowy lub fizyczny)",
      "Ręcznik",
      "Krem z filtrem bezpieczny dla rafy",
      "Czapka i okulary przeciwsłoneczne",
      "Leki osobiste w razie potrzeby"
    ],
    cz: [
      "Potápěčská certifikace (Akceptována digitální kopie v telefonu)",
      "Logbook (digitální nebo fyzický)",
      "Ručník",
      "Opalovací krém šetrný k útesům",
      "Klobouk a sluneční brýle",
      "Osobní léky v případě potřeby"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Not allowed — Speedboat dives are for certified divers only",
      de: "Nicht erlaubt — Schnellboot-Tauchgänge nur für zertifizierte Taucher",
      it: "Non consentito — Immersioni da gommone riservate ai soli sub certificati",
      ru: "Не допускается — Погружения со скоростного катера только для сертифицированных дайверов",
      pl: "Niedozwolone — Nurkowania z motorówki tylko dla certyfikowanych nurków",
      cz: "Není povoleno — Ponory z rychlého člunu pouze pro certifikované potápěče"
    },
    from5to10: {
      en: "Not allowed — Minimum certification age limits apply",
      de: "Nicht erlaubt — Mindestalter für Zertifizierung gilt",
      it: "Non consentito — Limiti di età per brevetto applicati",
      ru: "Не допускается — Ограничения по возрасту для сертификации",
      pl: "Niedozwolone — Ograniczenia wiekowe certyfikacji",
      cz: "Není povoleno — Platí věková omezení certifikace"
    },
    over10: {
      en: "Certified Junior Divers (10+ yrs): Full adult dive rate applies",
      de: "Zertifizierte Junior-Taucher (ab 10 J.): Voller Tauchtarif",
      it: "Junior Diver Certificati (da 10 anni): Tariffa sub completa",
      ru: "Сертифицированные Junior дайверы (с 10 лет): Полный тариф",
      pl: "Certyfikowani Junior Nurkowie (od 10 lat): Pełna stawka",
      cz: "Certifikovaní Junior potápěči (od 10 let): Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Pickup & Transfer",
        de: "Hotelabholung & Transfer",
        it: "Transfer dall'Hotel",
        ru: "Трансфер из отеля",
        pl: "Odbiór z hotelu i transfer",
        cz: "Vyzvednutí v hotelu a transfer"
      },
      description: {
        en: "Morning pickup from your hotel to the speedboat boarding site.",
        de: "Morgenabholung vom Hotel zum Schnellboot-Anleger.",
        it: "Pick-up mattutino dall'hotel al punto di imbarco del gommone.",
        ru: "Утренний трансфер из отеля к места посадки на скоростной катер.",
        pl: "Poranny odbiór z hotelu do miejsca startu motorówki.",
        cz: "Ranní vyzvednutí v hotelu a přesun k rychlému člunu."
      }
    },
    {
      step: "02",
      title: {
        en: "Briefing & Gear Check",
        de: "Briefing & Ausrüstungs-Check",
        it: "Briefing e Controllo Attrezzatura",
        ru: "Брифинг и проверка оборудования",
        pl: "Odprawa i sprawdzanie sprzętu",
        cz: "Briefing a kontrola výstroje"
      },
      description: {
        en: "Dive profile briefing, eco-guidelines, and equipment check.",
        de: "Briefing zum Tauchprofil, Umweltregeln und Ausrüstungs-Check.",
        it: "Briefing sul profilo di immersione, linee guida ecologiche e controllo attrezzatura.",
        ru: "Брифинг по погружениям, эко-правила и проверка оборудования.",
        pl: "Odprawa na temat profilu nurkowania, zasad ekologicznych i sprawdzenie sprzętu.",
        cz: "Briefing o profilu ponoru, ekologických pravidlech a kontrola výstroje."
      }
    },
    {
      step: "03",
      title: {
        en: "Speedboat Dive 1 — Turtle & Seagrass Zone",
        de: "Schnellboot-Tauchgang 1 — Schildkröten- & Seegraszone",
        it: "Immersione in Gommone 1 — Zona Tartarughe e Posidonia",
        ru: "Погружение 1 с катера — Черепахи и морские луга",
        pl: "Nurkowanie 1 z motorówki — Strefa żółwi i trawy morskiej",
        cz: "Ponor 1 z člunu — Zóna želv a mořské trávy"
      },
      description: {
        en: "Fast transit to outer seagrass areas. Dive searching for giant Green Turtles and rays.",
        de: "Schnelle Überfahrt zu den äußeren Seegraswiesen. Tauchgang zu Schildkröten und Rochen.",
        it: "Navigazione veloce verso le praterie esterne. Immersione alla ricerca di tartarughe e razze.",
        ru: "Быстрый переход к внешним лугам. Погружение в поисках гигантских зеленых черепах.",
        pl: "Szybki rejs na zewnętrzne łąki trawy. Nurkowanie w poszukiwaniu żółwi i płaszczek.",
        cz: "Rychlá plavba na vnější mořské louky. Ponor s hledáním obřích zelených želv."
      }
    },
    {
      step: "04",
      title: {
        en: "Surface Interval & Drinks",
        de: "Oberflächenpause & Getränke",
        it: "Intervallo di Superficie e Bevande",
        ru: "Перерыв и прохладительные напитки",
        pl: "Przerwa powierzchniowa i napoje",
        cz: "Povrchový interval a nápoje"
      },
      description: {
        en: "Rest on board the speedboat, enjoy cold drinks and light snacks.",
        de: "Entspannen an Bord des Schnellboots bei kalten Getränken und Snacks.",
        it: "Riposo a bordo del gommone con bevande fresche e snack leggeri.",
        ru: "Отдых на борту скоростного катера с напитками и лёгкими закусками.",
        pl: "Odpoczynek na pokładzie motorówki z zimnymi napojami i przekąskami.",
        cz: "Odpočinek na palubě člunu, studené nápoje a občerstvení."
      }
    },
    {
      step: "05",
      title: {
        en: "Speedboat Dive 2 — Outer Reef & Dugong Quest",
        de: "Schnellboot-Tauchgang 2 — Äußeres Riff & Dugong-Suche",
        it: "Immersione in Gommone 2 — Reef Esterno e Caccia al Dugongo",
        ru: "Погружение 2 с катера — Внешний риф и поиск дюгоня",
        pl: "Nurkowanie 2 z motorówki — Zewnętrzna rafa i poszukiwanie Diugonia",
        cz: "Ponor 2 z člunu — Vnější útes a pátrání po dugongovi"
      },
      description: {
        en: "Explore outer coral walls and deeper sandy patches in active search of wild Dugongs.",
        de: "Erkunden Sie äußere Korallenwände und tiefere Sandflächen auf der Suche nach dem Dugong.",
        it: "Esplora le pareti esterne e i fondali sabbiosi alla ricerca del Dugongo.",
        ru: "Исследование внешних коралловых стен и песчаных плато в поисках дюгоней.",
        pl: "Odkrywanie zewnętrznych ścian i piaszczystych obszarów w poszukiwaniu Diugonia.",
        cz: "Prozkoumávání vnějších koralových stěn a písků při hledání dugongů."
      }
    },
    {
      step: "06",
      title: {
        en: "Fast Return & Hotel Drop-off",
        de: "Schnelle Rückfahrt & Hotelabgabe",
        it: "Rientro Veloce e Transfer Hotel",
        ru: "Быстрое возвращение и трансфер в отель",
        pl: "Szybki powrót i transfer do hotelu",
        cz: "Rychlý návrat a transfer do hotelu"
      },
      description: {
        en: "Express boat transit back to shore and comfortable hotel transfer.",
        de: "Express-Rückfahrt an Land und bequemer Transfer zurück zum Hotel.",
        it: "Rientro rapido a terra e comodo trasferimento al tuo hotel.",
        ru: "Быстрый переход к берегу и комфортный трансфер в отель.",
        pl: "Szybki powrót na brzeg i wygodny transfer do hotelu.",
        cz: "Rychlý návrat na břeh a pohodlný transfer do hotelu."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment or deposit required. Custom discount applied if you bring your own equipment.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich. Rabatt bei eigener Ausrüstung.",
    it: "Paga dopo il tour — nessun pagamento online richiesto. Sconto se porti la tua attrezzatura.",
    ru: "Оплата после поездки — без предоплаты. Скидка при наличии собственного снаряжения.",
    pl: "Płatność po wycieczce — bez opłat online. Zniżka przy własnym sprzęcie.",
    cz: "Platba až po výletu — bez zálohy. Při vlastním vybavení bude uplatněna sleva."
  },
  disclaimer: {
    en: "Focuses on searching for wild marine animals in their natural habitat; sightings can never be guaranteed. Strict eco-guidelines apply: chasing, touching, or riding animals is strictly prohibited. Instructor holds full authority to alter route based on weather and sea conditions.",
    de: "Fokus auf die Suche nach wilden Tieren in ihrem natürlichen Lebensraum; Sichtungen nicht garantiert. Tiere anfassen oder jagen ist streng verboten. Tauchlehrer kann Route wetterbedingt anpassen.",
    it: "Incontro con animali selvatici nel loro habitat naturale non garantito. Rispetto rigoroso delle norme ecologiche: vietato toccare o inseguire gli animali.",
    ru: "Поиск диких животных в их естественной среде; встречи не гарантируются. Запрещено преследовать и трогать животных. Гид имеет право менять маршрут по погоде.",
    pl: "Poszukiwanie dzikich zwierząt w naturalnym środowisku; brak gwarancji zobaczenia. Surowy zakaz dotykania i nękania zwierząt.",
    cz: "Pátrání po wild živočiších; pozorování není garantováno. Přísný zákaz dotýkání se a pronásledování zvířat."
  },
  images: {
    featured: "/images/tours/speedboat-scuba-card.webp",
    gallery: [
      "/images/tours/speedboat-scuba-1.webp",
      "/images/tours/speedboat-scuba-2.webp",
      "/images/tours/speedboat-scuba-3.webp"
    ]
  }
},
{
  id: "marsa-mubarak-boat-scuba",
  slug: "marsa-mubarak-dugong-turtle-boat-scuba-diving",
  type: "scuba-diving",
  title: {
    en: "Marsa Mubarak — Dugong & Turtle Boat Diving Experience",
    de: "Marsa Mubarak — Bootstauchen mit Seekühen & Schildkröten",
    it: "Marsa Mubarak — Immersioni in Barca per Dugonghi e Tartarughe",
    ru: "Марса-Мубарак — Погружения с катера к дюгоням и черепахам",
    pl: "Marsa Mubarak — Nurkowanie z Łodzi z Diugoniami i Żółwiami",
    cz: "Marsa Mubarak — Potápění z lodi za dugongy a želvami"
  },
  subtitle: {
    en: "2 Guided Boat Dives from Port Ghalib (Max 4 Divers)",
    de: "2 Geführte Boots-Tauchgänge ab Port Ghalib (Max. 4 Taucher)",
    it: "2 Immersioni guidate in barca da Port Ghalib (Max 4 Sub)",
    ru: "2 погружения с катера из Порт-Галиб (Макс. 4 дайвера)",
    pl: "2 nurkowania z łodzi z przewodnikiem z Port Ghalib (Maks. 4 nurków)",
    cz: "2 ponory s průvodcem z lodi z Port Ghalib (Max. 4 potápěči)"
  },
  category: {
    en: "Scuba Diving",
    de: "Tauchen",
    it: "Immersioni Subacquee",
    ru: "Дайвинг",
    pl: "Nurkowanie",
    cz: "Potápění"
  },
  price: {
    amount: 90,
    currency: "€",
    unit: {
      en: "per person (Marine Park Fee Included)",
      de: "pro Person (Parkgebühren inklusive)",
      it: "per persona (Tassa Parco Inclusa)",
      ru: "за человека (Сбор заповедника включен)",
      pl: "za osobę (Opłata parkowa w cenie)",
      cz: "za osobu (Poplatek za park v ceně)"
    }
  },
  duration: {
    en: "Full Trip (~6–7 Hours)",
    de: "Ganztägig (~6–7 Std.)",
    it: "Intera giornata (~6–7 Ore)",
    ru: "Полный день (~6–7 часов)",
    pl: "Cały dzień (~6–7 godzin)",
    cz: "Celý den (~6–7 hodin)"
  },
  departure: {
    en: "Marsa Alam Hotels / Port Ghalib Pier",
    de: "Marsa Alam Hotels / Hafen Port Ghalib",
    it: "Hotel di Marsa Alam / Porto di Port Ghalib",
    ru: "Отели Марса-Алам / Пирс Порт-Галиб",
    pl: "Hotele w Marsa Alam / Port Ghalib",
    cz: "Hotely v Marsa Alam / Přístav Port Ghalib"
  },
  overview: {
    en: "Marsa Mubarak is a world-famous natural bay near Port Ghalib, renowned for shallow, crystal-clear seagrass meadows where green sea turtles and the rare resident dugong roam. Explore lush seagrass feeding areas alongside outer coral gardens and pinnacles in a small guided group.",
    de: "Marsa Mubarak ist eine weltberühmte Bucht nahe Port Ghalib, bekannt für ihre Seegraswiesen, in denen Grüne Meeresschildkröten und der seltene Dugong leben. Erkunden Sie Seegrasflächen sowie Korallengärten in einer kleinen Gruppe.",
    it: "Marsa Mubarak è una rinomata baia naturale vicino a Port Ghalib, famosa per i bassi fondali di posidonia dove vivono tartarughe verdi e il raro dugongo. Esplora praterie marine e giardini di corallo in un gruppo ridotto.",
    ru: "Марса-Мубарак — знаменитая бухта возле Порт-Галиб, известная мелководными лугами морской травы, где обитают зеленые черепахи и дюгонь. Исследуйте коралловые сады и морские луга в малых группах.",
    pl: "Marsa Mubarak to słynna Zatoka w bliskości Port Ghalib, znana z płytkich łąk trawy morskiej, gdzie żyją żółwie zielone i rzadki diugoń. Odkrywaj łąki i ogrody koralowe w kameralnej grupie.",
    cz: "Marsa Mubarak je světově proslulý záliv u Port Ghalib, známý mořskými loukami s zelenými želvami a vzácným dugongem. Prozkoumejte mořské louky a koralové zahrady v malé skupině."
  },
  highlights: {
    en: [
      "2 Guided Scuba Dives from a fully equipped dive boat",
      "Explore famous seagrass feeding zones for Turtles & Dugongs",
      "Discover vibrant coral gardens & pinnacles outer bay",
      "Depart directly from Port Ghalib Marina",
      "Small intimate group (Maximum 4 divers per guide)",
      "PADI or SSI Certified Dive Instructor",
      "Full rental scuba gear included (Discount if using own gear)",
      "Official Marine Park & Environmental Fees included"
    ],
    de: [
      "2 Geführte Boots-Tauchgänge von einem vollausgestatteten Boot",
      "Erkundung der Seegraswiesen für Schildkröten & Seekühe",
      "Entdeckung farbenfroher Korallengärten & Riffblöcke",
      "Direkte Abfahrt vom Yachthafen Port Ghalib",
      "Kleine, intime Gruppe (Maximal 4 Taucher pro Guide)",
      "PADI- oder SSI-zertifizierter Tauchlehrer",
      "Komplette Ausrüstung inklusive (Rabatt bei eigener Ausrüstung)",
      "Offizielle Park- & Umweltgebühren inklusive"
    ],
    it: [
      "2 immersioni guidate da una barca da sub attrezzata",
      "Esplora le praterie marine per avvistare tartarughe e dugonghi",
      "Scopri giardini di corallo e pinnacoli all'esterno della baia",
      "Partenza diretta dal porto turistico di Port Ghalib",
      "Gruppo ridotto (Massimo 4 sub per guida)",
      "Istruttore certificato PADI o SSI",
      "Attrezzatura completa inclusa (Sconto con attrezzatura propria)",
      "Tasse ufficiali del Parco Marino e Ambientali incluse"
    ],
    ru: [
      "2 погружения с гидом с оснащенного дайв-бота",
      "Исследование лугов морской травы в поисках черепах и дюгоня",
      "Красочные коралловые сады и рифовые вершины",
      "Прямой выезд из пристани Порт-Галиб",
      "Маленькая группа (Максимум 4 дайвера на гида)",
      "Инструктор PADI или SSI",
      "Полный комплект аренды снаряжения (Скидка со своим)",
      "Все официальные сборы заповедника включены"
    ],
    pl: [
      "2 nurkowania z przewodnikiem z wyposażonej łodzi nurkowej",
      "Odkrywanie łąk trawy morskiej i poszukiwanie żółwi oraz diugoni",
      "Odkrywaj tętniące życiem ogrody koralowe i iglice",
      "Wypłynięcie bezpośrednio z Mariny Port Ghalib",
      "Kameralna grupa (Maksymalnie 4 nurków na przewodnika)",
      "Certyfikowany instruktor PADI lub SSI",
      "Pełny sprzęt w cenie (Zniżka przy własnym sprzęcie)",
      "Oficjalne opłaty parkowe i środowiskowe w cenie"
    ],
    cz: [
      "2 ponory s průvodcem z plně vybavené potápěčské lodi",
      "Prozkoumávání mořských luk za želvami a dugongy",
      "Koralové zahrady a útesové věže v zálivu",
      "Odjezd přímo z maríny Port Ghalib",
      "Malá skupina (Maximálně 4 potápěči na průvodce)",
      "Certifikovaný instruktor PADI nebo SSI",
      "Kompletní výstroj v ceně (Sleva při vlastní výstroji)",
      "Oficální poplatky za národní парк a prostředí v ceně"
    ]
  },
  included: {
    en: [
      "2 Guided boat dives",
      "Full high-quality scuba diving equipment rental (wetsuit, tanks, weights)",
      "Official Marine Park & Environmental Fees",
      "Hotel pickup & drop-off (A/C vehicle)",
      "Fresh mineral water & cold drinks on board",
      "Light snacks & fresh fruits on board",
      "PADI or SSI Instructor (Max 4 divers per group)",
      "Safety stop support"
    ],
    de: [
      "2 Geführte Boots-Tauchgänge",
      "Komplette Tauchausrüstung (Neoprenanzug, Flaschen, Blei)",
      "Offizielle Park- & Umweltgebühren",
      "Hotelabholung & Rückbringung (Klimatisiertes Fahrzeug)",
      "Frisches Mineralwasser & kalte Getränke an Bord",
      "Leichte Snacks & frisches Obst an Bord",
      "PADI/SSI Tauchlehrer (Max. 4 Taucher pro Gruppe)",
      "Sicherheitsstopp-Unterstützung"
    ],
    it: [
      "2 immersioni guidate in barca",
      "Noleggio attrezzatura subacquea completa (Muta, bombole, zavorra)",
      "Tasse ufficiali del Parco Marino e Ambientali",
      "Transfer da e per l'hotel (Veicolo climatizzato)",
      "Acqua minerale e bevande fresche a bordo",
      "Snack leggeri e frutta fresca a bordo",
      "Istruttore PADI/SSI (Max 4 sub per gruppo)",
      "Supporto durante la sosta di sicurezza"
    ],
    ru: [
      "2 погружения с гидом с катера",
      "Полная аренда оборудования (Гидрокостюм, баллоны, грузы)",
      "Официальные сборы заповедника и экологический сбор",
      "Трансфер из отеля и обратно (кондиционируемый авто)",
      "Минеральная вода и прохладительные напитки на борту",
      "Легкие закуски и свежие фрукты на борту",
      "Инструктор PADI или SSI (Макс. 4 человек)",
      "Остановки безопасности"
    ],
    pl: [
      "2 nurkowania z łodzi z przewodnikiem",
      "Wypożyczenie pełnego sprzętu (Pianka, butle, balast)",
      "Oficjalne opłaty parkowe i środowiskowe",
      "Odbiór i powrót do hotelu (Klimatyzowany pojazd)",
      "Świeża woda mineralna i zimne napoje na pokładzie",
      "Lekkie przekąski i świeże owoce na pokładzie",
      "Instruktor PADI/SSI (Maks. 4 nurków w grupie)",
      "Wsparcie podczas przystanku bezpieczeństwa"
    ],
    cz: [
      "2 ponory z lodi s průvodcem",
      "Zapůjčení kompletní výstroje (Neopren, lahve, zátěž)",
      "Oficiální poplatky za národní park a prostředí",
      "Vyzvednutí a návrat do hotelu (Klimatizovaný vůz)",
      "Minerální voda a studené nápoje na palubě",
      "Občerstvení a čerstvé ovoce na palubě",
      "Instruktor PADI/SSI (Max. 4 potápěči ve skupině)",
      "Podpora při bezpečnostní zastávce"
    ]
  },
  whatToBring: {
    en: [
      "Diving certification (Digital copy on phone accepted)",
      "Logbook (digital or physical)",
      "Towel",
      "Reef-safe sunscreen",
      "Hat & Sunglasses",
      "Personal medication if needed"
    ],
    de: [
      "Tauchschein (Digitale Kopie auf dem Handy akzeptiert)",
      "Logbuch (digital oder physisch)",
      "Handtuch",
      "Riff-freundliche Sonnencreme",
      "Hut & Sonnenbrille",
      "Persönliche Medikamente bei Bedarf"
    ],
    it: [
      "Brevetto sub (Accettata copia digitale su telefono)",
      "Logbook (digitale o fisico)",
      "Asciugamano",
      "Crema solare ecologica",
      "Cappello e occhiali da sole",
      "Farmaci personali se necessari"
    ],
    ru: [
      "Сертификат дайвера (Принимается цифровая копия)",
      "Логбук (цифровой или бумажный)",
      "Полотенце",
      "Безопасный для рифов солнцезащитный крем",
      "Головной убор и очки",
      "Личные медикаменты"
    ],
    pl: [
      "Certyfikat nurkowy (Akceptowana kopia cyfrowa w telefonie)",
      "Logbook (cyfrowy lub fizyczny)",
      "Ręcznik",
      "Krem z filtrem bezpieczny dla rafy",
      "Czapka i okulary przeciwsłoneczne",
      "Leki osobiste w razie potrzeby"
    ],
    cz: [
      "Potápěčská certifikace (Akceptována digitální kopie v telefonu)",
      "Logbook (digitální nebo fyzický)",
      "Ručník",
      "Opalovací krém šetrný k útesům",
      "Klobouk a sluneční brýle",
      "Osobní léky v případě potřeby"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Non-diving companions under 5: Subject to boat availability",
      de: "Nicht-tauchende Begleiter unter 5: Abhängig von Bootkapazität",
      it: "Accompagnatori non sub sotto i 5 anni: Soggetto a disponibilità",
      ru: "Сопровождающие не-дайверы до 5 лет: По запросу",
      pl: "Osoby towarzyszące poniżej 5 lat: Zależnie od dostępności łodzi",
      cz: "Doprovod bez potápění do 5 let: Dle kapacity lodi"
    },
    from5to10: {
      en: "Non-diving companions: Reduced boat fee applies",
      de: "Nicht-tauchende Begleiter: Ermäßigte Bootsgebühr",
      it: "Accompagnatori non sub: Tariffa barca ridotta",
      ru: "Сопровождающие не-дайверы: Скидка на сбор катера",
      pl: "Osoby towarzyszące bez nurkowania: Zniżka na rejs",
      cz: "Doprovod bez potápění: Snížený poplatek за lodi"
    },
    over10: {
      en: "Certified Junior Divers (10+ yrs): Full adult dive rate applies",
      de: "Zertifizierte Junior-Taucher (ab 10 J.): Voller Tauchtarif",
      it: "Junior Diver Certificati (da 10 anni): Tariffa sub completa",
      ru: "Сертифицированные Junior дайверы (с 10 лет): Полный тариф",
      pl: "Certyfikowani Junior Nurkowie (od 10 lat): Pełna stawka",
      cz: "Certifikovaní Junior potápěči (od 10 let): Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Pickup — 07:30 AM",
        de: "Hotelabholung — 07:30 Uhr",
        it: "Transfer dall'Hotel — 07:30",
        ru: "Трансфер из отеля — 07:30",
        pl: "Odbiór z hotelu — 07:30",
        cz: "Vyzvednutí v hotelu — 07:30"
      },
      description: {
        en: "Pickup directly from your hotel and transfer via comfortable A/C vehicle to Port Ghalib Pier.",
        de: "Abholung vom Hotel und Fahrt im klimatisierten Fahrzeug zum Hafen Port Ghalib.",
        it: "Pick-up in hotel e trasferimento in veicolo climatizzato al porto di Port Ghalib.",
        ru: "Трансфер из отеля на комфортабельном авто с кондиционером к пристани Порт-Галиб.",
        pl: "Odbiór z hotelu i przejazd klimatyzowanym pojazdem do Port Ghalib.",
        cz: "Vyzvednutí v hotelu a přesun klimatizovaným vozem do přístavu Port Ghalib."
      }
    },
    {
      step: "02",
      title: {
        en: "Boat Departure",
        de: "Boot-Abfahrt",
        it: "Partenza della Barca",
        ru: "Отплытие катера",
        pl: "Wypłynięcie łodzi",
        cz: "Odjezd lodi"
      },
      description: {
        en: "Board the fully equipped dive boat, complete registration and set sail for Marsa Mubarak Bay.",
        de: "Gehen Sie an Bord des Tauchboots, schließen Sie die Registrierung ab und fahren Sie nach Marsa Mubarak.",
        it: "Imbarco sulla barca attrezzata, registrazione e navigazione verso la baia di Marsa Mubarak.",
        ru: "Посадка на бот, регистрация и отправление в бухту Марса-Мубарак.",
        pl: "Wejście na pokład łodzi, rejestracja i rejs w stronę Zatoki Marsa Mubarak.",
        cz: "Nástup na palubu lodi, registrace a plavba do zálivu Marsa Mubarak."
      }
    },
    {
      step: "03",
      title: {
        en: "Safety Dive Briefing",
        de: "Sicherheit-Briefing",
        it: "Briefing di Sicurezza",
        ru: "Брифинг по безопасности",
        pl: "Odprawa bezpieczeństwa",
        cz: "Bezpečnostní briefing"
      },
      description: {
        en: "Your instructor details the dive profile, depth limits, buddy checks, and eco-guidelines.",
        de: "Ihr Tauchlehrer erklärt den Tauchplan, Tiefe, Buddy-System und Umweltregeln.",
        it: "L'istruttore illustra il piano di immersione, profondità, sistema di coppia e norme ambientali.",
        ru: "Инструктор объясняет план погружения, глубины, работу в парах и эко-правила.",
        pl: "Instruktor omawia plan nurkowania, głębokość, zasady bezpieczeństwa i ekologii.",
        cz: "Instruktor vysvětlí plán ponoru, hloubkové limity, buddy system a ekologická pravidla."
      }
    },
    {
      step: "04",
      title: {
        en: "Dive 1 — Seagrass Feeding Meadows",
        de: "Tauchgang 1 — Seegraswiesen",
        it: "Immersione 1 — Praterie di Posidonia",
        ru: "Погружение 1 — Морские луга",
        pl: "Nurkowanie 1 — Łąki trawy morskiej",
        cz: "Ponor 1 — Mořské louky"
      },
      description: {
        en: "Gear up for your first guided dive, exploring seagrass areas for turtles, rays, and dugongs.",
        de: "Erster geführter Tauchgang im Seegrasgebiet auf der Suche nach Schildkröten und Dugongs.",
        it: "Prima immersione guidata tra le praterie alla ricerca di tartarughe, razze e dugonghi.",
        ru: "Первое погружение вдоль морской травы в поисках черепах, скатов и дюгоня.",
        pl: "Pierwsze nurkowanie z przewodnikiem po obszarach trawy morskiej w poszukiwaniu żółwi i diugoni.",
        cz: "První ponor s průvodcem po mořských lukách s hledáním želv a dugongů."
      }
    },
    {
      step: "05",
      title: {
        en: "Surface Interval Break & Snacks",
        de: "Oberflächenpause & Snacks",
        it: "Intervallo di Superficie e Snack",
        ru: "Поверхностный перерыв и закуски",
        pl: "Przerwa powierzchniowa i przekąski",
        cz: "Povrchový interval a občerstvení"
      },
      description: {
        en: "Relax on board between dives. Enjoy fresh mineral water, cold drinks, and seasonal fruits.",
        de: "Entspannen Sie an Bord. Genießen Sie frisches Wasser, kühle Getränke und Obst.",
        it: "Relax a bordo tra le immersioni con acqua fresca, bevande e frutta di stagione.",
        ru: "Отдых на борту между погружениями с напитками, легкими закусками и фруктами.",
        pl: "Odpoczynek na pokładzie. Świeża woda, zimne napoje i owoce sezonowe.",
        cz: "Odpočinek na palubě mezi ponory. Minerální voda, studené nápoje a ovoce."
      }
    },
    {
      step: "06",
      title: {
        en: "Dive 2 — Coral Gardens & Outer Reef",
        de: "Tauchgang 2 — Korallengärten & Äußeres Riff",
        it: "Immersione 2 — Giardini di Corallo e Reef Esterno",
        ru: "Погружение 2 — Коралловые сады и внешний риф",
        pl: "Nurkowanie 2 — Ogrody koralowe i zewnętrzna rafa",
        cz: "Ponor 2 — Koralové zahrady a vnější útes"
      },
      description: {
        en: "Explore another section of Marsa Mubarak featuring colorful coral formations and reef life.",
        de: "Zweiter Tauchgang an farbenfrohen Korallenformationen und Riffwänden.",
        it: "Esplora un'altra sezione di Marsa Mubarak tra formazioni coralline e vita marina.",
        ru: "Второе погружение в другой части бухты среди красочных кораллов и рифовых рыб.",
        pl: "Drugie nurkowanie wokół malowniczych formacji koralowych i obfitego życia morskiego.",
        cz: "Druhý ponor v další části zálivu s koralovými formacemi a bohatým životem."
      }
    },
    {
      step: "07",
      title: {
        en: "Return Cruise & Hotel Drop-off",
        de: "Rückfahrt & Hotelabgabe",
        it: "Rientro e Transfer Hotel",
        ru: "Обратный путь и трансфер в отель",
        pl: "Rejs powrotny i transfer do hotelu",
        cz: "Návratová plavba a transfer do hotelu"
      },
      description: {
        en: "Pack gear, cruise back to Port Ghalib Pier, and comfortable transfer back to your resort.",
        de: "Rückfahrt zum Hafen von Port Ghalib und anschließender Transfer zum Hotel.",
        it: "Rientro al porto di Port Ghalib e comodo trasferimento di ritorno al resort.",
        ru: "Возвращение в пирс Порт-Галиб и комфортный трансфер в отель.",
        pl: "Rejs powrotny do mariny i wygodny transfer powrotny do hotelu.",
        cz: "Návrat do přístavu Port Ghalib a pohodlný transfer zpět do hotelu."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment or deposit required. Custom discount applied if you bring your own equipment.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich. Rabatt bei eigener Ausrüstung.",
    it: "Paga dopo il tour — nessun pagamento online richiesto. Sconto se porti la tua attrezzatura.",
    ru: "Оплата после поездки — без предоплаты. Скидка при наличии собственного снаряжения.",
    pl: "Płatność po wycieczce — bez opłat online. Zniżka przy własnym sprzęcie.",
    cz: "Platba až po výletu — bez zálohy. Při vlastním vybavení bude uplatněna sleva."
  },
  disclaimer: {
    en: "Marsa Mubarak is a natural marine reserve with wild animals. Turtle and dugong sightings are never 100% guaranteed. Strict eco-guidelines apply: chasing, touching, or feeding animals is strictly prohibited. Instructor holds safety authority to adjust dive routes.",
    de: "Marsa Mubarak ist ein Naturschutzgebiet mit wilden Tieren. Sichtungen von Schildkröten und Seekühen sind nicht garantiert. Anfassen oder Jagen ist streng verboten.",
    it: "Marsa Mubarak è una riserva naturale. Gli avvistamenti di fauna selvatica non sono garantiti al 100%. Vietato toccare o inseguire gli animali.",
    ru: "Марса-Мубарак — природный заповедник. Встречи с черепахами и дюгонем не гарантируются. Запрещено преследовать и трогать животных.",
    pl: "Marsa Mubarak to rezerwat morski. Spotkania ze zwierzętami nie są gwarantowane. Zakaz nękania i dotykania fauny morskiej.",
    cz: "Marsa Mubarak je přírodní rezervace. Pozorování živočichů není 100% garantováno. Přísný zákaz dotýkání se a pronásledování zvířat."
  },
  images: {
    featured: "/images/tours/boat-scuba-card.webp",
    gallery: [
      "/images/tours/boat-scuba-1.webp",
      "/images/tours/boat-scuba-2.webp",
      "/images/tours/boat-scuba-3.webp"
    ]
  }
},
{
  id: "abu-dabbab-night-dive",
  slug: "abu-dabbab-night-scuba-diving",
  type: "scuba-diving",
  title: {
    en: "Abu Dabbab — Night Scuba Diving Experience",
    de: "Abu Dabbab — Nachttauchen Erlebnis",
    it: "Abu Dabbab — Esperienza di Immersione Notturna",
    ru: "Абу-Даббаб — Ночное погружение",
    pl: "Abu Dabbab — Nocne Nurkowanie",
    cz: "Abu Dabbab — Noční potápění"
  },
  subtitle: {
    en: "Discover the Mystery of the Reef After Dark (Max Depth 20m, Max 4 Divers)",
    de: "Entdecken Sie das Geheimnis des Riffs nach Einbruch der Dunkelheit (Max. 20m, Max. 4 Taucher)",
    it: "Scopri i misteri della barriera dopo il tramonto (Max 20m, Max 4 Sub)",
    ru: "Тайны ночного рифа после заката (Макс. глубина 20 м, Макс. 4 дайвера)",
    pl: "Odkryj tajemnice rafy po zmroku (Maks. głębokość 20m, Maks. 4 nurków)",
    cz: "Objevte tajemství útesu po setmění (Max. hloubka 20m, Max. 4 potápěči)"
  },
  category: {
    en: "Scuba Diving",
    de: "Tauchen",
    it: "Immersioni Subacquee",
    ru: "Дайвинг",
    pl: "Nurkowanie",
    cz: "Potápění"
  },
  price: {
    amount: 95,
    currency: "€",
    unit: {
      en: "per person (Abu Dabbab Entry Included)",
      de: "pro Person (Eintritt Abu Dabbab inklusive)",
      it: "per persona (Ingresso Abu Dabbab Incluso)",
      ru: "за человека (Вход включен)",
      pl: "za osobę (Wstęp w cenie)",
      cz: "za osobu (Vstup v ceně)"
    }
  },
  duration: {
    en: "Evening Experience (~4 Hours)",
    de: "Abenderlebnis (~4 Std.)",
    it: "Esperienza Serale (~4 Ore)",
    ru: "Вечерняя экскурсия (~4 часа)",
    pl: "Przygoda wieczorna (~4 godziny)",
    cz: "Večerní zážitek (~4 hodiny)"
  },
  departure: {
    en: "Marsa Alam Hotels / Abu Dabbab Beach",
    de: "Marsa Alam Hotels / Abu Dabbab Strand",
    it: "Hotel di Marsa Alam / Spiaggia di Abu Dabbab",
    ru: "Отели Марса-Алам / Пляж Абу-Даббаб",
    pl: "Hotele w Marsa Alam / Plaża Abu Dabbab",
    cz: "Hotely v Marsa Alam / Pláž Abu Dabbab"
  },
  overview: {
    en: "Experience Abu Dabbab after sunset, when the underwater world transforms and nocturnal marine life becomes active. Guided by a professional dive light, explore octopuses, hunting moray eels, lionfish, and Spanish dancers on a safe, shore-entry night adventure.",
    de: "Erleben Sie Abu Dabbab nach Sonnenuntergang, wenn die Unterwasserwelt erwacht und nachtaktive Meeresbewohner aktiv werden. Erkunden Sie Oktopusse, Muränen und Rotfeuerfische mit Ihrer Tauchlampe.",
    it: "Vivi Abu Dabbab dopo il tramonto, quando il mondo sottomarino si trasforma e la vita notturna si risveglia. Esplora polpi, murene in caccia e pesci leone guidato dalla tua torcia.",
    ru: "Исследуйте Абу-Даббаб после заката, когда подводный мир оживает. С профессиональным фонарем вы увидите осьминогов, охотящихся мурен, крылаток и других ночных обитателей.",
    pl: "Zobacz Abu Dabbab po zachodzie słońca, gdy świat podwodny budzi się do życia. Z latarką nurkową odkrywaj ośmiornice, polujące mureny i skrzydlice podczas bezpiecznego nurkowania z brzegu.",
    cz: "Zažijte Abu Dabbab po západu slunce, kdy se podmořský svět promění a noční živočichové ožívají. S potápěčskou svítilnou objevujte chobotnice, lovící murény a perutýny."
  },
  highlights: {
    en: [
      "1 Guided Shore Night Dive at Abu Dabbab Bay",
      "High-power professional dive torch included",
      "Observe nocturnal creatures: Octopuses, Moray Eels, Lionfish & Nudibranchs",
      "Easy shore entry directly from the beach after sunset",
      "Small intimate group (Maximum 4 divers per guide)",
      "PADI or SSI Certified Dive Instructor specializing in Night Dives",
      "Full rental equipment included (Discount if using own gear)",
      "Official Abu Dabbab Beach Entry Ticket included"
    ],
    de: [
      "1 Geführter Nachttauchgang vom Strand in Abu Dabbab",
      "Professionelle High-Power Tauchlampe inklusive",
      "Beobachten Sie nachtaktive Tiere: Oktopusse, Muränen, Rotfeuerfische",
      "Bequemer Einstieg vom Strand direkt nach Sonnenuntergang",
      "Kleine Gruppe (Maximal 4 Taucher pro Guide)",
      "PADI/SSI-zertifizierter Tauchlehrer für Nachttauchgänge",
      "Komplette Ausrüstung inklusive (Rabatt bei eigener Ausrüstung)",
      "Eintrittsticket für den Strand von Abu Dabbab inklusive"
    ],
    it: [
      "1 Immersione notturna guidata da riva a Abu Dabbab",
      "Torcia subacquea professionale ad alta potenza inclusa",
      "Osserva creature notturne: Polpi, murene, pesci leone e nudibranchi",
      "Facile ingresso da spiaggia subito dopo il tramonto",
      "Gruppo ridotto (Massimo 4 sub per guida)",
      "Istruttore certificato PADI o SSI specializzato in notturne",
      "Attrezzatura completa inclusa (Sconto con attrezzatura propria)",
      "Biglietto d'ingresso alla spiaggia di Abu Dabbab incluso"
    ],
    ru: [
      "1 ночное погружение с гидом с берега в бухте Абу-Даббаб",
      "Мощный профессиональный подводный фонарь включен",
      "Наблюдение за ночной жизнью: осьминоги, мурены, крылатки",
      "Удобный заход с пляжа сразу после заката",
      "Маленькая группа (Максимум 4 дайвера на гида)",
      "Инструктор PADI или SSI по ночным погружениям",
      "Полный комплект аренды снаряжения (Скидка со своим)",
      "Входной билет на пляж Абу-Даббаб включен"
    ],
    pl: [
      "1 nocne nurkowanie z przewodnikiem z brzegu w Abu Dabbab",
      "Profesjonalna latarka nurkowa dużej mocy w cenie",
      "Obserwacja nocnych stworzeń: Ośmiornice, mureny, skrzydlice",
      "Łatwe wejście z plaży tuż po zachodzie słońca",
      "Kameralna grupa (Maksymalnie 4 nurków na przewodnika)",
      "Certyfikowany instruktor PADI/SSI do nurkowań nocnych",
      "Pełny sprzęt w cenie (Zniżka przy własnym sprzęcie)",
      "Bilet wstępu na plażę Abu Dabbab w cenie"
    ],
    cz: [
      "1 noční ponor s průvodcem z bờehu v zálivu Abu Dabbab",
      "Výkonná potápěčská svítilna v ceně",
      "Pozorování nočních živočichů: Chobotnice, murény, perutýni",
      "Snadný vstup z pláže hned po západu slunce",
      "Malá skupina (Maximálně 4 potápěči na průvodce)",
      "Instruktor PADI/SSI pro noční ponory",
      "Kompletní výstroj v ceně (Sleva při vlastní výstroji)",
      "Vstupenka na pláž Abu Dabbab v ceně"
    ]
  },
  included: {
    en: [
      "1 Guided night dive (Shore entry)",
      "Professional high-power dive torch",
      "Full scuba diving equipment rental (wetsuit, tanks, weights)",
      "Official Abu Dabbab Beach Entry Ticket",
      "Hotel pickup & drop-off (A/C vehicle)",
      "Fresh mineral water & refreshments",
      "PADI or SSI Instructor (Max 4 divers per group)",
      "Safety stop support"
    ],
    de: [
      "1 Geführter Nachttauchgang (Strandeinstieg)",
      "Professionelle High-Power Tauchlampe",
      "Komplette Tauchausrüstung (Neoprenanzug, Flaschen, Blei)",
      "Eintrittsticket für den Strand von Abu Dabbab",
      "Hotelabholung & Rückbringung (Klimatisiertes Fahrzeug)",
      "Frisches Mineralwasser & Erfrischungen",
      "PADI/SSI Tauchlehrer (Max. 4 Taucher pro Gruppe)",
      "Sicherheitsstopp-Unterstützung"
    ],
    it: [
      "1 Immersione notturna guidata (Ingresso da riva)",
      "Torcia subacquea professionale",
      "Noleggio attrezzatura subacquea completa (Muta, bombole, zavorra)",
      "Biglietto d'ingresso alla spiaggia di Abu Dabbab",
      "Transfer da e per l'hotel (Veicolo climatizzato)",
      "Acqua minerale e rinfreschi",
      "Istruttore PADI/SSI (Max 4 sub per gruppo)",
      "Supporto durante la sosta di sicurezza"
    ],
    ru: [
      "1 ночное погружение с гидом (с берега)",
      "Профессиональный подводный фонарь",
      "Полная аренда оборудования (Гидрокостюм, баллоны, грузы)",
      "Входной билет на пляж Абу-Даббаб",
      "Трансфер из отеля и обратно (кондиционируемый авто)",
      "Минеральная вода и напитки",
      "Инструктор PADI или SSI (Макс. 4 человек)",
      "Остановки безопасности"
    ],
    pl: [
      "1 Nocne nurkowanie z przewodnikiem (wejście z brzegu)",
      "Profesjonalna latarka nurkowa",
      "Wypożyczenie pełnego sprzętu (Pianka, butle, balast)",
      "Bilet wstępu na plażę Abu Dabbab",
      "Odbiór i powrót do hotelu (Klimatyzowany pojazd)",
      "Świeża woda mineralna i napoje",
      "Instruktor PADI/SSI (Maks. 4 nurków w grupie)",
      "Wsparcie podczas przystanku bezpieczeństwa"
    ],
    cz: [
      "1 Noční ponor s průvodcem (vstup z pláže)",
      "Profesionální potápěčská svítilna",
      "Zapůjčení kompletní výstroje (Neopren, lahve, zátěž)",
      "Vstupenka na pláž Abu Dabbab",
      "Vyzvednutí a návrat do hotelu (Klimatizovaný vůz)",
      "Minerální voda a občerstvení",
      "Instruktor PADI/SSI (Max. 4 potápěči ve skupině)",
      "Podpora při bezpečnostní zastávce"
    ]
  },
  whatToBring: {
    en: [
      "Diving certification (Digital copy on phone accepted)",
      "Logbook (digital or physical)",
      "Towel",
      "Warm hoodie or jacket (Highly recommended after the night dive)",
      "Dry clothes",
      "Personal medication if needed"
    ],
    de: [
      "Tauchschein (Digitale Kopie auf dem Handy akzeptiert)",
      "Logbuch (digital oder physisch)",
      "Handtuch",
      "Warmer Pullover oder Jacke (Sehr empfohlen nach dem Tauchgang)",
      "Trockene Kleidung",
      "Persönliche Medikamente bei Bedarf"
    ],
    it: [
      "Brevetto sub (Accettata copia digitale su telefono)",
      "Logbook (digitale o fisico)",
      "Asciugamano",
      "Felpa o giacca calda (Consigliata vivamente dopo l'immersione)",
      "Abiti asciutti",
      "Farmaci personali se necessari"
    ],
    ru: [
      "Сертификат дайвера (Принимается цифровая копия)",
      "Логбук (цифровой или бумажный)",
      "Полотенце",
      "Теплая кофта или куртка (Настоятельно рекомендуется после погружения)",
      "Сухая одежда",
      "Личные медикаменты"
    ],
    pl: [
      "Certyfikat nurkowy (Akceptowana kopia cyfrowa w telefonie)",
      "Logbook (cyfrowy lub fizyczny)",
      "Ręcznik",
      "Ciepła bluza lub kurtka (Gorąco polecane po nurkowaniu)",
      "Suche ubrania na zmianę",
      "Leki osobiste w razie potrzeby"
    ],
    cz: [
      "Potápěčská certifikace (Akceptována digitální kopie v telefonu)",
      "Logbook (digitální nebo fyzický)",
      "Ručník",
      "Teplá mikina nebo bunda (Doporučeno po nočním ponoru)",
      "Suché oblečení",
      "Osobní léky v případě potřeby"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Not allowed — Night dives are restricted to certified divers only",
      de: "Nicht erlaubt — Nachttauchgänge nur für zertifizierte Taucher",
      it: "Non consentito — Immersioni notturne riservate ai soli sub certificati",
      ru: "Не допускается — Ночные погружения только для сертифицированных дайверов",
      pl: "Niedozwolone — Nurkowania nocne tylko dla certyfikowanych nurków",
      cz: "Není povoleno — Noční ponory pouze pro certifikované potápěče"
    },
    from5to10: {
      en: "Not allowed — Minimum certification limits apply",
      de: "Nicht erlaubt — Mindestalter für Zertifizierung gilt",
      it: "Non consentito — Limiti di brevetto applicati",
      ru: "Не допускается — Ограничения по сертификации",
      pl: "Niedozwolone — Ograniczenia certyfikacji",
      cz: "Není povoleno — Platí věková omezení certifikace"
    },
    over10: {
      en: "Certified Junior Divers (10+ yrs with buoyancy check): Full adult rate applies",
      de: "Zertifizierte Junior-Taucher (ab 10 J. mit Tarierungs-Check): Voller Tarif",
      it: "Junior Diver Certificati (da 10 anni): Tariffa intera",
      ru: "Сертифицированные Junior дайверы (с 10 лет): Полный тариф",
      pl: "Certyfikowani Junior Nurkowie (od 10 lat): Pełna stawka",
      cz: "Certifikovaní Junior potápěči (od 10 let): Plná cena"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Evening Pickup — 05:00 PM",
        de: "Abendabholung — 17:00 Uhr",
        it: "Transfer Serale — 17:00",
        ru: "Вечерний трансфер — 17:00",
        pl: "Wieczorny odbiór — 17:00",
        cz: "Večerní vyzvednutí — 17:00"
      },
      description: {
        en: "Pickup from hotel and transfer by comfortable A/C vehicle to Abu Dabbab Beach.",
        de: "Abholung vom Hotel und Fahrt im klimatisierten Fahrzeug zum Strand von Abu Dabbab.",
        it: "Pick-up dall'hotel e trasferimento al mare di Abu Dabbab in veicolo climatizzato.",
        ru: "Трансфер из отеля на авто с кондиционером на пляж Абу-Даббаб.",
        pl: "Odbiór z hotelu i przejazd do Zatoki Abu Dabbab.",
        cz: "Vyzvednutí v hotelu a přesun na pláž Abu Dabbab."
      }
    },
    {
      step: "02",
      title: {
        en: "Arrival & Gear Setup — 05:45 PM",
        de: "Ankunft & Ausrüstungsaufbau — 17:45 Uhr",
        it: "Arrivo e Preparazione — 17:45",
        ru: "Прибытие и сборка оборудования — 17:45",
        pl: "Przyjazd i przygotowanie sprzętu — 17:45",
        cz: "Příjezd a příprava výstroje — 17:45"
      },
      description: {
        en: "Arrive at Abu Dabbab, prepare your equipment and perform functional check on your dive torch.",
        de: "Ankunft in Abu Dabbab, Vorbereitung der Ausrüstung und Funktionstest der Tauchlampe.",
        it: "Arrivo a Abu Dabbab, preparazione dell'attrezzatura e controllo funzionale della torcia.",
        ru: "Прибытие, подгонка снаряжения и проверка работы подводных фонарей.",
        pl: "Przyjazd do Abu Dabbab, przygotowanie sprzętu i sprawdzanie latarek.",
        cz: "Příjezd do Abu Dabbab, příprava výstroje a kontrola svítilen."
      }
    },
    {
      step: "03",
      title: {
        en: "Night Dive Briefing — 06:00 PM",
        de: "Nachttauchgang Briefing — 18:00 Uhr",
        it: "Briefing Immersione Notturna — 18:00",
        ru: "Брифинг перед ночным погружением — 18:00",
        pl: "Odprawa przed nurkowaniem nocnym — 18:00",
        cz: "Briefing před nočním ponorem — 18:00"
      },
      description: {
        en: "Instructor explains planned route, maximum depth (up to 20m), light signals, buddy check and eco-rules.",
        de: "Taucherklärung zu Route, Max. Tiefe (bis 20m), Lichtsignalen und Umweltregeln.",
        it: "Spiegazione del percorso, profondità max (20m), segnali luminosi e regole ambientali.",
        ru: "Разбор маршрута, глубины (до 20м), световых сигналов и правил экологии.",
        pl: "Omówienie trasy, głębokości (do 20m), sygnałów świetlnych i zasad ekologii.",
        cz: "Vysvětlení trasy, max. hloubky (do 20m), světelných signálů a pravidel."
      }
    },
    {
      step: "04",
      title: {
        en: "The Night Dive — 06:15 PM",
        de: "Der Nachttauchgang — 18:15 Uhr",
        it: "L'Immersione Notturna — 18:15",
        ru: "Ночное погружение — 18:15",
        pl: "Nocne Nurkowanie — 18:15",
        cz: "Noční ponor — 18:15"
      },
      description: {
        en: "Enter directly from the beach after sunset to explore inner reef edge and sandy areas (~45-50 min).",
        de: "Strandeinstieg nach Sonnenuntergang. Erkundung der Riffkante und Sandflächen (~45-50 Min).",
        it: "Ingresso da spiaggia dopo il tramonto ed esplorazione del reef e fondale sabbioso (~45-50 min).",
        ru: "Заход с пляжа после заката. Исследование рифовой стены и песка (~45-50 минут).",
        pl: "Wejście z plaży po zachodzie słońca. Odkrywanie rafy i piaszczystych obszarów (~45-50 min).",
        cz: "Vstup z pláže po západu slunce. Prozkoumávání okraje útesu a písků (~45-50 min)."
      }
    },
    {
      step: "05",
      title: {
        en: "Exit & Pack Up — 07:15 PM",
        de: "Ausstieg & Einpacken — 19:15 Uhr",
        it: "Uscita e Risistemazione — 19:15",
        ru: "Выход и сбор снаряжения — 19:15",
        pl: "Wyjście z wody i pakowanie — 19:15",
        cz: "Výstup a balení — 19:15"
      },
      description: {
        en: "Exit the water, dry off, pack equipment and prepare for departure.",
        de: "Aussteigen, Abtrocknen, Ausrüstung verpacken und Abfahrt vorbereiten.",
        it: "Uscita dall'acqua, asciugatura, confezionamento attrezzatura e preparazione al rientro.",
        ru: "Выход из воды, сборы снаряжения и подготовка к обратной дороге.",
        pl: "Wyjście z wody, wysuszenie się, spakowanie sprzętu i przygotowanie do powrotu.",
        cz: "Výstup z vody, osušení, zabalení výstroje a příprava k odjezdu."
      }
    },
    {
      step: "06",
      title: {
        en: "Hotel Drop-off — 08:00 PM",
        de: "Hotelabgabe — 20:00 Uhr",
        it: "Transfer Hotel — 20:00",
        ru: "Возвращение в отель — 20:00",
        pl: "Powrót do hotelu — 20:00",
        cz: "Návrat do hotelu — 20:00"
      },
      description: {
        en: "Relaxing transfer back to your resort.",
        de: "Entspannter Rücktransfer zu Ihrem Hotel.",
        it: "Trasferimento di ritorno al tuo resort.",
        ru: "Комфортный трансфер обратно в отель.",
        pl: "Wygodny transfer powrotny do hotelu.",
        cz: "Pohodlný transfer zpět do hotelu."
      }
    }
  ],
  paymentNote: {
    en: "Pay after the trip — no online payment or deposit required. Custom discount applied if you bring your own equipment.",
    de: "Bezahlung nach dem Ausflug — keine Online-Zahlung erforderlich. Rabatt bei eigener Ausrüstung.",
    it: "Paga dopo il tour — nessun pagamento online richiesto. Sconto se porti la tua attrezzatura.",
    ru: "Оплата после поездки — без предоплаты. Скидка при наличии собственного снаряжения.",
    pl: "Płatność po wycieczce — bez opłat online. Zniżka przy własnym sprzęcie.",
    cz: "Platba až po výletu — bez zálohy. Při vlastním vybavení bude uplatněna sleva."
  },
  disclaimer: {
    en: "Requires good buoyancy control and comfort in low-light conditions. Maximum depth is 20m. Never touch, chase, or shine light directly into animals' eyes. Instructor holds full authority to cancel or modify dive based on weather or safety conditions.",
    de: "Gute Tarierung und Komfort bei Dunkelheit erforderlich. Maximale Tiefe 20m. Niemals Tiere direkt anstrahlen oder anfassen. Der Tauchlehrer kann den Tauchgang aus Sicherheitsgründen anpassen.",
    it: "Richiede buon controllo dell'assetto e tranquillità al buio. Profondità max 20m. Vietato puntare la torcia negli occhi degli animali o toccarli.",
    ru: "Требуется хороший контроль плавучести и комфорт в темноте. Макс. глубина 20м. Запрещено светить прямо в глаза животным или трогать их.",
    pl: "Wymagana dobra pływalność i komfort w ciemności. Maks. głębokość 20m. Zakaz świecenia prosto w oczy zwierząt i dotykania ich.",
    cz: "Vyžaduje dobrou vyváženost a komfort ve tmě. Max. hloubka 20m. Přísný zákaz svícení do očí zvířat a dotýkání se."
  },
  images: {
    featured: "/images/tours/night-dive-card.webp",
    gallery: [
      "/images/tours/night-dive-1.webp",
      "/images/tours/night-dive-2.webp",
      "/images/tours/night-dive-3.webp"
    ]
  }
},
{
  id: "padi-open-water-diver",
  slug: "padi-open-water-diver-course",
  type: "course",
  title: {
    en: "PADI Open Water Diver Course",
    de: "PADI Open Water Diver Kurs",
    it: "Corso PADI Open Water Diver",
    ru: "Курс PADI Open Water Diver",
    pl: "Kurs PADI Open Water Diver",
    cz: "Kurz PADI Open Water Diver"
  },
  subtitle: {
    en: "Premium Small-Group Certification Course (Max 2 Students per Instructor)",
    de: "Premium-Zertifizierungskurs in kleinen Gruppen (Max. 2 Schüler pro Tauchlehrer)",
    it: "Corso di Certificazione Premium in Piccoli Gruppi (Max 2 Studenti per Istruttore)",
    ru: "Премиум-курс сертификации в малых группах (Макс. 2 студента на инструктора)",
    pl: "Certyfikowany kurs premium w małych grupach (Maks. 2 studentów na instruktora)",
    cz: "Certifikační kurz premium v malých skupinách (Max. 2 studenti na instruktora)"
  },
  category: {
    en: "Diving Courses",
    de: "Tauchkurse",
    it: "Corsi Subacquei",
    ru: "Курсы Дайвинга",
    pl: "Kursy Nurkowe",
    cz: "Potápěčské Kurzy"
  },
  price: {
    amount: 420,
    currency: "€",
    unit: {
      en: "per person (PADI eLearning & Full Gear Included)",
      de: "pro Person (PADI eLearning & Ausrüstung inklusive)",
      it: "per persona (PADI eLearning e Attrezzatura Inclusi)",
      ru: "за человека (PADI eLearning и снаряжение включены)",
      pl: "za osobę (PADI eLearning i sprzęt w cenie)",
      cz: "za osobu (PADI eLearning a výstroj v ceně)"
    }
  },
  duration: {
    en: "3–4 Days (8:00 AM – 1:00 PM)",
    de: "3–4 Tage (8:00 bis 13:00 Uhr)",
    it: "3–4 Giorni (8:00 – 13:00)",
    ru: "3–4 Дня (с 8:00 до 13:00)",
    pl: "3–4 Dni (8:00 – 13:00)",
    cz: "3–4 Dny (8:00 – 13:00)"
  },
  departure: {
    en: "Abu Dabbab Bay / Marsa Alam Hotels",
    de: "Abu Dabbab Bucht / Marsa Alam Hotels",
    it: "Baia di Abu Dabbab / Hotel di Marsa Alam",
    ru: "Бухта Абу-Дабаб / Отели Марса-Алам",
    pl: "Zatoka Abu Dabbab / Hotele w Marsa Alam",
    cz: "Zátoka Abu Dabbab / Hotely v Marsa Alam"
  },
  overview: {
    en: "Ready to stop watching the Red Sea from the surface and learn how to explore it yourself? The PADI Open Water Diver course combines online theory, confined-water practice and four open-water dives in Abu Dabbab with maximum 2 students per instructor.",
    de: "Bereit, das Rote Meer nicht mehr nur von der Oberfläche aus zu betrachten? Der PADI Open Water Diver Kurs kombiniert Online-Theorie, Übungen im flachen Wasser und 4 Freiwassertauchgänge in Abu Dabbab mit max. 2 Schülern pro Tauchlehrer.",
    it: "Pronto a esplorare il Mar Rosso da vicino? Il corso PADI Open Water Diver unisce teoria online, pratica in acque delimitate e 4 immersioni in mare aperto a Abu Dabbab con massimo 2 studenti per istruttore.",
    ru: "Готовы перестать смотреть на Красное море с поверхности? Курс PADI Open Water Diver сочетает онлайн-теорию, практику на мелководье и 4 учебных погружения в Абу-Даббаб (макс. 2 студента на инструктора).",
    pl: "Gotowy, by poznać podwodny świat Morza Czerwonego? Kurs PADI Open Water Diver łączy teorię online, praktykę na płytkiej wodzie oraz 4 nurkowania w Abu Dabbab (maks. 2 studentów na instruktora).",
    cz: "Jste připraveni prozkoumat podmořský svět Rudého moře? Kurz PADI Open Water Diver kombinuje online teorii, praxi v mělkém prostředí a 4 ponory v Abu Dabbab (max. 2 studenti na instruktora)."
  },
  highlights: {
    en: [
      "Maximum 2 students per instructor for ultimate personal attention",
      "Official PADI digital eLearning included to study at your own pace",
      "Confined water skills practice directly from Abu Dabbab Beach",
      "4 full open-water training dives exploring Red Sea coral reefs",
      "Certification allows diving down to 18 metres worldwide",
      "Full high-quality scuba equipment rental included",
      "Official Abu Dabbab Beach entry fees included",
      "Daily round-trip hotel pickup & drop-off included"
    ],
    de: [
      "Maximal 2 Schüler pro Tauchlehrer für maximale persönliche Betreuung",
      "Offizielles PADI digitales eLearning inklusive für flexibles Lernen",
      "Übungen im flachen Flachwasser direkt am Strand von Abu Dabbab",
      "4 Freiwassertauchgänge zur Erkundung der Korallenriffe",
      "Zertifizierung berechtigt zum Tauchen bis zu 18 Metern weltweit",
      "Komplette hochwertige Tauchausrüstung inklusive",
      "Eintrittsticket für den Strand von Abu Dabbab inklusive",
      "Täglicher Hin- und Rücktransfer vom Hotel inklusive"
    ],
    it: [
      "Massimo 2 studenti per istruttore per un'attenzione personalizzata",
      "PADI digital eLearning ufficiale incluso per studiare con i tuoi tempi",
      "Esercitazioni in acque delimitate dalla spiaggia di Abu Dabbab",
      "4 immersioni di addestramento in mare aperto per esplorare il reef",
      "Certificazione valida per immersioni fino a 18 metri in tutto il mondo",
      "Noleggio attrezzatura subacquea completa di alta qualità inclusa",
      "Biglietto d'ingresso alla spiaggia di Abu Dabbab incluso",
      "Trasferimento giornaliero da e per l'hotel incluso"
    ],
    ru: [
      "Максимум 2 студента на инструктора для максимального внимания",
      "Официальный цифровой PADI eLearning включен в стоимость",
      "Практика навыков на мелководье прямо с пляжа Абу-Даббаб",
      "4 полноценных учебных погружения в открытой воде на рифе",
      "Сертификат позволяет погружаться до 18 метров по всему миру",
      "Полная аренда высококачественного снаряжения включена",
      "Входной билет на пляж Абу-Даббаб включен",
      "Ежедневный трансфер из отеля и обратно включен"
    ],
    pl: [
      "Maksymalnie 2 studentów na instruktora dla maksymalnej uwagi",
      "Oficjalny PADI eLearning w cenie, by uczyć się w własnym tempie",
      "Ćwiczenia w płytkiej wodzie bezpośrednio z plaży Abu Dabbab",
      "4 nurkowania szkoleniowe na otwartej wodzie na rafie",
      "Certyfikat uprawniający do nurkowania do 18 metrów na całym świecie",
      "Wypożyczenie pełnego, wysokiej jakości sprzętu w cenie",
      "Bilet wstępu na plażę Abu Dabbab w cenie",
      "Codzienny transfer z i do hotelu w cenie"
    ],
    cz: [
      "Maximálně 2 studenti na instruktora pro osobní přístup",
      "Oficiální PADI digital eLearning v ceně pro studium vlastním tempem",
      "Trénink dovedností v mělkém prostředí z pláže Abu Dabbab",
      "4 výcvikové ponory na otevřené vodě při prozkoumávání útesu",
      "Certifikace umožňuje potápění až do 18 metrů po celém světě",
      "Zapůjčení kompletního kvalitního vybavení v ceně",
      "Vstupenka na pláž Abu Dabbab v ceně",
      "Denní zpáteční transfer z hotelu v ceně"
    ]
  },
  included: {
    en: [
      "Official PADI eLearning access code & digital materials",
      "PADI Certification processing fees",
      "Maximum 2 students per instructor ratio",
      "Confined-water beach training sessions",
      "4 Full open-water training dives",
      "Full high-quality scuba equipment rental (wetsuit, BCD, regulator, mask, fins, tanks & weights)",
      "All Abu Dabbab Beach entry fees",
      "Daily round-trip hotel pickup & drop-off (A/C vehicle)",
      "Professional certified PADI Diving Instructor"
    ],
    de: [
      "Zugangscode zu offiziellem PADI eLearning & Unterlagen",
      "PADI Zertifizierungsgebühren",
      "Maximal 2 Schüler pro Tauchlehrer",
      "Übungseinheiten im Flachwasser am Strand",
      "4 vollständige Freiwassertauchgänge",
      "Komplette Tauchausrüstung (Neoprenanzug, Tarrierweste, Atemregler, Maske, Flossen, Flaschen & Blei)",
      "Alle Eintrittsgebühren für die Bucht von Abu Dabbab",
      "Täglicher Hotelabholung & Rückbringung (Klimatisiert)",
      "Zertifizierter professioneller PADI Tauchlehrer"
    ],
    it: [
      "Codice d'accesso PADI eLearning ufficiale e materiale digitale",
      "Tasse di certificazione PADI",
      "Rapporto massimo 2 studenti per istruttore",
      "Sessioni di addestramento in acque delimitate da spiaggia",
      "4 immersioni complete di addestramento in mare aperto",
      "Noleggio attrezzatura subacquea completa (muta, BCD, erogatore, maschera, pinne, bombole e zavorra)",
      "Tutti i biglietti d'ingresso alla spiaggia di Abu Dabbab",
      "Transfer giornaliero da e per l'hotel (Veicolo climatizzato)",
      "Istruttore subacqueo PADI professionista certificato"
    ],
    ru: [
      "Доступ к официальному PADI eLearning и цифровые материалы",
      "Сборы за оформление сертификата PADI",
      "Максимальное соотношение: 2 студента на 1 инструктора",
      "Тренировочные занятия на мелководье с пляжа",
      "4 полноценных учебных погружения в открытой воде",
      "Полная аренда снаряжения (гидрокостюм, компенсатор, регулятор, маска, ласты, баллоны, грузы)",
      "Все входные билеты на пляж Абу-Даббаб",
      "Ежедневный трансфер из отеля и обратно (кондиционируемый авто)",
      "Сертифицированный профессиональный инструктор PADI"
    ],
    pl: [
      "Oficjalny kod dostępu do PADI eLearning i materiały cyfrowe",
      "Opłaty za wydanie certyfikatu PADI",
      "Maksymalnie 2 studentów na 1 instruktora",
      "Szkolenia w płytkiej wodzie z plaży",
      "4 pełne nurkowania szkoleniowe na otwartej wodzie",
      "Pełne wypożyczenie sprzętu (pianka, JKR, automat, maska, płetwy, butle i balast)",
      "Wszystkie opłaty za wstęp do zatoki Abu Dabbab",
      "Codzienny odbiór i powrót do hotelu (Klimatyzowany pojazd)",
      "Certyfikowany profesjonalny instruktor PADI"
    ],
    cz: [
      "Prístupový kód k oficiálnímu PADI eLearning a materiály",
      "Poplatky za zpracování certifikace PADI",
      "Maximální poměr 2 studenti na 1 instruktora",
      "Tréninky v mělkém prostředí z pláže",
      "4 plné výcvikové ponory na otevřené vodě",
      "Zapůjčení kompletní výstroje (neopren, žaket, automatika, maska, ploutve, lahve a zátěž)",
      "Všechny vstupní poplatky na pláž Abu Dabbab",
      "Denní vyzvednutí a návrat do hotelu (Klimatizovaný vůz)",
      "Certifikovaný profesionální instruktor PADI"
    ]
  },
  whatToBring: {
    en: [
      "Passport or official ID card",
      "Swimwear & towel",
      "Sunscreen (reef-safe preferred)",
      "Hat & sunglasses",
      "Personal medication if needed"
    ],
    de: [
      "Reisepass oder offizieller Personalausweis",
      "Badebekleidung & Handtuch",
      "Sonnenschutz (rifftfreundlich bevorzugt)",
      "Hut & Sonnenbrille",
      "Persönliche Medikamente bei Bedarf"
    ],
    it: [
      "Passaporto o carta d'identità ufficiale",
      "Costume da bagno e asciugamano",
      "Protezione solare (preferibilmente reef-safe)",
      "Cappello e occhiali da sole",
      "Farmaci personali se necessari"
    ],
    ru: [
      "Паспорт или удостоверение личности",
      "Купальник/плавки и полотенце",
      "Солнцезащитный крем (желательно безопасный для рифов)",
      "Головной убор и солнцезащитные очки",
      "Личные медикаменты при необходимости"
    ],
    pl: [
      "Paszport lub oficjalny dowód osobisty",
      "Stroje kąpielowe i ręcznik",
      "Krem z filtrem (najlepiej bezpieczny dla rafy)",
      "Czapka i okulary przeciwsłoneczne",
      "Leki osobiste w razie potrzeby"
    ],
    cz: [
      "Cestovní pas nebo oficiální průkaz totožnosti",
      "Plavky a ručník",
      "Opalovací krém (šetrný k útesům)",
      "Klobouk a sluneční brýle",
      "Osobní léky v případě potřeby"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Not allowed — Minimum age for PADI Open Water course is 10 years",
      de: "Nicht erlaubt — Mindestalter für den PADI Open Water Kurs beträgt 10 Jahre",
      it: "Non consentito — L'età minima per il corso PADI Open Water è 10 anni",
      ru: "Не допускается — Минимальный возраст для курса PADI Open Water — 10 лет",
      pl: "Niedozwolone — Minimalny wiek na kurs PADI Open Water to 10 lat",
      cz: "Není povoleno — Minimální věk pro kurs PADI Open Water je 10 let"
    },
    from5to10: {
      en: "Not allowed — Children must be at least 10 years old to start certification",
      de: "Nicht erlaubt — Kinder müssen mindestens 10 Jahre alt sein",
      it: "Non consentito — I bambini devono avere almeno 10 anni",
      ru: "Не допускается — Детям должно исполниться 10 лет для начала обучения",
      pl: "Niedozwolone — Dzieci muszą mieć ukończone co najmniej 10 lat",
      cz: "Není povoleno — Dětem musí být minimálně 10 let"
    },
    over10: {
      en: "Junior Open Water Diver (10–14 yrs): Full adult rate applies (Max depth 12m for 10-11 yrs / 18m for 12-14 yrs)",
      de: "Junior Open Water Diver (10–14 J.): Voller Tarif (Max. Tiefe 12m für 10-11 J. / 18m für 12-14 J.)",
      it: "Junior Open Water Diver (10–14 anni): Tariffa intera (Profondità max 12m per 10-11 anni / 18m per 12-14 anni)",
      ru: "Junior Open Water Diver (10–14 лет): Полный тариф (Макс. глубина 12м для 10-11 лет / 18м для 12-14 лет)",
      pl: "Junior Open Water Diver (10–14 lat): Pełna stawka (Maks. głębokość 12m dla 10-11 lat / 18m dla 12-14 lat)",
      cz: "Junior Open Water Diver (10–14 let): Plná cena (Max. hloubka 12m pro 10-11 let / 18m pro 12-14 let)"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Day 1: Theory & Confined Water — 08:00 AM",
        de: "Tag 1: Theorie & Flachwasser — 08:00 Uhr",
        it: "Giorno 1: Teoria e Acque Delimitate — 08:00",
        ru: "День 1: Теория и практика на мелководье — 08:00",
        pl: "Dzień 1: Teoria i płytka woda — 08:00",
        cz: "Den 1: Teorie a mělká voda — 08:00"
      },
      description: {
        en: "Pickup from hotel to Abu Dabbab Bay. Complete digital theory review, gear setup, breathing practice, mask clearing and buoyancy control in shallow water.",
        de: "Abholung vom Hotel zur Abu Dabbab Bucht. Wiederholung der Theorie, Aufbau der Ausrüstung, Atemübungen und Tarierung im Flachwasser.",
        it: "Pick-up dall'hotel per Abu Dabbab. Ripasso teoria, montaggio attrezzatura, respirazione e controllo dell'assetto in acqua bassa.",
        ru: "Трансфер в Абу-Даббаб. Разбор теории, сборка снаряжения, упражнения на дыхание, очистка маски и плавучесть на мелководье.",
        pl: "Odbiór z hotelu do Abu Dabbab. Przegląd teorii, montaż sprzętu, ćwiczenia oddechowe i kontrola pływalności w płytkiej wodzie.",
        cz: "Vyzvednutí z hotelu do Abu Dabbab. Opakování teorie, příprava výstroje, dýchací cvičení a vyvážení v mělkém prostředí."
      }
    },
    {
      step: "02",
      title: {
        en: "Day 2: Open Water Dives 1 & 2 — 08:00 AM",
        de: "Tag 2: Freiwassertauchgänge 1 & 2 — 08:00 Uhr",
        it: "Giorno 2: Immersioni 1 e 2 — 08:00",
        ru: "День 2: Погружения 1 и 2 в открытой воде — 08:00",
        pl: "Dzień 2: Nurkowania 1 i 2 na otwartej wodzie — 08:00",
        cz: "Den 2: Ponory 1 a 2 na otevřené vodě — 08:00"
      },
      description: {
        en: "First real ocean dives in Abu Dabbab Bay. Practice emergency procedures, navigation, and marine life exploration down to 12 metres.",
        de: "Erste echte Tauchgänge in der Bucht von Abu Dabbab. Übung von Sicherheitsverfahren, Navigation und Erkundung der Unterwasserwelt bis 12m.",
        it: "Prime vere immersioni nella baia di Abu Dabbab. Pratica di procedure d'emergenza, navigazione ed esplorazione del reef fino a 12 metri.",
        ru: "Первые настоящие погружения в бухте Абу-Даббаб. Отработка аварийных навыков, навигация и исследование рифа до 12 метров.",
        pl: "Pierwsze nurkowania w zatoce Abu Dabbab. Ćwiczenie procedur bezpieczeństwa, nawigacji i obserwacja rafy do 12 metrów.",
        cz: "První opravdové ponory v zátoce Abu Dabbab. Nácvik bezpečnostních postupy, navigace a prozkoumávání útesu do 12 metrů."
      }
    },
    {
      step: "03",
      title: {
        en: "Day 3: Open Water Dives 3 & 4 — 08:00 AM",
        de: "Tag 3: Freiwassertauchgänge 3 & 4 — 08:00 Uhr",
        it: "Giorno 3: Immersioni 3 e 4 — 08:00",
        ru: "День 3: Погружения 3 и 4 в открытой воде — 08:00",
        pl: "Dzień 3: Nurkowania 3 i 4 na otwartej wodzie — 08:00",
        cz: "Den 3: Ponory 3 a 4 na otevřené vodě — 08:00"
      },
      description: {
        en: "Final qualification dives down to maximum 18 metres. Demonstrate full skill mastery, buoyancy control and underwater communication.",
        de: "Abschlusstauchgänge bis maximal 18 Meter. Beherrschung aller Fähigkeiten, Tarierung und Unterwasserkommunikation demonstrieren.",
        it: "Immersioni finali di qualifica fino a 18 metri. Dimostrazione di piena padronanza delle abilità, assetto e comunicazione.",
        ru: "Финальные погружения до 18 метров. Демонстрация всех навыков, идеального контроля плавучести и связи под водой.",
        pl: "Finałowe nurkowania do 18 metrów. Demonstrowanie opanowania umiejętności, pływalności i komunikacji pod wodą.",
        cz: "Závěrečné kvalifikační ponory do 18 metrů. Prokázání plného zvládnutí dovedností, vyvážení a podmořské komunikace."
      }
    },
    {
      step: "04",
      title: {
        en: "Day 4: Optional Day / Certification — Flexible",
        de: "Tag 4: Optionaler Tag / Zertifizierung — Flexibel",
        it: "Giorno 4: Giorno Opzionale / Certificazione — Flessibile",
        ru: "День 4: Дополнительный день / Сертификация — По графику",
        pl: "Dzień 4: Dzień opcjonalny / Certyfikacja — Elastycznie",
        cz: "Den 4: Volitelný den / Certifikace — Flexibilní"
      },
      description: {
        en: "Buffer day for additional skill practice if needed, logging dives, and processing your official lifetime PADI Open Water Diver e-Card.",
        de: "Puffertag für zusätzliche Übungen bei Bedarf, Logbuchführen und Ausstellung Ihrer offiziellen PADI e-Card.",
        it: "Giorno di margine per eventuale pratica extra, compilazione logbook e rilascio del brevetto digitale ufficiale PADI.",
        ru: "Резервный день для дополнительной практики при необходимости, заполнения логбука и получения официального e-Card PADI.",
        pl: "Dzień zapasowy na dodatkowe ćwiczenia w razie potrzeby, wpisy do logbooka i wydanie oficjalnej e-Karty PADI.",
        cz: "Rezervní den pro případný dodatečný nácvik, zápis do logbooku a vystavení oficiální e-Karty PADI."
      }
    }
  ],
  paymentNote: {
    en: "Flexible Payment Plan: €200 paid after successfully completing Day 1. Remaining €220 paid upon final course completion. No online deposit required.",
    de: "Flexibler Zahlungsplan: 200 € nach erfolgreichem Abschluss von Tag 1. Die restlichen 220 € nach Kursabschluss. Keine Online-Anzahlung.",
    it: "Pagamento flessibile: €200 pagati dopo il completamento del 1° giorno. I restanti €220 al completamento del corso. Nessun deposito online.",
    ru: "Гибкая оплата: 200 € оплачиваются после 1-го дня. Оставшиеся 220 € — после завершения курса. Без предоплаты.",
    pl: "Elastyczna płatność: 200 € po ukończeniu 1. dnia. Pozostałe 220 € po ukończeniu całego kursu. Bez zaliczek online.",
    cz: "Flexibilní platba: 200 € po úspěšném dokončení 1. dne. Zbývajících 220 € po dokončení kurzu. Bez zálohy."
  },
  disclaimer: {
    en: "Students must be comfortable in the water and meet medical fitness standards. PADI Open Water Diver is a complete certification course and dives cannot be sold as separate daily trips. Instructor holds full authority to modify schedule based on student progress or weather.",
    de: "Schüler müssen schwimmsicher sein und medizinische Voraussetzungen erfüllen. Der Kurs ist ein komplettes Zertifizierungsprogramm. Der Tauchlehrer kann den Zeitplan je nach Lernfortschritt oder Wetter anpassen.",
    it: "Gli studenti devono saper nuotare e soddisfare i requisiti medici. Il corso è un programma completo. L'istruttore si riserva il diritto di modificare il programma in base ai progressi o al meteo.",
    ru: "Студенты должны уметь плавать и соответствовать медицинским требованиям. Курс является целостной программой. Инструктор вправе менять график исходя из успехов ученика или погоды.",
    pl: "Uczestnicy muszą umieć pływać i spełniać wymogi medyczne. Kurs jest pełnym programem certyfikacyjnym. Instruktor ma prawo dostosować harmonogram do postępów lub pogody.",
    cz: "Studenti musí umět plavat a splňovat zdravotní způsobilost. Kurz je ucelený program. Instruktor má právo upravit harmonogram podle pokroků studenta nebo počasí."
  },
  images: {
    featured: "/images/tours/padi-open-water.webp",
    gallery: [
      "/images/tours/padi-open-water-1.webp",
      "/images/tours/padi-open-water-2.webp",
      "/images/tours/padi-open-water-3.webp"
    ]
  }
},
{
  id: "padi-advanced-open-water-diver",
  slug: "padi-advanced-open-water-diver-course",
  type: "course",
  title: {
    en: "PADI Advanced Open Water Diver Course",
    de: "PADI Advanced Open Water Diver Kurs",
    it: "Corso PADI Advanced Open Water Diver",
    ru: "Курс PADI Advanced Open Water Diver",
    pl: "Kurs PADI Advanced Open Water Diver",
    cz: "Kurz PADI Advanced Open Water Diver"
  },
  subtitle: {
    en: "Premium Small-Group Advanced Course (6 Dives & Dolphin House Boat Trip)",
    de: "Premium-Fortgeschrittenenkurs in kleinen Gruppen (6 Tauchgänge & Dolphin House Bootsausflug)",
    it: "Corso Avanzato Premium in Piccoli Gruppi (6 Immersioni e Gita in Barca a Dolphin House)",
    ru: "Премиум-курс для продвинутых в малых группах (6 погружений и выезд в Dolphin House)",
    pl: "Zaawansowany kurs premium w małych grupach (6 nurkowań i rejs do Dolphin House)",
    cz: "Pokročilý kurz premium v malých skupinách (6 ponorů a výlet lodí do Dolphin House)"
  },
  category: {
    en: "Diving Courses",
    de: "Tauchkurse",
    it: "Corsi Subacquei",
    ru: "Курсы Дайвинга",
    pl: "Kursy Nurkowe",
    cz: "Potápěčské Kurzy"
  },
  price: {
    amount: 400,
    currency: "€",
    unit: {
      en: "per person (6 Dives, Boat Trip & Full Gear Included)",
      de: "pro Person (6 Tauchgänge, Bootsfahrt & Ausrüstung inklusive)",
      it: "per persona (6 Immersioni, Gita in Barca e Attrezzatura Inclusi)",
      ru: "за человека (6 погружений, прогулка на корабле и снаряжение включены)",
      pl: "za osobę (6 nurkowań, rejs i sprzęt w cenie)",
      cz: "za osobu (6 ponorů, výlet lodí a výstroj v ceně)"
    }
  },
  duration: {
    en: "2 Days (Shore & Boat Experience)",
    de: "2 Tage (Strand- & Bootserlebnis)",
    it: "2 Giorni (Esperienza da Riva e Barca)",
    ru: "2 Дня (с берега и с корабля)",
    pl: "2 Dni (Z brzegu i z łodzi)",
    cz: "2 Dny (Z pláže i z lodi)"
  },
  departure: {
    en: "Abu Dabbab Bay & Dolphin House (Samadai Reef)",
    de: "Abu Dabbab Bucht & Dolphin House (Samadai Riff)",
    it: "Baia di Abu Dabbab e Dolphin House (Samadai Reef)",
    ru: "Бухта Абу-Дабаб и Dolphin House (Риф Самадай)",
    pl: "Zatoka Abu Dabbab i Dolphin House (Rafa Samadai)",
    cz: "Zátoka Abu Dabbab a Dolphin House (Útes Samadai)"
  },
  overview: {
    en: "Take your diving to the next level with the PADI Advanced Open Water Diver course. Complete 5 Adventure Dives (Peak Buoyancy, Navigation, Deep, Boat & Drift, Underwater Exploration) plus 1 extra guided dive—combining shore diving at Abu Dabbab Bay and boat diving at Dolphin House (Samadai) with maximum 2 students per instructor.",
    de: "Bringen Sie Ihr Tauchen auf das nächste Level mit dem PADI Advanced Open Water Diver Kurs. Absolvieren Sie 5 Adventure-Tauchgänge plus 1 zusätzlichen geführten Tauchgang – eine Kombination aus Strandtauchen in Abu Dabbab und Bootstauchen im Dolphin House (Samadai) mit max. 2 Schülern pro Tauchlehrer.",
    it: "Porta la tua subacquea al livello successivo con il corso PADI Advanced Open Water Diver. Completa 5 Adventure Dives più 1 immersione guidata extra, unendo immersioni da riva a Abu Dabbab e in barca a Dolphin House (Samadai) con massimo 2 studenti per istruttore.",
    ru: "Поднимите свой дайвинг на новый уровень с курсом PADI Advanced Open Water Diver. Пройдите 5 специализированных погружений и 1 дополнительное с гидом, совмещая погружения с берега в Абу-Даббаб и с корабля в Dolphin House (Самадай) при макс. 2 студентах на инструктора.",
    pl: "Wejdź na wyższy poziom nurkowania z kursem PADI Advanced Open Water Diver. Ukończ 5 nurkowań przygodowych oraz 1 dodatkowe nurkowanie z przewodnikiem, łącząc nurkowanie z brzegu w Abu Dabbab i z łodzi w Dolphin House (Samadai) z maks. 2 studentami na instruktora.",
    cz: "Posuňte své potápění na vyšší úroveň s kurzem PADI Advanced Open Water Diver. Dokončete 5 dobrodružných ponorů a 1 dodatečný ponor s průvodcem, kombinující potápění z pláže v Abu Dabbab a z lodi v Dolphin House (Samadai) s max. 2 studenty na instruktora."
  },
  highlights: {
    en: [
      "Maximum 2 students per instructor for personalized instruction",
      "Includes 6 guided dives in total (5 Adventure Dives + 1 Extra Dive)",
      "Deep Dive experience down to maximum 30 metres",
      "Full-day boat trip to Dolphin House (Samadai Reef) with buffet lunch",
      "Shore diving skills practice at Abu Dabbab Bay",
      "Official PADI Advanced eLearning digital materials included",
      "Full high-quality equipment rental & navigation compass included",
      "Marine Park fees & hotel pickup/drop-off fully covered"
    ],
    de: [
      "Maximal 2 Schüler pro Tauchlehrer für persönliche Betreuung",
      "Inklusive 6 geführte Tauchgänge insgesamt (5 Adventure-Tauchgänge + 1 Extra)",
      "Tieftaucherfahrung bis maximal 30 Meter",
      "Ganztägiger Bootsausflug zum Dolphin House (Samadai Riff) inkl. Mittagessen",
      "Fähigkeitstraining vom Strand in der Abu Dabbab Bucht",
      "Offizielles digitales PADI Advanced eLearning-Material inklusive",
      "Komplette hochwertige Ausrüstung & Navigationskompass inklusive",
      "Meerespark-Gebühren & Hotel-Transfer vollständig abgedeckt"
    ],
    it: [
      "Massimo 2 studenti per istruttore per un insegnamento personalizzato",
      "Include 6 immersioni guidate in totale (5 Adventure Dives + 1 Extra)",
      "Esperienza di immersione profonda fino a un massimo di 30 metri",
      "Gita in barca di un giorno intero a Dolphin House (Samadai) con pranzo a buffet",
      "Pratica delle abilità da riva nella baia di Abu Dabbab",
      "Materiali digitali ufficiali PADI Advanced eLearning inclusi",
      "Noleggio attrezzatura completa di alta qualità e bussola inclusi",
      "Tasse del Parco Marino e transfer da/per l'hotel inclusi"
    ],
    ru: [
      "Максимум 2 студента на инструктора для персонального обучения",
      "Включает 6 погружений с гидом (5 учебных + 1 дополнительное)",
      "Опыт глубоководного погружения на глубину до 30 метров",
      "Полнодневная прогулка на корабле в Dolphin House (Самадай) с обедом",
      "Практика навыков с берега в бухте Абу-Даббаб",
      "Официальные цифровые учебные материалы PADI Advanced eLearning",
      "Полная аренда высококачественного снаряжения и компаса включена",
      "Сборы морского заповедника и трансфер из/в отель включены"
    ],
    pl: [
      "Maksymalnie 2 studentów na instruktora dla spersonalizowanej nauki",
      "Łącznie 6 nurkowań z przewodnikiem (5 nurkowań przygodowych + 1 extra)",
      "Głębokie nurkowanie do maksymalnie 30 metrów",
      "Całodniowy rejs do Dolphin House (Rafa Samadai) z obiadami w formie bufetu",
      "Praktyka umiejętności z brzegu w Zatoce Abu Dabbab",
      "Oficjalny PADI Advanced eLearning w cenie",
      "Pełne wypożyczenie wysokiej jakości sprzętu i kompasu w cenie",
      "Opłaty за Park Morski oraz transfer z/do hotelu w cenie"
    ],
    cz: [
      "Maximálně 2 studenti na instruktora pro osobní přístup",
      "Zahrnuje celkem 6 ponorů s průvodcem (5 dobrodružných + 1 extra)",
      "Zkušenost s hloubkovým ponorem až do 30 metrů",
      "Celodenní výlet lodí do Dolphin House (Útes Samadai) s obědem",
      "Trénink dovedností z pláže v zátoce Abu Dabbab",
      "Oficiální digitální materiály PADI Advanced eLearning v ceně",
      "Zapůjčení kompletního kvalitního vybavení a kompasu v ceně",
      "Poplatky za mořský park a transfery z/do hotelu v ceně"
    ]
  },
  included: {
    en: [
      "Official PADI Advanced eLearning access & certification fees",
      "Maximum 2:1 student-to-instructor ratio",
      "5 Required PADI Adventure Dives + 1 additional guided dive (6 total)",
      "Day 1: Shore diving at Abu Dabbab Bay",
      "Day 2: Full-day boat cruise to Dolphin House (Samadai Reef)",
      "Buffet lunch, soft drinks & mineral water on Day 2 boat trip",
      "Samadai Marine Park protection fees",
      "Full rental equipment (wetsuit, BCD, regulator, mask, fins, tanks, weights)",
      "Underwater navigation compass & dive equipment",
      "Round-trip hotel transfers in A/C vehicle",
      "Professional certified PADI Instructor"
    ],
    de: [
      "Offizieller PADI Advanced eLearning-Zugang & Zertifizierungsgebühren",
      "Betreuungsverhältnis von max. 2 Schülern pro Tauchlehrer",
      "5 PADI Adventure-Tauchgänge + 1 zusätzlicher geführter Tauchgang (6 gesamt)",
      "Tag 1: Strandtauchen in der Bucht von Abu Dabbab",
      "Tag 2: Ganztägige Bootsfahrt zum Dolphin House (Samadai Riff)",
      "Mittagsbuffet, Erfrischungsgetränke & Mineralwasser am Tag 2 auf dem Boot",
      "Samadai Meerespark-Schutzgebühren",
      "Komplette Ausrüstung (Neoprenanzug, Tarrierweste, Atemregler, Maske, Flossen, Flaschen, Blei)",
      "Unterwasser-Navigationskompass & Zubehör",
      "Hin- und Rücktransfer vom Hotel im klimatisierten Fahrzeug",
      "Zertifizierter professioneller PADI Tauchlehrer"
    ],
    it: [
      "Accesso PADI Advanced eLearning ufficiale e tasse di certificazione",
      "Rapporto massimo 2 studenti per istruttore",
      "5 PADI Adventure Dives obbligatorie + 1 immersione guidata extra (6 in totale)",
      "Giorno 1: Immersioni da riva nella baia di Abu Dabbab",
      "Giorno 2: Crociera giornaliera in barca a Dolphin House (Samadai Reef)",
      "Pranzo a buffet, bevande analcoliche e acqua minerale in barca il 2° giorno",
      "Tasse del Parco Marino di Samadai",
      "Attrezzatura completa a noleggio (muta, BCD, erogatore, maschera, pinne, bombole, zavorra)",
      "Bussola per navigazione subacquea",
      "Trasferimento A/R dall'hotel in veicolo climatizzato",
      "Istruttore subacqueo PADI professionista certificato"
    ],
    ru: [
      "Доступ к PADI Advanced eLearning и сборы за оформление сертификата",
      "Максимальное соотношение: 2 студента на 1 инструктора",
      "5 обязательных погружений Adventure Dives + 1 дополнительное (всего 6)",
      "День 1: Погружения с берега в бухте Абу-Даббаб",
      "День 2: Полнодневная прогулка на яхте в Dolphin House (Риф Самадай)",
      "Обед 'шведский стол', безалкогольные напитки и вода на яхте во 2-й день",
      "Сборы за посещение заповедника Самадай",
      "Полная аренда снаряжения (гидрокостюм, BCD, регулятор, маска, ласты, баллоны, грузы)",
      "Подводный компас для навигации",
      "Трансфер из отеля и обратно на авто с кондиционером",
      "Сертифицированный профессиональный инструктор PADI"
    ],
    pl: [
      "Oficjalny dostęp do PADI Advanced eLearning i opłaty certyfikacyjne",
      "Maksymalnie 2 studentów na 1 instruktora",
      "5 wymaganych nurkowań PADI Adventure + 1 dodatkowe z przewodnikiem (łącznie 6)",
      "Dzień 1: Nurkowanie z brzegu w Zatoce Abu Dabbab",
      "Dzień 2: Całodniowy rejs statkiem do Dolphin House (Rafa Samadai)",
      "Obiad w formie bufetu, napoje i woda mineralna na łodzi w 2. dniu",
      "Opłaty za wstęp do Parku Morskiego Samadai",
      "Pełne wypożyczenie sprzętu (pianka, JKR, automat, maska, płetwy, butle, balast)",
      "Kompas do nawigacji podwodnej",
      "Odbiór i powrót do hotelu klimatyzowanym pojazdem",
      "Certyfikowany profesjonalny instruktor PADI"
    ],
    cz: [
      "Oficiální přístup k PADI Advanced eLearning a certifikační poplatky",
      "Maximální poměr 2 studenti na 1 instruktora",
      "5 povinných ponorů PADI Adventure + 1 dodatečný ponor s průvodcem (celkem 6)",
      "Den 1: Potápění z pláže v zátoce Abu Dabbab",
      "Den 2: Celodenní plavba lodí do Dolphin House (Útes Samadai)",
      "Oběd formou bufetu, nealkoholické nápoje a voda na lodi 2. den",
      "Poplatky za vstup do mořského parku Samadai",
      "Zapůjčení kompletní výstroje (neopren, žaket, automatika, maska, ploutve, lahve, zátěž)",
      "Kompas pro podmořskou navigaci",
      "Zpáteční transfery z hotelu klimatizovaným vozem",
      "Certifikovaný profesionální instruktor PADI"
    ]
  },
  whatToBring: {
    en: [
      "PADI Open Water Diver certification card (Digital copy accepted)",
      "Diving Logbook (digital or physical)",
      "Confirmation of PADI Advanced eLearning completion",
      "Passport or official ID",
      "Swimwear & towel",
      "Dry clothes",
      "Reef-safe sunscreen",
      "Hat & sunglasses",
      "Personal medication if needed"
    ],
    de: [
      "PADI Open Water Diver Brevet (Digitale Kopie akzeptiert)",
      "Tauchlogbuch (digital oder physisch)",
      "Bestätigung über den Abschluss des PADI Advanced eLearning",
      "Reisepass oder offizieller Personalausweis",
      "Badebekleidung & Handtuch",
      "Trockene Kleidung",
      "Riff-freundliche Sonnencreme",
      "Hut & Sonnenbrille",
      "Persönliche Medikamente bei Bedarf"
    ],
    it: [
      "Brevetto PADI Open Water Diver (Accettata copia digitale)",
      "Logbook subacqueo (digitale o fisico)",
      "Conferma del completamento del PADI Advanced eLearning",
      "Passaporto o documento d'identità",
      "Costume da bagno e asciugamano",
      "Abiti asciutti",
      "Protezione solare reef-safe",
      "Cappello e occhiali da sole",
      "Farmaci personali se necessari"
    ],
    ru: [
      "Сертификат PADI Open Water Diver (Принимается цифровая копия)",
      "Дайверский логбук (цифровой или бумажный)",
      "Подтверждение прохождения PADI Advanced eLearning",
      "Паспорт или удостоверение личности",
      "Купальник/плавки и полотенце",
      "Сухая одежда",
      "Солнцезащитный крем (безопасный для рифов)",
      "Головной убор и очки",
      "Личные медикаменты"
    ],
    pl: [
      "Certyfikat PADI Open Water Diver (Akceptowana kopia cyfrowa)",
      "Logbook nurkowy (cyfrowy lub fizyczny)",
      "Potwierdzenie ukończenia PADI Advanced eLearning",
      "Paszport lub dowód osobisty",
      "Stroje kąpielowe i ręcznik",
      "Suche ubrania na zmianę",
      "Krem z filtrem bezpieczny dla rafy",
      "Czapka i okulary przeciwsłoneczne",
      "Leki osobiste w razie potrzeby"
    ],
    cz: [
      "Certifikace PADI Open Water Diver (Akceptována digitální kopie)",
      "Potápěčský logbook (digitální nebo fyzický)",
      "Potvrzení o dokončení PADI Advanced eLearning",
      "Cestovní pas nebo průkaz totožnosti",
      "Plavky a ručník",
      "Suché oblečení",
      "Opalovací krém šetrný k útesům",
      "Klobouk a sluneční brýle",
      "Osobní léky v případě potřeby"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Not allowed — Minimum age for PADI Advanced course is 12 years",
      de: "Nicht erlaubt — Mindestalter für den PADI Advanced Kurs beträgt 12 Jahre",
      it: "Non consentito — L'età minima per il corso PADI Advanced è 12 anni",
      ru: "Не допускается — Минимальный возраст для курса PADI Advanced — 12 лет",
      pl: "Niedozwolone — Minimalny wiek na kurs PADI Advanced to 12 lat",
      cz: "Není povoleno — Minimální věk pro kurz PADI Advanced je 12 let"
    },
    from5to10: {
      en: "Not allowed — Must be at least 12 years old and hold Open Water Diver certification",
      de: "Nicht erlaubt — Mindestalter 12 Jahre und Open Water Zertifizierung erforderlich",
      it: "Non consentito — Richiesti almeno 12 anni e brevetto Open Water Diver",
      ru: "Не допускается — Требуется возраст от 12 лет и наличие сертификата Open Water",
      pl: "Niedozwolone — Wymagane ukończone 12 lat i certyfikat Open Water Diver",
      cz: "Není povoleno — Vyžadován věk minimálně 12 let a certifikace Open Water Diver"
    },
    over10: {
      en: "Junior Advanced Open Water Diver (12–14 yrs): Full adult rate applies (Max depth limit 21m for 12-14 yrs / 30m for 15+ yrs)",
      de: "Junior Advanced Open Water Diver (12–14 J.): Voller Tarif (Max. Tiefe 21m für 12-14 J. / 30m ab 15 J.)",
      it: "Junior Advanced Open Water Diver (12–14 anni): Tariffa intera (Profondità max 21m per 12-14 anni / 30m dai 15 anni)",
      ru: "Junior Advanced Open Water Diver (12–14 лет): Полный тариф (Макс. глубина 21м для 12-14 лет / 30м для 15+ лет)",
      pl: "Junior Advanced Open Water Diver (12–14 lat): Pełna stawka (Maks. głębokość 21m dla 12-14 lat / 30m dla 15+ lat)",
      cz: "Junior Advanced Open Water Diver (12–14 let): Plná cena (Max. hloubková hranice 21m pro 12-14 let / 30m pro 15+ let)"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Day 1: Abu Dabbab Shore Training — 08:00 AM",
        de: "Tag 1: Abu Dabbab Strandtraining — 08:00 Uhr",
        it: "Giorno 1: Addestramento da Riva a Abu Dabbab — 08:00",
        ru: "День 1: Тренировки с берега в Абу-Даббаб — 08:00",
        pl: "Dzień 1: Szkolenie z brzegu w Abu Dabbab — 08:00",
        cz: "Den 1: Trénink z pláže v Abu Dabbab — 08:00"
      },
      description: {
        en: "Hotel pickup & transfer to Abu Dabbab. Briefing followed by Peak Performance Buoyancy Adventure Dive and Underwater Navigation Adventure Dive.",
        de: "Hotelabholung & Transfer nach Abu Dabbab. Briefing, gefolgt vom Tarierung in Perfektion- & Unterwasser-Navigations-Tauchgang.",
        it: "Pick-up dall'hotel e transfer a Abu Dabbab. Briefing seguito da Adventure Dives di Assetto e Navigazione Subacquea.",
        ru: "Трансфер из отеля в Абу-Даббаб. Брифинг, погружение на отработку идеальной плавучести и погружение по подводной навигации.",
        pl: "Odbiór z hotelu i transfer do Abu Dabbab. Odprawa, a następnie nurkowania przygodowe: Doskonała Pływalność i Nawigacja Podwodna.",
        cz: "Vyzvednutí v hotelu a transfer do Abu Dabbab. Briefing a následně ponory: Dokonalé vyvážení a Podmořská navigace."
      }
    },
    {
      step: "02",
      title: {
        en: "Day 2: Dolphin House Boat Expedition — 07:00 AM",
        de: "Tag 2: Bootsausflug zum Dolphin House — 07:00 Uhr",
        it: "Giorno 2: Spedizione in Barca a Dolphin House — 07:00",
        ru: "День 2: Морская экспедиция в Dolphin House — 07:00",
        pl: "Dzień 2: Wycieczka statkiem do Dolphin House — 07:00",
        cz: "Den 2: Výprava lodí do Dolphin House — 07:00"
      },
      description: {
        en: "Transfer to marina and sail to Samadai Reef (Dolphin House). Complete Deep Adventure Dive (up to 30m), Boat & Drift Dive, Underwater Exploration Dive, plus 1 additional guided dive.",
        de: "Transfer zur Marina und Fahrt zum Samadai Riff. Absolvierung von Tieftauchen (bis 30m), Boots- & Strömungstauchen, Unterwasser-Erkundung sowie 1 zusätzlichen geführten Tauchgang.",
        it: "Trasferimento al marina e navigazione verso Samadai Reef. Immersioni: Profonda (fino a 30m), Barca e Corrente, Esplorazione Subacquea + 1 immersione guidata extra.",
        ru: "Трансфер в марину и выход в море к рифу Самадай. Глубоководное погружение (до 30м), погружение с дрейфом, исследование рифа и 1 дополнительное погружение.",
        pl: "Transfer do przystani i rejs na Rafę Samadai. Nurkowanie głębokie (do 30m), z łodzi/w prądzie, eksploracyjne oraz 1 dodatkowe nurkowanie z przewodnikiem.",
        cz: "Transfer do maríny a plavba na útes Samadai. Hloubkový ponor (až 30m), ponor z lodi v proudu, průzkumný ponor a 1 dodatečný ponor s průvodcem."
      }
    },
    {
      step: "03",
      title: {
        en: "Onboard Buffet Lunch & Relaxation — 01:00 PM",
        de: "Mittagsbuffet an Bord & Entspannung — 13:00 Uhr",
        it: "Pranzo a Buffet a Bordo e Relax — 13:00",
        ru: "Обед 'шведский стол' на корабле и отдых — 13:00",
        pl: "Obiad w formie bufetu na łodzi i relaks — 13:00",
        cz: "Oběd formou bufetu na lodi a relaxace — 13:00"
      },
      description: {
        en: "Enjoy freshly prepared lunch and refreshments on the boat deck, log your dives with your instructor, and relax during the return cruise.",
        de: "Genießen Sie ein frisch zubereitetes Mittagessen und Erfrischungen an Bord, tragen Sie die Tauchgänge ins Logbuch ein und entspannen Sie auf der Rückfahrt.",
        it: "Gusta un pranzo fresco e rinfreschi sul ponte della barca, compila il logbook con l'istruttore e rilassati durante il rientro.",
        ru: "Свежеприготовленный обед и напитки на палубе, заполнение логбука с инструктором и отдых во время обратного пути.",
        pl: "Ciesz się świeżo przygotowanym obiadem i napojami na pokładzie, uzupełnij logbook z instruktorem i zrelaksuj się w drodze powrotnej.",
        cz: "Užijte si čerstvě připravený oběd a občerstvení na palubě, zapište ponory do logbooku s instruktorem a relaxujte během plavby zpět."
      }
    },
    {
      step: "04",
      title: {
        en: "Return & Certification — 02:30 PM",
        de: "Rückkehr & Zertifizierung — 14:30 Uhr",
        it: "Rientro e Certificazione — 14:30",
        ru: "Возвращение и сертификация — 14:30",
        pl: "Powrót i certyfikacja — 14:30",
        cz: "Návrat a certifikace — 14:30"
      },
      description: {
        en: "Return to the marina, review final skills performance, process your official lifetime PADI Advanced Open Water Diver certification and transfer back to hotel.",
        de: "Ankunft in der Marina, Auswertung der Leistungen, Ausstellung der offiziellen PADI Advanced e-Card und Rücktransfer zum Hotel.",
        it: "Rientro al marina, debriefing finale, elaborazione del brevetto ufficiale PADI Advanced e transfer di ritorno in hotel.",
        ru: "Возвращение в марину, финальный дебрифинг, оформление официального сертификата PADI Advanced e-Card и трансфер в отель.",
        pl: "Powrót do przystani, podsumowanie wyników, wydanie oficjalnego certyfikatu PADI Advanced i transfer powrotny do hotelu.",
        cz: "Návrat do maríny, závěrečné vyhodnocení, vystavení oficiální e-Karty PADI Advanced a transfer zpět do hotelu."
      }
    }
  ],
  paymentNote: {
    en: "Flexible Payment Terms: €200 paid after completing Day 1. Remaining €200 paid upon full course completion on Day 2. No online payment or deposit required. Custom discount applied if you bring your own equipment.",
    de: "Flexibles Zahlungsmodell: 200 € nach Tag 1. Die restlichen 200 € nach Abschluss des Kurses an Tag 2. Keine Online-Anzahlung erforderlich. Rabatt bei eigener Ausrüstung.",
    it: "Pagamento Flessibile: €200 pagati dopo il 1° giorno. I restanti €200 al completamento del corso il 2° giorno. Nessun acconto online richiesto. Sconto se porti la tua attrezzatura.",
    ru: "Гибкая оплата: 200 € оплачиваются после 1-го дня. Оставшиеся 200 € — после полного завершения курса во 2-й день. Без предоплаты. Скидка при наличии своего снаряжения.",
    pl: "Elastyczna płatność: 200 € po ukończeniu 1. dnia. Pozostałe 200 € po ukończeniu kursu w 2. dniu. Bez zaliczek online. Zniżka przy własnym sprzęcie.",
    cz: "Flexibilní platba: 200 € po dokončení 1. dne. Zbývajících 200 € po dokončení kurzu 2. den. Bez zálohy. Při vlastním vybavení bude uplatněna sleva."
  },
  disclaimer: {
    en: "Prerequisite: Must hold a PADI Open Water Diver certification (or equivalent). Complete certification program consisting of 6 dives total. Schedule and dive sites may be modified by instructor depending on weather, visibility, currents and safety conditions.",
    de: "Voraussetzung: PADI Open Water Diver Zertifikat (oder Äquivalent). Vollständiges Zertifizierungsprogramm mit 6 Tauchgängen. Der Tauchlehrer kann den Ablauf je nach Wetter, Sicht und Strömung anpassen.",
    it: "Prerequisito: Requisito di brevetto PADI Open Water Diver (o equivalente). Programma di certificazione completo di 6 immersioni. L'istruttore può modificare l'itinerario in base alle condizioni meteo e di sicurezza.",
    ru: "Предварительные требования: Наличие сертификата PADI Open Water Diver (или аналога). Полный курс из 6 погружений. Маршрут и график могут быть изменены инструктором в зависимости от погоды и условий в море.",
    pl: "Wymagania wstępne: Certyfikat PADI Open Water Diver (lub odpowiednik). Pełny program certyfikacyjny obejmujący 6 nurkowań. Instruktor zastrzega sobie prawo do zmiany harmonogramu ze względów bezpieczeństwa lub pogodowych.",
    cz: "Předpoklad: Certifikace PADI Open Water Diver (nebo ekvivalent). Ucelený certifikační program obsahující celkem 6 ponorů. Instruktor může upravit harmonogram podle počasí, viditelnosti a mořských proudů."
  },
  images: {
    featured: "/images/tours/padi-advanced-open-water.webp",
    gallery: [
      "/images/tours/padi-advanced-open-water-1.webp",
      "/images/tours/padi-advanced-open-water-2.webp",
      "/images/tours/padi-advanced-open-water-3.png"
    ]
  }
},
{
  id: "private-luxor-day-trip",
  slug: "private-luxor-day-trip-from-marsa-alam",
  type: "city-tours", 
  title: {
    en: "Private Luxor Day Trip from Marsa Alam",
    de: "Privater Tagesausflug nach Luxor von Marsa Alam",
    it: "Escursione Privata a Luxor da Marsa Alam",
    ru: "Частная экскурсия в Луксор из Марса-Алам",
    pl: "Prywatna wycieczka do Luksoru z Marsa Alam",
    cz: "Soukromý celodenní výlet do Luxoru z Marsa Alam"
  },
  subtitle: {
    en: "Full-Day Private Guided Tour to Ancient Thebes (East & West Banks)",
    de: "Ganztägige private Führung durch das antike Theben (Ost- & Westufer)",
    it: "Tour Privato con Guida per l'Intera Giornata all'Antica Tebe (Riva Est e Ovest)",
    ru: "Частный однодневный тур с гидом по древним Фивам (Восточный и Западный берег)",
    pl: "Prywatna całodniowa wycieczka z przewodnikiem do starożytnych Teb (Wschodni i Zachodni Brzeg)",
    cz: "Soukromá celodenní prohlídka starověkých Théb s průvodcem (Východní a Západní břeh)"
  },
  category: {
    en: "City Tours",
    de: "Städtereisen & Kultur",
    it: "Tour delle Città",
    ru: "Экскурсии по Городам",
    pl: "Wycieczki Miejskie",
    cz: "Městské Tours"
  },
  price: {
    amount: 170,
    currency: "€",
    unit: {
      en: "per person (Private Vehicle & Egyptologist Included - Min. 2 Persons)",
      de: "pro Person (Privatfahrzeug & Ägyptologe inklusive - Mind. 2 Personen)",
      it: "per persona (Veicolo Privato ed Egittologo Inclusi - Min. 2 Persone)",
      ru: "за человека (Частный авто и гид-египтолог включены - Мин. 2 человека)",
      pl: "za osobę (Prywatny pojazd i egiptolog w cenie - Min. 2 osoby)",
      cz: "za osobu (Soukromé auto a egyptolog v ceně - Min. 2 osoby)"
    }
  },
  duration: {
    en: "Full Day (Approx. 3:00 AM – 9:00 PM)",
    de: "Ganztägig (ca. 03:00 bis 21:00 Uhr)",
    it: "Intera Giornata (Circa 3:00 – 21:00)",
    ru: "Целый день (Прибл. с 3:00 до 21:00)",
    pl: "Cały dzień (Około 3:00 – 21:00)",
    cz: "Celý den (Cca 3:00 – 21:00)"
  },
  departure: {
    en: "Marsa Alam Hotels (Private Pick-up)",
    de: "Hotels in Marsa Alam (Private Abholung)",
    it: "Hotel di Marsa Alam (Pick-up Privato)",
    ru: "Отели Марса-Алам (Частный трансфер)",
    pl: "Hotele w Marsa Alam (Prywatny odbiór)",
    cz: "Hotely v Marsa Alam (Soukromý odvoz)"
  },
  overview: {
    en: "Travel from Marsa Alam to Luxor and discover the ultimate highlights of ancient Egypt with a dedicated private Egyptologist guide and private AC vehicle, exploring both the East and West Banks of the Nile including Karnak, Valley of the Kings, and Hatshepsut Temple.",
    de: "Reisen Sie von Marsa Alam nach Luxor und entdecken Sie die Höhepunkte des antiken Ägyptens mit einem privaten Reiseleiter und Privatfahrzeug. Erkunden Sie das Ost- und Westufer des Nils, einschließlich Karnak, dem Tal der Könige und dem Hatschepsut-Tempel.",
    it: "Viaggia da Marsa Alam a Luxor e scopri le meraviglie dell'antico Egitto con una guida egittologa privata e un veicolo climatizzato riservato. Esplora le sponde Est e Ovest del Nilo, inclusi Karnak, la Valle dei Re e il Tempio di Hatshepsut.",
    ru: "Отправьтесь из Марса-Алам в Луксор и откройте для себя главные сокровища Древнего Египта с персональным гидом-египтологом и частным авто. Вы посетите Восточный и Западный берега Нила, Карнакский храм, Долину Царей и храм Хатшепсут.",
    pl: "Podróżuj z Marsa Alam do Luksoru i odkryj najważniejsze zabytki starożytnego Egiptu z prywatnym przewodnikiem-egiptologiem i prywatnym pojazdem, zwiedzając Wschodni i Zachodni Brzeg Nilu (Karnak, Dolina Królów, Świątynia Hatszepsut).",
    cz: "Cestujte z Marsa Alam do Luxoru a objevte nejvýznamnější památky starověkého Egypta s privátním průvodcem-egyptologem a soukromým vozem. Prozkoumejte Východní i Západní břeh Nilu včetně Karnaku, Údolí králů a chrámu Hatšepsut."
  },
  highlights: {
    en: [
      "100% Private tour experience with tailored pace and personal Egyptologist guide",
      "Explore the vast Karnak Temple complex and its famous Hypostyle Hall",
      "Discover the West Bank's Valley of the Kings with entry to 3 royal tombs",
      "Visit the impressive multi-terraced Mortuary Temple of Queen Hatshepsut",
      "Photo stop at the iconic Colossi of Memnon statues",
      "Enjoy a delicious lunch at a local restaurant in Luxor included",
      "Comfortable round-trip transportation in a private AC Limousine or Van",
      "Free bottled water provided inside the vehicle throughout the day"
    ],
    de: [
      "100% privates Tourerlebnis im eigenen Tempo mit persönlichem Ägyptologen",
      "Erkunden Sie den gewaltigen Karnak-Tempelkomplex und die Hypostyl-Halle",
      "Entdecken Sie das Tal der Könige am Westufer inklusive Eintritt zu 3 Gräbern",
      "Besuchen Sie den beeindruckenden Terrassentempel der Königin Hatschepsut",
      "Fotostopp an den imposanten Memnonkolossen",
      "Genießen Sie ein leckeres Mittagessen in einem lokalen Restaurant in Luxor",
      "Bequemer Hin- und Rücktransfer in einer privaten klimatisierten Limousine/Van",
      "Kostenloses Flaschenwasser im Fahrzeug während des gesamten Tages"
    ],
    it: [
      "Esperienza tour 100% privata con ritmi personalizzati e guida egittologa",
      "Esplora l'immenso complesso del Tempio di Karnak e la sala ipostila",
      "Scopri la Valle dei Re sulla sponda ovest con ingresso a 3 tombe reali",
      "Visita l'imponente Tempio Funerario della Regina Hatshepsut",
      "Tappa fotografica ai maestosi Colossi di Memnone",
      "Gusta un delizioso pranzo incluso in un ristorante locale a Luxor",
      "Trasporto comodo A/R in limousine o van privato con aria condizionata",
      "Acqua in bottiglia gratuita a bordo del veicolo per tutta la giornata"
    ],
    ru: [
      "100% частный тур в удобном для вас темпе с личным гидом-египтологом",
      "Исследование величественного Карнакского храма и его Гипостильного зала",
      "Посещение Долины Царей на Западном берегу с входом в 3 королевские гробницы",
      "Визит в уникальный террасный заупокойный храм царицы Хатшепсут",
      "Остановка для фото у знаменитых Колоссов Мемнона",
      "Вкусный обед в местном ресторане в Луксоре включен в стоимость",
      "Комфортабельный трансфер на частном авто/минивэне с кондиционером",
      "Бесплатная питьевая вода в машине в течение всего дня"
    ],
    pl: [
      "W 100% prywatna wycieczka we własnym tempie z osobistym egiptologiem",
      "Zwiedzanie ogromnego kompleksu świątynnego w Karnaku i Wielkiej Sali Kolumnowej",
      "Odkrywanie Doliny Królów na Zachodnim Brzegu z wejściem do 3 grobowców",
      "Wizyta w imponującej tarasowej Świątyni Hatszepsut",
      "Przystanek na zdjęcia przy słynnych Kolosach Memnona",
      "Pyszny obiad w lokalnej restauracji w Luksorze w cenie",
      "Wygodny prywatny transport klimatyzowaną limuzyną lub vanem",
      "Bezpłatna woda butelkowana w pojeździe przez cały dzień"
    ],
    cz: [
      "100% soukromý zážitek s vlastním tempem a osobním egyptologem",
      "Prohlídka rozsáhlého chrámu v Karnaku a jeho Velkého sloupového sálu",
      "Objevování Údolí králů na Západním břehu se vstupem do 3 královských hrobek",
      "Návštěva úchvatného terasovitého chrámu královny Hatšepsut",
      "Fotostop u ikonických Memnonových kolosů",
      "Lahoďný oběd v místní restauraci v Luxoru v ceně",
      "Pohodlný zpáteční transport soukromou klimatizovanou limuzínou nebo vanem",
      "Balená voda v autě zdarma po celý den"
    ]
  },
  included: {
    en: [
      "Private modern AC vehicle (Limousine or Van)",
      "Professional private Egyptologist tour guide",
      "Karnak Temple entrance tickets",
      "Valley of the Kings entrance tickets (includes 3 royal tombs)",
      "Hatshepsut Temple entrance tickets",
      "Lunch at a local restaurant in Luxor",
      "Complimentary bottled water inside the vehicle all day",
      "Hotel pickup and drop-off from Marsa Alam"
    ],
    de: [
      "Privates modernes klimatisiertes Fahrzeug (Limousine oder Van)",
      "Professioneller privater ägyptologischer Reiseleiter",
      "Eintrittskarten für den Karnak-Tempel",
      "Eintrittskarten für das Tal der Könige (inkl. 3 Gräber)",
      "Eintrittskarten für den Hatschepsut-Tempel",
      "Mittagessen in einem lokalen Restaurant in Luxor",
      "Kostenloses Flaschenwasser im Fahrzeug den ganzen Tag",
      "Hotelabholung und Rückbringung von Marsa Alam"
    ],
    it: [
      "Veicolo privato moderno climatizzato (Limousine o Van)",
      "Guida turistica egittologa privata e professionale",
      "Biglietti d'ingresso al Tempio di Karnak",
      "Biglietti d'ingresso alla Valle dei Re (include 3 tombe reali)",
      "Biglietti d'ingresso al Tempio di Hatshepsut",
      "Pranzo in un ristorante locale a Luxor",
      "Acqua in bottiglia gratuita all'interno del veicolo tutto il giorno",
      "Pick-up e drop-off dall'hotel a Marsa Alam"
    ],
    ru: [
      "Частный современный автомобиль с кондиционером (седаны/минивэн)",
      "Профессиональный частный гид-египтолог",
      "Входные билеты в Карнакский храм",
      "Входные билеты в Долину Царей (включая 3 гробницы)",
      "Входные билеты в Храм Хатшепсут",
      "Обед в местном ресторане в Луксоре",
      "Бесплатная бутилированная вода в машине на весь день",
      "Трансфер из отеля и обратно из Марса-Алам"
    ],
    pl: [
      "Prywatny nowoczesny pojazd z klimatyzacją (Limuzyna lub Van)",
      "Profesjonalny prywatny przewodnik egiptolog",
      "Bilety wstępu do Świątyni w Karnaku",
      "Bilety wstępu do Doliny Królów (obejmuje 3 grobowce)",
      "Bilety wstępu do Świątyni Hatszepsut",
      "Obiad w lokalnej restauracji w Luksorze",
      "Bezpłatna woda butelkowana w samochodzie przez cały dzień",
      "Odbiór i powrót do hotelu w Marsa Alam"
    ],
    cz: [
      "Soukromé moderní klimatizované auto (Limuzína nebo Van)",
      "Profesionální soukromý průvodce egyptolog",
      "Vstupenky do chrámu v Karnaku",
      "Vstupenky do Údolí králů (zahrnuje 3 královské hrobky)",
      "Vstupenky do chrámu Hatšepsut",
      "Oběd v místní restauraci v Luxoru",
      "Balená voda v autě po celý den zdarma",
      "Vyzvednutí a návrat do hotelu v Marsa Alam"
    ]
  },
  whatToBring: {
    en: [
      "Passport or official ID",
      "Breakfast box from hotel (requested 1 day prior)",
      "Comfortable walking shoes",
      "Light clothing & hat",
      "Sunglasses & sunscreen",
      "Camera & phone charger",
      "Local currency (EGP) for personal spending & tipping"
    ],
    de: [
      "Reisepass oder offizieller Personalausweis",
      "Frühstücksbox vom Hotel (1 Tag vorher bestellen)",
      "Bequeme Wanderschuhe",
      "Leichte Kleidung & Hut",
      "Sonnenbrille & Sonnencreme",
      "Kamera & Handy-Ladegerät",
      "Einheimische Währung (EGP) für persönliche Ausgaben & Trinkgelder"
    ],
    it: [
      "Passaporto o documento d'identità",
      "Colazione al sacco dall'hotel (richiesta il giorno prima)",
      "Scarpe comode da passeggio",
      "Abiti leggeri e cappello",
      "Occhiali da sole e protezione solare",
      "Fotocamera e caricabatterie",
      "Moneta locale (EGP) per spese personali e mance"
    ],
    ru: [
      "Паспорт или удостоверение личности",
      "Завтрак-бокс из отеля (заказывается за 1 день)",
      "Удобная обувь для ходьбы",
      "Легкая одежда и головной убор",
      "Солнцезащитные очки и крем",
      "Камера и зарядное устройство",
      "Местная валюта (EGP) для личных расходов и чаевых"
    ],
    pl: [
      "Paszport lub dowód osobisty",
      "Suchy prowiant z hotelu (zamówiony dzień wcześniej)",
      "Wygodne buty do chodzenia",
      "Lekkie ubranie i czapka",
      "Okulary przeciwsłoneczne i krem z filtrem",
      "Aparat fotograficzny i ładowarka",
      "Lokalna waluta (EGP) na wydatki osobiste i napiwki"
    ],
    cz: [
      "Cestovní pas nebo průkaz totožnosti",
      "Snídaňový balíček z hotelu (nutno objednat den předem)",
      "Pohodlná obuv na chodění",
      "Lehké oblečení a klobouk",
      "Sluneční brýle a opalovací krém",
      "Fotoaparát a nabíječka",
      "Místní měna (EGP) na osobní výdaje a spropitné"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Free of charge (Under 6 years old)",
      de: "Kostenlos (Unter 6 Jahren)",
      it: "Gratuito (Sotto i 6 anni)",
      ru: "Бесплатно (До 6 лет)",
      pl: "Bezpłatnie (Poniżej 6 lat)",
      cz: "Zdarma (Mladší 6 let)"
    },
    from5to10: {
      en: "Child discount applies (50% discount for children aged 6 to 11)",
      de: "Kinderermäßigung gilt (50% Rabatt für Kinder von 6 bis 11 Jahren)",
      it: "Si applica lo sconto bambini (50% di sconto per bambini da 6 a 11 anni)",
      ru: "Действует детская скидка (50% скидка для детей от 6 до 11 лет)",
      pl: "Obowiązuje zniżka dla dzieci (50% zniżki dla dzieci w wieku 6-11 lat)",
      cz: "Platí dětská sleva (50% sleva pro děti od 6 do 11 let)"
    },
    over10: {
      en: "Full adult rate applies (12 years and older)",
      de: "Voller Preis für Erwachsene (ab 12 Jahren)",
      it: "Tariffa intera adulti (da 12 anni in poi)",
      ru: "Полная стоимость взрослого (с 12 лет)",
      pl: "Pełna stawka dla dorosłych (od 12 lat)",
      cz: "Plná cena pro dospělé (od 12 let)"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Private Departure from Marsa Alam — 03:00 AM",
        de: "Private Abreise von Marsa Alam — 03:00 Uhr",
        it: "Partenza Privata da Marsa Alam — 03:00",
        ru: "Частный выезд из Марса-Алам — 03:00",
        pl: "Prywatny wyjazd z Marsa Alam — 03:00",
        cz: "Soukromý odjezd z Marsa Alam — 03:00"
      },
      description: {
        en: "Early morning pickup directly from your hotel in a private AC vehicle. Enjoy a comfortable drive across the Eastern Desert to Luxor.",
        de: "Frühe Abholung direkt von Ihrem Hotel im privaten klimatisierten Fahrzeug. Genießen Sie eine komfortable Fahrt durch die Östliche Wüste nach Luxor.",
        it: "Pick-up di mattina presto direttamente dal tuo hotel in un veicolo privato climatizzato. Goditi un viaggio comodo attraverso il deserto orientale verso Luxor.",
        ru: "Ранний выезд прямо из вашего отеля на частном автомобиле с кондиционером. Комфортная поездка через Восточную пустыню в Луксор.",
        pl: "Wczesny odbiór bezpośrednio z hotelu prywatnym klimatyzowanym pojazdem. Wygodna podróż przez Pustynię Wschodnią do Luksoru.",
        cz: "Ranní vyzvednutí přímo z vašeho hotelu soukromým klimatizovaným vozem. Pohodlná jízda přes Východní poušť do Luxoru."
      }
    },
    {
      step: "02",
      title: {
        en: "Karnak Temple (East Bank) — 09:00 AM",
        de: "Karnak-Tempel (Ostufer) — 09:00 Uhr",
        it: "Tempio di Karnak (Riva Est) — 09:00",
        ru: "Карнакский храм (Восточный берег) — 09:00",
        pl: "Świątynia w Karnaku (Wschodni Brzeg) — 09:00",
        cz: "Chrám v Karnaku (Východní břeh) — 09:00"
      },
      description: {
        en: "Arrive in Luxor and start at Karnak Temple, one of the world's largest religious complexes. Walk through the Hypostyle Hall with your private guide.",
        de: "Ankunft in Luxor und Beginn am Karnak-Tempel, einer der größten religiösen Anlagen der Welt. Durchqueren Sie die Hypostyl-Halle mit Ihrem Reiseleiter.",
        it: "Arrivo a Luxor e visita al Tempio di Karnak, uno dei complessi religiosi più grandi al mondo. Passeggia nella Sala Ipostila con la tua guida.",
        ru: "Прибытие в Луксор. Экскурсия по Карнакскому храму — крупнейшему религиозному комплексу древнего мира. Прогулка по Гипостильному залу.",
        pl: "Przyjazd do Luksoru i zwiedzanie Świątyni w Karnaku, jednego z największych kompleksów religijnych. Przejście przez Salę Kolumnową z przewodnikiem.",
        cz: "Příjezd do Luxoru a prohlídka chrámu v Karnaku, jednoho z největších náboženských komplexů. Procházka Velkým sloupovým sálem s průvodcem."
      }
    },
    {
      step: "03",
      title: {
        en: "Lunch at a Local Restaurant — 12:30 PM",
        de: "Mittagessen in einem lokalen Restaurant — 12:30 Uhr",
        it: "Pranzo in un Ristorante Locale — 12:30",
        ru: "Обед в местном ресторане — 12:30",
        pl: "Obiad w lokalnej restauracji — 12:30",
        cz: "Oběd v místní restauraci — 12:30"
      },
      description: {
        en: "Relax and savor a delicious lunch prepared with local Egyptian ingredients at a selected restaurant in Luxor.",
        de: "Entspannen Sie sich und genießen Sie ein köstliches Mittagessen mit lokalen ägyptischen Zutaten in einem ausgewählten Restaurant.",
        it: "Rilassati e gusta un delizioso pranzo preparato con ingredienti locali egiziani in un ristorante selezionato a Luxor.",
        ru: "Отдых и вкусный обед из блюд местной египетской кухни в проверенном ресторане Луксора.",
        pl: "Relaks i pyszny obiad przygotowany z lokalnych egipskich składników w wybranej restauracji w Luksorze.",
        cz: "Odpočinek a lahodný oběd připravený z místních surovin ve vybrané restauraci v Luxoru."
      }
    },
    {
      step: "04",
      title: {
        en: "Valley of the Kings (West Bank) — 02:00 PM",
        de: "Tal der Könige (Westufer) — 14:00 Uhr",
        it: "Valle dei Re (Riva Ovest) — 14:00",
        ru: "Долина Царей (Западный берег) — 14:00",
        pl: "Dolina Królów (Zachodni Brzeg) — 14:00",
        cz: "Údolí králů (Západní břeh) — 14:00"
      },
      description: {
        en: "Cross to the West Bank to explore the ancient City of the Dead. Enter 3 remarkable royal tombs carved deep into the mountains.",
        de: "Überquerung des Westufers zur Erkundung der Stadt der Toten. Besichtigung von 3 beeindruckenden königlichen Gräbern in den Felsen.",
        it: "Attraversa la sponda ovest per esplorare la Città dei Morti. Entra in 3 straordinarie tombe reali scavate nella montagna.",
        ru: "Переезд на Западный берег в 'Город Мертвых'. Посещение 3 королевских гробниц с невероятно сохранившимися фресками.",
        pl: "Przejazd na Zachodni Brzeg do Miasta Umarłych. Wejście do 3 niezwykłych grobowców królewskich wykutych w skałach.",
        cz: "Přejezd na Západní břeh do Města mrtvých. Prohlídka 3 pozoruhodných královských hrobek tesaných do skály."
      }
    },
    {
      step: "05",
      title: {
        en: "Temple of Hatshepsut & Colossi of Memnon — 04:00 PM",
        de: "Hatschepsut-Tempel & Memnonkolosse — 16:00 Uhr",
        it: "Tempio di Hatshepsut e Colossi di Memnone — 16:00",
        ru: "Храм Хатшепсут и Колоссы Мемнона — 16:00",
        pl: "Świątynia Hatszepsut i Kolosy Memnona — 16:00",
        cz: "Chrám Hatšepsut a Memnonovy kolosy — 16:00"
      },
      description: {
        en: "Visit the stunning terraced Mortuary Temple of Queen Hatshepsut at Deir el-Bahari, followed by a photo stop at the gigantic Colossi of Memnon statues.",
        de: "Besuch des beeindruckenden Terrassentempels der Königin Hatschepsut in Deir el-Bahari, gefolgt von einem Fotostopp an den riesigen Memnonkolossen.",
        it: "Visita al meraviglioso Tempio Funerario della Regina Hatshepsut a Deir el-Bahari, seguito da una tappa foto ai giganteschi Colossi di Memnone.",
        ru: "Визит в уникальный храм царицы Хатшепсут в Дейр-эль-Бахри. Затем остановка у гигантских статуй Колоссов Мемнона для фото.",
        pl: "Wizyta w zachwycającej Świątyni Hatszepsut w Deir el-Bahari, a następnie przystanek na zdjęcia przy gigantycznych Kolosach Memnona.",
        cz: "Návštěva úchvatného chrámu královny Hatšepsut v Deir el-Bahari, po které následuje fotostop u gigantických Memnonových kolosů."
      }
    },
    {
      step: "06",
      title: {
        en: "Return Journey to Marsa Alam — 05:30 PM",
        de: "Rückfahrt nach Marsa Alam — 17:30 Uhr",
        it: "Viaggio di Ritorno a Marsa Alam — 17:30",
        ru: "Обратный трансфер в Марса-Алам — 17:30",
        pl: "Podróż powrotna do Marsa Alam — 17:30",
        cz: "Cesta zpět do Marsa Alam — 17:30"
      },
      description: {
        en: "Begin your comfortable private journey back to Marsa Alam, arriving at your hotel between 08:30 PM and 09:30 PM.",
        de: "Beginn der privaten Rückfahrt nach Marsa Alam mit Ankunft in Ihrem Hotel zwischen 20:30 Uhr und 21:30 Uhr.",
        it: "Inizio del comodo viaggio privato di rientro a Marsa Alam, con arrivo in hotel tra le 20:30 e le 21:30.",
        ru: "Обратная поездка на частном автомобиле в Марса-Алам. Возвращение в отель ориентировочно с 20:30 до 21:30.",
        pl: "Rozpoczęcie prywatnej podróży powrotnej do Marsa Alam, przyjazd do hotelu między 20:30 a 21:30.",
        cz: "Zahájení soukromé cesty zpět do Marsa Alam, příjezd do hotelu mezi 20:30 a 21:30."
      }
    }
  ],
  paymentNote: {
    en: "Private Trip Pricing: €170 per person based on a minimum of 2 guests. Family & group discounts available. Shared trip option available upon request via WhatsApp. Payment on day of the tour.",
    de: "Preise für Privattouren: 170 € pro Person bei mindestens 2 Personen. Familien- und Gruppenrabatte verfügbar. Gruppenreisen auf Anfrage per WhatsApp. Zahlung am Tag der Tour.",
    it: "Prezzo Tour Privato: €170 a persona per un minimo di 2 partecipanti. Sconti per famiglie e gruppi disponibili. Opzione tour di gruppo disponibile su richiesta via WhatsApp. Pagamento il giorno del tour.",
    ru: "Цена частного тура: 170 € с человека (минимум 2 гостя). Доступны скидки для семей и групп. Стоимость группового тура — по запросу в WhatsApp. Оплата в день экскурсии.",
    pl: "Cena wycieczki prywatnej: 170 € za osobę przy minimum 2 osobach. Dostępne zniżki rodzinne i grupowe. Opcja wycieczki grupowej dostępna na zapytanie przez WhatsApp. Płatność w dniu wycieczki.",
    cz: "Cena soukromého výletu: 170 € za osobu při minimálně 2 osobách. Slevy pro rodiny a skupiny k dispozici. Možnost sdíleného výletu na vyžádání přes WhatsApp. Platba v den výletu."
  },
  disclaimer: {
    en: "Special optional tomb entry tickets (such as King Tutankhamun or Ramses VI) and photography permits inside the tombs are not included and can be purchased on-site. Departure time is 3:00 AM; return time depends on site duration and traffic.",
    de: "Sondergräber (wie Tutanchamun oder Ramses VI.) und Fotogenehmigungen in den Gräbern sind nicht enthalten und können vor Ort gekauft werden. Abreise um 03:00 Uhr; Rückkehr hängt von der Dauer an den Stätten und dem Verkehr ab.",
    it: "I biglietti per tombe speciali (come Tutankhamon o Ramses VI) e i permessi fotografici all'interno delle tombe non sono inclusi e si acquistano sul posto. Partenza alle 3:00; l'orario di rientro dipende dai tempi di visita e dal traffico.",
    ru: "Билеты в специальные гробницы (например, Тутанхамона или Рамсеса VI) и разрешение на фотосъемку не входят в стоимость и приобретаются на месте. Выезд в 3:00, время возвращения зависит от времени на объектах.",
    pl: "Dodatkowe bilety do specjalnych grobowców (np. Tutenchamona lub Ramzesa VI) oraz pozwolenia na fotografowanie płatne na miejscu. Wyjazd o 3:00; czas powrotu zależy od czasu spędzonego w zabytkach i ruchu drogowego.",
    cz: "Vstupenky do speciálních hrobek (např. Tutanchamon nebo Ramesse VI.) a povolení k fotografování nejsou v ceně a lze je zakoupit na místě. Odjezd ve 3:00; čas návratu závisí na stráveném čase na památkách."
  },
  images: {
    featured: "/images/tours/luxor-private-day-trip.jpg",
    gallery: [
      "/images/tours/luxor-private-day-trip-1.jpg",
      "/images/tours/luxor-private-day-trip-2.jpg",
      "/images/tours/luxor-private-day-trip-3.jpg"
    ]
  }
},
{
  id: "historical-el-quseir-tour",
  slug: "historical-el-quseir-private-guided-tour",
  type: "city-tours",
  title: {
    en: "Historical El Quseir Tour",
    de: "Historische El Quseir Tour",
    it: "Tour Storico di El Quseir",
    ru: "Исторический тур по Эль-Кусейр",
    pl: "Historyczna wycieczka po El Quseir",
    cz: "Historická prohlídka El Quseir"
  },
  subtitle: {
    en: "Private Guided Walking Tour to Fortress, Old Town & Italian Heritage",
    de: "Privater geführter Rundgang zur Festung, Altstadt & italienischem Erbe",
    it: "Tour a Piedi Privato con Guida alla Fortezza, Centro Storico ed Eredità Italiana",
    ru: "Частная пешеходная экскурсия к крепости, старому городу и итальянскому наследию",
    pl: "Prywatna piesza wycieczka z przewodnikiem do twierdzy, starego miasta i dziedzictwa włoskiego",
    cz: "Soukromá pěší prohlídka pevnosti, starého města a italského dědictví s průvodcem"
  },
  category: {
    en: "City Tours",
    de: "Städtereisen & Kultur",
    it: "Tour delle Città",
    ru: "Экскурсии по Городам",
    pl: "Wycieczki Miejskie",
    cz: "Městské Tours"
  },
  price: {
    amount: 50,
    currency: "€",
    unit: {
      en: "per tour / group (Private Guide & Site Tickets Included)",
      de: "pro Tour / Gruppe (Privater Reiseleiter & Eintrittskarten inklusive)",
      it: "per tour / gruppo (Guida Privata e Biglietti Inclusi)",
      ru: "за тур / группу (Частный гид и входные билеты включены)",
      pl: "za wycieczkę / grupę (Prywatny przewodnik i bilety w cenie)",
      cz: "za prohlídku / skupinu (Soukromý průvodce a vstupenky v ceně)"
    }
  },
  duration: {
    en: "Half Day (Flexible Duration - Starts at 3:00 PM)",
    de: "Halbtags (Flexible Dauer - Start um 15:00 Uhr)",
    it: "Mezza Giornata (Durata flessibile - Inizio alle 15:00)",
    ru: "Полдня (Гибкая продолжительность - Старт в 15:00)",
    pl: "Pół dnia (Elastyczny czas - Start o 15:00)",
    cz: "Půl dne (Flexibilní délka - Začátek v 15:00)"
  },
  departure: {
    en: "Hotels near El Quseir & Marsa Alam (3:00 PM Departure)",
    de: "Hotels nahe El Quseir & Marsa Alam (Abfahrt 15:00 Uhr)",
    it: "Hotel vicino a El Quseir e Marsa Alam (Partenza ore 15:00)",
    ru: "Отели возле Эль-Кусейр и Марса-Алам (Выезд в 15:00)",
    pl: "Hotele w pobliżu El Quseir i Marsa Alam (Wyjazd o 15:00)",
    cz: "Hotely v blízkosti El Quseir a Marsa Alam (Odjezd v 15:00)"
  },
  overview: {
    en: "Step beyond the resorts and discover the rich history of El Quseir. Explore the city's historic Ottoman fortress, ancient old town, historic Al-Farran mosque, and unique industrial heritage from the Italian phosphate era with a dedicated local expert guide.",
    de: "Wagen Sie einen Blick über die Resorts hinaus und entdecken Sie die reiche Geschichte von El Quseir. Erkunden Sie die historische osmanische Festung, die Altstadt, die Al-Farran-Moschee und das Erbe der italienischen Phosphat-Ära mit einem lokalen Reiseleiter.",
    it: "Oltrepassa i resort e scopri la ricca storia di El Quseir. Esplora la fortezza ottomana, il centro storico, la moschea Al-Farran e l'eredità industriale dell'era mineraria italiana con una guida locale esperta.",
    ru: "Выйдите за пределы курортов и откройте богатую историю Эль-Кусейр. Исследуйте османскую крепость, старый город, древнюю мечеть Аль-Фарран и наследие итальянской фосфатной эры с личным местным гидом.",
    pl: "Wyjdź poza resorty i odkryj bogatą historię El Quseir. Zwiedzaj osmańską twierdzę, stare miasto, zabytkowy meczet Al-Farran oraz włoskie dziedzictwo przemysłowe z prywatnym przewodnikiem.",
    cz: "Vydejte se mimo rezorty a objevte bohatou historii El Quseiru. Prozkoumejte osmanskou pevnost, staré město, mešitu Al-Farran a italské průmyslové dědictví s místním průvodcem."
  },
  highlights: {
    en: [
      "Fixed group rate (€50 total for your entire family or group)",
      "Visit the 16th-century Ottoman El Quseir Fortress & watchtower views",
      "Guided walking tour inside the narrow alleys of El Quseir's Old Town",
      "Discover the historic Al-Farran Mosque and iconic El Quseir Hotel",
      "Explore the Italian Colony, old phosphate factory & historic Italian Church",
      "Expert local guide dedicated to your group throughout the tour",
      "Timed departure at 3:00 PM ensuring access to all historic sites before closure"
    ],
    de: [
      "Fester Gruppenpreis (50 € insgesamt für Ihre gesamte Familie/Gruppe)",
      "Besuch der osmanischen Festung El Quseir aus dem 16. Jh. & Aussichtsturm",
      "Geführter Rundgang durch die engen Gassen der Altstadt von El Quseir",
      "Entdecken Sie die Al-Farran-Moschee und das historische Hotel El Quseir",
      "Erkunden Sie die italienische Kolonie, alte Phosphatfabrik & historische Kirche",
      "Lokaler Experten-Reiseleiter exklusiv für Ihre Gruppe während der Tour",
      "Pünktliche Abfahrt um 15:00 Uhr zur Sicherstellung aller Besichtigungszeiten"
    ],
    it: [
      "Tariffa di gruppo fissa (€50 totale per tutta la famiglia o gruppo)",
      "Visita alla fortezza ottomana del XVI secolo e vista dalla torre di guardia",
      "Tour a piedi tra i vicoli del centro storico di El Quseir",
      "Scopri la storica Moschea Al-Farran e l'iconico Hotel El Quseir",
      "Esplora la Colonia Italiana, la vecchia fabbrica di fosfati e la chiesa storica",
      "Guida esperta locale dedicata esclusivamente al tuo gruppo",
      "Partenza alle 15:00 per garantire l'accesso a tutti i siti prima della chiusura"
    ],
    ru: [
      "Фиксированная цена за группу (50 € за всю вашу семью или компанию)",
      "Посещение османской крепости XVI века и смотровой башни",
      "Пешеходный тур по колоритным улочкам старого города Эль-Кусейр",
      "Знакомство с исторической мечетью Аль-Фарран и отелем El Quseir",
      "Осмотр итальянской колонии, старой фосфатной фабрики и исторической церкви",
      "Персональный местный гид для вашей группы на протяжении всего тура",
      "Выезд ровно в 15:00, чтобы успеть посетить крепость до закрытия"
    ],
    pl: [
      "Stała cena za grupę (50 € łącznie dla całej rodziny lub grupy)",
      "Zwiedzanie XVI-wiecznej twierdzy osmańskiej i punktu widokowego",
      "Pieszy spacer po klimatycznych uliczkach Starego Miasta w El Quseir",
      "Odkryj zabytkowy meczet Al-Farran i kultowy hotel El Quseir",
      "Zobacz osadę włoską, starą fabrykę fosfatów i historyczny kościół",
      "Lokalny przewodnik do wyłącznej dyspozycji Twojej grupy",
      "Wyjazd o 15:00 gwarantujący wstęp do obiektów przed zamknięciem"
    ],
    cz: [
      "Pevná cena za skupinu (50 € celkem pro celou vaši rodinu nebo skupinu)",
      "Návštěva osmanské pevnosti ze 16. století s vyhlídkou z věže",
      "Pěší prohlídka úzkými uličkami starého města El Quseir",
      "Objevení historické mešity Al-Farran a ikonického hotelu El Quseir",
      "Prohlídka italské kolonie, staré továrny na fosfáty a historického kostela",
      "Místní odborný průvodce po celou dobu prohlídky",
      "Odjezd v 15:00 pro zajištění vstupu do památek před zavírací dobą"
    ]
  },
  included: {
    en: [
      "Local professional guide throughout the walking tour",
      "All entrance tickets for mentioned historical sites",
      "El Quseir Fortress entrance ticket",
      "Guided Old Town walking tour"
    ],
    de: [
      "Lokaler professioneller Reiseleiter während des gesamten Rundgangs",
      "Alle Eintrittskarten für die genannten historischen Stätten",
      "Eintrittskarte für die Festung El Quseir",
      "Geführter Altstadt-Rundgang"
    ],
    it: [
      "Guida professionale locale per l'intero tour a piedi",
      "Tutti i biglietti d'ingresso per i siti storici menzionati",
      "Biglietto d'ingresso alla Fortezza di El Quseir",
      "Tour a piedi guidato nel centro storico"
    ],
    ru: [
      "Местный профессиональный гид на протяжении всей пешеходной экскурсии",
      "Все входные билеты на указанные исторические объекты",
      "Входной билет в крепость Эль-Кусейр",
      "Пешеходная экскурсия по Старому городу"
    ],
    pl: [
      "Lokalny profesjonalny przewodnik podczas całej wycieczki pieszej",
      "Wszystkie bilety wstępu do wymienionych obiektów historycznych",
      "Bilet wstępu do twierdzy El Quseir",
      "Piesze zwiedzanie Starego Miasta z przewodnikiem"
    ],
    cz: [
      "Místní profesionální průvodce po celou dobu pěší prohlídky",
      "Všechny vstupenky na uvedené historické památky",
      "Vstupenka do pevnosti El Quseir",
      "Pěší prohlídka starého města s průvodcem"
    ]
  },
  whatToBring: {
    en: [
      "Comfortable walking shoes",
      "Modest clothing for visiting historic & religious sites",
      "Camera or smartphone",
      "Hat & sunglasses",
      "Local currency (EGP) for personal spending, souvenirs & tips"
    ],
    de: [
      "Bequeme Wanderschuhe",
      "Angemessene Kleidung für den Besuch historischer & religiöser Stätten",
      "Kamera oder Smartphone",
      "Hut & Sonnenbrille",
      "Einheimische Währung (EGP) für persönliche Ausgaben & Trinkgelder"
    ],
    it: [
      "Scarpe comode da passeggio",
      "Abbigliamento modesto per la visita a siti storici e religiosi",
      "Fotocamera o smartphone",
      "Cappello e occhiali da sole",
      "Moneta locale (EGP) per spese personali, souvenir e mance"
    ],
    ru: [
      "Удобная обувь для ходьбы",
      "Скромная одежда для посещения исторических и религиозных мест",
      "Камера или смартфон",
      "Головной убор и очки",
      "Местная валюта (EGP) для личных расходов, сувениров и чаевых"
    ],
    pl: [
      "Wygodne buty do chodzenia",
      "Skromne ubranie odpowiednie do miejsc historycznych i religijnych",
      "Aparat fotograficzny lub telefon",
      "Czapka i okulary przeciwsłoneczne",
      "Lokalna waluta (EGP) na wydatki osobiste, pamiątki i napiwki"
    ],
    cz: [
      "Pohodlná obuv na chodění",
      "Vhodné oblečení pro návštěvu historických a náboženských míst",
      "Fotoaparát nebo smartphone",
      "Klobouk a sluneční brýle",
      "Místní měna (EGP) na osobní výdaje, suvenýry a spropitné"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Free of charge (Tour price is per group, children included)",
      de: "Kostenlos (Tourpreis gilt pro Gruppe, Kinder inklusive)",
      it: "Gratuito (Il prezzo del tour è per gruppo, bambini inclusi)",
      ru: "Бесплатно (Цена тура за группу, дети включены)",
      pl: "Bezpłatnie (Cena wycieczki dotyczy grupy, dzieci w cenie)",
      cz: "Zdarma (Cena prohlídky je za skupinu, děti v cenie)"
    },
    from5to10: {
      en: "Included in group tour price",
      de: "Im Gruppenpreis enthalten",
      it: "Incluso nel prezzo del gruppo",
      ru: "Включено в стоимость тура за группу",
      pl: "W cenie wycieczki grupowej",
      cz: "Zahrnuto v ceně prohlídky za skupinu"
    },
    over10: {
      en: "Included in group tour price",
      de: "Im Gruppenpreis enthalten",
      it: "Incluso nel prezzo del gruppo",
      ru: "Включено в стоимость тура за группу",
      pl: "W cenie wycieczki grupowej",
      cz: "Zahrnuto v ceně prohlídky za skupinu"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Departure — 03:00 PM",
        de: "Hotelabholung — 15:00 Uhr",
        it: "Partenza dall'Hotel — 15:00",
        ru: "Выезд из отеля — 15:00",
        pl: "Wyjazd z hotelu — 15:00",
        cz: "Odjezd z hotelu — 15:00"
      },
      description: {
        en: "Pick up from your hotel. Timed strictly for 3:00 PM to ensure visiting the Ottoman fortress before closing time.",
        de: "Abholung vom Hotel. Pünktlich um 15:00 Uhr, um die osmanische Festung vor der Schließung zu besuchen.",
        it: "Pick-up dall'hotel. Partenza tassativa alle 15:00 per visitare la fortezza ottomana prima della chiusura.",
        ru: "Трансфер из отеля. Выезд строго в 15:00, чтобы успеть посетить османскую крепость до закрытия.",
        pl: "Odbiór z hotelu. Punktualnie o 15:00, aby zdążyć zwiedzić twierdzę osmańską przed zamknięciem.",
        cz: "Vyzvednutí v hotelu. Přesně v 15:00 pro zajištění návštěvy osmanské pevnosti před zavírací dobou."
      }
    },
    {
      step: "02",
      title: {
        en: "El Quseir Ottoman Fortress — 03:30 PM",
        de: "Festung von El Quseir — 15:30 Uhr",
        it: "Fortezza di El Quseir — 15:30",
        ru: "Османская крепость Эль-Кусейр — 15:30",
        pl: "Twierdza El Quseir — 15:30",
        cz: "Osmanská pevnost El Quseir — 15:30"
      },
      description: {
        en: "Explore the 16th-century Ottoman fortress. Learn about El Quseir's history as a Red Sea trade & pilgrimage port and enjoy views from the watchtower.",
        de: "Erkunden Sie die osmanische Festung aus dem 16. Jahrhundert und erfahren Sie mehr über die Geschichte des Hafens. Genießen Sie die Aussicht vom Turm.",
        it: "Esplora la fortezza del XVI secolo. Scopri la storia del porto di El Quseir e goditi la vista dalla torre di guardia.",
        ru: "Экскурсия по крепости XVI века. Узнайте об истории порта и насладитесь панорамным видом со смотровой башни.",
        pl: "Zwiedzanie XVI-wiecznej twierdzy osmańskiej. Poznaj historię portu i podziwiaj widok z wieży strażniczej.",
        cz: "Prohlídka pevnosti ze 16. století. Objevte historii přístavu a užijte si výhled strážní věže."
      }
    },
    {
      step: "03",
      title: {
        en: "Old Town & Al-Farran Mosque — 05:00 PM",
        de: "Altstadt & Al-Farran-Moschee — 17:00 Uhr",
        it: "Centro Storico e Moschea Al-Farran — 17:00",
        ru: "Старый город и мечеть Аль-Фарран — 17:00",
        pl: "Stare Miasto i meczet Al-Farran — 17:00",
        cz: "Staré město a mešita Al-Farran — 17:00"
      },
      description: {
        en: "Stroll through the narrow streets of the Old Town. Visit the historic Al-Farran Mosque and admire traditional architecture and the historic El Quseir Hotel.",
        de: "Spaziergang durch die Altstadt. Besuchen Sie die historische Al-Farran-Moschee und bewundern Sie die traditionelle Architektur.",
        it: "Passeggiata tra i vicoli del centro storico. Visita la Moschea Al-Farran e ammira l'architettura locale e lo storico Hotel El Quseir.",
        ru: "Прогулка по колоритным улочкам Старого города. Посещение мечети Аль-Фарран и осмотр традиционной архитектуры.",
        pl: "Spacer wąskimi uliczkami Starego Miasta. Wizyta w meczecie Al-Farran i podziwianie tradycyjnej architektury.",
        cz: "Procházka uličkami starého města. Návštěva mešity Al-Farran a obdivování traditionalní architektury."
      }
    },
    {
      step: "04",
      title: {
        en: "Italian Colony & Phosphate Heritage — 06:00 PM",
        de: "Italienische Kolonie & Phosphat-Erbe — 18:00 Uhr",
        it: "Colonia Italiana ed Eredità dei Fosfati — 18:00",
        ru: "Итальянская колония и фосфатное наследие — 18:00",
        pl: "Osada Włoska i dziedzictwo przemysłowe — 18:00",
        cz: "Italská kolonie a průmyslové dědictví — 18:00"
      },
      description: {
        en: "Discover the remains of the old Italian phosphate mining company era, the historical church built for Italian engineers, and local heritage.",
        de: "Entdecken Sie die Überreste der alten italienischen Phosphatmine, die historische italienische Kirche und das lokale Erbe.",
        it: "Scopri i resti della vecchia era mineraria italiana, la chiesa storica costruita per gli ingegneri italiani e la cultura locale.",
        ru: "Осмотр построек времен итальянских фосфатных разработок, старинной итальянской церкви и индустриальных памятников.",
        pl: "Odkryj pozostałości z czasów włoskiego wydobycia fosfatów, zabytkowy kościół włoski oraz lokalne dziedzictwo.",
        cz: "Objevení pozůstatků z éry italské těžby fosfátů, historického kostela pro italské inženýry a místního dědictví."
      }
    }
  ],
  paymentNote: {
    en: "Private Tour Pricing: €50 total per group/family (Not per person). Hotel transfer price is calculated separately based on distance. Payment collected on the day of the tour.",
    de: "Preis für die private Tour: 50 € insgesamt pro Gruppe/Familie (Nicht pro Person). Der Transferpreis wird je nach Entfernung berechnet. Zahlung am Tag der Tour.",
    it: "Prezzo Tour Privato: €50 totale per gruppo/famiglia (Non a persona). Il prezzo del transfer viene calcolato a parte in base alla distanza. Pagamento il giorno del tour.",
    ru: "Цена частного тура: 50 € за всю группу/семью (Не с человека). Трансфер оплачивается отдельно в зависимости от расстояния. Оплата в день экскурсии.",
    pl: "Cena wycieczki prywatnej: 50 € łącznie za grupę/rodzinę (Nie za osobę). Cena transferu jest obliczana osobiście w zależności od odległości. Płatność w dniu wycieczki.",
    cz: "Cena soukromé prohlídky: 50 € celkem za skupinu/rodinu (Ne za osobu). Cena transferu se počítá zvlášť podle vzdálenosti. Platba v den prohlídky."
  },
  disclaimer: {
    en: "Strict 3:00 PM departure required due to fortress closing hours (5:00 PM). Hotel transfer costs vary depending on location. Food and drinks are not included.",
    de: "Pünktliche Abfahrt um 15:00 Uhr erforderlich wegen der Schließung der Festung (17:00 Uhr). Transferkosten variieren je nach Lage des Hotels. Speisen und Getränke nicht enthalten.",
    it: "Partenza tassativa alle 15:00 causa orario di chiusura della fortezza (17:00). I costi di trasferimento variano in base alla posizione. Cibo e bevande non inclusi.",
    ru: "Выезд строго в 15:00 из-за времени работы крепости (до 17:00). Стоимость трансфера зависит от расположения отеля. Еда и напитки не входят в стоимость.",
    pl: "Wymagany punktualny wyjazd o 15:00 ze względu na godziny otwarcia twierdzy (do 17:00). Koszt transferu zależy od lokalizacji hotelu. Posiłki i napoje nie są w cenie.",
    cz: "Odjezd přesně v 15:00 z důvodu zavírací doby pevnosti (17:00). Náklady na transfer se liší podle polohy hotelu. Jídlo a pití nejsou v ceně."
  },
  images: {
    featured: "/images/tours/el-quseir-tour.jpg",
    gallery: [
      "/images/tours/el-quseir-tour-1.jpg",
      "/images/tours/el-quseir-tour-2.jpg",
      "/images/tours/el-quseir-tour-3.jpg"
    ]
  }
},
{
  id: "marsa-alam-city-tour-and-shopping",
  slug: "marsa-alam-city-tour-and-shopping",
  type: "city-tours",
  title: {
    en: "Marsa Alam City Tour & Shopping",
    de: "Stadtrundfahrt & Shopping in Marsa Alam",
    it: "Tour della Città di Marsa Alam e Shopping",
    ru: "Обзорная экскурсия по Марса-Алам и шопинг",
    pl: "Zwiedzanie Marsa Alam i zakupy",
    cz: "Prohlídka města Marsa Alam a nákupy"
  },
  subtitle: {
    en: "Local City Walking Tour, Cultural Sites & Authentic Egyptian Markets",
    de: "Lokaler Stadtrundgang, Kulturstätten & authentische ägyptische Märkte",
    it: "Tour a Piedi della Città, Siti Culturali e Mercati Egiziani Autentici",
    ru: "Пешеходная прогулка по городу, культурные места и настоящие египетские рынки",
    pl: "Lokalny spacer po mieście, miejsca kulturowe i autentyczne egipskie targi",
    cz: "Místní pěší prohlídka města, kulturní místa a autentické egyptské trhy"
  },
  category: {
    en: "City Tours",
    de: "Städtereisen & Kultur",
    it: "Tour delle Città",
    ru: "Экскурсии по Городам",
    pl: "Wycieczki Miejskie",
    cz: "Městské Tours"
  },
  price: {
    amount: 10,
    currency: "$",
    unit: {
      en: "per tour / group (Local Guide Included)",
      de: "pro Tour / Gruppe (Lokaler Reiseleiter inklusive)",
      it: "per tour / gruppo (Guida Locale Inclusa)",
      ru: "за тур / группу (Местный гид включен)",
      pl: "za wycieczkę / grupę (Lokalny przewodnik w cenie)",
      cz: "za prohlídku / skupinu (Místní průvodce v ceně)"
    }
  },
  duration: {
    en: "Flexible Duration (Available from 12:00 PM until late)",
    de: "Flexible Dauer (Verfügbar ab 12:00 Uhr bis spät abends)",
    it: "Durata Flessibile (Disponibile dalle 12:00 fino a tarda notte)",
    ru: "Гибкая продолжительность (Доступно с 12:00 до позднего вечера)",
    pl: "Elastyczny czas (Dostępne od 12:00 do późnego wieczora)",
    cz: "Flexibilní délka (K dispozici od 12:00 do pozdního večera)"
  },
  departure: {
    en: "Marsa Alam Hotels (Pickup time flexible from 12:00 PM)",
    de: "Hotels in Marsa Alam (Abholzeit flexibel ab 12:00 Uhr)",
    it: "Hotel di Marsa Alam (Orario di pick-up flessibile dalle 12:00)",
    ru: "Отели Марса-Алам (Время трансфера гибкое с 12:00)",
    pl: "Hotele w Marsa Alam (Czas odbioru elastyczny od 12:00)",
    cz: "Hotely v Marsa Alam (Čas vyzvednutí flexibilní od 12:00)"
  },
  overview: {
    en: "Discover Marsa Alam like a local. Explore the town, visit local landmarks, walk through vibrant Egyptian markets, and enjoy free time for shopping and experiencing everyday authentic life away from tourist resorts.",
    de: "Entdecken Sie Marsa Alam wie ein Einheimischer. Erkunden Sie die Stadt, besuchen Sie lokale Wahrzeichen, schlendern Sie über lebendige Märkte und genießen Sie freie Zeit zum Shoppen abseits der Touristeneinrichtungen.",
    it: "Scopri Marsa Alam come un abitante del posto. Esplora la città, visita i luoghi di interesse locale, passeggia tra i vivaci mercati ed è goditi del tempo libero per lo shopping lontano dai resort.",
    ru: "Откройте для себя Марса-Алам глазами местного жителя. Исследуйте город, посетите местные достопримечательности, прогуляйтесь по колоритным рынкам и насладитесь шопингом вдали от курортов.",
    pl: "Odkryj Marsa Alam jak lokalny住h. Zwiedzaj miasto, odwiedzaj lokalne miejsca, spaceruj po tętniących życiem targach i ciesz się czasem wolnym na zakupy z dala od kurortów.",
    cz: "Objevte Marsa Alam jako místní. Prozkoumejte město, navštivte místní památky, projděte se po živých trzích a užijte si volný čas na nákupy mimo turistické rezorty."
  },
  highlights: {
    en: [
      "Unbeatable price of $10 total for your entire group/family",
      "Guided walking tour around Marsa Alam local town",
      "Visit the iconic local mosque and learn about everyday Egyptian culture",
      "Explore traditional markets with Egyptian spices, souvenirs & handcrafts",
      "Flexible departure times available anytime from 12:00 PM onwards",
      "Accompanied by a dedicated local guide throughout the experience"
    ],
    de: [
      "Unschlagbarer Preis von 10 $ insgesamt für Ihre gesamte Gruppe/Familie",
      "Geführter Rundgang durch das Zentrum von Marsa Alam",
      "Besuch der örtlichen Moschee und Einblicke in den ägyptischen Alltag",
      "Erkundung traditioneller Märkte mit Gewürzen, Souvenirs & Handwerkskunst",
      "Flexible Abfahrtszeiten jederzeit ab 12:00 Uhr verfügbar",
      "Begleitung durch einen eigenen lokalen Reiseleiter während der gesamten Tour"
    ],
    it: [
      "Prezzo imbattibile di $10 totale per l'intero gruppo/famiglia",
      "Tour guidato a piedi nel centro abitato di Marsa Alam",
      "Visita alla moschea locale e scoperta della vita quotidiana egiziana",
      "Esplora i mercati tradizionali con spezie, souvenir e artigianato",
      "Orari di partenza flessibili a partire dalle 12:00 in poi",
      "Accompagnamento da parte di una guida locale dedicata"
    ],
    ru: [
      "Выгодная цена $10 за всю вашу группу или семью",
      "Пешеходная прогулка с гидом по городу Марса-Алам",
      "Посещение местной мечети и знакомство с традициями и бытом",
      "Прогулка по восточному рынку: специи, сувениры и изделия ручной работы",
      "Гибкое время выезда в любое время начиная с 12:00",
      "Персональный местный гид на протяжении всей экскурсии"
    ],
    pl: [
      "Niesamowita cena 10 $ łącznie za całą Twoją grupę/rodzinę",
      "Piesza wycieczka z przewodnikiem po miasteczku Marsa Alam",
      "Wizyta w lokalnym meczecie i poznanie codziennego życia Egipcjan",
      "Odkrywanie tradycyjnych targów z przyprawami, pamiątkami i rękodziełem",
      "Elastyczne godziny wyjazdu dostępne od 12:00",
      "Opieka lokalnego przewodnika podczas całej wycieczki"
    ],
    cz: [
      "Bezkonkurenční cena 10 $ celkem za celou vaši skupinu/rodinu",
      "Pěší prohlídka s průvodcem po městečku Marsa Alam",
      "Návštěva místní mešity a poznání běžného života v Egyptě",
      "Prohlídka tradičních trhů s kořením, suvenýry a řemeslnými výrobky",
      "Flexibilní časy odjezdu kdykoliv od 12:00 dále",
      "Doprovod místního průvodce po celou dobu zážitku"
    ]
  },
  included: {
    en: [
      "Local guide throughout the tour",
      "Guided town walking tour",
      "Visits to the local mosque and traditional markets"
    ],
    de: [
      "Lokaler Reiseleiter während der gesamten Tour",
      "Geführter Stadtrundgang",
      "Besuch der örtlichen Moschee und traditionellen Märkte"
    ],
    it: [
      "Guida locale per tutta la durata del tour",
      "Tour a piedi guidato della città",
      "Visita alla moschea locale e ai mercati tradizionali"
    ],
    ru: [
      "Местный гид на протяжении всего тура",
      "Пешеходная обзорная прогулка по городу",
      "Посещение местной мечети и традиционных рынков"
    ],
    pl: [
      "Lokalny przewodnik podczas całej wycieczki",
      "Spacer po mieście z przewodnikiem",
      "Wizyta w lokalnym meczecie i na tradycyjnych targach"
    ],
    cz: [
      "Místní průvodce po celou dobu prohlídky",
      "Pěší prohlídka města s průvodcem",
      "Návštěva místní mešity a tradičních trhů"
    ]
  },
  whatToBring: {
    en: [
      "Comfortable walking shoes",
      "Modest clothing for visiting the local mosque",
      "Camera or smartphone",
      "Local currency (EGP) for shopping & personal purchases"
    ],
    de: [
      "Bequeme Wanderschuhe",
      "Angemessene Kleidung für den Besuch der Moschee",
      "Kamera oder Smartphone",
      "Einheimische Währung (EGP) für Shopping & Einkäufe"
    ],
    it: [
      "Scarpe comode da passeggio",
      "Abbigliamento modesto per la visita alla moschea",
      "Fotocamera o smartphone",
      "Moneta locale (EGP) per acquisti e shopping"
    ],
    ru: [
      "Удобная обувь для ходьбы",
      "Скромная одежда для посещения мечети",
      "Камера или смартфон",
      "Местная валюта (EGP) для покупок и шопинга"
    ],
    pl: [
      "Wygodne buty do chodzenia",
      "Skromne ubranie odpowiednie do wizyty w meczecie",
      "Aparat fotograficzny lub telefon",
      "Lokalna waluta (EGP) na zakupy"
    ],
    cz: [
      "Pohodlná obuv na chodění",
      "Vhodné oblečení pro návštěvu mešity",
      "Fotoaparát nebo smartphone",
      "Místní měna (EGP) na nákupy"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Free of charge (Tour price is per group, children included)",
      de: "Kostenlos (Tourpreis gilt pro Gruppe, Kinder inklusive)",
      it: "Gratuito (Il prezzo del tour è per gruppo, bambini inclusi)",
      ru: "Бесплатно (Цена тура за группу, дети включены)",
      pl: "Bezpłatnie (Cena wycieczki dotyczy grupy, dzieci w cenie)",
      cz: "Zdarma (Cena prohlídky je za skupinu, děti v cenie)"
    },
    from5to10: {
      en: "Included in group tour price",
      de: "Im Gruppenpreis enthalten",
      it: "Incluso nel prezzo del gruppo",
      ru: "Включено в стоимость тура за группу",
      pl: "W cenie wycieczki grupowej",
      cz: "Zahrnuto v ceně prohlídky za skupinu"
    },
    over10: {
      en: "Included in group tour price",
      de: "Im Gruppenpreis enthalten",
      it: "Incluso nel prezzo del gruppo",
      ru: "Включено в стоимость тура за группу",
      pl: "W cenie wycieczki grupowej",
      cz: "Zahrnuto v ceně prohlídky za skupinu"
    }
  },
  itinerary: [
    {
      step: "01",
      title: {
        en: "Hotel Departure — Flexible Timing (From 12:00 PM)",
        de: "Hotelabholung — Flexible Zeit (Ab 12:00 Uhr)",
        it: "Partenza dall'Hotel — Orario Flessibile (Dalle 12:00)",
        ru: "Выезд из отеля — Гибкое время (С 12:00)",
        pl: "Wyjazd z hotelu — Elastyczny czas (Od 12:00)",
        cz: "Odjezd z hotelu — Flexibilní čas (Od 12:00)"
      },
      description: {
        en: "Pickup from your hotel according to your preferred time slot between 12:00 PM and evening.",
        de: "Abholung von Ihrem Hotel zu Ihrer Wunschzeit zwischen 12:00 Uhr und abends.",
        it: "Pick-up dal tuo hotel nell'orario preferito tra le 12:00 e la sera.",
        ru: "Трансфер из отеля в удобное для вас время с 12:00 до вечера.",
        pl: "Odbiór z hotelu w wybranej przez Ciebie godzinie między 12:00 a wieczorem.",
        cz: "Vyzvednutí v hotelu v čase podle вашей preference mezi 12:00 a večerem."
      }
    },
    {
      step: "02",
      title: {
        en: "Marsa Alam Town & Local Mosque Visit",
        de: "Stadt Marsa Alam & Besichtigung der Moschee",
        it: "Città di Marsa Alam e Visita alla Moschea Locale",
        ru: "Город Марса-Алам и посещение местной мечети",
        pl: "Miasteczko Marsa Alam i wizyta w meczecie",
        cz: "Městečko Marsa Alam a návštěva místní mešity"
      },
      description: {
        en: "Walk through the heart of Marsa Alam town, visit a local mosque landmark, and discover local community culture.",
        de: "Spazieren Sie durch das Zentrum von Marsa Alam, besuchen Sie die örtliche Moschee und lernen Sie die Kultur der Einwohner kennen.",
        it: "Passeggia nel cuore di Marsa Alam, visita la moschea locale e scopri la cultura della comunità.",
        ru: "Прогулка по центру Марса-Алам, посещение местной мечети и знакомство с культурой местных жителей.",
        pl: "Spacer po centrum Marsa Alam, wizyta w lokalnym meczecie i poznanie kultury mieszkańców.",
        cz: "Procházka centrem Marsa Alam, návštěva místní mešity a poznání místní kultury."
      }
    },
    {
      step: "03",
      title: {
        en: "Local Market & Shopping Experience",
        de: "Einkaufserlebnis auf dem lokalen Markt",
        it: "Esperienza al Mercato Locale e Shopping",
        ru: "Местный рынок и шопинг",
        pl: "Lokalny targ i zakupy",
        cz: "Místní trh a nákupy"
      },
      description: {
        en: "Enjoy free time for shopping in traditional shops selling Egyptian spices, perfumes, oils, souvenirs, and handmade products.",
        de: "Genießen Sie freie Zeit zum Einkaufen in traditionellen Geschäften mit Gewürzen, Parfüms, Ölen, Souvenirs und Handwerkskunst.",
        it: "Goditi del tempo libero per lo shopping in negozi tradizionali di spezie, profumi, oli, souvenir e artigianato locale.",
        ru: "Свободное время для шопинга في традиционных лавках: специи, парфюмерия, масла, сувениры и ручные изделия.",
        pl: "Czas wolny na zakupy w tradycyjnych sklepach z przyprawami, perfumami, olejkami, pamiątkami i rękodziełem.",
        cz: "Užijte si volný čas na nákupy v tradičních obchůdcích s kořením, parfémy, oleji, suvenýry a ručními výrobky."
      }
    }
  ],
  paymentNote: {
    en: "City Tour Pricing: $10 total per group/family (Not per person). Transportation price is calculated separately based on pickup location and group size. Payment collected on the day of the tour.",
    de: "Preis für die Stadtrundfahrt: 10 $ insgesamt pro Gruppe/Familie (Nicht pro Person). Der Transferpreis wird je nach Standort und Gruppengröße berechnet. Zahlung am Tag der Tour.",
    it: "Prezzo Tour Città: $10 totale per gruppo/famiglia (Non a persona). Il prezzo del trasporto viene calcolato a parte in base alla posizione e al numero di persone. Pagamento il giorno del tour.",
    ru: "Цена тура: $10 за всю группу/семью (Не с человека). Трансфер оплачивается отдельно в зависимости от отеля и количества человек. Оплата в день экскурсии.",
    pl: "Cena wycieczki po mieście: 10 $ łącznie za grupę/rodzinę (Nie za osobę). Cena transportu jest obliczana osobiście w zależności od lokalizacji i liczby osób. Płatność w dniu wycieczki.",
    cz: "Cena prohlídky města: 10 $ celkem za skupinu/rodinu (Ne za osobu). Cena dopravy se počítá zvlášť podle polohy hotelu a počtu osob. Platba v den prohlídky."
  },
  disclaimer: {
    en: "Transportation costs vary depending on your hotel distance and number of guests. Food, drinks, personal shopping, and purchases are not included in the $10 tour fee.",
    de: "Die Transportkosten variieren je nach Hotelentfernung und Personenanzahl. Verpflegung, Getränke und persönliche Einkäufe sind nicht in der Tourgebühr von 10 $ enthalten.",
    it: "I costi di trasporto variano in base alla distanza dell'hotel e al numero di ospiti. Cibo, bevande e acquisti personali non sono inclusi nella quota tour di $10.",
    ru: "Стоимость трансфера зависит от удаленности отеля и количества гостей. Еда, напитки и личные покупки не входят в стоимость тура $10.",
    pl: "Koszty transportu zależą od odległości hotelu i liczby gości. Jedzenie, napoje i prywatne zakupy nie są wliczone w opłatę 10 $ za wycieczkę.",
    cz: "Náklady na dopravu se liší podle vzdálenosti hotelu a počtu hostů. Jídlo, pití a osobní nákupy nejsou zahrnuty v ceně prohlídky 10 $."
  },
  images: {
    featured: "/images/tours/marsa-alam-city-tour.jpg",
    gallery: [
      "/images/tours/marsa-alam-city-tour-1.jpg",
      "/images/tours/marsa-alam-city-tour-2.jpg",
      "/images/tours/marsa-alam-city-tour-3.jpg"
    ]
  }
}
];