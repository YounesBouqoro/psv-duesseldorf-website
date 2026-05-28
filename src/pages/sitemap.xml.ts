import { getCollection } from "astro:content";
import { footballTeams } from "../data/footballTeams";

export async function GET() {
  const siteUrl = "https://younesbouqoro.github.io/psv-duesseldorf-website";

  const staticPages = [
    "",
    "verein",
    "sportarten",
    "fussball",
    "probetraining",
    "mitglied-werden",
    "downloads",
    "partner",
    "sponsoring",
    "kinderschutz",
    "kontakt",
    "impressum",
    "datenschutz"
  ];

  const sportarten = await getCollection("sportarten");

  const urls = [
    ...staticPages.map((page) => `${siteUrl}/${page}`.replace(/\/$/, "")),

    ...sportarten.map(
      (sport) => `${siteUrl}/sportarten/${sport.id}`
    ),

    ...footballTeams.map(
      (team) => `${siteUrl}/fussball/teams/${team.slug}`
    )
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
