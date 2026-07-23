import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { MapSection } from "@/components/ui/MapSection";
import { clinic } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";
import { whatsappTemplates, whatsappUrl } from "@/lib/whatsapp";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Complete Dental Studio by phone, WhatsApp, email, maps, directions, or secure contact form readiness.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Complete Dental Studio"
        copy="Call +91-9009398787, send a WhatsApp inquiry, request directions, or use the contact form for Complete Dental Studio in Indore."
        breadcrumbs={[{ name: "Contact", href: "/contact", current: true }]}
      />
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-4">
            <ContactCard icon={Phone} title="Phone" value={clinic.contact.primaryPhone.display} href={clinic.contact.primaryPhone.href} />
            <ContactCard icon={MessageCircle} title="WhatsApp" value={clinic.contact.whatsapp.display} href={whatsappUrl(whatsappTemplates.general)} />
            {clinic.contact.email ? (
              <ContactCard icon={Mail} title="Email" value={clinic.contact.email} href={`mailto:${clinic.contact.email}`} />
            ) : null}
            <ContactCard icon={MapPin} title="Address" value={`${clinic.contact.address}, ${clinic.contact.city}`} href={clinic.contact.directionsUrl} />
            <div className="panel p-5 text-sm leading-7 text-slate">
              <p><strong>Hours:</strong> {clinic.hours.map((item) => `${item.day}: ${item.time}`).join("; ")}</p>
              <p><strong>Emergency contact:</strong> {clinic.contact.emergencyPhone.display}</p>
              <p><strong>Landmark:</strong> {clinic.contact.nearbyLandmark}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <MapSection />
    </>
  );
}

function ContactCard({ icon: Icon, title, value, href }) {
  return (
    <Link className="panel flex gap-4 p-5 transition hover:-translate-y-1 hover:shadow-glow" href={href}>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] bg-ice text-teal">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm font-extrabold uppercase text-teal">{title}</span>
        <span className="mt-1 block font-display text-lg font-extrabold text-ink">{value}</span>
      </span>
    </Link>
  );
}
