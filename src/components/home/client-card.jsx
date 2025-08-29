import Image from 'next/image'
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { PiStarFill } from 'react-icons/pi';


const ClientCard = () => {
  return (
    <div className='bg-white rounded-[50px] lg:p-11 p-8 lg:space-y-10 space-y-6'>
      {/* img and x icon */}
      <div className='flex items-center justify-between'>
        <Image src="/home/client.jpg" alt="client" width={100} height={100} className='rounded-full size-16 object-cover' />
        <FaXTwitter className='size-8' />
      </div>
      {/* qoute */}
      <q className='block lg:text-3xl md:text-2xl text-xl text-main-orange  lg:leading-relaxed '>
        The course was amazing and greatly boosted my confidence in my medical skills .
      </q>
      {/* author and rate  */}
      <div className='ps-4 py-2 border-s-3 border-main-navy flex  items-center justify-between'>
        {/* author */}
        <div  >
          <h4 className='text-lg font-semibold text-main-navy'>Abdullah Al-Walidi</h4>
          <p className='text-xs text-main-light-orange mt-2'>Medical Student</p>
        </div>
        {/* rate */}
        <div className='flex items-center gap-1'>
          <PiStarFill size={16} className='text-main-yellow' />
          <p className='text-sm text-main-navy font-bold'>5.0</p>
        </div>
      </div>
    </div>
  )
}

export default ClientCard
