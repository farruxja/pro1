import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import HomePage from './page/HomePage';
import AdminPage from './page/AdminPage';
import MenuPage from './page/MenuPage';
import ScanQRPage from './page/ScanQRPage';




const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter=createBrowserRouter([{
  element:<App/>,
  errorElement:<ErrorPage/>,
  path:"/",
  children:[
    {
      path:"/",
      element:<HomePage/>,
    },
    {
      path:"/admin",
      element:<AdminPage/>,
    },
    {
      path:"/menu/:tableId",
      element:<MenuPage/>,

    },
    { path: "/scan-qr", 
    element:<ScanQRPage/>
   },
 
  ]
}])
root.render(
  <React.StrictMode>
   <RouterProvider router={myRouter} />
  </React.StrictMode>
);


