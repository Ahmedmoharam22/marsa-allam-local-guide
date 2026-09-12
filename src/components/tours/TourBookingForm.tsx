"use client";

import { useState } from "react";
import { marsaAlamHotels } from "@/data/hotels";
import { bookingFormLabels } from "@/constants/bookingLabels";
import type { Language } from "@/types/tour";

interface BookingFormProps {
  tourTitle: string;
  categoryName?: string;
  lang: Language;
}

export default function BookingForm({ tourTitle, categoryName, lang }: BookingFormProps) {
  const l = bookingFormLabels[lang] || bookingFormLabels.en;

  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");
  const [hotel, setHotel] = useState("");
  const [notes, setNotes] = useState("");

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "201080268114";
    const textMessage = `Hello! I want to book: *${tourTitle}*
Date: ${date || "Not specified"}
Guests: ${guests || "Not specified"}
Hotel: ${hotel || "Not specified"}
Notes: ${notes || "None"}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="rounded-3xl border border-teal-100/60 bg-gradient-to-b from-teal-50/40 via-white to-white p-6 sm:p-8 shadow-xl shadow-teal-900/5 dark:border-slate-800 dark:from-slate-900 dark:to-slate-900">
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          {l.ready} <span className="text-teal-700 dark:text-teal-400">{tourTitle}?</span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {l.subText}
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
            {l.dateLabel}
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 transition-all focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-teal-400"
          />
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
            {l.guestsLabel}
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 transition-all focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-teal-400"
          >
            <option value="">{l.selectGuests}</option>
            <option value="1 Person">1 Person</option>
            <option value="2 People">2 People</option>
            <option value="3 People">3 People</option>
            <option value="4 People">4 People</option>
            <option value="5 People">5 People</option>
            <option value="6 People">6 People</option>
            <option value="7 People">7 People</option>
            <option value="8 People">8 People</option>
            <option value="9 People">9 People</option>
            <option value="10 People">10 People</option>
          </select>
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
            {l.hotelLabel}
          </label>
          <select
            value={hotel}
            onChange={(e) => setHotel(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 transition-all focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-teal-400"
          >
            <option value="">{l.hotelPlaceholder}</option>
            {marsaAlamHotels.map((h, i) => (
              <option key={i} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
            {l.notesLabel}
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={l.notesPlaceholder}
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 transition-all focus:border-teal-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-teal-400"
          />
        </div>

        <button
          type="button"
          onClick={handleWhatsAppRedirect}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-600 active:scale-[0.98] cursor-pointer"
        >
          <span>💬</span>
          <span>{l.btnText}</span>
        </button>
      </div>
    </div>
  );
}