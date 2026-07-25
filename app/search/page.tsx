import type { Metadata } from "next";
import { SearchInterface, type SearchItem } from "@/components/search-interface";
import { allSearchItems } from "@/lib/content";
import { articles } from "@/lib/editorial/articles";
import { pillars } from "@/lib/editorial/pillars";

export const metadata: Metadata = {
  title: "Search the work-change library",
  description:
    "Search WorkChanged guides, profession trackers, evidence checks and practical tools.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const initialQuery =
    typeof params.q === "string" ? params.q.slice(0, 100) : "";

  const items: SearchItem[] = [
    ...articles.map((article) => ({
      title: article.title,
      description: article.dek,
      href: `/guides/${article.slug}`,
      kind: article.format,
    })),
    ...pillars.map((pillar) => ({
      title: pillar.name,
      description: pillar.description,
      href: `/topics/${pillar.slug}`,
      kind: "Editorial pillar",
    })),
    ...allSearchItems,
  ];

  return (
    <main id="main" className="search-page">
      <SearchInterface items={items} initialQuery={initialQuery} />
    </main>
  );
}
