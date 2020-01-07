import React from 'react'
import '../App.css'
import lajolla from '../images/meinlajolla.jpg'
import resume from '../RussellCarterResume.pdf'

function AboutMe() {
  return (
    <div className="aboutme">
      <h1>ABOUT ME</h1>
      <img src={lajolla} alt="" id="lajolla" />
      <p className="textnexttopic">
        I'm a <b>software developer</b> that loves to learn and that is open to
        new opportunities. <br />
        <br />
        <b>Favorite Languages:</b> Python, JavaScript <br />
        <br />
        <b>Hobbies:</b> Soccer, Coding, Traveling <br />
      </p>
      <hr />
      <p className="textnexttopic">
        Check out my
        <a href={resume} target="_blank" rel="noopener noreferrer">
          {' '}
          Resume here.
        </a>
      </p>
    </div>
  )
}

export default AboutMe
