import React from 'react'
import '../App.css'
import NavItem from './navitem'


// make "HOME" path/link take the place of 
// the page that is currently being viewed
// no one currently links to homepage App

// keep navbar at top on each page

function Nav() {

  return (
    <div className="navbar">
        < NavItem item="About me" link="/aboutme" />
        < NavItem item="Blog" link="/blog"/>
        < NavItem item="Home" link="/"/>
    </div>
  )
}

export default Nav
