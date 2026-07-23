"use client";

import Link from "next/link";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function Error({ reset }) {
  return (
    <main className="grid min-h-screen place-items-center bg-pearl px-6">
      <section className="panel max-w-xl p-8 text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-error" aria-hidden="true" />
        <h1 className="mt-5 font-display text-3xl font-extrabold text-ink">
          Something did not load correctly
        </h1>
        <p className="mt-3 text-slate">
          Please try again. If the issue continues, contact the clinic team by phone or
          WhatsApp.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="button-primary" onClick={() => reset()}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Try Again
          </button>
          <Link className="button-secondary" href="/contact">
            Contact Clinic
          </Link>
        </div>
      </section>
    </main>
  );
}
