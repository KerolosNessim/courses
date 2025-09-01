"use client"
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from 'react'
import { PiStarFill } from 'react-icons/pi'
import { FaXTwitter } from 'react-icons/fa6'
import Autoplay from "embla-carousel-autoplay"
const AuthSlider = () => {
  const [api, setApi] = useState()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="relative h-full p-12 bg-[url('/home/bg-squares.svg')] bg-cover bg-center flex flex-col items-center justify-center">
      {/* background shadow */}
      <Image
        src="/auth/auth-shadow.svg"
        alt="hero-shadow"
        width={500}
        height={500}
        className="absolute top-0 start-0"
      />

      {/* title */}
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-main-orange lg:leading-18 text-start w-full">
        Medical <br className="max-lg:hidden" />
        Education <br className="max-lg:hidden" />
        Platform.
      </h1>

      {/* subtitle */}
      <p className=" font-semibold lg:leading-10">
        Are you a pharmacist? Physician? any other healthcare practitioner?
        Here you can be a genius healthcare practitioner...
      </p>

      {/* slider */}
      <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} setApi={setApi} className="w-full mt-4 ">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='bg-main-background rounded-[50px] lg:p-11 p-8 lg:space-y-10 space-y-6'>
                {/* img and x icon */}
                <div className='flex items-center justify-between'>
                  <Image src="/home/client.jpg" alt="client" width={100} height={100} className='rounded-full size-20 object-cover' />
                  <FaXTwitter className='size-12' />
                </div>
                {/* qoute */}
                <q className='block  text-xl text-main-orange  lg:leading-relaxed '>
                  The course was amazing and greatly boosted my confidence in my medical skills .
                </q>
                {/* author and rate  */}
                <div className='ps-4 py-2 border-s-3 border-main-navy flex  items-center justify-between'>
                  {/* author */}
                  <div  >
                    <h4 className='text-lg font-semibold text-main-navy'>Abdullah Al-Walidi</h4>
                    <p className='text-xs text-main-light-orange mt-2'>Medical Student</p>
                  </div>
                  {/* rate */}
                  <div className='flex items-center gap-1'>
                    <PiStarFill size={16} className='text-main-yellow' />
                    <p className='text-sm text-main-navy font-bold'>5.0</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>


      </Carousel>

      {/* dots indicator */}
      <div className="flex justify-center gap-1 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${current === index + 1 ? "bg-main-orange w-8" : "bg-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  )
}

export default AuthSlider
