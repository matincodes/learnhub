import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { AuthProvider, useAuth } from '@/context/auth-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AdminProvider } from './context/admin-context'
import { UserProvider } from './context/user-context'
import { router } from './router'

const queryClient = new QueryClient()

// Render the app
const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AdminProvider>
          <AuthProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </AuthProvider>
        </AdminProvider>
      </QueryClientProvider>
    </StrictMode>,
  )
}

export function App() {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ ...auth }} />
}
