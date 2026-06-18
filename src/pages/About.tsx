import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CircleDot,
  Flame,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      artistId: "Artist ID",
      nameLine1: "Dmitrius",
      nameLine2: "Sudarewskii",
      hero:
        "Modern art artist from Russia. Creator of phygital artworks, symbolic NFT collections and Web3-ready visual systems.",
      tags: ["#modernart", "#sudarewskii", "#tachisme"],

      manifestTitle: "Manifest",
      manifestP1:
        "In my work, I first of all want to calm the mind of the viewer. Because without proper meditation, we cannot really see this world as the sages see it.",
      manifestP2:
        "What is the point of our practice if its fruit is not the desire to dance with happiness? I perceive my works as yantras that are able to influence the space and the mindset of others.",

      humanDesignLabel: "Human Design signal",
      humanDesignTitle: "A force that spreads new ideas",
      humanDesignText1:
        "My task is to spread something completely new into the world — from everyday actions to the promotion of innovative ideas and solutions.",
      humanDesignText2:
        "When I am inspired by a new beginning, I am ready to invest all my resources and energy into it. What I am passionate about can spread rapidly, involving others and turning my process into a shared process.",
      humanDesignText3:
        "That is why it is important for me to consciously choose which desires deserve my energy and which do not. When I take on the right commitments, I can unite people, gather resources and direct creative force toward a common goal.",
      humanDesignText4:
        "I am not here to compromise with my inner truth. I trust intuition, persistence and the living impulse that moves the work forward.",

      practiceLabel: "Practice",
      practiceTitle: "Symbolic art for the digital age",
      practiceText:
        "My practice connects contemporary art, phygital objects, NFT collections, symbolic systems and Web3 identity. I create visual signs not as decoration, but as keys: images that carry memory, attention and access.",

      card1Title: "Phygital artworks",
      card1Text:
        "Physical and digital works connected through collectible NFT logic.",
      card2Title: "NFT collections",
      card2Text:
        "Digital series such as Smile Collection and The Crypto Brothers.",
      card3Title: "Symbolic systems",
      card3Text:
        "Web3-ready personal symbols, visual yantras and identity keys.",

      smileType: "Phygital NFT",
      smileTitle: "Smile Collection",
      smileText:
        "A phygital collection of smile-based symbolic works connected to physical objects and digital twins.",

      cryptoType: "Digital NFT",
      cryptoTitle: "The Crypto Brothers",
      cryptoText:
        "A digital NFT series of Web3 characters, crypto archetypes and symbolic digital portraits.",

      ctaLabel: "Collector entry",
      ctaTitle: "Enter the collection",
      ctaText:
        "Explore available works, collect a digital signal, or begin your own symbolic identity system.",
      ctaButton: "View catalog",
    },

    ru: {
      artistId: "ID художника",
      nameLine1: "Дмитрий",
      nameLine2: "Сударевский",
      hero:
        "Современный художник из России. Создатель phygital-работ, символических NFT-коллекций и визуальных систем для Web3.",
      tags: ["#modernart", "#sudarewskii", "#tachisme"],

      manifestTitle: "Манифест",
      manifestP1:
        "В своём творчестве мне прежде всего хочется успокоить сознание зрителя. Потому что без правильной медитации мы не сможем увидеть этот мир по-настоящему, как его видят мудрецы.",
      manifestP2:
        "Какой смысл в нашей практике, если её плодом не является желание танцевать от счастья? Я воспринимаю свои работы как янтры, которые способны влиять на пространство и умонастроение окружающих.",

      humanDesignLabel: "Human Design signal",
      humanDesignTitle: "Сила, которая распространяет новые идеи",
      humanDesignText1:
        "Моя задача — распространять в мире что-то совершенно новое: от бытовых обыденных дел до продвижения инновационных идей и решений.",
      humanDesignText2:
        "Когда я загораюсь новым начинанием, я готов вложить в него свои ресурсы и силы. То, чем я увлечён в данный момент, может распространяться с большой скоростью, заражая окружающих и вовлекая их в процесс.",
      humanDesignText3:
        "Поэтому мне важно осознавать, каким желаниям стоит следовать, а каким нет. Когда я беру на себя правильные обязательства, я могу сплотить людей, аккумулировать ресурсы и направить творческую силу в общее дело.",
      humanDesignText4:
        "Мне не стоит идти на компромиссы со своей внутренней правдой. Я доверяю интуиции, настойчивости и живому импульсу, который двигает работу вперёд.",

      practiceLabel: "Практика",
      practiceTitle: "Символическое искусство цифровой эпохи",
      practiceText:
        "Моя практика соединяет современное искусство, phygital-объекты, NFT-коллекции, символические системы и Web3-идентичность. Я создаю визуальные знаки не как декор, а как ключи: образы, которые несут память, внимание и доступ.",

      card1Title: "Phygital-работы",
      card1Text:
        "Физические и цифровые работы, соединённые через коллекционную NFT-логику.",
      card2Title: "NFT-коллекции",
      card2Text:
        "Цифровые серии, включая Smile Collection и The Crypto Brothers.",
      card3Title: "Символические системы",
      card3Text:
        "Web3-ready персональные символы, визуальные янтры и ключи идентичности.",

      smileType: "Phygital NFT",
      smileTitle: "Smile Collection",
      smileText:
        "Phygital-коллекция символических работ на основе улыбки, соединённых с физическими объектами и цифровыми двойниками.",

      cryptoType: "Digital NFT",
      cryptoTitle: "The Crypto Brothers",
      cryptoText:
        "Цифровая NFT-серия Web3-персонажей, крипто-архетипов и символических digital-портретов.",

      ctaLabel: "Вход коллекционера",
      ctaTitle: "Войти в коллекцию",
      ctaText:
        "Исследуй доступные работы, собери цифровой сигнал или начни собственную систему символической идентичности.",
      ctaButton: "Открыть каталог",
    },
  };

  const c = language === "ru" ? content.ru : content.en;

  return (
    <div className="min-h-screen bg-[#001f13] text-[#f4efd2]">
      <Navigation />

      <main className="mx-auto max-w-6xl px-4 pt-32 pb-16">
        {/* Artist Passport */}
        <section className="mb-10 overflow-hidden rounded-[2rem] border border-[#f4efd2]/15 bg-[#00170f] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-[320px_1fr] md:p-10">
            <div className="flex justify-center md:justify-start">
              <div className="rounded-sm border-4 border-[#f4efd2] bg-[#0a3b22] p-2 shadow-[0_0_40px_rgba(34,197,94,0.18)]">
                <img
                  src="/images/about/portrait.jpg"
                  alt="Dmitrius Sudarewskii"
                  className="h-72 w-72 object-cover grayscale sepia"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#22c55e]">
                {c.artistId}
              </div>

              <h1 className="mb-4 max-w-3xl text-4xl font-black uppercase leading-none tracking-wide text-[#f4efd2] md:text-6xl">
                {c.nameLine1}
                <br />
                {c.nameLine2}
              </h1>

              <p className="mb-8 max-w-xl text-xl font-bold leading-relaxed text-[#22c55e]">
                {c.hero}
              </p>

              <div className="flex flex-wrap gap-3">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#f4efd2]/15 bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#f4efd2]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Manifest */}
        <section className="mb-10 rounded-[2rem] border border-[#22c55e]/20 bg-[#032616] p-6 md:p-8">
          <div className="mb-5 flex items-center gap-3 text-[#22c55e]">
            <Sparkles className="h-5 w-5" />
            <span className="text-xs font-black uppercase tracking-[0.25em]">
              {c.manifestTitle}
            </span>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#f4efd2]">
            <p>{c.manifestP1}</p>
            <p>{c.manifestP2}</p>
          </div>
        </section>

        {/* Human Design */}
        {/* Human Design */}
<section className="mb-10 overflow-hidden rounded-[2rem] border border-[#22c55e]/20 bg-[#00170f] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
  <div className="relative p-6 md:p-10">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(244,239,210,0.07),transparent_26%)]" />

    <div className="relative">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#22c55e]/35 bg-[#22c55e]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#22c55e]">
        <Flame className="h-4 w-4" />
        {c.humanDesignLabel}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <h2 className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-wide text-[#f4efd2] md:text-5xl">
            {c.humanDesignTitle}
          </h2>
        </div>

        <div className="space-y-5 text-base font-semibold leading-8 text-[#b8c8a5] md:text-lg">
          <p>{c.humanDesignText1}</p>
          <p>{c.humanDesignText2}</p>
          <p>{c.humanDesignText3}</p>

          <p className="rounded-[1.5rem] border border-[#22c55e]/20 bg-[#032616] p-5 text-base font-black leading-8 text-[#f4efd2] shadow-[0_0_30px_rgba(34,197,94,0.08)] md:text-lg">
            {c.humanDesignText4}
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Practice */}
        <section className="mb-10 rounded-[2rem] border border-[#f4efd2]/15 bg-[#00170f] p-6 md:p-10">
          <div className="mb-8 max-w-3xl">
            <div className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#22c55e]">
              {c.practiceLabel}
            </div>

            <h2 className="mb-4 text-3xl font-black uppercase tracking-wide text-[#f4efd2] md:text-5xl">
              {c.practiceTitle}
            </h2>

            <p className="text-lg leading-8 text-[#b8c8a5]">
              {c.practiceText}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[#f4efd2]/10 bg-black/20 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#22c55e]">
                <CircleDot className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-black text-[#f4efd2]">
                {c.card1Title}
              </h3>
              <p className="text-sm leading-6 text-[#b8c8a5]">
                {c.card1Text}
              </p>
            </div>

            <div className="rounded-2xl border border-[#f4efd2]/10 bg-black/20 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#22c55e]">
                <WalletCards className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-black text-[#f4efd2]">
                {c.card2Title}
              </h3>
              <p className="text-sm leading-6 text-[#b8c8a5]">
                {c.card2Text}
              </p>
            </div>

            <div className="rounded-2xl border border-[#f4efd2]/10 bg-black/20 p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#22c55e]/10 text-[#22c55e]">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-black text-[#f4efd2]">
                {c.card3Title}
              </h3>
              <p className="text-sm leading-6 text-[#b8c8a5]">
                {c.card3Text}
              </p>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Link
            to="/catalog"
            className="group rounded-[2rem] border border-[#22c55e]/20 bg-[#032616] p-6 transition hover:border-[#22c55e]/60 hover:bg-[#07391f]"
          >
            <div className="mb-16 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#22c55e]">
                {c.smileType}
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#22c55e] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <h3 className="mb-3 text-3xl font-black uppercase text-[#f4efd2]">
              {c.smileTitle}
            </h3>

            <p className="max-w-md text-sm leading-6 text-[#b8c8a5]">
              {c.smileText}
            </p>
          </Link>

          <Link
            to="/catalog"
            className="group rounded-[2rem] border border-[#f4efd2]/15 bg-[#00170f] p-6 transition hover:border-[#22c55e]/50 hover:bg-[#032616]"
          >
            <div className="mb-16 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#22c55e]">
                {c.cryptoType}
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#22c55e] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <h3 className="mb-3 text-3xl font-black uppercase text-[#f4efd2]">
              {c.cryptoTitle}
            </h3>

            <p className="max-w-md text-sm leading-6 text-[#b8c8a5]">
              {c.cryptoText}
            </p>
          </Link>
        </section>

        {/* CTA */}
        <section className="rounded-[2rem] border border-[#22c55e]/20 bg-[#032616] p-6 text-center md:p-10">
          <div className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#22c55e]">
            {c.ctaLabel}
          </div>

          <h2 className="mb-4 text-3xl font-black uppercase text-[#f4efd2] md:text-5xl">
            {c.ctaTitle}
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-[#b8c8a5]">
            {c.ctaText}
          </p>

          <Link
            to="/catalog"
            className="inline-flex rounded-full bg-[#22c55e] px-8 py-4 text-sm font-black uppercase tracking-[0.18em] text-[#001f13] transition hover:bg-[#86efac]"
          >
            {c.ctaButton}
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}