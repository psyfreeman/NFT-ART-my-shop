export interface Artwork {
  id: string;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity?: number;

  type: "digital" | "physical" | "phygital";
  requiresShipping: boolean;

  series: string;
  format: "NFT" | "Physical" | "Phygital";
  style: string;
  status: "Available" | "Reserved" | "Collected";
  category: "Phygital NFT" | "Digital NFT" | "Premium incense";
  description: string;
  dateAdded: string;
  featured: boolean;
}

const smileCollection: Artwork[] = [
  "004", "007", "009", "011", "013", "015", "020", "021", "022", "023",
  "024", "025", "026", "027", "028", "029", "030", "031", "032", "033",
  "034", "035", "036", "037", "038", "041", "042", "043", "045", "047", "048"
].map((num, index) => ({
  id: `smile-collection-${num}`,
  slug: `smile-collection-${num}`,
  name: `Smile Collection ${num}`,
  image: `/images/smile-collection/smile-collection-${num}.jpg`,
  price: 250,
  quantity: 1,

  type: "phygital",
  category: "Phygital NFT",
  requiresShipping: true,

  series: "Smile Collection",
  format: "Phygital",
  style: "Symbolic Pop / Street Digital",
  status: "Available",
  description:
    "Phygital NFT artwork from the Smile Collection by Psyfreeman Φ 1.618. A collectible visual signal connected to a physical artwork or print and its digital twin.",
  dateAdded: "2026-03-20",
  featured: index < 6,
}));

const cryptoBrothersFiles = [
  "crypto-brothers-001.jpeg",
  "crypto-brothers-002.jpeg",
  "crypto-brothers-003.jpeg",
  "crypto-brothers-004.jpeg",
  "crypto-brothers-005.jpeg",
  "crypto-brothers-006.jpeg",
  "crypto-brothers-007.jpeg",
  "crypto-brothers-008.jpeg",
  "crypto-brothers-009.jpeg",
  "crypto-brothers-010.jpeg",
  "crypto-brothers-011.jpeg",
  "crypto-brothers-012.jpg",
  "crypto-brothers-013.jpeg",
  "crypto-brothers-014.jpeg",
  "crypto-brothers-015.jpeg",
];

const cryptoBrothers: Artwork[] = cryptoBrothersFiles.map((fileName, index) => {
  const number = String(index + 1).padStart(3, "0");

  return {
    id: `crypto-brothers-${number}`,
    slug: `crypto-brothers-${number}`,
    name: `The Crypto Brothers ${number}`,
    image: `/images/crypto-brothers/${fileName}`,
    price: 150,
    quantity: 1,

    type: "digital",
    category: "Digital NFT",
    requiresShipping: false,

    series: "The Crypto Brothers",
    format: "NFT",
    style: "Crypto Pop / Web3 Portrait",
    status: "Available",
    description:
      "Digital NFT artwork from The Crypto Brothers collection by Psyfreeman Φ 1.618. A series of Web3 characters, crypto archetypes, and symbolic digital portraits.",
    dateAdded: "2026-06-18",
    featured: index < 3,
  };
});

export const artworks: Artwork[] = [...smileCollection, ...cryptoBrothers];

// Temporary compatibility with old code
export const strains = artworks;

export const translateFloweringTime = (value: string) => value;
export const translateStrainDescription = (value: string) => value;