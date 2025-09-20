import CertificateCard from '@/components/user/cirtificate-card'
import NoCertificates from '@/components/user/no-certificates'
const UserCertificatePage = () => {
  return (
    <div className='lg:space-y-4 space-y-2 h-full'>
      {/* title */}
      <div>
        <h2 className='lg:text-2xl md:text-xl  font-bold text-main-orange '>my Certificates</h2>
        <p className=' lg:text-sm text-xs text-main-navy font-semibold mt-2'>Here you will find all your individual educational certificates </p>
      </div>
      {/* tabs */}
      <div className='bg-white p-4  rounded-xl lg:rounded-3xl '>
        <div className='space-y-4'>
          {Array(3).fill(0).map((item, index) => <CertificateCard key={index}/>) }
        </div>
        {/* <div className='min-h-[70vh] flex items-center justify-center'>
          <NoCertificates />
        </div> */}

      </div>
    </div>
  )
}

export default UserCertificatePage
