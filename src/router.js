// src/router.js (Create this file)
import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import NotFound from '@/components/notFound/notFound'

// Define the router here and export it
export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFound,
  context: {
    // Initial context values
    auth: undefined, 
  },
})