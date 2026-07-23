"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="panel flex flex-col gap-3 p-4 sm:flex-row"
      onSubmit={(event) => {
        event.preventDefault();
        if (email.includes("@")) setSubmitted(true);
      }}
    >
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        className="form-input flex-1"
        type="email"
        placeholder="Get oral-care updates"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <button className="button-primary shrink-0" type="submit">
        <Send className="h-4 w-4" aria-hidden="true" />
        Subscribe
      </button>
      {submitted ? <p className="success-text sm:self-center">Subscription placeholder saved.</p> : null}
    </form>
  );
}
