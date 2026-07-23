import { z } from "zod";

const phoneRegex = /^[+()\-\s\d]{7,20}$/;

export const appointmentSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().regex(phoneRegex, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  age: z.string().trim().optional(),
  patientType: z.enum(["New patient", "Existing patient"], {
    required_error: "Please select patient type."
  }),
  treatment: z.string().trim().min(2, "Please select or enter a treatment."),
  concern: z.string().trim().min(5, "Please describe your concern briefly."),
  emergency: z.enum(["No", "Yes"]),
  consultationType: z.enum(["Clinic visit", "Online inquiry"]),
  preferredDate: z.string().trim().min(1, "Please select a preferred date."),
  preferredTime: z.string().trim().min(1, "Please select a preferred time."),
  alternativeDate: z.string().trim().optional(),
  timePreference: z.enum(["Morning", "Afternoon", "Evening"]),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please acknowledge the appointment request terms." })
  }),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy acknowledgement." })
  }),
  company: z.string().max(0, "Spam check failed.").optional()
});

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  phone: z.string().trim().regex(phoneRegex, "Please enter a valid phone number."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Please add a subject."),
  message: z.string().trim().min(10, "Please share a little more detail."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please acknowledge the privacy notice." })
  }),
  company: z.string().max(0, "Spam check failed.").optional()
});

export function flattenZodError(error) {
  return error.flatten().fieldErrors;
}
