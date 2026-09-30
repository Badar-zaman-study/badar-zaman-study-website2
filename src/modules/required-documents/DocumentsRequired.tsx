'use client'
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BookOpen,
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
import { useState } from "react";
import RequiredDocumentSampleModel from "@/src/components/model/RequiredDocumentSampleModel";

const documents = [
  {
    document:"bs_Transcript",
    title: "Academic Transcripts",
    description: "Official transcripts of your previous education with grades.",
    icon: GraduationCap,
  },
  {
    document:"Motivation_Letter",
    title: "Statement of Purpose (SOP)",
    description:
      "A well-written SOP explaining your goals, motivation and future plans.",
    icon: ClipboardSignature,
  },
  {
    document:"Letter_of_Recommendation",
    title: "Letters of Recommendation (LORs)",
    description:
      "Usually 2–3 letters from professors or employers who know your potential.",
    icon: Award,
  },
  {
    document:"Europass_cv",
    title: "Curriculum Vitae (CV/Resume)",
    description:
      "An updated CV highlighting your academic and professional background.",
    icon: FileText,
  },
  {
    document:"passport",
    title: "Copy of Passport",
    description:
      "A clear copy of your valid passport (biographical page).",
    icon: IdCard,
  },
  {
    document:"english_proficiency",
    title: "Language Proficiency Certificate / MOI",
    description:
      "IELTS, TOEFL or any other required language test score.",
    icon: FileBadge,
  },
{
  document:"",
  title: "Publications (if required)",
  description:
    "Published research papers, journal articles, or conference papers relevant to your academic field, if required by the program.",
  icon: BookOpen,
},
  {
    document:"research_proposal",
    title: "Research Proposal (if required)",
    description:
      "For research-based programs, a detailed research proposal is required.",
    icon: Lightbulb,
  },
  {
    document:"",
    title: "Portfolio / Work Samples (if required)",
    description:
      "For certain fields like art, design, or architecture.",
    icon: BriefcaseBusiness,
  },
];

const DocumentsRequired = () => {

  const [modelOpen , setModelOpen]=useState(false)
  const [selectedDocumentTitle , setSelectedDocumentTitle]=useState('')
  const [selectedDocument , setSelectedDocument]=useState('')


  const handleModel = (title='' , document='')=>{
    setSelectedDocumentTitle(title)
    setSelectedDocument(document)
    setModelOpen(!modelOpen)
  }
  return (
    <>
    <section className="py-10">
      <div className="">
        <Heading 
          icon={BookOpenCheck}
          title='Documents Required By Scholarship Type'
          description=' Common documents required for most scholarships are listed below'
          />

        <Card className="">
       <div className="grid divide-y divide-slate-100 sm:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-3">
        {documents?.map(({ title, description, icon: Icon , document }, index) => (
         <FadeIn key={title} delay={index * 0.12}>
          <article
          onClick={()=>handleModel(title , document)}
           className="flex items-start gap-3.5 cursor-pointer px-5 py-7 sm:px-8 sm:py-8"
          >
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

    {
      modelOpen &&
      <RequiredDocumentSampleModel isOpen={modelOpen} onClose={handleModel} documentName={selectedDocument} title={selectedDocumentTitle}/>
    }
    </>
  );
};

export default DocumentsRequired;
