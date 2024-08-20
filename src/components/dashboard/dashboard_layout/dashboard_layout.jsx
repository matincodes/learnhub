import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import {cn} from "../../../lib/utils"
import SideNav from '@/components/sideNav/sideNav'


const DashboardLayout = ({children}) => {
  const [isNav, setNav] = useState(false)

  function onClose() {
    setNav(!isNav)
  }

  return (
    <div className="w-full h-full bg-gray-200 font-montserrat text-[13px] sm:text-[15px]">
      <div
        className={`lg:fixed right-0 z-50 flex w-full items-center justify-between lg:border-b border-gray-200  lg:bg-white px-3 py-3 sm:px-6 sm:py-4 lg:w-[calc(100%-250px)] min-[1024px]:float-right`}
      >
        <div className='w-full flex lg:hidden gap-y-4  flex-col items-start '>
        <div className='w-full flex items-center justify-between'>
        <img src={"/assets/learnhub-nobg.png"} alt="" />
        <button>
        <img src={"/assets/fi-br-menu-burger.png"} alt="" />
        </button>
        </div>
        <div className="flex items-start flex-col  justify-start">
            <h2 className="text-sm font-semibold flex sm:text-lg">
              Welcome Back, Abisola{' '}
              <span className='ml-1'>
                <img src={"/assets/hand.png"} alt="" />
              </span>
            </h2>
            <p>What would you love to learn today?</p>
          </div>
        </div>
        <div className="hidden lg:flex w-full items-center justify-between">
          <div className="flex items-start flex-col justify-start">
            <h2 className="text-sm font-semibold flex sm:text-lg">
              Welcome Back, Abisola{' '}
              <span className='ml-1'>
                <img src={"/assets/hand.png"} alt="" />
              </span>
            </h2>
            <p>What would you love to learn today?</p>
          </div>

          <div className="flex items-center gap-x-2">
            <Link to="" className="px-2">
              <img src={"/assets/bell.png"} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'h-fit bg-gray-200 px-2 pb-14  sm:px-4  lg:pt-28 lg:float-right lg:w-[calc(100%-250px)]'
        )}
      >
        <div className="w-full">
          {children}
        </div>
      </div>
      <SideNav isNav={isNav} close={onClose} />
    </div>
  )
}

export default DashboardLayout
