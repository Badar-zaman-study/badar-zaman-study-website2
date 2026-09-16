import Card from "@/src/components/cards/Card";
import Heading from "@/src/components/Heading";
import { FadeIn } from "@/src/components/motion/fade-in";
import { CheckCircle2, FileCheck2, Lightbulb } from "lucide-react";

const tips = [
  "Ensure all documents are valid and up to date.",
  "Follow the format and guidelines provided by the university.",
  "Translate documents to English if required.",
  "Keep both soft and hard copies of all documents.",
  "Submit before the deadline to avoid last minute issues.",
];

const ImportantTips = () => {
  return (
    <section className="pb-10">
         <Heading 
          icon={Lightbulb}
          title='Important Tips'
          />
      <Card className="px-5 py-5 sm:px-7 sm:py-6">
        <div className="flex flex-col items-center gap-7 sm:flex-row sm:justify-between sm:gap-10">
          <div className="w-full">
            <ul className="mt-4 space-y-3">
              {tips.map((tip , index) => (
                 <FadeIn key={index} delay={index * 0.12}>
                <li key={tip} className="flex items-start gap-3 text-xs sm:text-sm leading-5 text-slate-600 ">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700" strokeWidth={2} />
                  <span>{tip}</span>
                </li>
                 </FadeIn>
              ))}
            </ul>
          </div>

          <div className="hidden sm:block">
          <div className=" relative grid h-28 w-28 sm:h-32 sm:w-32 shrink-0 place-items-center overflow-hidden rounded-[28px] bg-blue-700 shadow-lg shadow-blue-200">
            <FileCheck2 className="relative h-16 w-16 text-white sm:h-20 sm:w-20" strokeWidth={1.5} />
          </div>
          </div>

        </div>
      </Card>
    </section>
  );
};

export default ImportantTips;
