"use client";

import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { navItems } from "@/src/lib/data";
import { useApplyModal } from "@/src/components/providers/apply-modal-provider";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navbar() {
  const { open } = useApplyModal();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();


  const redirectToContactForm = () => {
    router.push("/contact-form");
  };


  return (
    <header className="sticky top-0 z-40 px-3 pt-3">
      <div className="container rounded-[26px] bg-blue-950 px-4 py-3 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-2xl px-1 sm:px-5 py-0 sm:py-0">
                <Image
                  src="/logo3.png"
                  alt="whatsapp icon"
                  priority
                  height={800}
                  width={800}
                  className="object-cover h-full w-[100px] sm:w-[180px]"
                />
              {/* <div className="font-semibold text-white">
                Badar Study Abroad
              </div>
              <div className="text-xs text-white/80">
                International education advisors
              </div> */}
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 text-sm font-semibold !text-white",
                    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-white after:transition-transform after:duration-300",
                    isActive
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={redirectToContactForm}
              className="btn-primary"
            >
              Apply Now
            </button>
          </div>

          <button
            type="button"
            className="rounded-full border border-slate-200 bg-white/90 p-2.5 text-slate-800 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            <Menu size={18} />
          </button>
        </div>

        {menuOpen ? (
          <div className="mt-4 grid gap-2 border-t border-slate-200/70 pt-4 lg:hidden">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-2xl px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "!text-white !underline !underline-offset-4"
                      : "!text-white/90 !hover:text-white !hover:underline !hover:underline-offset-4",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <button
              type="button"
              onClick={redirectToContactForm}
              className="btn-primary mt-2"
            >
              Apply Now
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}