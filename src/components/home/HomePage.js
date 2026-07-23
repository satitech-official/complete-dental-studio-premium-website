import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  MessageCircle
} from "lucide-react";
import { FAQAccordion } from "@/components/interactive/FAQAccordion";
import {
  DynamicBlogSearch,
  DynamicComparisonShowcase,
  DynamicFeaturedTreatments,
  DynamicTestimonialsCarousel
} from "@/components/home/DynamicHomeSections";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { MapSection } from "@/components/ui/MapSection";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InfoCard } from "@/components/ui/InfoCard";
import { LottieDentalMark } from "@/components/ui/LottieDentalMark";
import { clinic } from "@/data/clinic";
import { faqCategories } from "@/data/faqs";
import { patientStories } from "@/data/testimonials";
import { whatsappTemplates, whatsappUrl } from "@/lib/whatsapp";

const trustHighlights = [
  { label: "Years of Experience", value: clinic.experience, note: "Verified" },
  { label: "Happy Patients", value: "[Add verified count]", note: "Editable" },
  { label: "Successful Treatments", value: "[Add verified count]", note: "Editable" },
  { label: "Advanced Dental Technology", value: "[Add verified list]", note: "Editable" },
  { label: "Patient-Centered Care", value: "Consultation-first", note: "Practice philosophy" }
];

const whyChoose = [
  ["Experienced Dental Care", "Practising dentistry since 11 years with cosmetic dentistry and oral and dental surgery focus.", Stethoscope],
  ["Personalized Treatment Planning", "Clear options after diagnosis, with patient goals and clinical safety considered together.", HeartHandshake],
  ["Modern Dental Technology", "Infrastructure-ready sections for verified digital tools, diagnostics, and sterilization systems.", Microscope],
  ["Strict Hygiene Protocols", "Hygiene and sterilization copy is prepared for clinic-approved process details.", ShieldCheck],
  ["Comfortable Patient Experience", "Warm, calm touchpoints designed for anxious patients and family care.", Users],
  ["Clear Communication", "No guaranteed results, no unverified claims, and no fixed pricing without clinic approval.", BadgeCheck]
];

const process = [
  "Book Your Appointment",
  "Clinical Consultation",
  "Digital Diagnosis",
  "Personalized Treatment Plan",
  "Treatment and Care",
  "Follow-Up and Maintenance"
];

const oralTips = [
  "Correct brushing technique",
  "Importance of routine dental checkups",
  "How to protect children's teeth",
  "Food habits for better oral health",
  "When tooth pain requires professional attention"
];

