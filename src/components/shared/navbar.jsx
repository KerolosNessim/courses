
"use client"

import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from "react-icons/md"
import { HiMiniArrowRight } from "react-icons/hi2"
import LocaleSwitcher from './locale-switcher'
import AccountLinks from './account-links'
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from 'next-intl'
const Navbar = () => {
  const locale = useLocale()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => prev !== isScrolled ? isScrolled : prev);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50  ${scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      {/* sale  */}
      <div
        className='bg-linear-to-r from-main-light-orange to-main-orange text-white p-1'>
        <p className='text-center text-xs font-semibold'>Get 20% off your first course!</p>
      </div>
      <div className='container lg:py-6 py-4 flex items-center justify-between'>
        {/* logo */}
        <Link href="/" className='block'>
          <Image src="/shared/logo-nav.svg" alt="logo" width={200} height={200} />
        </Link>

        {/* Desktop Links */}
        <ul className='hidden lg:flex items-center gap-6'>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className='group focus-visible:outline-none flex items-center gap-1 text-main-navy data-[state=open]:text-main-orange text-sm font-semibold hover:text-main-orange transition-all duration-300'>
                <Image src="/shared/courses.svg" alt="icon" width={16} height={16} />
                <p>Courses</p>
                <MdKeyboardArrowDown size={16} className='group-data-[state=open]:rotate-180 transition-all duration-300' />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-60 p-8 bg-main-background rounded-[35px] shadow-none space-y-4 ">
                {["Medicine", "Pharmacy", "Nursing", "Respiorty Care", "Anesthetization"].map((item) => (
                  <DropdownMenuItem key={item} className="hover:bg-transparent">
                    <Link href="/courses" className='w-full flex items-center justify-between text-sm font-semibold text-main-navy hover:text-main-orange transition-all duration-300'>
                      {item}
                      <HiMiniArrowRight size={30} className="text-inhirit" />
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className='group focus-visible:outline-none flex items-center gap-1 text-main-navy data-[state=open]:text-main-orange text-sm font-semibold hover:text-main-orange transition-all duration-300'>
                <Image src="/shared/Specialties.svg" alt="icon" width={16} height={16} />
                <p>Private lessons</p>
                <MdKeyboardArrowDown size={16} className='group-data-[state=open]:rotate-180 transition-all duration-300' />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-60 p-8 bg-main-background rounded-[35px] shadow-none space-y-4 ">
                {["Medicine", "Pharmacy", "Nursing", "Respiorty Care", "Anesthetization"].map((item) => (
                  <DropdownMenuItem key={item} className="hover:bg-transparent">
                    <Link href="/private-lesson" className='w-full flex items-center justify-between text-sm font-semibold text-main-navy hover:text-main-orange transition-all duration-300'>
                      {item}
                      <HiMiniArrowRight size={30} className="text-inhirit" />
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>

          <li>
            <Link href="/about" className='flex items-center gap-1 hover:text-main-orange text-sm text-main-navy font-semibold transition-all duration-300'>
              <Image src="/shared/about-us.svg" alt="icon" width={16} height={16} />
              <p>About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/blogs" className='flex items-center gap-1 hover:text-main-orange text-sm text-main-navy font-semibold transition-all duration-300'>
              <Image src="/shared/blog.svg" alt="icon" width={16} height={16} />
              <p>Blog</p>
            </Link>
          </li>
          <li>
            <Link href="/contact" className='flex items-center gap-1 hover:text-main-orange text-sm text-main-navy font-semibold transition-all duration-300'>
              <Image src="/shared/contact.svg" alt="icon" width={16} height={16} />
              <p>Contact</p>
            </Link>
          </li>
        </ul>

        {/* Right side */}
        <div className='flex items-center gap-4'>
          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <LocaleSwitcher />
            <AccountLinks />
          </div>

          {/* Mobile Burger */}
          <div className="lg:hidden flex items-center gap-3">
            <LocaleSwitcher />
            <Sheet >
              <SheetTrigger>
                <Menu size={28} className="text-main-navy" />
              </SheetTrigger>
              <SheetContent side={locale === "en" ? "left" : "right"} className="bg-main-background p-6 ">
                <SheetHeader className={"space-y-6"}>
                  <SheetTitle></SheetTitle>
                  {/* mobile nav links */}
                  <div className="flex flex-col gap-4">
                    <Link href="/courses" className="font-semibold text-main-navy hover:text-main-orange">Courses</Link>
                    <Link href="/private-lesson" className="font-semibold text-main-navy hover:text-main-orange">Private lessons</Link>
                    <Link href="/about" className="font-semibold text-main-navy hover:text-main-orange">About Us</Link>
                    <Link href="/blogs" className="font-semibold text-main-navy hover:text-main-orange">Blog</Link>
                    <Link href="/contact" className="font-semibold text-main-navy hover:text-main-orange">Contact</Link>
                  </div>
                  {/* account links */}
                  <AccountLinks />
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
