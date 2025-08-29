import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import * as motion from "motion/react-client"
import { FaGooglePlay, FaApple } from "react-icons/fa";

const AppSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* shadow and pulses */}
      <Image src="/home/shadow-bg.svg" alt="hero-shadow" width={400} height={400} className="absolute -z-10 top-0 right-0" />
      <Image src="/home/shadow-s-bg.svg" alt="hero-shadow" width={400} height={400} className="absolute -z-10 bottom-0 left-0" />
      <Image src="/home/pulse-bg.svg" alt="hero-shadow" width={400} height={400} className="absolute -z-10 top-[10%] right-0 max-lg:hidden" />

      <div className=" bg-[url('/home/bg-squares.svg')] bg-cover bg-center">
        <div className="container max-lg:py-20  lg:min-h-screen flex items-center ">
          {/* content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="lg:w-1/2 space-y-6 max-lg:text-center">
            {/* title */}
            <h1 className="lg:text-[52px] md:text-4xl text-3xl font-bold text-main-orange lg:leading-18 lg:text-nowrap">Download Our App  <br className="max-lg:hidden" />&<br className="max-lg:hidden" />Enjoy Extra Benefits !</h1>
            {/* description */}
            <p className=" text-main-navy lg:text-lg font-semibold leading-loose">Easily follow your medical courses from your phone, receive notifications, access exclusive content, and enjoy a more flexible and comfortable learning experience.</p>
            {/* google store and app store */}
            <div className='flex items-center gap-2 max-lg:justify-center'>
              <a href="#" className="  bg-main-navy px-4 py-2 text-white rounded-full text-sm font-semibold flex w-fit items-center gap-4 hover:gap-6 transition-all duration-300">
                <FaApple size={22} />
                <div>
                  <p className='text-xs font-normal'>download on The</p>
                  <p>Apple Store</p>
                </div>

              </a>
              <a href="#" className="  bg-main-light-orange px-4 py-2 text-white rounded-full text-sm font-semibold flex w-fit items-center gap-4 hover:gap-6 transition-all duration-300">
                <FaGooglePlay size={22} />
                <div>
                  <p className='text-xs font-normal'>download on The</p>
                  <p>Google Play</p>
                </div>
              </a>
            </div>
            {/* clients */}
            <div className="flex items-center gap-4 max-lg:justify-center">
              {/* img */}
              <Image src="/home/clients.png" alt="clients" width={150} height={150} />
              {/* content */}
              <div className="text-main-navy text-xs font-bold space-y-1">
                <p>More than 1500+ clients...</p>
                <div className="text-[10px] font-medium flex items-start gap-3">
                  <p>5.0</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} size={10} className="text-main-light-orange" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="hidden lg:block relative w-1/2  min-h-screen ">
            <Image src="/home/iPhone-1.png" alt="hero" width={700} height={700} className="bottom-0 start-0 absolute h-full object-contain object-bottom " />
            <Image src="/home/iPhone-2.png" alt="hero" width={700} height={700} className="bottom-0 start-24 absolute h-[60%] object-contain object-bottom" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AppSection
