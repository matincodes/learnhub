import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/quizzes')({
  component: () => <div>Hello /dashboard/quizzes!</div>
})