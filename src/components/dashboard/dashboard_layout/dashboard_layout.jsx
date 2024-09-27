import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { cn } from '../../../lib/utils'
import SideNav from '@/components/sideNav/sideNav'

const DashboardLayout = ({ children }) => {
  const [isNav, setNav] = useState(false)

  function onClose() {
    setNav(!isNav)
  }

  return (
    <div className="h-full w-full bg-[#F7F7F7] font-montserrat text-[13px] sm:text-[15px]">
      <div
        className={`right-0 z-50 flex w-full items-center justify-between border-gray-200 px-3 py-3 sm:px-6 sm:py-4 lg:fixed lg:w-[calc(100%-250px)] lg:border-b lg:bg-white min-[1024px]:float-right`}
      >
        <div className="flex w-full flex-col items-start gap-y-4 lg:hidden">
          <div className="flex w-full items-center justify-between">
            <img src={'/assets/learnhub-nobg.png'} alt="" />
            <button>
              <img src={'/assets/fi-br-menu-burger.png'} alt="" />
            </button>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h2 className="flex text-sm font-semibold sm:text-lg">
              Welcome Back, Abisola{' '}
              <span className="ml-1">
                <img src={'/assets/hand.png'} alt="" />
              </span>
            </h2>
            <p>What would you love to learn today?</p>
          </div>
        </div>
        <div className="hidden w-full items-center justify-between lg:flex">
          <div className="flex flex-col items-start justify-start">
            <h2 className="flex text-sm font-semibold sm:text-lg">
              Welcome Back, Abisola{' '}
              <span className="ml-1">
                <img src={'/assets/hand.png'} alt="" />
              </span>
            </h2>
            <p>What would you love to learn today?</p>
          </div>

          <div className="flex items-center gap-x-2">
            <Link to="" className="px-2">
              <img src={'/assets/bell.png'} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'h-fit bg-[#F7F7F7] px-2 pb-14 sm:px-4 lg:float-right lg:w-[calc(100%-250px)] lg:pt-28',
        )}
      >
        <div className="w-full">{children}</div>
      </div>
      <SideNav isNav={isNav} close={onClose} />
    </div>
  )
}

export default DashboardLayout
