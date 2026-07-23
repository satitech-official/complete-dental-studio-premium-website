import { FAQAccordion } from "@/components/interactive/FAQAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { cleanJsonLd, createMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { faqCategories } from "@/data/faqs";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Search appointment, treatment, cosmetic dentistry, implant, root canal, child dentistry, payment, emergency, and aftercare FAQs.",
  path: "/faq"
});

export default function FAQPage() {
  const allItems = faqCategories.flatMap((group) => group.items);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: cleanJsonLd(faqSchema(allItems)) }} />
      <PageHero
        eyebrow="FAQ"
        title="Clear answers for common dental questions"
        copy="Search by topic, open deep-linked answers, and use general information responsibly. Personalized diagnosis requires consultation."
        breadcrumbs={[{ name: "FAQ", href: "/faq", current: true }]}
      />
      <section className="section bg-white">
        <div className="container">
          <FAQAccordion groups={faqCategories} searchable />
        </div>
      </section>
    </>
  );
}
