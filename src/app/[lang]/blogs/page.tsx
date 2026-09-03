import { Locale } from "@/lib/i18n-config";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogs/posts";

interface BlogsPageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function BlogsPage({ params }: BlogsPageProps) {
  const { lang } = await params;

  const titles: Record<Locale, { title: string; subtitle: string; readMore: string }> = {
    en: { title: "Our Travel & Diving Blog", subtitle: "Tips, guides, and stories from the heart of the Red Sea.", readMore: "Read More" },
    de: { title: "Unser Reise- & Tauchblog", subtitle: "Tipps, Guides und Geschichten aus dem Herzen des Roten Meeres.", readMore: "Weiterlesen" },
    it: { title: "Il nostro Blog di Viaggi e Immersioni", subtitle: "Consigli, guide e storie dal cuore del Mar Rosso.", readMore: "Leggi di più" },
    ru: { title: "Наш блог о путешествиях и дайвинге", subtitle: "Советы, гиды и истории из сердца Красного моря.", readMore: "Читать далее" },
    pl: { title: "Nasz blog podróżniczy i nurkowy", subtitle: "Wskazówki, przewodniki i historie z serca Morza Czerwonego.", readMore: "Czytaj więcej" },
    cz: { title: "Náš blog o cestování a potápění", subtitle: "Tipy, průvodce a příběhy ze srdce Rudého moře.", readMore: "Číst dále" }
  };

  const t = titles[lang] || titles.en;

  // تحويل الـ blogPosts Object لمصفوفة عشان نعرض كل المقالات المتاحة
  const postsList = Object.values(blogPosts);

  return (
    <main className="min-h-screen bg-background pb-20 pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.title}
          subtitle={t.subtitle}
          align="center"
          className="mb-12 text-foreground"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {postsList.map((blog) => {
            const title = blog.title[lang] || blog.title.en;
            const excerpt = blog.intro[lang] || blog.intro.en;

            return (
              <article
                key={blog.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50 hover:shadow-xl"
              >
                {/* Blog Image Container */}
                <div className="relative h-52 w-full overflow-hidden bg-muted">
                  <Image
                    src={blog.image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-secondary" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-secondary" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h2 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-secondary line-clamp-2">
                    {title}
                  </h2>

                  <p className="mb-6 flex-1 text-sm text-muted-foreground line-clamp-3">
                    {excerpt}
                  </p>

                  <Link
                    href={`/${lang}/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary/80"
                  >
                    <span>{t.readMore}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}