import type { ReactNode } from "react"
import {
  LayoutDashboard,
  Ship,
  Radar,
  Waves,
  Map,
  Users,
  Settings,
  CalendarDays,
  Wrench,
  Newspaper,
} from "lucide-react"

export interface NavigationItem {
  title: string
  href: string
  icon: ReactNode
}

export const adminNavItems: NavigationItem[] = [
  {
    title: "داشبورد مدیریتی",
    href: "/admin",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "مدیریت شناورها",
    href: "/admin/vessels",
    icon: <Ship className="h-4 w-4" />,
  },
  {
    title: "نقشه و رادار",
    href: "/app/radar",
    icon: <Radar className="h-4 w-4" />,
  },
  {
    title: "آب‌ و هوای دریا",
    href: "/app/ocean",
    icon: <Waves className="h-4 w-4" />,
  },
  {
    title: "مناطق و قوانین",
    href: "/app/regions",
    icon: <Map className="h-4 w-4" />,
  },
  {
    title: "خدمات پشتیبانی",
    href: "/app/services",
    icon: <Wrench className="h-4 w-4" />,
  },
  {
    title: "رویدادها و آموزش",
    href: "/app/events",
    icon: <CalendarDays className="h-4 w-4" />,
  },
  {
    title: "مدیریت کاربران",
    href: "/app/users",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "تنظیمات سامانه",
    href: "/app/settings",
    icon: <Settings className="h-4 w-4" />,
  },
]

export const clientNavItems: NavigationItem[] = [
  {
    title: "داشبورد من",
    href: "/app",
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: "شناورهای من",
    href: "/app/vessels",
    icon: <Ship className="h-4 w-4" />,
  },
  {
    title: "اخبار و اطلاعیه‌ها",
    href: "/app/news",
    icon: <Newspaper className="h-4 w-4" />,
  },
]
