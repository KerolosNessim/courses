import CartCard from '@/components/user/cart-card'

import NoCart from '@/components/user/no-cart'
import Link from 'next/link'
import { IoMdArrowRoundForward } from 'react-icons/io'

const UserCartPage = () => {
  return (
    <div className='lg:space-y-4 space-y-2 h-full'>
      {/* title */}
      <div>
        <h2 className='lg:text-2xl md:text-xl  font-bold text-main-orange '>My carts</h2>
        <p className=' lg:text-sm text-xs text-main-navy font-semibold mt-2'>Review the courses before completing payment. You can apply a discount coupon, if available.</p>
      </div>
      {/* tabs */}
      <div className='bg-white p-4  rounded-xl lg:rounded-3xl '>
        <div className='space-y-4'>
          {Array(2).fill(0).map((item, index) => <CartCard key={index} />)}
          {/* shiping detailes */}
          <div className='bg-main-background lg:p-8 p-4 space-y-4'>
            <div className='text-sm font-bold flex items-center justify-between'>
              <p>Total Item :</p>
              <p className='text-main-navy'>$124.99</p>
            </div>
            <div className='text-sm font-bold flex items-center justify-between'>
              <p>Tax :</p>
              <p className='text-main-navy'>$01.99</p>
            </div>
            <div className='pt-3 border-t font-bold flex items-center justify-between'>
              <p>Total :</p>
              <p className='text-main-orange'>$149.97</p>
            </div>
          </div>
          {/* payment link */}
          <Link href="/payment" className="group mx-auto bg-main-orange ps-6 pe-2 py-1 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-6">
            Buy a product Now
            <span className="size-8 bg-white rounded-full text-main-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
              <IoMdArrowRoundForward size={16} />
            </span>
          </Link>
        </div>
        {/* <div className='min-h-[70vh] flex items-center justify-center'>
          <NoCart />
        </div> */}

      </div>
    </div>
  )
}

export default UserCartPage
