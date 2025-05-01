import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/auth-context'
import { useToast } from '@/hooks/use-toast'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { forwardRef, useState } from 'react'
import { useForm } from 'react-hook-form'

export const Route = createFileRoute('/admin/_auth/login')({
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
    if (await login('admin', data)) {
      reset()
      router.invalidate()
      if (redirect) router.history.push(redirect)
      else router.navigate({ to: '/' })
    } else {
      setIsLoading(false)
      return toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'Login failed, please try again.',
      })
    }
  }

  return (
    <div className="">
      <div className="flex h-auto w-full">
        <div className=" hidden w-[50%] h-auto lg:flex ">
          {/* Logo */}
          <img
            src="/assets/mockupAdmin.svg"
            alt="Logo"
            width="100%"
            height="100%"
          />
          {/* Logo */}

        </div>

        <div className=" h-auto w-full mt-[49px] lg:w-[50%] flex flex-col justify-center items-center ">
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
            className="w-[90%] space-y-9 p-[10px] "
          >
            <h3 className="font-san text-[38px] font-semibold">Admin Login</h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="inputs grid space-y-2">
                <label
                  htmlFor="email"
                  className="font-normal text-[12px] font-san tracking-wide text-[#303031] lg:text-[16px]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  id="email"
                  placeholder="Email"
                  className="rounded-md border border-[#84848481] p-[12px] font-san text-[#AAAAAA]"
                />
              </div>
              {/* Email */}

              {/* Password */}
              <div className="inputs grid space-y-2">
                <label
                  htmlFor="password"
                  className="font-normal text-[12px] font-san tracking-wide text-[#303031] lg:text-[16px]"
                >
                  Password
                </label>
                <PasswordInput
                  {...register('password', { required: true })}
                  id="password"

                />
                <div className="mt-1 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <input
                      type="checkbox"
                      name="remember_password"
                      id="remember_password"
                      className="relative h-5 w-5 appearance-auto accent-normal_green"
                    />
                    <label
                      htmlFor="remember_password"
                      className="font-san text-[8px] font-normal lg:text-[12px]"
                    >
                      Remember Password
                    </label>
                  </div>
                  <p className="font-san text-[8px] font-normal  text-[#626262] lg:text-[12px]">
                    Forgot Password?
                  </p>
                </div>
              </div>
              {/* Password */}
            </div>

            {!isLoading ? (
              <Button
                type="submit"
                className="h-[51px] w-full rounded-lg bg-normal_green font-san text-[18px] text-white"
              >
                Log In
              </Button>
            ) : (
              <Button
                disabled
                className="h-[51px] w-full rounded-lg bg-normal_green font-san text-[18px] text-white"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging you in...
              </Button>
            )}

            <p className="font-san text-[#616161] font-normal text-[15px] text-center">
              Need access? Contact your system administrator.
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
        className="w-full rounded-md border border-[#84848481] p-[12px] font-normal font-san text-[#AAAAAA]"
      />
      <button
        className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-500 hover:text-gray-700"
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  )
})

PasswordInput.displayName = 'PasswordInput'
