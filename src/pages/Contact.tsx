import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ArrowUpRight,
  AtSign,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Collector contact",
      title: "Enter the signal",
      subtitle:
        "For collecting artworks, NFT collaborations, phygital projects, symbolic identity systems and exhibition proposals.",
      locationLabel: "Current field",
      location: "India / Web3 / Moving studio",
      directTitle: "Direct contact",
      directText:
        "Write directly if you want to collect an artwork, discuss a custom symbolic system, or invite Psyfreeman Φ 1.618 into a project.",
      telegram: "Telegram",
      instagram: "Instagram",
      x: "X / Twitter",
      email: "Email",
      noteTitle: "Before you write",
      noteText:
        "Send a short message with your intention: collecting, collaboration, exhibition, custom symbol, NFT drop, or phygital object.",
      cta: "Open Telegram",
    },
    ru: {
      badge: "Связь коллекционера",
      title: "Войти в сигнал",
      subtitle:
        "Для покупки работ, NFT-коллабораций, phygital-проектов, символических систем идентичности и выставочных предложений.",
      locationLabel: "Текущее поле",
      location: "Индия / Web3 / Передвижная студия",
      directTitle: "Прямая связь",
      directText:
        "Напиши напрямую, если хочешь приобрести работу, обсудить персональную символическую систему или пригласить Psyfreeman Φ 1.618 в проект.",
      telegram: "Telegram",
      instagram: "Instagram",
      x: "X / Twitter",
      email: "Email",
      noteTitle: "Перед сообщением",
      noteText:
        "Напиши коротко свой запрос: коллекционирование, коллаборация, выставка, персональный символ, NFT-дроп или phygital-объект.",
      cta: "Открыть Telegram",
    },
  };

  const t = language === "ru" ? content.ru : content.en;

  const contacts = [
    {
      label: t.telegram,
      value: "@psyfreeman",
      href: "https://t.me/psyfreeman",
      icon: Send,
    },
    {
      label: t.instagram,
      value: "@dvestibaksov",
      href: "https://instagram.com/dvestibaksov",
      icon: AtSign,
    },
    {
      label: t.x,
      value: "@psyfreeman",
      href: "https://x.com/psyfreeman",
      icon: MessageCircle,
    },
    {
      label: t.email,
      value: "satyasaibabakrishna@gmail.com",
      href: "mailto:satyasaibabakrishna@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen bg-[#001f13] text-[#f4efd2]">
      <Navigation />

      <main className="mx-auto max-w-6xl px-4 pt-32 pb-16">
        {/* Hero */}
        <section className="relative mb-10 overflow-hidden rounded-[2rem] border border-[#22c55e]/25 bg-[#00170f] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.5)] md:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,197,94,0.24),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(244,239,210,0.08),transparent_26%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent)]" />

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
                <MapPin className="h-4 w-4" />
                <span className="text-[10px] font-black uppercase tracking-[0.22em]">
                  {t.locationLabel}
                </span>
              </div>

              <div className="text-2xl font-black uppercase leading-tight text-[#f4efd2]">
                {t.location}
              </div>
            </div>
          </div>
        </section>

        {/* Contact grid */}
        <section className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-[2rem] border border-[#f4efd2]/15 bg-[#00170f] p-6 md:p-8">
            <div className="mb-6">
              <div className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#22c55e]">
                {t.directTitle}
              </div>

              <p className="max-w-2xl text-lg leading-8 text-[#b8c8a5]">
                {t.directText}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={
                      contact.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      contact.href.startsWith("mailto:")
                        ? undefined
                        : "noreferrer"
                    }
                    className="group rounded-[1.4rem] border border-[#f4efd2]/10 bg-black/20 p-5 transition hover:border-[#22c55e]/55 hover:bg-[#032616] hover:shadow-[0_0_30px_rgba(34,197,94,0.14)]"
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#22c55e]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-[#22c55e] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <div className="mb-1 text-xs font-black uppercase tracking-[0.22em] text-[#22c55e]">
                      {contact.label}
                    </div>

                    <div className="break-words text-lg font-black text-[#f4efd2]">
                      {contact.value}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Note */}
          <aside className="rounded-[2rem] border border-[#22c55e]/20 bg-[#032616] p-6 md:p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22c55e]/10 text-[#22c55e]">
              <MessageCircle className="h-7 w-7" />
            </div>

            <div className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#22c55e]">
              {t.noteTitle}
            </div>

            <p className="mb-8 text-lg leading-8 text-[#b8c8a5]">
              {t.noteText}
            </p>

            <a
              href="https://t.me/psyfreeman"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#22c55e] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#001f13] transition hover:bg-[#86efac]"
            >
              <Send className="h-4 w-4" />
              {t.cta}
            </a>
          </aside>
        </section>

        {/* Bottom signal */}
        <section className="rounded-[2rem] border border-[#f4efd2]/15 bg-black/20 p-6 text-center md:p-8">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 text-[#22c55e]">
            <Sparkles className="h-5 w-5" />
          </div>

          <p className="mx-auto max-w-2xl text-sm uppercase leading-7 tracking-[0.18em] text-[#b8c8a5]">
            Psyfreeman Φ 1.618 · NFT Art Shop · Phygital Works · Symbolic
            Systems · Web3 Identity
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}