// })
import BottomNav from '@/components/bottomNav/bottomNav'
import AdminSideNav from '@/components/sideNav/AdminSideNav'
import { cn } from '@/lib/utils'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_dashboardLayout')({
  component: AdminDashboardComponent,

})

function AdminDashboardComponent() {
  return (
    <div style={{zoom:0.8}} className="relative h-[800px] w-full bg-gray-100 font-montserrat text-[13px] sm:text-[15px]">
    
      <div
        className={cn(
          'md:overflow-scroll, lg:pt-28, pb-14,lg:py-2,lg:pt-28 relative h-full bg-gray-100 px-2 max-lg:mb-24 sm:px-4 lg:float-right lg:h-fit lg:w-[calc(100%-280px)]',
        )}
      >
        <Outlet />
      </div>
      <AdminSideNav />
      <BottomNav />
    </div>
  )
}
