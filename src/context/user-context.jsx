import axiosInstance from '@/api/axiosInstance'
import { useUser } from '@/hooks/use-user'
import { createContext, useContext, useState } from 'react'

const userEndpoints = {
  profileByid: id => `/student/profile/${id}/`,
  updateProfile: id => `/student/profile/${id}/`,
}

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [getUserById, setGetUserById] = useState(null)
  const [loading, setLoading] = useState({
    userProfile: true,
    updateUserProfile: false,
  })
  const [error, setError] = useState(false)

  const user = useUser()
  const userId = user?.id
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null

  const authHeaders = token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {}

  const getUserProfile = async () => {
    // Skip request if offline
    // if (typeof window !== 'undefined' && !navigator.onLine) {
    //   console.warn('You are offline. Skipping profile fetch.')
    //   return
    // }

    // setLoading(prev => ({ ...prev, userProfile: true }))
    try {
      const { data } = await axiosInstance.get(
        userEndpoints.profileByid(userId),
        authHeaders
      )
      setGetUserById(data)
    } catch (e) {
      console.log(e.massage)
      setError(true)
    } finally {
      setLoading(prev => ({ ...prev, userProfile: false }))
    }
  }

  const updateUserProfile = async profileUpdates => {
    setLoading(prev => ({ ...prev, updateUserProfile: true }))
    try {
      const { data } = await axiosInstance.patch(
        userEndpoints.updateProfile(userId),
        profileUpdates,
        authHeaders
      )
      console.log(data)
      await getUserProfile()
      return data
    } catch (e) {
      setError(true)
    } finally {
      setLoading(prev => ({ ...prev, updateUserProfile: false }))
    }
  }

  // // Fetch profile when userId becomes available, but only once
  // useEffect(() => {
  //   if (userId && !getUserById && navigator.onLine) {
  //     getUserProfile()
  //   }
  // }, [userId, getUserById])

  // // Re-fetch profile when coming back online
  // useEffect(() => {
  //   const handleOnline = () => {
  //     if (userId && !getUserById) {
  //       console.log('Back online. Re-fetching user profile...')
  //       getUserProfile()
  //     }
  //   }

  //   window.addEventListener('online', handleOnline)
  //   return () => window.removeEventListener('online', handleOnline)
  // }, [userId, getUserById])
  getUserProfile()
  return (
    <UserContext.Provider
      value={{
        getUserProfile,
        getUserById,
        updateUserProfile,
        loading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const UserProfile = () => useContext(UserContext)
