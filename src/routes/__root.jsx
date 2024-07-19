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
      {/* <div className='p-2 flex gap-2 border border-red-500'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>

        <Link to='/login'>Login</Link>
      </div> */}
      <hr />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </> 
  ),
})
