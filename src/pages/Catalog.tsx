import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import StrainCard from "@/components/StrainCard";
import { strains } from "@/lib/mockData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

function Catalog() {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [selectedAvailability, setSelectedAvailability] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [selectedStyle, setSelectedStyle] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedSeries, setSelectedSeries] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const filteredStrains = useMemo(() => {
    const filtered = strains.filter((strain) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        strain.name.toLowerCase().includes(search) ||
        strain.description.toLowerCase().includes(search) ||
        (strain.series || "").toLowerCase().includes(search) ||
        (strain.style || "").toLowerCase().includes(search) ||
        (strain.format || "").toLowerCase().includes(search);

      const matchesAvailability =
        selectedAvailability === "all" ||
        (strain.status || "").toLowerCase() === selectedAvailability;

      const matchesStyle =
        selectedStyle === "all" ||
        (strain.style || "").toLowerCase() === selectedStyle;

      const matchesFormat =
        selectedFormat === "all" ||
        (strain.format || "").toLowerCase() === selectedFormat;

      const matchesSeries =
        selectedSeries === "all" ||
        (strain.series || "").toLowerCase() === selectedSeries;

      const price = Number(String(strain.price).replace(/[^0-9.]/g, "")) || 0;

      const matchesPriceRange =
        selectedPriceRange === "all" ||
        (selectedPriceRange === "low" && price < 200) ||
        (selectedPriceRange === "medium" && price >= 200 && price <= 500) ||
        (selectedPriceRange === "high" && price > 500);

      return (
        matchesSearch &&
        matchesAvailability &&
        matchesPriceRange &&
        matchesStyle &&
        matchesFormat &&
        matchesSeries
      );
    });

    filtered.sort((a, b) => {
      const priceA = Number(String(a.price).replace(/[^0-9.]/g, "")) || 0;
      const priceB = Number(String(b.price).replace(/[^0-9.]/g, "")) || 0;

      switch (sortBy) {
        case "date":
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case "price":
          return priceA - priceB;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [
    searchTerm,
    selectedAvailability,
    selectedPriceRange,
    selectedStyle,
    selectedFormat,
    selectedSeries,
    sortBy,
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedAvailability("all");
    setSelectedPriceRange("all");
    setSelectedStyle("all");
    setSelectedFormat("all");
    setSelectedSeries("all");
    setSortBy("name");
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

  return (
    <div className="min-h-screen bg-[#09050d] text-white">
      <Navigation />

      <section className="border-b border-lime-500/10 bg-gradient-to-b from-[#120916] to-[#09050d]">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mb-4 inline-flex rounded-full border border-lime-500/20 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-lime-400">
            Fresh Drop
          </div>

          <h1 className="mb-4 text-4xl font-bold uppercase tracking-wide md:text-6xl">
            {t("catalog.title")}
          </h1>

          <p className="max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            {t("catalog.subtitle")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <aside>
            <Card className="sticky top-24 border border-lime-500/20 bg-[#120916] text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lime-300">
                  <SlidersHorizontal className="h-4 w-4" />
                  {t("catalog.filters")}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-lime-300">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      placeholder={t("catalog.searchPlaceholder")}
                      className="border-lime-500/20 bg-black/30 pl-10 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-lime-300">
                    Available
                  </label>
                  <Select
                    value={selectedAvailability}
                    onValueChange={setSelectedAvailability}
                  >
                    <SelectTrigger className="border-lime-500/20 bg-black/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-lime-500/20 bg-[#120916] text-white">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="reserved">Reserved</SelectItem>
                      <SelectItem value="collected">Collected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-lime-300">
                    Price range
                  </label>
                  <Select
                    value={selectedPriceRange}
                    onValueChange={setSelectedPriceRange}
                  >
                    <SelectTrigger className="border-lime-500/20 bg-black/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-lime-500/20 bg-[#120916] text-white">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="low">Under $200</SelectItem>
                      <SelectItem value="medium">$200 – $500</SelectItem>
                      <SelectItem value="high">Over $500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-lime-300">
                    Style
                  </label>
                  <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                    <SelectTrigger className="border-lime-500/20 bg-black/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-lime-500/20 bg-[#120916] text-white">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="street art">Street Art</SelectItem>
                      <SelectItem value="tachisme">Tachisme</SelectItem>
                      <SelectItem value="abstraction">Abstraction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-lime-300">
                    Format
                  </label>
                  <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                    <SelectTrigger className="border-lime-500/20 bg-black/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-lime-500/20 bg-[#120916] text-white">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="physical">Physical</SelectItem>
                      <SelectItem value="nft">NFT</SelectItem>
                      <SelectItem value="phygital">Phygital</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-lime-300">
                    Series
                  </label>
                  <Select value={selectedSeries} onValueChange={setSelectedSeries}>
                    <SelectTrigger className="border-lime-500/20 bg-black/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="border-lime-500/20 bg-[#120916] text-white">
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="smile canon">Smile Canon</SelectItem>
                      <SelectItem value="fresh drop">Fresh Drop</SelectItem>
                      <SelectItem value="genesis mint">Genesis Mint</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="w-full border-lime-500/30 bg-transparent text-lime-300 hover:bg-lime-500/10 hover:text-lime-200"
                >
                  {t("catalog.clearFilters")}
                </Button>
              </CardContent>
            </Card>
          </aside>

          <main>
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-sm text-gray-400">
                {t("catalog.results")}{" "}
                <span className="font-semibold text-lime-400">
                  {filteredStrains.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-400">{t("catalog.sort")}</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 border-lime-500/20 bg-black/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="border-lime-500/20 bg-[#120916] text-white">
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="date">Newest</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {filteredStrains.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredStrains.map((strain) => (
                  <StrainCard key={strain.id} strain={strain} />
                ))}
              </div>
            ) : (
              <Card className="border border-lime-500/20 bg-[#120916] text-white">
                <CardContent className="py-16 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    {t("catalog.empty")}
                  </h3>
                  <p className="mb-6 text-gray-400">
                    Try changing the filters or search phrase.
                  </p>
                  <Button
                    onClick={clearFilters}
                    className="bg-lime-400 text-black hover:bg-lime-300"
                  >
                    {t("catalog.clearFilters")}
                  </Button>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Catalog;