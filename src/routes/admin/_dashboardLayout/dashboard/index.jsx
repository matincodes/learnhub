import { createFileRoute, useLocation } from '@tanstack/react-router'
import AdminInventory from '@/components/inventory/adminInventory'
import Chart from '@/components/charts/charts'

function DashboardIndexComponent() {
  const pathname = useLocation({
    select: s => s.pathname.replace(/\/$/, ''),
  })
  const role = 'admin'

  return (
    <>
      {pathname.includes('/admin/dashboard') && role === 'admin' && (
        <div className="h-full w-full space-y-[52px] pb-[12px]">
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
      )}
    </>
  )
}

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/')({
  component: DashboardIndexComponent,
})
