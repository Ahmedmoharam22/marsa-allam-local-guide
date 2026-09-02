"use client";

import { useState } from "react";
import { Language } from "@/types/tour";
import { faqData } from "@/data/faq";
import { ChevronDownIcon } from "lucide-react";
import SectionTitle from "../common/SectionTitle";

interface FAQSectionProps {
  lang: Language;
}

export default function FAQSection({ lang }: FAQSectionProps) {
  const t = faqData[lang] || faqData.en;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.title}
          subtitle={t.subtitle}
          align="center"
        />

        <div className="space-y-4">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDownIcon className={`w-5 h-5 text-cyan-600 dark:text-cyan-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}