import axiosInstance from '@/api/axiosInstance'
import { useUser } from '@/hooks/use-user'
import { createContext, useContext, useEffect, useState } from 'react'

const userEndpoints = {
  profileByid: id => `/student/profile/${id}/`,
  updateProfile: id => `/student/profile/${id}/`,
}

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [getUserById, setGetUserById] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const user = useUser()
  const userId = user?.id
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null

  const authHeaders = token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : {}

  const getUserProfile = async () => {
    try {
      const { data } = await axiosInstance.get(
        userEndpoints.profileByid(userId),
        authHeaders
      )
      setGetUserById(data)
    } catch (error) {
      console.error('Failed to fetch user profile:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateUserProfile = async (profileUpdates) => {
    try {
      const { data } = await axiosInstance.patch(
        userEndpoints.updateProfile(userId),
        profileUpdates,
        authHeaders
      )
      console.log('Profile updated:', data)
      await getUserProfile()
    } catch (error) {
      console.error('Failed to update profile:', error)
    }
  }

  useEffect(() => {
    if (userId && token) {
      getUserProfile()
      updateUserProfile()
    }
  })

  return (
    <UserContext.Provider value={{ getUserProfile, getUserById, isLoading, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export const UserProfile = () => useContext(UserContext)
