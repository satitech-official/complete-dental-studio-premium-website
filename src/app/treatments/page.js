import { PageHero } from "@/components/ui/PageHero";
import { TreatmentDirectory } from "@/components/interactive/TreatmentDirectory";
import { clinic } from "@/data/clinic";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Treatments",
  description:
    "Search and explore cosmetic dentistry, implants, root canal treatment, pediatric dentistry, orthodontics, preventive care, and more.",
  path: "/treatments"
});

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Searchable treatment directory"
        copy="Explore premium, patient-friendly treatment pages with responsible information, consultation steps, aftercare, FAQs, and medical disclaimer readiness."
        breadcrumbs={[{ name: "Treatments", href: "/treatments", current: true }]}
      />
      <section className="section bg-white">
        <div className="container">
          <TreatmentDirectory />
          <p className="mt-8 text-sm font-bold leading-6 text-slate">{clinic.disclaimer}</p>
        </div>
      </section>
    </>
  );
}
