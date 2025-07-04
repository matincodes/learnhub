import {
  adminChangePassword,
  adminDashboard,
  adminUserManagement,
} from '@/api/adminApiService'
import { toast } from '@/hooks/use-toast'
import { createContext, useContext, useEffect, useState } from 'react'

const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState(null)
  const [userManagement, setUserManagement] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const loadDashboard = async (force = false) => {
    if (dashboard && !force) return // ✅ Use cached data
    setLoading(true)
    try {
      const data = await adminDashboard()
      setDashboard(data.data)
    } catch (err) {
      if (!window.navigator.onLine) {
        setError(true)
      } else {
        setError(true)
      }
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const loadUserManagement = async () => {
    try {
      const data = await adminUserManagement()
      setUserManagement(data)
    } catch (error) {
      console.log(error)
    }
  }
  const updatePassword = async data => {
    try {
      await adminChangePassword(data)
      toast({
        variant: 'destructive',
        title: 'Password updated successfully.',
        description: 'Password updated successfully.',
      })
    } catch (error) {
      return toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'password change failed, please try again.',
      })
    }
  }
  useEffect(() => {
    loadUserManagement()
    loadDashboard()
  }, [])

  return (
    <AdminContext.Provider
      value={{
        dashboard,
        loadDashboard,
        loading,
        error,
        loadUserManagement,
        userManagement,
        updatePassword,
        // signUpAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) throw new Error('useAdmin must be used inside AuthProvider')
  return context
}
