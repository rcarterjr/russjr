import React, { useState } from 'react'
import '../App.css'
import NavItem from './navitem'

const [page, setPage] = useState('/')

// make "HOME" path/link take the place of 
// the page that is currently being viewed
// no one currently links to homepage App

function Nav() {
  return (
    <div className="navbar">
        < NavItem item="About me" link="/aboutme" />
        < NavItem item="Blog" link="/blog"/>
    </div>
  )
}

export default Nav
