import EditCourse from '@/components/course_details/edit-course'
import EditCourseModules from '@/components/course_details/edit-course-modules'
import Hero from '@/components/course_details/hero'
import { Button } from '@/components/ui/button'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'


export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/course-details')({
  component: DashboardCourseDetailsComponent
})


function DashboardCourseDetailsComponent() {
  //Editing state
  const [editingItemId, setEditingItemId] = useState(null);

  //Handling the editing buttons for proper editing of form
  const handleEditClick = (id) => {
    setEditingItemId((prevId) => (prevId === id ? null : id));
  };

  //Page navigation

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate({ to: '/admin/dashboard/courses' })
  }

  return (
    <>
      <div className="flex gap-1 items-center">
        <svg width="12" height="13" viewBox="0 0 12 13" className='cursor-pointer' onClick={handleNavigate} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_9271_22932)">
            <path d="M8.96047 1.25229C8.9603 1.45114 8.88117 1.64178 8.74047 1.78229L4.90447 5.61829C4.78836 5.73437 4.69626 5.87219 4.63342 6.02386C4.57058 6.17554 4.53824 6.33811 4.53824 6.50229C4.53824 6.66647 4.57058 6.82905 4.63342 6.98072C4.69626 7.1324 4.78836 7.27022 4.90447 7.38629L8.73547 11.2173C8.87209 11.3587 8.94769 11.5482 8.94598 11.7448C8.94427 11.9415 8.86539 12.1296 8.72634 12.2687C8.58728 12.4077 8.39917 12.4866 8.20252 12.4883C8.00588 12.49 7.81643 12.4144 7.67497 12.2778L3.84397 8.44979C3.32886 7.93366 3.03955 7.23425 3.03955 6.50504C3.03955 5.77584 3.32886 5.07643 3.84397 4.56029L7.67997 0.721793C7.78486 0.616835 7.91853 0.54535 8.06406 0.516383C8.20959 0.487416 8.36045 0.502269 8.49753 0.559063C8.63462 0.615857 8.75178 0.712038 8.83418 0.835438C8.91659 0.958837 8.96054 1.10391 8.96047 1.25229Z" fill="black" />
          </g>
          <defs>
            <clipPath id="clip0_9271_22932">
              <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
            </clipPath>
          </defs>
        </svg>
        <h1 className='font-semibold'>Course details</h1>
      </div>

      <Hero />

      {/* Editing of selected course*/}
      <form action="">
        <EditCourse editingItemId={editingItemId} handleEditClick={handleEditClick} />
        <div className="flex justify-end w-full my-4">
          <Button className="border !border-[#F7AE30] rounded-lg bg-transparent w-48 gap-4">
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_9835_32906)">
                <path d="M11.25 5.75H6.75V1.25C6.75 0.835789 6.41421 0.5 6 0.5C5.58579 0.5 5.25 0.835789 5.25 1.25V5.75H0.75C0.335789 5.75 0 6.08579 0 6.5C0 6.91421 0.335789 7.25 0.75 7.25H5.25V11.75C5.25 12.1642 5.58579 12.5 6 12.5C6.41421 12.5 6.75 12.1642 6.75 11.75V7.25H11.25C11.6642 7.25 12 6.91421 12 6.5C12 6.08579 11.6642 5.75 11.25 5.75Z" fill="#F7AE30" />
              </g>
              <defs>
                <clipPath id="clip0_9835_32906">
                  <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[#F7AE30]">Add Module</span>
          </Button>
        </div>


        {/* Editing of course module based on the selected course*/}
        <EditCourseModules editingItemId={editingItemId} handleEditClick={handleEditClick} />

        <div className="w-full flex justify-between md:justify-end items-center gap-5 mt-8">
          <Button className={`bg-[#F7AE30] ${editingItemId ? 'opacity-100' : 'opacity-50'} rounded-lg w-36 gap-4 text-white`} onClick={() => handleEditClick(null)}>Publish</Button>
          <Button className=" bg-[#E94343] rounded-lg w-36 gap-4 text-white">Delete Course</Button>
        </div>
      </form>
    </>
  )
}