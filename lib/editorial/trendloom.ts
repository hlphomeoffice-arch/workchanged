const RAW_BASE =
  "https://raw.githubusercontent.com/hlphomeoffice-arch/workchanged/main/content/trendloom";

export type TrendloomCitation = {
  title: string;
  url: string;
  publisher: string;
  published_at: string;
  supports: string;
};

export type TrendloomArticleSummary = {
  slug: string;
  title: string;
  dek: string;
  published_at: string;
  reading_minutes: number;
  opportunity_score: number;
  confidence_score: number;
};

export type TrendloomArticle = TrendloomArticleSummary & {
  version: number;
  body_html: string;
  updated_at: string;
  search_intent: string;
  primary_keyword: string;
  secondary_keywords: string[];
  meta_title: string;
  meta_description: string;
  citations: TrendloomCitation[];
  claim_checks: Array<{
    claim: string;
    status: "supported" | "qualified" | "remove";
    evidence_urls: string[];
  }>;
  publisher: string;
};

function validSlug(slug: string) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export function sanitiseTrendloomHtml(value: string) {
  const allowed = new Set([
    "p",
    "h2",
    "h3",
    "ul",
    "ol",
    "li",
    "strong",
    "em",
    "blockquote",
    "a",
  ]);
  return value
    .replace(
      /<\s*(script|style|iframe|object|embed)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi,
      "",
    )
    .replace(
      /<(\/?)([a-z0-9]+)([^>]*)>/gi,
      (_full, closing: string, rawTag: string, rawAttributes: string) => {
        const tag = rawTag.toLowerCase();
        if (!allowed.has(tag)) return "";
        if (closing) return `</${tag}>`;
        if (tag !== "a") return `<${tag}>`;
        const hrefMatch = rawAttributes.match(
          /\shref\s*=\s*(["'])(https?:\/\/[^"']+)\1/i,
        );
        if (!hrefMatch) return "<a>";
        const href = hrefMatch[2]
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        return `<a href="${href}" target="_blank" rel="noreferrer">`;
      },
    );
}

export async function getTrendloomIndex() {
  try {
    const response = await fetch(`${RAW_BASE}/_index.json`, {
      cache: "no-store",
      headers: { accept: "application/json" },
    });
    if (response.status === 404) return [];
    if (!response.ok) throw new Error(`GitHub returned ${response.status}.`);
    const payload = (await response.json()) as unknown;
    if (!Array.isArray(payload)) return [];
    return payload.filter(
      (item): item is TrendloomArticleSummary =>
        Boolean(
          item &&
            typeof item === "object" &&
            "slug" in item &&
            typeof item.slug === "string" &&
            validSlug(item.slug),
        ),
    );
  } catch {
    return [];
  }
}

export async function getTrendloomArticle(slug: string) {
  if (!validSlug(slug)) return null;
  try {
    const response = await fetch(`${RAW_BASE}/${slug}.json`, {
      cache: "no-store",
      headers: { accept: "application/json" },
    });
    if (response.status === 404) return null;
    if (!response.ok) throw new Error(`GitHub returned ${response.status}.`);
    const article = (await response.json()) as TrendloomArticle;
    if (
      !article ||
      article.slug !== slug ||
      typeof article.body_html !== "string" ||
      !Array.isArray(article.citations)
    ) {
      return null;
    }
    return {
      ...article,
      body_html: sanitiseTrendloomHtml(article.body_html),
    };
  } catch {
    return null;
  }
}
