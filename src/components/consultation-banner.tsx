"use client"
import React from 'react'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { FadeIn } from './motion/fade-in'
import { useRouter } from "next/navigation";


const ConsultationBanner = () => {
  const router = useRouter();

  const redirectToContactForm = () => {
    router.push("/contact-form");
  };
  return (
   <>
    <FadeIn delay={0.12}>
     <section className="mt-10 flex flex-col items-center gap-5 rounded-xl bg-[linear-gradient(105deg,#0649bd,#0964df)] px-5 py-5 text-white shadow-lg md:flex-row md:px-8 ">
    <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/15">
    <GraduationCap size={45} />
    </span>
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-base font-bold sm:text-xl">
        Need Help With Your Application?
      </h2>
    <p className="mt-1 text-sm text-blue-100">
      Talk to our experienced consultants and find the right opportunity based on your profile.
    </p>
    </div>
    <button type="button" onClick={redirectToContactForm} className="flex min-h-11 w-full items-center justify-center gap-2 sm:gap-3 rounded-md bg-white px-2 sm:px-6 text-sm font-bold text-blue-700 hover:bg-blue-100 md:w-auto transition-all duration-300 hover:-translate-y-1">
      Book A Free Consultation <ArrowRight size={18} />
    </button>
     </section>
    </FadeIn>
   </>
  )
}

export default ConsultationBanner
