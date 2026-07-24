export function PageHero({
  kicker,
  title,
  text,
  meta,
}: {
  kicker: string;
  title: string;
  text: string;
  meta?: string;
}) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__inner">
        <div className="page-hero__copy">
          <p className="kicker kicker--light">{kicker}</p>
          <h1>{title}</h1>
          <p>{text}</p>
          {meta && <span className="page-hero__meta">{meta}</span>}
        </div>
        <div className="page-hero__graphic" aria-hidden="true">
          <span />
          <span />
          <span />
          <i />
        </div>
      </div>
    </section>
  );
}
