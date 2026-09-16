import React from 'react'
import {Hero} from '@/src/modules/contact-us/Hero'
import {ContactDetails} from '@/src/modules/contact-us/contact-details'
import { ContactForm } from "@/src/components/forms/contact-form";
import Map from "@/src/modules/contact-us/Map";
import ConsultationBanner from '@/src/components/consultation-banner';
import { FadeIn } from '@/src/components/motion/fade-in';
import { WhatsAppChannelButton } from '@/src/components/shared/whatsapp-channel-button';

const index = () => {
  return (
    <div className=''>
    {/* <div className='contact-page-shell'> */}
    <Hero/>
    <WhatsAppChannelButton />
    <section className="grid gap-7 py-8 lg:grid-cols-[330px_minmax(0,1fr)] lg:py-10">
  {/* Contact Details */}
  <div className="">
    <ContactDetails />
  </div>

  {/* Contact Form */}
  <div className="">
    <ContactForm />
  </div>

  </section>


  {/* <FadeIn delay={0.12}>
    <Map/>
  </FadeIn> */}


  <div className="">
    <ConsultationBanner />
  </div>

  </div>
  )
}

export default index
