import { FadeIn } from "@/src/components/motion/fade-in";
import { Clock3, Mail, MapPin, Phone, } from "lucide-react";

const details = [
  { icon: Phone, title: "Phone", content: <>+{process.env.NEXT_PUBLIC_CONTACT_US_NUMBER}</> },
  { icon: Mail, title: "Email", content: <>{process.env.NEXT_PUBLIC_CONTACT_US_EMAIL}</> },
  { icon: MapPin, title: "Office Address", content: <>{process.env.NEXT_PUBLIC_CONTACT_US_ADDRESS}</> },
  { icon: Clock3, title: "Office Hours", content: <>Monday - Saturday<br />10:00 AM - 06:00 PM<br /></> },
];

export function ContactDetails() {
  return (
    <aside className="px-1 lg:px-3">
      <h2 className="text-xl font-bold tracking-tight">Get In Touch</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">We&apos;d love to hear from you. Reach out using any of the options below or fill out the form.</p>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-3">
        {details.map(({ icon: Icon, title, content } , index) => (
          <FadeIn key={title} delay={index * 0.12}>
          <div key={title} className="flex flex-col lg:flex-row min-h-[84px] items-center gap-2 lg:gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-[0_4px_16px_rgba(21,42,85,.07)]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0754d8]"><Icon size={21} /></span>
            <div className="text-center lg:text-left text-sm lg:text-xs leading-5 text-slate-500">
              <strong className="block text-sm text-slate-800">{title}</strong>
              {content}
            </div>
          </div>
          </FadeIn>
        ))}
      </div>
    </aside>
  );
}
