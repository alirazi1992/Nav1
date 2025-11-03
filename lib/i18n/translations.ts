const en = {
  // Common
  common: {
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    add: "Add",
    search: "Search",
    filter: "Filter",
    reset: "Reset",
    apply: "Apply",
    close: "Close",
    loading: "Loading...",
    noData: "No data found",
    confirm: "Confirm",
    back: "Back",
    view: "View",
    details: "Details",
    error: "Error",
    appName: "Maritime Monitoring System",
    languages: {
      fa: "Persian",
      en: "English",
    },
  },
  // Auth
  auth: {
    login: "Login",
    register: "Register",
    logout: "Logout",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    forgotPassword: "Forgot Password",
    rememberMe: "Remember Me",
    signIn: "Sign In",
    signUp: "Sign Up",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    demo: {
      admin: "Admin demo account",
      client: "Client demo account",
    },
    success: {
      loginTitle: "Login successful",
      loginDescription: "Welcome to the platform",
      registerTitle: "Registration successful",
      registerDescription: "Your account has been created",
    },
    errorMessages: {
      loginFailed: "Login failed",
      registerFailed: "Registration failed",
      invalidCredentials: "Incorrect email or password",
    },
    form: {
      fullName: "Full name",
      fullNamePlaceholder: "Enter your name",
      role: "User role",
      roleClient: "Client (Vessel owner)",
      roleAdmin: "System administrator",
    },
  },
  // Navigation
  nav: {
    dashboard: "Dashboard",
    users: "Users",
    vessels: "Vessels",
    radar: "Map & Radar",
    ocean: "Weather & Ocean",
    regions: "Regions & Policies",
    services: "Service Directory",
    events: "Events",
    alerts: "Alerts",
    settings: "Settings",
    myVessels: "My Vessels",
    news: "News & Announcements",
    account: "Account",
  },
  // Dashboard
  dashboard: {
    welcome: "Welcome",
    overview: "Overview",
    statistics: "Statistics",
    recentActivity: "Recent Activity",
    kpi: "Key Performance Indicators",
  },
  // Vessels
  vessels: {
    vessel: "Vessel",
    vesselName: "Vessel Name",
    vesselType: "Vessel Type",
    owner: "Owner",
    speed: "Speed",
    heading: "Heading",
    position: "Position",
    lastUpdate: "Last Update",
    addVessel: "Add Vessel",
    editVessel: "Edit Vessel",
    deleteVessel: "Delete Vessel",
    vesselDetails: "Vessel Details",
    notFound: "Vessel not found",
    status: {
      active: "Active",
      inactive: "Inactive",
      pending: "Pending Approval",
      approved: "Approved",
      rejected: "Rejected",
    },
    type: {
      cargo: "Cargo Ship",
      tanker: "Tanker",
      container: "Container Ship",
      bulk: "Bulk Carrier",
      passenger: "Passenger Ship",
      fishing: "Fishing Vessel",
      tug: "Tugboat",
      other: "Other",
    },
    form: {
      name: "Vessel Name",
      imo: "IMO Number",
      type: "Type",
      flag: "Flag",
      yearBuilt: "Year Built",
      dwt: "Deadweight Tonnage (DWT)",
      speed: "Speed",
      currentLocation: "Current Location",
    },
  },
  // Weather & Ocean
  weather: {
    title: "Weather & Sea State",
    course: "Course",
    wind: "Wind",
    wave: "Wave",
    swell: "Swell",
    current: "Current",
    airTemp: "Air Temperature",
    seaTemp: "Sea Temperature",
    waveHeight: "Wave Height",
  },
  // Compliance
  compliance: {
    timeline: "Compliance Timeline",
    compliant: "Compliant",
    nonCompliant: "Non-Compliant",
    period: "Period",
    instruction: "Instruction",
    constantPower: "Constant Power",
  },
  // Units
  units: {
    knot: "knots",
    kilowatt: "kW",
    percent: "%",
    ton: "tons",
    grossTon: "gross tons",
    minute: "minutes",
    degree: "deg",
    meter: "m/s",
  },
  // Operational map
  map: {
    title: "Operational map",
    loading: "Loading map layers...",
    layersButton: "Layers",
    layersPanel: "Layer control",
    layers: {
      vessels: "Vessels",
      regions: "Regions",
      ports: "Ports",
    },
    popup: {
      type: "Type",
      speed: "Speed",
      heading: "Heading",
      owner: "Owner",
      noDescription: "No description available.",
    },
  },
  // Radar page
  radarPage: {
    title: "Map & Radar",
    description: "Live situational awareness for vessels and monitored regions in your area.",
    typeFilterLabel: "Vessel type",
    searchLabel: "Search",
    searchPlaceholder: "Enter name, MMSI, IMO, flag, or owner...",
    countsLabel: "{{filtered}} / {{total}} vessels",
    loading: "Loading radar data...",
    error: "We couldn't load the radar data. Please try again shortly.",
    tabs: {
      map: "Operational map",
      radar: "Advanced radar",
    },
    filters: {
      all: "All types",
    },
    invalidPositionNotice: "{{count}} vessels skipped due to missing coordinates.",
  },
  landing: {
    hero: {
      title: "Maritime Oversight & Management Platform",
      description: "Smart fleet management, ocean monitoring, and maritime zone oversight",
      loginCta: "Sign in",
      registerCta: "Create account",
    },
    features: {
      title: "Platform capabilities",
      fleet: {
        title: "Fleet administration",
        description: "Capture and track every vessel detail",
      },
      radar: {
        title: "Radar & mapping",
        description: "Live situational tracking",
      },
      ocean: {
        title: "Weather & sea",
        description: "Comprehensive marine forecasts",
      },
      compliance: {
        title: "Zones & compliance",
        description: "Govern maritime regulations effortlessly",
      },
    },
    footer: {
      text: "© 2024 Maritime Monitoring System. All rights reserved.",
    },
  },
  adminDashboard: {
    description: "Overview of the maritime monitoring platform",
    stats: {
      totalVessels: {
        title: "Total vessels",
        description: "Total registered vessels",
      },
      activeVessels: {
        title: "Active vessels",
        description: "Currently operating",
      },
      pendingVessels: {
        title: "Pending approval",
        description: "Awaiting review",
      },
      activeAlerts: {
        title: "Active alerts",
        description: "Unacknowledged alerts",
      },
    },
    latestVessels: {
      title: "Latest vessels",
      empty: "No vessels recorded",
    },
    recentAlerts: {
      title: "Recent alerts",
      empty: "No alerts available",
    },
  },
  clientDashboard: {
    welcome: {
      default: "Welcome aboard",
      named: "Welcome aboard, {{name}}",
    },
    description: "Overview of your fleet and operations",
    stats: {
      myVessels: {
        title: "My vessels",
        description: "Total registered",
      },
      activeVessels: {
        title: "Active vessels",
        description: "Currently operating",
      },
      alerts: {
        title: "Alerts",
        description: "Unread notifications",
      },
      news: {
        title: "Latest news",
        description: "Fresh announcements",
      },
    },
    vessels: {
      title: "My vessels",
      empty: "No vessels yet",
    },
    news: {
      title: "News & bulletins",
      empty: "No news available",
    },
    alerts: {
      title: "Active alerts",
    },
  },
  oceanPage: {
    title: "Weather & Sea State",
    description:
      "Monitor real-time meteorological and oceanographic conditions for the maritime control room.",
    refresh: "Refresh data",
    loading: "Loading ocean observations…",
    empty:
      "No observations available yet. Connect a sensor feed to begin collecting data.",
    tabs: {
      overview: "Overview",
      history: "History",
    },
    latestObservation: {
      title: "Latest observation",
    },
    metrics: {
      waveHeight: "Wave height",
      wavePeriod: "Period {{seconds}} s",
      wind: "Wind",
      windDirection: "Direction {{degrees}}°",
      seaTemperature: "Sea temperature",
      seaAirHelper: "Air {{temperature}}°C",
      current: "Current",
      currentDirection: "Direction {{degrees}}°",
      aggregates: {
        waveTitle: "Average wave height",
        waveDescription: "Calculated from the latest observations",
        windTitle: "Average wind speed",
        windDescription: "Reflects surface wind across the region",
        seaTempTitle: "Average sea temperature",
        seaTempDescription: "Near-surface water temperature",
        airTempTitle: "Average air temperature",
        airTempDescription: "Ambient temperature at the observation sites",
      },
    },
    history: {
      title: "Observation log",
      description: "15 most recent meteorological and oceanographic records",
      columns: {
        timestamp: "Timestamp",
        location: "Location",
        waveHeight: "Wave height",
        windSpeed: "Wind speed",
        seaTemperature: "Sea temperature",
        beaufort: "Beaufort",
      },
    },
  },
  // Radar widget
  radarWidget: {
    title: "Tactical radar view",
    controls: "Controls",
    gain: "Signal gain: {{value}}",
    threshold: "Detection threshold: {{value}}",
    pulse: "Pulse length: {{value}}",
    stc: "Short-range STC",
    cfar: "Auto CFAR",
    boost: "Wide boost",
    selectedTitle: "Selected target",
    vesselName: "Vessel name",
    vesselType: "Vessel type",
    speed: "Speed",
    heading: "Heading",
    position: "Position",
    clear: "Clear selection",
  },
} as const

