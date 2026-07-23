"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, CheckCircle2, LoaderCircle, MessageCircle, Send } from "lucide-react";
import { treatments } from "@/data/treatments";
import { appointmentWhatsappUrl } from "@/lib/whatsapp";
import { appointmentSchema } from "@/lib/validation";

const steps = [
  {
    title: "Patient Details",
    fields: ["fullName", "phone", "email", "age", "patientType"]
  },
  {
    title: "Treatment Requirement",
    fields: ["treatment", "concern", "emergency", "consultationType"]
  },
  {
    title: "Date and Time",
    fields: ["preferredDate", "preferredTime", "alternativeDate", "timePreference"]
  },
  {
    title: "Confirmation",
    fields: ["consent", "privacy"]
  }
];

export function AppointmentForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [submittedValues, setSubmittedValues] = useState(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      age: "",
      patientType: "New patient",
      treatment: "",
      concern: "",
      emergency: "No",
      consultationType: "Clinic visit",
      preferredDate: "",
      preferredTime: "",
      alternativeDate: "",
      timePreference: "Morning",
      consent: false,
      privacy: false,
      company: ""
    }
  });

  useEffect(() => {
    const treatment = searchParams.get("treatment");
    if (treatment) setValue("treatment", treatment);
  }, [searchParams, setValue]);

  const values = watch();
  const progress = useMemo(() => `${Math.round(((step + 1) / steps.length) * 100)}%`, [step]);

  const next = async () => {
    const valid = await trigger(steps[step].fields, { shouldFocus: true });
    if (valid) setStep((value) => Math.min(value + 1, steps.length - 1));
  };

  const onSubmit = async (formValues) => {
    setStatus("loading");
    setServerMessage("");
    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues)
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.message || "Appointment request failed.");
      setSubmittedValues(formValues);
      setStatus("success");
      setServerMessage(payload.message);
    } catch (error) {
      setStatus("error");
      setServerMessage(error.message || "Unable to submit right now. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <section className="panel mx-auto max-w-3xl p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" aria-hidden="true" />
        <h2 className="mt-5 font-display text-3xl font-extrabold text-ink">
          Thank you. Your appointment request has been received.
        </h2>
        <p className="mt-3 leading-7 text-slate">
          The clinic team will contact you to confirm the date and time.
        </p>
        <p className="success-text mt-4">{serverMessage}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a className="button-primary" href={appointmentWhatsappUrl(submittedValues)}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Send Details on WhatsApp
          </a>
          <Link className="button-secondary" href="/treatments">
            Explore Treatments
          </Link>
        </div>
      </section>
    );
  }

  return (
    <form className="panel mx-auto max-w-4xl p-5 md:p-8" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="eyebrow">Step {step + 1} of {steps.length}</p>
            <h2 className="heading-md mt-2 font-extrabold text-ink">{steps[step].title}</h2>
          </div>
          <p className="rounded-full bg-ice px-4 py-2 text-sm font-extrabold text-deep">
            Slot is a request until confirmed
          </p>
        </div>
        <div className="mt-5 h-2 overflow-hidden rounded-full bg-ice">
          <div className="h-full rounded-full bg-teal transition-all" style={{ width: progress }} />
        </div>
      </div>

      <input type="text" className="hidden" tabIndex="-1" autoComplete="off" {...register("company")} />

      {step === 0 ? (
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
          <Field label="Age or date of birth (optional)" error={errors.age?.message}>
            <input className="form-input" {...register("age")} />
          </Field>
          <Field label="Patient type" error={errors.patientType?.message}>
            <select className="form-input" {...register("patientType")}>
              <option>New patient</option>
              <option>Existing patient</option>
            </select>
          </Field>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Select treatment" error={errors.treatment?.message}>
            <select className="form-input" {...register("treatment")}>
              <option value="">Choose treatment</option>
              {treatments.map((treatment) => (
                <option key={treatment.slug}>{treatment.title}</option>
              ))}
            </select>
          </Field>
          <Field label="Pain or emergency indicator" error={errors.emergency?.message}>
            <select className="form-input" {...register("emergency")}>
              <option>No</option>
              <option>Yes</option>
            </select>
          </Field>
          <Field label="Preferred consultation type" error={errors.consultationType?.message}>
            <select className="form-input" {...register("consultationType")}>
              <option>Clinic visit</option>
              <option>Online inquiry</option>
            </select>
          </Field>
          <Field label="Main concern" error={errors.concern?.message} className="md:col-span-2">
            <textarea className="form-input min-h-32 resize-y" {...register("concern")} placeholder="Briefly describe your dental concern. Avoid sharing sensitive medical records here." />
          </Field>
          <div className="panel md:col-span-2 p-4 text-sm leading-6 text-slate">
            File upload, CAPTCHA, rate limiting, admin notification, and acknowledgement email
            hooks are prepared for future secure integration.
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Preferred date" error={errors.preferredDate?.message}>
            <input className="form-input" type="date" {...register("preferredDate")} />
          </Field>
          <Field label="Preferred time slot" error={errors.preferredTime?.message}>
            <input className="form-input" type="time" {...register("preferredTime")} />
          </Field>
          <Field label="Alternative date (optional)" error={errors.alternativeDate?.message}>
            <input className="form-input" type="date" {...register("alternativeDate")} />
          </Field>
          <Field label="Time preference" error={errors.timePreference?.message}>
            <select className="form-input" {...register("timePreference")}>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </Field>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-5">
          <div className="grid gap-3 rounded-[8px] bg-ice p-5 text-sm text-slate md:grid-cols-2">
            <Summary label="Name" value={values.fullName} />
            <Summary label="Phone" value={values.phone} />
            <Summary label="Treatment" value={values.treatment} />
            <Summary label="Concern" value={values.concern} />
            <Summary label="Preferred date" value={values.preferredDate} />
            <Summary label="Preferred time" value={values.preferredTime} />
          </div>
          <label className="flex gap-3 text-sm leading-6 text-slate">
            <input className="mt-1 h-4 w-4 accent-teal" type="checkbox" {...register("consent")} />
            <span>I understand this is an appointment request and the clinic will confirm the final date and time.</span>
          </label>
          {errors.consent ? <p className="error-text">{errors.consent.message}</p> : null}
          <label className="flex gap-3 text-sm leading-6 text-slate">
            <input className="mt-1 h-4 w-4 accent-teal" type="checkbox" {...register("privacy")} />
            <span>I acknowledge the privacy policy and agree to be contacted about this request.</span>
          </label>
          {errors.privacy ? <p className="error-text">{errors.privacy.message}</p> : null}
          {status === "error" ? <p className="error-text">{serverMessage}</p> : null}
        </div>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          className="button-secondary"
          type="button"
          disabled={step === 0}
          onClick={() => setStep((value) => Math.max(value - 1, 0))}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        {step < steps.length - 1 ? (
          <button className="button-primary" type="button" onClick={next}>
            Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : (
          <button className="button-primary" type="submit" disabled={isSubmitting || status === "loading"}>
            {isSubmitting || status === "loading" ? (
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="h-4 w-4" aria-hidden="true" />
            )}
            Submit Request
          </button>
        )}
      </div>
    </form>
  );
}

function Field({ label, error, children, className = "" }) {
  return (
    <label className={`form-field ${className}`}>
      <span className="form-label">{label}</span>
      {children}
      {error ? <span className="error-text">{error}</span> : null}
    </label>
  );
}

function Summary({ label, value }) {
  return (
    <p>
      <strong className="text-deep">{label}:</strong> {value || "Not provided"}
    </p>
  );
}
