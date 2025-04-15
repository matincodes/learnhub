import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../../components/ui/dropdown-menu";

const DROPDOWNCONTENT = [
  { key: 1, name: "Video upload" },
  { key: 2, name: "Text lesson" },
];

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/add-module')({
  component: DashboardAddModuleComponent
})


const DropdownList = () => {
  return (
    <div className="relative w-full mt-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="px-4 my-2 md:py-4 bg-white w-full h-fit outline-none relative border rounded-md">
            <div className="hidden md:flex flex-row justify-between items-center">
              <span className="text-sm">Lesson type</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9382_41226)">
                  <path d="M1.13235 4.55966C1.28008 4.55946 1.4264 4.58852 1.56285 4.64516C1.6993 4.7018 1.82318 4.7849 1.92735 4.88966L7.6821 10.6437C7.85621 10.8178 8.06293 10.956 8.29045 11.0502C8.51797 11.1445 8.76183 11.193 9.0081 11.193C9.25437 11.193 9.49822 11.1445 9.72574 11.0502C9.95326 10.956 10.16 10.8178 10.3341 10.6437L16.0798 4.89716C16.1836 4.78971 16.3078 4.70401 16.445 4.64505C16.5823 4.58609 16.7299 4.55505 16.8793 4.55375C17.0286 4.55246 17.1768 4.58092 17.315 4.63749C17.4533 4.69405 17.5789 4.77759 17.6845 4.88322C17.7902 4.98884 17.8737 5.11445 17.9303 5.25271C17.9868 5.39097 18.0153 5.53911 18.014 5.68848C18.0127 5.83786 17.9817 5.98548 17.9227 6.12274C17.8638 6.25999 17.778 6.38413 17.6706 6.48791L11.9248 12.2344C11.1508 13.007 10.1018 13.441 9.0081 13.441C7.91441 13.441 6.86542 13.007 6.09135 12.2344L0.336596 6.48041C0.179159 6.32307 0.0719315 6.12257 0.0284809 5.90428C-0.0149697 5.68598 0.00730993 5.4597 0.0925005 5.25407C0.177691 5.04844 0.321964 4.8727 0.507063 4.74909C0.692162 4.62548 0.909768 4.55956 1.13235 4.55966Z" fill="#374957" />
                </g>
                <defs>
                  <clipPath id="clip0_9382_41226">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="min-w-[100%] mt-2 bg-white shadow-md rounded-md p-2 z-50"
          align="end"
        >
          {DROPDOWNCONTENT.map((course) => (
            <DropdownMenuItem
              key={course.key}
              className={`p-2 w-full cursor-pointer outline-none ${course.key === 2 ? 'bg-[#f0eded]' : ''
                } font-sans rounded-lg`}
            >
              <span className="font-san text-base text-[#303031]">
                {course.name}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>

      </DropdownMenu>
    </div>
  );
};

function DashboardAddModuleComponent() {
  const navigate = useNavigate()
  const NavigateBack = () => {
    navigate({ to: '/admin/dashboard/add-course' })
  }
  return (
    <div className='mt-28'>
      {/* the add module button (both desktop and mobile*/}
      <div className="flex justify-between px-3 py-3">
        <div className="flex gap-2 items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" className='cursor-pointer' fill="none" xmlns="http://www.w3.org/2000/svg" onClick={NavigateBack}>
            <path d="M9.13089 10.2951C9.09209 10.2564 9.0613 10.2104 9.0403 10.1598C9.01929 10.1092 9.00848 10.0549 9.00848 10.0001C9.00848 9.9453 9.01929 9.89103 9.0403 9.84041C9.0613 9.78979 9.09209 9.74381 9.13089 9.70511L12.9526 5.88427C13.187 5.64989 13.3188 5.33195 13.3189 5.0004C13.319 4.66885 13.1874 4.35085 12.953 4.11636C12.7186 3.88186 12.4006 3.75008 12.0691 3.75C11.7376 3.74992 11.4196 3.88155 11.1851 4.11594L7.3634 7.93761C6.81737 8.48514 6.51074 9.22684 6.51074 10.0001C6.51074 10.7734 6.81737 11.5151 7.3634 12.0626L11.1851 15.8843C11.4196 16.1187 11.7376 16.2503 12.0691 16.2502C12.4006 16.2501 12.7186 16.1184 12.953 15.8839C13.1874 15.6494 13.319 15.3314 13.3189 14.9998C13.3188 14.6683 13.187 14.3503 12.9526 14.1159L9.13089 10.2951Z" fill="#374957" />
          </svg>
          <span>Add Modules</span>
        </div>
        <Button className="border !border-[#F7AE30] rounded-lg gap-2 w-36">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_9382_41253)">
              <path d="M11.75 5.75H7.25V1.25C7.25 0.835789 6.91421 0.5 6.5 0.5C6.08579 0.5 5.75 0.835789 5.75 1.25V5.75H1.25C0.835789 5.75 0.5 6.08579 0.5 6.5C0.5 6.91421 0.835789 7.25 1.25 7.25H5.75V11.75C5.75 12.1642 6.08579 12.5 6.5 12.5C6.91421 12.5 7.25 12.1642 7.25 11.75V7.25H11.75C12.1642 7.25 12.5 6.91421 12.5 6.5C12.5 6.08579 12.1642 5.75 11.75 5.75Z" fill="#F7AE30" />
            </g>
            <defs>
              <clipPath id="clip0_9382_41253">
                <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <span className='text-[#F7AE30]'>Add Module</span>
        </Button>
      </div>


      {/* the form to add module and also lesson */}
      <form action="" className='gap-7 flex flex-col'>
        <div className=" bg-white w-full px-4 py-5 rounded-lg">
          <div className="flex flex-col gap-2">
            <label htmlFor="module title" className='font-semibold'>Module Title</label>
            <Input type="text" />
          </div>
        </div>

        {/* button for mobile for adding of lesson */}
        <div className="w-full flex justify-end md:hidden px-3">
          <Button className=" border !border-[#F7AE30] rounded-lg gap-2 w-36">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_9382_41253)">
                <path d="M11.75 5.75H7.25V1.25C7.25 0.835789 6.91421 0.5 6.5 0.5C6.08579 0.5 5.75 0.835789 5.75 1.25V5.75H1.25C0.835789 5.75 0.5 6.08579 0.5 6.5C0.5 6.91421 0.835789 7.25 1.25 7.25H5.75V11.75C5.75 12.1642 6.08579 12.5 6.5 12.5C6.91421 12.5 7.25 12.1642 7.25 11.75V7.25H11.75C12.1642 7.25 12.5 6.91421 12.5 6.5C12.5 6.08579 12.1642 5.75 11.75 5.75Z" fill="#F7AE30" />
              </g>
              <defs>
                <clipPath id="clip0_9382_41253">
                  <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)" />
                </clipPath>
              </defs>
            </svg>
            <span className='text-[#F7AE30]'>Add Lesson</span>
          </Button>
        </div>

        <div className="bg-white hidden w-full justify-between px-3 items-center py-3 rounded-md  md:flex">
          <span className='font-semibold'>Lesson 1</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_9382_41226)">
              <path d="M1.13235 4.55966C1.28008 4.55946 1.4264 4.58852 1.56285 4.64516C1.6993 4.7018 1.82318 4.7849 1.92735 4.88966L7.6821 10.6437C7.85621 10.8178 8.06293 10.956 8.29045 11.0502C8.51797 11.1445 8.76183 11.193 9.0081 11.193C9.25437 11.193 9.49822 11.1445 9.72574 11.0502C9.95326 10.956 10.16 10.8178 10.3341 10.6437L16.0798 4.89716C16.1836 4.78971 16.3078 4.70401 16.445 4.64505C16.5823 4.58609 16.7299 4.55505 16.8793 4.55375C17.0286 4.55246 17.1768 4.58092 17.315 4.63749C17.4533 4.69405 17.5789 4.77759 17.6845 4.88322C17.7902 4.98884 17.8737 5.11445 17.9303 5.25271C17.9868 5.39097 18.0153 5.53911 18.014 5.68848C18.0127 5.83786 17.9817 5.98548 17.9227 6.12274C17.8638 6.25999 17.778 6.38413 17.6706 6.48791L11.9248 12.2344C11.1508 13.007 10.1018 13.441 9.0081 13.441C7.91441 13.441 6.86542 13.007 6.09135 12.2344L0.336596 6.48041C0.179159 6.32307 0.0719315 6.12257 0.0284809 5.90428C-0.0149697 5.68598 0.00730993 5.4597 0.0925005 5.25407C0.177691 5.04844 0.321964 4.8727 0.507063 4.74909C0.692162 4.62548 0.909768 4.55956 1.13235 4.55966Z" fill="#374957" />
            </g>
            <defs>
              <clipPath id="clip0_9382_41226">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="flex gap-1 bg-white w-full py-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.13089 10.2951C9.09209 10.2564 9.0613 10.2104 9.0403 10.1598C9.01929 10.1092 9.00848 10.0549 9.00848 10.0001C9.00848 9.9453 9.01929 9.89103 9.0403 9.84041C9.0613 9.78979 9.09209 9.74381 9.13089 9.70511L12.9526 5.88427C13.187 5.64989 13.3188 5.33195 13.3189 5.0004C13.319 4.66885 13.1874 4.35085 12.953 4.11636C12.7186 3.88186 12.4006 3.75008 12.0691 3.75C11.7376 3.74992 11.4196 3.88155 11.1851 4.11594L7.3634 7.93761C6.81737 8.48514 6.51074 9.22684 6.51074 10.0001C6.51074 10.7734 6.81737 11.5151 7.3634 12.0626L11.1851 15.8843C11.4196 16.1187 11.7376 16.2503 12.0691 16.2502C12.4006 16.2501 12.7186 16.1184 12.953 15.8839C13.1874 15.6494 13.319 15.3314 13.3189 14.9998C13.3188 14.6683 13.187 14.3503 12.9526 14.1159L9.13089 10.2951Z" fill="#374957" />
          </svg>
          <span>Lesson 1</span>
        </div>

        <div className="bg-white w-full px-4 py-5 rounded-lg">
          <div className="flex flex-col gap-2 py-3">
            <label htmlFor="module title" className='font-semibold'>Lesson Title</label>
            <Input type="text" placeholder="what is HTML" />
          </div>
          <div className="flex flex-col gap-2 py-3">
            <label htmlFor="module title" className='font-semibold'>Lesson Type </label>
            <DropdownList />
          </div>
          <div className="flex flex-col gap-2 py-3">
            <label htmlFor="module title" className='font-semibold'>Lesson Duration </label>
            <Input type="text" placeholder="Text input" />
          </div>
          <div className="cursor-pointer py-3 flex flex-col gap-2 ">
            <label htmlFor="course title" className='font-semibold'>Content Upload</label>
            <div className="rounded-lg border-dashed  md:w-80 h-24 border border-black flex flex-col justify-center items-center text-sm">
              <div className="hidden md:block text-center">
                <span className='text-[#F7AE30] underline'>Click Here To Upload lesson content/</span> <br />
                <span className='font-bold'>Drag & Drop</span>
              </div>
              <div className="block md:hidden">
                <span className='text-[#F7AE30] underline'>Add a content upload / </span>
                <span className='text-black'>Drag & Drop</span>
              </div>
            </div>
          </div>
        </div>
      </form >
      <div className="md:bg-white w-full flex justify-between px-4 mt-10 py-5">
        <Button className="rounded-lg border text-[#B98334]">
          <span className='hidden md:block'>Save In Archive</span>
          <span className='block md:hidden'>Archive</span>
        </Button>
        <div className="gap-7 flex">
          <Button className="bg-[#F7AE30] px-8 md:px-0 md:w-28 text-white rounded-lg">
            <span className="block md:hidden">Publish</span>
            <span className="hidden md:block">Publish</span>
          </Button>
          <Button className="border border-[#F7AE30] px-8 md:px-2 md:w-48 text-[#F7AE30] rounded-lg hidden md:block">
            <span className="flex gap-2 items-center">
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_9486_42104)">
                  <path d="M11.75 5.25H7.25V0.75C7.25 0.335789 6.91421 0 6.5 0C6.08579 0 5.75 0.335789 5.75 0.75V5.25H1.25C0.835789 5.25 0.5 5.58579 0.5 6C0.5 6.41421 0.835789 6.75 1.25 6.75H5.75V11.25C5.75 11.6642 6.08579 12 6.5 12C6.91421 12 7.25 11.6642 7.25 11.25V6.75H11.75C12.1642 6.75 12.5 6.41421 12.5 6C12.5 5.58579 12.1642 5.25 11.75 5.25Z" fill="#F7AE30" />
                </g>
                <defs>
                  <clipPath id="clip0_9486_42104">
                    <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Add Another Module</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}