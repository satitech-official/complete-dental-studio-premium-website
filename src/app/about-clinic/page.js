import Image from "next/image";
import Link from "next/link";
import { Accessibility, CalendarCheck, HeartHandshake, MapPin, ShieldCheck, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfoCard } from "@/components/ui/InfoCard";
import { MapSection } from "@/components/ui/MapSection";
import { clinic } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About the Clinic",
  description:
    "Learn about Complete Dental Studio's clinic story, hygiene approach, comfort philosophy, technology readiness, timings, and location.",
  path: "/about-clinic"
});

const values = [
  ["Mission", "Deliver clear, ethical, comfort-focused dental care with modern planning and transparent patient communication.", HeartHandshake],
  ["Vision", "Build a premium clinic experience where patients feel confident before, during, and after treatment.", Stethoscope],
  ["Hygiene", "Sterilization and safety content is ready for clinic-approved protocol details.", ShieldCheck],
  ["Accessibility", `Located at ${clinic.contact.address}, ${clinic.contact.city}. Parking guidance should be confirmed by phone.`, Accessibility]
];

const clinicGallery = [
  { title: "Operatory", image: "/images/real-dental-operatory.jpg", alt: "Real dental operatory photo" },
  { title: "Treatment Room", image: "/images/real-treatment-room.jpg", alt: "Real dental treatment room photo" },
  { title: "Clinic Profile", image: "/images/instagram-profile.jpg", alt: "Complete Dental Studio Instagram profile image" },
  { title: "Future Clinic Photos", image: "/images/real-dental-operatory.jpg", alt: "Clinical dental room photo used until official clinic photos are supplied" }
];

export default function AboutClinicPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Clinic"
        title="A premium dental environment built around patient confidence"
        copy="The clinic page is prepared for authentic photography, verified infrastructure details, team introductions, timings, accessibility notes, emergency care information, and directions."
        breadcrumbs={[{ name: "About the Clinic", href: "/about-clinic", current: true }]}
        image={
          <Image
            src="/images/real-dental-operatory.jpg"
            alt="Real modern dental operatory photo"
            width={1800}
            height={1199}
            className="h-full w-full object-cover"
          />
        }
      />
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Clinic Story"
            title="Clean spaces, clear conversations, careful planning"
            copy="Use this page to tell the verified clinic story, introduce the care team, show real rooms and equipment, and explain what patients can expect."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, copy, Icon]) => (
              <InfoCard icon={Icon} title={title} copy={copy} key={title} />
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-ice">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-gsap-reveal>
            <SectionHeading
              eyebrow="Clinic Gallery"
              title="Real clinic-style visual areas"
              copy="These real dental-clinic photos and the public Instagram profile image are wired in now. Replace the remaining support visuals with clinic-owned reception, sterilization, and team photos when available."
            />
            <Link className="button-primary" href="/book-appointment">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {clinicGallery.map((item) => (
              <div className="panel relative min-h-48 overflow-hidden" key={item.title}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className={item.image.includes("instagram-profile") ? "object-contain p-8" : "object-cover"}
                />
                <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 font-display text-xl font-extrabold text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight bg-white">
        <div className="container">
          <div className="panel grid gap-5 p-6 md:grid-cols-[auto_1fr_auto] md:items-center">
            <MapPin className="h-10 w-10 text-teal" aria-hidden="true" />
            <div>
              <h2 className="font-display text-2xl font-extrabold text-ink">Timings, location, and emergency readiness</h2>
              <p className="mt-2 text-slate">
                Address: {clinic.contact.address}. Hours: {clinic.hours.map((item) => `${item.day} ${item.time}`).join(", ")}.
              </p>
            </div>
            <Link className="button-secondary" href="/contact">Contact Details</Link>
          </div>
        </div>
      </section>
      <MapSection />
    </>
  );
}
