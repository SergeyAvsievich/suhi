import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import {Provider} from 'react-redux'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { store } from './app/redux'
import {Main, Inventory, Invoices, Movements, Components, Products, Release, SemiFinished, WriteOffs} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/semifinished',
    element: <SemiFinished />,
  },
  {
    path: '/menu',
    element: <Main />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/components',
    element: <Components />,
  },
  {
    path: '/movements',
    element: <Movements />,
  },
  {
    path: '/release',
    element: <Release />,
  },
  {
    path: '/inventory',
    element: <Inventory />,
  },
  {
    path: '/writeoffs',
    element: <WriteOffs />,
  },
  {
    path: '/invoices',
    element: <Invoices />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
