import Link from "next/link";
import { Clock, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { whatsappTemplates, whatsappUrl } from "@/lib/whatsapp";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-white/50 bg-deep text-white">
      <div className="container flex min-h-10 flex-wrap items-center justify-center gap-x-5 gap-y-2 py-2 text-center text-sm font-semibold md:justify-between">
        <span className="inline-flex items-center gap-2">
          <Clock className="h-4 w-4" aria-hidden="true" />
          Dentist and dental surgery in Indore - call to confirm timings
        </span>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="inline-flex items-center gap-2 hover:underline" href={clinic.contact.primaryPhone.href}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            {clinic.contact.primaryPhone.display}
          </Link>
          <a className="hover:underline" href={whatsappUrl(whatsappTemplates.appointment)}>
            WhatsApp consultation
          </a>
        </div>
      </div>
    </div>
  );
}
