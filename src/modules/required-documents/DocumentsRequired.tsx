import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  ClipboardSignature,
  FileBadge,
  FileText,
  GraduationCap,
  IdCard,
  Lightbulb,
  NotebookPen,
} from "lucide-react";
import Card from "@/src/components/cards/Card";
import Heading from "@/src/components/Heading";
import { FadeIn } from "@/src/components/motion/fade-in";

const documents = [
  {
    title: "Academic Transcripts",
    description: "Official transcripts of your previous education with grades.",
    icon: GraduationCap,
  },
  {
    title: "Statement of Purpose (SOP)",
    description:
      "A well-written SOP explaining your goals, motivation and future plans.",
    icon: ClipboardSignature,
  },
  {
    title: "Letters of Recommendation (LORs)",
    description:
      "Usually 2–3 letters from professors or employers who know your potential.",
    icon: Award,
  },
  {
    title: "Curriculum Vitae (CV/Resume)",
    description:
      "An updated CV highlighting your academic and professional background.",
    icon: FileText,
  },
  {
    title: "Copy of Passport",
    description:
      "A clear copy of your valid passport (biographical page).",
    icon: IdCard,
  },
  {
    title: "Language Proficiency Certificate",
    description:
      "IELTS, TOEFL or any other required language test score.",
    icon: FileBadge,
  },
  {
    title: "Motivation Letter",
    description:
      "A letter that reflects your interest in the program and how it fits your goals.",
    icon: NotebookPen,
  },
  {
    title: "Research Proposal (if required)",
    description:
      "For research-based programs, a detailed research proposal is required.",
    icon: Lightbulb,
  },
  {
    title: "Portfolio / Work Samples (if required)",
    description:
      "For certain fields like art, design, or architecture.",
    icon: BriefcaseBusiness,
  },
];

const DocumentsRequired = () => {
  return (
    <section className="py-10">
      <div className="">
        <Heading 
          icon={BookOpenCheck}
          title='Documents Required By Scholarship Type'
          description=' Common documents required for most scholarships are listed below'
          />

        <Card className="">
       <div className="grid divide-y divide-slate-100 sm:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-3">
        {documents.map(({ title, description, icon: Icon }, index) => (
         <FadeIn key={title} delay={index * 0.12}>
          <article className="flex items-start gap-3.5 px-5 py-7 sm:px-8 sm:py-8">
           <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center text-blue-700">
            <Icon className="h-6 w-6" strokeWidth={1.75} />
           </span>

        <div>
          <h2 className="text-sm font-bold text-slate-800 sm:text-[15px]">
            {title}
          </h2>

          <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
            {description}
          </p>
        </div>
      </article>
         </FadeIn>
         ))}
       </div>

          <div className="flex justify-center border-t border-slate-100 px-5 py-6">
            <Link
              href="/scholarships"
              className="inline-flex items-center gap-3 rounded-md border border-blue-500 px-6 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-600 hover:text-white"
            >
              View Scholarship List <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DocumentsRequired;
