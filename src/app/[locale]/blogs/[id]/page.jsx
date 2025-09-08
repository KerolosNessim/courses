import BlogCard from '@/components/blogs/blog-card'
import ClientsReview from '@/components/home/clients-review'
import CustomBreadcrumbs from '@/components/shared/custom-bread-crumbs'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { blogDetails } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaSnapchatGhost, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { RiHeart2Line } from 'react-icons/ri'
import * as motion from "motion/react-client"
import Faq from '@/components/home/faq'
const SingleBlogPage = () => {
  return (
    <>
      <Navbar />
      <main className="container pt-32 pb-20  space-y-12">
        <CustomBreadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }, { label: "The Importance of Anatomy in Modern Medical Education !" }]} />
        {/* content */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='lg:w-[70%] mx-auto  '>
          {/* category */}
          <div className="mb-6 bg-main-navy p-2 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-2 ">
            <span className="px-2 py-1 text-main-navy bg-white rounded-full">
              <RiHeart2Line size={16} fill='#325d7b' />
            </span>
            <p>Pathology</p>
          </div>
          {/* title */}
          <h3 className='lg:text-5xl md:text-3xl text-2xl font-bold text-main-navy lg:leading-20 '>The Importance of Anatomy in Modern Medical Education !</h3>
          {/* disc */}
          <p className='text-sm text-main-navy font-medium lg:leading-8'>Anatomy is the foundation for understanding the human body. It provides students with a clear vision of organ structures, making it easier to study other medical sciences.</p>
          {/* auther and shares and more details */}
          <div className='mt-6 flex md:items-center justify-between max-md:flex-col max-md:gap-4'>
            {/* auther */}
            <div className='flex items-center gap-2'>
              <Image src="/home/doctor.jpg" alt="hero-shadow" width={400} height={400} className="size-14 rounded-full object-cover" />
              <div>
                <p className='text-lg font-bold text-main-navy'>Dr. Muhammad Al-Dhahabi</p>
                <p className='text-sm text-main-orange'>doctor</p>
              </div>
            </div>
            {/* social links */}
            <div className='flex md:items-center gap-2 max-md:flex-col '>
              <p className='text-xs text-main-navy font-medium'>share:</p>
              {/* links */}
              <div className='flex items-center gap-2 '>
                <div >
                  <a href="#" className='size-10 rounded-full bg-main-light-orange text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaFacebook size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-light-orange text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaInstagram size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-light-orange text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaTiktok size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-light-orange text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaXTwitter size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-light-orange text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaLinkedin size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-light-orange text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaSnapchatGhost size={16} />
                  </a>
                </div>
              </div>

            </div>
          </div>
          {/* detailes */}
          <div className='mt-12 space-y-6'>
            {blogDetails.map((item, index) => (
              <div key={index} className='space-y-4'>
                <h4 className='lg:text-xl text-lg font-bold text-main-navy'>{item.title}</h4>
                <p className='font-medium  text-main-navy lg:leading-8'>{item.description}</p>

              </div>
            ))}
          </div>
          {/* anthor post */}
          <div className='mt-12 space-y-6'>
            <h3 className='lg:text-5xl md:text-3xl text-2xl font-bold text-main-navy'>You may also like !</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </motion.section>
      </main>
      <Faq />
      <Footer />
    </>
  )
}

export default SingleBlogPage
