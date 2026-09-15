"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ZgodaCookies.module.css";

const KLUCZ = "zgoda-cookies-v1";

export function ZgodaCookies() {
  const [widoczny, setWidoczny] = useState(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- odczyt localStorage jest możliwy tylko po zamontowaniu */
    try {
      const zapisano = window.localStorage.getItem(KLUCZ);
      if (!zapisano) setWidoczny(true);
    } catch {
      setWidoczny(true);
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  function zapisz(wartosc: "zaakceptowano" | "tylko-niezbedne") {
    try {
      window.localStorage.setItem(KLUCZ, wartosc);
    } catch {
      // przeglądarka blokuje localStorage — komunikat po prostu się zamknie
    }
    setWidoczny(false);
  }

  if (!widoczny) return null;

  return (
    <div className={styles.pasek} role="dialog" aria-label="Informacja o plikach cookie">
      <p className={styles.tresc}>
        Zapisujemy w przeglądarce wyłącznie dane niezbędne do działania serwisu, m.in. stan poligonu
        testowego i Twój wybór z tego komunikatu. Gdy ruszy kampania promująca ten projekt, dołączą
        też pliki analityczne opisane w{" "}
        <Link href="/polityka-prywatnosci">polityce prywatności</Link>.
      </p>
      <div className={styles.przyciski}>
        <button type="button" className="btn btn--drugi btn--na-ciemnym" onClick={() => zapisz("tylko-niezbedne")}>
          Tylko niezbędne
        </button>
        <button type="button" className="btn btn--pierwszy" onClick={() => zapisz("zaakceptowano")}>
          Rozumiem
        </button>
      </div>
    </div>
  );
}
