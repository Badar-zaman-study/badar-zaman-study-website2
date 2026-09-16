"use client";

import { useApplyModal } from "@/src/components/providers/apply-modal-provider";

export function StickyApplyPanel({ scholarshipTitle }: { scholarshipTitle: string }) {
  const { open } = useApplyModal();

  return (
    <aside className="glass-panel sticky top-28 h-fit rounded-[30px] p-5">
      <div className="text-sm uppercase tracking-[0.18em] text-sky-600">Apply for this scholarship</div>
      <h3 className="mt-3 text-2xl font-semibold text-slate-950">Get profile feedback before you submit</h3>
      <p className="mt-3 text-sm leading-7 text-muted">
        Our advisors can review your eligibility, document readiness, and scholarship positioning.
      </p>
      <button type="button" onClick={() => open(scholarshipTitle)} className="btn-primary mt-6 w-full">
        Apply Now
      </button>
    </aside>
  );
}
