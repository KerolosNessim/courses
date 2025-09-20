import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import NoLessons from '@/components/user/no-lesson'
const UserLessonsPage = () => {
  return (
    <div className='lg:space-y-4 space-y-2 h-full'>
      {/* title */}
      <div>
        <h2 className='lg:text-2xl md:text-xl  font-bold text-main-orange '>my Private lessons</h2>
        <p className=' lg:text-sm text-xs text-main-navy font-semibold mt-2'>Here you will find all your individual educational sessions with the doctor, with details of appointments and progress.</p>
      </div>
      {/* tabs */}
      <div className='bg-white p-4  rounded-xl lg:rounded-3xl '>

        <Tabs defaultValue="soon" className="w-full space-y-4">
          <TabsList className={" w-full justify-start bg-transparent  rounded-none border-b-2 p-0"}>
            <TabsTrigger value="soon" >Coming soon</TabsTrigger>
            <TabsTrigger value="complete" >Complete</TabsTrigger>
          </TabsList>
          <TabsContent value="complete" className={"space-y-2"}>
            <div className='min-h-[70vh] flex items-center justify-center'>
              <NoLessons />
            </div>
          </TabsContent>
          <TabsContent value="soon">
            <div className='min-h-[70vh] flex items-center justify-center'>
              <NoLessons />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default UserLessonsPage
