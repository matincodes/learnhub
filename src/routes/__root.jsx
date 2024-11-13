import { Toaster } from '@/components/ui/toaster'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'

const TanStackRouterDevtools =
  import.meta.env.PROD === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then(res => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})
