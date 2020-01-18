import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function NavItem(props) {
  return (
    <Link to={props.link}>
      <span className="navitem" id="navitem">{props.item}</span>
    </Link>
  )
}

export default NavItem
