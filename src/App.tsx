/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./components/layout/Layout"
import { Dashboard } from "./pages/Dashboard"
import { TrendingProducts } from "./pages/TrendingProducts"
import { AutoPosting } from "./pages/AutoPosting"
import { SocialConnections } from "./pages/SocialConnections"
import { Settings } from "./pages/Settings"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "trending", element: <TrendingProducts /> },
      { path: "posting", element: <AutoPosting /> },
      { path: "connections", element: <SocialConnections /> },
      { path: "settings", element: <Settings /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
