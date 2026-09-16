import { Clock3, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Youtube } from "lucide-react";

const details = [
  { icon: Phone, title: "Phone", content: <>+92 300 1234567<br />+92 321 7654321</> },
  { icon: Mail, title: "Email", content: <>info@bzsconsultancy.com<br />admissions@bzsconsultancy.com</> },
  { icon: MapPin, title: "Office Address", content: <>123, Main Boulevard, Johar Town,<br />Lahore, Pakistan</> },
  { icon: Clock3, title: "Office Hours", content: <>Monday - Saturday<br />10:00 AM - 06:00 PM<br /><span className="text-blue-700">Sunday: Closed</span></> },
];

const socials = [Facebook, Instagram, Linkedin, Youtube, Send];

export function ContactDetails() {
  return (
    <aside className="px-1 lg:px-3">
      <h2 className="text-xl font-bold tracking-tight">Get In Touch</h2>
      <p className="mt-2 text-sm leading-6 text-slate-500">We&apos;d love to hear from you. Reach out using any of the options below or fill out the form.</p>
      <div className="mt-4 grid gap-3">
        {details.map(({ icon: Icon, title, content }) => (
          <div key={title} className="flex min-h-[84px] items-center gap-4 rounded-xl border border-slate-100 bg-white p-3 shadow-[0_4px_16px_rgba(21,42,85,.07)]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0754d8]"><Icon size={21} /></span>
            <div className="text-xs leading-5 text-slate-500"><strong className="block text-sm text-slate-800">{title}</strong>{content}</div>
          </div>
        ))}
      </div>
      <h3 className="mt-5 text-sm font-bold text-slate-800">Follow Us</h3>
      <div className="mt-2 flex justify-between rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-sm">
        {socials.map((Icon, index) => <a key={index} href="#" aria-label="Social media" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d58d3] text-white transition hover:-translate-y-0.5"><Icon size={18} /></a>)}
      </div>
    </aside>
  );
}
