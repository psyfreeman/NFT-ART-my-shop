import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight, BookOpen, Newspaper } from "lucide-react";

function Index() {
  const { language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(6);

  const content = {
    en: {
      badge: "Archive",
      title: "Articles",
      subtitle:
        "Notes, releases, collector updates and exhibition signals from Psyfreeman Φ 1.618.",
      readMore: "Read more",
      showMore: "Show more",
      archiveNote: "Archive note",
      emptyTitle: "No articles yet",
      emptyText: "New archive entries will appear here.",
    },
    ru: {
      badge: "Архив",
      title: "Статьи",
      subtitle:
        "Заметки, релизы, новости для коллекционеров и выставочные сигналы Psyfreeman Φ 1.618.",
      readMore: "Читать",
      showMore: "Показать ещё",
      archiveNote: "Запись архива",
      emptyTitle: "Статей пока нет",
      emptyText: "Новые записи архива появятся здесь.",
    },
  };

  const t = language === "ru" ? content.ru : content.en;

  const enabledArticles = articles.filter((article) => article.enabled !== false);
  const visibleArticles = enabledArticles.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-[#001f13] text-[#f4efd2]">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 pt-32 pb-16 md:px-6">
        {/* Header */}
        <section className="mb-8 rounded-[2rem] border border-[#22c55e]/20 bg-[#00170f] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:p-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/35 bg-[#22c55e]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#22c55e]">
            <Newspaper className="h-4 w-4" />
            {t.badge}
          </div>

          <h1 className="mb-4 text-4xl font-black uppercase leading-none tracking-wide text-[#f4efd2] md:text-6xl">
            {t.title}
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-[#b8c8a5]">
            {t.subtitle}
          </p>
        </section>

        {/* Articles */}
        {visibleArticles.length > 0 ? (
          <section>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {visibleArticles.map((article) => {
                const sizeClass =
                  article.size === "large"
                    ? "xl:col-span-2"
                    : article.size === "medium"
                      ? "xl:col-span-1"
                      : "xl:col-span-1";

                const imageHeight =
                  article.size === "large"
                    ? "h-80"
                    : article.size === "medium"
                      ? "h-64"
                      : "h-56";

                return (
                  <article
                    key={article.id}
                    className={`group overflow-hidden rounded-[2rem] border border-[#f4efd2]/10 bg-[#00170f] p-3 shadow-[0_20px_70px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-[#22c55e]/45 hover:shadow-[0_0_40px_rgba(34,197,94,0.12),0_30px_90px_rgba(0,0,0,0.5)] ${sizeClass}`}
                  >
                    <Link to={`/article/${article.slug}`} className="block">
                      <div className="relative overflow-hidden rounded-[1.4rem] bg-black">
                        <img
                          src={article.image}
                          alt={article.title}
                          className={`w-full object-cover transition duration-700 group-hover:scale-105 ${imageHeight}`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                        <div className="absolute bottom-4 left-4 rounded-full border border-[#22c55e]/30 bg-black/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#22c55e] backdrop-blur-md">
                          {article.date}
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="mb-3 flex items-center gap-2 text-[#22c55e]">
                          <BookOpen className="h-4 w-4" />
                          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                            {t.archiveNote}
                          </span>
                        </div>

                        <h2 className="text-2xl font-black leading-tight text-[#f4efd2]">
                          {article.title}
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#b8c8a5]">
                          {article.excerpt}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/35 bg-[#032616] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#22c55e] transition group-hover:bg-[#22c55e] group-hover:text-[#001f13]">
                          {t.readMore}
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>

            {visibleCount < enabledArticles.length && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={handleShowMore}
                  className="rounded-full border border-[#22c55e]/35 bg-[#032616] px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#22c55e] transition hover:bg-[#22c55e] hover:text-[#001f13]"
                >
                  {t.showMore}
                </button>
              </div>
            )}
          </section>
        ) : (
          <section className="rounded-[2rem] border border-[#f4efd2]/10 bg-[#00170f] p-10 text-center">
            <h2 className="mb-3 text-3xl font-black uppercase text-[#f4efd2]">
              {t.emptyTitle}
            </h2>

            <p className="text-[#b8c8a5]">{t.emptyText}</p>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Index;