import type { Language } from "@/types/tour";

export interface BookingFormLabels {
  ready: string;
  subText: string;
  dateLabel: string;
  guestsLabel: string;
  hotelLabel: string;
  hotelPlaceholder: string;
  notesLabel: string;
  notesPlaceholder: string;
  btnText: string;
  selectGuests: string;
}

export const bookingFormLabels: Record<Language, BookingFormLabels> = {
  en: {
    ready: "Ready for",
    subText: "Choose your preferred date and group size. We will confirm the details with you on WhatsApp.",
    dateLabel: "Preferred date",
    guestsLabel: "Guests",
    hotelLabel: "Select Your Hotel / Resort",
    hotelPlaceholder: "Choose your hotel in Marsa Alam",
    notesLabel: "Notes (optional)",
    notesPlaceholder: "Tell us anything useful about your request...",
    btnText: "Continue to WhatsApp",
    selectGuests: "Choose guests",
  },
  de: {
    ready: "Bereit für",
    subText: "Wählen Sie Ihr Wunschdatum und die Gruppengröße. Wir bestätigen die Details per WhatsApp.",
    dateLabel: "Wunschdatum",
    guestsLabel: "Gäste",
    hotelLabel: "Wählen Sie Ihr Hotel / Resort",
    hotelPlaceholder: "Wählen Sie Ihr Hotel in Marsa Alam",
    notesLabel: "Anmerkungen (optional)",
    notesPlaceholder: "Teilen Sie uns wichtige Details mit...",
    btnText: "Weiter zu WhatsApp",
    selectGuests: "Gäste auswählen",
  },
  it: {
    ready: "Pronto per",
    subText: "Scegli la data preferita e la dimensione del gruppo. Confermeremo i dettagli su WhatsApp.",
    dateLabel: "Data preferita",
    guestsLabel: "Ospiti",
    hotelLabel: "Seleziona il tuo Hotel / Resort",
    hotelPlaceholder: "Scegli il tuo hotel a Marsa Alam",
    notesLabel: "Note (opzionale)",
    notesPlaceholder: "Raccontaci qualsiasi dettaglio utile...",
    btnText: "Continua su WhatsApp",
    selectGuests: "Scegli ospiti",
  },
  ru: {
    ready: "Готовы к",
    subText: "Выберите желаемую дату и количество гостей. Мы подтвердим детали в WhatsApp.",
    dateLabel: "Желаемая дата",
    guestsLabel: "Гости",
    hotelLabel: "Выберите ваш отель / курорт",
    hotelPlaceholder: "Выберите отель в Марса-Алам",
    notesLabel: "Примечания (необязательно)",
    notesPlaceholder: "Напишите любые пожелания...",
    btnText: "Перейти в WhatsApp",
    selectGuests: "Выберите количество гостей",
  },
  pl: {
    ready: "Gotowy na",
    subText: "Wybierz preferowaną datę i liczbę osób. Potwierdzimy szczegóły na WhatsApp.",
    dateLabel: "Preferowana data",
    guestsLabel: "Goście",
    hotelLabel: "Wybierz swój hotel / resort",
    hotelPlaceholder: "Wybierz hotel w Marsa Alam",
    notesLabel: "Uwagi (opcjonalnie)",
    notesPlaceholder: "Napisz nam przydatne informacje...",
    btnText: "Przejdź do WhatsApp",
    selectGuests: "Wybierz liczbę gości",
  },
  cz: {
    ready: "Jste připraveni na",
    subText: "Vyberte preferované datum a počet osob. Podrobnosti potvrdíme na WhatsApp.",
    dateLabel: "Preferované datum",
    guestsLabel: "Hosté",
    hotelLabel: "Vyberte svůj hotel / resort",
    hotelPlaceholder: "Vyberte hotel v Marsa Alam",
    notesLabel: "Poznámky (volitelné)",
    notesPlaceholder: "Napište nam cokoli užitečného...",
    btnText: "Pokračovat na WhatsApp",
    selectGuests: "Vyberte počet hostů",
  },
  fr: {
    ready: "Prêt pour",
    subText: "Choisissez votre date et le nombre de personnes. Nous confirmerons les détails sur WhatsApp.",
    dateLabel: "Date souhaitée",
    guestsLabel: "Invités",
    hotelLabel: "Sélectionnez votre hôtel / complexe",
    hotelPlaceholder: "Choisissez votre hôtel à Marsa Alam",
    notesLabel: "Notes (optionnel)",
    notesPlaceholder: "Dites-nous tout détail utile...",
    btnText: "Continuer sur WhatsApp",
    selectGuests: "Choisir le nombre d'invités",
  },
  nl: {
    ready: "Klaar voor",
    subText: "Kies je gewenste datum en groepsgrootte. We bevestigen de details via WhatsApp.",
    dateLabel: "Voorkeursdatum",
    guestsLabel: "Gasten",
    hotelLabel: "Selecteer je Hotel / Resort",
    hotelPlaceholder: "Kies je hotel in Marsa Alam",
    notesLabel: "Opmerkingen (optioneel)",
    notesPlaceholder: "Vertel ons iets nuttigs over je verzoek...",
    btnText: "Doorgaan naar WhatsApp",
    selectGuests: "Kies aantal gasten",
  },
  hu: {
    ready: "Készen áll a(z)",
    subText: "Válassza ki a kívánt dátumot és a létszámot. A részleteket WhatsApp-on igazoljuk vissza.",
    dateLabel: "Kívánt dátum",
    guestsLabel: "Vendégek",
    hotelLabel: "Válassza ki szállodáját / üdülőhelyét",
    hotelPlaceholder: "Válassza ki szállodáját Marsa Alamban",
    notesLabel: "Megjegyzések (opcionális)",
    notesPlaceholder: "Írjon nekünk bármilyen hasznos információt...",
    btnText: "Folytatás a WhatsApp-on",
    selectGuests: "Válassza ki a vendégek számát",
  },
};