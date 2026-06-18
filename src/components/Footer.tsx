import { Link } from "react-router-dom";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillTwitterSquare } from "react-icons/ai";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      description:
        "NFT artist shop by Psyfreeman Φ 1.618. Phygital artworks, digital collections, symbolic systems and Web3-ready visual identities.",
      links: "Signal links",
      emailList: "Collector list",
      emailText:
        "Get updates about new drops, phygital editions and collector releases.",
      placeholder: "your@email.com",
      join: "Join",
      support: "Support the art · Crypto / Visa / Mastercard",
      studio: "Moving studio · India / Web3",
      catalog: "View catalog",
      about: "About artist",
      contact: "Contact",
    },
    ru: {
      description:
        "NFT-магазин художника Psyfreeman Φ 1.618. Phygital-работы, цифровые коллекции, символические системы и визуальная идентичность для Web3.",
      links: "Сигнальные ссылки",
      emailList: "Список коллекционеров",
      emailText:
        "Получай новости о новых дропах, phygital-изданиях и коллекционных релизах.",
      placeholder: "your@email.com",
      join: "Войти",
      support: "Поддержать искусство · Crypto / Visa / Mastercard",
      studio: "Передвижная студия · Индия / Web3",
      catalog: "Каталог",
      about: "О художнике",
      contact: "Контакт",
    },
  };

  const t = language === "ru" ? content.ru : content.en;

  const socialLinks = [
    {
      label: "X / Twitter",
      value: "@psyfreeman",
      href: "https://x.com/psyfreeman",
      icon: AiFillTwitterSquare,
    },
    {
      label: "Instagram",
      value: "@dvestibaksov",
      href: "https://instagram.com/dvestibaksov",
      icon: FaInstagram,
    },
    {
      label: "Telegram",
      value: "@psyfreeman",
      href: "https://t.me/psyfreeman",
      icon: FaTelegramPlane,
    },
    {
      label: "Email",
      value: "psyfreeman@me.com",
      href: "mailto:psyfreeman@me.com",
      icon: MdEmail,
    },
  ];

  return (
    <footer className="mt-20 border-t border-[#22c55e]/20 bg-[#00170f] text-[#f4efd2]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(34,197,94,0.18),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(244,239,210,0.06),transparent_24%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.2fr_1fr_1.1fr] md:px-6">
          {/* Brand */}
          <div className="rounded-[2rem] border border-[#f4efd2]/10 bg-black/20 p-6">
            <div className="mb-5 flex items-center gap-4">
              <img
                src="/assets/logo.png"
                alt="Psyfreeman"
                className="h-16 w-16 object-contain"
              />

              <div>
                <div className="text-sm font-black uppercase tracking-[0.22em] text-[#f4efd2]">
                  Psyfreeman Φ 1.618
                </div>

                <div className="mt-1 inline-flex rounded-full border border-[#22c55e]/35 bg-[#22c55e]/10 px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#22c55e]">
                  NFT ART SHOP
                </div>
              </div>
            </div>

            <p className="mb-6 max-w-sm text-sm leading-7 text-[#b8c8a5]">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <Link
                to="/catalog"
                className="inline-flex items-center gap-2 rounded-full border border-[#22c55e]/35 bg-[#032616] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#22c55e] transition hover:border-[#22c55e]/70 hover:bg-[#07391f] hover:text-[#86efac]"
              >
                {t.catalog}
                <ArrowUpRight className="h-3 w-3" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-[#f4efd2]/10 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#f4efd2]/60 transition hover:border-[#22c55e]/40 hover:text-[#22c55e]"
              >
                {t.about}
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#f4efd2]/10 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#f4efd2]/60 transition hover:border-[#22c55e]/40 hover:text-[#22c55e]"
              >
                {t.contact}
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="rounded-[2rem] border border-[#f4efd2]/10 bg-black/20 p-6">
            <div className="mb-5 flex items-center gap-2 text-[#22c55e]">
              <Sparkles className="h-4 w-4" />
              <h3 className="text-xs font-black uppercase tracking-[0.25em]">
                {t.links}
              </h3>
            </div>

            <div className="space-y-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="group flex items-center justify-between rounded-2xl border border-[#f4efd2]/10 bg-[#00170f] px-4 py-3 transition hover:border-[#22c55e]/50 hover:bg-[#032616]"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[#22c55e]" />
                      <span>
                        <span className="block text-[10px] font-black uppercase tracking-[0.18em] text-[#f4efd2]/35">
                          {item.label}
                        </span>
                        <span className="text-sm font-bold text-[#f4efd2]/75 group-hover:text-[#22c55e]">
                          {item.value}
                        </span>
                      </span>
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-[#22c55e] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Email list */}
          <div className="rounded-[2rem] border border-[#22c55e]/20 bg-[#032616] p-6">
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#22c55e]">
              {t.emailList}
            </h3>

            <p className="mb-5 text-sm leading-7 text-[#b8c8a5]">
              {t.emailText}
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={t.placeholder}
                className="w-full rounded-2xl border border-[#f4efd2]/10 bg-black/25 px-4 py-3 text-sm text-[#f4efd2] outline-none placeholder:text-[#f4efd2]/35 focus:border-[#22c55e]/50"
              />

              <button className="rounded-2xl border border-[#22c55e]/30 bg-[#22c55e] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#001f13] transition hover:bg-[#86efac]">
                {t.join}
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-[#f4efd2]/10 bg-black/20 p-4 text-xs uppercase leading-6 tracking-[0.16em] text-[#f4efd2]/45">
              {t.studio}
            </div>
          </div>
        </div>

        <div className="relative border-t border-[#f4efd2]/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-[#b8c8a5]/70 md:flex-row md:items-center md:justify-between md:px-6">
            <span>© 2026 Psyfreeman Φ 1.618</span>
            <span>{t.support}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;