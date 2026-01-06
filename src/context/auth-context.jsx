import { refreshAccessTokenApi } from '@/api/authService'
import { clearAuthData, getAuthData, saveAuthData } from '@/lib/tokenStorage'
import { router } from '@/router'
import { useQueryClient } from '@tanstack/react-query'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

const AuthContext = createContext()

// Query keys for auth-related queries
export const authKeys = {
  all: ['auth'],
  user: () => [...authKeys.all, 'user'],
}

export const AuthProvider = ({ children }) => {
  const {
    user: storedUser,
    accessToken: storedToken,
    refreshToken: storedRefresh,
  } = getAuthData()
  const queryClient = useQueryClient()
  const initialized = useRef(false)

  // Set defaults for specific keys
  queryClient.setQueryDefaults(authKeys.user(), {
    staleTime: Infinity,
    gcTime: Infinity,
  })

  const [accessToken, setAccessToken] = useState(storedToken)
  const [refreshToken, setRefreshToken] = useState(storedRefresh)

  // Initialize query cache with stored user - moved to useEffect for React 18 concurrent rendering
  useEffect(() => {
    if (
      !initialized.current &&
      storedUser &&
      !queryClient.getQueryData(authKeys.user())
    ) {
      queryClient.setQueryData(authKeys.user(), storedUser)
      initialized.current = true
    }
  }, [storedUser, queryClient])

  // Helper to set auth data after login - used by useLogin hook
  const setAuthData = useCallback(
    (userData, tokens) => {
      setAccessToken(tokens.access)
      setRefreshToken(tokens.refresh)
      saveAuthData(userData, tokens)
      queryClient.setQueryData(authKeys.user(), userData)
    },
    [queryClient],
  )

  const logout = useCallback(() => {
    clearAuthData()
    setAccessToken(null)
    setRefreshToken(null)
    queryClient.removeQueries({ queryKey: authKeys.all })
    router.navigate({ to: '/login' })
  }, [queryClient])

  const secureRequest = useCallback(
    async axiosRequest => {
      try {
        const response = await axiosRequest(accessToken)
        return response
      } catch (error) {
        if (error.response?.status === 401 && refreshToken) {
          try {
            const newAccess = await refreshAccessTokenApi(refreshToken)
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
    },
    [accessToken, refreshToken, logout],
  )

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!storedUser && !!accessToken,
        accessToken,
        refreshToken,

        // Auth helpers
        setAuthData,
        logout,
        secureRequest,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
