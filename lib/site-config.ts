/**
 * Miejsce podpięcia docelowej domeny — do podmiany, gdy tylko domena zostanie
 * przydzielona. Do tego czasu build i podgląd działają na wartości zastępczej,
 * więc żadna ścieżka SEO/meta nie jest ślepa.
 */
const PLACEHOLDER_DOMAIN = "https://domena-do-podmiany.pl";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? PLACEHOLDER_DOMAIN).replace(/\/$/, "");

export const siteConfig = {
  url: siteUrl,
  locale: "pl_PL",
  language: "pl",
  region: "PL",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "kontakt@domena-do-podmiany.pl",
} as const;
