import { Link } from '@/i18n/navigation'
import { LiaUserSolid } from "react-icons/lia";
import { IoMdArrowForward } from "react-icons/io";
import { HiOutlineFolderOpen, HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { TbCertificate } from "react-icons/tb";
import { RiHeart2Line } from 'react-icons/ri';
import { PiShoppingBagOpen } from 'react-icons/pi';
import { VscActivateBreakpoints } from "react-icons/vsc";
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import Image from 'next/image';

const UserSidebar = () => {
  return (
    <div className='bg-main-background lg:p-8 p-4 lg:rounded-[50px] rounded-xl lg:space-y-6 space-y-2'>
      {/* title  */}
      <h3 className='lg:text-xl font-bold uppercase text-main-orange'>Settings</h3>
      {/* links */}
      <div className='bg-white lg:p-6 p-4 lg:rounded-[40px] rounded-xl '>
        <h3 className='lg:text-lg font-bold uppercase text-main-navy lg:mb-8 mb-4'>Personal information</h3>
        <ul className="flex flex-col lg:flex-col max-lg:flex-row max-lg:space-x-5 max-lg:space-y-0 lg:space-y-5 overflow-x-auto hide-scrollbar">
          <li className="flex-shrink-0">
            <Link
              href="/user"
              className="flex items-center gap-1 font-semibold text-main-navy max-lg:text-sm hover:text-main-orange hover:gap-2 transition-all duration-300"
            >
              <LiaUserSolid size={24} className="max-lg:size-4 text-inherit" />
              <p>My Profile</p>
              <IoMdArrowForward size={20} className="text-inherit ms-auto hidden lg:block" />
            </Link>
          </li>

          <li className="flex-shrink-0">
            <Link
              href="/user/courses"
              className="flex items-center gap-1 font-semibold text-main-navy max-lg:text-sm hover:text-main-orange hover:gap-2 transition-all duration-300"
            >
              <HiOutlineFolderOpen size={24} className="max-lg:size-4 text-inherit" />
              <p>My Courses</p>
              <IoMdArrowForward size={20} className="text-inherit ms-auto hidden lg:block" />
            </Link>
          </li>

          <li className="flex-shrink-0">
            <Link
              href="/user/private-lesson"
              className="flex items-center gap-1 font-semibold text-main-navy max-lg:text-sm hover:text-main-orange hover:gap-2 transition-all duration-300"
            >
              <HiOutlineBars3BottomLeft size={24} className="max-lg:size-4 text-inherit" />
              <p>My Private lessons</p>
              <IoMdArrowForward size={20} className="text-inherit ms-auto hidden lg:block" />
            </Link>
          </li>

          <li className="flex-shrink-0">
            <Link
              href="/user/certificates"
              className="flex items-center gap-1 font-semibold text-main-navy max-lg:text-sm hover:text-main-orange hover:gap-2 transition-all duration-300"
            >
              <TbCertificate size={24} className="max-lg:size-4 text-inherit" />
              <p>My certificates</p>
              <IoMdArrowForward size={20} className="text-inherit ms-auto hidden lg:block" />
            </Link>
          </li>

          <li className="flex-shrink-0">
            <Link
              href="/user/favorites"
              className="flex items-center gap-1 font-semibold text-main-navy max-lg:text-sm hover:text-main-orange hover:gap-2 transition-all duration-300"
            >
              <RiHeart2Line size={24} className="max-lg:size-4 text-inherit" />
              <p>My Favorites</p>
              <IoMdArrowForward size={20} className="text-inherit ms-auto hidden lg:block" />
            </Link>
          </li>

          <li className="flex-shrink-0">
            <Link
              href="/user/cart"
              className="flex items-center gap-1 font-semibold text-main-navy max-lg:text-sm hover:text-main-orange hover:gap-2 transition-all duration-300"
            >
              <PiShoppingBagOpen size={24} className="max-lg:size-4 text-inherit" />
              <p>My Carts</p>
              <IoMdArrowForward size={20} className="text-inherit ms-auto hidden lg:block" />
            </Link>
          </li>

          <li className="flex-shrink-0">
            <Link
              href="/user/points"
              className="flex items-center gap-1 font-semibold text-main-navy max-lg:text-sm hover:text-main-orange hover:gap-2 transition-all duration-300"
            >
              <VscActivateBreakpoints size={24} className="max-lg:size-4 text-inherit" />
              <p>My Points</p>
              <IoMdArrowForward size={20} className="text-inherit ms-auto hidden lg:block" />
            </Link>
          </li>
        </ul>

      </div>
      {/* app */}
      <div className='bg-main-light-navy  rounded-[40px] text-center relative max-lg:hidden'>
        <Image src="/user/b.svg" alt="hero-shadow" width={100} height={100} className="absolute  bottom-0 start:-0 " />
        <Image src="/user/s.svg" alt="hero-shadow" width={200} height={100} className="absolute  bottom-0 start:-0 " />

        <div className='px-8 py-12  space-y-6'>
          <h3 className='text-xl font-bold  text-white capitalize'>Download app</h3>
          <p className='text-sm font-bold text-main-navy'>Download the app to start watching now.</p>
          {/* google store and app store */}
          <div className='flex flex-col items-center gap-2 max-lg:justify-center'>
            <a href="#" className="  bg-black px-4 py-2 text-white rounded-full text-sm font-semibold flex w-fit items-center gap-4 hover:gap-6 transition-all duration-300">
              <FaApple size={30} />
              <div>
                <p className='text-xs font-normal'>download on The</p>
                <p>Apple Store</p>
              </div>

            </a>
            <a href="#" className="  bg-main-light-orange px-4 py-2 text-white rounded-full text-sm font-semibold flex w-fit items-center gap-4 hover:gap-6 transition-all duration-300">
              <FaGooglePlay size={30} />
              <div>
                <p className='text-xs font-normal'>download on The</p>
                <p>Google Play</p>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserSidebar
