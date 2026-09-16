"use client";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FadeIn } from "../motion/fade-in";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/src/lib/validations/contact-form";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),

    defaultValues: {
      fullName: "",
      email: "",
      whatsappNumber: "",
      country: "",
      subject: "",
      message: "",
    },
  });

  

    const onSubmit = async (data: ContactFormValues) => {

      console.log(data , "contact_us_form")
    const message = `
    New Scholarship Application
  
  Name: ${data?.fullName}
  Email: ${data?.email}
  Country: ${data?.country}
  WhatsApp: ${data.whatsappNumber}
  Subject: ${data.subject}
  Message: ${data.message.trim()}
  `
  
    const yourWhatsAppNumber = process.env.NEXT_PUBLIC_CONTACT_US_NUMBER;
  
    const whatsappUrl = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(
      message
    )}`;
  
    window.location.href = whatsappUrl;
  
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel grid gap-4 rounded-[32px] p-6 md:grid-cols-2 md:p-8"
    >
      {/* Full Name */}
      <FadeIn delay={0.12}>
        <div>
          <p className="mb-2 pl-2">Full Name</p>
          <input
            {...register("fullName")}
            className={`input-field ${
              errors.fullName ? "border-red-500" : ""
            }`}
            maxLength={50}
            placeholder="Full Name"
          />

          {errors.fullName && (
            <p className="mt-1 text-xs text-red-500">
              {errors.fullName.message}
            </p>
          )}
        </div>
      </FadeIn>

      {/* Email */}
      <FadeIn delay={0.24}>
        <div>
          <p className="mb-2 pl-2">Email</p>
          <input
            {...register("email")}
            type="email"
            className={`input-field ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Email"
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>
      </FadeIn>

      {/* WhatsApp Number */}
      <FadeIn delay={0.36}>
        <div>
          <p className="mb-2 pl-2">Whatsapp Number</p>
          <input
            {...register("whatsappNumber")}
            type="tel"
            inputMode="numeric"
            maxLength={20}
             onKeyDown={(e) => {
    if (
      !/[0-9]/.test(e.key) &&
      ![
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
      ].includes(e.key)
    ) {
      e.preventDefault();
    }
  }}
   onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");

    e.target.value = value;

    register("whatsappNumber").onChange(e);
  }}
            className={`input-field ${
              errors.whatsappNumber ? "border-red-500" : ""
            }`}
            placeholder="WhatsApp Number"
          />

          {errors.whatsappNumber && (
            <p className="mt-1 text-xs text-red-500">
              {errors.whatsappNumber.message}
            </p>
          )}
        </div>
      </FadeIn>

      {/* Country */}
      <FadeIn delay={0.48}>
        <p className="mb-2 pl-2">Country</p>
        <div>
          <input
            {...register("country")}
            max={50}
            className={`input-field ${
              errors.country ? "border-red-500" : ""
            }`}
            placeholder="Country"
          />

          {errors.country && (
            <p className="mt-1 text-xs text-red-500">
              {errors.country.message}
            </p>
          )}
        </div>
      </FadeIn>

      {/* Subject */}
      <FadeIn delay={0.6} className="md:col-span-2">
        <div>
          <p className="mb-2 pl-2">Subject</p>
          <input
            {...register("subject")}
            maxLength={100}
            className={`input-field ${
              errors.subject ? "border-red-500" : ""
            }`}
            placeholder="Subject"
          />

          {errors.subject && (
            <p className="mt-1 text-xs text-red-500">
              {errors.subject.message}
            </p>
          )}
        </div>
      </FadeIn>

      {/* Message */}
      <FadeIn delay={0.72} className="md:col-span-2">
        <div>
          <p className="mb-2 pl-2">Message</p>
          <textarea
            {...register("message")}
            maxLength={2000}
            className={`textarea-field ${
              errors.message ? "border-red-500" : ""
            }`}
            placeholder="Message"
            rows={6}
          />

          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>
      </FadeIn>

      {/* Submit */}
      <FadeIn delay={0.84} className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </FadeIn>
    </form>
  );
}