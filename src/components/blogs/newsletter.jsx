"use client"
import React from 'react'
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
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'
import { Link } from "@/i18n/navigation"
import { IoMdArrowRoundForward } from "react-icons/io"

// schema
const formSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
})

const Newsletter = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  function onSubmit(data) {

  }
  return (
    <div className='relative py-12'>
      {/* shadow */}
      <Image src="/home/shadow-center.svg" alt="hero-shadow" width={600} height={600} className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Image src="/home/pulse-bg.svg" alt="hero-shadow" width={300} height={300} className="max-lg:hidden absolute -z-10 top-1/2 right-0 -translate-y-1/2" />
      <Image src="/home/pulse-e-bg.svg" alt="hero-shadow" width={300} height={300} className="max-lg:hidden absolute -z-10 top-1/2 left-0 -translate-y-1/2" />
      <div className='container space-y-4'>
        {/* badge */}
        <div className="mx-auto bg-main-navy p-2 text-white rounded-full text-xs font-semibold flex w-fit items-center gap-2 hover:gap-4 transition-all duration-300">
          <span className="px-2 py-1 text-main-navy bg-white rounded-full">
            <Image src="/shared/blog.svg" alt="why-us" width={50} height={50} className='size-4' />
          </span>
          <p>Blogs</p>
        </div>
        {/* title */}
        <div className='text-center space-y-4'>
          <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl text-main-orange lg:leading-20'>
            Our medical blog... where science begins <br className='max-md:hidden' /> & progress continues
          </h1>
          <p className='font-semibold md:text-sm text-xs lg:leading-8 lg:w-4xl lg:mx-auto'>Discover informative medical articles, practical tips, and the latest developments in the world of medicine to support your educational journey and enhance your professional experience step by step.</p>
        </div>
        {/* form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" lg:w-1/2 md:w-3/4 w-full mx-auto">
            <div className='space-y-1.5'>
              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className={"relative"}>
                    <Image src="/auth/email.svg" alt="email" width={25} height={25} className='absolute top-1/2 -translate-y-1/2 start-3' />
                    <FormControl>
                      <Input placeholder="Enter Email address here" {...field} className={"w-full h-15 bg-white border-[0.5px]  border-main-light-orange/20 rounded-md focus-visible:ring-main-light-orange focus-visible:border-main-orange ps-12"} />
                    </FormControl>
                    <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                    <Button type="submit" className=" ms-auto w-fit h-12 px-3  bg-main-orange  rounded-md text-xs font-semibold flex  hover:bg-main-light-orange absolute top-1/2 -translate-y-1/2 end-2">
                      Subscribe Now
                    </Button>
                  </FormItem>
                )}
              />
            </div>




          </form>
        </Form>
      </div>
    </div>
  )
}

export default Newsletter
