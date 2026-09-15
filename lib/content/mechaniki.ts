import { mechanikaSchema, type Mechanika } from "./schema";

const dane: Mechanika[] = [
  {
    id: "gospodarka",
    numer: "01",
    tytul: "Gospodarka i magazynowanie",
    wstep:
      "Punktem wyjścia było pytanie, które zadaliśmy sobie po pierwszych testach: dlaczego w większości gier przeglądarkowych zasobów zawsze jest tyle, ile trzeba? Postanowiliśmy to odwrócić.",
    akapity: [
      "Osada produkuje pięć podstawowych surowców — zboże, drewno, kamień, rudę i narzędzia — ale każdy z nich ma inny sposób psucia się, transportu i magazynowania. Zboże traci część wartości, jeśli leży w niedociążonym spichlerzu dłużej niż dwie tury, więc opłaca się je zużywać albo zamieniać na inne dobra, zamiast gromadzić w nieskończoność.",
      "Drewno i kamień nie psują się, ale mają koszt transportu zależny od odległości działki od centrum osady — im dalej sięga rozbudowa, tym więcej rąk do pracy pochłania sam dowóz, a nie samo wydobycie. To zmusza do myślenia o kształcie osady, a nie tylko o liczbie budynków.",
      "Ruda i narzędzia są rzadkie z założenia. W typowej partii złoża rudy wyczerpują się w połowie rozgrywki, co wymusza albo wcześniejszą ekspedycję w poszukiwaniu nowych złóż, albo przestawienie produkcji na gospodarkę bardziej rolniczą. Nie ma jednej słusznej ścieżki — obie prowadzą do innych scenariuszy końcowych.",
    ],
    punkty: [
      "Pięć surowców podstawowych + trzy pochodne (chleb, deski, stopy)",
      "Spichlerz o ograniczonej pojemności, rozbudowywany osobno od reszty magazynów",
      "Koszt transportu rośnie z odległością działki, nie jest stały",
    ],
  },
  {
    id: "populacja",
    numer: "02",
    tytul: "Ludzie, nastroje i praca",
    wstep:
      "Mieszkańcy osady nie są jednym paskiem 'zadowolenie'. Rozbiliśmy to na trzy osobne wskaźniki, bo w testach jeden wspólny pasek ukrywał zbyt wiele.",
    akapity: [
      "Sytość, bezpieczeństwo i sens — tak nazwaliśmy trzy czynniki, które razem decydują o tym, czy mieszkańcy zostają, migrują czy się buntują. Głód psuje sytość szybko, ale da się go zrekompensować chwilowo zapasami z magazynu. Brak bezpieczeństwa (np. po nieudanej ekspedycji zwiadowczej) obniża się wolniej, ale też wolniej wraca do normy.",
      "Każdy mieszkaniec przypisany jest do jednej z sześciu profesji: rolnik, drwal, kamieniarz, górnik, rzemieślnik i zwiadowca. Przesunięcie kogoś między zawodami kosztuje turę przestoju — to zamierzone tarcie, które ma zniechęcać do mikrozarządzania każdą postacią z osobna co turę.",
      "Bunt nie jest zdarzeniem losowym z okna dialogowego. To efekt przekroczenia progu niezadowolenia utrzymującego się przez więcej niż dwie tury z rzędu — i widać go z wyprzedzeniem na panelu osady, więc doświadczony gracz zdąży zareagować, zanim się wydarzy.",
    ],
    punkty: [
      "Trzy niezależne wskaźniki zamiast jednego wspólnego morale",
      "Sześć profesji, zmiana zawodu kosztuje jedną turę",
      "Bunt jest przewidywalny — widoczny na panelu z wyprzedzeniem",
    ],
  },
  {
    id: "technologia",
    numer: "03",
    tytul: "Cztery ery techniczne",
    wstep:
      "Pierwotnie planowaliśmy osiem er rozwoju. Po testach zamkniętych zostały cztery — i gra na tym zyskała, co opisujemy też w dzienniku rozwoju niżej.",
    akapity: [
      "Osada, Warsztaty, Manufaktura i Inżynieria — każda era to około dwunastu do piętnastu technologii, z czego w jednej partii da się zbadać realnie sześćdziesiąt do siedemdziesięciu procent drzewka. Reszta zostaje niewykorzystana celowo, bo to wymusza specjalizację zamiast odhaczania wszystkiego po kolei.",
      "Część technologii wyklucza się wzajemnie. Wybór młyna wodnego zamiast wiatraka to nie kosmetyka — zmienia, które działki stają się opłacalne, a które trzeba porzucić. Te rozwidlenia są jawne w interfejsie, żeby decyzja była świadoma, a nie przypadkowym kliknięciem.",
      "Badania nie kupuje się za jeden uniwersalny surowiec. Wczesne technologie kosztują czas rzemieślników, późniejsze wymagają konkretnych dóbr (np. stopów albo papieru), co spina drzewko technologii z resztą gospodarki zamiast trzymać je jako osobny system obok.",
    ],
    punkty: [
      "4 ery, ok. 55 technologii łącznie, realnie badalne 60-70% w jednej partii",
      "Część gałęzi wzajemnie się wyklucza — to świadomy wybór, nie przypadek",
      "Koszt badań rośnie z konkretnych dóbr, nie z jednego uniwersalnego surowca",
    ],
  },
  {
    id: "ekspedycje",
    numer: "04",
    tytul: "Ekspedycje i mgła zwiadu",
    wstep:
      "Mapa poza promieniem zwiadu jest naprawdę nieznana — silnik nie generuje jej z wyprzedzeniem, tylko dosłownie w momencie, gdy zwiadowca tam dotrze.",
    akapity: [
      "Wysłanie ekspedycji to decyzja z realnym ryzykiem utraty jednostki — teren może okazać się nieprzejezdny, zapasy mogą się skończyć w połowie trasy. Ryzyko rośnie z odległością od osady w sposób, który gracz widzi na pasku szacowanego zużycia zapasów przed wysłaniem, więc nie jest to zgadywanka.",
      "Znaleziska są zróżnicowane: ruiny dające jednorazowy zastrzyk surowców, nieużywane wcześniej złoża, albo po prostu skrócenie trasy handlowej między dwoma punktami mapy. Nie każda ekspedycja kończy się czymś spektakularnym — czasem zwraca tylko informację, że dany kierunek nie ma sensu, i to też jest wartościowe.",
      "Zasięg zwiadu rośnie z technologią i typem jednostki, ale nigdy nie odsłania całej mapy na raz. Ograniczenie promienia widoczności to jedna z rzeczy, które doprecyzowaliśmy już po pierwszych testach — więcej o tym w dzienniku zmian.",
    ],
    punkty: [
      "Mapa poza zasięgiem zwiadu nie istnieje w silniku, dopóki ktoś tam nie dotrze",
      "Szacowane zużycie zapasów widoczne przed wysłaniem ekspedycji",
      "Znaleziska: surowce jednorazowe, nowe złoża, skrócone trasy handlowe",
    ],
  },
  {
    id: "kryzysy",
    numer: "05",
    tytul: "Kryzysy sezonowe",
    wstep:
      "Rok w grze dzieli się na cztery pory, a każda z nich niesie inny rodzaj zagrożenia — ale zawsze da się je złagodzić decyzjami podjętymi wcześniej.",
    akapity: [
      "Zima sprawdza zapasy opału i żywności. Susza sprawdza, czy gospodarka rolna jest zdywersyfikowana, czy stoi na jednym typie upraw. Zaraza zbożowa sprawdza, czy magazyny nie są przepełnione ponad rozsądną miarę. Każdy kryzys ma jasną przyczynę, więc porażka daje się prześledzić wstecz, zamiast wyglądać jak zły rzut kością.",
      "Siła nadchodzącego kryzysu jest sygnalizowana z wyprzedzeniem jednej pełnej pory roku — widać ostrzeżenie w panelu prognoz, zanim cokolwiek się wydarzy. To świadoma rezygnacja z efektu zaskoczenia na rzecz planowania.",
      "Nie każdy sezon kończy się kryzysem — w spokojniejszych scenariuszach mija wiele tur bez większych zakłóceń. Częstotliwość i dotkliwość zależą od wybranego poziomu scenariusza, opisanego niżej.",
    ],
    punkty: [
      "Cztery pory roku, każda z innym typem zagrożenia",
      "Ostrzeżenie o zbliżającym się kryzysie z wyprzedzeniem jednej pory roku",
      "Dotkliwość kryzysów zależy od wybranego scenariusza, nie jest stała",
    ],
  },
  {
    id: "dziedzictwo-miedzy-partiami",
    numer: "06",
    tytul: "Dziedzictwo między partiami",
    wstep:
      "To element, który najdłużej dopracowywaliśmy, bo łatwo w nim przesadzić i zamienić grę strategiczną w system codziennych nagród.",
    akapity: [
      "Po zakończeniu partii — również przegranej — gracz zapisuje do archiwum jeden trwały wniosek z rozgrywki: np. sprawdzony układ pierwszych czterech budynków, odkrytą wcześniej lokalizację dobrego złoża rudy w danym typie terenu, albo doświadczonego rzemieślnika, który w kolejnej partii startuje z wyższym poziomem umiejętności.",
      "Świadomie ograniczyliśmy liczbę takich wpisów do jednego na partię, żeby uniknąć efektu 'im dłużej gram, tym łatwiej', charakterystycznego dla wielu przeglądarkowych gier z elementami progresji. Dziedzictwo ułatwia start, ale nie zastępuje decyzji w trakcie partii.",
      "Wpisy w archiwum są w pełni jawne — można je przejrzeć przed rozpoczęciem nowej partii i świadomie wybrać, który z dotychczasowych wniosków chce się aktywować. Nie ma tu żadnego elementu losowego przydziału.",
    ],
    punkty: [
      "Jeden trwały wniosek do archiwum na zakończoną partię, niezależnie od wyniku",
      "Gracz świadomie wybiera, który wpis z archiwum aktywować przed startem",
      "Brak losowego przydziału bonusów — wszystko jest jawne i wybierane ręcznie",
    ],
  },
];

export const mechaniki = dane.map((m) => mechanikaSchema.parse(m));
