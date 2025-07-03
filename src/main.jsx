import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import NotFound from '@/components/notFound/notFound'
// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { AuthProvider, useAuth } from '@/context/auth-context'
import { UserProvider } from './context/user-context'
import { AdminProvider } from './context/admin-context'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFound,
  context: {
    user: undefined,
    isAuthenticated: false,
    login: undefined,
    signup: undefined,
    logout: undefined,
    authFetch: undefined,
    accessToken: undefined,
  },
  defaultStructuralSharing: true,
})

// Render the app
const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <AdminProvider>
        <UserProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </UserProvider>
      </AdminProvider>
    </StrictMode>,
  )
}

export function App() {
  const auth = useAuth()
  console.log('Auth context:', auth)

  return <RouterProvider router={router} context={{ ...auth }} />
}
