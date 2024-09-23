import { useState } from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import {cn} from "../../../lib/utils"


const SideNav = ({ close, isNav }) => {
  const {pathname} = useLocation()

  const navLinks = [
    {
      link: '/dashboard',
      name: 'Dashboard',
      iconImage: "/assets/dashboard.png"
    },
    {
      link: '/my-courses',
      name: 'My Courses',
      iconImage: "/assets/courses.png"
    },
    {
      link: '/analytics',
      name: 'Analytics',
      iconImage: "/assets/fi-br-list-check.png"
    },
    {
      link: '/leaderboard',
      name: 'Leader Board',
      iconImage: "/assets/fi-br-trophy.png"
    },
    {
      link: '/quizzes',
      name: 'Quizzes',
      iconImage: "/assets/fi-br-notebook.png"
    }
  ]

  return (
    <div
      onClick={e => {
        e.stopPropagation()
        close()
      }}
      className={`modal swipeInLeft fixed inset-y-0 left-0 z-[70] h-full ${
        isNav
          ? 'w-full bg-white/50 min-[1024px]:w-[250px]'
          : 'w-[250px] max-[1024px]:hidden'
      }`}
    >
      <div
        onClick={e => {
          e.stopPropagation()
        }}
        className="relative flex h-full w-[250px] cursor-pointer flex-col items-center overflow-y-auto bg-white py-3 shadow sm:py-4"
      >
        <div className="relative flex h-full px-3 w-full flex-col items-center">
          <div className="flex w-full items-start gap-x-3 border-b-2 pb-3">
            <img src={"/assets/user.png"} alt="" />
            <div className="space-y-1">
              <p className="font-medium">Abisola Elizabeth</p>
              <p className="text-xs sm:text-sm">View Profile</p>
            </div>
          </div>

          <ul className="flex w-full mt-6 flex-col items-start justify-start gap-y-1 px-3">
            {navLinks.map(({ link, name, iconImage }) => {
              return (
                <li key={name} className={'w-full'}>
                  <Link
                    onClick={close}
                    to={link}
                    className={cn(
                      'flex w-full items-center gap-x-2  p-3 font-medium',
                      link === pathname && 'bg-gray-200 rounded-xl border-l-4 border-[#F7AE30]'
                    )}
                  >
                    <img src={iconImage} alt="" />
                    <span>{name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-20 w-full px-3">
            <Link
              onClick={close}
              to={'/settings'}
              className={cn(
                'flex w-full items-center gap-x-2 rounded-xl p-3 font-medium',
                '/settings' === pathname && 'border border-l-2 border-[#F7AE30]'
              )}
            >
              <img src={"/assets/settings.png"} alt="" />
              <span>Setings</span>
            </Link>
          </div>

          <div className="absolute bottom-3 px-3 w-full">
            <div className="flex w-full items-center justify-center border-t-2 pt-3">
              <img src={"/assets/learnhub.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
