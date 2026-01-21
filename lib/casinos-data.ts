export interface Casino {
  id: string
  rank: number
  name: string
  slug: string
  logo: string
  rating: number
  games: string
  gamesCount: number
  bonus: string
  bonusAmount: string
  bonusPercentage: number
  payoutTime: string
  license: string
  licenseNumber: string
  features: string[]
  isTopRated: boolean
  description: string
  pros: string[]
  cons: string[]
  depositMethods: string[]
  withdrawalMethods: string[]
  minDeposit: string
  maxWithdrawal: string
  currencies: string[]
  languages: string[]
  customerSupport: string[]
  mobileApp: boolean
  liveChat: boolean
  established: number
  softwareProviders: string[]
  affiliateUrl?: string
  showInRankings?: boolean
}

export const casinos: Casino[] = [
  {
    id: "betplay",
    rank: 1,
    name: "Betplay",
    slug: "betplay",
    logo: "/images/betplay.jpg",
    affiliateUrl: "https://betplay.com.co/",
    rating: 9.8,
    games: "2,500+",
    gamesCount: 2500,
    bonus: "100% Bono",
    bonusAmount: "Hasta 500,000 COP",
    bonusPercentage: 100,
    payoutTime: "-24h",
    license: "Coljuegos",
    licenseNumber: "COD019431",
    features: ["Retiros rápidos", "App móvil", "Casino en vivo"],
    isTopRated: true,
    description: "Betplay es el casino online líder en Colombia, ofreciendo una experiencia de juego premium con más de 2,500 juegos, bonos generosos y retiros ultrarrápidos. Regulado por Coljuegos, garantiza seguridad total.",
    pros: [
      "Retiros en menos de 24 horas",
      "Aplicación móvil nativa iOS/Android",
      "Más de 2,500 juegos disponibles",
      "Soporte 24/7 en español",
      "Programa VIP exclusivo"
    ],
    cons: [
      "Bono de bienvenida con requisitos de apuesta",
      "Algunas promociones limitadas geográficamente"
    ],
    depositMethods: ["PSE", "Efecty", "Baloto", "Nequi", "Daviplata", "Visa", "Mastercard"],
    withdrawalMethods: ["PSE", "Transferencia bancaria", "Nequi", "Daviplata"],
    minDeposit: "20,000 COP",
    maxWithdrawal: "50,000,000 COP",
    currencies: ["COP"],
    languages: ["Español"],
    customerSupport: ["Chat en vivo", "Email", "Teléfono", "WhatsApp"],
    mobileApp: true,
    liveChat: true,
    established: 2018,
    softwareProviders: ["Evolution Gaming", "Pragmatic Play", "NetEnt", "Microgaming", "Play'n GO"]
  },
  {
    id: "wplay",
    rank: 2,
    name: "Wplay",
    slug: "wplay",
    logo: "/images/wplay.png",
    affiliateUrl: "https://wplay.co/",
    rating: 9.7,
    games: "2,000+",
    gamesCount: 2000,
    bonus: "100% Bono",
    bonusAmount: "Hasta 200,000 COP",
    bonusPercentage: 100,
    payoutTime: "24-72h",
    license: "Coljuegos",
    licenseNumber: "COD019632",
    features: ["Soporte 24/7", "Programa VIP", "Casino en vivo"],
    isTopRated: false,
    description: "Wplay es uno de los operadores más confiables de Colombia con una excelente selección de juegos de casino y deportes. Su programa de lealtad y servicio al cliente lo destacan en el mercado.",
    pros: [
      "Programa de fidelidad muy completo",
      "Excelente sección de apuestas deportivas",
      "Soporte al cliente excepcional",
      "Amplia variedad de métodos de pago"
    ],
    cons: [
      "Tiempo de retiro puede ser hasta 72h",
      "Bono de bienvenida menor que competidores"
    ],
    depositMethods: ["PSE", "Efecty", "Baloto", "Nequi", "Daviplata", "Visa", "Mastercard"],
    withdrawalMethods: ["PSE", "Transferencia bancaria", "Nequi"],
    minDeposit: "10,000 COP",
    maxWithdrawal: "30,000,000 COP",
    currencies: ["COP"],
    languages: ["Español"],
    customerSupport: ["Chat en vivo", "Email", "Teléfono"],
    mobileApp: true,
    liveChat: true,
    established: 2017,
    softwareProviders: ["Evolution Gaming", "Pragmatic Play", "Playtech", "Red Tiger"]
  },
  {
    id: "rushbet",
    rank: 3,
    name: "Rushbet",
    slug: "rushbet",
    logo: "/images/rushbet.png",
    affiliateUrl: "https://rushbet.co/",
    rating: 9.5,
    games: "1,800+",
    gamesCount: 1800,
    bonus: "100% Bono",
    bonusAmount: "Hasta 250,000 COP",
    bonusPercentage: 100,
    payoutTime: "-24h",
    license: "Coljuegos",
    licenseNumber: "COD019431",
    features: ["Cashback", "Pagos rápidos", "Casino en vivo"],
    isTopRated: false,
    description: "Rushbet destaca por sus pagos ultrarrápidos y su programa de cashback. Ideal para jugadores que valoran retiros inmediatos y promociones constantes.",
    pros: [
      "Retiros procesados en menos de 24h",
      "Cashback semanal garantizado",
      "Interfaz muy intuitiva",
      "Buena selección de slots"
    ],
    cons: [
      "Catálogo de juegos menor que líderes",
      "App móvil en desarrollo"
    ],
    depositMethods: ["PSE", "Efecty", "Nequi", "Daviplata", "Visa", "Mastercard"],
    withdrawalMethods: ["PSE", "Transferencia bancaria", "Nequi"],
    minDeposit: "15,000 COP",
    maxWithdrawal: "40,000,000 COP",
    currencies: ["COP"],
    languages: ["Español"],
    customerSupport: ["Chat en vivo", "Email"],
    mobileApp: false,
    liveChat: true,
    established: 2019,
    softwareProviders: ["Pragmatic Play", "Evolution Gaming", "Betsoft", "Yggdrasil"]
  },
  {
    id: "betsson",
    rank: 4,
    name: "Betsson",
    slug: "betsson",
    logo: "/images/betsson.webp",
    affiliateUrl: "https://betsson.co/",
    rating: 9.3,
    games: "2,200+",
    gamesCount: 2200,
    bonus: "100% Bono",
    bonusAmount: "Hasta 250,000 COP",
    bonusPercentage: 100,
    payoutTime: "-48h",
    license: "Coljuegos",
    licenseNumber: "No.19735",
    features: ["Gran variedad", "App móvil", "Promociones"],
    isTopRated: false,
    description: "Betsson es una marca internacional con décadas de experiencia. Ofrece una plataforma robusta con miles de juegos y un servicio de calidad reconocido mundialmente.",
    pros: [
      "Marca internacional de confianza",
      "Más de 2,200 juegos",
      "Excelente app móvil",
      "Promociones regulares"
    ],
    cons: [
      "Tiempo de retiro hasta 48h",
      "Bonos con requisitos algo altos"
    ],
    depositMethods: ["PSE", "Efecty", "Baloto", "Nequi", "Visa", "Mastercard", "Skrill"],
    withdrawalMethods: ["PSE", "Transferencia bancaria", "Skrill"],
    minDeposit: "20,000 COP",
    maxWithdrawal: "60,000,000 COP",
    currencies: ["COP", "USD"],
    languages: ["Español", "Inglés"],
    customerSupport: ["Chat en vivo", "Email", "Teléfono"],
    mobileApp: true,
    liveChat: true,
    established: 2001,
    softwareProviders: ["NetEnt", "Microgaming", "Evolution Gaming", "Play'n GO", "Quickspin"]
  },
  {
    id: "luckia",
    rank: 5,
    name: "Luckia",
    slug: "luckia",
    logo: "/images/luckia.png",
    affiliateUrl: "https://luckia.co/",
    rating: 9.1,
    games: "1,500+",
    gamesCount: 1500,
    bonus: "100% Bono",
    bonusAmount: "Hasta 150,000 COP",
    bonusPercentage: 100,
    payoutTime: "24-48h",
    license: "Coljuegos",
    licenseNumber: "008624",
    features: ["Fácil de usar", "Buen soporte", "Casino en vivo"],
    isTopRated: false,
    description: "Luckia ofrece una experiencia de casino accesible y fácil de usar, ideal para principiantes. Su soporte al cliente es altamente valorado por los usuarios.",
    pros: [
      "Plataforma muy fácil de usar",
      "Soporte al cliente excelente",
      "Ideal para principiantes",
      "Bonos accesibles"
    ],
    cons: [
      "Catálogo de juegos más limitado",
      "Bono de bienvenida menor"
    ],
    depositMethods: ["PSE", "Efecty", "Nequi", "Visa", "Mastercard"],
    withdrawalMethods: ["PSE", "Transferencia bancaria"],
    minDeposit: "10,000 COP",
    maxWithdrawal: "25,000,000 COP",
    currencies: ["COP"],
    languages: ["Español"],
    customerSupport: ["Chat en vivo", "Email", "Teléfono"],
    mobileApp: true,
    liveChat: true,
    established: 2014,
    softwareProviders: ["Playtech", "Evolution Gaming", "Pragmatic Play"]
  },
  {
    id: "melbet",
    rank: 6,
    name: "MelBet",
    slug: "melbet",
    logo: "/images/melbet.jpg",
    affiliateUrl: "https://clearpointservices.space/C4WhLg",
    showInRankings: false,
    rating: 9.0,
    games: "3,000+",
    gamesCount: 3000,
    bonus: "100% Bono",
    bonusAmount: "Hasta 350,000 COP",
    bonusPercentage: 100,
    payoutTime: "24-48h",
    license: "Coljuegos",
    licenseNumber: "COD020145",
    features: ["Gran catálogo", "Criptomonedas", "Casino en vivo"],
    isTopRated: false,
    description: "MelBet ofrece una de las bibliotecas de juegos más grandes del mercado colombiano con más de 3,000 títulos. Destaca por aceptar criptomonedas y tener un excelente casino en vivo.",
    pros: [
      "Más de 3,000 juegos disponibles",
      "Acepta criptomonedas (Bitcoin, Ethereum)",
      "Casino en vivo muy completo",
      "Cuotas competitivas en deportes"
    ],
    cons: [
      "Interfaz algo compleja para principiantes",
      "Verificación puede tomar tiempo"
    ],
    depositMethods: ["PSE", "Efecty", "Bitcoin", "Ethereum", "Nequi", "Visa", "Mastercard"],
    withdrawalMethods: ["PSE", "Transferencia bancaria", "Bitcoin", "Ethereum"],
    minDeposit: "15,000 COP",
    maxWithdrawal: "45,000,000 COP",
    currencies: ["COP", "USD", "BTC", "ETH"],
    languages: ["Español", "Inglés", "Portugués"],
    customerSupport: ["Chat en vivo", "Email", "Telegram"],
    mobileApp: true,
    liveChat: true,
    established: 2012,
    softwareProviders: ["Evolution Gaming", "Pragmatic Play", "Microgaming", "Betsoft", "Playson", "Endorphina"]
  }
]

