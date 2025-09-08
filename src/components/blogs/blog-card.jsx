
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

const BlogCard = () => {
  return (
    <div className='space-y-3'>
      {/* image */}
      <Image src="/home/course-img.jpg" alt="hero-shadow" width={400} height={400} className="w-full rounded-[50px] h-[20rem] object-cover" />
      {/* content */}
      <div className='space-y-2'>
        {/* category */}
        <p className='text-sm font-medium text-main-navy'>Pharmacy</p>
        {/* title */}
        <h3 className='text-xl font-bold text-main-navy leading-10 line-clamp-2'>The Importance of Anatomy in Modern Medical Education !</h3>
        {/* description */}
        <p className='text-sm leading-8 line-clamp-3'>Anatomy is the foundation for understanding the human body. It provides students with a clear vision of organ structures, making it easier to study other medical sciences.</p>
      </div>
      {/* link */}
      <Link href="/blogs/1" className="  bg-main-navy p-2 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-2 hover:gap-4 transition-all duration-300">
        <span className="px-3 py-1 text-main-navy bg-white rounded-full">
          <Image src="/home/bars.svg" alt="why-us" width={50} height={50} className='size-4' />
        </span>
        <p>Learn More</p>
        <IoMdArrowRoundForward size={16} />

      </Link>
    </div>
  )
}

export default BlogCard
