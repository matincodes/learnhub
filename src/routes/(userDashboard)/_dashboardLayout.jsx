import SideNav from '@/components/sideNav/sideNav'
import TopNav from '@/components/topNav/topNav'
import { topNavData } from '@/data/topNav'
import { cn } from '@/lib/utils'
import {
  createFileRoute,
  Outlet,
  redirect,
  useLocation,
} from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/(userDashboard)/_dashboardLayout')({
  component: DashboardComponent,
  beforeLoad: ({ context, location }) => {
    console.log('context', context)
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

function DashboardComponent() {
  const [isNav, setNav] = useState(false)
  const { pathname } = useLocation()

  function onClose() {
    setNav(!isNav)
  }

  return (
    <div className="h-full w-full bg-gray-100 font-montserrat text-[13px] sm:text-[15px]">
      <TopNav
        title={topNavData[pathname]?.title}
        paragraph={topNavData[pathname]?.paragraph}
      />

      <div
        className={cn(
          'h-fit bg-gray-100 px-2 pb-14 sm:px-4 lg:float-right lg:w-[calc(100%-280px)] lg:px-10 lg:pt-28',
        )}
      >
        <Outlet />
      </div>
      <SideNav isNav={isNav} close={onClose} />
    </div>
  )
}
