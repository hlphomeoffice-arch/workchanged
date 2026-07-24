import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Today", "/today"],
  ["Roles", "/roles"],
  ["Tasks", "/tasks"],
  ["Tools", "/tools"],
  ["Skills", "/skills"],
  ["Signals", "/signals"],
];

export function SiteHeader() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="briefing-bar">
        <div className="shell briefing-bar__inner">
          <span>
            <span className="live-dot" aria-hidden="true" />
            The 24 July briefing is live
          </span>
          <Link href="/today">
            6 changes worth knowing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link className="brand-link" href="/" aria-label="Work Changed home">
            <Image
              className="brand-logo brand-logo--desktop"
              src="/brand/logo-primary.svg"
              alt="Work Changed"
              width={220}
              height={38}
              priority
              unoptimized
            />
            <Image
              className="brand-logo brand-logo--mobile"
              src="/brand/mark.svg"
              alt="Work Changed"
              width={40}
              height={40}
              priority
              unoptimized
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link className="search-link" href="/search" aria-label="Search">
              <span aria-hidden="true">⌕</span>
              <span className="search-link__text">Search</span>
            </Link>
            <Link className="button button--dark header-cta" href="/newsletter">
              Get The Work Shift
            </Link>
            <details className="mobile-menu">
              <summary aria-label="Open navigation">
                <span />
                <span />
                <span />
              </summary>
              <div className="mobile-menu__panel">
                <nav aria-label="Mobile navigation">
                  {nav.map(([label, href]) => (
                    <Link key={href} href={href}>
                      {label} <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </nav>
                <Link className="button button--primary" href="/newsletter">
                  Get The Work Shift
                </Link>
              </div>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
