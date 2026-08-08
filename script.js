/* =========================
  script.js
  - Footer year
  - Carousels
  - Language switcher with persistence across the whole site
========================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const translations = {
  ru: {
    common: {
      htmlLang: "ru",
      socialAria: "Social links",
      navAria: "Navigation links",
      back: "← Назад",
      instagram: "Instagram",
      telegram: "Telegram",
      prev: "Previous",
      next: "Next",
      storyDots: "Story dots",
      reviewsLinkAria: "Перейти в Telegram-канал с отзывами",
      buy: "КУПИТЬ",
      join: "ПРИСОЕДИНИТЬСЯ",
      languageLabel: "Язык сайта",
      langShortUk: "UA",
      langShortRu: "RU",
      langShortEn: "EN"
    },
    nav: {
      navAria: "Нижняя навигация",
      home: "Главная",
      homeAria: "Главная",
      chat: "Закрытый чат",
      chatAria: "Закрытый чат",
      training: "Обучение",
      trainingAria: "Обучение",
      support: "Поддержка",
      supportAria: "Поддержка"
    },
    meta: {
      homeTitle: "SK SAMURAI",
      homeDescription: "SK SAMURAI — трейдинг это профессия",
      chatTitle: "ЗАКРЫТЫЙ ЧАТ — SK SAMURAI",
      chatDescription: "SK SAMURAI — Закрытый чат",
      mentorTitle: "МЕНТОРШИП — SK SAMURAI",
      mentorDescription: "SK SAMURAI — Менторшип",
      quantumTitle: "QUANTUM — SK SAMURAI",
      quantumDescription: "SK SAMURAI — Quantum",
      trainingTitle: "ОБУЧЕНИЕ — SK SAMURAI",
      trainingDescription: "SK SAMURAI — Обучение: Менторшип и Quantum"
    },
    home: {
      heroSubtitle: "ТРЕЙДИНГ ЭТО ПРОФЕССИЯ",
      disclaimerKicker: "DISCLAIMER",
      disclaimerText: "мы не заинтересованы уговаривать никого из вас, упросить никого из вас, мы заинтересованы в тех людях, которые понимают что мы даем людям возможность, мы сами зарабатываем деньги и рады когда люди зарабатывают их с нами",
      homeAria: "Главная",
      chatAria: "Закрытый чат",
      chatTitle: "ЗАКРЫТЫЙ ЧАТ",
      chatText: "ИДЕАЛЬНО ПОДХОДИТ КАК ДЛЯ НАЧИНАЮЩИХ, ТАК И ДЛЯ ОПЫТНЫХ ТРЕЙДЕРОВ",
      chatBullet1: "Ежедневная аналитика",
      chatBullet2: "Торговые сетапы / идеи",
      chatBullet3: "Бесплатное базовое обучение",
      chatBullet4: "Чат общения с другими участниками",
      details: "Подробнее",
      mentorAria: "Менторшип",
      mentorTitle: "МЕНТОРШИП",
      mentorBullet1: "Полное изучение каждого элемента анализа SM",
      mentorBullet2: "Постоянная поддержка ментора",
      mentorBullet3: "Создание персональной торговой стратегии",
      mentorBullet4: "Работа в статике и динамике",
      mentorBullet5: "С нуля до результата",
      quantumAria: "Quantum",
      quantumTitle: "QUANTUM",
      quantumSubtitle: "ЛУЧШИЙ ВАРИАНТ ОБУЧЕНИЯ",
      quantumBullet1: "2 ментора — 2 разных подхода к рынкам",
      quantumBullet2: "2–3 лайв-созвона в неделю",
      quantumBullet3: "Разбор ваших тейков и стопов",
      quantumBullet4: "Бектест-сессии с менторами",
      quantumBullet5: "Утренняя лайв-торговля Frankfurt/London вместе с вами",
      quantumBullet6: "Разбор итогов в конце недели",
      quantumBullet7: "Каждый из вас побывает в роли ментора и продемонстрирует свой подход к аналитике и торговле"
    },
    chat: {
      sectionAria: "Детали: Закрытый чат",
      title: "ЗАКРЫТЫЙ ЧАТ",
      sub: "(ДОСТУП В ЗАКРЫТЫЙ ЧАТ)",
      desc: "ИДЕАЛЬНО ПОДХОДИТ КАК ДЛЯ НАЧИНАЮЩИХ, ТАК И ДЛЯ ОПЫТНЫХ ТРЕЙДЕРОВ",
      gets: "ВЫ ПОЛУЧАЕТЕ",
      pill1: "Сетапы и модели SK SAMURAI",
      pill2: "Утренняя лайв-торговля Frankfurt/London",
      pill3: "Отдельный чат общения среди участников, обмен мнением, вопросы по торговле",
      pill4: "Работа с личным депозитом<br />Работа с проп-счётом",
      pill5: "Обучение с нуля: 5 структурированных уроков, сопровождение от опытных участников закрытого чата",
      pill6: "Вечерний стрим по итогам недели (каждую пятницу) — разбор ошибок участников",
      storyAria: "Закрытый чат (карусель)"
    },
    mentor: {
      sectionAria: "Детали: Менторшип",
      title: "МЕНТОРШИП",
      pill1: "Один на один с ментором",
      pill2: "1–2 конференции в неделю (теория + практика с проверкой ДЗ)",
      pill3: "Углубляемся в архитектуру рынков и механику движения цены",
      pill4: "Постоянная обратная связь в течение обучения",
      pill5: "Изучаем весь концепт SK SAMURAI, используем TradingView, cTrader/MT5, счёт в проп-компании",
      pill6: "Контроль результатов",
      bigBlock: "Становление вас профитным трейдером с сильными профессиональными навыками, самостоятельная уверенная торговля, построенный долгосрочный план трейдера: цели, капитал, масштабирование",
      reviewsTitle: "ОТЗЫВЫ УЧЕНИКОВ",
      storyAria: "Отзывы (карусель)",
      price: "ЦЕНА ОБУЧЕНИЯ — 1499$"
    },
    quantum: {
      sectionAria: "Детали: QUANTUM",
      title: "QUANTUM",
      subtitle: "ЛУЧШИЙ ВАРИАНТ ОБУЧЕНИЯ",
      stat1: "2 ментора — 2 разных подхода к рынкам",
      stat2: "70+ часов общей практики",
      stat3: "20+ часов лайв-торговли",
      forWho: "ДЛЯ КОГО:",
      p1: "Вы прошли обучение или самостоятельно научились основным аспектам торговли, или вы практикующий трейдер и ваша торговля нуждается в корректировках, стремитесь создать сильную торговую систему — вы в нужном месте!",
      p2: "Наша команда подготовила для вас эксклюзивный формат практической работы, чтобы проецировать ваши сильные личностные качества в вашу трейдерскую карьеру!",
      p3: "Мы проведем вас за руку от начала пути до становления осведомлённым трейдером!",
      format: "Формат работы",
      item1: "1. Личное знакомство с вами и нашей командой",
      item2: "2. Разбираем ваши торговые стратегии, выявляем слабые стороны и вносим корректировки",
      item3: "3. Знакомим с торговой концепцией SK SAMURAI",
      item4: "4. Ознакомим вас с торговой стратегией каждого из менторов",
      item5: "5. Изучаем архитектуру рынка",
      item6: "6. Учимся понимать концепт “сильных рук” в рынке",
      item7: "7. Научим вас кристаллизировать свою торговую идею",
      item8: "8. Подготовим вас к работе с личным депозитом",
      item9: "9. Помощь в прохождении экзамена в проп-компании",
      item10: "10. Question & Answers-сессия с ответами на ваши вопросы",
      item11: "11. Вы закончите практику с полностью обновлённым мышлением",
      includes: "Что входит?",
      inc1: "— 2 лайв-созвона в неделю",
      inc2: "— торговый план на неделю",
      inc3: "— ежедневная аналитика от менторов по основным торговым инструментам",
      inc4: "— лайв-уроки по аспектам торговли всех типов рынков",
      inc5: "— мы дадим вам торговый журнал и подробно раскроем нашу торговую стратегию",
      inc6: "— разбор ваших тейков и стопов",
      inc7: "— бектест-сессии с менторами",
      inc8: "— обратная связь по всем вашим сделкам, ежедневная поддержка в чате",
      inc9: "— утренняя лайв-торговля Frankfurt/London вместе с вами",
      inc10: "— лайв-торговля американских индексов на NY",
      inc11: "— разбор итогов в конце недели",
      inc12: "— каждый из вас побывает в роли ментора, демонстрируя свой подход к аналитике и торговле",
      resultTitle: "РЕЗУЛЬТАТ",
      resultText: "Вы научитесь эффективно использовать своё время не только за чартами, но и вне их, качественно проводить аналитику рынков, ответственно принимать торговые решения. Вы перенимете лучший практический опыт наших менторов. Сформируете прибыльную гибкую адаптивную торговую стратегию, в которой будете уверены всегда!",
      reviewsTitle: "ОТЗЫВЫ УЧЕНИКОВ",
      storyAria: "Отзывы QUANTUM (карусель)",
      price: "ЦЕНА ОБУЧЕНИЯ — 2299$"
    },
    training: {
      sectionAria: "Обучение",
      title: "ОБУЧЕНИЕ",
      subtitle: "Выберите формат обучения",
      mentorAria: "Менторшип",
      mentorTitle: "МЕНТОРШИП",
      mentorText: "Личная работа один на один с ментором: построение собственной торговой стратегии с нуля до результата.",
      quantumAria: "Quantum",
      quantumTitle: "QUANTUM",
      quantumSubtitle: "ЛУЧШИЙ ВАРИАНТ ОБУЧЕНИЯ",
      quantumText: "2 ментора, лайв-созвоны, бектест-сессии и совместная утренняя лайв-торговля Frankfurt/London."
    }
  },
  uk: {
    common: {
      htmlLang: "uk",
      socialAria: "Соціальні посилання",
      navAria: "Навігаційні посилання",
      back: "← Назад",
      instagram: "Instagram",
      telegram: "Telegram",
      prev: "Попередній",
      next: "Наступний",
      storyDots: "Точки каруселі",
      reviewsLinkAria: "Перейти в Telegram-канал з відгуками",
      buy: "КУПИТИ",
      join: "ПРИЄДНАТИСЯ",
      languageLabel: "Мова сайту",
      langShortUk: "UA",
      langShortRu: "RU",
      langShortEn: "EN"
    },
    nav: {
      navAria: "Нижня навігація",
      home: "Головна",
      homeAria: "Головна",
      chat: "Закритий чат",
      chatAria: "Закритий чат",
      training: "Навчання",
      trainingAria: "Навчання",
      support: "Підтримка",
      supportAria: "Підтримка"
    },
    meta: {
      homeTitle: "SK SAMURAI",
      homeDescription: "SK SAMURAI — трейдинг це професія",
      chatTitle: "ЗАКРИТИЙ ЧАТ — SK SAMURAI",
      chatDescription: "SK SAMURAI — Закритий чат",
      mentorTitle: "МЕНТОРШИП — SK SAMURAI",
      mentorDescription: "SK SAMURAI — Менторшип",
      quantumTitle: "QUANTUM — SK SAMURAI",
      quantumDescription: "SK SAMURAI — Quantum",
      trainingTitle: "НАВЧАННЯ — SK SAMURAI",
      trainingDescription: "SK SAMURAI — Навчання: Менторшип і Quantum"
    },
    home: {
      heroSubtitle: "ТРЕЙДИНГ — ЦЕ ПРОФЕСІЯ",
      disclaimerKicker: "ДИСКЛЕЙМЕР",
      disclaimerText: "ми не зацікавлені когось із вас вмовляти чи просити, нас цікавлять люди, які розуміють, що ми даємо можливість, ми самі заробляємо гроші й раді, коли люди заробляють їх разом із нами",
      homeAria: "Головна",
      chatAria: "Закритий чат",
      chatTitle: "ЗАКРИТИЙ ЧАТ",
      chatText: "ІДЕАЛЬНО ПІДХОДИТЬ ЯК ДЛЯ ПОЧАТКІВЦІВ, ТАК І ДЛЯ ДОСВІДЧЕНИХ ТРЕЙДЕРІВ",
      chatBullet1: "Щоденна аналітика",
      chatBullet2: "Торгові сетапи / ідеї",
      chatBullet3: "Безкоштовне базове навчання",
      chatBullet4: "Чат спілкування з іншими учасниками",
      details: "Детальніше",
      mentorAria: "Менторшип",
      mentorTitle: "МЕНТОРШИП",
      mentorBullet1: "Повне вивчення кожного елемента аналізу SM",
      mentorBullet2: "Постійна підтримка ментора",
      mentorBullet3: "Створення персональної торгової стратегії",
      mentorBullet4: "Робота у статиці та динаміці",
      mentorBullet5: "З нуля до результату",
      quantumAria: "Quantum",
      quantumTitle: "QUANTUM",
      quantumSubtitle: "НАЙКРАЩИЙ ВАРІАНТ НАВЧАННЯ",
      quantumBullet1: "2 ментори — 2 різні підходи до ринків",
      quantumBullet2: "2–3 лайв-дзвінки на тиждень",
      quantumBullet3: "Розбір ваших тейків і стопів",
      quantumBullet4: "Бектест-сесії з менторами",
      quantumBullet5: "Ранкова лайв-торгівля Frankfurt/London разом із вами",
      quantumBullet6: "Розбір підсумків наприкінці тижня",
      quantumBullet7: "Кожен із вас побуває в ролі ментора та продемонструє свій підхід до аналітики й торгівлі"
    },
    chat: {
      sectionAria: "Деталі: Закритий чат",
      title: "ЗАКРИТИЙ ЧАТ",
      sub: "(ДОСТУП У ЗАКРИТИЙ ЧАТ)",
      desc: "ІДЕАЛЬНО ПІДХОДИТЬ ЯК ДЛЯ ПОЧАТКІВЦІВ, ТАК І ДЛЯ ДОСВІДЧЕНИХ ТРЕЙДЕРІВ",
      gets: "ВИ ОТРИМУЄТЕ",
      pill1: "Сетапи та моделі SK SAMURAI",
      pill2: "Ранкова лайв-торгівля Frankfurt/London",
      pill3: "Окремий чат спілкування між учасниками, обмін думками, запитання щодо торгівлі",
      pill4: "Робота з особистим депозитом<br />Робота з проп-рахунком",
      pill5: "Навчання з нуля: 5 структурованих уроків, супровід від досвідчених учасників закритого чату",
      pill6: "Вечірній стрим за підсумками тижня (щоп’ятниці) — розбір помилок учасників",
      storyAria: "Закритий чат (карусель)"
    },
    mentor: {
      sectionAria: "Деталі: Менторшип",
      title: "МЕНТОРШИП",
      pill1: "Один на один із ментором",
      pill2: "1–2 конференції на тиждень (теорія + практика з перевіркою ДЗ)",
      pill3: "Заглиблюємося в архітектуру ринків і механіку руху ціни",
      pill4: "Постійний зворотний зв’язок протягом навчання",
      pill5: "Вивчаємо весь концепт SK SAMURAI, використовуємо TradingView, cTrader/MT5, рахунок у проп-компанії",
      pill6: "Контроль результатів",
      bigBlock: "Формування вас як прибуткового трейдера з сильними професійними навичками, самостійна впевнена торгівля, побудований довгостроковий план трейдера: цілі, капітал, масштабування",
      reviewsTitle: "ВІДГУКИ УЧНІВ",
      storyAria: "Відгуки (карусель)",
      price: "ЦІНА НАВЧАННЯ — 1499$"
    },
    quantum: {
      sectionAria: "Деталі: QUANTUM",
      title: "QUANTUM",
      subtitle: "НАЙКРАЩИЙ ВАРІАНТ НАВЧАННЯ",
      stat1: "2 ментори — 2 різні підходи до ринків",
      stat2: "70+ годин загальної практики",
      stat3: "20+ годин лайв-торгівлі",
      forWho: "ДЛЯ КОГО:",
      p1: "Ви пройшли навчання або самостійно опанували основні аспекти торгівлі, або ви практикуючий трейдер і ваша торгівля потребує коригування, прагнете створити сильну торгову систему — ви в правильному місці!",
      p2: "Наша команда підготувала для вас ексклюзивний формат практичної роботи, щоб проєктувати ваші сильні особистісні якості у вашу трейдерську кар’єру!",
      p3: "Ми проведемо вас за руку від початку шляху до становлення свідомим трейдером!",
      format: "Формат роботи",
      item1: "1. Особисте знайомство з вами та нашою командою",
      item2: "2. Розбираємо ваші торгові стратегії, виявляємо слабкі сторони та вносимо коригування",
      item3: "3. Знайомимо з торговою концепцією SK SAMURAI",
      item4: "4. Ознайомимо вас із торговою стратегією кожного з менторів",
      item5: "5. Вивчаємо архітектуру ринку",
      item6: "6. Вчимося розуміти концепт “сильних рук” на ринку",
      item7: "7. Навчимо вас кристалізувати свою торгову ідею",
      item8: "8. Підготуємо вас до роботи з особистим депозитом",
      item9: "9. Допомога у проходженні іспиту в проп-компанії",
      item10: "10. Question & Answers-сесія з відповідями на ваші запитання",
      item11: "11. Ви завершите практику з повністю оновленим мисленням",
      includes: "Що входить?",
      inc1: "— 2 лайв-дзвінки на тиждень",
      inc2: "— торговий план на тиждень",
      inc3: "— щоденна аналітика від менторів щодо основних торгових інструментів",
      inc4: "— лайв-уроки щодо аспектів торгівлі всіх типів ринків",
      inc5: "— ми дамо вам торговий журнал і детально розкриємо нашу торгову стратегію",
      inc6: "— розбір ваших тейків і стопів",
      inc7: "— бектест-сесії з менторами",
      inc8: "— зворотний зв’язок щодо всіх ваших угод, щоденна підтримка в чаті",
      inc9: "— ранкова лайв-торгівля Frankfurt/London разом із вами",
      inc10: "— лайв-торгівля американськими індексами на NY",
      inc11: "— розбір підсумків наприкінці тижня",
      inc12: "— кожен із вас побуває в ролі ментора, демонструючи свій підхід до аналітики й торгівлі",
      resultTitle: "РЕЗУЛЬТАТ",
      resultText: "Ви навчитеся ефективно використовувати свій час не лише за чартами, а й поза ними, якісно проводити аналітику ринків, відповідально приймати торгові рішення. Ви переймете найкращий практичний досвід наших менторів. Сформуєте прибуткову гнучку адаптивну торгову стратегію, у якій будете впевнені завжди!",
      reviewsTitle: "ВІДГУКИ УЧНІВ",
      storyAria: "Відгуки QUANTUM (карусель)",
      price: "ЦІНА НАВЧАННЯ — 2299$"
    },
    training: {
      sectionAria: "Навчання",
      title: "НАВЧАННЯ",
      subtitle: "Оберіть формат навчання",
      mentorAria: "Менторшип",
      mentorTitle: "МЕНТОРШИП",
      mentorText: "Особиста робота один на один із ментором: побудова власної торгової стратегії з нуля до результату.",
      quantumAria: "Quantum",
      quantumTitle: "QUANTUM",
      quantumSubtitle: "НАЙКРАЩИЙ ВАРІАНТ НАВЧАННЯ",
      quantumText: "2 ментори, лайв-дзвінки, бектест-сесії та спільна ранкова лайв-торгівля Frankfurt/London."
    }
  },
  en: {
    common: {
      htmlLang: "en",
      socialAria: "Social links",
      navAria: "Navigation links",
      back: "← Back",
      instagram: "Instagram",
      telegram: "Telegram",
      prev: "Previous",
      next: "Next",
      storyDots: "Carousel dots",
      reviewsLinkAria: "Open the Telegram reviews channel",
      buy: "BUY",
      join: "JOIN",
      languageLabel: "Site language",
      langShortUk: "UA",
      langShortRu: "RU",
      langShortEn: "EN"
    },
    nav: {
      navAria: "Bottom navigation",
      home: "Home",
      homeAria: "Home",
      chat: "Private chat",
      chatAria: "Private chat",
      training: "Training",
      trainingAria: "Training",
      support: "Support",
      supportAria: "Support"
    },
    meta: {
      homeTitle: "SK SAMURAI",
      homeDescription: "SK SAMURAI — trading is a profession",
      chatTitle: "PRIVATE CHAT — SK SAMURAI",
      chatDescription: "SK SAMURAI — Private chat",
      mentorTitle: "MENTORSHIP — SK SAMURAI",
      mentorDescription: "SK SAMURAI — Mentorship",
      quantumTitle: "QUANTUM — SK SAMURAI",
      quantumDescription: "SK SAMURAI — Quantum",
      trainingTitle: "TRAINING — SK SAMURAI",
      trainingDescription: "SK SAMURAI — Training: Mentorship and Quantum"
    },
    home: {
      heroSubtitle: "TRADING IS A PROFESSION",
      disclaimerKicker: "DISCLAIMER",
      disclaimerText: "we are not interested in persuading or begging anyone here; we are interested in people who understand that we give people an opportunity, we make money ourselves and we are glad when people earn with us",
      homeAria: "Home",
      chatAria: "Private chat",
      chatTitle: "PRIVATE CHAT",
      chatText: "PERFECT FOR BOTH BEGINNERS AND EXPERIENCED TRADERS",
      chatBullet1: "Daily analytics",
      chatBullet2: "Trading setups / ideas",
      chatBullet3: "Free basic training",
      chatBullet4: "Community chat with other members",
      details: "Learn more",
      mentorAria: "Mentorship",
      mentorTitle: "MENTORSHIP",
      mentorBullet1: "Complete study of every SM analysis element",
      mentorBullet2: "Ongoing mentor support",
      mentorBullet3: "Building a personal trading strategy",
      mentorBullet4: "Work in static and dynamic market conditions",
      mentorBullet5: "From zero to result",
      quantumAria: "Quantum",
      quantumTitle: "QUANTUM",
      quantumSubtitle: "THE BEST LEARNING OPTION",
      quantumBullet1: "2 mentors — 2 different market approaches",
      quantumBullet2: "2–3 live calls per week",
      quantumBullet3: "Review of your takes and stops",
      quantumBullet4: "Backtest sessions with mentors",
      quantumBullet5: "Morning live Frankfurt/London trading together with you",
      quantumBullet6: "Weekly wrap-up review",
      quantumBullet7: "Each of you will step into the mentor role and demonstrate your approach to analysis and trading"
    },
    chat: {
      sectionAria: "Details: Private chat",
      title: "PRIVATE CHAT",
      sub: "(ACCESS TO THE PRIVATE CHAT)",
      desc: "PERFECT FOR BOTH BEGINNERS AND EXPERIENCED TRADERS",
      gets: "YOU GET",
      pill1: "SK SAMURAI setups and models",
      pill2: "Morning live Frankfurt/London trading",
      pill3: "A separate members chat for communication, idea exchange, and trading questions",
      pill4: "Working with a personal deposit<br />Working with a prop account",
      pill5: "Training from scratch: 5 structured lessons with support from experienced private-chat members",
      pill6: "Weekly evening stream every Friday — review of participants’ mistakes",
      storyAria: "Private chat (carousel)"
    },
    mentor: {
      sectionAria: "Details: Mentorship",
      title: "MENTORSHIP",
      pill1: "One-on-one with a mentor",
      pill2: "1–2 sessions per week (theory + practice with homework review)",
      pill3: "Deep dive into market architecture and price movement mechanics",
      pill4: "Continuous feedback throughout the training",
      pill5: "We study the full SK SAMURAI concept, using TradingView, cTrader/MT5, and a prop-firm account",
      pill6: "Results control",
      bigBlock: "Your path to becoming a profitable trader with strong professional skills, confident independent trading, and a long-term trader plan: goals, capital, and scaling",
      reviewsTitle: "STUDENT REVIEWS",
      storyAria: "Reviews (carousel)",
      price: "TRAINING PRICE — $1499"
    },
    quantum: {
      sectionAria: "Details: QUANTUM",
      title: "QUANTUM",
      subtitle: "THE BEST LEARNING OPTION",
      stat1: "2 mentors — 2 different market approaches",
      stat2: "70+ hours of total practice",
      stat3: "20+ hours of live trading",
      forWho: "WHO IS IT FOR:",
      p1: "You have completed training or learned the core aspects of trading on your own, or you are a practicing trader whose trading needs adjustment and you want to build a strong trading system — you are in the right place!",
      p2: "Our team has prepared an exclusive hands-on format to help project your strongest personal qualities into your trading career!",
      p3: "We will guide you by the hand from the beginning of your journey to becoming a knowledgeable trader!",
      format: "How we work",
      item1: "1. Personal introduction to you and our team",
      item2: "2. We review your trading strategies, identify weak points, and make adjustments",
      item3: "3. We introduce the SK SAMURAI trading concept",
      item4: "4. We familiarize you with each mentor’s trading strategy",
      item5: "5. We study market architecture",
      item6: "6. We learn to understand the concept of “strong hands” in the market",
      item7: "7. We teach you how to crystallize your trading idea",
      item8: "8. We prepare you to work with your personal deposit",
      item9: "9. Help with passing a prop-firm challenge",
      item10: "10. Question & Answers session with answers to your questions",
      item11: "11. You will finish the practice with a fully renewed mindset",
      includes: "What’s included?",
      inc1: "— 2 live calls per week",
      inc2: "— weekly trading plan",
      inc3: "— daily analytics from mentors on major trading instruments",
      inc4: "— live lessons on trading aspects across all market types",
      inc5: "— we provide you with a trading journal and explain our trading strategy in detail",
      inc6: "— review of your takes and stops",
      inc7: "— backtest sessions with mentors",
      inc8: "— feedback on all your trades and daily chat support",
      inc9: "— morning live Frankfurt/London trading together with you",
      inc10: "— live trading of US indices in NY",
      inc11: "— end-of-week review",
      inc12: "— each of you will step into the mentor role, demonstrating your approach to analysis and trading",
      resultTitle: "RESULT",
      resultText: "You will learn to use your time effectively not only at the charts but also away from them, perform high-quality market analysis, and make responsible trading decisions. You will absorb the best practical experience from our mentors. You will build a profitable, flexible, adaptive trading strategy that you can always trust!",
      reviewsTitle: "STUDENT REVIEWS",
      storyAria: "QUANTUM reviews (carousel)",
      price: "TRAINING PRICE — $2299"
    },
    training: {
      sectionAria: "Training",
      title: "TRAINING",
      subtitle: "Choose your training format",
      mentorAria: "Mentorship",
      mentorTitle: "MENTORSHIP",
      mentorText: "One-on-one work with a mentor: build your own trading strategy from scratch to results.",
      quantumAria: "Quantum",
      quantumTitle: "QUANTUM",
      quantumSubtitle: "THE BEST TRAINING OPTION",
      quantumText: "2 mentors, live calls, backtest sessions and joint morning live Frankfurt/London trading."
    }
  }
};

const LANGUAGE_META = {
  uk: { code: "UA", flag: "🇺🇦" },
  ru: { code: "RU", flag: "🇷🇺" },
  en: { code: "EN", flag: "🇬🇧" }
};

function getLanguage() {
  const saved = localStorage.getItem("siteLanguage");
  return ["uk", "ru", "en"].includes(saved) ? saved : "ru";
}

function setLanguage(lang) {
  const language = ["uk", "ru", "en"].includes(lang) ? lang : "ru";
  localStorage.setItem("siteLanguage", language);
  applyTranslations(language);
}

function t(lang, key) {
  return key.split(".").reduce((obj, part) => (obj ? obj[part] : undefined), translations[lang]);
}

function applyTranslations(lang) {
  const page = document.body.dataset.page;
  document.documentElement.lang = t(lang, "common.htmlLang") || lang;

  const titleKey = page === "home" ? "meta.homeTitle" : `meta.${page}Title`;
  const descriptionKey = page === "home" ? "meta.homeDescription" : `meta.${page}Description`;
  const title = t(lang, titleKey);
  const description = t(lang, descriptionKey);

  if (title) document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && description) metaDescription.setAttribute("content", description);

  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = t(lang, key);
    if (typeof value === "string") el.textContent = value;
  });

  $$('[data-i18n-html]').forEach((el) => {
    const key = el.dataset.i18nHtml;
    const value = t(lang, key);
    if (typeof value === "string") el.innerHTML = value;
  });

  $$('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    const value = t(lang, key);
    if (typeof value === "string") el.setAttribute("aria-label", value);
  });

  $$('[data-i18n-title]').forEach((el) => {
    const key = el.dataset.i18nTitle;
    const value = t(lang, key);
    if (typeof value === "string") el.setAttribute("title", value);
  });

  $$('[data-lang-btn]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.langBtn === lang);
  });

  const currentFlag = $('[data-lang-current-flag]');
  const currentCode = $('[data-lang-current-code]');
  const currentLanguageMeta = LANGUAGE_META[lang] || LANGUAGE_META.ru;

  if (currentFlag) currentFlag.textContent = currentLanguageMeta.flag;
  if (currentCode) currentCode.textContent = currentLanguageMeta.code;
}

document.addEventListener("DOMContentLoaded", () => {
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  const langDropdown = $('[data-lang-dropdown]');
  const langTrigger = $('[data-lang-trigger]');
  const langMenu = $('[data-lang-menu]');

  function closeLanguageMenu() {
    if (!langTrigger || !langMenu) return;
    langTrigger.classList.remove('is-open');
    langTrigger.setAttribute('aria-expanded', 'false');
    langMenu.hidden = true;
  }

  function openLanguageMenu() {
    if (!langTrigger || !langMenu) return;
    langTrigger.classList.add('is-open');
    langTrigger.setAttribute('aria-expanded', 'true');
    langMenu.hidden = false;
  }

  if (langTrigger && langMenu && langDropdown) {
    closeLanguageMenu();

    langTrigger.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = !langMenu.hidden;
      if (isOpen) closeLanguageMenu();
      else openLanguageMenu();
    });

    document.addEventListener('click', (event) => {
      if (!langDropdown.contains(event.target)) closeLanguageMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLanguageMenu();
    });
  }

  $$('[data-lang-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.langBtn);
      closeLanguageMenu();
    });
  });

  function initStoryCarousel({ trackSel, viewportSel, dotsSel, prevSel, nextSel }) {
    const track = $(trackSel);
    const viewport = $(viewportSel);
    const dotsWrap = $(dotsSel);
    const btnPrev = $(prevSel);
    const btnNext = $(nextSel);

    if (!track || !viewport || !dotsWrap) return;

    let index = 0;
    const slides = () => $$(".story__slide", track);

    function clamp(n, min, max) {
      return Math.max(min, Math.min(max, n));
    }

    function renderDots() {
      dotsWrap.innerHTML = "";
      slides().forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = "story__dot" + (i === index ? " is-active" : "");
        dot.addEventListener("click", () => goTo(i));
        dotsWrap.appendChild(dot);
      });
    }

    function goTo(i) {
      const s = slides();
      if (s.length === 0) return;
      index = clamp(i, 0, s.length - 1);
      track.style.transform = `translateX(-${index * 100}%)`;
      renderDots();
    }

    if (btnPrev) btnPrev.addEventListener("click", () => goTo(index - 1));
    if (btnNext) btnNext.addEventListener("click", () => goTo(index + 1));

    let startX = 0;
    let dragging = false;

    viewport.addEventListener("touchstart", (e) => {
      dragging = true;
      startX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener("touchend", (e) => {
      if (!dragging) return;
      dragging = false;
      const endX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : startX;
      const dx = endX - startX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) goTo(index + 1);
        else goTo(index - 1);
      }
    });

    goTo(0);
  }

  initStoryCarousel({
    trackSel: "[data-story-track]",
    viewportSel: "[data-story-viewport]",
    dotsSel: "[data-story-dots]",
    prevSel: "[data-story-prev]",
    nextSel: "[data-story-next]"
  });

  initStoryCarousel({
    trackSel: "[data-story-track-2]",
    viewportSel: "[data-story-viewport-2]",
    dotsSel: "[data-story-dots-2]",
    prevSel: "[data-story-prev-2]",
    nextSel: "[data-story-next-2]"
  });

  initStoryCarousel({
    trackSel: "[data-story-track-3]",
    viewportSel: "[data-story-viewport-3]",
    dotsSel: "[data-story-dots-3]",
    prevSel: "[data-story-prev-3]",
    nextSel: "[data-story-next-3]"
  });

  applyTranslations(getLanguage());
});
