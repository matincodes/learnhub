import {
  confirmResetPasswordApi,
  loginApi,
  refreshAccessTokenApi,
  requestPasswordResetApi,
  signupApi,
  verifyEmailApi,
} from '@/api/authService'
import { clearAuthData, getAuthData, saveAuthData } from '@/lib/tokenStorage'
import { router } from '@/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createContext, useCallback, useContext, useState } from 'react'

const AuthContext = createContext()

// Query keys for auth-related queries
const authKeys = {
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

  // Set defaults for specific keys
  queryClient.setQueryDefaults(authKeys.user(), {
    staleTime: Infinity,
    gcTime: Infinity,
  })

  const [user, setUser] = useState(storedUser)
  const [accessToken, setAccessToken] = useState(storedToken)
  const [refreshToken, setRefreshToken] = useState(storedRefresh)
  const [isAuthenticated, setIsAuthenticated] = useState(!!storedUser)

  if (
    isAuthenticated &&
    storedUser &&
    !queryClient.getQueryData(authKeys.user())
  ) {
    queryClient.setQueryData(authKeys.user(), storedUser)
  }

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: data => {
      setUser(data.user)
      setAccessToken(data.tokens.access)
      setRefreshToken(data.tokens.refresh)
      saveAuthData(data.user, data.tokens)
      setIsAuthenticated(true)
      queryClient.setQueryData(authKeys.user(), data.user)
    },
  })

  // Signup mutation
  const signupMutation = useMutation({
    mutationFn: signupApi,
  })

  // Verify email mutation
  const verifyEmailMutation = useMutation({
    mutationFn: verifyEmailApi,
  })

  // Request password reset mutation
  const requestPasswordResetMutation = useMutation({
    mutationFn: requestPasswordResetApi,
  })

  // Confirm password reset mutation
  const confirmResetPasswordMutation = useMutation({
    mutationFn: confirmResetPasswordApi,
  })

  // Login handler that returns promise-like result for backwards compatibility
  const handleLogin = useCallback(
    async (role, credentials) => {
      try {
        const data = await loginMutation.mutateAsync({ role, credentials })
        return { success: true, redirect: data.redirect }
      } catch (err) {
        return {
          success: false,
          error:
            err.response?.data?.error || err.message || 'An error occurred',
        }
      }
    },
    [loginMutation],
  )

  // Signup handler
  const handleSignup = useCallback(
    async (role, userData) => {
      try {
        await signupMutation.mutateAsync({ role, userData })
        return { success: true }
      } catch (err) {
        return {
          success: false,
          error:
            err.response?.data ||
            err.message ||
            'An error occurred during signup',
        }
      }
    },
    [signupMutation],
  )

  // Verify email handler
  const handleVerifyEmail = useCallback(
    async token => {
      try {
        const data = await verifyEmailMutation.mutateAsync(token)
        return { success: true, data }
      } catch (err) {
        return {
          success: false,
          error: err.response?.data || err.message || 'Verification failed',
        }
      }
    },
    [verifyEmailMutation],
  )

  // Request password reset handler
  const handleRequestPasswordReset = useCallback(
    async email => {
      try {
        const data = await requestPasswordResetMutation.mutateAsync(email)
        return { success: true, data }
      } catch (err) {
        return {
          success: false,
          error:
            err.response?.data ||
            err.message ||
            'Password reset request failed',
        }
      }
    },
    [requestPasswordResetMutation],
  )

  // Confirm password reset handler
  const handleConfirmResetPassword = useCallback(
    async (id, token, newPassword) => {
      try {
        const data = await confirmResetPasswordMutation.mutateAsync({
          id,
          token,
          newPassword,
        })
        return { success: true, data }
      } catch (err) {
        return {
          success: false,
          error: err.response?.data || err.message || 'Password reset failed',
        }
      }
    },
    [confirmResetPasswordMutation],
  )

  const logout = useCallback(() => {
    clearAuthData()
    setUser(null)
    setAccessToken(null)
    setRefreshToken(null)
    setIsAuthenticated(false)
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
        // User state
        user,
        isAuthenticated,
        accessToken,

        // Auth actions (backwards compatible)
        login: handleLogin,
        signup: handleSignup,
        logout,
        secureRequest,

        // New handlers for password reset and email verification
        verifyEmail: handleVerifyEmail,
        requestPasswordReset: handleRequestPasswordReset,
        confirmResetPassword: handleConfirmResetPassword,

        // Mutation states for loading/error handling in components
        loginMutation,
        signupMutation,
        verifyEmailMutation,
        requestPasswordResetMutation,
        confirmResetPasswordMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
