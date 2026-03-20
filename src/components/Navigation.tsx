import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-lime-400 bg-[#0b0711] text-white shadow-[0_2px_0_0_rgba(132,204,22,0.15)]">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div className="flex min-h-[74px] items-center justify-between gap-3 py-2">
          <Link
            to="/"
            className="flex items-center gap-3 border-2 border-lime-500/40 bg-[#140c1d] px-3 py-2 hover:bg-[#1a1024]"
          >
            <div className="flex h-11 w-11 items-center justify-center border border-lime-500/30 bg-black">
              <img
                src="/assets/logo.png"
                alt="Psyfreeman"
                className="h-9 w-9 object-contain"
              />
            </div>

            <div className="leading-none">
              <div className="text-sm font-bold uppercase tracking-[0.22em] text-lime-400">
                Psyfreeman Φ
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-gray-500">
                collector art shop
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-none ${
                  isActive(item.href)
                    ? "border-lime-400 bg-lime-400 text-black"
                    : "border-[#3a2b52] bg-[#140c1d] text-lime-300 hover:border-lime-500/60 hover:bg-[#1a1024]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <div className="border border-[#3a2b52] bg-[#140c1d] px-2 py-1">
              <LanguageSwitcher />
            </div>

            <Link to="/cart">
              <button className="relative flex h-11 min-w-[48px] items-center justify-center border border-lime-500/40 bg-[#140c1d] text-lime-300 hover:bg-[#1a1024]">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -right-2 -top-2 min-w-[20px] border border-black bg-lime-400 px-1 text-center text-[10px] font-bold text-black">
                    {itemCount}
                  </span>
                )}
              </button>
            </Link>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="border border-lime-500/40 bg-[#140c1d] text-lime-300 hover:bg-[#1a1024] md:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px] border-l-2 border-lime-400 bg-[#0f0916] text-white sm:w-[340px]"
            >
              <div className="mt-8 flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`border px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] ${
                      isActive(item.href)
                        ? "border-lime-400 bg-lime-400 text-black"
                        : "border-[#3a2b52] bg-[#140c1d] text-lime-300 hover:border-lime-500/60 hover:bg-[#1a1024]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="mt-4 border-t border-[#2d213f] pt-4">
                  <div className="mb-4 border border-[#3a2b52] bg-[#140c1d] p-2">
                    <LanguageSwitcher />
                  </div>

                  <Link to="/cart" onClick={() => setIsOpen(false)}>
                    <button className="flex w-full items-center border border-lime-500/40 bg-[#140c1d] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-lime-300 hover:bg-[#1a1024]">
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      {t("nav.cart")}
                      {itemCount > 0 && (
                        <span className="ml-auto min-w-[20px] border border-black bg-lime-400 px-1 text-center text-[10px] font-bold text-black">
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
    </nav>
  );
}

export default Navigation;