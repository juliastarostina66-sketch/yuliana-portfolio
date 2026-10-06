export type PortfolioImage = { src: string; alt: string; caption: string };

type Project = {
  id: string;
  title: string;
  shortName: string;
  category: string;
  subtitle: string;
  description: string[];
  tasks: string[];
  images: PortfolioImage[];
  outcome: { label: string; title: string; description: string };
  tags: string[];
};

// Facts and results follow the supplied HTML prototype. Qualifiers are intentional.
export const projects: Project[] = [
  {
    id: "me-me",
    title: "Me&Me",
    shortName: "Me&Me",
    category: "Fashion / Social media",
    subtitle: "Контент и продуктовые смыслы для fashion-бренда",
    description: [
      "Контент на нескольких площадках: продуктовые смыслы, идеи, контент-план, ТЗ, координация задач, сроки и аналитика.",
      "Разрабатывала и тестировала новые концепции ведения Telegram, чтобы через контент продавать не только одежду, но и сам бренд: его историю, команду и ценности. В контенте соединяла эстетику, коммерческие задачи и реальные продуктовые приоритеты.",
    ],
    tasks: [
      "4 площадки в работе: Telegram, VK, Instagram и Threads",
      "Контент-планирование и продуктовые смыслы",
      "ТЗ, координация задач и контроль сроков",
      "Конкурентный анализ, метрики и отчётность",
      "Фокусные SKU, ABC-анализ, остатки и продуктовые приоритеты",
      "В кризисный период самостоятельно поддерживала SMM-блок на нескольких площадках, сохранив регулярность контента и стабильность продаж",
    ],
    images: [
      {
        src: "/images/portfolio/me-me-product.webp",
        alt: "Me&Me: продуктовая подборка с одеждой и аксессуарами",
        caption: "Продуктовые смыслы",
      },
      {
        src: "/images/portfolio/me-me-denim.webp",
        alt: "Me&Me: визуальный контент с джинсовым образом",
        caption: "Визуальный контент",
      },
      {
        src: "/images/portfolio/me-me-campaign.webp",
        alt: "Me&Me: публикация об акции бренда",
        caption: "Коммерческая коммуникация",
      },
    ],
    outcome: {
      label: "Результат",
      title: "2 → 12 млн",
      description: "Рост охватов одной из площадок примерно за полгода работы.",
    },
    tags: ["Telegram", "VK", "Instagram", "Threads", "Продуктовый контент"],
  },
  {
    id: "lumi",
    title: "ЛЮМИ",
    shortName: "ЛЮМИ",
    category: "Wedding / Content & Visual",
    subtitle: "Контент и визуальная упаковка свадебных проектов",
    description: [
      "Отвечаю за контент, смыслы и визуальную упаковку свадебных проектов. Разрабатываю креативные концепции, сторителлинги и форматы подачи, помогаю превращать историю пары в понятную идею проекта.",
    ],
    tasks: [
      "Контент и смыслы",
      "Креативные концепции и сторителлинги",
      "Форматы подачи и визуальная упаковка",
      "Съёмки",
    ],
    images: [
      {
        src: "/images/portfolio/lumi-cover.webp",
        alt: "ЛЮМИ: визуальная концепция свадебного агентства",
        caption: "Визуальная упаковка",
      },
      {
        src: "/images/lumi/01_rebrand_1.jpg",
        alt: "ЛЮМИ: пример ребрендинга из портфолио",
        caption: "Визуальный стиль",
      },
      {
        src: "/images/lumi/03_post_1.jpg",
        alt: "ЛЮМИ: дизайн публикации свадебного проекта",
        caption: "Контент и подача",
      },
      {
        src: "/images/lumi/05_story_1.jpg",
        alt: "ЛЮМИ: оформление сторис",
        caption: "Сторителлинг",
      },
      {
        src: "/images/portfolio/lumi-profile.webp",
        alt: "ЛЮМИ: визуальная упаковка Instagram на экране телефона",
        caption: "Оформление Instagram",
      },
    ],
    outcome: {
      label: "Направления работы",
      title: "История → идея",
      description: "Контент · визуальная упаковка · концепции · съёмки.",
    },
    tags: [
      "Wedding",
      "Сторителлинг",
      "Креативные концепции",
      "Визуальная упаковка",
    ],
  },
  {
    id: "personal-brand",
    title: "Продвижение ведущего",
    shortName: "Личный бренд",
    category: "Personal brand / Instagram",
    subtitle: "От упаковки профиля до понятного пути к заявке",
    description: [
      "С нуля переупаковала Instagram, выстроила контент-воронку и сделала путь пользователя до заявки понятнее и короче.",
    ],
    tasks: [
      "Переупаковка Instagram с нуля",
      "Контент-воронка",
      "Понятный и короткий путь пользователя до заявки",
    ],
    images: [
      {
        src: "/images/portfolio/personal-brand.webp",
        alt: "Продвижение ведущего: схема работы — упаковка Instagram, контент-воронка и путь до заявки",
        caption: "Упаковка → контент → заявка",
      },
    ],
    outcome: {
      label: "Результат",
      title: "Новые клиенты",
      description: "Несколько новых клиентов за первые недели.",
    },
    tags: ["Личный бренд", "Instagram", "Контент-воронка"],
  },
  {
    id: "project-assistant",
    title: "Business / Project Assistant",
    shortName: "Проектная работа",
    category: "Coordination / MAYAK.CAMP",
    subtitle: "Контент, данные и координация нескольких проектов",
    description: [
      "Параллельно вела несколько проектов одного предпринимателя: Telegram-канал и творческий проект MAYAK.CAMP. Работала с контентом, CRM, данными, таблицами, ресёрчем и организацией процессов.",
    ],
    tasks: [
      "Контент и Telegram-канал",
      "CRM, данные и таблицы",
      "Ресёрч и организация процессов",
      "Несколько проектов одновременно",
    ],
    images: [
      {
        src: "/images/portfolio/assistant-cover.webp",
        alt: "MAYAK.CAMP: визуальный материал творческого проекта",
        caption: "Творческий проект MAYAK.CAMP",
      },
      {
        src: "/images/mayak/01_post_1.jpg",
        alt: "MAYAK.CAMP: пример публикации из портфолио",
        caption: "Контент проекта",
      },
      {
        src: "/images/mayak/02_visual_1.jpg",
        alt: "MAYAK.CAMP: визуальная подача проекта",
        caption: "Визуальная коммуникация",
      },
      {
        src: "/images/mayak/05_tg_after_1.jpg",
        alt: "MAYAK.CAMP: оформление Telegram-канала из портфолио",
        caption: "Telegram",
      },
    ],
    outcome: {
      label: "Фокус работы",
      title: "Несколько проектов",
      description:
        "Системность · данные · коммуникация · несколько проектов одновременно.",
    },
    tags: ["Координация", "Telegram", "CRM", "Данные", "Ресёрч"],
  },
];

export const skillGroups = [
  {
    title: "Контент",
    items: [
      "Контент-стратегия и планирование",
      "Продуктовые смыслы и фокусные SKU",
    ],
  },
  {
    title: "Креатив",
    items: [
      "Креативные концепции и механики",
      "Визуальная упаковка и дизайн",
      "AI в контентных задачах",
    ],
  },
  {
    title: "Аналитика",
    items: [
      "Метрики, отчётность и анализ контента",
      "Конкурентный анализ и трендвотчинг",
    ],
  },
  {
    title: "Координация",
    items: [
      "ТЗ и координация производства",
      "CRM, таблицы и структурирование данных",
    ],
  },
];
