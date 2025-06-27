import { createFileRoute, useLocation } from '@tanstack/react-router'
import AdminInventory from '@/components/inventory/adminInventory'
import Chart from '@/components/charts/charts'
import { useState } from 'react'
import NotificationModal from '@/components/topNav/notificationModal'

function DashboardIndexComponent() {
  const [isOpen, setIsOpen] = useState(false)

  const pathname = useLocation({
    select: s => s.pathname.replace(/\/$/, ''),
  })
  const role = 'admin'
  function onToggle() {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {pathname.includes('/admin/dashboard') && role === 'admin' && (
        <>
          <div className="flex w-full items-center justify-between bg-gray-100 px-20 py-3 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)]">
            <h1 className="font-san text-[32px] font-semibold">Dashboard</h1>

            <button
              onClick={onToggle}
              className="rounded-full bg-white p-[10px]"
            >
              <img src="/assets/Vector.svg" alt="" className="w-[23px]" />
              {isOpen && <NotificationModal close={onToggle} />}
            </button>
          </div>
          {/* //main */}
          <div className="mt-[120px] h-full w-full space-y-[52px] px-16 pb-[12px]">
            <div className="mt-24 grid w-full gap-4 lg:grid-cols-3">
              <AdminInventory
                title="Total Users"
                metrics="642"
                image="/assets/user.svg"
              />
              <AdminInventory
                title="Active Courses"
                metrics="45"
                image="/assets/active-course.svg"
              />
              <AdminInventory
                title="Total quiz created"
                metrics="52"
                image="/assets/quiz.svg"
              />
            </div>
            <div className="h-auto w-full space-y-[16px]">
              <h1 className="text-[20px] font-[600] text-[#000000]">
                Quick actions
              </h1>
              <div className="flex w-full items-center gap-[21px]">
                <div className="flex h-[92px] w-[348px] flex-row items-center gap-[20px] rounded-lg border-[1.5px] border-[#F2F2F2] bg-[#FFFFFF] px-5">
                  <img
                    src="/assets/plus.svg"
                    alt="plus icon"
                    className="h-[52px] w-[52px]"
                  />
                  <h1 className="text-[20px] font-[600] text-[#000000]">
                    Create Quiz
                  </h1>
                </div>
                <div className="flex h-[92px] w-[348px] flex-row items-center gap-[20px] rounded-lg border-[1.5px] border-[#F2F2F2] bg-[#FFFFFF] px-5">
                  <img
                    src="/assets/plus.svg"
                    alt="plus icon"
                    className="h-[52px] w-[52px]"
                  />
                  <h1 className="text-[20px] font-[600] text-[#000000]">
                    Create Course
                  </h1>
                </div>
              </div>
            </div>
            <Chart />
          </div>
        </>
      )}
    </>
  )
}

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/')({
  component: DashboardIndexComponent,
})
