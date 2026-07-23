import { PageHero } from "@/components/ui/PageHero";
import { clinic } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy placeholder for Complete Dental Studio appointment, contact, analytics, and future CMS integrations.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        copy="Editable policy structure for inquiry handling, appointment requests, analytics, consent, and future integrations."
        breadcrumbs={[{ name: "Privacy Policy", href: "/privacy-policy", current: true }]}
        actions={false}
      />
      <LegalContent
        sections={[
          ["Information We Collect", "The website may collect name, phone number, email address, appointment preferences, and message details submitted voluntarily through forms."],
          ["How Information Is Used", "Information is used to respond to inquiries, manage appointment requests, improve patient communication, and support future clinic operations."],
          ["Sensitive Medical Information", "This public form is not a medical-record system. Patients should avoid uploading or submitting sensitive medical records until a secure compliant backend is implemented."],
          ["Third-Party Services", "Email delivery, CAPTCHA, analytics, maps, WhatsApp links, CMS, and appointment systems can be connected later with appropriate privacy review."],
          ["Contact", `For privacy questions, call ${clinic.contact.primaryPhone.display} or use the contact form.`]
        ]}
      />
    </>
  );
}

function LegalContent({ sections }) {
  return (
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
  );
}
