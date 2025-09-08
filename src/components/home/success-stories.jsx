import Image from 'next/image'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import StoryCard from './story-card'
import * as motion from "motion/react-client"
import { useLocale } from 'next-intl'
const SuccessStories = () => {
  const locale = useLocale()
  return (
    <section className="relative bg-[url('/home/bg-squares.svg')] bg-cover bg-center py-20">
      {/* shadow and pulses */}
      <Image src="/home/shadow-bg.svg" alt="hero-shadow" width={250} height={250} className="absolute -z-10 top-0 right-0" />
      <Image src="/home/pulse-bg.svg" alt="hero-shadow" width={250} height={250} className="absolute -z-10 top-10 right-0 max-lg:hidden" />
      <div >
        <Carousel
          opts={{ direction: `${locale === "en" ? "ltr" : "rtl"}` }}
          className={"space-y-8"}
        >
          {/* title and controls */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }} className='container flex items-center justify-between lg:flex-row flex-col max-lg:gap-4'>
            {/* title */}
            <div className='space-y-4 max-lg:text-center'>
              <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold text-main-light-orange' >Success stories</h2>
              <p className='   lg:leading-8 text-sm font-semibold  max-lg:text-xs '>Students provide feedback on medical courses, sharing experiences, outcomes, and <br className='max-lg:hidden' /> suggestions to improve learning quality and enhance future educational opportunities.</p>
            </div>
            {/* controls */}
            <div className={`flex items-center gap-2 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
              <CarouselPrevious className={"static lg:size-12 bg-main-orange text-white hover:bg-main-orange hover:text-white border-0  translate-y-0"} />
              <CarouselNext className={"static lg:size-12 bg-main-orange text-white hover:bg-main-orange hover:text-white border-0  translate-y-0"} />
            </div>
          </motion.div>
          {/* carsousel content */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }} className={`lg:w-[95%] ${locale === "ar" ? "lg:mr-auto" : "lg:ml-auto"} `}>
            <CarouselContent className={" max-lg:container "}>

              {[...Array(5)].map((_, index) => (
                <CarouselItem
                  key={index}
                  className={`lg:basis-[31%] md:basis-1/2 basis-full pl-2 ${index === 0 ? "lg:pl-4" : "lg:pl-2"} `}
                >
                  <StoryCard />
                </CarouselItem>
              ))}


            </CarouselContent>
          </motion.div>

        </Carousel>
      </div>
    </section>
  )
}

export default SuccessStories
