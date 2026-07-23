"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { galleryCases, galleryCategories } from "@/data/gallery";
import { CompareVisual, ComparisonShowcase } from "@/components/interactive/ComparisonShowcase";

function GalleryPreview({ item }) {
  if (item.beforeImage && item.afterImage) {
    return (
      <div className="grid h-full grid-cols-2">
        <div className="relative overflow-hidden">
          <Image
            src={item.beforeImage}
            alt={item.beforeAlt || `${item.title} before image`}
            fill
            sizes="(min-width: 1024px) 16vw, (min-width: 768px) 28vw, 46vw"
            className="object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-extrabold uppercase text-deep">
            {item.beforeLabel || "Before"}
          </span>
        </div>
        <div className="relative overflow-hidden">
          <Image
            src={item.afterImage}
            alt={item.afterAlt || `${item.title} after image`}
            fill
            sizes="(min-width: 1024px) 16vw, (min-width: 768px) 28vw, 46vw"
            className="object-cover"
          />
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-extrabold uppercase text-deep">
            {item.afterLabel || "After"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={item.cardImage}
      alt={item.imageAlt || `${item.title} gallery image`}
      fill
      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"
      className="object-cover"
    />
  );
}

export function GalleryGrid() {
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState(null);
  const items = useMemo(() => {
    return galleryCases.filter((item) => category === "All" || item.category === category);
  }, [category]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery filters">
        {galleryCategories.map((item) => (
          <button
            key={item}
            className={`rounded-full border px-4 py-2 text-sm font-extrabold transition ${
              category === item ? "border-teal bg-teal text-white" : "border-silver bg-white text-deep hover:bg-ice"
            }`}
            type="button"
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className="panel overflow-hidden p-0 text-left transition hover:-translate-y-1 hover:shadow-glow"
            onClick={() => setActive(item)}
          >
            <div className="relative h-[220px] bg-ice">
              <GalleryPreview item={item} />
            </div>
            <div className="p-5">
              <span className="rounded-full bg-ice px-3 py-1 text-xs font-extrabold text-teal">{item.category}</span>
              <h3 className="mt-4 font-display text-xl font-extrabold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate">{item.summary}</p>
              <p className="mt-4 text-xs font-bold text-amber">{item.consent}</p>
            </div>
          </button>
        ))}
      </div>

      {!items.length ? (
        <div className="panel p-8 text-center text-slate">No gallery cases available in this category yet.</div>
      ) : null}

      <ComparisonShowcase items={items} limit={2} />

      {active ? (
        <div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/68 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
        >
          <div className="panel max-h-[92vh] w-full max-w-4xl overflow-y-auto p-5 md:p-6">
            <button
              className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-silver bg-white text-deep"
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close gallery case"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="mt-3">
              {active.beforeImage && active.afterImage ? (
                <CompareVisual item={active} className="md:h-[420px]" />
              ) : (
                <div className="relative h-[280px] overflow-hidden rounded-[8px] bg-ice md:h-[420px]">
                  <Image
                    src={active.cardImage}
                    alt={active.imageAlt || `${active.title} gallery image`}
                    fill
                    sizes="(min-width: 768px) 760px, 92vw"
                    className="object-cover"
                  />
                </div>
              )}

              <p className="eyebrow mt-6">{active.category}</p>
              <h3 className="heading-md mt-2 font-extrabold text-ink">{active.title}</h3>
              <p className="mt-3 leading-7 text-slate">{active.summary}</p>
              <p className="mt-4 rounded-[8px] bg-ice p-4 text-sm font-bold text-deep">
                {active.consent}. These visuals are reference images unless explicitly replaced with
                clinic-owned media approved for publication.
              </p>
              {active.sourceUrl ? (
                <a
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-teal"
                  href={active.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Image source <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
