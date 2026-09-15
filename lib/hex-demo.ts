export type Teren = "las" | "rowniny" | "wzgorza" | "gory";

export interface Pole {
  id: string;
  col: number;
  row: number;
  cx: number;
  cy: number;
  teren: Teren;
}

export const R = 40;
export const HEX_HEIGHT = Math.sqrt(3) * R;
export const COLS = 7;
export const ROWS = 5;
export const KOSZT_ZAJECIA = { drewno: 2, kamien: 1 } as const;

export const PLON: Record<Teren, Partial<Record<"drewno" | "zboze" | "kamien" | "ruda", number>>> = {
  las: { drewno: 2 },
  rowniny: { zboze: 2 },
  wzgorza: { kamien: 2 },
  gory: { ruda: 1 },
};

export const NAZWA_TERENU: Record<Teren, string> = {
  las: "Las",
  rowniny: "Równiny",
  wzgorza: "Wzgórza",
  gory: "Góry",
};

function losowyTeren(): Teren {
  const r = Math.random();
  if (r < 0.36) return "las";
  if (r < 0.72) return "rowniny";
  if (r < 0.92) return "wzgorza";
  return "gory";
}

export const SZEROKOSC_PLANSZY = 1.5 * R * (COLS - 1) + 2 * R;
export const WYSOKOSC_PLANSZY = HEX_HEIGHT * ROWS + HEX_HEIGHT / 2;

export function generujPlansze(): { pola: Pole[]; startId: string; szerokosc: number; wysokosc: number } {
  const pola: Pole[] = [];
  for (let col = 0; col < COLS; col++) {
    for (let row = 0; row < ROWS; row++) {
      const cx = col * 1.5 * R + R;
      const cy = row * HEX_HEIGHT + (col % 2) * (HEX_HEIGHT / 2) + HEX_HEIGHT / 2;
      pola.push({
        id: `${col}-${row}`,
        col,
        row,
        cx,
        cy,
        teren: losowyTeren(),
      });
    }
  }
  const startCol = Math.floor(COLS / 2);
  const startRow = Math.floor(ROWS / 2);
  const start = pola.find((p) => p.col === startCol && p.row === startRow)!;
  start.teren = "rowniny";

  return { pola, startId: start.id, szerokosc: SZEROKOSC_PLANSZY, wysokosc: WYSOKOSC_PLANSZY };
}

export function saNasiadami(a: Pole, b: Pole): boolean {
  const dist = Math.hypot(a.cx - b.cx, a.cy - b.cy);
  return dist > 1 && dist < Math.sqrt(3) * R * 1.08;
}
