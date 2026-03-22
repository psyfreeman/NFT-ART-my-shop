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
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 rounded-2xl border-2 border-lime-500/25 bg-[#26123a] px-3 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:px-4">
            <div className="flex min-h-[58px] items-center justify-between gap-3">
              <Link
                to="/"
                className="px-4 py-3"
              >
                <div className="text-sm font-bold uppercase tracking-[0.22em] text-lime-400">
                  Psyfreeman Φ 1.618
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-violet-200/45">
                  collector art shop
                </div>
              </Link>

              <div className="hidden items-center gap-2 md:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`rounded-xl border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-none ${
                      isActive(item.href)
                        ? "border-lime-400 bg-lime-400 text-black"
                        : "border-violet-300/15 bg-[#33184d] text-lime-300 hover:border-lime-500/45 hover:bg-[#3d1d5c]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="hidden md:block">
                <div className="rounded-xl border border-violet-300/15 bg-[#33184d] px-2 py-1">
                  <LanguageSwitcher />
                </div>
              </div>

              <div className="md:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-xl border border-lime-500/35 bg-[#8c10ff] text-lime-300 hover:bg-[#3d1d5c]"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent
                    side="right"
                    className="w-[300px] border-l-2 border-lime-400 bg-[#1d0f2c] text-white sm:w-[340px]"
                  >
                    <div className="mt-8 flex flex-col gap-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`rounded-xl border px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] ${
                            isActive(item.href)
                              ? "border-lime-400 bg-lime-400 text-black"
                              : "border-violet-300/15 bg-[#8c10ff] text-lime-300 hover:border-lime-500/45 hover:bg-[#3d1d5c]"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}

                      <div className="mt-4 border-t border-violet-300/10 pt-4">
                        <div className="mb-4 rounded-xl border border-violet-300/15 bg-[#8c10ff] p-2">
                          <LanguageSwitcher />
                        </div>

                        <Link to="/cart" onClick={() => setIsOpen(false)}>
                          <button className="flex w-full items-center rounded-xl border border-lime-500/35 bg-[#8c10ff] px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-lime-300 hover:bg-[#3d1d5c]">
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            {t("nav.cart")}
                            {itemCount > 0 && (
                              <span className="ml-auto min-w-[20px] rounded-md border border-black bg-lime-400 px-1 text-center text-[10px] font-bold text-black">
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

          <div className="hidden md:block">
            <Link to="/cart">
              <button className="relative flex h-[88px] min-w-[88px] items-center justify-center rounded-2xl border-2 border-lime-500/25 bg-[#26123a] px-5 text-lime-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:bg-[#33184d]">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -right-2 -top-2 min-w-[20px] rounded-md border border-black bg-lime-400 px-1 text-center text-[10px] font-bold text-black">
                    {itemCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;