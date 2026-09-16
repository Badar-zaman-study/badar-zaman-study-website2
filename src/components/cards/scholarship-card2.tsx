"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import moment from "moment";
import { getScholarshipStatus } from "@/src/lib/func";

export function ScholarshipCard2({
  scholarship,
}: {
  scholarship: any;
}) {
  const router = useRouter();


  const status = getScholarshipStatus(
    scholarship?.admission_open_date,
    scholarship?.admission_close_date
  );

  // Badge design
  const statusConfig = {
    present: {
      label: "Present",
      className: "bg-green-500 text-white",
    },

    upcoming: {
      label: "Upcoming",
      className: "bg-yellow-400 text-yellow-950",
    },

    expired: {
      label: "Expired",
      className: "bg-red-500 text-white",
    },
  };

  const currentStatus = statusConfig[status];

  console.log(scholarship,'scholarship_scholarship_scholarship')

  return (
    <article className="p-2 group overflow-hidden rounded-[16px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    onClick={() =>
      router.push(`/scholarships/${scholarship?.id}`)
    }
    >

      {/* Image */}
      <div className="relative h-[180px] w-full overflow-hidden">

        <Image
          src={scholarship?.image_url || "/scholarship-default-image.png"}
          alt={`${scholarship?.country_name} university` || 'scholarship-default-image'}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Dynamic Status Badge */}
        <div
          className={`
            absolute
            left-[14px]
            top-[14px]
            rounded-[8px]
            px-[14px]
            py-[8px]
            text-[14px]
            font-semibold
            shadow-sm
            ${currentStatus.className}
          `}
        >
          {currentStatus.label}
        </div>

      </div>

      {/* Content */}
      <div className="p-3">

        <h3 className="text-xl font-bold leading-tight text-slate-950">
          {scholarship?.scholarship_name}
        </h3>

       <p className="mt-1 text-sm text-slate-500">
          {moment(scholarship?.admission_close_date, "YYYY-MM-DD").format("DD MMMM YYYY")}
       </p>

        <button
          onClick={() =>
            router.push(`/scholarships/${scholarship?.id}`)
          }
          className="mt-4 inline-flex items-center gap-1 text-sm font-bold transition-colors hover:text-blue-800"
        >
          Read More

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>
    </article>
  );
}