export const bonuses = [
  {
    id: "bono-bienvenida",
    title: "Bonos de Bienvenida",
    description: "Los bonos de bienvenida son la forma más común de atraer nuevos jugadores. Generalmente duplican tu primer depósito hasta un monto máximo.",
    icon: "gift",
    tips: [
      "Lee siempre los términos y condiciones",
      "Verifica los requisitos de apuesta (rollover)",
      "Comprueba el tiempo límite para usar el bono",
      "Algunos juegos contribuyen diferente al rollover"
    ]
  },
  {
    id: "giros-gratis",
    title: "Giros Gratis",
    description: "Los free spins te permiten jugar tragamonedas sin arriesgar tu dinero. Perfectos para probar nuevos juegos.",
    icon: "rotate",
    tips: [
      "Pueden venir solos o con bonos de depósito",
      "Normalmente válidos en slots específicos",
      "Las ganancias suelen tener rollover",
      "Verifica el valor de cada giro"
    ]
  },
  {
    id: "cashback",
    title: "Cashback",
    description: "El cashback te devuelve un porcentaje de tus pérdidas. Es una red de seguridad que minimiza el riesgo.",
    icon: "refresh",
    tips: [
      "Porcentajes típicos: 5% - 20%",
      "Puede ser diario, semanal o mensual",
      "Algunos son sin requisitos de apuesta",
      "Revisa los límites máximos de devolución"
    ]
  },
  {
    id: "programa-vip",
    title: "Programas VIP",
    description: "Los programas de lealtad recompensan a los jugadores frecuentes con puntos canjeables, bonos exclusivos y beneficios premium.",
    icon: "crown",
    tips: [
      "Acumula puntos con cada apuesta",
      "Niveles más altos = mejores beneficios",
      "Pueden incluir gerente de cuenta personal",
      "Retiros más rápidos para miembros VIP"
    ]
  }
]

