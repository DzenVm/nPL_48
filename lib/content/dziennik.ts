import { wpisDziennikaSchema, type WpisDziennika } from "./schema";

const dane: WpisDziennika[] = [
  {
    id: "osiem-do-czterech-er",
    data: "wrzesień 2025",
    status: "zakonczone",
    tytul: "Osiem er zamiast czterech to był błąd",
    tresc:
      "Pierwsza wersja drzewka technologii miała osiem er i ponad dziewięćdziesiąt pozycji. Testerzy zamkniętej grupy zgłaszali to samo niezależnie od siebie: większość partii kończyła się w trzeciej erze, a reszta drzewka istniała tylko na papierze. Zamiast dokładać kolejne technologie, ograniczyliśmy erę do czterech, gęstszych etapów. Partie zaczęły kończyć się bliżej ostatniej ery, co było celem od początku.",
  },
  {
    id: "promien-zwiadu",
    data: "listopad 2025",
    status: "zakonczone",
    tytul: "Ograniczenie promienia widoczności zwiadowców",
    tresc:
      "We wczesnej wersji jeden zwiadowca odsłaniał mapę w promieniu, który po kilkunastu turach pokazywał praktycznie cały dostępny teren. To zabijało sens dalszych ekspedycji. Zmniejszyliśmy promień o połowę i sprzęgliśmy jego wzrost z konkretną technologią w drugiej erze, zamiast z samym upływem czasu.",
  },
  {
    id: "trzy-wskazniki-nastroju",
    data: "styczeń 2026",
    status: "w-trakcie",
    tytul: "Rozdzielenie nastroju na trzy wskaźniki",
    tresc:
      "Trwa migracja z jednego wspólnego wskaźnika zadowolenia na trzy niezależne (sytość, bezpieczeństwo, sens). Największym wyzwaniem nie jest sama logika, tylko czytelny interfejs, który pokaże trzy liczby bez przytłaczania nowego gracza w pierwszej turze.",
  },
  {
    id: "renderer-bez-wtyczek",
    data: "planowane na I kwartał 2026",
    status: "zaplanowane",
    tytul: "Migracja renderera mapy",
    tresc:
      "Obecny prototyp mapy działa na prostym rysowaniu na płótnie (canvas) bez żadnych zależności od silników graficznych. Planujemy doprecyzować warstwę renderowania pod kątem wydajności na słabszych laptopach, zachowując zasadę zero wtyczek i zero instalacji.",
  },
];

export const dziennik = dane.map((w) => wpisDziennikaSchema.parse(w));
