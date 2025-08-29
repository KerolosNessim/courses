import * as motion from "motion/react-client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RiArrowDownSLine } from "react-icons/ri"
import { Link } from "@/i18n/navigation"
import { IoMdArrowRoundForward } from "react-icons/io"

const Faq = () => {
  return (
    <section className='bg-main-light-orange py-20'>
      <div className='container space-y-10'>
        {/* title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center text-white space-y-4'>
          <h2 className=' md:text-3xl text-2xl font-bold '>Answers to Your Most Common Questions</h2>
          <p className='lg:max-w-[40%] mx-auto  lg:leading-8 text-sm max-lg:text-xs '>Find answers to the most frequently asked questions about the courses and learning process.</p>
        </motion.div>

        {/* accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }} className="lg:w-[75%] mx-auto  ">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue="item-3"
          >
            {[...Array(6)].map((_, index) => (

              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="bg-white lg:px-10 md:px-8 px-4 rounded-full data-[state=open]:rounded-[50px] data-[state=open]:py-6 "
              >
                <AccordionTrigger
                  className="items-center group"
                  icon={
                    <div className="lg:size-12 size-8 flex-shrink-0 bg-main-orange rounded-full flex items-center justify-center 
                      transition-transform duration-300 
                      group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-75 ">
                      <RiArrowDownSLine size={20} className="text-white" />
                    </div>
                  }
                >
                  <p className="text-main-navy flex items-center gap-2 font-semibold  
                  before:[content:'+'] before:text-4xl before:font-extralight
                  group-data-[state=open]:before:[content:'-'] group-data-[state=open]:lg:text-lg  transition-all duration-300">
                    Can I access the courses from my phone?
                  </p>
                </AccordionTrigger>

                <AccordionContent className="lg:mt-10">
                  <p className="text-main-orange lg:text-2xl font-semibold lg:leading-10">You can choose the course you want, click “Enroll Now,” and complete the payment process.</p>
                </AccordionContent>
              </AccordionItem>
            ))}

          </Accordion>
        </motion.div>
        {/* link  */}
        {/* courses link */}
        <Link href="/" className="group mx-auto bg-white py-1 ps-4 pe-1 text-main-light-orange rounded-full text-sm font-semibold flex w-fit items-center gap-4">
          Show more
          <span className="size-10 bg-main-light-orange rounded-full text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transation-all duration-300">
            <IoMdArrowRoundForward size={16} />
          </span>
        </Link>

      </div>
    </section>
  )
}

export default Faq
