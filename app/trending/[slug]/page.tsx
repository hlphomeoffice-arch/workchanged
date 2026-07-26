import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TrendloomArticlePage } from "@/components/trendloom-article-page";
import { getTrendloomArticle } from "@/lib/editorial/trendloom";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getTrendloomArticle(slug);
  if (!article) return {};
  const canonical = `/trending/${article.slug}`;
  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.dek,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.dek,
      url: canonical,
      publishedTime: article.published_at,
      modifiedTime: article.updated_at,
      images: ["/og-work-changed.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
      images: ["/og-work-changed.jpg"],
    },
  };
}

export default async function TrendingArticleRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getTrendloomArticle(slug);
  if (!article) notFound();
  return <TrendloomArticlePage article={article} />;
}
