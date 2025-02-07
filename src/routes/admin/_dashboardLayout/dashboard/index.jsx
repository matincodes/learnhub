import { createFileRoute } from '@tanstack/react-router'
import AdminInventory from '@/components/inventory/adminInventory'
import Courses from '@/data/courseManagement'

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/')({
  component: DashboardIndexComponent,
})

function DashboardIndexComponent() {
  return (
    <div className="w-full space-y-6 sm:space-y-10">
      <div className="grid w-full grid-cols-3 gap-4">
        <AdminInventory
          title={'Enrolled Courses'}
          metrics={`6,457`}
          image="/assets/fi-br-user.png"
        />
        <AdminInventory
          title={'Active Users'}
          metrics={'4,502'}
          image={'/assets/fi-br-user.png'}
        />
        <AdminInventory
          title={'Engagement Rate'}
          metrics={'45%'}
          image={'/assets/fi-br-user.png'}
        />
      </div>

      <div className="flex w-full flex-col-reverse items-start gap-6 sm:flex-row">
        <div className="grid w-full grid-cols-1 gap-y-5 rounded-lg bg-white p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold sm:text-xl">
              Course Management
            </h2>
            <button className="rounded-[5px] bg-normal_yellow px-[15px] py-[2px] font-san text-[16px] font-[400] text-white">
              +
            </button>
          </div>
          <div className="w-full">
            {/* <div className="grid w-full grid-cols-6 b px-2 text-[9px] font-semibold uppercase text-gray-500 sm:text-[13px]">
              <p>Rank</p>
              <p className="text-center">Name</p>
              <p className="text-center">Course</p>
              <p className="text-center">Hours</p>
              <p className="text-center">Point(XP)</p>
              <p className="text-center">Point(XP)</p>
              <p className="text-center">Point(XP)</p> 
            </div> */}

            {/* {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="grid w-full grid-cols-6 items-center p-2 text-[9px] font-semibold sm:text-[13px]"
              >
                <div className="flex h-4 w-4 flex-col items-center justify-center rounded-lg bg-gray-100 sm:h-8 sm:w-8">
                  <p>{index + 1}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <img src="/assets/ellip.png" alt="" />
                  <p>Charlie Rawal</p>
                </div>
                <p className="text-center text-gray-500">53</p>
                <p className="text-center text-gray-500">250</p>
                <p className="text-center text-green-500">13,450</p>
              </div>
            ))} */}

            <table className="w-full table-fixed  font-san">
              <thead>
                <tr className="space-x-3 p-1 text-left">
                  <th className="text-[16px] font-[500] w-[30%]">Course Title</th>
                  <th className="text-[16px] font-[500]">Category</th>
                  <th className="text-[16px] font-[500]">Status</th>
                  <th className="text-[16px] font-[500]">Students</th>
                  <th className="text-[16px] font-[500]">Last Updated</th>
                  <th className="text-[16px] font-[500] w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-[#3333331A]'>
                {Courses.map((_, index) => (
                  <tr
                    key={index}
                    className="space-x-3 p-4"
                  >
                    <td className="flex items-center gap-2 py-6">
                      <img
                        src="/assets/course_management.png"
                        alt=""
                        className="w-[70px] rounded-[5px]"
                      />
                      <p className='text-[15px]'>{_.courseTitle}</p>
                    </td>
                    <td className="py-6 text-[15px]">{_.category}</td>
                    <td className={`py-6 text-[15px] font-[600] ${_.status == "Published" ? 'text-[#008000]' : 'text-[#B98324]' } `}>{_.status}</td>
                    <td className="py-6 text-[15px]">{_.students}</td>
                    <td className="py-6 text-[15px]">{_.lastUpdated}</td>
                    <td className="py-6 text-[15px] font-[700]">
                      <button>...</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
