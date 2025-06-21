import { Button } from '@/components/ui/button'

function Nav({ onOpen }) {
  return (
    <div className="flex h-[79px] w-full items-center justify-between">
      <h1 className="flex items-center gap-[8px] text-[25px] font-[600] text-[#303031]">
        <svg
          width="40"
          height="40"
          className="cursor-pointer"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.9999 10C24.9999 10 15 17.3649 15 20.0001C15 22.6353 25 30 25 30"
            stroke="#303031"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span> New course (preview)</span>
      </h1>

      <Button className="bg-[#F7AE30] px-2" onClick={() => onOpen(true)}>
        <span className="text-white"> Upload Course</span>
      </Button>
    </div>
  )
}

export default Nav
