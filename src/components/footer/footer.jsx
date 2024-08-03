import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'


const Footer = () =>(
     <div className="flex flex-col p-5 bg-dark_green relative">
          
          <div className="flex items-center p-4 justify-between">
               <img src="/assets/learnhub-logo-footer.svg" alt="" className="lg:w-[230px] w-[170px]"/>
               <div className="icon flex gap-4 h-full items-end">
                  <Link to={``}>  <LuTwitter className="lg:text-[30px] text-[25px] text-white"/>  </Link>
                  <Link to={``}>  <LuFacebook className="lg:text-[30px] text-[25px] text-white"/>  </Link>
                  <Link to={``}>  <LuInstagram className="lg:text-[30px] text-[25px] text-white"/>  </Link>
                  <Link to={``}>  <LuLinkedin className="lg:text-[30px] text-[25px] text-white"/>  </Link>
               </div>
          </div>

          <div className="border-t border-b border-[#5A5A5A] h-full grid lg:grid-cols-2 lg:divide-x divide-y divide-[#5A5A5A]">
               <div className="flex flex-col pt-5 pr-4 pb-10 gap-4 ">
                    <p className="text-[12px] text-[#D9D9D9]">Welcome to learnhub , where we are dedicated to revolutionizing education through innovative technology solutions. Our passion lies in empowering individuals and institutions to thrive in today's rapidly evolving digital landscape.
                    </p>
                    <p className="text-[12px] text-[#D9D9D9]"> 
                    Our purpose is to create technology that empowers individuals and businesses Our user-centric approach ensures that our products are intuitive and easy to use. Whether you're a student, educator, or lifelong learner, our solutions are designed to seamlessly integrate into your educational journey, making learning more accessible, engaging, and enjoyable.</p>
               </div>

               <div className="flex p-4 gap-7">
               
                    <div className="space-y-4 lg:basis-[30%] basis-[50%]">
                         <h1 className="text-white font-manule">Popular Programs</h1>
                         <ul className="text-[#848484] gap-1 grid">
                              <li className="text-[13px]"><Link to={''}>CyberSecurity</Link></li>
                              <li className="text-[13px]"><Link to={''}>Full Stack Engineering</Link></li>
                              <li className="text-[13px]"><Link to={''}>UX Design</Link></li>
                              <li className="text-[13px]"><Link to={''}>Data Analytics</Link></li>
                         </ul>
                    </div>

               <div className="grid lg:grid-cols-2 lg:space-y-0 space-y-14">
                    <div className=" space-y-4 ">
                         <h1 className="text-white font-manule">Information</h1>
                         <ul className="text-[#848484] gap-1 grid">
                              <li className="text-[13px]"><Link to={''}>Investors</Link></li>
                              <li className="text-[13px]"><Link to={''}>Support</Link></li>
                         </ul>
                    </div>

                    <div className="space-y-4">
                         <h1 className="text-white font-manule">Newletter</h1>
                         <p className="text-[13px] text-[#848484]">Lorem ipsum dolor sit amet consectetur.</p>
                         <Button className='text-[#2265AD] bg-white font-san font-semibold rounded-full w-fit h-fit'> <Link to={''}>Subscribe</Link> </Button>
                    </div>
               </div>

               </div>
          </div>


          <div className="pt-6 pb-6 flex lg:flex-row lg:gap-0 flex-col-reverse gap-5 justify-between text-white font-san">
               <p className="text-[14px]">@2023 LearnHubbyCoderina all rights Reserved</p>
               <ul className="gap-3 flex">
                              <li className="text-[13px]"><Link to={''}>Cookie</Link></li>
                              <li className="text-[13px]"><Link to={''}>Privacy</Link></li>
                              <li className="text-[13px]"><Link to={''}>Terms Of Use</Link></li>
                         </ul>
          </div>

     </div>
)

export default Footer