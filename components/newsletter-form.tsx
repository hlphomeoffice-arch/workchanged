"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={`form-success ${dark ? "form-success--dark" : ""}`}>
        <span aria-hidden="true">✓</span>
        <div>
          <strong>You&apos;re on the preview list.</strong>
          <p>The live email service will be connected before launch.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      className={`newsletter-form ${dark ? "newsletter-form--dark" : ""} ${
        compact ? "newsletter-form--compact" : ""
      }`}
      onSubmit={submit}
    >
      <label>
        <span className="sr-only">Work email</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your work email"
        />
      </label>
      {!compact && (
        <label>
          <span className="sr-only">Your role</span>
          <select name="role" defaultValue="">
            <option value="" disabled>
              Choose your role (optional)
            </option>
            <option>Marketing & content</option>
            <option>Sales & customer success</option>
            <option>Operations & projects</option>
            <option>HR & recruiting</option>
            <option>Finance & accounting</option>
            <option>Support & administration</option>
          </select>
        </label>
      )}
      <button className="button button--dark" type="submit">
        Join free <span aria-hidden="true">→</span>
      </button>
      <p className="form-privacy">
        One useful email a week. No breathless launch spam.
      </p>
    </form>
  );
}
