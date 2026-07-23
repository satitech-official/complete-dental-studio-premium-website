import { PageHero } from "@/components/ui/PageHero";
import { clinic } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Medical Disclaimer",
  description: "Medical disclaimer for educational dental website content and treatment-result variability.",
  path: "/medical-disclaimer"
});

export default function MedicalDisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Medical Disclaimer"
        copy="Treatment information is educational and cannot replace professional dental consultation, diagnosis, or treatment."
        breadcrumbs={[{ name: "Medical Disclaimer", href: "/medical-disclaimer", current: true }]}
        actions={false}
      />
      <section className="section bg-white">
        <article className="container max-w-4xl">
          <div className="panel bg-ice p-6">
            <p className="text-lg font-bold leading-8 text-deep">{clinic.disclaimer}</p>
          </div>
          <section className="mt-10">
            <h2 className="heading-md font-extrabold text-ink">No Guaranteed Results</h2>
            <p className="mt-4 leading-8 text-slate">
              Dentistry is individualized. Treatment suitability, healing, comfort, timeline, maintenance needs, and outcomes depend on many clinical factors.
            </p>
          </section>
          <section className="mt-10">
            <h2 className="heading-md font-extrabold text-ink">Consultation Required</h2>
            <p className="mt-4 leading-8 text-slate">
              A dentist must evaluate symptoms, history, oral condition, and diagnostic records before recommending treatment.
            </p>
          </section>
          <section className="mt-10">
            <h2 className="heading-md font-extrabold text-ink">Patient Images and Testimonials</h2>
            <p className="mt-4 leading-8 text-slate">
              Before-and-after images, reviews, and patient stories should be published only with verified consent and source approval.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
