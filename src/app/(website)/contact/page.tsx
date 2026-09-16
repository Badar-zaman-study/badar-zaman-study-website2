import { Clock3, Mail, MapPinned, Phone } from "lucide-react";
import { ContactForm } from "@/src/components/forms/contact-form";
import Index from '@/src/modules/contact-us/index'

export default function ContactPage() {
  return (
    <>

    <Index/>
      {/*
      

      <section className="">
        <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="grid gap-4">
            {[
              { icon: MapPinned, title: "Office Address", content: "24A Blue Area, Islamabad, Pakistan" },
              { icon: Phone, title: "Phone", content: "+92 300 1234567" },
              { icon: Mail, title: "Email", content: "hello@northstarabroad.com" },
              { icon: Clock3, title: "Working Hours", content: "Mon - Sat, 10:00 AM to 7:00 PM" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="glass-panel rounded-[28px] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{item.content}</p>
                </article>
              );
            })}
            <div className="glass-panel overflow-hidden rounded-[28px] p-2">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=Blue%20Area%20Islamabad&output=embed"
                className="h-[300px] w-full rounded-[22px] border-0"
                loading="lazy"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section> */}
    </>
  );
}
