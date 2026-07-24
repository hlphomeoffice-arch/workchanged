import Link from "next/link";

export function SectionHeading({
  kicker,
  title,
  text,
  href,
  linkLabel,
  light = false,
}: {
  kicker: string;
  title: string;
  text?: string;
  href?: string;
  linkLabel?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <div>
        <p className={`kicker ${light ? "kicker--light" : ""}`}>{kicker}</p>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {href && linkLabel && (
        <Link className="text-link" href={href}>
          {linkLabel} <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  );
}
