import ConsultationBanner from "@/src/components/consultation-banner";
import { ContactDetails } from "./contact-details";
import { ContactForm } from "./contact-form";
import { Hero } from "./Hero";
import { LocationMap } from "./location-map";
import { WhatsAppChannelButton } from "@/src/components/shared/whatsapp-channel-button";

const AboutUsPage = () => {
  return (
    <div className="">
      <Hero />
      <WhatsAppChannelButton />
      <section className="contact-page-shell grid gap-7 py-8 lg:grid-cols-[330px_minmax(0,1fr)] lg:py-10">
        <ContactDetails />
        <ContactForm />
      </section>
      <div className="contact-page-shell pb-5">
        <LocationMap />
      </div>
      <div className="contact-page-shell pb-10">
        <ConsultationBanner />
      </div>
    </div>
  );
};

export default AboutUsPage;
