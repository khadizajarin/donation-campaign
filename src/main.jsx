import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/Root/Root';
import Home from './componants/Home/Home';
import ErrorPage from './componants/ErrorPage/Errorpage';
import DetailsCard from './componants/DetailsCard/DetailsCard';
import DonationList from './componants/DonationList/DonationList';
import Statistics from './componants/Statistics/Statistics';
// import Donate from './componants/Donate/Donate';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donate/:id',
        element: <DetailsCard></DetailsCard>,
        loader: () =>fetch('../public/donation.json')
      },
       {
        path: '/donation',
        element: <DonationList></DonationList>,
        loader: () =>fetch('../public/donation.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () =>fetch('../public/donation.json')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
