import CustomBreadcrumbs from '@/components/shared/custom-bread-crumbs'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import UserSidebar from '@/components/user/user-sidebar'
import React from 'react'
import * as motion from "motion/react-client"
const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='container py-30 pb-12 space-y-8'>
        <CustomBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Settings', href: '/user' }, { label: 'My Profile' }]} />
        <section className='grid grid-cols-10 gap-4'>
          {/* sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration:1 }}
            className='lg:col-span-3 col-span-10'>
            <UserSidebar />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='lg:col-span-7 col-span-10 bg-main-background lg:rounded-[50px] rounded-xl lg:p-6 p-4 '>
            {children}
          </motion.div>
        </section>
      </main>
      <Footer />

    </>
  )
}

export default UserLayout
