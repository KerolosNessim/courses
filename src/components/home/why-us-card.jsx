import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'


const WhyUsCard = ({data }) => {
  return (
    <div className='py-10 px-6  lg:rounded-[4rem] rounded-4xl bg-white  h-full  lg:space-y-4 space-y-2'>
      {/* img */}
      <div className='size-16 bg-main-light-orange rounded-full flex items-center justify-center'>
        <Image src={data.img} alt="why-us" width={50} height={50} className='size-7' />
      </div>
      {/* title */}
      <h3 className='text-lg font-bold text-main-light-orange lg:leading-10 text-nowrap' dangerouslySetInnerHTML={{ __html: data.title }}></h3>
      {/* disc */}
      <p className='text-xs font-medium text-main-navy lg:leading-6 line-clamp-2'>{data.discription}</p>
      {/* about  link */}
      <Link href="/about" className=" mt-10 bg-main-navy p-2 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-2 hover:gap-4 transition-all duration-300">
        <span className="px-3 py-1 text-main-navy bg-white rounded-full">
          <Image src="/home/bars.svg" alt="why-us" width={50} height={50} className='size-4' />
        </span>
        <p>Learn More</p>
        <IoMdArrowRoundForward size={16} />

      </Link>
    </div>
  )
}

export default WhyUsCard
