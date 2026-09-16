import {Hero} from "@/src/modules/required-documents/hero";
import DocumentsRequired from "@/src/modules/required-documents/DocumentsRequired";
import JeneralDocuments from "@/src/modules/required-documents/JeneralDocuments";
import ImportantTips from "@/src/modules/required-documents/ImportantTips";

import FAQ from "@/src/components/FAQ";
import ConsultationBanner from "@/src/components/consultation-banner";
import { WhatsAppChannelButton } from "@/src/components/shared/whatsapp-channel-button";

const faqs = [
  {
    question: "Do I need to submit original documents?",
    answer:
      "Usually, clear scanned copies are enough for the application. Keep your original documents safe, as the university may ask to verify them later.",
  },
  {
    question: "Can I apply without IELTS/TOEFL?",
    answer:
      "Some universities accept alternative proof of English proficiency or offer conditional admission. Always check the requirements of your chosen scholarship.",
  },
  {
    question: "How many recommendation letters are required?",
    answer:
      "Most scholarships request two or three recommendation letters. The exact number is listed in each scholarship's application requirements.",
  },
  {
    question: "Do requirements change for each scholarship?",
    answer:
      "Yes. While many documents are common, each scholarship can have its own eligibility criteria and supporting-document requirements.",
  },
  {
    question: "What if a document is not in English?",
    answer:
      "Provide a certified English translation alongside the original document whenever the university or scholarship provider requests it.",
  },
];

const Index = () => {
  return (
      <>
       <div className="">
          <Hero/>
          <WhatsAppChannelButton />
          <DocumentsRequired />
          <JeneralDocuments />
          <ImportantTips />
          <FAQ faqs={faqs}/>
          <div className="">
            <ConsultationBanner />
          </div>
        </div>
    </>
  );
};

export default Index;
