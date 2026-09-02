import { Language } from "@/types/tour";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppProps {
  lang: Language;
  tooltipText?: string; 
}

export default function FloatingWhatsApp({ lang, tooltipText }: FloatingWhatsAppProps) {
  // رقم الواتساب ورسالة الترحيب الافتراضية
  const phoneNumber = "201001188941";
  const message = encodeURIComponent("Hello, I would like to inquire about tours and services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // النص الافتراضي في حال مبعتهوش من الـ dictionary
  const label = tooltipText || "Chat with us on WhatsApp";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
    >
      <FaWhatsapp className="w-8 h-8 transition-transform group-hover:rotate-12" />
      
      {/* Tooltip */}
      <span className="absolute left-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-slate-800">
        {label}
      </span>
    </a>
  );
}