import ClientsReview from '@/components/home/clients-review'
import LessonFilterPanel from '@/components/home/lesson-filter-panel'
import LessonGrid from '@/components/home/lesson-grid'
import SuccessStories from '@/components/home/success-stories'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import ShareBtn from '@/components/shared/share-btn'
import * as motion from "motion/react-client"
const PrivateLessonPage = () => {
  return (
    <>
      <Navbar />
      <main >
        <div className='container space-y-8 pb-20 pt-32'>
          {/* title and link */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='flex items-center justify-between max-lg:flex-col max-lg:gap-4'>
            {/* title */}
            <div className=' space-y-4 max-lg:text-center'>
              <h2 className='lg:text-4xl md:text-3xl text-2xl font-bold text-main-light-orange '>All medical Private lessons</h2>
              <p className='lg:leading-8 font-semibold max-lg:text-sm '>Choose your private lesson and start now</p>
            </div>
            {/* share button */}
            <ShareBtn />

          </motion.div>
          {/* filter panel and grid of courses */}
          <div className='flex max-lg:flex-col max-md:gap-4  gap-6  '>
            {/* filter panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='lg:w-1/4  w-full'>
              <LessonFilterPanel />
            </motion.div>
            {/* grid of courses */}
            <div className='lg:w-3/4  w-full'>
              <LessonGrid num={10} />
            </div>
          </div>
        </div>
        {/* clienst review */}
        <ClientsReview />
        {/* success stories */}
        <SuccessStories />
      </main>
      <Footer />

    </>
  )
}

export default PrivateLessonPage
