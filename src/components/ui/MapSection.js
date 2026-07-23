import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { clinic } from "@/data/clinic";

export function MapSection() {
  return (
    <section className="section-tight bg-white">
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-gsap-reveal>
          <p className="eyebrow">Location and Contact</p>
          <h2 className="heading-lg mt-4 font-extrabold text-ink">Plan your visit with clarity</h2>
          <div className="mt-6 grid gap-4 text-slate">
            <p className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
              <span>{clinic.contact.address}, {clinic.contact.city}, {clinic.contact.state} {clinic.contact.pinCode}</span>
            </p>
            <p><strong>Hours:</strong> {clinic.hours.map((item) => `${item.day}: ${item.time}`).join("; ")}</p>
            <p><strong>Landmark:</strong> {clinic.contact.nearbyLandmark}</p>
            <p><strong>Parking:</strong> {clinic.contact.parking}</p>
          </div>
          <Link className="button-secondary mt-6" href={clinic.contact.directionsUrl}>
            Get Directions <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="panel min-h-[360px] overflow-hidden" data-gsap-reveal>
          <iframe
            title="Complete Dental Studio map"
            src={clinic.contact.mapsEmbed}
            width="100%"
            height="420"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[360px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
