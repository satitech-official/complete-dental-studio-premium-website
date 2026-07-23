import { TestimonialsCarousel } from "@/components/interactive/TestimonialsCarousel";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { patientStories } from "@/data/testimonials";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Testimonials",
  description:
    "Testimonials page prepared for moderated written reviews, video testimonial readiness, Google review integration readiness, and treatment filters.",
  path: "/testimonials"
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Patient feedback, ready for verification"
        copy="This page avoids fictional reviews and provides a moderated structure for verified written reviews, video testimonials, ratings, and Google review integration."
        breadcrumbs={[{ name: "Testimonials", href: "/testimonials", current: true }]}
      />
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Written Reviews"
            title="Placeholder carousel for real patient feedback"
            copy="Replace these samples only after source verification and consent."
          />
          <TestimonialsCarousel />
        </div>
      </section>
      <section className="section bg-ice">
        <div className="container">
          <SectionHeading eyebrow="Featured Stories" title="Treatment-based patient story cards" />
          <div className="grid gap-5 md:grid-cols-2">
            {patientStories.map((story) => (
              <article className="panel p-6" key={story.concern}>
                <p className="eyebrow">{story.treatment}</p>
                <h2 className="mt-3 font-display text-2xl font-extrabold text-ink">{story.concern}</h2>
                <p className="mt-4 leading-7 text-slate">{story.journey}</p>
                <p className="mt-4 text-sm font-bold text-amber">{story.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
