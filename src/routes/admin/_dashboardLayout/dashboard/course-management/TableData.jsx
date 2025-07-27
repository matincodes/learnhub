import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/course-management/TableData',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello
    </div>
  )
}
