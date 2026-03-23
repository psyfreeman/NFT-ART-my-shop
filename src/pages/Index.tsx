import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";
import { useState } from "react";



function Index() {
  const [visibleCount, setVisibleCount] = useState(6);

const enabledArticles = articles.filter((article) => article.enabled !== false);
const visibleArticles = enabledArticles.slice(0, visibleCount);

const handleShowMore = () => {
  setVisibleCount((prev) => prev + 3);
};
  return (
    <div className="min-h-screen bg-[#09050d] pt-36 text-white">
      <Navigation />

      <main className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <section className="mb-10">
      

          <h1 className="max-w-4xl text-4xl font-bold uppercase tracking-[0.14em] text-white md:text-6xl">
            Releases, notes, and archive entries
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            A living front page for drops, articles, collector notes, and future exhibition signals.
          </p>
        </section>

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
                  className={`rounded-2xl border border-lime-500/10 bg-[#120916] p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${sizeClass}`}
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={article.image}
                      alt={article.title}
                      className={`w-full object-cover ${imageHeight}`}
                    />
                  </div>

                  <div className="p-3 md:p-4">
                    <div className="mb-3 text-xs uppercase tracking-[0.16em] text-gray-500">
                      {article.date}
                    </div>

                    <h2 className="text-2xl font-bold leading-tight text-white">
                      {article.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400">
                      {article.excerpt}
                    </p>

                    <div className="mt-5">
                      <Link
                        to={`/article/${article.slug}`}
                        className="inline-flex rounded-lg border border-violet-400/20 bg-[#2a173d] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-200 transition-colors hover:border-lime-400/40 hover:bg-lime-400 hover:text-black"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {visibleCount < enabledArticles.length && (
  <div className="mt-10 flex justify-center">
    <button
      onClick={handleShowMore}
      className="rounded-xl border border-violet-400/20 bg-[#2a173d] px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-violet-200 transition-colors hover:border-lime-400/40 hover:bg-lime-400 hover:text-black"
    >
      Show More News
    </button>
  </div>
)}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Index;