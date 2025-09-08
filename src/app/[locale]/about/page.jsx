import BlogSlider from '@/components/blogs/blog-slider'
import Newsletter from '@/components/blogs/newsletter'
import Faq from '@/components/home/faq'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { about, blogs } from '@/data/data'
import * as motion from "motion/react-client"
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
const AboutPage = () => {
  return (

    <>
      <Navbar />
      <main className="pt-32   bg-[url('/home/bg-squares.svg')] bg-contain bg-top  ">
        {/* about content */}
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className='relative py-12 mb-20'>
            {/* shadow */}
            <Image src="/home/shadow-center.svg" alt="hero-shadow" width={600} height={600} className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <Image src="/home/pulse-bg.svg" alt="hero-shadow" width={300} height={300} className="max-lg:hidden absolute -z-10 top-1/2 right-0 -translate-y-1/2" />
            <Image src="/home/pulse-e-bg.svg" alt="hero-shadow" width={300} height={300} className="max-lg:hidden absolute -z-10 top-1/2 left-0 -translate-y-1/2" />
            <div className='container space-y-4'>
              {/* badge */}
              <div className="mx-auto bg-main-navy p-2 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-2 hover:gap-4 transition-all duration-300">
                <span className="px-2 py-1 text-main-navy bg-white rounded-full">
                  <Image src="/shared/blog.svg" alt="why-us" width={50} height={50} className='size-4' />
                </span>
                <p>Who we are</p>
              </div>
              {/* title */}
              <div className='text-center space-y-4'>
                <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl text-main-orange lg:leading-20'>
                  Reliable knowledge… from the doctor <br className='max-md:hidden' /> To the student
                </h1>
                <p className='font-semibold md:text-sm text-xs lg:leading-8 lg:w-3xl lg:mx-auto'>A medical education platform that aims to empower doctors and medical students through professional courses presented by an expert doctor.</p>
              </div>
              {/* clients */}
              <div className="flex items-center gap-4 justify-center">
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

            </div>
          </div>
        </motion.section>
        {/* mission and vision */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='py-20 bg-main-light-orange'
        >
          <div className='max-lg:container lg:w-[80%] mx-auto space-y-8 text-white'>
            {/* massion */}
            <div className='md:flex items-center justify-between lg:gap-20 md:gap-6 max-md:space-y-6 '>
              {/* content */}
              <div className='md:w-1/2'>
                <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl  lg:leading-20 '>Our mission</h3>
                <p className='font-medium md:text-sm text-xs leading-8 '>We aim to provide professional and reliable online medical education, enabling medical students and doctors to develop their knowledge and skills in a practical and flexible manner that keeps pace with the demands of the profession.</p>
              </div>
              {/* img */}
              <div className="md:w-1/2">
                <Image src="/home/course-img.jpg" alt="mission" width={500} height={500} className='w-full rounded-[50px] lg:h-[60vh] object-cover' />
              </div>

            </div>
            {/* vission */}
            <div className='flex items-center justify-between lg:gap-20 gap-6 max-md:flex-col-reverse'>

              {/* img */}
              <div className="md:w-1/2">
                <Image src="/home/course-img.jpg" alt="mission" width={500} height={500} className='w-full rounded-[50px] lg:h-[60vh] object-cover' />
              </div>
              {/* content */}
              <div className='md:w-1/2'>
                <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl  lg:leading-20 '>Our Vission</h3>
                <p className='font-medium md:text-sm text-xs leading-8 '>We aim to provide professional and reliable online medical education, enabling medical students and doctors to develop their knowledge and skills in a practical and flexible manner that keeps pace with the demands of the profession.</p>
              </div>
            </div>

          </div>


        </motion.section>
        {/* Our mantra  */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='py-20 '
        >
          <div className="max-lg:container lg:w-[80%] mx-auto space-y-12">
            {/* title */}
            <div className='text-center space-y-6'>
              <h3 className='font-bold text-2xl md:text-3xl lg:text-5xl text-main-light-orange'>Our mantra</h3>
              <p className='font-medium max-md:text-xs '>Empowering medical learners with trusted knowledge, flexibility, and growth.</p>
            </div>
            {/* grid */}
            <div className='grid grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-6 content-center'>
              {about.map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 * index }}
                  key={index} className='space-y-4 max-md:text-center'>
                  <Image src={item.img} alt={item.title} width={100} height={100} className='size-10 object-cover max-md:mx-auto' />
                  <h3 className=' text-main-navy font-medium'>{item.title}</h3>
                  <p className='leading-8 text-sm'>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Faq />
      <Footer />
    </>

  )
}

export default AboutPage
