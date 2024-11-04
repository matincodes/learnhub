import { Link, useLocation } from '@tanstack/react-router'
import { navLinks } from '@/data/sideNav'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { useEffect, useState } from 'react'

const isActive = (pathname, link) => {
  return pathname.split('/').at(-1) === link.split('/').at(-1)
}

const SideNav = ({ close, isNav }) => {
  const [user, setUser] = useState('')
  const data = window.localStorage.getItem('user')
  
  useEffect(()=>{
    setUser(JSON.parse(data))
  }, [data])

  const { pathname } = useLocation()

  return (
    <div
      onClick={e => {
        e.stopPropagation()
        close()
      }}
      className={`modal swipeInLeft fixed inset-y-0 left-0 z-[70] hidden h-full lg:block`}
    >
      <div
        onClick={e => {
          e.stopPropagation()
        }}
        className="my-5 flex h-full w-[280px] flex-col items-center overflow-y-auto bg-white shadow sm:py-4"
      >
        <div className="relative flex h-full w-full flex-col items-center justify-between px-3">
          <div className="w-full px-4">
            <Link
              to="/dashboard/profile"
              className="flex items-center justify-center gap-x-3 "
            >
              <div className="grid w-[60px] h-[50px] place-content-center overflow-hidden rounded-[100%]">
                <img src={user.image} className="object-cover" />
              </div>
              <div className="w-full ">
                <p className="font-semibold">Abisola Elizabeth</p>
                <p className="text-xs sm:text-sm">View Profile</p>
              </div>
            </Link>

            <Separator className="my-4 bg-[#98989A]" />

            <ul className="mt-6 flex w-full flex-col gap-y-1">
              {navLinks.map(({ link, name, iconImage }) => {
                return (
                  <li key={name} className={'w-full'}>
                    <Link
                      onClick={close}
                      to={link}
                      className={cn(
                        'relative flex w-full items-center p-3 font-medium',
                        {
                          'rounded-xl bg-[#F7F7F7] font-semibold': isActive(
                            pathname,
                            link,
                          ),
                        },
                      )}
                    >
                      {isActive(pathname, link) && (
                        <img
                          src="/assets/line-25.svg"
                          alt="active"
                          className="absolute left-[-4px]"
                        />
                      )}
                      <div className="flex w-full items-center gap-x-3">
                        <img src={iconImage} alt="icon" />
                        <span>{name}</span>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="flex w-full items-center justify-center px-3">
            <Link
              onClick={close}
              to={'/dashboard/settings'}
              activeProps={{
                className: 'rounded-xl bg-gray-200 font-semibold',
              }}
              className="relative flex w-full items-center justify-center px-3 py-4 font-medium"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <img
                      src="/assets/line-25.svg"
                      alt="active"
                      className="absolute left-[-4px]"
                    />
                  )}
                  <div className="flex w-full items-center space-x-7">
                    <img src={'/assets/settings.png'} alt="" />
                    <span>Settings</span>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="w-full px-3">
            <Separator className="my-4 bg-[#98989A]" />
            <div className="flex w-full items-center justify-center">
              <img src={'/assets/learnhub.png'} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideNav
