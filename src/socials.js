import React from 'react'
import './App.css'
import linkedin from './icons/linkedin.png'
import twitter from './icons/twitter.png'
import github from './icons/github.png'

function Socials() {
    return (
        <div className="socials">
            <a
                href="https://linkedin.com/in/russellcarterjr"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="img">
                    <img src={linkedin} alt="linkedin" id="linkedin" />
                </div>
            </a>
            <a
                href="https://twitter.com/rcarterjr_"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="img">
                    <img src={twitter} alt="twitter" id="twitter" />
                </div>
            </a>
            <a
                href="https://github.com/rcarterjr"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="img">
                    <img src={github} alt="github" id="github" />
                </div>
            </a>
        </div>
    )
}

export default Socials
