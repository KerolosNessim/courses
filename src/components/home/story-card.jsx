import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { PiStarFill } from 'react-icons/pi'

function StoryCard() {
  return (
    <div className='bg-main-background rounded-[50px] p-6  space-y-5'>
      {/* author and rate */}
      <div className='flex items-center justify-between'>
        {/* auther */}
        <div className='flex items-center gap-1'>
          <Image src="/home/client.jpg" alt="story" width={100} height={100} className='rounded-full size-12 object-cover' />
          <div  >
            <h4 className='text-sm font-semibold text-main-navy'>Abdullah Al-Walidi</h4>
            <p className='text-xs text-main-light-orange '>Medical Student</p>
          </div>
        </div>
        {/* rate */}
        <div className='flex items-center gap-1'>
          {[...Array(5)].map((_, index) => (

            <PiStarFill key={index} size={12} className='text-main-yellow' />
          ))}
          <p className='text-xs text-main-navy font-bold'>5.0</p>
        </div>
      </div>
      {/* course name */}
      <div>
        <p className='text-sm text-main-navy '>Name course</p>
        <h3 className='text-lg font-bold text-main-orange'>
          Human Anatomy Basics – 6 hours
        </h3>
      </div>
      {/* qoute */}
      <q className='block   text-main-navy  font-medium'>
        The course was amazing and greatly boosted my confidence in my medical skills .
      </q>
      {/* date and link */}
      <div className='flex items-center justify-between'>
        <p className=' text-main-orange font-bold'>17-08-2025</p>
        {/* about  link */}
        <Link href="/" className=" bg-main-navy p-2 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-2 hover:gap-4 transition-all duration-300">
          <span className="px-3 py-1 text-main-navy bg-white rounded-full">
            <Image src="/home/bars.svg" alt="why-us" width={50} height={50} className='size-4' />
          </span>
          <p>view now</p>
          <IoMdArrowRoundForward size={16} />

        </Link>
      </div>

    </div>
  )
}

export default StoryCard
