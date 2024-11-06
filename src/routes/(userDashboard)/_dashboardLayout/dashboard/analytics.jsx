import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(userDashboard)/_dashboardLayout/dashboard/analytics')({
  component: () => <div>Hello /dashboard/analytics!</div>
})