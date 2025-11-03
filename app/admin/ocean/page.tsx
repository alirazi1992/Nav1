"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { adminNavItems } from "@/lib/config/navigation";
import { oceanApi } from "@/lib/api/ocean";
import type { OceanReading } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Compass,
  Droplet,
  RefreshCcw,
  Thermometer,
  Waves,
  Wind,
} from "lucide-react";
import { useTranslation } from "@/lib/hooks/use-translation";

interface MetricCardProps {
  title: string;
  value: string;
  helper?: string;
  icon: ReactNode;
}

export default function AdminOceanPage() {
  const { t, locale } = useTranslation();
  const [readings, setReadings] = useState<OceanReading[]>([]);
  const [loading, setLoading] = useState(true);

  const loadReadings = async () => {
    try {
      const data = await oceanApi.getAll();
      setReadings(data);
    } catch (error) {
      console.error("Error loading ocean data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadReadings();
  }, []);

  const latest = readings[0] ?? null;

  const aggregates = useMemo(() => {
    if (readings.length === 0) {
      return {
        averageWave: 0,
        averageWind: 0,
        averageSeaTemp: 0,
        averageAirTemp: 0,
      };
    }

    const totals = readings.reduce(
      (accumulator, reading) => {
        accumulator.wave += reading.wave.height;
        accumulator.wind += reading.wind.speed;
        accumulator.seaTemp += reading.temperature.sea;
        accumulator.airTemp += reading.temperature.air;
        return accumulator;
      },
      { wave: 0, wind: 0, seaTemp: 0, airTemp: 0 }
    );

    const count = readings.length;
    return {
      averageWave: totals.wave / count,
      averageWind: totals.wind / count,
      averageSeaTemp: totals.seaTemp / count,
      averageAirTemp: totals.airTemp / count,
    };
  }, [readings]);

  const dateLocale = locale === "fa" ? "fa-IR" : "en-US";

  return (
    <DashboardLayout sidebarItems={adminNavItems}>
      <div className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">{t("oceanPage.title")}</h1>
            <p className="text-muted-foreground">{t("oceanPage.description")}</p>
          </div>
          <Button variant="outline" onClick={loadReadings} disabled={loading}>
            <RefreshCcw className="ml-2 h-4 w-4" />
            {t("oceanPage.refresh")}
          </Button>
        </div>

        {loading ? (
          <div className="py-12 text-center text-muted-foreground">{t("oceanPage.loading")}</div>
        ) : readings.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              {t("oceanPage.empty")}
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="overview">{t("oceanPage.tabs.overview")}</TabsTrigger>
              <TabsTrigger value="history">{t("oceanPage.tabs.history")}</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-6">
              {latest && (
                <Card>
                  <CardHeader>
                    <CardTitle>{t("oceanPage.latestObservation.title")}</CardTitle>
                    <CardDescription>
                      {new Date(latest.timestamp).toLocaleString(dateLocale)} ·{" "}
                      {latest.position.lat.toFixed(3)} /{" "}
                      {latest.position.lng.toFixed(3)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <MetricCard
                        title={t("oceanPage.metrics.waveHeight")}
                        value={`${latest.wave.height.toFixed(1)} m`}
                        helper={t("oceanPage.metrics.wavePeriod", {
                          seconds: latest.wave.period?.toFixed(0) ?? "—",
                        })}
                        icon={<Waves className="h-5 w-5 text-chart-1" />}
                      />
                      <MetricCard
                        title={t("oceanPage.metrics.wind")}
                        value={`${latest.wind.speed.toFixed(1)} kt`}
                        helper={t("oceanPage.metrics.windDirection", {
                          degrees: latest.wind.direction.toFixed(0),
                        })}
                        icon={<Wind className="h-5 w-5 text-chart-2" />}
                      />
                      <MetricCard
                        title={t("oceanPage.metrics.seaTemperature")}
                        value={`${latest.temperature.sea.toFixed(1)}°C`}
                        helper={t("oceanPage.metrics.seaAirHelper", {
                          temperature: latest.temperature.air.toFixed(1),
                        })}
                        icon={<Thermometer className="h-5 w-5 text-chart-3" />}
                      />
                      <MetricCard
                        title={t("oceanPage.metrics.current")}
                        value={`${latest.current.speed.toFixed(1)} kt`}
                        helper={t("oceanPage.metrics.currentDirection", {
                          degrees: latest.current.direction.toFixed(0),
                        })}
                        icon={<Droplet className="h-5 w-5 text-chart-4" />}
                      />
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t("oceanPage.metrics.aggregates.waveTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {aggregates.averageWave.toFixed(1)} m
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t("oceanPage.metrics.aggregates.waveDescription")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t("oceanPage.metrics.aggregates.windTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {aggregates.averageWind.toFixed(1)} kt
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t("oceanPage.metrics.aggregates.windDescription")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t("oceanPage.metrics.aggregates.seaTempTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {aggregates.averageSeaTemp.toFixed(1)}°C
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t("oceanPage.metrics.aggregates.seaTempDescription")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      {t("oceanPage.metrics.aggregates.airTempTitle")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {aggregates.averageAirTemp.toFixed(1)}°C
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t("oceanPage.metrics.aggregates.airTempDescription")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t("oceanPage.history.title")}</CardTitle>
                  <CardDescription>{t("oceanPage.history.description")}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t("oceanPage.history.columns.timestamp")}</TableHead>
                        <TableHead>{t("oceanPage.history.columns.location")}</TableHead>
                        <TableHead>{t("oceanPage.history.columns.waveHeight")}</TableHead>
                        <TableHead>{t("oceanPage.history.columns.windSpeed")}</TableHead>
                        <TableHead>{t("oceanPage.history.columns.seaTemperature")}</TableHead>
                        <TableHead>{t("oceanPage.history.columns.beaufort")}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {readings.slice(0, 15).map((reading) => (
                        <TableRow key={reading.id}>
                          <TableCell>
                            {new Date(reading.timestamp).toLocaleString(dateLocale)}
                          </TableCell>
                          <TableCell>
                            {reading.position.lat.toFixed(3)} /{" "}
                            {reading.position.lng.toFixed(3)}
                          </TableCell>
                          <TableCell>
                            {reading.wave.height.toFixed(1)} m
                          </TableCell>
                          <TableCell>
                            {reading.wind.speed.toFixed(1)} kt
                          </TableCell>
                          <TableCell>
                            {reading.temperature.sea.toFixed(1)}°C
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className="inline-flex items-center gap-1"
                            >
                              <Compass className="h-3 w-3" />
                              {reading.beaufort}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </DashboardLayout>
  );
}

function MetricCard({ title, value, helper, icon }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {helper && (
          <p className="mt-1 text-xs text-muted-foreground">{helper}</p>
        )}
      </CardContent>
    </Card>
  );
}
