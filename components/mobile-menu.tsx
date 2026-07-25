"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileMenu({
  items,
}: {
  items: ReadonlyArray<readonly [string, string]>;
}) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <details
      className="mobile-menu"
      open={open}
      onToggle={(event) =>
        setOpenPath(event.currentTarget.open ? pathname : null)
      }
    >
      <summary aria-label={open ? "Close navigation" : "Open navigation"}>
        <span />
        <span />
        <span />
      </summary>
      <div className="mobile-menu__panel">
        <nav aria-label="Mobile navigation">
          {items.map(([label, href]) => (
            <Link href={href} key={href} onClick={() => setOpenPath(null)}>
              {label} <span aria-hidden="true">→</span>
            </Link>
          ))}
        </nav>
        <Link
          className="button button--primary"
          href="/newsletter"
          onClick={() => setOpenPath(null)}
        >
          News Letter
        </Link>
      </div>
    </details>
  );
}
