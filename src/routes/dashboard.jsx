import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: () => <div>Hello /dashboard!</div>
})m '@/lib/utils'
import SideNav from '@/components/sideNav/sideNav'
import TopNav from '@/components/topNav/topNav'

export const Route = createFileRoute('/dashboard')({
  component: DashboardComponent,
})

function DashboardComponent() {
  const [isNav, setNav] = useState(false)

  function onClose() {
    setNav(!isNav)
  }

  return (
    <div className="h-full w-full bg-gray-100 font-montserrat text-[13px] sm:text-[15px]">
      <TopNav title="Welcome Back, Abisola" paragraph="What would you love to learn today?" />
      <div
        className={cn(
          'h-fit bg-gray-100 px-2 pb-14 sm:px-4 lg:float-right lg:w-[calc(100%-250px)] lg:px-10 lg:pt-28',
        )}
      >
        <Outlet />
      </div>
      <SideNav isNav={isNav} close={onClose} />
    </div>
  )
}
