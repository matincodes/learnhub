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
import { useAdmin } from '@/context/admin-context'
import { useEffect } from 'react'
const navItems = [
  {
    label: 'Dashboard',
    to: '/admin/dashboard',
    Icon: HomeIcon,
    activePaths: ['/admin/dashboard'],
  },
  {
    label: 'Course Management',
    to: '/admin/dashboard/course-management',
    Icon: CourseIcon,
    activePaths: [
      '/admin/dashboard/course-management',
      '/admin/dashboard/course-management/new-course',
      '/admin/dashboard/course-management/new-course-lec',
      '/admin/dashboard/course-management/preview-courses',
    ],
  },
  {
    label: 'User Management',
    to: '/admin/dashboard/users',
    Icon: UserIcon,
    activePaths: ['/admin/dashboard/users'],
  },
  {
    label: 'Manage Quizzes',
    to: '/admin/dashboard/quizzes-management',
    Icon: QuizzeIcon,
    activePaths: [
      '/admin/dashboard/quizzes-management',
      '/admin/dashboard/quizzes-management/new-quiz',
      '/admin/dashboard/quizzes-management/new-quiz-lec',
      '/admin/dashboard/quizzes-management/preview',
    ],
  },
  {
    label: 'Manage Category',
    to: '/admin/dashboard/categories',
    Icon: CategoryIcon,
    activePaths: ['/admin/dashboard/categories'],
  },
  {
    label: 'Settings',
    to: '/admin/dashboard/settings',
    Icon: SettingIcon,
    activePaths: ['/admin/dashboard/settings'],
    extraMarginTop: true,
  },
]

const AdminSideNav = () => {
  const location = useLocation()
  const router = useRouter()
  const pathname = location.pathname
  const { loadDashboard, dashboard, loading } = useAdmin()
  useEffect(() => {
    loadDashboard()
  }, [])
   if (loading || !dashboard) return
  const { profile_image , first_name } = dashboard.admin_data
  return (
    <div className="fixed z-[20] flex h-full w-[280px] flex-col items-center rounded-[20px] bg-white py-7">
      <div className="w-full px-3">
        {/* Admin Avatar */}
        <div className="flex gap-2 px-3">
          <img
            src={`${profile_image}`}
            alt="avatar"
            className="size-[40px] rounded-full"
          />
          <span>
            <h1 className="font-san text-[14px] font-semibold text-[#303031]">
             {first_name}
            </h1>
            <p className="font-sans text-xs font-normal text-[#303031]">
              Admin
            </p>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="mt-5 flex w-full flex-col gap-4 border-t-[4px] border-[#F7F7F7] py-7 font-sans text-lg font-normal text-black">
          {navItems.map(({ label, to, Icon, extraMarginTop, activePaths }) => {
            const isActive = activePaths.includes(pathname)

            return (
              <button
                key={label}
                onClick={() => router.navigate({ to })}
                className={`${
                  extraMarginTop ? 'mt-20' : ''
                } flex items-center gap-2 rounded-[10px] px-5 py-2 hover:bg-[#F7F7F7] ${
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
