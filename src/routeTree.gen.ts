/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PricingImport } from './routes/pricing'
import { Route as AuthImport } from './routes/_auth'
import { Route as CoursesIndexImport } from './routes/courses/index'
import { Route as CoursesCourseImport } from './routes/courses/$course'
import { Route as AuthSignupImport } from './routes/_auth/signup'
import { Route as AuthLoginImport } from './routes/_auth/login'
import { Route as userDashboardDashboardLayoutImport } from './routes/(userDashboard)/_dashboardLayout'
import { Route as userDashboardDashboardLayoutDashboardIndexImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/index'
import { Route as userDashboardDashboardLayoutDashboardSettingsImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/settings'
import { Route as userDashboardDashboardLayoutDashboardSearchImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/search'
import { Route as userDashboardDashboardLayoutDashboardProfileImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/profile'
import { Route as userDashboardDashboardLayoutDashboardNotificationsImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/notifications'
import { Route as userDashboardDashboardLayoutDashboardMentorImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/mentor'
import { Route as userDashboardDashboardLayoutDashboardLeaderboardImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/leaderboard'
import { Route as userDashboardDashboardLayoutDashboardQuizzesIndexImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/quizzes/index'
import { Route as userDashboardDashboardLayoutDashboardMyCoursesIndexImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/my-courses/index'
import { Route as userDashboardDashboardLayoutDashboardQuizzesIdImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/quizzes/$id'
import { Route as userDashboardDashboardLayoutDashboardMyCoursesIdIndexImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/my-courses/$id/index'
import { Route as userDashboardDashboardLayoutDashboardMyCoursesIdLearnLectureLectureidImport } from './routes/(userDashboard)/_dashboardLayout/dashboard/my-courses/$id/learn/lecture/$lectureid'

// Create Virtual Routes

const userDashboardImport = createFileRoute('/(userDashboard)')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const userDashboardRoute = userDashboardImport.update({
  id: '/(userDashboard)',
  getParentRoute: () => rootRoute,
} as any)

const PricingRoute = PricingImport.update({
  path: '/pricing',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const CoursesIndexRoute = CoursesIndexImport.update({
  path: '/courses/',
  getParentRoute: () => rootRoute,
} as any)

const CoursesCourseRoute = CoursesCourseImport.update({
  path: '/courses/$course',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/login',
  getParentRoute: () => AuthRoute,
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

const userDashboardDashboardLayoutDashboardMentorRoute =
  userDashboardDashboardLayoutDashboardMentorImport.update({
    path: '/dashboard/mentor',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardLeaderboardRoute =
  userDashboardDashboardLayoutDashboardLeaderboardImport.update({
    path: '/dashboard/leaderboard',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardQuizzesIndexRoute =
  userDashboardDashboardLayoutDashboardQuizzesIndexImport.update({
    path: '/dashboard/quizzes/',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardMyCoursesIndexRoute =
  userDashboardDashboardLayoutDashboardMyCoursesIndexImport.update({
    path: '/dashboard/my-courses/',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardQuizzesIdRoute =
  userDashboardDashboardLayoutDashboardQuizzesIdImport.update({
    path: '/dashboard/quizzes/$id',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardMyCoursesIdIndexRoute =
  userDashboardDashboardLayoutDashboardMyCoursesIdIndexImport.update({
    path: '/dashboard/my-courses/$id/',
    getParentRoute: () => userDashboardDashboardLayoutRoute,
  } as any)

const userDashboardDashboardLayoutDashboardMyCoursesIdLearnLectureLectureidRoute =
  userDashboardDashboardLayoutDashboardMyCoursesIdLearnLectureLectureidImport.update(
    {
      path: '/dashboard/my-courses/$id/learn/lecture/$lectureid',
      getParentRoute: () => userDashboardDashboardLayoutRoute,
    } as any,
  )

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
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
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
    '/_auth/login': {
      id: '/_auth/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof AuthImport
    }
    '/_auth/signup': {
      id: '/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof AuthImport
    }
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
    '/(userDashboard)/_dashboardLayout/dashboard/leaderboard': {
      id: '/_dashboardLayout/dashboard/leaderboard'
      path: '/dashboard/leaderboard'
      fullPath: '/dashboard/leaderboard'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardLeaderboardImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/mentor': {
      id: '/_dashboardLayout/dashboard/mentor'
      path: '/dashboard/mentor'
      fullPath: '/dashboard/mentor'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardMentorImport
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
    '/(userDashboard)/_dashboardLayout/dashboard/my-courses/': {
      id: '/_dashboardLayout/dashboard/my-courses/'
      path: '/dashboard/my-courses'
      fullPath: '/dashboard/my-courses'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardMyCoursesIndexImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/quizzes/': {
      id: '/_dashboardLayout/dashboard/quizzes/'
      path: '/dashboard/quizzes'
      fullPath: '/dashboard/quizzes'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardQuizzesIndexImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/my-courses/$id/': {
      id: '/_dashboardLayout/dashboard/my-courses/$id/'
      path: '/dashboard/my-courses/$id'
      fullPath: '/dashboard/my-courses/$id'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardMyCoursesIdIndexImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
    '/(userDashboard)/_dashboardLayout/dashboard/my-courses/$id/learn/lecture/$lectureid': {
      id: '/_dashboardLayout/dashboard/my-courses/$id/learn/lecture/$lectureid'
      path: '/dashboard/my-courses/$id/learn/lecture/$lectureid'
      fullPath: '/dashboard/my-courses/$id/learn/lecture/$lectureid'
      preLoaderRoute: typeof userDashboardDashboardLayoutDashboardMyCoursesIdLearnLectureLectureidImport
      parentRoute: typeof userDashboardDashboardLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AuthRoute: AuthRoute.addChildren({ AuthLoginRoute, AuthSignupRoute }),
  PricingRoute,
  userDashboardRoute: userDashboardRoute.addChildren({
    userDashboardDashboardLayoutRoute:
      userDashboardDashboardLayoutRoute.addChildren({
        userDashboardDashboardLayoutDashboardLeaderboardRoute,
        userDashboardDashboardLayoutDashboardMentorRoute,
        userDashboardDashboardLayoutDashboardNotificationsRoute,
        userDashboardDashboardLayoutDashboardProfileRoute,
        userDashboardDashboardLayoutDashboardSearchRoute,
        userDashboardDashboardLayoutDashboardSettingsRoute,
        userDashboardDashboardLayoutDashboardIndexRoute,
        userDashboardDashboardLayoutDashboardQuizzesIdRoute,
        userDashboardDashboardLayoutDashboardMyCoursesIndexRoute,
        userDashboardDashboardLayoutDashboardQuizzesIndexRoute,
        userDashboardDashboardLayoutDashboardMyCoursesIdIndexRoute,
        userDashboardDashboardLayoutDashboardMyCoursesIdLearnLectureLectureidRoute,
      }),
  }),
  CoursesCourseRoute,
  CoursesIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/_auth",
        "/pricing",
        "/",
        "/courses/$course",
        "/courses/"
      ]
    },
    "/": {
      "filePath": "(userDashboard)",
      "children": [
        "/_dashboardLayout"
      ]
    },
    "/_auth": {
      "filePath": "_auth.jsx",
      "children": [
        "/_auth/login",
        "/_auth/signup"
      ]
    },
    "/pricing": {
      "filePath": "pricing.jsx"
    },
    "/_dashboardLayout": {
      "filePath": "(userDashboard)/_dashboardLayout.jsx",
      "parent": "/",
      "children": [
        "/_dashboardLayout/dashboard/leaderboard",
        "/_dashboardLayout/dashboard/mentor",
        "/_dashboardLayout/dashboard/notifications",
        "/_dashboardLayout/dashboard/profile",
        "/_dashboardLayout/dashboard/search",
        "/_dashboardLayout/dashboard/settings",
        "/_dashboardLayout/dashboard/",
        "/_dashboardLayout/dashboard/quizzes/$id",
        "/_dashboardLayout/dashboard/my-courses/",
        "/_dashboardLayout/dashboard/quizzes/",
        "/_dashboardLayout/dashboard/my-courses/$id/",
        "/_dashboardLayout/dashboard/my-courses/$id/learn/lecture/$lectureid"
      ]
    },
    "/_auth/login": {
      "filePath": "_auth/login.jsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.jsx",
      "parent": "/_auth"
    },
    "/courses/$course": {
      "filePath": "courses/$course.jsx"
    },
    "/courses/": {
      "filePath": "courses/index.jsx"
    },
    "/_dashboardLayout/dashboard/leaderboard": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/leaderboard.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/mentor": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/mentor.jsx",
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
    "/_dashboardLayout/dashboard/my-courses/": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/my-courses/index.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/quizzes/": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/quizzes/index.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/my-courses/$id/": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/my-courses/$id/index.jsx",
      "parent": "/_dashboardLayout"
    },
    "/_dashboardLayout/dashboard/my-courses/$id/learn/lecture/$lectureid": {
      "filePath": "(userDashboard)/_dashboardLayout/dashboard/my-courses/$id/learn/lecture/$lectureid.jsx",
      "parent": "/_dashboardLayout"
    }
  }
}
ROUTE_MANIFEST_END */
