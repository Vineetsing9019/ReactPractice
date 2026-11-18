import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

// Creating browser router
const routerArray = createBrowserRouter([
    // route objects - array of routes
    {
        // base path - context path
        // localhost:5173
        path: '',
        element: <App />,
        children: [
            {
                path: '',          // localhost:5173  → shows Home inside App
                element: <Home />
            },
            {
                path: 'login',     // localhost:5173/login
                element: <Login />
            },
            {
                path: 'register',  // localhost:5173/register
                element: <Register />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={routerArray} />
    </StrictMode>
)