"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, CalendarCheck, Search } from "lucide-react";
import { treatmentCategories, treatments } from "@/data/treatments";

export function TreatmentDirectory({ featuredOnly = false }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const visible = useMemo(() => {
    const base = featuredOnly ? treatments.slice(0, 6) : treatments;
    return base.filter((item) => {
      const inCategory = category === "All" || item.category === category;
      const text = `${item.title} ${item.category} ${item.summary}`.toLowerCase();
      return inCategory && text.includes(query.toLowerCase());
    });
  }, [category, featuredOnly, query]);

  return (
    <div className="grid gap-6">
      {!featuredOnly ? (
        <div className="grid gap-4 lg:grid-cols-[1fr_auto]">
          <label className="form-field">
            <span className="form-label">Search treatments</span>
            <span className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" aria-hidden="true" />
              <input
                className="form-input pl-10"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search implants, whitening, root canal..."
              />
            </span>
          </label>
          <label className="form-field min-w-64">
            <span className="form-label">Filter category</span>
            <select className="form-input" value={category} onChange={(event) => setCategory(event.target.value)}>
              {treatmentCategories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((item) => {
          const Icon = item.icon;
          return (
            <article className="panel gradient-border group flex h-full flex-col p-6" key={item.slug}>
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-[8px] bg-ice text-teal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-extrabold text-teal shadow-sm">
                  {item.category}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-extrabold text-ink">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate">{item.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Link className="button-secondary min-h-10 px-4 text-sm" href={`/treatments/${item.slug}`}>
                  Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link className="button-ghost min-h-10 px-4 text-sm" href={`/book-appointment?treatment=${encodeURIComponent(item.title)}`}>
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Consult
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {!visible.length ? (
        <div className="panel p-8 text-center">
          <p className="font-display text-xl font-extrabold text-ink">No matching treatment found</p>
          <p className="mt-2 text-slate">Try another search term or send a consultation inquiry.</p>
        </div>
      ) : null}
    </div>
  );
}
