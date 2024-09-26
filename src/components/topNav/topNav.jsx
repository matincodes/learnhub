import { Link } from '@tanstack/react-router'
import { CiSearch } from 'react-icons/ci'
import { Input } from '@/components/ui/input'

const TopNav = ({ title, paragraph }) => {
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

        <div className="flex items-center gap-x-4">
          <Link
            href=""
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2"
          >
       
            <CiSearch size={28} strokeWidth={2} color="#303031" />
          </Link>
          <button className='h-10 bg-white rounded-full px-2 py-1 flex items-center gap-x-1'>
            <p className='font-semibold'>10</p>
            <img src="/assets/fire.svg" alt=""/>
          </button>
          <Link href=''  className="bg-white p-1 rounded-full">
            <img src='/assets/Vector.svg' alt="" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav
