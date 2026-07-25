import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import {
  articles,
  getArticle,
  getRelatedArticles,
} from "@/lib/editorial/articles";
import { getPillar } from "@/lib/editorial/pillars";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const pillar = getPillar(article.pillar);
  const canonical = `/guides/${article.slug}`;
  const image = `/images/articles/${article.slug}.jpg`;

  return {
    title: article.title,
    description: article.dek,
    category: pillar?.name,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.dek,
      url: canonical,
      publishedTime: new Date(article.published).toISOString(),
      modifiedTime: new Date(article.reviewed).toISOString(),
      section: pillar?.name,
      images: [
        {
          url: image,
          width: 1536,
          height: 1024,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
      images: [image],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <ArticlePage
      article={article}
      related={getRelatedArticles(article, 3)}
    />
  );
}
