import { Link } from '@tanstack/react-router'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CiSearch } from 'react-icons/ci'
import { navLinks } from '@/data/NavBar'
import { FiMenu } from 'react-icons/fi'
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

const navBar = () => {
  return (
    <>
      <div className="relative flex items-center justify-around p-8 lg:p-2">
        <img
          src="/assets/learnhub-logo.svg"
          className="absolute w-[120px] lg:relative lg:w-[150px]"
        />
        <FiMenu className="absolute right-4 text-[23px] text-[#374957] lg:hidden" />

        <div className="absolute left-0 flex basis-[30%] items-center justify-around p-0 lg:relative">
          <Link
            to="/"
            className="hidden font-san text-[16px] lg:flex [&.active]:font-normal"
          >
            Home
          </Link>

          <DropdownMenu className="font-san">
            <DropdownMenuTrigger asChild className="hidden lg:flex">
              <Button className="font-san font-normal">Courses</Button>
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

          <div className="relative flex basis-[60%] items-center">
            <label
              htmlFor=""
              className="relative -right-2 cursor-pointer rounded-l-md border-[#848484] bg-white p-[9px] lg:border lg:border-r-0"
            >
              <CiSearch className="text-[20px]" />
            </label>
            <Input
              type="text"
              placeholder="Search for anything"
              className="hidden border-l-0 border-[#848484] placeholder:font-san placeholder:text-black focus-visible:ring-0 lg:flex"
            />
          </div>
        </div>

        <div className="hidden w-[15%] justify-around lg:flex">
          <Button asChild>
            <Link to="/login" className="font-san">
              Log in
            </Link>
          </Button>
          <Button asChild>
            <Link
              to="/signup"
              className="rounded-none bg-normal_green font-san text-white"
            >
              Sign Up
            </Link>
          </Button>
        </div>
      </div>
    </>
  )
}

export default navBar
