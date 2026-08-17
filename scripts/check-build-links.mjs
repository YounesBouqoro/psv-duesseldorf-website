import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const distDirectory = path.resolve("dist");
const basePath = "/psv-duesseldorf-website";

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(entryPath));
    else if (entry.name.endsWith(".html")) files.push(entryPath);
  }

  return files;
}

function outputPathFor(urlPath) {
  let localPath = decodeURIComponent(urlPath);
  if (localPath.startsWith(basePath)) localPath = localPath.slice(basePath.length);
  localPath = localPath.replace(/^\/+/, "");

  if (localPath === "") return path.join(distDirectory, "index.html");
  if (path.extname(localPath)) return path.join(distDirectory, localPath);
  return path.join(distDirectory, localPath, "index.html");
}

async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}

const htmlFiles = await collectHtml(distDirectory);
const failures = [];

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  const relativePage = path.relative(distDirectory, htmlFile).replace(/\\/g, "/");
  const pagePath = relativePage === "index.html"
    ? `${basePath}/`
    : `${basePath}/${relativePage.replace(/index\.html$/, "")}`;

  for (const match of html.matchAll(/(?:href|src)=["']([^"']+)["']/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|tel:|data:|#)/.test(value)) continue;

    const target = new URL(value, `https://example.test${pagePath}`);
    if (!target.pathname.startsWith(basePath)) {
      failures.push(`${relativePage}: Link verlässt den Basis-Pfad (${value})`);
      continue;
    }

    const outputPath = outputPathFor(target.pathname);
    if (!await exists(outputPath)) failures.push(`${relativePage}: Ziel fehlt (${value})`);
  }
}

for (const requiredFile of ["404.html", "sitemap.xml", "robots.txt"]) {
  if (!await exists(path.join(distDirectory, requiredFile))) failures.push(`Build-Datei fehlt: ${requiredFile}`);
}

if (failures.length > 0) {
  console.error("Linkprüfung fehlgeschlagen:\n" + [...new Set(failures)].map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`${htmlFiles.length} HTML-Seiten und ihre internen Links geprüft.`);
