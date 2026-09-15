import Link from "next/link";

export function Naglowek() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(250, 247, 239, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--linia)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBlock: "1rem",
          gap: "1.5rem",
        }}
      >
        <span aria-hidden="true" />
        <nav aria-label="Nawigacja główna" style={{ display: "flex", alignItems: "center", gap: "clamp(0.9rem, 2vw, 1.9rem)", flexWrap: "wrap" }}>
          <Link href="/mechanika" style={{ fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
            Mechanika
          </Link>
          <Link href="/faq" style={{ fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
            FAQ
          </Link>
          <Link href="/kontakt" style={{ fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
            Kontakt
          </Link>
          <Link href="/graj" className="btn btn--pierwszy" style={{ padding: "0.6rem 1.25rem", fontSize: "0.9rem" }}>
            Zagraj teraz
          </Link>
        </nav>
      </div>
    </header>
  );
}
