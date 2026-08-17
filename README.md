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
npm ci
npm run dev
```

## Qualität und Build

```bash
npm run verify
npm run preview
```

`npm run verify` prüft Typen und Content-Schemas, sucht nach Platzhaltern und defekten internen Links und erstellt den Produktions-Build.

## Projektstruktur

```txt
src/pages        Seiten/Routen
src/components   Wiederverwendbare Komponenten
src/content      Redaktionsinhalte der Sportarten
src/data         Navigation, Vereins- und Fußballdaten
src/styles       Globale Styles
scripts          Automatische Inhalts- und Linkprüfungen
public           Logo und technische Dateien
```

## Content bearbeiten

Sportarten werden in `src/content/sportarten/` gepflegt. Das Schema liegt in `src/content.config.ts`.

Fußballmannschaften werden in `src/data/footballTeams.ts` gepflegt. Namen, Trainingszeiten, Kontakt- oder Bilddaten werden erst veröffentlicht, wenn sie vom Verein bestätigt und freigegeben wurden.

## Veröffentlichung

Ein Push auf `main` führt die vollständige Prüfung aus und veröffentlicht den erfolgreichen Build automatisch über GitHub Pages.
