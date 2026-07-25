"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  kind: string;
};

export function SearchInterface({
  items,
  initialQuery = "",
}: {
  items: SearchItem[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => {
    const clean = query.toLowerCase().trim();
    if (!clean) return items.slice(0, 12);
    return items.filter((item) =>
      `${item.title} ${item.description} ${item.kind}`
        .toLowerCase()
        .includes(clean),
    );
  }, [items, query]);

  return (
    <>
      <section className="search-hero">
        <div className="shell">
          <p className="kicker kicker--lime">Search WorkChanged</p>
          <h1>Find the change, decision, profession or tool.</h1>
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">Search the WorkChanged library</span>
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try redundancy, flexible working or accountant"
            />
          </label>
        </div>
      </section>
      <section className="section section--paper">
        <div className="shell">
          <div className="search-results-head" aria-live="polite">
            <span className="kicker">
              {query ? "Matching results" : "Useful starting points"}
            </span>
            <strong>{results.length} results</strong>
          </div>
          <div className="search-results">
            {results.map((item) => (
              <Link href={item.href} key={`${item.kind}-${item.href}`}>
                <span>{item.kind}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <strong>
                  Open <span aria-hidden="true">→</span>
                </strong>
              </Link>
            ))}
            {results.length === 0 && (
              <div className="empty-state">
                <h2>No exact match</h2>
                <p>
                  Try a broader profession, decision or workplace topic. You can
                  also browse all eight editorial pillars from the homepage.
                </p>
                <Link className="button button--primary" href="/">
                  Browse the library
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
