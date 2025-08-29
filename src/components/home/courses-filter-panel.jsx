"use client"
import React, { useEffect, useState } from 'react'
import { HiOutlineTrash } from "react-icons/hi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Input } from "@/components/ui/input"
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { filter } from '@/data/data';
import { useMediaQuery } from 'react-responsive';
const CoursesFilterPanel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // أول مرة
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className='p-6 bg-main-bg-gray rounded-[50px] space-y-4'>
      {/* title and delete button */}
      <div className='flex items-center justify-between'>
        <h3 className='text-lg uppercase font-bold text-main-orange'>Filter</h3>
        <button className='text-xs font-semibold text-main-orange flex items-center gap-1 hover:gap-2 transition-all duration-300'>
          <HiOutlineTrash size={16} />
          Clear filter</button>
      </div>

      {/* search */}
      <div className='relative'>
        <Image src="/home/search-icon.svg" alt="search-icon" width={50} height={50} className='absolute size-6 start-4 top-1/2 -translate-y-1/2' />
        <Input type="text" placeholder="Search courses here..." className={"bg-white rounded-full h-12 placeholder:text-black placeholder:font-semibold placeholder:text-xs border-0 shadow-none focus-visible:ring-main-light-orange ps-14 text-main-light-orange text-xs font-semibold"} />
      </div>
      {/* accordion for filter */}
      <Accordion type="single" collapsible defaultValue={isMobile ? undefined : "item-1"}>
        <AccordionItem value="item-1" className={"bg-white lg:py-4 py-2 px-4 rounded-[50px]"}>
          <AccordionTrigger icon={<RiArrowDownSLine size={20} className='text-main-navy' />} className={"hover:underline-0 text-main-navy font-bold text-base"}>Courses
          </AccordionTrigger>
          <AccordionContent >
            <div className='space-y-3'>
              {filter.map((item, idx) => (
                <div key={idx} className='flex items-center gap-2'>
                  <Checkbox id={item.title} className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-main-orange data-[state=checked]:border-main-orange' />
                  <label htmlFor={item.title} className=" font-semibold text-main-navy">{item.title}</label>
                  <p className='font-semibold text-main-orange ms-auto'>{item.count}</p>
                </div>
              ))}

            </div>

          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* accordion for filter 2 */}
      <Accordion type="single" collapsible defaultValue={isMobile ? undefined : "item-2"}>
        <AccordionItem value="item-2" className={"bg-white lg:py-4 py-2 px-4 rounded-[50px]"}>
          <AccordionTrigger icon={<RiArrowDownSLine size={20} className='text-main-navy' />} className={"hover:underline-0 text-main-navy font-bold text-base"}>Tutoring
          </AccordionTrigger>
          <AccordionContent >
            <div className='space-y-3'>
              {filter.map((item, idx) => (
                <div key={idx} className='flex items-center gap-2'>
                  <Checkbox id={item.title} className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-main-orange data-[state=checked]:border-main-orange' />
                  <label htmlFor={item.title} className=" font-semibold text-main-navy">{item.title}</label>
                  <p className='font-semibold text-main-orange ms-auto'>{item.count}</p>
                </div>
              ))}

            </div>

          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* accordion for filter rating */}
      <Accordion type="single" collapsible defaultValue={isMobile ? undefined : "item-3"}>
        <AccordionItem value="item-3" className={"bg-white lg:py-4 py-2 px-4 rounded-[50px]"}>
          <AccordionTrigger icon={<RiArrowDownSLine size={20} className='text-main-navy' />} className={"hover:underline-0 text-main-navy font-bold text-base"}>Ratings
          </AccordionTrigger>
          <AccordionContent >
            <div className='space-y-3'>

              <div className='flex items-center gap-2'>
                <Checkbox id="top" className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-main-orange data-[state=checked]:border-main-orange' />
                <label htmlFor="top" className=" font-semibold text-main-navy">Top Rated</label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id="low" className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-main-orange data-[state=checked]:border-main-orange' />
                <label htmlFor="low" className=" font-semibold text-main-navy">Lowest rated</label>
              </div>

            </div>

          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}

export default CoursesFilterPanel
