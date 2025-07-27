import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
// import { UserProfile } from '@/context/user-context'
import { useUser } from '@/hooks/use-user'
import { Link } from '@tanstack/react-router'
import { CiSearch } from 'react-icons/ci'
import { FiMenu } from 'react-icons/fi'


const defaultAvatar = '/assets/profile.png'

const NavBar = ({ NavStatus }) => {
  const user = useUser()


  const renderUserMenu = () => (
    <div className="flex items-center space-x-2 rounded-2xl bg-[#FAFFFD] pr-4">
      {/* Profile Image */}
      <div className="h-[50px] w-[50px] overflow-hidden rounded-full border bg-white">
        <img
          src={user?.profile_image || defaultAvatar}
          alt="Profile"
          onError={(e) => (e.target.src = defaultAvatar)}
          className="h-full w-full"
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col font-san text-left leading-tight">
      <p className="font-semibold">{`${user?.firstName || ''} ${user?.lastName|| ''}`.trim()}</p>
        <Link
          to="/dashboard/"
          className="mt-1 text-[12px] hover:underline"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  )

  return (
    <div
      className={`top-0 ${NavStatus} z-40 flex items-center justify-around bg-white p-10 lg:p-4`}
    >
      {/* LOGO */}
      <Link to="/">
        <img
          src="/assets/learnhub-logo.svg"
          alt="Learnhub Logo"
          className="absolute left-4 top-[20px] w-[120px] lg:relative lg:right-0 lg:top-0 lg:w-[150px]"
        />
      </Link>

      {/* MOBILE MENU (Hamburger and Drawer) */}
      <Sheet>
        <div className="absolute flex w-full justify-end p-3 lg:hidden">
          <SheetTrigger>
            <FiMenu className="text-[25px] text-[#374957] cursor-pointer" />
          </SheetTrigger>
        </div>

        {/* MOBILE SHEET CONTENT */}
        <SheetContent
          side="top"
          className="top-[65px] flex flex-col space-y-0 rounded-b-3xl bg-white pb-16"
        >
          <Link to="/" className="p-1 font-inter text-[16px] font-semibold">
            Home
          </Link>
          <Link to="/courses" className="p-1 font-inter text-[16px] font-semibold">
            Courses
          </Link>
          <Link to="/pricing" className="p-1 font-inter text-[16px] font-semibold">
            Pricing
          </Link>

          <div className="mt-4 grid space-y-7 lg:hidden">
            {!user ? (
              <>
                <Button asChild className="w-fit">
                  <Link to="/login" className="border bg-[#FAFFFD] font-san">
                    Log in
                  </Link>
                </Button>
                <Button asChild className="w-fit bg-normal_green">
                  <Link to="/signup" className="rounded-lg font-san text-white shadow-md">
                    Sign Up
                  </Link>
                </Button>
              </>
            ) : (
              renderUserMenu()
            )}
          </div>
        </SheetContent>

        {/* DESKTOP NAV + SEARCH */}
        <div className="flex basis-[50%] items-center p-0 lg:relative">
          {/* NAV LINKS - Desktop */}
          <div className="absolute left-0 top-[64px] hidden h-screen w-full backdrop-blur-sm lg:relative lg:top-0 lg:flex lg:h-0 lg:w-[80%]">
            <div className="absolute left-0 top-[60px] flex w-full flex-col rounded-b-3xl bg-white pb-7 pl-6 shadow-lg lg:relative lg:top-0 lg:flex lg:flex-row lg:items-center lg:justify-evenly lg:space-y-0 lg:p-0">
              <Link to="/" className="p-1 font-san text-[16px] lg:p-0">
                Home
              </Link>
              <Link to="/courses" className="p-1 font-san text-[16px] lg:p-0">
                Courses
              </Link>
              <Link to="/pricing" className="p-1 font-san text-[16px] lg:p-0">
                Pricing
              </Link>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="absolute left-0 lg:flex items-center space-x-2 rounded-lg border border-[#dcdcdc] bg-white px-4 py-2 lg:relative lg:w-[450px] hidden">
            <CiSearch className="text-[22px] text-[#848484]" />
            <input
              type="text"
              placeholder="Search for anything"
              aria-label="Search"
              className="w-full bg-transparent text-[14px] font-san placeholder:text-[#888] focus:outline-none focus:ring-0"
            />
          </div>
        </div>
      </Sheet>

      {/* DESKTOP USER ACTIONS */}
      <div className="hidden w-[20%] justify-around lg:flex">
        {!user ? (
          <>
            <Button className="bg-[#e5f5ee59] font-san" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button className="rounded-xl bg-normal_green font-san text-white shadow-md" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </>
        ) : (
          renderUserMenu()
        )}
      </div>
    </div>
  )
}

export default NavBar
