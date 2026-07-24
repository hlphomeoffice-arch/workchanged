import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      ["Today", "/today"],
      ["Roles", "/roles"],
      ["Tasks", "/tasks"],
      ["Tools", "/tools"],
      ["Skills", "/skills"],
      ["Signals", "/signals"],
    ],
  },
  {
    title: "Work Changed",
    links: [
      ["About", "/about"],
      ["Authors", "/about#people"],
      ["The Work Shift", "/newsletter"],
      ["Contact", "/about#contact"],
    ],
  },
  {
    title: "Standards",
    links: [
      ["Editorial standards", "/standards"],
      ["Evidence labels", "/standards#evidence"],
      ["Tool Lab method", "/standards#tool-lab"],
      ["Corrections", "/standards#corrections"],
      ["How we use AI", "/standards#ai-use"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-action">
          <div>
            <p className="kicker kicker--lime">Your work changed. Your next move can be clear.</p>
            <h2>Know what AI means for your job.</h2>
          </div>
          <div className="footer-action__buttons">
            <Link className="button button--lime" href="/roles">
              Choose your role
            </Link>
            <Link className="button button--ghost-light" href="/newsletter">
              Get The Work Shift
            </Link>
          </div>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Work Changed home">
              <Image
                src="/brand/logo-reversed.svg"
                alt="Work Changed"
                width={228}
                height={40}
                unoptimized
              />
            </Link>
            <p>
              Practical intelligence for people whose jobs are changing with
              AI.
            </p>
            <p className="footer-note">
              Independent. Evidence-aware. On the side of the person doing the
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
          <span>© 2026 Work Changed. Preview build.</span>
          <div>
            <Link href="/standards">Privacy</Link>
            <Link href="/standards">Terms</Link>
            <Link href="/standards">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
