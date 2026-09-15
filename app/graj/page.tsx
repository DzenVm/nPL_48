import type { Metadata } from "next";
import Link from "next/link";
import { PoligonDemo } from "@/components/PoligonDemo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Poligon testowy — sprawdź pierwsze tury w przeglądarce",
  description:
    "Fragment silnika w obecnym stanie prac: zajmuj sąsiednie pola, planuj zapasy zboża i drewna, unikaj buntu. Bez instalacji, bez rejestracji.",
  alternates: { canonical: `${siteConfig.url}/graj` },
};

export default function StronaGraj() {
  return (
    <main id="tresc-glowna">
      <section style={{ paddingBottom: "1rem" }}>
        <div className="container container--sekcja">
          <p className="kicker">Poligon testowy</p>
          <h1 className="naglowek-sekcji" style={{ marginTop: "0.75rem", maxWidth: "38ch" }}>
            To nie zwiastun. To fragment silnika, taki, jaki jest dzisiaj.
          </h1>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Piętnaście tur, jedno terytorium, trzy zasoby do pilnowania naraz. Ta plansza pokazuje
            uproszczoną wersję pętli gospodarczej opisanej w sekcji mechanik — zajmowanie pól, plony
            zależne od terenu i próg niezadowolenia, który kończy partię, jeśli zabraknie zboża na
            zbyt wiele tur. Pełna wersja ma większą mapę, ekspedycje i cztery ery technologii.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container container--sekcja">
          <div className="karta" style={{ padding: "clamp(1.25rem, 3vw, 2.5rem)" }}>
            <PoligonDemo />
          </div>

          <div className="siatka siatka--3" style={{ marginTop: "3rem" }}>
            <div>
              <h2 style={{ fontSize: "1.05rem" }}>Jak zacząć</h2>
              <p style={{ marginTop: "0.5rem", color: "var(--tekst-przygaszony)" }}>
                Kliknij podświetlone pole sąsiadujące z Twoim terytorium, żeby je zająć. Każde zajęcie
                kosztuje drewno i kamień z bieżących zapasów.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: "1.05rem" }}>Co robi &bdquo;Zakończ turę&rdquo;</h2>
              <p style={{ marginTop: "0.5rem", color: "var(--tekst-przygaszony)" }}>
                Nalicza plony ze wszystkich zajętych pól, odejmuje zboże na wyżywienie proporcjonalne do
                wielkości osady i sprawdza, czy nie przekroczono progu niezadowolenia.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: "1.05rem" }}>Czego tu nie ma</h2>
              <p style={{ marginTop: "0.5rem", color: "var(--tekst-przygaszony)" }}>
                Ekspedycji, drzewka technologii i archiwum dziedzictwa — to elementy pełnej wersji,
                opisane dokładnie na stronie{" "}
                <Link href="/mechanika" style={{ color: "var(--akcent)", fontWeight: 600 }}>
                  mechanik
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
