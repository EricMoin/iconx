/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MakeImport } from './routes/make'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const MakeRoute = MakeImport.update({
  id: '/make',
  path: '/make',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
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
    '/make': {
      id: '/make'
      path: '/make'
      fullPath: '/make'
      preLoaderRoute: typeof MakeImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/make': typeof MakeRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/make': typeof MakeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/make': typeof MakeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/make'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/make'
  id: '__root__' | '/' | '/make'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MakeRoute: typeof MakeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MakeRoute: MakeRoute,
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
        "/make"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/make": {
      "filePath": "make.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
