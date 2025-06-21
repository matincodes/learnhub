import CreateCourseLecturer from '@/components/manage_course/course_management/add_course/CreateCourseLecturer'
import Nav from '@/components/manage_course/course_management/add_course/Nav'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/new-course-lec',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-screen w-full px-8">
      <Nav />
      <CreateCourseLecturer />
    </div>
  )
}
