import AuthSlider from '@/components/auth/auth-slider'
import LoginForm from '@/components/auth/login-form'
import React from 'react'
import * as motion from "motion/react-client"

const LoginPage = () => {
  return (
    <main className='min-h-screen py-12 bg-main-light-orange flex items-center justify-center'>
      <section className='container   grid grid-cols-3  gap-4'>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='lg:col-span-1 col-span-3  bg-white rounded-[50px] p-12'>
          <LoginForm />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='lg:col-span-2 lg:block hidden bg-white rounded-[50px] '>
          <AuthSlider />
        </motion.div>


      </section>
    </main>
  )
}

export default LoginPage
