import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { clinic } from "@/data/clinic";
import { treatments } from "@/data/treatments";

const quickLinks = [
  ["About Doctor", "/about-doctor"],
  ["About Clinic", "/about-clinic"],
  ["Smile Gallery", "/smile-gallery"],
  ["Testimonials", "/testimonials"],
  ["Blogs", "/blogs"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"]
];

export function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="container grid gap-10 py-14 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative grid h-12 w-12 overflow-hidden rounded-[8px] bg-white ring-1 ring-white/40">
              <Image
                src="/images/instagram-profile.jpg"
                alt={`${clinic.name} Instagram profile logo`}
                fill
                sizes="48px"
                className="object-contain p-1"
              />
            </span>
            <div>
              <p className="font-display text-xl font-extrabold">{clinic.name}</p>
              <p className="text-sm text-white/70">{clinic.doctor}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">{clinic.description}</p>
          <p className="mt-4 text-xs leading-6 text-white/60">{clinic.disclaimer}</p>
          <Link className="button-primary mt-6 bg-white text-deep" href="/book-appointment">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Book Appointment
          </Link>
        </div>

        <div>
          <h2 className="font-display text-lg font-extrabold">Quick Links</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/70">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link className="hover:text-white" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-extrabold">Treatments</h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/70">
            {treatments.slice(0, 8).map((item) => (
              <li key={item.slug}>
                <Link className="hover:text-white" href={`/treatments/${item.slug}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-extrabold">Contact</h2>
          <ul className="mt-4 grid gap-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-turquoise" aria-hidden="true" />
              <span>{clinic.contact.address}, {clinic.contact.city}</span>
            </li>
            <li>
              <Link className="flex gap-3 hover:text-white" href={clinic.contact.primaryPhone.href}>
                <Phone className="h-4 w-4 text-turquoise" aria-hidden="true" />
                {clinic.contact.primaryPhone.display}
              </Link>
            </li>
            {clinic.contact.email ? (
              <li>
                <a className="flex gap-3 hover:text-white" href={`mailto:${clinic.contact.email}`}>
                  <Mail className="h-4 w-4 text-turquoise" aria-hidden="true" />
                  {clinic.contact.email}
                </a>
              </li>
            ) : null}
          </ul>
          <div className="mt-5 flex gap-2">
            {clinic.socials.instagram ? (
              <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" href={clinic.socials.instagram} aria-label="Instagram">
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            {clinic.socials.facebook ? (
              <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" href={clinic.socials.facebook} aria-label="Facebook">
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
            {clinic.socials.youtube ? (
              <a className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20" href={clinic.socials.youtube} aria-label="YouTube">
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-white/60">
          <p>Copyright {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/medical-disclaimer">Medical Disclaimer</Link>
            <a href="https://example.com/sati-technologies-placeholder">Designed and Developed by Sati Technologies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
