import React from 'react'
import Heading from '@/src/components/Heading'
import { FadeIn } from '@/src/components/motion/fade-in'
import { stats } from '@/src/lib/data'
import { Trophy } from 'lucide-react'
import { cn } from '@/src/lib/utils'
import { AnimatedCounter } from '@/src/components/motion/AnimatedCounter'

const OurSuccess = () => {
  return (
    <div>
    <section className="py-10">
    <Heading
    icon={Trophy}
    title="Our Success"
    />
  <div className="rounded-[18px] bg-blue-900 px-5 py-6 shadow-lg md:px-8 md:py-7">

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4">
      {stats.map((stat, index) => (
        <FadeIn key={stat.label} delay={index * 0.12}>
          <div
            className={cn(
              "flex flex-col items-center justify-center px-2 sm:px-4 py-3 text-center",
              index === 1 && "border-l border-white/15",
              index === 2 && "md:border-l border-white/15",
              index === 3 && "border-l border-white/15",
            )}
          >
            {/* Icon */}
            <div className="mb-2">
              <stat.icon className="h-8 w-8 text-yellow-300" />
            </div>

            {/* Animated Number */}
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              duration={2000}
            />

            {/* Label */}
            <div className="mt-2 text-sm font-medium text-white/85">
              {stat.label}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
  </section>
    </div>
  )
}

export default OurSuccess
