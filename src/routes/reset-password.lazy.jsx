import { useRouter, createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {  confirmResetPassword } from '@/api/authService'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

// 1. Validate that the URL has the required secrets
export const Route = createLazyFileRoute('/reset-password')({
  validateSearch: (search) => ({
    uid: search.uid || '',
    token: search.token || '',
  }),
  component: ResetPassword,
})

function ResetPassword() {
  // 2. Grab the secrets from the URL
  const { uid, token } = Route.useSearch()
  
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const onSubmit = async (data) => {
    if (data.password !== data.confirm_password) {
      toast({ variant: "destructive", title: "Passwords do not match" })
      return
    }

    setIsLoading(true)
    try {
      // 3. Send secrets + new password to backend
      await confirmResetPassword(uid, token, data.password)
      
      toast({ title: "Success", description: "Password reset successfully. Please login." })
      router.navigate({ to: '/login' })
    } catch (error) {
      toast({ 
        variant: "destructive", 
        title: "Failed", 
        description: "Link may be invalid or expired. Try requesting a new one." 
      })
    }
    setIsLoading(false)
  }

  // If the link is broken (missing token), show error immediately
  if (!uid || !token) {
    return <div className="p-10 text-center text-red-500">Invalid Link. Please try again.</div>
  }

  return (
    <div className="flex h-screen items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-3xl font-bold text-center">Set new password</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="font-medium">New Password</label>
            <input 
              {...register('password', { required: true, minLength: 8 })}
              type="password" 
              className="w-full p-3 border rounded-lg"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-medium">Confirm Password</label>
            <input 
              {...register('confirm_password', { required: true })}
              type="password" 
              className="w-full p-3 border rounded-lg"
            />
          </div>
          
          <Button disabled={isLoading} className="w-full py-6 text-lg">
             {isLoading ? "Updating..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </div>
  )
}