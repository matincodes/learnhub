import { Link } from '@tanstack/react-router'
import { CiSearch } from 'react-icons/ci'
import { Input } from '@/components/ui/input'

const TopNav = ({ title, paragraph }) => {
  return (
    <div
      className={`right-0 z-50 flex w-full items-center justify-between bg-gray-100 px-3 py-3 sm:px-6 sm:py-4 lg:fixed lg:w-[calc(100%-250px)] lg:px-10 min-[1024px]:float-right`}
    >
      <div className="flex w-full flex-col items-start p-2 gap-y-4 lg:hidden">
        <div className="flex w-full items-center justify-between">
          <img src={'/assets/learnhub-nobg.png'} alt="" />
          <div className="flex space-x-9">
            <CiSearch className="text-[25px] font-extrabold" />
            <button>
              <img src={'/assets/fi-br-menu-burger.png'} alt="" />
            </button>
          </div>
        </div>
        <div className="flex flex-col my-5 items-start justify-start">
          <h2 className="flex text-lg font-semibold sm:text-2xl">
            {title}
          </h2>
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

        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Search here..."
            className="flex border-r-0 border-[#848484] placeholder:font-san placeholder:text-[#848484] focus-visible:ring-0"
          />
          <label
            htmlFor=""
            className="relative -left-2 cursor-pointer rounded-r-md border-[#848484] bg-white p-[9px] lg:border lg:border-l-0"
          >
            <CiSearch className="text-[20px]" />
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <Link to="" className="px-2">
            <img src={'/assets/bell.png'} alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav
