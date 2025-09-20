import ChangeImgForm from '@/components/user/change-img-form'
import ChangeInfoForm from '@/components/user/channge-info.form'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='lg:space-y-4 space-y-2'>
      <div>
      <h2 className='lg:text-2xl md:text-xl  font-bold text-main-orange '>Personal details</h2>
      <p className=' lg:text-sm text-xs text-main-navy font-semibold mt-2'>Add your personal details as you would like it to appear on your profile.</p>
      </div>
      <ChangeImgForm />
      <ChangeInfoForm/>
    </div>
  )
}

export default ProfilePage
