import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/auth-context'
import { useToast } from '@/hooks/use-toast'
import { createLazyFileRoute, useRouter } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'

// 1. Validate that the URL has the required secrets
export const Route = createLazyFileRoute('/reset-password')({
  validateSearch: search => ({
    uid: search.uid || '',
    token: search.token || '',
  }),
  component: ResetPassword,
})

function ResetPassword() {
  // 2. Grab the secrets from the URL
  const { uid, token } = Route.useSearch()

  const { register, handleSubmit } = useForm()
  const { confirmResetPassword, confirmResetPasswordMutation } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const isLoading = confirmResetPasswordMutation.isPending

  const onSubmit = async data => {
    if (data.password !== data.confirm_password) {
      toast({ variant: 'destructive', title: 'Passwords do not match' })
      return
    }

    const result = await confirmResetPassword(uid, token, data.password)

    if (result.success) {
      toast({
        title: 'Success',
        description: 'Password reset successfully. Please login.',
      })
      router.navigate({ to: '/login' })
    } else {
      toast({
        variant: 'destructive',
        title: 'Failed',
        description:
          result.error ||
          'Link may be invalid or expired. Try requesting a new one.',
      })
    }
  }

  // If the link is broken (missing token), show error immediately
  if (!uid || !token) {
    return (
      <div className="p-10 text-center text-red-500">
        Invalid Link. Please try again.
      </div>
    )
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-md">
        <h2 className="text-center text-3xl font-bold">Set new password</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="font-medium">New Password</label>
            <input
              {...register('password', { required: true, minLength: 8 })}
              type="password"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div className="space-y-2">
            <label className="font-medium">Confirm Password</label>
            <input
              {...register('confirm_password', { required: true })}
              type="password"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <Button disabled={isLoading} className="w-full py-6 text-lg">
            {isLoading ? 'Updating...' : 'Reset Password'}
          </Button>
        </form>
      </div>
    </div>
  )
}
