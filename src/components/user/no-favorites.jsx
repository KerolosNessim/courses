import { RiHeart2Line } from 'react-icons/ri'

const NoFavorites = () => {
  return (
    <div className='text-center space-y-4'>
      {/* image */}
      <RiHeart2Line size={24} className="lg:size-20 size-12  mx-auto text-main-navy" />
      {/* <Image src="/shared/courses.svg" alt="no-courses" width={100} height={100} className='lg:size-16 size-10 object-cover mx-auto ' /> */}
      <h3 className='lg:text-lg font-bold text-main-navy'>You have not added any course to your favorites yet.</h3>
      <p className='text-xs font-medium text-main-navy'>Browse courses and add your favorites!</p>
    </div>
  )
}

export default NoFavorites