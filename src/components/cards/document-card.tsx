import type { DocumentItem } from "@/src/lib/types";

export function DocumentCard({ item }: { item: DocumentItem }) {
  const Icon = item.icon;

  return (
    <article className="glass-panel rounded-[28px] p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
        <Icon size={21} />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-slate-950">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{item.explanation}</p>
      <div className="mt-4 rounded-2xl bg-sky-50 px-4 py-3 text-sm text-sky-900">
        <span className="font-semibold">Tip:</span> {item.tips}
      </div>
    </article>
  );
}
