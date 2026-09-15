import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Zasady korzystania z serwisu i z udostępnionego w nim poligonu testowego gry.",
  alternates: { canonical: `${siteConfig.url}/regulamin` },
  robots: { index: true, follow: true },
};

export default function StronaRegulamin() {
  return (
    <main id="tresc-glowna">
      <section>
        <div className="container container--tresc">
          <p className="kicker">Dokument</p>
          <h1 className="naglowek-sekcji" style={{ marginTop: "0.75rem" }}>Regulamin serwisu</h1>
          <p style={{ marginTop: "0.75rem", color: "var(--tekst-przygaszony)" }}>
            Ostatnia aktualizacja: wrzesień 2025. Regulamin będzie uzupełniany w miarę rozwoju projektu —
            aktualną wersję zawsze znajdziesz pod tym adresem.
          </p>

          <div style={{ marginTop: "2.5rem", display: "grid", gap: "2rem" }}>
            <div>
              <h2 style={{ fontSize: "1.2rem" }}>1. Postanowienia ogólne</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Serwis dostępny pod tą domeną prezentuje informacje o rozwijanej przeglądarkowej grze
                strategicznej dla jednego gracza oraz udostępnia jej fragment w formie poligonu testowego
                pod adresem /graj. Projekt znajduje się w aktywnej fazie rozwoju, co oznacza, że zakres
                treści, dostępne funkcje i sam poligon testowy mogą się zmieniać bez wcześniejszej
                zapowiedzi.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>2. Charakter usługi</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Serwis nie wymaga rejestracji ani podawania danych osobowych, żeby zapoznać się z treścią
                strony głównej ani żeby sprawdzić poligon testowy. Rozgrywka w obecnej wersji jest
                jednoosobowa i nie zawiera żadnych elementów porównywania wyników między użytkownikami ani
                komunikacji między użytkownikami.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>3. Zapis postępu w poligonie testowym</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Stan rozgrywki w poligonie testowym oraz decyzja podjęta w komunikacie o plikach cookie
                zapisywane są lokalnie, w pamięci przeglądarki urządzenia (localStorage). Wyczyszczenie
                danych przeglądarki, zmiana urządzenia albo tryb prywatny spowodują utratę tego zapisu.
                Serwis nie ponosi odpowiedzialności za utratę postępu zapisanego w ten sposób.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>4. Odpowiednie korzystanie</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Zabronione jest podejmowanie działań mających na celu zakłócenie działania serwisu,
                automatyczne pobieranie treści w sposób obciążający infrastrukturę ponad typowe użycie
                przez pojedynczego użytkownika, a także wykorzystywanie treści serwisu w sposób naruszający
                obowiązujące prawo.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>5. Własność treści</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Teksty, ilustracje oraz kod interaktywnego poligonu testowego dostępnego na tej stronie
                zostały przygotowane na potrzeby tego projektu. Kopiowanie i rozpowszechnianie tych
                materiałów poza serwisem, bez wcześniejszej zgody, jest niedozwolone.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>6. Ograniczenie odpowiedzialności</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Poligon testowy jest udostępniany w obecnym stanie prac i może zawierać błędy typowe dla
                wersji rozwojowej. Serwis dokłada starań, aby treści były aktualne i rzetelne, natomiast
                nie gwarantuje nieprzerwanej dostępności serwisu ani braku przerw technicznych.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>7. Zmiany regulaminu</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Regulamin może być aktualizowany wraz z rozwojem projektu, w tym w związku z wprowadzeniem
                kont użytkowników albo pełnej wersji gry. Zmiany wchodzą w życie z chwilą publikacji nowej
                wersji tej strony.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>8. Kontakt</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Pytania dotyczące regulaminu można kierować na adres wskazany na stronie{" "}
                <a href="/kontakt" style={{ color: "var(--akcent)", fontWeight: 600 }}>kontaktowej</a>.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>9. Prawo właściwe</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa
                polskiego.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
