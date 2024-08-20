import { Link } from '@tanstack/react-router'
import { navLinks } from '@/data/sideNav'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

import PropTypes from 'prop-types'

const SideNav = ({ close, isNav }) => {

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
        className="relative my-5 flex h-full w-[250px] cursor-pointer flex-col items-center overflow-y-auto bg-white shadow sm:py-4"
      >
        <div className="relative flex h-full w-full flex-col items-center px-3">
          <div className="flex w-full items-start gap-x-3 pb-3">
            <img src={'/assets/user.png'} alt="" />
            <div className="space-y-1">
              <p className="font-medium">Abisola Elizabeth</p>
              <p className="text-xs sm:text-sm">View Profile</p>
            </div>
          </div>

          <Separator className="my-4 bg-[#98989A]" />

          <ul className="mt-6 flex w-full flex-col items-start justify-start gap-y-4 px-3">
            {navLinks.map(({ link, name, iconImage }) => {
              return (
                <li key={name} className={'w-full'}>
                  <Link
                    onClick={close}
                    to={link}
                    activeProps={{
                      className: 'rounded-xl bg-gray-200',
                    }}
                    className="relative flex w-full items-center px-3 py-4"
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <img
                            src="assets/line-25.svg"
                            alt="active"
                            className="absolute left-[-4px]"
                          />
                        )}
                        <div className="flex w-full items-center space-x-7 font-medium">
                          <img src={iconImage} alt="icon" />
                          <span>{name}</span>
                        </div>
                      </>
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <div className="mt-20 w-full px-3">
            <Link
              onClick={close}
              to={'/settings'}
              activeProps={{
                className: 'rounded-xl bg-gray-200',
              }}
              className="relative flex w-full items-center px-3 py-4"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <img
                      src="assets/line-25.svg"
                      alt="active"
                      className="absolute left-[-4px]"
                    />
                  )}
                  <div className="flex w-full items-center space-x-7 font-medium">
                    <img src={'/assets/settings.png'} alt="" />
                    <span>Setings</span>
                  </div>
                </>
              )}
            </Link>
          </div>

          <div className="absolute bottom-3 w-full px-3">
            <Separator className="my-4 bg-[#98989A]" />
            <div className="flex w-full items-center justify-center pt-3">
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
  isNav: PropTypes.bool,
}

export default SideNav
