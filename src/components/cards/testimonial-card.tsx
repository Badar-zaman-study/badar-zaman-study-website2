import type { Testimonial } from "@/src/lib/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="glass-panel rounded-[30px] p-6">
      <div className="text-4xl text-sky-500">“</div>
      <p className="mt-4 text-sm leading-7 text-slate-700">{testimonial.quote}</p>
      <div className="mt-6">
        <div className="font-semibold text-slate-950">{testimonial.name}</div>
        <div className="text-sm text-slate-500">{testimonial.program}</div>
        <div className="mt-1 text-sm text-sky-700">{testimonial.destination}</div>
      </div>
    </article>
  );
}
