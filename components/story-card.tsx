import Link from "next/link";
import type { Story } from "@/lib/content";
import { EvidenceBadge } from "./evidence-badge";
import { EditorialVisual } from "./editorial-visual";

export function StoryCard({
  story,
  compact = false,
}: {
  story: Story;
  compact?: boolean;
}) {
  return (
    <article className={`story-card ${compact ? "story-card--compact" : ""}`}>
      {!compact && (
        <Link
          className="story-card__visual-link"
          href={story.href}
          aria-label={story.title}
        >
          <EditorialVisual variant={story.visual} label={story.type} />
        </Link>
      )}
      <div className="story-card__body">
        <div className="meta-row">
          <EvidenceBadge evidence={story.evidence} />
          <span>{story.date}</span>
          {story.time && <span>{story.time}</span>}
        </div>
        <h3>
          <Link href={story.href}>{story.title}</Link>
        </h3>
        <p>{story.summary}</p>
        <div className="story-card__footer">
          <span>{story.roles.join(" · ")}</span>
          <Link href={story.href} aria-label={`Read: ${story.title}`}>
            Read the change <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
