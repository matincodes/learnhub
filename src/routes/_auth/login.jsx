import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/auth-context'
import { useToast } from '@/hooks/use-toast'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { forwardRef, useState } from 'react'
import { useForm } from 'react-hook-form'

export const Route = createFileRoute('/_auth/login')({
  component: Login,
})

function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm()
  const { login } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const redirect = Route.useSearch({ select: s => s.redirect })

  const onSubmit = async data => {
    setIsLoading(true)
    const result = await login('student', data)

    if (result.success) {
      reset()
      router.invalidate()
      if (redirect) router.history.push(redirect)
      else router.navigate({ to: result.redirect })
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Login failed, please try again.',
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="relative grid p-[20px]">
      <div className="flex h-[90lvh] w-full overflow-hidden rounded-l-xl">
        {/* Left Column */}
        <div className="relative hidden basis-[45%] place-content-center items-center overflow-hidden bg-[#D8DCE4] lg:flex">
          <img src="/assets/learnhub.png" alt="Logo" className="absolute left-0 top-0 m-[15px] w-[150px]" />
          <img src="/assets/mockups/login_bottom_mockup.svg" alt="MockupImage" className="absolute -right-8 -top-7 w-[280px]" />
          <h3 className="w-[90%] font-montserrat text-[45px] font-bold text-normal_green">
            A Platform to <br /> Empower and upskill
          </h3>
          <img src="/assets/mockups/login_bottom_mockup.svg" alt="MockupImage" className="absolute bottom-0 left-0 w-[280px]" />
        </div>

        {/* Right Column */}
        <div className="flex basis-full flex-col place-content-center lg:basis-[55%] lg:flex-row lg:items-center">
          <div className="flex place-content-center lg:hidden">
            <img src="/assets/learnhub-logo.svg" alt="Logo" className="w-[150px]" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-9 p-[10px] lg:basis-[60%]">
            <h3 className="font-san text-[38px] font-semibold">Log in</h3>

            <div className="space-y-5">
              {/* Email Field */}
              <div className="inputs grid space-y-2">
                <label htmlFor="email" className="font-san tracking-wide text-[#303031]">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register('email', { required: true })}
                  className="rounded-md border border-[#84848481] p-[12px] font-san text-[#AAAAAA]"
                />
              </div>

              {/* Password Field */}
              <div className="inputs grid space-y-2">
                <label htmlFor="password" className="font-san tracking-wide text-[#303031]">Password</label>
                <PasswordInput {...register('password', { required: true })} id="password" />
                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      id="remember_password"
                      className="h-5 w-5 accent-normal_green"
                    />
                    <label htmlFor="remember_password" className="font-san text-[15px]">Remember Password</label>
                  </div>
                  <p className="font-san text-[15px] text-[#FA5B66] cursor-pointer">Forgot Password?</p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="h-[51px] w-full rounded-lg bg-normal_green font-san text-[18px] text-white"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging you in...
                </>
              ) : (
                'Log In'
              )}
            </Button>

            <p className="font-san">
              Don&apos;t have an account?{' '}
              <Link to={`/signup`} className="font-semibold text-normal_green underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

const PasswordInput = forwardRef(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative flex-1">
      <input
        type={showPassword ? 'text' : 'password'}
        ref={ref}
        {...props}
        placeholder="Enter password"
        className="w-full rounded-md border border-[#84848481] p-[12px] font-san text-[#AAAAAA]"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  )
})

PasswordInput.displayName = 'PasswordInput'
