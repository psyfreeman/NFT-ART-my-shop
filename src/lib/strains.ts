export interface Strain {
  id: string;
  name: string;
  type: 'indica' | 'sativa' | 'hybrid';
  thc: string;
  cbd: string;
  genetics: string;
  effects: string[];
  flavors: string[];
  floweringTime: string;
  yield: string;
  height: string;
  description: string;
  image: string;
  price: string;
  featured: boolean;
  floweringType: 'photoperiod' | 'autoflower' | 'early';
  dateAdded: string;
}

export const mockStrains: Strain[] = [
  {
    id: '1',
    name: 'Purple Punch',
    type: 'indica',
    thc: '25-30%',
    cbd: '<1%',
    genetics: 'Larry OG x Granddaddy Purple',
    effects: ['Расслабление', 'Эйфория', 'Сонливость', 'Счастье'],
    flavors: ['Виноград', 'Ягоды', 'Сладкий'],
    floweringTime: '8-9 недель',
    yield: '600-700g/m²',
    height: '100-150cm',
    description: 'Purple Punch - это мощный индика-доминантный гибрид, который сочетает в себе лучшие качества своих родительских сортов. Этот элитный сорт известен своим насыщенным фиолетовым цветом и невероятно сладким вкусом.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=533&fit=crop',
    price: '$25.00',
    featured: true,
    floweringType: 'photoperiod',
    dateAdded: '2024-01-15'
  },
  {
    id: '2',
    name: 'Green Gelato',
    type: 'hybrid',
    thc: '20-25%',
    cbd: '1-2%',
    genetics: 'Sunset Sherbet x Thin Mint GSC',
    effects: ['Креативность', 'Расслабление', 'Эйфория', 'Фокус'],
    flavors: ['Цитрус', 'Сладкий', 'Мятный'],
    floweringTime: '8-10 недель',
    yield: '500-600g/m²',
    height: '90-120cm',
    description: 'Green Gelato представляет собой идеально сбалансированный гибрид, который обеспечивает как ментальную стимуляцию, так и физическое расслабление. Этот премиальный сорт отличается исключительным вкусовым профилем.',
    image: 'https://images.unsplash.com/photo-1582731129225-c4d2c6e0e4c5?w=400&h=533&fit=crop',
    price: '$22.00',
    featured: true,
    floweringType: 'photoperiod',
    dateAdded: '2024-01-20'
  },
  {
    id: '3',
    name: 'Blue Dream',
    type: 'sativa',
    thc: '18-24%',
    cbd: '<1%',
    genetics: 'Blueberry x Haze',
    effects: ['Эйфория', 'Креативность', 'Энергия', 'Счастье'],
    flavors: ['Черника', 'Сладкий', 'Ванильный'],
    floweringTime: '9-10 недель',
    yield: '650-750g/m²',
    height: '120-180cm',
    description: 'Blue Dream - легендарный сатива-доминантный сорт, который завоевал сердца гроверов по всему миру. Известен своими мощными церебральными эффектами и невероятной урожайностью.',
    image: 'https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=400&h=533&fit=crop',
    price: '$20.00',
    featured: false,
    floweringType: 'photoperiod',
    dateAdded: '2024-02-01'
  },
  {
    id: '4',
    name: 'White Widow Auto',
    type: 'hybrid',
    thc: '15-20%',
    cbd: '1%',
    genetics: 'White Widow x Ruderalis',
    effects: ['Расслабление', 'Эйфория', 'Креативность'],
    flavors: ['Землистый', 'Сосновый', 'Сладкий'],
    floweringTime: '8-10 недель от семени',
    yield: '400-500g/m²',
    height: '60-100cm',
    description: 'White Widow Auto - автоцветущая версия классического сорта White Widow. Идеально подходит для начинающих гроверов благодаря своей неприхотливости и стабильной генетике.',
    image: 'https://images.unsplash.com/photo-1608894991047-0d8c2c4d4b6d?w=400&h=533&fit=crop',
    price: '$18.00',
    featured: false,
    floweringType: 'autoflower',
    dateAdded: '2024-02-10'
  },
  {
    id: '5',
    name: 'Royal Gorilla',
    type: 'hybrid',
    thc: '25-30%',
    cbd: '<1%',
    genetics: 'Chem Sis x Sour Dubb x Chocolate Diesel',
    effects: ['Расслабление', 'Эйфория', 'Сонливость', 'Счастье'],
    flavors: ['Дизельный', 'Землистый', 'Сосновый'],
    floweringTime: '8-9 недель',
    yield: '550-650g/m²',
    height: '80-120cm',
    description: 'Royal Gorilla - это мощный гибрид с исключительно высоким содержанием ТГК. Этот элитный сорт известен своими липкими, смолистыми шишками и интенсивными эффектами.',
    image: 'https://images.unsplash.com/photo-1597828598999-fcef26a06c86?w=400&h=533&fit=crop',
    price: '$30.00',
    featured: true,
    floweringType: 'photoperiod',
    dateAdded: '2024-02-15'
  },
  {
    id: '6',
    name: 'Northern Lights Early',
    type: 'indica',
    thc: '16-20%',
    cbd: '1-2%',
    genetics: 'Northern Lights x Early Skunk',
    effects: ['Расслабление', 'Сонливость', 'Счастье', 'Спокойствие'],
    flavors: ['Сладкий', 'Землистый', 'Сосновый'],
    floweringTime: '6-7 недель',
    yield: '500-600g/m²',
    height: '90-130cm',
    description: 'Northern Lights Early - раннецветущая версия легендарного Northern Lights. Идеально подходит для северных климатов и коротких сезонов выращивания.',
    image: 'https://images.unsplash.com/photo-1583912267550-3c3f3c8b8b8b?w=400&h=533&fit=crop',
    price: '$24.00',
    featured: false,
    floweringType: 'early',
    dateAdded: '2024-02-20'
  }
];