import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowUpRight,
  CreditCard,
  Mail,
  MapPin,
  Send,
  ShoppingBag,
  Sparkles,
  Truck,
  User,
  WalletCards,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

function Checkout() {
  const { items = [], getTotalPrice, clearCart } = useCart();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const safeItems = Array.isArray(items) ? items : [];
  const total = getTotalPrice ? getTotalPrice() : 0;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
    postalCode: "",
    note: "",
  });

  const content = {
    en: {
      emptyTitle: "Collector cart is empty",
      emptyText: "Add artworks to your cart before opening checkout.",
      openCatalog: "Open catalog",
      back: "Back to cart",
      badge: "Collector checkout",
      title: "Confirm your signal",
      subtitle:
        "Leave your contact and delivery details. After the request is sent, final payment and shipping details can be confirmed personally.",
      customer: "Collector information",
      shipping: "Delivery details",
      payment: "Payment method",
      summary: "Order summary",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone / Telegram",
      country: "Country",
      city: "City",
      address: "Address",
      postalCode: "Postal code",
      note: "Order note",
      notePlaceholder: "NFT wallet, Telegram, special request, delivery details...",
      required: "*",
      paymentTitle: "Personal confirmation",
      paymentText:
        "Crypto, card or another payment method can be confirmed after your order request. For phygital works, shipping is calculated separately.",
      telegram: "Write in Telegram",
      emailContact: "Email contact",
      quantity: "Quantity",
      subtotal: "Subtotal",
      shippingLine: "Shipping",
      shippingValue: "Confirmed later",
      total: "Total",
      submit: "Send order request",
      processing: "Sending request...",
      success: "Order request sent",
      error: "Order sending failed",
    },
    ru: {
      emptyTitle: "Корзина коллекционера пуста",
      emptyText: "Добавь работы в корзину перед оформлением заказа.",
      openCatalog: "Открыть каталог",
      back: "Назад в корзину",
      badge: "Collector checkout",
      title: "Подтвердить сигнал",
      subtitle:
        "Оставь контактные данные и детали доставки. После отправки заявки финальную оплату и доставку можно подтвердить лично.",
      customer: "Информация коллекционера",
      shipping: "Детали доставки",
      payment: "Способ оплаты",
      summary: "Итог заказа",
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Email",
      phone: "Телефон / Telegram",
      country: "Страна",
      city: "Город",
      address: "Адрес",
      postalCode: "Почтовый индекс",
      note: "Комментарий к заказу",
      notePlaceholder: "NFT-кошелёк, Telegram, особый запрос, детали доставки...",
      required: "*",
      paymentTitle: "Личное подтверждение",
      paymentText:
        "Crypto, карта или другой способ оплаты подтверждаются после заявки. Для phygital-работ доставка рассчитывается отдельно.",
      telegram: "Написать в Telegram",
      emailContact: "Связаться по email",
      quantity: "Количество",
      subtotal: "Подытог",
      shippingLine: "Доставка",
      shippingValue: "Уточняется позже",
      total: "Итого",
      submit: "Отправить заявку",
      processing: "Отправляем заявку...",
      success: "Заявка отправлена",
      error: "Ошибка при отправке заявки",
    },
  };

  const t = language === "ru" ? content.ru : content.en;

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch("/order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: formData,
          items: safeItems,
          total,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error("Order failed");
      }

      clearCart();
      toast.success(t.success);
      navigate("/");
    } catch (error) {
      toast.error(t.error);
    } finally {
      setIsProcessing(false);
    }
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
                {t.openCatalog}
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
        <Button
          variant="ghost"
          onClick={() => navigate("/cart")}
          className="mb-6 rounded-full px-0 text-[#b8c8a5] hover:bg-transparent hover:text-[#22c55e]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t.back}
        </Button>

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
                <WalletCards className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                  {safeItems.length} {language === "ru" ? "работ" : "items"}
                </span>
              </div>

              <div className="text-5xl font-black text-[#22c55e]">
                ${total.toFixed(2)}
              </div>
            </div>
          </div>
        </section>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-6">
              {/* Customer */}
              <Card className="rounded-[2rem] border border-[#f4efd2]/15 bg-[#00170f] text-[#f4efd2]">
                <CardContent className="p-6 md:p-8">
                  <SectionTitle icon={User} title={t.customer} />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field
                      label={`${t.firstName} ${t.required}`}
                      value={formData.firstName}
                      onChange={(value) => handleInputChange("firstName", value)}
                      required
                    />
                    <Field
                      label={`${t.lastName} ${t.required}`}
                      value={formData.lastName}
                      onChange={(value) => handleInputChange("lastName", value)}
                      required
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field
                      label={`${t.email} ${t.required}`}
                      type="email"
                      value={formData.email}
                      onChange={(value) => handleInputChange("email", value)}
                      required
                    />
                    <Field
                      label={t.phone}
                      type="tel"
                      value={formData.phone}
                      onChange={(value) => handleInputChange("phone", value)}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping */}
              <Card className="rounded-[2rem] border border-[#f4efd2]/15 bg-[#00170f] text-[#f4efd2]">
                <CardContent className="p-6 md:p-8">
                  <SectionTitle icon={Truck} title={t.shipping} />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field
                      label={`${t.country} ${t.required}`}
                      value={formData.country}
                      onChange={(value) => handleInputChange("country", value)}
                      required
                    />
                    <Field
                      label={`${t.city} ${t.required}`}
                      value={formData.city}
                      onChange={(value) => handleInputChange("city", value)}
                      required
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Field
                      label={`${t.address} ${t.required}`}
                      value={formData.address}
                      onChange={(value) => handleInputChange("address", value)}
                      required
                    />
                    <Field
                      label={t.postalCode}
                      value={formData.postalCode}
                      onChange={(value) =>
                        handleInputChange("postalCode", value)
                      }
                    />
                  </div>

                  <div className="mt-4">
                    <label className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-[#22c55e]">
                      {t.note}
                    </label>
                    <textarea
                      value={formData.note}
                      onChange={(e) =>
                        handleInputChange("note", e.target.value)
                      }
                      placeholder={t.notePlaceholder}
                      className="min-h-28 w-full rounded-2xl border border-[#f4efd2]/10 bg-black/25 px-4 py-3 text-sm text-[#f4efd2] outline-none placeholder:text-[#f4efd2]/35 focus:border-[#22c55e]/50"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Payment */}
              <Card className="rounded-[2rem] border border-[#22c55e]/20 bg-[#032616] text-[#f4efd2]">
                <CardContent className="p-6 md:p-8">
                  <SectionTitle icon={CreditCard} title={t.payment} />

                  <div className="rounded-2xl border border-[#f4efd2]/10 bg-black/20 p-5">
                    <div className="mb-2 text-lg font-black text-[#f4efd2]">
                      {t.paymentTitle}
                    </div>

                    <p className="mb-5 text-sm leading-7 text-[#b8c8a5]">
                      {t.paymentText}
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <a
                        href="https://t.me/psyfreeman"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#22c55e]/35 bg-[#22c55e]/10 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#22c55e] transition hover:bg-[#07391f] hover:text-[#86efac]"
                      >
                        <Send className="h-4 w-4" />
                        {t.telegram}
                      </a>

                      <a
                        href="mailto:psyfreeman@me.com"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f4efd2]/10 bg-black/20 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#f4efd2]/65 transition hover:border-[#22c55e]/40 hover:text-[#22c55e]"
                      >
                        <Mail className="h-4 w-4" />
                        {t.emailContact}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <Card className="overflow-hidden rounded-[2rem] border border-[#22c55e]/25 bg-[#032616] text-[#f4efd2] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
                <CardContent className="p-6">
                  <div className="mb-6 flex items-center gap-2 text-[#22c55e]">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-[0.25em]">
                      {t.summary}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {safeItems.map((item) => {
                      const quantity = item.quantity || 1;
                      const price = Number(item.price) || 0;

                      return (
                        <div
                          key={item.id}
                          className="rounded-2xl border border-[#f4efd2]/10 bg-black/20 p-4"
                        >
                          <div className="mb-2 text-sm font-black text-[#f4efd2]">
                            {item.name}
                          </div>

                          <div className="flex justify-between text-xs text-[#b8c8a5]">
                            <span>
                              {t.quantity}: {quantity}
                            </span>
                            <span className="font-black text-[#22c55e]">
                              ${(price * quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 space-y-4 border-t border-[#f4efd2]/10 pt-5">
                    <div className="flex justify-between gap-4">
                      <span className="text-[#b8c8a5]">{t.subtotal}:</span>
                      <span className="font-black text-[#f4efd2]">
                        ${total.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4">
                      <span className="text-[#b8c8a5]">{t.shippingLine}:</span>
                      <span className="text-right font-bold text-[#22c55e]">
                        {t.shippingValue}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 border-t border-[#f4efd2]/10 pt-5">
                      <span className="text-lg font-black text-[#f4efd2]">
                        {t.total}:
                      </span>
                      <span className="text-2xl font-black text-[#22c55e]">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="mt-6 w-full rounded-full bg-[#22c55e] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#001f13] transition hover:bg-[#86efac]"
                    disabled={isProcessing}
                  >
                    {isProcessing ? t.processing : t.submit}
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}

type SectionTitleProps = {
  icon: React.ElementType;
  title: string;
};

function SectionTitle({ icon: Icon, title }: SectionTitleProps) {
  return (
    <div className="mb-6 flex items-center gap-3 text-[#22c55e]">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#22c55e]/10">
        <Icon className="h-5 w-5" />
      </div>

      <h2 className="text-xs font-black uppercase tracking-[0.25em]">
        {title}
      </h2>
    </div>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
};

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-[#22c55e]">
        {label}
      </label>

      <Input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-2xl border-[#f4efd2]/10 bg-black/25 text-[#f4efd2] placeholder:text-[#f4efd2]/35 focus-visible:ring-[#22c55e]/40"
      />
    </div>
  );
}

export default Checkout;