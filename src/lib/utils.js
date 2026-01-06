import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const isActive = (pathname, link) => {
  return pathname.split('/').at(-1) === link.split('/').at(-1)
}

export const isAdmin = role => {
  return role === 'admin'
}

export const isUser = role => {
  return role === 'user'
}

export function extractCourseTitle(pathname) {
  const match = pathname.match(/my-courses\/([^/]+)/)
  return match ? decodeURIComponent(match[1]) : null
}