import { Locale } from "@/lib/i18n-config";

export interface PolicySection {
  title: string;
  text: string;
}

export interface PolicyPageContent {
  back: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export const privacyPolicyData: Record<Locale, PolicyPageContent> = {
  en: {
    back: "Back to Home",
    title: "Privacy Policy",
    subtitle: "How we collect, protect, and handle your personal information at Marsa Alam Local Guide.",
    lastUpdated: "Last Updated: September 2026",
    sections: [
      {
        title: "1. Information We Collect",
        text: "We collect minimal personal information necessary to process your inquiries and tour reservations. This includes your name, contact phone/WhatsApp number, email address, preferred tour dates, and hotel location in Marsa Alam."
      },
      {
        title: "2. How We Use Your Data",
        text: "Your information is strictly used to organize trip itineraries, process booking requests, coordinate transfer pickups, and provide customer support via WhatsApp or email before and during your stay."
      },
      {
        title: "3. Data Protection & Confidentiality",
        text: "We implement robust technical and organizational security measures to protect your personal information against unauthorized access, disclosure, or misuse. We never sell, rent, or trade your personal data to third parties."
      },
      {
        title: "4. WhatsApp & Communication",
        text: "When you initiate a chat or booking inquiry via WhatsApp, your phone number and message contents are processed solely to facilitate direct communication with our local guide team regarding your excursion details."
      },
      {
        title: "5. Your Data Rights",
        text: "You have the right to request access to your personal details, request corrections, or ask for complete deletion of your booking records at any time by emailing info@marsaalamlocalguide.com."
      }
    ]
  },
  de: {
    back: "Zurück zur Startseite",
    title: "Datenschutzerklärung",
    subtitle: "Wie wir Ihre persönlichen Daten bei Marsa Alam Local Guide erfassen, schützen und verarbeiten.",
    lastUpdated: "Zuletzt aktualisiert: September 2026",
    sections: [
      {
        title: "1. Erfasste Informationen",
        text: "Wir erfassen nur die minimal notwendigen Daten zur Bearbeitung Ihrer Ausflugsanfragen und Buchungen (Name, Telefon/WhatsApp-Nummer, E-Mail-Adresse, Wunschdatum und Hotelname)."
      },
      {
        title: "2. Verwendung Ihrer Daten",
        text: "Ihre Daten werden ausschließlich zur Organisation von Ausflügen, Transfer-Abholungen und zur Kundenbetreuung vor und während Ihres Aufenthalts verwendet."
      },
      {
        title: "3. Datenschutz & Sicherheit",
        text: "Wir setzen strenge Sicherheitsmaßnahmen ein, um Ihre Daten vor unbefugtem Zugriff zu schützen. Wir verkaufen oder teilen Ihre Daten niemals mit Drittanbietern."
      },
      {
        title: "4. WhatsApp-Kommunikation",
        text: "Wenn Sie uns per WhatsApp kontaktieren, wird Ihre Telefonnummer nur zur direkten Abstimmung Ihres Ausflugs mit unserem Team genutzt."
      },
      {
        title: "5. Ihre Rechte",
        text: "Sie haben jederzeit das Recht auf Auskunft, Korrektur oder Löschung Ihrer Daten per E-Mail an info@marsaalamlocalguide.com."
      }
    ]
  },
  it: {
    back: "Torna alla Home",
    title: "Informativa sulla Privacy",
    subtitle: "Come raccogliamo, proteggiamo e gestiamo le tue informazioni personali su Marsa Alam Local Guide.",
    lastUpdated: "Ultimo aggiornamento: Settembre 2026",
    sections: [
      {
        title: "1. Informazioni che Raccogliamo",
        text: "Raccogliamo solo i dati necessari per gestire le tue richieste ed escursioni: nome, numero WhatsApp/telefono, e-mail, date preferite e nome dell'hotel a Marsa Alam."
      },
      {
        title: "2. Come Utilizziamo i Tuoi Dati",
        text: "I tuoi dati vengono utilizzati esclusivamente per coordinare i tour, organizzare i transfer e fornire assistenza tramite WhatsApp prima e durante la vacanza."
      },
      {
        title: "3. Protezione dei Dati",
        text: "Adottiamo misure di sicurezza avanzate per proteggere i tuoi dati. Non vendiamo né condividiamo mai i tuoi dati personali con terze parti."
      },
      {
        title: "4. Comunicazioni via WhatsApp",
        text: "Quando ci contatti su WhatsApp, il tuo numero viene utilizzato unicamente per la gestione diretta del tuo tour con la nostra guida locale."
      },
      {
        title: "5. I Tuoi Diritti",
        text: "Puoi richiedere la cancellazione o la modifica dei tuoi dati in qualsiasi momento scrivendoci a info@marsaalamlocalguide.com."
      }
    ]
  },
  ru: {
    back: "На главную",
    title: "Политика конфиденциальности",
    subtitle: "Как мы собираем, используем и защищаем ваши персональные данные в Marsa Alam Local Guide.",
    lastUpdated: "Последнее обновление: Сентябрь 2026",
    sections: [
      {
        title: "1. Собираемая информация",
        text: "Мы собираем только минимальные данные, необходимые для бронирования экскурсий: имя, номер телефона/WhatsApp, email, даты и название вашего отеля в Марса-Аламе."
      },
      {
        title: "2. Использование данных",
        text: "Ваши данные используются исключительно для организации туров, трансферов и связи с вами до и во время вашего отдыха."
      },
      {
        title: "3. Защита информации",
        text: "Мы применяем надежные меры безопасности для защиты ваших данных. Мы никогда не передаем ваши данные третьим лицам."
      },
      {
        title: "4. Общение в WhatsApp",
        text: "При обращении через WhatsApp ваш номер используется только для согласования деталей экскурсий с гидом."
      },
      {
        title: "5. Ваши права",
        text: "Вы имеете право запросить удаление или изменение ваших данных в любое время по электронной почте info@marsaalamlocalguide.com."
      }
    ]
  },
  pl: {
    back: "Powrót do strony głównej",
    title: "Polityka prywatności",
    subtitle: "Jak zbieramy, chronimy i przetwarzamy Twoje dane osobowe w Marsa Alam Local Guide.",
    lastUpdated: "Ostatnia aktualizacja: Wrzesień 2026",
    sections: [
      {
        title: "1. Zbieran dane",
        text: "Gromadzimy jedynie dane niezbędne do realizacji rezerwacji wycieczek: imię, numer WhatsApp/telefonu, email, preferowane daty i nazwę hotelu."
      },
      {
        title: "2. Wykorzystanie danych",
        text: "Twoje dane są wykorzystywane wyłącznie do organizacji wycieczek, transferów oraz kontaktu przed i w trakcie pobytu."
      },
      {
        title: "3. Ochrona danych",
        text: "Stosujemy rygorystyczne środki bezpieczeństwa. Nigdy nie udostępniamy ani nie sprzedajemy Twoich danych podmiotom trzecim."
      },
      {
        title: "4. Komunikacja WhatsApp",
        text: "Kontaktując się przez WhatsApp, Twój numer służy wyłącznie do ustaleń dotyczących Twojej wycieczki z przewodnikiem."
      },
      {
        title: "5. Twoje prawa",
        text: "Masz prawo do wglądu lub usunięcia swoich danych w dowolnym momencie, pisząc na info@marsaalamlocalguide.com."
      }
    ]
  },
  cz: {
    back: "Zpět na hlavní stranu",
    title: "Zásady ochrany osobních údajů",
    subtitle: "Jak shromažďujeme, chráníme a zpracováváme vaše osobní údaje v Marsa Alam Local Guide.",
    lastUpdated: "Poslední aktualizace: Září 2026",
    sections: [
      {
        title: "1. Shromažďované údaje",
        text: "Shromažďujeme pouze údaje nezbytné pro rezervaci výletů: jméno, telefon/WhatsApp, email, datum výletu a název hotelu."
      },
      {
        title: "2. Použití údajů",
        text: "Vaše údaje slouží výhradně k organizaci výletů, zajištění transferů a komunikaci během vaší dovolené."
      },
      {
        title: "3. Ochrana údajů",
        text: "Používáme přísná bezpečnostní opatření. Vaše osobní údaje nikdy nepředáváme třetím stranám."
      },
      {
        title: "4. WhatsApp komunikace",
        text: "Při kontaktování přes WhatsApp je vaše číslo použito pouze k přímé domluvě výletu s naším průvodcem."
      },
      {
        title: "5. Vaše práva",
        text: "Máte právo kdykoliv požádat o vymazání či úpravu svých údajů na emailu info@marsaalamlocalguide.com."
      }
    ]
  }
};

export const termsOfServiceData: Record<Locale, PolicyPageContent> = {
  en: {
    back: "Back to Home",
    title: "Terms of Service",
    subtitle: "Booking conditions, safety rules, and service guidelines for excursions in Marsa Alam.",
    lastUpdated: "Last Updated: September 2026",
    sections: [
      {
        title: "1. Tour Reservations & Confirmations",
        text: "All trip bookings can be initiated online or directly via WhatsApp. Reservations are confirmed once pickup details (hotel name, room number, and participant names) are validated by our team."
      },
      {
        title: "2. Flexible Payment Policy (Pay Later)",
        text: "We offer a flexible 'Book Now, Pay Later' policy. You do not need to make advance credit card payments online. Payments are settled in cash (EUR, USD, GBP, or EGP) on the day of the trip."
      },
      {
        title: "3. Cancellation & Rescheduling",
        text: "Free cancellation is permitted up to 24 hours before trip departure. If weather or coast guard restrictions prevent sea trips from departing, trips will be rescheduled or fully refunded without penalties."
      },
      {
        title: "4. Safety & Health Requirements",
        text: "All participants must follow safety instructions given by boat captains, snorkeling guides, and certified divemasters. Guests with pre-existing medical conditions must disclose them prior to marine activities."
      },
      {
        title: "5. Liability & Personal Belongings",
        text: "Marsa Alam Local Guide takes extreme care to ensure safety during all activities. However, guests are responsible for their personal belongings (cameras, phones, jewelry) during transfers and boat trips."
      }
    ]
  },
  de: {
    back: "Zurück zur Startseite",
    title: "Nutzungsbedingungen",
    subtitle: "Buchungsbedingungen, Sicherheitsregeln und Service-Richtlinien für Ausflüge in Marsa Alam.",
    lastUpdated: "Zuletzt aktualisiert: September 2026",
    sections: [
      {
        title: "1. Buchung & Bestätigung",
        text: "Alle Ausflugsbuchungen können online oder per WhatsApp angefragt werden. Die Buchung ist bestätigt, sobald die Abhol-Details von unserem Team validiert wurden."
      },
      {
        title: "2. Bezahlung vor Ort (Jetzt buchen, später zahlen)",
        text: "Wir bieten flexible Bezahlung vor Ort an. Keine Kreditkarte erforderlich. Die Bezahlung erfolgt in bar (EUR, USD, EGP) am Tag des Ausflugs."
      },
      {
        title: "3. Stornierung & Umbuchung",
        text: "Kostenlose Stornierung ist bis zu 24 Stunden vor Abfahrt möglich. Bei wetterbedingten Absagen durch die Küstenwache wird der Ausflug kostenfrei verschoben."
      },
      {
        title: "4. Sicherheit & Gesundheit",
        text: "Alle Teilnehmer müssen den Anweisungen der Kapitäne und Tauchguides Folge leisten. Gesundheitliche Einschränkungen sind vor Abfahrt mitzuteilen."
      },
      {
        title: "5. Haftung für Wertsachen",
        text: "Wir achten stets auf Ihre Sicherheit. Für persönliche Wertsachen (Kameras, Handys, Schmuck) übernehmen wir während der Touren keine Haftung."
      }
    ]
  },
  it: {
    back: "Torna alla Home",
    title: "Termini di Servizio",
    subtitle: "Condizioni di prenotazione, regole di sicurezza e linee guida per le escursioni a Marsa Alam.",
    lastUpdated: "Ultimo aggiornamento: Settembre 2026",
    sections: [
      {
        title: "1. Prenotazioni e Conferme",
        text: "Le prenotazioni possono essere effettuate online o via WhatsApp. La conferma avviene una volta convalidati i dettagli del transfer (hotel e numero di partecipanti)."
      },
      {
        title: "2. Pagamento Flessibile (Paga Dopo)",
        text: "Offriamo la formula 'Prenota Ora, Paga Dopo'. Non è richiesto pagamento con carta online. Il pagamento viene effettuato in contanti (EUR, USD, EGP) il giorno dell'escursione."
      },
      {
        title: "3. Cancellazione e Riprogrammazione",
        text: "Cancellazione gratuita fino a 24 ore prima della partenza. In caso di condizioni meteo avverse o divieti della Guardia Costiera, il tour verrà riprogrammato senza costi."
      },
      {
        title: "4. Sicurezza e Salute",
        text: "I partecipanti devono seguire le istruzioni del capitano e delle guide. Eventuali condizioni mediche devono essere segnalate prima delle attività in mare."
      },
      {
        title: "5. Responsabilità Oggetti Personali",
        text: "Garantiamo la massima sicurezza nei tour, tuttavia i clienti sono responsabili dei propri oggetti personali (fotocamere, telefoni, gioielli)."
      }
    ]
  },
  ru: {
    back: "На главную",
    title: "Условия обслуживания",
    subtitle: "Правила бронирования, безопасность и условия проведения экскурсий в Марса-Аламе.",
    lastUpdated: "Последнее обновление: Сентябрь 2026",
    sections: [
      {
        title: "1. Бронирование и подтверждение",
        text: "Бронирование можно оформить на сайте или через WhatsApp. Бронь подтверждается после уточнения отеля и времени трансфера."
      },
      {
        title: "2. Оплата на месте (Забронируй сейчас, плати потом)",
        text: "Мы предлагаем гибкую систему оплаты. Предоплата онлайн не требуется. Оплата производится наличными (EUR, USD, EGP) в день экскурсии."
      },
      {
        title: "3. Отмена и перенос",
        text: "Бесплатная отмена возможна за 24 часа до выезда. При отмене тура из-за погодных условий выезд переносится без штрафов."
      },
      {
        title: "4. Безопасность и здоровье",
        text: "Участники обязаны соблюдать инструкции капитана и гидов. О противопоказаниях по здоровью необходимо сообщить до начала экскурсии."
      },
      {
        title: "5. Ответственность за вещи",
        text: "Мы обеспечиваем максимальную безопасность на турах, но не несем ответственности за сохранность личных ценных вещей (телефонов, камер)."
      }
    ]
  },
  pl: {
    back: "Powrót do strony głównej",
    title: "Regulamin świadczenia usług",
    subtitle: "Warunki rezerwacji, zasady bezpieczeństwa i wytyczne dotyczące wycieczek w Marsa Alam.",
    lastUpdated: "Ostatnia aktualizacja: Wrzesień 2026",
    sections: [
      {
        title: "1. Rezerwacja i potwierdzenie",
        text: "Rezerwacji można dokonać online lub przez WhatsApp. Potwierdzenie następuje po weryfikacji szczegółów odbioru z hotelu."
      },
      {
        title: "2. Płatność na miejscu (Zarezerwuj teraz, zapłać później)",
        text: "Oferujemy elastyczną płatność na miejscu. Nie wymagamy wpłat kartą online. Płatność regulowana jest gotówką (EUR, USD, EGP) w dniu wycieczki."
      },
      {
        title: "3. Anulowanie rezerwacji",
        text: "Bezpłatna rezygnacja jest możliwa do 24 godzin przed wyjazdem. W przypadku złych warunków pogodowych wycieczka jest przekładana bez opłat."
      },
      {
        title: "4. Bezpieczeństwo i zdrowie",
        text: "Uczestnicy muszą przestrzegać instrukcji kapitana i przewodników. Wszelkie problemy zdrowotne należy zgłosić przed rozpoczęciem wycieczki."
      },
      {
        title: "5. Odpowiedzialność za rzeczy osobiste",
        text: "Dbamy o bezpieczeństwo uczestników, jednak nie ponosimy odpowiedzialności za zagubienie rzeczy osobistych (aparatów, telefonów)."
      }
    ]
  },
  cz: {
    back: "Zpět na hlavní stranu",
    title: "Podmínky služby",
    subtitle: "Podmínky rezervace, bezpečnostní pravidla a pokyny pro výlety v Marsa Alam.",
    lastUpdated: "Poslední aktualizace: Září 2026",
    sections: [
      {
        title: "1. Rezervace a potvrzení",
        text: "Rezervaci výletů lze provést online nebo přes WhatsApp. Potvrzení proběhne po ověření údajů o transferu z hotelu."
      },
      {
        title: "2. Platba na místě (Rezervujte nyní, plaťte později)",
        text: "Nabízíme flexibilní platbu na místě bez nutnosti platit kartou online. Platba probíhá v hotovosti (EUR, USD, EGP) v den výletu."
      },
      {
        title: "3. Storno a změny",
        text: "Bezplatné storno je možné do 24 hodin před odjezdem. Při zrušení výletu kvůli počasí je termín bezplatně přesunut."
      },
      {
        title: "4. Bezpečnost a zdraví",
        text: "Všichni účastníci musí dodržovat pokyny kapitána a průvodců. Zdravotní omezení je nutné nahlásit předem."
      },
      {
        title: "5. Odpovědnost za osobní věci",
        text: "Dbáme na maximální bezpečnost, avšak za osobní cennosti (telefony, fotoaparáty) neneseme během výletu odpovědnost."
      }
    ]
  }
};
