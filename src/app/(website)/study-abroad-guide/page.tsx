import { DocumentCard } from "@/src/components/cards/document-card";
import { guideSteps, documents } from "@/src/lib/data";

export default function StudyAbroadGuidePage() {
  return (
    <>
      

      <section className="">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {guideSteps.map((item) => (
            <article key={item.step} className="glass-panel rounded-[28px] p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">{item.step}</div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="">
        <div className="mb-10 max-w-2xl">
          <span className="section-label">Required documents</span>
          <h2 className="heading-lg mt-4 text-slate-950">Prepare the documents that shape admissions and visa strength</h2>
          <p className="mt-4 text-sm leading-7 text-muted md:text-base">
            Strong applications are not only about grades. Clear, complete, and well-presented documentation makes a
            major difference throughout the process.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((item) => (
            <DocumentCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
