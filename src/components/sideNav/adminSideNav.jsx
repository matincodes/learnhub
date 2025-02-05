import { Separator } from '@/components/ui/separator'
import { adminNavLinks  } from '@/data/sideNav'
import { cn, isActive } from '@/lib/utils'
import { Link, useLocation, useRouteContext } from '@tanstack/react-router'

const AdminSideNav = () => {
  const pathname = useLocation({ select: s => s.pathname.replace(/\/$/, '') })
  // const firstName = useRouteContext({ select: s => s.user?.firstName })
  // const lastName = useRouteContext({ select: s => s.user?.lastName })
  const firstName = "Reginald"
  const lastName = "Jacobs"
  // const title = topNavData[pathname]?.title

  return (
    <div className="fixed inset-y-0 left-0 z-[70] hidden min-h-screen lg:block">
      <div className="flex h-screen w-[280px] flex-col items-center overflow-y-scroll bg-white shadow sm:py-4">
        <div className="relative flex  h-full w-full flex-col items-center justify-between px-3">
          <div className="w-full px-4">
            <Link to="/dashboard/profile" className="flex">
              <div className="grid basis-[50%] place-content-center">
                <div className="h-[45px] w-[45px] overflow-hidden rounded-full">
                  <img
                    src="/assets/profile.png"
                    alt="profile image"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center">
                <p className="font-semibold">{lastName} {firstName}</p>
                <p className="text-[12px] sm:text-sm">Admin</p>
              </div>
            </Link>

            <Separator className="my-4 bg-[#98989A]" />

            <ul className="mt-6 flex w-full flex-col gap-y-2">
              {adminNavLinks.map(({ link, name, iconImage }) => {
                return (
                  <li key={name} className={'w-full'}>
                    <Link
                      to={link}
                      className={cn(
                        'relative flex w-full items-center p-3 font-medium font-san',
                        {
                          'rounded-[10px] bg-[#F7F7F7] font-semibold': isActive(
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
              to={'/admindashboard/settings'}
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

export default AdminSideNav
