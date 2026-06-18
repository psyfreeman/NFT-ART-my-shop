import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { articles } from "@/lib/articles";
import { ArrowLeft } from "lucide-react";

function ArticleDetail() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#09050d] pt-32 text-white">
        <Navigation />
        <main className="mx-auto max-w-4xl px-4 py-10 md:px-6">
          <h1 className="text-4xl font-bold text-white">Article not found</h1>
          <p className="mt-4 text-gray-400">
            The requested archive entry does not exist.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl border border-violet-400/20 bg-[#2a173d] px-4 py-2 text-sm text-violet-200 hover:bg-lime-400 hover:text-black"
          >
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09050d] pt-32 text-white">
      <Navigation />

      <main className="mx-auto max-w-4xl px-4 pb-16 md:px-6">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-400/20 bg-[#2a173d] px-4 py-2 text-sm text-violet-200 hover:bg-lime-400 hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>

        <article className="overflow-hidden rounded-2xl border border-lime-500/10 bg-[#120916] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
          <img
            src={article.image}
            alt={article.title}
            className="h-[360px] w-full object-cover md:h-[460px]"
          />

          <div className="p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.16em] text-gray-500">
              {article.date}
            </div>

            <h1 className="mt-3 text-4xl font-bold uppercase tracking-[0.08em] text-white md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-4 text-base leading-8 text-gray-400">
              {article.excerpt}
            </p>

            <div className="mt-8 space-y-6">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-base leading-8 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default ArticleDetail;