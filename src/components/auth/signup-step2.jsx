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
import { email, z } from "zod"
import { Checkbox } from "../ui/checkbox"
import { IoMdArrowRoundForward } from "react-icons/io"
import { div } from "motion/react-client"
import { LiaUserSolid } from "react-icons/lia"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDownIcon } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { FaX } from "react-icons/fa6"
import { degrees, specialties } from "@/data/data"
import { postData } from "@/lib/fetch-methods"
import { useSearchParams } from "next/navigation"
import { FaSpinner } from "react-icons/fa"


// schema
const formSchema = z.object({
  specialty: z.string().nonempty({ message: "Specialty is required" }),
  degree: z.string().nonempty({ message: "Degree is required" }),
})

const SignupStep2 = ({ data }) => {
  const searchParams = useSearchParams()
  const email = searchParams.get("email")
  const [openDialog, setOpenDialog] = useState(false)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      specialty: "",
      degree: "",
    },
  })
  const isFilled = form.watch("specialty") && form.watch("degree");

  const { formState: { isSubmitting } } = form;
  // submit function 
  async function onSubmit(values) {
    const payload = {
      email, // من الـ query
      specialties: [values.specialty],
      academic_degrees: [values.degree]
    }

    console.log(payload)
    const response = await postData({
      url: "/auth/academic-info",
      data: payload,
      isFormData: false
    })
    if (response.code === 200) {
      setOpenDialog(true)
    }
    else {
      toast.error("something went wrong please try again")
    }
  }
  return (
    <div className="w-full">
      {/* info  */}
      <div className='space-y-8'>
        {/* icon */}
        <div className='mx-auto size-16 rounded-full bg-main-orange text-white flex items-center justify-center'>
          <LiaUserSolid size={24} className='text-inherit' />
        </div>
        {/* title */}
        <div className='text-center space-y-2'>
          <h3 className='text-xl font-semibold text-main-navy text-center'>Academic & Medical <br /> Information</h3>
          <p className='text-xs '>This helps us recommend the most relevant courses for you</p>
        </div>
      </div>
      {/* form */}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6  space-y-6">
          <div className='space-y-1.5'>
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
                      {specialties.map((item, index) => (
                        <SelectItem key={item.id} value={String(item.id)} className={"capitalize text-main-navy p-3"}>
                          {item.name}
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
                        degrees.map((item) => (
                          <SelectItem className={"capitalize text-main-navy p-3"} key={item.id} value={String(item.id)}>{item.name}</SelectItem>
                        ))
                      }
                    </SelectContent>

                  </Select>
                  <FormMessage className={"absolute text-red-500 text-xs mt-1 start-2 top-[100%]"} />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={isSubmitting}
            type="submit"
            className={`group w-full h-15 px-5 rounded-full text-sm font-semibold flex items-center justify-between 
    ${isFilled
                ? "bg-main-orange text-white hover:bg-main-orange"
                : "bg-main-navy text-white hover:bg-main-navy"}`}
          >
            Save Information
            <span className={`size-10 rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-all duration-300 bg-white
    ${isFilled ? " text-main-orange" : "text-main-navy"}`}>
              {
                isSubmitting ? <FaSpinner size={16} className="animate-spin" /> :
                  <IoMdArrowRoundForward size={16} />
              }
            </span>
          </Button>
        </form>
      </Form>
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent className={"lg:w-[50%] w-full lg:px-16 lg:py-6 lg:rounded-[50px]"}>
          <AlertDialogHeader >
            <div className="pb-4 border-b flex items-center justify-between">
              <AlertDialogTitle className={"text-sm font-semibold "}>Terms of the pledge</AlertDialogTitle>
              <AlertDialogCancel className={"border-0 shadow-none hover:shadow-none hover:bg-transparent hover:text-main-orange"}><FaX size={20} /></AlertDialogCancel>
            </div>
            <AlertDialogDescription asChild>
              <div className="space-y-4">
                <h3 className="text-main-orange text-xl font-bold">1.Commitment to Seriousness</h3>
                <p className="font-semibold text-black leading-10">
                  I pledge to follow the medical courses with full seriousness, respect schedules, and use the provided materials responsibly to gain maximum benefit from the instructor’s expertise.
                </p>

                <h3 className="text-main-orange text-xl font-bold">2.Respect for Ownership</h3>
                <p className="font-semibold text-black leading-10">
                  I pledge not to copy, reproduce, or distribute any course materials in any form, respecting intellectual property rights and the effort invested in preparing the lessons.
                </p>

                <h3 className="text-main-orange text-xl font-bold">3.Information Confidentiality</h3>
                <p className="font-semibold text-black leading-10">
                  I pledge to maintain confidentiality of medical information and practical examples shared during lessons, and not to use them outside of the authorized educational purposes.
                </p>

                <div className="flex items-center gap-1">
                  <Checkbox
                    id="remember"
                    className="border-main-navy shadow-none rounded-[6px] data-[state=checked]:bg-green-400 data-[state=checked]:border-green-400"
                  />
                  <label
                    htmlFor="remember"
                    className="text-[10px] text-main-gray font-semibold"
                  >
                    By click <span className="text-main-navy">"I Agree to the Commitment",</span>
                    you agree <Link href="/terms-and-conditions" className="text-main-orange hover:underline">Terms & Conditions</Link>
                    & <Link href="/privacy-policy" className="text-main-orange hover:underline">Privacy Policy</Link>
                  </label>
                </div>
              </div>
            </AlertDialogDescription>

          </AlertDialogHeader>
          <AlertDialogFooter className={"flex flex-col gap-4"}>
            <Link href={`/verfiy-email?email=${encodeURIComponent(email)}`} className="group w-fit mx-auto h-15 px-5  bg-main-navy  text-white rounded-full text-sm font-semibold flex  items-center gap-4 hover:bg-main-navy hover:text-white">
              I Agree to the Commitment
              <span className="size-10 bg-white rounded-full text-main-navy flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
                <IoMdArrowRoundForward size={16} />
              </span>
            </Link>

          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default SignupStep2
