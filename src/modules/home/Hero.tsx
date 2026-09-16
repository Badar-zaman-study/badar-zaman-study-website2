"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Send } from "lucide-react";
import { FadeIn } from "@/src/components/motion/fade-in";
import { useApplyModal } from "@/src/components/providers/apply-modal-provider";

export function Hero() {
  const { open } = useApplyModal();
  const router = useRouter();

  const redirectToContactForm = () => {
    router.push("/contact-form");
  };
  return (
    <section className="pt-4 lg:pt-0">
      <div className="grid gap-4 lg:grid-cols-2 lg:items-center ">
        <FadeIn delay={0.12}>
          <div>
            <span className="section-label">Your Dream, Our Mission </span>
            <h1 className="text-4xl sm:text-6xl font-semibold sm:leading-[1.2] tracking-[-0.06em] mt-6 max-w-4xl text-black ">
              Well Come To <span className="text-blue-500 font-bold">Badar Study Abroad</span>  Consultancy
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/80 md:text-lg">
              We help students achieve their dreams of studying abroad with fully funded scholarships and world class guidance
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3">
              {/* <Link href="/" onClick={()=>open()} className="btn-primary text-xs sm:text-base">
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
              <Link href="/service-charges" className="btn-secondary text-xs sm:text-base">
                 Your Services <ChevronRight size={18}/>
              </Link>
            </div>
           
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
            <div className="relative overflow-hidden rounded-[34px] p-3">
              <div className="relative h-[550px] lg:h-[520px] overflow-hidden rounded-[28px]">
                <Image
                  src="/badar-personal3.png"
                  // src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                  alt="badar-personal image"
                  fill
                  priority
                  className=""
                  // sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" /> */}
              </div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
}
