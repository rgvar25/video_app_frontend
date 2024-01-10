import { useState } from 'react'

import './App.css'
import SignupComponent from './components/SignupComponent'
import SignUpPage from './pages/SignupPage'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    
      <Outlet />
     
    </>
  )
}

export default App
