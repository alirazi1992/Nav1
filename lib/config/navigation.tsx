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
  title: string
  href: string
  icon: ReactNode
}

export const adminNavItems: NavigationItem[] = [
  {
    title: "داشبورد",
    href: "/admin",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "مدیریت شناورها",
    href: "/admin/vessels",
    icon: <Ship className="h-4 w-4" />,
  },
  {
    title: "کاربران سامانه",
    href: "/admin/users",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "مناطق دریایی",
    href: "/admin/regions",
    icon: <Map className="h-4 w-4" />,
  },
  {
    title: "رادار و نقشه",
    href: "/admin/radar",
    icon: <Radar className="h-4 w-4" />,
  },
  {
    title: "رویدادها و مأموریت‌ها",
    href: "/admin/events",
    icon: <CalendarDays className="h-4 w-4" />,
  },
  {
    title: "خدمات بندری",
    href: "/admin/services",
    icon: <LifeBuoy className="h-4 w-4" />,
  },
  {
    title: "داده‌های اقیانوس",
    href: "/admin/ocean",
    icon: <Waves className="h-4 w-4" />,
  },
  {
    title: "تنظیمات سامانه",
    href: "/admin/settings",
    icon: <Cog className="h-4 w-4" />,
  },
]

export const clientNavItems: NavigationItem[] = [
  {
    title: "داشبورد من",
    href: "/app",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "اخبار و اعلان‌ها",
    href: "/app/news",
    icon: <Newspaper className="h-4 w-4" />,
  },
]
