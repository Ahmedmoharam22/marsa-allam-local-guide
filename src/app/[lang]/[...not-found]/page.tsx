import Link from 'next/link';
import { FaCompass, FaHome } from 'react-icons/fa';
import type { Language } from '@/types/tour';

interface CatchAllNotFoundProps {
  params: Promise<{
    lang: Language;
  }>;
}

export default async function CatchAllNotFound({ params }: CatchAllNotFoundProps) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'en';

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-8 relative z-10">
        <div className="relative">
          <h1 className="text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 select-none opacity-90">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaCompass className="w-20 h-20 text-cyan-500/20 animate-spin-slow" />
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Oops! You’ve drifted off course
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable in the Red Sea depths.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={`/${lang}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-semibold hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            <FaHome className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href={`/${lang}/tours`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 hover:text-white transition-all"
          >
            Explore Tours
          </Link>
        </div>

        <div className="pt-8 text-xs text-slate-600 border-t border-slate-900">
          Marsa Alam Local Guide — Your Safe Harbor
        </div>
      </div>
    </div>
  );
}