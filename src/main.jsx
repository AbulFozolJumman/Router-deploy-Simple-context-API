import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Orders from './components/Orders';
import ErrorPage from './components/Error';
import Grandpa from './components/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
      path: "/",
      element: <Home/>,
      loader: () => fetch("t-shirts.json")
      },
      {
        path: "cart",
        element: <Cart/>
      },
      {
        path: "orders",
        element: <Orders />
      },
      {
        path: "grandpa",
        element: <Grandpa />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
