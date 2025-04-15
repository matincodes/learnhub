// src/hooks/use-user.js
import { getAuthData } from '@/lib/tokenStorage'

export const useUser = () => {
  const { user } = getAuthData()
  return user
}
