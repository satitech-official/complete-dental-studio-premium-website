import { clinic } from "@/data/clinic";
import { absoluteUrl } from "@/lib/seo";

export function dentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness"],
    name: clinic.name,
    url: absoluteUrl("/"),
    image: absoluteUrl("/images/real-dental-operatory.jpg"),
    medicalSpecialty: clinic.specializations,
    founder: {
      "@type": "Person",
      name: clinic.doctor,
      jobTitle: "Dentist",
      award: clinic.achievement
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Appointments",
      telephone: clinic.contact.primaryPhone.display.includes("[")
        ? undefined
        : clinic.contact.primaryPhone.display,
      email: clinic.contact.email
    }
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href)
    }))
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function treatmentSchema(treatment) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title,
    description: treatment.summary,
    url: absoluteUrl(`/treatments/${treatment.slug}`),
    procedureType: treatment.category,
    provider: {
      "@type": "Dentist",
      name: clinic.name
    }
  };
}

export function blogPostSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    dateModified: post.updated,
    author: {
      "@type": "Person",
      name: clinic.doctor
    },
    publisher: {
      "@type": "Organization",
      name: clinic.name
    },
    mainEntityOfPage: absoluteUrl(`/blogs/${post.slug}`)
  };
}
