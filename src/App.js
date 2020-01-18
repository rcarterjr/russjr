import React from 'react'
import './App.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import About from './components/about'
import Blog from './components/blog'
import Navbar from './components/navbar'
import Home from './components/home'
import ErrorPage from './components/notfound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>     
          <Route exact path="/"> <Home/> </Route>
          <Route path="/blog"> <Blog /> </Route>
          <Route path="/aboutme"> <About /> </Route>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
