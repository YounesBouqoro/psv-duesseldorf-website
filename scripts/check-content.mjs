import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const roots = ["src", "public"];
const textExtensions = new Set([".astro", ".css", ".json", ".md", ".mjs", ".ts", ".txt"]);
const forbidden = [
  { label: "fehlerhafte Zeichencodierung", pattern: /\uFFFD|Ã.|â€“|â€|Â./u },
  { label: "Relaunch- oder Platzhaltertext", pattern: /Website-Relaunch|Relaunch-Fokus|Wird geprüft|wird geprüft|Platzhalter|Formulare werden vorbereitet/u },
  { label: "leerer Link", pattern: /href=["']#["']/u }
];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectFiles(entryPath));
    else if (textExtensions.has(path.extname(entry.name))) files.push(entryPath);
  }

  return files;
}

const files = (await Promise.all(roots.map(collectFiles))).flat();
const failures = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  for (const rule of forbidden) {
    if (rule.pattern.test(content)) failures.push(`${file}: ${rule.label}`);
  }
}

if (failures.length > 0) {
  console.error("Inhaltsprüfung fehlgeschlagen:\n" + failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`${files.length} Textdateien ohne Platzhalter- oder Encoding-Fehler geprüft.`);
