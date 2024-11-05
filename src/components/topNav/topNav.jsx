import {
  Link,
  useRouter,
  useNavigate,
  useLocation,
  getRouteApi,
} from '@tanstack/react-router'
import { CiSearch } from 'react-icons/ci'
import { HiXMark } from 'react-icons/hi2'
import { Input } from '@/components/ui/input'
import { useEffect, useRef, useState } from 'react'
import NotificationModal from './notificationModal'

const TopNav = ({ title, paragraph }) => {
  const [openSearchStatus, setOpenSearchStatus] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [inputLength, setInputLength] = useState(0)
  const inputState = useRef()
  const navigates = useNavigate({ from: '/dashboard/search' })
  const { pathname } = useLocation()
  const routeApi = getRouteApi('/dashboard')

  const { prevRoute } = routeApi.useSearch()
  window.localStorage.setItem('prevRoute', prevRoute)

  // const prevRoute = pathname
  // To switch from the normal icon to the search input field && This point the recent searches section comes up
  const openSeach = () => {
    setOpenSearchStatus(true)
    navigates({
      to: '/dashboard/search',
      search: { prevRoute: pathname },
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
      navigates({ to: `${prevRoute}` })
    } else if (openSearchStatus === true && inputLength > 0) {
      setOpenSearchStatus(true)
      setSearchInputValue('')
      inputState.current.value = ''
      setInputLength(0)
    }
  }

  useEffect(() => {
    localStorage.setItem('openSearchStatus', openSearchStatus)
    localStorage.setItem('searchValue', searchInputValue)
  }, [openSearchStatus, searchInputValue])

  function onToggle() {
    setIsOpen(!isOpen)
  }
  return (
    <div
      className={`right-0 z-50 flex w-full items-center justify-between bg-gray-100 px-3 py-3 sm:px-6 sm:py-4 lg:fixed lg:w-[calc(100%-280px)] lg:px-10 min-[1024px]:float-right`}
    >
      <div className="flex w-full flex-col items-start gap-y-4 p-2 lg:hidden">
        <div className="flex items-center justify-between w-full ">

          {openSearchStatus === false ? (<img src={'/assets/learnhub-nobg.png'} alt="" />) : ('') }

          {/* response */}
          <div className={` items-center ${openSearchStatus === false ? 'flex items-center gap-3 w-full justify-end ' : 'w-full'}`}>
            {/* responsive Input Search */}
            {openSearchStatus === false ? (
            <div className="rounded-full bg-white p-[7px]">
              <CiSearch
                size={28}
                strokeWidth={2}
                color="#303031"
                className="cursor-pointer"
                onClick={openSeach}
              />
            </div>
            )
               : 
              (
            <div className={`'w-full left-0 flex h-10 items-center justify-evenly overflow-hidden border-4 border-t-0 border-l-0 border-r-0 border-b-[#848484]'}`}>
              <Input
                type="text"
                id="search"
                placeholder="Search here"
                className="border-none outline-none placeholder:text-[14px] placeholder:font-medium placeholder:text-[#848484] bg-transparent"
                autoFocus
                ref={inputState}
                onClick={openSeach}
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
            )}
            {/* responsive Input Search */}

            {openSearchStatus === false ? (
              <div className='flex items-center justify-evenly space-x-3'>
                <Link href="" className="rounded-full bg-white p-[7px]">
                  <img src="/assets/Vector.svg" alt="" />
                </Link>
                <button>
                  <img src={'/assets/fi-br-menu-burger.png'} alt="" />
                </button>
              </div>
            )
            : (
              <div className=" hidden"></div>
            )
            }
            
          </div>
        </div>
       {title && <div className="my-5 flex flex-col items-start justify-start">
          <h2 className="flex text-lg font-semibold sm:text-2xl">{title}</h2>
          {paragraph && <p>{paragraph}</p>}
        </div>}
      </div>


      <div className="hidden w-full items-center justify-between lg:flex">
        <div className="flex flex-col items-start justify-start">
          <h2 className="flex text-nowrap text-3xl font-semibold lg:text-2xl">
            {title}
          </h2>
          {paragraph && <p>{paragraph}</p>}
        </div>

        {/* Desktop View */}
        <div className="relative flex items-center justify-end gap-x-4 md:basis-[55%] lg:basis-[45%]">
          {openSearchStatus === false ? (
            <div className="rounded-full bg-white p-[7px]">
              <CiSearch
                size={28}
                strokeWidth={2}
                color="#303031"
                className="cursor-pointer"
                onClick={openSeach}
              />
            </div>
          ) : (
            <div className="flex h-10 items-center justify-between overflow-hidden rounded-lg border border-[#F7AE30] bg-white pr-2 w-full">
              <Input
                type="text"
                id="search"
                placeholder="Search here"
                className="border-none outline-none placeholder:text-[14px] placeholder:font-medium placeholder:text-[#848484]"
                autoFocus
                ref={inputState}
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
          )}
          <button className="flex h-10 items-center justify-center gap-1   rounded-full bg-white p-3">
            <p className="font-semibold">10</p>
            <img src="/assets/fire.svg" alt="" />
          </button>
          <button
          onClick={onToggle}
          className="rounded-full relative bg-white p-[10px]  grid place-content-center">
            <img src="/assets/Vector.svg" alt="" className='w-[23px]'/>

            {isOpen && <NotificationModal close={onToggle}/>}
          </button>
        </div>
      </div>
    </div>
  )
}
export default TopNav
