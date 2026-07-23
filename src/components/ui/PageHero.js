import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  copy,
  breadcrumbs = [],
  image,
  actions = true
}) {
  return (
    <section className="relative overflow-hidden bg-ice py-16 md:py-24">
      <div className="absolute inset-0 clinical-grid opacity-55" aria-hidden="true" />
      <div className="container relative grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          {breadcrumbs.length ? <Breadcrumbs items={breadcrumbs} /> : null}
          {eyebrow ? <p className="eyebrow mt-6">{eyebrow}</p> : null}
          <h1 className="heading-xl mt-4 font-extrabold text-ink">{title}</h1>
          {copy ? <p className="copy-lg mt-5 max-w-2xl">{copy}</p> : null}
          {actions ? (
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className="button-primary" href="/book-appointment">
                <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                Book Appointment
              </Link>
              <Link className="button-secondary" href="/treatments">
                Explore Treatments
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          ) : null}
        </div>
        <div className="panel gradient-border min-h-[280px] overflow-hidden">
          {image || (
            <Image
              src="/images/real-treatment-room.jpg"
              alt="Real dental treatment room visual"
              width={1800}
              height={1200}
              className="h-full min-h-[280px] w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
