"use client";

import { useEffect, useState } from "react";
import styles from "./PoligonDemo.module.css";
import { R, HEX_HEIGHT, SZEROKOSC_PLANSZY, WYSOKOSC_PLANSZY, NAZWA_TERENU, saNasiadami, type Teren } from "@/lib/hex-demo";
import { nowyStan, poligonReducer, CEL_POL, MAX_NIEZADOWOLENIE, type StanPoligonu } from "@/lib/poligon-silnik";

const KLASA_TERENU: Record<Teren, string> = {
  las: styles["pole--las"] ?? "",
  rowniny: styles["pole--rowniny"] ?? "",
  wzgorza: styles["pole--wzgorza"] ?? "",
  gory: styles["pole--gory"] ?? "",
};

export function PoligonDemo() {
  const [stan, setStan] = useState<StanPoligonu | null>(null);

  // Plansza losuje się dopiero po zamontowaniu na kliencie, żeby serwer
  // (który nie zna wyniku Math.random) i przeglądarka renderowały to samo.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- losowa plansza musi powstać po stronie klienta
    setStan(nowyStan());
  }, []);

  if (!stan) {
    return (
      <div className="karta" style={{ padding: "2rem", textAlign: "center", color: "var(--tekst-przygaszony)" }}>
        Przygotowywanie poligonu…
      </div>
    );
  }

  const mozliweDoZajecia = new Set(
    stan.pola
      .filter((p) => !stan.zajete.has(p.id))
      .filter((p) => stan.pola.some((z) => stan.zajete.has(z.id) && saNasiadami(z, p)))
      .map((p) => p.id)
  );

  const dispatch = (akcja: Parameters<typeof poligonReducer>[1]) =>
    setStan((prev) => (prev ? poligonReducer(prev, akcja) : prev));

  return (
    <div className={styles.opakowanie}>
      <div>
        <div
          className={styles.plansza}
          style={{ width: SZEROKOSC_PLANSZY, height: WYSOKOSC_PLANSZY, maxWidth: "100%" }}
        >
          {stan.pola.map((pole) => {
            const zajete = stan.zajete.has(pole.id);
            const mozliwe = mozliweDoZajecia.has(pole.id);
            const klasy = [
              styles.pole,
              KLASA_TERENU[pole.teren],
              zajete ? styles["pole--zajete"] : "",
              !zajete && mozliwe ? styles["pole--mozliwe"] : "",
              !zajete && !mozliwe ? styles["pole--niedostepne"] : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <button
                key={pole.id}
                type="button"
                className={klasy}
                disabled={zajete || !mozliwe || stan.status !== "trwa"}
                onClick={() => dispatch({ type: "ZAJMIJ", id: pole.id })}
                style={{
                  left: pole.cx - R,
                  top: pole.cy - HEX_HEIGHT / 2,
                  width: R * 2,
                  height: HEX_HEIGHT,
                }}
                aria-label={`${NAZWA_TERENU[pole.teren]}${zajete ? ", zajęte" : mozliwe ? ", możliwe do zajęcia" : ", poza zasięgiem"}`}
              >
                {zajete ? "✓" : mozliwe ? NAZWA_TERENU[pole.teren][0] : ""}
              </button>
            );
          })}
        </div>
        <p className={styles.legenda} style={{ marginTop: "1.25rem" }}>
          {(Object.keys(NAZWA_TERENU) as Teren[]).map((t) => (
            <span key={t}>
              <span
                className={styles.legendaKropka}
                style={{
                  background:
                    t === "las"
                      ? "var(--zielen-600)"
                      : t === "rowniny"
                      ? "var(--miedz-400)"
                      : t === "wzgorza"
                      ? "var(--atrament-500)"
                      : "var(--czerwien-600)",
                }}
              />
              {NAZWA_TERENU[t]}
            </span>
          ))}
        </p>
      </div>

      <div className={styles.panel}>
        <div className={styles.stanGry}>
          <span>Tura: {stan.tura}</span>
          <span>Zajęte pola: {stan.zajete.size} / {CEL_POL}</span>
          <span>Niezadowolenie: {stan.niezadowolenie} / {MAX_NIEZADOWOLENIE}</span>
        </div>

        <ul className={styles.zasobyLista}>
          <li className={styles.zasob}>
            <span className={styles.zasobEtykieta}>Drewno</span>
            <span className={styles.zasobWartosc}>{stan.zasoby.drewno}</span>
          </li>
          <li className={styles.zasob}>
            <span className={styles.zasobEtykieta}>Kamień</span>
            <span className={styles.zasobWartosc}>{stan.zasoby.kamien}</span>
          </li>
          <li className={styles.zasob}>
            <span className={styles.zasobEtykieta}>Zboże</span>
            <span className={styles.zasobWartosc}>{stan.zasoby.zboze}</span>
          </li>
          <li className={styles.zasob}>
            <span className={styles.zasobEtykieta}>Ruda</span>
            <span className={styles.zasobWartosc}>{stan.zasoby.ruda}</span>
          </li>
        </ul>

        {stan.status !== "trwa" && (
          <p
            className={`${styles.komunikatKonca} ${
              stan.status === "wygrana" ? styles["komunikatKonca--wygrana"] : styles["komunikatKonca--przegrana"]
            }`}
          >
            {stan.status === "wygrana"
              ? `Poligon zaliczony — osada urosła do ${stan.zajete.size} pól bez utraty stabilności.`
              : "Osada się zbuntowała. Zbyt długo brakowało zboża na wyżywienie."}
          </p>
        )}

        <div className={styles.przyciski}>
          <button
            type="button"
            className="btn btn--pierwszy"
            onClick={() => dispatch({ type: "ZAKONCZ_TURE" })}
            disabled={stan.status !== "trwa"}
          >
            Zakończ turę
          </button>
          <button type="button" className="btn btn--drugi" onClick={() => dispatch({ type: "RESET" })}>
            Nowa partia
          </button>
        </div>

        <ul className={styles.dziennik}>
          {stan.log.map((wpis, i) => (
            <li key={i}>{wpis}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
