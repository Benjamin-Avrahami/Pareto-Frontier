import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import App from './App.jsx'
import RandomPlot from './RandomPlot.jsx'
import UserPlot from './UserPlot.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/randomchart",
        element: <RandomPlot />
    },
    {
        path: "/chart",
        element: <UserPlot />
    }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
