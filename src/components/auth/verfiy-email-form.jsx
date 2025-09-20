"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { postData } from "@/lib/fetch-methods"
import { setToken } from "@/services"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image'
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { set, useForm } from "react-hook-form"
import { FaCheckCircle, FaSpinner } from "react-icons/fa"
import { IoMdArrowRoundForward } from "react-icons/io"
import { toast } from "sonner"
import { z } from "zod"
import CustomAlert from "../shared/custom-alert"
import { tr } from "motion/react-client"
import { useRouter } from "@/i18n/navigation"
// schema
const formSchema = z.object({
  code: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
})

const VerfiyEmailForm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [isResending, setIsResending] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  })

  const { formState: { isSubmitting } } = form
  // submit function 
  async function onSubmit(data) {
    const values = {
      email,
      otp: data.code
    }
    const response = await postData({
      url: "/auth/verify-otp",
      data: values,
      isFormData: false
    })
    console.log(response);
    
    if (response.code === 200) {
      setToken(response?.data?.data?.access_token)
      setOpen(true)
      setTimeout(() => {
        router.push("/")
        setOpen(false)
      }, 2000);
    }
    else {
      toast.error("something went wrong please try again")
    }

  }

  // resend function
  async function handleResendOtp() {
    try {
      setIsResending(true)
      const response = await postData({
        url: "/auth/resend-otp",
        data: { email },
        isFormData: false
      })
      console.log(response)
      if (response.code === 200) {
        toast.success("OTP has been resent to your email.")
      } else {
        toast.error("Failed to resend OTP, try again later.")
      }
    } catch (error) {
      toast.error("Something went wrong.")
    } finally {
      setIsResending(false)
    }
  }
  return (
    <>
    
    <div className="w-full">
      {/* logo */}
      <Image src="/auth/verfiy.svg" alt="logo" width={65} height={65} className='block mx-auto mb-8' />
      {/* info  */}
      <div className='space-y-4 text-center'>
        {/* title */}
        <h3 className='text-2xl font-semibold text-main-orange text-center'>Email verification</h3>
        <p className='text-xs '>Enter the code sent to your Email.</p>
      </div>
      {/* form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-10 space-y-6 ">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className={"w-full"}>
                <FormControl>
                  <InputOTP maxLength={4} {...field} className={"w-full"}>
                    <InputOTPGroup className={"w-full"}>
                      {[...Array(4)].map((_, i) => (
                        <InputOTPSlot
                          key={i}
                          index={i}
                          className={`w-1/4 border-b-2  transition-colors 
                        ${field.value?.[i] ? "border-main-orange" : "border-gray-300"}`}
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />


          {/* resend */}
          <div className='text-xs text-center flex items-center justify-center '>
            <p className=' font-medium'>Didn't receive the code? </p>              <button
              type="button"
              onClick={handleResendOtp}
              disabled={isResending}
              className="font-bold text-main-navy hover:text-main-orange hover:underline flex items-center gap-1 justify-center"
            >

              {isResending ? (
                <p className="animate-pulse">
                  Sending...
                </p>
              ) : (
                "Resend the code"
              )}
            </button>
          </div>

          <Button disabled={isSubmitting} type="submit" className="group min-w-full h-15 px-5  bg-main-light-navy  text-main-navy rounded-full text-sm font-semibold flex  items-center justify-between hover:bg-main-light-navy">
            verify
            <span className="size-10 bg-main-navy rounded-full text-main-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
              {isSubmitting ? <FaSpinner size={16} className="animate-spin" /> : <IoMdArrowRoundForward size={16} />}
            </span>
          </Button>



        </form>
      </Form>
      </div>
      <CustomAlert
        open={open}
        onOpenChange={setOpen}
        icon={<FaCheckCircle className="text-main-orange" />}
        title="Your account has been created successfully."
        description="success"
      />
    </>
  )
}

export default VerfiyEmailForm
