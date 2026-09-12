import { Language } from "@/types/tour";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: Record<Language, { badge: string; title: string; subtitle: string; items: FaqItem[] }> = {
  en: {
    badge: "Got Questions?",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know before booking your Red Sea adventure.",
    items: [
      {
        question: "What are the prices for our tours and excursions?",
        answer: "Tour prices vary depending on the specific trip, destination (such as Dolphin House, Hamata, or Abu Dabbab), and group size. Contact us with your desired excursion, and we will send you a clear, detailed quote with zero hidden fees. We ensure completely transparent pricing."
      },
      {
        question: "How long do the daily boat trips take?",
        answer: "Most of our daily boat trips start in the morning and last a full day. We usually depart between 7:30 AM and 8:30 AM (depending on your hotel location and site) and return in the afternoon between 2:00 PM and 4:00 PM."
      },
      {
        question: "Do I need to pay online in advance?",
        answer: "No online payment is required! You can safely book your trip and pay in cash or via approved methods directly after or during your trip. We prioritize your convenience and security."
      },
      {
        question: "Can I still join boat or snorkeling trips if I don't know how to swim well?",
        answer: "Absolutely! Our trips are family-friendly and suitable for all levels. Life jackets, floating aids, and professional guides are always available in the water to assist you and ensure you feel safe and comfortable."
      },
      {
        question: "Is there a chance to see dolphins during the trips?",
        answer: "Yes! While dolphin sightings are in a natural environment and cannot be 100% guaranteed, our designated trips (like Dolphin House / Sataya) are world-famous for frequent and magical encounters with wild dolphins."
      },
      {
        question: "Is it possible to see the famous Dugong (Sea Cow)?",
        answer: "Yes, Marsa Alam is one of the best places in the Red Sea to spot the rare Dugong. We regularly organize trips to spots like Marsa Mubarak where these amazing creatures reside."
      },
      {
        question: "Will we see sea turtles?",
        answer: "The probability of seeing sea turtles is extremely high, especially at protected bays like Abu Dabbab and Marsa Mubarak, which are famous for permanent turtle populations."
      },
      {
        question: "Is lunch and drinks included in the boat trips?",
        answer: "Yes, a freshly prepared open-buffet lunch on board along with mineral water and soft drinks are included in the price of our daily boat trips, so you can relax between water sessions."
      },
      {
        question: "Can I cancel or modify my booking?",
        answer: "Yes, you can cancel or modify your excursion booking for free up to 24 hours before the trip starts, with no cancellation fees."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash payments in multiple currencies (EUR, USD, GBP, EGP) as well as secure local and international options depending on your preference."
      },
      {
        question: "Why choose us for your Marsa Alam adventures?",
        answer: "We are more than just a tour operator; we are local experts passionate about the Red Sea. From transparent pricing and top-tier safety to unforgettable memories with wild dolphins and dugongs, we handle every detail so you can just enjoy your holiday."
      }
    ]
  },
  de: {
    badge: "Häufige Fragen",
    title: "Häufig gestellte Fragen",
    subtitle: "Alles, was Sie vor der Buchung Ihres Abenteurs im Roten Meer wissen müssen.",
    items: [
      {
        question: "Wie hoch sind die Preise für unsere Touren und Ausflüge?",
        answer: "Die Preise variieren je nach Ausflug, Ziel (wie Dolphin House, Hamata oder Abu Dabbab) und Gruppengröße. Kontaktieren Sie uns für ein klares, detailliertes Angebot ohne versteckte Gebühren. Wir garantieren absolute Preistransparenz."
      },
      {
        question: "Wie lange dauern die täglichen Bootstouren?",
        answer: "Die meisten unserer täglichen Bootstouren beginnen morgens und dauern einen ganzen Tag. Wir starten in der Regel zwischen 7:30 und 8:30 Uhr und kehren am Nachmittag zwischen 14:00 und 16:00 Uhr zurück."
      },
      {
        question: "Muss ich im Voraus online bezahlen?",
        answer: "Keine Online-Zahlung erforderlich! Sie buchen sicher und bezahlen bequem in bar oder auf andere Weise direkt nach oder während Ihres Ausflugs."
      },
      {
        question: "Kann ich auch teilnehmen, wenn ich nicht gut schwimmen kann?",
        answer: "Auf jeden Fall! Unsere Ausflüge sind familienfreundlich. Schwimmwesten, Auftriebshilfen und professionelle Guides stehen im Wasser stets zur Seite."
      },
      {
        question: "Gibt es eine Chance, Delfine zu sehen?",
        answer: "Ja! Obwohl Delfinsichtungen in freier Wildbahn nicht zu 100 % garantiert werden können, sind unsere Touren (wie Dolphin House / Sataya) weltberühmt für häufige Begegnungen."
      },
      {
        question: "Ist es möglich, den berühmten Dugong (Seekuh) zu sehen?",
        answer: "Ja, Marsa Alam ist einer der besten Orte im Roten Meer, um den seltenen Dugong zu sichten. Wir organisieren regelmäßige Ausflüge dorthin."
      },
      {
        question: "Werden wir Meeresschildkröten sehen?",
        answer: "Die Wahrscheinlichkeit ist extrem hoch, besonders in geschützten Buchten wie Abu Dabbab und Marsa Mubarak."
      },
      {
        question: "Sind Mittagessen und Getränke in den Bootstouren inbegriffen?",
        answer: "Ja, ein frisch zubereitetes Mittagsbuffet an Bord sowie Mineralwasser und Softdrinks sind im Preis inbegriffen."
      },
      {
        question: "Kann ich meine Buchung stornieren oder ändern?",
        answer: "Ja, Sie können bis zu 24 Stunden vor Reisebeginn kostenlos stornieren oder ändern. Keine Stornogebühren."
      },
      {
        question: "Welche Zahlungsmethoden akzeptieren Sie?",
        answer: "Wir akzeptieren Barzahlungen in mehreren Währungen (EUR, USD, GBP, EGP) sowie sichere Optionen."
      },
      {
        question: "Warum sollten Sie uns für Ihre Abenteuer wählen?",
        answer: "Wir sind lokale Experten, die sich mit dem Roten Meer bestens auskennen – von transparenter Preisgestaltung bis hin zu unvergesslichen Erinnerungen."
      }
    ]
  },
  it: {
    badge: "Domande Frequenti",
    title: "Domande Frequenti (FAQ)",
    subtitle: "Tutto ciò che devi sapere prima di prenotare la tua avventura nel Mar Rosso.",
    items: [
      {
        question: "Quali sono i prezzi per i nostri tour ed escursioni?",
        answer: "I prezzi variano in base al viaggio, alla destinazione (Dolphin House, Hamata, Abu Dabbab) e alle dimensioni del gruppo. Contattaci per un preventivo dettagliato senza costi nascosti."
      },
      {
        question: "Quanto durano le gite giornaliere in barca?",
        answer: "La maggior parte delle gite giornaliere inizia la mattina e dura l'intera giornata. Partiamo solitamente tra le 7:30 e le 8:30 e torniamo nel pomeriggio tra le 14:00 e le 16:00."
      },
      {
        question: "Devo pagare online in anticipo?",
        answer: "Nessun pagamento online richiesto! Prenoti in sicurezza e paghi in contanti o con metodi approvati direttamente dopo o durante l'escursione."
      },
      {
        question: "Posso partecipare se non so nuotare bene?",
        answer: "Certamente! Le nostre escursioni sono adatte a tutti i livelli. Giubbotti salvagente e guide professioniste sono sempre disponibili in acqua."
      },
      {
        question: "C'è la possibilità di vedere i delfini?",
        answer: "Sì! Sebbene gli avvistamenti in natura non siano garantiti al 100%, i nostri tour dedicati (come Dolphin House / Sataya) sono famosi per i frequenti incontri con i delfini selvatici."
      },
      {
        question: "È possibile vedere il famoso Dugongo?",
        answer: "Sì, Marsa Alam è uno dei posti migliori nel Mar Rosso per avvistare il raro Dugongo. Organizziamo regolarmente gite in siti come Marsa Mubarak."
      },
      {
        question: "Vedremo le tartarughe marine?",
        answer: "La probabilità di vedere le tartarughe è altissima, soprattutto in baie protette come Abu Dabbab e Marsa Mubarak."
      },
      {
        question: "Il pranzo e le bevande sono inclusi nelle escursioni in barca?",
        answer: "Sì, un pranzo a buffet preparato fresco a bordo, acqua minerale e bevande analcoliche sono inclusi nel prezzo."
      },
      {
        question: "Posso cancellare o modificare la mia prenotazione?",
        answer: "Sì, puoi cancellare o modificare gratuitamente fino a 24 ore prima dell'inizio del viaggio."
      },
      {
        question: "Quali metodi di pagamento accettate?",
        answer: "Accettiamo pagamenti in contanti in diverse valute (EUR, USD, GBP, EGP) e opzioni sicure."
      },
      {
        question: "Perché sceglierci per le tue avventure a Marsa Alam?",
        answer: "Siamo esperti locali appassionati del Mar Rosso. Dalla trasparenza dei prezzi alla sicurezza, curiamo ogni dettaglio per farti godere la vacanza."
      }
    ]
  },
  ru: {
    badge: "Часто задаваемые вопросы",
    title: "Часто задаваемые вопросы",
    subtitle: "Все, что нужно знать перед бронированием приключения в Красном море.",
    items: [
      {
        question: "Каковы цены на наши туры и экскурсии?",
        answer: "Цены варьируются в зависимости от конкретной поездки, направления (Дольфин Хаус, Хамата, Абу-Даббаб) и размера группы. Свяжитесь с нами для получения подробного расчета без скрытых платежей."
      },
      {
        question: "Сколько времени занимают ежедневные поездки на лодке?",
        answer: "Большинство поездок начинается утром и длится полный день. Мы обычно отправляемся с 7:30 до 8:30 утра и возвращаемся во второй половине дня с 14:00 до 16:00."
      },
      {
        question: "Нужно ли платить онлайн заранее?",
        answer: "Онлайн-оплата не требуется! Вы бронируете и оплачиваете наличными или удобным способом после или во время поездки."
      },
      {
        question: "Могу ли я присоединиться, если я плохо плаваю?",
        answer: "Конечно! Наши поездки подходят для всех уровней. Спасательные жилеты и профессиональные гиды всегда готовы помочь в воде."
      },
      {
        question: "Есть ли шанс увидеть дельфинов во время поездок?",
        answer: "Да! Хотя появление дельфинов в дикой природе нельзя гарантировать на 100%, наши специальные маршруты (Дольфин Хаус / Сатайя) славятся частыми встречами с ними."
      },
      {
        question: "Можно ли увидеть знаменитого дюгоня (морскую корову)?",
        answer: "Да, Марса-Алам — одно из лучших мест в Красном море для наблюдения за редким дюгонем. Мы регулярно организуем поездки в такие места, как Марса-Мубарак."
      },
      {
        question: "Увидим ли мы морских черепах?",
        answer: "Вероятность увидеть черепах чрезвычайно высока, особенно в защищенных бухтах Абу-Даббаб и Марса-Мубарак."
      },
      {
        question: "Включены ли обед и напитки в стоимость поездок на лодке?",
        answer: "Да, свежеприготовленный обед «шведский стол» на борту, минеральная вода и безалкогольные напитки включены в стоимость."
      },
      {
        question: "Могу ли я отменить или изменить бронирование?",
        answer: "Да, вы можете бесплатно отменить или изменить бронь за 24 часа до начала поездки."
      },
      {
        question: "Какие способы оплаты вы принимаете?",
        answer: "Мы принимаем наличные в разных валютах (EUR, USD, GBP, EGP), а также безопасные способы оплаты."
      },
      {
        question: "Почему стоит выбрать нас для приключений в Марса-Аламе?",
        answer: "Мы — местные эксперты, влюбленные в Красное море. От прозрачных цен до безопасности — мы заботимся о каждой детали."
      }
    ]
  },
  pl: {
    badge: "Częste pytania",
    title: "Najczęściej Zadawane Pytania",
    subtitle: "Wszystko, co musisz wiedzieć przed zarezerwowaniem przygody.",
    items: [
      {
        question: "Jakie są ceny naszych wycieczek i rejsów?",
        answer: "Ceny zależą od wybranej wycieczki, miejsca docelowego (Dolphin House, Hamata, Abu Dabbab) oraz liczby osób. Skontaktuj się z nami, a prześlemy Ci przejrzystą wycenę bez ukrytych opłat."
      },
      {
        question: "Ile czasu trwają codzienne rejsy łodzią?",
        answer: "Większość naszych rejsów zaczyna się rano i trwa cały dzień. Zazwyczaj wypływamy między 7:30 a 8:30, a wracamy po południu między 14:00 a 16:00."
      },
      {
        question: "Czy muszę płacić online z góry?",
        answer: "Płatność online nie jest wymagana! Rezerwujesz bezpiecznie i płacisz gotówką lub wybraną metodą bezpośrednio po lub w trakcie wycieczki."
      },
      {
        question: "Czy mogę wziąć udział, jeśli nie umiem dobrze pływać?",
        answer: "Oczywiście! Nasze wycieczki są przyjazne dla rodzin. Kamizelki ratunkowe i profesjonalni przewodnicy są zawsze do Twojej dyspozycji w wodzie."
      },
      {
        question: "Czy jest szansa na zobaczenie delfinów?",
        answer: "Tak! Choć dzikie zwierzęta nie dają 100% gwarancji, nasze dedykowane trasy (np. Dolphin House / Sataya) słyną z częstych spotkań z delfinami."
      },
      {
        question: "Czy można zobaczyć słynnego diugonia (krowę morską)?",
        answer: "Tak, Marsa Alam to jedno z najlepszych miejsc w Morzu Czerwonym do podziwiania rzadkich diugoni. Organizujemy rejsy do miejsc takich jak Marsa Mubarak."
      },
      {
        question: "Czy zobaczymy żółwie morskie?",
        answer: "Prawdopodobieństwo zobaczenia żółwi jest niezwykle wysokie, szczególnie w chronionych zatokach Abu Dabbab i Marsa Mubarak."
      },
      {
        question: "Czy obiad i napoje są wliczone w cenę rejsu?",
        answer: "Tak, świeżo przygotowany obiad w formie bufetu na pokładzie oraz woda i napoje bezalkoholowe są wliczone w cenę."
      },
      {
        question: "Czy mogę anulować lub zmienić rezerwację?",
        answer: "Tak, możesz bezpłatnie anulować lub zmienić rezerwację do 24 godzin przed rozpoczęciem wycieczki."
      },
      {
        question: "Jakie formy płatności akceptujecie?",
        answer: "Akceptujemy płatności gotówkowe w różnych walutach (EUR, USD, GBP, EGP) oraz bezpieczne metody płatności."
      },
      {
        question: "Dlaczego warto wybrać nas na swoje przygody w Marsa Alam?",
        answer: "Jesteśmy lokalnymi ekspertami zakochanymi w Morzu Czerwonym. Zapewniamy przejrzyste ceny i bezpieczeństwo, byś mógł cieszyć się wakacjami."
      }
    ]
  },
  cz: {
    badge: "Často kladené otázky",
    title: "Často kladené otázky",
    subtitle: "Vše, co potřebujete vědět před rezervací vašeho dobrodružství.",
    items: [
      {
        question: "Jaké jsou ceny našich výletů a exkurzí?",
        answer: "Ceny se liší podle konkrétního výletu, destinace (Dolphin House, Hamata, Abu Dabbab) a velikosti skupiny. Kontaktujte nás a my vám zašleme detailní cenovou nabídku bez skrytých poplatků."
      },
      {
        question: "Jak dlouho trvají denní výlety lodí?",
        answer: "Většina našich denních výletů začíná ráno a trvá celý den. Obvykle vyplouváme mezi 7:30 a 8:30 a vracíme se odpoledne mezi 14:00 a 16:00."
      },
      {
        question: "Musím platit online předem?",
        answer: "Žádná online platba není vyžadována! Rezervujete bezpečně a platíte v hotovosti nebo schváleným způsobem přímo po výletu nebo během něj."
      },
      {
        question: "Mohu se zúčastnit, i když neumím dobře plavat?",
        answer: "Rozhodně! Naše výlety jsou vhodné pro rodiny a všechny úrovně. Záchranné vesty a profesionální průvodci jsou ve vodě vždy k dispozici."
      },
      {
        question: "Je šance vidět během výletů delfíny?",
        answer: "Ano! Přestože jsou delfíni ve volné přírodě a nelze je stoprocentně zaručit, naše vyhrazené výlety (jako Dolphin House / Sataya) jsou proslulé častými setkáními."
      },
      {
        question: "Je možné vidět slavného dugonga (mořskou krávu)?",
        answer: "Ano, Marsa Alam je jedním z nejlepších míst v Rudém moři pro pozorování vzácného dugonga. Pravidelně organizujeme výlety do lokalit, jako je Marsa Mubarak."
      },
      {
        question: "Uvidíme mořské želvy?",
        answer: "Pravděpodobnost spatření želv je extrémně vysoká, zejména v chráněných zátokách Abu Dabbab a Marsa Mubarak."
      },
      {
        question: "Je v ceně výletů lodí zahrnut oběd a nápoje?",
        answer: "Ano, čerstvě připravený oběd formou bufetu na palubě, pitná voda a nealkoholické nápoje jsou zahrnuty v ceně."
      },
      {
        question: "Mohu svou rezervaci zrušit nebo změnit?",
        answer: "Ano, rezervaci můžete bezplatně zrušit nebo upravit do 24 hodin před začátkem výletu."
      },
      {
        question: "Jaké platební metody přijímáte?",
        answer: "Přijímáme platby v hotovosti v různých měnách (EUR, USD, GBP, EGP) a další bezpečné možnosti."
      },
      {
        question: "Proč si pro vaše dobrodružství v Marsa Alam vybrat nás?",
        answer: "Jsme místní odborníci zapálení pro Rudé moře. Od transparentních cen až po nezapomenutelné zážitky se staráme o každý detail."
      }
    ]
  },
  fr: {
    badge: "Questions frequentes?",
    title: "Foire Aux Questions",
    subtitle: "Tout ce que vous devez savoir avant de réserver votre aventure en mer Rouge.",
    items: [
      {
        question: "Quels sont les tarifs de nos excursions et sorties?",
        answer: "Les prix varient en fonction de la sortie, de la destination (comme Dolphin House, Hamata ou Abu Dabbab) et de la taille du groupe. Contactez-nous pour obtenir un devis détaillé sans frais cachés."
      },
      {
        question: "Combien de temps durent les sorties quotidiennes en bateau?",
        answer: "La plupart de nos sorties en bateau commencent le matin et durent une journée entière. Le départ se fait généralement entre 7h30 et 8h30 avec un retour l'après-midi entre 14h00 et 16h00."
      },
      {
        question: "Dois-je payer en ligne à l'avance?",
        answer: "Aucun paiement en ligne n'est requis! Vous pouvez réserver en toute sécurité et payer en espèces ou via des moyens approuvés directement pendant ou après l'excursion."
      },
      {
        question: "Puis-je participer si je ne sais pas bien nager?",
        answer: "Absolument! Nos excursions sont adaptées aux familles et à tous les niveaux. Des gilets de sauvetage et des guides professionnels sont toujours à votre disposition dans l'eau."
      },
      {
        question: "Y a-t-il une chance de voir des dauphins pendant les excursions?",
        answer: "Oui! Bien que les dauphins soient sauvages, nos itinéraires dédiés (comme Dolphin House / Sataya) sont célèbres pour leurs rencontres fréquentes."
      },
      {
        question: "Est-il possible de voir le célèbre Dugong (vache marine)?",
        answer: "Oui, Marsa Alam est l'un des meilleurs endroits de la mer Rouge pour observer le rare dugong, notamment dans des baies comme Marsa Mubarak."
      },
      {
        question: "Verrons-nous des tortues marines?",
        answer: "La probabilité de voir des tortues est extrêmement élevée, en particulier dans les baies protégées d'Abu Dabbab et Marsa Mubarak."
      },
      {
        question: "Le déjeuner et les boissons sont-ils inclus à bord?",
        answer: "Oui, un déjeuner buffet fraîchement préparé ainsi que de l'eau minérale et des boissons rafraîchissantes sont inclus dans le tarif."
      },
      {
        question: "Puis-je annuler ou modifier ma réservation?",
        answer: "Oui, vous pouvez annuler ou modifier votre réservation gratuitement jusqu'à 24 heures avant le début de l'excursion."
      },
      {
        question: "Quels modes de paiement acceptez-vous?",
        answer: "Nous acceptons les paiements en espèces dans plusieurs devises (EUR, USD, GBP, EGP) ainsi que d'autres options sécurisées."
      },
      {
        question: "Pourquoi nous choisir pour vos aventures à Marsa Alam?",
        answer: "Nous sommes des experts locaux passionnés par la mer Rouge. Des prix transparents à la sécurité, nous gérons chaque détail pour des vacances parfaites."
      }
    ]
  },
  nl: {
    badge: "Vragen?",
    title: "Veelgestelde Vragen",
    subtitle: "Alles wat u moet weten voordat u uw Rode Zee-avontuur boekt.",
    items: [
      {
        question: "Wat zijn de prijzen voor onze tours en excursies?",
        answer: "Prijzen variëren afhankelijk van de reis, bestemming (zoals Dolphin House, Hamata of Abu Dabbab) en groepsgrootte. Neem contact op voor een duidelijke offerte zonder verborgen kosten."
      },
      {
        question: "Hoe lang duren de dagelijkse boottochten?",
        answer: "De meeste boottochten beginnen 's ochtends en duren een hele dag. We vertrekken meestal tussen 07:30 en 08:30 uur en keren 's middags terug tussen 14:00 en 16:00 uur."
      },
      {
        question: "Moet ik vooraf online betalen?",
        answer: "Geen online betaling vereist! U kunt veilig boeken en contant of via goedgekeurde methoden betalen tijdens of na uw excursie."
      },
      {
        question: "Kan ik mee als ik niet goed kan zwemmen?",
        answer: "Absoluut! Onze reizen zijn gezinsvriendelijk. Reddingsvesten en professionele gidsen zijn altijd aanwezig in het water om u te begeleiden."
      },
      {
        question: "Is er een kans om dolfijnen te zien?",
        answer: "Ja! Hoewel dolfijnen in het wild leven, staan onze speciale reizen (zoals Dolphin House / Sataya) bekend om regelmatige ontmoetingen."
      },
      {
        question: "Is het mogelijk om de bekende Doejong (zeekoe) te zien?",
        answer: "Ja, Marsa Alam is een van de beste plekken in de Rode Zee om de zeldzame Doejong te spotten, zoals bij Marsa Mubarak."
      },
      {
        question: "Zullen we zeeschildpadden zien?",
        answer: "De kans om zeeschildpadden te zien is zeer groot, vooral in beschermde baaien zoals Abu Dabbab en Marsa Mubarak."
      },
      {
        question: "Zijn lunch en drankjes inbegrepen bij de boottochten?",
        answer: "Ja, een vers bereide lunch in buffetvorm aan boord, mineraalwater en frisdrank zijn bij de prijs inbegrepen."
      },
      {
        question: "Kan ik mijn boeking annuleren of wijzigen?",
        answer: "Ja, u kunt uw boeking tot 24 uur voor aanvang van de trip gratis annuleren of wijzigen."
      },
      {
        question: "Welke betalingsmethoden accepteert u?",
        answer: "Wij accepteren contante betalingen in meerdere valuta's (EUR, USD, GBP, EGP) en veilige alternatieven."
      },
      {
        question: "Waarom voor ons kiezen in Marsa Alam?",
        answer: "Wij zijn lokale experts met een passie voor de Rode Zee. Van transparante prijzen tot veiligheid, wij verzorgen elk detail."
      }
    ]
  },
  hu: {
    badge: "Kérdése van?",
    title: "Gyakran Ismételt Kérdések",
    subtitle: "Minden, amit tudnia kell a vörös-tengeri kaland lefoglalása előtt.",
    items: [
      {
        question: "Milyenek az árak a túráinkra és kirándulásainkra?",
        answer: "Az árak a konkrét túrától, a célállomástól (például Dolphin House, Hamata vagy Abu Dabbab) és a csoport létszámától függenek. Lépjen kapcsolatba velünk a részletes árajánlatért, rejtett költségek nélkül."
      },
      {
        question: "Milyen hosszúak a napi hajóutak?",
        answer: "A legtöbb napi hajóút reggel kezdődik és egész napig tart. Általában 7:30 és 8:30 között indulunk, és délután 14:00 és 16:00 között érkezünk vissza."
      },
      {
        question: "Kell előre online fizetni?",
        answer: "Nincs szükség online előrefizetésre! Biztonságosan foglalhat, és fizethet készpénzzel vagy jóváhagyott módokon közvetlenül a túra alatt vagy után."
      },
      {
        question: "Csatlakozhatok akkor is, ha nem tudok jól úszni?",
        answer: "Abszolút! Túráink családbarátok. Mentőmellények és professzionális guides mindig rendelkezésre állnak a vízben a biztonság érdekében."
      },
      {
        question: "Van esély delfineket látni a túrák során?",
        answer: "Igen! Bár a vadvilágban a találkozás nem garantálható 100%-ban, a kijelölt túráink (mint a Dolphin House / Sataya) híresek a gyakori találkozásokról."
      },
      {
        question: "Látható a híres Dugong (tengeri tehén)?",
        answer: "Igen, Marsa Alam az egyik legjobb hely a Vörös-tengeren a ritka Dugong megfigyelésére, például a Marsa Mubarak öbölben."
      },
      {
        question: "Látunk majd tengeri teknősöket?",
        answer: "A teknősök megpillantásának valószínűsége rendkívül magas, különösen az olyan védett öblökben, mint Abu Dabbab és Marsa Mubarak."
      },
      {
        question: "Az ebéd és az italok benne vannak a hajóutak árában?",
        answer: "Igen, a frissen készült svédasztalos ebéd a fedélzeten, az ásványvíz és az üdítők benne vannak a napi hajóutak árában."
      },
      {
        question: "Lemonhatom vagy módosíthatom a foglalásomat?",
        answer: "Igen, a foglalást ingyenesen lemondhatja vagy módosíthatja legkésőbb a túra kezdete előtt 24 órával."
      },
      {
        question: "Milyen fizetési módokat fogadnak el?",
        answer: "Készpénzes fizetést elfogadunk több pénznemben (EUR, USD, GBP, EGP), valamint egyéb biztonságos fizetési lehetőségeket."
      },
      {
        question: "Miért minket válasszon a Marsa Alam-i kalandokhoz?",
        answer: "Helyi szakértők vagyunk, akik imádják a Vörös-tengert. A transparent áraktól a biztonságig minden részletre odafigyelünk."
      }
    ]
  }
};