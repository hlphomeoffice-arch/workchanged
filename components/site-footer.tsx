import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Decisions",
    links: [
      ["AI and your job", "/topics/ai-and-your-job"],
      ["Skills that are changing", "/topics/skills-that-are-changing"],
      ["Career moves", "/topics/career-moves"],
      ["Job security and hiring", "/topics/job-security-and-hiring"],
      ["Workplace rules and rights", "/topics/workplace-rules-and-rights"],
    ],
  },
  {
    title: "Follow change",
    links: [
      ["Managing changed work", "/topics/managing-changed-work"],
      ["How work actually works", "/topics/how-work-actually-works"],
      ["Profession trackers", "/roles"],
      ["What changed this week", "/today"],
      ["WorkChanged News Letter", "/newsletter"],
    ],
  },
  {
    title: "WorkChanged",
    links: [
      ["About", "/about"],
      ["Editorial standards", "/standards"],
      ["Evidence labels", "/standards#evidence"],
      ["Corrections", "/standards#corrections"],
      ["Accessibility", "/standards#accessibility"],
      ["Privacy", "/standards#privacy"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-action">
          <div>
            <p className="kicker kicker--lime">Independent guidance for changed work</p>
            <h2>Follow the changes that reach your role.</h2>
          </div>
          <div className="footer-action__buttons">
            <Link className="button button--lime" href="/roles">
              Follow your profession
            </Link>
            <Link className="button button--ghost-light" href="/newsletter">
              News Letter
            </Link>
          </div>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="WorkChanged home">
              <Image
                src="/brand/logo-reversed.svg"
                alt="WorkChanged"
                width={228}
                height={40}
                unoptimized
              />
            </Link>
            <p>
              Clear, sourced guidance on what changed at work, who it affects
              and what to do next.
            </p>
            <p className="footer-note">
              Independent. Evidence-led. On the side of the person doing the
              work.
            </p>
          </div>
          {columns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              {column.links.map(([label, href]) => (
                <Link href={href} key={href}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 WorkChanged.</span>
          <div>
            <Link href="/standards#privacy">Privacy</Link>
            <Link href="/standards#terms">Terms</Link>
            <Link href="/standards#accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
