import { createContext, useContext, useState } from 'react'
import { login, signup, refreshAccessToken } from '@/api/authService'
import { saveAuthData, getAuthData, clearAuthData } from '@/lib/tokenStorage'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const { user: storedUser, accessToken: storedToken, refreshToken: storedRefresh } = getAuthData()

  const [user, setUser] = useState(storedUser)
  const [accessToken, setAccessToken] = useState(storedToken)
  const [refreshToken, setRefreshToken] = useState(storedRefresh)
  const [isAuthenticated, setIsAuthenticated] = useState(!!storedUser)

  const handleLogin = async (role, credentials) => {
    try {
      const { user, tokens, redirect } = await login(role, credentials)
      setUser(user)
      setAccessToken(tokens.access)
      setRefreshToken(tokens.refresh)
      saveAuthData(user, tokens)
      setIsAuthenticated(true)
      console.log(tokens)
      return { success: true, redirect}
    } catch (err) {
      console.error(err)
      return { succes: false, error: err.response?.data?.error || 'An error occurred' }
    }
  }

  const handleSignup = async (role, userData) => {

    console.log('User data:', userData)
    console.log('Role:', role)
    try {
      const { user, tokens, redirect } = await signup(role, userData)
      setUser(user)
      setAccessToken(tokens.access)
      setRefreshToken(tokens.refresh)
      saveAuthData(user, tokens)
      setIsAuthenticated(true)
      return { succes: true, redirect}
    } catch (err) {
      console.error(err)
      return { succes: false, error: err.response?.data?.error || 'An error occurred' }
    }
  }

  const logout = () => {
    clearAuthData()
    setUser(null)
    setAccessToken(null)
    setRefreshToken(null)
    setIsAuthenticated(false)
  }

  const secureRequest = async (axiosRequest) => {
    try {
      const response = await axiosRequest(accessToken)
      return response
    } catch (error) {
      if (error.response?.status === 401 && refreshToken) {
        try {
          const newAccess = await refreshAccessToken(refreshToken)
          setAccessToken(newAccess)
          localStorage.setItem('accessToken', newAccess)
          return axiosRequest(newAccess)
        } catch (err) {
          logout()
          throw err
        }
      }
      throw error
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login: handleLogin,
        signup: handleSignup,
        logout,
        accessToken,
        secureRequest,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
