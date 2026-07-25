import { articles } from "@/lib/editorial/articles";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const lastBuildDate = new Date(
    Math.max(...articles.map((article) => Date.parse(article.reviewed))),
  );
  const items = articles
    .slice()
    .sort(
      (a, b) =>
        Date.parse(b.reviewed) - Date.parse(a.reviewed) || a.number - b.number,
    )
    .map((article) => {
      const url = `https://workchanged.com/guides/${article.slug}`;
      return [
        "<item>",
        `<title>${escapeXml(article.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<description>${escapeXml(article.dek)}</description>`,
        `<category>${escapeXml(article.pillar)}</category>`,
        `<pubDate>${new Date(article.reviewed).toUTCString()}</pubDate>`,
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "<channel>",
    "<title>WorkChanged: What Changed at Work</title>",
    "<link>https://workchanged.com</link>",
    "<description>Clear, sourced guidance on changes at work and what to do next.</description>",
    '<atom:link href="https://workchanged.com/rss.xml" rel="self" type="application/rss+xml"/>',
    "<language>en-GB</language>",
    `<lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>`,
    items,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
