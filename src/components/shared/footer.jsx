import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { FaSnapchatGhost } from 'react-icons/fa'
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import { IoMdArrowRoundForward } from 'react-icons/io'
import * as motion from "motion/react-client"

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className='bg-white pb-12 pt-20 space-y-12 relative'>
      <Image src="/home/pulse-bg.svg" alt="hero-shadow" width={300} height={300} className="absolute  top-4 right-0 max-lg:hidden" />
      {/* links and logo */}
      <div className='container'>
        <div className="grid grid-cols-12 max-lg:gap-8">
          {/* logo and social links */}
          <div className='col-span-12  lg:col-span-4 space-y-6 max-lg:text-center'>
            <Image src="/shared/logo.png" alt="logo" width={150} height={150} className='block max-lg:mx-auto' />
            <p className=' text-main-navy '>
              Discover tailored medical courses. Learn flexibly, enhance skills, and advance confidently.
            </p>
            {/* social links */}
            <div className='space-y-2'>
              <p className='text-xs font-semibold text-main-navy'>Follow Us here:</p>
              {/* links */}
              <div className='flex items-center gap-2 max-lg:justify-center'>
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
          <div className='col-span-12 lg:col-span-8 flex items-start justify-between max-md:flex-wrap gap-y-8'>
            {/* services */}
            <div className='w-1/2 md:w-1/3 order-0 md:order-0 space-y-6'>
              {/* title */}
              <p className='uppercase text-main-light-orange lg:text-2xl text-xl font-semibold'>Services</p>
              <div className='h-1.5 w-4 bg-main-light-orange rounded-full'></div>
              {/* links */}
              <div className='space-y-4'>
                <Link href="/courses" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/courses.svg" alt="icon" width={20} height={20} />
                  <p>Courses</p>
                </Link>
                <Link href="/private-lesson" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/Specialties.svg" alt="icon" width={20} height={20} />
                  <p>Specialties</p>
                </Link>
              </div>
            </div>
            {/* QUICK LINKS */}
            <div className='w-1/2 md:w-1/3 -order-1 md:order-0 space-y-6'>
              {/* title */}
              <p className='uppercase text-main-light-orange lg:text-2xl text-xl font-semibold'>QUICK LINK</p>
              <div className='h-1.5 w-4 bg-main-light-orange rounded-full'></div>
              {/* links */}
              <div className='space-y-4'>
                <Link href="/" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/Our-reviews.svg" alt="icon" width={20} height={20} />
                  <p>Our reviews</p>
                </Link>
                <Link href="/" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/Questions.svg" alt="icon" width={20} height={20} />
                  <p>Questions</p>
                </Link>
                <Link href="/about" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/about-us.svg" alt="icon" width={20} height={20} />
                  <p>About Us</p>
                </Link>
                <Link href="/blogs" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/blog.svg" alt="icon" width={20} height={20} />
                  <p>Blogs</p>
                </Link>
                <Link href="/contact" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/contact.svg" alt="icon" width={20} height={20} />
                  <p>Contacts</p>
                </Link>
                <Link href="/" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/points.svg" alt="icon" width={20} height={20} />
                  <p>Points</p>
                </Link>
              </div>
            </div>
            {/* contact us */}
            <div className='w-1/2 md:w-1/3 order-0 md:order-0 space-y-6'>
              {/* title */}
              <p className='uppercase text-main-light-orange lg:text-2xl text-xl font-semibold'>Contact us</p>
              <div className='h-1.5 w-4 bg-main-light-orange rounded-full'></div>
              {/* links */}
              <div className='space-y-4'>
                <a href="#" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/phone.svg" alt="icon" width={20} height={20} />
                  <p>+966 53 252 98 92</p>
                </a>
                <a href="#" className='flex items-center gap-2 text-main-navy font-semibold  hover:gap-3 transition-all duration-300'>
                  <Image src="/shared/email.svg" alt="icon" width={20} height={20} />
                  <p>support@info.com</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* terms and conditions  */}
      <div className='bg-main-light-orange'>
        <div className="container py-2 text-white text-xs font-medium flex items-center justify-between max-md:flex-col max-md:gap-2">
          <Link href="/" className='hover:underline  transition-all duration-300'>privacy policy</Link>
          <p>© 2021-2025, Dr. Nada Salma | All Rights Reserved.</p>
          <Link href="/" className='hover:underline  transition-all duration-300'>Terms and conditions</Link>
        </div>
      </div>
      {/* contact */}
      <div className='container flex items-center justify-between max-md:flex-col max-md:gap-2'>
        <p className='lg:text-2xl text-xl text-main-light-orange font-bold max-md:text-center'>Talk to a world-class medical expert</p>
        {/* contact link */}
        <Link href="/" className="group max-lg:mx-auto bg-main-light-navy ps-4 pe-1 py-1 text-main-navy rounded-full text-sm font-semibold flex w-fit items-center gap-6">
          Contact now
          <span className="size-10 bg-main-navy rounded-full text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
            <IoMdArrowRoundForward size={16} />
          </span>
        </Link>
      </div>

    </motion.footer>
  )
}

export default Footer
