import Link from "next/link";

const NEWS_LETTER_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSevqneZIj5ckUWGceVtkSw5oSJCRyigRHGsaTpFTsxNiZbz8w/viewform";
const NEWS_LETTER_EMBED_URL = `${NEWS_LETTER_FORM_URL}?embedded=true`;

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
      <div className="newsletter-form__intro">
        <strong>Join the WorkChanged News Letter</strong>
        <p>
          Enter your email below
          {topic ? ` after reading about ${topic}` : ""}. Google confirms the
          response and stores the address in the private WorkChanged Website
          News Letter List in Google Drive.
        </p>
      </div>
      <div className="newsletter-form__embed">
        <iframe
          src={NEWS_LETTER_EMBED_URL}
          title="WorkChanged News Letter email sign-up"
          loading="lazy"
        >
          Loading the WorkChanged News Letter sign-up form.
        </iframe>
      </div>
      <div className="newsletter-form__actions">
        <a
          className={`button ${dark ? "button--lime" : "button--dark"}`}
          href={NEWS_LETTER_FORM_URL}
          target="_blank"
          rel="noreferrer noopener"
          data-track="newsletter_signup_open"
          data-track-meta={topic || "workchanged-news-letter"}
        >
          Open the News Letter sign-up form
          <span aria-hidden="true"> ↗</span>
        </a>
        <Link
          className="text-link"
          href="/rss.xml"
          data-track="newsletter_rss_conversion"
          data-track-meta={topic || "workchanged-news-letter"}
        >
          Prefer RSS? Follow the feed
        </Link>
      </div>
      <p className="form-privacy">
        We use your address only for the WorkChanged News Letter. Google hosts
        the form and private mailing-list file. Campaign delivery is separate
        from this sign-up.
      </p>
    </div>
  );
}
