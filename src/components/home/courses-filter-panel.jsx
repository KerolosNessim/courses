
"use client"
import React from 'react'
import { HiOutlineTrash } from "react-icons/hi"
import { RiArrowDownSLine } from "react-icons/ri"
import { LuFilter } from "react-icons/lu";
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { filter } from "@/data/data" 

const CoursesFilterPanel = () => {
  const panel = (
    <div className='p-6 bg-main-bg-gray rounded-[30px] space-y-4 w-full'>
      {/* title and delete button */}
      <div className='flex items-center justify-between'>
        <h3 className='text-lg uppercase font-bold text-main-orange'>Filter</h3>
        <button className='text-xs font-semibold text-main-orange flex items-center gap-1 hover:gap-2 transition-all duration-300'>
          <HiOutlineTrash size={16} />
          Clear filter
        </button>
      </div>

      {/* search */}
      <div className='relative'>
        <Image
          src="/home/search-icon.svg"
          alt="search-icon"
          width={20}
          height={20}
          className='absolute size-6 start-4 top-1/2 -translate-y-1/2'
        />
        <Input
          type="text"
          placeholder="Search courses here..."
          className="bg-white rounded-full h-12 placeholder:text-black placeholder:font-semibold placeholder:text-xs border-0 shadow-none focus-visible:ring-main-light-orange ps-14 text-main-light-orange text-xs font-semibold"
        />
      </div>

      {/* Accordion - Courses */}
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" className="bg-white lg:py-4 py-2 px-4 rounded-[30px]">
          <AccordionTrigger
            icon={<RiArrowDownSLine size={20} className='text-main-navy' />}
            className="hover:underline-0 text-main-navy font-bold text-base"
          >
            Courses
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {filter.map((item) => (
                <div key={item.id} className='flex items-center gap-2'>
                  <Checkbox
                    id={`course-${item.id}`}
                    className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-main-orange data-[state=checked]:border-main-orange'
                  />
                  <label
                    htmlFor={`course-${item.id}`}
                    className="font-semibold text-main-navy"
                  >
                    {item.title}
                  </label>
                  <p className='font-semibold text-main-orange ms-auto'>{item.count}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Accordion - Tutoring */}
      <Accordion type="single" collapsible defaultValue="item-2">
        <AccordionItem value="item-2" className="bg-white lg:py-4 py-2 px-4 rounded-[30px]">
          <AccordionTrigger
            icon={<RiArrowDownSLine size={20} className='text-main-navy' />}
            className="hover:underline-0 text-main-navy font-bold text-base"
          >
            Tutoring
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {filter.map((item) => (
                <div key={item.id} className='flex items-center gap-2'>
                  <Checkbox
                    id={`course-${item.id}`}
                    className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-main-orange data-[state=checked]:border-main-orange'
                  />
                  <label
                    htmlFor={`course-${item.id}`}
                    className="font-semibold text-main-navy"
                  >
                    {item.title}
                  </label>
                  <p className='font-semibold text-main-orange ms-auto'>{item.count}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Accordion - Ratings */}
      <Accordion type="single" collapsible defaultValue="item-3">
        <AccordionItem value="item-3" className="bg-white lg:py-4 py-2 px-4 rounded-[30px]">
          <AccordionTrigger
            icon={<RiArrowDownSLine size={20} className='text-main-navy' />}
            className="hover:underline-0 text-main-navy font-bold text-base"
          >
            Ratings
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className='flex items-center gap-2'>
                <Checkbox id="top-rated" className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-main-orange data-[state=checked]:border-main-orange' />
                <label htmlFor="top-rated" className="font-semibold text-main-navy">Top Rated</label>
              </div>
              <div className='flex items-center gap-2'>
                <Checkbox id="low-rated" className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-main-orange data-[state=checked]:border-main-orange' />
                <label htmlFor="low-rated" className="font-semibold text-main-navy">Lowest Rated</label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <>
      {/* Large screens show panel directly */}
      <div className="hidden lg:block">
        {panel}
      </div>

      {/* Small screens: use sheet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger className="px-4 py-2 w-full bg-main-orange text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:gap-3 transation-all duration-300">
            <LuFilter size={20}  className='text-inhirt'/>
            Open Filters
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-3xl p-0 max-h-[80vh] overflow-y-auto">
            <SheetHeader className="p-6">
              <SheetTitle className="text-main-orange">Browse our selection of medical courses tailored to your needs and learn in a practical way from trusted experts.</SheetTitle>
            </SheetHeader>
            {panel}
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default CoursesFilterPanel
