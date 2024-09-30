import { createFileRoute, Link } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'

export const Route = createFileRoute('/_auth/signup')({
  component: () => SignUp(),
})

const SignUp = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm()

  const onSubmit = async data => {
    // await fetch('https://coderina-learnhub.onrender.com/api/students/login/', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    // })
    console.log(data)
  }
  return (
    <div className="relative place-content-center items-center p-[20px]">
      <div className="flex flex-row-reverse overflow-hidden rounded-r-xl">
        <div className="relative hidden basis-[45%] place-content-center items-center overflow-hidden bg-[#D8DCE4] lg:flex">
          {/* Logo */}
          <img
            src="/assets/learnhub-logo.svg"
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
                    htmlFor="firstName"
                    className="font-san tracking-wide text-[#303031]"
                  >
                    First name
                  </label>
                  <input
                    {...register('firstName', { required: true })}
                    id="firstName"
                    placeholder="Enter first name"
                    className="rounded-md border border-[#84848481] p-[12px] font-san text-[#AAAAAA]"
                  />
                </div>

                <div className="inputs grid space-y-2">
                  <label
                    htmlFor="lastName"
                    className="font-san tracking-wide text-[#303031]"
                  >
                    Last name
                  </label>
                  <input
                    {...register('lastName', { required: true })}
                    id="lastName"
                    placeholder="Enter email address"
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

            <button
              type="submit"
              className="w-full rounded-lg bg-normal_green p-[12px] font-san text-[18px] text-white"
            >
              Sign up
            </button>

            <p className="font-san">
              Already have an account?
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
