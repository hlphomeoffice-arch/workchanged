import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="shell not-found__inner">
        <span className="eyebrow">Route changed</span>
        <h1>This page has moved out of the workflow.</h1>
        <p>
          Start with today&apos;s most useful change, or find the role, tool or task you
          were looking for.
        </p>
        <div className="button-row">
          <Link className="button button--primary" href="/today">
            Read today&apos;s shift
          </Link>
          <Link className="button button--ghost" href="/search">
            Search Work Changed
          </Link>
        </div>
      </div>
    </main>
  );
}
