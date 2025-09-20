import { TbCertificate } from 'react-icons/tb'

const NoCertificates = () => {
  return (
    <div className='text-center space-y-4'>
      {/* image */}
      <TbCertificate size={24} className="lg:size-20 size-12  mx-auto text-main-navy" />
      {/* <Image src="/shared/courses.svg" alt="no-courses" width={100} height={100} className='lg:size-16 size-10 object-cover mx-auto ' /> */}
      <h3 className='lg:text-lg font-bold text-main-navy'>You Haven’t Earned Any Certificates Yet !</h3>
      <p className='text-xs font-medium text-main-navy'>Earn your first certificate by completing a course!</p>
    </div>
  )
}

export default NoCertificates
