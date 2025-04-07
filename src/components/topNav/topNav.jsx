import { Input } from '@/components/ui/input'
import { topNavData } from '@/data/topNav'
import {
  Link,
  useLocation,
  useNavigate,
  useRouteContext,
  useRouter,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { HiXMark } from 'react-icons/hi2'
import NotificationModal from './notificationModal'

const TopNav = () => {
  const [openSearchStatus, setOpenSearchStatus] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [inputLength, setInputLength] = useState(0)

  const router = useRouter()
  const navigate = useNavigate()
  const firstName = "Timilehin"
  const role = "admin"
  const pathname = useLocation({ select: s => s.pathname.replace(/\/$/, '') })
  const title = topNavData[pathname]?.title
  const regex = /my-courses\/([^\/]+)/;
  const match = pathname.match(regex);
  const courseTitle = match ? decodeURIComponent(match[1]) : null;

  console.log(title, courseTitle, useLocation({ select: s => s.pathname }))
  // console.log(useRouteContext( { select: s => s } ))

  // To switch from the normal icon to the search input field && This point the recent searches section comes up
  const openSearch = () => {
    setOpenSearchStatus(true)
    navigate({
      to: '/dashboard/search',
    })
  }

  // To see not if the close button will cancel the text input or will return the search to the initial state
  const getLength = e => {
    const inputValue = e.target.value
    setInputLength(inputValue.length)
    setSearchInputValue(inputValue)
  }

  // When the length of the values passed is > 0 the value will be null and the butt will only clear the text value, if the input value is === 0 it will close the whole search button
  const closeSearchButton = () => {
    if (openSearchStatus === true && inputLength === 0) {
      setOpenSearchStatus(false)
      navigate({ to: router.history.back() })
    } else if (openSearchStatus === true && inputLength > 0) {
      setOpenSearchStatus(true)
      setSearchInputValue('')
      setInputLength(0)
    }
  }

  useEffect(() => {
    localStorage.setItem('openSearchStatus', openSearchStatus)
    localStorage.setItem('searchValue', searchInputValue)
  }, [searchInputValue, openSearchStatus])

  function onToggle() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="flex w-full bg-gray-100 items-center justify-between  px-3 py-3 sm:px-6 sm:py-4 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)] lg:px-6  min-[1024px]:float-right">
      <div className="flex w-full flex-col items-start gap-y-4 p-2 lg:hidden">
        <div className="flex w-full items-center justify-between">
          {openSearchStatus === false && (
            <img src={'/assets/learnhub-nobg.png'} alt="" />
          )}

          {/* response */}
          <div
            className={`items-center ${openSearchStatus === false ? 'flex w-full items-center justify-end gap-3' : 'w-full'}`}
          >
            {/* responsive Input Search */}
            {/* {openSearchStatus === false ? (
              <div className="rounded-full bg-white p-[7px]">
                <CiSearch
                  size={28}
                  strokeWidth={2}
                  color="#303031"
                  className="cursor-pointer"
                  onClick={openSearch}
                />
              </div>
            ) : (
              <div
                className={`'w-full border-b-[#848484]'} left-0 flex h-10 items-center justify-evenly overflow-hidden border-4 border-l-0 border-r-0 border-t-0`}
              >
                <Input
                  type="text"
                  id="search"
                  placeholder="Search here"
                  className="border-none bg-transparent outline-none placeholder:text-[14px] placeholder:font-medium placeholder:text-[#848484]"
                  autoFocus
                  value={searchInputValue}
                  onClick={openSearch}
                  onChange={getLength}
                />

                <div className="">
                  <HiXMark
                    size={28}
                    strokeWidth={0}
                    color="#303031"
                    className="cursor-pointer"
                    onClick={closeSearchButton}
                  />
                </div>
              </div>
            )} */}
            {/* responsive Input Search */}

            {openSearchStatus === false && (
              <div className="flex items-center justify-evenly space-x-3">
                {/* <button className="flex h-10 items-center justify-center gap-1 rounded-full bg-white p-3">
                  <p className="font-semibold">10</p>
                  <img src="/assets/fire.svg" alt="" />
                </button> */}

                <button
                  onClick={onToggle}
                  className="relative grid place-content-center rounded-full bg-white p-[10px]"
                >
                  <img src="/assets/Vector.svg" alt="" className="w-[23px]" />

                  {isOpen && <NotificationModal close={onToggle} />}
                </button>

              </div>
            )}
          </div>
        </div>

        <div className="my-5 flex flex-col items-start justify-start relative">
          <h2 className="flex text-lg font-semibold sm:text-2xl items-center">
            {pathname != '/dashboard' || pathname != '/admin/dashboard' || pathname != '/admin/dashboard/courses' && (
              <img
                src="/assets/arrow-left-01.svg"
                onClick={() => router.history.back()}
                className="cursor-pointer"
                alt="arrow left"
              />
            )}
            {courseTitle ? courseTitle : title}
            {/* {} */}
          </h2>
          {(pathname == '/dashboard' || pathname == '/admin/dashboard' || pathname == '/admin/dashboard/courses') && (
            <p className="capitalize">{`Welcome Back, ${firstName} 👋`}</p>
          )}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden w-full items-center justify-between md:flex-col gap-4 lg:flex-row lg:flex">
        <div className="flex flex-col items-start justify-start relative ">
          <h2 className="flex items-center text-nowrap text-3xl font-semibold capitalize lg:text-2xl ">
            {pathname != '/dashboard' || pathname != '/admin/dashboard' && (
              <img
                src="/assets/arrow-left-01.svg"
                onClick={() => router.history.back()}
                className="cursor-pointer"
                alt="arrow left"
              />
            )}
            {/* {title} */}
            {pathname.includes('/admin/dashboard') || pathname.includes('/admin/dashboard/courses') && pathname == '/admin/dashboard' ? 'Dashboard' : ''}

            {courseTitle ? courseTitle : title}

          </h2>
          {(pathname == '/dashboard' || pathname == '/admin/dashboard' || pathname == '/admin/dashboard/courses') && (
            <p className="capitalize">{`Welcome Back, ${firstName} 👋`}</p>
          )}
        </div>

        <div className="relative flex items-center justify-end gap-x-4 md:basis-[55%] lg:basis-[45%]">
          {role == 'admin' ? ""
            :
            <>
              <div className={`flex h-10 w-full items-center justify-between overflow-hidden rounded-lg border bg-white pr-2 focus-within:border-normal_yellow`}>
                <Input
                  type="text"
                  id="search"
                  placeholder="Search here"
                  className="border-none outline-none placeholder:text-[14px] placeholder:font-medium placeholder:text-[#848484]"
                  value={searchInputValue}
                  onFocus={openSearch}
                  onChange={getLength}
                />

                <HiXMark
                  size={28}
                  strokeWidth={0}
                  color="#303031"
                  className="cursor-pointer"
                  onClick={closeSearchButton}
                />
              </div>

              <button className="flex h-10 items-center justify-center gap-1 rounded-full bg-white p-3">
                <p className="font-semibold">10</p>
                <img src="/assets/fire.svg" alt="" />
              </button>

            </>
          }
          <button
            onClick={onToggle}
            className="relative grid place-content-center rounded-full bg-white p-[10px]"
          >
            <img src="/assets/Vector.svg" alt="" className="w-[23px]" />

            {isOpen && <NotificationModal close={onToggle} />}
          </button>
        </div>
      </div>
    </div>
  )
}
export default TopNav
