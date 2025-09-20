import Image from 'next/image'
import React from 'react'

const NoCourses = () => {
  return (
    <div className='text-center space-y-4'>
      {/* image */}
      <Image src="/shared/courses.svg" alt="no-courses" width={100} height={100} className='lg:size-16 size-10 object-cover mx-auto ' />
      <h3 className='lg:text-lg font-bold text-main-navy'>You have not registered for any course yet !</h3>
      <p className='text-xs font-medium text-main-navy'>Start your educational journey now!</p>
    </div>
  )
}

export default NoCourses
