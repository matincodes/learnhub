import { Button } from '@/components/ui/button'
import { navLinks } from '@/data/NavBar'
import { Link } from '@tanstack/react-router'
import { CiSearch } from 'react-icons/ci'
import { FiMenu } from 'react-icons/fi'
import { v4 as uuidv4 } from 'uuid'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const NavBar = e => {
  // TODO: remove unnecessary navState var
  const navState = 'none'
  const data = window.localStorage.getItem('user')
  const user = JSON.parse(data)

  return (
    <>
      <div
        className={`top-0 ${e.NavStatus} z-40 flex items-center justify-around bg-white p-10 lg:p-5`}
      >
        <Link to="/">
          <img
            src="/assets/learnhub-logo.svg"
            className="absolute right-[145px] top-[20px] w-[120px] lg:relative lg:right-0 lg:top-0 lg:w-[150px]"
          />
        </Link>

        <Sheet>
          <div className="absolute flex w-full justify-end p-3">
            <SheetTrigger>
              <FiMenu
                className="items-center text-[25px] text-[#374957] lg:hidden"
                cursor={'pointer'}
              />
            </SheetTrigger>
          </div>

          {/* NavLinks and SearchBar */}
          <div className="flex basis-[50%] items-center p-0 lg:relative">
            <div className="absolute left-0 top-[64px] hidden h-screen w-full backdrop-blur-sm lg:relative lg:top-0 lg:flex lg:h-0 lg:w-[80%]">
              {/* Desktop */}
              <div className="absolute left-0 top-[60px] flex w-full flex-col rounded-b-3xl bg-white pb-7 pl-6 shadow-lg transition-all lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0 lg:p-[0]">
                <Link
                  to="/"
                  className="p-1 pl-0 font-san text-[16px] outline-0 lg:flex lg:p-0"
                >
                  Home
                </Link>

                <Link
                  to="/courses"
                  className="p-1 pl-0 font-san text-[16px] outline-0 lg:flex lg:p-0"
                >
                  Courses
                </Link>

                <Link
                  to="/pricing"
                  className="p-1 pl-0 font-san text-[16px] outline-0 lg:flex lg:p-0"
                >
                  Pricing
                </Link>
              </div>
              {/* Desktop */}

              {/* Mobile */}
              <SheetContent
                side={'top'}
                className="top-[65px] flex flex-col space-y-0 rounded-b-3xl bg-white pb-16"
              >
                {/* <div className="absolute left-0 flex w-full flex-col rounded-b-3xl bg-white pb-7 pl-6 shadow-lg transition-all lg:relative top-[60px] lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0 lg:p-[0]"> */}
                <Link
                  to="/"
                  className="p-1 pl-0 font-inter text-[16px] font-semibold outline-0 lg:flex lg:p-0"
                >
                  Home
                </Link>

                <Link
                  to="/courses"
                  className="p-1 pl-0 font-inter text-[16px] font-semibold outline-0 lg:flex lg:p-0"
                >
                  Courses
                </Link>
                

                <Link
                  to="/pricing"
                  className="p-1 pl-0 font-inter text-[16px] font-semibold outline-0 lg:flex lg:p-0"
                >
                  Pricing
                </Link>

                <div className="mt-4 grid space-y-7 lg:hidden">
                  {user === null ? (
                    <>
                      <Button asChild className="w-fit lg:hidden">
                        <Link
                          to="/login"
                          className="border bg-[#FAFFFD] font-san"
                        >
                          Log in
                        </Link>
                      </Button>
                      <Button
                        asChild
                        className="w-fit bg-normal_green lg:hidden"
                      >
                        <Link
                          to="/signup"
                          className="rounded-lg font-san text-white shadow-md lg:hidden"
                        >
                          Sign Up
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <div className="grid h-[60px] w-[60px] place-content-center overflow-hidden rounded-full border">
                      <img
                        src={user.image}
                        className="w-full object-[center_90%]"
                      />
                    </div>
                  )}
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
          {user === null ? (
            <>
              <Button  className="bg-[#e5f5ee59] font-san" asChild>
                <Link to="/login">
                  Log in
                </Link>
              </Button>
              <Button className="rounded-xl bg-normal_green font-san text-white shadow-md" asChild>
                <Link
                  to="/signup"
                  
                >
                  Sign Up
                </Link>
              </Button>
            </>
          ) : (
            <div className="grid h-[60px] w-[60px] place-content-center overflow-hidden rounded-full border">
              <img src={user.image} className="w-full object-[center_90%]" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default NavBar
