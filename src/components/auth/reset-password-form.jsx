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
import { useRouter } from "@/i18n/navigation"
import { postData } from "@/lib/fetch-methods"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image'
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaSpinner } from "react-icons/fa"
import { IoMdArrowRoundForward } from "react-icons/io"
import 'react-phone-number-input/style.css'
import { toast } from "sonner"
import { z } from "zod"

// schema
const formSchema = z.object({
  password: z.string().min(1, { message: "Password is required" }),
  confirmPassword: z.string().min(1, { message: "Confirm Password is required" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})

const ResetPasswordForm = () => {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")
  const otp = searchParams.get("code")
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  // submit function 
  async function onSubmit(data) {


    const values = {
      email,
      otp,
      new_password: data.password,
      new_password_confirmation: data.confirmPassword
    }
    const response = await postData({
      url: "/auth/reset-password",
      data: values,
      isFormData: false
    })
    console.log(response);
    
    if (response.code === 200) {
      toast.success("Password reset successfully")
      router.push("/login")
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
          <h3 className='text-2xl font-semibold text-main-orange text-center'>Reset Password!</h3>
          <p className='text-xs '>Choose a strong password to ensure security.</p>
        </div>
      </div>
      {/* form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6  space-y-6">
          <div className='space-y-1.5'>
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
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-orange"}>Set a New Password *</FormLabel>
                  <FormControl>
                    <Input type={showPassword ? "text" : "password"} placeholder="Enter your new password here" {...field} className={"w-full h-14 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
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
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-orange"}>Confirm New Password *</FormLabel>
                  <FormControl>
                    <Input type={showConfirmPassword ? "text" : "password"} placeholder="Enter the new password confirmation" {...field} className={"w-full h-14 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
                  </FormControl>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
          </div>


          <Button disabled={isSubmitting} type="submit" className="group w-full h-15 px-5  bg-main-light-orange  text-white rounded-full text-sm font-semibold flex  items-center justify-between hover:bg-main-light-orange">
            Save New Password
            <span className="size-10 bg-white rounded-full text-main-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
              {isSubmitting ? <FaSpinner size={16} className="animate-spin" /> :
                <IoMdArrowRoundForward size={16} />
              }
            </span>
          </Button>




        </form>
      </Form>
    </div>
  )
}

export default ResetPasswordForm
