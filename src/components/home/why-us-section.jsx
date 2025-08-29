import React from 'react'
import WhyUsCard from './why-us-card'
import { whyUsData } from '@/data/data'
import * as motion from "motion/react-client"

const WhyUsSection = () => {
  return (
    <section className='bg-main-light-orange py-20'>
      <div className="container">
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center text-white space-y-4'>
          <h2 className=' lg:text-4xl md:text-3xl text-2xl font-bold '>Why Choose Our Platform for Medical Learning !</h2>
          <p className='lg:max-w-[55%] mx-auto  lg:leading-8 text-sm max-lg:text-xs '>We offer a trusted, flexible, and personalized medical education experience that delivers practical skills and better career opportunities quickly.</p>
        </motion.div>
        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
          {whyUsData.map((card,index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5}}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 ,delay:0.2*index}}
              key={card.id} className='h-full' >
              <WhyUsCard data={card} />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default WhyUsSection
