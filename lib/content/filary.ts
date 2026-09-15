import { filarSchema, type Filar } from "./schema";

const dane: Filar[] = [
  {
    id: "deficyt",
    tytul: "Gospodarka, w której zasoby naprawdę się kończą",
    opis:
      "Zboże pleśnieje w za małym spichlerzu, drewno trzeba dowozić z coraz dalszych działek, a ruda kończy się dokładnie wtedy, kiedy najbardziej jej potrzeba. Żadnych pasków, które same się napełniają — każda tura to seria kompromisów, nie czekanie na timer.",
  },
  {
    id: "mapa",
    tytul: "Teren generowany od nowa przy każdej rozgrywce",
    opis:
      "Rzeki, wzgórza i granice mgły zwiadu układają się inaczej za każdym razem, gdy zaczynasz od zera. Znajomość jednej mapy niewiele daje w kolejnej — trzeba czytać teren, a nie pamięć.",
  },
  {
    id: "sezony",
    tytul: "Kryzysy wynikają z pogody, a nie z losowego okna dialogowego",
    opis:
      "Susza, ostra zima czy zaraza zbożowa to skutek konkretnych zmiennych — zapasów, stanu dróg, liczby rąk do pracy. Wpływ da się ograniczyć wcześniejszymi decyzjami, więc porażka rzadko jest niespodzianką.",
  },
  {
    id: "dziedzictwo",
    tytul: "Zakończona partia zostawia ślad w kolejnej",
    opis:
      "Po każdej partii — wygranej czy przegranej — do archiwum trafia jeden zapisany wniosek: sprawdzony układ pól, odkryty szlak, doświadczony rzemieślnik. Nic, co dawałoby przewagę za pieniądze — tylko za rozegrane partie.",
  },
];

export const filary = dane.map((f) => filarSchema.parse(f));
