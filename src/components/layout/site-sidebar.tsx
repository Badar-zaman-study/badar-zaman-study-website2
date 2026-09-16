import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/923001234567", icon: MessageCircle, className: "text-green-500" },
  { label: "Facebook", href: "#", icon: Facebook, className: "text-blue-600" },
  { label: "Instagram", href: "#", icon: Instagram, className: "text-pink-500" },
  { label: "LinkedIn", href: "#", icon: Linkedin, className: "text-blue-700" },
  { label: "Twitter", href: "#", icon: Twitter, className: "text-sky-500" },
  { label: "YouTube", href: "#", icon: Youtube, className: "text-red-600" },
];

export function SiteSidebar() {
  return (
    <aside className="sticky top-24 hidden w-full sm:block" aria-label="Contact and social links">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur">
        <div className="border-b-2 border-blue-700 px-4 pt-3">
          <span className="inline-flex -mb-[2px] rounded-t-lg bg-blue-700 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white">
            For branding &amp; promotions
          </span>
        </div>

        <div className="px-4 py-4">
          <p className="text-sm leading-6 text-slate-700">
            <span className="font-bold text-slate-900">Contact us at:</span>{" "}
            <a href="mailto:info@bzconsultancy.com" className="text-blue-700 hover:underline">
              info@bzconsultancy.com
            </a>
          </p>
        </div>

        <div className="border-y border-slate-100 px-4 py-3">
          <p className="text-xs font-bold uppercase tracking-wide text-blue-800">Our social media links ↘</p>
        </div>

        <nav className="grid gap-2 px-4 py-4" aria-label="Social media">
          {socialLinks.map(({ label, href, icon: Icon, className }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
            >
              <Icon size={18} className={className} aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>

        <a href="mailto:info@bzconsultancy.com" className="flex items-center gap-2 bg-blue-700 px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-blue-800">
          <Mail size={15} aria-hidden="true" />
          Get in touch
          <Send size={14} className="ml-auto" aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}
