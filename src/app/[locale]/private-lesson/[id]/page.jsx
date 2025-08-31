import ClientsReview from '@/components/home/clients-review'
import CustomBreadcrumbs from '@/components/shared/custom-bread-crumbs'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { PiShoppingBagOpen } from 'react-icons/pi'
import { RiHeart2Line } from 'react-icons/ri'
import { RxLapTimer } from "react-icons/rx";
import * as motion from "motion/react-client"
import { courseData, courseDataDesc } from '@/data/data'
import { IoIosArrowDown } from "react-icons/io";

const SinglePrivateLessonPage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* course details */}
        <section className='  pt-30'>
          {/* breadcrumbs */}
          <div className='container'>
            <CustomBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Private Lessons', href: '/private-lesson' }, { label: 'Personal Medical Guidance !' }]} />
          </div>
          {/* details */}
          <div className="py-14 bg-[url('/home/bg-squares.svg')] bg-cover bg-center relative">
            <Image src="/home/shadow-bg.svg" alt="hero-shadow" width={250} height={250} className="absolute -z-10 top-0 right-0" />
            <Image src="/home/shadow-s-bg.svg" alt="hero-shadow" width={250} height={250} className="absolute -z-10 bottom-0 left-0" />
            {/* content */}
            <div className="container flex items-center gap-8 max-lg:flex-col-reverse">
              {/* content detailes */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='lg:w-1/2 space-y-6'>
                {/* category and houres */}
                <div className='flex items-center gap-2'>
                  {/* category */}
                  <div className="bg-main-navy p-2 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-2 ">
                    <span className="px-2 py-1 text-main-navy bg-white rounded-full">
                      <RiHeart2Line size={16} fill='#325d7b' />
                    </span>
                    <p>Pathology</p>
                  </div>
                </div>
                {/* tilte */}
                <h1 className='lg:text-4xl text-3xl text-main-orange font-bold lg:leading-16'>One-on-One Medical <br className='max-lg:hidden' /> Coaching !</h1>
                {/* description */}
                <p className='font-semibold lg:leading-loose'>Get tailored private lessons designed for your learning pace, guided by an experienced doctor in the medical field.</p>
                {/* rate */}
                <div>
                  <div className="text-sm font-bold text-main-navy flex items-start gap-3">
                    <p>5.0</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar key={index} size={16} className="text-main-light-orange" />
                      ))}
                    </div>
                    <p className='font-semibold  '>27,785 students</p>
                  </div>
                </div>
                {/* price */}
                <p className='lg:text-4xl text-3xl font-bold text-main-orange'>$59.99</p>
                {/* buy and add to cart */}
                <div className='flex items-center gap-2'>
                  <Link href="/courses" className="group  bg-main-navy ps-6 pe-2 py-2 text-white rounded-full text-sm font-semibold flex w-fit items-center gap-8">
                    Buy Now
                    <span className="size-10 bg-white rounded-full text-main-navy flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
                      <IoMdArrowRoundForward size={16} />
                    </span>
                  </Link>
                  <button className="group  bg-main-light-navy ps-6 pe-2 py-2  rounded-full text-sm font-semibold flex w-fit items-center gap-8">
                    Add To Cart
                    <span className="size-10 bg-white rounded-full  flex items-center justify-center  group-hover:-rotate-45 transation-all duration-300">
                      <PiShoppingBagOpen size={24} />
                    </span>
                  </button>
                </div>
                {/* access */}
                <div className='text-sm font-semibold text-main-navy flex items-center gap-2'>
                  <p>30-Day Money-Back Guarantee</p>
                  <div className='text-main-gray size-1 rounded-full bg-gray-300'></div>
                  <p>Full Lifetime Access</p>
                </div>
              </motion.div>
              {/* image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='lg:w-1/2'>
                <Image src="/home/lesson-img.jpg" alt="course" width={500} height={500} className="w-full rounded-[50px]" />
              </motion.div>

            </div>
          </div>
        </section>
        {/* Course content */}
        <section className='container py-20 space-y-8'>
          {/* title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className='space-y-2'>
            <h2 className='text-3xl font-bold text-main-orange'>Course Content</h2>
            {/* info */}
            <div className='text-xs font-semibold text-main-navy flex items-center gap-2'>
              <p>29 sections</p>
              <div className='text-main-gray size-1 rounded-full bg-gray-300'></div>
              <p>113 lectures</p>
              <div className='text-main-gray size-1 rounded-full bg-gray-300'></div>
              <p>6h 48m total length</p>
            </div>
          </motion.div>
          {/*lectures  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='space-y-8  bg-gray-100 p-6'>
            {courseData.map((item, index) => (
              <div key={index} className='flex md:items-center md:justify-between text-main-navy text-sm font-medium max-md:flex-col max-md:gap-2'>
                {/* title */}
                <div className='flex items-center gap-2 '>
                  <IoIosArrowDown size={16} className='text-inherit' />
                  <p>{item.name}</p>
                </div>
                {/* time and lectures */}
                <div className='flex items-center gap-4'>
                  <p>{item.lectures} lectures </p>
                  <div className='text-main-gray size-1 rounded-full bg-gray-300'></div>
                  <p>{item.duration}</p>
                </div>

              </div>
            ))}

          </motion.div>
        </section>
        {/* course discription */}
        <section className='container pb-20 space-y-8'>
          {/* title */}
          <div className=''>
            {/* info */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}

              className='text-xs font-semibold text-main-navy '>
              <h2 className='text-3xl font-bold text-main-orange'>Description</h2>
              <p className='mt-2'>Welcome to this course</p>
              <p className='mt-8'>
                Embark on a foundational journey into Human Anatomy. This course covers the body’s key systems with clear explanations, practical insights, and real- <br className='max-lg:hidden' />world medical relevance.
              </p>
            </motion.div>
            {/*lectures description  */}
            <div className='space-y-6 mt-8'>
              {courseDataDesc.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.5 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 * index }}
                  key={index} className=' text-main-navy space-y-1'>
                  {/* title */}
                  <p className='font-semibold'>Section {index + 1}: {item.section}</p>
                  {/* Description */}
                  <p className='text-xs font-medium'> {item.description}</p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>
        {/* Clients Review */}
        <ClientsReview />
      </main>
      <Footer />
    </>
  )
}

export default SinglePrivateLessonPage
