import React from 'react';
import '../App.css';
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
// license for social media icons
// https://creativecommons.org/licenses/by/2.5/ 
// original site: https://www.iconfinder.com/iconsets/iconsimple-logotypes

function Socials() {
    return(
        <div className="socials"> 
          <a href="https://linkedin.com/rcarterjr">
            <div className="img">
              <img src={linkedin} alt="linkedin" id="linkedin"/>
            </div>
          </a>
          <a href="https://twitter.com/rcarterjr_">
            <div className="img">
              <img src={twitter} alt="twitter" id="twitter"/>
            </div>
          </a>
          <a href="https://github.com/rcarterjr">
            <div className="img">
              <img src={github} alt="github" id="github"/>
            </div>
          </a>
        </div>
    )
}

export default Socials