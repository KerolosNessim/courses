"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { email, z } from "zod"
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
import { Link, useRouter } from "@/i18n/navigation"
import { Checkbox } from "../ui/checkbox"
import { IoMdArrowRoundForward } from "react-icons/io"
import { FcGoogle } from "react-icons/fc";
import { postData } from "@/lib/fetch-methods"
import { FaSpinner } from "react-icons/fa"
import { tr } from "motion/react-client"



// schema
const formSchema = z.object({
  email: z.string().email({ message: "Email is required" }),

})

const ForgetPasswordForm = () => {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  // submit function 
  async function onSubmit(data) {
    
    const response = await postData({
      url: "/auth/forget-password",
      data,
      isFormData: false
    })
    if (response.code === 200) {
      toast.success("OTP sent successfully")
      router.push(`/verfiy-otp?email=${encodeURIComponent(data.email)}`)
    }
    else {
      toast.error("something went wrong please try again")
    }
  }

  const { formState: { isSubmitting } } = form
  return (
    <div className="w-full">
      {/* info  */}
      <div className='space-y-4'>
        {/* image */}
        <Image src="/auth/forget-password.svg" alt="logo" width={90} height={90} className='block mx-auto mb-8' />
        {/* title */}
        <div className='text-center space-y-2'>
          <h3 className='text-2xl font-semibold text-main-orange text-center'>Forgot your password?</h3>
          <p className='text-xs '>Enter the e-mail linked to your account</p>
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
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-orange"}>Email address *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Email address here" {...field} className={"w-full h-14 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
                  </FormControl>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />

          </div>

          <Button disabled={isSubmitting} type="submit" className="group w-full h-15 px-5  bg-main-orange  text-white rounded-full text-sm font-semibold flex  items-center justify-between hover:bg-main-orange">
            Get the code now

            <span className="size-10 bg-white rounded-full text-main-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
              {
                isSubmitting ? <FaSpinner size={16} className='animate-spin' /> : <IoMdArrowRoundForward size={16} />
              }
            </span>
          </Button>
        </form>
      </Form>

    </div>
  )
}

export default ForgetPasswordForm
