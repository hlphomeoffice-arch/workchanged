import Link from "next/link";

export function NewsletterForm({
  dark = false,
  compact = false,
  topic,
}: {
  dark?: boolean;
  compact?: boolean;
  topic?: string;
}) {
  return (
    <div
      className={`newsletter-form newsletter-form--notice ${
        dark ? "newsletter-form--dark" : ""
      } ${compact ? "newsletter-form--compact" : ""}`}
    >
      <div>
        <strong>
          {topic ? `Follow ${topic} in What Changed at Work` : "What Changed at Work"}
        </strong>
        <p>
          The email service is not connected yet. Use the RSS feed now
          {topic ? ` for reviewed ${topic} guidance` : ""}, or save a topic on
          this device and return for reviewed updates.
        </p>
      </div>
      <div className="newsletter-form__actions">
        <Link
          className={`button ${dark ? "button--lime" : "button--dark"}`}
          href="/rss.xml"
          data-track="newsletter_rss_conversion"
          data-track-meta={topic || "weekly-briefing"}
        >
          Follow the RSS feed
        </Link>
        <Link className="text-link" href="/newsletter">
          Preview the weekly briefing
        </Link>
      </div>
      <p className="form-privacy">
        No email address is collected and no sign-up success is claimed.
      </p>
    </div>
  );
}
