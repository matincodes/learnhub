import CreateCourse from '@/components/manage_course/course_management/add_course/CreateCourse'
import Nav from '@/components/manage_course/course_management/add_course/Nav'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/new-course',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-screen w-full px-8">
      <Nav />
      <CreateCourse />
    </div>
  )
}
