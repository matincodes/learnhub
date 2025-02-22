import { createFileRoute } from '@tanstack/react-router'
import AdminInventory from '@/components/inventory/adminInventory'
import Courses from '@/data/courseManagement'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Eye, Trash2 } from 'lucide-react'
import Chart from '@/components/charts/charts'
import { Link, useLocation, useRouteContext } from '@tanstack/react-router'


export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/')({
  component: DashboardIndexComponent,
})

function DashboardIndexComponent() {
  const pathname = useLocation({ select: s => s.pathname.replace(/\/$/, '') })
  const role = useRouteContext({ select: s => s.user?.role })

  return (
    <>

    {pathname.includes('/admin/dashboard') && role === 'admin' ? 
    <div className="w-full space-y-6 sm:space-y-10">
      <div className="grid w-full gap-4 lg:grid-cols-3">
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

      <Chart />

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

          {/* Courses Management Table */}

          {/* Desktop View */}
          <div className="hidden w-full lg:flex">
            <table className="w-full table-fixed font-san">
              <thead>
                <tr className="space-x-3 p-1 text-left">
                  <th className="w-[30%] text-[16px] font-[500]">
                    Course Title
                  </th>
                  <th className="text-[16px] font-[500]">Category</th>
                  <th className="text-[16px] font-[500]">Status</th>
                  <th className="text-[16px] font-[500]">Students</th>
                  <th className="text-[16px] font-[500]">Last Updated</th>
                  <th className="w-[10%] text-[16px] font-[500]">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3333331A]">
                {Courses.map((_, index) => (
                  <tr key={index} className="space-x-3 p-4">
                    <td className="flex items-center gap-2 py-6">
                      <img
                        src="/assets/course_management.png"
                        alt=""
                        className="w-[70px] rounded-[5px]"
                      />
                      <p className="text-[15px]">{_.courseTitle}</p>
                    </td>
                    <td className="py-6 text-[15px]">{_.category}</td>
                    <td
                      className={`py-6 text-[15px] font-[600] ${_.status == 'Published' ? 'text-[#008000]' : 'text-[#B98324]'} `}
                    >
                      {_.status}
                    </td>
                    <td className="py-6 text-[15px]">{_.students}</td>
                    <td className="py-6 text-[15px]">{_.lastUpdated}</td>
                    <td className="py-6 text-[15px] font-[700]">
                      {/* <button>...</button> */}
                      <Popover>
                        <PopoverTrigger>...</PopoverTrigger>
                        <PopoverContent className="flex flex-col space-y-3 font-san">
                          <button className="flex items-center gap-2 text-[14px]">
                            <Eye className="w-[19px]" />
                            View Details
                          </button>
                          <button className="flex items-center gap-2 text-[14px] text-red-500">
                            <Trash2 className="w-[19px]" /> Delete
                          </button>
                        </PopoverContent>
                      </Popover>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Desktop View */}

          {/* Responsive */}
          <div className="lg:hidden font-san">
            {Courses.map((_, index) => (
              <div
                key={index}
                className="relative w-full  p-4"
              >
                <Popover>
                <div className="flex justify-end">
                  <PopoverTrigger className="right-4 rotate-[90deg] text-[25px] text-[#374957]">
                    ...
                  </PopoverTrigger>
                  <PopoverContent className="flex flex-col space-y-3 font-san">
                    <button className="flex items-center gap-2 text-[14px]">
                      <Eye className="w-[19px]" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 text-[14px] text-red-500">
                      <Trash2 className="w-[19px]" /> Delete
                    </button>
                  </PopoverContent>
                </div>
                </Popover>

                <div className="flex items-center gap-2 justify-between border-t border-gray-200 py-3">

                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/course_management.png"
                      alt=""
                      className="w-[40px] h-[40px]  object-cover rounded-[50px]"
                    />
                    <div className='grid place-content-center'>
                      <p className="text-[17px] flex font-[600]"> {_.courseTitle} </p>
                      <p className="text-[13px] font-[400]">{_.category}</p>
                    </div>
                  </div>


                  <span
                    className={`px-[20px] py-[3px] rounded-full text-[13px] flex font-[500] ${_.status == 'Published' ? 'text-[#008000] bg-[#87E587]' : 'bg-[#F3CB83] text-[#B98324]'} items-center gap-1 `}
                  >
                  <span className={`w-[5px] h-[5px] bg-[#008000] rounded-[50px] ${_.status == 'Published' ? 'text-[#008000]' : 'bg-[#B98324]'} `}></span>
                    {_.status}
                  </span>
                </div>

                <div className='space-y-[3px] mt-[3px]'>
                  <div className=" flex justify-between">
                  <p className='font-[400]'>No. Of Students: </p>
                  <p className='text-[#4E4E4E]'>{_.students}</p>
                  
                  </div>
                  <div className=" flex justify-between">
                  <p className='font-[400]'>Last Updated: </p>
                  <p className='text-[#4E4E4E]'>{_.lastUpdated}</p>
                  
                  </div>

                </div>
              </div>
            ))}
          </div>
          {/* Responsive */}

          {/* Courses Management Table */}
        </div>
      </div>
    </div
    
    >
    : ""}
    </>

  )

}
