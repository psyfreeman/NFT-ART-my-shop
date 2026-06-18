import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowUpRight, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

type ArtworkCardProps = {
  strain: {
    id: string;
    slug?: string;
    name: string;
    image: string;
    price: number | string;
    description?: string;
    format?: string;
    type?: string;
    category?: "Phygital NFT" | "Digital NFT" | "Premium incense";
    requiresShipping?: boolean;
  };
};

function StrainCard({ strain }: ArtworkCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const slug = strain.slug || strain.id;
  const price = Number(strain.price) || 0;

  const fallbackDescription =
    "Digital NFT artwork from the Smile Collection by Psyfreeman Φ 1.618.";

  const categoryLabel = strain.category || "Digital NFT";

  const handleAddToCart = async () => {
    await addToCart({
      id: strain.id,
      name: strain.name,
      price,
      image: strain.image,
      description: strain.description || fallbackDescription,
    });

    setIsAdded(true);

    window.setTimeout(() => {
      setIsAdded(false);
    }, 1100);
  };

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[#f4efd2]/10 bg-[#00170f] shadow-[0_0_0_1px_rgba(244,239,210,0.03),0_24px_80px_rgba(0,0,0,0.45)] transition duration-500 hover:-translate-y-1 hover:border-[#22c55e]/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.14),0_30px_90px_rgba(0,0,0,0.55)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.13),transparent_36%),linear-gradient(to_bottom,rgba(244,239,210,0.04),transparent)] opacity-80" />

      <Link to={`/strain/${slug}`} className="relative block">
        <div className="relative aspect-square overflow-hidden bg-black">
          <img
            src={strain.image}
            alt={strain.name}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-85" />

          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-full border border-[#22c55e]/30 bg-black/50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#22c55e] backdrop-blur-md">
              {categoryLabel}
            </span>

            {strain.requiresShipping && (
              <span className="rounded-full border border-[#f4efd2]/15 bg-[#f4efd2]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f4efd2]/70 backdrop-blur-md">
                Ships
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
            <div>
              {strain.format && (
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f4efd2]/45">
                  {strain.format}
                </div>
              )}

              <h3 className="line-clamp-2 text-xl font-black leading-tight text-[#f4efd2] drop-shadow">
                {strain.name}
              </h3>
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f4efd2]/10 bg-[#f4efd2]/10 text-[#f4efd2]/80 backdrop-blur-md transition group-hover:border-[#22c55e]/40 group-hover:text-[#22c55e]">
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </Link>

      <div className="relative space-y-5 p-5">
        <p className="line-clamp-3 text-sm leading-6 text-[#b8c8a5]">
          {strain.description || fallbackDescription}
        </p>

        <div className="flex items-center justify-between border-t border-[#f4efd2]/10 pt-5">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[#f4efd2]/35">
              Price
            </div>

            <div className="mt-1 text-lg font-black text-[#f4efd2]">
              ${price.toFixed(2)}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/strain/${slug}`}
              className="rounded-xl border border-[#f4efd2]/10 bg-white/[0.03] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#f4efd2]/60 transition hover:border-[#22c55e]/35 hover:bg-[#032616] hover:text-[#22c55e]"
            >
              View
            </Link>

            <button
              onClick={handleAddToCart}
              className={`group/cart relative overflow-hidden rounded-xl px-4 py-3 text-[#001f13] transition active:scale-95 ${
                isAdded
                  ? "scale-105 bg-[#86efac] shadow-[0_0_38px_rgba(134,239,172,0.55)]"
                  : "bg-[#22c55e] shadow-[0_0_24px_rgba(34,197,94,0.25)] hover:bg-[#86efac] hover:shadow-[0_0_34px_rgba(34,197,94,0.38)]"
              }`}
              aria-label={`Add ${strain.name} to cart`}
              type="button"
            >
              <span className="relative z-10 flex items-center gap-2">
                {isAdded ? (
                  <Check className="h-4 w-4 animate-bounce" />
                ) : (
                  <ShoppingCart className="h-4 w-4 transition group-hover/cart:-rotate-12 group-hover/cart:scale-125" />
                )}

                <span className="hidden text-xs font-black uppercase tracking-[0.14em] sm:inline">
                  {isAdded ? "Added" : "Add"}
                </span>
              </span>

              <span
                className={`absolute inset-0 bg-white/30 transition duration-500 ${
                  isAdded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default StrainCard;