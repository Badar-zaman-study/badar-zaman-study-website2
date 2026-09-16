import React from 'react'
import { Hero } from '@/src/modules/home/Hero'
import OurSuccess from './OurSuccess'
import PopularDestinations from './PopularDestinations'
import WhyChooseUs from './WhyChooseUs'
import CurrentScholarships from './CurrentScholarships'
import StudentSuccessStories from './StudentSuccessStories'
import FAQ from '@/src/components/FAQ'
import { WhatsAppChannelButton } from '@/src/components/shared/whatsapp-channel-button'

export const faqs = [
  {
    question: "When should I start planning my study abroad application?",
    answer: "Ideally 8 to 12 months before your preferred intake so there is enough room for test preparation, scholarships, and visa processing."
  },
  {
    question: "Can I apply without IELTS?",
    answer: "In some cases yes, depending on country, university policy, and your prior medium of instruction, but test-based options still give you wider flexibility."
  },
  {
    question: "Do you help with scholarships and visas?",
    answer: "Yes. We support both funding strategy and visa preparation so students can move through the process with one coordinated plan."
  },
  {
    question: "Can you help if I have a study gap?",
    answer: "Yes. We help frame academic or professional gaps with the right documentation and country-specific positioning."
  }
];

const index = () => {
  return (
    <div>
      <Hero/>
      <WhatsAppChannelButton />
      <OurSuccess/>
      <PopularDestinations/>
      <WhyChooseUs/>
      <CurrentScholarships/>
      <StudentSuccessStories/>
      <FAQ faqs={faqs}/>
    </div>
  )
}

export default index
