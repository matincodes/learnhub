import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import CourseCard from '../cards/CourseCard'

const totalCourses = [
  {
    id: 1,
    title: 'Web Wizardry: Mastering Frontend Development',
    src: '/assets/enrolled/frontend.svg',
  },
  {
    id: 2,
    title: 'Software Development with Javascript and libaries',
    src: '/assets/enrolled/javaScript.svg',
  },
  {
    id: 3,
    title: 'Full Stack Developer: From Frontend to Backend',
    src: '/assets/enrolled/programmer.svg',
  },
  {
    id: 4,
    title: 'Backend Builder: Architecting Scalable APIs',
    src: '/assets/enrolled/backend.svg',
  },
  {
    id: 5,
    title: 'Backend Builder: Architecting Scalable APIs',
    src: '/assets/enrolled/mobile.svg',
  },
]

export function ViewMore() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full text-base px-2 py-3 text-left text-[#303031] outline-0 hover:bg-[#FAFAFA]">
          View more
        </button>
      </DialogTrigger>
      <DialogContent style={{ zoom: 0.8 }} className="w-[55%]">
        <div className="mb-[-12px] flex justify-end w-full ">
          <DialogClose asChild>
            <button className='bg-[#F7F7F7] p-2 rounded-full'>
              <img
                src="\assets\closeIcon.svg"
                alt="icon"
                className="size-[15px]"
              />
            </button>
          </DialogClose>
        </div>
        <div className="rounded-[10px] bg-[#FFFFFF] p-9">
          <div className="flex flex-col items-center">
            <img src="/assets/avatar.svg" alt="icon" className="size-[70px]" />
            <h1 className="mt-2 font-inter text-xl font-medium tracking-[1px] text-[#222222]">
              Effiong Divine
            </h1>
            <p className="mt-1 font-inter text-[11px] font-normal tracking-[1px] text-[#222222]">
              effiongdivine24@gmail.com
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-center font-san text-base font-medium text-[#222222]">
              Enrolled courses (5)
            </h2>
            <div className="mt-4 grid grid-cols-3 gap-6">
              {totalCourses.map(item => (
                <CourseCard key={item.id} e={item} />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
