'use client'
import ShareButton from '@/components/ui/share-button'
import WrapButton from '@/components/ui/wrap-button'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-white'>Hello , My Name is Paresh!
          <WrapButton >
            Get started
        </WrapButton>
        <ShareButton links={
          [{icon:Twitter , href:"https://x.com/patil_pare82588"},{icon:Linkedin,href:"https://www.linkedin.com/in/paresh-patil-171801248/"},{icon:Instagram, href:"https://www.instagram.com/81_paresh/"}]
        }>Online</ShareButton>
      </h1>
    </div>
    
  )
}

export default page