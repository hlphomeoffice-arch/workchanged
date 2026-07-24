export function EditorialVisual({
  variant,
  label,
}: {
  variant:
    | "route"
    | "blocks"
    | "bars"
    | "rings"
    | "steps"
    | "document";
  label?: string;
}) {
  return (
    <div
      className={`editorial-visual editorial-visual--${variant}`}
      role="img"
      aria-label={label || "Abstract diagram showing work changing through AI"}
    >
      <span className="visual-grid" aria-hidden="true" />
      <span className="visual-route" aria-hidden="true" />
      <span className="visual-node visual-node--one" aria-hidden="true" />
      <span className="visual-node visual-node--two" aria-hidden="true" />
      <span className="visual-node visual-node--three" aria-hidden="true" />
      <span className="visual-endpoint" aria-hidden="true" />
      <span className="visual-label" aria-hidden="true">
        {label || "Work → next"}
      </span>
    </div>
  );
}
