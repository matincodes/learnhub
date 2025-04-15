import Filter from '@/components/manage_course/filter_courses/filter'
import { Pagination, CourseTable, CourseCard } from '@/components/manage_course/filter_courses/courses';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import NoCourse from '@/components/manage_course/no-course';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from '@tanstack/react-router';
import DeleteDialog from '@/components/manage_course/deleteDialog';

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/courses')({
  component: DashboardCourseManagementComponent
})

//Generating random date for the table data flow
const generateRandomDate = () => {
  // Random date between 2020-01-01 and the current date
  return new Date(new Date() - Math.random() * (new Date() - new Date(2020, 0, 1))).toDateString();
};

//Loading Dynamic data into the table 
const DATA = [
  {
    id: 1,
    course_title: "Advanced Web Design",
    category: "Programming",
    status: "Published",
    students: 150,
    last_updated: generateRandomDate(),
  },
  {
    id: 2,
    course_title: "Advanced Web Design",
    category: "Data science",
    status: "Archived",
    students: 150,
    last_updated: generateRandomDate(),
  },
  {
    id: 3,
    course_title: "Advanced Web Design",
    category: "Design",
    status: "Archived",
    students: 150,
    last_updated: generateRandomDate(),
  },
  {
    id: 4,
    course_title: "Advanced Web Design",
    category: "Programming",
    status: "Published",
    students: 150,
    last_updated: generateRandomDate(),
  },
  {
    id: 5,
    course_title: "Advanced Web Design",
    category: "programming",
    status: "Archived",
    students: 150,
    last_updated: generateRandomDate(),
  },
  {
    id: 6,
    course_title: "Advanced Web Design",
    category: "programming",
    status: "Archived",
    students: 150,
    last_updated: generateRandomDate(),
  },
  {
    id: 7,
    course_title: "Advanced Web Design",
    category: "programming",
    status: "Archived",
    students: 150,
    last_updated: generateRandomDate(),
  },
  {
    id: 8,
    course_title: "Advanced Web Design",
    category: "programming",
    status: "Archived",
    students: 150,
    last_updated: generateRandomDate(),
  },
  {
    id: 9,
    course_title: "Advanced Web Design",
    category: "programming",
    status: "Archived",
    students: 150,
    last_updated: generateRandomDate(),
  },
];



function DashboardCourseManagementComponent() {
  const [showDeleteModal, setShowDeleteModel] = useState(false)
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate({ to: '/admin/dashboard/add-course' })
  }


  const [checkingCourseExist, setCheckCourseExist] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 4;
  const totalPages = Math.ceil(DATA.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = DATA.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className='w-full h-full'>
      {checkingCourseExist && <div className="w-full h-full">
        <h1 className='text-lg font-medium'>Course Management</h1>
        <Button className="bg-[#F7AE30] md:w-44 md:px-2 gap-2" onClick={handleNavigate}>
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
      </div>}
      {checkingCourseExist ? (
        <>
          <Filter />
          <div className="w-full h-auto bg-white py-2 md:rounded-xl">
            {/* Show CourseTable on Medium (md) and Larger (lg) Screens */}
            <div className="hidden md:block ">
              <CourseTable handleShowDeleteModal={setShowDeleteModel} currentRows={currentRows} />
            </div>

            {/* Show Course Component on Small (sm) and Extra Small (xs) Screens */}
            <div className="flex h-auto md:hidden">
              <CourseCard handleShowDeleteModal={setShowDeleteModel} currentRows={currentRows} />
            </div>

            {/* Pagination (Always Visible) */}
            <div className="flex justify-end mt-4">
              <Pagination currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)} />
            </div>
          </div>
        </>
      ) : (
        <NoCourse handleNavigate={handleNavigate} />
      )}
      {showDeleteModal && <DeleteDialog handleCloseDeleteModal={setShowDeleteModel} />}
    </div>
  );
}

export default DashboardCourseManagementComponent;

