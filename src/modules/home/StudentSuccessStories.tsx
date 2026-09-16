import React from 'react'
import Heading from '@/src/components/Heading'
import { FadeIn } from '@/src/components/motion/fade-in'
import { TestimonialCarousel } from '@/src/components/TestimonialCarousel'
import { Quote } from 'lucide-react'

const StudentSuccessStories = () => {
  return (
    <div>
        <section className="py-10">

         <Heading
          icon={Quote}
          title="Student Success Stories"
          description="Hear from students who turned their study abroad goals into real admissions and opportunities"
        />
            <FadeIn delay={ 0.12}>
              <TestimonialCarousel />
            </FadeIn>
      </section>
    </div>
  )
}

export default StudentSuccessStories
