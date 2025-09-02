"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { LiaUserSolid } from 'react-icons/lia'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react"
import { Link } from "@/i18n/navigation"
import { Checkbox } from "../ui/checkbox"
import { IoMdArrowRoundForward } from "react-icons/io"
import { FcGoogle } from "react-icons/fc";



// schema
const formSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
})



const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // submit function 
  function onSubmit(data) {

  }
  return (
    <div className="w-full">
      {/* logo */}
      <Image src="/shared/logo.png" alt="logo" width={90} height={90} className='block mx-auto mb-8' />
      {/* info  */}
      <div className='space-y-4'>
        {/* icon */}
        <div className='mx-auto size-16 rounded-full bg-main-orange text-white flex items-center justify-center'>
          <LiaUserSolid size={24} className='text-inherit' />
        </div>
        {/* title */}
        <div className='text-center space-y-2'>
          <h3 className='text-xl font-semibold text-main-navy text-center'>Login to your account</h3>
          <p className='text-xs '>Welcome back, please enter your details</p>
        </div>
      </div>
      {/* form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-10 space-y-6">
          <div className='space-y-1.5'>
            {/* email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  <Image src="/auth/email.svg" alt="email" width={20} height={20} className='absolute top-1/2  end-5' />
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>Email address <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Email address here" {...field} className={"w-full h-14 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
                  </FormControl>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
            {/* password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  {
                    showPassword ?
                      <AiOutlineEyeInvisible size={20} onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2  end-5 text-main-navy' />
                      :
                      <AiOutlineEye size={20} onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2  end-5 text-main-navy' />
                  }
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>password <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input type={showPassword ? "text" : "password"} placeholder="Enter password here" {...field} className={"w-full h-14 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
                  </FormControl>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
          </div>
          {/* remeber me and forgot password */}
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Checkbox id="remember" className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-main-orange data-[state=checked]:border-main-orange' />
                <label htmlFor="remember" className="text-sm text-main-navy font-medium">remember me</label>
              </div>
              <div className="text-sm">
                <Link href="/forget-password" className="font-medium text-main-navy hover:text-main-orange hover:underline">Forgot password?</Link>
              </div>
            </div>
          </div>
          <Button type="submit" className="group w-full h-15 px-5  bg-main-orange  text-white rounded-full text-sm font-semibold flex  items-center justify-between hover:bg-main-orange">
            Log in
            <span className="size-10 bg-white rounded-full text-main-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
              <IoMdArrowRoundForward size={16} />
            </span>
          </Button>
          {/* or */}
          <div className="flex items-center justify-center gap-2 ">
            {/* left line */}
            <div className="w-20 h-[3px] bg-gradient-to-r from-transparent to-main-orange"></div>

            {/* text */}
            <p className=" font-semibold">or</p>

            {/* right line */}
            <div className="w-20 h-[3px] bg-gradient-to-l from-transparent to-main-orange"></div>
          </div>
          {/* google */}
          <Button type="button" className="group w-full h-12 px-5 bg-main-background   rounded-full text-sm text-black font-semibold flex  items-center justify-center gap-1 hover:bg-main-orange">
            <FcGoogle size={22} />
            <span>Continue with Google</span>
          </Button>
          {/* dont have an account */}
          <div className='text-center'>
            <p className='text-sm font-medium'>Don&apos;t have an account? <Link href="/sign-up" className="font-bold text-main-navy hover:text-main-orange hover:underline">Sign up</Link></p>
          </div>


        </form>
      </Form>

    </div>
  )
}

export default LoginForm
