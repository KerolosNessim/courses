import Image from 'next/image'
import React from 'react'

const NoLessons = () => {
  return (
    <div className='text-center space-y-4'>
      {/* image */}
      <Image src="/shared/Specialties.svg" alt="no-lessons" width={100} height={100} className='lg:size-16 size-10 object-cover mx-auto ' />
      <h3 className='lg:text-lg font-bold text-main-navy'>Private Lessons Currently Unavailable</h3>
      <p className='text-xs font-medium text-main-navy'>We’re working on launching personalized sessions soon. Stay tuned to enjoy one-on-one learning with the doctor.</p>
    </div>
  )
}

export default NoLessons