import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/my-courses')({
  component: () => <div>Hello /dashboard/my-courses!</div>
})