"use client";

import Image from "next/image";
import {
  BadgeCheck,
  CalendarDays,
  FileCheck2,
  GraduationCap,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useRouter } from "next/navigation";

import { useApplyModal } from "@/src/components/providers/apply-modal-provider";

const CallToAction = () => {
  const { open } = useApplyModal();
   const router = useRouter();
  
    const redirectToContactForm = () => {
      router.push("/contact-form");
    };

  return (
    <section
      aria-labelledby="application-support-heading"
      className="
        relative
        mt-6
        overflow-hidden
        rounded-[24px]
        border
        border-[#dce8fa]
        bg-gradient-to-br
        from-[#f8fbff]
        via-white
        to-[#eef6ff]
        shadow-[0_8px_30px_rgba(30,75,140,0.08)]
      "
    >
      <div className="grid items-center lg:grid-cols-[400px_minmax(0,1fr)]">

        {/* ================= IMAGE ================= */}
        <div className="relative flex min-h-[270px] items-center justify-center overflow-hidden px-5 pt-6 sm:min-h-[320px] lg:min-h-[330px] lg:px-2 lg:pt-0">
          {/* Soft background glow */}
          <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative h-[250px] w-full sm:h-[290px] lg:h-[310px]">
            <Image
              src="/call-to-action.webp"
              alt="Professional study abroad team helping students"
              fill
              sizes="(max-width: 1023px) 100vw, 400px"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="px-6 pb-7 sm:px-8 sm:pb-9 lg:px-7 lg:py-7 xl:px-10">

          {/* Heading */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1554c7] sm:text-sm">
              <GraduationCap size={17} />
              Professional Application Support
            </div>

            <h2
              id="application-support-heading"
              className="
                mt-2
                text-lg
                font-black
                leading-tight
                tracking-tight
                text-[#071b45]
                sm:text-3xl
                lg:text-[30px]
              "
            >
              Apply with Our Professional Team
            </h2>

            <p className="mt-1 text-sm font-semibold text-[#1554c7] sm:text-base">
              Increase your success, secure your future!
            </p>

            <p className="mt-3 max-w-3xl text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              When you apply through our professional team, your application
              is reviewed, optimized and submitted with expert guidance 
              increasing your submission success chance by up to 80%.
            </p>
          </div>

        

          {/* ================= BUTTONS ================= */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">

            {/* Apply Button */}
            <button
              type="button"
              onClick={redirectToContactForm}
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#1554c7]
                sm:px-6
                py-3
                text-sm
                font-bold
                text-white
                shadow-[0_8px_18px_rgba(21,84,199,0.2)]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#0f46ad]
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            >
              Apply with Our Team
              <Phone size={17} />
            </button>

            {/* Consultation Button */}
            <button
              type="button"
              onClick={redirectToContactForm}
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-[#1554c7]
                bg-white
                sm:px-6
                py-3
                text-sm
                font-bold
                text-[#1554c7]
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-blue-50
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-500
                focus-visible:ring-offset-2
              "
            >
              Book a Free Consultation
              <CalendarDays size={17} />
            </button>
          </div>

          {/* ================= TRUST ROW ================= */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#e3eaf4] pt-4">

            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-600 sm:text-xs">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[#1554c7]">
                <ShieldCheck size={13} />
              </span>

              100% Confidential
            </div>

            <span className="hidden h-4 w-px bg-slate-300 sm:block" />

            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-600 sm:text-xs">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[#1554c7]">
                <UsersRound size={13} />
              </span>

              Trusted by 1000+ Students
            </div>

            <span className="hidden h-4 w-px bg-slate-300 lg:block" />

            <div className="flex items-center gap-2 text-[10px] font-medium text-slate-600 sm:text-xs">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-[#1554c7]">
                <HeartHandshake size={13} />
              </span>

              Dedicated Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;