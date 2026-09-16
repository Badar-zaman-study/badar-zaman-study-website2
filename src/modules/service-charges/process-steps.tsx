import {
  ArrowRight,
  FileSearch,
  FileText,
  MessageCircle,
  PlaneTakeoff,
  Route,
} from "lucide-react";

import Heading from "@/src/components/Heading";
import { FadeIn } from "@/src/components/motion/fade-in";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Consultation",
    description: "We understand your goals and profile.",
  },
  {
    icon: FileSearch,
    title: "2. University Shortlisting",
    description: "We suggest the best options for you.",
  },
  {
    icon: FileText,
    title: "3. Application & Offer",
    description: "We help you apply and receive offers.",
  },
  {
    icon: FileText,
    title: "4. Visa Processing",
    description: "We guide you through the visa process.",
  },
  {
    icon: PlaneTakeoff,
    title: "5. Fly & Success",
    description: "You fly to your dream destination!",
  },
] as const;

export function ProcessSteps() {
  return (
    <section>
      {/* Section Heading */}
      <Heading
        icon={Route}
        title="Our Simple Process"
      />

      {/* Process Steps */}
      <div className="mt-6 grid gap-7 grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
        {steps.map(({ icon: Icon, title, description }, index) => (
        <FadeIn key={title} delay={index * 0.12}>
          <div
            key={title}
            className="relative text-center group transition-all duration-300 hover:-translate-y-1"
          >
            {/* Step Icon */}
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700 transition duration-300 hover:scale-110 group-hover:bg-blue-700 group-hover:text-white">
              <Icon size={27} />
            </span>

            {/* Connecting Line + Arrow */}
            {index < steps.length - 1 && (
              <div className="absolute left-[67%] top-7 hidden w-[80%] md:block">
                <div className="relative">
                  {/* Long Dash Line */}
                  <div className="h-[2px] w-full bg-[repeating-linear-gradient(to_right,#93c5fd_0px,#93c5fd_14px,transparent_14px,transparent_22px)]" />

                  {/* Arrow */}
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="absolute -right-2 -top-[8px] text-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Step Title */}
            <h3 className="mt-3 text-xs font-bold">
              {title}
            </h3>

            {/* Step Description */}
            <p className="mx-auto mt-1 max-w-36 text-xs leading-5 text-slate-500">
              {description}
            </p>
          </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}