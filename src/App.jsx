import './App.css'
import Login from './components/Login'

import { useState } from 'react'
import Warn from './components/Warn'


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-10">
      <Login />
      <Warn />
    </div>
  )
}

export default App
