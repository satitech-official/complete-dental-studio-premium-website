"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export function FAQAccordion({ groups, searchable = false }) {
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState("");

  const items = useMemo(() => {
    return groups.flatMap((group) =>
      group.items.map((item) => ({
        ...item,
        category: group.category,
        id: `${group.category}-${item.question}`.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
      }))
    );
  }, [groups]);

  const filtered = items.filter((item) => {
    const haystack = `${item.category} ${item.question} ${item.answer}`.toLowerCase();
    return haystack.includes(query.toLowerCase());
  });

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (id) setOpenId(id);
  }, []);

  return (
    <div className="grid gap-5">
      {searchable ? (
        <label className="form-field">
          <span className="form-label">Search FAQs</span>
          <span className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" aria-hidden="true" />
            <input
              className="form-input pl-10"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search appointments, implants, emergencies..."
            />
          </span>
        </label>
      ) : null}

      <div className="grid gap-3">
        {filtered.map((item) => {
          const open = openId === item.id;
          return (
            <article className="panel overflow-hidden" key={item.id} id={item.id}>
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
                type="button"
                aria-expanded={open}
                aria-controls={`${item.id}-panel`}
                onClick={() => setOpenId(open ? "" : item.id)}
              >
                <span>
                  <span className="block text-xs font-extrabold uppercase text-teal">{item.category}</span>
                  <span className="mt-1 block font-display text-lg font-extrabold text-ink">{item.question}</span>
                </span>
                <ChevronDown className={`h-5 w-5 shrink-0 text-teal transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              <div
                id={`${item.id}-panel`}
                className={`grid transition-all ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-silver px-5 py-5 leading-7 text-slate">{item.answer}</p>
                </div>
              </div>
            </article>
          );
        })}
        {!filtered.length ? (
          <div className="panel p-6 text-center text-slate">
            No FAQ matches that search. Try another term or contact the clinic.
          </div>
        ) : null}
      </div>
    </div>
  );
}
