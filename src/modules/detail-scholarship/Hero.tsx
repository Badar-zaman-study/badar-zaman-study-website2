"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ChevronRight,
  Send,
} from "lucide-react";

import { FadeIn } from "@/src/components/motion/fade-in";
import Image from "next/image";

type Props = {
  scholarship: any;
  onApply: () => void;
};

export function HeroSection({
  scholarship,
  onApply,
}: Props) {
  console.log(scholarship,"scholarshipscholarship_scholarsscholarshiphip")
   const router = useRouter();
   const redirectToContactForm = () => {
    router.push("/contact-form");
  };

  return (
    <>

     <section className="pt-8">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
        <FadeIn delay={0.12}>
          <div>
            <span className="section-label">{scholarship?.country_name} </span>
            <h1 className="text-4xl sm:text-6xl font-semibold sm:leading-[1.2] tracking-[-0.06em] mt-6 max-w-4xl text-black ">
              {scholarship?.scholarship_name}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 md:text-lg">
            Explore exciting scholarship opportunities and take the next step toward your academic future. Find scholarships designed to support talented students in achieving their educational goals at leading universities worldwide.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
              {/* <Link href="/" onClick={()=>onApply()} className="btn-primary text-xs sm:text-base">
                Apply Now <Send size={18}/>
              </Link> */}
                <button
              type="button"
              onClick={redirectToContactForm}
              className="btn-primary mt-2"
            >
              Apply Now
              <Send size={18}/>
            </button>
              <Link href="/required-documents" className="btn-secondary text-xs sm:text-base">
                 Required Documents <ChevronRight size={18}/>
              </Link>
            </div>
           
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[34px] p-3">
              <div className="relative overflow-hidden rounded-[28px] flex items-center justify-center">
                <Image
                  src={scholarship?.image_url || "/univeristy.webp"}
                  alt="scholarships image"
                  height={1000}
                  width={1000}
                  priority
                  className="object-contain"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" /> */}
              </div>
            </div>
        </FadeIn>
      </div>
    </section>
    
    </>
  );
}