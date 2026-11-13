# PolWINter

Archiwum sukcesów polskich sportowców w sportach zimowych. Każdy wynik ma link do źródła i każdy wpis jest 
poddawany rygorystycznej walidacji prawdziwości.

**Strona na żywo:** https://polwinter.rzajc666.workers.dev/

![Check](https://github.com/RZAJC2426/PolWINter/actions/workflows/check.yml/badge.svg)



## O projekcie

Projekt portfolio. Zbiera osiągnięcia polskich zawodników zimowych, podzielone na dyscypliny, z kartą każdego sportowca i tabelą jego wyników. Wszystko w jednym miejscu - bez żmudnego szukania po sieci. Zaczynam od skoków narciarskich, kolejne dyscypliny dochodzą stopniowo.

PolWINter pokazuje, że pomimo trudności geograficznych i ekonomicznych jako naród mamy powody do dumy i satysfakcji z sukcesów w dyscyplinach z natury zimowych. To także pamięć o bardziej zapomnianych i niedocenianych zawodnikach - z całego okresu.

Jako twórca nie skupiam się na razie na komercjalizacji projektu. Liczy się przede wszystkim przyjemność i praca nad rozwojem idei. 

Kod piszę własnoręcznie ze wsparciem poradników - choćby dlatego, by rozumieć, jak działają poszczególne 
funkcje i by nie powielać tzw. AI Slopu. 



## Technologie

- Astro
- TypeScript
- Content Collections z walidacją schematów (Zod)
- GitHub Actions (sprawdzanie typów i build przy każdym pushu)
- Cloudflare (hosting)
- Czcionki: Barlow Condensed i Ubuntu (Fontsource)

## Uruchomienie lokalnie

```bash
git clone https://github.com/RZAJC2426/PolWINter.git
cd PolWINter
npm install
npm run dev
```

Strona ruszy pod `http://localhost:4321`.

| Komenda | Działanie |
| --- | --- |
| `npm run dev` | serwer deweloperski |
| `npm run build` | build produkcyjny do folderu `dist` |
| `npm run preview` | podgląd zbudowanej wersji |
| `npx astro check` | sprawdzenie typów i schematów danych |

## Struktura danych

Treści są w plikach, nie w bazie danych:

- `src/content/sportowcy/` : jeden plik `.md` na zawodnika (imię, nazwisko, dyscyplina, opis, biografia)
- `src/content/osiagniecia/` : jeden plik `.json` na osiągnięcie (rok, zawody, miejsce, konkurencja, wynik, źródło)
- `src/data/dyscypliny.ts` : lista dyscyplin

Osiągnięcie wskazuje zawodników listą, więc jedna struktura obsługuje konkursy indywidualne i drużynowe, bez względu na liczbę osób w zespole.

## Jak dodać wpis

1. Dodaj plik zawodnika w `src/content/sportowcy/`.
2. Dodaj plik osiągnięcia w `src/content/osiagniecia/` z identyfikatorem zawodnika (nazwa pliku bez rozszerzenia) i linkiem do źródła.
3. Uruchom `npx astro check`. Jeśli dane nie pasują do schematu, dostaniesz błąd z nazwą pliku.

## Decyzje projektowe

- **Astro zamiast frameworka z ciężkim JS:** strona to głównie treść, więc statyczny HTML jest szybki i dobry dla SEO.
- **Walidacja danych na etapie buildu:** literówka w roku, brak źródła albo odwołanie do nieistniejącego zawodnika przerywa build, zanim błędne dane trafią na stronę.
- **Wynik drużynowy jako lista zawodników:** jeden wpis na medal, bez duplikowania danych.
- **Wygląd:** tabela wyników zamiast kart, jedna czerwień jako akcent, bez ikon i gradientów.

## Zasady dotyczące danych

Każdy wynik musi mieć źródło (np. olympics.com, PKOl, FIS). Zdjęcia tylko z jasną licencją.

## Plany

- [ ] kolejne dyscypliny
- [ ] pokazywanie partnerów w konkursach drużynowych
- [ ] wyszukiwarka
- [ ] dane strukturalne schema.org i mapa strony
