
// })
import BottomNav from '@/components/bottomNav/bottomNav'
import SideNav from '@/components/sideNav/sideNav'
import TopNav from '@/components/topNav/topNav'
import { cn } from '@/lib/utils'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_dashboardLayout')({
  component: AdminDashboardComponent,
  // beforeLoad: ({ context, location }) => {
  //   if (!context.isAuthenticated) {
  //     throw redirect({
  //       to: '/login',
  //       search: {
  //         redirect: location.href,
  //       },
  //     })
  //   }
  // },
})

function AdminDashboardComponent() {
  return (
    <div className="relative h-full w-full bg-gray-100 font-montserrat text-[13px] sm:text-[15px]">
      <TopNav />
      {/* md:overflow-scroll, lg:pt-28, pb-14,lg:py-2,lg:pt-28 */}
      <div
        className={cn(
          'relative h-full  bg-gray-100 px-2 md:overflow-scroll, lg:pt-28, pb-14,lg:py-2,lg:pt-28  max-lg:mb-24 sm:px-4 lg:float-right lg:h-fit lg:w-[calc(100%-280px)]  ',
        )}
      >
        <Outlet />
      </div>
      <SideNav />
      <BottomNav />
    </div>
  )
}
