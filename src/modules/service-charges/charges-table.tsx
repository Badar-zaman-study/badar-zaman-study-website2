import {
  BadgeDollarSign,
  FileText,
  GraduationCap,
  Headphones,
  Plane,
  ShieldCheck,
} from "lucide-react";
import Heading from "@/src/components/Heading";
import { FadeIn } from "@/src/components/motion/fade-in";

const rows = [
  [
    GraduationCap,
    "University Selection & Counseling",
    "10,000",
  ],
  [
    FileText,
    "Application Support",
    "15,000",
  ],
  [
    ShieldCheck,
    "Visa Assistance",
    "20,000",
  ],
  [
    FileText,
    "Scholarship Application Support",
    "10,000",
  ],
  [
    Plane,
    "Pre Departure Briefing",
    "5,000",
  ],
  [
    Headphones,
    "Post Arrival Support",
    "5,000",
  ],
] as const;

export function ChargesTable() {
  return (
    <section>
      {/* Heading */}
       <Heading
        icon={BadgeDollarSign}
        title="Transparent & Affordable Charges"
        description="We believe in transparency. Our charges are reasonable and
                     competitive with no hidden fees."
      />

      {/* Charges Table */}
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100 shadow-[0_5px_18px_rgba(20,43,86,.08)]">

        {/* Table Header */}
        <div className="grid grid-cols-[1fr_150px] bg-[#0849c6] px-5 py-3 text-sm font-bold text-white">
          <span>Services</span>
          <span className="text-end">Charges (PKR)</span>
        </div>

        {/* Table Rows */}
        {rows.map(([Icon, service, price] , index) => (
        <FadeIn key={service} delay={index * 0.12}>
          <div
            key={service}
            className="grid grid-cols-[1fr_140px] items-center border-b border-slate-100 px-2 sm:px-5 py-2 text-sm"
          >
            <span className="flex items-center gap-1 sm:gap-3 text-slate-600 text-xs sm:text-lg">
              <Icon
                className="h-5 sm:h-7 w-5 sm:w-7 shrink-0 text-blue-700" strokeWidth={1.9}
              />

              {service}
            </span>

            <strong className="text-blue-700 text-end">
              {price}
            </strong>
          </div>
        </FadeIn>
        ))}

        {/* Complete Package */}
        {/* <div className="grid grid-cols-[1fr_150px] items-center bg-blue-50 px-5 py-2.5 text-sm">

          <span>
            <strong className="flex items-center gap-3">
              <GraduationCap
                size={16}
                className="text-blue-700"
              />

              Complete Package (All Services)
            </strong>

            <small className="ml-7 text-slate-500">
              (Save more with our complete package)
            </small>
          </span>

          <span className="inline-flex w-fit items-center rounded-full bg-blue-700 px-3 py-1 font-bold text-white">
            50,000

            <small className="ml-2 text-[9px]">
              Best Value
            </small>
          </span>
        </div> */}
      </div>

      {/* Note */}
      <p className="mt-3 text-center text-xs text-slate-500">
        ⓘ{" "}
        <strong>Note:</strong>{" "}
        Charges may vary depending on the country,
        university and specific requirements.
      </p>
    </section>
  );
}