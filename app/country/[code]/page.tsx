import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/editorial/articles";

const countries = {
  uk: {
    name: "United Kingdom",
    short: "UK",
    description:
      "UK employment rights, labour-market evidence, qualifications and career decisions, with Northern Ireland differences identified where relevant.",
  },
  us: {
    name: "United States",
    short: "US",
    description:
      "US labour-market evidence, federal rules and career decisions, with state-level variation identified where relevant.",
  },
} as const;

type CountryCode = keyof typeof countries;

function countryArticles(code: CountryCode) {
  return articles.filter((article) => {
    if (
      article.jurisdiction === "United Kingdom and United States" ||
      article.jurisdiction === "Jurisdiction varies"
    ) {
      return true;
    }
    return code === "uk"
      ? article.jurisdiction === "United Kingdom"
      : article.jurisdiction === "United States";
  });
}

export function generateStaticParams() {
  return Object.keys(countries).map((code) => ({ code }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const country = countries[code as CountryCode];
  if (!country) return {};

  return {
    title: `${country.name} workplace guidance`,
    description: country.description,
    alternates: { canonical: `/country/${code}` },
    openGraph: {
      type: "website",
      title: `${country.name} workplace guidance`,
      description: country.description,
      url: `/country/${code}`,
      images: ["/og-work-changed.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${country.name} workplace guidance`,
      description: country.description,
      images: ["/og-work-changed.jpg"],
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const country = countries[code as CountryCode];
  if (!country) notFound();
  const relevant = countryArticles(code as CountryCode);
  const canonicalUrl = `https://workchanged.com/country/${code}`;
  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${country.name} workplace guidance`,
      description: country.description,
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
          name: country.name,
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="country-hero">
        <div className="shell">
          <nav className="breadcrumbs breadcrumbs--light" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{country.name}</span>
          </nav>
          <p className="kicker kicker--light">Country-specific guidance</p>
          <span className="country-hero__code">{country.short}</span>
          <h1>Work is changing in the {country.name}</h1>
          <p>{country.description}</p>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell">
          <div className="jurisdiction-explainer">
            <strong>Check the label before acting</strong>
            <p>
              We separate country-specific rules and data from global evidence.
              Workplace-rights pages are information only and link to official
              guidance.
            </p>
          </div>
          <div className="section-heading">
            <div>
              <p className="kicker">Relevant library</p>
              <h2>{relevant.length} complete guides for this country</h2>
            </div>
          </div>
          <div className="article-grid">
            {relevant.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
