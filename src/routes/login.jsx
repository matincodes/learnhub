import { createFileRoute } from '@tanstack/react-router';
import Logo from "../assets/learnhub-logo.svg";
import Login_bottom_mockup from "../assets/mockups/login_bottom_mockup.svg";
import Login_top_mockup from "../assets/mockups/login_top_mockup.svg";

export const Route = createFileRoute('/login')({
  component: () => Login()
})

const Login = () =>(
  <div className=" place-content-center items-center p-[20px] relative">
        <div className="h-[90lvh] rounded-l-xl flex overflow-hidden">
            <div className='basis-[45%] bg-[#D8DCE4] relative overflow-hidden flex place-content-center items-center'>
            {/* Logo */}
              <img src={Logo} alt="Logo" className='absolute top-0 left-0 m-[15px] w-[150px]'/>
            {/* Logo */}

            {/* Top Right Image */}
              <img src={Login_top_mockup} alt="MockupImage" className='absolute top-0 right-0 w-[280px]'/>
            {/* Top Right Image */}

              <h3 className='text-normal_green text-[45px] font-montserrat font-bold w-[90%]'>A Platform to <br /> Empower and upskill</h3>

            {/* Bottom Left Image */}
              <img src={Login_bottom_mockup} alt="MockupImage" className='absolute bottom-0 left-0 w-[280px]'/>
            {/* Bottom Left Image */}

            </div>


            <div className='basis-[55%] flex items-center place-content-center'>
                <form action="" method="post" className='basis-[60%] p-[10px] space-y-9'>
                    <h3 className='font-san font-semibold text-[38px]'>Log in</h3>

                    <div className=" space-y-5 ">
                      {/* Email */}
                      <div className="inputs grid space-y-2">
                        <label htmlFor="email" className='font-san text-[#303031] tracking-wide'>Email address</label>
                        <input type="email" name="email" id="email" placeholder="Enter email address"  className='border border-[#84848481] p-[12px] text-[#AAAAAA] rounded-md text-san'/>
                      </div>
                      {/* Email */}

                      {/* Password */}
                      <div className="inputs grid space-y-2">
                        <label htmlFor="password" className='font-san text-[#303031] tracking-wide'>Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter password"  className='border border-[#84848481] p-[12px] text-[#AAAAAA] rounded-md text-san'/>

                        <div className=" flex justify-between items-center">
                          <div className=" flex items-center space-x-1">
                            <input type="checkbox" name="remember_password" id="remember_password" className='accent-normal_green relative appearance-auto w-5 h-5  ' />
                            <label htmlFor="remember_password" className='text-[15px] font-san'>Remember Password</label>
                          </div>
                            <p className="text-[#FA5B66] text-[15px] font-san">Forgot Password?</p>
                        </div>
                      </div>
                      {/* Password */}

                    </div>

                    <button className="w-full p-[12px] text-[18px] font-san text-white rounded-lg bg-normal_green">Log in</button>

                    <p className='font-san'>Don't have an account? <a href='/signup' className='underline text-normal_green font-semibold'> Sign Up</a> </p>

                </form>
            </div>
        </div>
  </div>
)