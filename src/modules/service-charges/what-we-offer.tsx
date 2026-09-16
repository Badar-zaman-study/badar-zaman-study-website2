import React from 'react'
import { BookOpenCheck, FileText, GraduationCap, Headphones, NotebookText, Plane, Sparkles } from 'lucide-react';
import Heading from '@/src/components/Heading';
import CardItem from '@/src/components/cards/CardItem';


const services = [
  [GraduationCap, "University Selection", "We help you choose the best universities based on your profile, interests, and budget."],
  [NotebookText, "Scholarship Guidance", "Find and apply for the best scholarships to fund your study abroad dreams."],
  [FileText, "Application Support", "We assist in preparing and submitting strong applications that increase your chances."],
  [BookOpenCheck, "Visa Assistance", "Complete visa guidance and support to make your visa process smooth and stress-free."],
  [Plane, "Pre Departure Briefing", "Get detailed information about your destination country, travel, accommodation and more."],
  [Headphones, "Post Arrival Support", "We continue to support you even after you reach your destination for a smooth start."],
] as const;
export const WhatWeOfeer = () => {
  return (
    <div className=''>
      <Heading
        icon={Sparkles}
        title="What we offer"
      />
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {services.map(([Icon, title, description] , index) => 
          <CardItem
           key={title}
           index={index}
           Icon={Icon}
           title={title}
           description={description}
           />
            )}
            </div>
    </div>
  )
}
