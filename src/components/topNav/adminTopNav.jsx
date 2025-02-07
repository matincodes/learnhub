
import {
//   Link,
  useLocation,
//   useNavigate,
//   useRouteContext,
  useRouter,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import AdminNotificationModal from './adminNotificationModel'

const AdminTopNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const pathname = useLocation({ select: s => s.pathname.replace(/\/$/, '') })
  console.log(pathname)
//   const navigate = useNavigate()
  // const firstName = useRouteContext({ select: s => s.user?.firstName })
  console.log(isOpen)

  function onToggle() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex w-full bg-gray-100 items-center justify-between  px-3 py-3 sm:px-6 sm:py-4 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)] lg:px-6  min-[1024px]:float-right">
      <div className="flex w-full flex-col items-start gap-y-4 p-2">
        <div className="flex w-full items-center justify-between">

      {/* Desktop View */}
      <div className="w-full items-center justify-between md:flex-col gap-4 lg:flex-row lg:flex">
        <div className="flex flex-col items-start justify-start relative px-3 ">
          <h2 className="flex items-center text-nowrap text-3xl font-semibold capitalize lg:text-2xl "> 
            Dashboard
          </h2>
          {pathname === '/admin/dashboard' && (
            <p className="capitalize">{`Welcome Back, Reginald 👋`}</p>
          )}
        </div>

        <div className="relative flex w-fit items-center justify-end">
          <div className="flex w-full items-center justify-between overflow-hidden rounded-full border bg-white focus-within:border-normal_yellow">
           
          <button
            onClick={onToggle}
            className="relative grid place-content-center rounded-full bg-white p-[10px]"
          >
            <img src="/assets/Vector.svg" alt="" className="w-[19px]" />

            {isOpen && <AdminNotificationModal close={onToggle} />}
          </button>
        </div>
      </div>
      </div>
      </div>    </div>
      </div>
  )
   
}
export default AdminTopNav
