import { Link, useRouter } from '@tanstack/react-router'
import { CiSearch } from 'react-icons/ci'
import { HiXMark } from "react-icons/hi2";
import { Input } from '@/components/ui/input'
import { useEffect, useRef, useState } from 'react';


const TopNav = ({ title, paragraph }) => {

  const [openSearchStatus, setOpenSearchStatus] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState("")
  const [inputLength, setInputLength] = useState(0)
  const inputState = useRef()
  const router = useRouter()

  // To switch from the normal icon to the search input field && This point the recent searches section comes up
  const openSeach = () =>{
    setOpenSearchStatus(true)
    router.navigate({
      to: '/dashboard/search'
    })
  } 
  
  // To see not if the close button will cancel the text input or will return the search to the initial state
  const getLength = (e) =>{
    const inputValue = e.target.value
    setInputLength(inputValue.length)
    setSearchInputValue(inputValue)
  }

  // When the length of the values passed is > 0 the value will be null and the butt will only clear the text value, if the input value is === 0 it will close the whole search button
  const closeSearchButton = () => {
    if(openSearchStatus === true && inputLength === 0){
      setOpenSearchStatus(false)
      router.navigate(-1);
      // console.log("::close")
    }
    
    else if(openSearchStatus === true && inputLength > 0 ) {
      setOpenSearchStatus(true)
      setSearchInputValue('')
      inputState.current.value = ""
      setInputLength(0)
      // console.log("::open")
    }
    // console.log("Clode " + inputLength)

  }
  window.localStorage.setItem('openSearchStatus', openSearchStatus)
  window.localStorage.setItem('searchValue', searchInputValue)
    
  console.log(searchInputValue)

  return (
    <div
      className={`right-0 z-50 flex w-full items-center justify-between bg-gray-100 px-3 py-3 sm:px-6 sm:py-4 lg:fixed lg:w-[calc(100%-280px)] lg:px-10 min-[1024px]:float-right`}
    >
      <div className="flex w-full flex-col items-start gap-y-4 p-2 lg:hidden">
        <div className="flex w-full items-center justify-between">
          <img src={'/assets/learnhub-nobg.png'} alt="" />
          <div className="flex space-x-9">
            <CiSearch className="text-[25px] font-extrabold" />
            <button>
              <img src={'/assets/fi-br-menu-burger.png'} alt="" />
            </button>
          </div>
        </div>
        <div className="my-5 flex flex-col items-start justify-start">
          <h2 className="flex text-lg font-semibold sm:text-2xl">{title}</h2>
          {paragraph && <p>{paragraph}</p>}
        </div>
      </div>
      <div className="hidden w-full items-center justify-between lg:flex">
        <div className="flex flex-col items-start justify-start">
          <h2 className="flex text-nowrap text-3xl font-semibold lg:text-2xl">
            {title}
          </h2>
          {paragraph && <p>{paragraph}</p>}
        </div>

        <div className="flex items-center gap-4 relative basis-[45%] justify-end ">

          {openSearchStatus === false ?

        <div className="p-[7px] rounded-full bg-white">
            <CiSearch size={28} strokeWidth={2} color="#303031" className='cursor-pointer' onClick={openSeach} />
        </div>

        :
         
          <div
            className="flex h-10 w-[76%] items-center rounded-lg justify-between bg-white pr-2 absolute left-0 overflow-hidden border border-[#F7AE30]"
          >

        <Input type='text' id='search' placeholder='Search here' className='border-none outline-none placeholder:text-[#848484] placeholder:text-[14px] placeholder:font-medium' autoFocus ref={inputState} onChange={getLength} />

          <div className="">
            <HiXMark size={28} strokeWidth={0} color="#303031" className='cursor-pointer' onClick={closeSearchButton} />
          </div>

          </div>

          }
          <button className='h-10 bg-white rounded-full px-2 py-1 flex items-center gap-x-1'>
            <p className='font-semibold'>10</p>
            <img src="/assets/fire.svg" alt=""/>
          </button>
          <Link href=''  className="bg-white p-[7px] rounded-full">
            <img src='/assets/Vector.svg' alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default TopNav
