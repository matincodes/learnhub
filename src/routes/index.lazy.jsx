import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createLazyFileRoute('/')({
  component: () => <App />,
})

export default function App() {
  return (
    <>
      <h1 className='text-xl bg-red-600 border-red-600'>Hello Vite + React!</h1>
      <Button>Click me</Button>
    </>
  )
}