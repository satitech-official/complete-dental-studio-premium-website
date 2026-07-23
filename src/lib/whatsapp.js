import { clinic } from "@/data/clinic";

export const whatsappTemplates = {
  general:
    "Hello Complete Dental Studio, I would like to request a general dental consultation with Dr. Nikita Rawat Jain.",
  treatment:
    "Hello Complete Dental Studio, I would like to ask about [treatment/concern]. Please guide me on the next steps.",
  appointment:
    "Hello Complete Dental Studio, I would like to request an appointment with Dr. Nikita Rawat Jain. My preferred date is [date], and I would like to consult regarding [treatment/concern].",
  emergency:
    "Hello Complete Dental Studio, I have an urgent dental concern and would like to speak with the clinic team.",
  online:
    "Hello Complete Dental Studio, I would like to request an online consultation inquiry. Please share the next steps."
};

export function whatsappUrl(message = whatsappTemplates.general) {
  const number = clinic.contact.whatsapp.number.replace(/[^\d]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function appointmentWhatsappUrl(values = {}) {
  const message = `Hello Complete Dental Studio, I would like to request an appointment with Dr. Nikita Rawat Jain. My preferred date is ${
    values.preferredDate || "[date]"
  }, and I would like to consult regarding ${
    values.treatment || values.concern || "[treatment/concern]"
  }.`;
  return whatsappUrl(message);
}
