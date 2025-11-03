import { Locale } from "./config"

export function localizeText(value: string | null | undefined, locale: Locale): string {
  if (typeof value !== "string") {
    return value ?? ""
  }

  const separatorIndex = value.indexOf("|")
  if (separatorIndex === -1) {
    return value.trim()
  }

  const before = value.slice(0, separatorIndex).trim()
  const after = value.slice(separatorIndex + 1).trim()

  if (locale === "fa") {
    return before || after || ""
  }

  return after || before || ""
}
