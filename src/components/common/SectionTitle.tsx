import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end',
  };

  return (
    <div className={`relative flex flex-col mb-16 max-w-3xl group ${alignmentClasses[align]} ${className}`}>
      
      {/* توهج خفيف منسجم مع الخلفية الداكنة */}
      <div className="absolute -inset-4 bg-teal-900/20 rounded-2xl blur-2xl pointer-events-none -z-10" />

      {/* Main Heading - بدون أي لون أبيض (text-slate-800 أو لونك المفضل) */}
      <h2 className="relative text-3xl font-extrabold tracking-tight text-slate-800 dark:text-slate-300 sm:text-4xl lg:text-5xl leading-tight">
        
        {/* خطوط ديكورية جانبية بلون داكن/teal */}
        <span className="hidden sm:inline-block absolute -left-10 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-teal-600/60" />
        <span className="hidden sm:inline-block absolute -right-10 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-teal-600/60" />

        {/* النص بلون slate داكن/أزرق غامق */}
        <span className="text-slate-800 dark:text-teal-400 drop-shadow-sm">
          {title}
        </span>
      </h2>

      {/* فاصل وسطي منسجم - ألوان غامقة/Teal */}
      <div className="relative flex items-center justify-center gap-2 my-4 w-full">
        <div className="h-[1px] w-8 bg-teal-600/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-teal-600" />
        <div className="h-[1px] w-8 bg-teal-600/40" />
      </div>

      {/* Subtitle - لون داكن هادئ */}
      {subtitle && (
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
      
    </div>
  );
}