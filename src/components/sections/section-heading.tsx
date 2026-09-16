import { ReactNode } from "react";

export function SectionHeading({
  label,
  title,
  description,
  action
}: {
  label: string;
  title?: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <span className="section-label ">{label}</span>
        {
          title && <h2 className="heading-lg mt-4 !text-black">{title}</h2>
        }
        {
          description && <p className="mt-4 max-w-xl text-sm leading-7 !text-black/80 md:text-base">{description}</p>
        }
      </div>
      {action}
    </div>
  );
}
