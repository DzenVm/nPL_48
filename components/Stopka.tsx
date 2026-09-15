import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Stopka() {
  const rok = new Date().getFullYear();
  return (
    <footer style={{ borderTop: "1px solid var(--linia)", background: "var(--papier-100)" }}>
      <div className="container" style={{ paddingBlock: "clamp(2.5rem, 5vw, 4rem)" }}>
        <div
          className="siatka siatka--4"
          style={{ marginBottom: "2.5rem" }}
        >
          <div>
            <h2 style={{ fontSize: "0.95rem", marginBottom: "0.9rem" }}>Projekt</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.55rem" }}>
              <li><Link href="/">Strona główna</Link></li>
              <li><Link href="/mechanika">Mechanika</Link></li>
              <li><Link href="/graj">Poligon testowy</Link></li>
            </ul>
          </div>
          <div>
            <h2 style={{ fontSize: "0.95rem", marginBottom: "0.9rem" }}>Pomoc</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.55rem" }}>
              <li><Link href="/faq">Najczęstsze pytania</Link></li>
              <li><Link href="/kontakt">Kontakt i zgłoszenia</Link></li>
            </ul>
          </div>
          <div>
            <h2 style={{ fontSize: "0.95rem", marginBottom: "0.9rem" }}>Dokumenty</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.55rem" }}>
              <li><Link href="/regulamin">Regulamin</Link></li>
              <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
            </ul>
          </div>
          <div>
            <h2 style={{ fontSize: "0.95rem", marginBottom: "0.9rem" }}>Kontakt</h2>
            <p style={{ color: "var(--tekst-przygaszony)", fontSize: "0.92rem" }}>
              <a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
            </p>
          </div>
        </div>
        <hr className="separator" />
        <p style={{ marginTop: "1.5rem", fontSize: "0.82rem", color: "var(--tekst-przygaszony)" }}>
          © {rok} — projekt w aktywnej fazie rozwoju. Treści, ilustracje i kod tej strony powstały
          niezależnie na potrzeby tego serwisu.
        </p>
      </div>
    </footer>
  );
}
