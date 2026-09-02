import { Language } from "@/types/tour";

export interface ReviewItem {
  name: string;
  country: string;
  text: string;
  rating: number;
  tour: string;
}

export const testimonialsData: Record<Language, { badge: string; title: string; subtitle: string; reviews: ReviewItem[] }> = {
  en: {
    badge: "Happy Travelers",
    title: "What Our Guests Say",
    subtitle: "Real experiences from travelers who explored the Red Sea with us.",
    reviews: [
      { name: "Michael Schmidt", country: "Germany", text: "The Dolphin House trip was an absolute dream! Swimming with wild dolphins and the professional crew made it the highlight of our vacation.", rating: 5, tour: "Dolphin House" },
      { name: "Marco Rossi", country: "Italy", text: "Hamata Islands are breathtaking! Crystal clear water and wonderful coral reefs. Everything was perfectly organized from hotel pickup to return.", rating: 5, tour: "Hamata Islands" },
      { name: "Anna Nowak", country: "Poland", text: "Abu Dabbab Speedboat gave us an amazing chance to see sea turtles up close. Friendly guides and top service. Highly recommended!", rating: 5, tour: "Abu Dabbab Speedboat" }
    ]
  },
  de: {
    badge: "Zufriedene Gäste",
    title: "Das sagen unsere Gäste",
    subtitle: "Echte Erfahrungen von Reisenden, die das Rote Meer mit uns erkundet haben.",
    reviews: [
      { name: "Michael Schmidt", country: "Deutschland", text: "Der Ausflug zum Dolphin House war ein absoluter Traum! Mit wilden Delfinen zu schwimmen war das Highlight unseres Urlaubs.", rating: 5, tour: "Dolphin House" },
      { name: "Marco Rossi", country: "Italien", text: "Die Hamata-Inseln sind atemberaubend! Kristallklares Wasser und tolle Korallenriffe. Alles war perfekt organisiert.", rating: 5, tour: "Hamata Islands" },
      { name: "Anna Nowak", country: "Polen", text: "Mit dem Abu Dabbab Schnellboot konnten wir Meeresschildkröten hautnah erleben. Sehr zu empfehlen!", rating: 5, tour: "Abu Dabbab Speedboat" }
    ]
  },
  it: {
    badge: "Viaggiatori Felici",
    title: "Cosa dicono i nostri ospiti",
    subtitle: "Vere esperienze di viaggiatori che hanno esplorato il Mar Rosso con noi.",
    reviews: [
      { name: "Michael Schmidt", country: "Germania", text: "Il viaggio a Dolphin House è stato un sogno assoluto! Nuotare con i delfini selvaggi è stato il momento clou della nostra vacanza.", rating: 5, tour: "Dolphin House" },
      { name: "Marco Rossi", country: "Italia", text: "Le isole Hamata sono mozzafiato! Acqua cristallina e barriere coralline meravigliose. Tutto perfettamente organizzato.", rating: 5, tour: "Hamata Islands" },
      { name: "Anna Nowak", country: "Polonia", text: "Il motoscafo Abu Dabbab ci ha dato la possibilità di vedere le tartarughe marine da vicino. Altamente raccomandato!", rating: 5, tour: "Abu Dabbab Speedboat" }
    ]
  },
  ru: {
    badge: "Довольные туристы",
    title: "Отзывы наших гостей",
    subtitle: "Реальные впечатления путешественников, открывших Красное море вместе с нами.",
    reviews: [
      { name: "Майкл Шмидт", country: "Германия", text: "Поездка в Дольфин Хаус была абсолютной мечтой! Плавание с дикими дельфинами стало главным событием нашего отпуска.", rating: 5, tour: "Dolphin House" },
      { name: "Марко Росси", country: "Италия", text: "Острова Хамата захватывают дух! Кристально чистая вода и великолепные коралловые рифы. Все было организовано идеально.", rating: 5, tour: "Hamata Islands" },
      { name: "Анна Новак", country: "Польша", text: "Поездка на катере в Абу-Даббаб позволила увидеть морских черепах вблизи. Очень рекомендую!", rating: 5, tour: "Abu Dabbab Speedboat" }
    ]
  },
  pl: {
    badge: "Zadowoleni Podróżnicy",
    title: "Co mówią nasi goście",
    subtitle: "Prawdziwe opinie podróżników, którzy odkrywali z nami Morze Czerwone.",
    reviews: [
      { name: "Michael Schmidt", country: "Niemcy", text: "Wycieczka do Dolphin House była absolutnym marzeniem! Pływanie z dzikimi delfinami to punkt kulminacyjny wakacji.", rating: 5, tour: "Dolphin House" },
      { name: "Marco Rossi", country: "Włochy", text: "Wyspy Hamata zapierają dech w piersiach! Krystaliczna woda i cudowne rafy koralowe. Wszystko idealnie zorganizowane.", rating: 5, tour: "Hamata Islands" },
      { name: "Anna Nowak", country: "Polska", text: "Szybka łódź do Abu Dabbab dała nam szansę zobaczyć żółwie morske z bliska. Gorąco polecam!", rating: 5, tour: "Abu Dabbab Speedboat" }
    ]
  },
  cz: {
    badge: "Spokojení cestovatelé",
    title: "Co říkají naši hosté",
    subtitle: "Skutečné zážitky cestovatelů, kteří s námi objevovali Rudé moře.",
    reviews: [
      { name: "Michael Schmidt", country: "Německo", text: "Výlet do Dolphin House byl naprostý sen! Plavání s divokými delfíny byl vrchol naší dovolené.", rating: 5, tour: "Dolphin House" },
      { name: "Marco Rossi", country: "Itálie", text: "Ostrovy Hamata jsou dechberoucí! Křišťálově čistá voda a nádherné korálové útesy. Vše bylo perfektně zorganizováno.", rating: 5, tour: "Hamata Islands" },
      { name: "Anna Nowak", country: "Polsko", text: "Rychlý člun do Abu Dabbab nám dal úžasnou šanci vidět mořské želvy zblízka. Vřele doporučuji!", rating: 5, tour: "Abu Dabbab Speedboat" }
    ]
  }
};