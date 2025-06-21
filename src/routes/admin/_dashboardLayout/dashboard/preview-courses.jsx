import Nav from '@/components/manage_course/course_preview/Nav'
import PreviewCourse from '@/components/manage_course/course_preview/PreviewCourse'
import UploadingCourse from '@/components/manage_course/course_preview/UploadingCourse'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/preview-courses',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const [showLoadingCourse, setShowLoadingCourse] = useState(false)
  return (
    <div className="h-screen w-full px-8">
      <Nav onOpen={setShowLoadingCourse} />
      <PreviewCourse />
      <UploadingCourse
        onOpen={setShowLoadingCourse}
        openCourseLoading={showLoadingCourse}
      />
    </div>
  )
}
