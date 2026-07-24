"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { contactSchema } from "@/lib/validation";
import { whatsappUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      consent: false,
      company: ""
    }
  });

  const onSubmit = (values) => {
    const message = `Hello Complete Dental Studio, I am ${values.fullName}.\nPhone: ${values.phone}\nEmail: ${values.email}\nSubject: ${values.subject}\nMessage: ${values.message}`;
    setSent(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="panel grid gap-5 p-5 md:p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="text" className="hidden" tabIndex="-1" autoComplete="off" {...register("company")} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message}><input className="form-input" {...register("fullName")} autoComplete="name" /></Field>
        <Field label="Phone number" error={errors.phone?.message}><input className="form-input" {...register("phone")} autoComplete="tel" /></Field>
        <Field label="Email address" error={errors.email?.message}><input className="form-input" type="email" {...register("email")} autoComplete="email" /></Field>
        <Field label="Subject" error={errors.subject?.message}><input className="form-input" {...register("subject")} /></Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea className="form-input min-h-36 resize-y" {...register("message")} placeholder="Share your question. Avoid sending sensitive medical records through this form." />
      </Field>
      <label className="flex gap-3 text-sm leading-6 text-slate">
        <input className="mt-1 h-4 w-4 accent-teal" type="checkbox" {...register("consent")} />
        <span>I acknowledge the privacy notice and agree to be contacted about this inquiry.</span>
      </label>
      {errors.consent ? <p className="error-text">{errors.consent.message}</p> : null}
      {sent ? <p className="success-text flex items-center gap-2"><CheckCircle2 className="h-4 w-4" aria-hidden="true" />WhatsApp opened with your inquiry. Send the message to contact the clinic.</p> : null}
      <button className="button-primary justify-self-start" type="submit"><MessageCircle className="h-4 w-4" aria-hidden="true" />Send Inquiry on WhatsApp</button>
    </form>
  );
}

function Field({ label, error, children }) {
  return <label className="form-field"><span className="form-label">{label}</span>{children}{error ? <span className="error-text">{error}</span> : null}</label>;
}
