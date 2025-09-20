import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CartCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] items-center gap-4">

      {/* img */}

      <Image src="/home/course-img.jpg" alt="hero-shadow" width={400} height={400} className="object-cover md:h-30 rounded-2xl w-full " />

      {/* content */}
      <div className='h-full flex items-center justify-between '>
        <div className='space-y-2'>

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

        {/* delete   */}
        <button  >
          <X size={16} className='text-main-orange hover:text-main-red transation-all duration-300 cursor-pointer' />
        </button>

      </div>



    </div>
  )
}

export default CartCard
