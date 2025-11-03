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
  titleFa: string
  titleEn: string
  href: string
  icon: ReactNode
}

export const adminNavItems: NavigationItem[] = [
  {
    titleFa: "داشبورد",
    titleEn: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    titleFa: "مدیریت شناورها",
    titleEn: "Fleet Management",
    href: "/admin/vessels",
    icon: <Ship className="h-4 w-4" />,
  },
  {
    titleFa: "کاربران سامانه",
    titleEn: "System Users",
    href: "/admin/users",
    icon: <Users className="h-4 w-4" />,
  },
  {
    titleFa: "مناطق دریایی",
    titleEn: "Maritime Regions",
    href: "/admin/regions",
    icon: <Map className="h-4 w-4" />,
  },
  {
    titleFa: "رادار و نقشه",
    titleEn: "Radar & Map",
    href: "/admin/radar",
    icon: <Radar className="h-4 w-4" />,
  },
  {
    titleFa: "رویدادها و مأموریت‌ها",
    titleEn: "Events & Missions",
    href: "/admin/events",
    icon: <CalendarDays className="h-4 w-4" />,
  },
  {
    titleFa: "خدمات بندری",
    titleEn: "Port Services",
    href: "/admin/services",
    icon: <LifeBuoy className="h-4 w-4" />,
  },
  {
    titleFa: "داده‌های اقیانوس",
    titleEn: "Ocean Data",
    href: "/admin/ocean",
    icon: <Waves className="h-4 w-4" />,
  },
  {
    titleFa: "تنظیمات سامانه",
    titleEn: "System Settings",
    href: "/admin/settings",
    icon: <Cog className="h-4 w-4" />,
  },
]

export const clientNavItems: NavigationItem[] = [
  {
    titleFa: "داشبورد من",
    titleEn: "My Dashboard",
    href: "/app",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    titleFa: "اخبار و اعلان‌ها",
    titleEn: "News & Alerts",
    href: "/app/news",
    icon: <Newspaper className="h-4 w-4" />,
  },
]
