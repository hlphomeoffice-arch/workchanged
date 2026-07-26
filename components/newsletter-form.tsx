"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";
import { usePathname } from "next/navigation";

type SubmissionState = "idle" | "submitting" | "success" | "error";

interface NewsletterResponse {
  ok?: boolean;
}

export function NewsletterForm({
  dark = false,
  compact = false,
  topic,
}: {
  dark?: boolean;
  compact?: boolean;
  topic?: string;
}) {
  const pathname = usePathname();
  const firstNameId = useId();
  const surnameId = useId();
  const emailId = useId();
  const consentId = useId();
  const privacyId = useId();
  const statusId = useId();
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  async function submitNewsLetter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const fields = new FormData(form);
    const firstName = String(fields.get("firstName") || "").trim();
    const surname = String(fields.get("surname") || "").trim();
    const email = String(fields.get("email") || "").trim();
    const website = String(fields.get("website") || "");
    const consent = fields.get("consent") === "on";

    setSubmissionState("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          surname,
          email,
          consent,
          website,
          topic: topic || "WorkChanged News Letter",
          sourcePath: pathname,
        }),
      });
      const result = (await response.json().catch(() => null)) as
        | NewsletterResponse
        | null;

      if (!response.ok || result?.ok !== true) {
        throw new Error("News Letter sign-up was not confirmed.");
      }

      form.reset();
      setSubmissionState("success");
      window.dispatchEvent(
        new CustomEvent("workchanged:newsletter-signup", {
          detail: {
            topic: topic || "WorkChanged News Letter",
            source_path: pathname,
          },
        }),
      );
    } catch {
      setSubmissionState("error");
    }
  }

  const isSubmitting = submissionState === "submitting";

  return (
    <form
      className={`newsletter-form newsletter-form--notice ${
        dark ? "newsletter-form--dark" : ""
      } ${compact ? "newsletter-form--compact" : ""}`}
      onSubmit={submitNewsLetter}
      aria-describedby={`${privacyId} ${statusId}`}
      aria-busy={isSubmitting}
    >
      <div className="newsletter-form__intro">
        <strong>Join the WorkChanged News Letter</strong>
        <p>
          Enter your name, surname and email address
          {topic ? ` after reading about ${topic}` : ""} for the calm weekly
          briefing.
        </p>
      </div>

      <div className="newsletter-form__fields">
        <div className="newsletter-form__name-row">
          <div className="newsletter-field">
            <label htmlFor={firstNameId}>Name</label>
            <input
              id={firstNameId}
              name="firstName"
              type="text"
              autoComplete="given-name"
              maxLength={80}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="newsletter-field">
            <label htmlFor={surnameId}>Surname</label>
            <input
              id={surnameId}
              name="surname"
              type="text"
              autoComplete="family-name"
              maxLength={80}
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="newsletter-field">
          <label htmlFor={emailId}>Email address</label>
          <input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={254}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="newsletter-form__honeypot" aria-hidden="true">
          <label htmlFor={`${emailId}-website`}>Website</label>
          <input
            id={`${emailId}-website`}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <label className="newsletter-consent" htmlFor={consentId}>
          <input
            id={consentId}
            name="consent"
            type="checkbox"
            required
            disabled={isSubmitting}
          />
          <span>
            I agree to receive the WorkChanged News Letter and understand that
            I can unsubscribe at any time.
          </span>
        </label>
      </div>

      <div className="newsletter-form__actions">
        <button
          className={`button ${dark ? "button--lime" : "button--dark"}`}
          type="submit"
          disabled={isSubmitting}
          data-track="newsletter_signup_submit"
          data-track-meta={topic || "workchanged-news-letter"}
        >
          {isSubmitting ? "Joining…" : "Join the News Letter"}
        </button>
        <Link
          className="text-link"
          href="/rss.xml"
          data-track="newsletter_rss_conversion"
          data-track-meta={topic || "workchanged-news-letter"}
        >
          Prefer RSS? Follow the feed
        </Link>
      </div>

      <div
        id={statusId}
        className={`newsletter-form__status newsletter-form__status--${submissionState}`}
        role={submissionState === "error" ? "alert" : "status"}
        aria-live="polite"
        aria-atomic="true"
      >
        {submissionState === "submitting" &&
          "Securely adding your details…"}
        {submissionState === "success" &&
          "You are on the list. Your details have been saved for the WorkChanged News Letter."}
        {submissionState === "error" &&
          "We could not add you just now. Please try again, or follow the RSS feed."}
      </div>

      <p id={privacyId} className="form-privacy">
        We use your name, surname and email address only for the WorkChanged News
        Letter. These details are sent through a secure WorkChanged connection
        and stored in the private WorkChanged mailing-list file in Google Drive.
        Google provides storage, and analytics never receives these details.
        Read the{" "}
        <Link href="/standards#privacy">privacy details</Link>.
      </p>
    </form>
  );
}
