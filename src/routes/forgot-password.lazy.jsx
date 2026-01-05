import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { requestPasswordReset } from '@/api/authService'
import { Button } from '@/components/ui/button'
import { Loader2, XCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const PageShell = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center p-4 relative">
    <img src="/assets/learnhub-logo.svg" alt="LearnHub" className="absolute left-6 top-5 w-[110px] sm:w-[150px]" />
    {children}
  </div>
)

export const Route = createLazyFileRoute('/forgot-password')({
  component: ForgotPassword,
})

function ForgotPassword() {
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false) // Toggle UI after success
  const [errorMsg, setErrorMsg] = useState(null)
  const { toast } = useToast()

  const onSubmit = async (data) => {
    setIsLoading(true)
    setErrorMsg(null)

    try {
      await requestPasswordReset(data.email)
      setEmailSent(true) // Switch to success view
      toast({ 
        variant: "success", 
        title: "Email Sent", 
        description: "Check your inbox for the reset link." 
      })
    } catch (error) {
      const msg = error?.response?.data?.message || error.message || 'Something went wrong. Please try again.'
      setErrorMsg(msg)
      toast({ 
        variant: "destructive", 
        title: "Error", 
        description: msg 
      })
    }
    setIsLoading(false)
  }

  if (emailSent) {
    return (
      <PageShell>
        <div className="w-full max-w-md text-center space-y-4">
          <h2 className="text-2xl font-bold text-green-600 font-san">Check your mail</h2>
          <p className="text-gray-600 font-san">We have sent password recovery instructions to your email.</p>
          <Link to="/login" className="text-blue-600 underline font-san">Back to Login</Link>
        </div>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-3xl font-bold text-center font-san">Forgot Password?</h2>
        <p className="text-center text-gray-500 font-san">No worries, we'll send you reset instructions.</p>

        {errorMsg && (
          <div className="w-full rounded-md border p-4 text-center">
            <XCircle className="mx-auto h-12 w-12 text-red-500" />
            <p className="text-sm text-gray-700 font-san mt-2">{errorMsg}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="font-medium font-san">Email</label>
            <input 
              {...register('email', { required: true })}
              type="email" 
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <Button disabled={isLoading} className="w-full py-6 text-lg bg-normal_green text-white font-san">
             {isLoading ? <Loader2 className="animate-spin" /> : "Reset Password"}
          </Button>
        </form>

        <div className="text-center">
          <Link to="/login" className="text-gray-500 hover:text-black font-san">← Back to log in</Link>
        </div>
      </div>
    </PageShell>
  )
}