import { generujPlansze, saNasiadami, PLON, KOSZT_ZAJECIA, NAZWA_TERENU, type Pole } from "./hex-demo";

export interface Zasoby {
  drewno: number;
  kamien: number;
  zboze: number;
  ruda: number;
}

export type StatusPoligonu = "trwa" | "wygrana" | "przegrana";

export interface StanPoligonu {
  pola: Pole[];
  zajete: Set<string>;
  zasoby: Zasoby;
  tura: number;
  niezadowolenie: number;
  status: StatusPoligonu;
  log: string[];
}

export const CEL_POL = 14;
export const MAX_NIEZADOWOLENIE = 3;

function dodajLog(log: string[], wpis: string): string[] {
  return [wpis, ...log].slice(0, 5);
}

export function nowyStan(): StanPoligonu {
  const { pola, startId } = generujPlansze();
  return {
    pola,
    zajete: new Set([startId]),
    zasoby: { drewno: 6, kamien: 4, zboze: 7, ruda: 0 },
    tura: 1,
    niezadowolenie: 0,
    status: "trwa",
    log: ["Osada założona na równinach. Zajmij sąsiednie pole, żeby zacząć rozbudowę."],
  };
}

export type AkcjaPoligonu = { type: "ZAJMIJ"; id: string } | { type: "ZAKONCZ_TURE" } | { type: "RESET" };

export function poligonReducer(stan: StanPoligonu, akcja: AkcjaPoligonu): StanPoligonu {
  if (akcja.type === "RESET") {
    return nowyStan();
  }

  if (stan.status !== "trwa") {
    return stan;
  }

  if (akcja.type === "ZAJMIJ") {
    if (stan.zajete.has(akcja.id)) return stan;
    const pole = stan.pola.find((p) => p.id === akcja.id);
    if (!pole) return stan;

    const sasiaduje = stan.pola.some((p) => stan.zajete.has(p.id) && saNasiadami(p, pole));
    if (!sasiaduje) {
      return { ...stan, log: dodajLog(stan.log, "To pole nie sąsiaduje jeszcze z Twoim terytorium.") };
    }

    const { drewno, kamien } = KOSZT_ZAJECIA;
    if (stan.zasoby.drewno < drewno || stan.zasoby.kamien < kamien) {
      return { ...stan, log: dodajLog(stan.log, "Za mało drewna i kamienia, żeby zająć kolejne pole.") };
    }

    const noweZajete = new Set(stan.zajete);
    noweZajete.add(akcja.id);

    return {
      ...stan,
      zajete: noweZajete,
      zasoby: {
        ...stan.zasoby,
        drewno: stan.zasoby.drewno - drewno,
        kamien: stan.zasoby.kamien - kamien,
      },
      log: dodajLog(stan.log, `Zajęto pole: ${NAZWA_TERENU[pole.teren].toLowerCase()}.`),
    };
  }

  if (akcja.type === "ZAKONCZ_TURE") {
    const przychod: Zasoby = { drewno: 0, kamien: 0, zboze: 0, ruda: 0 };
    for (const id of stan.zajete) {
      const pole = stan.pola.find((p) => p.id === id);
      if (!pole) continue;
      const plon = PLON[pole.teren];
      for (const klucz of Object.keys(plon) as (keyof Zasoby)[]) {
        przychod[klucz] += plon[klucz] ?? 0;
      }
    }

    const wyzywienie = Math.ceil(stan.zajete.size / 3);
    let zboze = stan.zasoby.zboze + przychod.zboze - wyzywienie;
    let niezadowolenie = stan.niezadowolenie;
    let komunikatWyzywienia: string;

    if (zboze < 0) {
      zboze = 0;
      niezadowolenie += 1;
      komunikatWyzywienia = `Brakło zboża na wyżywienie (-${wyzywienie}). Niezadowolenie rośnie.`;
    } else {
      niezadowolenie = Math.max(0, niezadowolenie - 1);
      komunikatWyzywienia = `Zebrano plony, wyżywienie kosztowało ${wyzywienie} zboża.`;
    }

    const noweZasoby: Zasoby = {
      drewno: stan.zasoby.drewno + przychod.drewno,
      kamien: stan.zasoby.kamien + przychod.kamien,
      zboze,
      ruda: stan.zasoby.ruda + przychod.ruda,
    };

    let status: StatusPoligonu = "trwa";
    let log = dodajLog(stan.log, `Tura ${stan.tura}: ${komunikatWyzywienia}`);

    if (niezadowolenie >= MAX_NIEZADOWOLENIE) {
      status = "przegrana";
      log = dodajLog(log, "Niezadowolenie osiągnęło próg buntu. Poligon zakończony.");
    } else if (stan.zajete.size >= CEL_POL) {
      status = "wygrana";
      log = dodajLog(log, `Zajęto ${CEL_POL} pól przy utrzymanej gospodarce. Poligon zaliczony.`);
    }

    return {
      ...stan,
      zasoby: noweZasoby,
      tura: stan.tura + 1,
      niezadowolenie,
      status,
      log,
    };
  }

  return stan;
}
