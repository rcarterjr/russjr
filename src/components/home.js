import React from 'react'
import '../App.css'
import Hello from './hellofriend'
import Socials from './socials'

function Home() {
    return (
      <div className="App">
        <div className="main">
          <Hello />
          <Socials />
        </div>
      </div>
    )
  }

export default Home