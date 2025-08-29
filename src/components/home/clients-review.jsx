"use client"
import React from 'react'
import { motion } from "motion/react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ClientCard from './client-card'
import Autoplay from "embla-carousel-autoplay"

const ClientsReview = () => {
  return (
    <section className='bg-main-light-orange py-20'>
      <div className="container">
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center text-white space-y-4'>
          <h2 className=' md:text-3xl text-2xl font-bold '>What Our Students Say About Us</h2>
          <p className='lg:max-w-[40%] mx-auto  lg:leading-8 text-sm max-lg:text-xs '>Hear from our students who have enhanced their medical skills and achieved their goals with us.</p>
        </motion.div>
        {/* carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='mt-10'>
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {[...Array(5)].map((_, index) => (
                <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2 basis-full"><ClientCard /></CarouselItem>
              ))}

            </CarouselContent>
            <CarouselPrevious className={"bg-white text-main-orange hover:bg-main-orange hover:text-white border-0 max-lg:hidden"} />
            <CarouselNext className={"bg-white text-main-orange hover:bg-main-orange hover:text-white border-0 max-lg:hidden"} />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientsReview
