import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacje o przetwarzaniu danych, plikach cookie i localStorage w serwisie.",
  alternates: { canonical: `${siteConfig.url}/polityka-prywatnosci` },
  robots: { index: true, follow: true },
};

export default function StronaPolitykaPrywatnosci() {
  return (
    <main id="tresc-glowna">
      <section>
        <div className="container container--tresc">
          <p className="kicker">Dokument</p>
          <h1 className="naglowek-sekcji" style={{ marginTop: "0.75rem" }}>Polityka prywatności</h1>
          <p style={{ marginTop: "0.75rem", color: "var(--tekst-przygaszony)" }}>
            Ostatnia aktualizacja: wrzesień 2025.
          </p>

          <div style={{ marginTop: "2.5rem", display: "grid", gap: "2rem" }}>
            <div>
              <h2 style={{ fontSize: "1.2rem" }}>1. Administrator</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Administratorem danych przetwarzanych w związku z korzystaniem z tego serwisu jest osoba
                prowadząca projekt, dostępna pod adresem e-mail wskazanym na stronie{" "}
                <a href="/kontakt" style={{ color: "var(--akcent)", fontWeight: 600 }}>kontaktowej</a>.
                Pełne dane rejestrowe administratora zostaną uzupełnione tutaj przed uruchomieniem
                docelowej domeny i kampanii promocyjnej.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>2. Jakie dane przetwarzamy</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Przeglądanie strony głównej oraz korzystanie z poligonu testowego pod /graj nie wymaga
                podania żadnych danych osobowych. Jeśli skorzystasz z formularza kontaktowego, przetwarzamy
                treść wiadomości oraz — jeśli zdecydujesz się go podać — adres e-mail do odpowiedzi.
                Formularz kontaktowy otwiera Twój lokalny program pocztowy; treść wiadomości nie jest
                zapisywana na serwerze tego serwisu.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>3. Cookies i localStorage</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Serwis zapisuje w przeglądarce dwa rodzaje danych technicznych: stan rozgrywki w poligonie
                testowym oraz Twoją decyzję z komunikatu o plikach cookie. Dane te pozostają wyłącznie na
                Twoim urządzeniu i nie są przesyłane do administratora.
              </p>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Po uruchomieniu kampanii promującej ten projekt planujemy dodać pliki cookie związane z
                pomiarem ruchu i skutecznością kampanii reklamowej (np. narzędzia Google). Ta sekcja
                zostanie zaktualizowana o pełną listę takich plików, ich cel i czas przechowywania, zanim
                zostaną włączone.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>4. Cele i podstawy prawne przetwarzania</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Dane z formularza kontaktowego przetwarzane są w celu udzielenia odpowiedzi na zgłoszenie,
                na podstawie prawnie uzasadnionego interesu administratora (art. 6 ust. 1 lit. f RODO).
                Dane techniczne zapisywane lokalnie w przeglądarce przetwarzane są w celu zapewnienia
                działania poligonu testowego, na podstawie zgody wyrażonej przez korzystanie z serwisu
                (art. 6 ust. 1 lit. a RODO).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>5. Odbiorcy danych</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Serwis jest hostowany u zewnętrznego dostawcy infrastruktury chmurowej, który technicznie
                obsługuje ruch sieciowy do strony. Po uruchomieniu narzędzi analitycznych lub reklamowych
                odbiorcą ograniczonego zakresu danych może stać się także ich dostawca — informacja ta
                zostanie uzupełniona przed włączeniem takich narzędzi.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>6. Okres przechowywania</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Wiadomości z formularza kontaktowego przechowujemy przez czas niezbędny do udzielenia
                odpowiedzi i rozwiązania zgłoszenia. Dane zapisane lokalnie w przeglądarce przechowywane są
                do momentu ich ręcznego wyczyszczenia przez użytkownika.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>7. Twoje prawa</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Masz prawo do dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
                przetwarzania oraz sprzeciwu wobec przetwarzania. W sprawie realizacji tych praw napisz na
                adres podany na stronie kontaktowej. Przysługuje Ci również prawo wniesienia skargi do
                Prezesa Urzędu Ochrony Danych Osobowych.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>8. Bezpieczeństwo</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                Połączenie z serwisem jest szyfrowane (protokół HTTPS). Dane techniczne zapisywane lokalnie
                w przeglądarce nie opuszczają Twojego urządzenia w obecnej wersji serwisu.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.2rem" }}>9. Zmiany polityki</h2>
              <p style={{ marginTop: "0.6rem", color: "var(--tekst-podstawowy)" }}>
                W miarę rozwoju projektu — w tym przy wprowadzeniu kont użytkowników, narzędzi
                analitycznych lub kampanii reklamowej — niniejsza polityka będzie aktualizowana. Aktualną
                wersję zawsze znajdziesz pod tym adresem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
