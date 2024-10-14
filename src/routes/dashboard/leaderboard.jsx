import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/leaderboard')({
  component: () => <div>Hello /dashboard/leaderboard!</div>
})