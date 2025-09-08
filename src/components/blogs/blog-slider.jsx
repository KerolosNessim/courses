import Image from 'next/image'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import * as motion from "motion/react-client"
import { useLocale } from 'next-intl'
import StoryCard from '../home/story-card'
import BlogCard from './blog-card'

const BlogSlider = ({
blog
}) => {
  const locale = useLocale()
  return (
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
          <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold text-main-navy' >{blog.title}</h2>
          <p className='text-sm font-medium  max-lg:text-xs text-main-navy'>{blog.description}</p>
        </div>
        {/* controls */}
        <div className={`flex items-center gap-2 ${locale === "ar" ? "flex-row-reverse" : ""}`}>
          <CarouselPrevious className={"static lg:size-10 bg-main-orange text-white hover:bg-main-orange hover:text-white border-0  translate-y-0"} />
          <CarouselNext className={"static lg:size-10 bg-main-orange text-white hover:bg-main-orange hover:text-white border-0  translate-y-0"} />
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
              <BlogCard />
            </CarouselItem>
          ))}


        </CarouselContent>
      </motion.div>

    </Carousel>
  )
}

export default BlogSlider
