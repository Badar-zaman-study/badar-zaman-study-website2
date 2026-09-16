"use client"
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, ChevronRight, Globe2, PlayCircle, Send } from "lucide-react";
import { stats } from "@/src/lib/data";
import { FadeIn } from "@/src/components/motion/fade-in";
import { useApplyModal } from "@/src/components/providers/apply-modal-provider";

export function Hero() {
  const { open } = useApplyModal();
  return (
    <section className="pt-8">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <div>
            <span className="section-label">FIND YOUR OPPORTUNITY. BUILD YOUR FUTURE. </span>
            <h1 className="text-4xl sm:text-6xl  font-semibold sm:leading-[1.2] tracking-[-0.06em] mt-6 max-w-4xl text-black ">
             Start Your{" "} <span className="text-blue-500"> Study Abroad</span> Journey
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 md:text-lg">
              Have questions about scholarships, admissions or visas? Our team is here to help you take the next step toward your future.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link href="/" className="btn-primary text-xs sm:text-base">
                Apply Now <Send size={18}/>
              </Link>
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
                  src="/scholarships3.webp"
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
  );
}
