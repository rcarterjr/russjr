import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <span id="nameinnavbar"><b>RUSSELL CARTER</b></span>
      </div>
      <div className="navlinks">
        <span className="navlink">
          <a href="/">
            <b>HOME</b>
          </a>
        </span>
        <span className="navlink">
          <a href="/">
            <b>BLOG</b>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Navbar
