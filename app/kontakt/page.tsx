import type { Metadata } from "next";
import { FormularzKontaktowy } from "@/components/FormularzKontaktowy";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Formularz kontaktowy i adres e-mail do zgłaszania błędów oraz pytań o projekt.",
  alternates: { canonical: `${siteConfig.url}/kontakt` },
};

export default function StronaKontakt() {
  return (
    <main id="tresc-glowna">
      <section>
        <div className="container container--tresc">
          <p className="kicker">Kontakt</p>
          <h1 className="naglowek-sekcji" style={{ marginTop: "0.75rem" }}>
            Pytanie, uwaga albo znaleziony błąd
          </h1>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Najlepiej działa krótki, konkretny opis sytuacji — jeśli to błąd w rozgrywce, dopisz numer
            tury, w której go zauważyłeś lub zauważyłaś.
          </p>

          <div style={{ marginTop: "2.5rem" }}>
            <FormularzKontaktowy />
          </div>

          <hr className="separator" style={{ margin: "2.5rem 0" }} />

          <p style={{ color: "var(--tekst-przygaszony)" }}>
            Adres bezpośredni: <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.
            Odpowiadamy zwykle w ciągu kilku dni roboczych.
          </p>
        </div>
      </section>
    </main>
  );
}
