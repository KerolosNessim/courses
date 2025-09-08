import BlogSlider from '@/components/blogs/blog-slider'
import Newsletter from '@/components/blogs/newsletter'
import Faq from '@/components/home/faq'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { blogs } from '@/data/data'
import * as motion from "motion/react-client"
const BlogsPage = () => {
  return (

    <>
      <Navbar />
      <main className="pt-32 pb-20  bg-[url('/home/bg-squares.svg')] bg-contain bg-top bg-no-repeat space-y-20">
        <motion.section
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <Newsletter />
        </motion.section>
        <section className='space-y-20'>
          {blogs.map((blog, idx) => (
            <BlogSlider key={idx} blog={blog} />
          ))}
        </section>
      </main>
      <Faq />
      <Footer />
    </>

  )
}

export default BlogsPage
