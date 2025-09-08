import ContactForm from '@/components/contact/contact-form'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import Image from 'next/image'
import React from 'react'
import { FaSnapchatGhost } from 'react-icons/fa'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import * as motion from "motion/react-client"
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className='py-12 mt-28 bg-main-light-orange flex items-center justify-center'>
        <section className='container grid grid-cols-12 gap-4'>
          {/* contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 lg:col-span-8 relative h-full p-12 bg-[url('/home/bg-squares.svg')] bg-white bg-cover bg-center flex flex-col items-center justify-between rounded-[50px] max-lg:gap-4">
            {/* background shadow */}
            <Image
              src="/auth/auth-shadow.svg"
              alt="hero-shadow"
              width={500}
              height={500}
              className="absolute top-0 start-0"
            />
            {/* info */}
            <div className="space-y-4 w-full max-lg:text-center">
              {/* title */}
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-main-orange lg:leading-18  w-full">
                Let's <br className="max-lg:hidden" />
                Talk!
              </h1>
              {/* subtitle */}
              <p className=" font-semibold text-main-navy w-full">
                We will respond to you within 24 hours.
              </p>
            </div>
            {/* social links */}
            <div className='space-y-3 w-full'>
              <p className='text-sm font-semibold text-main-navy max-lg:text-center'>Follow Us here:</p>
              {/* links */}
              <div className='flex items-center gap-2 max-lg:justify-center'>
                <div >
                  <a href="#" className='size-10 rounded-full bg-main-navy text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaFacebook size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-navy text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaInstagram size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-navy text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaTiktok size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-navy text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaXTwitter size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-navy text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaLinkedin size={16} />
                  </a>
                </div>
                <div>
                  <a href="#" className='size-10 rounded-full bg-main-navy text-white flex items-center justify-center hover:scale-105  transition-all duration-300'>
                    <FaSnapchatGhost size={16} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
          {/* contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='lg:col-span-4 col-span-12  bg-white rounded-[50px] p-12 flex items-center justify-center'>
            <ContactForm />
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
