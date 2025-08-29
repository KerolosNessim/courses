import React from 'react'
import CoursesCard from './course-card'
import * as motion from "motion/react-client"
import LessonCard from './lesson-card'
const LessonGrid = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
      {[...Array(4)].map((_, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 * index }}
          key={index}
          className='h-full'
        >
          <LessonCard />
        </motion.div>
      ))}
    </div>
  )
}

export default LessonGrid
