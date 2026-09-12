import type { Language } from "@/types/tour";

export interface ReviewTranslation {
  sectionTitle: string;
  badge: string;
  headingPart1: string;
  headingPart2: string;
  headingPart3: string;
  description: string;
  privacyNotice: string;
  labels: {
    name: string;
    email: string;
    emailOptional: string;
    experience: string;
    rating: string;
    review: string;
  };
  placeholders: {
    name: string;
    email: string;
    selectExperience: string;
  };
  experiences: {
    snorkeling: string;
    scubaDiving: string;
    padiCourses: string;
    citySightseeing: string;
  };
  ratingStatus: {
    selected: string;
  };
  buttons: {
    submit: string;
    submitting: string;
    close: string;
  };
  modal: {
    title: string;
    message: string;
  };
}

export const reviewTranslations: Record<Language, ReviewTranslation> = {
  en: {
    sectionTitle: "Share Your Experience",
    badge: "Share Your Experience",
    headingPart1: "How was",
    headingPart2: "your Marsa",
    headingPart3: "Alam day?",
    description: "Your feedback helps future travellers plan with confidence. Every submission is reviewed before it appears publicly.",
    privacyNotice: "Your review is submitted privately for approval first.",
    labels: {
      name: "Your name",
      email: "Email",
      emailOptional: "(optional)",
      experience: "Your experience",
      rating: "Rate your experience",
      review: "Your review",
    },
    placeholders: {
      name: "Your name",
      email: "you@example.com",
      selectExperience: "Choose an experience",
    },
    experiences: {
      snorkeling: "Snorkeling Trip",
      scubaDiving: "Scuba Diving",
      padiCourses: "PADI Courses",
      citySightseeing: "City & Sightseeing",
    },
    ratingStatus: {
      selected: "selected",
    },
    buttons: {
      submit: "Send my review",
      submitting: "Sending...",
      close: "Close",
    },
    modal: {
      title: "Thank you for your feedback!",
      message: "Your review has been successfully received. We appreciate your time!",
    },
  },
  de: {
    sectionTitle: "Teile deine Erfahrung",
    badge: "Teile deine Erfahrung",
    headingPart1: "Wie war",
    headingPart2: "dein Tag in",
    headingPart3: "Marsa Alam?",
    description: "Dein Feedback hilft zukünftigen Reisenden, mit Zuversicht zu planen. Jede Bewertung wird vor der Veröffentlichung geprüft.",
    privacyNotice: "Deine Bewertung wird zuerst privat zur Überprüfung eingereicht.",
    labels: {
      name: "Dein Name",
      email: "E-Mail",
      emailOptional: "(optional)",
      experience: "Deine Erfahrung",
      rating: "Bewerte deine Erfahrung",
      review: "Deine Bewertung",
    },
    placeholders: {
      name: "Dein Name",
      email: "du@beispiel.de",
      selectExperience: "Wähle ein Erlebnis",
    },
    experiences: {
      snorkeling: "Schnorchelausflug",
      scubaDiving: "Tauchen",
      padiCourses: "PADI Kurse",
      citySightseeing: "Stadt- & Besichtigungstour",
    },
    ratingStatus: {
      selected: "ausgewählt",
    },
    buttons: {
      submit: "Bewertung absenden",
      submitting: "Wird gesendet...",
      close: "Schließen",
    },
    modal: {
      title: "Vielen Dank für dein Feedback!",
      message: "Deine Bewertung ist erfolgreich eingegangen. Wir schätzen deine Zeit!",
    },
  },
  it: {
    sectionTitle: "Condividi la tua esperienza",
    badge: "Condividi la tua esperienza",
    headingPart1: "Com'è stata",
    headingPart2: "la tua giornata a",
    headingPart3: "Marsa Alam?",
    description: "Il tuo feedback aiuta i futuri viaggiatori a pianificare con sicurezza. Ogni recensione viene verificata prima di essere pubblicata.",
    privacyNotice: "La tua recensione viene inviata privatamente per l'approvazione.",
    labels: {
      name: "Il tuo nome",
      email: "Email",
      emailOptional: "(opzionale)",
      experience: "La tua esperienza",
      rating: "Valuta la tua esperienza",
      review: "La tua recensione",
    },
    placeholders: {
      name: "Il tuo nome",
      email: "tuo@esempio.it",
      selectExperience: "Scegli un'esperienza",
    },
    experiences: {
      snorkeling: "Gita di Snorkeling",
      scubaDiving: "Immersioni Subacquee",
      padiCourses: "Corsi PADI",
      citySightseeing: "Tour della Città e Visite",
    },
    ratingStatus: {
      selected: "selezionato",
    },
    buttons: {
      submit: "Invia recensione",
      submitting: "Invio in corso...",
      close: "Chiudi",
    },
    modal: {
      title: "Grazie per il tuo feedback!",
      message: "La tua recensione è stata ricevuta con successo. Apprezziamo il tuo tempo!",
    },
  },
  ru: {
    sectionTitle: "Поделитесь впечатлениями",
    badge: "Поделитесь впечатлениями",
    headingPart1: "Как прошёл",
    headingPart2: "ваш день в",
    headingPart3: "Марса-Аламе?",
    description: "Ваш отзыв помогает будущим путешественникам планировать поездку с уверенностью. Каждый отзыв проверяется перед публикацией.",
    privacyNotice: "Ваш отзыв отправляется конфиденциально и сначала проходит модерацию.",
    labels: {
      name: "Ваше имя",
      email: "Email",
      emailOptional: "(необязательно)",
      experience: "Ваша экскурсия",
      rating: "Оцените ваш опыт",
      review: "Ваш отзыв",
    },
    placeholders: {
      name: "Ваше имя",
      email: "you@example.com",
      selectExperience: "Выберите экскурсию",
    },
    experiences: {
      snorkeling: "Снорклинг тур",
      scubaDiving: "Дайвинг",
      padiCourses: "Курсы PADI",
      citySightseeing: "Обзорная экскурсия",
    },
    ratingStatus: {
      selected: "выбрано",
    },
    buttons: {
      submit: "Отправить отзыв",
      submitting: "Отправка...",
      close: "Закрыть",
    },
    modal: {
      title: "Спасибо за ваш отзыв!",
      message: "Ваш отзыв успешно получен. Мы ценим ваше время!",
    },
  },
  pl: {
    sectionTitle: "Podziel się opinią",
    badge: "Podziel się opinią",
    headingPart1: "Jak minął",
    headingPart2: "Twój dzień w",
    headingPart3: "Marsa Alam?",
    description: "Twoja opinia pomaga przyszłym podróżnym planować wyjazd z pewnością. Każdy wpis jest weryfikowany przed publikacją.",
    privacyNotice: "Twoja opinia jest najpierw przesyłana prywatnie do zatwierdzenia.",
    labels: {
      name: "Twoje imię",
      email: "Email",
      emailOptional: "(opcjonalnie)",
      experience: "Twoje doświadczenie",
      rating: "Oceń swoje wrażenia",
      review: "Twoja opinia",
    },
    placeholders: {
      name: "Twoje imię",
      email: "ty@przyklad.pl",
      selectExperience: "Wybierz atrakcję",
    },
    experiences: {
      snorkeling: "Wycieczka ze snorkelingiem",
      scubaDiving: "Nurkowanie",
      padiCourses: "Kursy PADI",
      citySightseeing: "Zwiedzanie miasta",
    },
    ratingStatus: {
      selected: "wybrano",
    },
    buttons: {
      submit: "Wyślij opinię",
      submitting: "Wysyłanie...",
      close: "Zamknij",
    },
    modal: {
      title: "Dziękujemy za Twoją opinię!",
      message: "Twoja opinia została pomyślnie odebrana. Dziękujemy za poświęcony czas!",
    },
  },
  cz: {
    sectionTitle: "Podeělte se o zážitek",
    badge: "Podělte se o zážitek",
    headingPart1: "Jaký byl",
    headingPart2: "váš den v",
    headingPart3: "Marsa Alam?",
    description: "Vaše zpětná vazba pomáhá budoucím cestovatelům plánovat s jistotou. Každá recenze je před zveřejněním skontrolována.",
    privacyNotice: "Vaše recenze je nejprve soukromě odeslána ke schválení.",
    labels: {
      name: "Vaše jméno",
      email: "Email",
      emailOptional: "(volitelné)",
      experience: "Váš zážitek",
      rating: "Ohodnoťte svůj zážitek",
      review: "Vaše recenze",
    },
    placeholders: {
      name: "Vaše jméno",
      email: "vy@priklad.cz",
      selectExperience: "Vyberte zážitek",
    },
    experiences: {
      snorkeling: "Šnorchlovací výlet",
      scubaDiving: "Přístrojové potápění",
      padiCourses: "Kurzy PADI",
      citySightseeing: "Prohlídka města a památek",
    },
    ratingStatus: {
      selected: "vybráno",
    },
    buttons: {
      submit: "Odeslat recenzi",
      submitting: "Odesílání...",
      close: "Zavřít",
    },
    modal: {
      title: "Děkujeme za vaši zpětnou vazbu!",
      message: "Vaše recenze byla úspěšně přijata. Vážíme si vašeho času!",
    },
  },
  fr: {
    sectionTitle: "Partagez votre expérience",
    badge: "Partagez votre expérience",
    headingPart1: "Comment s'est",
    headingPart2: "passée votre journée à",
    headingPart3: "Marsa Alam ?",
    description: "Vos avis aident les futurs voyageurs à planifier en toute confiance. Chaque avis est vérifié avant d'être publié.",
    privacyNotice: "Votre avis est d'abord soumis en privé pour validation.",
    labels: {
      name: "Votre prénom",
      email: "E-mail",
      emailOptional: "(facultatif)",
      experience: "Votre expérience",
      rating: "Évaluez votre expérience",
      review: "Votre avis",
    },
    placeholders: {
      name: "Votre prénom",
      email: "vous@exemple.fr",
      selectExperience: "Choisissez une expérience",
    },
    experiences: {
      snorkeling: "Excursion snorkeling",
      scubaDiving: "Plongée sous-marine",
      padiCourses: "Cours PADI",
      citySightseeing: "Visite de la ville",
    },
    ratingStatus: {
      selected: "sélectionné",
    },
    buttons: {
      submit: "Envoyer mon avis",
      submitting: "Envoi en cours...",
      close: "Fermer",
    },
    modal: {
      title: "Merci pour votre avis !",
      message: "Votre avis a bien été reçu. Nous vous remercions pour votre temps !",
    },
  },
  nl: {
    sectionTitle: "Deel je ervaring",
    badge: "Deel je ervaring",
    headingPart1: "Hoe was",
    headingPart2: "jouw dag in",
    headingPart3: "Marsa Alam?",
    description: "Jouw feedback helpt toekomstige reizigers met vertrouwen te plannen. Elke beoordeling wordt gecontroleerd voor publicatie.",
    privacyNotice: "Je beoordeling wordt eerst privé ingediend ter goedkeuring.",
    labels: {
      name: "Jouw naam",
      email: "E-mailadres",
      emailOptional: "(optioneel)",
      experience: "Jouw ervaring",
      rating: "Beoordeel je ervaring",
      review: "Jouw beoordeling",
    },
    placeholders: {
      name: "Jouw naam",
      email: "jouw@voorbeeld.nl",
      selectExperience: "Kies een ervaring",
    },
    experiences: {
      snorkeling: "Snorkeluitstapje",
      scubaDiving: "Duiken",
      padiCourses: "PADI Cursussen",
      citySightseeing: "Stad & Sightseeing",
    },
    ratingStatus: {
      selected: "geselecteerd",
    },
    buttons: {
      submit: "Beoordeling versturen",
      submitting: "Versturen...",
      close: "Sluiten",
    },
    modal: {
      title: "Bedankt voor je feedback!",
      message: "Je beoordeling is succesvol ontvangen. We waarderen je tijd!",
    },
  },
  hu: {
    sectionTitle: "Ossza meg élményeit",
    badge: "Ossza meg élményeit",
    headingPart1: "Hogy telt",
    headingPart2: "a napja",
    headingPart3: "Marsa Alamban?",
    description: "Visszajelzése segít a jövőbeli utazóknak a magabiztos tervezésben. Minden értékelést ellenőrzünk a megjelenés előtt.",
    privacyNotice: "Értékelését először bizalmasan küldjük el jóváhagyásra.",
    labels: {
      name: "Az Ön neve",
      email: "E-mail cím",
      emailOptional: "(opcionális)",
      experience: "Az Ön élménye",
      rating: "Értékelje az élményt",
      review: "Az Ön értékelése",
    },
    placeholders: {
      name: "Az Ön neve",
      email: "on@pelda.hu",
      selectExperience: "Válasszon egy élményt",
    },
    experiences: {
      snorkeling: "Sznorkel túra",
      scubaDiving: "Készülékes búvárkodás",
      padiCourses: "PADI tanfolyamok",
      citySightseeing: "Városnézés és kirándulás",
    },
    ratingStatus: {
      selected: "kiválasztva",
    },
    buttons: {
      submit: "Értékelés elküldése",
      submitting: "Küldés...",
      close: "Bezárás",
    },
    modal: {
      title: "Köszönjük a visszajelzését!",
      message: "Értékelését sikeresen megkaptuk. Köszönjük az idejét!",
    },
  },
};