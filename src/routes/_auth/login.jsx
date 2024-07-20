import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/login')({
  component: () => Login()
})

const Login = () => (
  <div className="relative place-content-center items-center p-[20px]">
    <div className="flex h-[90lvh] overflow-hidden rounded-l-xl">
      <div className="relative flex basis-[45%] place-content-center items-center overflow-hidden bg-[#D8DCE4]">
        {/* Logo */}
        <img
          src="/assets/learnhub-logo.svg"
          alt="Logo"
          className="absolute left-0 top-0 m-[15px] w-[150px]"
        />
        {/* Logo */}

        {/* Top Right Image */}
        <img
          src="/assets/mockups/login_bottom_mockup.svg"
          alt="MockupImage"
          className="absolute right-0 top-0 w-[280px]"
        />
        {/* Top Right Image */}

        <h3 className="w-[90%] font-montserrat text-[45px] font-bold text-normal_green">
          A Platform to <br /> Empower and upskill
        </h3>

        {/* Bottom Left Image */}
        <img
          src="/assets/mockups/login_bottom_mockup.svg"
          alt="MockupImage"
          className="absolute bottom-0 left-0 w-[280px]"
        />
        {/* Bottom Left Image */}
      </div>

      <div className="flex basis-[55%] place-content-center items-center">
        <form
          action=""
          method="post"
          className="basis-[60%] space-y-9 p-[10px]"
        >
          <h3 className="font-san text-[38px] font-semibold">Log in</h3>

          <div className="space-y-5">
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
                name="email"
                id="email"
                placeholder="Enter email address"
                className="text-san rounded-md border border-[#84848481] p-[12px] text-[#AAAAAA]"
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
                name="password"
                id="password"
                placeholder="Enter password"
                className="text-san rounded-md border border-[#84848481] p-[12px] text-[#AAAAAA]"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <input
                    type="checkbox"
                    name="remember_password"
                    id="remember_password"
                    className="relative h-5 w-5 appearance-auto accent-normal_green"
                  />
                  <label
                    htmlFor="remember_password"
                    className="font-san text-[15px]"
                  >
                    Remember Password
                  </label>
                </div>
                <p className="font-san text-[15px] text-[#FA5B66]">
                  Forgot Password?
                </p>
              </div>
            </div>
            {/* Password */}
          </div>

          <button className="w-full rounded-lg bg-normal_green p-[12px] font-san text-[18px] text-white">
            Log in
          </button>

          <p className="font-san">
            Don&apos;t have an account?{' '}
            <a
              href="/signup"
              className="font-semibold text-normal_green underline"
            >
              {' '}
              Sign Up
            </a>{' '}
          </p>
        </form>
      </div>
    </div>
  </div>
)