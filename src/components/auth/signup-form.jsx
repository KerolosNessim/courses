"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from "@/i18n/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { IoMdArrowRoundForward } from "react-icons/io"
import { LiaUserSolid } from 'react-icons/lia'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { z } from "zod"
import { Checkbox } from "../ui/checkbox"
import SignupStep2 from "./signup-step2"


// schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [steps, setSteps] = useState(1)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  // submit function 
  function onSubmit(data) {
    console.log(data);
    setSteps(2)
  }


  if (steps === 1) return (
    <div className="w-full">
      {/* logo */}
      <Image src="/shared/logo.png" alt="logo" width={90} height={90} className='block mx-auto mb-8' />
      {/* info  */}
      <div className='space-y-4'>
        {/* title */}
        <div className='text-center space-y-2'>
          <h3 className='text-xl font-semibold text-main-navy text-center'>Create your account</h3>
          <p className='text-xs '>Welcome back, please enter your details</p>
        </div>
      </div>
      {/* form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6  space-y-6">
          <div className='space-y-1.5'>
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  <LiaUserSolid size={26} className='absolute top-1/2  end-5 text-main-navy' />
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>full name  <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter full name here" {...field} className={"w-full h-14 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
                  </FormControl>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
            {/* phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  <Image src={"/auth/phone.svg"} alt="phone" width={20} height={20} className='absolute top-1/2  end-5 text-main-navy' />
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>phone number   <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="SA"
                      international
                      countryCallingCodeEditable={false}
                      placeholder="51 400 78 001"
                      {...field}
                      className={"px-5 w-full shadow-xs h-14 border-1 border-gray-300 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange placeholder:text-xs"} />
                  </FormControl>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
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
            {/* confirm password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  {
                    showConfirmPassword ?
                      <AiOutlineEyeInvisible size={20} onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute top-1/2  end-5 text-main-navy' />
                      :
                      <AiOutlineEye size={20} onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='absolute top-1/2  end-5 text-main-navy' />
                  }
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>Confirm password  <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input type={showConfirmPassword ? "text" : "password"} placeholder="Enter Confirm password here" {...field} className={"w-full h-14 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
                  </FormControl>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
          </div>
          {/* remeber me and forgot password */}
          <div className="flex items-center gap-1">
            <Checkbox id="remember" className='border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400' />
            <label htmlFor="remember" className="text-[10px] text-main-gray font-semibold">By click <span className="text-main-navy ">"Sgin Up"</span>you agree <Link href="/terms-and-conditions" className="text-main-orange hover:underline">Terms & Conditions</Link> & <Link href="/privacy-policy" className="text-main-orange hover:underline">Privacy Policy</Link> </label>
          </div>

          <Button type="submit" className="group w-full h-15 px-5  bg-main-orange  text-white rounded-full text-sm font-semibold flex  items-center justify-between hover:bg-main-orange">
            Sign up
            <span className="size-10 bg-white rounded-full text-main-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
              <IoMdArrowRoundForward size={16} />
            </span>
          </Button>

          {/* dont have an account */}
          <div className='text-center'>
            <p className='text-sm font-medium'> have an account! <Link href="/login" className="font-bold text-main-navy hover:text-main-orange hover:underline">Log in</Link></p>
          </div>


        </form>
      </Form>
    </div>
  )
  if (steps === 2) return (<SignupStep2 data={form.getValues()} setSteps={setSteps} />)



}

export default SignUpForm
