// src/hooks/use-user.js
import { useQueryClient } from '@tanstack/react-query'
import { authKeys } from '@/context/auth-context'

export const useUser = () => {
  const queryClient = useQueryClient()
  const user = queryClient.getQueryData(authKeys.user())
  return user
}
