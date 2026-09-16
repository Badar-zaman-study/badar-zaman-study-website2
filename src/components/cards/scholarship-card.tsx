"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays, GraduationCap, Landmark, PiggyBank } from "lucide-react";
import type { Scholarship } from "@/src/lib/types";
import { useApplyModal } from "@/src/components/providers/apply-modal-provider";

export function ScholarshipCard({ scholarship }: { scholarship: Scholarship }) {
  const { open } = useApplyModal();

  return (
    <article className="glass-panel rounded-[30px] p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
            {scholarship.logo}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">{scholarship.country}</p>
            <h3 className="mt-1 text-xl font-semibold text-slate-950">{scholarship.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{scholarship.university}</p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{scholarship.funding}</span>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
        <div className="flex items-center gap-2"><PiggyBank size={16} /> {scholarship.scholarshipType}</div>
        <div className="flex items-center gap-2"><CalendarDays size={16} /> {scholarship.deadline}</div>
        <div className="flex items-center gap-2"><GraduationCap size={16} /> {scholarship.degreeLevel}</div>
      </div>

      <p className="mt-4 text-sm leading-7 text-muted">{scholarship.shortDescription}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={() => open(scholarship.title)} className="btn-primary">
          Apply Now
        </button>
        <Link href={`/scholarships/${scholarship.slug}`} className="btn-secondary">
          View Details <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
