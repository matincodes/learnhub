import CourseList from '@/components/manage_course/course_management/courseList'
import Nav from '@/components/manage_course/course_management/Nav'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/course-management/',
)({
  component: DashboardCourseManagementComponent,
})

function DashboardCourseManagementComponent() {
  return (
    <>
      <Nav />
      <div className="w-full px-16">
        <CourseList />
      </div>
    </>
  )
}

export default DashboardCourseManagementComponent
