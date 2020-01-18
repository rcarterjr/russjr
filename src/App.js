import React from 'react'
import './App.css'
import Socials from './components/socials'
import Hello from './components/hellofriend'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Hello />
        <Socials />
      </div>
    </div>
  )
}

export default App
