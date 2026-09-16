import React from 'react'
import { FadeIn } from '@/src/components/motion/fade-in'
import Card from './Card'

const CardItem = ({index , Icon , title , description}:any) => {
  return (
      <FadeIn key={title} delay={index * 0.12}>
            <Card className="group h-full flex flex-col items-center text-center overflow-hidden rounded-[28px] border border-slate-200 p-6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
             
             {
              Icon && 
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                 <Icon className="h-10 w-10" strokeWidth={1.9} />
              </span>
              }

              {
                title &&
              <h3 className="mt-4 text-sm font-bold leading-5 text-black">
                {title}
              </h3>
              }

              {
                description &&
              <p className="mt-2 text-xs leading-5 text-black/80">
                {description}
              </p>
              }
            </Card>
      </FadeIn>
  )
}

export default CardItem
