import { scenariuszSchema, type Scenariusz } from "./schema";

const dane: Scenariusz[] = [
  {
    id: "pierwsza-zima",
    nazwa: "Pierwsza zima",
    trudnosc: "spokojna",
    dlugosc: "ok. 25-35 tur",
    opis:
      "Scenariusz wprowadzający. Żyzna dolina, umiarkowany klimat, złoża rudy w rozsądnym zasięgu. Uczy podstaw gospodarki bez presji częstych kryzysów.",
    warunekZwyciestwa: "Osada przetrwa trzy pełne lata z dodatnim bilansem żywności w każdej zimie.",
  },
  {
    id: "susza-stulecia",
    nazwa: "Susza stulecia",
    trudnosc: "wymagajaca",
    dlugosc: "ok. 40-55 tur",
    opis:
      "Region podatny na długie okresy suszy. Wymaga wczesnej dywersyfikacji upraw i budowy systemu nawadniania, zanim zapasy wody staną się problemem.",
    warunekZwyciestwa: "Ukończenie budowy głównego kanału nawadniającego przed piątym rokiem suszy.",
  },
  {
    id: "szlak-handlowy",
    nazwa: "Szlak handlowy",
    trudnosc: "wymagajaca",
    dlugosc: "ok. 45-60 tur",
    opis:
      "Osada leży na skrzyżowaniu dwóch dolin. Nacisk na ekspedycje i budowę tras handlowych zamiast czystej samowystarczalności.",
    warunekZwyciestwa: "Ustanowienie i utrzymanie przez dziesięć tur trzech aktywnych tras handlowych jednocześnie.",
  },
  {
    id: "ruiny-na-wzgorzu",
    nazwa: "Ruiny na wzgórzu",
    trudnosc: "surowa",
    dlugosc: "ok. 60-80 tur",
    opis:
      "Trudny teren, ograniczone złoża, częste kryzysy sezonowe. Scenariusz dla graczy, którzy przeszli już przynajmniej jedną spokojniejszą partię.",
    warunekZwyciestwa: "Osiągnięcie ery Inżynierii przy jednoczesnym utrzymaniu populacji powyżej stu mieszkańców.",
  },
];

export const scenariusze = dane.map((s) => scenariuszSchema.parse(s));
