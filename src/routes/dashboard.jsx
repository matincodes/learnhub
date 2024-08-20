import { createFileRoute } from '@tanstack/react-router'
import DashboardLayout from '../components/dashboard/dashboard_layout/dashboard_layout'
import Inventory from '../components/dashboard/widgets/inventory'
import RecentCourseCard from '../components/dashboard/widgets/recent_course_card'

export const Route = createFileRoute('/dashboard')({
  component: () => {
    const recentCourses = [
      { title: 'UI/UX Design Principles', image: '/assets/recent1.png' },
      {
        title: 'Mobile App Development with React-Native',
        image: '/assets/recent2.png'
      },
      {
        title: 'Javascript: The Complete Guide for Developers',
        image: '/assets/recent3.png'
      },
      {
        title: 'Frontend Web Development with MERN Stack',
        image: '/assets/recent4.png'
      }
    ]

    return (
      <DashboardLayout>
        <div className="w-full space-y-6 sm:space-y-10">
          <div className="grid w-full grid-cols-3 gap-4 sm:gap-8 lg:gap-20">
            <Inventory
              title={'Total Courses'}
              metrics={7}
              image="/assets/courses.png"
            />
            <Inventory
              title={'Completed Courses'}
              metrics={
                <p>
                  <span>5</span>
                  <span className="text-sm text-gray-500 sm:text-base">/7</span>
                </p>
              }
              image={'/assets/fi-br-list-check.png'}
            />
            <Inventory
              title={'Productivity'}
              metrics={'76%'}
              image={'/assets/fi-br-bulb.png'}
              analytics={
                <div className="flex items-center gap-x-1 text-sm font-semibold sm:text-base">
                  <p>+ 2.345</p>
                  <img src="/assets/fi-br-chat-arrow-grow.png" alt="" />
                </div>
              }
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-y-4 rounded-lg bg-white p-4 sm:p-6">
            <h2 className="text-base font-semibold sm:text-xl">
              Recent Courses
            </h2>
            <div className="w-full">
              <div className="no-scrollbar w-full overflow-x-auto">
                <div className="w-full min-w-max">
                  <div className="flex w-full items-start gap-x-5 sm:gap-x-8">
                    {recentCourses.map((item, index) => (
                      <RecentCourseCard key={index} {...item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col-reverse items-start gap-6 sm:flex-row">
            <div className="grid w-full bg-white rounded-lg grid-cols-1 gap-y-4 p-4 sm:w-[65%] sm:p-6">
              <h2 className="text-base font-semibold sm:text-xl">
                Leader Board
              </h2>
              <div className="w-full">
                <div className="grid w-full grid-cols-6 border-b px-2 text-[9px] sm:text-[13px] font-semibold uppercase text-gray-500">
                  <p>Rank</p>
                  <p className="col-span-2">Name</p>
                  <p>Course</p>
                  <p>Hours</p>
                  <p>Point(XP)</p>
                </div>

                {[...Array(4)].map((_, index) => (
                  <div
                    key={_}
                    className="grid w-full items-center grid-cols-6 p-2 text-[9px] sm:text-[13px] font-semibold"
                  >
                    <div className="flex h-4 w-4 sm:h-8 sm:w-8 flex-col items-center justify-center rounded-lg bg-gray-100">
                      <p>{index + 1}</p>
                    </div>
                    <div className="col-span-2 flex items-center gap-x-2">
                      <img src="/assets/ellip.png" alt="" />
                      <p>Charlie Rawal</p>
                    </div>
                    <p className="text-center">53</p>
                    <p className="text-center">250</p>
                    <p className="text-center text-green-500">13,450</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid w-full bg-white rounded-lg grid-cols-1 gap-y-4 p-4 sm:w-[35%] sm:p-6">
              <h2 className="text-base font-semibold sm:text-xl">
                Upcoming Sessions
              </h2>

              <div className="flex w-full gap-y-3 flex-col items-start">
                {[1,2].map((_, index) => (
                   <div
                   key={index}
                   className="flex w-full items-start justify-start gap-x-4">
                   <div className="space-y-2">
                     <h2 className="text-sm font-semibold sm:text-base">
                       Meeting with Instructor
                     </h2>
                     <div className="flex  text-xs sm:text-sm items-center gap-x-3">
                       <div className="flex items-center gap-x-2">
                         <img src="/assets/googlemeet.png" alt="" />
                         <p className="font-semibold text-gray-400">
                           Google Meet
                         </p>
                       </div>
                       <div className="flex items-center gap-x-2">
                         <img src="/assets/fi-br-clock.png" alt="" />
                         <p className="font-semibold text-gray-400">
                           5 Hours 23 Min
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    )
  }
})
