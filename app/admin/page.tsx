"use client"

import { useEffect, useState } from "react"
import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { StatCard } from "@/components/ui/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Ship, Users, AlertTriangle, Activity } from "lucide-react"
import { vesselsApi } from "@/lib/api/vessels"
import { alertsApi } from "@/lib/api/alerts"
import { useTranslation } from "@/lib/hooks/use-translation"
import { adminNavItems } from "@/lib/config/navigation"
import type { Vessel, Alert } from "@/lib/types"

export default function AdminDashboard() {
  const { t } = useTranslation()
  const [vessels, setVessels] = useState<Vessel[]>([])
  const [alerts, setAlerts] = useState<Alert[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [vesselsData, alertsData] = await Promise.all([vesselsApi.getAll(), alertsApi.getUnread()])
        setVessels(vesselsData)
        setAlerts(alertsData)
      } catch (error) {
        console.error("Error loading dashboard data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const activeVessels = vessels.filter((v) => v.status === "active").length
  const pendingVessels = vessels.filter((v) => v.status === "pending").length

  return (
    <DashboardLayout sidebarItems={adminNavItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{t("dashboard.welcome")}</h1>
          <p className="text-muted-foreground">نمای کلی سامانه نظارت دریایی | Overview of the maritime monitoring platform</p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="کل شناورها | Total vessels"
            value={loading ? "..." : vessels.length}
            icon={<Ship className="h-4 w-4" />}
            description="تعداد کل شناورهای ثبت شده | Total registered vessels"
          />
          <StatCard
            title="شناورهای فعال | Active vessels"
            value={loading ? "..." : activeVessels}
            icon={<Activity className="h-4 w-4" />}
            description="شناورهای در حال فعالیت | Currently operating"
          />
          <StatCard
            title="در انتظار تأیید | Pending approval"
            value={loading ? "..." : pendingVessels}
            icon={<Users className="h-4 w-4" />}
            description="شناورهای نیازمند بررسی | Awaiting review"
          />
          <StatCard
            title="هشدارهای فعال | Active alerts"
            value={loading ? "..." : alerts.length}
            icon={<AlertTriangle className="h-4 w-4" />}
            description="هشدارهای خوانده نشده | Unacknowledged alerts"
          />
        </div>

        {/* Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>آخرین شناورها | Latest vessels</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-muted-foreground">در حال بارگذاری... | Loading...</p>
              ) : vessels.length === 0 ? (
                <p className="text-muted-foreground">شناوری ثبت نشده است | No vessels recorded</p>
              ) : (
                <div className="space-y-4">
                  {vessels.slice(0, 5).map((vessel) => (
                    <div
                      key={vessel.id}
                      className="flex items-center justify-between border-b border-border pb-2 last:border-0"
                    >
                      <div>
                        <p className="font-medium">{vessel.name}</p>
                        <p className="text-sm text-muted-foreground">{vessel.ownerName}</p>
                      </div>
                      <div
                        className={`rounded-full px-2 py-1 text-xs ${
                          vessel.status === "active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : vessel.status === "pending"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                        }`}
                      >
                        {vessel.status === "active"
                          ? "فعال | Active"
                          : vessel.status === "pending"
                            ? "در انتظار | Pending"
                            : "غیرفعال | Inactive"}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>هشدارهای اخیر | Recent alerts</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-muted-foreground">در حال بارگذاری... | Loading...</p>
              ) : alerts.length === 0 ? (
                <p className="text-muted-foreground">هشداری وجود ندارد | No alerts available</p>
              ) : (
                <div className="space-y-4">
                  {alerts.slice(0, 5).map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 border-b border-border pb-2 last:border-0">
                      <AlertTriangle
                        className={`mt-0.5 h-4 w-4 ${
                          alert.level === "danger"
                            ? "text-red-500"
                            : alert.level === "warning"
                              ? "text-yellow-500"
                              : "text-blue-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm">{alert.message}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(alert.timestamp).toLocaleString("fa-IR")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
