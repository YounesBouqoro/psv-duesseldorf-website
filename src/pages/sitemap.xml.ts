import { getCollection } from "astro:content";
import { footballTeams } from "../data/footballTeams";

export async function GET() {
  const siteUrl = new URL(import.meta.env.BASE_URL, "https://younesbouqoro.github.io");

  const staticPages = [
    "",
    "verein",
    "sportarten",
    "fussball",
    "fussball/probetraining",
    "probetraining",
    "mitglied-werden",
    "downloads",
    "kurse",
    "partner",
    "sponsoring",
    "kinderschutz",
    "kontakt",
    "impressum",
    "datenschutz"
  ];

  const sportarten = await getCollection("sportarten");

  const urls = [
    ...staticPages.map((page) => new URL(`${page}/`, siteUrl).toString()),
    ...sportarten.map((sport) => new URL(`sportarten/${sport.id}/`, siteUrl).toString()),
    ...footballTeams.map((team) => new URL(`fussball/teams/${team.slug}/`, siteUrl).toString())
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
