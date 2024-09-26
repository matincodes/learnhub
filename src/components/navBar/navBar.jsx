import { useEffect, useRef, useState } from 'react'
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
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

const NavBar = e => {
  const [navState, setNavState] = useState('none')

  const openMenu = useRef(null)

  const OpenMenu = () => {
    setNavState((openMenu.current.style.display = 'flex'))
  }
  const CloseMenu = () => {
    setNavState((openMenu.current.style.display = 'none'))
  }
  console.log(navState)

  return (
    <>
      <div
        className={`top-0 ${e.NavStatus} z-40 flex items-center justify-around bg-white p-10 lg:p-5`}
      >
        <img
          src="/assets/learnhub-logo.svg"
          className="absolute w-[120px] lg:relative lg:w-[150px]"
        />

        <Sheet>
          <div className="absolute flex w-full justify-end p-3">
            <SheetTrigger>
              <FiMenu
                className="items-center text-[25px] text-[#374957] lg:hidden"
                cursor={'pointer'}
              />
              {/* {navState === 'none' ? <FiMenu className="text-[25px] items-center text-[#374957]  lg:hidden" onClick={OpenMenu} cursor={'pointer'} /> : <FiX className="text-[25px] items-center text-[#374957] lg:hidden" onClick={CloseMenu} cursor={'pointer'} /> } */}
            </SheetTrigger>

          </div>

          {/* NavLinks and SearchBar */}
          <div className="flex basis-[50%] items-center p-0 lg:relative">
            <div className="absolute left-0 top-[64px] hidden h-screen w-full backdrop-blur-sm lg:relative lg:top-0 lg:flex lg:h-0 lg:w-[80%] ">
             
             {/* Desktop */}
             <div className="absolute left-0 flex w-full flex-col rounded-b-3xl bg-white pb-7 pl-6 shadow-lg transition-all lg:relative top-[60px] lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0 lg:p-[0]">
             <Link
                    to="/"
                    className="bg-white p-1 pl-0 font-san text-[16px] outline-0 lg:flex lg:p-0 "
                  >
                    Home
                  </Link>

                  <DropdownMenu className="font-san">
                    <DropdownMenuTrigger
                      asChild
                      className="rounded-none pb-7 pt-7 !outline-none !ring-0 focus:bg-transparent lg:flex lg:p-0"
                    >
                      <Button className="justify-start pl-0 font-san text-[16px] font-normal">
                        Courses
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-14 bg-white">
                      {navLinks.map(links => (
                        <>
                          {console.log(links.name)}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger key={links.id}>
                              {' '}
                              {links.name}{' '}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent
                                key={links.name}
                                className="bg-white"
                              >
                                <DropdownMenuLabel className="font-normal text-[#848484]">
                                  Sub Courses
                                </DropdownMenuLabel>
                                {links.subcourses.map(item => (
                                  <>
                                    <DropdownMenuItem key={item.id}>
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
                    className="bg-white p-1 pl-0 font-san text-[16px] outline-0 lg:flex lg:p-0 "
                  >
                  Pricing
                  </Link>

                  <div className="mt-4 grid space-y-7 lg:hidden">
                    <Button asChild className="w-fit lg:hidden">
                      <Link
                        to="/login"
                        className="border bg-[#FAFFFD] font-san"
                      >
                        Log in
                      </Link>
                    </Button>
                    <Button asChild className="w-fit bg-normal_green lg:hidden">
                      <Link
                        to="/signup"
                        className="rounded-lg font-san text-white shadow-md lg:hidden"
                      >
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                </div>
             {/* Desktop */}



            {/* Mobile */}
            <SheetContent side={'top'} className="flex flex-col bg-white top-[65px] space-y-0 rounded-b-3xl pb-16">
                {/* <div className="absolute left-0 flex w-full flex-col rounded-b-3xl bg-white pb-7 pl-6 shadow-lg transition-all lg:relative top-[60px] lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0 lg:p-[0]"> */}
                  <Link
                    to="/"
                    className="bg-white p-1 pl-0 font-inter text-[16px] outline-0 lg:flex lg:p-0 font-semibold"
                  >
                    Home
                  </Link>

                  <DropdownMenu className="font-san">
                    <DropdownMenuTrigger
                      asChild
                      className="rounded-none pb-3 pt-3 !outline-none !ring-0 focus:bg-transparent lg:flex lg:p-0"
                    >
                      <Button className="justify-start pl-0 text-[16px] font-inter font-semibold ">
                        Courses
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-14 bg-white">
                      {navLinks.map(links => (
                        <>
                          {console.log(links.name)}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger key={links.id}>
                              {' '}
                              {links.name}{' '}
                            </DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent
                                key={links.name}
                                className="bg-white"
                              >
                                <DropdownMenuLabel className="font-normal text-[#848484]">
                                  Sub Courses
                                </DropdownMenuLabel>
                                {links.subcourses.map(item => (
                                  <>
                                    <DropdownMenuItem key={item.id}>
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
                    className="bg-white p-1 pl-0 text-[16px] outline-0 lg:flex lg:p-0 font-inter font-semibold ">
                    Pricing
                  </Link>

                  <div className="mt-4 grid space-y-7 lg:hidden">
                    <Button asChild className="w-fit lg:hidden">
                      <Link
                        to="/login"
                        className="border bg-[#FAFFFD] font-san"
                      >
                        Log in
                      </Link>
                    </Button>
                    <Button asChild className="w-fit bg-normal_green lg:hidden">
                      <Link
                        to="/signup"
                        className="rounded-lg font-san text-white shadow-md lg:hidden"
                      >
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                {/* </div> */}
              </SheetContent>
            {/* Mobile */}

            </div>

            {/* Search Bar */}

            <div className="absolute left-0 flex items-center space-x-1 rounded-lg p-3 lg:relative lg:basis-full lg:border lg:p-1">
              <CiSearch
                className={`text-[30px] text-[#848484d8] lg:relative ${navState === 'none' ? 'z-30 lg:flex' : ''} `}
              />
              <input
                type="text"
                placeholder="Search for anything"
                className="relative hidden bg-transparent p-1 text-[16px] placeholder:font-san placeholder:text-[#383838e8] focus:border-none focus:outline-none focus:ring-0 lg:flex lg:w-full"
              />
            </div>
            {/* Search Bar */}
          </div>
          {/* NavLinks and SearchBar */}
        </Sheet>

        <div className="hidden w-[15%] justify-around lg:flex">
          <Button asChild>
            <Link to="/login" className="bg-[#e5f5ee59] font-san">
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
