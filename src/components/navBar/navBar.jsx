import { Link } from '@tanstack/react-router'
import { Input } from '@/components/ui/input'
import { Button } from  '@/components/ui/button'
import { CiSearch  } from "react-icons/ci"
import { navLinks } from '@/data/NavBar'
import { FiMenu } from 'react-icons/fi'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


const navBar = () =>{
     return(
          <>
          
          <div className='lg:p-2 p-8 flex justify-around items-center relative'>
               <img src='/assets/learnhub-logo.svg' className='lg:relative  absolute lg:w-[150px] w-[120px] ' />
               <FiMenu className='lg:hidden absolute right-4 text-[23px] text-[#374957]'/>

               <div className="lg:relative absolute left-0 flex basis-[30%] justify-around p-0 items-center">
                    <Link to='/' className='[&.active]:font-normal text-[16px] font-san lg:flex hidden'>
                         Home
                    </Link>
                    
                    <DropdownMenu className='font-san'>
                         <DropdownMenuTrigger asChild className='lg:flex hidden'>
                         <Button className='font-normal font-san'>Open</Button>
                         </DropdownMenuTrigger>
                         <DropdownMenuContent className="w-14 bg-white">

                              {navLinks.map(links=>(
                                   <>
                                   <DropdownMenuSub>
                                   <DropdownMenuSubTrigger  key={links.id}> {links.name} </DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                        <DropdownMenuSubContent className='bg-white'>
                                        <DropdownMenuLabel className='text-[#848484] font-normal'>Sub Courses</DropdownMenuLabel>
                                             {links.subcourses.map(item=>(
                                                  <>
                                                       <DropdownMenuItem>
                                                            <Link to={'/'}> {item.name} </Link>
                                                       </DropdownMenuItem>
                                                  </>
                                             ))}         
                                        </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                   </DropdownMenuSub>
                                   </>
                              ))}
                         </DropdownMenuContent>
                    </DropdownMenu>


               <div className="flex items-center basis-[60%] relative">
                    <label htmlFor="" className='relative lg:border p-[9px] lg:border-r-0 -right-2 rounded-l-md border-[#848484] bg-white cursor-pointer'><CiSearch  className='text-[20px]'/></label>
                    <Input type="text" placeholder='Search for anything' className="placeholder:text-black placeholder:font-san border-l-0 focus-visible:ring-0 border-[#848484] lg:flex hidden"/>
               </div>

               </div>

               <div className=" w-[15%] lg:flex justify-around hidden">
                    <Button asChild>
                         <Link to='/login' className='font-san'>Log in</Link>
                    </Button>
                    <Button asChild>
                         <Link to='/signup' className='font-san rounded-none bg-normal_green text-white'>Sign Up</Link>
                    </Button>
               </div>
      </div>
          </>
     )
}

export default navBar