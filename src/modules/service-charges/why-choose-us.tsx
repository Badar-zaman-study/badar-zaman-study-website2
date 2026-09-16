import Heading from "@/src/components/Heading";
import { FadeIn } from "@/src/components/motion/fade-in";
import {
    BadgeCheck,
  BadgeDollarSign,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Experienced Team",
    description:
      "Our experts have years of experience in study abroad consultancy.",
  },
  {
    icon: Target,
    title: "High Success Rate",
    description:
      "We have a proven track record of successful visa approvals and admissions.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Fees",
    description:
      "Quality services at reasonable and transparent charges with no hidden costs.",
  },
  {
    icon: UsersRound,
    title: "Student Focused",
    description:
      "We provide personalized support to every student at every step.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <>

    <Heading
        icon={BadgeCheck}
        title=" Why Choose BZS?"
      />
    
    <section className="rounded-2xl border border-blue-100 bg-white p-3 sm:p-6 shadow-sm">

      {/* Features */}
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, description } , index) => (
        <FadeIn key={title} delay={index * 0.12}>
          <div
            key={title}
            className="group flex gap-3 lg:border-r lg:border-blue-200 lg:pr-3 last:border-0 transition-all duration-300"
          >
            {/* Icon */}
            <span className="flex h-7 sm:h-12 w-7 sm:w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white shadow-sm">
              <Icon  className="h-4 sm:h-10 w-4 sm:h-10"  strokeWidth={1.9}/>
            </span>

            {/* Content */}
            <div>
              <h3 className="text-sm font-bold">{title}</h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {description}
              </p>
            </div>
          </div>
          </FadeIn>
        ))}
      </div>
    </section>
    </>
  );
}