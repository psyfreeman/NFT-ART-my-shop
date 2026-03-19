// Расширенные данные сортов с разными типами цветения и разновидностями
export interface Strain {
  id: string;
  name: string;
  type: 'Indica' | 'Sativa' | 'Hybrid';
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
  difficulty: 'Легкий' | 'Средний' | 'Сложный';
  floweringType: 'Photoperiod' | 'Autoflower' | 'Early';
  variety: 'Feminized' | 'Regular';
  dateAdded: string;
  featured: boolean;
}

// Функция для перевода времени цветения
export const translateFloweringTime = (floweringTime: string, language: 'ru' | 'en'): string => {
  if (language === 'en') {
    return floweringTime
      .replace(/недель/g, 'weeks')
      .replace(/недели/g, 'weeks')
      .replace(/от семени/g, 'from seed');
  }
  return floweringTime;
};

// Функция для перевода описания сорта
export const translateStrainDescription = (strain: Strain, language: 'ru' | 'en'): string => {
  if (language === 'en') {
    const typeMap = {
      'фотопериодный': 'photoperiod',
      'автоцветущий': 'autoflowering',
      'раннецветущий': 'early flowering'
    };
    
    let description = strain.description;
    Object.entries(typeMap).forEach(([ru, en]) => {
      description = description.replace(ru, en);
    });
    
    description = description.replace('сорт с уникальными характеристиками.', 'strain with unique characteristics.');
    
    return description;
  }
  return strain.description;
};

