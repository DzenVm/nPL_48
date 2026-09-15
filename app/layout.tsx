import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import { Naglowek } from "@/components/Naglowek";
import { Stopka } from "@/components/Stopka";
import { ZgodaCookies } from "@/components/ZgodaCookies";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Przeglądarkowa gra strategiczna dla jednego gracza",
    template: "%s",
  },
  description:
    "Gra strategiczna czasu tur, rozgrywana w całości w przeglądarce, wyłącznie dla jednego gracza. Gospodarka oparta na realnym deficycie surowców, generowany od nowa teren i sezonowe kryzysy z jasną przyczyną.",
  keywords: [
    "gra strategiczna przeglądarkowa",
    "gra strategiczna dla jednego gracza",
    "gra ekonomiczna online",
    "strategia turowa w przeglądarce",
  ],
  authors: [{ name: "Zespół projektu" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteConfig.url,
    title: "Przeglądarkowa gra strategiczna dla jednego gracza",
    description:
      "Turowa gra ekonomiczna bez instalacji: deficytowe zasoby, generowany teren, sezonowe kryzysy i dziedzictwo między partiami.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Przeglądarkowa gra strategiczna dla jednego gracza",
    description:
      "Turowa gra ekonomiczna bez instalacji: deficytowe zasoby, generowany teren, sezonowe kryzysy i dziedzictwo między partiami.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${karla.variable}`}>
      <body>
        <a href="#tresc-glowna" className="skip-link">
          Przejdź do treści głównej
        </a>
        <Naglowek />
        {children}
        <Stopka />
        <ZgodaCookies />
      </body>
    </html>
  );
}
