import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@/context/auth-context'
import { useUser } from '@/hooks/use-user'
import { userService } from '@/api/userService'

// Query keys for user profile
export const userProfileKeys = {
  all: ['userProfile'],
  detail: userId => [...userProfileKeys.all, 'detail', userId],
}

/**
 * Query hook to fetch user profile data
 */
export const useUserProfile = () => {
  const user = useUser()
  const { secureRequest } = useAuth()
  const userId = user?.id

  return useQuery({
    queryKey: userProfileKeys.detail(userId),
    queryFn: () =>
      secureRequest(token => userService.fetchProfile(userId, token)),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

/**
 * Mutation hook to update user profile
 */
export const useUpdateProfile = () => {
  const user = useUser()
  const { secureRequest } = useAuth()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updates =>
      secureRequest(token =>
        userService.updateProfile(user.id, updates, token),
      ),
    onSuccess: data => {
      // Update cache with new profile data
      queryClient.setQueryData(userProfileKeys.detail(user.id), data)
      // Keep localStorage in sync
      updateLocalUserStorage(data)
    },
  })
}

/**
 * Mutation hook to change password
 */
export const useChangePassword = () => {
  const { secureRequest } = useAuth()

  return useMutation({
    mutationFn: data =>
      secureRequest(token => userService.changePassword(data, token)),
  })
}

// Helper to sync localStorage with profile updates
const updateLocalUserStorage = profile => {
  try {
    const existingUser = JSON.parse(localStorage.getItem('learnhub-user')) || {}
    const merged = {
      ...existingUser,
      firstName: profile.first_name,
      lastName: profile.last_name,
      email: profile.email,
    }
    localStorage.setItem('learnhub-user', JSON.stringify(merged))
  } catch (err) {
    console.error('Error updating local user storage:', err)
  }
}
