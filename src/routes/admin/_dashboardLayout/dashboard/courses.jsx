import Filter from '@/components/manage_course/filter_courses/filter'
import { Pagination, CourseTable, CourseCard } from '@/components/manage_course/filter_courses/courses';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import NoCourse from '@/components/manage_course/no-course';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/courses')({
  component: DashboardCourseManagementComponent
})



function DashboardCourseManagementComponent() {

  const [checkingCourseExist, setCheckCourseExist] = useState(true)
  return (
    <div className='w-full'>
      <div className="flex flex-row justify-between px-4 pb-9 items-center w-full">
        <h1 className='text-lg font-medium'>Course Management</h1>
        <Button className="bg-[#F7AE30] md:w-44 md:px-2 gap-2">
          <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_9344_63980)">
              <path d="M11.25 5.75H6.75V1.25C6.75 0.835789 6.41421 0.5 6 0.5C5.58579 0.5 5.25 0.835789 5.25 1.25V5.75H0.75C0.335789 5.75 0 6.08579 0 6.5C0 6.91421 0.335789 7.25 0.75 7.25H5.25V11.75C5.25 12.1642 5.58579 12.5 6 12.5C6.41421 12.5 6.75 12.1642 6.75 11.75V7.25H11.25C11.6642 7.25 12 6.91421 12 6.5C12 6.08579 11.6642 5.75 11.25 5.75Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_9344_63980">
                <rect width="12" height="12" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <span className='text-white hidden md:block'>Create new Course</span>
        </Button>
      </div>
      {checkingCourseExist ? (
        <>
          <Filter />
          <div className="w-full h-full bg-white flex flex-col pb-4">
            {/* Show CourseTable on Medium (md) and Larger (lg) Screens */}
            <div className="hidden md:block">
              <CourseTable />
            </div>

            {/* Show Course Component on Small (sm) and Extra Small (xs) Screens */}
            <div className="block md:hidden">
              <CourseCard />
            </div>

            {/* Pagination (Always Visible) */}
            <div className="flex justify-end">
              <Pagination />
            </div>
          </div>
        </>
      ) : (
        <NoCourse />
      )}
    </div>
  );
}

export default DashboardCourseManagementComponent;

