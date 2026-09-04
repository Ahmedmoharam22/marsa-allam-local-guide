import Link from 'next/link';
import type { Locale } from '@/lib/i18n-config';
import { privacyPolicyData } from '@/data/policies';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, CheckCircle } from 'lucide-react';

interface PolicyPageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function PrivacyPolicyPage({ params }: PolicyPageProps) {
  const { lang } = await params;
  const t = privacyPolicyData[lang] || privacyPolicyData.en;

  const sectionIcons = [Lock, Eye, ShieldCheck, FileText, CheckCircle];

  return (
    <main className="min-h-screen bg-white pt-28 pb-20 text-slate-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Back to Home Button */}
        <div className="mb-8">
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:border-cyan-600 hover:bg-slate-100 hover:text-cyan-700 active:scale-95"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            <span>{t.back}</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="mb-10 text-center sm:text-start border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3.5 py-1 text-xs font-semibold text-cyan-800 border border-cyan-200 mb-4">
            <ShieldCheck className="h-4 w-4 text-cyan-600" />
            <span>{t.lastUpdated}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-5xl tracking-tight leading-tight">
            {t.title}
          </h1>
          <p className="mt-3 text-base text-slate-600 sm:text-lg max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </header>

        {/* Structured Policy Sections */}
        <div className="space-y-6">
          {t.sections.map((section, idx) => {
            const IconComponent = sectionIcons[idx % sectionIcons.length];

            return (
              <section
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6 sm:p-8 shadow-sm transition-all hover:border-slate-300"
              >
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 border border-cyan-200">
                    <IconComponent className="h-4 w-4" />
                  </span>
                  <span>{section.title}</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed pl-12">
                  {section.text}
                </p>
              </section>
            );
          })}
        </div>

      </div>
    </main>
  );
}
