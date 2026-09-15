import { z } from "zod";

/**
 * Treści serwisu trzymamy jako zwykłe moduły TS zamiast CMS-a — projekt jest
 * na tyle mały, że osobna baza danych byłaby przerostem formy. Zod pilnuje
 * tylko, żeby literówka w kluczu obiektu wywaliła build, a nie ciche "undefined"
 * gdzieś w środku strony.
 */

export const filarSchema = z.object({
  id: z.string(),
  tytul: z.string(),
  opis: z.string(),
});
export type Filar = z.infer<typeof filarSchema>;

export const mechanikaSchema = z.object({
  id: z.string(),
  numer: z.string(),
  tytul: z.string(),
  wstep: z.string(),
  akapity: z.array(z.string()).min(1),
  punkty: z.array(z.string()).optional(),
});
export type Mechanika = z.infer<typeof mechanikaSchema>;

export const scenariuszSchema = z.object({
  id: z.string(),
  nazwa: z.string(),
  trudnosc: z.enum(["spokojna", "wymagajaca", "surowa"]),
  dlugosc: z.string(),
  opis: z.string(),
  warunekZwyciestwa: z.string(),
});
export type Scenariusz = z.infer<typeof scenariuszSchema>;

export const wpisDziennikaSchema = z.object({
  id: z.string(),
  data: z.string(),
  status: z.enum(["zakonczone", "w-trakcie", "zaplanowane"]),
  tytul: z.string(),
  tresc: z.string(),
});
export type WpisDziennika = z.infer<typeof wpisDziennikaSchema>;

export const pytanieSchema = z.object({
  id: z.string(),
  pytanie: z.string(),
  odpowiedz: z.string(),
});
export type Pytanie = z.infer<typeof pytanieSchema>;

export const ilustracjaSchema = z.object({
  id: z.string(),
  plik: z.string(),
  tytul: z.string(),
  opis: z.string(),
  alt: z.string(),
});
export type Ilustracja = z.infer<typeof ilustracjaSchema>;