// Генерация фотопериодных сортов (70 штук)
const photoperiodStrains: Strain[] = [
  
  {
  id: '27 - Sugar Tower',
  name: 'Sugar Tower',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Cookies Kush F5 + Mendo Breath) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/27- Sugar Tower - (Cookies Kush F5 + Mendo Breath) + (Sunset Sherbet + GMO).jpg',
  effects: ['Расслабление', 'Эйфория', 'Социальность'],
  flavors: ['Сыр', 'Куш', 'Топливо'],
  terpenes: ['Мирцен', 'Кариофиллен', 'Гумулен'],
  description:
    'Мама (Cookies Kush F5 + Mendo Breath): сырный, кушевый и топливный аромат, очень много трихом, рост выше среднего, индичный фенотип, склонен к фиолетовым и красным оттенкам, цветение ~60 дней. Папа (Sunset Sherbet + GMO): сильный топливный аромат, высокая смолистость, хороший рост и ветвистость, индичный фенотип с фиолетовыми и красными цветами, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '17 - Purple Garlic Glue',
  name: 'Purple Garlic Glue',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.2%',
  genetics: '(Gorilla Glue #4) + (Sunset Sherbet + GMO)',
  floweringTime: '55–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/garlic cake.jpg',
  effects: ['Расслабление', 'Сон', 'Эйфория'],
  flavors: ['Топливо', 'Чеснок', 'Сыр', 'Куш'],
  terpenes: ['Кариофиллен', 'Гумулен', 'Лимонен'],
  description:
    'Мама (Gorilla Glue #4): сырный, кушевый и топливный аромат, высокая смолистость, рост ниже среднего, высокая ветвистость, индичный фенотип, остаётся зелёным до финиша, цветение около 55 дней. Папа (Sunset Sherbet + GMO): мощный топливный аромат, очень много трихом, выше среднего роста, склонен к фиолетовым и красным оттенкам, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
, 
{
  id: '20 - Garlic OZ',
  name: 'Garlic OZ',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(OZ Kush + GMO) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/гарлик оз.jpg',
  effects: ['Обезболивание', 'Эйфория', 'Фокус'],
  flavors: ['Топливо', 'Куш', 'Сладкий', 'Чеснок'],
  terpenes: ['Мирцен', 'Кариофиллен', 'Линалоол'],
  description:
    'Мама (OZ Kush + GMO): сладкий, топливный и кушевый аромат, высокая смолистость, рост выше среднего, индичный фенотип, остаётся в основном зелёным, цветение ~60 дней. Папа (Sunset Sherbet + GMO): очень сильный топливный запах, много трихом, хороший рост и ветвистость, склонность к фиолетово-красным оттенкам, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '16 - Purple Rock',
  name: 'Purple Rock',
  type: 'Hybrid',
  thc: '29%',
  cbd: '0.2%',
  genetics: '(Sour Diesel F6 + Girl Scout Cookies) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '700g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/16- Purple Rock  - (Sour Diesel F6 + Girl Scout Cookies) + (Sunset Sherbet + GMO).jpeg',
  effects: ['Энергия', 'Фокус', 'Энергия'],
  flavors: ['Дизель', 'Кислый', 'Топливо', 'Кукис'],
  terpenes: ['Лимонен', 'Пинен', 'Кариофиллен'],
  description:
    'Мама (Sour Diesel F6 + Girl Scout Cookies): кислый и дизельный аромат, высокая смолистость, высокий рост, сативный фенотип, остаётся зелёным, цветение ~60 дней. Папа (Sunset Sherbet + GMO): топливный запах, много трихом, хороший рост, склонен к фиолетовым оттенкам, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '30 - Lemon Cookies',
  name: 'Lemon Cookies',
  type: 'Hybrid',
  thc: '26%',
  cbd: '0.2%',
  genetics: '(Cookies Kush F3 + Lemon OG) + (Sunset Sherbet + GMO)',
  floweringTime: '65–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/30- Lemon Cookies - (Cookies Kush F3 + Lemon OG) + (Sunset Sherbet + GMO)F3.jpeg',
  effects: ['Эйфория', 'Креативность', 'Мотивация'],
  flavors: ['Цитрус', 'Топливо', 'Куш', 'Сладкий'],
  terpenes: ['Лимонен', 'Кариофиллен', 'Мирцен'],
  description:
    'Мама (Cookies Kush F3 + Lemon OG): мощный топливно-цитрусовый аромат, высокая смолистость, высокий рост, хорошая ветвистость, сативный фенотип, склонен к фиолетовым оттенкам, цветение ~65 дней. Папа (Sunset Sherbet + GMO): топливный запах, высокий уровень трихом, хороший рост, склонность к фиолетово-красным цветам, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '15 - Sugar Grape Glue',
  name: 'Sugar Grape Glue',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(OZ Kush + Gorilla Glue #4) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/15-Sugar Grape Glue.jpg',
  effects: ['Эйфория', 'Аппетит', 'Расслабление'],
  flavors: ['Тропический', 'Вишня', 'Сладкий', 'Топливо'],
  terpenes: ['Мирцен', 'Кариофиллен', 'Гумулен'],
  description:
    'Мама (OZ Kush + Gorilla Glue #4): тропический и сладкий аромат, очень много трихом, рост выше среднего, индичный фенотип, остаётся зелёным, цветение ~60 дней. Папа (Sunset Sherbet + GMO): сильный топливный запах, высокая смолистость, хороший рост и ветвистость, склонность к фиолетовым и красным тонам, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,{
  id: '1 - Power Purple bx1',
  name: 'Power Purple bx1',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Sunset Sherbet + OG Kush) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/1- Power Purple bx1 .png',
  effects: ['Расслабление', 'Эйфория', 'Антистресс'],
  flavors: ['Куш', 'Топливо', 'Сладкий'],
  terpenes: ['Кариофиллен', 'Мирцен', 'Лимонен'],
  description:
    'Тёмный фенотип. Мама (Sunset Sherbet + OG Kush): кушевый аромат с топливными нотами, средняя смолистость, рост выше среднего, индичный фенотип, склонен к фиолетовым оттенкам, цветение ~60 дней. Папа (Sunset Sherbet + GMO): мощный топливный запах, высокая смолистость, хороший рост и ветвистость, яркая фиолетово-красная палитра, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,{
  id: '24 - Grape Lemon Garlic (Prune Phenotype)',
  name: 'Grape Lemon Garlic (Prune Phenotype)',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(OZ Kush + Lemon OG) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/24- Grape Lemon Garlic - (OZ Kush + Lemon OG) + (Sunset Sherbet + GMO) - черносливовый фенотип.png',
  effects: ['Расслабление', 'Сон', 'Эйфория'],
  flavors: ['Слива', 'Кофе', 'Цитрус', 'Топливо'],
  terpenes: ['Мирцен', 'Кариофиллен', 'Гумулен'],
  description:
    'Черносливовый фенотип. Мама (OZ Kush + Lemon OG): сливовые, кофейные и цитрусовые ароматы, высокая смолистость, средний рост, индичный фенотип, склонен к фиолетовым оттенкам, цветение ~60 дней. Папа (Sunset Sherbet + GMO): сильный топливный запах, много трихом, хороший рост, насыщенные фиолетово-красные тона, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '25 - Grape Lemon Garlic (Grape Phenotype)',
  name: 'Grape Lemon Garlic (Grape Phenotype)',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(OZ Kush + Lemon OG) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/25- Grape Lemon Garlic - (OZ Kush + Lemon OG) + (Sunset Sherbet + GMO) - виноградный фенотип.png',
  effects: ['Эйфория', 'Расслабление', 'Антистресс'],
  flavors: ['Виноград', 'Куш', 'Цитрус', 'Топливо'],
  terpenes: ['Мирцен', 'Лимонен', 'Кариофиллен'],
  description:
    'Виноградный фенотип. Мама (OZ Kush + Lemon OG): виноградные, кушевые и цитрусовые ароматы, высокая смолистость, средний рост, индичный фенотип, склонен к фиолетовым тонам, цветение ~60 дней. Папа (Sunset Sherbet + GMO): сильное топливо, много трихом, отличный рост и ветвистость, яркие фиолетово-красные оттенки, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
, 
{
  id: '14 - Purple Lime Pie',
  name: 'Purple Lime Pie (Fuel Phenotype)',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.2%',
  genetics: '(Key Lime Pie + GMO) + (Sunset Sherbet + GMO)',
  floweringTime: '65–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/purpleLime.png',
  effects: ['Эйфория', 'Антистресс', 'Счастье'],
  flavors: ['Топливо', 'Лимон', 'Куш', 'Сыр'],
  terpenes: ['Кариофиллен', 'Гумулен', 'Лимонен'],
  description:
    'Топливный фенотип. Мама (Key Lime Pie + GMO): мощные топливные запахи, кушевый аромат, высокая смолистость, высокий рост, индичный фенотип, остаётся зелёным к финишу, цветение ~65 дней. Папа (Sunset Sherbet + GMO): интенсивный топливный аромат, много трихом, хороший рост, яркая фиолетово-красная палитра, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '29 - Just Wait F4',
  name: 'Just Wait F4',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.2%',
  genetics: '(Sunset Sherbet + GMO)F3 + (Sunset Sherbet + GMO)F3',
  floweringTime: '70–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/29- Just Wait F4 - (Sunset Sherbet + GMO)F3 + (Sunset Sherbet + GMO)F3 1.jpg',
  effects: ['Сон', 'Эйфория', 'Счастье'],
  flavors: ['Топливо', 'Куш', 'Сладкий'],
  terpenes: ['Мирцен', 'Кариофиллен', 'Гумулен'],
  description:
    'Мама и папа — Sunset Sherbet + GMO F3: сильный топливный аромат, очень высокая смолистость, рост выше среднего, хорошая ветвистость, яркие фиолетово-красные цвета. Оба родителя одинаковы: индичный фенотип, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '7A - Stinky Crush (Purple Phenotype)',
  name: 'Stinky Crush (Purple Phenotype)',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Girl Scout Cookies + GMO) + (Sunset Sherbet + GMO)',
  floweringTime: '65–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/stinkyCrash Purple.jpg',
  effects: ['Эйфория', 'Сон', 'Антистресс'],
  flavors: ['Топливо', 'Куш', 'Сладкий'],
  terpenes: ['Кариофиллен', 'Гумулен', 'Мирцен'],
  description:
    'Фиолетовый фенотип. Мама (GSC + GMO): топливные и кушевые запахи, очень много трихом, рост выше среднего, ветвистость ниже средней, индичный фенотип, склонен к фиолетовым оттенкам, цветение ~65 дней. Папа (Sunset Sherbet + GMO): мощное топливо, высокая смолистость, фиолетово-красные цвета, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,{
  id: '7B - Stinky Crush (Blue Phenotype)',
  name: 'Stinky Crush (Blue Phenotype)',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Girl Scout Cookies + GMO) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/11Stinky Crush 1.jpg',
  effects: ['Сон', 'Эйфория', 'Антистресс'],
  flavors: ['Топливо', 'Куш', 'Ягоды'],
  terpenes: ['Мирцен', 'Кариофиллен', 'Гумулен'],
  description:
    'Синий фенотип. Мама (GSC + GMO): топливные и кушевые запахи, запахи тёмных ягод, высокая смолистость, рост выше среднего, слабая ветвистость, склонен к тёмным, серым и синим тонам, цветение ~60 дней. Папа (Sunset Sherbet + GMO): сильный топливный аромат, много трихом, хороший рост, фиолетово-красные оттенки, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '13 - Purple Garlic Cake',
  name: 'Purple Garlic Cake',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.2%',
  genetics: '(Wedding Cake + GMO) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/- Purple Garlic Glue.JPG',
  effects: ['Сон', 'Антистресс', 'Антистресс'],
  flavors: ['Топливо', 'Куш', 'Кукис'],
  terpenes: ['Мирцен', 'Кариофиллен', 'Лимонен'],
  description:
    'Мощный индо-доминантный гибрид с топливно-кремовым ароматом. Мама (Wedding Cake + GMO): насыщенные топливные и кушевые тона, высокая смолистость, рост высокий, средняя ветвистость, зелёная окраска к финишу, цветение ~60 дней. Папа (Sunset Sherbet + GMO): резкий топливный профиль, много трихом, высокий рост, фиолетово-красные оттенки, цветение 70–75 дней. Итоговый сорт сочетает мощный индичный эффект, плотные смолистые шишки и идеальный профиль для экстракций.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,{
  id: '2 - Power Banana bx1',
  name: 'Power Banana bx1',
  type: 'Hybrid',
  thc: '26%',
  cbd: '0.3%',
  genetics: 'Banana OG + (Sunset Sherbet + GMO)',
  floweringTime: '65–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/2- Power Banana bx1 - Banana OG + (Sunset Sherbet + GMO).jpg',
  effects: ['Эйфория', 'Расслабление', 'Энергия'],
  flavors: ['Банан', '', 'Топливо'],
  terpenes: ['Мирцен', 'Лимонен', 'Оксимен'],
  description:
    'Фруктовый индичный гибрид с ярким ароматом переспелого банана и топливным послевкусием. Мама (Banana OG + Sunset Sherbet OG): сладкий тропический профиль, среднее количество трихом, высокий рост, индичный характер, фиолетовые оттенки, цветение ~65 дней. Папа (Sunset Sherbet + GMO): мощный топливный терпеновый профиль, высокий рост, очень много трихом, фиолетово-красные тона, цветение 70–75 дней. Итог: насыщенный банановый терпеновый сорт с очень плотными шишками и сильным расслабляющим эффектом.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '14B - Purple Lime Pie (Sweet Phenotype)',
  name: 'Purple Lime Pie (Sweet Phenotype)',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Key Lime Pie + GMO) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '580g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/14- Purple Lime Pie  - (Key lime Pie + GMO) + (Sunset Sherbet + GMO) - сладкий фенотип.jpg',
  effects: ['Аппетит', 'Эйфория', 'Счастье'],
  flavors: ['Лимон', 'Сладкий', 'Цитрус'],
  terpenes: ['Лимонен', 'Мирцен', 'Кариофиллен'],
  description:
    'Сладкий фенотип Purple Lime Pie с ярким лаймово-тропическим профилем. Мама (Key Lime Pie + GMO): сладость лайма, лёгкие банановые и тропические ноты, высокая смолистость, средний рост, зелёная окраска к финишу, цветение ~60 дней. Папа (Sunset Sherbet + GMO): мощное топливо, высокая трихомность, хороший рост и фиолетово-красные оттенки, цветение 70–75 дней. Гибрид даёт плотные, ароматные шишки с сладким лаймовым вкусом и мягким, приятным эффектом.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
