import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/auth-context'
import { useToast } from '@/hooks/use-toast'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { CheckCircle2Icon, Loader2 } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export const Route = createFileRoute('/_auth/signup')({
  component: SignUp,
})

// Constants outside component to prevent recreation
const REDIRECT_DELAY_MS = 120000 // 2 minutes
const COUNTDOWN_UPDATE_INTERVAL = 250

// Validation helper
const validateSignupForm = data => {
  if (!data.first_name?.trim()) {
    return { valid: false, error: 'First name is required' }
  }
  if (!data.last_name?.trim()) {
    return { valid: false, error: 'Last name is required' }
  }
  if (!data.email?.trim()) {
    return { valid: false, error: 'Email is required' }
  }
  if (!data.password) {
    return { valid: false, error: 'Password is required' }
  }
  if (!data.confirm_password) {
    return { valid: false, error: 'Please confirm your password' }
  }
  if (data.password !== data.confirm_password) {
    return { valid: false, error: 'Passwords do not match' }
  }
  return { valid: true }
}

function SignUp() {
  const { register, handleSubmit, reset } = useForm()
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success'
  const [remainingMs, setRemainingMs] = useState(REDIRECT_DELAY_MS)

  const { signup } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const formatTime = useCallback(ms => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }, [])

  const onSubmit = useCallback(
    async data => {
      // Prevent double submission
      if (status !== 'idle') return

      // Validate form before submission
      const validation = validateSignupForm(data)
      if (!validation.valid) {
        toast({
          variant: 'destructive',
          title: 'Validation Error',
          description: validation.error,
        })
        return
      }

      setStatus('loading')

      try {
        const result = await signup('student', data)

        if (result.success) {
          setStatus('success')
          reset()
          toast({
            variant: 'success',
            title: 'Signup Successful',
            description: 'You have been signed up successfully.',
          })
        } else {
          setStatus('idle')
          toast({
            variant: 'destructive',
            title: 'Signup Failed',
            description: result.message || 'Signup failed, please try again.',
          })
        }
      } catch (error) {
        setStatus('idle')
        toast({
          variant: 'destructive',
          title: 'Signup Failed',
          description: error.message || 'Signup failed, please try again.',
        })
      }
    },
    [status, signup, reset, toast],
  )

  // Countdown timer - only active when signup is successful
  useEffect(() => {
    if (status !== 'success') return

    const startTime = Date.now()
    let intervalId = null

    intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(REDIRECT_DELAY_MS - elapsed, 0)
      setRemainingMs(remaining)

      // Redirect when time is up
      if (remaining === 0) {
        clearInterval(intervalId)
        router.navigate({ to: '/' })
      }
    }, COUNTDOWN_UPDATE_INTERVAL)

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [status, router])

  if (status === 'success') {
    return (
      <div className="mt-20 flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6 rounded-lg bg-white p-6 text-center font-san shadow-md">
          {/* Large centered icon */}
          <CheckCircle2Icon className="h-28 w-28 text-green-500" />

          {/* Bigger heading */}
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Signup Successful!
          </h2>

          {/* Description */}
          <p className="max-w-lg text-sm text-gray-600">
            Your account has been created successfully. Please check your email
            to verify your account.
          </p>

          {/* Countdown */}
          <p className="text-sm text-gray-500">
            Redirecting to home in{' '}
            <span className="font-medium">{formatTime(remainingMs)}</span>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative place-content-center items-center p-[20px]">
      <div className="flex flex-row-reverse overflow-hidden rounded-r-xl">
        <div className="relative hidden basis-[45%] place-content-center items-center overflow-hidden bg-[#D8DCE4] lg:flex">
          {/* Logo */}
          <img
            src="/assets/learnhub.png"
            alt="Logo"
            className="absolute right-0 top-0 m-[15px] w-[150px]"
          />
          {/* Logo */}

          {/* Top Right Image */}
          <img
            src="/assets/mockups/signup_top_mockup.svg"
            alt="MockupImage"
            className="absolute left-0 top-[-10px] w-[350px]"
          />
          {/* Top Right Image */}

          <h3 className="w-[90%] text-right font-montserrat text-[45px] font-bold text-normal_green">
            A Hub for <br /> Empowerment and <br /> Skill Development
          </h3>

          {/* Bottom Left Image */}
          <img
            src="/assets/mockups/signup_bottom_mockup.svg"
            alt="MockupImage"
            className="absolute -right-1 bottom-[-80px] w-[400px]"
          />
          {/* Bottom Left Image */}
        </div>

        <div className="flex basis-[100%] flex-col place-content-center lg:basis-[55%] lg:flex-row lg:items-center">
          {/* Logo */}
          <div className="flex place-content-center lg:hidden">
            <img
              src="/assets/learnhub-logo.svg"
              alt="Logo"
              className="w-[150px]"
            />
          </div>
          {/* Logo */}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="basis-[100%] space-y-5 p-[5px] lg:basis-[75%]"
          >
            <h3 className="font-san text-[38px] font-semibold">Sign Up</h3>

            <div className="space-y-5">
              {/* First Name and Last Name */}
              <div className="inputs grid lg:grid-cols-2 lg:space-x-3">
                <div className="inputs grid space-y-2">
                  <label
                    htmlFor="first_name"
                    className="font-san tracking-wide text-[#303031]"
                  >
                    First name
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register('first_name', { required: true })}
                    id="first_name"
                    placeholder="Enter first name"
                    className="rounded-md border border-[#84848481] p-[12px] font-san text-[#AAAAAA]"
                  />
                </div>

                <div className="inputs grid space-y-2">
                  <label
                    htmlFor="last_name"
                    className="font-san tracking-wide text-[#303031]"
                  >
                    Last name
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register('last_name', { required: true })}
                    id="last_name"
                    placeholder="Enter last name"
                    className="rounded-md border border-[#84848481] p-[12px] font-san text-[#AAAAAA]"
                  />
                </div>
              </div>
              {/* First Name and Last Name */}

              {/* Email */}
              <div className="inputs grid space-y-2">
                <label
                  htmlFor="email"
                  className="font-san tracking-wide text-[#303031]"
                >
                  Email address
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  id="email"
                  placeholder="Enter email address"
                  className="rounded-md border border-[#84848481] p-[12px] font-san text-[#AAAAAA]"
                />
              </div>
              {/* Email */}

              {/* Password */}
              <div className="inputs grid space-y-2">
                <label
                  htmlFor="password"
                  className="font-san tracking-wide text-[#303031]"
                >
                  Password
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  {...register('password', { required: true })}
                  id="password"
                  placeholder="Enter password"
                  className="rounded-md border border-[#84848481] p-[12px] font-san text-[#AAAAAA]"
                />
              </div>
              {/* Password */}

              {/* Confirm Password */}
              <div className="inputs grid space-y-2">
                <label
                  htmlFor="confirm_password"
                  className="font-san tracking-wide text-[#303031]"
                >
                  Confirm password
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  {...register('confirm_password', { required: true })}
                  id="confirm_password"
                  placeholder="Confirm password"
                  className="rounded-md border border-[#84848481] p-[12px] font-san text-[#AAAAAA]"
                />
              </div>
              {/* Confirm Password */}
            </div>

            {status !== 'loading' ? (
              <Button
                type="submit"
                className="h-[51px] w-full rounded-lg bg-normal_green font-san text-[18px] text-white"
              >
                Sign Up
              </Button>
            ) : (
              <Button
                disabled
                className="h-[51px] w-full rounded-lg bg-normal_green font-san text-[18px] text-white"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing you up...
              </Button>
            )}

            <p className="font-san">
              Already have an account?&nbsp;
              <Link
                to={`/login`}
                className="font-semibold text-normal_green underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
