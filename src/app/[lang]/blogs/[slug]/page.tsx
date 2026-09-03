import { Locale } from "@/lib/i18n-config";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogs/posts";

interface BlogDetailProps {
  params: Promise<{ lang: Locale; slug: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { lang, slug } = await params;
  const blog = blogPosts[slug];

  if (!blog) {
    notFound();
  }

  const title = blog.title[lang] || blog.title.en;
  const intro = blog.intro[lang] || blog.intro.en;

  const uiTexts: Record<Locale, { back: string; relatedTitle: string; readMore: string }> = {
    en: { back: "Back to Blogs", relatedTitle: "More Stories & Guides", readMore: "Read Article" },
    de: { back: "Zurück zu Blogs", relatedTitle: "Weitere Geschichten & Guides", readMore: "Artikel lesen" },
    it: { back: "Torna ai Blog", relatedTitle: "Altre Storie e Guide", readMore: "Leggi articolo" },
    ru: { back: "Назад к блогам", relatedTitle: "Другие истории и гиды", readMore: "Читать статью" },
    pl: { back: "Powrót do blogów", relatedTitle: "Więcej historii i przewodników", readMore: "Czytaj artykuł" },
    cz: { back: "Zpět na blogy", relatedTitle: "Další příběhy a průvodci", readMore: "Přečíst článek" }
  };

  const t = uiTexts[lang] || uiTexts.en;

  return (
    <main className="min-h-screen bg-background pb-28 pt-28">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href={`/${lang}/blogs`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
          >
            <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
            <span>{t.back}</span>
          </Link>
        </div>

        {/* Title & Metadata */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4 text-secondary" />
              {blog.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-secondary" />
              {blog.readTime}
            </span>
          </div>

          {/* العنوان الرئيسي بخط كبير وبارز بلون مميز */}
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </header>

        {/* Featured Image */}
        <div className="relative mb-10 h-80 w-full overflow-hidden rounded-2xl sm:h-96 bg-muted shadow-lg">
          <Image
            src={blog.image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Intro */}
        <div className="text-lg font-medium text-foreground leading-relaxed mb-8">
          <p>{intro}</p>
        </div>

        {/* Dynamic Sections with Embedded Images */}
        <div className="space-y-10 text-muted-foreground leading-relaxed">
          {blog.sections.map((section, index) => {
            const heading = section.heading[lang] || section.heading.en;
            const text = section.text[lang] || section.text.en;

            return (
              <div key={index} className="space-y-4">
                {/* عناوين الأقسام بخط مختلف وبارز */}
                <h2 className="text-2xl font-bold text-secondary">
                  {heading}
                </h2>
                <p>{text}</p>

                {/* صورة إضافية في المنتصف لكسر رتابة النص */}
                {index === 0 && blog.secondaryImage && (
                  <div className="relative my-8 h-72 w-full overflow-hidden rounded-xl bg-muted shadow-md">
                    <Image
                      src={blog.secondaryImage}
                      alt="Marsa Alam Diving"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </article>

      {/* Related Section Before Footer */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 border-t border-border pt-16">
        <h3 className="text-2xl font-bold text-foreground mb-8 text-center sm:text-start">
          {t.relatedTitle}
        </h3>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
            <div className="relative h-44 w-full overflow-hidden rounded-xl mb-4 bg-muted">
              <Image
                src="/images/tours/tour-1.webp"
                alt="Related Blog"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h4 className="font-bold text-foreground line-clamp-2 mb-2 group-hover:text-secondary transition-colors">
              Discovering the Magic of Sataya Dolphin Reef
            </h4>
            <Link
              href={`/${lang}/blogs`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary mt-2"
            >
              <span>{t.readMore}</span>
              <ArrowRight className="h-3.5 w-3.5 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}