, 
{
  id: '28 - Pineapple Black',
  name: 'Pineapple Black',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.2%',
  genetics: '(Pineapple Express + Cookies Kush F4) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/28- Pineapple Black - (Pineapple express + Cookies Kush F4) + (Sunset Sherbet + GMO).jpg',
  effects: ['Эйфория', 'Мотивация', 'Энергия'],
  flavors: ['Ананас', 'Цитрус', 'Куш', 'Топливо'],
  terpenes: ['Лимонен', 'Мирцен', 'Кариофиллен'],
  description:
    'Тропический гибрид с мощным ананасовым ароматом. Мама (Pineapple Express + Cookies Kush F4): сладкие тропики, ананас, высокая смолистость, рост выше среднего, фиолетово-красная окраска, цветение ~60 дней. Папа (Sunset Sherbet + GMO): резкое топливо, много трихом, хороший рост, яркие фиолетовые оттенки, цветение 70–75 дней. Итоговый сорт — тёмные, ароматные шишки с глубокими тропическими терпенами и сильным, но мягким эффектом.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
, 
{
    id: 'Cherry Trap',
    name: 'Cherry Trap',
    type: 'Hybrid',
    thc: '27%',
    cbd: '0.2%',
    genetics: 'Cherry Pie Kush + Ice cream Cone) + (Sunset Sherbet + GMO',
    floweringTime: '8 недель',
    yield: '600g/m²',
    seeds: '5 seeds',
    price: '$100',
    image: '/images/tower.png',
    effects: ['Энергия', 'Фокус', 'Эйфория', 'Расслабление'],
    flavors: ['Сладкий', 'Пряный', 'Древесный'],
    terpenes: ['Мирцен', 'Пинен', 'Кариофиллен'],
    description: ' вишневый фенотип Мама - (Cherry Pie Kush + Ice cream Cone): Вишневый аромат, напоминает фисташковое мороженное, доктор пепер,  очень высокое количество трихом,  ниже среднего роста, средняя ветвистость, индичный фенотип, склонен к фиолетовым и красным цветам, цветет около 60 дней.Папа - (Sunset Sherbet + GMO): Очень сильный топливный аромат, высокое количество трихом, выше среднего роста, хорошая ветвистость, индичный фенотип, склонен к фиолетовым и красным цветам, цветет около 70-75 дней',
    difficulty: 'Легкий',
    floweringType: 'Photoperiod',
    variety: 'Feminized',
    dateAdded: '2024-01-20',
    featured: false
  },
///
{
  id: '5A - Garlic Gelato (Tall Phenotype)',
  name: 'Garlic Gelato (Tall Phenotype)',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.2%',
  genetics: '(Gelato + Sour Apple) + (Sunset Sherbet + GMO)',
  floweringTime: '65–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/GarlickGelatoHigh.png',
  effects: ['Эйфория', 'Фокус', 'Обезболивание'],
  flavors: ['Банан', 'Манго', 'Топливо'],
  terpenes: ['Лимонен', 'Мирцен', 'Кариофиллен'],
  description:
    'Высокий фенотип Garlic Gelato с выраженным сативным стартом и мощным индичным завершением. Мама (Gelato + Sour Apple): насыщенные тропические ароматы с оттенками забродивших яблок, очень высокое количество трихом, высокий рост, средняя ветвистость, сативный фенотип, склонность к фиолетовым оттенкам, цветение около 65 дней. Папа (Sunset Sherbet + GMO): экстремально сильный топливный аромат, высокая смолистость, рост выше среднего, хорошая ветвистость, индичный характер, выраженная склонность к фиолетовым и красным цветам, цветение 70–75 дней. В итоге гибрид даёт мощный, продолжительный эффект с яркой эйфорией и глубоким телесным расслаблением, отлично подходит для вечернего использования и экстракций.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
},
{
  id: '9 - Cherry Trap (Cherry Phenotype)',
  name: 'Cherry Trap (Cherry Phenotype)',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Cherry Pie Kush + Ice Cream Cone) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/cherryTrapCherry.png',
  effects: ['Эйфория', 'Сон', 'Антистресс'],
  flavors: ['Вишня', 'Топливо'],
  terpenes: ['Лимонен', 'Кариофиллен', 'Мирцен'],
  description:
    'Вишнёвый фенотип Cherry Trap с насыщенным десертным и газированным терпеновым профилем. Мама (Cherry Pie Kush + Ice Cream Cone): яркий вишнёвый аромат с оттенками фисташкового мороженого и газировки Dr Pepper, очень высокое количество трихом, компактный рост ниже среднего, средняя ветвистость, выраженный индичный фенотип, сильная склонность к фиолетовым и красным оттенкам, цветение около 60 дней. Папа (Sunset Sherbet + GMO): экстремально сильный топливный аромат, высокая смолистость, рост выше среднего, хорошая ветвистость, индичный характер, выраженные фиолетово-красные оттенки, цветение 70–75 дней. Итоговый гибрид сочетает мощную эйфорию с глубоким телесным расслаблением и идеально подходит для вечернего использования и концентратов.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
}
,
{
  id: '5 - Garlic Gelato (Medium Phenotype)',
  name: 'Garlic Gelato',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Gelato + Sour Apple) + (Sunset Sherbet + GMO)',
  floweringTime: '65–75 дней',
  yield: '580g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/garlickGelato.png',
  effects: ['Эйфория', 'Фокус', 'Антистресс'],
  flavors: ['Кукис', 'Топливо','Цветочный'],
  terpenes: ['Лимонен', 'Мирцен', 'Кариофиллен'],
  description:
    'Сбалансированный фенотип Garlic Gelato с ярко выраженным кисло-фруктовым терпеновым профилем. Мама (Gelato + Sour Apple): выраженные кислые ароматы зелёных яблок, очень высокое количество трихом, компактный рост ниже среднего, средняя ветвистость, сативный фенотип, к финишу остаётся зелёным, цветение около 65 дней. Папа (Sunset Sherbet + GMO): крайне мощный топливный аромат, высокая смолистость, рост выше среднего, хорошая ветвистость, индичный характер, склонность к фиолетовым и красным оттенкам, цветение 70–75 дней. Итоговый гибрид сочетает бодрящий старт, чистый умственный эффект и мягкое телесное расслабление.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
},

  ///
  {
  id: 'Tropicana Purple - Sweet',
  name: 'Tropicana Purple (Sweet Phenotype)',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Tropicana Cookies + Pineapple Kush) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/Tropicana Purple - (Tropicana Cookies + Pineapple Kush).jpg',
  effects: ['Энергия', 'Эйфория', 'Фокус'],
  flavors: ['Манго', 'Банан', 'Ананас'],
  terpenes: ['Мирцен', 'Лимонен', 'Кариофиллен'],
  description:
    'Сладкий тропический фенотип. Мама (Tropicana Cookies + Pineapple Kush): манго, банан, ананас, очень много трихом, рост ниже среднего, ветвистость выше среднего, индика, склонность к фиолетовым/красным цветам, цветение ~60 дней. Папа (Sunset Sherbet + GMO): сильный топливный аромат, много трихом, рост выше среднего, хорошая ветвистость, цветение 70–75 дней.',
  difficulty: 'Легкий',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
},
{
  id: 'Tropicana Purple - Coffee',
  name: 'Tropicana Purple (Coffee Phenotype)',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Tropicana Cookies + Pineapple Kush) + (Sunset Sherbet + GMO)',
  floweringTime: '65–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/Tropicana Purple.jpg',
  effects: ['Расслабление', 'Фокус', 'Эйфория'],
  flavors: ['Кофе', 'Топливо'],
  terpenes: ['Кариофиллен', 'Мирцен'],
  description:
    'Кофейный фенотип. Мама (Tropicana Cookies + Pineapple Kush): топливные и кофейные ароматы, очень много трихом, рост выше среднего, средняя ветвистость, индика, цветение ~65 дней. Папа (Sunset Sherbet + GMO): сильный топливный аромат, высокая трихомность, рост выше среднего, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
},
{
  id: 'Stinky Ape',
  name: 'Stinky Ape',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.2%',
  genetics: '(Gorilla Glue #4 + Cookies Kush F2) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/Stinky Ape1.jpg',
  effects: ['Расслабление', 'Эйфория', 'Сон'],
  flavors: ['Сыр', 'Куш', 'Топливо'],
  terpenes: ['Кариофиллен', 'Мирцен'],
  description:
    'Мама (Gorilla Glue #4 + Cookies Kush F2): сырный, кушевый, топливный аромат, много трихом, рост выше среднего, средняя ветвистость, индика, цветение ~60 дней. Папа (Sunset Sherbet + GMO): сильный топливный запах, хорошая ветвистость, рост выше среднего, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: true
},
{
  id: 'Tropical Dream - Thick',
  name: 'Tropical Dream (Thick Phenotype)',
  type: 'Hybrid',
  thc: '26%',
  cbd: '0.2%',
  genetics: '(Tropical Runtz + Gelato) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$105',
  image: '/images/10-Tropical Dream - (Tropical Runtz + Gelato) + (Sunset Sherbet + GMO) - фенотип тослтый.jpg',
  effects: ['Эйфория', 'Расслабление', 'Социальность'],
  flavors: ['Сладкий', 'Тропический'],
  terpenes: ['Мирцен', 'Лимонен'],
  description:
    'Толстый сладкий фенотип. Мама (Tropical Runtz + Gelato): приторно-сладкие ароматы, много трихом, рост ниже среднего, отличная ветвистость, индика, цветение ~60 дней. Папа (Sunset Sherbet + GMO): сильный топливный аромат, много трихом, рост выше среднего, ветвистость хорошая, цветение 70–75 дней.',
  difficulty: 'Легкий',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
},
{
  id: 'Glue Lime Pie - Stinky',
  name: 'Glue Lime Pie (Stinky Phenotype)',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.2%',
  genetics: '(Key Lime Pie + Gorilla Glue #4) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/Glue Lime Pie вонючий фенотип.jpg  ',
  effects: ['Эйфория', 'Обезболивание'],
  flavors: ['Топливо', 'Куш', 'Кислый'],
  terpenes: ['Кариофиллен', 'Гумулен'],
  description:
    'Вонючий фенотип. Мама (Key Lime Pie + Gorilla Glue #4): резкие топливные запахи, много трихом, рост средний, ветвистость средняя, индика, цветение ~60 дней. Папа (Sunset Sherbet + GMO): сильный топливный аромат, много трихом, рост выше среднего, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
},
{
  id: 'Glue Lime Pie - Sweet',
  name: 'Glue Lime Pie (Sweet Phenotype)',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.2%',
  genetics: '(Gelato + Sour Apple) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '650g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/Glue Lime Pie  сладкий фенотип 1.jpg',
  effects: ['Эйфория', 'Фокус', 'Расслабление'],
  flavors: ['Банан', 'Тропический', 'Сладкий'],
  terpenes: ['Лимонен', 'Мирцен'],
  description:
    'Сладкий фенотип. Мама (Gelato + Sour Apple): тропические ароматы, запах переспелого банана, много трихом, рост средний, ветвистость средняя, цветение ~60 дней. Папа (Sunset Sherbet + GMO): топливо, много трихом, рост выше среднего, цветение 70–75 дней.',
  difficulty: 'Легкий',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
},
{
  id: 'Power Purple BX1 - Light',
  name: 'Power Purple BX1 (Light Phenotype)',
  type: 'Hybrid',
  thc: '27%',
  cbd: '0.2%',
  genetics: '(Sunset Sherbet + OG Kush) + (Sunset Sherbet + GMO)',
  floweringTime: '65–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/1- Power Purple bx1- (Sunset sherbet + OG kush) + (Sunset Sherbet + GMO) - фенотип светлый.jpg',
  effects: ['Эйфория', 'Расслабление', 'Сон'],
  flavors: ['Куш', 'Топливо'],
  terpenes: ['Кариофиллен', 'Мирцен'],
  description:
    'Светлый фенотип. Мама (Sunset Sherbet + OG Kush): куш + топливо, среднее количество трихом, рост выше среднего, цветение ~65 дней. Папа (Sunset Sherbet + GMO): топливный аромат, много трихом, рост выше среднего, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
},
{
  id: 'Tropical Dream - Thin',
  name: 'Tropical Dream (Thin Phenotype)  ',
  type: 'Hybrid',
  thc: '26%',
  cbd: '0.2%',
  genetics: '(Tropical Runtz + Gelato) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$105',
  image: '/images/10-Tropical Dream - (Tropical Runtz + Gelato) + (Sunset Sherbet + GMO) - фенотип тонкий.jpg',
  effects: ['Энергия', 'Фокус', 'Эйфория'],
  flavors: ['Сыр', 'Чеснок', 'Цветочный'],
  terpenes: ['Кариофиллен', 'Мирцен'],
  description:
    'Тонкий фенотип. Мама (Tropical Runtz + Gelato): концентрированный сырный запах, много трихом, рост выше среднего, ветвистость хорошая, сативный фенотип, цветение ~60 дней. Папа (Sunset Sherbet + GMO): топливо, много трихом, рост выше среднего, цветение 70–75 дней.',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: false
},
{
  id: 'Garlic Strawberry',
  name: 'Garlic Strawberry ',
  type: 'Hybrid',
  thc: '26%',
  cbd: '0.2%',
  genetics: '(Strawberry Banana + Sunset Sherbet) + (Sunset Sherbet + GMO)',
  floweringTime: '60–75 дней',
  yield: '600g/m²',
  seeds: '5 seeds',
  price: '$100',
  image: '/images/11- Garlic Strawberry  - (StrawberryBanana + Sunset Sherbet) + (Sunset Sherbet + GMO).jpg',
  effects: ['Эйфория', 'Расслабление', 'Фокус'],
  flavors: ['Тропический', 'Ваниль', 'Топливо'],
  terpenes: ['Мирцен', 'Кариофиллен'],
  description:
    'Мама (Strawberry Banana + Sunset Sherbet): аромат розовой жвачки, клубники и топлива, среднее количество трихом, рост выше среднего, ветвистость хорошая, индика, цветение ~60 дней. Папа (Sunset Sherbet + GMO): топливо, много трихом, рост выше среднего, цветение 70–75 дней.',
  difficulty: 'Легкий',
  floweringType: 'Photoperiod',
  variety: 'Feminized',
  dateAdded: '2024-01-20',
  featured: true
},




  ///
  {
    id: 'Coffee-Kush',
    name: 'Coffee-Kush ',
    type: 'Hybrid',
    thc: '27%',
    cbd: '0.2%',
    genetics: 'Girl scout cookies * OG kush x Stone Head',
    floweringTime: '8-9 недель',
    yield: '600g/m²',
    seeds: '12 семян',
    price: '$500',
    image: '/images/coffeKush1.jpg',
    effects: ['Энергия', 'Фокус', 'Эйфория', 'Расслабление'],
    flavors: ['Сладкий', 'Пряный', 'Древесный'],
    terpenes: ['Мирцен', 'Пинен', 'Кариофиллен'],
    description: 'Coffee Kush — сорт, название которого говорит само за себя. Он обладает тонким кофейно-шоколадно-землистым ароматом, сочетающимся с глубокими, насыщенными нотами Stone Head. Этот эффект вызывает сильную вялость и упадок сил, что делает его отличным средством для сна. Особенно эффективен для снятия стресса и нервного напряжения. Урожайность: до 600 г с квадратного метра.Время цветения: 55–60 дней.В открытом грунте в южных широтах урожай созревает к концу октября.',
    difficulty: 'Легкий',
    floweringType: 'Photoperiod',
    variety: 'Regular',
    dateAdded: '2024-01-20',
    featured: false
  },
  {
    id: 'Ice Maker',
    name: 'Ice Maker',
    type: 'Hybrid',
    thc: '30%',
    cbd: '0.1%',
    genetics: 'Girl Scout Cookies X Larry OG',
    floweringTime: '8 недель',
    yield: '700-800g/m²',
    seeds: '12 семян',
    price: '$500',
    image: '/images/Ice.jpg',
    effects: ['Креативность', 'Энергия', 'Счастье', 'Расслабление'],
    flavors: ['Черника', 'Сладкий', 'Ваниль'],
    terpenes: ['Мирцен', 'Пинен', 'Кариофиллен', 'Лимонен'],
    description: 'Ice Maker был создан путём скрещивания генов Girl Scout Cookies и Larry OG с нашим афганским местным сортом, что повысило устойчивость к плесени и вредителям. Последним штрихом стало опыление нашим сортом Stone Head, которое придало мощный эффект «каменной» конопли. Аромат преимущественно сладкий, с фенотипами, возможно, с оттенками шоколада или сладких тропических фруктов, хотя возможны и тяжёлые ароматы, напоминающие гашиш. Этот эффект понравится любителям сильной «каменной» конопли, но при более раннем сборе урожая это может дать отличный гибридный опыт. Урожайность: 700–800 г с квадратного метра.Продолжительность цветения: 60–65 дней.В открытом грунте созревает к началу ноября в южных широтах.',
    difficulty: 'Легкий',
    floweringType: 'Photoperiod',
    variety: 'Regular',
    dateAdded: '2024-01-25',
    featured: false
  },
   {
    id: 'GMO',
    name: 'GMO-Kush ',
    type: 'Hybrid',
    thc: '27%',
    cbd: '0.1%',
    genetics: 'GMO x Stone Head',
    floweringTime: '7-8 недель',
    yield: '600g/m²',
    seeds: '12 семян',
    price: '$500',
    image: '/images/gmo.jpg',
    effects: ['Расслабление', 'Сон', 'Счастье', 'Эйфория'],
    flavors: ['Сладкий', 'Пряный', 'Земля'],
    terpenes: ['Мирцен', 'Кариофиллен', 'Лимонен'],
    description: ' Характеристики данного сорта на высшем уровне, урожайность, вкусовые качества, аромат, количество трихом - это все присуще данному сорту. Эффект довольно таки не предсказуемый, так как в данном сорте смесь двух разных типов. С одной стороны сильный сативный эффект с другой тяжелый стоун, в результате мы получаем мощный гибридный эффект, который может склоняться в ту или иную стороны. Запахи тяжелые: чесночный и гашишный. В конце цветения окрашивается в красные и фиолетовые цвета. Урожайность 600г на квадратный метр. Цветение занимает 65 дней, в открытом грунте готов к началу ноября  на южных широтах.',
    difficulty: 'Легкий',
    floweringType: 'Photoperiod',
    variety: 'Regular',
    dateAdded: '2024-02-01',
    featured: true
  },
  {
    id: 'hard snow',
    name: 'Hard snow ',
    type: 'Indica',
    thc: '27%',
    cbd: '0.1%',
    genetics: 'Sour × Stone Head',
    floweringTime: '7-8 недель',
    yield: '400-450g/m²',
    seeds: '12 семян',
    price: '$500',
    image: '/images/hard snow.jpg',
    effects: ['Расслабление', 'Сон', 'Счастье', 'Эйфория'],
    flavors: ['Сладкий', 'Пряный', 'Земля'],
    terpenes: ['Мирцен', 'Кариофиллен', 'Лимонен'],
    description: 'Hard Snow был создан путём скрещивания легендарной генетики Sour с нашей собственной Stone Head. В результате получилось растение с чрезвычайно высокой трихомной продуктивностью, впечатляющей урожайностью и внушительным размером. Не рекомендуется для небольших гроубоксов, так как после перехода на световой режим 12/12 высота растения может увеличиться втрое или даже вчетверо. Этот сорт — отличный выбор для тех, кто ценит чистый, сногсшибательный эффект в сочетании с ясностью ума и сосредоточенностью — чертой, унаследованной от линии Sour. Аромат насыщенный, как и плотные шишки. Структура растения позволяет свету проникать глубоко, достигая даже нижних ветвей. Урожайность: 600–800 г с квадратного метра.Время цветения: 55–60 дней.В открытом грунте в южных широтах урожайность наступает к концу октября.',
    difficulty: 'Легкий',
    floweringType: 'Photoperiod',
    variety: 'Regular',
    dateAdded: '2024-02-01',
    featured: true
  },
    {
  id: 'stone-head',
  name: 'Stone Head',
  type: 'Hybrid',
  thc: '28%',
  cbd: '0.5%',
  genetics: 'Girl Scout Cookies × Red Afghani',
  floweringTime: '55–65 дней',
  yield: '600 g/m²',
  seeds: '12 семян',
  price: '$500',
  image: '/images/StoneHeadTop.jpg',
  effects: ['Эйфория', 'Расслабление', 'Креативность', 'Фокус'],
  flavors: ['Сладкий', 'Цветочный', 'Земля'],
  terpenes: ['Мирцен', 'Лимонен', 'Кариофиллен', 'Пинен'],
  description: 'Stone Head — поистине легенда нашего производства...',
  difficulty: 'Средний',
  floweringType: 'Photoperiod',
  variety: 'Regular',
  dateAdded: '2024-02-05',
  featured: false
}
];

