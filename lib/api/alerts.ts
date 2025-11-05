import type { AlertRule, Alert } from "@/lib/types"
import { getFromStorage, saveToStorage } from "./storage"

const RULES_KEY = "maritime_alert_rules"
const ALERTS_KEY = "maritime_alerts"

const seedRules: AlertRule[] = [
  {
    id: "ar1",
    name: "هشدار موج بلند",
    conditions: {
      waveHeight: { operator: ">", value: 2 },
    },
    alertLevel: "warning",
    message: "ارتفاع موج از ۲ متر تجاوز کرده است",
    notifyOwner: true,
    isActive: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: "ar2",
    name: "هشدار باد شدید",
    conditions: {
      windSpeed: { operator: ">", value: 20 },
    },
    alertLevel: "danger",
    message: "سرعت باد از ۲۰ گره تجاوز کرده است",
    notifyOwner: true,
    isActive: true,
    createdAt: new Date().toISOString(),
  },
]

const seedAlerts: Alert[] = [
  {
    id: "a1",
    ruleId: "ar1",
    vesselId: "v1",
    level: "warning",
    message: "ارتفاع موج در مسیر شناور تاجر هرمز از حد مجاز عبور کرده است",
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    isRead: false,
  },
  {
    id: "a2",
    ruleId: "ar2",
    vesselId: "v2",
    level: "danger",
    message: "سرعت باد شدید در محدوده لنگرگاه صادراتی گزارش شده است",
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    isRead: false,
  },
  {
    id: "a3",
    ruleId: "ar1",
    vesselId: "v3",
    level: "info",
    message: "اطلاع: موج متوسط در مسیر ورودی بندر خرمشهر ثبت شد",
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    isRead: true,
  },
]

export const alertRulesApi = {
  getAll: async (): Promise<AlertRule[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return getFromStorage(RULES_KEY, seedRules)
  },

  create: async (rule: Omit<AlertRule, "id" | "createdAt">): Promise<AlertRule> => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    const rules = getFromStorage<AlertRule[]>(RULES_KEY, seedRules)
    const newRule: AlertRule = {
      ...rule,
      id: `ar${Date.now()}`,
      createdAt: new Date().toISOString(),
    }
    rules.push(newRule)
    saveToStorage(RULES_KEY, rules)
    return newRule
  },

  update: async (id: string, updates: Partial<AlertRule>): Promise<AlertRule | null> => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    const rules = getFromStorage<AlertRule[]>(RULES_KEY, seedRules)
    const index = rules.findIndex((r) => r.id === id)
    if (index === -1) return null

    rules[index] = { ...rules[index], ...updates }
    saveToStorage(RULES_KEY, rules)
    return rules[index]
  },

  delete: async (id: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const rules = getFromStorage<AlertRule[]>(RULES_KEY, seedRules)
    const filtered = rules.filter((r) => r.id !== id)
    if (filtered.length === rules.length) return false
    saveToStorage(RULES_KEY, filtered)
    return true
  },
}

export const alertsApi = {
  getAll: async (): Promise<Alert[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return getFromStorage(ALERTS_KEY, seedAlerts)
  },

  getUnread: async (): Promise<Alert[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    const alerts = getFromStorage<Alert[]>(ALERTS_KEY, seedAlerts)
    return alerts.filter((a) => !a.isRead)
  },

  markAsRead: async (id: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 200))
    const alerts = getFromStorage<Alert[]>(ALERTS_KEY, seedAlerts)
    const alert = alerts.find((a) => a.id === id)
    if (!alert) return false

    alert.isRead = true
    saveToStorage(ALERTS_KEY, alerts)
    return true
  },

  create: async (alert: Omit<Alert, "id">): Promise<Alert> => {
    await new Promise((resolve) => setTimeout(resolve, 400))
    const alerts = getFromStorage<Alert[]>(ALERTS_KEY, seedAlerts)
    const newAlert: Alert = {
      ...alert,
      id: `a${Date.now()}`,
    }
    alerts.unshift(newAlert)
    saveToStorage(ALERTS_KEY, alerts)
    return newAlert
  },
}
