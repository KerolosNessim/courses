import FavoriteCard from '@/components/user/favorites-card'
const UserFavoritesPage = () => {
  return (
    <div className='lg:space-y-4 space-y-2 h-full'>
      {/* title */}
      <div>
        <h2 className='lg:text-2xl md:text-xl  font-bold text-main-orange '>My Favorites</h2>
        <p className=' lg:text-sm text-xs text-main-navy font-semibold mt-2'>Here you will find all the courses you have added to your favorites list for easy access and registration later.</p>
      </div>
      {/* tabs */}
      <div className='bg-white p-4  rounded-xl lg:rounded-3xl '>
        <div className='space-y-4'>

          {Array(4).fill(0).map((item, index) => <FavoriteCard key={index}/>) }
        </div>
        {/* <div className='min-h-[70vh] flex items-center justify-center'>
          <NoFavorites />
        </div> */}

      </div>
    </div>
  )
}

export default UserFavoritesPage
