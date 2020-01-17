import React from 'react'
import '../App.css'
import Typing from 'react-typing-animation'

function hello() {
  return (
    <Typing>
      <span>Hello friend</span>
      <Typing.Delay ms={3000} />
      <Typing.Backspace count={12} />
      <span>Welcome to RussJr.io</span>
    </Typing>
  )
}

export default hello
