"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return (
    <form onSubmit={submit} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_5px_20px_rgba(21,42,85,.09)] sm:p-8">
      <h2 className="text-xl font-bold tracking-tight">Send Us A Message</h2>
      <p className="mt-2 text-sm text-slate-500">Fill out the form below and our team will get back to you shortly.</p>
      {sent && <p className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-green-700">Thank you! Your message has been sent.</p>}
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" required placeholder="Enter your full name" />
        <Field label="Email Address" required type="email" placeholder="Enter your email address" />
        <Field label="Phone Number" placeholder="Enter your phone number" />
        <label className="grid gap-2 text-sm font-semibold text-slate-800">Subject <span className="text-red-500">*</span><select required defaultValue="" className="contact-input font-normal text-slate-500"><option value="" disabled>Select subject</option><option>Scholarship guidance</option><option>University admission</option><option>Visa assistance</option></select></label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">Message <span className="text-red-500">*</span><textarea required className="contact-input min-h-36 resize-y font-normal" placeholder="How can we help you?" /></label>
        <button className="flex h-12 items-center justify-center gap-3 rounded-md bg-[#064bc7] text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-800 sm:col-span-2"><Send size={17} />Send Message</button>
      </div>
    </form>
  );
}

function Field({ label, required, type = "text", placeholder }: { label: string; required?: boolean; type?: string; placeholder: string }) {
  return <label className="grid gap-2 text-sm font-semibold text-slate-800">{label} {required && <span className="text-red-500">*</span>}<input className="contact-input font-normal" type={type} placeholder={placeholder} required={required} /></label>;
}
