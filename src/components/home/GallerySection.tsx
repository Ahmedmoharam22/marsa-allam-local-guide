import { Language } from "@/types/tour";
import { galleryImages, galleryContent } from "@/data/gallery";
import Image from "next/image";

interface GallerySectionProps {
  lang: Language;
}

export default function GallerySection({ lang }: GallerySectionProps) {
  const t = galleryContent[lang] || galleryContent.en;

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-400 mb-4">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <div 
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-800"
            >
              <Image 
                src={img.src}
                alt={img.alt[lang] || img.alt.en}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-sm tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt[lang] || img.alt.en}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}