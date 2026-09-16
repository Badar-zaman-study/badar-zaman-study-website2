import Link from "next/link";
import {
  Mail,
  MapPinned,
  Phone,
} from "lucide-react";



import { navItems } from "@/src/lib/data";
import Image from "next/image";

export function Footer() {
  const contact_email = process.env.NEXT_PUBLIC_CONTACT_US_EMAIL;
  const contact_number = process.env.NEXT_PUBLIC_CONTACT_US_NUMBER;
  const contact_address = process.env.NEXT_PUBLIC_CONTACT_US_ADDRESS;



  const facebook_url='https://www.facebook.com/profile.php?id=61582887624498'
  const tiktok_url='https://www.tiktok.com/@badarstudyabroad0?_r=1&_t=ZS-995NE6U9GrQ'
  const youtube_url='https://youtube.com/@badarstudyabroad?si=3FoAxBxJKaUHCN4Y'
  const instagram_url='https://www.instagram.com/badar_study_abroad?igsi=YTd2NjZpbGh6bjV2'
  return (
<footer className="relative mt-10 overflow-hidden bg-blue-950 text-white">

  {/* Curved Top Background */}
  <div className="absolute left-0 top-0 z-0 h-[95px] w-full overflow-hidden">
    <svg
      className="absolute left-0 top-0 h-full w-full"
      viewBox="0 0 1440 95"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M0 0
          H1440
          V35
          C1360 58 1290 48 1210 38
          C1110 25 1030 12 930 38
          C830 64 760 78 650 48
          C550 20 470 12 370 40
          C270 68 190 72 100 48
          C55 36 25 31 0 42
          Z
        "
        fill="#eef6ff"
      />
    </svg>
  </div>

  {/* Main Footer */}
  <div className="relative z-10 pt-[100px] sm:pt-[125px]">
        <div className="container grid gap-10 px-5 pb-10 md:grid-cols-[1.4fr_0.8fr_1fr_1fr] md:px-6">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl px-1">
                <Image
                  src="/logo3.png"
                  alt="whatsapp icon"
                  height={800}
                  width={800}
                  className="object-cover h-full w-[180px] sm:w-[200px]"
                />

               
              </div>
            </Link>

            <p className="mt-5 max-w-[300px] text-xs leading-6 text-white/75">
              We are committed to helping students achieve their educational
              goals by providing the best guidance and opportunities to study
              abroad.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
              href={facebook_url}
              target="_blank"
                >

                <Image
                  src="/icons/facebook.png"
                  alt="whatsapp icon"
                  height={200}
                  width={200}
                  className="object-cover w-[35px] w-[35px]"
                />
              </a>

 

                <a
                 href={instagram_url}
                 target="_blank"
                >
                  <Image
                  src="/icons/instagram.png"
                  alt="whatsapp icon"
                  height={200}
                  width={200}
                  className="object-cover w-[35px] w-[35px]"
                />
                </a>


                <a
                 href={tiktok_url}
                 target="_blank"
                >
                  <Image
                  src="/icons/tiktok.png"
                  alt="whatsapp icon"
                  height={200}
                  width={200}
                  className="object-cover w-[35px] w-[35px]"
                />
                </a>


                <a
                 href={youtube_url}
                 target="_blank"
                >
                  <Image
                  src="/icons/youtube.png"
                  alt="whatsapp icon"
                  height={200}
                  width={200}
                  className="object-cover w-[35px] w-[35px]"
                />
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 grid gap-3">
              {navItems?.map((nav) => (
                <Link
                  key={nav?.href}
                  href={nav?.href}
                  className="group relative w-fit text-xs text-white/70 transition-colors duration-200 hover:text-white"
                >
                 {nav?.label}

                <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Our Services
            </h3>

            <div className="mt-5 grid gap-3">
              {[
                "Scholarship Guidance",
                "Application Help",
                "Statement of Purpose",
                "Motivation Letter",
                "Letters of Recommendation",
              ].map((service) => (
                <Link
                  key={service}
                  href="/service-charges"
                  className="group relative w-fit text-xs text-white/70 transition-colors duration-200 hover:text-white"
                 >
                 {service}

                <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
               </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Contact Us
            </h3>

            <div className="mt-5 grid gap-4">

  {/* Phone */}
  <div className="group relative w-fit text-xs text-white transition-colors duration-200">
    <a
      target="_blank"
      href={`tel:${contact_number}`}
      className="flex items-start gap-3 transition-colors"
    >
      <Phone size={16} className="mt-0.5 shrink-0" />
      <span className="text-xs">
        +{contact_number}
      </span>
    </a>

    {/* Underline */}
    <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
  
  </div>


  {/* Email */}
  <div className="group relative w-fit text-xs text-white transition-colors duration-200">
    <a
      target="_blank"
      href={`mailto:${contact_email}`}
      className="flex items-start gap-3 text-xs text-white transition-colors"
    >
      <Mail size={16} className="mt-0.5 shrink-0" />
      <span>{contact_email}</span>
    </a>
     {/* Underline */}
    <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
  </div>


  {/* Address */}
  <div className="group relative w-fit text-xs text-white transition-colors duration-200">
    <a
     href={`#`}
     target="_blank"
     className="flex items-start gap-3 text-xs transition-colors">
      <MapPinned size={16} className="mt-0.5 shrink-0" />

      <span>
        {contact_address}
      </span>
       {/* Underline */}
    <span className="absolute -bottom-1 left-0 h-[1px] w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  </div>

</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15">
          <div className="container flex flex-col items-center justify-center gap-3 px-5 py-5 text-center md:px-6">
            <p className="text-[10px] text-white/60">
              © 2026 Badder Zaman Study Abroad Consultancy. All Rights Reserved.
            </p>

            {/* <div className="flex flex-wrap justify-center gap-5 text-[10px] text-white/50">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/cookie-policy"
                className="transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}