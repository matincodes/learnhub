import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import NotFound from '@/components/notFound/notFound'
// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { AuthProvider, useAuth } from '@/context/auth-context'

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
})

// Render the app
const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>,
  )
}

export function App() {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ ...auth }} />
}