export const faqItems = [
  {
    question: "¿Es legal jugar en casinos online en Colombia?",
    answer: "Sí, es completamente legal jugar en casinos online autorizados por Coljuegos. Estos operadores cumplen con todas las regulaciones colombianas y garantizan un entorno de juego seguro y transparente. Solo debes asegurarte de que el casino tenga licencia válida de Coljuegos."
  },
  {
    question: "¿Cómo sé si un casino tiene licencia de Coljuegos?",
    answer: "Puedes verificar la licencia de un casino visitando el sitio web oficial de Coljuegos (www.coljuegos.gov.co). Todos los casinos legales muestran su número de licencia en el pie de página de su sitio web. En JuegoRating solo recomendamos casinos verificados y autorizados."
  },
  {
    question: "¿Cuánto tiempo tardan los retiros?",
    answer: "El tiempo de retiro varía según el casino y el método de pago elegido. Los casinos más rápidos procesan retiros en menos de 24 horas. Los métodos electrónicos como PSE, Nequi y Daviplata suelen ser los más rápidos, mientras que las transferencias bancarias pueden tomar 2-5 días hábiles."
  },
  {
    question: "¿Qué métodos de pago puedo usar?",
    answer: "Los casinos colombianos aceptan múltiples métodos de pago locales: PSE para transferencias bancarias, Efecty y Baloto para pagos en efectivo, billeteras digitales como Nequi y Daviplata, y tarjetas Visa/Mastercard. La mayoría de depósitos son instantáneos."
  },
  {
    question: "¿Cómo funcionan los bonos de bienvenida?",
    answer: "Los bonos de bienvenida generalmente duplican tu primer depósito hasta un monto máximo. Por ejemplo, un bono del 100% hasta 500,000 COP significa que si depositas 500,000 COP, recibirás otros 500,000 COP en bonos. Es importante leer los requisitos de apuesta (rollover) antes de aceptar."
  },
  {
    question: "¿Puedo jugar desde mi celular?",
    answer: "Sí, todos los casinos que recomendamos están optimizados para dispositivos móviles. Algunos tienen aplicaciones nativas para iOS y Android, mientras que otros funcionan perfectamente desde el navegador móvil. La experiencia de juego es igual de completa que en computadora."
  },
  {
    question: "¿Qué debo hacer si tengo un problema?",
    answer: "Si tienes algún problema, contacta primero al soporte del casino a través de chat en vivo, email o teléfono. Si no obtienes una solución satisfactoria, puedes presentar una queja ante Coljuegos. También existen organizaciones de ayuda si crees tener problemas con el juego."
  },
  {
    question: "¿Hay límites de depósito o retiro?",
    answer: "Sí, cada casino establece sus propios límites. Los depósitos mínimos suelen estar entre 10,000 y 20,000 COP. Los límites máximos de retiro varían, pero generalmente permiten retirar varios millones de pesos. Los jugadores VIP suelen tener límites más altos."
  }
]

export function getCasinoBySlug(slug: string): Casino | undefined {
  return casinos.find(casino => casino.slug === slug)
}

export function getTopCasinos(limit: number = 5): Casino[] {
  return casinos.filter(casino => casino.showInRankings !== false).slice(0, limit)
}

export function getVisibleCasinos(): Casino[] {
  return casinos.filter(casino => casino.showInRankings !== false)
}
