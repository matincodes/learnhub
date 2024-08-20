import { Link, useLocation } from "@tanstack/react-router"
import { navLinks } from "@/data/sideNav"
import { cn } from "@/lib/utils"

import PropTypes from 'prop-types';

const SideNav = ({ close, isNav }) => {
  const { pathname } = useLocation()


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
        <div className="relative flex h-full w-full flex-col items-center px-3">
          <div className="flex w-full items-start gap-x-3 border-b-2 pb-3">
            <img src={'/assets/user.png'} alt="" />
            <div className="space-y-1">
              <p className="font-medium">Abisola Elizabeth</p>
              <p className="text-xs sm:text-sm">View Profile</p>
            </div>
          </div>

          <ul className="mt-6 flex w-full flex-col items-start justify-start gap-y-1 px-3">
            {navLinks.map(({ link, name, iconImage }) => {
              return (
                <li key={name} className={'w-full'}>
                  <Link
                    onClick={close}
                    to={link}
                    activeProps={{ className: 'border-l-4 border-[#F7AE30] bg-gray-200' }}
                    className='flex w-full items-center gap-x-2 p-3 font-medium'
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
              <img src={'/assets/settings.png'} alt="" />
              <span>Setings</span>
            </Link>
          </div>

          <div className="absolute bottom-3 w-full px-3">
            <div className="flex w-full items-center justify-center border-t-2 pt-3">
              <img src={'/assets/learnhub.png'} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SideNav.propTypes = {
  close: PropTypes.func,
  isNav: PropTypes.bool
}

export default SideNav