import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";

const nav = [
  ["AI & your job", "/topics/ai-and-your-job"],
  ["Skills", "/topics/skills-that-are-changing"],
  ["Career moves", "/topics/career-moves"],
  ["Job security", "/topics/job-security-and-hiring"],
  ["Rights", "/topics/workplace-rules-and-rights"],
  ["Professions", "/roles"],
] as const;

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
            What Changed This Week
          </span>
          <Link href="/today">
            Reviewed 25 July 2026 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link className="brand-link" href="/" aria-label="WorkChanged home">
            <Image
              className="brand-logo brand-logo--desktop"
              src="/brand/logo-primary.svg"
              alt="WorkChanged"
              width={220}
              height={38}
              priority
              unoptimized
            />
            <Image
              className="brand-logo brand-logo--mobile"
              src="/brand/mark.svg"
              alt="WorkChanged"
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
              News Letter
            </Link>
            <MobileMenu items={nav} />
          </div>
        </div>
      </header>
    </>
  );
}
