import React from 'react'
import { FaShareAlt } from "react-icons/fa";
import { TbCertificate } from 'react-icons/tb';
import { Button } from '../ui/button';
import { FaFileDownload } from "react-icons/fa";

const CertificateCard = () => {
  return (
    <div className='bg-main-light-navy p-6 rounded-xl space-y-4'>
      {/* completed and share */}
      <div className='flex items-center justify-between'>
        <p className='bg-white p-2 text-sm font-semibold rounded-full text-main-navy w-fit'>
          Completed
        </p>
        <button>
          <FaShareAlt size={20} className='text-main-navy  hover:text-main-orange transition-all duration-300 ' />
        </button>
      </div>
      {/* img and download */}
      <div className='flex items-center justify-between max-md:flex-col max-md:gap-4'>
        {/* image and content */}
        <div className='flex items-center gap-2 '>
          {/* icon */}
          <div className='size-14 bg-main-navy rounded-full flex items-center justify-center'>
            <TbCertificate size={24} className='text-white' />
          </div>
          {/* content */}
          <div>
            <h3 className='text-lg font-bold text-main-navy'>Human Anatomy Basic</h3>
            {/* info */}
            <div className='flex items-center gap-2 text-main-gray'>
              <p className='text-sm  font-semibold'>July 22, 2025</p>
              <div className='size-1 bg-white rounded-full'></div>
              <p className='text-sm  font-semibold'>6 hours</p>
            </div>
          </div>
        </div>
        {/* download */}
        <Button className={"text-main-orange text-xs font-semibold flex items-center gap-1 bg-white hover:bg-main-orange hover:text-white transition-all duration-300  rounded-full"} >
          Download Certificate PDF
          <FaFileDownload size={16} className='text-main-navy' />
        </Button>
      </div>

    </div>
  )
}

export default CertificateCard
