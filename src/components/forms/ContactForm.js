"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { contactSchema } from "@/lib/validation";

export function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
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

  const onSubmit = async (values) => {
    setStatus("loading");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || "Contact request failed.");
      setStatus("success");
      setMessage(payload.message);
      reset();
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to submit right now. Please try again.");
    }
  };

  return (
    <form className="panel grid gap-5 p-5 md:p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      <input type="text" className="hidden" tabIndex="-1" autoComplete="off" {...register("company")} />
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message}>
          <input className="form-input" {...register("fullName")} autoComplete="name" />
        </Field>
        <Field label="Phone number" error={errors.phone?.message}>
          <input className="form-input" {...register("phone")} autoComplete="tel" />
        </Field>
        <Field label="Email address" error={errors.email?.message}>
          <input className="form-input" type="email" {...register("email")} autoComplete="email" />
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <input className="form-input" {...register("subject")} />
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea className="form-input min-h-36 resize-y" {...register("message")} placeholder="Share your question. Avoid sending sensitive medical records through this form." />
      </Field>
      <label className="flex gap-3 text-sm leading-6 text-slate">
        <input className="mt-1 h-4 w-4 accent-teal" type="checkbox" {...register("consent")} />
        <span>I acknowledge the privacy notice and agree to be contacted about this inquiry.</span>
      </label>
      {errors.consent ? <p className="error-text">{errors.consent.message}</p> : null}
      {status === "success" ? (
        <p className="success-text flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          {message}
        </p>
      ) : null}
      {status === "error" ? <p className="error-text">{message}</p> : null}
      <button className="button-primary justify-self-start" type="submit" disabled={isSubmitting || status === "loading"}>
        {isSubmitting || status === "loading" ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        Send Inquiry
      </button>
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="form-field">
      <span className="form-label">{label}</span>
      {children}
      {error ? <span className="error-text">{error}</span> : null}
    </label>
  );
}
