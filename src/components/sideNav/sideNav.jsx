import { Link } from '@tanstack/react-router'
import { navLinks } from '@/data/sideNav'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

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
        className="my-5 flex h-full w-[250px] flex-col items-center overflow-y-auto bg-white shadow sm:py-4"
      >
        <div className="relative flex h-full w-full flex-col items-center justify-between px-3">
          <div>
            <Link
              to="/dashboard/profile"
              className="flex w-full items-start gap-x-3 pb-3"
            >
              <img src={'/assets/user.png'} alt="" />
              <div className="space-y-1">
                <p className="font-medium">Abisola Elizabeth</p>
                <p className="text-xs sm:text-sm">View Profile</p>
              </div>
            </Link>

            <Separator className="my-4 bg-[#98989A]" />

            <ul className="mt-6 flex w-full flex-col gap-y-1 px-3">
              {navLinks.map(({ link, name, iconImage }) => {
                return (
                  <li key={name} className={'w-full'}>
                    <Link
                      onClick={close}
                      to={link}
                      activeProps={{
                        className: 'rounded-xl bg-gray-200',
                      }}
                      className="relative flex w-full items-center p-3"
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
          </div>

          <div className="flex w-full items-center justify-center px-6">
            <Link
              onClick={close}
              to={'/dashboard/settings'}
              activeProps={{
                className: 'rounded-xl bg-gray-200',
              }}
              className="relative flex w-full items-center justify-center px-3 py-4"
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
