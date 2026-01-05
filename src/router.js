// src/router.js (Create this file)
import { createRouter } from '@tanstack/react-router'
import NotFound from '@/components/notFound/notFound'
import { routeTree } from './routeTree.gen'

// Define a single router instance consumed across the app
export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFound,
  defaultStructuralSharing: true,
  context: {
    user: undefined,
    isAuthenticated: false,
    login: undefined,
    signup: undefined,
    logout: undefined,
    secureRequest: undefined,
    accessToken: undefined,
  },
})
