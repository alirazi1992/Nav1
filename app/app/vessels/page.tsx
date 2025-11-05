"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { clientNavItems } from "@/lib/config/navigation"
import { useAuthStore } from "@/lib/store/auth-store"
import { vesselsApi } from "@/lib/api/vessels"
import type { Vessel } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"
import { StatCard } from "@/components/ui/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, AlertTriangle, ArrowRight, Loader2, RefreshCcw, Ship } from "lucide-react"

const statusLabels: Record<Vessel["status"], string> = {
  active: "فعال",
  inactive: "غیرفعال",
  pending: "در انتظار بررسی",
  approved: "تأیید شده",
  rejected: "رد شده",
}

const statusStyles: Record<Vessel["status"], string> = {
  active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  inactive: "bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
  pending: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  approved: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
}

const typeLabels: Record<Vessel["type"], string> = {
  cargo: "کشتی باری",
  tanker: "نفتکش",
  passenger: "مسافری",
  fishing: "صیادی",
  military: "نظامی",
  other: "سایر",
}

export default function ClientVesselsPage() {
  const { toast } = useToast()
  const user = useAuthStore((state) => state.user)
  const hasHydrated = useAuthStore((state) => state._hasHydrated)
  const [vessels, setVessels] = useState<Vessel[]>([])
  const [loading, setLoading] = useState(true)

  const loadVessels = useCallback(async () => {
    if (!user) return
    setLoading(true)
    try {
      const data = await vesselsApi.getByOwnerId(user.id)
      setVessels(data)
    } catch (error) {
      console.error("Failed to load user vessels:", error)
      toast({
        title: "خطا در دریافت اطلاعات",
        description: "امکان بارگذاری شناورها وجود نداشت. لطفاً دوباره تلاش کنید.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }, [toast, user])

  useEffect(() => {
    if (!hasHydrated) return
    if (!user) {
      setVessels([])
      setLoading(false)
      return
    }
    void loadVessels()
  }, [hasHydrated, user, loadVessels])

  const stats = useMemo(() => {
    const total = vessels.length
    const active = vessels.filter((vessel) => vessel.status === "active").length
    const pending = vessels.filter((vessel) => vessel.status === "pending").length
    return { total, active, pending }
  }, [vessels])

  return (
    <DashboardLayout sidebarItems={clientNavItems}>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">شناورهای من</h1>
            <p className="text-muted-foreground">فهرست کامل شناورهای ثبت‌شده برای حساب شما.</p>
          </div>
          <Button
            variant="outline"
            onClick={() => loadVessels()}
            disabled={loading || !user}
            className="min-w-[160px] justify-center"
          >
            {loading ? <Loader2 className="ml-2 h-4 w-4 animate-spin" /> : <RefreshCcw className="ml-2 h-4 w-4" />}
            به‌روزرسانی داده‌ها
          </Button>
        </div>

        {!user ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              برای مشاهده فهرست شناورها باید ابتدا وارد سامانه شوید.
            </CardContent>
          </Card>
        ) : (
          <>
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard
                title="کل شناورها"
                value={loading ? "..." : stats.total}
                description="تعداد شناورهای ثبت‌شده به نام شما"
                icon={<Ship className="h-4 w-4" />}
              />
              <StatCard
                title="شناورهای فعال"
                value={loading ? "..." : stats.active}
                description="شناورهای در حال فعالیت"
                icon={<Activity className="h-4 w-4" />}
              />
              <StatCard
                title="در انتظار تأیید"
                value={loading ? "..." : stats.pending}
                description="شناورهایی که نیازمند بررسی هستند"
                icon={<AlertTriangle className="h-4 w-4" />}
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>فهرست شناورها</CardTitle>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center gap-2 py-12 text-muted-foreground">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    در حال دریافت اطلاعات...
                  </div>
                ) : vessels.length === 0 ? (
                  <div className="py-12 text-center text-muted-foreground">
                    تاکنون شناوری برای این حساب ثبت نشده است.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>نام شناور</TableHead>
                          <TableHead>نوع شناور</TableHead>
                          <TableHead>وضعیت</TableHead>
                          <TableHead>سرعت</TableHead>
                          <TableHead>سمت</TableHead>
                          <TableHead>آخرین موقعیت</TableHead>
                          <TableHead>آخرین به‌روزرسانی</TableHead>
                          <TableHead className="text-left">عملیات</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {vessels.map((vessel) => (
                          <TableRow key={vessel.id}>
                            <TableCell className="font-medium">{vessel.name}</TableCell>
                            <TableCell>{typeLabels[vessel.type] ?? vessel.type}</TableCell>
                            <TableCell>
                              <Badge className={statusStyles[vessel.status]}>{statusLabels[vessel.status]}</Badge>
                            </TableCell>
                            <TableCell>{`${vessel.speed} گره`}</TableCell>
                            <TableCell>{`${vessel.heading}°`}</TableCell>
                            <TableCell>{vessel.currentLocation ?? "—"}</TableCell>
                            <TableCell>
                              {new Date(vessel.lastUpdate).toLocaleString("fa-IR", {
                                dateStyle: "short",
                                timeStyle: "short",
                              })}
                            </TableCell>
                            <TableCell className="text-left">
                              <Button asChild size="sm" variant="outline" className="gap-1">
                                <Link href={`/app/vessel/${vessel.id}`}>
                                  مشاهده جزئیات
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}
