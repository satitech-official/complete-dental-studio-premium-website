import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cleanJsonLd, createMetadata } from "@/lib/seo";
import { breadcrumbSchema, treatmentSchema } from "@/lib/schema";
import { clinic } from "@/data/clinic";
import { treatments } from "@/data/treatments";
import { getTreatmentVisual } from "@/data/contentImages";

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export function generateMetadata({ params }) {
  const treatment = treatments.find((item) => item.slug === params.slug);
  if (!treatment) return createMetadata({ title: "Treatment Not Found", noIndex: true });
  return createMetadata({
    title: treatment.title,
    description: treatment.summary,
    path: `/treatments/${treatment.slug}`
  });
}

export default function TreatmentDetailPage({ params }) {
  const treatment = treatments.find((item) => item.slug === params.slug);
  if (!treatment) notFound();
  const visual = getTreatmentVisual(treatment.slug);
  const related = treatments.filter((item) => item.category === treatment.category && item.slug !== treatment.slug).slice(0, 3);
  const breadcrumbs = [
    { name: "Treatments", href: "/treatments" },
    { name: treatment.title, href: `/treatments/${treatment.slug}`, current: true }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: cleanJsonLd(treatmentSchema(treatment)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: cleanJsonLd(breadcrumbSchema(breadcrumbs)) }} />
      <PageHero
        eyebrow={treatment.category}
        title={treatment.title}
        copy={treatment.summary}
        breadcrumbs={breadcrumbs}
        image={
          <Image
            src={visual.src}
            alt={visual.alt}
            width={1800}
            height={1200}
            priority
            className="h-full min-h-[280px] w-full object-cover"
          />
        }
      />
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="panel h-fit overflow-hidden" data-gsap-reveal>
            <div className="relative aspect-[16/10] bg-ice">
              <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6">
              <p className="eyebrow">Consultation CTA</p>
              <h2 className="mt-3 font-display text-2xl font-extrabold text-ink">Need {treatment.title} guidance?</h2>
              <p className="mt-3 text-sm leading-7 text-slate">
                Book a consultation to understand diagnosis, suitability, duration, and next steps.
              </p>
              <Link className="button-primary mt-6 w-full" href={`/book-appointment?treatment=${encodeURIComponent(treatment.title)}`}>
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Book Consultation
              </Link>
              <p className="mt-5 rounded-[8px] bg-ice p-4 text-xs font-bold leading-6 text-deep">
                Fixed prices are not shown. Cost depends on clinical findings and approved treatment plan.
              </p>
            </div>
          </aside>
          <div className="grid gap-10">
            <DetailSection title="Who may need this treatment?" body={treatment.concern} />
            <DetailSection title="Consultation and diagnosis process" body={treatment.diagnosis} />
            <div>
              <h2 className="heading-md font-extrabold text-ink">Treatment steps</h2>
              <ol className="mt-5 grid gap-3 md:grid-cols-2">
                {treatment.steps.map((step, index) => (
                  <li className="panel flex gap-3 p-4" key={step}>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-teal text-sm font-black text-white">{index + 1}</span>
                    <span className="font-bold text-slate">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <DetailSection title="Technology used" body={treatment.technology} />
            <div>
              <h2 className="heading-md font-extrabold text-ink">Possible benefits</h2>
              <ul className="mt-5 grid gap-3">
                {treatment.benefits.map((item) => (
                  <li className="flex gap-3 text-slate" key={item}>
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <DetailSection title="Recovery or aftercare overview" body={treatment.aftercare} />
            <DetailSection title="Treatment duration range" body={treatment.duration} />
            <div className="panel overflow-hidden">
              <div className="relative aspect-[16/8] bg-ice">
                <Image src={visual.src} alt={visual.alt} fill sizes="(min-width: 1024px) 65vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="heading-md font-extrabold text-ink">Visual treatment reference</h2>
                <p className="mt-3 leading-7 text-slate">
                  This visual supports treatment education. Authentic patient before-and-after media should only be added with documented consent and clinical approval.
                </p>
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="FAQs" title={`Questions about ${treatment.title}`} />
              <FAQAccordion groups={[{ category: treatment.title, items: treatment.faqs.map(([question, answer]) => ({ question, answer })) }]} />
            </div>
            {related.length ? (
              <div>
                <h2 className="heading-md font-extrabold text-ink">Related treatments</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {related.map((item) => {
                    const relatedVisual = getTreatmentVisual(item.slug);
                    return (
                      <Link className="panel group overflow-hidden transition hover:-translate-y-1 hover:shadow-glow" href={`/treatments/${item.slug}`} key={item.slug}>
                        <div className="relative aspect-[16/10] bg-ice">
                          <Image src={relatedVisual.src} alt={relatedVisual.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-5">
                          <p className="font-display text-lg font-extrabold text-ink">{item.title}</p>
                          <p className="mt-2 text-sm text-slate">Learn more <ArrowRight className="inline h-4 w-4" aria-hidden="true" /></p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}
            <p className="rounded-[8px] bg-ice p-5 text-sm font-bold leading-7 text-deep">{clinic.disclaimer}</p>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailSection({ title, body }) {
  return (
    <section data-gsap-reveal>
      <h2 className="heading-md font-extrabold text-ink">{title}</h2>
      <p className="mt-4 leading-7 text-slate">{body}</p>
    </section>
  );
}
