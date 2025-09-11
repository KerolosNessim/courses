import CustomBreadcrumbs from '@/components/shared/custom-bread-crumbs'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import UserSidebar from '@/components/user/user-sidebar'
import React from 'react'

const UserLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='container py-30 pb-20 space-y-8'>
        <CustomBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Settings', href: '/user' }, { label: 'My Profile' }]} />
        <section className='grid grid-cols-12 gap-4'>
          {/* sidebar */}
          <div className='col-span-4'>
            <UserSidebar />
          </div>
          <div className='col-span-8 bg-main-background rounded-[50px] p-12'>
            {children}
          </div>
        </section>
      </main>
      <Footer />

    </>
  )
}

export default UserLayout
