export interface EraTechnologii {
  era: string;
  zakresTur: string;
  przyklady: string[];
}

export const eryTechnologii: EraTechnologii[] = [
  {
    era: "Osada",
    zakresTur: "tury 1-15",
    przyklady: ["koło garncarskie", "spichlerz kryty strzechą", "prosty most drewniany", "system rotacji pól"],
  },
  {
    era: "Warsztaty",
    zakresTur: "tury 12-30",
    przyklady: ["koło wodne", "piec hutniczy", "kanał nawadniający", "warsztat tkacki"],
  },
  {
    era: "Manufaktura",
    zakresTur: "tury 25-50",
    przyklady: ["młyn wiatrowy albo młyn wodny (wybór wykluczający)", "most kamienny", "magazyn wielopoziomowy", "manufaktura narzędzi"],
  },
  {
    era: "Inżynieria",
    zakresTur: "tury 40+",
    przyklady: ["wczesny mechanizm parowy", "sieć dróg brukowanych", "obserwatorium zwiadu", "warsztat precyzyjny"],
  },
];

export interface WierszSurowca {
  surowiec: string;
  psucieSie: string;
  transport: string;
  zrodlo: string;
}

export const tabelaSurowcow: WierszSurowca[] = [
  { surowiec: "Zboże", psucieSie: "traci wartość po 2 turach w niepełnym spichlerzu", transport: "niski koszt, ale ograniczony pojemnością spichlerza", zrodlo: "równiny, pola uprawne" },
  { surowiec: "Drewno", psucieSie: "nie psuje się", transport: "koszt rośnie z odległością działki", zrodlo: "lasy" },
  { surowiec: "Kamień", psucieSie: "nie psuje się", transport: "koszt rośnie z odległością działki", zrodlo: "wzgórza, kamieniołomy" },
  { surowiec: "Ruda", psucieSie: "nie psuje się, ale złoża są skończone", transport: "wysoki koszt poza drogami", zrodlo: "góry, rzadkie złoża" },
  { surowiec: "Narzędzia", psucieSie: "zużywają się z czasem pracy", transport: "produkowane lokalnie w warsztacie", zrodlo: "ruda + drewno w warsztacie" },
];
