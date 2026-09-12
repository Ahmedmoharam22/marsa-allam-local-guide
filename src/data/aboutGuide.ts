import { Language } from "@/types/tour";

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
}

export interface AboutGuideData {
  badge: string;
  title: string;
  subtitle: string;
  tagline: string;
  bio1: string;
  bio2: string;
  bio3: string;
  trustSectionTitle: string;
  trustPoints: TrustPoint[];
}

export const aboutGuideData: Record<Language, AboutGuideData> = {
  en: {
    badge: "Meet Your Local Guide",
    title: "Hi, I'm Mido",
    subtitle: "Your Local Guide & Diving Instructor",
    tagline: "With me, you're more than a number.",
    bio1: "I was born and raised in Marsa Alam and have spent years working as a local guide and diving instructor, helping families, couples, and travelers discover the Red Sea beyond the usual tourist routes.",
    bio2: "As a certified diving instructor and local guide, I know the coast, its reefs, calm bays, and the best places to experience Marsa Alam's marine life.",
    bio3: "You book directly with me. No call centers, no complicated booking process — just personal support from your first message until the end of your experience.",
    trustSectionTitle: "Trust & Safety",
    trustPoints: [
      {
        id: "01",
        title: "PADI & SSI Certified Diving Instructor",
        description: "PADI & SSI Certified Diving Instructor with Rescue, First Aid and Oxygen Provider training."
      },
      {
        id: "02",
        title: "Licensed & Local",
        description: "Registered with the Egyptian Chamber of Diving & Watersports (CDWS)."
      },
      {
        id: "03",
        title: "Small & Personal Groups",
        description: "Maximum 6 guests — often fewer. Enjoy a relaxed experience without overcrowded tours."
      },
      {
        id: "04",
        title: "Pay After Your Trip",
        description: "No upfront payment required. Pay after your experience."
      },
      {
        id: "05",
        title: "Local Knowledge",
        description: "Get honest advice about where to go, what to expect, and which experience is right for you."
      }
    ]
  },
  de: {
    badge: "Lernen Sie Ihren lokalen Guide kennen",
    title: "Hallo, ich bin Mido",
    subtitle: "Ihr lokaler Guide & Tauchlehrer",
    tagline: "Bei mir sind Sie mehr als nur eine Nummer.",
    bio1: "Ich bin in Marsa Alam geboren und aufgewachsen und arbeite seit Jahren als lokaler Guide und Tauchlehrer.",
    bio2: "Als zertifizierter Tauchlehrer kenne ich die Küste, die Riffe und die besten Plätze für das Unterwasserleben.",
    bio3: "Sie buchen direkt bei mir. Keine Callcenter, keine komplizierten Prozesse — nur persönliche Betreuung.",
    trustSectionTitle: "Vertrauen & Sicherheit",
    trustPoints: [
      {
        id: "01",
        title: "PADI & SSI zertifizierter Tauchlehrer",
        description: "Mit Ausbildung in Rettung, Erster Hilfe und Sauerstoffversorgung."
      },
      {
        id: "02",
        title: "Lizenziert & Lokal",
        description: "Registriert bei der Ägyptischen Kammer für Tauchen und Wassersport (CDWS)."
      },
      {
        id: "03",
        title: "Kleine & persönliche Gruppen",
        description: "Maximal 6 Gäste — oft weniger für ein entspanntes Erlebnis."
      },
      {
        id: "04",
        title: "Zahlung nach der Reise",
        description: "Keine Vorauszahlung erforderlich. Zahlen Sie nach dem Erlebnis."
      },
      {
        id: "05",
        title: "Lokale Expertise",
        description: "Ehrliche Beratung darüber, wohin Sie reisen und was Sie erwarten können."
      }
    ]
  },
  it: {
    badge: "Incontra la tua guida locale",
    title: "Ciao, sono Mido",
    subtitle: "La tua guida locale e istruttore di immersioni",
    tagline: "Con me, sei più di un semplice numero.",
    bio1: "Sono nato e cresciuto a Marsa Alam e lavoro da anni come guida locale e istruttore di immersioni.",
    bio2: "Come istruttore certificato, conosco bene la costa, le barriere coralline e i luoghi migliori.",
    bio3: "Prenoti direttamente con me. Nessun call center — solo supporto personale dal primo messaggio.",
    trustSectionTitle: "Fiducia e Sicurezza",
    trustPoints: [
      {
        id: "01",
        title: "Istruttore certificato PADI e SSI",
        description: "Con addestramento in salvataggio, primo soccorso e somministrazione di ossigeno."
      },
      {
        id: "02",
        title: "Autorizzato e Locale",
        description: "Registrato presso la Camera egiziana delle immersioni e degli sport acquatici (CDWS)."
      },
      {
        id: "03",
        title: "Gruppi piccoli e personali",
        description: "Massimo 6 ospiti per un'esperienza rilassata senza affollamento."
      },
      {
        id: "04",
        title: "Paga dopo il viaggio",
        description: "Nessun pagamento anticipato. Paga dopo la tua esperienza."
      },
      {
        id: "05",
        title: "Conoscenza locale",
        description: "Consigli sinceri su dove andare e quale esperienza fa per te."
      }
    ]
  },
  ru: {
    badge: "Ваш местный гид",
    title: "Привет, я Мидо",
    subtitle: "Ваш местный гид и инструктор по дайвингу",
    tagline: "Со мной вы больше, чем просто клиент.",
    bio1: "Я родился и вырос в Марса-Аламе и много лет работаю местным гидом и инструктором по дайвингу.",
    bio2: "Как сертифицированный инструктор, я знаю побережье, рифы и лучшие места для погружений.",
    bio3: "Бронирование напрямую со мной. Никаких колл-центров — только личная поддержка.",
    trustSectionTitle: "Надежность и безопасность",
    trustPoints: [
      {
        id: "01",
        title: "Сертифицированный инструктор PADI и SSI",
        description: "Обучение спасению, первой помощи и предоставлению кислорода."
      },
      {
        id: "02",
        title: "Лицензированный местный гид",
        description: "Зарегистрирован в Египетской палате дайвинга и водного спорта (CDWS)."
      },
      {
        id: "03",
        title: "Маленькие группы",
        description: "Максимум 6 гостей для комфортного и персонального отдыха."
      },
      {
        id: "04",
        title: "Оплата после поездки",
        description: "Без предоплаты. Оплата после экскурсии."
      },
      {
        id: "05",
        title: "Местный опыт",
        description: "Честные советы о том, куда поехать и что выбрать."
      }
    ]
  },
  pl: {
    badge: "Poznaj swojego lokalnego przewodnika",
    title: "Cześć, jestem Mido",
    subtitle: "Twój lokalny przewodnik i instruktor nurkowania",
    tagline: "Dla mnie jesteś kimś więcej niż tylko numerem.",
    bio1: "Urodziłem się i wychowałem w Marsa Alam, od lat pracując jako przewodnik i instruktor nurkowania.",
    bio2: "Jako certyfikowany instruktor znam wybrzeże, rafy i najlepsze miejsca na Morzu Czerwonym.",
    bio3: "Rezerwujesz bezpośrednio u mnie. Bez pośredników — pełne osobiste wsparcie.",
    trustSectionTitle: "Zaufanie i Bezpieczeństwo",
    trustPoints: [
      {
        id: "01",
        title: "Certyfikowany instruktor PADI & SSI",
        description: "Szkolenie ratownicze, pierwsza pomoc i podawanie tlenu."
      },
      {
        id: "02",
        title: "Licencjonowany przewodnik",
        description: "Zarejestrowany w Egipskiej Izbie Nurkowania i Sportów Wodnych (CDWS)."
      },
      {
        id: "03",
        title: "Małe grupy",
        description: "Maksymalnie 6 osób — kameralna atmosfera bez tłumów."
      },
      {
        id: "04",
        title: "Płatność po wycieczce",
        description: "Brak zaliczek. Płacisz po zakończeniu wycieczki."
      },
      {
        id: "05",
        title: "Lokalna wiedza",
        description: "Szczere porady dotyczące wyboru najlepszych atrakcji."
      }
    ]
  },
  cz: {
    badge: "Místní průvodce",
    title: "Ahoj, já jsem Mido",
    subtitle: "Váš místní průvodce a instruktor potápění",
    tagline: "Se mnou jste více než jen číslo.",
    bio1: "Narodil jsem se a vyrostl v Marsa Alam a léta pracuji jako místní průvodce a instruktor.",
    bio2: "Jako certifikovaný instruktor znám pobřeží, útesy i nejlepší místa pro potápění.",
    bio3: "Rezervujete přímo u mě. Žádná volací centra — osobní přístup od první zprávy.",
    trustSectionTitle: "Důvěra a Bezpečnost",
    trustPoints: [
      {
        id: "01",
        title: "Certifikovaný instruktor PADI & SSI",
        description: "Výcvik záchrany, první pomoci a poskytování kyslíku."
      },
      {
        id: "02",
        title: "Licencovaný místní průvodce",
        description: "Registrovaný u Egyptské komory pro potápění a vodní sporty (CDWS)."
      },
      {
        id: "03",
        title: "Malé skupiny",
        description: "Maximálně 6 hostů pro pohodový a osobní zážitek."
      },
      {
        id: "04",
        title: "Platba až po výletu",
        description: "Žádná platba předem. Platíte až po zážitku."
      },
      {
        id: "05",
        title: "Místní znalosti",
        description: "Upřímné rady o tom, kam vyrazit a co očekávat."
      }
    ]
  },
fr: {
    badge: "Rencontrez votre guide local",
    title: "Salut, moi c'est Mido",
    subtitle: "Votre guide local & instructeur de plongée",
    tagline: "Avec moi, vous êtes bien plus qu'un simple numéro.",
    bio1: "Né et élevé à Marsa Alam, j'ai passé des années à travailler comme guide local et instructeur de plongée, aidant les familles, les couples et les voyageurs à découvrir la mer Rouge au-delà des itinéraires touristiques classiques.",
    bio2: "En tant qu'instructeur certifié et guide local, je connais parfaitement la côte, ses récifs, ses baies paisibles et les meilleurs endroits pour observer la vie marine de Marsa Alam.",
    bio3: "Vous réservez directement avec moi. Pas de centre d'appels ni de processus compliqué — juste un accompagnement personnel dès votre premier message et jusqu'à la fin de votre expérience.",
    trustSectionTitle: "Confiance & Sécurité",
    trustPoints: [
      { id: "01", title: "Instructeur certifié PADI & SSI", description: "Instructeur certifié PADI & SSI avec formation en sauvetage, premiers secours et administration d'oxygène." },
      { id: "02", title: "Agréé & Local", description: "Enregistré auprès de la Chambre égyptienne de plongée et des sports nautiques (CDWS)." },
      { id: "03", title: "Petits groupes & Suivi personnalisé", description: "Maximum 6 personnes — souvent moins. Profitez d'une expérience détendue, loin des excursions surchargées." },
      { id: "04", title: "Paiement après la sortie", description: "Acompte non requis. Payez directement après votre excursion." },
      { id: "05", title: "Expertise locale", description: "Obtenez des conseils sincères sur les endroits à visiter, à quoi vous attendre et l'expérience idéale pour vous." }
    ]
  },
  nl: {
    badge: "Ontmoet je lokale gids",
    title: "Hoi, ik ben Mido",
    subtitle: "Jouw lokale gids & duikinstructeur",
    tagline: "Bij mij ben je meer dan een nummer.",
    bio1: "Geboren en getogen in Marsa Alam, werk ik al jaren als lokale gids en duikinstructeur. Ik helpt families, stellen en reizigers de Rode Zee te ontdekken buiten de standaard toeristische routes.",
    bio2: "Als gecertificeerd duikinstructeur en lokale gids ken ik de kust, de riffen, rustige baaien en de beste plekken om het onderwaterleven van Marsa Alam te ervaren.",
    bio3: "Je boekt rechtstreeks bij mij. Geen callcenters of ingewikkelde boekingsprocessen — gewoon persoonlijke ondersteuning vanaf je eerste bericht tot het einde van je ervaring.",
    trustSectionTitle: "Vertrouwen & Veiligheid",
    trustPoints: [
      { id: "01", title: "Gecertificeerd PADI & SSI Duikinstructeur", description: "PADI & SSI gecertificeerd duikinstructeur met training in reddend zwemmen, EHBO en zuurstoftoediening." },
      { id: "02", title: "Gelicentieerd & Lokaal", description: "Geregistreerd bij de Egyptian Chamber of Diving & Watersports (CDWS)." },
      { id: "03", title: "Kleine & Persoonlijke Groepen", description: "Maximaal 6 gasten — vaak minder. Geniet van een ontspannen ervaring zonder overvolle excursies." },
      { id: "04", title: "Betaal Na Je Excursie", description: "Geen vooruitbetaling vereist. Betaal pas na afloop van je ervaring." },
      { id: "05", title: "Lokale Kennis", description: "Krijg eerlijk advies over waar je het beste heen kunt gaan, wat je kunt verwachten en welke ervaring het beste bij jou past." }
    ]
  },
  hu: {
    badge: "Ismerd meg a helyi idegenvezetődet",
    title: "Szia, Mido vagyok",
    subtitle: "A helyi idegenvezetőd és búvároktatód",
    tagline: "Nálam több vagy, mint egy egyszerű vendég.",
    bio1: "Marsa Alamban születtem és nevelkedtem, és évek óta helyi idegenvezetőként és búvároktatóként dolgozom, segítve a családoknak, pároknak és utazóknak felfedezni a Vörös-tengert a megszokott turisztikai útvonalakon túl.",
    bio2: "Minősített búvároktatóként és helyi idegenvezetőként jól ismerem a tengerpartot, a korallzátonyokat, a csendes öblöket és a legjobb helyeket Marsa Alam tengeri élővilágának megfigyelésére.",
    bio3: "Közvetlenül nálam foglalhatsz. Nincsenek call centerek vagy bonyolult foglalási folyamatok — csak személyes támogatás az első üzenetedtől kezdve az élmény végéig.",
    trustSectionTitle: "Bizalom és Biztonság",
    trustPoints: [
      { id: "01", title: "PADI és SSI minősítésű búvároktató", description: "PADI és SSI minősítéssel rendelkező búvároktató mentési, elsősegély-nyújtási és oxigénadás képzettséggel." },
      { id: "02", title: "Engedéllyel rendelkező helyi szakember", description: "Az Egyiptomi Búvár és Vízi Sportok Kamarájánál (CDWS) bejegyzett szolgáltató." },
      { id: "03", title: "Kis és személyre szabott csoportok", description: "Legfeljebb 6 vendég — gyakran kevesebb. Élvezd a pihentető élményt a zsúfolt túrák nélkül." },
      { id: "04", title: "Fizetés a program után", description: "Nincs szükség előre fizetésre. Fizess az élmény után." },
      { id: "05", title: "Helyi ismeretek", description: "Kérj őszinte tanácsot arról, hová érdemes menni, mire számíthatsz, és melyik élmény a legmegfelelőbb számodra." }
    ]
  }
};