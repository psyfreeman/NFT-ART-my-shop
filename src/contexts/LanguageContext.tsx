import React, { createContext, useContext, useState } from "react";

type Language = "ru" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // NAV
    "nav.home": "Главная",
    "nav.catalog": "Коллекция",
    "nav.cart": "Корзина",
    "nav.about": "О проекте",
    "nav.contact": "Контакты",
    "nav.checkout": "Оформление",

    // HOME HERO
    "home.hero.badge": "Свежий дроп",
    "home.hero.title": "Новая коллекция уже доступна",
    "home.hero.subtitle":
      "Поддержи искусство через коллекционирование. Оплата доступна криптой, Visa и Mastercard.",
    "home.hero.ctaPrimary": "Смотреть дроп",
    "home.hero.ctaSecondary": "Открыть корзину",

    // HOME FEATURES (new)
    "home.features.one.title": "Физические работы",
    "home.features.one.description":
      "Оригинальные произведения и номерные серии.",
    "home.features.two.title": "Свежий минт",
    "home.features.two.description":
      "Новые NFT и цифровые объекты из текущей коллекции.",
    "home.features.three.title": "Крипта и карта",
    "home.features.three.description":
      "Поддержка искусства через crypto, Visa и Mastercard.",

    // HOME FEATURES (legacy-compatible)
    "home.features.genetics.title": "Физические работы",
    "home.features.genetics.description":
      "Оригинальные произведения и номерные серии.",
    "home.features.thc.title": "Крипта и карта",
    "home.features.thc.description":
      "Поддержка искусства через crypto, Visa и Mastercard.",
    "home.features.flavors.title": "Свежий дроп",
    "home.features.flavors.description":
      "Новые работы, минты и коллекционные объекты.",

    // HOME FEATURED
    "home.featured.title": "Свежий дроп",
    "home.featured.subtitle":
      "Новые работы и цифровые объекты из текущей коллекции.",

    // CATALOG
    "catalog.title": "Коллекция",
    "catalog.subtitle":
      "Выбери работу из нового дропа и поддержи проект как коллекционер.",
    "catalog.searchPlaceholder": "Поиск по коллекции",
    "catalog.filters": "Фильтры",
    "catalog.sort": "Сортировка",
    "catalog.results": "Найдено работ",
    "catalog.empty": "Ничего не найдено",
    "catalog.clearFilters": "Сбросить фильтры",

    // CATALOG HERO
    "catalog.hero.title": "Коллекция",
    "catalog.hero.desc": "Свежий дроп работ и цифровых объектов.",

    // FILTERS
    "filters.available": "Доступность",
    "filters.priceRange": "Цена",
    "filters.style": "Стиль",
    "filters.format": "Формат",
    "filters.series": "Серия",
    "filters.all": "Все",

    // PRODUCT / ARTWORK
    "product.available": "Доступно",
    "product.reserved": "Зарезервировано",
    "product.collected": "Собрано",
    "product.price": "Цена",
    "product.series": "Серия",
    "product.format": "Формат",
    "product.style": "Стиль",
    "product.addToCart": "В корзину",
    "product.buyNow": "Поддержать сейчас",

    // CART
    "cart.title": "Корзина коллекционера",
    "cart.subtitle": "Выбранные работы и NFT для оформления.",
    "cart.empty": "Корзина пока пуста",
    "cart.continueShopping": "Вернуться к коллекции",
    "cart.checkout": "Перейти к оформлению",
    "cart.total": "Итого",

    // CART HERO
    "cart.hero.title": "Корзина коллекционера",
    "cart.hero.desc": "Выбранные работы и NFT для оформления.",

    // CHECKOUT
    "checkout.title": "Оформление",
    "checkout.subtitle":
      "Оставь свои данные, и мы свяжемся с тобой для подтверждения заказа.",
    "checkout.name": "Имя",
    "checkout.email": "Email",
    "checkout.telegram": "Telegram",
    "checkout.country": "Страна",
    "checkout.city": "Город",
    "checkout.message": "Сообщение",
    "checkout.submit": "Подтвердить заказ",
    "checkout.payment": "Оплата криптой, Visa и Mastercard",

    // CHECKOUT HERO
    "checkout.hero.title": "Оформление",
    "checkout.hero.desc": "Оставь данные для подтверждения заказа.",

    // ABOUT
    "about.title": "О проекте",
    "about.subtitle":
      "Арт-платформа для дропов, коллекций и поддержки искусства.",
    "about.description":
      "Это пространство для новых серий, минтов и прямой поддержки художественной практики.",

    // ABOUT HERO
    "about.hero.title": "О проекте",
    "about.hero.desc":
      "Поддержи искусство через коллекционирование физических работ и NFT.",

    // CONTACT
    "contact.title": "Контакты",
    "contact.subtitle":
      "Для коллекционеров, кураторов, галерей и партнёров.",
    "contact.cta": "Связаться",

    // CONTACT HERO
    "contact.hero.title": "Контакты",
    "contact.hero.desc":
      "Для коллекционеров, кураторов, галерей и партнёров.",

    // FOOTER
    "footer.rights": "Все права защищены",
    "footer.support": "Поддержать искусство",

    // PAYMENT
    "payment.crypto": "Крипта",
    "payment.card": "Visa / Mastercard",
  },

  en: {
    // NAV
    "nav.home": "Home",
    "nav.catalog": "Collection",
    "nav.cart": "Cart",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.checkout": "Checkout",

    // HOME HERO
    "home.hero.badge": "Fresh Drop",
    "home.hero.title": "The New Collection Is Live",
    "home.hero.subtitle":
      "Support the art through collecting. Payments available via crypto, Visa, and Mastercard.",
    "home.hero.ctaPrimary": "View Drop",
    "home.hero.ctaSecondary": "Open Cart",

    // HOME FEATURES (new)
    "home.features.one.title": "Physical Works",
    "home.features.one.description":
      "Original artworks and numbered series.",
    "home.features.two.title": "Fresh Mint",
    "home.features.two.description":
      "New NFTs and digital pieces from the current collection.",
    "home.features.three.title": "Crypto and Card",
    "home.features.three.description":
      "Support the art with crypto, Visa, and Mastercard.",

    // HOME FEATURES (legacy-compatible)
    "home.features.genetics.title": "Physical Works",
    "home.features.genetics.description":
      "Original artworks and numbered series.",
    "home.features.thc.title": "Crypto and Card",
    "home.features.thc.description":
      "Support the art with crypto, Visa, and Mastercard.",
    "home.features.flavors.title": "Fresh Drop",
    "home.features.flavors.description":
      "New works, mints, and collectible pieces.",

    // HOME FEATURED
    "home.featured.title": "Fresh Drop",
    "home.featured.subtitle":
      "New works and digital pieces from the current collection.",

    // CATALOG
    "catalog.title": "Collection",
    "catalog.subtitle":
      "Choose a work from the latest drop and support the project as a collector.",
    "catalog.searchPlaceholder": "Search the collection",
    "catalog.filters": "Filters",
    "catalog.sort": "Sort",
    "catalog.results": "Works found",
    "catalog.empty": "Nothing found",
    "catalog.clearFilters": "Clear Filters",

    // CATALOG HERO
    "catalog.hero.title": "Collection",
    "catalog.hero.desc": "Fresh drop of artworks and digital pieces.",

    // FILTERS
    "filters.available": "Available",
    "filters.priceRange": "Price Range",
    "filters.style": "Style",
    "filters.format": "Format",
    "filters.series": "Series",
    "filters.all": "All",

    // PRODUCT / ARTWORK
    "product.available": "Available",
    "product.reserved": "Reserved",
    "product.collected": "Collected",
    "product.price": "Price",
    "product.series": "Series",
    "product.format": "Format",
    "product.style": "Style",
    "product.addToCart": "Add to Cart",
    "product.buyNow": "Support Now",

    // CART
    "cart.title": "Collector Cart",
    "cart.subtitle": "Selected works and NFTs for checkout.",
    "cart.empty": "Your cart is empty",
    "cart.continueShopping": "Back to Collection",
    "cart.checkout": "Proceed to Checkout",
    "cart.total": "Total",

    // CART HERO
    "cart.hero.title": "Collector Cart",
    "cart.hero.desc": "Selected works and NFTs for checkout.",

    // CHECKOUT
    "checkout.title": "Checkout",
    "checkout.subtitle":
      "Leave your details and we will contact you to confirm the order.",
    "checkout.name": "Name",
    "checkout.email": "Email",
    "checkout.telegram": "Telegram",
    "checkout.country": "Country",
    "checkout.city": "City",
    "checkout.message": "Message",
    "checkout.submit": "Confirm Order",
    "checkout.payment": "Pay with crypto, Visa, and Mastercard",

    // CHECKOUT HERO
    "checkout.hero.title": "Checkout",
    "checkout.hero.desc": "Leave your details to confirm the order.",

    // ABOUT
    "about.title": "About",
    "about.subtitle":
      "An art platform for drops, collections, and supporting the practice.",
    "about.description":
      "A space for new series, mints, and direct support of the artistic process.",

    // ABOUT HERO
    "about.hero.title": "About the Project",
    "about.hero.desc":
      "Support the art through collecting physical works and NFTs.",

    // CONTACT
    "contact.title": "Contact",
    "contact.subtitle":
      "For collectors, curators, galleries, and partners.",
    "contact.cta": "Get in Touch",

    // CONTACT HERO
    "contact.hero.title": "Contact",
    "contact.hero.desc":
      "For collectors, curators, galleries, and partners.",

    // FOOTER
    "footer.rights": "All rights reserved",
    "footer.support": "Support the Art",

    // PAYMENT
    "payment.crypto": "Crypto",
    "payment.card": "Visa / Mastercard",
  },
};

