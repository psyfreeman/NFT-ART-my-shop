export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
  enabled?: boolean;
  size?: "small" | "medium" | "large";
}

export const articles: ArticleItem[] = [
  {
    id: "1",
    slug: "fresh-drop-smile-canon",
    title: "Fresh Drop: Smile Canon",
    date: "March 24, 2026",
    excerpt:
      "A new collector release from the current series. Physical works, NFT objects, and phygital presence.",
    image: "/images/fire.jpg",
    size: "large",
    enabled: true,
    content: [
      "This drop continues the Smile Canon line as a collector-facing archive of works.",
      "The focus is on physical presence, numbered continuity, and a raw visual language that sits between street energy and archive aesthetics.",
      "The new release is open for support through crypto, Visa, and Mastercard.",
    ],
  },
  {
    id: "2",
    slug: "why-the-series-matters",
    title: "Why the Series Matters",
    date: "March 22, 2026",
    excerpt:
      "A short note on repetition, numbering, and why a series becomes stronger than a single image.",
    image: "/images/unnamed.gif",
    size: "medium",
    enabled: true,
    content: [
      "A series creates rhythm. It gives the work memory, order, and weight.",
      "Each piece becomes part of a larger structure instead of standing alone without context.",
      "For collectors, this also creates a clearer path into the project.",
    ],
  },
  {
    id: "3",
    slug: "from-wall-to-collector-shop",
    title: "From Wall to Collector Shop",
    date: "March 20, 2026",
    excerpt:
      "How a visual language shaped by walls, marks, and street surfaces enters a digital storefront.",
    image: "/images/Screenshot 2026-03-23.png",
    size: "small",
    enabled: true,
    content: [
      "The website is not just a store. It is an extension of the visual practice.",
      "That is why the interface needs to feel slightly raw, slightly imperfect, and still collectible.",
      "The goal is not to polish the energy away.",
    ],
  },
  {
    id: "4",
    slug: "supporting-art-through-collecting",
    title: "Supporting Art Through Collecting",
    date: "March 18, 2026",
    excerpt:
      "A note for collectors: support can happen through ownership, continuity, and participation in the archive.",
    image: "/images/Screenshot 2026-03-24.png",
    size: "medium",
    enabled: true,
    content: [
      "Collecting is not only a transaction. It is also a form of alignment.",
      "When someone collects a piece, they help the practice continue and give shape to the next works.",
      "That is why the structure of the shop matters.",
    ],
  },
  {
    id: "5",
    slug: "physical-nft-phygital",
    title: "Physical, NFT, Phygital",
    date: "March 16, 2026",
    excerpt:
      "Three formats, one body of work: how the same artistic language moves across media.",
    image: "/images/nft.gif",
    size: "small",
    enabled: true,
    content: [
      "Some works live as physical objects. Some exist as NFTs. Some bridge both worlds.",
      "The point is not format for its own sake, but continuity of authorship.",
      "Each format should still feel like part of the same archive.",
    ],
  },
  {
    id: "6",
    slug: "notes-before-delhi",
    title: "Notes Before Delhi",
    date: "March 14, 2026",
    excerpt:
      "A preparatory note toward the idea of a future exhibition and a larger public presentation.",
    image: "/images/Screenshot 2022-09-12.png",
    size: "large",
    enabled: true,
    content: [
      "The long-term dream is to move from a digital collector context toward a stronger physical exhibition format.",
      "Delhi remains an important horizon for that vision.",
      "The site, the drops, and the archive are part of that path.",
    ],
  },
  {
  id: "7",
  slug: "collector-notes-001",
  title: "Collector Notes 001",
  date: "March 12, 2026",
  excerpt:
    "A short archive entry on how collectors enter the project through continuity and numbered releases.",
  image: "/images/Screenshot 2026-03-25.png",
  size: "medium",
  enabled: true,
  content: [
    "Collector notes are part of the archive structure.",
    "They give context to the works and build continuity around the release cycle.",
  ],
},
{
  id: "8",
  slug: "studio-wall-fragments",
  title: "Studio Wall Fragments",
  date: "March 10, 2026",
  excerpt:
    "Textures, fragments, stains, and visual residue from the studio become part of the digital front.",
  image: "/images/Screenshot 2022-09-13.png",
  size: "small",
  enabled: true,
  content: [
    "The studio is not separate from the work.",
    "Its wall language also enters the archive and the site.",
  ],
},
{
  id: "9",
  slug: "before-the-next-mint",
  title: "Before the Next Mint",
  date: "March 08, 2026",
  excerpt:
    "A quiet note before the next release, documenting the threshold between preparation and drop.",
  image: "/images/Screenshot 2026-03-29.png",
  size: "large",
  enabled: true,
  content: [
    "Every mint has a silent phase before it becomes public.",
    "That phase also deserves a place in the archive.",
  ],
},
{
  id: "10",
  slug: "archive-entry-004",
  title: "Archive Entry 004",
  date: "March 06, 2026",
  excerpt:
    "A new fragment in the visual archive, where documentation becomes part of the work itself.",
  image: "/images/Screen-2023-01-09.gif",
  size: "small",
  enabled: true,
  content: [
    "Archive entries are not secondary to the work.",
    "They become part of the public body of the project.",
  ],
},
{
  id: "11",
  slug: "notes-on-surface",
  title: "Notes on Surface",
  date: "March 04, 2026",
  excerpt:
    "A short text on walls, stains, abrasion, and why texture matters in both painting and interface.",
  image: "/images/5.jpg",
  size: "medium",
  enabled: true,
  content: [
    "Texture carries memory.",
    "A polished interface often removes too much of that memory.",
  ],
},
{
  id: "12",
  slug: "drop-log-002",
  title: "Drop Log 002",
  date: "March 02, 2026",
  excerpt:
    "A running log of release moments, collector feedback, and structural changes inside the project.",
  image: "/images/6.jpg",
  size: "large",
  enabled: false,
  content: [
    "A drop log keeps track of movement over time.",
    "It helps the project stay readable as it grows.",
  ],
},
{
  id: "13",
  slug: "future-exhibition-signals",
  title: "Future Exhibition Signals",
  date: "February 28, 2026",
  excerpt:
    "A note on how digital presence and physical exhibition plans begin to align.",
  image: "/images/1.jpg",
  size: "medium",
  enabled: true,
  content: [
    "The site is not separate from the future exhibition language.",
    "It is one of the first rooms people enter.",
  ],
},
{
  id: "14",
  slug: "support-structure",
  title: "Support Structure",
  date: "February 26, 2026",
  excerpt:
    "An outline of how support, collecting, and continuity work together inside the project.",
  image: "/images/2.jpg",
  size: "small",
  enabled: true,
  content: [
    "Support creates continuity.",
    "Continuity creates trust.",
  ],
},
{
  id: "15",
  slug: "old-web-future-art",
  title: "Old Web, Future Art",
  date: "February 24, 2026",
  excerpt:
    "A note on why the site leans into old-web roughness instead of polished contemporary sterility.",
  image: "/images/3.jpg",
  size: "large",
  enabled: true,
  content: [
    "The interface should carry the same energy as the work.",
    "That includes roughness, tension, and character.",
  ],
},
];