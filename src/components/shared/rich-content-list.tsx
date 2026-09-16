export function RichContentList({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="glass-panel rounded-[28px] p-6">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-[22px] bg-white/82 px-4 py-3 text-sm leading-7 text-slate-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
