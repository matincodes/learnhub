import { Suspense, lazy } from 'react'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

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
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </> 
  ),
})
