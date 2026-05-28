# PSV Düsseldorf Website

GitHub-basiertes Website-Projekt für den Polizei-Sport-Verein Düsseldorf e.V.

## Ziel

Die Website positioniert den PSV Düsseldorf als modernen Mehrspartenverein mit klarer Dachmarke, sichtbaren Abteilungen, einfachen Kontaktwegen, Probetraining, Mitgliedschaft, Kursen und Sponsoring.

## Technischer Stack

- Astro
- TypeScript
- Markdown/MDX Content
- JSON-Daten
- GitHub Actions
- GitHub Pages

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Projektstruktur

```txt
src/pages        Seiten/Routen
src/components   Wiederverwendbare Komponenten
src/content      Inhalte: Sportarten, Kurse, News
src/data         Navigation, Standortdaten, Formulare
src/styles       Design Tokens und globale Styles
docs             Projektdokumentation
public           Bilder, Logos, Downloads
```

## Content bearbeiten

Sportarten werden in `src/content/sportarten/` gepflegt.  
News werden in `src/content/news/` gepflegt.  
Kurse werden in `src/content/kurse/` gepflegt.
