import Card from "@/src/components/cards/Card";
import CardItem from "@/src/components/cards/CardItem";
import Heading from "@/src/components/Heading";
import { FadeIn } from "@/src/components/motion/fade-in";
import {
  BookOpenCheck,
  Camera,
  Contact,
  HeartPulse,
  Landmark,
  ShieldCheck,
} from "lucide-react";

const documents = [
  {
    title: "Photographs",
    description:
      "Recent passport size photographs with white background.",
    icon: Camera,
  },
  {
    title: "National ID / CNIC",
    description:
      "Copy of your national identity card or any official ID.",
    icon: Contact,
  },
  {
    title: "Bank Statement",
    description:
      "Recent bank statement as proof of financial stability (if required).",
    icon: Landmark,
  },
  {
    title: "Medical Certificate",
    description:
      "Health certificate from an authorized medical practitioner.",
    icon: HeartPulse,
  },
  {
    title: "Police Clearance Certificate",
    description:
      "Police clearance certificate for some countries and universities.",
    icon: ShieldCheck,
  },
];

const JeneralDocuments = () => {
  return (
    <section className="pb-10">
      <Heading
        icon={BookOpenCheck}
        title="General Documents (Almost Always Required)"
      />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-3">
        {documents.map(({ title, description, icon: Icon }, index) => (
         <CardItem
           key={title}
           index={index}
           Icon={Icon}
           title={title}
           description={description}
           />
        ))}
      </div>
    </section>
  );
};

export default JeneralDocuments;