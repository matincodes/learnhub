import Filter from '@/components/manage_course/filter_courses/filter'
import { Pagination, CourseTable, CourseCard } from '@/components/manage_course/filter_courses/courses';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/manage-course')({
  component: DashboardCourseManagementComponent
})

function DashboardCourseManagementComponent() {

  return (
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
  );
}

export default DashboardCourseManagementComponent;

