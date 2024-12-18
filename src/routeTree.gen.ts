/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as LoginImport } from './routes/login'
import { Route as IndexImport } from './routes/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as DashboardProfileImport } from './routes/dashboard/profile'
import { Route as DashboardMentorImport } from './routes/dashboard/mentor'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardProfileRoute = DashboardProfileImport.update({
  id: '/dashboard/profile',
  path: '/dashboard/profile',
  getParentRoute: () => rootRoute,
} as any)

const DashboardMentorRoute = DashboardMentorImport.update({
  id: '/dashboard/mentor',
  path: '/dashboard/mentor',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/mentor': {
      id: '/dashboard/mentor'
      path: '/dashboard/mentor'
      fullPath: '/dashboard/mentor'
      preLoaderRoute: typeof DashboardMentorImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/profile': {
      id: '/dashboard/profile'
      path: '/dashboard/profile'
      fullPath: '/dashboard/profile'
      preLoaderRoute: typeof DashboardProfileImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/dashboard/mentor': typeof DashboardMentorRoute
  '/dashboard/profile': typeof DashboardProfileRoute
  '/dashboard': typeof DashboardIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/dashboard/mentor': typeof DashboardMentorRoute
  '/dashboard/profile': typeof DashboardProfileRoute
  '/dashboard': typeof DashboardIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/login': typeof LoginRoute
  '/signup': typeof SignupRoute
  '/dashboard/mentor': typeof DashboardMentorRoute
  '/dashboard/profile': typeof DashboardProfileRoute
  '/dashboard/': typeof DashboardIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/signup'
    | '/dashboard/mentor'
    | '/dashboard/profile'
    | '/dashboard'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/signup'
    | '/dashboard/mentor'
    | '/dashboard/profile'
    | '/dashboard'
  id:
    | '__root__'
    | '/'
    | '/login'
    | '/signup'
    | '/dashboard/mentor'
    | '/dashboard/profile'
    | '/dashboard/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LoginRoute: typeof LoginRoute
  SignupRoute: typeof SignupRoute
  DashboardMentorRoute: typeof DashboardMentorRoute
  DashboardProfileRoute: typeof DashboardProfileRoute
  DashboardIndexRoute: typeof DashboardIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LoginRoute: LoginRoute,
  SignupRoute: SignupRoute,
  DashboardMentorRoute: DashboardMentorRoute,
  DashboardProfileRoute: DashboardProfileRoute,
  DashboardIndexRoute: DashboardIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login",
        "/signup",
        "/dashboard/mentor",
        "/dashboard/profile",
        "/dashboard/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/dashboard/mentor": {
      "filePath": "dashboard/mentor.tsx"
    },
    "/dashboard/profile": {
      "filePath": "dashboard/profile.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
