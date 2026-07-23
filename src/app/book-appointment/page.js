import { Suspense } from "react";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { PageHero } from "@/components/ui/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Book Appointment",
  description:
    "Request an appointment with Complete Dental Studio using a multi-step validated form with WhatsApp follow-up readiness.",
  path: "/book-appointment"
});

export default function BookAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Appointment"
        title="Request your dental consultation"
        copy="Share basic details, treatment concern, and preferred timing. The selected slot is a request until confirmed by the clinic team."
        breadcrumbs={[{ name: "Book Appointment", href: "/book-appointment", current: true }]}
        actions={false}
      />
      <section className="section bg-white">
        <div className="container">
          <Suspense fallback={<div className="panel min-h-96 animate-pulse" />}>
            <AppointmentForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
