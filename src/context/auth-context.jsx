import axios from 'axios'
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('learnhub-user')),
  )
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken'),
  )
  const [isAuthenticated, setIsAuthenticated] = useState(!!user)

  const login = async ({ email, password }) => {
    try {
      const { data } = await axios.post(
        'https://coderina.onrender.com/api/students/login/',
        { email, password },
      )

      const user = {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
      }
      setUser(user)
      setAccessToken(data.tokens.access)
      localStorage.setItem('learnhub-user', JSON.stringify(user))
      localStorage.setItem('accessToken', data.tokens.access)
      localStorage.setItem('refreshToken', data.tokens.refresh) // Store the refresh token
      setIsAuthenticated(true)
      return true
    } catch (error) {
      setIsAuthenticated(false)
      console.error(error)
      return false
    }
  }

  const signup = async ({
    first_name,
    last_name,
    email,
    password,
    confirm_password,
  }) => {
    try {
      const { data } = await axios.post(
        'https://coderina.onrender.com/api/students/signup/',
        { user: { first_name, last_name, email, password, confirm_password } },
      )

      const user = {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
      }
      setUser(user)
      setAccessToken(data.tokens.access)
      localStorage.setItem('learnhub-user', JSON.stringify(user))
      localStorage.setItem('accessToken', data.tokens.access)
      localStorage.setItem('refreshToken', data.tokens.refresh) // Store the refresh token
      setIsAuthenticated(true)
      return true
    } catch (error) {
      setIsAuthenticated(false)
      console.error(error)
      return false
    }
  }

  const logout = () => {
    setUser(null)
    setAccessToken(null)
    setIsAuthenticated(false)
    localStorage.removeItem('learnhub-user')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  }

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken')
    const response = await fetch('/api/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    })

    if (!response.ok) {
      throw new Error('Failed to refresh access token')
    }

    const data = await response.json()
    setAccessToken(data.accessToken)
    localStorage.setItem('accessToken', data.accessToken)
  }

  const authFetch = async (url, options = {}) => {
    if (!accessToken) {
      await refreshAccessToken()
    }

    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    })

    if (response.status === 401) {
      await refreshAccessToken()
      return authFetch(url, options)
    }

    return response
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        signup,
        logout,
        authFetch,
        accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
