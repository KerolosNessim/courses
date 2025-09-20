import CartCard from '@/components/user/cart-card'

import NoCart from '@/components/user/no-cart'
import Link from 'next/link'
import { IoMdArrowRoundForward } from 'react-icons/io'

const UserCartPage = () => {
  return (
    <div className='lg:space-y-4 space-y-2 h-full'>
      {/* title */}
      <div>
        <h2 className='lg:text-2xl md:text-xl  font-bold text-main-orange '>My Points</h2>
        <p className=' lg:text-sm text-xs text-main-navy font-semibold mt-2'>Track your graduate and business education balance, and register for special benefits and discounts.</p>
      </div>
      {/* tabs */}
      <div className='bg-white p-4  rounded-xl lg:rounded-3xl '>
        <div className='flex items-center justify-between max-md:flex-col max-md:gap-2'>
          <p className='text-main-navy font-semibold'>My Rewards Points</p>
          {/* buttons */}
          <div className='flex items-center gap-2'>
            <Link href="/payment" className="group  bg-main-orange ps-6 pe-2 py-1 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-6">
              Buy a product Now
              <span className="size-8 bg-white rounded-full text-main-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
                <IoMdArrowRoundForward size={16} />
              </span>
            </Link>
            <Link href="/payment" className="group  bg-main-navy px-4 py-3 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-6">
              Buy points

            </Link>
          </div>
        </div>


      </div>
    </div>
  )
}

export default UserCartPage
