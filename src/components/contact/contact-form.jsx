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
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'
import { Link } from "@/i18n/navigation"
import { IoMdArrowRoundForward } from "react-icons/io"

// schema
const formSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  name: z.string().min(1, { message: "Password is required" }),
  about: z.string().min(1, { message: "About message is required" }),
})

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      about: "",
    },
  })
  function onSubmit(data) {

  }
  return (
    <div className='w-full'>
      {/* info  */}
      <div className='space-y-4'>

        <div className=' space-y-2'>
          <h3 className='text-xl font-semibold text-main-orange '>DIRECT CONTACT:</h3>
          <a href="#" className='text-main-navy font-semibold flex items-center gap-2'><Image src="/auth/email.svg" alt="email" width={20} height={20} /> support@info.com</a>
        </div>
      </div>

      {/* form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" mt-10 space-y-6">
          <div className='space-y-1.5'>
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>Name  <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Name here" {...field} className={"w-full h-14 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
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
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>Email  <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Email address here" {...field} className={"w-full h-14 rounded-full focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
                  </FormControl>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
            {/* about */}

            {/* name */}
            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>About  <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter message here" {...field} className={"w-full p-6 min-h-56 rounded-[40px] focus-visible:ring-main-light-orange focus-visible:border-main-orange"} />
                  </FormControl>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="ms-auto w-fit h-14 px-5  bg-main-light-navy  text-main-navy rounded-full text-sm font-semibold flex  items-center gap-8 hover:bg-main-light-navy hover:gap-10">
            Send
            <IoMdArrowRoundForward size={16} />

          </Button>



        </form>
      </Form>
    </div>
  )
}

export default ContactForm
