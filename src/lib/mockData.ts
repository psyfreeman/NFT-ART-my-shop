export interface Strain {
  id: string;
  slug?: string;
  name: string;

  // legacy fields
  type: "Indica" | "Sativa" | "Hybrid";
  thc: string;
  cbd: string;
  genetics: string;
  floweringTime: string;
  yield: string;
  price: string;
  seeds: string;
  image: string;
  effects: string[];
  flavors: string[];
  terpenes: string[];
  description: string;
  difficulty: "Легкий" | "Средний" | "Сложный";
  floweringType: "Photoperiod" | "Autoflower" | "Early";
  variety: "Feminized" | "Regular";
  dateAdded: string;
  featured: boolean;

  // new art fields
  series?: string;
  format?: string;
  style?: string;
  status?: string;
}

export const translateFloweringTime = (value: string) => value;
export const translateStrainDescription = (value: string) => value;

export const strains: Strain[] = [
  {
    id: "001",
    slug: "smile-canon-001",
    name: "Smile Canon 001",
    type: "Hybrid",
    thc: "0%",
    cbd: "0%",
    genetics: "Original signed artwork",
    floweringTime: "—",
    yield: "—",
    price: "$120",
    seeds: "1 piece",
    image: "/images/1.png",
    effects: ["Presence", "Joy", "Signal"],
    flavors: ["Paint", "Dust", "Wall"],
    terpenes: ["Acrylic", "Canvas"],
    description:
      "Original work from the fresh drop. A raw smiling signal placed into a numbered collector series.",
    difficulty: "Легкий",
    floweringType: "Photoperiod",
    variety: "Feminized",
    dateAdded: "2026-03-20",
    featured: true,
    series: "Smile Canon",
    format: "Physical",
    style: "Street Art",
    status: "Available",
  },
  {
    id: "002",
    slug: "smile-canon-002",
    name: "Smile Canon 002",
    type: "Hybrid",
    thc: "0%",
    cbd: "0%",
    genetics: "Original signed artwork",
    floweringTime: "—",
    yield: "—",
    price: "$160",
    seeds: "1 piece",
    image: "/images/2.png",
    effects: ["Rhythm", "Humor", "Pulse"],
    flavors: ["Spray", "Concrete", "Neon"],
    terpenes: ["Acrylic", "Marker"],
    description:
      "Collector piece from the ongoing series. Built with repetition, dirt, and playful urban energy.",
    difficulty: "Легкий",
    floweringType: "Photoperiod",
    variety: "Feminized",
    dateAdded: "2026-03-19",
    featured: true,
    series: "Smile Canon",
    format: "NFT",
    style: "Street Art",
    status: "Available",
  },
  {
    id: "003",
    slug: "smile-canon-003",
    name: "Smile Canon 003",
    type: "Hybrid",
    thc: "0%",
    cbd: "0%",
    genetics: "Original signed artwork",
    floweringTime: "—",
    yield: "—",
    price: "$220",
    seeds: "1 piece",
    image: "/images/3.png",
    effects: ["Stillness", "Glow", "Memory"],
    flavors: ["Dust", "Ink", "Night"],
    terpenes: ["Canvas", "Acrylic"],
    description:
      "A darker entry in the series with a more meditative field and old-web collector vibe.",
    difficulty: "Легкий",
    floweringType: "Photoperiod",
    variety: "Feminized",
    dateAdded: "2026-03-18",
    featured: false,
    series: "Smile Canon",
    format: "Phygital",
    style: "Tachisme",
    status: "Reserved",
  },
  {
    id: "004",
    slug: "smile-canon-004",
    name: "Smile Canon 004",
    type: "Hybrid",
    thc: "0%",
    cbd: "0%",
    genetics: "Original signed artwork",
    floweringTime: "—",
    yield: "—",
    price: "$140",
    seeds: "1 piece",
    image: "/images/4.png",
    effects: ["Tension", "Humor", "Street pulse"],
    flavors: ["Acid", "Plastic", "Dust"],
    terpenes: ["Marker", "Spray"],
    description:
      "Old-shop style collectible work from the new drop, tuned toward raw texture and street motion.",
    difficulty: "Легкий",
    floweringType: "Photoperiod",
    variety: "Feminized",
    dateAdded: "2026-03-17",
    featured: false,
    series: "Fresh Drop",
    format: "Physical",
    style: "Abstraction",
    status: "Available",
  },
  {
    id: "005",
    slug: "smile-canon-005",
    name: "Smile Canon 005",
    type: "Hybrid",
    thc: "0%",
    cbd: "0%",
    genetics: "Original signed artwork",
    floweringTime: "—",
    yield: "—",
    price: "$300",
    seeds: "1 piece",
    image: "/images/5.png",
    effects: ["Depth", "Weight", "Glow"],
    flavors: ["Purple", "Smoke", "Wall"],
    terpenes: ["Acrylic", "Varnish"],
    description:
      "A heavier work from the series with a more painterly surface and collector-grade presence.",
    difficulty: "Средний",
    floweringType: "Photoperiod",
    variety: "Feminized",
    dateAdded: "2026-03-16",
    featured: true,
    series: "Fresh Drop",
    format: "Physical",
    style: "Tachisme",
    status: "Collected",
  },
  {
    id: "006",
    slug: "smile-canon-006",
    name: "Smile Canon 006",
    type: "Hybrid",
    thc: "0%",
    cbd: "0%",
    genetics: "Original signed artwork",
    floweringTime: "—",
    yield: "—",
    price: "$500",
    seeds: "1 piece",
    image: "/images/6.png",
    effects: ["Signal", "Focus", "Energy"],
    flavors: ["Neon", "Metal", "Paint"],
    terpenes: ["Canvas", "Spray"],
    description:
      "Current highlighted work from the collection. Built for collectors supporting the art with crypto or card.",
    difficulty: "Средний",
    floweringType: "Photoperiod",
    variety: "Feminized",
    dateAdded: "2026-03-15",
    featured: true,
    series: "Genesis Mint",
    format: "Phygital",
    style: "Street Art",
    status: "Available",
  },
];