import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const isActive = (pathname, link) => {
  return pathname.split('/').at(-1) === link.split('/').at(-1)
}