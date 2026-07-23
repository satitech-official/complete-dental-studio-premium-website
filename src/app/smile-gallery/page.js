import { GalleryGrid } from "@/components/interactive/GalleryGrid";
import { PageHero } from "@/components/ui/PageHero";
import { clinic } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Smile Gallery",
  description:
    "Filterable smile gallery with real reference images, before-and-after sliders, patient consent indicators, case summaries, and result disclaimers.",
  path: "/smile-gallery"
});

export default function SmileGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Smile Gallery"
        title="Real-image smile reference gallery"
        copy="Browse source-backed before-and-after references, whitening visuals, implant education images, and clinic-style photos. Replace with original Complete Dental Studio patient media only after written consent."
        breadcrumbs={[{ name: "Smile Gallery", href: "/smile-gallery", current: true }]}
      />
      <section className="section bg-white">
        <div className="container">
          <GalleryGrid />
          <p className="mt-8 rounded-[8px] bg-ice p-5 text-sm font-bold leading-7 text-deep">{clinic.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
