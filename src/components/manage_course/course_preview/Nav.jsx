import BackButton from '@/components/ui/BackButton'
import { Button } from '@/components/ui/button'

function Nav({ onOpen }) {
  return (
    <div className="flex h-[79px] w-full items-center justify-between">
      <h1 className="flex items-center gap-[8px] text-3xl font-[600] text-[#303031]">
         <BackButton />
        <span> New course (preview)</span>
      </h1>

      <Button className="bg-[#F7AE30] px-2" onClick={() => onOpen(true)}>
        <span className="text-white"> Upload Course</span>
      </Button>
    </div>
  )
}

export default Nav
