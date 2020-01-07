import React from 'react'
import './App.css'
import Socials from './components/socials'
import Headline from './components/headline'
import Navbar from './components/navbar'
import AboutMe from './components/aboutme'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <div className="main">
        <Navbar />
        <Headline />
        <Socials />
      </div>
        <AboutMe />
        <Footer />
    </div>
  )
}

export default App
