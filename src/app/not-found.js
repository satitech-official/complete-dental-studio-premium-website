import Link from "next/link";
import { Home, Search } from "lucide-react";
import { clinic } from "@/data/clinic";

export default function NotFound() {
  return (
    <main className="clinical-grid grid min-h-screen place-items-center bg-pearl px-6 py-16">
      <section className="panel max-w-2xl p-8 text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold text-ink">
          This page is still in treatment planning
        </h1>
        <p className="mt-4 text-slate">
          The page you requested is not available. Explore treatments or return to
          {` ${clinic.name}`}.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link className="button-primary" href="/">
            <Home className="h-4 w-4" aria-hidden="true" /> Home
          </Link>
          <Link className="button-secondary" href="/treatments">
            <Search className="h-4 w-4" aria-hidden="true" /> Explore Treatments
          </Link>
        </div>
      </section>
    </main>
  );
}
