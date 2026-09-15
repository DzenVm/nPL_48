import { pytanieSchema, type Pytanie } from "./schema";

const dane: Pytanie[] = [
  {
    id: "instalacja",
    pytanie: "Czy trzeba coś instalować, żeby zagrać?",
    odpowiedz:
      "Nie. Całość działa w przeglądarce — bez wtyczek, bez klienta do pobrania, bez konta wymaganego do sprawdzenia pierwszej tury. Strona /graj zawiera fragment silnika w obecnym stanie prac, więc można sprawdzić układ sterowania i tempo rozgrywki od razu.",
  },
  {
    id: "wieloosobowa",
    pytanie: "Czy jest tryb wieloosobowy albo ranking graczy?",
    odpowiedz:
      "Nie i nie planujemy go dodawać. Cała konstrukcja — tempo tur, kryzysy sezonowe, dziedzictwo między partiami — jest projektowana pod rozgrywkę jednoosobową, we własnym tempie, bez porównywania wyników z innymi.",
  },
  {
    id: "zapis",
    pytanie: "Czy postęp się zapisuje?",
    odpowiedz:
      "W obecnej, testowej wersji dostępnej pod /graj zapis trzymany jest lokalnie w przeglądarce urządzenia, więc czyszczenie danych przeglądarki usunie też stan rozgrywki. Docelowo planujemy zapis powiązany z kontem, żeby dało się wrócić do partii z innego urządzenia.",
  },
  {
    id: "dlugosc-sesji",
    pytanie: "Ile trwa jedna sesja grania?",
    odpowiedz:
      "To zależy od scenariusza i od tego, jak dokładnie planuje się każdą turę. Spokojniejsze scenariusze da się przejść w kilkunastu krótkich sesjach po kilka minut, trudniejsze wymagają dłuższego skupienia przy pojedynczych, kluczowych turach — np. tuż przed nadchodzącym kryzysem sezonowym.",
  },
  {
    id: "platnosci",
    pytanie: "Czy będą płatne przewagi albo dodatkowe zasoby za pieniądze?",
    odpowiedz:
      "Nie planujemy sprzedaży przewagi w rozgrywce. Jeśli w przyszłości pojawi się jakakolwiek forma finansowego wsparcia projektu, ma to być rozwiązanie kosmetyczne, niewpływające na bilans gospodarki ani na trudność scenariuszy.",
  },
  {
    id: "przegladarki",
    pytanie: "Jakie przeglądarki są wspierane?",
    odpowiedz:
      "Bieżące wersje Chrome, Firefox, Edge oraz Safari. Rozgrywka bazuje na standardowym Canvas API i nie wymaga żadnych dodatkowych rozszerzeń przeglądarki.",
  },
  {
    id: "telefon",
    pytanie: "Czy da się grać na telefonie?",
    odpowiedz:
      "Strona i panel osady są responsywne i działają na telefonie, natomiast sama mapa i analiza terenu wygodniej czyta się na ekranie tabletu lub komputera — to kwestia ilości informacji widocznej jednocześnie, nie ograniczenie techniczne.",
  },
  {
    id: "zglaszanie-bledow",
    pytanie: "Znalazłem błąd w rozgrywce — gdzie to zgłosić?",
    odpowiedz:
      "Najprościej przez formularz na stronie kontaktowej. Prosimy o dołączenie numeru tury i krótkiego opisu sytuacji, w której błąd wystąpił — to znacznie skraca czas znalezienia przyczyny.",
  },
];

export const faq = dane.map((p) => pytanieSchema.parse(p));
