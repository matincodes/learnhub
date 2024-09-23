import { useEffect, useRef } from 'react'
import { Link } from '@tanstack/react-router'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CiSearch } from 'react-icons/ci'
import { navLinks } from '@/data/NavBar'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const NavBar = () => {

  const openMenu = useRef(null);

  const OpenMenu = () =>{
    openMenu.current.style.background === 'orange'
  }

  return (
    <>
      <div className="top-0 sticky flex items-center justify-around p-8 lg:p-5 bg-white z-40">
        <img
          src="/assets/learnhub-logo.svg" 
          className="absolute w-[120px] lg:relative lg:w-[150px]"
        />
        <FiMenu className="absolute right-4 text-[23px] items-center text-[#374957] lg:hidden" onClick={OpenMenu} cursor={'pointer'} />
        {/* <FiX className="absolute right-4 text-[23px] items-center text-[#374957] lg:hidden" onClick={OpenMenu} cursor={'pointer'} /> */}


        {/* NavLinks and SearchBar */}
        <div className="flex basis-[50%] items-center p-0 lg:relative" ref={openMenu} >
         
         <div className="lg:w-[80%] lg:h-0 lg:relative absolute left-0 lg:top-0 top-[64px] flex w-full h-screen bg-[rgba(255,255,255,0.31)] backdrop-blur-sm ">
         <div className="lg:flex lg:flex-row lg:relative lg:items-center lg:justify-evenly absolute lg:top-0 left-0 bg-white lg:p-[0] lg:space-y-0 w-full flex flex-col pl-6 pb-7 shadow-lg rounded-b-3xl ">
          <Link
            to="/"
            className=" outline-0 font-san text-[16px] lg:flex [&.active]:font-normal bg-white lg:p-0 pl-0 p-4 "
          >
            Home
          </Link>

          <DropdownMenu className="font-san">
            <DropdownMenuTrigger asChild className=" lg:flex !ring-0 !outline-none lg:p-0 focus:bg-transparent pt-7 pb-7 rounded-none">
              <Button className="font-san font-normal text-[16px] justify-start pl-0">Courses</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-14 bg-white">
              {navLinks.map(links => (
                <>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger key={links.id}>
                      {' '}
                      {links.name}{' '}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-white">
                        <DropdownMenuLabel className="font-normal text-[#848484]">
                          Sub Courses
                        </DropdownMenuLabel>
                        {links.subcourses.map(item => (
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

          <Link
            to="/"
            className=" outline-0 font-san text-[16px] lg:flex [&.active]:font-normal bg-white lg:p-0 pl-0 p-4"
          >
            Pricing
          </Link>


          <div className="grid lg:hidden space-y-7 mt-4">
          <Button asChild className='lg:hidden w-fit'>
            <Link to="/login" className="font-san bg-[#FAFFFD] border">
              Log in
            </Link>
          </Button>
          <Button asChild className='lg:hidden bg-normal_green w-fit '>
            <Link
              to="/signup"
              className="rounded-lg font-san text-white shadow-md lg:hidden "
            >
              Sign Up
            </Link>
          </Button>
        </div>

        </div>




          </div>

          <div className="lg:relative absolute left-0 flex lg:basis-full items-center lg:border rounded-lg lg:p-1 p-3 space-x-1">
            <CiSearch className="text-[30px] relative text-[#848484d8]" />
            <input
              type="text"
              placeholder="Search for anything"
              className="relative text-[16px] p-1 focus:border-none bg-transparent lg:w-full focus:outline-none focus:ring-0 placeholder:font-san placeholder:text-[#383838e8] hidden lg:flex "
            />
          </div>
        </div>
        {/* NavLinks and SearchBar */}


        <div className="hidden w-[15%] justify-around lg:flex">
          <Button asChild>
            <Link to="/login" className="font-san bg-[#FAFFFD]">
              Log in
            </Link>
          </Button>
          <Button asChild>
            <Link
              to="/signup"
              className="rounded-xl bg-normal_green font-san text-white shadow-md"
            >
              Sign Up
            </Link>
          </Button>
        </div>
        
      </div>
    </>
  )
}

export default NavBar
