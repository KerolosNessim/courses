import { Link } from '@/i18n/navigation'
import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io';
import { LiaUserSolid } from "react-icons/lia";

const AccountLinks = () => {
  return (
    <div className='flex items-center gap-4'>
      {/* login */}
      <Link href="/login" className='text-sm font-semibold text-main-navy hover:text-main-orange transition-all duration-300 flex items-end gap-2'>
        <LiaUserSolid size={26} className='text-inherit' />
        Log in</Link>
      {/* sign up */}
      <Link href="/sign-up" className="h-10 group  bg-main-navy ps-4 pe-2 py-2 text-white rounded-full text-sm font-semibold flex w-fit items-center gap-4">
        Sign up
        <span className="size-6 bg-white rounded-full text-main-navy flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
          <IoMdArrowRoundForward size={16} />
        </span>
      </Link>

    </div>
  )
}

export default AccountLinks
