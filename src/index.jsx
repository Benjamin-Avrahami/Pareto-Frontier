import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import App from './App.jsx'
import LinePlot from './LinePlot.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/chart",
        element: <LinePlot />
    }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
