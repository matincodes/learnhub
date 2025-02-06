import { createFileRoute } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import bg_image from '../../../../public/assets/adminImg.svg'

// Define the route for the admin login page
export const Route = createFileRoute('/admin/_auth/login')({
  component: Login,
})

function Login() {
  // State for toggling password visibility
  const [showPassword, setShowPassword] = useState(true)

  // State for tracking checkbox selection (Remember Password option)
  const [checked, setChecked] = useState(false)

  // Handle checkbox state change
  const handleChange = event => {
    setChecked(event.target.checked)
  }
  // Initialize the form using react-hook-form
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    console.log(data)
    console.log(checked)
  }

  return (
    <div className="flex items-center">
      {/* Background Image - Only visible on extra-large screens */}
      <img alt="background image" src={bg_image} className="hidden xl:flex" />

      {/* LOGIN COMPONENT */}
      <div className="flex h-screen w-full flex-col items-center xl:w-[50%] xl:flex-row xl:items-center xl:justify-center">
        {/* Logo - Visible only on smaller screens */}
        <img
          alt="learn-hub-logo"
          src="\assets\learnhub-logo.svg"
          className="mt-[69px] h-[60px] w-[169px] xl:hidden"
        />

        {/* Login Form Container */}
        <div className="mt-[44px] flex h-[457px] w-[80%] flex-col gap-[40px]">
          <form
            className="flex h-[393px] w-full flex-col gap-[49px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="font-sans text-[36px] font-semibold text-black">
              Admin Login
            </h1>

            {/* Input Fields */}
            <div className="flex h-[219px] w-full flex-col gap-[27px]">
              {/* Email Input */}
              <span className="flex h-[81px] w-full flex-col gap-[5px]">
                <label className="text-dark_gray font-sans text-[12px] font-normal leading-[24px]">
                  Email address
                </label>
                <input
                  placeholder="Enter email address"
                  type="email"
                  className="h-[52px] w-full rounded-md border-[1px] border-normal_green px-[10px] py-[10px] font-sans text-[12px] font-normal text-[#AAAAAA] outline-none"
                  {...register('Email address' , {required: true})}
                />
              </span>

              {/* Password Input with Toggle Visibility */}
              <span className="flex h-[81px] w-full flex-col gap-[5px]">
                <label className="text-dark_gray font-sans text-[12px] font-normal leading-[24px]">
                  Password
                </label>
                <div className="flex h-auto w-full items-center justify-between rounded-md border-[1px] border-normal_green px-[10px]">
                  <input
                    placeholder="Enter password"
                    type={showPassword ? 'password' : 'text'}
                    className="h-[52px] w-full font-sans text-[12px] font-normal text-[#AAAAAA] outline-none"
                    {...register('Password' , {required: true})}
                  />
                  {/* Toggle Password Visibility Button */}
                  <span
                    className="cursor-pointer text-[#B4B4B4]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </span>
                </div>

                {/* Remember Password Checkbox */}
                <div className="flex h-[20px] w-full items-center justify-between">
                  <Checkbox
                    className="!p-0"
                    checked={checked}
                    onChange={handleChange}
                    sx={{
                      color: '#006038',
                      '&.Mui-checked': {
                        color: '#006038',
                      },
                    }}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                  <span className="font-sans text-[16px] font-normal text-[#595959]">
                    Remember password
                  </span>
                </div>
              </span>
            </div>

            {/* Submit Button */}
            <button className="h-[52px] w-full rounded-md bg-normal_green font-sans text-[14px] font-semibold text-white">
              Log in
            </button>
          </form>

          {/* Footer Message */}
          <p className="text-gray text-center font-sans text-[15px] font-normal leading-[24px]">
            Need access? Contact your system administrator.
          </p>
        </div>
      </div>
    </div>
  )
}
