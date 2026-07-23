"use client";

import dynamic from "next/dynamic";

function SectionSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[0, 1, 2].map((item) => (
        <div className="panel min-h-56 animate-pulse bg-white/70 p-6" key={item} />
      ))}
    </div>
  );
}

export const DynamicFeaturedTreatments = dynamic(
  () => import("@/components/interactive/TreatmentDirectory").then((mod) => mod.TreatmentDirectory),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

export const DynamicComparisonShowcase = dynamic(
  () => import("@/components/interactive/ComparisonShowcase").then((mod) => mod.ComparisonShowcase),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

export const DynamicTestimonialsCarousel = dynamic(
  () => import("@/components/interactive/TestimonialsCarousel").then((mod) => mod.TestimonialsCarousel),
  { ssr: false, loading: () => <SectionSkeleton /> }
);

export const DynamicBlogSearch = dynamic(
  () => import("@/components/interactive/BlogSearch").then((mod) => mod.BlogSearch),
  { ssr: false, loading: () => <SectionSkeleton /> }
);
