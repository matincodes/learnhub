import axiosInstance from '@/api/axiosInstance'
import { useUser } from '@/hooks/use-user'
import { createContext, useContext, useState } from 'react'

// Configuration for API endpoints
const userEndpoints = {
  profileById: id => `/student/profile/${id}/`, // Renamed for clarity from profileByid
  updateProfile: id => `/student/profile/${id}/`,
  changePassword: '/student/settings/change-password/',
}

// Define a default shape for the context, useful for consumers and testing
const defaultUserContextValue = {
  getUserById: null,
  loading: { userProfile: false, updateUserProfile: false, passWord: false },
  error: false,
  getUserProfile: () =>
    console.warn('UserProvider not yet initialized or no user ID.'), // Manual refetch
  updateUserProfile: async () => {
    console.warn('UserProvider not yet initialized or no user ID.')
    return null
  },
}

const UserContext = createContext(defaultUserContextValue)

export const UserProvider = ({ children }) => {
  const [getUserById, setGetUserById] = useState(null) // Stores the fetched user profile data
  const [loading, setLoading] = useState({
    userProfile: false, // Should be true if we expect an immediate fetch and have a userId
    updateUserProfile: false,
    passWord: false,
  })
  // const [newError, setnewError] = useState({
  //   passWord: false, // State for password error
  // })
  const [error, setError] = useState(false)

  const user = useUser() // Hook to get authenticated user details
  const userId = user?.id // Extract user ID, could be null initially

  // --- Core Data Fetching Logic ---
  // This function contains the actual API call to fetch the profile.
  // It's defined within the provider so it can access/set state.
  const performFetchUserProfile = async () => {
    if (!userId) {
      console.log(
        'User ID not available. Clearing profile data and stopping load.',
      )
      setGetUserById(null)
      setLoading(prev => ({ ...prev, userProfile: false })) // Ensure loading is false
      setError(false) // Reset error if there's no user
      return
    }

    const token = localStorage.getItem('accessToken')
    if (!token) {
      console.error('No access token found for fetching profile.')
      setError(true)
      setLoading(prev => ({ ...prev, userProfile: false }))
      return
    }

    console.log(`Workspaceing profile for user ID: ${userId}`) // Corrected "Workspaceing"
    setLoading(prev => ({ ...prev, userProfile: true }))
    setError(false) // Clear previous errors before a new fetch

    try {
      const { data } = await axiosInstance.get(
        userEndpoints.profileById(userId),
        { headers: { Authorization: `Bearer ${token}` } },
      )
      setGetUserById(data)
      console.log('Profile fetched successfully:', data)
    } catch (err) {
      console.error('Failed to fetch user profile:', err)
      setError(true) // Set error state on failure
    } finally {
      setLoading(prev => ({ ...prev, userProfile: false })) // Always stop loading state
    }
  }

  // Function exposed on context to update the user profile.
  const updateUserProfileForContext = async updates => {
    if (!userId) {
      console.error('Cannot update profile: User ID not available.')
      setError(true)
      return null // Indicate failure
    }
    const token = localStorage.getItem('accessToken')
    if (!token) {
      console.error('Cannot update profile: No access token found.')
      setError(true)
      return null // Indicate failure
    }

    console.log(`Updating profile for user ID: ${userId}`, updates)
    setLoading(prev => ({ ...prev, updateUserProfile: true }))
    setError(false) // Clear previous errors

    try {
      const { data } = await axiosInstance.patch(
        userEndpoints.updateProfile(userId),
        updates,
        { headers: { Authorization: `Bearer ${token}` } },
      )
      // Merge with existing user data from localStorage
      const existingUser =
        JSON.parse(localStorage.getItem('learnhub-user')) || {}

      const normalizedData = {
        ...(updates.first_name && { firstName: updates.first_name }),
        ...(updates.last_name && { lastName: updates.last_name }),
        ...(updates.email && { email: updates.email }),
        ...(updates.profile_image && { profile_image: updates.profile_image }),
      }

      const newUpdates = { ...existingUser, ...normalizedData }

      // Save back to localStorage
      localStorage.setItem('learnhub-user', JSON.stringify(newUpdates))

      // After a successful update, re-fetch the profile data to ensure UI consistency.
      await performFetchUserProfile(userId)
      return data // Return the response from the PATCH request
    } catch (err) {
      console.error('Failed to update user profile:', err.message)
      setError(true) // Set error state on failure
      return null // Indicate failure
    } finally {
      setLoading(prev => ({ ...prev, updateUserProfile: false })) // Stop update loading state
    }
  }

  const changePassword = async updatedData => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
      console.error('No access token found for fetching profile.')
      // setnewError(true)
      return
    }
    setLoading(prev => ({ ...prev, passWord: true }))

    try {
      const { data } = await axiosInstance.post(
        userEndpoints.changePassword,
        updatedData,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )

      return data
    } catch (error) {
      console.error('Password change error:', error)
    } finally {
      setLoading(prev => ({ ...prev, passWord: false }))
    }
  }

  // The value provided to context consumers.
  // Without useMemo, this object is re-created on every render of UserProvider.
  // This will cause consumers to re-render if they depend on the context object reference,
  // even if the underlying data (getUserById, loading, error) hasn't changed.
  const contextValue = {
    getUserById,
    loading,
    error,
    getUserProfile: performFetchUserProfile,
    updateUserProfile: updateUserProfileForContext,
    changePassword,
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

// Custom hook to consume the UserContext easily
export const UserProfile = () => useContext(UserContext)
