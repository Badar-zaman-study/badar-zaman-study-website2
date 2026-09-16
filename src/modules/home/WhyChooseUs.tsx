import React from 'react'
import Heading from '@/src/components/Heading'
import { features } from '@/src/lib/data'
import { BadgeCheck } from 'lucide-react'
import CardItem from '@/src/components/cards/CardItem'

const WhyChooseUs = () => {
  return (
    <div>
        <section className="py-10">
        <Heading
          icon={BadgeCheck}
          title="Why Choose Us"
          description="Get expert guidance, clear strategies, and personalized support for your admissions, scholarships, and visa journey"
        />
        <div className="grid items-stretch gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {features.map((feature, index) => (
            <CardItem 
             key={feature.title}
             index={index}
             Icon={feature?.icon}
             title={feature?.title}
             description={feature?.description}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default WhyChooseUs
