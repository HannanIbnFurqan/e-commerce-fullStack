import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// css
import './index.css'

// components
import App from './App.jsx'
import Cart from './Cart.jsx'
import Profile from './Profile.jsx'
import Home from './Home.jsx'
import ErrorPage from './ErrorPage.jsx'
import SingleProductPage from './SingleProductPage.jsx'
import { appStore } from './utility/store/appStore.js'
import { Provider } from "react-redux"



// react routing
import { RouterProvider, createBrowserRouter } from "react-router-dom"
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Cart",
        element: <Cart></Cart>
      },
      {
        path: "/Profile",
        element: <Profile></Profile>
      },
      {
        path: "/product/:id",
        element: <SingleProductPage></SingleProductPage>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  </StrictMode>,
)
