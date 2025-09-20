import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

const UserCourseCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] items-center gap-4">

      {/* img */}

      <Image src="/home/course-img.jpg" alt="hero-shadow" width={400} height={400} className="object-cover md:h-30 rounded-2xl w-full " />

      {/* content */}
      <div className='h-full space-y-2 '>
        {/* category */}
        <p className='text-xs text-main-navy font-medium'>Pathology</p>
        {/* tilte */}
        <h3 className='max-lg:text-sm text-main-orange font-bold'>Human Anatomy Basics – 6 Hours.</h3>
        {/* info */}
        <div className="text-[10px] font-semibold text-main-navy flex flex-wrap items-center gap-2">
          <p>29 sections</p>
          <span className="inline-block w-1 h-1 rounded-full bg-gray-300"></span>
          <p>113 lectures</p>
          <span className="inline-block w-1 h-1 rounded-full bg-gray-300"></span>
          <p>6h 48m total length</p>
          <span className="inline-block w-1 h-1 rounded-full bg-gray-300"></span>
          <p>+10 points</p>
        </div>

        {/* price */}
        <p className='max-lg:text-sm font-bold text-main-navy'>$39.99</p>
      </div>
      {/* progreess bar and button */}
      <div className='flex items-center gap-3 md:ms-auto mx-auto'>
        {/* progreess bar */}
        <div>
          <span className='text-[10px] font-bold text-main-navy'>90%</span>
          <div className='w-30 bg-main-background h-1.5 rounded-full'>
            <div className='bg-main-navy h-full w-3/4 rounded-full'></div>
          </div>
        </div>
        {/* button */}
        {/* about  link */}
        <Link href="/about" className="  bg-main-navy p-1 text-white rounded-full text-[10px] font-semibold flex w-fit items-center gap-2 hover:gap-4 transition-all duration-300">
          <span className="px-2 py-1 text-main-navy bg-white rounded-full">
            <Image src="/home/bars.svg" alt="why-us" width={50} height={50} className='size-3' />
          </span>
          <p>Keep learning</p>
          <IoMdArrowRoundForward size={12} />

        </Link>
      </div>

    </div>
  )
}

export default UserCourseCard
