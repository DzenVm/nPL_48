import { ilustracjaSchema, type Ilustracja } from "./schema";

const dane: Ilustracja[] = [
  {
    id: "mapa-mgly",
    plik: "/ilustracje/mapa-mgly.svg",
    tytul: "Mgła poza zasięgiem zwiadu",
    opis: "Teren odsłania się dopiero tam, gdzie faktycznie dotarła jednostka zwiadu.",
    alt: "Szkicowa mapa heksagonalna z ciemnym obszarem mgły zwiadu na krawędziach i odsłoniętym terenem pośrodku",
  },
  {
    id: "drzewo-technologii",
    plik: "/ilustracje/drzewo-technologii.svg",
    tytul: "Cztery ery, jedno spójne drzewko",
    opis: "Osada, Warsztaty, Manufaktura, Inżynieria — z rozgałęzieniami wykluczającymi się nawzajem.",
    alt: "Diagram drzewa technologii podzielony na cztery poziome pasy odpowiadające czterem erom rozwoju",
  },
  {
    id: "przeplyw-surowcow",
    plik: "/ilustracje/przeplyw-surowcow.svg",
    tytul: "Droga surowca od pola do warsztatu",
    opis: "Zboże, drewno, kamień i ruda płyną między działkami, magazynami i punktami przetwórstwa.",
    alt: "Diagram przepływu z ikonami surowców połączonymi liniami prowadzącymi do symbolu magazynu i warsztatu",
  },
  {
    id: "trzy-wskazniki",
    plik: "/ilustracje/trzy-wskazniki.svg",
    tytul: "Sytość, bezpieczeństwo, sens",
    opis: "Trzy niezależne paski zamiast jednego wspólnego wskaźnika nastroju mieszkańców.",
    alt: "Trzy pionowe paski wskaźników w różnym wypełnieniu, opisane jako sytość, bezpieczeństwo i sens",
  },
  {
    id: "pas-sezonow",
    plik: "/ilustracje/pas-sezonow.svg",
    tytul: "Rok podzielony na cztery pory",
    opis: "Każda pora roku niesie inny typ zagrożenia, sygnalizowany z wyprzedzeniem.",
    alt: "Poziomy pas z czterema segmentami odpowiadającymi porom roku i oznaczeniami ostrzeżeń przed kryzysem",
  },
  {
    id: "archiwum",
    plik: "/ilustracje/archiwum.svg",
    tytul: "Archiwum wniosków między partiami",
    opis: "Jeden trwały wpis z zakończonej partii, widoczny i wybierany ręcznie przed kolejną.",
    alt: "Symboliczna półka z kartotekami, z jedną wysuniętą kartą reprezentującą nowy wpis w archiwum",
  },
];

export const ilustracje = dane.map((i) => ilustracjaSchema.parse(i));
