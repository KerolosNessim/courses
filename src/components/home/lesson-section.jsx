import React from 'react'
import * as motion from "motion/react-client"
import { Link } from '@/i18n/navigation'
import { IoMdArrowRoundForward } from 'react-icons/io'
import CoursesFilterPanel from './courses-filter-panel'
import CoursesGrid from './courses-grid'
import LessonFilterPanel from './lesson-filter-panel'
import LessonGrid from './lesson-grid'
const LessonSection = () => {
  return (
    <div className='space-y-8'>
      {/* title and link */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='flex items-center justify-between max-lg:flex-col max-lg:gap-4'>
        {/* title */}
        <div className='lg:w-[60%] space-y-4 max-lg:text-center'>
          <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold text-main-light-orange lg:leading-14'>Learn Directly with <br className='max-lg:hidden' /> the Doctor !</h2>
          <p className='lg:leading-8 font-semibold max-lg:text-sm '>Book one-on-one learning sessions with the doctor to quickly develop your medical skills and get precise answers to your questions.</p>
        </div>
        {/* courses link */}
        <Link href="/private-lesson" className="group max-lg:mx-auto bg-main-light-navy px-3 py-2  rounded-full text-sm font-semibold flex w-fit items-center gap-4">
          View all tutoring
          <span className="size-10 bg-white rounded-full text-main-navy flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
            <IoMdArrowRoundForward size={16} />
          </span>
        </Link>
      </motion.div>
      {/* filter panel and grid of courses */}
      <div className='flex max-lg:flex-col max-md:gap-4  gap-6 '>
        {/* filter panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='lg:w-1/4 w-full'>
          <LessonFilterPanel />
        </motion.div>
        {/* grid of courses */}
        <div className='lg:w-3/4  w-full '>
          <LessonGrid />
        </div>
      </div>
    </div>
  )
}

export default LessonSection
