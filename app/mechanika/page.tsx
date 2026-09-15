import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../Home.module.css";
import { mechaniki, ilustracje } from "@/lib/content";
import { eryTechnologii, tabelaSurowcow } from "@/lib/content/technologie";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mechanika gry — gospodarka, technologia, ekspedycje, kryzysy",
  description:
    "Pełny opis systemów gry: deficytowa gospodarka, cztery ery technologii, ekspedycje z mgłą zwiadu, kryzysy sezonowe i dziedzictwo przenoszone między partiami.",
  alternates: { canonical: `${siteConfig.url}/mechanika` },
};

const MAPA_ILUSTRACJI: Record<string, string> = {
  gospodarka: "przeplyw-surowcow",
  populacja: "trzy-wskazniki",
  technologia: "drzewo-technologii",
  ekspedycje: "mapa-mgly",
  kryzysy: "pas-sezonow",
  "dziedzictwo-miedzy-partiami": "archiwum",
};

export default function StronaMechanika() {
  return (
    <main id="tresc-glowna">
      <section style={{ paddingBottom: "1rem" }}>
        <div className="container container--sekcja">
          <p className="kicker">Dokumentacja mechaniki</p>
          <h1 className="naglowek-sekcji" style={{ marginTop: "0.75rem", maxWidth: "34ch" }}>
            Wszystkie systemy gry, opisane tak jak działają dzisiaj
          </h1>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Ta strona jest odpowiednikiem wewnętrznej dokumentacji projektowej, tylko dostępnym publicznie.
            Zamiast skrótowych haseł marketingowych — konkretne liczby, wyjątki i decyzje, które zapadły
            po testach. Jeśli szukasz szybkiego podglądu, wróć na{" "}
            <Link href="/" style={{ color: "var(--akcent)", fontWeight: 600 }}>
              stronę główną
            </Link>{" "}
            albo od razu przejdź do{" "}
            <Link href="/graj" style={{ color: "var(--akcent)", fontWeight: 600 }}>
              poligonu testowego
            </Link>
            .
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container container--sekcja">
          {mechaniki.map((m, idx) => {
            const idIlustracji = MAPA_ILUSTRACJI[m.id] ?? "";
            const ilustracja = ilustracje.find((i) => i.id === idIlustracji)!;
            return (
              <div key={m.id} className={`${styles.mechanikaRzad} ${idx % 2 === 1 ? styles.odwrocony : ""}`}>
                <div>
                  <span className={styles.mechanikaNumer}>{m.numer}</span>
                  <h2 className={styles.mechanikaTytul}>{m.tytul}</h2>
                  <p className={styles.mechanikaWstep}>{m.wstep}</p>
                  {m.akapity.map((a, i) => (
                    <p key={i} className={styles.mechanikaAkapit}>
                      {a}
                    </p>
                  ))}
                  {m.punkty && (
                    <ul className={styles.mechanikaPunkty}>
                      {m.punkty.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={styles.mechanikaObraz}>
                  <Image src={ilustracja.plik} alt={ilustracja.alt} width={800} height={600} style={{ width: "100%", height: "auto" }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.oS}>
        <div className="container container--sekcja">
          <p className="kicker">Surowce w liczbach</p>
          <h2 className="naglowek-sekcji" style={{ marginTop: "0.6rem" }}>Jak dokładnie psują się i kosztują zasoby</h2>
          <div style={{ overflowX: "auto", marginTop: "2rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "640px" }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "2px solid var(--linia)" }}>
                  <th style={{ padding: "0.75rem 0.5rem" }}>Surowiec</th>
                  <th style={{ padding: "0.75rem 0.5rem" }}>Psucie się</th>
                  <th style={{ padding: "0.75rem 0.5rem" }}>Transport</th>
                  <th style={{ padding: "0.75rem 0.5rem" }}>Źródło</th>
                </tr>
              </thead>
              <tbody>
                {tabelaSurowcow.map((w) => (
                  <tr key={w.surowiec} style={{ borderBottom: "1px solid var(--linia)" }}>
                    <td style={{ padding: "0.75rem 0.5rem", fontWeight: 600 }}>{w.surowiec}</td>
                    <td style={{ padding: "0.75rem 0.5rem", color: "var(--tekst-przygaszony)" }}>{w.psucieSie}</td>
                    <td style={{ padding: "0.75rem 0.5rem", color: "var(--tekst-przygaszony)" }}>{w.transport}</td>
                    <td style={{ padding: "0.75rem 0.5rem", color: "var(--tekst-przygaszony)" }}>{w.zrodlo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="container container--sekcja">
          <p className="kicker">Przykłady z drzewka technologii</p>
          <h2 className="naglowek-sekcji" style={{ marginTop: "0.6rem" }}>Cztery ery i przykładowe technologie z każdej</h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            To wybrane przykłady, nie pełna lista — drzewko ma około 55 pozycji łącznie. Zakresy tur są
            orientacyjne i zależą od wybranego scenariusza.
          </p>
          <div className="siatka siatka--2" style={{ marginTop: "2.5rem" }}>
            {eryTechnologii.map((e) => (
              <div key={e.era} className="karta" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontSize: "1.15rem" }}>{e.era}</h3>
                <p style={{ marginTop: "0.3rem", fontSize: "0.85rem", color: "var(--tekst-przygaszony)" }}>{e.zakresTur}</p>
                <ul style={{ marginTop: "1rem", paddingLeft: "1.1rem", color: "var(--tekst-podstawowy)", display: "grid", gap: "0.4rem" }}>
                  {e.przyklady.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container container--tresc">
          <h2 className="naglowek-sekcji">Teoria już poznana — czas na pierwszą turę</h2>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/graj" className="btn btn--pierwszy" style={{ background: "var(--atrament-900)" }}>
              Przejdź do poligonu testowego
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
