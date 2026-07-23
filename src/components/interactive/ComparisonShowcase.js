"use client";

import Image from "next/image";
import { ReactCompareSlider } from "react-compare-slider";
import { galleryCases } from "@/data/gallery";

function ComparePanel({ label, src, alt }) {
  return (
    <div className="relative h-full min-h-[280px] overflow-hidden rounded-[8px] bg-ice">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 46vw, 92vw" className="object-cover" />
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold uppercase text-deep shadow-soft">
        {label}
      </span>
    </div>
  );
}

export function CompareVisual({ item, className = "" }) {
  if (!item.beforeImage || !item.afterImage) return null;

  return (
    <ReactCompareSlider
      itemOne={
        <ComparePanel
          label={item.beforeLabel || "Before"}
          src={item.beforeImage}
          alt={item.beforeAlt || `${item.title} before image`}
        />
      }
      itemTwo={
        <ComparePanel
          label={item.afterLabel || "After"}
          src={item.afterImage}
          alt={item.afterAlt || `${item.title} after image`}
        />
      }
      className={`h-[280px] rounded-[8px] md:h-[360px] ${className}`}
      portrait={false}
    />
  );
}

export function ComparisonCard({ item }) {
  return (
    <article className="panel overflow-hidden p-3">
      <CompareVisual item={item} />
      <div className="p-4">
        <p className="text-xs font-extrabold uppercase text-teal">{item.category}</p>
        <h3 className="mt-1 font-display text-xl font-extrabold text-ink">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate">{item.summary}</p>
        <p className="mt-3 text-xs font-bold text-amber">{item.consent}</p>
      </div>
    </article>
  );
}

export function ComparisonShowcase({ limit = 2, items = galleryCases }) {
  const comparisonItems = items.filter((item) => item.beforeImage && item.afterImage).slice(0, limit);

  if (!comparisonItems.length) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {comparisonItems.map((item) => (
        <ComparisonCard item={item} key={item.id} />
      ))}
    </div>
  );
}
