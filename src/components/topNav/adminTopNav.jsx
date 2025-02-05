
import {
//   Link,
  useLocation,
//   useNavigate,
//   useRouteContext,
  useRouter,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import NotificationModal from './notificationModal'

const AdminTopNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const pathname = useLocation({ select: s => s.pathname.replace(/\/$/, '') })
//   const navigate = useNavigate()
  // const firstName = useRouteContext({ select: s => s.user?.firstName })


  function onToggle() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex w-full bg-gray-100 items-center justify-between  px-3 py-3 sm:px-6 sm:py-4 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)] lg:px-6  min-[1024px]:float-right">
      <div className="flex w-full flex-col items-start gap-y-4 p-2 lg:hidden">
        <div className="flex w-full items-center justify-between">

      {/* Desktop View */}
      <div className="hidden w-full items-center justify-between md:flex-col gap-4 lg:flex-row lg:flex">
        <div className="flex flex-col items-start justify-start relative ">
          <h2 className="flex items-center text-nowrap text-3xl font-semibold capitalize lg:text-2xl ">
            {pathname != '/admindashboard' && (
              <img
                src="/assets/arrow-left-01.svg"
                onClick={() => router.history.back()}
                className="cursor-pointer"
                alt="arrow left"
              />
            )}
            {/* {title} */}
            {/* {courseTitle ? courseTitle : title } */}

          </h2>
          {pathname == '/admindashboard' && (
            <p className="capitalize">{`Welcome Back, Timilehin 👋`}</p>
          )}
        </div>

        <div className="relative flex border border-orange-600 items-center justify-end gap-x-4 md:basis-[55%] lg:basis-[45%]">
          <div className="flex h-10 w-full items-center justify-between overflow-hidden rounded-lg border bg-white pr-2 focus-within:border-normal_yellow">
           
          <button
            onClick={onToggle}
            className="relative grid place-content-center rounded-full bg-white p-[10px]"
          >
            <img src="/assets/Vector.svg" alt="" className="w-[23px]" />

            {isOpen && <NotificationModal close={onToggle} />}
          </button>
        </div>
      </div>
      </div>
      </div>    </div>
      </div>
  )
   
}
export default AdminTopNav
