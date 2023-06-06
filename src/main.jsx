import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Hero from './Component/Hero';
import CartView from './Component/CartView';
import Rechart from './Component/Rechart';
import Error from './Component/Error';
import Blog from './Component/Blog';
import Apply from './Component/Apply';
import cartProductLoader from './Component/cartProductLoader';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
     
      {
        path: "/",
        element: <Hero></Hero>,
      },
      {
        path: "/cartJob/:id",
        element: <CartView></CartView>,
        loader:async ({ params }) => {
          const res = await fetch(`company.json`)
          const data = await res.json();
          // console.log(data)
          const findJob = data.find(d => d.id === params.id)
          console.log(findJob)
          return findJob;
        }
      },
      {
        path: "/rechart",
        element: <Rechart></Rechart>,
        loader: ()=> fetch('/rechat.json')
      },
      {
        path: "/applied",
        element: <Apply></Apply>,
        // loader: cartProductLoader
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
     
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
