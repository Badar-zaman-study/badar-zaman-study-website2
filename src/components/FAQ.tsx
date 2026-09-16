"use client";

import Heading from "@/src/components/Heading";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  MessageCircleQuestionMark,
} from "lucide-react";
import { useState } from "react";
import { FadeIn } from "./motion/fade-in";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ = ({ faqs }: FAQProps) => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return (
    <section className="pt-4 sm:pt-8">
      <div className="mx-auto">

        <Heading
          icon={MessageCircleQuestionMark}
          title="Frequently Asked Questions"
        />

        <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openQuestion === index;

            return (
               <FadeIn key={index} delay={index * 0.12}>
              <div
                key={question}
                className="overflow-hidden rounded-lg border-l-2 border-blue-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenQuestion(isOpen ? null : index)
                  }
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-3.5 py-3.5 text-left text-[9px] font-semibold text-black transition-colors hover:text-blue-500 sm:px-4 sm:py-4 sm:text-base"
                >
                  <span>{question}</span>

                  <ChevronDown
                    className={`h-6 w-6 shrink-0 rounded-full bg-blue-700 p-1 text-white transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2.25}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.28,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-3.5 pb-4 pr-10 text-[8px] leading-5 text-black/80 sm:px-4 sm:pb-5 sm:text-sm">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
               </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;