import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './page/ErrorPage';
import HomePage from './page/HomePage';
import AdminPage from './page/AdminPage';
import MenuPage from './page/MenuPage';
import ScanQRPage from './page/ScanQRPage';
import Burger from './component/Burger';
import Kabab from './component/Kabab';
import Drink from './component/Drink';
import Desert from './component/Desert';
import ChegirmaPage from './page/ChegirmaPage';




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
      children:[
        {
          index:true,
          element:<Burger/>,
        },
        {
          path:"kabab",
          element:<Kabab/>,
        },
        {
          path:"drink",
          element:<Drink/>
        },
        {
          path:"desert",
          element:<Desert/>
        }
      ]

    },
    { path: "/scan-qr", 
    element:<ScanQRPage/>
   },
   {
    path:"/allskid",
    element:<ChegirmaPage/>
   }
 
  ]
}])
root.render(
  <React.StrictMode>
   <RouterProvider router={myRouter} />
  </React.StrictMode>
);