const fallbackLabels: Record<string, { ru: string; en: string }> = {
  "home.features.genetics.title": {
    ru: "Физические работы",
    en: "Physical Works",
  },
  "home.features.genetics.description": {
    ru: "Оригинальные произведения и номерные серии.",
    en: "Original artworks and numbered series.",
  },
  "home.features.thc.title": {
    ru: "Крипта и карта",
    en: "Crypto and Card",
  },
  "home.features.thc.description": {
    ru: "Поддержка искусства через crypto, Visa и Mastercard.",
    en: "Support the art with crypto, Visa, and Mastercard.",
  },
  "home.features.flavors.title": {
    ru: "Свежий дроп",
    en: "Fresh Drop",
  },
  "home.features.flavors.description": {
    ru: "Новые работы, минты и коллекционные объекты.",
    en: "New works, mints, and collectible pieces.",
  },

  "about.hero.title": {
    ru: "О проекте",
    en: "About the Project",
  },
  "about.hero.desc": {
    ru: "Поддержи искусство через коллекционирование физических работ и NFT.",
    en: "Support the art through collecting physical works and NFTs.",
  },

  "catalog.hero.title": {
    ru: "Коллекция",
    en: "Collection",
  },
  "catalog.hero.desc": {
    ru: "Свежий дроп работ и цифровых объектов.",
    en: "Fresh drop of artworks and digital pieces.",
  },

  "cart.hero.title": {
    ru: "Корзина коллекционера",
    en: "Collector Cart",
  },
  "cart.hero.desc": {
    ru: "Выбранные работы и NFT для оформления.",
    en: "Selected works and NFTs for checkout.",
  },

  "checkout.hero.title": {
    ru: "Оформление",
    en: "Checkout",
  },
  "checkout.hero.desc": {
    ru: "Оставь данные для подтверждения заказа.",
    en: "Leave your details to confirm the order.",
  },

  "contact.hero.title": {
    ru: "Контакты",
    en: "Contact",
  },
  "contact.hero.desc": {
    ru: "Для коллекционеров, кураторов, галерей и партнёров.",
    en: "For collectors, curators, galleries, and partners.",
  },
};

