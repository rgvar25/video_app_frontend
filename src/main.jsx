import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import LandingPage from './pages/LandingPage.jsx'
import SignUpPage from './pages/SignupPage.jsx'
import LoginPage from './pages/LoginPage.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/signup",
        element: <SignUpPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
