import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowUpRight,
  Minus,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
  WalletCards,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

function Cart() {
  const {
    items = [],
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
  } = useCart();

  const { language } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);

  const content = {
    en: {
      badge: "Collector cart",
      title: "Selected signals",
      subtitle:
        "Review your selected artworks before entering the collector checkout.",
      emptyTitle: "Your collector cart is empty",
      emptyText:
        "Enter the catalog and choose a digital signal, phygital work or symbolic edition.",
      continue: "Enter catalog",
      items: "items selected",
      cartList: "Cart archive",
      summary: "Order summary",
      subtotal: "Subtotal",
      shipping: "Shipping",
      shippingValue: "Calculated later",
      total: "Total",
      checkout: "Enter checkout",
      processing: "Opening checkout...",
      continueShopping: "Continue collecting",
      clearAll: "Clear cart",
      remove: "Remove",
      quantity: "Quantity",
      collectorNoteTitle: "Collector note",
      collectorNote:
        "For phygital works, shipping and final collector details can be confirmed after checkout.",
    },
    ru: {
      badge: "Корзина коллекционера",
      title: "Выбранные сигналы",
      subtitle:
        "Проверь выбранные работы перед переходом к collector checkout.",
      emptyTitle: "Корзина коллекционера пуста",
      emptyText:
        "Открой каталог и выбери цифровой сигнал, phygital-работу или символическое издание.",
      continue: "Открыть каталог",
      items: "работ выбрано",
      cartList: "Архив корзины",
      summary: "Итог заказа",
      subtotal: "Подытог",
      shipping: "Доставка",
      shippingValue: "Уточняется позже",
      total: "Итого",
      checkout: "Перейти к оформлению",
      processing: "Открываем checkout...",
      continueShopping: "Продолжить собирать",
      clearAll: "Очистить корзину",
      remove: "Удалить",
      quantity: "Количество",
      collectorNoteTitle: "Заметка коллекционера",
      collectorNote:
        "Для phygital-работ доставка и финальные детали коллекционера уточняются после оформления.",
    },
  };

  const t = language === "ru" ? content.ru : content.en;
  const safeItems = Array.isArray(items) ? items : [];
  const total = getTotalPrice ? getTotalPrice() : 0;

  const handleCheckout = async () => {
    setIsProcessing(true);

    window.setTimeout(() => {
      setIsProcessing(false);
    }, 1200);
  };

  if (safeItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#001f13] text-[#f4efd2]">
        <Navigation />

        <main className="mx-auto max-w-5xl px-4 pt-32 pb-16">
          <section className="relative overflow-hidden rounded-[2rem] border border-[#22c55e]/25 bg-[#00170f] p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.5)] md:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.24),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(244,239,210,0.08),transparent_26%)]" />

            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e] shadow-[0_0_40px_rgba(34,197,94,0.16)]">
              <ShoppingBag className="h-11 w-11" />
            </div>

            <div className="relative mt-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/35 bg-[#22c55e]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#22c55e]">
                <Sparkles className="h-4 w-4" />
                {t.badge}
              </div>

              <h1 className="mx-auto mb-5 max-w-3xl text-4xl font-black uppercase leading-none tracking-wide text-[#f4efd2] md:text-6xl">
                {t.emptyTitle}
              </h1>

              <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#b8c8a5]">
                {t.emptyText}
              </p>

              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 rounded-full bg-[#22c55e] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#001f13] transition hover:bg-[#86efac]"
              >
                {t.continue}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

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
                <ShoppingBag className="h-4 w-4" />
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
                <WalletCards className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                  {t.cartList}
                </span>
              </div>

              <div className="text-5xl font-black text-[#f4efd2]">
                {safeItems.length}
              </div>

              <div className="mt-2 text-sm leading-6 text-[#b8c8a5]">
                {t.items}
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          {/* Cart items */}
          <section className="space-y-4">
            {safeItems.map((item) => {
              const quantity = item.quantity || 1;
              const itemPrice = Number(item.price) || 0;

              return (
                <Card
                  key={item.id}
                  className="overflow-hidden rounded-[2rem] border border-[#f4efd2]/15 bg-[#00170f] text-[#f4efd2] shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
                >
                  <CardContent className="p-4 md:p-5">
                    <div className="grid grid-cols-[92px_1fr] gap-4 md:grid-cols-[112px_1fr_auto] md:items-center">
                      <div className="relative overflow-hidden rounded-2xl border border-[#f4efd2]/10 bg-black">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-24 w-full object-cover md:h-28"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                      </div>

                      <div className="min-w-0">
                        <div className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#22c55e]">
                          NFT / Collector item
                        </div>

                        <h3 className="mb-2 line-clamp-2 text-xl font-black leading-tight text-[#f4efd2]">
                          {item.name}
                        </h3>

                        <div className="text-lg font-black text-[#22c55e]">
                          ${itemPrice.toFixed(2)}
                        </div>
                      </div>

                      <div className="col-span-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#f4efd2]/10 pt-4 md:col-span-1 md:border-t-0 md:pt-0">
                        <div>
                          <div className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#f4efd2]/35">
                            {t.quantity}
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() =>
                                updateQuantity &&
                                updateQuantity(item.id, Math.max(1, quantity - 1))
                              }
                              className="h-10 w-10 rounded-xl border-[#22c55e]/30 bg-black/20 text-[#22c55e] hover:bg-[#032616] hover:text-[#86efac]"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>

                            <span className="w-8 text-center text-sm font-black text-[#f4efd2]">
                              {quantity}
                            </span>

                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() =>
                                updateQuantity &&
                                updateQuantity(item.id, quantity + 1)
                              }
                              className="h-10 w-10 rounded-xl border-[#22c55e]/30 bg-black/20 text-[#22c55e] hover:bg-[#032616] hover:text-[#86efac]"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          onClick={() => removeFromCart && removeFromCart(item.id)}
                          className="rounded-xl text-red-300 hover:bg-red-400/10 hover:text-red-200"
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          {t.remove}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <Link to="/catalog">
                <Button
                  variant="outline"
                  className="w-full rounded-full border-[#22c55e]/35 bg-transparent px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#22c55e] hover:bg-[#22c55e]/10 hover:text-[#86efac] sm:w-auto"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t.continueShopping}
                </Button>
              </Link>

              <Button
                variant="ghost"
                onClick={() => clearCart && clearCart()}
                className="rounded-full px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-red-300 hover:bg-red-400/10 hover:text-red-200"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {t.clearAll}
              </Button>
            </div>
          </section>

          {/* Summary */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <Card className="overflow-hidden rounded-[2rem] border border-[#22c55e]/25 bg-[#032616] text-[#f4efd2] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <CardContent className="p-6">
                <div className="mb-6 flex items-center gap-2 text-[#22c55e]">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-black uppercase tracking-[0.25em]">
                    {t.summary}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between gap-4">
                    <span className="text-[#b8c8a5]">{t.subtotal}:</span>
                    <span className="font-black text-[#f4efd2]">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="text-[#b8c8a5]">{t.shipping}:</span>
                    <span className="text-right font-bold text-[#22c55e]">
                      {t.shippingValue}
                    </span>
                  </div>

                  <div className="border-t border-[#f4efd2]/10 pt-5">
                    <div className="flex justify-between gap-4">
                      <span className="text-lg font-black text-[#f4efd2]">
                        {t.total}:
                      </span>
                      <span className="text-2xl font-black text-[#22c55e]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-[#f4efd2]/10 bg-black/20 p-4">
                  <div className="mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-[#22c55e]">
                    {t.collectorNoteTitle}
                  </div>

                  <p className="text-sm leading-6 text-[#b8c8a5]">
                    {t.collectorNote}
                  </p>
                </div>

                <Link to="/checkout">
                  <Button
                    className="mt-6 w-full rounded-full bg-[#22c55e] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#001f13] transition hover:bg-[#86efac]"
                    disabled={isProcessing}
                    onClick={handleCheckout}
                  >
                    {isProcessing ? t.processing : t.checkout}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;