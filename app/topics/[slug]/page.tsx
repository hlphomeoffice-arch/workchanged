import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarPage } from "@/components/pillar-page";
import { getArticlesByPillar } from "@/lib/editorial/articles";
import { getPillar, pillars } from "@/lib/editorial/pillars";

export function generateStaticParams() {
  return pillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return {};

  const canonical = `/topics/${pillar.slug}`;
  return {
    title: pillar.name,
    description: `${pillar.promise} ${pillar.description}`,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: `${pillar.name}: practical guidance`,
      description: pillar.description,
      url: canonical,
      images: ["/og-work-changed.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pillar.name}: practical guidance`,
      description: pillar.description,
      images: ["/og-work-changed.jpg"],
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  const canonicalUrl = `https://workchanged.com/topics/${pillar.slug}`;
  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: pillar.name,
      description: pillar.description,
      url: canonicalUrl,
      dateModified: "2026-07-25",
      isPartOf: {
        "@type": "WebSite",
        name: "WorkChanged",
        url: "https://workchanged.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://workchanged.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pillar.name,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PillarPage
        pillar={pillar}
        articles={getArticlesByPillar(pillar.slug)}
      />
    </>
  );
}