const socialImages = [
  {
    src: "/images/instagram-profile.jpg",
    title: "Complete Dental Studio Instagram profile",
    note: "@complete_dental_studio"
  },
  {
    src: "/images/real-dental-operatory.jpg",
    title: "Dental operatory",
    note: "Real clinic-style photography"
  },
  {
    src: "/images/real-treatment-room.jpg",
    title: "Treatment room",
    note: "Real dental treatment-room photography"
  },
  {
    src: "/images/real-dental-operatory.jpg",
    title: "Clinical hygiene",
    note: "Replace with clinic sterilization photo when available"
  },
  {
    src: "/images/real-treatment-room.jpg",
    title: "Consultation readiness",
    note: "Replace with authentic clinic image when available"
  },
  {
    src: "/images/instagram-profile.jpg",
    title: "Follow on Instagram",
    note: "Public clinic profile"
  }
];

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <ClinicIntro />
      <section className="section bg-white" data-gsap-reveal>
        <div className="container">
          <SectionHeading
            eyebrow="Featured Treatments"
            title="Clear, patient-friendly treatment pathways"
            copy="Explore core services with responsible educational copy, consultation CTAs, and editable clinical detail pages."
            action={<Link className="button-secondary" href="/treatments">View All Treatments <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>}
          />
          <DynamicFeaturedTreatments featuredOnly />
        </div>
      </section>
      <DoctorIntro />
      <WhyChoose />
      <TechnologySection />
      <ProcessTimeline />
      <GalleryPreview />
      <PatientStories />
      <TestimonialsPreview />
      <GoogleRating />
      <OralTips />
      <FAQPreview />
      <AppointmentCta />
      <MapSection />
      <SocialProof />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100vh-7.2rem)] overflow-hidden bg-ice">
      <Image
        src="/images/real-dental-operatory.jpg"
        alt="Real modern dental operatory photo used for Complete Dental Studio website"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" aria-hidden="true" />
      <div className="absolute inset-0 clinical-grid opacity-25" aria-hidden="true" />
      <div className="container relative flex min-h-[calc(100vh-7.2rem)] items-center py-16">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Dentist and dental surgery in Indore
          </p>
          <h1 className="heading-xl mt-5 font-extrabold text-ink">{clinic.tagline}</h1>
          <p className="copy-lg mt-6 max-w-2xl">
            Experience modern dental care led by {clinic.doctor}, Consultant Oral
            and Dental Surgeon and Cosmetic Dental Surgeon.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link className="button-primary" href="/book-appointment">
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Appointment
            </Link>
            <Link className="button-secondary" href={clinic.contact.primaryPhone.href}>
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </Link>
            <a className="button-secondary" href={whatsappUrl(whatsappTemplates.appointment)}>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Consultation
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[clinic.experience, clinic.achievement, "Consultant Oral Surgeon"].map((item) => (
              <span className="surface rounded-[8px] px-4 py-3 text-sm font-extrabold text-deep" key={item}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
      <a className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-extrabold text-deep shadow-clinical md:inline-flex" href="#trust">
        Scroll <ArrowDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}

function TrustHighlights() {
  return (
    <section id="trust" className="section-tight bg-pearl">
      <div className="container grid gap-4 md:grid-cols-5">
        {trustHighlights.map((item, index) => (
          <Reveal className="panel p-5" delay={index * 0.05} key={item.label}>
            <p className="font-display text-2xl font-extrabold text-deep">{item.value}</p>
            <p className="mt-2 text-sm font-bold text-ink">{item.label}</p>
            <p className="mt-1 text-xs font-bold text-teal">{item.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClinicIntro() {
  return (
    <section className="section bg-white">
      <div className="container grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div data-gsap-reveal>
          <SectionHeading
            eyebrow="Clinic Introduction"
            title="A calm, precise, and transparent dental experience"
            copy="Complete Dental Studio is positioned as a modern care environment where diagnosis, hygiene, comfort, and communication shape every patient visit."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Patient-first philosophy", "Hygiene standards", "Modern equipment readiness", "Personalized treatment planning"].map((item) => (
              <p className="flex gap-3 rounded-[8px] bg-ice p-4 text-sm font-bold text-deep" key={item}>
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="relative min-h-[440px]" data-gsap-reveal>
          <div className="panel gradient-border absolute inset-0 overflow-hidden">
            <Image src="/images/real-treatment-room.jpg" alt="Real dental treatment room photo" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </div>
          <div className="surface absolute bottom-5 left-5 right-5 rounded-[8px] p-5">
            <p className="font-display text-xl font-extrabold text-ink">Verified details stay editable</p>
            <p className="mt-2 text-sm leading-6 text-slate">
              Contact, address, Instagram profile, and core practice details are now filled in; degrees, ratings, reviews, technologies, and patient results remain editable until verified.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorIntro() {
  return (
    <section className="section bg-ice">
      <div className="container grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="panel gradient-border overflow-hidden" data-gsap-reveal>
          <div className="grid aspect-[4/5] place-items-center bg-white p-8 text-center">
            <Image
              src="/images/instagram-profile.jpg"
              alt={`${clinic.name} public Instagram profile image`}
              width={160}
              height={160}
              className="mx-auto rounded-[8px] object-contain shadow-clinical"
            />
            <div>
              <p className="eyebrow justify-center">Public clinic profile</p>
              <h3 className="mt-3 font-display text-3xl font-extrabold text-ink">{clinic.doctor}</h3>
              <p className="mt-3 text-sm font-bold leading-6 text-slate">
                Official doctor portrait can replace this Instagram profile image when provided.
              </p>
            </div>
          </div>
        </div>
        <div data-gsap-reveal>
          <SectionHeading
            eyebrow="Meet the Doctor"
            title={clinic.doctor}
            copy="A profile section built around the public Instagram details: Consultant Oral and Dental Surgeon, Cosmetic Dental Surgeon, ISP Merit (1st Rank), and 11 years of practice."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[clinic.experience, "Consultant Oral and Dental Surgeon", "Cosmetic Dental Surgeon"].map((item) => (
              <div className="panel p-4" key={item}>
                <p className="font-bold text-teal">{item}</p>
              </div>
            ))}
          </div>
          <ol className="mt-7 grid gap-4">
            {clinic.doctorProfile.journey.slice(0, 4).map((item, index) => (
              <li className="grid gap-3 sm:grid-cols-[auto_1fr]" key={item.title}>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-deep text-sm font-black text-white">{index + 1}</span>
                <div>
                  <p className="font-display text-lg font-extrabold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link className="button-primary mt-7" href="/about-doctor">
            View Full Profile <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Complete Dental Studio"
          title="Designed around trust, safety, comfort, and clarity"
          copy="Every card avoids unverifiable claims while still presenting the clinic as premium, hygienic, and patient-focused."
          align="center"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map(([title, copy, Icon], index) => (
            <Reveal delay={index * 0.04} key={title}>
              <InfoCard icon={Icon} title={title} copy={copy} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="section bg-pearl">
      <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-gsap-reveal>
          <SectionHeading
            eyebrow="Technology and Infrastructure"
            title="Prepared for clinic-approved equipment details"
            copy="The website can show verified technology and sterilization information once the clinic confirms exact equipment and protocols."
          />
          <p className="rounded-[8px] border border-amber/30 bg-white p-4 text-sm font-bold leading-6 text-amber">
            Until verified, these items remain editable content labels, not factual equipment claims.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {clinic.technology.map((item) => (
            <div className="panel flex items-center gap-3 p-5" key={item} data-gsap-reveal>
              <Microscope className="h-5 w-5 text-teal" aria-hidden="true" />
              <p className="font-display font-extrabold text-ink">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Treatment Process"
          title="A simple path from inquiry to maintenance"
          copy="The timeline shifts from a horizontal scan on desktop to a clear vertical flow on mobile."
          align="center"
        />
        <ol className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          {process.map((item, index) => (
            <li className="panel relative p-5" key={item} data-gsap-reveal>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-deep text-sm font-black text-white">{index + 1}</span>
              <h3 className="mt-5 font-display text-lg font-extrabold text-ink">{item}</h3>
              <p className="mt-2 text-sm leading-6 text-slate">
                Clear next steps, responsible expectations, and follow-up guidance.
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="section bg-ice">
      <div className="container">
        <SectionHeading
          eyebrow="Smile Transformation Gallery"
          title="Real reference images with consent safeguards"
          copy="The gallery now includes source-backed before-and-after visuals and clinic-style photos, clearly marked as references until original clinic cases are approved."
          action={<Link className="button-secondary" href="/smile-gallery">Open Gallery</Link>}
        />
        <DynamicComparisonShowcase limit={2} />
        <p className="mt-5 text-sm font-bold text-slate">{clinic.disclaimer}</p>
      </div>
    </section>
  );
}

function PatientStories() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Patient Success Stories"
          title="Anonymized story layouts ready for moderation"
          copy="Patient identities, media, reviews, and outcome claims should be published only after written consent and clinical review."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {patientStories.map((story) => (
            <article className="panel p-6" key={story.concern} data-gsap-reveal>
              <p className="eyebrow">{story.treatment}</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">{story.concern}</h3>
              <p className="mt-4 text-sm leading-7 text-slate">{story.journey}</p>
              <p className="mt-4 rounded-[8px] bg-ice p-4 text-sm font-bold text-deep">{story.outcome}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsPreview() {
  return (
    <section className="section bg-pearl">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title="Review carousel prepared for verified patient feedback"
          copy="Autoplay pauses on hover, supports keyboard navigation, and avoids fictional Google review claims."
          action={<Link className="button-secondary" href="/testimonials">View Testimonials</Link>}
        />
        <DynamicTestimonialsCarousel />
      </div>
    </section>
  );
}

function GoogleRating() {
  return (
    <section className="section-tight bg-white">
      <div className="container">
        <div className="panel grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">Google rating readiness</p>
            <h2 className="heading-md mt-3 font-extrabold text-ink">Verified review data can be added here</h2>
            <p className="mt-3 text-slate">
              Rating, review count, excerpts, source label, and business profile link are intentionally editable placeholders.
            </p>
          </div>
          <Link className="button-secondary" href="/testimonials">Read All Reviews</Link>
        </div>
      </div>
    </section>
  );
}

function OralTips() {
  return (
    <section className="section bg-ice">
      <div className="container">
        <SectionHeading
          eyebrow="Oral Healthcare Tips"
          title="Educational content that supports, not replaces, diagnosis"
          copy="Draft articles and tips should be reviewed by the clinic before launch."
        />
        <div className="mb-8 grid gap-3 md:grid-cols-5">
          {oralTips.map((tip) => (
            <div className="panel p-4 text-sm font-extrabold text-deep" key={tip}>
              {tip}
            </div>
          ))}
        </div>
        <DynamicBlogSearch limit={4} />
      </div>
    </section>
  );
}

function FAQPreview() {
  return (
    <section className="section bg-white">
      <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-gsap-reveal>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Calm answers for common patient questions"
            copy="General information only. Diagnosis and treatment choices require consultation."
          />
          <Link className="button-secondary" href="/faq">Open Full FAQ</Link>
        </div>
        <FAQAccordion groups={faqCategories.slice(0, 4)} />
      </div>
    </section>
  );
}

function AppointmentCta() {
  return (
    <section className="section bg-deep text-white">
      <div className="container grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
        <div className="rounded-[8px] bg-white/10 p-3">
          <LottieDentalMark />
        </div>
        <div>
          <p className="eyebrow text-turquoise">Appointment CTA</p>
          <h2 className="heading-lg mt-3 font-extrabold">Ready for a clearer dental plan?</h2>
          <p className="mt-4 max-w-3xl text-white/70">
            Request a consultation, call the clinic, or start a WhatsApp inquiry. Final appointments are confirmed by the clinic team.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-turquoise">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Clinic timings: please call to confirm current availability
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link className="button-primary bg-white text-deep" href="/book-appointment">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Link>
          <a className="button-secondary bg-white/10 text-white" href={whatsappUrl(whatsappTemplates.emergency)}>
            Emergency Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="section bg-pearl">
      <div className="container">
        <SectionHeading
          eyebrow="Instagram and Social Proof"
          title="Instagram-linked clinic visuals"
          copy="The grid uses the public Instagram profile image plus real dental-clinic photography. Replace with clinic-owned post images when you have approved originals."
          align="center"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialImages.map((item, index) => (
            <a
              className="panel group relative aspect-square overflow-hidden"
              href={clinic.socials.instagram}
              key={`${item.title}-${index}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={item.src.includes("instagram-profile") ? "object-contain p-10" : "object-cover"}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 text-white">
                <p className="font-display text-lg font-extrabold">{item.title}</p>
                <p className="mt-1 text-sm font-bold text-white/80">{item.note}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a className="button-secondary" href={clinic.socials.instagram}>Follow @complete_dental_studio</a>
        </div>
      </div>
    </section>
  );
}
