import { adminDashboard } from '@/api/adminApiService'
import { createContext, useContext, useState } from 'react'

const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // const signUpAdmin = async data => {
  //   try {
  //     const res = await adminSignUp(data)
  //     console.log(res)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
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

  return (
    <AdminContext.Provider
      value={{
        dashboard,
        loadDashboard,
        loading,
        error,
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
