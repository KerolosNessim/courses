import { PiShoppingBagOpen } from 'react-icons/pi'

const NoCart = () => {
  return (
    <div className='text-center space-y-4'>
      {/* image */}
      <PiShoppingBagOpen size={24} className="lg:size-20 size-12  mx-auto text-main-navy" />
      {/* <Image src="/shared/courses.svg" alt="no-courses" width={100} height={100} className='lg:size-16 size-10 object-cover mx-auto ' /> */}
      <h3 className='lg:text-lg font-bold text-main-navy'>Your Cart is empty.</h3>
      <p className='text-xs font-medium text-main-navy'>Browse courses and add as many as you like.</p>
    </div>
  )
}

export default NoCart
