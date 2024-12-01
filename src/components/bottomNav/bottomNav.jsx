import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { navLinks } from '@/data/sideNav'
import { isActive } from '@/lib/utils'
import { Link, useLocation } from '@tanstack/react-router'

export default function BottomNav() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed inset-x-0 bottom-0 flex h-24 flex-row items-center justify-around bg-white lg:hidden">
      {navLinks.slice(0, 3).map(({ link, name, iconImage }) => {
        return (
          <div key={name} className="flex items-center justify-center p-3">
            <Link
              to={link}
              className="relative flex items-center justify-center p-2"
            >
              {isActive(pathname, link) && (
                <div className="absolute bottom-0 size-1 rounded-full bg-black" />
              )}
              <img src={iconImage} alt={name} />
            </Link>
          </div>
        )
      })}
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-center p-3">
          <img src="/assets/hamburger.svg" className='font-bold' alt="menu" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-white'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  )
}
