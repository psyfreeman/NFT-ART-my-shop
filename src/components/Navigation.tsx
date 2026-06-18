import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart, Palette } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);

  const location = useLocation();
  const { items = [] } = useCart();
  const { t } = useLanguage();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.catalog"), href: "/catalog" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;
  const itemCount = Array.isArray(items) ? items.length : 0;

  useEffect(() => {
    if (itemCount === 0) return;

    setCartPulse(true);

    const timer = window.setTimeout(() => {
      setCartPulse(false);
    }, 650);

    return () => window.clearTimeout(timer);
  }, [itemCount]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-[#22c55e]/30 bg-[#00170f]/90 shadow-[0_0_0_1px_rgba(244,239,210,0.06),0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(34,197,94,0.08)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,197,94,0.22),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(244,239,210,0.08),transparent_24%)]" />

          <div className="relative flex min-h-[76px] items-center justify-between gap-3 px-3 py-3 md:px-4">
            <Link
              to="/"
              className="flex min-w-0 items-center gap-3 rounded-2xl px-2 py-2 transition hover:bg-white/[0.04]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                <img
                  src="/assets/logo.png"
                  alt="Psyfreeman logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <div className="truncate text-sm font-black uppercase tracking-[0.2em] text-[#f4efd2] md:text-base">
                  Psyfreeman Φ 1.618
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <span className="rounded-full border border-[#22c55e]/35 bg-[#22c55e]/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#22c55e]">
                    NFT ART SHOP
                  </span>

                  <span className="hidden text-[10px] uppercase tracking-[0.16em] text-[#f4efd2]/45 sm:inline">
                    phygital / web3 / symbols
                  </span>
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`rounded-2xl border px-4 py-3 text-xs font-black uppercase tracking-[0.16em] transition ${
                    isActive(item.href)
                      ? "border-[#22c55e] bg-[#22c55e] text-[#001f13] shadow-[0_0_24px_rgba(34,197,94,0.28)]"
                      : "border-[#f4efd2]/10 bg-black/20 text-[#f4efd2]/65 hover:border-[#22c55e]/50 hover:bg-[#032616] hover:text-[#22c55e]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <LanguageSwitcher />

              <Link
                to="/cart"
                className={`group relative flex items-center gap-2 rounded-2xl border px-4 py-3 text-xs font-black uppercase tracking-[0.16em] transition ${
                  isActive("/cart")
                    ? "border-[#22c55e] bg-[#22c55e] text-[#001f13] shadow-[0_0_24px_rgba(34,197,94,0.28)]"
                    : "border-[#22c55e]/35 bg-[#032616] text-[#22c55e] hover:border-[#22c55e]/70 hover:bg-[#07391f] hover:text-[#86efac] hover:shadow-[0_0_28px_rgba(34,197,94,0.22)]"
                } ${
                  cartPulse
                    ? "scale-110 shadow-[0_0_42px_rgba(34,197,94,0.45)]"
                    : ""
                }`}
              >
                <ShoppingCart className="h-4 w-4 transition group-hover:-rotate-12 group-hover:scale-125" />
                <span>Cart</span>

                {itemCount > 0 && (
                  <span
                    className={`ml-1 min-w-[22px] rounded-lg border border-[#001f13] bg-[#22c55e] px-1.5 py-0.5 text-center text-[10px] font-black text-[#001f13] transition ${
                      cartPulse ? "scale-125 bg-[#86efac]" : ""
                    }`}
                  >
                    {itemCount}
                  </span>
                )}

                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[#22c55e]/0 transition group-hover:bg-[#22c55e]/10" />
              </Link>
            </div>

            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-2xl border border-[#22c55e]/40 bg-[#032616] text-[#22c55e] shadow-[0_0_24px_rgba(34,197,94,0.14)] hover:bg-[#07391f] hover:text-[#86efac]"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[310px] border-l border-[#22c55e]/40 bg-[#00170f] text-[#f4efd2] sm:w-[360px]"
                >
                  <div className="mt-8 mb-8">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                        <img
                          src="/assets/logo.png"
                          alt="Psyfreeman logo"
                          className="h-full w-full object-contain"
                        />
                      </div>

                      <div>
                        <div className="text-sm font-black uppercase tracking-[0.2em] text-[#f4efd2]">
                          Psyfreeman
                        </div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#22c55e]">
                          NFT artist shop
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#22c55e]/20 bg-[#032616] p-4">
                      <div className="mb-1 flex items-center gap-2 text-[#22c55e]">
                        <Palette className="h-4 w-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                          Collector gate
                        </span>
                      </div>

                      <p className="text-sm leading-6 text-[#f4efd2]/60">
                        Phygital artworks, digital NFT collections and symbolic
                        Web3 visual systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`rounded-2xl border px-4 py-4 text-xs font-black uppercase tracking-[0.18em] ${
                          isActive(item.href)
                            ? "border-[#22c55e] bg-[#22c55e] text-[#001f13]"
                            : "border-[#f4efd2]/10 bg-black/20 text-[#f4efd2]/70 hover:border-[#22c55e]/45 hover:bg-[#032616] hover:text-[#22c55e]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}

                    <div className="mt-4 border-t border-[#f4efd2]/10 pt-4">
                      <div className="mb-4 flex justify-end">
                        <LanguageSwitcher />
                      </div>

                      <Link to="/cart" onClick={() => setIsOpen(false)}>
                        <button
                          className={`flex w-full items-center rounded-2xl border border-[#22c55e]/35 bg-[#032616] px-4 py-4 text-xs font-black uppercase tracking-[0.18em] text-[#22c55e] transition hover:bg-[#07391f] hover:text-[#86efac] ${
                            cartPulse
                              ? "scale-[1.03] shadow-[0_0_32px_rgba(34,197,94,0.35)]"
                              : ""
                          }`}
                        >
                          <ShoppingCart className="mr-2 h-5 w-5" />
                          {t("nav.cart")}

                          {itemCount > 0 && (
                            <span className="ml-auto min-w-[22px] rounded-lg border border-[#001f13] bg-[#22c55e] px-1.5 py-0.5 text-center text-[10px] font-black text-[#001f13]">
                              {itemCount}
                            </span>
                          )}
                        </button>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;