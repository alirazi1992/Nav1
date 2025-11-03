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
  const { t, localize, locale } = useTranslation()
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

  const dateLocale = locale === "fa" ? "fa-IR" : "en-US"

  return (
    <DashboardLayout sidebarItems={adminNavItems}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{t("dashboard.welcome")}</h1>
          <p className="text-muted-foreground">{t("adminDashboard.description")}</p>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title={t("adminDashboard.stats.totalVessels.title")}
            value={loading ? "..." : vessels.length}
            icon={<Ship className="h-4 w-4" />}
            description={t("adminDashboard.stats.totalVessels.description")}
          />
          <StatCard
            title={t("adminDashboard.stats.activeVessels.title")}
            value={loading ? "..." : activeVessels}
            icon={<Activity className="h-4 w-4" />}
            description={t("adminDashboard.stats.activeVessels.description")}
          />
          <StatCard
            title={t("adminDashboard.stats.pendingVessels.title")}
            value={loading ? "..." : pendingVessels}
            icon={<Users className="h-4 w-4" />}
            description={t("adminDashboard.stats.pendingVessels.description")}
          />
          <StatCard
            title={t("adminDashboard.stats.activeAlerts.title")}
            value={loading ? "..." : alerts.length}
            icon={<AlertTriangle className="h-4 w-4" />}
            description={t("adminDashboard.stats.activeAlerts.description")}
          />
        </div>

        {/* Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>{t("adminDashboard.latestVessels.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-muted-foreground">{t("common.loading")}</p>
              ) : vessels.length === 0 ? (
                <p className="text-muted-foreground">{t("adminDashboard.latestVessels.empty")}</p>
              ) : (
                <div className="space-y-4">
                  {vessels.slice(0, 5).map((vessel) => (
                    <div
                      key={vessel.id}
                      className="flex items-center justify-between border-b border-border pb-2 last:border-0"
                    >
                      <div>
                        <p className="font-medium">{localize(vessel.name)}</p>
                        <p className="text-sm text-muted-foreground">{localize(vessel.ownerName)}</p>
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
                          ? t("vessels.status.active")
                          : vessel.status === "pending"
                            ? t("vessels.status.pending")
                            : t("vessels.status.inactive")}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t("adminDashboard.recentAlerts.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p className="text-muted-foreground">{t("common.loading")}</p>
              ) : alerts.length === 0 ? (
                <p className="text-muted-foreground">{t("adminDashboard.recentAlerts.empty")}</p>
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
                        <p className="text-sm">{localize(alert.message)}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(alert.timestamp).toLocaleString(dateLocale)}
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
