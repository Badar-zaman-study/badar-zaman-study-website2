import React from 'react'
import { ScholarshipsGrid } from './scholarships-grid'
import { Hero } from '@/src/modules/scholarships/Hero'
import { WhatsAppChannelButton } from '@/src/components/shared/whatsapp-channel-button'

const index = () => {
  return (
    <div className="">
        <Hero/>
        <WhatsAppChannelButton />
        <ScholarshipsGrid />
    </div>
  )
}

export default index
