import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface Strain {
  id: string;
  slug?: string;
  name: string;
  image: string;
  price: string | number;
  description: string;
  featured?: boolean;
  series?: string;
  format?: string;
  style?: string;
  status?: string;
}

interface StrainCardProps {
  strain: Strain;
}

const StrainCard: React.FC<StrainCardProps> = ({ strain }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(strain);

    toast({
      title: "Added to cart",
      description: `${strain.name} has been added to your collector cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden border border-lime-500/20 bg-[#120916] text-white shadow-[0_0_0_1px_rgba(163,230,53,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/50 hover:shadow-[0_0_24px_rgba(132,204,22,0.18)]">
      <div className="relative overflow-hidden">
        <img
          src={strain.image}
          alt={strain.name}
          className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute left-3 top-3 flex gap-2">
          {strain.featured && (
            <Badge className="border border-black/30 bg-lime-400 text-black">
              <Star className="mr-1 h-3 w-3" />
              NEW
            </Badge>
          )}

          {strain.status && (
            <Badge className="border border-lime-500/30 bg-black/75 text-lime-400">
              {strain.status}
            </Badge>
          )}
        </div>

        {strain.format && (
          <div className="absolute right-3 top-3">
            <Badge className="border border-lime-500/20 bg-[#1a1024]/90 text-lime-300">
              {strain.format}
            </Badge>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-4">
          <div>
            <h3 className="mb-2 text-xl font-bold uppercase tracking-wide text-white drop-shadow-lg">
              {strain.name}
            </h3>

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
            <div className="text-2xl font-bold text-lime-400 drop-shadow-lg">
              {strain.price}
            </div>
          </div>
        </div>
      </div>

      <CardContent className="space-y-4 p-5">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-md border border-lime-500/15 bg-black/20 p-3">
            <div className="text-xs uppercase tracking-wider text-gray-500">
              Series
            </div>
            <div className="mt-1 font-medium text-lime-300">
              {strain.series || "Unknown"}
            </div>
          </div>

          <div className="rounded-md border border-lime-500/15 bg-black/20 p-3">
            <div className="text-xs uppercase tracking-wider text-gray-500">
              Format
            </div>
            <div className="mt-1 font-medium text-purple-300">
              {strain.format || "Art"}
            </div>
          </div>

          <div className="rounded-md border border-lime-500/15 bg-black/20 p-3">
            <div className="text-xs uppercase tracking-wider text-gray-500">
              Style
            </div>
            <div className="mt-1 font-medium text-lime-200">
              {strain.style || "Mixed"}
            </div>
          </div>

          <div className="rounded-md border border-lime-500/15 bg-black/20 p-3">
            <div className="text-xs uppercase tracking-wider text-gray-500">
              Status
            </div>
            <div className="mt-1 font-medium text-yellow-300">
              {strain.status || "Available"}
            </div>
          </div>
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-gray-400">
          {strain.description}
        </p>

        <div className="flex gap-3 pt-2">
          <Button
            asChild
            variant="outline"
            className="flex-1 border-lime-500/40 bg-transparent text-lime-300 hover:bg-lime-500/10 hover:text-lime-200"
          >
            <Link to={`/strain/${strain.slug || strain.id}`}>Details</Link>
          </Button>

          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-lime-400 text-black hover:bg-lime-300"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StrainCard;