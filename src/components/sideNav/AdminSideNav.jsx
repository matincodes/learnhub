'use client'

import { useLocation, useRouter } from '@tanstack/react-router'
import {
  CategoryIcon,
  CourseIcon,
  HomeIcon,
  QuizzeIcon,
  SettingIcon,
  UserIcon,
} from './customIcon'

const navItems = [
  {
    label: 'Dashboard',
    to: '/admin/dashboard',
    Icon: HomeIcon,
  },
  {
    label: 'Course Management',
    to: '/admin/dashboard/course-management' || '/admin/dashboard/new-course',
    Icon: CourseIcon,
  },
  {
    label: 'User Management',
    to: '/admin/dashboard/users',
    Icon: UserIcon,
  },
  {
    label: 'Manage Quizzes',
    to: '/admin/dashboard/quizzes',
    Icon: QuizzeIcon,
  },
  {
    label: 'Manage Category',
    to: '/admin/dashboard/categories',
    Icon: CategoryIcon,
  },
  {
    label: 'Settings',
    to: '/admin/dashboard/settings',
    Icon: SettingIcon,
    extraMarginTop: true,
  },
]

const AdminSideNav = () => {
  const location = useLocation()
  const router = useRouter()
  const pathname = location.pathname

  return (
    <div className="fixed z-[20] flex h-full w-[280px] flex-col items-center rounded-[20px] bg-white py-7">
      <div className="w-full px-3">
        {/* Admin Avatar */}
        <div className="flex gap-2 px-3">
          <img
            src="/assets/adim-avatar.svg"
            alt="avatar"
            className="size-[40px]"
          />
          <span>
            <h1 className="font-san text-[14px] font-semibold text-[#303031]">
              Reginald Jacobs
            </h1>
            <p className="font-sans text-xs font-normal text-[#303031]">
              Admin
            </p>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="mt-5 flex w-full flex-col gap-4 border-t-[4px] border-[#F7F7F7] py-7 font-sans text-lg font-normal text-black">
          {navItems.map(({ label, to, Icon, extraMarginTop }) => {
            const isActive = pathname === to

            return (
              <button
                key={label}
                onClick={() => router.navigate({ to })}
                className={`${
                  extraMarginTop ? 'mt-20' : ''
                } flex items-center gap-2 rounded-[10px] px-5 py-2 duration-100 ease-in-out hover:bg-[#F7F7F7] ${
                  isActive ? 'bg-[#F7F7F7] text-[#F7AE30]' : 'text-black'
                }`}
              >
                {Icon && <Icon isActive={isActive} />}

                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Logo Footer */}
      <div>
        <div className="mt-16 w-full border-t-[4px] border-[#F7F7F7] px-12 py-3">
          <img src="/assets/adminIcons/learn-up-logo.svg" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default AdminSideNav
