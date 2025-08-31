import { Link } from "@/i18n/navigation"
import Image from "next/image";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import * as motion from "motion/react-client"
import Navbar from "../shared/navbar";
function HeroSection() {
  return (
    <section className="relative lg:pt-24">
      {/* shadow and pulses */}
      <Image src="/home/shadow-bg.svg" alt="hero-shadow" width={400} height={400} className="absolute -z-10 top-0 right-0" />
      <Image src="/home/shadow-s-bg.svg" alt="hero-shadow" width={400} height={400} className="absolute -z-10 bottom-0 left-0" />
      <Image src="/home/pulse-bg.svg" alt="hero-shadow" width={400} height={400} className="absolute -z-10 top-[30%] right-0 max-lg:hidden" />
      <Image src="/home/pulse-e-bg.svg" alt="hero-shadow" width={300} height={300} className="absolute -z-50 bottom-[10%] right-1/2 max-lg:hidden" />



      {/* hero section */}
      <div className=" bg-[url('/home/bg-squares.svg')] bg-cover bg-center">
        {/* content  and img*/}
        <div className="container  min-h-screen  lg:min-h-[90vh] flex items-center ">
          {/* content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 , delay:0.7}}
            className="lg:w-1/2 space-y-6 max-lg:text-center">
            {/* about  link */}
            <Link href="/about" className="max-lg:mx-auto bg-main-navy p-2 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-2 hover:gap-4 transition-all duration-300">
              <span className="px-2 py-1 text-main-navy bg-white rounded-full">New</span>
              <p>Best Medical Service in 1 place</p>
              <IoMdArrowRoundForward size={16} />

            </Link>
            {/* title */}
            <h1 className="lg:text-[52px] md:text-4xl text-3xl font-bold text-main-orange lg:leading-18 lg:text-nowrap">Expert-led <br className="max-lg:hidden" />professional medical <br className="max-lg:hidden" />courses...</h1>
            {/* description */}
            <p className=" lg:text-lg font-semibold leading-loose">Discover tailored medical courses. Learn flexibly, enhance skills, and advance your professional career confidently.</p>
            {/* courses link */}
            <Link href="/courses" className="group max-lg:mx-auto bg-main-light-orange ps-6 pe-2 py-2 text-white rounded-full text-sm font-semibold flex w-fit items-center gap-6">
              Discover courses
              <span className="size-10 bg-white rounded-full text-main-light-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
                <IoMdArrowRoundForward size={16} />
              </span>
            </Link>
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
            transition={{ duration: 0.7 , delay:0.7}}
            className="hidden lg:block relative w-1/2  bg-[url('/home/hero-bg.svg')] bg-no-repeat bg-contain bg-bottom bg-no-repeatmin-h-screen  lg:min-h-[90vh]">
            <Image src="/home/doctor.png" alt="hero" width={700} height={700} className="bottom-0 start-0 absolute h-full object-contain object-bottom" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
