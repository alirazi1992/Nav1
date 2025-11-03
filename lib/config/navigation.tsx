import type { ReactNode } from "react"
import {
  CalendarDays,
  Cog,
  LayoutDashboard,
  LifeBuoy,
  Map,
  Newspaper,
  Radar,
  Ship,
  Users,
  Waves,
} from "lucide-react"

export interface NavigationItem {
  title: {
    fa: string
    en: string
  }
  href: string
  icon: ReactNode
}

export const adminNavItems: NavigationItem[] = [
  {
    title: {
      fa: "داشبورد",
      en: "Dashboard",
    },
    href: "/admin",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: {
      fa: "مدیریت شناورها",
      en: "Vessel Management",
    },
    href: "/admin/vessels",
    icon: <Ship className="h-4 w-4" />,
  },
  {
    title: {
      fa: "کاربران سامانه",
      en: "User Directory",
    },
    href: "/admin/users",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: {
      fa: "مناطق دریایی",
      en: "Maritime Regions",
    },
    href: "/admin/regions",
    icon: <Map className="h-4 w-4" />,
  },
  {
    title: {
      fa: "رادار و نقشه",
      en: "Radar & Map",
    },
    href: "/admin/radar",
    icon: <Radar className="h-4 w-4" />,
  },
  {
    title: {
      fa: "رویدادها و مأموریت‌ها",
      en: "Events & Missions",
    },
    href: "/admin/events",
    icon: <CalendarDays className="h-4 w-4" />,
  },
  {
    title: {
      fa: "خدمات بندری",
      en: "Port Services",
    },
    href: "/admin/services",
    icon: <LifeBuoy className="h-4 w-4" />,
  },
  {
    title: {
      fa: "داده‌های اقیانوس",
      en: "Ocean Intelligence",
    },
    href: "/admin/ocean",
    icon: <Waves className="h-4 w-4" />,
  },
  {
    title: {
      fa: "تنظیمات سامانه",
      en: "System Settings",
    },
    href: "/admin/settings",
    icon: <Cog className="h-4 w-4" />,
  },
]

export const clientNavItems: NavigationItem[] = [
  {
    title: {
      fa: "داشبورد من",
      en: "My Dashboard",
    },
    href: "/app",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: {
      fa: "اخبار و اعلان‌ها",
      en: "News & Notices",
    },
    href: "/app/news",
    icon: <Newspaper className="h-4 w-4" />,
  },
]
