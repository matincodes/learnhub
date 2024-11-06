import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(userDashboard)/_dashboardLayout/dashboard/leaderboard')({
  component: () => <div>Hello /dashboard/leaderboard!</div>
})