// Генерация автоцветущих сортов (70 штук)
// const autoflowerStrains: Strain[] = [
//   {
//     id: 'auto-northern-lights',
//     name: 'Auto Northern Lights',
//     type: 'Indica',
//     thc: '15%',
//     cbd: '0.2%',
//     genetics: 'Northern Lights × Ruderalis',
//     floweringTime: '8-10 недель от семени',
//     yield: '300-400g/m²',

//     image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//     effects: ['Расслабление', 'Сон', 'Счастье'],
//     flavors: ['Сладкий', 'Земля', 'Пряный'],
//     terpenes: ['Мирцен', 'Кариофиллен'],
//     description: 'Auto Northern Lights - автоцветущий сорт с уникальными характеристиками.',
//     difficulty: 'Легкий',
//     floweringType: 'Autoflower',
//     variety: 'Feminized',
//     dateAdded: '2024-02-10',
//     featured: true
//   },
//   {
//     id: 'auto-white-widow',
//     name: 'Auto White Widow',
//     type: 'Hybrid',
//     thc: '18%',
//     cbd: '0.3%',
//     genetics: 'White Widow × Ruderalis',
//     floweringTime: '9-11 недель от семени',
//     yield: '350-450g/m²',
//     price: '$80',
//     image: 'https://images.unsplash.com/photo-1583912267550-3c3f12d8f5d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//     effects: ['Энергия', 'Эйфория', 'Фокус'],
//     flavors: ['Сладкий', 'Древесный', 'Пряный'],
//     terpenes: ['Мирцен', 'Пинен', 'Лимонен'],
//     description: 'Auto White Widow - автоцветущий сорт с уникальными характеристиками.',
//     difficulty: 'Легкий',
//     floweringType: 'Autoflower',
//     variety: 'Feminized',
//     dateAdded: '2024-02-15',
//     featured: false
//   }
// ];

