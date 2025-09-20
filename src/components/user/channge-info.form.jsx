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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDownIcon } from "lucide-react"
import { z } from "zod"
import { Checkbox } from "../ui/checkbox"
import PhoneInputWithCountry from "../shared/PhoneInputWithCountry"
import { GoArrowRight } from "react-icons/go";


// schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().min(1, { message: "Phone is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  specialty: z.string().nonempty({ message: "Specialty is required" }),
  degree: z.string().nonempty({ message: "Degree is required" }),
})
const ChangeInfoForm = () => {
  const [showPassword, setShowPassword] = useState(false)

    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        specialty:"",
        degree: "",
      },
    })
  
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="w-full bg-white rounded-xl lg:rounded-[40px] lg:p-8 p-4 ">
      
      <div className='space-y-4'>
        {/* title */}
        <div className='text-center space-y-2'>
          <h3 className='text-xl font-semibold text-main-orange '>information</h3>
          <p className='text-xs text-main-navy font-medium'>Welcome back, please enter your details</p>
        </div>
      </div>
      {/* form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6  space-y-6">
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
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
            <FormField
              control={form.control}
              name="specialty"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>Specialty  <span className="text-red-500">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger icon={<div className=" size-6 bg-main-navy rounded-full flex items-center justify-center  group-data-[state=open]:bg-main-orange group-data-[state=open]:rotate-180">
                        <ChevronDownIcon className="size-3 text-white" />
                      </div>
                      } className={"group w-full !h-14 rounded-full focus-visible:ring-0 focus-visible:border-0"}>
                        <SelectValue placeholder="Enter your specialty here" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className={" rounded-2xl"}>
                      {[
                        "Medicine",
                        "Pharmacy",
                        "Nursing",
                        "Anesthesia",
                        "Physiotherapy",
                        "Respiratory Care",
                        "Other",
                      ].map((item) => (
                        <SelectItem key={item} value={item} className={"capitalize text-main-navy p-3"}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="degree"
              render={({ field }) => (
                <FormItem className={"relative"}>
                  <FormLabel className={"translate-y-4 w-fit ms-6 bg-white px-1 text-main-navy"}>Academic degree   <span className="text-red-500">*</span></FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger icon={<div className="size-6 bg-main-navy rounded-full flex items-center justify-center group-data-[state=open]:bg-main-orange group-data-[state=open]:rotate-180">
                        <ChevronDownIcon className="size-3 text-white" />
                      </div>
                      } className={"group w-full !h-14 rounded-full focus-visible:ring-0 focus-visible:border-0"}>
                        <SelectValue placeholder="Enter Academic degree here" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className={" rounded-2xl "}>
                      {
                        ["Bachelor’s degree", "Master’s degree", "PhD", "other"].map((item, index) => (
                          <SelectItem className={"capitalize text-main-navy p-3"} key={index} value={item}>{item}</SelectItem>
                        ))
                      }
                    </SelectContent>

                  </Select>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
          </div>


          <Button type="submit" className="group w-fit mx-auto h-12 px-8  bg-main-light-navy  text-main-navy rounded-full text-sm font-semibold flex  items-center gap-6 hover:bg-main-light-navy">
            Sign up
            <GoArrowRight size={20}  />

          </Button>




        </form>
      </Form>
    </div>
  )
}

export default ChangeInfoForm
