import React from 'react'
import './App.css'
import Typing from 'react-typing-animation'
import Socials from './socials'

function App() {
    return (
        <div className="main">
            <Typing>
                <span>Hello friend</span>
                <Typing.Delay ms={3000} />
                <Typing.Backspace count={15} />
                <span>Welcome to RussJr.io</span>
            </Typing>
            <Socials />
        </div>
    )
}

export default App