const aliasMap: Record<string, string> = {
  "home.featured.title": "home.features.flavors.title",
  "home.featured.subtitle": "home.features.flavors.description",

  "about.title": "about.hero.title",
  "about.subtitle": "about.hero.desc",
  "about.description": "about.hero.desc",

  "catalog.title": "catalog.hero.title",
  "catalog.subtitle": "catalog.hero.desc",

  "cart.title": "cart.hero.title",
  "cart.subtitle": "cart.hero.desc",

  "checkout.title": "checkout.hero.title",
  "checkout.subtitle": "checkout.hero.desc",

  "contact.title": "contact.hero.title",
  "contact.subtitle": "contact.hero.desc",
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru");

  const humanizeKey = (key: string): string => {
    const last = key.split(".").pop() || key;

    const dictionary: Record<string, { ru: string; en: string }> = {
      title: { ru: "Заголовок", en: "Title" },
      subtitle: { ru: "Подзаголовок", en: "Subtitle" },
      desc: { ru: "Описание", en: "Description" },
      description: { ru: "Описание", en: "Description" },
      button: { ru: "Кнопка", en: "Button" },
      cta: { ru: "Действие", en: "Call to Action" },
      price: { ru: "Цена", en: "Price" },
      available: { ru: "Доступно", en: "Available" },
      contact: { ru: "Контакты", en: "Contact" },
      about: { ru: "О проекте", en: "About" },
      home: { ru: "Главная", en: "Home" },
      catalog: { ru: "Коллекция", en: "Collection" },
      cart: { ru: "Корзина", en: "Cart" },
      checkout: { ru: "Оформление", en: "Checkout" },
    };

    return dictionary[last]?.[language] || last;
  };

  const t = (key: string): string => {
    const direct = translations[language][key];
    if (direct) return direct;

    const aliasedKey = aliasMap[key];
    if (aliasedKey && translations[language][aliasedKey]) {
      return translations[language][aliasedKey];
    }

    if (aliasedKey && fallbackLabels[aliasedKey]) {
      return fallbackLabels[aliasedKey][language];
    }

    if (fallbackLabels[key]) {
      return fallbackLabels[key][language];
    }

    return humanizeKey(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}