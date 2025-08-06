'use client'

import React from 'react'
import { CardCarousel } from '@/components/ui/card-carousel'
import ShareButton from '@/components/ui/share-button'
import { TextScroll } from '@/components/ui/text-scroll'
import WrapButton from '@/components/ui/wrap-button'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { SkiperCard } from '@/components/ui/skiper-card'
import card1 from "/public/card1.png"
import card2 from "/public/card2.png"
import card3 from "/public/card3.png"
import ImageCursorTrail from '@/components/ui/image-cursortrail'
import MaskedDiv from '@/components/ui/masked-div'
import ThemeToggleButton from '@/components/ui/theme-toggle-button'


const Page = () => {
  const image = [
    { src: "/card1.png", alt: "Image 1" },
    { src: "/card2.png", alt: "Image 2" },
    { src: "/card3.png", alt: "Image 3" },
  ]
   const images = [
  "https://in.pinterest.com/pin/3096293490076943/",
  "https://i.pinimg.com/1200x/c2/b0/87/c2b0878fc611b4ed84b7441ab14cbced.jpg",
  "https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1548192746-dd526f154ed9?q=80&w=1200&auto=format",
  "https://i.pinimg.com/1200x/c2/b0/87/c2b0878fc611b4ed84b7441ab14cbced.jpg",
  "https://in.pinterest.com/pin/3096293490076943/",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
]

  return (
   
    <div>
     <ThemeToggleButton start='center' variant="gif" url="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2VvbG9ubDd0NHZtMWZwdTNoZWR2cG4yZG85d2I5ejVmZm9vMXA0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gYkga3bZav66I/giphy.gifhttps://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGhldHFycnp3NDJ5d3I4aWsyOHRtcHg4ZjllMjB5NzVtYW5zYXVkdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MFnBZx2sOpZaM5qMdH/giphy.gifhttps://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWo1Y2ZqNzY4Zmo4aHc0N3IydWQ0ejZvbmY4OWhiNHBwZm8zajJkbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ibjOWWBs0x3c2syap9/giphy.gif" />

      <div>
      
        <h1 >
          Hello, My Name is Paresh!
          <WrapButton>Get started</WrapButton>
          <ShareButton
            links={[
              { icon: Twitter, href: "https://x.com/patil_pare82588" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/paresh-patil-171801248/" },
              { icon: Instagram, href: "https://www.instagram.com/81_paresh/" },
            ]}
          >
            Online
          </ShareButton>
        </h1>
      </div>

      <div className='h-screen border-t-2'>
        <TextScroll text='Paresh_Patil' className='font-bold' />
      </div>

      <div className="pt-40">
        <CardCarousel
          images={image}
          autoplayDelay={2000}
          showPagination={false}
          showNavigation={false}
        />
      </div>
      <div className="min-h-screen p-6 bg-neutral-950 flex items-center justify-center">
              <SkiperCard
        title="Paresh Patil"
        description="This is a 3-step animated feature card built with motion and interactivity."
        image={{
          step1dark1: card1,
          step1dark2: card2,
          step1light1: card1,
          step1light2: card2,
          step2dark1: card2,
          step2dark2: card3,
          step2light1: card2,
          step2light2: card3,
          step3dark: card3,
          step3light: card3,
          step4light: card1,
          alt: "Card Image",
        }}
        step1img1Class="absolute left-[20%] top-[30%] w-[200px] transition-all duration-500"
        step1img2Class="absolute left-[40%] top-[20%] w-[180px] transition-all duration-500"
        step2img1Class="absolute left-[30%] top-[35%] w-[220px] transition-all duration-500"
        step2img2Class="absolute left-[45%] top-[25%] w-[190px] transition-all duration-500"
        step3imgClass="absolute left-[36%] top-[28%] w-[210px] transition-all duration-500"
      />
      </div>
      <div >
       

        <ImageCursorTrail items={images}>
          <article className="relative z-50 flex flex-col items-center justify-center ">
           
            <h1 className="max-w-2xl text-center text-5xl font-semibold tracking-tight ">
              Hi Welcome
            </h1>
          </article>
        </ImageCursorTrail>
      </div>
      <div>
        <MaskedDiv maskType="type-4" size={5} className="my-4">
        <video
          className="cursor-pointer transition-all duration-300 hover:scale-105"
          autoPlay
          loop
          muted
        >
          <source
            src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </MaskedDiv>
      </div>
    </div>
    
  )
}

export default Page
