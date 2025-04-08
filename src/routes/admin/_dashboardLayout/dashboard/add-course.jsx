import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../../components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

const DROPDOWNCONTENT = [
  { key: 1, name: "Front-end Development" },
  { key: 2, name: "Back-end Development" },
  { key: 3, name: "Programming/Coding" },
  { key: 4, name: "Foundational Skills" },
  { key: 5, name: "Digital Skills" },
];

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/add-course')({
  component: DashboardAddCourseComponent,
})


const Dropdown = () => {
  return (
    <div className="relative w-full mt-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="px-4 py-2 flex flex-row justify-between items-center bg-white w-full h-fit outline-none relative border rounded-md">
            <span className="text-sm font-san font-medium">All courses</span>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.25 11.875C14.25 11.875 10.7517 7.12501 9.49996 7.125C8.24826 7.12499 4.75 11.875 4.75 11.875"
                stroke="#374957"
                strokeWidth="1.55"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="min-w-[100%] mt-2 bg-white shadow-md rounded-md p-2 z-50"
          align="end"
        >
          {DROPDOWNCONTENT.map((course) => (
            <DropdownMenuItem
              key={course.key}
              className={`p-2 w-full cursor-pointer outline-none ${course.key === 1 ? 'bg-[#f0eded]' : ''
                } font-sans rounded-lg`}
            >
              <span className="font-san text-sm text-[#303031] font-medium">
                {course.name}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>

      </DropdownMenu>
    </div>
  );
};


function DashboardAddCourseComponent() {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate({ to: '/admin/dashboard/add-module' })
  }
  return (
    <>
      <h1 className='font-semibold text-lg'>Create New Course Form</h1>
      <div className="w-full bg-white px-4 md:pr-28 md:pl-8 py-3 rounded-lg mt-4">
        <form action="">
          <div className="py-3 flex flex-col gap-2">
            <label htmlFor="course title" className='font-semibold'>Course Title</label>
            <Input type="text" placeholder="Input course title" />
          </div>
          <div className="py-3 flex flex-col gap-2">
            <label htmlFor="course title" className='font-semibold'>Course Title</label>
            <Textarea className="w-full h-32 " placeholder="Input Course Description..." />
          </div>
          <div className="py-3 flex flex-col gap-2">
            <label htmlFor="course title" className='font-semibold'>Course Title</label>
            <Dropdown />
          </div>
          <div className="cursor-pointer py-3 flex flex-col gap-2">
            <label htmlFor="course title" className='font-semibold'>Image Upload</label>
            <div className="rounded-lg border-dashed  md:w-80 h-24 border border-black flex flex-col justify-center items-center text-sm">
              <div className="hidden md:block text-center">
                <span className='text-[#F7AE30] underline'>Click Here To Upload a course thumbnail</span> <br />
                <span className='font-bold'>Drag & Drop</span>
              </div>
              <div className="block md:hidden">
                <span className='text-[#F7AE30] underline'>Add a course thumbnail / </span>
                <span className='text-black'>Drag & Drop</span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="md:bg-white w-full flex justify-between px-4 mt-10 py-5">
        <Button className="border-[#B1B1B1] rounded-lg border">Cancle</Button>
        <Button className="bg-[#F7AE30] px-8 md:px-0 md:w-48 text-white rounded-lg" onClick={handleNavigate}>
          <span className="block md:hidden">Add Module</span>
          <span className="hidden md:block">Proceed to Add Module</span>
        </Button>
      </div>
    </>
  )
}