import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import StrainCard from "@/components/StrainCard";
import { strains } from "@/lib/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, Layers, CircleDot } from "lucide-react";

type CategoryId = "all" | "Digital NFT" | "Phygital NFT" | "Premium incense";
type SeriesId = "all" | "Smile Collection" | "The Crypto Brothers";

const categories: { id: CategoryId; label: string; note: string }[] = [
  {
    id: "all",
    label: "All",
    note: "Full archive",
  },
  {
    id: "Phygital NFT",
    label: "Phygital NFT",
    note: "Physical + digital twin",
  },
  {
    id: "Digital NFT",
    label: "Digital NFT",
    note: "Blockchain collectibles",
  },
  {
    id: "Premium incense",
    label: "Premium incense",
    note: "Ritual objects",
  },
];

const series: { id: SeriesId; label: string }[] = [
  { id: "all", label: "All series" },
  { id: "Smile Collection", label: "Smile Collection" },
  { id: "The Crypto Brothers", label: "The Crypto Brothers" },
];

function Catalog() {
  const { language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [activeSeries, setActiveSeries] = useState<SeriesId>("all");

  const text = {
    en: {
      badge: "NFT collector gate",
      title: "Digital Art Catalog",
      subtitle:
        "Explore phygital artworks, digital NFT collections and symbolic visual systems by Psyfreeman Φ 1.618.",
      categories: "Categories",
      series: "Series",
      search: "Search artworks...",
      results: "Available works",
      clear: "Clear filters",
      emptyTitle: "Nothing found",
      emptyText: "Try changing the category, series or search phrase.",
      openArchive: "Open archive",
      signal: "Live collection",
    },
    ru: {
      badge: "Вход коллекционера",
      title: "Каталог цифрового искусства",
      subtitle:
        "Исследуй phygital-работы, цифровые NFT-коллекции и символические визуальные системы Psyfreeman Φ 1.618.",
      categories: "Категории",
      series: "Серии",
      search: "Поиск работ...",
      results: "Доступные работы",
      clear: "Сбросить фильтры",
      emptyTitle: "Ничего не найдено",
      emptyText: "Попробуй изменить категорию, серию или поисковую фразу.",
      openArchive: "Открыть архив",
      signal: "Живая коллекция",
    },
  };

  const t = language === "ru" ? text.ru : text.en;

  const filteredStrains = useMemo(() => {
    return strains.filter((strain) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        strain.name.toLowerCase().includes(search) ||
        strain.description.toLowerCase().includes(search) ||
        (strain.series || "").toLowerCase().includes(search) ||
        (strain.style || "").toLowerCase().includes(search) ||
        (strain.format || "").toLowerCase().includes(search);

      const matchesCategory =
        activeCategory === "all" || strain.category === activeCategory;

      const matchesSeries =
        activeSeries === "all" || strain.series === activeSeries;

      return matchesSearch && matchesCategory && matchesSeries;
    });
  }, [searchTerm, activeCategory, activeSeries]);

  const clearFilters = () => {
    setSearchTerm("");
    setActiveCategory("all");
    setActiveSeries("all");
    setSearchParams({});
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);

    if (value.trim()) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  const hasActiveFilters =
    searchTerm || activeCategory !== "all" || activeSeries !== "all";

  return (
    <div className="min-h-screen bg-[#001f13] text-[#f4efd2]">
      <Navigation />

      <main className="mx-auto max-w-7xl px-4 pt-32 pb-16">
        {/* Hero */}
        <section className="relative mb-8 overflow-hidden rounded-[2rem] border border-[#22c55e]/25 bg-[#00170f] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,197,94,0.22),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(244,239,210,0.08),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/35 bg-[#22c55e]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#22c55e]">
                <Sparkles className="h-4 w-4" />
                {t.badge}
              </div>

              <h1 className="mb-5 max-w-4xl text-4xl font-black uppercase leading-none tracking-wide text-[#f4efd2] md:text-6xl lg:text-7xl">
                {t.title}
              </h1>

              <p className="max-w-2xl text-lg leading-8 text-[#b8c8a5]">
                {t.subtitle}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#f4efd2]/10 bg-black/20 p-5">
              <div className="mb-3 flex items-center gap-2 text-[#22c55e]">
                <CircleDot className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                  {t.signal}
                </span>
              </div>

              <div className="text-5xl font-black text-[#f4efd2]">
                {strains.length}
              </div>

              <div className="mt-2 text-sm leading-6 text-[#b8c8a5]">
                NFT / phygital signals inside the current archive.
              </div>
            </div>
          </div>
        </section>

        {/* Control Panel */}
        <section className="mb-8 overflow-hidden rounded-[2rem] border border-[#f4efd2]/15 bg-[#00170f] p-4 md:p-6">
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-[#22c55e]">
                <Layers className="h-4 w-4" />
                <span className="text-xs font-black uppercase tracking-[0.25em]">
                  {t.openArchive}
                </span>
              </div>

              <h2 className="text-2xl font-black uppercase tracking-wide text-[#f4efd2] md:text-3xl">
                {t.categories}
              </h2>
            </div>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#22c55e]" />
              <Input
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={t.search}
                className="h-13 rounded-2xl border-[#22c55e]/25 bg-black/25 pl-11 text-[#f4efd2] placeholder:text-[#f4efd2]/35 focus-visible:ring-[#22c55e]/40"
              />
            </div>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`group rounded-[1.4rem] border p-5 text-left transition duration-300 ${
                    isActive
                      ? "border-[#22c55e] bg-[#22c55e] text-[#001f13] shadow-[0_0_34px_rgba(34,197,94,0.25)]"
                      : "border-[#f4efd2]/10 bg-black/20 text-[#f4efd2] hover:border-[#22c55e]/45 hover:bg-[#032616]"
                  }`}
                >
                  <div
                    className={`mb-10 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.22em] ${
                      isActive ? "text-[#001f13]/70" : "text-[#22c55e]"
                    }`}
                  >
                    <span>{category.note}</span>
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="text-lg font-black uppercase tracking-wide">
                    {category.label}
                  </div>
                </button>
              );
            })}
          </div>

          <div>
            <div className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#22c55e]">
              {t.series}
            </div>

            <div className="flex flex-wrap gap-2">
              {series.map((item) => {
                const isActive = activeSeries === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSeries(item.id)}
                    className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] transition ${
                      isActive
                        ? "border-[#22c55e] bg-[#22c55e] text-[#001f13]"
                        : "border-[#f4efd2]/10 bg-black/20 text-[#f4efd2]/55 hover:border-[#22c55e]/40 hover:text-[#22c55e]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Results */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm uppercase tracking-[0.18em] text-[#b8c8a5]">
            {t.results}{" "}
            <span className="font-black text-[#22c55e]">
              {filteredStrains.length}
            </span>
          </div>

          {hasActiveFilters && (
            <Button
              onClick={clearFilters}
              variant="outline"
              className="w-full rounded-full border-[#22c55e]/35 bg-transparent px-5 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#22c55e] hover:bg-[#22c55e]/10 hover:text-[#86efac] md:w-auto"
            >
              {t.clear}
            </Button>
          )}
        </div>

        {filteredStrains.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredStrains.map((strain) => (
              <StrainCard key={strain.id} strain={strain} />
            ))}
          </div>
        ) : (
          <Card className="border border-[#22c55e]/20 bg-[#00170f] text-[#f4efd2]">
            <CardContent className="py-16 text-center">
              <h3 className="mb-2 text-2xl font-black text-[#f4efd2]">
                {t.emptyTitle}
              </h3>

              <p className="mb-6 text-[#b8c8a5]">{t.emptyText}</p>

              <Button
                onClick={clearFilters}
                className="rounded-full bg-[#22c55e] px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#001f13] hover:bg-[#86efac]"
              >
                {t.clear}
              </Button>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Catalog;