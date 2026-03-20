import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { strains } from "@/lib/mockData";

function StrainDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [isAdding, setIsAdding] = useState(false);

  const strain = strains.find((s) => s.slug === id || s.id === id);

  if (!strain) {
    return (
      <div className="min-h-screen bg-[#09050d] text-white">
        <Navigation />
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">Работа не найдена</h1>
            <p className="mb-8 text-gray-400">
              Запрашиваемая работа не существует в текущей коллекции.
            </p>
            <Link to="/catalog">
              <Button className="border border-lime-500/30 bg-lime-400 text-black hover:bg-lime-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Вернуться в коллекцию
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = async () => {
    setIsAdding(true);

    try {
      await addToCart({
        id: strain.id,
        slug: strain.slug,
        name: strain.name,
        price: strain.price,
        image: strain.image,
        description: strain.description,
        featured: strain.featured,
        series: strain.series,
        format: strain.format,
        style: strain.style,
        status: strain.status,
      });

      toast.success(`${strain.name} added to collector cart`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Ошибка при добавлении в корзину");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09050d] text-white">
      <Navigation />

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад
          </Button>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-lime-500/20 bg-[#120916]">
            <img
              src={strain.image}
              alt={strain.name}
              className="h-[640px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

            <div className="absolute left-4 top-4 flex gap-2">
              {strain.featured && (
                <Badge className="border border-black/30 bg-lime-400 text-black">
                  <Star className="mr-1 h-3 w-3" />
                  NEW
                </Badge>
              )}

              {strain.status && (
                <Badge className="border border-lime-500/30 bg-black/70 text-lime-400">
                  {strain.status}
                </Badge>
              )}
            </div>

            {strain.format && (
              <div className="absolute right-4 top-4">
                <Badge className="border border-lime-500/20 bg-[#1a1024]/90 text-lime-300">
                  {strain.format}
                </Badge>
              </div>
            )}

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
              <div>
                <h1 className="mb-2 text-3xl font-bold uppercase tracking-wide text-white">
                  {strain.name}
                </h1>
                <div className="flex flex-wrap gap-2">
                  {strain.series && (
                    <Badge className="border border-lime-500/30 bg-black/70 text-lime-400">
                      {strain.series}
                    </Badge>
                  )}
                  {strain.style && (
                    <Badge className="border border-fuchsia-500/30 bg-black/70 text-fuchsia-300">
                      {strain.style}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="text-right">
                <div className="text-3xl font-bold text-lime-400">{strain.price}</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border border-lime-500/20 bg-[#120916] text-white">
              <CardHeader>
                <CardTitle className="text-lime-300">Описание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-gray-300">
                  {strain.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-lime-500/20 bg-[#120916] text-white">
              <CardHeader>
                <CardTitle className="text-lime-300">Информация о работе</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-md border border-lime-500/15 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-wider text-gray-500">Series</div>
                  <div className="mt-1 font-medium text-lime-300">
                    {strain.series || "Unknown"}
                  </div>
                </div>

                <div className="rounded-md border border-lime-500/15 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-wider text-gray-500">Format</div>
                  <div className="mt-1 font-medium text-purple-300">
                    {strain.format || "Art"}
                  </div>
                </div>

                <div className="rounded-md border border-lime-500/15 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-wider text-gray-500">Style</div>
                  <div className="mt-1 font-medium text-lime-200">
                    {strain.style || "Mixed"}
                  </div>
                </div>

                <div className="rounded-md border border-lime-500/15 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-wider text-gray-500">Status</div>
                  <div className="mt-1 font-medium text-yellow-300">
                    {strain.status || "Available"}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-lime-500/20 bg-[#120916] text-white">
              <CardHeader>
                <CardTitle className="text-lime-300">Поддержать работу</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="mb-1 text-3xl font-bold text-lime-400">{strain.price}</div>
                  <div className="text-sm text-gray-400">
                    Crypto / Visa / Mastercard
                  </div>
                </div>

                <Button
                  onClick={handleAddToCart}
                  disabled={isAdding}
                  className="w-full bg-lime-400 text-black hover:bg-lime-300"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {isAdding ? "Adding..." : "Add to Cart"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrainDetail;