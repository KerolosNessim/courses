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
import { zodResolver } from "@hookform/resolvers/zod"
import Image from 'next/image'
import { useForm } from "react-hook-form"
import { IoMdArrowRoundForward } from "react-icons/io"
import { z } from "zod"
// schema
const formSchema = z.object({
  code: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
})

const VerfiyEmailForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
    },
  })

  // submit function 
  function onSubmit(data) {

  }
  return (
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
          <div className='text-center'>
            <p className='text-xs font-medium'>Didn't receive the code? <button className="font-bold text-main-navy hover:text-main-orange hover:underline">Resend the code</button></p>
          </div>

          <Button type="submit" className="group min-w-full h-15 px-5  bg-main-light-navy  text-main-navy rounded-full text-sm font-semibold flex  items-center justify-between hover:bg-main-light-navy">
            verify
            <span className="size-10 bg-main-navy rounded-full text-main-orange flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
              <IoMdArrowRoundForward size={16} />
            </span>
          </Button>



        </form>
      </Form>
    </div>
  )
}

export default VerfiyEmailForm
