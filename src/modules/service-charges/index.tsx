import ConsultationBanner from "@/src/components/consultation-banner";
import { FadeIn } from "@/src/components/motion/fade-in";
import { ChargesTable } from "./charges-table";
import { ProcessSteps } from "./process-steps";
import { Hero } from "./Hero";
import {WhatWeOfeer} from "@/src/modules/service-charges/what-we-offer";
import { WhyChooseUs } from "./why-choose-us";
import { WhatsAppChannelButton } from "@/src/components/shared/whatsapp-channel-button";

const ServiceChargesPage = () => (
  <div className="">
    <Hero />
    <WhatsAppChannelButton />
    <main className="service-page-shell space-y-10 py-8 md:py-12">
   
     <WhatWeOfeer />
  
     <ChargesTable />
   
     <WhyChooseUs />
  
     <ProcessSteps />
  
    <ConsultationBanner />
    
    </main>
  </div>
);

export default ServiceChargesPage;
