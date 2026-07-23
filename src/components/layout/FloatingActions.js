import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { whatsappTemplates, whatsappUrl } from "@/lib/whatsapp";

export function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 hidden flex-col gap-3 md:flex">
        <a
          className="grid h-12 w-12 place-items-center rounded-full bg-success text-white shadow-clinical"
          href={whatsappUrl(whatsappTemplates.general)}
          aria-label="Start WhatsApp consultation"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </a>
        <Link
          className="grid h-12 w-12 place-items-center rounded-full bg-deep text-white shadow-clinical"
          href="/book-appointment"
          aria-label="Book appointment"
        >
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
      <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-silver bg-white/95 p-2 shadow-clinical backdrop-blur md:hidden">
        <Link className="button-secondary mr-1" href={clinic.contact.primaryPhone.href}>
          <Phone className="h-4 w-4" aria-hidden="true" /> Call
        </Link>
        <a className="button-primary ml-1" href={whatsappUrl(whatsappTemplates.general)}>
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
        </a>
      </div>
    </>
  );
}
