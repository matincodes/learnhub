import { memo, useMemo } from 'react'

import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/context/auth-context'
import { adminNavLinks, navLinks } from '@/data/sideNav'
import { useUserProfile } from '@/hooks/use-user-profile'
import { cn, isActive } from '@/lib/utils'
import { Link, useLocation } from '@tanstack/react-router'

// 1. User Profile Card
const NavProfile = memo(function NavProfile({ image, name, subtitle, to }) {
  return (
    <div className="w-full px-4">
      <Link to={to} className="group flex">
        <div className="grid basis-[50%] place-content-center">
          <div className="h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-transparent transition-all group-hover:border-gray-200">
            <img
              src={image || '/assets/profile.png'}
              alt="profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="flex w-full flex-col justify-center">
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-sm capitalize text-gray-500">{subtitle}</p>
        </div>
      </Link>
      <Separator className="my-4 bg-[#98989A]" />
    </div>
  )
})

NavProfile.displayName = 'NavProfile'

// 2. Navigation Item (Handles Active State internally)
const NavItem = memo(function NavItem({ to, icon, label, pathname }) {
  const isSelected = isActive(pathname, to)

  return (
    <li className="w-full list-none">
      <Link
        to={to}
        className={cn('relative flex w-full items-center p-3 font-medium', {
          'rounded-xl bg-[#F7F7F7] font-semibold': isSelected,
        })}
      >
        {isSelected && (
          <img
            src="/assets/line-25.svg"
            alt="active"
            className="absolute left-[-4px]"
          />
        )}
        <div className="flex w-full items-center gap-x-3">
          <img src={icon} alt={`${label} icon`} className="h-5 w-5" />
          <span>{label}</span>
        </div>
      </Link>
    </li>
  )
})

NavItem.displayName = 'NavItem'

// 3. Footer Action (Settings & Logout)
const NavFooter = memo(function NavFooter({
  settingsPath,
  onLogout,
  pathname,
}) {
  return (
    <div className="flex-col">
      <NavItem
        to={settingsPath}
        icon="/assets/settings.png"
        label="Settings"
        pathname={pathname}
      />

      <button
        onClick={onLogout}
        className="flex w-full cursor-pointer items-center space-x-2 px-3 py-12 font-medium text-[#FF3D00]/80 transition-opacity hover:opacity-70"
      >
        <img src="/assets/logout.png" alt="logout" />
        <span>Logout</span>
      </button>
    </div>
  )
})

NavFooter.displayName = 'NavFooter'

// 4. Brand Logo
const NavBrand = memo(function NavBrand() {
  return (
    <div className="">
      <Separator className="my-4 bg-[#98989A]" />
      <div className="flex w-full items-center justify-center pb-4">
        <Link to="/">
          <img src="/assets/learnhub.png" alt="LearnHub" />
        </Link>
      </div>
    </div>
  )
})

NavBrand.displayName = 'NavBrand'

const SideNav = () => {
  // --- 1. Logic Layer ---
  const { data: userProfile } = useUserProfile()
  const { logout } = useAuth()
  const pathname = useLocation({ select: s => s.pathname.replace(/\/$/, '') })

  // Derived State
  const role = userProfile?.role || 'user'
  const isAdminView = pathname.includes('/admin/dashboard') && role === 'admin'

  // Configuration based on state
  const navigationData = useMemo(
    () => (isAdminView ? adminNavLinks : navLinks),
    [isAdminView],
  )
  const profileLink = '/dashboard/profile' // Usually profile is common, but adjust if needed
  const settingsLink = isAdminView
    ? '/admin/dashboard/settings'
    : '/dashboard/settings'
  const profileSubtitle = isAdminView ? 'Admin' : 'View Profile'

  // --- 2. Layout Layer ---
  return (
    <aside className="fixed inset-y-0 left-0 z-[20] hidden min-h-screen lg:block">
      <div className="flex h-screen w-[280px] flex-col items-center bg-white shadow sm:py-4">
        <div className="relative flex h-full w-full flex-col items-center justify-between px-3">
          {/* Top Section */}
          <div className="w-full">
            <NavProfile
              to={profileLink}
              image={userProfile?.profile_image}
              name={`${userProfile?.first_name || ''} ${userProfile?.last_name || ''}`}
              subtitle={profileSubtitle}
            />

            <ul className="mt-6 flex w-full flex-col gap-y-1">
              {navigationData.map(item => (
                <NavItem
                  key={item.name}
                  to={item.link}
                  label={item.name}
                  icon={item.iconImage}
                  pathname={pathname}
                />
              ))}
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="w-full">
            <NavFooter
              settingsPath={settingsLink}
              onLogout={logout}
              pathname={pathname}
            />
            <NavBrand />
          </div>
        </div>
      </div>
    </aside>
  )
}

SideNav.displayName = 'SideNav'

export default memo(SideNav)
