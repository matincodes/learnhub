import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: () => <Outlet />,
  beforeLoad: ({ context, search }) => {
    if (context.isAuthenticated) {
      throw redirect({
        to: search.redirect ? search.redirect : '/',
      })
    }
  },
})