// Генерация раннецветущих сортов (70 штук)
// const earlyStrains: Strain[] = [
//   {
//     id: 'early-skunk',
//     name: 'Early Skunk',
//     type: 'Hybrid',
//     thc: '19%',
//     cbd: '0.4%',
//     genetics: 'Skunk #1 × Early Pearl',
//     floweringTime: '6-7 недель',
//     yield: '400-500g/m²',
//     price: '$95',
//     image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//     effects: ['Эйфория', 'Расслабление', 'Креативность'],
//     flavors: ['Скунс', 'Сладкий', 'Земля'],
//     terpenes: ['Мирцен', 'Кариофиллен', 'Лимонен'],
//     description: 'Early Skunk - раннецветущий сорт с уникальными характеристиками.',
//     difficulty: 'Средний',
//     floweringType: 'Early',
//     variety: 'Feminized',
//     dateAdded: '2024-02-20',
//     featured: false
//   },
//   {
//     id: 'early-girl',
//     name: 'Early Girl',
//     type: 'Sativa',
//     thc: '17%',
//     cbd: '0.2%',
//     genetics: 'Mexican × Afghani',
//     floweringTime: '7-8 недель',
//     yield: '450-550g/m²',
//     price: '$85',
//     image: 'https://images.unsplash.com/photo-1605530777224-b6c93b4b3e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
//     effects: ['Энергия', 'Счастье', 'Фокус'],
//     flavors: ['Цитрус', 'Сладкий', 'Пряный'],
//     terpenes: ['Лимонен', 'Пинен', 'Мирцен'],
//     description: 'Early Girl - раннецветущий сорт с уникальными характеристиками.',
//     difficulty: 'Легкий',
//     floweringType: 'Early',
//     variety: 'Regular',
//     dateAdded: '2024-02-25',
//     featured: true
//   }
// ];

// Функция для генерации дополнительных сортов
// Функция для работы с существующими сортами (БЕЗ генерации)
const generateMoreStrains = (
  baseStrains: Strain[],
  type: 'Photoperiod' | 'Autoflower' | 'Early',
  count: number
): Strain[] => {
  // Фильтруем по типу цветения (на всякий случай)
  const filteredStrains = baseStrains.filter(
    strain => strain.floweringType === type
  );

  // Если count = 0 или не задан — возвращаем всё
  if (!count || count <= 0) {
    return filteredStrains;
  }

  // Если count задан — возвращаем ограниченное количество
  return filteredStrains.slice(0, count);
};


// Создание полных списков сортов (по 70 каждого типа)
const fullPhotoperiodStrains = generateMoreStrains(photoperiodStrains, 'Photoperiod', 0);
// const fullAutoflowerStrains = generateMoreStrains(autoflowerStrains, 'Autoflower', 70);
// const fullEarlyStrains = generateMoreStrains(earlyStrains, 'Early', 70);

// Объединение всех сортов
export const strains: Strain[] = [
  ...fullPhotoperiodStrains,
  // ...fullAutoflowerStrains,
  // ...fullEarlyStrains
];

export default strains;