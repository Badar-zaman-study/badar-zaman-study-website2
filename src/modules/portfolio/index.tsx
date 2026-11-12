import React from 'react'
import { Hero } from './Hero'
import OurSuccess from '../home/OurSuccess'
import StudentsPortfolio from './StudentsPortfolio'
import NextSuccessStory from '@/src/components/NextSuccessStory'

const index = () => {
  return (
    <div>
      <Hero/>
      <OurSuccess/>
      <StudentsPortfolio/>
      <NextSuccessStory/>     
    </div>
  )
}

export default index
