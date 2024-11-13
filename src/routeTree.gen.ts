/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
<<<<<<< HEAD
import { Route as DashboardImport } from './routes/dashboard'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as DashboardAnalyticsImport } from './routes/dashboard/analytics'
=======
import { Route as PricingImport } from './routes/pricing'
import { Route as CoursesIndexImport } from './routes/courses/index'
import { Route as CoursesCourseImport } from './routes/courses/$course'
>>>>>>> 2cb77225ba8513cf27e98ac3e6f28acd4e73be99
import { Route as AuthSignupImport } from './routes/_auth/signup'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as userDashboardDashboardLayoutImport } from './routes/(userDashboard)/_dashboardLayout'
import { Route as userDashboardDashboardLayoutDashboardIndexImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/index'
import { Route as userDashboardDashboardLayoutDashboardSettingsImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/settings'
import { Route as userDashboardDashboardLayoutDashboardSearchImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/search'
import { Route as userDashboardDashboardLayoutDashboardProfileImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/profile'
import { Route as userDashboardDashboardLayoutDashboardNotificationsImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/notifications'
import { Route as userDashboardDashboardLayoutDashboardMyCoursesImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/my-courses'
import { Route as userDashboardDashboardLayoutDashboardLeaderboardImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/leaderboard'
import { Route as userDashboardDashboardLayoutDashboardAnalyticsImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/analytics'
import { Route as userDashboardDashboardLayoutDashboardQuizzesIndexImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/quizzes/index'
import { Route as userDashboardDashboardLayoutDashboardQuizzesIdImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/quizzes/$id'

// Create Virtual Routes

const userDashboardImport = createFileRoute('/(userDashboard)')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

<<<<<<< HEAD
const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
=======
const userDashboardRoute = userDashboardImport.update({
  id: '/(userDashboard)',
  getParentRoute: () => rootRoute,
} as any)

const PricingRoute = PricingImport.update({
  path: '/pricing',
>>>>>>> 2cb77225ba8513cf27e98ac3e6f28acd4e73be99
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

<<<<<<< HEAD
const DashboardIndexRoute = DashboardIndexImport.update({
  path: '/',
  getParentRoute: () => DashboardRoute,
} as any)

const DashboardAnalyticsRoute = DashboardAnalyticsImport.update({
  path: '/analytics',
  getParentRoute: () => DashboardRoute,
=======
const CoursesIndexRoute = CoursesIndexImport.update({
  path: '/courses/',
  getParentRoute: () => rootRoute,
} as any)

const CoursesCourseRoute = CoursesCourseImport.update({
  path: '/courses/$course',
  getParentRoute: () => rootRoute,
>>>>>>> 2cb77225ba8513cf27e98ac3e6f28acd4e73be99
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const userDashboardDashboardLayoutRoute =
  userDashboardDashboardLayoutImport.update({
    id: '/_dashboardLayout',
    getParentRoute: () => userDashboardRoute,
  } as any)

const userDashboardDashboardLayoutDashboardIndexRoute =
  userDashboardDashboardLayoutDashboardIndexImport.update({
    path: '/dashboard/',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardSettingsRoute =
  userDashboardDashboardLayoutDashboardSettingsImport.update({
    path: '/dashboard/settings',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardSearchRoute =
  userDashboardDashboardLayoutDashboardSearchImport.update({
    path: '/dashboard/search',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardProfileRoute =
  userDashboardDashboardLayoutDashboardProfileImport.update({
    path: '/dashboard/profile',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardNotificationsRoute =
  userDashboardDashboardLayoutDashboardNotificationsImport.update({
    path: '/dashboard/notifications',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardMyCoursesRoute =
  userDashboardDashboardLayoutDashboardMyCoursesImport.update({
    path: '/dashboard/my-courses',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardLeaderboardRoute =
  userDashboardDashboardLayoutDashboardLeaderboardImport.update({
    path: '/dashboard/leaderboard',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardAnalyticsRoute =
  userDashboardDashboardLayoutDashboardAnalyticsImport.update({
    path: '/dashboard/analytics',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardQuizzesIndexRoute =
  userDashboardDashboardLayoutDashboardQuizzesIndexImport.update({
    path: '/dashboard/quizzes/',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardQuizzesIdRoute =
  userDashboardDashboardLayoutDashboardQuizzesIdImport.update({
    path: '/dashboard/quizzes/$id',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
<<<<<<< HEAD
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
=======
    '/pricing': {
      id: '/pricing'
      path: '/pricing'
      fullPath: '/pricing'
      preLoaderRoute: typeof PricingImport
      parentRoute: typeof rootRoute
    }
    '/(userDashboard)': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof userDashboardImport
      parentRoute: typeof rootRoute
    }
    '/(userDashboard)/_dashboardLayout': {
      id: '/_dashboardLayout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof userDashboardDashboardLayoutImport
      parentRoute: typeof userDashboardRoute
    }
>>>>>>> 2cb77225ba8513cf27e98ac3e6f28acd4e73be99
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/_auth/signup': {
      id: '/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof rootRoute
    }
<<<<<<< HEAD
    '/dashboard/analytics': {
      id: '/dashboard/analytics'
      path: '/analytics'
      fullPath: '/dashboard/analytics'
      preLoaderRoute: typeof DashboardAnalyticsImport
      parentRoute: typeof DashboardImport
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardImport
=======
    '/courses/$course': {
      id: '/courses/$course'
      path: '/courses/$course'
      fullPath: '/courses/$course'
      preLoaderRoute: typeof CoursesCourseImport
      parentRoute: typeof rootRoute
    }
    '/courses/': {
      id: '/courses/'
      path: '/courses'
      fullPath: '/courses'
      preLoaderRoute: typeof CoursesIndexImport
      parentRoute: typeof rootRoute
    }
    '/(userDashboard)/_dashboardLayout/dashboard/analytics': {
      id: '/_dashboardLayout/dashboard/analytics'
      path: '/dashboard/analytics'
      fullPath: '/dashboard/analytics'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardAnalyticsImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/leaderboard': {
      id: '/_dashboardLayout/dashboard/leaderboard'
      path: '/dashboard/leaderboard'
      fullPath: '/dashboard/leaderboard'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardLeaderboardImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/my-courses': {
      id: '/_dashboardLayout/dashboard/my-courses'
      path: '/dashboard/my-courses'
      fullPath: '/dashboard/my-courses'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardMyCoursesImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/notifications': {
      id: '/_dashboardLayout/dashboard/notifications'
      path: '/dashboard/notifications'
      fullPath: '/dashboard/notifications'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardNotificationsImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/profile': {
      id: '/_dashboardLayout/dashboard/profile'
      path: '/dashboard/profile'
      fullPath: '/dashboard/profile'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardProfileImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/search': {
      id: '/_dashboardLayout/dashboard/search'
      path: '/dashboard/search'
      fullPath: '/dashboard/search'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardSearchImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/settings': {
      id: '/_dashboardLayout/dashboard/settings'
      path: '/dashboard/settings'
      fullPath: '/dashboard/settings'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardSettingsImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/': {
      id: '/_dashboardLayout/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardIndexImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/quizzes/$id': {
      id: '/_dashboardLayout/dashboard/quizzes/$id'
      path: '/dashboard/quizzes/$id'
      fullPath: '/dashboard/quizzes/$id'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardQuizzesIdImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/quizzes/': {
      id: '/_dashboardLayout/dashboard/quizzes/'
      path: '/dashboard/quizzes'
      fullPath: '/dashboard/quizzes'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardQuizzesIndexImport
      parentRoute: typeof userDashboardDashboardLayoutImport
>>>>>>> 2cb77225ba8513cf27e98ac3e6f28acd4e73be99
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
<<<<<<< HEAD
  DashboardRoute: DashboardRoute.addChildren({
    DashboardAnalyticsRoute,
    DashboardIndexRoute,
  }),
  AuthLoginRoute,
  AuthSignupRoute,
=======
  PricingRoute,
  userDashboardRoute: userDashboardRoute.addChildren({
    userDashboardDashboardLayoutRoute:
      userDashboardDashboardLayoutRoute.addChildren({
        userDashboardDashboardLayoutDashboardAnalyticsRoute,
        userDashboardDashboardLayoutDashboardLeaderboardRoute,
        userDashboardDashboardLayoutDashboardMyCoursesRoute,
        userDashboardDashboardLayoutDashboardNotificationsRoute,
        userDashboardDashboardLayoutDashboardProfileRoute,
        userDashboardDashboardLayoutDashboardSearchRoute,
        userDashboardDashboardLayoutDashboardSettingsRoute,
        userDashboardDashboardLayoutDashboardIndexRoute,
        userDashboardDashboardLayoutDashboardQuizzesIdRoute,
        userDashboardDashboardLayoutDashboardQuizzesIndexRoute,
      }),
  }),
  AuthLoginRoute,
  AuthSignupRoute,
  CoursesCourseRoute,
  CoursesIndexRoute,
>>>>>>> 2cb77225ba8513cf27e98ac3e6f28acd4e73be99
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
<<<<<<< HEAD
        "/dashboard",
        "/_auth/login",
        "/_auth/signup"
=======
        "/pricing",
        "/",
        "/_auth/login",
        "/_auth/signup",
        "/courses/$course",
        "/courses/"
>>>>>>> 2cb77225ba8513cf27e98ac3e6f28acd4e73be99
      ]
    },
    "/": {
      "filePath": "(userDashboard)",
      "children": [
        "/_dashboardLayout"
      ]
    },
    "/pricing": {
      "filePath": "pricing.jsx"
    },
    "/_dashboardLayout": {
      "filePath": "(userDashboard)/_dashboardLayout.jsx",
      "parent": "/",
      "children": [
        "/_dashboardLayout/dashboard/analytics",
        "/_dashboardLayout/dashboard/leaderboard",
        "/_dashboardLayout/dashboard/my-courses",
        "/_dashboardLayout/dashboard/notifications",
        "/_dashboardLayout/dashboard/profile",
        "/_dashboardLayout/dashboard/search",
        "/_dashboardLayout/dashboard/settings",
        "/_dashboardLayout/dashboard/",
        "/_dashboardLayout/dashboard/quizzes/$id",
        "/_dashboardLayout/dashboard/quizzes/"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard.jsx",
      "children": [
        "/dashboard/analytics",
        "/dashboard/"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.jsx"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.jsx"
    },
<<<<<<< HEAD
    "/dashboard/analytics": {
      "filePath": "dashboard/analytics.jsx",
      "parent": "/dashboard"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.jsx",
      "parent": "/dashboard"
=======
    "/courses/$course": {
      "filePath": "courses/$course.jsx"
    },
    "/courses/": {
      "filePath": "courses/index.jsx"
    },
    "/_dashboardLayout/dashboard/analytics": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/analytics.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/leaderboard": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/leaderboard.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/my-courses": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/my-courses.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/notifications": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/notifications.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/profile": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/profile.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/search": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/search.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/settings": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/settings.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/index.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/quizzes/$id": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/quizzes/$id.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/quizzes/": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/quizzes/index.jsx",
      "parent": "/_dashboardLayout"
>>>>>>> 2cb77225ba8513cf27e98ac3e6f28acd4e73be99
    }
  }
}
ROUTE_MANIFEST_END */
