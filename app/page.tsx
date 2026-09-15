import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./Home.module.css";
import { HeksagonalneTlo } from "@/components/HeksagonalneTlo";
import { PoligonDemo } from "@/components/PoligonDemo";
import { filary, mechaniki, scenariusze, dziennik, faq, ilustracje } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function znajdzIlustracje(id: string) {
  return ilustracje.find((i) => i.id === id)!;
}

const MAPA_ILUSTRACJI: Record<string, string> = {
  gospodarka: "przeplyw-surowcow",
  populacja: "trzy-wskazniki",
  technologia: "drzewo-technologii",
  ekspedycje: "mapa-mgly",
  kryzysy: "pas-sezonow",
  "dziedzictwo-miedzy-partiami": "archiwum",
};

export default function StronaGlowna() {
  const jsonLdGra = {
    "@context": "https://schema.org",
    "@type": "Game",
    name: "Przeglądarkowa gra strategiczna dla jednego gracza",
    description:
      "Turowa gra ekonomiczna rozgrywana w przeglądarce. Zarządzanie deficytowymi surowcami, generowany od nowa teren, sezonowe kryzysy i dziedzictwo przenoszone między partiami.",
    genre: "Strategia",
    playMode: "SinglePlayer",
    inLanguage: "pl",
    numberOfPlayers: { "@type": "QuantitativeValue", minValue: 1, maxValue: 1 },
    url: siteConfig.url,
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.slice(0, 6).map((p) => ({
      "@type": "Question",
      name: p.pytanie,
      acceptedAnswer: { "@type": "Answer", text: p.odpowiedz },
    })),
  };

  return (
    <main id="tresc-glowna">
      {/* HERO */}
      <section className={styles.hero}>
        <HeksagonalneTlo />
        <div className="container container--sekcja">
          <div className={styles.heroTresc}>
            <p className={`kicker ${styles.heroKicker}`}>Strategia turowa · wyłącznie w przeglądarce</p>
            <h1 className={styles.heroTytul}>
              Osada, w której zboże naprawdę się kończy, a mapa nigdy nie wygląda tak samo
            </h1>
            <p className={styles.heroLead}>
              To gra dla jednej osoby, bez rankingów i bez porównywania wyników z innymi graczami.
              Każda tura to decyzja o tym, co zrobić z ograniczonym drewnem, kamieniem i zbożem —
              a każda zła decyzja jest widoczna dopiero kilka tur później, kiedy jest już trudniej ją
              naprawić.
            </p>
            <div className={styles.heroAkcje}>
              <Link href="/graj" className="btn btn--pierwszy">
                Zagraj teraz — poligon testowy
              </Link>
              <a href="#mechanika" className="btn btn--drugi btn--na-ciemnym">
                Zobacz, jak to działa
              </a>
            </div>
          </div>

          <div className={styles.statystyki}>
            <div>
              <div className={styles.statLiczba}>4</div>
              <div className={styles.statOpis}>ery techniczne, ok. 55 technologii łącznie</div>
            </div>
            <div>
              <div className={styles.statLiczba}>5+3</div>
              <div className={styles.statOpis}>surowców podstawowych i pochodnych</div>
            </div>
            <div>
              <div className={styles.statLiczba}>0</div>
              <div className={styles.statOpis}>instalacji, wtyczek i kont wymaganych na start</div>
            </div>
            <div>
              <div className={styles.statLiczba}>1</div>
              <div className={styles.statOpis}>gracz — bez trybu wieloosobowego</div>
            </div>
          </div>
        </div>
      </section>

      {/* OPIS PROJEKTU */}
      <section>
        <div className="container container--sekcja">
          <p className="kicker">Czym to właściwie jest</p>
          <h2 className={styles.mechanikaTytul} style={{ marginTop: "0.6rem", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Gra ekonomiczna, w której czas gra na Twoją niekorzyść
          </h2>

          <div className="siatka siatka--2" style={{ marginTop: "2rem" }}>
            <p style={{ color: "var(--tekst-przygaszony)", fontSize: "1.02rem" }}>
              Większość przeglądarkowych gier strategicznych, jakie testowaliśmy przy okazji researchu,
              sprowadza się do klikania w przyciski, które napełniają się same z upływem czasu. Postawiliśmy
              sobie inne pytanie: co, jeśli zasoby faktycznie się kończą, a jedyną walutą jest uwaga
              gracza poświęcona konkretnej turze? Z tego pytania wyszła gospodarka oparta na realnym
              deficycie — zboże psuje się w przepełnionym spichlerzu, drewno drożeje z odległością
              transportu, a ruda po prostu się wyczerpuje w połowie partii.
            </p>
            <p style={{ color: "var(--tekst-przygaszony)", fontSize: "1.02rem" }}>
              Rozgrywka jest turowa i wyłącznie jednoosobowa — świadomie zrezygnowaliśmy z jakiejkolwiek
              formy grania przeciwko innym ludziom. Mapa terenu generuje się od nowa przy każdej partii,
              a poza zasięgiem zwiadu po prostu nie istnieje w silniku, dopóki ktoś tam nie dotrze. Sezony
              przynoszą zagrożenia — suszę, ostrą zimę, zarazę zbożową — których siłę da się przewidzieć
              i ograniczyć wcześniejszymi decyzjami, a nie zgadnąć.
            </p>
          </div>

          <div className="siatka siatka--2" style={{ marginTop: "1.5rem" }}>
            <p style={{ color: "var(--tekst-przygaszony)", fontSize: "1.02rem" }}>
              Partia ma koniec. Każdy z czterech scenariuszy opisanych niżej ma jasny warunek zwycięstwa —
              od przetrwania trzech lat w spokojnej dolinie po osiągnięcie ery Inżynierii przy stu
              mieszkańcach w trudnym terenie. Po zakończeniu partii, niezależnie od wyniku, do archiwum
              trafia jeden trwały wniosek, który można świadomie wykorzystać w kolejnym podejściu.
            </p>
            <p style={{ color: "var(--tekst-przygaszony)", fontSize: "1.02rem" }}>
              Poniżej, w sekcji poligonu testowego, można od razu sprawdzić fragment silnika w obecnym
              stanie prac — bez rejestracji i bez ukrytego czasu ładowania. To nie jest zwiastun ani
              renderowana zapowiedź, tylko realny kod działający w tej chwili w Twojej przeglądarce.
            </p>
          </div>
        </div>
      </section>

      {/* FILARY */}
      <section className={styles.oS}>
        <div className="container container--sekcja">
          <p className="kicker">Cztery założenia, których się trzymamy</p>
          <h2 className="naglowek-sekcji" style={{ marginTop: "0.6rem" }}>
            Zasady, od których nie odstępujemy przy żadnej nowej funkcji
          </h2>
          <div className="siatka siatka--2" style={{ marginTop: "2.5rem" }}>
            {filary.map((f) => (
              <div key={f.id} className="karta" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontSize: "1.15rem" }}>{f.tytul}</h3>
                <p style={{ marginTop: "0.7rem", color: "var(--tekst-przygaszony)" }}>{f.opis}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MECHANIKI */}
      <section id="mechanika">
        <div className="container container--sekcja">
          <p className="kicker">Jak to działa w praktyce</p>
          <h2 className="naglowek-sekcji" style={{ marginTop: "0.6rem", maxWidth: "26ch" }}>
            Sześć systemów, które razem tworzą jedną pętlę rozgrywki
          </h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Każdy z poniższych systemów opisujemy tak, jak wygląda dzisiaj w prototypie — łącznie z
            decyzjami projektowymi, które po drodze zmieniliśmy. Więcej szczegółów, w tym pełne drzewko
            technologii, znajdziesz na stronie{" "}
            <Link href="/mechanika" style={{ color: "var(--akcent)", fontWeight: 600 }}>
              poświęconej mechanice
            </Link>
            .
          </p>

          {mechaniki.map((m, idx) => {
            const ilustracja = znajdzIlustracje(MAPA_ILUSTRACJI[m.id] ?? "");
            return (
              <div key={m.id} className={`${styles.mechanikaRzad} ${idx % 2 === 1 ? styles.odwrocony : ""}`}>
                <div>
                  <span className={styles.mechanikaNumer}>{m.numer}</span>
                  <h3 className={styles.mechanikaTytul}>{m.tytul}</h3>
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
                  <Image
                    src={ilustracja.plik}
                    alt={ilustracja.alt}
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                    priority={idx === 0}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SCENARIUSZE */}
      <section className={styles.oS}>
        <div className="container container--sekcja">
          <p className="kicker">Cztery gotowe scenariusze</p>
          <h2 className="naglowek-sekcji" style={{ marginTop: "0.6rem" }}>
            Od spokojnej doliny po surowe wzgórza bez większości złóż
          </h2>
          <div className="siatka siatka--2" style={{ marginTop: "2.5rem" }}>
            {scenariusze.map((s) => (
              <div key={s.id} className={`karta ${styles.scenariuszKarta}`}>
                <span className={`${styles.trudnosc} ${styles[`trudnosc--${s.trudnosc}`]}`}>
                  {s.trudnosc === "spokojna" ? "spokojna" : s.trudnosc === "wymagajaca" ? "wymagająca" : "surowa"}
                </span>
                <h3 style={{ fontSize: "1.2rem" }}>{s.nazwa}</h3>
                <p style={{ color: "var(--tekst-przygaszony)", fontSize: "0.9rem" }}>{s.dlugosc}</p>
                <p style={{ color: "var(--tekst-podstawowy)" }}>{s.opis}</p>
                <p className={styles.warunek}>
                  <strong>Warunek zwycięstwa:</strong> {s.warunekZwyciestwa}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section>
        <div className="container container--sekcja">
          <p className="kicker">Wypróbuj bez rejestracji</p>
          <h2 className="naglowek-sekcji" style={{ marginTop: "0.6rem", maxWidth: "30ch" }}>
            Piętnaście tur, jedno terytorium — sprawdź to od razu tutaj
          </h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Uproszczona wersja pętli gospodarczej: zajmuj sąsiednie pola, pilnuj zboża na wyżywienie i
            unikaj buntu wywołanego głodem. Pełna wersja rozszerza to o ekspedycje, cztery ery
            technologii i dziedzictwo między partiami.
          </p>
          <div className="karta" style={{ padding: "clamp(1.25rem, 3vw, 2.5rem)", marginTop: "2.5rem" }}>
            <PoligonDemo />
          </div>
        </div>
      </section>

      {/* DZIENNIK ROZWOJU */}
      <section className={styles.oS}>
        <div className="container container--sekcja">
          <p className="kicker">Dziennik rozwoju</p>
          <h2 className="naglowek-sekcji" style={{ marginTop: "0.6rem", maxWidth: "32ch" }}>
            Zmiany, które wprowadziliśmy po testach — łącznie z tymi niewygodnymi
          </h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Zamiast listy funkcji, które kiedyś powstaną, pokazujemy konkretne decyzje i to, co je
            wymusiło. Część z nich to cofnięcie się z wcześniejszego pomysłu.
          </p>
          <ul className={styles.dziennikLista} style={{ marginTop: "2.5rem" }}>
            {dziennik.map((w) => (
              <li key={w.id} className={styles.dziennikWpis}>
                <div>
                  <div className={styles.dziennikData}>{w.data}</div>
                  <span className={`${styles.status} ${styles[`status--${w.status}`]}`}>
                    {w.status === "zakonczone" ? "zakończone" : w.status === "w-trakcie" ? "w trakcie" : "zaplanowane"}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem" }}>{w.tytul}</h3>
                  <p style={{ marginTop: "0.5rem", color: "var(--tekst-przygaszony)" }}>{w.tresc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container container--tresc">
          <p className="kicker">Najczęstsze pytania</p>
          <h2 className="naglowek-sekcji" style={{ marginTop: "0.6rem" }}>
            Zanim napiszesz do nas z pytaniem
          </h2>
          <div style={{ marginTop: "2rem" }}>
            {faq.slice(0, 6).map((p) => (
              <details key={p.id} className={styles.faqSzczegoly}>
                <summary>{p.pytanie}</summary>
                <p className={styles.faqOdpowiedz}>{p.odpowiedz}</p>
              </details>
            ))}
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/faq" style={{ color: "var(--akcent)", fontWeight: 600 }}>
              Zobacz pełną listę pytań i odpowiedzi →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA KOŃCOWE */}
      <section className={styles.finalCta}>
        <div className="container container--tresc">
          <h2 className="naglowek-sekcji">Sprawdź pierwszą turę — zajmuje mniej czasu niż jej opis</h2>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Bez konta, bez pobierania, bez zobowiązań. Zamknij kartę, kiedy zechcesz — stan poligonu
            zapisze się lokalnie w Twojej przeglądarce.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/graj" className="btn btn--pierwszy" style={{ background: "var(--atrament-900)" }}>
              Przejdź do poligonu testowego
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGra) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
    </main>
  );
}
