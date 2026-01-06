import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/auth-context'
import { useToast } from '@/hooks/use-toast'
import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { Loader2, XCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'

const PageShell = ({ children }) => (
  <div className="relative flex min-h-screen items-center justify-center p-4">
    <img
      src="/assets/learnhub-logo.svg"
      alt="LearnHub"
      className="absolute left-6 top-5 w-[110px] sm:w-[150px]"
    />
    {children}
  </div>
)

export const Route = createLazyFileRoute('/forgot-password')({
  component: ForgotPassword,
})

function ForgotPassword() {
  const { register, handleSubmit } = useForm()
  const { requestPasswordReset, requestPasswordResetMutation } = useAuth()
  const { toast } = useToast()

  const isLoading = requestPasswordResetMutation.isPending
  const emailSent = requestPasswordResetMutation.isSuccess
  const errorMsg =
    requestPasswordResetMutation.error?.response?.data?.message ||
    requestPasswordResetMutation.error?.message ||
    null

  const onSubmit = async data => {
    const result = await requestPasswordReset(data.email)

    if (result.success) {
      toast({
        variant: 'success',
        title: 'Email Sent',
        description: 'Check your inbox for the reset link.',
      })
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Something went wrong. Please try again.',
      })
    }
  }

  if (emailSent) {
    return (
      <PageShell>
        <div className="w-full max-w-md space-y-4 text-center">
          <h2 className="font-san text-2xl font-bold text-green-600">
            Check your mail
          </h2>
          <p className="font-san text-gray-600">
            We have sent password recovery instructions to your email.
          </p>
          <Link to="/login" className="font-san text-blue-600 underline">
            Back to Login
          </Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-md">
        <h2 className="text-center font-san text-3xl font-bold">
          Forgot Password?
        </h2>
        <p className="text-center font-san text-gray-500">
          No worries, we&apos;ll send you reset instructions.
        </p>

        {errorMsg && (
          <div className="w-full rounded-md border p-4 text-center">
            <XCircle className="mx-auto h-12 w-12 text-red-500" />
            <p className="mt-2 font-san text-sm text-gray-700">{errorMsg}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="font-san font-medium">
              Email
            </label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <Button
            disabled={isLoading}
            className="w-full bg-normal_green py-6 font-san text-lg text-white"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              'Reset Password'
            )}
          </Button>
        </form>

        <div className="text-center">
          <Link to="/login" className="font-san text-gray-500 hover:text-black">
            ← Back to log in
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
