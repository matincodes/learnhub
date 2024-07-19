import { createFileRoute } from '@tanstack/react-router'
import Logo from "../assets/learnhub-logo.svg";
import Signup_bottom_mockup from "../assets/mockups/signup_bottom_mockup.svg";
import Signup_top_mockup from "../assets/mockups/signup_top_mockup.svg";

export const Route = createFileRoute('/signup')({
  component: () => SignUp()
})

const SignUp = () =>(
  <div className=" place-content-center items-center p-[20px] relative">
        <div className="h-[90lvh] rounded-l-xl flex flex-row-reverse overflow-hidden">
            <div className='basis-[45%] bg-[#D8DCE4] relative overflow-hidden flex place-content-center items-center'>
            {/* Logo */}
              <img src={Logo} alt="Logo" className='absolute top-0 right-0 m-[15px] w-[150px]'/>
            {/* Logo */}

            {/* Top Right Image */}
              <img src={Signup_top_mockup} alt="MockupImage" className='absolute top-[-10px] left-0 w-[450px]'/>
            {/* Top Right Image */}

              <h3 className='text-normal_green text-[45px] font-montserrat font-bold w-[90%] text-right'>A Hub for <br /> Empowerment and <br /> Skill Development</h3>

            {/* Bottom Left Image */}
              <img src={Signup_bottom_mockup} alt="MockupImage" className='absolute bottom-[-80px] -right-1  w-[500px]'/>
            {/* Bottom Left Image */}

            </div>


            <div className='basis-[55%] flex items-center place-content-center'>
                <form action="" method="post" className='basis-[70%] p-[10px] space-y-9'>
                    <h3 className='font-san font-semibold text-[38px]'>Sign Up</h3>

                    <div className=" space-y-5 ">
                      {/* First Name and Last Name */}
                      <div className="inputs grid grid-cols-2 space-x-3">

                        <div className="inputs grid space-y-2">
                          <label htmlFor="firstName" className='font-san text-[#303031] tracking-wide'>First name</label>
                          <input type="text" name="firstName" id="firstName" placeholder="Enter first name"  className='border border-[#84848481] p-[12px] text-[#AAAAAA] rounded-md text-san'/>
                        </div>

                        <div className="inputs grid space-y-2">
                          <label htmlFor="lastName" className='font-san text-[#303031] tracking-wide'>Last name</label>
                          <input type="text" name="lastName" id="lastName" placeholder="Enter email address"  className='border border-[#84848481] p-[12px] text-[#AAAAAA] rounded-md text-san'/>
                        </div>

                      </div>
                      {/* First Name and Last Name */}
                      
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
                          
                      </div>
                      {/* Password */}

                      {/* Confirm Password */}
                      <div className="inputs grid space-y-2">
                        <label htmlFor="confirm_password" className='font-san text-[#303031] tracking-wide'>Confirm password</label>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm password"  className='border border-[#84848481] p-[12px] text-[#AAAAAA] rounded-md text-san'/>
                          
                      </div>
                      {/* Confirm Password */}

                    </div>

                    <button className="w-full p-[12px] text-[18px] font-san text-white rounded-lg bg-normal_green">Sign up</button>

                    <p className='font-san'>Already have an account? <a href='/login' className='underline text-normal_green font-semibold'> Log in</a> </p>

                </form>
            </div>
        </div>
  </div>
)