"use client";

import { useState, type FormEvent, type CSSProperties } from "react";
import { siteConfig } from "@/lib/site-config";

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "0.75rem 0.9rem",
  borderRadius: "var(--promien-s)",
  border: "1.5px solid var(--linia)",
  background: "var(--tlo-karty)",
  fontFamily: "var(--font-body)",
  fontSize: "0.95rem",
};

export function FormularzKontaktowy() {
  const [temat, setTemat] = useState("Zgłoszenie błędu w rozgrywce");
  const [wiadomosc, setWiadomosc] = useState("");
  const [email, setEmail] = useState("");
  const [wyslano, setWyslano] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const tresc = `${wiadomosc}${email ? `\n\nAdres do odpowiedzi: ${email}` : ""}`;
    const url = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(temat)}&body=${encodeURIComponent(tresc)}`;
    window.location.href = url;
    setWyslano(true);
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.1rem", maxWidth: "36rem" }}>
      <label style={{ display: "grid", gap: "0.4rem", fontSize: "0.9rem", fontWeight: 600 }}>
        Temat
        <select value={temat} onChange={(e) => setTemat(e.target.value)} style={inputStyle}>
          <option>Zgłoszenie błędu w rozgrywce</option>
          <option>Pytanie ogólne</option>
          <option>Uwaga do treści na stronie</option>
          <option>Inne</option>
        </select>
      </label>

      <label style={{ display: "grid", gap: "0.4rem", fontSize: "0.9rem", fontWeight: 600 }}>
        Twoja wiadomość
        <textarea
          required
          rows={6}
          value={wiadomosc}
          onChange={(e) => setWiadomosc(e.target.value)}
          placeholder="Jeśli zgłaszasz błąd, podaj proszę numer tury i krótki opis sytuacji."
          style={{ ...inputStyle, resize: "vertical", fontFamily: "var(--font-body)" }}
        />
      </label>

      <label style={{ display: "grid", gap: "0.4rem", fontSize: "0.9rem", fontWeight: 600 }}>
        Adres e-mail do odpowiedzi (opcjonalnie)
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="twoj@email.pl"
          style={inputStyle}
        />
      </label>

      <button type="submit" className="btn btn--pierwszy" style={{ justifySelf: "start" }}>
        Otwórz w programie pocztowym
      </button>

      <p style={{ fontSize: "0.85rem", color: "var(--tekst-przygaszony)" }}>
        Formularz nie wysyła niczego samodzielnie — po kliknięciu otworzy się Twój domyślny program
        pocztowy z gotową wiadomością do {siteConfig.contactEmail}. Możesz też napisać bezpośrednio,
        pomijając formularz.
      </p>

      {wyslano && (
        <p role="status" style={{ fontSize: "0.9rem", color: "var(--zielen-600)" }}>
          Jeśli program pocztowy się nie otworzył, skopiuj adres i napisz bezpośrednio.
        </p>
      )}
    </form>
  );
}
