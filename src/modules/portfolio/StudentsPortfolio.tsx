"use client";
import React from 'react'
import Heading from '@/src/components/Heading'
import { BookOpenCheck } from 'lucide-react'
import StudentPortfolioCard from './StudentPortfolioCard'
import Pagination3 from '@/src/components/Pagination3'
import NextSuccessStory from '@/src/components/NextSuccessStory';

const StudentsPortfolio = () => {

    const paginationPages = [1, 2, 3, 4, 5];
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

    <div>
        <Pagination3 
         currentPage={1}
         totalPages={10}
         paginationPages={paginationPages}
         handlePageChange={(page:number) => console.log(`Page changed to: ${page}`)}
        />
    </div>

    <div>
        <NextSuccessStory/>
    </div>

     
    </section>
  )
}

export default StudentsPortfolio
