import { navLinks } from '@/data/sideNav'
import { cn, isActive } from '@/lib/utils'
import { Link, useLocation } from '@tanstack/react-router'

export default function BottomNav() {
  const { pathname } = useLocation()

  return (
    <nav className="absolute inset-x-0 bottom-0 flex flex-row items-center justify-between lg:hidden">
      {navLinks.map(({ link, name, iconImage }) => {
        return (
          <div key={name} className="w-full">
            <Link
              onClick={close}
              to={link}
              className={cn(
                'relative flex w-full items-center p-3 font-medium',
                {
                  'font-semibold': isActive(
                    pathname,
                    link,
                  ),
                },
              )}
            >
              {isActive(pathname, link) && (
                <div className="absolute bottom-[-4px] size-4 rounded-full " />
              )}
              <img src={iconImage} alt="icon" />
            </Link>
          </div>
        )
      })}
    </nav>
  )
}
