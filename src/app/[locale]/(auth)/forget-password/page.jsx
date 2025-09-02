import ForgetPasswordForm from '@/components/auth/forget-password-form'
import * as motion from "motion/react-client"

const ForgetPasswordPage = () => {
  return (
    <main className='min-h-screen py-12 bg-main-light-orange flex items-center justify-center'>
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='container min-h-screen    bg-white rounded-[50px] flex items-center justify-center lg:p-12 p-6'>

        <div className='lg:w-1/3 w-full'>
          <ForgetPasswordForm />
        </div>



      </motion.section>
    </main>
  )
}

export default ForgetPasswordPage
