import { PageHero } from "@/components/ui/PageHero";
import { clinic } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions placeholder for Complete Dental Studio website use, appointment requests, and educational content.",
  path: "/terms-and-conditions"
});

export default function TermsPage() {
  const sections = [
    ["Website Use", "This website provides general clinic, treatment, and educational information. Content may be updated as verified clinic details become available."],
    ["Appointment Requests", "Submitting a form does not confirm an appointment. The clinic team must confirm the final date, time, and care pathway."],
    ["Educational Content", "Articles, FAQs, and treatment pages are for general education and do not create a dentist-patient relationship."],
    ["Pricing and Outcomes", "No fixed prices or guaranteed treatment outcomes are provided online. Suitability, cost, duration, and results vary by clinical condition."],
    ["External Links", "Maps, social links, WhatsApp links, and future payment or CMS tools may lead to third-party services with their own terms."],
    ["Contact", `For questions about these terms, call ${clinic.contact.primaryPhone.display} or use the contact form.`]
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms and Conditions"
        copy="Editable terms for website use, appointment request handling, educational content, and external integrations."
        breadcrumbs={[{ name: "Terms and Conditions", href: "/terms-and-conditions", current: true }]}
        actions={false}
      />
      <section className="section bg-white">
        <article className="container max-w-4xl">
          {sections.map(([title, body]) => (
            <section className="mb-8" key={title}>
              <h2 className="heading-md font-extrabold text-ink">{title}</h2>
              <p className="mt-4 leading-8 text-slate">{body}</p>
            </section>
          ))}
        </article>
      </section>
    </>
  );
}
