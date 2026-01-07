import { useMutation } from '@tanstack/react-query'
import { useAuth } from '@/context/auth-context'
import {
  loginApi,
  signupApi,
  verifyEmailApi,
  requestPasswordResetApi,
  confirmResetPasswordApi,
} from '@/api/authService'

export const useLogin = () => {
  const { setAuthData } = useAuth()

  return useMutation({
    mutationFn: loginApi,
    onSuccess: data => {
      setAuthData(data.user, data.tokens)
    },
  })
}

export const useSignup = () => useMutation({ mutationFn: signupApi })

export const useVerifyEmail = () => useMutation({ mutationFn: verifyEmailApi })

export const useRequestPasswordReset = () =>
  useMutation({ mutationFn: requestPasswordResetApi })

export const useConfirmResetPassword = () =>
  useMutation({ mutationFn: confirmResetPasswordApi })
