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
import { Link, useRouter } from "@/i18n/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { IoMdArrowRoundForward } from "react-icons/io"
import { LiaUserSolid } from 'react-icons/lia'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import flags from "react-phone-number-input/flags"
import { z } from "zod"
import { Checkbox } from "../ui/checkbox"
import SignupStep2 from "./signup-step2"
import PhoneInputWithCountry from "../shared/PhoneInputWithCountry"
import { postData } from "@/lib/fetch-methods"
import { FaSpinner } from "react-icons/fa"
import { toast } from "sonner"


// schema
const formSchema = z.object({
  full_name: z.string().min(1, { message: "Name is required" }),
  phone_number: z.string().min(1, { message: "Phone is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(8, { message: "password must be at least 8 characters" }).nonempty({ message: "Password is required" }),
  password_confirmation: z.string().min(8, { message: "Confirm Password must be at least 8 characters" }).nonempty({ message: "Confirm Password is required" }),
}).refine((data) => data.password === data.password_confirmation, {
  message: "Passwords do not match",
  path: ["password_confirmation"],
})

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const router = useRouter()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      phone_number: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const { formState: { isSubmitting } } = form;

  // submit function 
  async function onSubmit(data) {
    console.log(data);

    const response = await postData({
      url: "/auth/register",
      data,
      isFormData: true
    })
    console.log(response);
    if (response.code === 201) {
      router.push(`/acadimic-info?email=${encodeURIComponent(data.email)}`)
    }
    if (response.code === 422) {
      toast.error("email or phone number already exists")
    }
  }


  return (
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
              name="full_name"
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
              name="phone_number"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  <Image src={"/auth/phone.svg"} alt="phone" width={20} height={20} className='absolute top-1/2  end-5 text-main-navy' />
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>phone number   <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <PhoneInputWithCountry field={field} />
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
              name="password_confirmation"
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

          <Button disabled={isSubmitting} type="submit" className="group w-full h-15 px-5  bg-main-orange  text-white rounded-full text-sm font-semibold flex  items-center justify-between hover:bg-main-orange">
            Sign up
            <span className="size-10 bg-white rounded-full text-main-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
              {isSubmitting
                ?
                <FaSpinner size={16} className='animate-spin' />
                :
                <IoMdArrowRoundForward size={16} />}
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




}

export default SignUpForm
