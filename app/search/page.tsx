"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { allSearchItems } from "@/lib/content";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const clean = query.toLowerCase().trim();
    if (!clean) return allSearchItems.slice(0, 9);
    return allSearchItems.filter((item) =>
      `${item.title} ${item.description} ${item.kind}`
        .toLowerCase()
        .includes(clean),
    );
  }, [query]);

  return (
    <main id="main" className="search-page">
      <section className="search-hero">
        <div className="shell">
          <p className="kicker kicker--lime">Search Work Changed</p>
          <h1>Find the role, task, tool or change.</h1>
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              autoFocus
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try recruiter, meeting notes, Gemini…"
            />
          </label>
        </div>
      </section>
      <section className="section section--paper">
        <div className="shell">
          <div className="search-results-head">
            <span className="kicker">{query ? "Matching results" : "Popular starting points"}</span>
            <strong>{results.length} results</strong>
          </div>
          <div className="search-results">
            {results.map((item) => (
              <Link href={item.href} key={`${item.kind}-${item.title}`}>
                <span>{item.kind}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <strong>Open →</strong>
              </Link>
            ))}
            {results.length === 0 && (
              <div className="empty-state">
                <h2>No exact match yet.</h2>
                <p>
                  Try a broader role or task. The library will expand as the
                  preview moves toward launch.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
