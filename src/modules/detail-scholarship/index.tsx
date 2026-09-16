"use client";
import { useApplyModal } from "@/src/components/providers/apply-modal-provider";
import { HeroSection } from "./Hero";
import CallToAction from "./CallToAction";
import DetailData from "./DetailData";

export function ScholarshipDetail({
  scholarship,
}: any) {
  const { open } = useApplyModal();

  const handleApply = () => {
    open(scholarship?.scholarship_name);
  };

  console.log(scholarship,"scholarshipscholarship_scholarsscholarshiphip")

  return (
    <div className="">

      {/* Hero */}

      <HeroSection
        scholarship={scholarship}
        onApply={handleApply}
      />

      {/* DetailData */}

      <DetailData scholarship={scholarship}/>


      {/* CallToAction */}

      <CallToAction/>

    </div>
  );
}