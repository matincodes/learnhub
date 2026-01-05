import { userService } from '@/api/userService'
import { useAuth } from '@/context/auth-context'
import { useUser } from '@/hooks/use-user'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

// Define a default shape for the context, useful for consumers and testing
const defaultUserContextValue = {
  userProfile: null,
  loading: { fetch: false, update: false, passWord: false },
  error: null,
  getUserProfile: () =>
    console.warn('UserProvider not yet initialized or no user ID.'), // Manual refetch
  updateUserProfile: async () => {
    console.warn('UserProvider not yet initialized or no user ID.')
    return null
  },
  changePassword: async () => {
    console.warn('UserProvider not yet initialized or no user ID.')
    return null
  },
}

const UserContext = createContext(defaultUserContextValue)

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null) // Stores the fetched user profile data
  const [loading, setLoading] = useState({
    fetch: false, // Should be true if we expect an immediate fetch and have a userId
    update: false,
    passWord: false,
  })

  const [error, setError] = useState(null)

  const user = useUser()
  const userId = user?.id
  const { secureRequest } = useAuth()

  // --- Core Data Fetching Logic ---
  const fetchUserProfile = useCallback(async () => {
    if (!userId) {
      console.log(
        'User ID not available. Clearing profile data and stopping load.',
      )
      setUserProfile(null)
      setError(false) // Reset error if there's no user
      return
    }

    console.log(`Workspaceing profile for user ID: ${userId}`) // Corrected "Workspaceing"
    setLoading(prev => ({ ...prev, fetch: true }))
    setError(null) // Clear previous errors before a new fetch

    try {
      const data = await secureRequest(token =>
        userService.fetchProfile(userId, token),
      )
      setUserProfile(data)
      console.log('Profile fetched successfully:', data)
    } catch (err) {
      console.error('Failed to fetch user profile:', err)
      setError('Failed to fetch user profile')
    } finally {
      setLoading(prev => ({ ...prev, fetch: false })) // Always stop loading state
    }
  }, [userId, secureRequest])

  // Function exposed on context to update the user profile.
  const updateUserProfile = async updates => {
    if (!userId) {
      console.error('Cannot update profile: User ID not available.')
      setError(true)
      return null // Indicate failure
    }

    console.log(`Updating profile for user ID: ${userId}`, updates)
    setLoading(prev => ({ ...prev, update: true }))
    setError(null) // Clear previous errors

    try {
      const { data } = await secureRequest(token =>
        userService.updateProfile(userId, updates, token),
      )
      setUserProfile(data)
      console.log('Profile updated successfully:', data)

      updateLocalUserStorage(updates)
      fetchUserProfile() // Refresh profile data after update
      return data // Return the response from the PATCH request
    } catch (err) {
      console.error('Failed to update user profile:', err.message)
      setError('Failed to update user profile') // Set error state on failure
      return null // Indicate failure
    } finally {
      setLoading(prev => ({ ...prev, update: false })) // Stop update loading state
    }
  }

  const updateLocalUserStorage = updates => {
    try {
      const existingUser =
        JSON.parse(localStorage.getItem('learnhub-user')) || {}
      const normalized = {
        ...(updates.first_name && { firstName: updates.first_name }),
        ...(updates.last_name && { lastName: updates.last_name }),
        ...(updates.email && { email: updates.email }),
        ...(updates.profile_image && { profile_image: updates.profile_image }),
      }
      const merged = { ...existingUser, ...normalized }
      localStorage.setItem('learnhub-user', JSON.stringify(merged))
    } catch (err) {
      console.error('Error updating local user storage:', err)
    }
  }

  const changePassword = async updatedData => {
    setLoading(prev => ({ ...prev, passWord: true }))

    try {
      const data = await secureRequest(token =>
        userService.changePassword(updatedData, token),
      )
      console.log('Password changed successfully:', data)

      return data
    } catch (error) {
      console.error('Password change error:', error)
    } finally {
      setLoading(prev => ({ ...prev, passWord: false }))
    }
  }

  // Fetch profile on mount and when userId changes
  useEffect(() => {
    if (userId) {
      fetchUserProfile()
    }
  }, [userId, fetchUserProfile])

  const value = {
    userProfile,
    loading,
    error,
    getUserProfile: fetchUserProfile,
    updateUserProfile,
    changePassword,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

// Custom hook to consume the UserContext easily
export const UserProfile = () => useContext(UserContext)