const fa = {
  // Common
  common: {
    save: "ذخیره",
    cancel: "انصراف",
    delete: "حذف",
    edit: "ویرایش",
    add: "افزودن",
    search: "جستجو",
    filter: "فیلتر",
    reset: "بازنشانی",
    apply: "اعمال",
    close: "بستن",
    loading: "در حال بارگذاری...",
    noData: "داده‌ای یافت نشد",
    confirm: "تأیید",
    back: "بازگشت",
    view: "مشاهده",
    details: "جزئیات",
    error: "خطا",
    appName: "سامانه نظارت دریایی",
    languages: {
      fa: "فارسی",
      en: "انگلیسی",
    },
  },
  // Auth
  auth: {
    login: "ورود",
    register: "ثبت‌نام",
    logout: "خروج",
    email: "ایمیل",
    password: "رمز عبور",
    confirmPassword: "تأیید رمز عبور",
    forgotPassword: "فراموشی رمز عبور",
    rememberMe: "مرا به خاطر بسپار",
    signIn: "ورود به سامانه",
    signUp: "ایجاد حساب",
    alreadyHaveAccount: "قبلاً ثبت‌نام کرده‌اید؟",
    dontHaveAccount: "حساب کاربری ندارید؟",
    demo: {
      admin: "حساب آزمایشی مدیر",
      client: "حساب آزمایشی کاربر",
    },
    success: {
      loginTitle: "ورود موفق",
      loginDescription: "به سامانه خوش آمدید",
      registerTitle: "ثبت‌نام موفق",
      registerDescription: "حساب کاربری شما ایجاد شد",
    },
    errorMessages: {
      loginFailed: "ورود ناموفق بود",
      registerFailed: "ثبت‌نام ناموفق بود",
      invalidCredentials: "ایمیل یا رمز عبور اشتباه است",
    },
    form: {
      fullName: "نام و نام خانوادگی",
      fullNamePlaceholder: "نام خود را وارد کنید",
      role: "نقش کاربری",
      roleClient: "کاربر (مالک شناور)",
      roleAdmin: "مدیر سیستم",
    },
  },
  // Navigation
  nav: {
    dashboard: "داشبورد",
    users: "کاربران",
    vessels: "شناورها",
    radar: "رادار و نقشه",
    ocean: "آب‌وهوا و دریا",
    regions: "مناطق و مقررات",
    services: "خدمات دریایی",
    events: "رویدادها",
    alerts: "هشدارها",
    settings: "تنظیمات",
    myVessels: "شناورهای من",
    news: "اخبار و اعلان‌ها",
    account: "حساب کاربری",
  },
  // Dashboard
  dashboard: {
    welcome: "خوش آمدید",
    overview: "نمای کلی",
    statistics: "آمار",
    recentActivity: "فعالیت‌های اخیر",
    kpi: "شاخص‌های کلیدی عملکرد",
  },
  // Vessels
  vessels: {
    vessel: "شناور",
    vesselName: "نام شناور",
    vesselType: "نوع شناور",
    owner: "مالک",
    speed: "سرعت",
    heading: "سمت",
    position: "موقعیت",
    lastUpdate: "آخرین به‌روزرسانی",
    addVessel: "افزودن شناور",
    editVessel: "ویرایش شناور",
    deleteVessel: "حذف شناور",
    vesselDetails: "جزئیات شناور",
    notFound: "شناور یافت نشد",
    status: {
      active: "فعال",
      inactive: "غیرفعال",
      pending: "در انتظار تأیید",
      approved: "تأیید شد",
      rejected: "رد شد",
    },
    type: {
      cargo: "کشتی باری",
      tanker: "نفتکش",
      container: "کشتی کانتینری",
      bulk: "فله‌بر",
      passenger: "کشتی مسافری",
      fishing: "قایق صیادی",
      tug: "یدک‌کش",
      other: "سایر",
    },
    form: {
      name: "نام شناور",
      imo: "شماره IMO",
      type: "نوع",
      flag: "پرچم",
      yearBuilt: "سال ساخت",
      dwt: "تناژ مرده (DWT)",
      speed: "سرعت",
      currentLocation: "موقعیت فعلی",
    },
  },
  // Weather & Ocean
  weather: {
    title: "هوا و وضعیت دریا",
    course: "مسیر",
    wind: "باد",
    wave: "موج",
    swell: "سوییِل",
    current: "جریان",
    airTemp: "دمای هوا",
    seaTemp: "دمای آب",
    waveHeight: "ارتفاع موج",
  },
  // Compliance
  compliance: {
    timeline: "جدول زمانی انطباق",
    compliant: "مطابق",
    nonCompliant: "نامطابق",
    period: "دوره",
    instruction: "دستورالعمل",
    constantPower: "توان ثابت",
  },
  // Units
  units: {
    knot: "گره",
    kilowatt: "کیلووات",
    percent: "درصد",
    ton: "تن",
    grossTon: "تن ناخالص",
    minute: "دقیقه",
    degree: "درجه",
    meter: "متر بر ثانیه",
  },
  // Operational map
  map: {
    title: "نقشه عملیاتی",
    loading: "در حال بارگذاری لایه‌های نقشه...",
    layersButton: "لایه‌ها",
    layersPanel: "کنترل لایه‌ها",
    layers: {
      vessels: "شناورها",
      regions: "مناطق",
      ports: "بنادر",
    },
    popup: {
      type: "نوع",
      speed: "سرعت",
      heading: "سمت",
      owner: "مالک",
      noDescription: "توضیحی ثبت نشده است",
    },
  },
  // Radar page
  radarPage: {
    title: "نقشه و رادار",
    description:
      "نمای زنده از وضعیت شناورها و مناطق تحت نظارت",
    typeFilterLabel: "نوع شناور",
    searchLabel: "جستجو",
    searchPlaceholder:
      "نام، MMSI، IMO، پرچم یا مالک را وارد کنید...",
    countsLabel: "{{filtered}} / {{total}} شناور",
    loading: "در حال بارگذاری داده‌های رادار...",
    error: "بارگذاری داده‌ها ممکن نشد. لطفاً دوباره تلاش کنید.",
    tabs: {
      map: "نقشه عملیاتی",
      radar: "رادار پیشرفته",
    },
    filters: {
      all: "همه انواع",
    },
    invalidPositionNotice: "{{count}} شناور به دلیل نداشتن مختصات معتبر نمایش داده نشدند.",
  },
  landing: {
    hero: {
      title: "سامانه جامع نظارت و مدیریت دریایی",
      description: "مدیریت هوشمند شناورها، رصد وضعیت دریا و نظارت بر مناطق دریایی",
      loginCta: "ورود به سامانه",
      registerCta: "ثبت‌نام",
    },
    features: {
      title: "امکانات سامانه",
      fleet: {
        title: "مدیریت شناورها",
        description: "ثبت و پیگیری اطلاعات کامل شناورها",
      },
      radar: {
        title: "رادار و نقشه",
        description: "رصد لحظه‌ای موقعیت شناورها",
      },
      ocean: {
        title: "هوا و دریا",
        description: "اطلاعات کامل وضعیت دریا و آب‌وهوا",
      },
      compliance: {
        title: "مناطق و قوانین",
        description: "مدیریت مناطق و قوانین دریایی",
      },
    },
    footer: {
      text: "© ۱۴۰۳ سامانه نظارت دریایی. کلیه حقوق محفوظ است.",
    },
  },
  adminDashboard: {
    description: "نمای کلی سامانه نظارت دریایی",
    stats: {
      totalVessels: {
        title: "کل شناورها",
        description: "تعداد کل شناورهای ثبت شده",
      },
      activeVessels: {
        title: "شناورهای فعال",
        description: "شناورهای در حال فعالیت",
      },
      pendingVessels: {
        title: "در انتظار تأیید",
        description: "شناورهای نیازمند بررسی",
      },
      activeAlerts: {
        title: "هشدارهای فعال",
        description: "هشدارهای خوانده نشده",
      },
    },
    latestVessels: {
      title: "آخرین شناورها",
      empty: "شناوری ثبت نشده است",
    },
    recentAlerts: {
      title: "هشدارهای اخیر",
      empty: "هشداری وجود ندارد",
    },
  },
  clientDashboard: {
    welcome: {
      default: "خوش آمدید",
      named: "خوش آمدید، {{name}}",
    },
    description: "نمای کلی شناورها و فعالیت‌های شما",
    stats: {
      myVessels: {
        title: "شناورهای من",
        description: "تعداد کل شناورها",
      },
      activeVessels: {
        title: "شناورهای فعال",
        description: "در حال فعالیت",
      },
      alerts: {
        title: "هشدارها",
        description: "هشدارهای خوانده نشده",
      },
      news: {
        title: "اخبار جدید",
        description: "اطلاعیه‌های جدید",
      },
    },
    vessels: {
      title: "شناورهای من",
      empty: "شناوری ثبت نشده است",
    },
    news: {
      title: "اخبار و اطلاعیه‌ها",
      empty: "خبری وجود ندارد",
    },
    alerts: {
      title: "هشدارهای فعال",
    },
  },
  oceanPage: {
    title: "آب‌وهوا و وضعیت دریا",
    description:
      "رصد لحظه‌ای شرایط هواشناسی و اقیانوسی برای اتاق کنترل دریایی",
    refresh: "به‌روزرسانی داده‌ها",
    loading: "در حال بارگذاری مشاهدات دریایی...",
    empty:
      "هنوز داده‌ای ثبت نشده است. برای شروع جمع‌آوری اطلاعات، خوراک حسگر را متصل کنید.",
    tabs: {
      overview: "نمای کلی",
      history: "تاریخچه",
    },
    latestObservation: {
      title: "آخرین مشاهده",
    },
    metrics: {
      waveHeight: "ارتفاع موج",
      wavePeriod: "دوره {{seconds}} ثانیه",
      wind: "باد",
      windDirection: "جهت {{degrees}}°",
      seaTemperature: "دمای آب",
      seaAirHelper: "دمای هوا {{temperature}}°C",
      current: "جریان دریایی",
      currentDirection: "جهت {{degrees}}°",
      aggregates: {
        waveTitle: "میانگین ارتفاع موج",
        waveDescription: "محاسبه‌شده بر اساس آخرین مشاهدات",
        windTitle: "میانگین سرعت باد",
        windDescription: "بازتاب‌دهنده باد سطح در سراسر منطقه",
        seaTempTitle: "میانگین دمای آب",
        seaTempDescription: "دمای آب لایه سطحی",
        airTempTitle: "میانگین دمای هوا",
        airTempDescription: "دمای محیطی در محل‌های مشاهده",
      },
    },
    history: {
      title: "گزارش مشاهدات",
      description: "۱۵ مشاهده اخیر هواشناسی و اقیانوسی",
      columns: {
        timestamp: "زمان ثبت",
        location: "موقعیت",
        waveHeight: "ارتفاع موج",
        windSpeed: "سرعت باد",
        seaTemperature: "دمای آب",
        beaufort: "بوفورت",
      },
    },
  },
  // Radar widget
  radarWidget: {
    title: "نمای تاکتیکی رادار",
    controls: "کنترل‌ها",
    gain: "تقویت سیگنال: {{value}}",
    threshold: "آستانه کشف: {{value}}",
    pulse: "طول پالس: {{value}}",
    stc: "استانداردسازی برد کوتاه",
    cfar: "CFAR خودکار",
    boost: "تقویت گسترده",
    selectedTitle: "هدف انتخاب‌شده",
    vesselName: "نام شناور",
    vesselType: "نوع شناور",
    speed: "سرعت",
    heading: "سمت",
    position: "موقعیت",
    clear: "حذف انتخاب",
  },
} as const

export const translations = {
  en,
  fa,
} as const
