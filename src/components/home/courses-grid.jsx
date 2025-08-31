import React from 'react'
import CoursesCard from './course-card'
import * as motion from "motion/react-client"
const CoursesGrid = ({num=4}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      {[...Array(num)].map((_, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 * index }}
          key={index}
          className='h-full'
        >
          <CoursesCard />
        </motion.div>
      ))}
    </div>
  )
}

export default CoursesGrid
