import type { Metadata } from "next";
import Link from "next/link";
import styles from "../Home.module.css";
import { faq } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Najczęstsze pytania o grę",
  description: "Odpowiedzi na pytania o instalację, zapis postępu, długość sesji, przeglądarki i zgłaszanie błędów.",
  alternates: { canonical: `${siteConfig.url}/faq` },
};

export default function StronaFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((p) => ({
      "@type": "Question",
      name: p.pytanie,
      acceptedAnswer: { "@type": "Answer", text: p.odpowiedz },
    })),
  };

  return (
    <main id="tresc-glowna">
      <section>
        <div className="container container--tresc">
          <p className="kicker">Pytania i odpowiedzi</p>
          <h1 className="naglowek-sekcji" style={{ marginTop: "0.75rem" }}>
            Wszystko, o co pytają najczęściej
          </h1>
          <p className="lead" style={{ marginTop: "1rem" }}>
            Jeśli czegoś tu nie ma, napisz przez{" "}
            <Link href="/kontakt" style={{ color: "var(--akcent)", fontWeight: 600 }}>
              formularz kontaktowy
            </Link>
            .
          </p>

          <div style={{ marginTop: "2.5rem" }}>
            {faq.map((p) => (
              <details key={p.id} className={styles.faqSzczegoly}>
                <summary>{p.pytanie}</summary>
                <p className={styles.faqOdpowiedz}>{p.odpowiedz}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
