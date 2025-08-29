import Image from 'next/image'
import React from 'react'
import { PiStarFill, PiShoppingBagOpen } from "react-icons/pi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiHeart2Line } from "react-icons/ri";

const LessonCard = () => {
  return (
    <div className='lg:space-y-4 space-y-2'>
      {/* image */}
      <div className=' lg:h-[18rem] h-[16rem] bg-[url("/home/lesson-img.jpg")] bg-cover bg-center rounded-[50px] overflow-hidden'>
        <div className="bg-black/30 h-full relative p-8 flex items-end">
          {/* points */}
          <p className='absolute top-10 start-10 text-xs text-white font-bold'>+10 ( points ) </p>
          {/* rate ,add to cart,favorite,enroll  */}
          <div className='flex items-center justify-between w-full'>
            {/* rate */}
            <div className='text-xs text-white font-semibold flex items-center gap-1'>
              <PiStarFill size={14} className='text-yellow-400' />
              <p>5.0 ( +100 ) </p>
            </div>
            {/* add to cart,favorite,enroll */}
            <div className='flex items-center gap-2'>
              {/* enroll */}
              <button className='px-3 py-3 bg-main-orange text-white rounded-full text-xs font-semibold flex items-center gap-3 hover:gap-4 transition-all duration-300'>
                Enroll Now
                <IoMdArrowRoundForward size={16} />
              </button>


              {/* cart */}
              <button className='size-10 bg-white text-black rounded-full text-xs font-semibold flex items-center justify-center hover:bg-main-orange hover:text-white transition-all duration-300'>
                <PiShoppingBagOpen size={20} />
              </button>
              {/* favorite */}
              <button className='size-10 bg-white text-black rounded-full text-xs font-semibold flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300'>
                <RiHeart2Line size={20} />
              </button>

            </div>
          </div>
        </div>
      </div>
      {/* content */}
      <div className='space-y-3'>
        {/* category */}
        <div className=" bg-main-navy p-2 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-2 ">
          <span className="px-2 py-1 text-main-navy bg-white rounded-full">
            <RiHeart2Line size={16} fill='#325d7b' />
          </span>
          <p>Pathology</p>
        </div>

        {/* title */}
        <h3 className='text-lg font-bold text-main-orange'>Personal Medical Guidance !</h3>
        {/* description */}
        <p className='text-sm  text-main-navy'>Receive direct guidance from the doctor with a learning plan tailored to your goals and current level.</p>
        {/* price */}
        <div className='text-lg font-bold flex items-center gap-4'>
          {/* discount */}
          <div className='flex items-center gap-1'>
            <Image src="/home/ryal.svg" alt="why-us" width={50} height={50} className='size-4' />
            <p className=' text-main-orange'> 1000.99</p>
          </div>
          {/* price */}
          <div className='flex items-center gap-1'>
            <Image src="/home/ryal-gray.svg" alt="why-us" width={50} height={50} className='size-4' />
            <p className=' text-main-light-gray'> 1047.99</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LessonCard
