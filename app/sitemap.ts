import type { MetadataRoute } from "next";
import { roles, tools } from "@/lib/content";

const baseUrl = "https://workchanged.com";

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
    "/signals/ai-exposure-is-not-job-loss",
    "/newsletter",
    "/about",
    "/standards",
    "/search",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-07-24T12:00:00.000Z"),
      changeFrequency: route === "" || route === "/today" ? ("daily" as const) : ("weekly" as const),
      priority: route === "" ? 1 : route === "/today" ? 0.9 : 0.7,
    })),
    ...roles.map((role) => ({
      url: `${baseUrl}/roles/${role.slug}`,
      lastModified: new Date("2026-07-24T12:00:00.000Z"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...tools.map((tool) => ({
      url: `${baseUrl}/tools/${tool.slug}`,
      lastModified: new Date("2026-07-24T12:00:00.000Z"),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
