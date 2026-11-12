import React from 'react'
import Heading from '@/src/components/Heading'
import { BookOpenCheck } from 'lucide-react'
import StudentPortfolioCard from './StudentPortfolioCard'

const StudentsPortfolio = () => {
  return (
   <section className="py-10">
    <div>
     <Heading 
        icon={BookOpenCheck}
        title='Browse Our Students Portfolio'
        description=' Check out the success stories and achievements of our students'
        />
    </div>

    <div>
        <StudentPortfolioCard />
    </div>

     
    </section>
  )
}

export default StudentsPortfolio
