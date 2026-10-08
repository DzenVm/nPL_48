/**
 * Domyślny adres witryny; można go nadpisać zmienną środowiskową.
 */
const DEFAULT_SITE_URL = "https://qemlorvixa.live";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/$/, "");

export const siteConfig = {
  url: siteUrl,
  locale: "pl_PL",
  language: "pl",
  region: "PL",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@qemlorvixa.live",
} as const;
