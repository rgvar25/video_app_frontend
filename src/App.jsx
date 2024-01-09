import { useState } from 'react'

import './App.css'
import SignupComponent from './components/SignupComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignupComponent />
    </>
  )
}

export default App
