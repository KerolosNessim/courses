import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserCourseCard from '@/components/user/user-course-card'
import NoCourses from '@/components/user/no-courses'
const UserCoursesPage = () => {
  return (
    <div className='lg:space-y-4 space-y-2 h-full'>
      {/* title */}
      <div>
        <h2 className='lg:text-2xl md:text-xl  font-bold text-main-orange '>My Courses</h2>
        <p className=' lg:text-sm text-xs text-main-navy font-semibold mt-2'>View all the courses you've enrolled in and easily track your progress.</p>
      </div>
      {/* tabs */}
      <div className='bg-white p-4  rounded-xl lg:rounded-3xl '>

        <Tabs defaultValue="progrees" className="w-full space-y-4">
          <TabsList className={" w-full justify-start bg-transparent  rounded-none border-b-2 p-0"}>
            <TabsTrigger value="progrees" >In progress</TabsTrigger>
            <TabsTrigger value="complete" >Complete</TabsTrigger>
            <TabsTrigger value="soon" >Coming soon</TabsTrigger>
          </TabsList>
          <TabsContent value="progrees" className={"space-y-2"}>
            {[...Array(4)].map((_, index) => (<UserCourseCard key={index} />))}
          </TabsContent>
          <TabsContent value="complete" className={"space-y-2"}>
            {[...Array(4)].map((_, index) => (<UserCourseCard key={index} />))}</TabsContent>
          <TabsContent value="soon">
            <div className='min-h-[70vh] flex items-center justify-center'>
             <NoCourses />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default UserCoursesPage
