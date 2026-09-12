import { Tour } from "@/types/tour";


export const cityTours: Tour[] = [

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
    cz: "Soukromý celodenní výlet do Luxoru z Marsa Alam",
    fr: "Excursion d'une journée privée à Louxor depuis Marsa Alam",
    nl: "Privé dagexcursie naar Luxor vanaf Marsa Alam",
    hu: "Privát egynapos kirándulás Luxorba Marsa Alamból"
  },
  subtitle: {
    en: "Full-Day Private Guided Tour to Ancient Thebes (East & West Banks)",
    de: "Ganztägige private Führung durch das antike Theben (Ost- & Westufer)",
    it: "Tour Privato con Guida per l'Intera Giornata all'Antica Tebe (Riva Est e Ovest)",
    ru: "Частный однодневный тур с гидом по древним Фивам (Восточный и Западный берег)",
    pl: "Prywatna całodniowa wycieczka z przewodnikiem do starożytnych Teb (Wschodni i Zachodni Brzeg)",
    cz: "Soukromá celodenní prohlídka starověkých Théb s průvodcem (Východní a Západní břeh)",
    fr: "Visite privée guidée d'une journée complète à l'ancienne Thèbes (rives est et ouest)",
    nl: "Volledige dag privétour met gids naar het oude Thebe (Oost- & Westbank)",
    hu: "Egész napos privát idegenvezetős túra az ókori Thébába (Keleti és Nyugati part)"
  },
  category: {
    en: "City Tours",
    de: "Städtereisen & Kultur",
    it: "Tour delle Città",
    ru: "Экскурсии по Городам",
    pl: "Wycieczki Miejskie",
    cz: "Městské Tours",
    fr: "Visites de la ville",
    nl: "Stadstours",
    hu: "Városnéző túrák"
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
      cz: "za osobu (Soukromé auto a egyptolog v ceně - Min. 2 osoby)",
      fr: "par personne (Véhicule privé et égyptologue inclus - Min. 2 personnes)",
      nl: "per persoon (Privévoertuig & egyptoloog inbegrepen - Min. 2 personen)",
      hu: "főnként (Privát jármű és egyiptológus tartalmazza - Min. 2 fő)"
    }
  },
  duration: {
    en: "Full Day (Approx. 3:00 AM – 9:00 PM)",
    de: "Ganztägig (ca. 03:00 bis 21:00 Uhr)",
    it: "Intera Giornata (Circa 3:00 – 21:00)",
    ru: "Целый день (Прибл. с 3:00 до 21:00)",
    pl: "Cały dzień (Około 3:00 – 21:00)",
    cz: "Celý den (Cca 3:00 – 21:00)",
    fr: "Journée complète (Environ 3h00 – 21h00)",
    nl: "Hele dag (Ongeveer 3:00 – 21:00 uur)",
    hu: "Egész napos (Kb. 3:00 – 21:00)"
  },
  departure: {
    en: "Marsa Alam Hotels (Private Pick-up)",
    de: "Hotels in Marsa Alam (Private Abholung)",
    it: "Hotel di Marsa Alam (Pick-up Privato)",
    ru: "Отели Марса-Алам (Частный трансфер)",
    pl: "Hotele w Marsa Alam (Prywatny odbiór)",
    cz: "Hotely v Marsa Alam (Soukromý odvoz)",
    fr: "Hôtels de Marsa Alam (Prise en charge privée)",
    nl: "Hotels in Marsa Alam (Privé ophaalservice)",
    hu: "Marsa Alam-i szállodák (Privát transzfer)"
  },
  overview: {
    en: "Travel from Marsa Alam to Luxor and discover the ultimate highlights of ancient Egypt with a dedicated private Egyptologist guide and private AC vehicle, exploring both the East and West Banks of the Nile including Karnak, Valley of the Kings, and Hatshepsut Temple.",
    de: "Reisen Sie von Marsa Alam nach Luxor und entdecken Sie die Höhepunkte des antiken Ägyptens mit einem privaten Reiseleiter und Privatfahrzeug. Erkunden Sie das Ost- und Westufer des Nils, einschließlich Karnak, dem Tal der Könige und dem Hatschepsut-Tempel.",
    it: "Viaggia da Marsa Alam a Luxor e scopri le meraviglie dell'antico Egitto con una guida egittologa privata e un veicolo climatizzato riservato. Esplora le sponde Est e Ovest del Nilo, inclusi Karnak, la Valle dei Re e il Tempio di Hatshepsut.",
    ru: "Отправьтесь из Марса-Алам в Луксор и откройте для себя главные сокровища Древнего Египта с персональным гидом-египтологом и частным авто. Вы посетите Восточный и Западный берега Нила, Карнакский храм, Долину Царей и храм Хатшепсут.",
    pl: "Podróżuj z Marsa Alam do Luksoru i odkryj najważniejsze zabytki starożytnego Egiptu z prywatnym przewodnikiem-egiptologiem i prywatnym pojazdem, zwiedzając Wschodni i Zachodni Brzeg Nilu (Karnak, Dolina Królów, Świątynia Hatszepsut).",
    cz: "Cestujte z Marsa Alam do Luxoru a objevte nejvýznamnější památky starověkého Egypta s privátním průvodcem-egyptologem a soukromým vozem. Prozkoumejte Východní i Západní břeh Nilu včetně Karnaku, Údolí králů a chrámu Hatšepsut.",
    fr: "Voyagez de Marsa Alam à Louxor et découvrez les incontournables de l'Égypte ancienne avec un guide égyptologue privé dédié et un véhicule climatisé privé, en explorant les rives est et ouest du Nil, notamment Karnak, la Vallée des Rois et le temple de Hatshepsout.",
    nl: "Reis van Marsa Alam naar Luxor en ontdek de ultieme hoogtepunten van het oude Egypte met een toegewijde privé-egyptoloog en een privévoertuig met airconditioning. Verken zowel de Oost- als de Westbank van de Nijl, waaronder Karnak, de Vallei der Koningen en de Tempel van Hatsjepsoet.",
    hu: "Utazzon Marsa Alamból Luxorba, és fedezze fel az ókori Egyiptom legfőbb látnivalóit egy dedikált privát egyiptológus idegenvezetővel és egy privát légkondicionált járművel, felfedezve a Nílus keleti és nyugati partját is, beleértve a Karnaki templomot, a Királyok völgyét és Hatsepszut templomát."
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
    ],
    fr: [
      "Expérience de visite 100% privée à votre rythme avec un guide égyptologue personnel",
      "Explorez le vaste complexe du temple de Karnak et sa célèbre grande salle hypostyle",
      "Découvrez la Vallée des Rois sur la rive ouest avec accès à 3 tombeaux royaux",
      "Visitez l'impressionnant temple funéraire à terrasses de la reine Hatshepsout",
      "Arrêt photo aux statues iconiques des Colosses de Memnon",
      "Profitez d'un délicieux déjeuner inclus dans un restaurant local à Louxor",
      "Transport aller-retour confortable en limousine ou van privé climatisé",
      "Bouteille d'eau gratuite fournie dans le véhicule toute la journée"
    ],
    nl: [
      "100% privé-excursie op uw eigen tempo met een persoonlijke gids-egyptoloog",
      "Verken het uitgestrekte tempelcomplex van Karnak en de beroemde Zuilenzaal",
      "Ontdek de Vallei der Koningen op de Westbank met toegang tot 3 koninklijke tombes",
      "Bezoek de indrukwekkende terrastempel van koningin Hatsjepsoet",
      "Fotostop bij de iconische Kolossen van Memnon",
      "Geniet van een heerlijke inbegrepen lunch in een lokaal restaurant in Luxor",
      "Comfortabel retourtransport in een privélimousine of busje met airconditioning",
      "De hele dag gratis gebotteld water in het voertuig"
    ],
    hu: [
      "100%-ban privát túraélmény saját tempóban, személyes egyiptológus idegenvezetővel",
      "Fedezze fel a hatalmas Karnaki templomkomplexumot és annak híres oszlopcsarnokát",
      "Fedezze fel a Nyugati part Királyok völgyét 3 királyi sírba való belépéssel",
      "Látogasson el Hatsepszut királynő lenyűgöző, teraszos halotti templomához",
      "Fotószünet az ikonikus Memnón-kolosszusok szobrainál",
      "Élvezze az ízletes ebédet egy helyi luxori étteremben (tartalmazza)",
      "Kényelmes oda-vissza szállítás privát légkondicionált limuzinban vagy kisbuszban",
      "Ingyenes palackozott víz a járműben egész nap"
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
    ],
    fr: [
      "Véhicule récent privé et climatisé (Limousine ou Van)",
      "Guide touristique égyptologue privé et professionnel",
      "Billets d'entrée pour le temple de Karnak",
      "Billets d'entrée pour la Vallée des Rois (inclut 3 tombeaux royaux)",
      "Billets d'entrée pour le temple de Hatshepsout",
      "Déjeuner dans un restaurant local à Louxor",
      "Bouteilles d'eau gratuites dans le véhicule toute la journée",
      "Prise en charge et retour à l'hôtel depuis Marsa Alam"
    ],
    nl: [
      "Privé modern voertuig met AC (Limousine of Van)",
      "Professionele privé gids-egyptoloog",
      "Toegangskaarten voor de Karnak Tempel",
      "Toegangskaarten voor de Vallei der Koningen (inclusief 3 koninklijke tombes)",
      "Toegangskaarten voor de Tempel van Hatsjepsoet",
      "Lunch in een lokaal restaurant in Luxor",
      "Gratis gebotteld water in het voertuig de hele dag",
      "Ophalen en afzetten bij hotel in Marsa Alam"
    ],
    hu: [
      "Privát modern légkondicionált jármű (Limuzin vagy Van)",
      "Professzionális privát egyiptológus idegenvezető",
      "Belépőjegyek a Karnaki templomba",
      "Belépőjegyek a Királyok völgyébe (3 királyi sírt tartalmaz)",
      "Belépőjegyek Hatsepszut templomába",
      "Ebéd egy helyi étteremben Luxorban",
      "Ingyenes palackozott víz a járműben egész nap",
      "Szállodai felvétel és leadás Marsa Alamból"
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
    ],
    fr: [
      "Passeport ou pièce d'identité officielle",
      "Panier petit-déjeuner de l'hôtel (à commander 1 jour avant)",
      "Chaussures de marche confortables",
      "Vêtements légers et chapeau",
      "Lunettes de soleil et crème solaire",
      "Appareil photo et chargeur de téléphone",
      "Devise locale (EGP) pour dépenses personnelles et pourboires"
    ],
    nl: [
      "Paspoort of officieel identiteitsbewijs",
      "Ontbijtdoos van hotel (1 dag van tevoren aanvragen)",
      "Comfortabele wandelschoenen",
      "Luchtige kleding & hoed",
      "Zonnebril & zonnebrandcrème",
      "Camera & telefoonoplader",
      "Lokale valuta (EGP) voor persoonlijke uitgaven en fooien"
    ],
    hu: [
      "Útlevél vagy hivatalos személyi igazolvány",
      "Reggeli csomag a szállodából (1 nappal korábban igényelendő)",
      "Kényelmes sétacipő",
      "Könnyű ruházat és kalap",
      "Napszemüveg és fényvédő",
      "Fényképezőgép és telefontöltő",
      "Helyi pénznem (EGP) személyes kiadásokra és borravalóra"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Free of charge (Under 6 years old)",
      de: "Kostenlos (Unter 6 Jahren)",
      it: "Gratuito (Sotto i 6 anni)",
      ru: "Бесплатно (До 6 лет)",
      pl: "Bezpłatnie (Poniżej 6 lat)",
      cz: "Zdarma (Mladší 6 let)",
      fr: "Gratuit (Moins de 6 ans)",
      nl: "Gratis (Jonger dan 6 jaar)",
      hu: "Ingyenes (6 éves kor alatt)"
    },
    from5to10: {
      en: "Child discount applies (50% discount for children aged 6 to 11)",
      de: "Kinderermäßigung gilt (50% Rabatt für Kinder von 6 bis 11 Jahren)",
      it: "Si applica lo sconto bambini (50% di sconto per bambini da 6 a 11 anni)",
      ru: "Действует детская скидка (50% скидка для детей от 6 до 11 лет)",
      pl: "Obowiązuje zniżka dla dzieci (50% zniżki dla dzieci w wieku 6-11 lat)",
      cz: "Platí dětská sleva (50% sleva pro děti od 6 do 11 let)",
      fr: "Tarif enfant applicable (50% de réduction pour les enfants de 6 à 11 ans)",
      nl: "Kinderkorting van toepassing (50% korting voor kinderen van 6 tot 11 jaar)",
      hu: "Gyermekkedvezmény érvényes (50% kedvezmény 6 és 11 év közötti gyermekek számára)"
    },
    over10: {
      en: "Full adult rate applies (12 years and older)",
      de: "Voller Preis für Erwachsene (ab 12 Jahren)",
      it: "Tariffa intera adulti (da 12 anni in poi)",
      ru: "Полная стоимость взрослого (с 12 лет)",
      pl: "Pełna stawka dla dorosłych (od 12 lat)",
      cz: "Plná cena pro dospělé (od 12 let)",
      fr: "Plein tarif adulte applicable (12 ans et plus)",
      nl: "Volledig volwassetarief van toepassing (12 jaar en ouder)",
      hu: "Teljes felnőtt ár érvényes (12 éves kortól)"
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
        cz: "Soukromý odjezd z Marsa Alam — 03:00",
        fr: "Départ privé de Marsa Alam — 03:00",
        nl: "Privévertrek uit Marsa Alam — 03:00 uur",
        hu: "Privát indulás Marsa Alamból — 03:00"
      },
      description: {
        en: "Early morning pickup directly from your hotel in a private AC vehicle. Enjoy a comfortable drive across the Eastern Desert to Luxor.",
        de: "Frühe Abholung direkt von Ihrem Hotel im privaten klimatisierten Fahrzeug. Genießen Sie eine komfortable Fahrt durch die Östliche Wüste nach Luxor.",
        it: "Pick-up di mattina presto direttamente dal tuo hotel in un veicolo privato climatizzato. Goditi un viaggio comodo attraverso il deserto orientale verso Luxor.",
        ru: "Ранний выезд прямо из вашего отеля на частном автомобиле с кондиционером. Комфортная поездка через Восточную пустыню в Луксор.",
        pl: "Wczesny odbiór bezpośrednio z hotelu prywatnym klimatyzowanym pojazdem. Wygodna podróż przez Pustynię Wschodnią do Luksoru.",
        cz: "Ranní vyzvednutí přímo z vašeho hotelu soukromým klimatizovaným vozem. Pohodlná jízda přes Východní poušť do Luxoru.",
        fr: "Prise en charge tôt le matin directement à votre hôtel dans un véhicule privé climatisé. Profitez d'un trajet confortable à travers le désert oriental vers Louxor.",
        nl: "Vroeg in de ochtend wordt u direct bij uw hotel opgehaald in een privévoertuig met airconditioning. Geniet van een comfortabele rit door de Oostelijke Woestijn naar Luxor.",
        hu: "Kora reggeli felszállás közvetlenül a szállodájánál egy privát légkondicionált járművel. Élvezze a kényelmes utazást a Keleti-sivatagon keresztül Luxorba."
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
        cz: "Chrám v Karnaku (Východní břeh) — 09:00",
        fr: "Temple de Karnak (Rive Est) — 09:00",
        nl: "Karnak Tempel (Oostbank) — 09:00 uur",
        hu: "Karnaki templom (Keleti part) — 09:00"
      },
      description: {
        en: "Arrive in Luxor and start at Karnak Temple, one of the world's largest religious complexes. Walk through the Hypostyle Hall with your private guide.",
        de: "Ankunft in Luxor und Beginn am Karnak-Tempel, einer der größten religiösen Anlagen der Welt. Durchqueren Sie die Hypostyl-Halle mit Ihrem Reiseleiter.",
        it: "Arrivo a Luxor e visita al Tempio di Karnak, uno dei complessi religiosi più grandi al mondo. Passeggia nella Sala Ipostila con la tua guida.",
        ru: "Прибытие в Луксор. Экскурсия по Карнакскому храму — крупнейшему религиозному комплексу древнего мира. Прогулка по Гипостильному залу.",
        pl: "Przyjazd do Luksoru i zwiedzanie Świątyni w Karnaku, jednego z największych kompleksów religijnych. Przejście przez Salę Kolumnową z przewodnikiem.",
        cz: "Příjezd do Luxoru a prohlídka chrámu v Karnaku, jednoho z největších náboženských komplexů. Procházka Velkým sloupovým sálem s průvodcem.",
        fr: "Arrivée à Louxor et début de la visite au temple de Karnak, l'un des plus grands complexes religieux au monde. Traversez la grande salle hypostyle avec votre guide privé.",
        nl: "Aankomst in Luxor en start bij de Karnak Tempel, een van 's werelds grootste religieuze complexen. Wandel door de Zuilenzaal met uw privégids.",
        hu: "Érkezés Luxorba, és kezdés a Karnaki templomnál, a világ egyik legnagyobb vallási komplexumánál. Sétáljon végig az oszlopcsarnokon privát idegenvezetőjével."
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
        cz: "Oběd v místní restauraci — 12:30",
        fr: "Déjeuner dans un restaurant local — 12:30",
        nl: "Lunch in een lokaal restaurant — 12:30 uur",
        hu: "Ebéd egy helyi étteremben — 12:30"
      },
      description: {
        en: "Relax and savor a delicious lunch prepared with local Egyptian ingredients at a selected restaurant in Luxor.",
        de: "Entspannen Sie sich und genießen Sie ein köstliches Mittagessen mit lokalen ägyptischen Zutaten in einem ausgewählten Restaurant.",
        it: "Rilassati e gusta un delizioso pranzo preparato con ingredienti locali egiziani in un ristorante selezionato a Luxor.",
        ru: "Отдых и вкусный обед из блюд местной египетской кухни в проверенном ресторане Луксора.",
        pl: "Relaks i pyszny obiad przygotowany z lokalnych egipskich składników w wybranej restauracji w Luksorze.",
        cz: "Odpočinek a lahodný oběd připravený z místních surovin ve vybrané restauraci v Luxoru.",
        fr: "Détendez-vous et savourez un délicieux déjeuner préparé avec des ingrédients égyptiens locaux dans un restaurant sélectionné à Louxor.",
        nl: "Ontspan en geniet van een heerlijke lunch bereid met lokale Egyptische ingrediënten in een geselecteerd restaurant in Luxor.",
        hu: "Pihenjen és kóstolja meg a helyi egyiptomi alapanyagokból készült ízletes ebédet egy kiválasztott luxori étteremben."
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
        cz: "Údolí králů (Západní břeh) — 14:00",
        fr: "Vallée des Rois (Rive Ouest) — 14:00",
        nl: "Vallei der Koningen (Westbank) — 14:00 uur",
        hu: "Királyok völgye (Nyugati part) — 14:00"
      },
      description: {
        en: "Cross to the West Bank to explore the ancient City of the Dead. Enter 3 remarkable royal tombs carved deep into the mountains.",
        de: "Überquerung des Westufers zur Erkundung der Stadt der Toten. Besichtigung von 3 beeindruckenden königlichen Gräbern in den Felsen.",
        it: "Attraversa la sponda ovest per esplorare la Città dei Morti. Entra in 3 straordinarie tombe reali scavate nella montagna.",
        ru: "Переезд на Западный берег в 'Город Мертвых'. Посещение 3 королевских гробниц с невероятно сохранившимися фресками.",
        pl: "Przejazd na Zachodni Brzeg do Miasta Umarłych. Wejście do 3 niezwykłych grobowców królewskich wykutych w skałach.",
        cz: "Přejezd na Západní břeh do Města mrtvých. Prohlídka 3 pozoruhodných královských hrobek tesaných do skály.",
        fr: "Traversez vers la rive ouest pour explorer l'ancienne cité des morts. Entrez dans 3 remarquables tombeaux royaux creusés profondément dans la montagne.",
        nl: "Steek over naar de Westbank om de oude Stad der Doden te verkennen. Betreed 3 opmerkelijke koninklijke tombes die diep in de bergen zijn uitgehouwen.",
        hu: "Keljen át a Nyugati partra, hogy felfedezze a Holtak ősi városát. Lépjen be 3 figyelemre méltó királyi sírba, amelyeket mélyen a hegyekbe vájtak."
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
        cz: "Chrám Hatšepsut a Memnonovy kolosy — 16:00",
        fr: "Temple de Hatshepsout et Colosses de Memnon — 16:00",
        nl: "Tempel van Hatsjepsoet & Kolossen van Memnon — 16:00 uur",
        hu: "Hatsepszut temploma és Memnón-kolosszusok — 16:00"
      },
      description: {
        en: "Visit the stunning terraced Mortuary Temple of Queen Hatshepsut at Deir el-Bahari, followed by a photo stop at the gigantic Colossi of Memnon statues.",
        de: "Besuch des beeindruckenden Terrassentempels der Königin Hatschepsut in Deir el-Bahari, gefolgt von einem Fotostopp an den riesigen Memnonkolossen.",
        it: "Visita al meraviglioso Tempio Funerario della Regina Hatshepsut a Deir el-Bahari, seguito da una tappa foto ai giganteschi Colossi di Memnone.",
        ru: "Визит в уникальный храм царицы Хатшепсут в Дейр-эль-Бахри. Затем остановка у гигантских статуй Колоссов Мемнона для фото.",
        pl: "Wizyta w zachwycającej Świątyni Hatszepsut w Deir el-Bahari, a następnie przystanek na zdjęcia przy gigantycznych Kolosach Memnona.",
        cz: "Návštěva úchvatného chrámu královny Hatšepsut v Deir el-Bahari, po které následuje fotostop u gigantických Memnonových kolosů.",
        fr: "Visitez le superbe temple funéraire à terrasses de la reine Hatshepsout à Deir el-Bahari, suivi d'un arrêt photo devant les gigantesques statues des Colosses de Memnon.",
        nl: "Bezoek de indrukwekkende terrastempel van koningin Hatsjepsoet in Deir el-Bahari, gevolgd door een fotostop bij de gigantische beelden van de Kolossen van Memnon.",
        hu: "Látogasson el Hatsepszut királynő lenyűgöző teraszos halotti templomához Deir el-Bahariban, majd tegyen egy fotószünetet a gigantikus Memnón-kolosszusok szobrainál."
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
        cz: "Cesta zpět do Marsa Alam — 17:30",
        fr: "Trajet de retour vers Marsa Alam — 17:30",
        nl: "Terugreis naar Marsa Alam — 17:30 uur",
        hu: "Visszautazás Marsa Alamba — 17:30"
      },
      description: {
        en: "Begin your comfortable private journey back to Marsa Alam, arriving at your hotel between 08:30 PM and 09:30 PM.",
        de: "Beginn der privaten Rückfahrt nach Marsa Alam mit Ankunft in Ihrem Hotel zwischen 20:30 Uhr und 21:30 Uhr.",
        it: "Inizio del comodo viaggio privato di rientro a Marsa Alam, con arrivo in hotel tra le 20:30 e le 21:30.",
        ru: "Обратная поездка на частном автомобиле в Марса-Алам. Возвращение в отель ориентировочно с 20:30 до 21:30.",
        pl: "Rozpoczęcie prywatnej podróży powrotnej do Marsa Alam, przyjazd do hotelu między 20:30 a 21:30.",
        cz: "Zahájení soukromé cesty zpět do Marsa Alam, příjezd do hotelu mezi 20:30 a 21:30.",
        fr: "Commencez votre trajet retour privé et confortable vers Marsa Alam, avec une arrivée à votre hôtel entre 20h30 et 21h30.",
        nl: "Begin uw comfortabele privéreis terug naar Marsa Alam, waar u tussen 20:30 uur en 21:30 uur bij uw hotel aankomt.",
        hu: "Kezdje meg kényelmes privát utazását vissza Marsa Alamba, érkezés a szállodába 20:30 és 21:30 között."
      }
    }
  ],
  paymentNote: {
    en: "Private Trip Pricing: €170 per person based on a minimum of 2 guests. Family & group discounts available. Shared trip option available upon request via WhatsApp. Payment on day of the tour.",
    de: "Preise für Privattouren: 170 € pro Person bei mindestens 2 Personen. Familien- und Gruppenrabatte verfügbar. Gruppenreisen auf Anfrage per WhatsApp. Zahlung am Tag der Tour.",
    it: "Prezzo Tour Privato: €170 a persona per un minimo di 2 partecipanti. Sconti per famiglie e gruppi disponibili. Opzione tour di gruppo disponibile su richiesta via WhatsApp. Pagamento il giorno del tour.",
    ru: "Цена частного тура: 170 € с человека (минимум 2 гостя). Доступны скидки для семей и групп. Стоимость группового тура — по запросу в WhatsApp. Оплата в день экскурсии.",
    pl: "Cena wycieczki prywatnej: 170 € za osobę przy minimum 2 osobach. Dostępne zniżki rodzinne i grupowe. Opcja wycieczki grupowej dostępna na zapytanie przez WhatsApp. Płatność w dniu wycieczki.",
    cz: "Cena soukromého výletu: 170 € za osobu při minimálně 2 osobách. Slevy pro rodiny a skupiny k dispozici. Možnost sdíleného výletu na vyžádání přes WhatsApp. Platba v den výletu.",
    fr: "Tarif de la visite privée : 170 € par personne sur la base d'un minimum de 2 personnes. Tarifs dégressifs pour familles et groupes disponibles. Option de visite partagée disponible sur demande via WhatsApp. Paiement le jour de la visite.",
    nl: "Privétour prijzen: €170 per persoon op basis van minimaal 2 gasten. Familie- & meermensenkortingen beschikbaar. Gedeelde touroptie beschikbaar op aanvraag via WhatsApp. Betaling op de dag van de tour.",
    hu: "Privát túra ára: 170 € főnként, legalább 2 vendég esetén. Családi és csoportos kedvezmények elérhetők. Osztott túra opció kérésre elérhető WhatsApp-on. Fizetés a túra napján."
  },
  disclaimer: {
    en: "Special optional tomb entry tickets (such as King Tutankhamun or Ramses VI) and photography permits inside the tombs are not included and can be purchased on-site. Departure time is 3:00 AM; return time depends on site duration and traffic.",
    de: "Sondergräber (wie Tutanchamun oder Ramses VI.) und Fotogenehmigungen in den Gräbern sind nicht enthalten und können vor Ort gekauft werden. Abreise um 03:00 Uhr; Rückkehr hängt von der Dauer an den Stätten und dem Verkehr ab.",
    it: "I biglietti per tombe speciali (come Tutankhamon o Ramses VI) e i permessi fotografici all'interno delle tombe non sono inclusi e si acquistano sul posto. Partenza alle 3:00; l'orario di rientro dipende dai tempi di visita e dal traffico.",
    ru: "Билеты в специальные гробницы (например, Тутанхамона или Рамсеса VI) и разрешение на фотосъемку не входят в стоимость и приобретаются на месте. Выезд в 3:00, время возвращения зависит от времени на объектах.",
    pl: "Dodatkowe bilety do specjalnych grobowców (np. Tutenchamona lub Ramzesa VI) oraz pozwolenia na fotografowanie płatne na miejscu. Wyjazd o 3:00; czas powrotu zależy od czasu spędzonego w zabytkach i ruchu drogowego.",
    cz: "Vstupenky do speciálních hrobek (např. Tutanchamon nebo Ramesse VI.) a povolení k fotografování nejsou v ceně a lze je zakoupit na místě. Odjezd ve 3:00; čas návratu závisí na stráveném čase na památkách.",
    fr: "Les billets d'entrée pour les tombeaux spéciaux optionnels (tels que Toutânkhamon ou Ramsès VI) et les permis photo à l'intérieur des tombeaux ne sont pas inclus et peuvent être achetés sur place. Heure de départ : 03h00 ; l'heure de retour dépend de la durée des visites et du trafic.",
    nl: "Speciale optionele toegangskaarten voor tombes (zoals Koning Toetanchamon of Ramses VI) en fotovergunningen in de tombes zijn niet inbegrepen en kunnen ter plaatse worden gekocht. Vertrektijd is 3:00 uur; terugkeertijd is afhankelijk van de duur van het bezoek en het verkeer.",
    hu: "A speciális opcionális sírbelépők (például Tutanhamon vagy VI. Ramszesz) és a sírokon belüli fényképezési engedélyek nem tartoznak az árba, a helyszínen megvásárolhatók. Az indulási idő 3:00; a visszatérési idő a helyszínen töltött időtől és a forgalomtól függ."
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
    cz: "Historická prohlídka El Quseir",
    fr: "Visite historique d'El Quseir",
    nl: "Historische El Quseir Tour",
    hu: "Történelmi El Quseir Túra"
  },
  subtitle: {
    en: "Private Guided Walking Tour to Fortress, Old Town & Italian Heritage",
    de: "Privater geführter Rundgang zur Festung, Altstadt & italienischem Erbe",
    it: "Tour a Piedi Privato con Guida alla Fortezza, Centro Storico ed Eredità Italiana",
    ru: "Частная пешеходная экскурсия к крепости, старому городу и итальянскому наследию",
    pl: "Prywatna piesza wycieczka z przewodnikiem do twierdzy, starego miasta i dziedzictwa włoskiego",
    cz: "Soukromá pěší prohlídka pevnosti, starého města a italského dědictví s průvodcem",
    fr: "Visite à pied privée guidée de la forteresse, de la vieille ville et du patrimoine italien",
    nl: "Privé wandeltocht met gids naar het fort, de oude stad en het Italiaanse erfgoed",
    hu: "Privát idegenvezetős sétatúra a erődítményhez, az óvároshoz és az olasz örökséghez"
  },
  category: {
    en: "City Tours",
    de: "Städtereisen & Kultur",
    it: "Tour delle Città",
    ru: "Экскурсии по Городам",
    pl: "Wycieczki Miejskie",
    cz: "Městské Tours",
    fr: "Visites de la ville",
    nl: "Stadstours",
    hu: "Városnéző túrák"
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
      cz: "za prohlídku / skupinu (Soukromý průvodce a vstupenky v ceně)",
      fr: "par visite / groupe (Guide privé et billets d'entrée inclus)",
      nl: "per tour / groep (Privégids & toegangskaarten inbegrepen)",
      hu: "túránként / csoportonként (Privát idegenvezető és belépőjegyek tartalmazza)"
    }
  },
  duration: {
    en: "Half Day (Flexible Duration - Starts at 3:00 PM)",
    de: "Halbtags (Flexible Dauer - Start um 15:00 Uhr)",
    it: "Mezza Giornata (Durata flessibile - Inizio alle 15:00)",
    ru: "Полдня (Гибкая продолжительность - Старт в 15:00)",
    pl: "Pół dnia (Elastyczny czas - Start o 15:00)",
    cz: "Půl dne (Flexibilní délka - Začátek v 15:00)",
    fr: "Demi-journée (Durée flexible - Début à 15h00)",
    nl: "Halve dag (Flexibele duur - Start om 15:00 uur)",
    hu: "Félnapos (Rugalmas időtartam - Kezdés 15:00-kor)"
  },
  departure: {
    en: "Hotels near El Quseir & Marsa Alam (3:00 PM Departure)",
    de: "Hotels nahe El Quseir & Marsa Alam (Abfahrt 15:00 Uhr)",
    it: "Hotel vicino a El Quseir e Marsa Alam (Partenza ore 15:00)",
    ru: "Отели возле Эль-Кусейр и Марса-Алам (Выезд в 15:00)",
    pl: "Hotele w pobliżu El Quseir i Marsa Alam (Wyjazd o 15:00)",
    cz: "Hotely v blízkosti El Quseir a Marsa Alam (Odjezd v 15:00)",
    fr: "Hôtels près d'El Quseir et Marsa Alam (Départ à 15h00)",
    nl: "Hotels nabij El Quseir & Marsa Alam (Vertrek 15:00 uur)",
    hu: "El Quseir és Marsa Alam környéki szállodák (15:00 indulás)"
  },
  overview: {
    en: "Step beyond the resorts and discover the rich history of El Quseir. Explore the city's historic Ottoman fortress, ancient old town, historic Al-Farran mosque, and unique industrial heritage from the Italian phosphate era with a dedicated local expert guide.",
    de: "Wagen Sie einen Blick über die Resorts hinaus und entdecken Sie die reiche Geschichte von El Quseir. Erkunden Sie die historische osmanische Festung, die Altstadt, die Al-Farran-Moschee und das Erbe der italienischen Phosphat-Ära mit einem lokalen Reiseleiter.",
    it: "Oltrepassa i resort e scopri la ricca storia di El Quseir. Esplora la fortezza ottomana, il centro storico, la moschea Al-Farran e l'eredità industriale dell'era mineraria italiana con una guida locale esperta.",
    ru: "Выйдите за пределы курортов и откройте богатую историю Эль-Кусейр. Исследуйте османскую крепость, старый город, древнюю мечеть Аль-Фарран и наследие итальянской фосфатной эры с личным местным гидом.",
    pl: "Wyjdź poza resorty i odkryj bogatą historię El Quseir. Zwiedzaj osmańską twierdzę, stare miasto, zabytkowy meczet Al-Farran oraz włoskie dziedzictwo przemysłowe z prywatnym przewodnikiem.",
    cz: "Vydejte se mimo rezorty a objevte bohatou historii El Quseiru. Prozkoumejte osmanskou pevnost, staré město, mešitu Al-Farran a italské průmyslové dědictví s místním průvodcem.",
    fr: "Aventurez-vous au-delà des complexes hôteliers et découvrez la riche histoire d'El Quseir. Explorez la forteresse ottomane historique, la vieille ville, la mosquée historique Al-Farran et le patrimoine industriel unique de l'ère du phosphate italien avec un guide local passionné.",
    nl: "Stap voorbij de resorts en ontdek de rijke geschiedenis van El Quseir. Verken het historische Ottomaanse fort, de oude binnenstad, de historische Al-Farran moskee en het unieke industriële erfgoed uit het Italiaanse fosfaattijdperk met een toegewijde lokale gids.",
    hu: "Lépjen túl az üdülőhelyeken, és fedezze fel El Quseir gazdag történelmét. Fedezze fel a város oszmán erődítményét, az ősi óvárost, a történelmi Al-Farran mecsetet és az olasz foszfátkorszak egyedülálló ipari örökségét egy helyi szakértő idegenvezetővel."
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
    ],
    fr: [
      "Tarif de groupe fixe (50 € au total pour toute votre famille ou groupe)",
      "Visite de la forteresse ottomane d'El Quseir du XVIe siècle et vue depuis la tour de guet",
      "Visite à pied guidée dans les ruelles de la vieille ville d'El Quseir",
      "Découvrez la mosquée historique Al-Farran et l'hôtel emblématique El Quseir",
      "Explorez la colonie italienne, l'ancienne usine de phosphate et l'église italienne historique",
      "Guide local expert dédié à votre groupe tout au long de la visite",
      "Départ programmé à 15h00 garantissant l'accès à tous les sites historiques avant la fermeture"
    ],
    nl: [
      "Vast groepstarief (€50 totaal voor uw hele familie of groep)",
      "Bezoek het 16e-eeuwse Ottomaanse fort El Quseir & uitzicht vanaf de wachttoren",
      "Begeleide wandeltocht door de smalle steegjes van de oude binnenstad van El Quseir",
      "Ontdek de historische Al-Farran moskee en het iconische El Quseir Hotel",
      "Verken de Italiaanse kolonie, de oude fosfaatfabriek & de historische Italiaanse kerk",
      "Deskundige lokale gids exclusief voor uw groep gedurende de hele tour",
      "Gepland vertrek om 15:00 uur garandeert toegang tot alle historische locaties vóór sluitingstijd"
    ],
    hu: [
      "Fix csoportár (összesen 50 € az egész család vagy csoport számára)",
      "Látogatás a 16. századi oszmán El Quseir erődítményben és kilátás az őrtoronyból",
      "Idegenvezetős sétatúra El Quseir óvárosának szűk sikátoraiban",
      "Fedezze fel a történelmi Al-Farran mecsetet és az ikonikus El Quseir Hotelt",
      "Fedezze fel az olasz kolóniát, a régi foszfátgyárat és a történelmi olasz templomot",
      "Helyi szakértő idegenvezető a csoport rendelkezésére áll a teljes túra során",
      "Pontos 15:00 órai indulás, biztosítva a belépést minden történelmi helyszínre a zárás előtt"
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
    ],
    fr: [
      "Guide professionnel local tout au long de la visite à pied",
      "Tous les billets d'entrée pour les sites historiques mentionnés",
      "Billet d'entrée pour la forteresse d'El Quseir",
      "Visite guidée à pied de la vieille ville"
    ],
    nl: [
      "Lokale professionele gids gedurende de gehele wandeltocht",
      "Alle toegangskaarten voor vermelde historische locaties",
      "Toegangskaart voor het El Quseir Fort",
      "Begeleide wandeltocht door de oude binnenstad"
    ],
    hu: [
      "Helyi professzionális idegenvezető a teljes sétatúra során",
      "Minden belépőjegy a említett történelmi helyszínekre",
      "El Quseir erődítmény belépőjegy",
      "Idegenvezetős óvárosi sétatúra"
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
    ],
    fr: [
      "Chaussures de marche confortables",
      "Tenue couvrante pour la visite des sites historiques et religieux",
      "Appareil photo ou smartphone",
      "Chapeau et lunettes de soleil",
      "Devise locale (EGP) pour dépenses personnelles, souvenirs et pourboires"
    ],
    nl: [
      "Comfortabele wandelschoenen",
      "Bedekkende kleding voor het bezoeken van historische & religieuze locaties",
      "Camera of smartphone",
      "Hoed & zonnebril",
      "Lokale valuta (EGP) voor persoonlijke uitgaven, souvenirs & fooien"
    ],
    hu: [
      "Kényelmes sétacipő",
      "Mérsékelt ruházat a történelmi és vallási helyszínek látogatásához",
      "Fényképezőgép vagy okostelefon",
      "Kalap és napszemüveg",
      "Helyi pénznem (EGP) személyes kiadásokra, szuvenírekre és borravalóra"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Free of charge (Tour price is per group, children included)",
      de: "Kostenlos (Tourpreis gilt pro Gruppe, Kinder inklusive)",
      it: "Gratuito (Il prezzo del tour è per gruppo, bambini inclusi)",
      ru: "Бесплатно (Цена тура за группу, дети включены)",
      pl: "Bezpłatnie (Cena wycieczki dotyczy grupy, dzieci w cenie)",
      cz: "Zdarma (Cena prohlídky je za skupinu, děti v cenie)",
      fr: "Gratuit (Le prix de la visite est par groupe, enfants inclus)",
      nl: "Gratis (Tourprijs is per groep, kinderen inbegrepen)",
      hu: "Ingyenes (A túra ára csoportonként értendő, a gyermekek beletartoznak)"
    },
    from5to10: {
      en: "Included in group tour price",
      de: "Im Gruppenpreis enthalten",
      it: "Incluso nel prezzo del gruppo",
      ru: "Включено в стоимость тура за группу",
      pl: "W cenie wycieczki grupowej",
      cz: "Zahrnuto v ceně prohlídky za skupinu",
      fr: "Inclus dans le prix du groupe",
      nl: "Inbegrepen in de groepsprijs",
      hu: "Tartalmazza a csoportos túra ára"
    },
    over10: {
      en: "Included in group tour price",
      de: "Im Gruppenpreis enthalten",
      it: "Incluso nel prezzo del gruppo",
      ru: "Включено в стоимость тура за группу",
      pl: "W cenie wycieczki grupowej",
      cz: "Zahrnuto v ceně prohlídky za skupinu",
      fr: "Inclus dans le prix du groupe",
      nl: "Inbegrepen in de groepsprijs",
      hu: "Tartalmazza a csoportos túra ára"
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
        cz: "Odjezd z hotelu — 15:00",
        fr: "Départ de l'hôtel — 15:00",
        nl: "Vertrek vanuit hotel — 15:00 uur",
        hu: "Indulás a szállodából — 15:00"
      },
      description: {
        en: "Pick up from your hotel. Timed strictly for 3:00 PM to ensure visiting the Ottoman fortress before closing time.",
        de: "Abholung vom Hotel. Pünktlich um 15:00 Uhr, um die osmanische Festung vor der Schließung zu besuchen.",
        it: "Pick-up dall'hotel. Partenza tassativa alle 15:00 per visitare la fortezza ottomana prima della chiusura.",
        ru: "Трансфер из отеля. Выезд строго в 15:00, чтобы успеть посетить османскую крепость до закрытия.",
        pl: "Odbiór z hotelu. Punktualnie o 15:00, aby zdążyć zwiedzić twierdzę osmańską przed zamknięciem.",
        cz: "Vyzvednutí v hotelu. Přesně v 15:00 pro zajištění návštěvy osmanské pevnosti před zavírací dobou.",
        fr: "Prise en charge à votre hôtel. Départ strictement à 15h00 pour garantir la visite de la forteresse ottomane avant l'heure de fermeture.",
        nl: "Ophalen bij uw hotel. Strikt gepland om 15:00 uur om het bezoeken van het Ottomaanse fort voor sluitingstijd te garanderen.",
        hu: "Felvétel a szállodánál. Szigorúan 15:00-ra időzítve, hogy biztosítsák az oszmán erődítmény meglátogatását a zárás előtt."
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
        cz: "Osmanská pevnost El Quseir — 15:30",
        fr: "Forteresse ottomane d'El Quseir — 15:30",
        nl: "Ottomaans fort van El Quseir — 15:30 uur",
        hu: "El Quseir Oszmán Erődítmény — 15:30"
      },
      description: {
        en: "Explore the 16th-century Ottoman fortress. Learn about El Quseir's history as a Red Sea trade & pilgrimage port and enjoy views from the watchtower.",
        de: "Erkunden Sie die osmanische Festung aus dem 16. Jahrhundert und erfahren Sie mehr über die Geschichte des Hafens. Genießen Sie die Aussicht vom Turm.",
        it: "Esplora la fortezza del XVI secolo. Scopri la storia del porto di El Quseir e goditi la vista dalla torre di guardia.",
        ru: "Экскурсия по крепости XVI века. Узнайте об истории порта и насладитесь панорамным видом со смотровой башни.",
        pl: "Zwiedzanie XVI-wiecznej twierdzy osmańskiej. Poznaj historię portu i podziwiaj widok z wieży strażniczej.",
        cz: "Prohlídka pevnosti ze 16. století. Objevte historii přístavu a užijte si výhled strážní věže.",
        fr: "Explorez la forteresse ottomane du XVIe siècle. Découvrez l'histoire d'El Quseir en tant que port de commerce et de pèlerinage de la mer Rouge et admirez la vue depuis la tour de guet.",
        nl: "Verken het 16e-eeuwse Ottomaanse fort. Leer over de geschiedenis van El Quseir als handels- en bedevaartshaven aan de Rode Zee en geniet van het uitzicht vanaf de wachttoren.",
        hu: "Fedezze fel a 16. századi oszmán erődítményt. Ismerje meg El Quseir Vörös-tengeri kereskedelmi és zarándokkikötői történelmét, és élvezze a kilátást az őrtoronyból."
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
        cz: "Staré město a mešita Al-Farran — 17:00",
        fr: "Vieille ville et mosquée Al-Farran — 17:00",
        nl: "Oude Binnenstad & Al-Farran Moskee — 17:00 uur",
        hu: "Óváros és Al-Farran mecset — 17:00"
      },
      description: {
        en: "Stroll through the narrow streets of the Old Town. Visit the historic Al-Farran Mosque and admire traditional architecture and the historic El Quseir Hotel.",
        de: "Spaziergang durch die Altstadt. Besuchen Sie die historische Al-Farran-Moschee und bewundern Sie die traditionelle Architektur.",
        it: "Passeggiata tra i vicoli del centro storico. Visita la Moschea Al-Farran e ammira l'architettura locale e lo storico Hotel El Quseir.",
        ru: "Прогулка по колоритным улочкам Старого города. Посещение мечети Аль-Фарран и осмотр традиционной архитектуры.",
        pl: "Spacer wąskimi uliczkami Starego Miasta. Wizyta w meczecie Al-Farran i podziwianie tradycyjnej architektury.",
        cz: "Procházka uličkami starého města. Návštěva mešity Al-Farran a obdivování traditionalní architektury.",
        fr: "Flânez dans les ruelles étroites de la vieille ville. Visitez la mosquée historique Al-Farran et admirez l'architecture traditionnelle ainsi que le bâtiment historique de l'hôtel El Quseir.",
        nl: "Wandel door de smalle straatjes van de oude binnenstad. Bezoek de historische Al-Farran moskee en bewonder de traditionele architectuur en het historische El Quseir Hotel.",
        hu: "Sétáljon végig az óváros szűk utcáin. Látogasson el a történelmi Al-Farran mecsetbe, és csodálja meg a tradicionális építészetet és a történelmi El Quseir Hotelt."
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
        cz: "Italská kolonie a průmyslové dědictví — 18:00",
        fr: "Colonie italienne et patrimoine du phosphate — 18:00",
        nl: "Italiaanse Kolonie & Fosfaaterfgoed — 18:00 uur",
        hu: "Olasz kolónia és foszfát örökség — 18:00"
      },
      description: {
        en: "Discover the remains of the old Italian phosphate mining company era, the historical church built for Italian engineers, and local heritage.",
        de: "Entdecken Sie die Überreste der alten italienischen Phosphatmine, die historische italienische Kirche und das lokale Erbe.",
        it: "Scopri i resti della vecchia era mineraria italiana, la chiesa storica costruita per gli ingegneri italiani e la cultura locale.",
        ru: "Осмотр построек времен итальянских фосфатных разработок, старинной итальянской церкви и индустриальных памятников.",
        pl: "Odkryj pozostałości z czasów włoskiego wydobycia fosfatów, zabytkowy kościół włoski oraz lokalne dziedzictwo.",
        cz: "Objevení pozůstatků z éry italské těžby fosfátů, historického kostela pro italské inženýry a místního dědictví.",
        fr: "Découvrez les vestiges de l'époque de l'ancienne compagnie minière de phosphate italienne, l'église historique construite pour les ingénieurs italiens et le patrimoine local.",
        nl: "Ontdek de overblijfselen van het oude Italiaanse fosfaatmijnbouwtijdperk, de historische kerk gebouwd voor Italiaanse ingenieurs en het lokale erfgoed.",
        hu: "Fedezze fel a régi olasz foszfátbányászati cég korszakának maradványait, az olasz mérnökök számára épült történelmi templomot és a helyi örökséget."
      }
    }
  ],
  paymentNote: {
    en: "Private Tour Pricing: €50 total per group/family (Not per person). Hotel transfer price is calculated separately based on distance. Payment collected on the day of the tour.",
    de: "Preis für die private Tour: 50 € insgesamt pro Gruppe/Familie (Nicht pro Person). Der Transferpreis wird je nach Entfernung berechnet. Zahlung am Tag der Tour.",
    it: "Prezzo Tour Privato: €50 totale per gruppo/famiglia (Non a persona). Il prezzo del transfer viene calcolato a parte in base alla distanza. Pagamento il giorno del tour.",
    ru: "Цена частного тура: 50 € за всю группу/семью (Не с человека). Трансфер оплачивается отдельно в зависимости от расстояния. Оплата в день экскурсии.",
    pl: "Cena wycieczki prywatnej: 50 € łącznie za grupę/rodzinę (Nie za osobę). Cena transferu jest obliczana osobiście w zależności od odległości. Płatność w dniu wycieczki.",
    cz: "Cena soukromé prohlídky: 50 € celkem za skupinu/rodinu (Ne za osobu). Cena transferu se počítá zvlášť podle vzdálenosti. Platba v den prohlídky.",
    fr: "Tarif de la visite privée : 50 € au total par groupe/famille (Pas par personne). Le prix du transfert de l'hôtel est calculé séparément en fonction de la distance. Paiement effectué le jour de la visite.",
    nl: "Prijzen privétour: €50 totaal per groep/familie (Niet per persoon). De hoteltransferprijs wordt afzonderlijk berekend op basis van afstand. Betaling vindt plaats op de dag van de tour.",
    hu: "Privát túra ára: Összesen 50 € csoportonként/családonként (Nem főnként). A szállodai transzfer ára a távolság alapján külön kerül kiszámításra. Fizetés a túra napján."
  },
  disclaimer: {
    en: "Strict 3:00 PM departure required due to fortress closing hours (5:00 PM). Hotel transfer costs vary depending on location. Food and drinks are not included.",
    de: "Pünktliche Abfahrt um 15:00 Uhr erforderlich wegen der Schließung der Festung (17:00 Uhr). Transferkosten variieren je nach Lage des Hotels. Speisen und Getränke nicht enthalten.",
    it: "Partenza tassativa alle 15:00 causa orario di chiusura della fortezza (17:00). I costi di trasferimento variano in base alla posizione. Cibo e bevande non inclusi.",
    ru: "Выезд строго в 15:00 из-за времени работы крепости (до 17:00). Стоимость трансфера зависит от расположения отеля. Еда и напитки не входят в стоимость.",
    pl: "Wymagany punktualny wyjazd o 15:00 ze względu na godziny otwarcia twierdzy (do 17:00). Koszt transferu zależy od lokalizacji hotelu. Posiłki i napoje nie są w cenie.",
    cz: "Odjezd přesně v 15:00 z důvodu zavírací doby pevnosti (17:00). Náklady na transfer se liší podle polohy hotelu. Jídlo a pití nejsou v ceně.",
    fr: "Départ strict à 15h00 requis en raison des heures de fermeture de la forteresse (17h00). Les frais de transfert depuis l'hôtel varient selon l'emplacement. La nourriture et les boissons ne sont pas incluses.",
    nl: "Strikt vertrek om 15:00 uur vereist vanwege sluitingstijd van het fort (17:00 uur). Hoteltransferkosten variëren afhankelijk van de locatie. Eten en drinken zijn niet inbegrepen.",
    hu: "Szigorú 15:00 órai indulás szükséges az erődítmény zárási ideje miatt (17:00). A szállodai transzfer költségei a helyszíntől függően változnak. Az ételeket és italokat az ár nem tartalmazza."
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
    cz: "Prohlídka města Marsa Alam a nákupy",
    fr: "Visite de la ville de Marsa Alam et shopping",
    nl: "Marsa Alam Stadstour & Shoppen",
    hu: "Marsa Alam Városnézés és Vásárlás"
  },
  subtitle: {
    en: "Local City Walking Tour, Cultural Sites & Authentic Egyptian Markets",
    de: "Lokaler Stadtrundgang, Kulturstätten & authentische ägyptische Märkte",
    it: "Tour a Piedi della Città, Siti Culturali e Mercati Egiziani Autentici",
    ru: "Пешеходная прогулка по городу, культурные места и настоящие египетские рынки",
    pl: "Lokalny spacer po mieście, miejsca kulturowe i autentyczne egipskie targi",
    cz: "Místní pěší prohlídka města, kulturní místa a autentické egyptské trhy",
    fr: "Visite à pied de la ville, sites culturels et marchés égyptiens authentiques",
    nl: "Lokale wandeltocht, culturele bezienswaardigheden & authentieke Egyptische markten",
    hu: "Helyi városi sétatúra, kulturális látnivalók és autentikus egyiptomi piacok"
  },
  category: {
    en: "City Tours",
    de: "Städtereisen & Kultur",
    it: "Tour delle Città",
    ru: "Экскурсии по Городам",
    pl: "Wycieczki Miejskie",
    cz: "Městské Tours",
    fr: "Visites de la ville",
    nl: "Stadstours",
    hu: "Városnéző túrák"
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
      cz: "za prohlídku / skupinu (Místní průvodce v ceně)",
      fr: "par visite / groupe (Guide local inclus)",
      nl: "per tour / groep (Lokale gids inbegrepen)",
      hu: "túránként / csoportonként (Helyi idegenvezető tartalmazza)"
    }
  },
  duration: {
    en: "Flexible Duration (Available from 12:00 PM until late)",
    de: "Flexible Dauer (Verfügbar ab 12:00 Uhr bis spät abends)",
    it: "Durata Flessibile (Disponibile dalle 12:00 fino a tarda notte)",
    ru: "Гибкая продолжительность (Доступно с 12:00 до позднего вечера)",
    pl: "Elastyczny czas (Dostępne od 12:00 do późnego wieczora)",
    cz: "Flexibilní délka (K dispozici od 12:00 do pozdního večera)",
    fr: "Durée flexible (Disponible de 12h00 jusqu'à tard)",
    nl: "Flexibele duur (Beschikbaar van 12:00 uur tot laat)",
    hu: "Rugalmas időtartam (Elérhető 12:00 órától későig)"
  },
  departure: {
    en: "Marsa Alam Hotels (Pickup time flexible from 12:00 PM)",
    de: "Hotels in Marsa Alam (Abholzeit flexibel ab 12:00 Uhr)",
    it: "Hotel di Marsa Alam (Orario di pick-up flessibile dalle 12:00)",
    ru: "Отели Марса-Алам (Время трансфера гибкое с 12:00)",
    pl: "Hotele w Marsa Alam (Czas odbioru elastyczny od 12:00)",
    cz: "Hotely v Marsa Alam (Čas vyzvednutí flexibilní od 12:00)",
    fr: "Hôtels de Marsa Alam (Heure de prise en charge flexible à partir de 12h00)",
    nl: "Hotels in Marsa Alam (Ophaaltijd flexibel vanaf 12:00 uur)",
    hu: "Marsa Alam-i szállodák (A felvételi időpont 12:00-tól rugalmas)"
  },
  overview: {
    en: "Discover Marsa Alam like a local. Explore the town, visit local landmarks, walk through vibrant Egyptian markets, and enjoy free time for shopping and experiencing everyday authentic life away from tourist resorts.",
    de: "Entdecken Sie Marsa Alam wie ein Einheimischer. Erkunden Sie die Stadt, besuchen Sie lokale Wahrzeichen, schlendern Sie über lebendige Märkte und genießen Sie freie Zeit zum Shoppen abseits der Touristeneinrichtungen.",
    it: "Scopri Marsa Alam come un abitante del posto. Esplora la città, visita i luoghi di interesse locale, passeggia tra i vivaci mercati ed è goditi del tempo libero per lo shopping lontano dai resort.",
    ru: "Откройте для себя Марса-Алам глазами местного жителя. Исследуйте город, посетите местные достопримечательности, прогуляйтесь по колоритным рынкам и насладитесь шопингом вдали от курортов.",
    pl: "Odkryj Marsa Alam jak lokalny住h. Zwiedzaj miasto, odwiedzaj lokalne miejsca, spaceruj po tętniących życiem targach i ciesz się czasem wolnym na zakupy z dala od kurortów.",
    cz: "Objevte Marsa Alam jako místní. Prozkoumejte město, navštivte místní památky, projděte se po živých trzích a užijte si volný čas na nákupy mimo turistické rezorty.",
    fr: "Découvrez Marsa Alam comme un habitant. Explorez la ville, visitez les monuments locaux, promenez-vous dans les marchés égyptiens animés et profitez d'un temps libre pour faire du shopping et découvrir la vie quotidienne authentique loin des complexes hôteliers.",
    nl: "Ontdek Marsa Alam als een local. Verken de stad, bezoek lokale bezienswaardigheden, wandel over levendige Egyptische markten en geniet van vrije tijd om te winkelen en het dagelijkse authentieke leven te ervaren, weg van de toeristische resorts.",
    hu: "Fedezze fel Marsa Alamot úgy, mint egy helyi. Fedezze fel a várost, látogasson el a helyi nevezetességekhez, sétáljon végig a nyüzsgő egyiptomi piacokon, és élvezze a szabadidőt a vásárlásra és a mindennapi autentikus élet megtapasztalására a turisztikai üdülőhelyektől távol."
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
    ],
    fr: [
      "Prix imbattable de 10 $ au total pour l'ensemble de votre groupe/famille",
      "Visite à pied guidée autour de la ville de Marsa Alam",
      "Visitez la mosquée locale emblématique et découvrez la culture égyptienne au quotidien",
      "Explorez les marchés traditionnels avec épices égyptiennes, souvenirs et artisanat",
      "Heures de départ flexibles disponibles à tout moment à partir de 12h00",
      "Accompagné d'un guide local dédié tout au long de l'expérience"
    ],
    nl: [
      "Onverslaanbare prijs van $10 totaal voor uw gehele groep/familie",
      "Begeleide wandeltocht door de lokale stad Marsa Alam",
      "Bezoek de iconische lokale moskee en leer over de alledaagse Egyptische cultuur",
      "Verken traditionele markten met Egyptische kruiden, souvenirs & handwerk",
      "Flexibele vertrektijden beschikbaar op elk moment vanaf 12:00 uur",
      "Begeleid door een toegewijde lokale gids gedurende de gehele ervaring"
    ],
    hu: [
      "Verhetetlen 10 $ összár az egész csoport/család számára",
      "Idegenvezetős sétatúra Marsa Alam városában",
      "Látogatás az ikonikus helyi mecsetben és a mindennapi egyiptomi kultúra megismerése",
      "Hagyományos piacok felfedezése egyiptomi fűszerekkel, szuvenírekkel és kézműves termékekkel",
      "Rugalmas indulási időpontok 12:00 órától kezdődően bármikor",
      "Dedikált helyi idegenvezető kíséri az élmény során"
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
    ],
    fr: [
      "Guide local tout au long de la visite",
      "Visite guidée à pied de la ville",
      "Visites de la mosquée locale et des marchés traditionnels"
    ],
    nl: [
      "Lokale gids gedurende de gehele tour",
      "Begeleide stadswandeling",
      "Bezoeken aan de lokale moskee en traditionele markten"
    ],
    hu: [
      "Helyi idegenvezető a túra teljes ideje alatt",
      "Idegenvezetős városi sétatúra",
      "Látogatás a helyi mecsetben és a hagyományos piacokon"
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
    ],
    fr: [
      "Chaussures de marche confortables",
      "Tenue couvrante pour la visite de la mosquée locale",
      "Appareil photo ou smartphone",
      "Devise locale (EGP) pour le shopping et les achats personnels"
    ],
    nl: [
      "Comfortabele wandelschoenen",
      "Bedekkende kleding voor het bezoeken van de lokale moskee",
      "Camera of smartphone",
      "Lokale valuta (EGP) voor winkelen & persoonlijke aankopen"
    ],
    hu: [
      "Kényelmes sétacipő",
      "Mérsékelt ruházat a helyi mecset látogatásához",
      "Fényképezőgép vagy okostelefon",
      "Helyi pénznem (EGP) vásárláshoz és személyes vételhez"
    ]
  },
  childrenPolicy: {
    under5: {
      en: "Free of charge (Tour price is per group, children included)",
      de: "Kostenlos (Tourpreis gilt pro Gruppe, Kinder inklusive)",
      it: "Gratuito (Il prezzo del tour è per gruppo, bambini inclusi)",
      ru: "Бесплатно (Цена тура за группу, дети включены)",
      pl: "Bezpłatnie (Cena wycieczki dotyczy grupy, dzieci w cenie)",
      cz: "Zdarma (Cena prohlídky je za skupinu, děti v cenie)",
      fr: "Gratuit (Le prix de la visite est par groupe, enfants inclus)",
      nl: "Gratis (Tourprijs is per groep, kinderen inbegrepen)",
      hu: "Ingyenes (A túra ára csoportonként értendő, a gyermekek beletartoznak)"
    },
    from5to10: {
      en: "Included in group tour price",
      de: "Im Gruppenpreis enthalten",
      it: "Incluso nel prezzo del gruppo",
      ru: "Включено в стоимость тура за группу",
      pl: "W cenie wycieczki grupowej",
      cz: "Zahrnuto v ceně prohlídky za skupinu",
      fr: "Inclus dans le prix du groupe",
      nl: "Inbegrepen in de groepsprijs",
      hu: "Tartalmazza a csoportos túra ára"
    },
    over10: {
      en: "Included in group tour price",
      de: "Im Gruppenpreis enthalten",
      it: "Incluso nel prezzo del gruppo",
      ru: "Включено в стоимость тура за группу",
      pl: "W cenie wycieczki grupowej",
      cz: "Zahrnuto v ceně prohlídky za skupinu",
      fr: "Inclus dans le prix du groupe",
      nl: "Inbegrepen in de groepsprijs",
      hu: "Tartalmazza a csoportos túra ára"
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
        cz: "Odjezd z hotelu — Flexibilní čas (Od 12:00)",
        fr: "Départ de l'hôtel — Horaire flexible (À partir de 12h00)",
        nl: "Vertrek vanuit hotel — Flexibele tijd (Vanaf 12:00 uur)",
        hu: "Indulás a szállodából — Rugalmas időpont (12:00 órától)"
      },
      description: {
        en: "Pickup from your hotel according to your preferred time slot between 12:00 PM and evening.",
        de: "Abholung von Ihrem Hotel zu Ihrer Wunschzeit zwischen 12:00 Uhr und abends.",
        it: "Pick-up dal tuo hotel nell'orario preferito tra le 12:00 e la sera.",
        ru: "Трансфер из отеля в удобное для вас время с 12:00 до вечера.",
        pl: "Odbiór z hotelu w wybranej przez Ciebie godzinie między 12:00 a wieczorem.",
        cz: "Vyzvednutí v hotelu v čase podle вашей preference mezi 12:00 a večerem.",
        fr: "Prise en charge à votre hôtel selon le créneau horaire de votre choix entre 12h00 et le soir.",
        nl: "Ophalen bij uw hotel op het door u gewenste tijdstip tussen 12:00 uur en 's avonds.",
        hu: "Felvétel a szállodából az Ön által előnyben részesített időpontban 12:00 és este között."
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
        cz: "Městečko Marsa Alam a návštěva místní mešity",
        fr: "Ville de Marsa Alam et visite de la mosquée locale",
        nl: "Marsa Alam Stad & Bezoek aan de Lokale Moskee",
        hu: "Marsa Alam város és a helyi mecset látogatása"
      },
      description: {
        en: "Walk through the heart of Marsa Alam town, visit a local mosque landmark, and discover local community culture.",
        de: "Spazieren Sie durch das Zentrum von Marsa Alam, besuchen Sie die örtliche Moschee und lernen Sie die Kultur der Einwohner kennen.",
        it: "Passeggia nel cuore di Marsa Alam, visita la moschea locale e scopri la cultura della comunità.",
        ru: "Прогулка по центру Марса-Алам, посещение местной мечети и знакомство с культурой местных жителей.",
        pl: "Spacer po centrum Marsa Alam, wizyta w lokalnym meczecie i poznanie kultury mieszkańców.",
        cz: "Procházka centrem Marsa Alam, návštěva místní mešity a poznání místní kultury.",
        fr: "Promenez-vous au cœur de la ville de Marsa Alam, visitez une mosquée locale emblématique et découvrez la culture de la communauté locale.",
        nl: "Wandel door het hart van de stad Marsa Alam, bezoek een lokale moskee en ontdek de lokale gemeenschapscultuur.",
        hu: "Sétáljon végig Marsa Alam város szívén, látogasson el egy helyi mecsethez, és fedezze fel a helyi közösségi kultúrát."
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
        cz: "Místní trh a nákupy",
        fr: "Marché local et expérience shopping",
        nl: "Lokale Markt & Shopping Ervaring",
        hu: "Helyi piac és vásárlási élmény"
      },
      description: {
        en: "Enjoy free time for shopping in traditional shops selling Egyptian spices, perfumes, oils, souvenirs, and handmade products.",
        de: "Genießen Sie freie Zeit zum Einkaufen in traditionellen Geschäften mit Gewürzen, Parfüms, Ölen, Souvenirs und Handwerkskunst.",
        it: "Goditi del tempo libero per lo shopping in negozi tradizionali di spezie, profumi, oli, souvenir e artigianato locale.",
        ru: "Свободное время для шопинга в традиционных лавках: специи, парфюмерия, масла, сувениры и ручные изделия.",
        pl: "Czas wolny na zakupy w tradycyjnych sklepach z przyprawami, perfumami, olejkami, pamiątkami i rękodziełem.",
        cz: "Užijte si volný čas na nákupy v tradičních obchůdcích s kořením, parfémy, oleji, suvenýry a ručními výrobky.",
        fr: "Profitez d'un temps libre pour faire du shopping dans des magasins traditionnels proposant épices égyptiennes, parfums, huiles, souvenirs et produits faits main.",
        nl: "Geniet van vrije tijd om te winkelen in traditionele winkels die Egyptische kruiden, parfums, oliën, souvenirs en handgemaakte producten verkopen.",
        hu: "Élvezze a szabadidőt a vásárlásra a hagyományos üzletekben, ahol egyiptomi fűszereket, parfümöket, olajokat, szuveníreket és kézműves termékeket árulnak."
      }
    }
  ],
  paymentNote: {
    en: "City Tour Pricing: $10 total per group/family (Not per person). Transportation price is calculated separately based on pickup location and group size. Payment collected on the day of the tour.",
    de: "Preis für die Stadtrundfahrt: 10 $ insgesamt pro Gruppe/Familie (Nicht pro Person). Der Transferpreis wird je nach Standort und Gruppengröße berechnet. Zahlung am Tag der Tour.",
    it: "Prezzo Tour Città: $10 totale per gruppo/famiglia (Non a persona). Il prezzo del trasporto viene calcolato a parte in base alla posizione e al numero di persone. Pagamento il giorno del tour.",
    ru: "Цена тура: $10 за всю группу/семью (Не с человека). Трансфер оплачивается отдельно в зависимости от отеля и количества человек. Оплата в день экскурсии.",
    pl: "Cena wycieczki po mieście: 10 $ łącznie za grupę/rodzinę (Nie za osobę). Cena transportu jest obliczana osobiście w zależności od lokalizacji i liczby osób. Płatność w dniu wycieczki.",
    cz: "Cena prohlídky města: 10 $ celkem za skupinu/rodinu (Ne za osobu). Cena dopravy se počítá zvlášť podle polohy hotelu a počtu osob. Platba v den prohlídky.",
    fr: "Tarif de la visite de la ville : 10 $ au total par groupe/famille (Pas par personne). Le prix du transport est calculé séparément en fonction du lieu de prise en charge et de la taille du groupe. Paiement effectué le jour de la visite.",
    nl: "Prijzen stadstour: $10 totaal per groep/familie (Niet per persoon). De vervoersprijs wordt afzonderlijk berekend op basis van ophaallocatie en groepsgrootte. Betaling vindt plaats op de dag van de tour.",
    hu: "Városnéző túra ára: Összesen 10 $ csoportonként/családonként (Nem főnként). A szállítási ár a felvételi helyszín és a csoport létszáma alapján külön kerül kiszámításra. Fizetés a túra napján."
  },
  disclaimer: {
    en: "Transportation costs vary depending on your hotel distance and number of guests. Food, drinks, personal shopping, and purchases are not included in the $10 tour fee.",
    de: "Die Transportkosten variieren je nach Hotelentfernung und Personenanzahl. Verpflegung, Getränke und persönliche Einkäufe sind nicht in der Tourgebühr von 10 $ enthalten.",
    it: "I costi di trasporto variano in base alla distanza dell'hotel e al numero di ospiti. Cibo, bevande e acquisti personali non sono inclusi nella quota tour di $10.",
    ru: "Стоимость трансфера зависит от удаленности отеля и количества гостей. Еда, напитки и личные покупки не входят в стоимость тура $10.",
    pl: "Koszty transportu zależą od odległości hotelu i liczby gości. Jedzenie, napoje i prywatne zakupy nie są wliczone w opłatę 10 $ za wycieczkę.",
    cz: "Náklady na dopravu se liší podle vzdálenosti hotelu a počtu hostů. Jídlo, pití a osobní nákupy nejsou zahrnuty v ceně prohlídky 10 $.",
    fr: "Les frais de transport varient selon la distance de votre hôtel et le nombre de personnes. La nourriture, les boissons, le shopping personnel et les achats ne sont pas inclus dans les frais de visite de 10 $.",
    nl: "Vervoerskosten variëren afhankelijk van de afstand van uw hotel en het aantal gasten. Eten, drinken, persoonlijke inkopen en aankopen zijn niet inbegrepen in de tourprijs van $10.",
    hu: "A szállítási költségek a szálloda távolságától és a vendégek számától függően változnak. Az ételeket, italokat, személyes vásárlásokat és vételeket a 10 $-os túradíj nem tartalmazza."
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
]