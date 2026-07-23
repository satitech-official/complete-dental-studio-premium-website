import Image from "next/image";
import Link from "next/link";
import { Award, CalendarCheck, CheckCircle2, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfoCard } from "@/components/ui/InfoCard";
import { clinic } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: `About ${clinic.doctor}`,
  description:
    "Meet Dr. Nikita Rawat Jain, focused on cosmetic dentistry, oral and dental surgery, patient-first consultation, and premium dental care.",
  path: "/about-doctor"
});

export default function AboutDoctorPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Doctor"
        title={clinic.doctor}
        copy="Consultant Oral and Dental Surgeon, Cosmetic Dental Surgeon, ISP Merit (1st Rank), practising dentistry since 11 years."
        breadcrumbs={[{ name: "About the Doctor", href: "/about-doctor", current: true }]}
        image={
          <div className="grid h-full min-h-[320px] place-items-center bg-white p-8 text-center">
            <Image
              src="/images/instagram-profile.jpg"
              alt={`${clinic.name} public Instagram profile image`}
              width={170}
              height={170}
              className="rounded-[8px] shadow-clinical"
            />
            <p className="mt-5 max-w-sm text-sm font-bold leading-6 text-slate">
              Public Instagram profile image. Replace with an official doctor portrait when supplied.
            </p>
          </div>
        }
      />
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="panel h-fit p-6" data-gsap-reveal>
            <p className="eyebrow">Profile Highlights</p>
            <ul className="mt-5 grid gap-4 text-sm font-bold text-slate">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-teal" aria-hidden="true" /> {clinic.experience} experience</li>
              <li className="flex gap-3"><Sparkles className="h-5 w-5 text-teal" aria-hidden="true" /> Cosmetic Dental Surgeon</li>
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 text-teal" aria-hidden="true" /> Consultant Oral and Dental Surgeon</li>
              <li className="flex gap-3"><Award className="h-5 w-5 text-amber" aria-hidden="true" /> {clinic.achievement}</li>
            </ul>
            <p className="mt-6 rounded-[8px] bg-ice p-4 text-xs font-bold leading-6 text-deep">
              Qualifications, registration number, certifications, memberships, and institution names must be added only after verification.
            </p>
          </aside>
          <div>
            <SectionHeading
              eyebrow="Clinical Approach"
              title="Expertise with calm, transparent guidance"
              copy={clinic.doctorProfile.philosophy}
            />
            <div className="grid gap-5 md:grid-cols-2">
              <InfoCard
                icon={GraduationCap}
                title="Professional Titles"
                copy={clinic.doctorProfile.professionalTitles.join(", ")}
              />
              <InfoCard
                icon={Award}
                title="Verified Merit"
                copy={clinic.achievement}
              />
            </div>
            <div className="mt-10">
              <h2 className="heading-md font-extrabold text-ink">Animated Professional Journey</h2>
              <ol className="mt-6 grid gap-5">
                {clinic.doctorProfile.journey.map((item, index) => (
                  <li className="grid gap-4 rounded-[8px] border border-silver bg-pearl p-5 sm:grid-cols-[auto_1fr]" key={item.title} data-gsap-reveal>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-deep text-sm font-black text-white">{index + 1}</span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold text-ink">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="panel mt-10 bg-deep p-7 text-white">
              <h2 className="heading-md font-extrabold">Doctor's Message</h2>
              <p className="mt-4 leading-7 text-white/70">
                "Every patient deserves careful listening, clear options, and dentistry that respects both comfort and long-term health." Replace or approve this message before launch.
              </p>
              <Link className="button-primary mt-6 bg-white text-deep" href="/book-appointment">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Request Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
