import { RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { AuthProvider, useAuth } from '@/context/auth-context'
import { AdminProvider } from './context/admin-context'
import { UserProvider } from './context/user-context'
import { router } from './router'

// Render the app
const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <AdminProvider>
        <AuthProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </AuthProvider>
      </AdminProvider>
    </StrictMode>,
  )
}

export function App() {
  const auth = useAuth()
  return <RouterProvider router={router} context={{ ...auth }} />
}
