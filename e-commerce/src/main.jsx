import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Cart from './Cart.jsx'
import Profile from './Profile.jsx'

import {RouterProvider, createBrowserRouter} from "react-router-dom"
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/Cart",
    element: <Cart></Cart>
  },
  {
    path: "/Profile",
    element: <Profile></Profile>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>,
)
