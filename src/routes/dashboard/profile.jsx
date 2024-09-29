import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/profile')({
  component: () => <div>Hello /dashboard/profile!</div>
})