import type { MetadataRoute } from "next";
import { roles, tools } from "@/lib/content";
import { articles } from "@/lib/editorial/articles";
import { pillars } from "@/lib/editorial/pillars";

const baseUrl = "https://workchanged.com";

function editorialDate(value: string) {
  const timestamp = Date.parse(value);
  return Number.isNaN(timestamp)
    ? new Date("2026-07-25T12:00:00.000Z")
    : new Date(timestamp);
}

const latestReview = new Date(
  Math.max(
    ...articles.map((article) => editorialDate(article.reviewed).getTime()),
    ...roles.map((role) => editorialDate(role.reviewed).getTime()),
    ...tools.map((tool) => editorialDate(tool.reviewed).getTime()),
  ),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/today",
    "/today/gemini-alpha-is-now-beta",
    "/roles",
    "/tasks",
    "/tools",
    "/skills",
    "/signals",
    "/newsletter",
    "/about",
    "/standards",
    "/country/uk",
    "/country/us",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: latestReview,
      changeFrequency:
        route === "" || route === "/today"
          ? ("daily" as const)
          : ("weekly" as const),
      priority: route === "" ? 1 : route === "/today" ? 0.9 : 0.7,
    })),
    ...pillars.map((pillar) => ({
      url: `${baseUrl}/topics/${pillar.slug}`,
      lastModified: new Date(
        Math.max(
          ...articles
            .filter((article) => article.pillar === pillar.slug)
            .map((article) => editorialDate(article.reviewed).getTime()),
        ),
      ),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/guides/${article.slug}`,
      lastModified: editorialDate(article.reviewed),
      changeFrequency:
        article.portfolio === "Change tracker"
          ? ("weekly" as const)
          : ("monthly" as const),
      priority: article.number <= 10 ? 0.86 : 0.78,
      images: [`${baseUrl}/images/articles/${article.slug}.jpg`],
    })),
    ...roles.map((role) => ({
      url: `${baseUrl}/roles/${role.slug}`,
      lastModified: editorialDate(role.reviewed),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: editorialDate(tool.reviewed),
      changeFrequency: "monthly" as const,
      priority: 0.66,
    })),
  ];
}
